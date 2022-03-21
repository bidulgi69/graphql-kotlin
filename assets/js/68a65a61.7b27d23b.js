"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[3219],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return t?a.createElement(f,i(i({ref:n},c),{},{components:t})):a.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(7294);function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},9877:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(7462),r=t(7294),l=t(2389),i=t(3725),o=t(6010);const s="tabItem_LplD";function u(e){var n,t,l,u=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,i.lx)(h,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(n=null!=p?p:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=v[0])?void 0:l.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,i.UB)(),g=k.tabGroupChoices,I=k.setTabGroupChoices,x=(0,r.useState)(b),S=x[0],N=x[1],w=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=g[m];null!=T&&T!==S&&h.some((function(e){return e.value===T}))&&N(T)}var C=function(e){var n=e.currentTarget,t=w.indexOf(n),a=h[t].value;a!==S&&(O(n),N(a),null!=m&&I(m,a))},E=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.currentTarget)+1;t=w[a]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.currentTarget)-1;t=w[r]||w[w.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},f)},h.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===n?0:-1,"aria-selected":S===n,key:n,ref:function(e){return w.push(e)},onKeyDown:E,onFocus:C,onClick:C},l,{className:(0,o.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":S===n})}),null!=t?t:n)}))),u?(0,r.cloneElement)(v.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==S})}))))}function c(e){var n=(0,l.Z)();return r.createElement(u,(0,a.Z)({key:String(n)},e))}},1489:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>v,frontMatter:()=>u,metadata:()=>p,toc:()=>m});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),i=t(9877),o=t(8215),s=["components"],u={id:"client-features",title:"Client Features"},c=void 0,p={unversionedId:"client/client-features",id:"version-4.x.x/client/client-features",title:"Client Features",description:"Jackson and Kotlinx Serialization Support",source:"@site/versioned_docs/version-4.x.x/client/client-features.mdx",sourceDirName:"client",slug:"/client/client-features",permalink:"/graphql-kotlin/docs/4.x.x/client/client-features",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/client/client-features.mdx",tags:[],version:"4.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1647879376,formattedLastUpdatedAt:"3/21/2022",frontMatter:{id:"client-features",title:"Client Features"},sidebar:"version-4.x.x/docs",previous:{title:"Client Overview",permalink:"/graphql-kotlin/docs/4.x.x/client/client-overview"},next:{title:"Client Customization",permalink:"/graphql-kotlin/docs/4.x.x/client/client-customization"}},d={},m=[{value:"Jackson and Kotlinx Serialization Support",id:"jackson-and-kotlinx-serialization-support",level:2},{value:"Polymorphic Types Support",id:"polymorphic-types-support",level:2},{value:"Default Enum Values",id:"default-enum-values",level:2},{value:"Auto Generated Documentation",id:"auto-generated-documentation",level:2},{value:"Native Support for Coroutines",id:"native-support-for-coroutines",level:2},{value:"Batch Operation Support",id:"batch-operation-support",level:2}],f={toc:m};function v(e){var n=e.components,t=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"jackson-and-kotlinx-serialization-support"},"Jackson and Kotlinx Serialization Support"),(0,l.kt)("p",null,"GraphQL Kotlin supports generation of client data models that are compatible with both ",(0,l.kt)("inlineCode",{parentName:"p"},"Jackson")," (default) and ",(0,l.kt)("inlineCode",{parentName:"p"},"kotlinx.serialization"),"\nformats. Build plugins and ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-client")," default to use ",(0,l.kt)("inlineCode",{parentName:"p"},"Jackson")," whereas ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-ktor-client"),"\ndefaults to ",(0,l.kt)("inlineCode",{parentName:"p"},"kotlinx.serialization"),"."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/client/client-serialization"},"client serialization documentation")," for additional details."),(0,l.kt)("h2",{id:"polymorphic-types-support"},"Polymorphic Types Support"),(0,l.kt)("p",null,"GraphQL supports polymorphic types through unions and interfaces which can be represented in Kotlin as marker and\nregular interfaces. In order to ensure generated objects are not empty, GraphQL queries referencing polymorphic types\nhave to ",(0,l.kt)("strong",{parentName:"p"},"explicitly specify all implementations"),". Polymorphic queries also have to explicitly request ",(0,l.kt)("inlineCode",{parentName:"p"},"__typename"),"\nfield so it can be used to Jackson correctly distinguish between different implementations."),(0,l.kt)("p",null,"Given example schema"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  interfaceQuery: BasicInterface!\n}\n\ninterface BasicInterface {\n  id: Int!\n  name: String!\n}\n\ntype FirstInterfaceImplementation implements BasicInterface {\n  id: Int!\n  intValue: Int!\n  name: String!\n}\n\ntype SecondInterfaceImplementation implements BasicInterface {\n  floatValue: Float!\n  id: Int!\n  name: String!\n}\n")),(0,l.kt)("p",null,"We can query interface field as"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"query PolymorphicQuery {\n  interfaceQuery {\n    __typename\n    id\n    name\n    ... on FirstInterfaceImplementation {\n      intValue\n    }\n    ... on SecondInterfaceImplementation {\n      floatValue\n    }\n  }\n}\n")),(0,l.kt)("p",null,"Which will generate following data models"),(0,l.kt)(i.Z,{defaultValue:"jackson",values:[{label:"Jackson",value:"jackson"},{label:"kotlinx.serialization",value:"kotlinx"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"jackson",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@JsonTypeInfo(\n  use = JsonTypeInfo.Id.NAME,\n  include = JsonTypeInfo.As.PROPERTY,\n  property = "__typename"\n)\n@JsonSubTypes(value = [com.fasterxml.jackson.annotation.JsonSubTypes.Type(value =\n    FirstInterfaceImplementation::class,\n    name="FirstInterfaceImplementation"),com.fasterxml.jackson.annotation.JsonSubTypes.Type(value\n    = SecondInterfaceImplementation::class, name="SecondInterfaceImplementation")])\ninterface BasicInterface {\n  abstract val id: Int\n  abstract val name: String\n}\n\ndata class FirstInterfaceImplementation(\n  override val id: Int,\n  override val name: String,\n  val intValue: Int\n) : BasicInterface\n\ndata class SecondInterfaceImplementation(\n  override val id: Int,\n  override val name: String,\n  val floatValue: Float\n) : BasicInterface\n'))),(0,l.kt)(o.Z,{value:"kotlinx",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Serializable\nsealed class BasicInterface {\n  abstract val id: Int\n  abstract val name: String\n}\n\n@Serializable\n@SerialName(value = "FirstInterfaceImplementation")\ndata class FirstInterfaceImplementation(\n  override val id: Int,\n  override val name: String,\n  val intValue: Int\n) : BasicInterface()\n\n@Serializable\n@SerialName(value = "SecondInterfaceImplementation")\ndata class SecondInterfaceImplementation(\n  override val id: Int,\n  override val name: String,\n  val floatValue: Float\n) : BasicInterface()\n')))),(0,l.kt)("h2",{id:"default-enum-values"},"Default Enum Values"),(0,l.kt)("p",null,"Enums represent predefined set of values. Adding additional enum values could be a potentially breaking change as your\nclients may not be able to process it. GraphQL Kotlin Client automatically adds default ",(0,l.kt)("inlineCode",{parentName:"p"},"__UNKNOWN_VALUE")," to all generated\nenums as a catch all safeguard for handling new enum values."),(0,l.kt)("h2",{id:"auto-generated-documentation"},"Auto Generated Documentation"),(0,l.kt)("p",null,"GraphQL Kotlin build plugins automatically pull in GraphQL descriptions of the queried fields from the target schema and\nadd it as KDoc to corresponding data models."),(0,l.kt)("p",null,"Given simple GraphQL object definition"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'"Some basic description"\ntype BasicObject {\n  "Unique identifier"\n  id: Int!\n  "Object name"\n  name: String!\n}\n')),(0,l.kt)("p",null,"Will result in a corresponding auto generated data class"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"/**\n * Some basic description\n */\ndata class BasicObject(\n  /**\n   * Unique identifier\n   */\n  val id: Int,\n  /**\n   * Object name\n   */\n  val name: String\n)\n")),(0,l.kt)("h2",{id:"native-support-for-coroutines"},"Native Support for Coroutines"),(0,l.kt)("p",null,"GraphQL Kotlin Client is a generic interface that exposes ",(0,l.kt)("inlineCode",{parentName:"p"},"execute")," methods that will suspend your GraphQL operation until\nit gets a response back without blocking the underlying thread. Reference Ktor and Spring WebClient based implementations\noffer fully asynchronous communication through Kotlin coroutines. In order to fetch data asynchronously you should wrap\nyour client execution in ",(0,l.kt)("inlineCode",{parentName:"p"},"launch")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"async")," coroutine builder and explicitly ",(0,l.kt)("inlineCode",{parentName:"p"},"await")," for their results."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/reference/coroutines-overview.html"},"Kotlin coroutines documentation")," for additional details."),(0,l.kt)("h2",{id:"batch-operation-support"},"Batch Operation Support"),(0,l.kt)("p",null,"GraphQL Kotlin Clients provide out of the box support for batching multiple client operations into a single GraphQL request.\nBatch requests are sent as an array of individual GraphQL requests and clients expect the server to respond with a corresponding\narray of GraphQL responses. Each response is then deserialized to a corresponding result type."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val client = GraphQLKtorClient(url = URL("http://localhost:8080/graphql"))\nval firstQuery = FirstQuery(variables = FirstQuery.Variables(foo = "bar"))\nval secondQuery = SecondQuery(variables = SecondQuery.Variables(foo = "baz"))\n\nval results: List<GraphQLResponse<*>> = client.execute(listOf(firstQuery, secondQuery))\n')))}v.isMDXComponent=!0}}]);