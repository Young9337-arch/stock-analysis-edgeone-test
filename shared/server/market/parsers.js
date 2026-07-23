function numberAt(parts, index) { const n = Number(parts[index]); return Number.isFinite(n) ? n : null }
function parseTencentQuote(raw, symbol) {
  const body = String(raw).replace(/^\s*[^="]*=?\s*"?/, '').replace(/"?;?\s*$/, '')
  const p = body.split('~')
  if (p.length < 48 || !p[1]) throw new Error('UPSTREAM_EMPTY')
  const price = numberAt(p, 3), previousClose = numberAt(p, 4)
  if (price === null || previousClose === null) throw new Error('UPSTREAM_INVALID')
  const high = numberAt(p, 33), low = numberAt(p, 34)
  const book=[];for(let i=0;i<5;i++)book.push({side:'bid',level:i+1,price:numberAt(p,9+i*2),volume:numberAt(p,10+i*2)});for(let i=0;i<5;i++)book.push({side:'ask',level:i+1,price:numberAt(p,19+i*2),volume:numberAt(p,20+i*2)});
  return { symbol: symbol.code, market: symbol.market, name: p[1], price, previousClose, open:numberAt(p,5), high, low, change:price-previousClose, changePercent:(price-previousClose)/previousClose*100, volume:numberAt(p,6), amount:(numberAt(p,37) || 0)*10000, amplitude:high !== null && low !== null ? (high-low)/previousClose*100 : null, turnoverRate:numberAt(p,38), quoteTime:p[30] || '', book }
}
module.exports = { parseTencentQuote }
