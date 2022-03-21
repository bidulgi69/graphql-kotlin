"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[1045],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(h,i(i({ref:t},l),{},{components:a})):n.createElement(h,i({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3518:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>p});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],d={id:"advanced-features",title:"Advanced Features",original_id:"advanced-features"},s=void 0,c={unversionedId:"schema-generator/customizing-schemas/advanced-features",id:"version-3.x.x/schema-generator/customizing-schemas/advanced-features",title:"Advanced Features",description:"Adding Custom Additional Types",source:"@site/versioned_docs/version-3.x.x/schema-generator/customizing-schemas/advanced-features.md",sourceDirName:"schema-generator/customizing-schemas",slug:"/schema-generator/customizing-schemas/advanced-features",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/advanced-features",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/customizing-schemas/advanced-features.md",tags:[],version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1647879376,formattedLastUpdatedAt:"3/21/2022",frontMatter:{id:"advanced-features",title:"Advanced Features",original_id:"advanced-features"},sidebar:"version-3.x.x/docs",previous:{title:"Deprecating Schema",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/deprecating-schema"},next:{title:"Fetching Data",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/fetching-data"}},l={},p=[{value:"Adding Custom Additional Types",id:"adding-custom-additional-types",level:2},{value:"<code>SchemaGenerator::addAdditionalTypesWithAnnotation</code>",id:"schemageneratoraddadditionaltypeswithannotation",level:3},{value:"<code>SchemaGenerator::generateAdditionalTypes</code>",id:"schemageneratorgenerateadditionaltypes",level:3}],u={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"adding-custom-additional-types"},"Adding Custom Additional Types"),(0,o.kt)("p",null,"There are a couple ways you can add more types to the schema without having them be directly consumed by a type in your schema.\nThis may be required for ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/federated/apollo-federation"},"Apollo Federation"),", or maybe adding other interface implementations that are not picked up."),(0,o.kt)("h3",{id:"schemageneratoraddadditionaltypeswithannotation"},(0,o.kt)("inlineCode",{parentName:"h3"},"SchemaGenerator::addAdditionalTypesWithAnnotation")),(0,o.kt)("p",null,"This method is protected so if you override the ",(0,o.kt)("inlineCode",{parentName:"p"},"SchemaGenerator")," used you can call this method to add types that have a specific annotation.\nYou can see how this is used in ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/federation/FederatedSchemaGenerator.kt"},"an example"),"."),(0,o.kt)("h3",{id:"schemageneratorgenerateadditionaltypes"},(0,o.kt)("inlineCode",{parentName:"h3"},"SchemaGenerator::generateAdditionalTypes")),(0,o.kt)("p",null,"This method is called by ",(0,o.kt)("inlineCode",{parentName:"p"},"SchemaGenerator::get")," after all the queries, mutations, and subscriptions have been generated and it is going to add all the types saved in an internal set that were not generated by reflection.\nTo change the behaviour, you can update the set and then call the super method with the new value."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"\nclass CustomSchemaGenerator(config: SchemaGeneratorConfig) : SchemaGenerator(config) {\n\n    override fun generateAdditionalTypes(types: Set<KType>): Set<GraphQLType> {\n        val newTypes = types.toMutableSet().add(MyNewType()::class.createType())\n        return super.generateAdditionalTypes(newTypes)\n    }\n}\n\n")))}m.isMDXComponent=!0}}]);