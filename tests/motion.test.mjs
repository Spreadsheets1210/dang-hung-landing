import test from 'node:test';
import assert from 'node:assert/strict';

test('gallery motion exists and keeps offsets inside the seamless strip in both directions', async () => {
  const mod = await import('../src/motion.ts').catch(() => null);
  assert.ok(mod, 'Gallery motion implementation is missing');
  assert.equal(mod.wrapOffset(-2300, 1000), -300);
  assert.equal(mod.wrapOffset(2300, 1000), -700);
  assert.equal(mod.wrapOffset(-1000, 1000), 0);
  assert.equal(mod.wrapOffset(-20, 0), 0);
});

test('autoscroll covers equal distance at 60Hz and 120Hz', async () => {
  const mod = await import('../src/motion.ts').catch(() => null);
  assert.ok(mod, 'Gallery motion implementation is missing');
  let a = -100, b = -100;
  for (let i=0;i<60;i++) a = mod.advanceMotion(a, 0, 1000/60, 1000).offset;
  for (let i=0;i<120;i++) b = mod.advanceMotion(b, 0, 1000/120, 1000).offset;
  assert.ok(Math.abs(a-b)<0.001);
});

test('paused motion stays stationary and long background frame gaps are bounded', async () => {
  const mod = await import('../src/motion.ts').catch(() => null);
  assert.ok(mod, 'Gallery motion implementation is missing');
  assert.deepEqual(mod.advanceMotion(-120, 0.7, 16, 1000, true), {offset:-120, velocity:0});
  const next = mod.advanceMotion(-100, 0, 60000, 1000);
  assert.ok(Math.abs(next.offset+100)<5);
});
