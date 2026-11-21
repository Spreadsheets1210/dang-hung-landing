import test from 'node:test';
import assert from 'node:assert/strict';
import { access } from 'node:fs/promises';
import { brands, products } from '../src/catalog-data.ts';

test('catalog covers the five product families in the capability profile', () => {
  const expected = {
    roger: 'R21/351 BR21/351 BR21/351/HS BR21/362 R20 BE20 MonoS4 Smarty5 Smarty7 H30 BH30 BM30 R30 G30'.split(' '),
    fasla: 'JK-12W FX510 FA206 F7265 F7121'.split(' '),
    homegy: ['BLE Luxury', 'BLE Luxury kính lõm', 'BLE Luxury nhôm phẳng'],
    philips: 'DDL902-MVP-11HWS DDL720-MVP DDL720-FVP DDL801-5HBS DDL611S-5HBS DDL610-5HBS DDL615-5HBS DDL609-5HS DDL709-7HWS 7300 Alpha'.split(' '),
    'am-thanh': ['DS 40F', 'DS 16F', 'FS2P'],
  };

  assert.deepEqual(brands.map(brand => brand.id).sort(), Object.keys(expected).sort());
  for (const [brandId, names] of Object.entries(expected)) {
    assert.deepEqual(
      products.filter(product => product.brandId === brandId).map(product => product.name).sort(),
      [...names].sort(),
      brandId,
    );
  }
  assert.equal(new Set(products.map(product => product.id)).size, products.length);
  assert.ok(products.every(product => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(product.id)));
});

test('catalog media points to actual public files and includes accessible labels', async () => {
  const urls = brands.flatMap(brand => [brand.hero, brand.logo].filter(Boolean));
  for (const product of products) {
    if (product.image) {
      assert.ok(product.imageAlt, product.id);
      urls.push(product.image);
    }
    for (const picture of product.gallery ?? []) {
      assert.ok(picture.alt, product.id);
      urls.push(picture.src);
    }
  }

  await Promise.all([...new Set(urls)].map(async url => {
    assert.ok(url.startsWith('/assets/'), url);
    await access(new URL('../public' + url, import.meta.url));
  }));
});
