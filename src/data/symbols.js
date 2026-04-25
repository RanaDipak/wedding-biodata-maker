export const religiousSymbols = [
  { id: 'none', name: 'None', svg: null },
  {
    id: 'om',
    name: 'Om',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><text x="50" y="72" text-anchor="middle" font-family="'Tiro Devanagari Hindi',serif" font-size="70" fill="#FF6B1A" font-weight="700">ॐ</text></svg>`,
  },
  {
    id: 'ganesh-mantra',
    name: 'Shree Ganeshay',
    svg: `<svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg"><text x="110" y="60" text-anchor="middle" font-family="'Tiro Devanagari Hindi',serif" font-size="34" fill="#B22222" font-weight="700">॥ श्री गणेशाय नमः ॥</text></svg>`,
  },
  {
    id: 'swastik',
    name: 'Swastik',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g fill="#FF6B1A"><rect x="42" y="10" width="16" height="80"/><rect x="10" y="42" width="80" height="16"/><rect x="10" y="10" width="32" height="16"/><rect x="58" y="10" width="32" height="16"/><rect x="10" y="74" width="32" height="16"/><rect x="58" y="74" width="32" height="16"/></g></svg>`,
  },
  {
    id: 'allah',
    name: 'Allah',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="46" fill="#0d6b4f"/><text x="50" y="68" text-anchor="middle" font-family="Arial,sans-serif" font-size="46" fill="#fff" font-weight="700">الله</text></svg>`,
  },
  {
    id: 'crescent',
    name: 'Star & Crescent',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><text x="50" y="78" text-anchor="middle" font-size="82" fill="#1f9d55">☪</text></svg>`,
  },
  {
    id: 'cross',
    name: 'Cross',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g fill="#7a4a1a"><rect x="44" y="10" width="12" height="80" rx="2"/><rect x="22" y="30" width="56" height="12" rx="2"/></g></svg>`,
  },
  {
    id: 'cross-gold',
    name: 'Gold Cross',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#f4c76e"/><stop offset="1" stop-color="#b8860b"/></linearGradient></defs><g fill="url(#g)" stroke="#7a5a1a" stroke-width="1.2"><rect x="42" y="8" width="16" height="84" rx="3"/><rect x="20" y="28" width="60" height="16" rx="3"/></g></svg>`,
  },
  {
    id: 'khanda',
    name: 'Khanda',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><text x="50" y="78" text-anchor="middle" font-size="86" fill="#e6a41a">☬</text></svg>`,
  },
  {
    id: 'dharma-wheel',
    name: 'Dharma Wheel',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g stroke="#a67c1a" stroke-width="3" fill="#f2c352"><circle cx="50" cy="50" r="36"/><circle cx="50" cy="50" r="8" fill="#a67c1a"/></g><g stroke="#7a5a14" stroke-width="3"><line x1="50" y1="14" x2="50" y2="86"/><line x1="14" y1="50" x2="86" y2="50"/><line x1="24" y1="24" x2="76" y2="76"/><line x1="76" y1="24" x2="24" y2="76"/></g></svg>`,
  },
  {
    id: 'dharma-wheel-brown',
    name: 'Dharma Wheel (Brown)',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g stroke="#4a2a14" stroke-width="3" fill="#5a361a"><circle cx="50" cy="50" r="36"/><circle cx="50" cy="50" r="8" fill="#2a1508"/></g><g stroke="#2a1508" stroke-width="4"><line x1="50" y1="14" x2="50" y2="86"/><line x1="14" y1="50" x2="86" y2="50"/><line x1="24" y1="24" x2="76" y2="76"/><line x1="76" y1="24" x2="24" y2="76"/></g></svg>`,
  },
  {
    id: 'star-david',
    name: 'Star of David',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><text x="50" y="78" text-anchor="middle" font-size="82" fill="#0040a0">✡</text></svg>`,
  },
  {
    id: 'ek-onkar',
    name: 'Ek Onkar',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><text x="50" y="72" text-anchor="middle" font-family="'Tiro Devanagari Hindi',serif" font-size="62" fill="#c66a1a" font-weight="700">ੴ</text></svg>`,
  },
]

export function getSymbol(id) {
  return religiousSymbols.find((x) => x.id === id) || religiousSymbols[0]
}
