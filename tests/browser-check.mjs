import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import { projects } from '../src/project-data.ts';

const siteUrl = process.env.SITE_URL || 'http://127.0.0.1:4173';
const browser = await chromium.launch({
  channel: process.env.PLAYWRIGHT_CHANNEL || 'chrome',
  headless: true,
});
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
page.setDefaultTimeout(5000);

const errors = [];
page.on('pageerror', error => errors.push(error.message));
page.on('response', response => {
  if (response.status() >= 400) errors.push(response.status() + ' ' + response.url());
});
page.on('requestfailed', request => {
  const reason = request.failure()?.errorText;
  if (reason !== 'net::ERR_ABORTED') errors.push(reason + ' ' + request.url());
});

const brandSlugs = ['fasla', 'roger', 'homegy', 'philips', 'am-thanh'];
const cards = page.locator('.product-card:visible');
const searchButton = page.getByRole('button', { name: 'Tìm sản phẩm', exact: true }).filter({ visible: true }).first();

function navigate(hash = '') {
  return page.goto(new URL(hash, siteUrl).href, { waitUntil: 'domcontentloaded' });
}

async function verifyImages() {
  const images = await page.evaluate(async () => {
    const visibleImages = [...document.images].filter(image => image.getClientRects().length);
    await Promise.all(visibleImages.map(image => {
      image.loading = 'eager';
      return image.decode().catch(() => {});
    }));
    return {
      count: visibleImages.length,
      broken: visibleImages.filter(image => !image.naturalWidth).map(image => image.currentSrc || image.src),
      missingAlt: visibleImages.filter(image => !image.hasAttribute('alt')).map(image => image.currentSrc || image.src),
    };
  });
  assert.ok(images.count > 0, 'The page shows product or project imagery');
  assert.deepEqual(images.broken, [], 'Every visible image decodes');
  assert.deepEqual(images.missingAlt, [], 'Visible images have an alt attribute');
}

async function verifyLayout(width) {
  await page.evaluate(() => document.fonts.ready);
  assert.equal(await page.locator('h1:visible').count(), 1, 'One visible page title');
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, 'Horizontal overflow at ' + width + 'px');
}

async function verifyDialog(button, dialog) {
  await button.focus();
  await page.keyboard.press('Enter');
  await dialog.waitFor({ state: 'visible' });
  assert.equal(await dialog.evaluate(element => element.contains(document.activeElement)), true, 'Focus enters the dialog');
  await page.keyboard.press('Escape');
  await dialog.waitFor({ state: 'hidden' });
  await button.evaluate(async element => {
    for (let frame = 0; document.activeElement !== element && frame < 5; frame += 1) {
      await new Promise(requestAnimationFrame);
    }
  });
  assert.equal(await button.evaluate(element => element === document.activeElement), true, 'Closing the dialog returns focus to its trigger');
}

async function waitForHash(hash) {
  await page.waitForURL(url => url.hash === hash);
}

async function verifyPrimaryNavigation(container) {
  for (const [label, hash] of [['Giới thiệu', '#ve-chung-toi'], ['Công trình', '#cong-trinh'], ['Sản phẩm', '#san-pham']]) {
    const link = container.getByRole('link', { name: label, exact: true });
    assert.ok(await link.count(), 'Navigation includes ' + label);
    assert.equal(await link.first().isVisible(), true, label + ' is visible in navigation');
    assert.equal(await link.first().getAttribute('href'), hash, label + ' points to its page');
  }
}

async function verifyHomeEditorial() {
  await navigate();
  await page.getByRole('heading', { level: 1 }).waitFor();
  const overview = page.locator('main .portfolio-hero');
  assert.equal(await overview.count(), 1, 'Homepage has a full-width editorial hero');
  assert.ok(await page.locator('main .home-about').count(), 'Homepage includes a brand/company overview');
  assert.match(await page.locator('main .home-about').innerText(), /Công ty TNHH Công nghệ số Platinum/i, 'Homepage overview identifies the company');
  const preview = page.locator('#cong-trinh-noi-bat');
  await preview.waitFor();
  const previewLinks = preview.locator('a[href^="#cong-trinh/"]');
  assert.equal(await previewLinks.count(), 4, 'Homepage previews four linked projects');
  for (const href of await previewLinks.evaluateAll(links => links.map(link => link.getAttribute('href')))) {
    assert.match(href, /^#cong-trinh\/[a-z0-9-]+$/, 'Project preview has a direct detail route');
  }
}

async function verifyProjects() {
  await navigate('#cong-trinh');
  await page.getByRole('heading', { level: 1, name: 'Công trình thực tế', exact: true }).waitFor();
  const projectCards = page.locator('.project-card');
  assert.equal(await projectCards.count(), 19, 'Projects page lists all 19 projects');
  for (const href of await projectCards.evaluateAll(cards => cards.map(card => card.getAttribute('href')))) {
    assert.match(href, /^#cong-trinh\/[a-z0-9-]+$/, 'Every project card links to a shareable detail route');
  }
  await verifyImages();

  const card = projectCards.first();
  const detailHash = await card.getAttribute('href');
  const expectedProject = projects.find(project => '#cong-trinh/' + project.id === detailHash);
  assert.ok(expectedProject, 'Project card points to a project in the profile');
  const projectName = await card.getByRole('heading').innerText();
  await card.click();
  await waitForHash(detailHash);
  await page.getByRole('heading', { level: 1, name: projectName, exact: true }).waitFor();
  assert.equal(await page.getByRole('navigation', { name: 'Đường dẫn', exact: true }).isVisible(), true, 'Project details expose breadcrumbs');

  const itemList = page.locator('.project-detail ol');
  await itemList.waitFor();
  assert.deepEqual(await itemList.locator('li').allTextContents(), expectedProject.items, 'Project detail retains its complete installed-item list');
  const gallery = page.locator('.project-gallery');
  await gallery.waitFor();
  const thumbnails = gallery.getByRole('button');
  assert.equal(await thumbnails.count(), expectedProject.images.length, 'Project gallery exposes every photo from its profile page');
  assert.equal(await thumbnails.evaluateAll(buttons => buttons.every(button => button.hasAttribute('aria-label') && button.hasAttribute('aria-pressed'))), true, 'Gallery controls have accessible names and selected state');
  assert.ok(await gallery.locator('img').count() > 0, 'Project detail includes gallery images');
  await verifyImages();

  if (await thumbnails.count() > 1) {
    const before = await gallery.locator('img').first().getAttribute('src');
    await thumbnails.nth(1).click();
    assert.equal(await thumbnails.nth(1).getAttribute('aria-pressed'), 'true', 'Selecting a gallery thumbnail updates its selected state');
    assert.notEqual(await gallery.locator('img').first().getAttribute('src'), before, 'Selecting a thumbnail updates the main project image');
  }

  await page.goBack();
  await waitForHash('#cong-trinh');
  assert.equal(await projectCards.count(), 19, 'Back returns to the full project list');
  await navigate(detailHash);
  await page.reload({ waitUntil: 'domcontentloaded' });
  await page.getByRole('heading', { level: 1, name: projectName, exact: true }).waitFor();

  for (const project of projects.filter(project => project.id !== expectedProject.id)) {
    await navigate('#cong-trinh/' + project.id);
    await page.getByRole('heading', { level: 1, name: project.name.replace(/^DỰ ÁN\s+/i, ''), exact: true }).waitFor();
    assert.deepEqual(await page.locator('.project-detail ol li').allTextContents(), project.items, project.id + ' retains all installed items');
    assert.equal(await page.locator('.project-gallery button').count(), project.images.length, project.id + ' retains all gallery photos');
    await verifyImages();
  }
}

async function verifyAbout() {
  await navigate('#ve-chung-toi');
  const main = page.getByRole('main');
  await main.getByRole('heading', { level: 1, name: /đăng hưng technology/i }).waitFor();
  const text = await main.innerText();
  for (const [label, expression] of [
    ['legal company name', /Công ty TNHH Công nghệ số Platinum/i],
    ['mission', /sứ mệnh/i],
    ['core values', /giá trị cốt lõi/i],
    ['credentials', /chứng chỉ|năng lực/i],
  ]) {
    assert.match(text, expression, 'About page includes the ' + label);
  }
  assert.equal(await main.locator('.service-card').count(), 10, 'About page presents all 10 service cards');
  assert.equal(await main.locator('.process-step').count(), 6, 'About page presents the six-step project process');
  await verifyImages();
}

try {
  for (const width of [390, 768, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await navigate();
    await verifyLayout(width);

    const openMenu = page.getByRole('button', { name: 'Menu', exact: true });
    if (width === 390 || await openMenu.isVisible()) {
      const menu = page.getByRole('dialog');
      await verifyDialog(openMenu, menu);
      await openMenu.click();
      await verifyPrimaryNavigation(menu);
      for (const brand of brandSlugs) {
        assert.ok(await menu.locator('a[href="#thuong-hieu/' + brand + '"]').count(), 'Menu includes ' + brand);
      }
      await menu.locator('a[href="#thuong-hieu/fasla"]').first().click();
      await waitForHash('#thuong-hieu/fasla');
      await menu.waitFor({ state: 'hidden' });
      await page.getByRole('heading', { level: 1, name: /fasla/i }).waitFor();
    } else {
      await verifyPrimaryNavigation(page.getByRole('navigation', { name: 'Điều hướng chính', exact: true }));
      for (const brand of brandSlugs) {
        assert.ok(await page.locator('header a[href="#thuong-hieu/' + brand + '"]').count(), 'Desktop navigation includes ' + brand);
      }
    }

    await navigate('#san-pham');
    await cards.first().waitFor({ state: 'visible' });
    await verifyLayout(width);
    assert.ok(await cards.count() > 1, 'The catalog shows multiple products');

    await navigate('#cong-trinh');
    await page.getByRole('heading', { level: 1, name: 'Công trình thực tế', exact: true }).waitFor();
    await verifyLayout(width);
    assert.equal(await page.locator('.project-card').count(), 19, 'All projects remain available at ' + width + 'px');
    await navigate('#ve-chung-toi');
    await page.getByRole('heading', { level: 1, name: /đăng hưng technology/i }).waitFor();
    await verifyLayout(width);
    console.log('PASS ' + width + 'px: navigation, catalog, projects and company profile layout');
  }

  await verifyHomeEditorial();
  await verifyProjects();
  await verifyAbout();

  await navigate('#san-pham');
  await cards.first().waitFor({ state: 'visible' });
  const filters = page.getByRole('group', { name: 'Lọc theo thương hiệu' });
  const allFilter = filters.getByRole('button', { name: 'Tất cả', exact: true });
  assert.equal(await allFilter.getAttribute('aria-pressed'), 'true', 'The complete catalog is initially selected');
  const initialCards = await cards.count();
  const otherFilter = filters.locator('button[aria-pressed="false"]').first();
  await otherFilter.click();
  await page.waitForFunction(count => {
    const visible = [...document.querySelectorAll('.product-card')].filter(card => card.getClientRects().length);
    return visible.length > 0 && visible.length < count;
  }, initialCards);
  assert.equal(await allFilter.getAttribute('aria-pressed'), 'false');
  assert.equal(await filters.locator('button[aria-pressed="true"]').count(), 1, 'Only one category is selected');
  await allFilter.click();
  await page.waitForFunction(count => {
    return [...document.querySelectorAll('.product-card')].filter(card => card.getClientRects().length).length === count;
  }, initialCards);
  assert.equal(await cards.count(), initialCards, 'Resetting the filter restores every product');

  const firstCard = cards.first();
  const cardHeading = firstCard.getByRole('heading');
  const expectedName = await cardHeading.innerText();
  const detailHash = await firstCard.getAttribute('href');
  assert.match(detailHash, /^#san-pham\/[a-z0-9-]+$/, 'Product cards connect to a shareable detail view');
  await verifyImages();
  await firstCard.focus();
  await page.keyboard.press('Enter');
  await waitForHash(detailHash);
  const detailHeading = page.getByRole('heading', { name: expectedName, level: 1, exact: true });
  await detailHeading.waitFor();
  assert.equal(await page.getByRole('navigation', { name: /đường dẫn/i }).isVisible(), true, 'Product details expose breadcrumbs');
  const contact = page.getByRole('main').getByRole('link', { name: /liên hệ|tư vấn|báo giá/i }).first();
  await contact.waitFor();
  assert.match(await contact.getAttribute('href'), /^(?:#lien-he|tel:|mailto:)/);
  await verifyImages();
  await page.goBack();
  await waitForHash('#san-pham');
  await firstCard.waitFor();
  await navigate(detailHash);
  await page.reload({ waitUntil: 'domcontentloaded' });
  await detailHeading.waitFor();

  await navigate();
  await verifyDialog(searchButton, page.getByRole('dialog'));
  await searchButton.click();
  const searchDialog = page.getByRole('dialog');
  const searchField = searchDialog.getByRole('searchbox').or(searchDialog.getByRole('textbox'));
  await searchField.fill(expectedName);
  const result = searchDialog.locator('a[href="' + detailHash + '"]').first();
  await result.waitFor();
  await result.click();
  await waitForHash(detailHash);
  await searchDialog.waitFor({ state: 'hidden' });
  await detailHeading.waitFor();

  await navigate();
  assert.ok(await page.locator('a[href="tel:0816663666"]').count(), 'Company phone number is actionable');
  assert.ok(await page.locator('a[href^="mailto:cns.platinum@gmail.com"]').count(), 'Company email is actionable');
  await verifyImages();
  assert.deepEqual(errors, [], 'No page or network errors');
  console.log('PASS: home overview and project previews, project listing/details/gallery, company profile/services, filters, product details, direct links, Back, search, focus, images and contacts');
} finally {
  await browser.close();
}
