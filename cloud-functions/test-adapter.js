import handler from './[[default]].js'
const r=await handler({request:new Request('http://local/health'),requestId:'h0-test'})
if(r.status!==200||(await r.json()).success!==true)throw Error('adapter health failed')
console.log('edgeone adapter contract passed')
