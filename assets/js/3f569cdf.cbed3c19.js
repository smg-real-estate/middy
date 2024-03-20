"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[3775],{4775:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var t=n(5893),a=n(1151),s=n(4866),l=n(5162);const i={title:"warmup"},o=void 0,u={id:"middlewares/warmup",title:"warmup",description:"Warmup middleware that helps to reduce the cold-start issue. Compatible by default with serverless-plugin-warmup, but it can be configured to suit your implementation.",source:"@site/docs/middlewares/warmup.md",sourceDirName:"middlewares",slug:"/middlewares/warmup",permalink:"/docs/middlewares/warmup",draft:!1,unlisted:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/warmup.md",tags:[],version:"current",lastUpdatedAt:1710976750,formattedLastUpdatedAt:"Mar 20, 2024",frontMatter:{title:"warmup"},sidebar:"tutorialSidebar",previous:{title:"validator",permalink:"/docs/middlewares/validator"},next:{title:"ws-json-body-parser",permalink:"/docs/middlewares/ws-json-body-parser"}},c={},d=[{value:"Install",id:"install",level:2},{value:"Options",id:"options",level:2},{value:"Sample usage",id:"sample-usage",level:2}];function p(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["Warmup middleware that helps to reduce the ",(0,t.jsx)(r.a,{href:"https://serverless.com/blog/keep-your-lambdas-warm/",children:"cold-start issue"}),". Compatible by default with ",(0,t.jsx)(r.a,{href:"https://www.npmjs.com/package/serverless-plugin-warmup",children:(0,t.jsx)(r.code,{children:"serverless-plugin-warmup"})}),", but it can be configured to suit your implementation."]}),"\n",(0,t.jsx)(r.p,{children:"This middleware allows you to specify a schedule to keep Lambdas that always need to be very responsive warmed-up. It does this by regularly invoking the Lambda, but will terminate early to avoid the actual handler logic from being run."}),"\n",(0,t.jsxs)(r.p,{children:["If you use ",(0,t.jsx)(r.a,{href:"https://www.npmjs.com/package/serverless-plugin-warmup",children:(0,t.jsx)(r.code,{children:"serverless-plugin-warmup"})}),' the scheduling part is done by the plugin and you just have to attach the middleware to your "middyfied" handler. If you don\'t want to use the plugin you have to create the schedule yourself and define the ',(0,t.jsx)(r.code,{children:"isWarmingUp"})," function to define whether the current event is a warmup event or an actual business logic execution."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Important:"})," AWS recently announced Lambda ",(0,t.jsx)(r.a,{href:"https://aws.amazon.com/about-aws/whats-new/2019/12/aws-lambda-announces-provisioned-concurrency/",children:"Provisioned Concurrency"}),". If you have this enabled, you do not need this middleware."]}),"\n",(0,t.jsx)(r.p,{children:"To update your code to use Provisioned Concurrency see:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://aws.amazon.com/blogs/compute/new-for-aws-lambda-predictable-start-up-times-with-provisioned-concurrency/",children:"AWS Console"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://serverless.com/blog/aws-lambda-provisioned-concurrency/",children:"Serverless"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html",children:"Terraform"})}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"install",children:"Install"}),"\n",(0,t.jsx)(r.p,{children:"To install this middleware you can use NPM:"}),"\n",(0,t.jsxs)(s.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(l.Z,{value:"npm",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"npm install --save @middy/warmup\n"})})}),(0,t.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"yarn add @middy/warmup\n"})})}),(0,t.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"pnpm add @middy/warmup\n"})})})]}),"\n",(0,t.jsx)(r.h2,{id:"options",children:"Options"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"isWarmingUp"}),": a function that accepts the ",(0,t.jsx)(r.code,{children:"event"})," object as a parameter\nand returns ",(0,t.jsx)(r.code,{children:"true"})," if the current event is a warmup event and ",(0,t.jsx)(r.code,{children:"false"})," if it's a regular execution. The default function will check if the ",(0,t.jsx)(r.code,{children:"event"})," object has a ",(0,t.jsx)(r.code,{children:"source"})," property set to ",(0,t.jsx)(r.code,{children:"serverless-plugin-warmup"}),"."]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"sample-usage",children:"Sample usage"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"const middy = require('@middy/core')\nconst warmup = require('@middy/warmup')\n\nconst lambdaHandler = (event, context, cb) => {\n  /* ... */\n}\n\nconst isWarmingUp = (event) => event.isWarmingUp === true\n\nexport const handler = middy()\n  .use(warmup({ isWarmingUp }))\n  .handler(lambdaHandler)\n"})})]})}function h(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},5162:(e,r,n)=>{n.d(r,{Z:()=>l});n(7294);var t=n(6010);const a={tabItem:"tabItem_Ymn6"};var s=n(5893);function l(e){let{children:r,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,l),hidden:n,children:r})}},4866:(e,r,n)=>{n.d(r,{Z:()=>j});var t=n(7294),a=n(6010),s=n(2466),l=n(6550),i=n(469),o=n(1980),u=n(7392),c=n(12);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:a}}=e;return{value:r,label:n,attributes:t,default:a}}))}(n);return function(e){const r=(0,u.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function h(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:n}=e;const a=(0,l.k6)(),s=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,o._X)(s),(0,t.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})}),[s,a])]}function b(e){const{defaultValue:r,queryString:n=!1,groupId:a}=e,s=p(e),[l,o]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:s}))),[u,d]=m({queryString:n,groupId:a}),[b,f]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,s]=(0,c.Nk)(n);return[a,(0,t.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),v=(()=>{const e=u??b;return h({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{v&&o(v)}),[v]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=n(5893);function g(e){let{className:r,block:n,selectedValue:t,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const r=e.currentTarget,n=o.indexOf(r),a=i[n].value;a!==t&&(u(r),l(a))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;r=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;r=o[n]??o[o.length-1];break}}r?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},r),children:i.map((e=>{let{value:r,label:n,attributes:s}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function y(e){let{lazy:r,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function x(e){const r=b(e);return(0,w.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,w.jsx)(g,{...e,...r}),(0,w.jsx)(y,{...e,...r})]})}function j(e){const r=(0,f.Z)();return(0,w.jsx)(x,{...e,children:d(e.children)},String(r))}},1151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>l});var t=n(7294);const a={},s=t.createContext(a);function l(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);