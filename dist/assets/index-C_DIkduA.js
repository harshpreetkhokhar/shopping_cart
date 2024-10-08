var Ft=Object.defineProperty;var Lt=(l,r,u)=>r in l?Ft(l,r,{enumerable:!0,configurable:!0,writable:!0,value:u}):l[r]=u;var ct=(l,r,u)=>(Lt(l,typeof r!="symbol"?r+"":r,u),u);import{K as Ct,c as It,g as nt,m as st,b as at,L as bt,k as tt,d as c,M as ut,N as Rt,J as Pt,O as ht,P as St,h as kt,F as lt,S as At,Q as yt}from"./index-OHSn3qVt.js";import{a as ft}from"./deny-list-FANH1bjH.js";import{n as Ut}from"./nav-timing-PjPsh6mT.js";import{H as _t}from"./harvest-scheduler-EBVDVRQb.js";import{c as et,A as jt}from"./aggregate-base-qKu3xh5F.js";import{g as dt,n as v,a as b,b as mt}from"./bel-serializer-niGkXPI7.js";import{f as wt,a as Ot}from"./first-paint-bkOYs_bp.js";import"./session-entity-LOi5uUd5.js";import"./invoke-yZTpZaXg.js";var Ht=128,Mt=0;function ot(l,r,u,t){Object.defineProperty(this,"interaction",{value:l,writable:!0}),this.parent=r,this.id=++Mt,this.type=u,this.children=[],this.end=null,this.jsEnd=this.start=t,this.jsTime=0,this.attrs={},this.cancelled=!1}var Q=ot.prototype;Q.child=function(r,u,t,g){var o=this.interaction;if(o.end||o.nodes>=Ht)return null;o.onNodeAdded(this);var s=new ot(o,this,r,u);return s.attrs.name=t,o.nodes++,g||o.remaining++,s};Q.callback=function(r,u){var t=this;t.jsTime+=r,u>t.jsEnd&&(t.jsEnd=u,t.interaction.lastCb=u)};Q.cancel=function(){this.cancelled=!0;var r=this.interaction;r.remaining--};Q.finish=function(r){var u=this;if(u.end)return;u.end=r;let t=u.parent;for(;t!=null&&t.cancelled;)t=t.parent;t&&t.children.push(u),u.parent=null;var g=this.interaction;g.remaining--,g.lastFinish=r,g.checkFinish()};var Nt=Ct.ST,zt=Ct.CT,vt={};function K(l,r,u,t,g,o){this.agentIdentifier=o,this.ee=It.get(o),vt[o]=0,this.id=++vt[o],this.eventName=l,this.nodes=0,this.remaining=0,this.finishTimer=null,this.checkingFinish=!1,this.lastCb=this.lastFinish=r,this.handlers=[],this.onFinished=g,this.done=!1;var s=this.root=new ot(this,null,"interaction",r),d=s.attrs;d.trigger=l,d.initialPageURL=nt(o).origin,d.oldRoute=t,d.newURL=d.oldURL=u,d.custom={},d.store={}}var w=K.prototype;w.checkFinish=function(){var r=this;if(r.remaining>0){r._resetFinishCheck();return}r.checkingFinish||r.root.end===null&&(r._resetFinishCheck(),r.checkingFinish=!0,r.finishTimer=Nt(()=>{r.checkingFinish=!1,r.finishTimer=Nt(()=>{r.finishTimer=null,r.remaining<=0&&r.finish()},1)},0))};w.setNewURL=function(r){this.root.attrs.newURL=r};w.setNewRoute=function(r){this.root.attrs.newRoute=r};w.onNodeAdded=function(){this._resetFinishCheck()};w._resetFinishCheck=function(){this.finishTimer&&(zt(this.finishTimer),this.finishTimer=null,this.checkingFinish=!1)};w.finish=function(){var r=this,u=r.root;if(u.end===null){var t=Math.max(r.lastCb,r.lastFinish),g=u.attrs,o=g.custom;this.onFinished&&this.onFinished(this),st(at(r.agentIdentifier).jsAttributes,function(s,d){s in o||(o[s]=d)}),u.end=t,r.ee.emit("interaction",[this])}};class Bt extends bt{constructor(r){super(r),this.firstTimestamp=void 0}serializeMultiple(r,u,t){const g=at(this.sharedContext.agentIdentifier);var o=dt(this.sharedContext.agentIdentifier),s="bel.7";return r.forEach(d=>{s+=";"+this.serializeInteraction(d.root,u,t,d.routeChange,o,g)}),this.firstTimestamp=void 0,s}serializeSingle(r,u,t,g){const o=at(this.sharedContext.agentIdentifier);var s=dt(this.sharedContext.agentIdentifier),d="bel.7;"+this.serializeInteraction(r,u,t,g,s,o);return this.firstTimestamp=void 0,d}serializeInteraction(r,u,t,g,o,s){u=u||0;var d=r.attrs.trigger==="initialPageLoad",P={interaction:1,ajax:2,customTracer:4},O=!0;const D=(h,C)=>{if(h.type==="customEnd")return C.push([3,v(h.end-this.firstTimestamp)]);var y=h.type,S=P[y],U=h.start,_=h.children.length,H=0,M=s.atts,q=d&&t.length&&S===1,F=[],m=h.attrs,J=m.metrics,I=m.params,W=s.queueTime,N=s.applicationTime;typeof this.firstTimestamp>"u"?(U+=u,this.firstTimestamp=U):U-=this.firstTimestamp;var L=[v(U),v(h.end-h.start),v(h.jsEnd-h.end),v(h.jsTime)];switch(S){case 1:L[2]=v(h.jsEnd-this.firstTimestamp),L.push(o(m.trigger),o(et(m.initialPageURL,O)),o(et(m.oldURL,O)),o(et(m.newURL,O)),o(m.customName),d?"":g?1:2,b(d&&W,v,!0)+b(d&&N,v,!0)+b(m.oldRoute,o,!0)+b(m.newRoute,o,!0)+o(m.id),o(h.id),b(m.firstPaint,v,!0)+b(m.firstContentfulPaint,v,!1));var G=mt(m.custom,o);F=F.concat(G),H=G.length,M&&(_++,F.push("a,"+o(M)));break;case 2:if(L.push(o(I.method),v(I.status),o(I.host),o(I.pathname),v(J.txSize),v(J.rxSize),m.isFetch?1:m.isJSONP?2:"",o(h.id),b(h.dt&&h.dt.spanId,o,!0)+b(h.dt&&h.dt.traceId,o,!0)+b(h.dt&&h.dt.timestamp,v,!1)),Object.keys((I==null?void 0:I.gql)||{}).length){var V=mt(I.gql,o);F=F.concat(V),H=V.length}break;case 4:var Z=m.tracedTime;L.push(o(m.name),b(Z,v,!0)+o(h.id));break}for(var z=0;z<h.children.length;z++)D(h.children[z],F);if(L.unshift(v(S),v(_+=H)),C.push(L),_&&C.push(F.join(";")),q){var j=",",e="b",i=0;st(t.slice(1,21),function(n,a){a!==void 0?(e+=j+v(a-i),j=",",i=a):(e+=j+"!",j="")}),C.push(e)}else S===1&&C.push("");return C};return D(r,[]).join(";")}}const{FEATURE_NAME:pt,INTERACTION_EVENTS:gt,MAX_TIMER_BUDGET:X,FN_START:A,FN_END:Tt,CB_START:Y,INTERACTION_API:R,REMAINING:x,INTERACTION:p,SPA_NODE:T,JSONP_NODE:$,FETCH_START:it,FETCH_DONE:Et,FETCH_BODY:xt,JSONP_END:rt,originalSetTimeout:Dt}=yt;class qt extends jt{constructor(r,u){super(r,u,pt),this.state={initialPageURL:nt(r).origin,lastSeenUrl:nt(r).origin,lastSeenRouteName:null,timerMap:{},timerBudget:X,currentNode:null,prevNode:null,nodeOnLastHashUpdate:null,initialPageLoad:null,pageLoaded:!1,childTime:0,depth:0,harvestTimeSeconds:tt(r,"spa.harvestTimeSeconds")||10,interactionsToHarvest:[],interactionsSent:[],disableSpaFix:(tt(r,"feature_flags")||[]).indexOf("disable-spa-fix")>-1},this.serializer=new Bt(this);const{state:t,serializer:g}=this;let{blocked:o}=this;const s=It.get(r),d=s.get("mutation"),P=s.get("promise"),O=s.get("history"),D=s.get("events"),h=s.get("timer"),C=s.get("fetch"),y=s.get("jsonp"),S=s.get("xhr"),U=s.get("tracer"),_=new _t("events",{onFinished:V,retryDelay:t.harvestTimeSeconds},{agentIdentifier:r,ee:s});if(_.harvest.on("events",G),c("block-spa",()=>{o=!0,_.stopTimer(!0)},this.featureName,s),!j())return;t.initialPageLoad=new K("initialPageLoad",0,t.lastSeenUrl,t.lastSeenRouteName,L,r),t.initialPageLoad.save=!0,t.prevInteraction=t.initialPageLoad,t.currentNode=t.initialPageLoad.root,t.initialPageLoad[x]++,c(A,M,this.featureName,s),c(Y,M,this.featureName,P);var H={getCurrentNode:W,setCurrentNode:N};c("spa-register",function(e){typeof e=="function"&&e(H)},lt.spa,s);function M(){t.depth++,this.prevNode=t.currentNode,this.ct=t.childTime,t.childTime=0,t.timerBudget=X}c(Tt,q,this.featureName,s),c("cb-end",q,this.featureName,P);function q(){t.depth--;var e=this.jsTime||0,i=e-t.childTime;t.childTime=this.ct+e,t.currentNode&&(t.currentNode.callback(i,this[Tt]),this.isTraced&&(t.currentNode.attrs.tracedTime=i)),this.jsTime=t.currentNode?0:i,N(this.prevNode),this.prevNode=null,t.timerBudget=X}c(A,function(e,i){var n=e[0],a=n.type,f=n["__nrNode:".concat(ut)];if(!t.pageLoaded&&(a==="load"&&i===window||Rt)&&(t.pageLoaded=!0,this.prevNode=t.currentNode=null,t.initialPageLoad&&(f=t.initialPageLoad.root,t.initialPageLoad[x]=0,Dt(function(){gt.push("popstate")}))),f)N(f);else if(a==="hashchange")N(t.nodeOnLastHashUpdate),t.nodeOnLastHashUpdate=null;else if(i instanceof XMLHttpRequest)N(s.context(i).spaNode);else if(!t.currentNode&&gt.indexOf(a)!==-1){var E=new K(a,this[A],t.lastSeenUrl,t.lastSeenRouteName,L,r);if(t.prevInteraction=E,N(E.root),a==="click"){var k=Z(n.target);k&&(t.currentNode.attrs.custom.actionText=k)}}n["__nrNode:".concat(ut)]=t.currentNode},this.featureName,D),c("setTimeout-end",function(i,n,a){!t.currentNode||t.timerBudget-this.timerDuration<0||i&&!(i[0]instanceof Function)||(t.currentNode[p][x]++,this.timerId=a,t.timerMap[a]=t.currentNode,this.timerBudget=t.timerBudget-50)},this.featureName,h),c("clearTimeout-start",function(i){var n=i[0],a=t.timerMap[n];if(a){var f=a[p];f[x]--,f.checkFinish(),delete t.timerMap[n]}},this.featureName,h),c(A,function(){t.timerBudget=this.timerBudget||X;var e=this.timerId,i=t.timerMap[e];N(i),delete t.timerMap[e],i&&i[p][x]--},this.featureName,h),c(A,function(){N(this[T])},this.featureName,S),c("new-xhr",function(){if(!t.disableSpaFix&&!t.currentNode&&t.prevInteraction&&!t.prevInteraction.ignored){const e=t.prevInteraction;t.currentNode=e.root,e.root.end=null}t.currentNode&&(this[T]=t.currentNode.child("ajax",null,null,!0))},this.featureName,S),c("send-xhr-start",function(){var e=this[T];e&&!this.sent&&(this.sent=!0,e.dt=this.dt,e.jsEnd=e.start=this.startTime,e[p][x]++)},this.featureName,S),c("xhr-resolved",function(){var e=this[T];if(e){if(!ft(this.params)){e.cancel();return}var i=e.attrs;i.params=this.params,i.metrics=this.metrics,e.finish(this.endTime),this.currentNode&&this.currentNode.interaction&&this.currentNode.interaction.checkFinish()}},this.featureName,s),c("new-jsonp",function(e){if(t.currentNode){var i=this[$]=t.currentNode.child("ajax",this[it]);i.start=this["new-jsonp"],this.url=e,this.status=null}},this.featureName,y),c("cb-start",function(e){var i=this[$];i&&(N(i),this.status=200)},this.featureName,y),c("jsonp-error",function(){var e=this[$];e&&(N(e),this.status=0)},this.featureName,y),c(rt,function(){var e=this[$];if(e){if(this.status===null){e.cancel();return}var i=e.attrs,n=i.params={},a=Pt(this.url);n.method="GET",n.pathname=a.pathname,n.host=a.hostname+":"+a.port,n.status=this.status,i.metrics={txSize:0,rxSize:0},i.isJSONP=!0,e.jsEnd=this[rt],e.jsTime=this[Y]?this[rt]-this[Y]:0,e.finish(e.jsEnd)}},this.featureName,y),c(it,function(e,i){if(e){if(!t.disableSpaFix&&!t.currentNode&&t.prevInteraction&&!t.prevInteraction.ignored){const n=t.prevInteraction;t.currentNode=n.root,n.root.end=null}t.currentNode&&(this[T]=t.currentNode.child("ajax",this[it]),i&&this[T]&&(this[T].dt=i))}},this.featureName,C),c(xt+"start",function(e){t.currentNode&&(this[T]=t.currentNode,t.currentNode[p][x]++)},this.featureName,C),c(xt+"end",function(e,i,n){var a=this[T];a&&a[p][x]--},this.featureName,C),c(Et,function(e,i){var n=this[T];if(n){if(e||!ft(this.params)){n.cancel();return}var a=n.attrs;a.params=this.params,a.metrics={txSize:this.txSize,rxSize:this.rxSize},a.isFetch=!0,n.finish(this[Et])}},this.featureName,C),c("newURL",function(e,i){if(t.currentNode)t.currentNode[p].setNewURL(e);else if(t.prevInteraction&&!t.prevInteraction.ignored){const n=t.prevInteraction;n.setNewURL(e),n.root.end=null,N(n.root)}t.currentNode&&(t.lastSeenUrl!==e&&(t.currentNode[p].routeChange=!0),i&&(t.nodeOnLastHashUpdate=t.currentNode)),t.lastSeenUrl=e},this.featureName,O),y.on("dom-start",function(e){if(!t.currentNode)return;var i=e[0],n=i&&i.nodeName==="SCRIPT"&&i.src!=="",a=t.currentNode.interaction;n&&(a[x]++,i.addEventListener("load",f,ht(!1)),i.addEventListener("error",E,ht(!1)));function f(){a[x]--,a.checkFinish()}function E(){a[x]--,a.checkFinish()}}),c(A,function(){N(t.prevNode)},this.featureName,d),c("resolve-start",I,this.featureName,P),c("executor-err",I,this.featureName,P),c("propagate",J,this.featureName,P),c(Y,function(){var e=this.getCtx?this.getCtx():this;N(e[T])},this.featureName,P),c(R+"get",function(e){var n,a,f,E,k,B;var i;(n=t==null?void 0:t.currentNode)!=null&&n[p]?i=this.ixn=t.currentNode[p]:((a=t==null?void 0:t.prevNode)==null?void 0:a.end)===null&&((B=(k=(E=(f=t==null?void 0:t.prevNode)==null?void 0:f[p])==null?void 0:E.root)==null?void 0:k[p])==null?void 0:B.eventName)!=="initialPageLoad"?i=this.ixn=t.prevNode[p]:i=this.ixn=new K("api",e,t.lastSeenUrl,t.lastSeenRouteName,L,r),t.currentNode||(i.checkFinish(),t.depth&&N(i.root))},this.featureName,s),c(R+"actionText",function(e,i){var n=this.ixn.root.attrs.custom;i&&(n.actionText=i)},this.featureName,s),c(R+"setName",function(e,i,n){var a=this.ixn.root.attrs;i&&(a.customName=i),n&&(a.trigger=n)},this.featureName,s),c(R+"setAttribute",function(e,i,n){this.ixn.root.attrs.custom[i]=n},this.featureName,s),c(R+"end",function(e){var i=this.ixn,n=m(i);N(null),n.child("customEnd",e).finish(e),i.finish()},this.featureName,s),c(R+"ignore",function(e){this.ixn.ignored=!0},this.featureName,s),c(R+"save",function(e){this.ixn.save=!0},this.featureName,s),c(R+"tracer",function(e,i,n){var a=this.ixn,f=m(a),E=s.context(n);if(!i)return E.inc=++a[x],E[T]=f;E[T]=f.child("customTracer",e,i)},this.featureName,s),c(A,F,this.featureName,U),c("no-"+A,F,this.featureName,U);function F(e,i,n){var a=this[T];if(a){var f=a[p],E=this.inc;this.isTraced=!0,E?f[x]--:a&&a.finish(e),n?N(a):f.checkFinish()}}c(R+"getContext",function(e,i){var n=this.ixn.root.attrs.store;setTimeout(function(){i(n)},0)},this.featureName,s),c(R+"onEnd",function(e,i){this.ixn.handlers.push(i)},this.featureName,s),c("api-routeName",function(e,i){t.lastSeenRouteName=i,t.currentNode&&t.currentNode[p].setNewRoute(i)},this.featureName,s);function m(e){return t.currentNode&&t.currentNode[p]===e?t.currentNode:e.root}function J(e,i){(i||!this[T])&&(this[T]=t.currentNode)}function I(){this.resolved||(this.resolved=!0,this[T]=t.currentNode)}function W(){return t.currentNode}function N(e){!t.pageLoaded&&!e&&t.initialPageLoad&&(e=t.initialPageLoad.root),t.currentNode&&t.currentNode[p].checkFinish(),t.prevNode=t.currentNode,t.currentNode=e&&!e[p].root.end?e:null}function L(e){e===t.initialPageLoad&&(t.initialPageLoad=null);var i=e.root,n=i.attrs;t.currentNode=i,st(e.handlers,function(a,f){f(n.store)}),N(null)}function G(e){if(t.interactionsToHarvest.length===0||o)return{};var i=g.serializeMultiple(t.interactionsToHarvest,0,Ut);return e.retry&&t.interactionsToHarvest.forEach(function(n){t.interactionsSent.push(n)}),t.interactionsToHarvest=[],{body:{e:i}}}function V(e){e.sent&&e.retry&&t.interactionsSent.length>0&&(t.interactionsSent.forEach(function(i){t.interactionsToHarvest.unshift(i)}),t.interactionsSent=[])}s.on("errorAgg",function(e,i,n,a){t.currentNode&&(n._interactionId=t.currentNode.interaction.id,t.currentNode.type&&t.currentNode.type!=="interaction"&&(n._interactionNodeId=t.currentNode.id))}),s.on("interaction",z);function Z(e){var i=e.tagName.toLowerCase(),n=["a","button","input"],a=n.indexOf(i)!==-1;if(a)return e.title||e.value||e.innerText}function z(e){var n,a,f,E,k,B;if(e.ignored||!e.save&&!e.routeChange){s.emit("interactionDiscarded",[e]);return}t.prevInteraction===e&&(t.prevInteraction=null),e.root.attrs.id=St(),e.root.attrs.trigger==="initialPageLoad"&&(e.root.attrs.firstPaint=wt.current.value,e.root.attrs.firstContentfulPaint=Ot.current.value),s.emit("interactionSaved",[e]),t.interactionsToHarvest.push(e);let i="RouteChange";((a=(n=e.root)==null?void 0:n.attrs)==null?void 0:a.trigger)==="initialPageLoad"?i="InitialPageLoad":((E=(f=e.root)==null?void 0:f.attrs)==null?void 0:E.trigger)==="api"&&(i="Custom"),kt(At,["Spa/Interaction/".concat(i,"/Duration/Ms"),Math.max((((k=e.root)==null?void 0:k.end)||0)-(((B=e.root)==null?void 0:B.start)||0),0)],void 0,lt.metrics,s),_.scheduleHarvest(0)}function j(){var e=tt(r,"spa.enabled");return e!==!1}this.drain()}}ct(qt,"featureName",pt);export{qt as Aggregate};
