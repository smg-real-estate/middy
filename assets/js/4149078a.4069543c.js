"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[4183],{3171:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>t,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>a});var s=n(5893),l=n(1151);const d={title:"Upgrade 2.x -> 3.x",sidebar_position:100},i=void 0,o={id:"upgrade/2-3",title:"Upgrade 2.x -> 3.x",description:'aka "The onError Reversal Update"',source:"@site/docs/upgrade/2-3.md",sourceDirName:"upgrade",slug:"/upgrade/2-3",permalink:"/docs/upgrade/2-3",draft:!1,unlisted:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/upgrade/2-3.md",tags:[],version:"current",lastUpdatedAt:1704839311,formattedLastUpdatedAt:"Jan 9, 2024",sidebarPosition:100,frontMatter:{title:"Upgrade 2.x -> 3.x",sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Upgrade 3.x -> 4.x",permalink:"/docs/upgrade/3-4"},next:{title:"Upgrade 1.x -> 2.x",permalink:"/docs/upgrade/1-2"}},t={},a=[{value:"Notable changes",id:"notable-changes",level:2},{value:"Core",id:"core",level:2},{value:"Util",id:"util",level:2},{value:"Middleware",id:"middleware",level:2},{value:"cloudwatch-metrics",id:"cloudwatch-metrics",level:3},{value:"do-not-wait-for-empty-event-loop",id:"do-not-wait-for-empty-event-loop",level:3},{value:"error-logger",id:"error-logger",level:3},{value:"event-normalizer",id:"event-normalizer",level:3},{value:"http-content-encoding",id:"http-content-encoding",level:3},{value:"http-content-negotiation",id:"http-content-negotiation",level:3},{value:"http-cors",id:"http-cors",level:3},{value:"http-error-handler",id:"http-error-handler",level:3},{value:"http-event-normalizer",id:"http-event-normalizer",level:3},{value:"http-header-normalizer",id:"http-header-normalizer",level:3},{value:"http-json-body-parser",id:"http-json-body-parser",level:3},{value:"http-multipart-body-parser",id:"http-multipart-body-parser",level:3},{value:"http-partial-response",id:"http-partial-response",level:3},{value:"http-response-serializer",id:"http-response-serializer",level:3},{value:"http-router",id:"http-router",level:3},{value:"http-security-headers",id:"http-security-headers",level:3},{value:"http-urlencode-body-parser",id:"http-urlencode-body-parser",level:3},{value:"http-urlencode-path-parser",id:"http-urlencode-path-parser",level:3},{value:"input-output-logger",id:"input-output-logger",level:3},{value:"rds-signer",id:"rds-signer",level:3},{value:"s3-key-normalizer",id:"s3-key-normalizer",level:3},{value:"s3-object-response",id:"s3-object-response",level:3},{value:"secrets-manager",id:"secrets-manager",level:3},{value:"service-discovery",id:"service-discovery",level:3},{value:"sqs-json-body-parser",id:"sqs-json-body-parser",level:3},{value:"sqs-partial-batch-failure",id:"sqs-partial-batch-failure",level:3},{value:"ssm",id:"ssm",level:3},{value:"sts",id:"sts",level:3},{value:"validator",id:"validator",level:3},{value:"warmup",id:"warmup",level:3},{value:"ws-json-body-parser",id:"ws-json-body-parser",level:3},{value:"ws-response",id:"ws-response",level:3},{value:"ws-router",id:"ws-router",level:3},{value:"Notes",id:"notes",level:2}];function c(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:'aka "The onError Reversal Update"'}),"\n",(0,s.jsx)(r.p,{children:"Version 3.x of Middy no longer supports Node.js versions 12.x. You are highly encouraged to move to Node.js 16.x.\nWith the Node.js version change all packages are now ECMAScript Modules along side CommonJS Modules."}),"\n",(0,s.jsx)(r.h2,{id:"notable-changes",children:"Notable changes"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"New WebSocket middlewares"}),"\n",(0,s.jsx)(r.li,{children:"HTTP & WebSocket Routers!"}),"\n",(0,s.jsx)(r.li,{children:"Better error handling"}),"\n",(0,s.jsx)(r.li,{children:"Timeout error handling"}),"\n",(0,s.jsxs)(r.li,{children:["Errors now use ",(0,s.jsx)(r.code,{children:"{ cause }"})," for better context"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"core",children:"Core"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"onError"})," middleware stack order reversed to match ",(0,s.jsx)(r.code,{children:"after"})," ",(0,s.jsx)(r.strong,{children:"[Breaking Change]"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["If you only use ",(0,s.jsx)(r.code,{children:"@middy/*"})," middlewares no change should be required"]}),"\n",(0,s.jsxs)(r.li,{children:["This change has trickle down effects on middlewares with ",(0,s.jsx)(r.code,{children:"onError"})," (see below for details)"]}),"\n",(0,s.jsxs)(r.li,{children:["If you're handling errors yourself here are some things to review:","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Attach near the end so it is triggered first (likely already done)"}),"\n",(0,s.jsxs)(r.li,{children:["Remove ",(0,s.jsx)(r.code,{children:"return response"}),", this will short circuit the response and block later middleware from modifying the response"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["lambdaHandler now passes ",(0,s.jsx)(r.code,{children:"{signal}"})," from ",(0,s.jsx)(r.code,{children:"AbortController"})," to allow for ending lambda early to handle timeout errors"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"plugin"})," argument now supports:","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"internal"}),": Allow the use of ",(0,s.jsx)(r.code,{children:"new Proxy()"})," for smarter triggering in advanced use cases."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"timeoutEarlyInMillis"}),": When before lambda timeout to trigger early exit. Default ",(0,s.jsx)(r.code,{children:"5"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"timeoutEarlyResponse"}),": Function to throw a custom error or return a pre-set value. Default ",(0,s.jsx)(r.code,{children:"() => { throw new Error('Timeout') }"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["Added ",(0,s.jsx)(r.code,{children:".handler()"})," method to allow easier understanding of the execution cycle"]}),"\n",(0,s.jsxs)(r.li,{children:["Deprecate ",(0,s.jsx)(r.code,{children:"applyMiddleware()"})," and ",(0,s.jsx)(r.code,{children:"__middlewares"})," ",(0,s.jsx)(r.strong,{children:"[Breaking Change]"})]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"util",children:"Util"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"getInternal"})," error now includes ",(0,s.jsx)(r.code,{children:"cause"})," set to an array of Errors"]}),"\n",(0,s.jsxs)(r.li,{children:["Catch when ",(0,s.jsx)(r.code,{children:"X-Ray"})," is applied outside of handler invocation scope"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"normalizeHttpResponse"})," now takes ",(0,s.jsx)(r.code,{children:"request"})," and mutates response ",(0,s.jsx)(r.strong,{children:"[Breaking Change]"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"getCache"})," will return ",(0,s.jsx)(r.code,{children:"{}"})," instead of ",(0,s.jsx)(r.code,{children:"undefined"})," when not found ",(0,s.jsx)(r.strong,{children:"[Breaking Change]"})]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"middleware",children:"Middleware"}),"\n",(0,s.jsx)(r.h3,{id:"cloudwatch-metrics",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/cloudwatch-metrics",children:"cloudwatch-metrics"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"do-not-wait-for-empty-event-loop",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/do-not-wait-for-empty-event-loop",children:"do-not-wait-for-empty-event-loop"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"error-logger",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/error-logger",children:"error-logger"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"event-normalizer",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/event-normalizer",children:"event-normalizer"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Add support for all missing AWS events"}),"\n",(0,s.jsx)(r.li,{children:"Refactored for performance improvements"}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"http-content-encoding",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-content-encoding",children:"http-content-encoding"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["[New] Applies ",(0,s.jsx)(r.code,{children:"brotli"}),", ",(0,s.jsx)(r.code,{children:"gzip"}),", ands ",(0,s.jsx)(r.code,{children:"deflate"})," compression to response body"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"http-content-negotiation",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-content-negotiation",children:"http-content-negotiation"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Add in ",(0,s.jsx)(r.code,{children:"defaultToFirstLanguage"})," to allow fallback to a safe language to use"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"http-cors",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-cors",children:"http-cors"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"onError"})," will not modify response unless error has been handled"]}),"\n",(0,s.jsx)(r.li,{children:"Small refactor for performance improvements"}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"http-error-handler",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-error-handler",children:"http-error-handler"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["No longer returns the response to short circuit the middleware stack to allow for easier use now that ",(0,s.jsx)(r.code,{children:"onError"})," is called in reverse order."]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"http-event-normalizer",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-event-normalizer",children:"http-event-normalizer"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Option ",(0,s.jsx)(r.code,{children:"payloadFormatVersion"})," no longer needed"]}),"\n",(0,s.jsxs)(r.li,{children:["Will now throw error if not an http event ",(0,s.jsx)(r.strong,{children:"[Breaking Change]"})]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"http-header-normalizer",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-header-normalizer",children:"http-header-normalizer"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Modified so that all headers are set to lowercase when ",(0,s.jsx)(r.code,{children:"canonical:false"})," ",(0,s.jsx)(r.strong,{children:"[Breaking Change]"})]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"http-json-body-parser",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-json-body-parser",children:"http-json-body-parser"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"http-multipart-body-parser",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-multipart-body-parser",children:"http-multipart-body-parser"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Change default charset from ",(0,s.jsx)(r.code,{children:"binary"}),"/",(0,s.jsx)(r.code,{children:"latin1"})," to ",(0,s.jsx)(r.code,{children:"utf-8"}),". ",(0,s.jsx)(r.strong,{children:"[Breaking Change]"})]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"http-partial-response",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-partial-response",children:"http-partial-response"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"http-response-serializer",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-response-serializer",children:"http-response-serializer"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Renamed ",(0,s.jsx)(r.code,{children:"default"})," option to ",(0,s.jsx)(r.code,{children:"defaultContentType"})," to improve maintainability ",(0,s.jsx)(r.strong,{children:"[Breaking Change]"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"onError"})," will not modify response unless error has been handled"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"http-router",children:(0,s.jsx)(r.a,{href:"/docs/routers/http-router",children:"http-router"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"[New] Allow re-routing of events to different handlers"}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"http-security-headers",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-security-headers",children:"http-security-headers"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"onError"})," will not modify response unless error has been handled"]}),"\n",(0,s.jsxs)(r.li,{children:["Complete rewrite of options and inclusion of new HTML only headers ",(0,s.jsx)(r.strong,{children:"[Breaking Change]"})]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"http-urlencode-body-parser",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-urlencode-body-parser",children:"http-urlencode-body-parser"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"http-urlencode-path-parser",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-urlencode-path-parser",children:"http-urlencode-path-parser"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"input-output-logger",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/input-output-logger",children:"input-output-logger"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Add in new option to mask instead of omit a path."}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"rds-signer",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/rds-signer",children:"rds-signer"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Deprecated ",(0,s.jsx)(r.code,{children:"setToEnv"})," option due to possible security misuse ",(0,s.jsx)(r.strong,{children:"[Breaking Change]"})]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"s3-key-normalizer",children:"s3-key-normalizer"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Deprecated in favour of ",(0,s.jsx)(r.a,{href:"/docs/middlewares/event-normalizer",children:(0,s.jsx)(r.code,{children:"event-normalizer"})}),", v2.x compatible with v3"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"s3-object-response",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/s3-object-response",children:"s3-object-response"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"secrets-manager",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/secrets-manager",children:"secrets-manager"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Deprecated ",(0,s.jsx)(r.code,{children:"setToEnv"})," option due to possible security misuse ",(0,s.jsx)(r.strong,{children:"[Breaking Change]"})]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"service-discovery",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/service-discovery",children:"service-discovery"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"[New] Allow easy access to discoveryInstances"}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"sqs-json-body-parser",children:"sqs-json-body-parser"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Deprecated in favour of ",(0,s.jsx)(r.a,{href:"/docs/middlewares/event-normalizer",children:(0,s.jsx)(r.code,{children:"event-normalizer"})}),", v2.x compatible with v3"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"sqs-partial-batch-failure",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/sqs-partial-batch-failure",children:"sqs-partial-batch-failure"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Complete rewrite to take advantage of ",(0,s.jsx)(r.a,{href:"https://aws.amazon.com/about-aws/whats-new/2021/11/aws-lambda-partial-batch-response-sqs-event-source/",children:"https://aws.amazon.com/about-aws/whats-new/2021/11/aws-lambda-partial-batch-response-sqs-event-source/"}),", will no longer throw an error if any message fails ",(0,s.jsx)(r.strong,{children:"[Breaking Change]"})]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"ssm",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/ssm",children:"ssm"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Deprecated ",(0,s.jsx)(r.code,{children:"setToEnv"})," option ",(0,s.jsx)(r.strong,{children:"[Breaking Change]"})]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"sts",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/sts",children:"sts"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"validator",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/validator",children:"validator"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Change where errors are stored, from ",(0,s.jsx)(r.code,{children:"request.error.details"})," to ",(0,s.jsx)(r.code,{children:"request.error.cause"})," ",(0,s.jsx)(r.strong,{children:"[Breaking Change]"})]}),"\n",(0,s.jsxs)(r.li,{children:["Add new options ",(0,s.jsx)(r.code,{children:"eventSchema"}),", ",(0,s.jsx)(r.code,{children:"contextSchema"}),", ",(0,s.jsx)(r.code,{children:"responseSchema"}),". ",(0,s.jsx)(r.code,{children:"inputSchema"})," and ",(0,s.jsx)(r.code,{children:"outputSchema"})," become aliases."]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"warmup",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/warmup",children:"warmup"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"ws-json-body-parser",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/ws-json-body-parser",children:"ws-json-body-parser"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"[New] Parse body from WebSocket event"}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"ws-response",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/ws-response",children:"ws-response"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"[New] Post responses to WebSocket API Gateway"}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"ws-router",children:(0,s.jsx)(r.a,{href:"/docs/routers/ws-router",children:"ws-router"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"[New] Allow re-routing of events to different handlers"}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(r.p,{children:["If you still need ",(0,s.jsx)(r.code,{children:"setToEnv"})," you can do something like so:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:"middy(lambdaHandler)\n  .use(/*...*/)\n  .before(async (request) => {\n    const values = await getInternal(['NODE_ENV'], request)\n    process.env.NODE_ENV = values.NODE_ENV\n  })\n"})})]})}function h(e={}){const{wrapper:r}={...(0,l.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>o,a:()=>i});var s=n(7294);const l={},d=s.createContext(l);function i(e){const r=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);