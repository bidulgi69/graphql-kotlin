"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[1298],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,h=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return t?r.createElement(h,o(o({ref:n},u),{},{components:t})):r.createElement(h,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2739:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],l={id:"data-fetching-environment",title:"Data Fetching Environment",original_id:"data-fetching-environment"},c=void 0,p={unversionedId:"schema-generator/execution/data-fetching-environment",id:"version-3.x.x/schema-generator/execution/data-fetching-environment",title:"Data Fetching Environment",description:"Each resolver has access to a DataFetchingEnvironment that provides additional information about the currently executed query including information about what data is requested",source:"@site/versioned_docs/version-3.x.x/schema-generator/execution/data-fetching-environment.md",sourceDirName:"schema-generator/execution",slug:"/schema-generator/execution/data-fetching-environment",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/data-fetching-environment",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/execution/data-fetching-environment.md",tags:[],version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1647879376,formattedLastUpdatedAt:"3/21/2022",frontMatter:{id:"data-fetching-environment",title:"Data Fetching Environment",original_id:"data-fetching-environment"},sidebar:"version-3.x.x/docs",previous:{title:"Exceptions and Partial Data",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/exceptions"},next:{title:"Contextual Data",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/contextual-data"}},u={},s=[],d={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Each resolver has access to a ",(0,i.kt)("inlineCode",{parentName:"p"},"DataFetchingEnvironment")," that provides additional information about the currently executed query including information about what data is requested\nas well as details about current execution state. For more details on the ",(0,i.kt)("inlineCode",{parentName:"p"},"DataFetchingEnvironment")," please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://www.graphql-java.com/documentation/v14/data-fetching/"},"graphql-java documentation")),(0,i.kt)("p",null,"You can access this info by including the ",(0,i.kt)("inlineCode",{parentName:"p"},"DataFetchingEnvironment")," as one of the arguments to a Kotlin function. This argument will be automatically populated and injected\nduring the query execution but will not be included in the schema definition."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'\nclass Query {\n    fun printEnvironmentInfo(parentField: String): MyObject = MyObject()\n}\n\nclass MyObject {\n  fun printParentField(childField: String, environment: DataFetchingEnvironment): String {\n    val parentField = environment.executionStepInfo.parent.getArgument("parentField")\n    return "The parentField was $parentField and the childField was $childField"\n  }\n}\n\n')),(0,i.kt)("p",null,"This will produce the following schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"\ntype Query {\n  printEnvironmentInfo(parentField: String!): MyObject!\n}\n\ntype MyObject {\n  printParentField(childField: String!): String!\n}\n\n")),(0,i.kt)("p",null,"Then the following query would return ",(0,i.kt)("inlineCode",{parentName:"p"},'"The parentField was foo and the childField was bar"')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'\n{\n  printEnvironmentInfo(parentField: "foo") {\n    printParentField(childField: "bar")\n  }\n}\n\n')),(0,i.kt)("p",null,"You can also use this to retrieve arguments and query information from higher up the query chain. You can see a working\nexample in the ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-example")," module\n","[",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/examples/spring/src/main/kotlin/com/expediagroup/graphql/examples/query/EnvironmentQuery.kt"},"link"),"]."))}m.isMDXComponent=!0}}]);