"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[9310],{6432:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=t(5893),r=t(1151);const a={sidebar_position:1,title:"Introduction",slug:"/"},o=void 0,s={id:"intro/intro",title:"Introduction",description:"What is middy",source:"@site/docs/intro/01-intro.md",sourceDirName:"intro",slug:"/",permalink:"/docs/",draft:!1,unlisted:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/intro/01-intro.md",tags:[],version:"current",lastUpdatedAt:1710976750,formattedLastUpdatedAt:"Mar 20, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction",slug:"/"},sidebar:"tutorialSidebar",previous:{title:"Intro to Middy",permalink:"/docs/category/intro-to-middy"},next:{title:"Getting started",permalink:"/docs/intro/getting-started"}},d={},l=[{value:"What is middy",id:"what-is-middy",level:2},{value:"A quick example",id:"a-quick-example",level:2},{value:"Why?",id:"why",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"what-is-middy",children:"What is middy"}),"\n",(0,i.jsxs)(n.p,{children:["Middy is a very simple ",(0,i.jsx)(n.strong,{children:"middleware engine"})," that allows you to simplify your ",(0,i.jsx)(n.strong,{children:"AWS Lambda"})," code when using ",(0,i.jsx)(n.strong,{children:"Node.js"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"If you have used web frameworks like Express, then you will be familiar with the concepts adopted in Middy and you will be able to get started very quickly."}),"\n",(0,i.jsx)(n.p,{children:"A middleware engine allows you to focus on the strict business logic of your Lambda and then attach additional common elements like authentication, authorization, validation, serialization, etc. in a modular and reusable way by decorating the main business logic."}),"\n",(0,i.jsx)(n.h2,{id:"a-quick-example",children:"A quick example"}),"\n",(0,i.jsx)(n.p,{children:"Code is better than 10,000 words, so let's jump into an example."}),"\n",(0,i.jsx)(n.p,{children:"Let's assume you are building a JSON API to process a payment:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'title="handler.js"',children:"// import core\nimport middy from '@middy/core' // esm Node v14+\n//const middy = require('@middy/core') // commonjs Node v12+\n\n// import some middlewares\nimport jsonBodyParser from '@middy/http-json-body-parser'\nimport httpErrorHandler from '@middy/http-error-handler'\nimport validator from '@middy/validator'\nimport { transpileSchema } from '@middy/validator/transpile'\n\n// This is your common handler, in no way different than what you are used to doing every day in AWS Lambda\nconst lambdaHandler = async (event, context) => {\n  // we don't need to deserialize the body ourself as a middleware will be used to do that\n  const { creditCardNumber, expiryMonth, expiryYear, cvc, nameOnCard, amount } =\n    event.body\n\n  // do stuff with this data\n  // ...\n\n  const response = { result: 'success', message: 'payment processed correctly' }\n  return { statusCode: 200, body: JSON.stringify(response) }\n}\n\n// Notice that in the handler you only added base business logic (no deserialization,\n// validation or error handler), we will add the rest with middlewares\n\nconst schema = {\n  type: 'object',\n  properties: {\n    body: {\n      type: 'object',\n      properties: {\n        creditCardNumber: {\n          type: 'string',\n          minLength: 12,\n          maxLength: 19,\n          pattern: '\\\\d+'\n        },\n        expiryMonth: { type: 'integer', minimum: 1, maximum: 12 },\n        expiryYear: { type: 'integer', minimum: 2017, maximum: 2027 },\n        cvc: { type: 'string', minLength: 3, maxLength: 4, pattern: '\\\\d+' },\n        nameOnCard: { type: 'string' },\n        amount: { type: 'number' }\n      },\n      required: ['creditCardNumber'] // Insert here all required event properties\n    }\n  }\n}\n\n// Let's \"middyfy\" our handler, then we will be able to attach middlewares to it\nexport const handler = middy()\n  .use(jsonBodyParser()) // parses the request body when it's a JSON and converts it to an object\n  .use(validator({ eventSchema: transpileSchema(schema) })) // validates the input\n  .use(httpErrorHandler()) // handles common http errors and returns proper responses\n  .handler(lambdaHandler)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"why",children:"Why?"}),"\n",(0,i.jsx)(n.p,{children:"One of the main strengths of serverless and AWS Lambda is that, from a developer\nperspective, your focus is mostly shifted toward implementing business logic."}),"\n",(0,i.jsx)(n.p,{children:"Anyway, when you are writing a handler, you still have to deal with some common technical concerns\noutside business logic, like input parsing and validation, output serialization,\nerror handling, etc."}),"\n",(0,i.jsx)(n.p,{children:"Very often, all this necessary code ends up polluting the pure business logic code in\nyour handlers, making the code harder to read and to maintain."}),"\n",(0,i.jsxs)(n.p,{children:["In other contexts, like generic web frameworks (",(0,i.jsx)(n.a,{href:"http://fastify.io",children:"fastify"}),", ",(0,i.jsx)(n.a,{href:"https://hapijs.com/",children:"hapi"}),", ",(0,i.jsx)(n.a,{href:"http://expressjs.com/",children:"express"}),", etc.), this\nproblem has been solved using the ",(0,i.jsx)(n.a,{href:"https://www.packtpub.com/mapt/book/web_development/9781783287314/4/ch04lvl1sec33/middleware",children:"middleware pattern"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["This pattern allows developers to isolate these common technical concerns into\n",(0,i.jsx)(n.em,{children:'"steps"'})," that ",(0,i.jsx)(n.em,{children:"decorate"})," the main business logic code.\nMiddleware functions are generally written as independent modules and then plugged into\nthe application in a configuration step, thus not polluting the main business logic\ncode that remains clean, readable, and easy to maintain."]}),"\n",(0,i.jsx)(n.p,{children:"Since we couldn't find a similar approach for AWS Lambda handlers, we decided\nto create middy, our own middleware framework for serverless in AWS land."})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var i=t(7294);const r={},a=i.createContext(r);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);