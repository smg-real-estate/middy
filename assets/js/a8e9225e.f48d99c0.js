"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[9319],{4579:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=t(5893),r=t(1151),s=t(4866),i=t(5162);const l={title:"http-content-negotiation"},o=void 0,d={id:"middlewares/http-content-negotiation",title:"http-content-negotiation",description:"This middleware parses Accept-* headers and provides utilities for HTTP content negotiation (charset, encoding, language and media type).",source:"@site/docs/middlewares/http-content-negotiation.md",sourceDirName:"middlewares",slug:"/middlewares/http-content-negotiation",permalink:"/docs/middlewares/http-content-negotiation",draft:!1,unlisted:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/http-content-negotiation.md",tags:[],version:"current",lastUpdatedAt:1710976750,formattedLastUpdatedAt:"Mar 20, 2024",frontMatter:{title:"http-content-negotiation"},sidebar:"tutorialSidebar",previous:{title:"http-content-encoding",permalink:"/docs/middlewares/http-content-encoding"},next:{title:"http-cors",permalink:"/docs/middlewares/http-cors"}},c={},u=[{value:"Install",id:"install",level:2},{value:"Options",id:"options",level:2},{value:"Sample usage",id:"sample-usage",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["This middleware parses ",(0,a.jsx)(n.code,{children:"Accept-*"})," headers and provides utilities for ",(0,a.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7231#section-5.3",children:"HTTP content negotiation"})," (charset, encoding, language and media type)."]}),"\n",(0,a.jsxs)(n.p,{children:["By default the middleware parses charsets (",(0,a.jsx)(n.code,{children:"Accept-Charset"}),"), languages (",(0,a.jsx)(n.code,{children:"Accept-Language"}),"), encodings (",(0,a.jsx)(n.code,{children:"Accept-Encoding"}),") and media types (",(0,a.jsx)(n.code,{children:"Accept"}),") during the\n",(0,a.jsx)(n.code,{children:"before"})," phase and expands the ",(0,a.jsx)(n.code,{children:"context"})," object by adding the following properties:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"preferredCharsets"})," (",(0,a.jsx)(n.code,{children:"array"}),") - The list of charsets that can be safely used by the app (as the result of the negotiation)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"preferredCharset"})," (",(0,a.jsx)(n.code,{children:"string"}),") - The preferred charset (as the result of the negotiation)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"preferredEncodings"})," (",(0,a.jsx)(n.code,{children:"array"}),") - The list of encodings that can be safely used by the app (as the result of the negotiation)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"preferredEncoding"})," (",(0,a.jsx)(n.code,{children:"string"}),") - The preferred encoding (as the result of the negotiation)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"preferredLanguages"})," (",(0,a.jsx)(n.code,{children:"array"}),") - The list of languages that can be safely used by the app (as the result of the negotiation)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"preferredLanguage"})," (",(0,a.jsx)(n.code,{children:"string"}),") - The preferred language (as the result of the negotiation)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"preferredMediaTypes"})," (",(0,a.jsx)(n.code,{children:"array"}),") - The list of media types that can be safely used by the app (as the result of the negotiation)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"preferredMediaType"})," (",(0,a.jsx)(n.code,{children:"string"}),") - The preferred media types (as the result of the negotiation)"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["This middleware expects the headers in canonical format, so it should be attached after the ",(0,a.jsx)(n.a,{href:"#httpheadernormalizer",children:(0,a.jsx)(n.code,{children:"httpHeaderNormalizer"})})," middleware.\nIt also can throw an HTTP exception, so it can be convenient to use it in combination with the ",(0,a.jsx)(n.a,{href:"#httperrorhandler",children:(0,a.jsx)(n.code,{children:"httpErrorHandler"})}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,a.jsx)(n.p,{children:"To install this middleware you can use NPM:"}),"\n",(0,a.jsxs)(s.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(i.Z,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install --save @middy/http-content-negotiation\n"})})}),(0,a.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add @middy/http-content-negotiation\n"})})}),(0,a.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm add @middy/http-content-negotiation\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"parseCharsets"})," (defaults to ",(0,a.jsx)(n.code,{children:"true"}),") - Allows enabling/disabling the charsets parsing"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"availableCharsets"})," (defaults to ",(0,a.jsx)(n.code,{children:"undefined"}),") - Allows defining the list of charsets supported by the Lambda function"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"parseEncodings"})," (defaults to ",(0,a.jsx)(n.code,{children:"true"}),") - Allows enabling/disabling the encodings parsing"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"availableEncodings"})," (defaults to ",(0,a.jsx)(n.code,{children:"undefined"}),") - Allows defining the list of encodings supported by the Lambda function"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"parseLanguages"})," (defaults to ",(0,a.jsx)(n.code,{children:"true"}),") - Allows enabling/disabling the languages parsing"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"availableLanguages"})," (defaults to ",(0,a.jsx)(n.code,{children:"undefined"}),") - Allows defining the list of languages supported by the Lambda function. Setting to ",(0,a.jsx)(n.code,{children:"en"})," will match with locales like ",(0,a.jsx)(n.code,{children:"en-*"}),". Setting to ",(0,a.jsx)(n.code,{children:"en-US"})," will match with language ",(0,a.jsx)(n.code,{children:"en"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"parseMediaTypes"})," (defaults to ",(0,a.jsx)(n.code,{children:"true"}),") - Allows enabling/disabling the media types parsing"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"availableMediaTypes"})," (defaults to ",(0,a.jsx)(n.code,{children:"undefined"}),") - Allows defining the list of media types supported by the Lambda function"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"failOnMismatch"})," (defaults to ",(0,a.jsx)(n.code,{children:"true"}),") - If set to true it will throw an HTTP ",(0,a.jsx)(n.code,{children:"NotAcceptable"})," (406) exception when the negotiation fails for one of the headers (e.g. none of the languages requested are supported by the app)"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"sample-usage",children:"Sample usage"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"import middy from '@middy/core'\nimport httpContentNegotiation from '@middy/http-content-negotiation'\nimport httpHeaderNormalizer from '@middy/http-header-normalizer'\nimport httpErrorHandler from '@middy/http-error-handler'\n\nconst lambdaHandler = (event, context) => {\n  let message, body\n\n  switch (context.preferredLanguage) {\n    case 'it-it':\n      message = 'Ciao Mondo'\n      break\n    case 'fr-fr':\n      message = 'Bonjour le monde'\n      break\n    default:\n      message = 'Hello world'\n  }\n\n  switch (context.preferredMediaType) {\n    case 'application/xml':\n      body = `<message>${message}</message>`\n      break\n    case 'application/yaml':\n      body = `---\\nmessage: ${message}`\n      break\n    case 'application/json':\n      body = JSON.stringify({ message })\n      break\n    default:\n      body = message\n  }\n\n  return {\n    statusCode: 200,\n    body\n  }\n}\n\nexport const handler = middy()\n  .use(httpHeaderNormalizer())\n  .use(\n    httpContentNegotiation({\n      parseCharsets: false,\n      parseEncodings: false,\n      availableLanguages: ['it-it', 'fr-fr', 'en'],\n      availableMediaTypes: [\n        'application/xml',\n        'application/yaml',\n        'application/json',\n        'text/plain'\n      ]\n    })\n  )\n  .use(httpErrorHandler())\n  .handler(lambdaHandler)\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>i});t(7294);var a=t(6010);const r={tabItem:"tabItem_Ymn6"};var s=t(5893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(7294),r=t(6010),s=t(2466),i=t(6550),l=t(469),o=t(1980),d=t(7392),c=t(12);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[d,u]=f({queryString:t,groupId:r}),[g,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),b=(()=>{const e=d??g;return p({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),m(e)}),[u,m,s]),tabValues:s}}var m=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(5893);function j(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),r=l[t].value;r!==a&&(d(n),i(r))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:u,onClick:c,...s,className:(0,r.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(j,{...e,...n}),(0,x.jsx)(y,{...e,...n})]})}function w(e){const n=(0,m.Z)();return(0,x.jsx)(v,{...e,children:u(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var a=t(7294);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);