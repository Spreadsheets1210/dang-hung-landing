/** Keep a duplicated image strip inside its first full cycle, even after a long drag. */
export function wrapOffset(offset: number, width: number): number {
  if (width <= 0) return 0;
  const remainder = offset % width;
  return remainder > 0 ? remainder - width : remainder === 0 ? 0 : remainder;
}

/** Time-based rather than frame-based motion keeps the same speed on every display. */
export function advanceMotion(offset: number, velocity: number, elapsedMs: number, width: number, paused = false) {
  if (paused) return { offset, velocity: 0 };
  const dt = Math.min(Math.max(elapsedMs, 0), 48);
  const coasting = Math.abs(velocity) > 0.015;
  return {
    offset: wrapOffset(offset + (coasting ? velocity : -0.048) * dt, width),
    velocity: coasting ? velocity * Math.pow(0.95, dt / (1000 / 60)) : 0,
  };
}
