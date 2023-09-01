"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[4785],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,y=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(y,i(i({ref:t},d),{},{components:n})):r.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7123:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"API Gateway (WebSocket)"},i=void 0,s={unversionedId:"events/api-gateway-ws",id:"events/api-gateway-ws",title:"API Gateway (WebSocket)",description:"This page is a work in progress. If you want to help us to make this page better, please consider contributing on GitHub.",source:"@site/docs/events/api-gateway-ws.md",sourceDirName:"events",slug:"/events/api-gateway-ws",permalink:"/docs/events/api-gateway-ws",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/events/api-gateway-ws.md",tags:[],version:"current",lastUpdatedAt:1693532470,formattedLastUpdatedAt:"Sep 1, 2023",frontMatter:{title:"API Gateway (WebSocket)"},sidebar:"tutorialSidebar",previous:{title:"API Gateway (REST)",permalink:"/docs/events/api-gateway-rest"},next:{title:"Application Load Balancer",permalink:"/docs/events/application-load-balancer"}},l={},c=[{value:"AWS Documentation",id:"aws-documentation",level:2},{value:"Example",id:"example",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This page is a work in progress. If you want to help us to make this page better, please consider contributing on GitHub.")),(0,a.kt)("h2",{id:"aws-documentation"},"AWS Documentation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/lambda/latest/dg/services-apigateway.html"},"Using AWS Lambda with Amazon API Gateway")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api.html"},"Working with WebSocket APIs"))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport wsJsonBodyParserMiddleware from '@middy/ws-json-body-parser'\nimport wsResponseMiddleware from '@middy/ws-response'\nimport wsRouterHandler from '@middy/ws-router'\n\nimport { handler as connectHandler } from './handlers/connect.js'\nimport { handler as disconnectHandler } from './handlers/disconnect.js'\nimport { handler as defaultHandler } from './handlers/default.js'\n\nconst routes = [\n  {\n    routeKey: '$connect',\n    handler: connectHandler\n  },\n  {\n    routeKey: '$disconnect',\n    handler: disconnectHandler\n  },\n  {\n    routeKey: 'default',\n    handler: defaultHandler\n  }\n]\n\nexport const handler = middy()\n  .use(wsJsonBodyParserMiddleware())\n  .use(wsResponseMiddleware())\n  .handler(wsRouterHandler(routes))\n\n")))}u.isMDXComponent=!0}}]);