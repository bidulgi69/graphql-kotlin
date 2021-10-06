(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[6817],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,u=d["".concat(s,".").concat(h)]||d[h]||m[h]||a;return n?i.createElement(u,o(o({ref:t},p),{},{components:n})):i.createElement(u,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2044:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>p,default:()=>d});var i=n(2122),r=n(9756),a=(n(7294),n(3905)),o=["components"],l={id:"directives",title:"Directives",original_id:"directives"},s=void 0,c={unversionedId:"schema-generator/customizing-schemas/directives",id:"version-3.x.x/schema-generator/customizing-schemas/directives",isDocsHomePage:!1,title:"Directives",description:"GraphQL directives can be used to transform the schema types, fields and arguments as well as modify the runtime",source:"@site/versioned_docs/version-3.x.x/schema-generator/customizing-schemas/directives.md",sourceDirName:"schema-generator/customizing-schemas",slug:"/schema-generator/customizing-schemas/directives",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/directives",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/customizing-schemas/directives.md",version:"3.x.x",lastUpdatedBy:"Jilles van Gurp",lastUpdatedAt:1633555433,formattedLastUpdatedAt:"10/6/2021",frontMatter:{id:"directives",title:"Directives",original_id:"directives"},sidebar:"version-3.x.x/docs",previous:{title:"Renaming Fields",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/renaming-fields"},next:{title:"Deprecating Schema",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/deprecating-schema"}},p=[{value:"Default Directives",id:"default-directives",children:[]},{value:"Custom Directives",id:"custom-directives",children:[{value:"Naming Convention",id:"naming-convention",children:[]},{value:"Customizing Behavior",id:"customizing-behavior",children:[]}]},{value:"Directive Chaining",id:"directive-chaining",children:[]},{value:"Ignoring Directive Arguments",id:"ignoring-directive-arguments",children:[]}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"GraphQL directives can be used to transform the schema types, fields and arguments as well as modify the runtime\nbehavior of the query (e.g. implement access control, etc). Common use cases involve limiting functionality based on the\nuser authentication and authorization. While ",(0,a.kt)("a",{parentName:"p",href:"https://graphql.github.io/graphql-spec/draft/#sec-Type-System.Directives"},"GraphQL\nspec")," specifies two types of directives -\n",(0,a.kt)("inlineCode",{parentName:"p"},"executable")," (aka query) and ",(0,a.kt)("inlineCode",{parentName:"p"},"type system")," (aka schema) directives, only the latter one is supported by\n",(0,a.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator"),"."),(0,a.kt)("h2",{id:"default-directives"},"Default Directives"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@deprecated")," - schema directive used to represent deprecated portion of the schema.\nSee ",(0,a.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/deprecating-schema"},"@Deprecated")," annotation documentation for more details"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'\ntype Query {\n  deprecatedQuery: Boolean! @deprecated(reason: "No longer supported")\n}\n\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@skip")," - query directive that allows for conditional exclusion of fields or fragments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"\nquery myQuery($shouldSkip: Boolean) {\n  myField @skip(if: $shouldSkip)\n}\n\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@include")," - query directive that allows for conditional inclusion of fields or fragments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"\nquery myQuery($shouldInclude: Boolean) {\n  myField @include(if: $shouldInclude)\n}\n\n")),(0,a.kt)("h2",{id:"custom-directives"},"Custom Directives"),(0,a.kt)("p",null,"Custom directives can be added to the schema using custom annotations:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'\n@GraphQLDirective(\n        name = "awesome",\n        description = "This element is great",\n        locations = [FIELD_DEFINITION]\n)\nannotation class AwesomeDirective(val value: String)\n\nclass MyQuery {\n    @AwesomeDirective("cool stuff")\n    val somethingGreat: String = "Hello World"\n}\n\n')),(0,a.kt)("p",null,"The directive will then added to the schema as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'\n# This element is great\ndirective @awesome(value: String) on FIELD_DEFINITION\n\ntype MyQuery {\n   somethingGreat: String @awesome("cool stuff")\n}\n\n')),(0,a.kt)("p",null,"Directives can be added to various places in the schema. See the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/graphql-java/graphql-java/blob/v13.0/src/main/java/graphql/introspection/Introspection.java#L332"},"graphql.introspection.Introspection.DirectiveLocation"),"\nenum from ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql-java")," for a full list of valid locations."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note that GraphQL directives are currently not available through introspection and you have to use SDL directly\ninstead (you can use convenient ",(0,a.kt)("inlineCode",{parentName:"strong"},"print")," extension function of ",(0,a.kt)("inlineCode",{parentName:"strong"},"GraphQLSchema"),")"),". See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/graphql/issues/300"},"GraphQL\nissue")," and corresponding ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/graphql-java/graphql-java/issues/1017"},"graphql-java\nissue")," for more details about the introspection issue."),(0,a.kt)("h3",{id:"naming-convention"},"Naming Convention"),(0,a.kt)("p",null,"As described in the example above, the directive name in the schema will by default come from the\n",(0,a.kt)("inlineCode",{parentName:"p"},"@GraphQLDirective.name")," attribute which should follow ",(0,a.kt)("inlineCode",{parentName:"p"},"lowerCamelCase")," format. If this value is not specified, the\ndirective name will default to the normalized decapitalized name of the annotated annotation (eg: ",(0,a.kt)("inlineCode",{parentName:"p"},"awesomeDirective")," in\nthe example above)."),(0,a.kt)("h3",{id:"customizing-behavior"},"Customizing Behavior"),(0,a.kt)("p",null,"Directives allow you to customize the behavior of your schema based on some predefined conditions. Simplest way to\nmodify the default behavior of your GraphQLTypes is by providing your custom ",(0,a.kt)("inlineCode",{parentName:"p"},"KotlinSchemaDirectiveWiring")," through\n",(0,a.kt)("inlineCode",{parentName:"p"},"KotlinDirectiveWiringFactory")," factory used by your ",(0,a.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooks"),"."),(0,a.kt)("p",null,"Example of a directive that converts field to lowercase"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'\n@GraphQLDirective(name = "lowercase", description = "Modifies the string field to lowercase")\nannotation class LowercaseDirective\n\nclass LowercaseSchemaDirectiveWiring : KotlinSchemaDirectiveWiring {\n\n    override fun onField(environment: KotlinFieldDirectiveEnvironment): GraphQLFieldDefinition {\n        val field = environment.element\n        val originalDataFetcher: DataFetcher<Any> = environment.getDataFetcher()\n\n        val lowerCaseFetcher = DataFetcherFactories.wrapDataFetcher(\n            originalDataFetcher,\n            BiFunction<DataFetchingEnvironment, Any, Any>{ _, value -> value.toString().toLowerCase() }\n        )\n        environment.setDataFetcher(lowerCaseFetcher)\n        return field\n    }\n}\n\n')),(0,a.kt)("p",null,"While you can manually apply all the runtime wirings to the corresponding GraphQL types directly in\n",(0,a.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooks#onRewireGraphQLType"),", we recommend the usage of our\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/directives/KotlinDirectiveWiringFactory.kt"},"KotlinDirectiveWiringFactory"),"\nto simplify the integrations. ",(0,a.kt)("inlineCode",{parentName:"p"},"KotlinDirectiveWiringFactory")," accepts a mapping of directives to corresponding wirings or\ncould be extended to provide the wirings through ",(0,a.kt)("inlineCode",{parentName:"p"},"KotlinDirectiveWiringFactory#getSchemaDirectiveWiring")," that accepts\n",(0,a.kt)("inlineCode",{parentName:"p"},"KotlinSchemaDirectiveEnvironment"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'\nval queries = ...\nval customWiringFactory = KotlinDirectiveWiringFactory(\n    manualWiring = mapOf<String, KotlinSchemaDirectiveWiring>("lowercase" to LowercaseSchemaDirectiveWiring()))\nval customHooks = object : SchemaGeneratorHooks {\n    override val wiringFactory: KotlinDirectiveWiringFactory\n        get() = customWiringFactory\n}\nval schemaGeneratorConfig = SchemaGeneratorConfig(hooks = customHooks)\nval schema = toSchema(queries = queries, config = schemaGeneratorConfig)\n\n')),(0,a.kt)("p",null,"While providing directives on different schema elements you will be able to modify the underlying GraphQL types. Keep in\nmind though that data fetchers are used to resolve the fields so only field directives (and by association their\narguments directives) can modify runtime behavior based on the context and user input."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE: ",(0,a.kt)("inlineCode",{parentName:"strong"},"graphql-kotlin")," prioritizes manual wiring mappings over the wirings provided by the\n",(0,a.kt)("inlineCode",{parentName:"strong"},"KotlinDirectiveWiringFactory#getSchemaDirectiveWiring"),". This is a different behavior than ",(0,a.kt)("inlineCode",{parentName:"strong"},"graphql-java")," which will\nfirst attempt to use ",(0,a.kt)("inlineCode",{parentName:"strong"},"WiringFactory")," and then fallback to manual overrides.")),(0,a.kt)("p",null,"For more details please refer to the example usage of directives in our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/3.x.x/examples/spring"},"example\napp"),"."),(0,a.kt)("h2",{id:"directive-chaining"},"Directive Chaining"),(0,a.kt)("p",null,"Directives are applied in the order annotations are declared on the given object. Given"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"\n  @Directive1\n  @Directive2\n  fun doSomething(): String {\n    // does something\n  }\n\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Directive1")," will be applied first followed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"Directive2"),"."),(0,a.kt)("h2",{id:"ignoring-directive-arguments"},"Ignoring Directive Arguments"),(0,a.kt)("p",null,"Normally if you wanted to exclude a field or argument from the schema, you could use ",(0,a.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/excluding-fields"},"@GraphQLIgnore"),".\nHowever, due to reflection and kotlin limitations, the generated JVM code for interface arguments can only have annotations on getters."),(0,a.kt)("p",null,"This is easily fixable though using the ",(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/reference/annotations.html#annotation-use-site-targets"},(0,a.kt)("inlineCode",{parentName:"a"},"@get:")," target prefix"),"\nSee ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/pull/763"},"graphql-kotlin#763")," for more details."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"\n@GraphQLDirective\nannotation class DirectiveWithIgnoredArgs(\n    val string: String,\n\n    @get:GraphQLIgnore\n    val ignoreMe: String\n)\n\n")),(0,a.kt)("p",null,"This will generate the following schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"\ndirective @directiveWithIgnoredArgs(\n  string: String!\n) on ...\n\n")))}d.isMDXComponent=!0}}]);