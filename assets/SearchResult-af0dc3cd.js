import{u as V,a as Q,b as W,c as _,m as z,l as B,n as G,y as J,h as K,d as N,e as T,r as L,g as X,v as Y,L as Z,H as ee}from"./app-08cac848.js";import{c as te,C as ae,t as se,r as g,h as w,x as j,j as t,R as P,F as le,i as ue}from"./framework-cddc4983.js";const re="search-pro-result-history",o=V(re,[]),ne=()=>{const{resultHistoryCount:u}=L,c=u>0;return{enabled:c,resultHistory:o,addResultHistory:l=>{c&&(o.value.length<u?o.value=[l,...o.value]:o.value=[l,...o.value.slice(0,u-1)])},removeResultHistory:l=>{o.value=[...o.value.slice(0,l),...o.value.slice(l+1)]}}},oe=u=>{const c=Q(),l=g(!1),h=g([]);let i;const v=T(d=>{l.value=!0,i==null||i.terminate(),d?(i=new Worker(`/${L.worker}`,{}),i.addEventListener("message",({data:$})=>{h.value=$,l.value=!1}),i.postMessage({query:d,routeLocale:c.value})):(h.value=[],l.value=!1)},L.delay);return j([u,c],()=>v(u.value),{immediate:!0}),{searching:l,results:h}};var ve=te({name:"SearchResult",props:{query:{type:String,required:!0}},emits:["close","updateQuery"],setup(u,{emit:c}){const l=X(),h=ae(),i=Q(),v=W(Y),{addQueryHistory:d}=Z(),{enabled:$,resultHistory:b,addResultHistory:q,removeResultHistory:A}=ne(),f=se(u,"query"),{results:y,searching:E}=oe(f),r=g(0),s=g(0),C=w(()=>b.value.length>0),R=w(()=>y.value.length>0),H=w(()=>y.value[r.value]||null),F=()=>{r.value=r.value>0?r.value-1:y.value.length-1,s.value=H.value.contents.length-1},U=()=>{r.value=r.value<y.value.length-1?r.value+1:0,s.value=0},I=()=>{s.value<H.value.contents.length-1?s.value=s.value+1:U()},M=()=>{s.value>0?s.value=s.value-1:F()},D=e=>e.map(a=>ue(a)?a:t(a[0],a[1])),S=e=>{if(e.type==="custom"){const a=ee[e.index]||"$content",[p,m=""]=le(a)?a[i.value].split("$content"):a.split("$content");return D([p,...e.display,m])}return D(e.display)},k=()=>{r.value=0,s.value=0,c("updateQuery",""),c("close")};return _("keydown",e=>{if(R.value){if(e.key==="ArrowUp")M();else if(e.key==="ArrowDown")I();else if(e.key==="Enter"){const a=H.value.contents[s.value];l.value.path!==a.path&&(d(u.query),q(a),h.push(a.path),k())}}}),j([r,s],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result",{empty:f.value?!R.value:!C.value}],id:"search-pro-results"},f.value===""?C.value?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},v.value.history),b.value.map((e,a)=>t(P,{to:e.path,class:["search-pro-result-item",{active:s.value===a}],onClick:()=>{k()}},()=>[t(z,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.type==="content"&&e.header?t("div",{class:"content-header"},e.header):null,t("div",S(e))]),t("button",{class:"search-pro-close-icon",onClick:p=>{p.preventDefault(),p.stopPropagation(),A(a)}},t(B))]))])):$?v.value.emptyHistory:v.value.emptyResult:E.value?t(G,{hint:v.value.searching}):R.value?t("ul",{class:"search-pro-result-list"},y.value.map(({title:e,contents:a},p)=>{const m=r.value===p;return t("li",{class:["search-pro-result-list-item",{active:m}]},[t("div",{class:"search-pro-result-title"},e||"Documentation"),a.map((n,O)=>{const x=m&&s.value===O;return t(P,{to:n.path,class:["search-pro-result-item",{active:x,"aria-selected":x}],onClick:()=>{d(u.query),q(n),k()}},()=>[n.type==="content"?null:t(n.type==="title"?J:n.type==="heading"?K:N,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="content"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",S(n))])])})])})):v.value.emptyResult)}});export{ve as default};
