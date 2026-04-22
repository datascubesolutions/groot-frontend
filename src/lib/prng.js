/**
 * Deterministic pseudo-random generator (mulberry32).
 * Use instead of Math.random() in render/useMemo to satisfy react-hooks/purity.
 *
 * @param {number} seed
 * @returns {() => number} Function returning values in [0, 1)
 */
export function createMulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a += 0x6d2b79f5;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
