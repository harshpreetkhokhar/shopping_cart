var K=Object.defineProperty;var Q=(c,n,e)=>n in c?K(c,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[n]=e;var j=(c,n,e)=>(Q(c,typeof n!="symbol"?n+"":n,e),e),P=(c,n,e)=>{if(!n.has(c))throw TypeError("Cannot "+e)};var d=(c,n,e)=>(P(c,n,"read from private field"),e?e.call(c):n.get(c)),p=(c,n,e)=>{if(n.has(c))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(c):n.set(c,e)},v=(c,n,e,i)=>(P(c,n,"write to private field"),i?i.call(c,e):n.set(c,e),e);var O=(c,n,e)=>(P(c,n,"access private method"),e);import{x as Z,k as X,I as G,g as $,d as R,n as B,J as k}from"./index-RKo5VIBF.js";import{H as _}from"./harvest-scheduler-dtBJ38gU.js";import{M as f,a as I}from"./session-entity-dKt5J7kr.js";import{s as ee}from"./shared-channel-eZ_QJilv.js";import{A as te}from"./aggregate-base-CrDnbUWj.js";import"./invoke-yZTpZaXg.js";var w,E,b,F,x,q,y,H;class se{constructor(){p(this,x);p(this,y);p(this,w,void 0);p(this,E,[]);p(this,b,setTimeout(()=>O(this,y,H).call(this),5e3));p(this,F,!1)}settle(n){d(this,w)===!1||(d(this,w)===void 0?d(this,E).push(n):n())}decide(n){d(this,F)||(v(this,w,n),n===!1&&O(this,y,H).call(this),n===!0&&O(this,x,q).call(this))}permanentlyDecide(n){d(this,F)||(this.decide(n),v(this,F,!0))}}w=new WeakMap,E=new WeakMap,b=new WeakMap,F=new WeakMap,x=new WeakSet,q=function(){d(this,E).forEach(n=>n()),O(this,y,H).call(this)},y=new WeakSet,H=function(){v(this,E,[]),clearTimeout(d(this,b))};async function ie(c){try{const n=Z();if(X(c,"session_replay.enabled")&&typeof n.initializedAgents[c].features.session_replay=="object"&&await n.initializedAgents[c].features.session_replay.onAggregateImported)return await ee.sessionReplayInitialized}catch{}return f.OFF}const N={global:{mouseup:!0,mousedown:!0},window:{load:!0,pagehide:!0},xhrOriginMissing:{ignoreAll:!0}},z={typing:[1e3,2e3],scrolling:[100,1e3],mousing:[1e3,2e3],touching:[1e3,2e3]},V=10*60*1e3,re=30,W=30*1e3;var g,U,Y,C,J,M;class ne extends te{constructor(e,i,t){var s;super(e,i,G);p(this,U);p(this,C);p(this,g,void 0);p(this,M,0);if(s=this,this.agentRuntime=$(e),!this.agentRuntime.xhrWrappable)return;this.resourceObserver=t==null?void 0:t.resourceObserver,this.ptid="",this.trace={},this.nodeCount=0,this.sentTrace=null,this.harvestTimeSeconds=X(e,"session_trace.harvestTimeSeconds")||10,this.maxNodesPerHarvest=X(e,"session_trace.maxNodesPerHarvest")||1e3,this.isStandalone=!1;const u=new se,h=this.agentRuntime.session;this.operationalGate=u;const l=a=>{switch(a){case f.ERROR:this.startTracing(u,!0);break;case f.FULL:case!0:this.startTracing(u);break;case f.OFF:case!1:default:u.decide(!1);break}};let T=!1,m;this.ee.on(I.UPDATE,(a,o)=>{o.sessionReplayMode===f.FULL&&L()});const L=()=>{var a,o,r;if(((r=(o=(a=this.agentRuntime)==null?void 0:a.session)==null?void 0:o.state)==null?void 0:r.sessionReplayMode)===f.FULL&&m!==f.FULL){const D=m;m=f.FULL,h.write({sessionTraceMode:m}),this.isStandalone=!1,D===f.ERROR&&d(this,g)?(this.trimSTNs(W),d(this,g).runHarvest({needResponse:!0})):l(f.FULL)}};if(!h)this.isStandalone=!0,R("rumresp-stn",a=>l(a),this.featureName,this.ee);else{R("errorAgg",()=>{T=!0,L()},this.featureName,this.ee);const a=()=>{var o,r;h.state.sessionTraceMode!==f.OFF&&h.write({sessionTraceMode:f.OFF}),u.permanentlyDecide(!1),m===f.FULL&&((o=d(this,g))==null||o.runHarvest()),(r=d(this,g))==null||r.stopTimer(!0),v(this,g,null)};this.waitForFlags(["stn","sr"]).then(async o=>{let[r,D]=o;if(!D)this.isStandalone=!0,l(r);else if(this.ee.on("REPLAY_ABORTED",()=>a()),this.ee.on(I.RESUME,()=>{const S=h.state.sessionTraceMode;S===f.OFF?a():S===f.FULL&&d(this,g)&&!d(this,g).started&&d(this,g).runHarvest({needResponse:!0}),m=S}),this.ee.on(I.PAUSE,()=>{m=h.state.sessionTraceMode}),!h.isNew)h.state.sessionReplayMode===f.OFF&&(this.isStandalone=!0),l(m=h.state.sessionTraceMode);else{const S=await ie(e);S===f.OFF&&(this.isStandalone=!0);let A;r===!0?A=f.FULL:S===f.ERROR&&T?A=f.FULL:A=S,h.write({sessionTraceMode:m=A}),l(A)}})}R("bst",function(){for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return u.settle(()=>s.storeEvent(...o))},this.featureName,this.ee),R("bstResource",function(){for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return u.settle(()=>s.storeResources(...o))},this.featureName,this.ee),R("bstHist",function(){for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return u.settle(()=>s.storeHist(...o))},this.featureName,this.ee),R("bstXhrAgg",function(){for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return u.settle(()=>s.storeXhrAgg(...o))},this.featureName,this.ee),R("bstApi",function(){for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return u.settle(()=>s.storeSTN(...o))},this.featureName,this.ee),R("errorAgg",function(){for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return u.settle(()=>s.storeErrorAgg(...o))},this.featureName,this.ee),R("pvtAdded",function(){for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return u.settle(()=>s.processPVT(...o))},this.featureName,this.ee),this.drain()}startTracing(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;typeof PerformanceNavigationTiming<"u"?this.storeTiming(window.performance.getEntriesByType("navigation")[0]):this.storeTiming(window.performance.timing),v(this,g,new _("resources",{onFinished:O(this,U,Y).bind(this),retryDelay:this.harvestTimeSeconds},this)),d(this,g).harvest.on("resources",O(this,C,J).bind(this)),i===!1&&d(this,g).runHarvest({needResponse:!0}),e.decide(!0)}processPVT(e,i,t){this.storeTiming({[e]:i}),s(e,t)&&this.storeEvent({type:"fid",target:"document"},"document",i,i+t.fid);function s(u,h){return u==="fi"&&!!h&&typeof h.fid=="number"}}storeTiming(e){if(e)for(let i in e){let t=e[i];const s=i.toLowerCase();s.indexOf("size")>=0||s.indexOf("status")>=0||typeof t=="number"&&t>=0&&(t=Math.round(t),this.storeSTN({n:i,s:t,e:t,o:"document",t:"timing"}))}}storeEvent(e,i,t,s){if(this.shouldIgnoreEvent(e,i))return;const u={n:this.evtName(e.type),s:t,e:s,t:"event"};try{u.o=this.evtOrigin(e.target,i)}catch{u.o=this.evtOrigin(null,i)}this.storeSTN(u)}shouldIgnoreEvent(e,i){const t=this.evtOrigin(e.target,i);return e.type in N.global||N[t]&&N[t].ignoreAll?!0:!!(N[t]&&e.type in N[t])}evtName(e){switch(e){case"keydown":case"keyup":case"keypress":return"typing";case"mousemove":case"mouseenter":case"mouseleave":case"mouseover":case"mouseout":return"mousing";case"scroll":return"scrolling";case"touchstart":case"touchmove":case"touchend":case"touchcancel":case"touchenter":case"touchleave":return"touching";default:return e}}evtOrigin(e,i){let t="unknown";if(e&&e instanceof XMLHttpRequest){const s=this.ee.context(e).params;if(!s||!s.status||!s.method||!s.host||!s.pathname)return"xhrOriginMissing";t=s.status+" "+s.method+": "+s.host+s.pathname}else if(e&&typeof e.tagName=="string"&&(t=e.tagName.toLowerCase(),e.id&&(t+="#"+e.id),e.className))for(let s=0;s<e.classList.length;s++)t+="."+e.classList[s];return t==="unknown"&&(typeof i=="string"?t=i:i===document?t="document":i===window?t="window":i instanceof FileReader&&(t="FileReader")),t}storeHist(e,i,t){const s={n:"history.pushState",s:t,e:t,o:e,t:i};this.storeSTN(s)}storeResources(e){!e||e.length===0||(e.forEach(i=>{if((i.fetchStart|0)<=d(this,M))return;const t=k(i.name),s={n:i.initiatorType,s:i.fetchStart|0,e:i.responseEnd|0,o:t.protocol+"://"+t.hostname+":"+t.port+t.pathname,t:i.entryType};this.storeSTN(s)}),v(this,M,e[e.length-1].fetchStart|0))}storeErrorAgg(e,i,t,s){if(e!=="err")return;const u={n:"error",s:s.time,e:s.time,o:t.message,t:t.stackHash};this.storeSTN(u)}storeXhrAgg(e,i,t,s){if(e!=="xhr")return;const u={n:"Ajax",s:s.time,e:s.time+s.duration,o:t.status+" "+t.method+": "+t.host+t.pathname,t:"ajax"};this.storeSTN(u)}storeSTN(e){this.nodeCount>=this.maxNodesPerHarvest&&(this.isStandalone||this.agentRuntime.session.state.sessionTraceMode!==f.ERROR||this.trimSTNs(W)===0)||this.isStandalone&&B()>=V||(this.trace[e.n]?this.trace[e.n].push(e):this.trace[e.n]=[e],this.nodeCount++)}trimSTNs(e){let i=0;const t=Math.max(B()-e,0);return Object.keys(this.trace).forEach(s=>{const u=this.trace[s];let h=u.findIndex(l=>t<=l.e);h!==0&&(h<0?(h=u.length,delete this.trace[s]):u.splice(0,h),this.nodeCount-=h,i+=h)}),i}takeSTNs(e){this.resourceObserver||this.storeResources(window.performance.getEntriesByType("resource"));let i=1/0;const t=Object.entries(this.trace).flatMap(u=>{let[h,l]=u;const T=l.reduce((a,o)=>!a||o.s<a?o.s:a,void 0);if(T<i&&(i=T),!(h in z))return l;const m=this.smearEvtsByOrigin(h),L=l.sort((a,o)=>a.s-o.s).reduce(m,{});return Object.values(L).flat()},this);if(t.length===0)return{};e&&(this.sentTrace=this.trace),this.trace={},this.nodeCount=0;let s;if(this.agentRuntime.session){const u=!this.agentRuntime.session.state.traceHarvestStarted;s={fsh:Number(u)},u&&this.agentRuntime.session.write({traceHarvestStarted:!0})}return{qs:{st:this.agentRuntime.offset,hr:+!this.isStandalone,fts:this.agentRuntime.offset+i,n:t.length,...s},body:{res:t}}}smearEvtsByOrigin(e){const i=z[e][0],t=z[e][1],s={};return(h,l)=>{let T=h[l.o];T||(T=h[l.o]=[]);const m=s[l.o];return e==="scrolling"&&!u(l)?(s[l.o]=null,l.n="scroll",T.push(l)):m&&l.s-m.s<t&&m.e>l.s-i?m.e=l.e:(s[l.o]=l,T.push(l)),h};function u(h){return!!(h&&typeof h.e=="number"&&typeof h.s=="number"&&h.e-h.s<4)}}}g=new WeakMap,U=new WeakSet,Y=function(e){e.sent&&e.responseText&&!this.ptid&&(this.agentRuntime.ptid=this.ptid=e.responseText,d(this,g).startTimer(this.harvestTimeSeconds)),e.sent&&e.retry&&this.sentTrace&&(Object.entries(this.sentTrace).forEach(i=>{let[t,s]=i;this.nodeCount>=this.maxNodesPerHarvest||(this.nodeCount+=s.length,this.trace[t]=this.trace[t]?s.concat(this.trace[t]):s)}),this.sentTrace=null)},C=new WeakSet,J=function(e){if(this.isStandalone){if(this.ptid&&B()>=V)e.isFinalHarvest=!0,this.operationalGate.permanentlyDecide(!1),d(this,g).stopTimer(!0);else if(this.ptid&&this.nodeCount<=re&&!e.isFinalHarvest)return}else{const i=this.agentRuntime.session.state.sessionTraceMode;if(i===f.OFF&&Object.keys(this.trace).length===0||i===f.ERROR)return}return this.takeSTNs(e.retry)},M=new WeakMap,j(ne,"featureName",G);export{ne as Aggregate};
