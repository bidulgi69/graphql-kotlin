"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[2177],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"annotations",title:"Annotations",original_id:"annotations"},c=void 0,l={unversionedId:"schema-generator/writing-schemas/annotations",id:"version-3.x.x/schema-generator/writing-schemas/annotations",title:"Annotations",description:"graphql-kotlin-schema-generator ships with a number of annotation classes to allow you to enhance your GraphQL schema",source:"@site/versioned_docs/version-3.x.x/schema-generator/writing-schemas/annotations.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/annotations",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/writing-schemas/annotations",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/writing-schemas/annotations.md",tags:[],version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1647879376,formattedLastUpdatedAt:"3/21/2022",frontMatter:{id:"annotations",title:"Annotations",original_id:"annotations"},sidebar:"version-3.x.x/docs",previous:{title:"Unions",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/writing-schemas/unions"},next:{title:"Nested Resolvers and Shared Arguments",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/writing-schemas/nested-arguments"}},p={},m=[],u={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," ships with a number of annotation classes to allow you to enhance your GraphQL schema\nfor things that can't be directly derived from Kotlin reflection."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../customizing-schemas/documenting-fields"},"@GraphQLDescription")," - Provide a description for a GraphQL field"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../customizing-schemas/directives"},"@GraphQLDirective")," - Registers directive on a GraphQL field"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../customizing-schemas/excluding-fields"},"@GraphQLIgnore")," - Exclude field from the GraphQL schema"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../customizing-schemas/renaming-fields"},"@GraphQLName")," - Override the name used for the type"),(0,i.kt)("li",{parentName:"ul"},"Kotlin built in ",(0,i.kt)("a",{parentName:"li",href:"../customizing-schemas/deprecating-schema"},"@Deprecated")," - Apply the GraphQL ",(0,i.kt)("inlineCode",{parentName:"li"},"@deprecated")," directive on the field")))}d.isMDXComponent=!0}}]);