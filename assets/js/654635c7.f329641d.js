"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[1338],{7803:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(5893),a=r(1151),l=r(4866),s=r(5162);const o={title:"http-router"},d=void 0,i={id:"routers/http-router",title:"http-router",description:"This handler can route to requests to one of a nested handler based on method and path of an http event from API Gateway (REST or HTTP) or Elastic Load Balancer.",source:"@site/docs/routers/http-router.md",sourceDirName:"routers",slug:"/routers/http-router",permalink:"/docs/routers/http-router",draft:!1,unlisted:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/routers/http-router.md",tags:[],version:"current",lastUpdatedAt:1704839311,formattedLastUpdatedAt:"Jan 9, 2024",frontMatter:{title:"http-router"},sidebar:"tutorialSidebar",previous:{title:"Routers",permalink:"/docs/category/routers"},next:{title:"ws-router",permalink:"/docs/routers/ws-router"}},u={},c=[{value:"Install",id:"install",level:2},{value:"Options",id:"options",level:2},{value:"Sample usage",id:"sample-usage",level:2}];function h(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["This handler can route to requests to one of a nested handler based on ",(0,n.jsx)(t.code,{children:"method"})," and ",(0,n.jsx)(t.code,{children:"path"})," of an http event from API Gateway (REST or HTTP) or Elastic Load Balancer."]}),"\n",(0,n.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,n.jsx)(t.p,{children:"To install this middleware you can use NPM:"}),"\n",(0,n.jsxs)(l.Z,{groupId:"npm2yarn",children:[(0,n.jsx)(s.Z,{value:"npm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm install --save @middy/http-router\n"})})}),(0,n.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"yarn add @middy/http-router\n"})})}),(0,n.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"pnpm add @middy/http-router\n"})})})]}),"\n",(0,n.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"routes"})," (array[{method, path, handler}]) (required): Array of route objects.","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"method"})," (string) (required): One of ",(0,n.jsx)(t.code,{children:"GET"}),", ",(0,n.jsx)(t.code,{children:"POST"}),", ",(0,n.jsx)(t.code,{children:"PUT"}),", ",(0,n.jsx)(t.code,{children:"PATCH"}),", ",(0,n.jsx)(t.code,{children:"DELETE"}),", ",(0,n.jsx)(t.code,{children:"OPTIONS"})," and ",(0,n.jsx)(t.code,{children:"ANY"})," that will match to any method passed in"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"path"})," (string) (required): AWS formatted path starting with ",(0,n.jsx)(t.code,{children:"/"}),". Variable: ",(0,n.jsx)(t.code,{children:"/{id}/"}),", Wildcard: ",(0,n.jsx)(t.code,{children:"/{proxy+}"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"handler"})," (function) (required): Any ",(0,n.jsx)(t.code,{children:"handler(event, context)"})," function"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"NOTES:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["When using API Gateway it may be required to prefix ",(0,n.jsx)(t.code,{children:"routes[].path"})," with ",(0,n.jsx)(t.code,{children:"/{stage}"})," depending on your use case."]}),"\n",(0,n.jsxs)(t.li,{children:["Errors should be handled as part of the router middleware stack ",(0,n.jsx)(t.strong,{children:"or"})," the lambdaHandler middleware stack. Handled errors in the later will trigger the ",(0,n.jsx)(t.code,{children:"after"})," middleware stack of the former."]}),"\n",(0,n.jsx)(t.li,{children:"Shared middlewares, connected to the router middleware stack, can only be run before the lambdaHandler middleware stack."}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"pathParameters"})," will automatically be set if not already set"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"sample-usage",children:"Sample usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"import middy from '@middy/core'\nimport httpRouterHandler from '@middy/http-router'\nimport validatorMiddleware from '@middy/validator'\n\nconst getHandler = middy()\n  .use(validatorMiddleware({eventSchema: {...} }))\n  .handler((event, context) => {\n    return {\n      statusCode: 200,\n      body: '{...}'\n    }\n  })\n\nconst postHandler = middy()\n  .use(validatorMiddleware({eventSchema: {...} }))\n  .handler((event, context) => {\n    return {\n      statusCode: 200,\n      body: '{...}'\n    }\n  })\n\nconst routes = [\n  {\n    method: 'GET',\n    path: '/user/{id}',\n    handler: getHandler\n  },\n  {\n    method: 'POST',\n    path: '/user',\n    handler: postHandler\n  }\n]\n\nexport const handler = middy()\n  .use(httpHeaderNormalizer())\n  .handler(httpRouterHandler(routes))\n\n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},5162:(e,t,r)=>{r.d(t,{Z:()=>s});r(7294);var n=r(6010);const a={tabItem:"tabItem_Ymn6"};var l=r(5893);function s(e){let{children:t,hidden:r,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,s),hidden:r,children:t})}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(7294),a=r(6010),l=r(2466),s=r(6550),o=r(469),d=r(1980),i=r(7392),u=r(12);function c(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,d._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=h(e),[s,d]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,c]=m({queryString:r,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,u.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),x=(()=>{const e=i??f;return p({value:e,tabValues:l})?e:null})();(0,o.Z)((()=>{x&&d(x)}),[x]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);d(e),c(e),b(e)}),[c,b,l]),tabValues:l}}var b=r(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(5893);function j(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.o5)(),u=e=>{const t=e.currentTarget,r=d.indexOf(t),a=o[r].value;a!==n&&(i(t),s(a))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>d.push(e),onKeyDown:c,onClick:u,...l,className:(0,a.Z)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,v.jsx)(j,{...e,...t}),(0,v.jsx)(g,{...e,...t})]})}function w(e){const t=(0,b.Z)();return(0,v.jsx)(y,{...e,children:c(e.children)},String(t))}},1151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>s});var n=r(7294);const a={},l=n.createContext(a);function s(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);