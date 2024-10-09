import{a0 as Q,l as V,k as F,A as p,L as E,o as W,a1 as $,m as H,s as T,b as v,g as x,a as z,r as K,a2 as X,O as Z,n as G,a3 as J,a4 as Y,d as ee,e as te,a5 as b,a6 as ne}from"./index-RKo5VIBF.js";function se(n){return Q(n)}function ae(){var n,e;return((e=(n=V)==null?void 0:n.location)==null?void 0:e.protocol)==="file:"}var re={regex:/^file:\/\/(.*)/,replacement:atob("ZmlsZTovL09CRlVTQ0FURUQ=")};class ie extends E{shouldObfuscate(){return B(this.sharedContext.agentIdentifier).length>0}obfuscateString(e){if(!e||typeof e!="string")return e;for(var t=B(this.sharedContext.agentIdentifier),s=e,a=0;a<t.length;a++){var r=t[a].regex,i=t[a].replacement||"*";s=s.replace(r,i)}return s}}function B(n){var e=[],t=F(n,"obfuscate")||[];return e=e.concat(t),ae()&&e.push(re),e}function ve(n){for(var e=!1,t=!1,s=0;s<n.length;s++){"regex"in n[s]?typeof n[s].regex!="string"&&!(n[s].regex instanceof RegExp)&&(p('An obfuscation replacement rule contains a "regex" value with an invalid type (must be a string or RegExp)'),t=!0):(p('An obfuscation replacement rule was detected missing a "regex" value.'),t=!0);var a=n[s].replacement;a&&typeof a!="string"&&(p('An obfuscation replacement rule contains a "replacement" value with an invalid type (must be a string)'),e=!0)}return!e&&!t}/**
 * @file Contains common methods used to transmit harvested data.
 * @copyright 2023 New Relic Corporation. All rights reserved.
 * @license Apache-2.0
 */function q(){let{isFinalHarvest:n=!1}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return n&&W&&$?oe:R}function R(n){let{url:e,body:t=null,sync:s,method:a="POST",headers:r=[{key:"content-type",value:"text/plain"}]}=n;const i=new XMLHttpRequest;i.open(a,e,!s);try{"withCredentials"in i&&(i.withCredentials=!0)}catch{}return r.forEach(o=>{i.setRequestHeader(o.key,o.value)}),i.send(t),i}function oe(n){let{url:e,body:t}=n;try{return window.navigator.sendBeacon.bind(window.navigator)(e,t)}catch{return!1}}var U={"%2C":",","%3A":":","%2F":"/","%40":"@","%24":"$","%3B":";"},ue=H(U,function(n){return n}),ce=new RegExp(ue.join("|"),"g");function le(n){return U[n]}function C(n){return n==null?"null":encodeURIComponent(n).replace(ce,le)}function fe(n,e){var t=0,s="";return H(n,function(a,r){var i=[],o,c;if(typeof r=="string"||!Array.isArray(r)&&r!==null&&r!==void 0&&r.toString().length)o="&"+a+"="+C(r),t+=o.length,s+=o;else if(Array.isArray(r)&&r.length){for(t+=9,c=0;c<r.length&&(o=C(T(r[c])),t+=o.length,!(typeof e<"u"&&t>=e));c++)i.push(o);s+="&"+a+"=%5B"+i.join(",")+"%5D"}}),s}function l(n,e){return e&&typeof e=="string"?"&"+n+"="+C(e):""}function de(){return""+location}var ge=/([^?#]*)[^#]*(#[^?]*|$).*/,he=/([^?#]*)().*/;function pe(n,e){return n.replace(e?ge:he,"$1$2")}function _(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"string",s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:[];return!n||typeof n!="object"||Object.keys(n).forEach(a=>{typeof n[a]=="object"?_(n[a],e,t,s):typeof n[a]===t&&!s.includes(a)&&(n[a]=e(n[a]))}),n}const h={};class xe extends E{constructor(e){super(e),this.tooManyRequestsDelay=F(this.sharedContext.agentIdentifier,"harvest.tooManyRequestsDelay")||60,this.obfuscator=new ie(this.sharedContext),this._events={}}sendX(){var i,o,c;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=q({isFinalHarvest:(i=e.opts)==null?void 0:i.unload}),s={retry:!((o=e.opts)!=null&&o.unload)&&t===R,isFinalHarvest:((c=e.opts)==null?void 0:c.unload)===!0},a=this.createPayload(e.endpoint,s);return(this.obfuscator.shouldObfuscate()?this.obfuscateAndSend.bind(this):this._send.bind(this))({...e,payload:a,submitMethod:t})}send(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return(this.obfuscator.shouldObfuscate()?this.obfuscateAndSend.bind(this):this._send.bind(this))(e)}obfuscateAndSend(){var e=this;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{payload:s={}}=t;return _(s,function(){return e.obfuscator.obfuscateString(...arguments)},"string",["e"]),this._send({...t,payload:s})}_send(e){var k;let{endpoint:t,payload:s={},opts:a={},submitMethod:r,cbFinished:i,customUrl:o,raw:c,includeBaseParams:L=!0}=e;const m=v(this.sharedContext.agentIdentifier);if(!m.errorBeacon)return!1;const N=x(this.sharedContext.agentIdentifier);let{body:u,qs:d}=this.cleanPayload(s);if(Object.keys(u).length===0&&!(a!=null&&a.sendEmptyBody))return i&&i({sent:!1}),!1;const w=z(this.sharedContext.agentIdentifier),I=w.ssl===!1?"http":"https",P=w.proxy.beacon||m.errorBeacon,D=t!=="rum"?"/".concat(t):"";let y="".concat(I,"://").concat(P).concat(D,"/1/").concat(m.licenseKey);o&&(y=o),c&&(y="".concat(I,"://").concat(P,"/").concat(t));const S=!c&&L?this.baseQueryString():"";let g=fe(d,N.maxBytes);r||(r=q({isFinalHarvest:a.unload})),S===""&&g.startsWith("&")&&(g=g.substring(1));const M="".concat(y,"?").concat(S).concat(g);!!((k=d==null?void 0:d.attributes)!=null&&k.includes("gzip"))||(t==="events"?u=u.e:u=T(u),u.length>75e4&&(h[t]=((h==null?void 0:h[t])||0)+1)===1&&p("The Browser Agent is attempting to send a very large payload to /".concat(t,". This is usually tied to large amounts of custom attributes. Please check your configurations."))),(!u||u.length===0||u==="{}"||u==="[]")&&(u="");const A=[];A.push({key:"content-type",value:"text/plain"});let O=r({url:M,body:u,sync:a.unload&&(K||X),headers:A});if(!a.unload&&i&&r===R){const j=this;O.addEventListener("load",function(){const f={sent:!0,status:this.status};this.status===429?(f.retry=!0,f.delay=j.tooManyRequestsDelay):(this.status===408||this.status===500||this.status===503)&&(f.retry=!0),a.needResponse&&(f.responseText=this.responseText),i(f)},Z(!1))}return O}baseQueryString(){var r;const e=x(this.sharedContext.agentIdentifier),t=v(this.sharedContext.agentIdentifier),s=pe(de()),a=this.obfuscator.shouldObfuscate()?this.obfuscator.obfuscateString(s):s;return["a="+t.applicationID,l("sa",t.sa?""+t.sa:""),l("v",J),me(t),l("ct",e.customTransaction),"&rst="+G(),"&ck=0","&s="+(((r=e.session)==null?void 0:r.state.value)||"0"),l("ref",a),l("ptid",e.ptid?""+e.ptid:"")].join("")}createPayload(e,t){const s=this._events[e],a={body:{},qs:{}};if(Array.isArray(s)&&s.length>0)for(let r=0;r<s.length;r++){const i=s[r](t);i&&(a.body={...a.body,...i.body||{}},a.qs={...a.qs,...i.qs||{}})}return a}cleanPayload(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=s=>typeof Uint8Array<"u"&&s instanceof Uint8Array||Array.isArray(s)?s:typeof s=="string"?s.length>0?s:null:Object.entries(s||{}).reduce((a,r)=>{let[i,o]=r;return(typeof o=="number"||typeof o=="string"&&o.length>0||typeof o=="object"&&Object.keys(o||{}).length>0)&&(a[i]=o),a},{});return{body:t(e.body),qs:t(e.qs)}}on(e,t){Array.isArray(this._events[e])||(this._events[e]=[]),this._events[e].push(t)}}function me(n){return n.transactionName?l("to",n.transactionName):l("t",n.tNamePlain||"Unnamed Transaction")}class Re extends Y{constructor(){super(...arguments),this.checkConfiguration()}waitForFlags(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return Promise.all(e.map(t=>new Promise(s=>{ee("rumresp-".concat(t),a=>s(a),this.featureName,this.ee)})))}drain(){te(this.agentIdentifier,this.featureName)}checkConfiguration(){var e,t;if(!se(this.agentIdentifier)){let s={...(e=b().info)==null?void 0:e.jsAttributes};try{s={...s,...(t=v(this.agentIdentifier))==null?void 0:t.jsAttributes}}catch{}ne({agentIdentifier:this.agentIdentifier},{...b(),info:{...b().info,jsAttributes:s},runtime:x(this.agentIdentifier)})}}}export{Re as A,xe as H,ie as O,q as a,pe as c,B as g,ae as i,fe as o,ve as v,R as x};
