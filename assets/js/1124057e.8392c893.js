"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[2308],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(n),p=r,b=c["".concat(s,".").concat(p)]||c[p]||m[p]||l;return n?a.createElement(b,o(o({ref:t},u),{},{components:n})):a.createElement(b,o({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),l=n(6010),o=n(2466),i=n(6550),s=n(1980),d=n(7392),u=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=m(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,d]=b({queryString:n,groupId:a}),[c,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),y=(()=>{const e=s??c;return p({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var y=n(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=d[n].value;a!==i&&(c(t),s(a))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},d.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:m},o,{className:(0,l.Z)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function g(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},r.createElement(h,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,y.Z)();return r.createElement(g,(0,a.Z)({key:String(t)},e))}},4724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),o=n(5162);const i={title:"dynamodb"},s=void 0,d={unversionedId:"middlewares/dynamodb",id:"middlewares/dynamodb",title:"dynamodb",description:"Fetches DynamoDB stored configuration and parses out JSON.",source:"@site/docs/middlewares/dynamodb.md",sourceDirName:"middlewares",slug:"/middlewares/dynamodb",permalink:"/docs/middlewares/dynamodb",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/dynamodb.md",tags:[],version:"current",lastUpdatedAt:1693532470,formattedLastUpdatedAt:"Sep 1, 2023",frontMatter:{title:"dynamodb"},sidebar:"tutorialSidebar",previous:{title:"do-not-wait-for-empty-event-loop",permalink:"/docs/middlewares/do-not-wait-for-empty-event-loop"},next:{title:"error-logger",permalink:"/docs/middlewares/error-logger"}},u={},c=[{value:"Install",id:"install",level:2},{value:"Options",id:"options",level:2},{value:"Sample usage",id:"sample-usage",level:2},{value:"Bundling",id:"bundling",level:2}],m={toc:c},p="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Fetches DynamoDB stored configuration and parses out JSON."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("p",null,"To install this middleware you can use NPM:"),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @middy/dynamodb\nnpm install --save-dev @aws-sdk/client-dynamodb @aws-sdk/util-dynamodb\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @middy/dynamodb\nyarn add --dev @aws-sdk/client-dynamodb @aws-sdk/util-dynamodb\n"))),(0,r.kt)(o.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @middy/dynamodb\npnpm add --save-dev @aws-sdk/client-dynamodb @aws-sdk/util-dynamodb\n")))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AwsClient")," (object) (default ",(0,r.kt)("inlineCode",{parentName:"li"},"DynamoDBClient"),"): DynamoDBClient class constructor (i.e. that has been instrumented with AWS XRay). Must be from ",(0,r.kt)("inlineCode",{parentName:"li"},"@aws-sdk/client-dynamodb"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"awsClientOptions")," (object) (default ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),"): Options to pass to DynamoDBClient class constructor."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"awsClientAssumeRole")," (string) (default ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),"): Internal key where secrets are stored. See ",(0,r.kt)("a",{parentName:"li",href:"/docs/middlewares/sts"},"@middy/sts")," on to set this."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"awsClientCapture")," (function) (default ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),"): Enable XRay by passing ",(0,r.kt)("inlineCode",{parentName:"li"},"captureAWSv3Client")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"aws-xray-sdk")," in."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fetchData")," (object) (required): Mapping of internal key name to API request parameters."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"disablePrefetch")," (boolean) (default ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"): On cold start requests will trigger early if they can. Setting ",(0,r.kt)("inlineCode",{parentName:"li"},"awsClientAssumeRole")," disables prefetch."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cacheKey")," (string) (default ",(0,r.kt)("inlineCode",{parentName:"li"},"dynamodb"),"): Cache key for the fetched data responses. Must be unique across all middleware."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cacheExpiry")," (number) (default ",(0,r.kt)("inlineCode",{parentName:"li"},"-1"),"): How long fetch data responses should be cached for. ",(0,r.kt)("inlineCode",{parentName:"li"},"-1"),": cache forever, ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),": never cache, ",(0,r.kt)("inlineCode",{parentName:"li"},"n"),": cache for n ms."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setToContext")," (boolean) (default ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"): Store credentials to ",(0,r.kt)("inlineCode",{parentName:"li"},"request.context"),".")),(0,r.kt)("p",null,"NOTES:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Lambda is required to have IAM permission for ",(0,r.kt)("inlineCode",{parentName:"li"},"dynamodb:BatchGetItemCommand"))),(0,r.kt)("h2",{id:"sample-usage"},"Sample usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport dynamodb from '@middy/dynamodb'\n\nconst handler = middy((event, context) => {\n  const response = {\n    statusCode: 200,\n    headers: {},\n    body: JSON.stringify({ message: 'hello world' })\n  }\n\n  return response\n})\n\nhandler.use(\n  dynamodb({\n    fetchData: {\n      config: {\n        TableName: '...'\n        Key: {\n          pk: '0000'\n        }\n      }\n    }\n  })\n)\n")),(0,r.kt)("h2",{id:"bundling"},"Bundling"),(0,r.kt)("p",null,"To exclude ",(0,r.kt)("inlineCode",{parentName:"p"},"@aws-sdk")," add ",(0,r.kt)("inlineCode",{parentName:"p"},"@aws-sdk/client-dynamodb")," to the exclude list."))}b.isMDXComponent=!0}}]);