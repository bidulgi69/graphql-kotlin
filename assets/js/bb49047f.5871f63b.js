"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[5163],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={id:"documenting-fields",title:"Documenting Schema"},s=void 0,l={unversionedId:"schema-generator/customizing-schemas/documenting-fields",id:"schema-generator/customizing-schemas/documenting-fields",title:"Documenting Schema",description:"Since Javadocs are not available at runtime for introspection, graphql-kotlin-schema-generator includes an annotation",source:"@site/docs/schema-generator/customizing-schemas/documenting-fields.md",sourceDirName:"schema-generator/customizing-schemas",slug:"/schema-generator/customizing-schemas/documenting-fields",permalink:"/graphql-kotlin/docs/schema-generator/customizing-schemas/documenting-fields",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/customizing-schemas/documenting-fields.md",tags:[],version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1647879376,formattedLastUpdatedAt:"3/21/2022",frontMatter:{id:"documenting-fields",title:"Documenting Schema"},sidebar:"docs",previous:{title:"Generator Configuration & Hooks",permalink:"/graphql-kotlin/docs/schema-generator/customizing-schemas/generator-config"},next:{title:"Excluding Fields",permalink:"/graphql-kotlin/docs/schema-generator/customizing-schemas/excluding-fields"}},u={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Since Javadocs are not available at runtime for introspection, ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," includes an annotation\nclass ",(0,i.kt)("inlineCode",{parentName:"p"},"@GraphQLDescription")," that can be used to add schema descriptions to ",(0,i.kt)("em",{parentName:"p"},"any")," GraphQL schema element. The string value can be in the Markdown format."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'@GraphQLDescription("A useful widget")\ndata class Widget(\n  @GraphQLDescription("The widget\'s value that can be `null`")\n  val value: Int?\n)\n\nclass WidgetQuery {\n  @GraphQLDescription("Creates new widget for given ID")\n  fun widgetById(@GraphQLDescription("The special ingredient") id: Int): Widget? = Widget(id)\n}\n')),(0,i.kt)("p",null,"The above query would produce the following GraphQL schema:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'schema {\n  query: Query\n}\n\ntype Query {\n  """Creates new widget for given ID"""\n  widgetById(\n    """The special ingredient"""\n    id: Int!\n  ): Widget\n}\n\n"""A useful widget"""\ntype Widget {\n  """The widget\'s value that can be `null`"""\n  value: Int\n}\n')))}m.isMDXComponent=!0}}]);