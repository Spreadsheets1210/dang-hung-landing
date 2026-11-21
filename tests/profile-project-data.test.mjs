import test from 'node:test';
import assert from 'node:assert/strict';
import { access } from 'node:fs/promises';
import { companyContact, companyProfile, companyProcess, companyServices } from '../src/profile-data.ts';
import { projects } from '../src/project-data.ts';

test('company profile reflects legal entity, differentiators, all services and full process', () => {
  assert.equal(companyProfile.name, 'Đăng Hưng Technology');
  assert.equal(companyProfile.legalName, 'Công ty TNHH Công nghệ số Platinum');
  assert.ok(companyProfile.introduction.length >= 2);
  assert.ok(companyProfile.vision);
  assert.ok(companyProfile.mission);
  assert.ok(companyProfile.values.length >= 5);
  assert.ok(companyProfile.facts.some(fact => fact.label === 'Mã số doanh nghiệp'));
  assert.ok(companyProfile.credentials.some(item => /Roger Technology/i.test(item.title)));
  assert.ok(companyProfile.credentials.some(item => /Homegy/i.test(item.title)));
  assert.equal(companyServices.filter(service => service.kind === 'core').length, 5);
  assert.equal(companyServices.filter(service => service.kind === 'supplementary').length, 5);
  assert.equal(companyProcess.length, 6);
  assert.equal(companyContact.phoneHref, 'tel:0816663666');
  assert.ok(companyContact.email.includes('@'));
});

test('all 19 brochure projects retain complete item and photo galleries with valid source references', async () => {
  assert.equal(projects.length, 19);
  assert.equal(new Set(projects.map(project => project.id)).size, 19);
  assert.deepEqual(projects.map(project => project.page).sort((a, b) => a - b),
    Array.from({ length: 19 }, (_, i) => i + 16));
  assert.ok(projects.every(project =>
    project.name &&
    Array.isArray(project.items) && project.items.length > 0 &&
    Array.isArray(project.images) && project.images.length >= 1 &&
    project.images.every(image => image.alt && image.src.startsWith('/assets/projects/'))
  ));
  // Page 34 has one photograph plus a blurred duplicate background. Keep the
  // actual photo once; the counts below reflect visually distinct source art.
  assert.deepEqual(projects.map(project => project.images.length),
    [3, 5, 7, 7, 6, 5, 8, 5, 4, 2, 2, 6, 5, 7, 4, 6, 4, 3, 1]);
  assert.equal(projects.reduce((sum, project) => sum + project.items.length, 0), 93);
  const urls = projects.flatMap(project => project.images.map(image => image.src));
  await Promise.all([...new Set(urls)].map(url => access(new URL('../public' + url, import.meta.url))));
});
