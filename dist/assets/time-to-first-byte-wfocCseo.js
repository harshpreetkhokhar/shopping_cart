import{o as m,E as l,l as a,G as p}from"./index-OHSn3qVt.js";import{Z as c,V as T,b as d}from"./first-paint-bkOYs_bp.js";const t=new T(d.TIME_TO_FIRST_BYTE);var o,r,s,n;if(m&&typeof PerformanceNavigationTiming<"u"&&!l)c(e=>{let{value:i,entries:f}=e;t.isValid||t.update({value:i,entries:f})});else if(!t.isValid){const e={};for(let i in((r=(o=a)==null?void 0:o.performance)==null?void 0:r.timing)||{})e[i]=Math.max(((n=(s=a)==null?void 0:s.performance)==null?void 0:n.timing[i])-p,0);t.update({value:e.responseStart,entries:[e]})}export{t};
