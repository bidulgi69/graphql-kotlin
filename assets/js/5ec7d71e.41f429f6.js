"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[6140],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,v=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return t?n.createElement(v,s(s({ref:r},c),{},{components:t})):n.createElement(v,s({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=d;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7110:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),s=["components"],a={id:"server-subscriptions",title:"Subscriptions"},p=void 0,l={unversionedId:"server/server-subscriptions",id:"server/server-subscriptions",title:"Subscriptions",description:"If you are using one of the official server implementations for GraphQL Kotlin, it will have subscription handling setup for you.",source:"@site/docs/server/server-subscriptions.md",sourceDirName:"server",slug:"/server/server-subscriptions",permalink:"/graphql-kotlin/docs/server/server-subscriptions",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/server/server-subscriptions.md",tags:[],version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1647879376,formattedLastUpdatedAt:"3/21/2022",frontMatter:{id:"server-subscriptions",title:"Subscriptions"},sidebar:"docs",previous:{title:"Data Loaders",permalink:"/graphql-kotlin/docs/server/data-loaders"},next:{title:"Spring Server Overview",permalink:"/graphql-kotlin/docs/server/spring-server/spring-overview"}},c={},u=[],d={toc:u};function f(e){var r=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you are using one of the official server implementations for GraphQL Kotlin, it will have subscription handling setup for you."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("inlineCode",{parentName:"li"},"graphql-kotlin-spring-server")," ",(0,i.kt)("a",{parentName:"li",href:"/graphql-kotlin/docs/server/spring-server/spring-subscriptions"},"subscriptions"))),(0,i.kt)("p",null,"Subscriptions require a more indepth knoweldge of how the specific server library handles protocols and streaming.\nSince we can only support ",(0,i.kt)("inlineCode",{parentName:"p"},"Publisher")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-java")," in this common library, we can not provide any common logic for subscriptions.\nTherefore you will still need to implement the route and request handling for subscriptions separately if you are not using a provided server implementation."))}f.isMDXComponent=!0}}]);