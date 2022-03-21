"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[4756],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,v=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(v,o(o({ref:t},u),{},{components:n})):a.createElement(v,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7462),r=n(7294),l=n(2389),o=n(3725),i=n(6010);const s="tabItem_LplD";function p(e){var t,n,l,p=e.lazy,u=e.block,c=e.defaultValue,d=e.values,m=e.groupId,v=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,o.lx)(h,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(t=null!=c?c:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=g[0])?void 0:l.props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,o.UB)(),y=b.tabGroupChoices,x=b.setTabGroupChoices,w=(0,r.useState)(k),N=w[0],q=w[1],O=[],E=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=y[m];null!=T&&T!==N&&h.some((function(e){return e.value===T}))&&q(T)}var C=function(e){var t=e.currentTarget,n=O.indexOf(t),a=h[n].value;a!==N&&(E(t),q(a),null!=m&&x(m,a))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},v)},h.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return O.push(e)},onKeyDown:j,onFocus:C,onClick:C},l,{className:(0,i.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),p?(0,r.cloneElement)(g.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function u(e){var t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},6575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>p,metadata:()=>c,toc:()=>m});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=n(9877),i=n(8215),s=["components"],p={id:"getting-started",title:"Getting Started",slug:"/"},u=void 0,c={unversionedId:"getting-started",id:"version-5.x.x/getting-started",title:"Getting Started",description:"GraphQL Kotlin is a collection of libraries, built on top of graphql-java, that simplify running GraphQL clients and servers in Kotlin.",source:"@site/versioned_docs/version-5.x.x/getting-started.mdx",sourceDirName:".",slug:"/",permalink:"/graphql-kotlin/docs/5.x.x/",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-5.x.x/getting-started.mdx",tags:[],version:"5.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1647879376,formattedLastUpdatedAt:"3/21/2022",frontMatter:{id:"getting-started",title:"Getting Started",slug:"/"},sidebar:"version-5.x.x/docs",next:{title:"Examples",permalink:"/graphql-kotlin/docs/5.x.x/examples"}},d={},m=[{value:"Installation",id:"installation",level:2},{value:"Generating a Schema",id:"generating-a-schema",level:2},{value:"Apollo Federation",id:"apollo-federation",level:3},{value:"Running a Server",id:"running-a-server",level:2},{value:"Creating a Client",id:"creating-a-client",level:2},{value:"Examples",id:"examples",level:2},{value:"Blogs and Videos",id:"blogs-and-videos",level:2},{value:"Additional resources",id:"additional-resources",level:2}],v={toc:m};function g(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"GraphQL Kotlin is a collection of libraries, built on top of ",(0,l.kt)("a",{parentName:"p",href:"https://www.graphql-java.com/"},"graphql-java"),", that simplify running GraphQL clients and servers in Kotlin."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Using a JVM dependency manager, link any ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-*")," library to your project."),(0,l.kt)(o.Z,{defaultValue:"gradle",values:[{label:"Gradle Kotlin",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"gradle",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("com.expediagroup", "graphql-kotlin-spring-server", latestVersion)\n'))),(0,l.kt)(i.Z,{value:"maven",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-spring-server</artifactId>\n    <version>${latestVersion}</version>\n</dependency>\n")))),(0,l.kt)("h2",{id:"generating-a-schema"},"Generating a Schema"),(0,l.kt)("p",null,"You can use ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," to generate a schema from Kotlin code and expose it with any server library."),(0,l.kt)("p",null,"See the docs in ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/schema-generator/schema-generator-getting-started"},"Schema Generator Getting Started"),"."),(0,l.kt)("h3",{id:"apollo-federation"},"Apollo Federation"),(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation"),", you can generate an ",(0,l.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/federation/federation-spec/"},"Apollo Federation")," compliant schema."),(0,l.kt)("p",null,"See the docs in ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/schema-generator/federation/apollo-federation"},"Apollo Federation"),"."),(0,l.kt)("h2",{id:"running-a-server"},"Running a Server"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-server")," is a combination of the schema generator, federation, and server libraries. If you are looking to run a GraphQL server, this is the place to start."),(0,l.kt)("p",null,"See the docs in ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/server/graphql-server"},"GraphQL Kotlin Server"),"."),(0,l.kt)("h2",{id:"creating-a-client"},"Creating a Client"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-plugins")," can be used to generate a ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-client")," from an existing schema that is easy to use and type-safe."),(0,l.kt)("p",null,"See the docs in ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/client/client-overview"},"Client Overview"),"."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"examples")," module is a collection of working code and examples on how to use all of the ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," modules."),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/examples"},"example docs")," for more info."),(0,l.kt)("h2",{id:"blogs-and-videos"},"Blogs and Videos"),(0,l.kt)("p",null,"You can find more posts and recorded conference talks on GraphQL and ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," on our ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/blogs-and-videos"},"Blogs and Videos")," page."),(0,l.kt)("h2",{id:"additional-resources"},"Additional resources"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://graphql.org/"},"GraphQL")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.graphql-java.com/documentation/"},"graphql-java"))))}g.isMDXComponent=!0}}]);