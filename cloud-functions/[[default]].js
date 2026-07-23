// Keep this as a static import. EdgeOne bundles the function entry into one
// module, so runtime createRequire-relative paths are not preserved.
import routerModule from './shared/server/server/core/router.js'
const { route } = routerModule

// Root catch-all keeps /health, /ready and /api/* on the same Node handler.
export default async function onRequest(context){
  const request=context?.request||context
  const result=await route({method:request.method,url:request.url,requestId:context?.requestId||request.headers?.get?.('x-request-id')||'',clientIp:context?.clientIp||'',region:context?.region||''})
  const headers=new Headers({'content-type':'application/json; charset=utf-8','access-control-allow-origin':'*','access-control-allow-methods':'GET, OPTIONS',...result.headers})
  return new Response(result.body?JSON.stringify(result.body):null,{status:result.status,headers})
}
