"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[7858],{4328:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var s=t(5893),r=t(1151),a=t(4866),l=t(5162);const o={title:"s3-object-response"},i=void 0,d={id:"middlewares/s3-object-response",title:"s3-object-response",description:"This middleware is a Proof of Concept and requires real world testing before use, not recommended for production",source:"@site/docs/middlewares/s3-object-response.md",sourceDirName:"middlewares",slug:"/middlewares/s3-object-response",permalink:"/docs/middlewares/s3-object-response",draft:!1,unlisted:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/s3-object-response.md",tags:[],version:"current",lastUpdatedAt:1710976750,formattedLastUpdatedAt:"Mar 20, 2024",frontMatter:{title:"s3-object-response"},sidebar:"tutorialSidebar",previous:{title:"rds-signer",permalink:"/docs/middlewares/rds-signer"},next:{title:"s3",permalink:"/docs/middlewares/s3"}},c={},u=[{value:"Install",id:"install",level:2},{value:"Options",id:"options",level:2},{value:"Sample usage",id:"sample-usage",level:2},{value:"Stream",id:"stream",level:3},{value:"JSON",id:"json",level:3},{value:"Bundling",id:"bundling",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"** This middleware is a Proof of Concept and requires real world testing before use, not recommended for production **"}),"\n",(0,s.jsx)(n.p,{children:"Fetches S3 object as a stream and writes back to s3 object response."}),"\n",(0,s.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,s.jsx)(n.p,{children:"To install this middleware you can use NPM:"}),"\n",(0,s.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(l.Z,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install --save @middy/s3-object-response\nnpm install --save-dev @aws-sdk/client-s3\n"})})}),(0,s.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn add @middy/s3-object-response\nyarn add --dev @aws-sdk/client-s3\n"})})}),(0,s.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm add @middy/s3-object-response\npnpm add --save-dev @aws-sdk/client-s3\n"})})})]}),"\n",(0,s.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"AwsClient"})," (object) (default ",(0,s.jsx)(n.code,{children:"S3Client"}),"): S3Client class constructor (i.e. that has been instrumented with AWS XRay). Must be from ",(0,s.jsx)(n.code,{children:"@aws-sdk/client-s3"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"awsClientOptions"})," (object) (optional): Options to pass to S3Client class constructor."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"awsClientCapture"})," (function) (optional): Enable XRay by passing ",(0,s.jsx)(n.code,{children:"captureAWSv3Client"})," from ",(0,s.jsx)(n.code,{children:"aws-xray-sdk"})," in."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"disablePrefetch"})," (boolean) (default ",(0,s.jsx)(n.code,{children:"false"}),"): On cold start requests will trigger early if they can. Setting ",(0,s.jsx)(n.code,{children:"awsClientAssumeRole"})," disables prefetch."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"NOTES:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The response from the handler must match the allowed parameters for ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#writeGetObjectResponse-property",children:(0,s.jsx)(n.code,{children:"S3.writeGetObjectResponse"})}),", excluding ",(0,s.jsx)(n.code,{children:"RequestRoute"})," and ",(0,s.jsx)(n.code,{children:"RequestToken"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["XRay doesn't support tracing of ",(0,s.jsx)(n.code,{children:"fetch"}),", you will need a workaround, see ",(0,s.jsx)(n.a,{href:"https://github.com/aws/aws-xray-sdk-node/issues/531#issuecomment-1378562164",children:"https://github.com/aws/aws-xray-sdk-node/issues/531#issuecomment-1378562164"})]}),"\n",(0,s.jsxs)(n.li,{children:["Lambda is required to have IAM permission for ",(0,s.jsx)(n.code,{children:"s3-object-lambda:WriteGetObjectResponse"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"sample-usage",children:"Sample usage"}),"\n",(0,s.jsx)(n.h3,{id:"stream",children:"Stream"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"import zlib from 'zlib'\nimport middy from '@middy/core'\nimport s3ObjectResponse from '@middy/s3-object-response'\n\nconst lambdaHandler = (event, context) => {\n  const readStream = await context.s3ObjectFetch.then(res => res.body)\n  const transformStream = zlib.createBrotliCompress()\n  return {\n    Body: readStream.pipe(transformStream)\n  }\n}\n\nexport const handler = middy().use(s3ObjectResponse()).handler(lambdaHandler)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"json",children:"JSON"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"import zlib from 'zlib'\nimport middy from '@middy/core'\nimport s3ObjectResponse from '@middy/s3-object-response'\n\nconst lambdaHandler = async (event, context) => {\n  let body = await context.s3ObjectFetch.then((res) => res.json())\n  // change body\n  return {\n    Body: JSON.stringify(body)\n  }\n}\n\nexport const handler = middy().use(s3ObjectResponse()).handler(lambdaHandler)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"bundling",children:"Bundling"}),"\n",(0,s.jsxs)(n.p,{children:["To exclude ",(0,s.jsx)(n.code,{children:"@aws-sdk"})," add ",(0,s.jsx)(n.code,{children:"@aws-sdk/client-s3"})," to the exclude list."]})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>l});t(7294);var s=t(6010);const r={tabItem:"tabItem_Ymn6"};var a=t(5893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,l),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var s=t(7294),r=t(6010),a=t(2466),l=t(6550),o=t(469),i=t(1980),d=t(7392),c=t(12);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=p(e),[l,i]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[d,u]=h({queryString:t,groupId:r}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,c.Nk)(t);return[r,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),j=(()=>{const e=d??b;return m({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{j&&i(j)}),[j]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,a]),tabValues:a}}var f=t(2389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(5893);function v(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.o5)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),r=o[t].value;r!==s&&(d(n),l(r))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>i.push(e),onKeyDown:u,onClick:c,...a,className:(0,r.Z)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",j.tabList),children:[(0,x.jsx)(v,{...e,...n}),(0,x.jsx)(g,{...e,...n})]})}function w(e){const n=(0,f.Z)();return(0,x.jsx)(y,{...e,children:u(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var s=t(7294);const r={},a=s.createContext(r);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);