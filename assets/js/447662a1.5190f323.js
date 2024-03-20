"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[1768],{2912:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var r=t(5893),i=t(1151);const d={title:"Configurable Middlewares",position:2},s=void 0,o={id:"writing-middlewares/configurable-middlewares",title:"Configurable Middlewares",description:"In order to make middlewares configurable, they are generally exported as a function that accepts",source:"@site/docs/writing-middlewares/02-configurable-middlewares.md",sourceDirName:"writing-middlewares",slug:"/writing-middlewares/configurable-middlewares",permalink:"/docs/writing-middlewares/configurable-middlewares",draft:!1,unlisted:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/writing-middlewares/02-configurable-middlewares.md",tags:[],version:"current",lastUpdatedAt:1710976750,formattedLastUpdatedAt:"Mar 20, 2024",sidebarPosition:2,frontMatter:{title:"Configurable Middlewares",position:2},sidebar:"tutorialSidebar",previous:{title:"Custom Middlewares",permalink:"/docs/writing-middlewares/intro"},next:{title:"Inline Middlewares",permalink:"/docs/writing-middlewares/inline-middlewares"}},a={},l=[];function c(e){const n={code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["In order to make middlewares configurable, they are generally exported as a function that accepts\na configuration object. This function should then return the middleware object with ",(0,r.jsx)(n.code,{children:"before"}),",\n",(0,r.jsx)(n.code,{children:"after"}),", and ",(0,r.jsx)(n.code,{children:"onError"})," as keys."]}),"\n",(0,r.jsx)(n.p,{children:"E.g."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// customMiddleware.js\n\nconst defaults = {}\n\nconst customMiddleware = (opts) => {\n  const options = { ...defaults, ...opts }\n\n  const customMiddlewareBefore = async (request) => {\n    const { event, context } = request\n    // ...\n  }\n\n  const customMiddlewareAfter = async (request) => {\n    const { response } = request\n    // ...\n    request.response = response\n  }\n\n  const customMiddlewareOnError = async (request) => {\n    if (request.response === undefined) return\n    await customMiddlewareAfter(request)\n  }\n\n  return {\n    before: customMiddlewareBefore,\n    after: customMiddlewareAfter,\n    onError: customMiddlewareOnError\n  }\n}\n\nexport default customMiddleware\n"})}),"\n",(0,r.jsx)(n.p,{children:"With this convention in mind, using a middleware will always look like the following example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"import middy from '@middy/core'\nimport customMiddleware from 'customMiddleware.js'\n\nconst lambdaHandler = async (event, context) => {\n  // do stuff\n  return {}\n}\n\nexport const handler = middy()\n  .use(\n    customMiddleware({\n      option1: 'foo',\n      option2: 'bar'\n    })\n  )\n  .handler(lambdaHandler)\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var r=t(7294);const i={},d=r.createContext(i);function s(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);