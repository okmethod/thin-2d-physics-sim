import{n as t,e}from"../chunks/navigation.client.C3-L2-Qp.js";import{s as a,e as s,a as n,c as l,b as o,m as i,f as r,g as c,h,i as u,j as p,n as d,w as m,t as f,d as v,o as g,p as y,x as k,k as b}from"../chunks/scheduler.CzzqiJfr.js";import{S as x,i as S}from"../chunks/index.BmoaPBre.js";const j=[{title:"simple",action:"navigate",route:"/simple"},{title:"area-wrap",action:"navigate",route:"/area-wrap"},{title:"collision-detect",action:"navigate",route:"/collision-detect"},{title:"poly-decomp",action:"navigate",route:"/poly-decomp"},{title:"github repository",action:"redirect",route:"https://github.com/okmethod/thin-2d-physics-sim"}];const T=Object.freeze(Object.defineProperty({__proto__:null,load:async function(){function e(e,a){return{navigate:()=>t(a),redirect:()=>window.open(a,"_blank")}[e]||(()=>{})}return{propsArray:j.map((t=>({title:t.title,onClick:e(t.action,t.route)})))}}},Symbol.toStringTag,{value:"Module"}));function w(t,e,a){const s=t.slice();return s[1]=e[a],s}function E(t){let e,a,i,d,m,x,S,j=t[1].title+"";return{c(){e=s("div"),a=s("button"),i=s("span"),d=f(j),m=n(),this.h()},l(t){e=l(t,"DIV",{class:!0});var s=o(e);a=l(s,"BUTTON",{class:!0});var n=o(a);i=l(n,"SPAN",{class:!0});var h=o(i);d=v(h,j),h.forEach(c),n.forEach(c),m=r(s),s.forEach(c),this.h()},h(){h(i,"class","cLinkButtonStyle md:!text-2xl"),h(a,"class","flex items-center"),h(e,"class","")},m(s,n){u(s,e,n),p(e,a),p(a,i),p(i,d),p(e,m),x||(S=g(a,"click",y((function(){k(t[1].onClick)&&t[1].onClick.apply(this,arguments)}))),x=!0)},p(e,a){t=e,1&a&&j!==(j=t[1].title+"")&&b(d,j)},d(t){t&&c(e),x=!1,S()}}}function _(t){let a,f,v,g,y='<h1 class="cTitleStyle md:!text-3xl">What&#39;s the matter.js ??</h1>',k=e(t[0].propsArray),b=[];for(let e=0;e<k.length;e+=1)b[e]=E(w(t,k,e));return{c(){a=s("div"),f=s("div"),f.innerHTML=y,v=n(),g=s("div");for(let t=0;t<b.length;t+=1)b[t].c();this.h()},l(t){a=l(t,"DIV",{class:!0});var e=o(a);f=l(e,"DIV",{class:!0,"data-svelte-h":!0}),"svelte-vo1w7u"!==i(f)&&(f.innerHTML=y),v=r(e),g=l(e,"DIV",{class:!0});var s=o(g);for(let a=0;a<b.length;a+=1)b[a].l(s);s.forEach(c),e.forEach(c),this.h()},h(){h(f,"class","cTitlePartStyle md:!mb-4"),h(g,"class","cContentPartStyle !m-4"),h(a,"class","cRouteBodyStyle")},m(t,e){u(t,a,e),p(a,f),p(a,v),p(a,g);for(let a=0;a<b.length;a+=1)b[a]&&b[a].m(g,null)},p(t,[a]){if(1&a){let s;for(k=e(t[0].propsArray),s=0;s<k.length;s+=1){const e=w(t,k,s);b[s]?b[s].p(e,a):(b[s]=E(e),b[s].c(),b[s].m(g,null))}for(;s<b.length;s+=1)b[s].d(1);b.length=k.length}},i:d,o:d,d(t){t&&c(a),m(b,t)}}}function A(t,e,a){let{data:s}=e;return t.$$set=t=>{"data"in t&&a(0,s=t.data)},[s]}class C extends x{constructor(t){super(),S(this,t,A,_,a,{data:0})}}export{C as component,T as universal};
