import{H as d,a as u,x as f}from"./aggregate-base-qKu3xh5F.js";import{r as l,l as h,o as c,U as m,w as H,L as v}from"./index-OHSn3qVt.js";import{a as p}from"./session-entity-LOi5uUd5.js";if(l){h.cleanupTasks=[];const n=h.close;h.close=()=>{for(let t of h.cleanupTasks)t();n()}}function b(n){c?(m(n,!0),H("pagehide",n)):l&&h.cleanupTasks.push(n)}class T extends v{constructor(t,e,i){var r;super(i),this.endpoint=t,this.opts=e||{},this.started=!1,this.timeoutHandle=null,this.aborted=!1,this.harvest=new d(this.sharedContext),b(this.unload.bind(this)),(r=this.sharedContext)==null||r.ee.on(p.RESET,()=>this.runHarvest({forceNoRetry:!0}))}unload(){this.aborted||(this.opts.onUnload&&this.opts.onUnload(),this.runHarvest({unload:!0}))}startTimer(t,e){this.interval=t,this.started=!0,this.scheduleHarvest(e??this.interval)}stopTimer(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;this.aborted=t,this.started=!1,this.timeoutHandle&&clearTimeout(this.timeoutHandle)}scheduleHarvest(t,e){this.timeoutHandle||(t==null&&(t=this.interval),this.timeoutHandle=setTimeout(()=>{this.timeoutHandle=null,this.runHarvest(e)},t*1e3))}runHarvest(t){if(this.aborted)return;const e=s=>{t!=null&&t.forceNoRetry&&(s.retry=!1),this.onHarvestFinished(t,s)};let i=[],r,a;if(this.opts.getPayload){if(r=u({isFinalHarvest:t==null?void 0:t.unload}),!r)return!1;const s=!(t!=null&&t.unload)&&r===f;if(a=this.opts.getPayload({retry:s}),!a){this.started&&this.scheduleHarvest();return}a=Object.prototype.toString.call(a)==="[object Array]"?a:[a],i.push(...a)}let o=s=>this.harvest.sendX(s);i.length?this.opts.raw?o=s=>this.harvest._send(s):o=s=>this.harvest.send(s):i.push(void 0),i.forEach(s=>{o({endpoint:this.endpoint,payload:s,opts:t,submitMethod:r,cbFinished:e,customUrl:this.opts.customUrl,raw:this.opts.raw})}),this.started&&this.scheduleHarvest()}onHarvestFinished(t,e){if(this.opts.onFinished&&this.opts.onFinished(e),e.sent&&e.retry){const i=e.delay||this.opts.retryDelay;this.started&&i?(clearTimeout(this.timeoutHandle),this.timeoutHandle=null,this.scheduleHarvest(i,t)):!this.started&&i&&this.scheduleHarvest(i,t)}}}export{T as H,b as s};
