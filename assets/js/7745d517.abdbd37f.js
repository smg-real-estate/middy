"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[1702],{1391:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=t(5893),r=t(1151),s=t(4866),i=t(5162);const l={title:"appconfig"},o=void 0,d={id:"middlewares/appconfig",title:"appconfig",description:"Fetches AppConfig stored configuration and parses out JSON.",source:"@site/docs/middlewares/appconfig.md",sourceDirName:"middlewares",slug:"/middlewares/appconfig",permalink:"/docs/middlewares/appconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/appconfig.md",tags:[],version:"current",lastUpdatedAt:1704839311,formattedLastUpdatedAt:"Jan 9, 2024",frontMatter:{title:"appconfig"},sidebar:"tutorialSidebar",previous:{title:"Third-party middlewares",permalink:"/docs/middlewares/third-party"},next:{title:"cloudwatch-metrics",permalink:"/docs/middlewares/cloudwatch-metrics"}},c={},u=[{value:"Install",id:"install",level:2},{value:"Options",id:"options",level:2},{value:"Sample usage",id:"sample-usage",level:2},{value:"Bundling",id:"bundling",level:2},{value:"Usage with TypeScript",id:"usage-with-typescript",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Fetches AppConfig stored configuration and parses out JSON."}),"\n",(0,a.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,a.jsx)(n.p,{children:"To install this middleware you can use NPM:"}),"\n",(0,a.jsxs)(s.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(i.Z,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install --save @middy/appconfig\nnpm install --save-dev @aws-sdk/client-appconfigdata\n"})})}),(0,a.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add @middy/appconfig\nyarn add --dev @aws-sdk/client-appconfigdata\n"})})}),(0,a.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm add @middy/appconfig\npnpm add --save-dev @aws-sdk/client-appconfigdata\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"AwsClient"})," (object) (default ",(0,a.jsx)(n.code,{children:"AppConfigClient"}),"): AppConfigClient class constructor (i.e. that has been instrumented with AWS XRay). Must be from ",(0,a.jsx)(n.code,{children:"@aws-sdk/client-appconfig"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"awsClientOptions"})," (object) (default ",(0,a.jsx)(n.code,{children:"undefined"}),"): Options to pass to AppConfigClient class constructor."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"awsClientAssumeRole"})," (string) (default ",(0,a.jsx)(n.code,{children:"undefined"}),"): Internal key where secrets are stored. See ",(0,a.jsx)(n.a,{href:"/docs/middlewares/sts",children:"@middy/sts"})," on to set this."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"awsClientCapture"})," (function) (default ",(0,a.jsx)(n.code,{children:"undefined"}),"): Enable XRay by passing ",(0,a.jsx)(n.code,{children:"captureAWSv3Client"})," from ",(0,a.jsx)(n.code,{children:"aws-xray-sdk"})," in."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"fetchData"})," (object) (required): Mapping of internal key name to API request parameters."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"disablePrefetch"})," (boolean) (default ",(0,a.jsx)(n.code,{children:"false"}),"): On cold start requests will trigger early if they can. Setting ",(0,a.jsx)(n.code,{children:"awsClientAssumeRole"})," disables prefetch."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"cacheKey"})," (string) (default ",(0,a.jsx)(n.code,{children:"appconfig"}),"): Cache key for the fetched data responses. Must be unique across all middleware."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"cacheExpiry"})," (number) (default ",(0,a.jsx)(n.code,{children:"-1"}),"): How long fetch data responses should be cached for. ",(0,a.jsx)(n.code,{children:"-1"}),": cache forever, ",(0,a.jsx)(n.code,{children:"0"}),": never cache, ",(0,a.jsx)(n.code,{children:"n"}),": cache for n ms."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"setToContext"})," (boolean) (default ",(0,a.jsx)(n.code,{children:"false"}),"): Store credentials to ",(0,a.jsx)(n.code,{children:"request.context"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"NOTES:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Lambda is required to have IAM permission for ",(0,a.jsx)(n.code,{children:"appconfig:StartConfigurationSession"})," and ",(0,a.jsx)(n.code,{children:"appconfig:GetLatestConfiguration"})]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"sample-usage",children:"Sample usage"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"import middy from '@middy/core'\nimport appConfig from '@middy/appconfig'\n\nconst handler = middy()\n  .use(\n    appConfig({\n      fetchData: {\n        config: {\n          Application: '...',\n          ClientId: '...',\n          Configuration: '...',\n          Environment: '...'\n        }\n      }\n    })\n  )\n  .handler((event, context) => {\n    const response = {\n      statusCode: 200,\n      headers: {},\n      body: JSON.stringify({ message: 'hello world' })\n    }\n\n    return response\n  })\n"})}),"\n",(0,a.jsx)(n.h2,{id:"bundling",children:"Bundling"}),"\n",(0,a.jsxs)(n.p,{children:["To exclude ",(0,a.jsx)(n.code,{children:"@aws-sdk"})," add ",(0,a.jsx)(n.code,{children:"@aws-sdk/client-appconfig"})," to the exclude list."]}),"\n",(0,a.jsx)(n.h2,{id:"usage-with-typescript",children:"Usage with TypeScript"}),"\n",(0,a.jsxs)(n.p,{children:["Data in AppConfig can be stored as arbitrary structured data. It's not possible to know in advance what shape the fetched data will have, so by default the fetched parameters will have type ",(0,a.jsx)(n.code,{children:"unknown"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["You can provide some type hints by leveraging the ",(0,a.jsx)(n.code,{children:"appConfigReq"})," utility function. This function allows you to specify what's the expected type that will be fetched for every AppConfig request."]}),"\n",(0,a.jsxs)(n.p,{children:["The idea is that, for every request specified in the ",(0,a.jsx)(n.code,{children:"fetchData"})," option, rather than just providing the parameter path as a string, you can wrap it in a ",(0,a.jsx)(n.code,{children:"appConfigReq<ParamType>(config)"})," call. Internally, ",(0,a.jsx)(n.code,{children:"appConfigReq"})," is a function that will return ",(0,a.jsx)(n.code,{children:"config"})," as received, but it allows you to use generics to provide type hints for the expected type for that parameter."]}),"\n",(0,a.jsx)(n.p,{children:"This way TypeScript can understand how to treat the additional data attached to the context and stored in the internal storage."}),"\n",(0,a.jsxs)(n.p,{children:["The following example illustrates how to use ",(0,a.jsx)(n.code,{children:"appConfigReq"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import middy from '@middy/core'\nimport appConfig, { appConfigReq } from '@middy/appconfig'\n\nconst lambdaHandler = (event, context) => {\n  return {\n    statusCode: 200,\n    headers: {},\n    body: JSON.stringify({ message: 'hello world' })\n  }\n})\n\nexport const handler = middy()\n  .use(\n    appConfig({\n      fetchData: {\n        config: {\n          Application: '...',\n          ClientId: '...',\n          Configuration: '...',\n          Environment: '...'\n        }\n      }\n    })\n  )\n  .before(async (request) => {\n    const data = await getInternal('config', request)\n    // data.config.field1 (string)\n    // data.config.field2 (string)\n    // data.config.field3 (number)\n  })\n.handler(lambdaHandler)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>i});t(7294);var a=t(6010);const r={tabItem:"tabItem_Ymn6"};var s=t(5893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(7294),r=t(6010),s=t(2466),i=t(6550),l=t(469),o=t(1980),d=t(7392),c=t(12);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=p(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[d,u]=f({queryString:t,groupId:r}),[m,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),x=(()=>{const e=d??m;return h({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{x&&o(x)}),[x]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var g=t(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(5893);function j(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),r=l[t].value;r!==a&&(d(n),i(r))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:u,onClick:c,...s,className:(0,r.Z)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=m(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,b.jsx)(j,{...e,...n}),(0,b.jsx)(y,{...e,...n})]})}function w(e){const n=(0,g.Z)();return(0,b.jsx)(v,{...e,children:u(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var a=t(7294);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);