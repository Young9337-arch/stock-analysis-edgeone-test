import { createRequire } from 'node:module'
const require=createRequire(import.meta.url)
const { route }=require('../../shared/server/core/router')

// Official Makers Node.js handler shape: export default function(context).
export default async function onRequest(context){
  const request=context?.request||context
  const result=await route({method:request.method,url:request.url,requestId:context?.requestId||request.headers?.get?.('x-request-id')||'',clientIp:context?.clientIp||'',region:context?.region||''})
  const headers=new Headers({'content-type':'application/json; charset=utf-8','access-control-allow-origin':'*','access-control-allow-methods':'GET, OPTIONS',...result.headers})
  return new Response(result.body?JSON.stringify(result.body):null,{status:result.status,headers})
}
