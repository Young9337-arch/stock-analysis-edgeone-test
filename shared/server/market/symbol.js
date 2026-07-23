function normalizeSymbol(value) {
  const code = String(value || '').trim()
  if (!/^\d{6}$/.test(code)) return null
  if (/^(6|688|900)/.test(code)) return { code, upstream: `sh${code}`, market: 'SH' }
  if (/^(0|2|3)/.test(code)) return { code, upstream: `sz${code}`, market: 'SZ' }
  if (/^(4|8)/.test(code)) return { code, upstream: `bj${code}`, market: 'BJ' }
  return null
}
module.exports = { normalizeSymbol }
