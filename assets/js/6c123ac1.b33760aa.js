(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[2390],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,u=d["".concat(l,".").concat(h)]||d[h]||m[h]||r;return n?i.createElement(u,o(o({ref:t},p),{},{components:n})):i.createElement(u,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4232:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>p,default:()=>d});var i=n(2122),a=n(9756),r=(n(7294),n(3905)),o=["components"],s={id:"directives",title:"Directives"},l=void 0,c={unversionedId:"schema-generator/customizing-schemas/directives",id:"schema-generator/customizing-schemas/directives",isDocsHomePage:!1,title:"Directives",description:"GraphQL directives can be used to transform the schema types, fields and arguments as well as modify the runtime",source:"@site/docs/schema-generator/customizing-schemas/directives.md",sourceDirName:"schema-generator/customizing-schemas",slug:"/schema-generator/customizing-schemas/directives",permalink:"/graphql-kotlin/docs/schema-generator/customizing-schemas/directives",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/customizing-schemas/directives.md",version:"current",lastUpdatedBy:"Jilles van Gurp",lastUpdatedAt:1633555433,formattedLastUpdatedAt:"10/6/2021",frontMatter:{id:"directives",title:"Directives"},sidebar:"docs",previous:{title:"Renaming Fields",permalink:"/graphql-kotlin/docs/schema-generator/customizing-schemas/renaming-fields"},next:{title:"Deprecating Schema",permalink:"/graphql-kotlin/docs/schema-generator/customizing-schemas/deprecating-schema"}},p=[{value:"Default Directives",id:"default-directives",children:[]},{value:"Custom Directives",id:"custom-directives",children:[{value:"Naming Convention",id:"naming-convention",children:[]},{value:"Customizing Behavior",id:"customizing-behavior",children:[]}]},{value:"Directive Chaining",id:"directive-chaining",children:[]},{value:"Ignoring Directive Arguments",id:"ignoring-directive-arguments",children:[]}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"GraphQL directives can be used to transform the schema types, fields and arguments as well as modify the runtime\nbehavior of the query (e.g. implement access control, etc). Common use cases involve limiting functionality based on the\nuser authentication and authorization. While ",(0,r.kt)("a",{parentName:"p",href:"https://graphql.github.io/graphql-spec/draft/#sec-Type-System.Directives"},"GraphQL\nspec")," specifies two types of directives -\n",(0,r.kt)("inlineCode",{parentName:"p"},"executable")," (aka query) and ",(0,r.kt)("inlineCode",{parentName:"p"},"type system")," (aka schema) directives, only the latter one is supported by\n",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator"),"."),(0,r.kt)("h2",{id:"default-directives"},"Default Directives"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@deprecated")," - schema directive used to represent deprecated portion of the schema.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/customizing-schemas/deprecating-schema"},"@Deprecated")," annotation documentation for more details"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'type Query {\n  deprecatedQuery: Boolean! @deprecated(reason: "No longer supported")\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@skip")," - query directive that allows for conditional exclusion of fields or fragments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query myQuery($shouldSkip: Boolean) {\n  myField @skip(if: $shouldSkip)\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@include")," - query directive that allows for conditional inclusion of fields or fragments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query myQuery($shouldInclude: Boolean) {\n  myField @include(if: $shouldInclude)\n}\n")),(0,r.kt)("h2",{id:"custom-directives"},"Custom Directives"),(0,r.kt)("p",null,"Custom directives can be added to the schema using custom annotations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@GraphQLDirective(\n    name = "awesome",\n    description = "This element is great",\n    locations = [FIELD_DEFINITION]\n)\nannotation class AwesomeDirective(val value: String)\n\nclass MyQuery {\n    @AwesomeDirective("cool stuff")\n    val somethingGreat: String = "Hello World"\n}\n')),(0,r.kt)("p",null,"The directive will then added to the schema as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'# This element is great\ndirective @awesome(value: String) on FIELD_DEFINITION\n\ntype MyQuery {\n   somethingGreat: String @awesome("cool stuff")\n}\n')),(0,r.kt)("p",null,"Directives can be added to various places in the schema. See the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/graphql-java/graphql-java/blob/v13.0/src/main/java/graphql/introspection/Introspection.java#L332"},"graphql.introspection.Introspection.DirectiveLocation"),"\nenum from ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-java")," for a full list of valid locations."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"GraphQL directives are currently not available through introspection and you have to use SDL directly\ninstead (you can use convenient ",(0,r.kt)("inlineCode",{parentName:"p"},"print")," extension function of ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQLSchema"),"). See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/graphql/issues/300"},"GraphQL\nissue")," and corresponding ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/graphql-java/graphql-java/issues/1017"},"graphql-java\nissue")," for more details about the introspection issue."))),(0,r.kt)("h3",{id:"naming-convention"},"Naming Convention"),(0,r.kt)("p",null,"As described in the example above, the directive name in the schema will by default come from the\n",(0,r.kt)("inlineCode",{parentName:"p"},"@GraphQLDirective.name")," attribute which should follow ",(0,r.kt)("inlineCode",{parentName:"p"},"lowerCamelCase")," format. If this value is not specified, the\ndirective name will default to the normalized decapitalized name of the annotated annotation (eg: ",(0,r.kt)("inlineCode",{parentName:"p"},"awesomeDirective")," in\nthe example above)."),(0,r.kt)("h3",{id:"customizing-behavior"},"Customizing Behavior"),(0,r.kt)("p",null,"Directives allow you to customize the behavior of your schema based on some predefined conditions. Simplest way to\nmodify the default behavior of your GraphQLTypes is by providing your custom ",(0,r.kt)("inlineCode",{parentName:"p"},"KotlinSchemaDirectiveWiring")," through\n",(0,r.kt)("inlineCode",{parentName:"p"},"KotlinDirectiveWiringFactory")," factory used by your ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooks"),"."),(0,r.kt)("p",null,"Example of a directive that converts field to lowercase"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@GraphQLDirective(name = "lowercase", description = "Modifies the string field to lowercase")\nannotation class LowercaseDirective\n\nclass LowercaseSchemaDirectiveWiring : KotlinSchemaDirectiveWiring {\n\n    override fun onField(environment: KotlinFieldDirectiveEnvironment): GraphQLFieldDefinition {\n        val field = environment.element\n        val originalDataFetcher: DataFetcher<Any> = environment.getDataFetcher()\n\n        val lowerCaseFetcher = DataFetcherFactories.wrapDataFetcher(\n            originalDataFetcher,\n            BiFunction<DataFetchingEnvironment, Any, Any>{ _, value -> value.toString().toLowerCase() }\n        )\n        environment.setDataFetcher(lowerCaseFetcher)\n        return field\n    }\n}\n')),(0,r.kt)("p",null,"While you can manually apply all the runtime wirings to the corresponding GraphQL types directly in\n",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooks#onRewireGraphQLType"),", we recommend the usage of our\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/generator/directives/KotlinDirectiveWiringFactory.kt"},"KotlinDirectiveWiringFactory"),"\nto simplify the integrations. ",(0,r.kt)("inlineCode",{parentName:"p"},"KotlinDirectiveWiringFactory")," accepts a mapping of directives to corresponding wirings or\ncould be extended to provide the wirings through ",(0,r.kt)("inlineCode",{parentName:"p"},"KotlinDirectiveWiringFactory#getSchemaDirectiveWiring")," that accepts\n",(0,r.kt)("inlineCode",{parentName:"p"},"KotlinSchemaDirectiveEnvironment"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val queries = ...\nval customWiringFactory = KotlinDirectiveWiringFactory(\n    manualWiring = mapOf<String, KotlinSchemaDirectiveWiring>("lowercase" to LowercaseSchemaDirectiveWiring()))\nval customHooks = object : SchemaGeneratorHooks {\n    override val wiringFactory: KotlinDirectiveWiringFactory\n        get() = customWiringFactory\n}\nval schemaGeneratorConfig = SchemaGeneratorConfig(hooks = customHooks)\nval schema = toSchema(queries = queries, config = schemaGeneratorConfig)\n')),(0,r.kt)("p",null,"While providing directives on different schema elements you will be able to modify the underlying GraphQL types. Keep in\nmind though that data fetchers are used to resolve the fields so only field directives (and by association their\narguments directives) can modify runtime behavior based on the context and user input."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," prioritizes manual wiring mappings over the wirings provided by the ",(0,r.kt)("inlineCode",{parentName:"p"},"KotlinDirectiveWiringFactory#getSchemaDirectiveWiring"),".\nThis is a different behavior than ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-java")," which will first attempt to use ",(0,r.kt)("inlineCode",{parentName:"p"},"WiringFactory")," and then fallback to manual overrides."))),(0,r.kt)("p",null,"For more details please refer to the example usage of directives in our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples/server/spring-server"},"example\napp"),"."),(0,r.kt)("h2",{id:"directive-chaining"},"Directive Chaining"),(0,r.kt)("p",null,"Directives are applied in the order annotations are declared on the given object. Given"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Directive1\n@Directive2\nfun doSomething(): String {\n// does something\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Directive1")," will be applied first followed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"Directive2"),"."),(0,r.kt)("h2",{id:"ignoring-directive-arguments"},"Ignoring Directive Arguments"),(0,r.kt)("p",null,"Normally if you wanted to exclude a field or argument from the schema, you could use ",(0,r.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/customizing-schemas/excluding-fields"},"@GraphQLIgnore"),".\nHowever, due to reflection and kotlin limitations, the generated JVM code for interface arguments can only have annotations on getters."),(0,r.kt)("p",null,"This is easily fixable though using the ",(0,r.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/reference/annotations.html#annotation-use-site-targets"},(0,r.kt)("inlineCode",{parentName:"a"},"@get:")," target prefix"),"\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/pull/763"},"graphql-kotlin#763")," for more details."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@GraphQLDirective\nannotation class DirectiveWithIgnoredArgs(\n    val string: String,\n\n    @get:GraphQLIgnore\n    val ignoreMe: String\n)\n")),(0,r.kt)("p",null,"This will generate the following schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @directiveWithIgnoredArgs(\n  string: String!\n) on ...\n")))}d.isMDXComponent=!0}}]);