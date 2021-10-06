(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[736],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>s,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(a),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9614:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>d,toc:()=>s,default:()=>m});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),i=["components"],o={id:"maven-plugin-goals",title:"Maven Plugin Goals",sidebar_label:"Goals"},p=void 0,d={unversionedId:"plugins/maven-plugin-goals",id:"version-4.x.x/plugins/maven-plugin-goals",isDocsHomePage:!1,title:"Maven Plugin Goals",description:"GraphQL Kotlin Maven Plugin provides functionality to generate a lightweight GraphQL HTTP client and generate GraphQL",source:"@site/versioned_docs/version-4.x.x/plugins/maven-plugin-goals.md",sourceDirName:"plugins",slug:"/plugins/maven-plugin-goals",permalink:"/graphql-kotlin/docs/4.x.x/plugins/maven-plugin-goals",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/plugins/maven-plugin-goals.md",version:"4.x.x",lastUpdatedBy:"Jilles van Gurp",lastUpdatedAt:1633555433,formattedLastUpdatedAt:"10/6/2021",frontMatter:{id:"maven-plugin-goals",title:"Maven Plugin Goals",sidebar_label:"Goals"},sidebar:"version-4.x.x/docs",previous:{title:"Usage",permalink:"/graphql-kotlin/docs/4.x.x/plugins/gradle-plugin-usage"},next:{title:"Usage",permalink:"/graphql-kotlin/docs/4.x.x/plugins/maven-plugin-usage"}},s=[{value:"Goals",id:"goals",children:[{value:"download-sdl",id:"download-sdl",children:[]},{value:"generate-client",id:"generate-client",children:[]},{value:"generate-sdl",id:"generate-sdl",children:[]},{value:"generate-test-client",id:"generate-test-client",children:[]},{value:"introspect-schema",id:"introspect-schema",children:[]}]}],u={toc:s};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"GraphQL Kotlin Maven Plugin provides functionality to generate a lightweight GraphQL HTTP client and generate GraphQL\nschema directly from your source code."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This plugin is dependent on Kotlin compiler plugin as it generates Kotlin source code that needs to be compiled."))),(0,l.kt)("h2",{id:"goals"},"Goals"),(0,l.kt)("p",null,"You can find detailed information about ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-maven-plugin")," and all its goals by running ",(0,l.kt)("inlineCode",{parentName:"p"},"mvn help:describe -Dplugin=com.expediagroup:graphql-kotlin-maven-plugin -Ddetail"),"."),(0,l.kt)("h3",{id:"download-sdl"},"download-sdl"),(0,l.kt)("p",null,"GraphQL endpoints are often public and as such many servers might disable introspection queries in production environment.\nSince GraphQL schema is needed to generate type safe clients, as alternative GraphQL servers might expose private\nendpoints (e.g. accessible only from within network, etc) that could be used to download schema in Schema Definition\nLanguage (SDL) directly. This Mojo attempts to download schema from the specified ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql.endpoint"),", validates the\nresult whether it is a valid schema and saves it locally in a specified target file (defaults to ",(0,l.kt)("inlineCode",{parentName:"p"},"schema.graphql")," under\nbuild directory). In general, this goal provides limited functionality by itself and instead should be used to generate\ninput for the subsequent ",(0,l.kt)("inlineCode",{parentName:"p"},"generate-client")," goal."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Default Lifecycle Phase"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"generate-sources"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"endpoint")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Target GraphQL server SDL endpoint that will be used to download schema.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"User property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"graphql.endpoint"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"headers")),(0,l.kt)("td",{parentName:"tr",align:null},"Map<String, Any>"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional HTTP headers to be specified on a SDL request.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"timeoutConfiguration")),(0,l.kt)("td",{parentName:"tr",align:null},"TimeoutConfiguration"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional timeout configuration (in milliseconds) to download schema from SDL endpoint before we cancel the request.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default values are:"),(0,l.kt)("br",null),"connect timeout = 5000",(0,l.kt)("br",null),"read timeout = 15000.",(0,l.kt)("br",null))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schemaFile")),(0,l.kt)("td",{parentName:"tr",align:null},"File"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Target schema file.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"${project.build.directory}/schema.graphql"),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"User property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"graphql.schemaFile"),".")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameter Details")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"timeoutConfiguration")," - Timeout configuration that allows you to specify connect and read timeout values in milliseconds.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<timeoutConfiguration>\n  \x3c!-- timeout values in milliseconds --\x3e\n  <connect>1000</connect>\n  <read>30000</read>\n</timeoutConfiguration>\n")),(0,l.kt)("h3",{id:"generate-client"},"generate-client"),(0,l.kt)("p",null,"Generate GraphQL client code based on the provided GraphQL schema and target queries."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Default Lifecycle Phase"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"generate-sources")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Requires Maven Project")),(0,l.kt)("li",{parentName:"ul"},"Generated classes are automatically added to the list of compiled sources.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"allowDeprecatedFields")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean flag indicating whether selection of deprecated fields is allowed or not.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),".",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"User property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"graphql.allowDeprecatedFields"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"customScalars")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"List<CustomScalar>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of custom GraphQL scalar to converter mappings containing information about corresponding Java type and converter that should be used to serialize/deserialize values.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"outputDirectory")),(0,l.kt)("td",{parentName:"tr",align:null},"File"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Target directory where to store generated files.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"${project.build.directory}/generated-sources/graphql"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"packageName")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Target package name for generated code.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"User property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"graphql.packageName"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"queryFileDirectory")),(0,l.kt)("td",{parentName:"tr",align:null},"File"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Directory file containing GraphQL queries. Instead of specifying a directory you can also specify list of query file by using ",(0,l.kt)("inlineCode",{parentName:"td"},"queryFiles")," property instead.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"src/main/resources"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"queryFiles")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"List<File>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of query files to be processed. Instead of a list of files to be processed you can also specify ",(0,l.kt)("inlineCode",{parentName:"td"},"queryFileDirectory")," directory containing all the files. If this property is specified it will take precedence over the corresponding directory property.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"serializer")),(0,l.kt)("td",{parentName:"tr",align:null},"GraphQLSerializer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"JSON serializer that will be used to generate the data classes.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"GraphQLSerializer.JACKSON"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schemaFile")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"GraphQL schema file that will be used to generate client code.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"${project.build.directory}/schema.graphql"),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"User property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"graphql.schemaFile"),".")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameter Details")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"customScalars")," - List of custom GraphQL scalars. Objects contain target GraphQL scalar name, corresponding Java type\nand converter that should be used to serialize/deserialize values."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<customScalars>\n    <customScalar>\n        \x3c!-- custom scalar UUID type --\x3e\n        <scalar>UUID</scalar>\n        \x3c!-- fully qualified Java class name of a custom scalar type --\x3e\n        <type>java.util.UUID</type>\n        \x3c!-- fully qualified Java class name of a custom com.expediagroup.graphql.client.converter.ScalarConverter\n          used to convert to/from raw JSON and scalar type --\x3e\n        <converter>com.example.UUIDScalarConverter</converter>\n    </customScalar>\n</customScalars>\n")))),(0,l.kt)("h3",{id:"generate-sdl"},"generate-sdl"),(0,l.kt)("p",null,"Generates GraphQL schema in SDL format from your source code using reflections. Utilizes ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator"),"\nto generate the schema from classes implementing ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-server")," marker ",(0,l.kt)("inlineCode",{parentName:"p"},"Query"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Mutation")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Subscription")," interfaces.\nIn order to limit the amount of packages to scan, this mojo requires users to provide a list of ",(0,l.kt)("inlineCode",{parentName:"p"},"packages")," that can contain\nGraphQL types."),(0,l.kt)("p",null,"This MOJO utilizes ",(0,l.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/ServiceLoader.html"},"ServiceLoader"),"\nmechanism to dynamically load available ",(0,l.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," service providers from the classpath. Service provider\ncan be provided as part of your project, included in one of your project dependencies or through explicitly provided artifact.\nSee ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/plugins/hooks-provider"},"Schema Generator Hooks Provider")," for additional details on how to create custom hooks service\nprovider. Configuration below shows how to configure GraphQL Kotlin plugin with explicitly provided artifact."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Default Lifecycle Phase"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"process-classes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Requires Maven Project"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"packages")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"List<String>")),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"List of supported packages that can be scanned to generate SDL.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schemaFile")),(0,l.kt)("td",{parentName:"tr",align:null},"File"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Target GraphQL schema file to be generated.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"${project.buildDir}/schema.graphql"))))),(0,l.kt)("h3",{id:"generate-test-client"},"generate-test-client"),(0,l.kt)("p",null,"Generate GraphQL test client code based on the provided GraphQL schema and target queries."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Default Lifecycle Phase"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"generate-test-sources")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Requires Maven Project")),(0,l.kt)("li",{parentName:"ul"},"Generated classes are automatically added to the list of test compiled sources.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"allowDeprecatedFields")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean flag indicating whether selection of deprecated fields is allowed or not.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),".",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"User property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"graphql.allowDeprecatedFields"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"customScalars")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"List<CustomScalar>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of custom GraphQL scalar to converter mappings containing information about corresponding Java type and converter that should be used to serialize/deserialize values.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"outputDirectory")),(0,l.kt)("td",{parentName:"tr",align:null},"File"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Target directory where to store generated files.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"${project.build.directory}/generated-test-sources/graphql"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"packageName")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Target package name for generated code.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"User property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"graphql.packageName"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"queryFileDirectory")),(0,l.kt)("td",{parentName:"tr",align:null},"File"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Directory file containing GraphQL queries. Instead of specifying a directory you can also specify list of query file by using ",(0,l.kt)("inlineCode",{parentName:"td"},"queryFiles")," property instead.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"src/test/resources"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"queryFiles")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"List<File>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of query files to be processed. Instead of a list of files to be processed you can also specify ",(0,l.kt)("inlineCode",{parentName:"td"},"queryFileDirectory")," directory containing all the files. If this property is specified it will take precedence over the corresponding directory property.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"serializer")),(0,l.kt)("td",{parentName:"tr",align:null},"GraphQLSerializer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"JSON serializer that will be used to generate the data classes.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"GraphQLSerializer.JACKSON"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schemaFile")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"GraphQL schema file that will be used to generate client code.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"${project.build.directory}/schema.graphql"),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"User property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"graphql.schemaFile"),".")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameter Details")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"customScalars")," - List of custom GraphQL scalars. Objects contain target GraphQL scalar name, corresponding Java type\nand converter that should be used to serialize/deserialize values.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"\n<customScalars>\n  <customScalar>\n      \x3c!-- custom scalar UUID type --\x3e\n      <scalar>UUID</scalar>\n      \x3c!-- fully qualified Java class name of a custom scalar type --\x3e\n      <type>java.util.UUID</type>\n      \x3c!-- fully qualified Java class name of a custom com.expediagroup.graphql.client.converter.ScalarConverter\n        used to convert to/from raw JSON and scalar type --\x3e\n      <converter>com.example.UUIDScalarConverter</converter>\n  </customScalar>\n</customScalars>\n\n")),(0,l.kt)("h3",{id:"introspect-schema"},"introspect-schema"),(0,l.kt)("p",null,"Executes GraphQL introspection query against specified ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql.endpoint")," and saves the result locally to a target file\n(defaults to ",(0,l.kt)("inlineCode",{parentName:"p"},"schema.graphql")," under build directory). In general, this goal provides limited functionality by itself and\ninstead should be used to generate input for the subsequent ",(0,l.kt)("inlineCode",{parentName:"p"},"generate-client")," goal."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Default Lifecycle Phase"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"generate-sources"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"endpoint")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Target GraphQL server endpoint that will be used to execute introspection queries.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"User property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"graphql.endpoint"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"headers")),(0,l.kt)("td",{parentName:"tr",align:null},"Map<String, Any>"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional HTTP headers to be specified on an introspection query.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"timeoutConfiguration")),(0,l.kt)("td",{parentName:"tr",align:null},"TimeoutConfiguration"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional timeout configuration (in milliseconds) to download schema from SDL endpoint before we cancel the request.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default values are:"),(0,l.kt)("br",null),"connect timeout = 5000",(0,l.kt)("br",null),"read timeout = 15000.",(0,l.kt)("br",null))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schemaFile")),(0,l.kt)("td",{parentName:"tr",align:null},"File"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Target schema file.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"${project.build.directory}/schema.graphql"),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"User property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"graphql.schemaFile"),".")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameter Details")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"timeoutConfiguration")," - Timeout configuration that allows you to specify connect and read timeout values in milliseconds.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<timeoutConfiguration>\n  \x3c!-- timeout values in milliseconds --\x3e\n  <connect>1000</connect>\n  <read>30000</read>\n</timeoutConfiguration>\n")))}m.isMDXComponent=!0}}]);