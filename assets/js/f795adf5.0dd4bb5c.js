"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[8841],{5196:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=t(5893),o=t(1151);const a={title:"Early return",position:4},s=void 0,i={id:"intro/early-interrupt",title:"Early return",description:"Some middlewares might need to stop the whole execution flow and return a response immediately.",source:"@site/docs/intro/04-early-interrupt.md",sourceDirName:"intro",slug:"/intro/early-interrupt",permalink:"/docs/intro/early-interrupt",draft:!1,unlisted:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/intro/04-early-interrupt.md",tags:[],version:"current",lastUpdatedAt:1710976750,formattedLastUpdatedAt:"Mar 20, 2024",sidebarPosition:4,frontMatter:{title:"Early return",position:4},sidebar:"tutorialSidebar",previous:{title:"How it works",permalink:"/docs/intro/how-it-works"},next:{title:"Handling Errors",permalink:"/docs/intro/handling-errors"}},c={},d=[];function l(e){const n={code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Some middlewares might need to stop the whole execution flow and return a response immediately."}),"\n",(0,r.jsxs)(n.p,{children:["If you want to do this you can invoke ",(0,r.jsx)(n.code,{children:"return response"})," in your middleware."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"}),": this will totally stop the execution of successive middlewares in any phase (",(0,r.jsx)(n.code,{children:"before"}),", ",(0,r.jsx)(n.code,{children:"after"}),", ",(0,r.jsx)(n.code,{children:"onError"}),") and returns\nan early response (or an error) directly at the Lambda level. If your middlewares do a specific task on every request\nlike output serialization, error handling or clean, these won't be invoked in this case. They will have to be handled before the return."]}),"\n",(0,r.jsx)(n.p,{children:"In this example, we can use this capability for building a sample caching middleware:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// some function that calculates the cache id based on the current event\nconst calculateCacheId = (event) => {\n  /* ... */\n}\nconst storage = {}\n\n// middleware\nconst cacheMiddleware = (options) => {\n  let cacheKey\n\n  const cacheMiddlewareBefore = async (request) => {\n    cacheKey = options.calculateCacheId(request.event)\n    if (options.storage.hasOwnProperty(cacheKey)) {\n      // exits early and returns the value from the cache if it's already there\n      return options.storage[cacheKey]\n    }\n  }\n\n  const cacheMiddlewareAfter = async (request) => {\n    // stores the calculated response in the cache\n    options.storage[cacheKey] = request.response\n  }\n\n  return {\n    before: cacheMiddlewareBefore,\n    after: cacheMiddlewareAfter\n  }\n}\n\n// sample usage\nconst lambdaHandler = (event, context) => {\n  /* ... */\n}\nexport const handler = middy()\n  .use(\n    cacheMiddleware({\n      calculateCacheId,\n      storage\n    })\n  )\n  .handler(lambdaHandler)\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var r=t(7294);const o={},a=r.createContext(o);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);