"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[8786],{5585:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=n(5893),o=n(1151);const a={title:"S3 Object"},i=void 0,r={id:"events/s3-object",title:"S3 Object",description:"This page is a work in progress. If you want to help us to make this page better, please consider contributing on GitHub.",source:"@site/docs/events/s3-object.md",sourceDirName:"events",slug:"/events/s3-object",permalink:"/docs/events/s3-object",draft:!1,unlisted:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/events/s3-object.md",tags:[],version:"current",lastUpdatedAt:1704839311,formattedLastUpdatedAt:"Jan 9, 2024",frontMatter:{title:"S3 Object"},sidebar:"tutorialSidebar",previous:{title:"S3 Batch",permalink:"/docs/events/s3-batch"},next:{title:"S3",permalink:"/docs/events/s3"}},c={},d=[{value:"AWS Documentation",id:"aws-documentation",level:2},{value:"Example",id:"example",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsx)(t.p,{children:"This page is a work in progress. If you want to help us to make this page better, please consider contributing on GitHub."})}),"\n",(0,s.jsx)(t.h2,{id:"aws-documentation",children:"AWS Documentation"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html",children:"Transforming S3 Objects with S3 Object Lambda"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/transforming-objects.html",children:"Transforming objects with S3 Object Lambda"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"import middy from '@middy/core'\nimport s3ObjectResponseMiddleware from '@middy/s3-object-response'\nimport {captureAWSv3Client, captureHTTPsGlobal} from 'aws-xray-sdk-core'\n\nexport const handler = middy()\n  .use(s3ObjectResponseMiddleware({\n    awsClientCapture: captureAWSv3Client,\n    httpsCapture: captureHTTPsGlobal,\n    bodyType: 'promise'\n  }))\n  .handler((event, context, {signal}) => {\n    // ...\n  })\n"})})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var s=n(7294);const o={},a=s.createContext(o);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);