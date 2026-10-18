// Simple colour mixing: average of RGB components
export function mixColors(color1: string, color2: string): string {
  const parseHex = (hex: string) => {
    let h = hex.replace('#', '');
    if (h.length === 3) {
      h = h.split('').map(c => c + c).join('');
    }
    const num = parseInt(h, 16);
    return {
      r: (num >> 16) & 0xff,
      g: (num >> 8) & 0xff,
      b: num & 0xff
    };
  };

  const { r: r1, g: g1, b: b1 } = parseHex(color1);
  const { r: r2, g: g2, b: b2 } = parseHex(color2);

  const r = Math.round((r1 + r2) / 2);
  const g = Math.round((g1 + g2) / 2);
  const b = Math.round((b1 + b2) / 2);

  const toHex = (n: number) => n.toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
