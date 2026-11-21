import assert from 'node:assert/strict';
import { chromium } from 'playwright';

const siteUrl = process.env.SITE_URL || 'http://127.0.0.1:4173';
const browser = await chromium.launch({
  channel: process.env.PLAYWRIGHT_CHANNEL || 'chrome',
  headless: true,
});
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
page.setDefaultTimeout(5000);

async function checkContrast(label, selectors) {
  const results = await page.evaluate(selectors => {
    function parseColor(color) {
      return color.match(/[\d.]+/g).map(Number);
    }

    function luminance(rgb) {
      const linear = rgb.slice(0, 3).map(channel => {
        const value = channel / 255;
        return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
      });
      return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
    }

    function mix(foreground, background) {
      const opacity = foreground[3] ?? 1;
      return background.map((channel, index) => foreground[index] * opacity + channel * (1 - opacity));
    }

    function backgroundAt(element) {
      const layers = [];
      for (let ancestor = element; ancestor; ancestor = ancestor.parentElement) {
        const style = getComputedStyle(ancestor);
        if (style.backgroundImage !== 'none') return null;
        const color = parseColor(style.backgroundColor);
        layers.push(color);
        if ((color[3] ?? 1) === 1) break;
      }
      return layers.reverse().reduce((background, color) => mix(color, background), [255, 255, 255]);
    }

    return selectors.map(selector => {
      const samples = [...document.querySelectorAll(selector)].flatMap(element => {
        const style = getComputedStyle(element);
        if (!element.getClientRects().length || style.visibility !== 'visible' || !element.textContent.trim()) return [];
        const background = backgroundAt(element);
        if (!background) return [];
        const text = luminance(mix(parseColor(style.color), background));
        const base = luminance(background);
        const ratio = (Math.max(text, base) + 0.05) / (Math.min(text, base) + 0.05);
        const fontSize = parseFloat(style.fontSize);
        const largeText = fontSize >= 24 || (fontSize >= 18.67 && parseInt(style.fontWeight, 10) >= 700);
        return [{ ratio, minimum: largeText ? 3 : 4.5, text: element.textContent.trim().replace(/\s+/g, ' ').slice(0, 65) }];
      });
      return { selector, samples };
    });
  }, selectors);

  for (const { selector, samples } of results) {
    assert.ok(samples.length, label + ': no visible solid-background text found for ' + selector);
    for (const { ratio, minimum, text } of samples) {
      assert.ok(ratio >= minimum, label + ': "' + text + '" is ' + ratio.toFixed(2) + ':1 (minimum ' + minimum + ':1)');
    }
    console.log('PASS ' + label + ' ' + selector + ': ' + Math.min(...samples.map(sample => sample.ratio)).toFixed(2) + ':1 or higher');
  }
}

try {
  await page.goto(new URL('#', siteUrl).href, { waitUntil: 'domcontentloaded' });
  await page.locator('.home-about').waitFor();
  await checkContrast('home profile', ['.home-about-copy > p', '.proof-items span', '.home-capability-grid p']);
  await page.goto(new URL('#ve-chung-toi', siteUrl).href, { waitUntil: 'domcontentloaded' });
  await page.locator('.company-page').waitFor();
  await checkContrast('company', ['.service-card p', '.service-card li', '.company-letter p', '.company-values-grid p', '.company-facts dt', '.process-step p']);
  await page.goto(new URL('#cong-trinh/chi-thuan', siteUrl).href, { waitUntil: 'domcontentloaded' });
  await page.locator('.project-scope').waitFor();
  await checkContrast('project', ['.project-scope li', '.project-detail .source-note', '.project-detail .project-location']);
  await page.goto(new URL('#san-pham', siteUrl).href, { waitUntil: 'domcontentloaded' });
  await page.locator('.product-card').first().waitFor();
  await checkContrast('catalog', ['.product-label h3', '.product-label p', '.filters button', '.catalog-count', 'footer a']);
  const detail = await page.locator('.product-card').first().getAttribute('href');
  await page.goto(new URL(detail, siteUrl).href, { waitUntil: 'domcontentloaded' });
  await page.locator('.detail h1').waitFor();
  await checkContrast('product detail', ['.detail h1', '.detail-category', '.breadcrumbs a', 'main a[href^="tel:"]']);
} finally {
  await browser.close();
}
