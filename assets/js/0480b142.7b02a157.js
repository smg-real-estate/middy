"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[836],{8976:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>d,metadata:()=>s,toc:()=>c});var n=o(5893),i=o(1151);const d={title:"FAQ",sidebar_position:10},a=void 0,s={id:"faq",title:"FAQ",description:"My lambda keep timing out without responding, what do I do?",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/faq.md",tags:[],version:"current",lastUpdatedAt:1710976750,formattedLastUpdatedAt:"Mar 20, 2024",sidebarPosition:10,frontMatter:{title:"FAQ",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Profiling",permalink:"/docs/best-practices/profiling"}},r={},c=[{value:"My lambda keep timing out without responding, what do I do?",id:"my-lambda-keep-timing-out-without-responding-what-do-i-do",level:3}];function p(t){const e={code:"code",h3:"h3",p:"p",...(0,i.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h3,{id:"my-lambda-keep-timing-out-without-responding-what-do-i-do",children:"My lambda keep timing out without responding, what do I do?"}),"\n",(0,n.jsxs)(e.p,{children:["Likely your event loop is not empty. This happens when you have a database connect still open for example. Checkout ",(0,n.jsx)(e.code,{children:"@middy/do-not-wait-for-empty-event-loop"}),"."]})]})}function u(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(p,{...t})}):p(t)}},1151:(t,e,o)=>{o.d(e,{Z:()=>s,a:()=>a});var n=o(7294);const i={},d=n.createContext(i);function a(t){const e=n.useContext(d);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:a(t.components),n.createElement(d.Provider,{value:e},t.children)}}}]);