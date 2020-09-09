(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{171:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),b=(n(0),n(284)),o={id:"options-background",title:"Background Options",sidebar_label:"Background"},c={unversionedId:"api/options-background",id:"version-7.0.0/api/options-background",isDocsHomePage:!1,title:"Background Options",description:"Controls the top bar background styling.",source:"@site/versioned_docs/version-7.0.0/api/options-background.mdx",slug:"/api/options-background",permalink:"/react-native-navigation/api/options-background",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-7.0.0/api/options-background.mdx",version:"7.0.0",sidebar_label:"Background",sidebar:"version-7.0.0/api",previous:{title:"Subtitle Options",permalink:"/react-native-navigation/api/options-subtitle"},next:{title:"Back Button Options",permalink:"/react-native-navigation/api/options-backButton"}},l=[{value:"<code>color</code>",id:"color",children:[]},{value:"<code>component</code>",id:"component",children:[]},{value:"<code>clipToBounds</code>",id:"cliptobounds",children:[]},{value:"<code>translucent</code>",id:"translucent",children:[]},{value:"<code>blur</code>",id:"blur",children:[]}],i={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Controls the top bar background styling."),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const options = {\n  topBar: {\n    background: {}\n  }\n};\n")),Object(b.b)("h3",{id:"color"},Object(b.b)("inlineCode",{parentName:"h3"},"color")),Object(b.b)("p",null,"Set the background color. Ignored if a component is specified."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Color"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Both")))),Object(b.b)("h3",{id:"component"},Object(b.b)("inlineCode",{parentName:"h3"},"component")),Object(b.b)("p",null,"Set a react ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-navigation/api/layout-component"}),"component")," as the background. Useful when you need to show a gradient as background, for instance."),Object(b.b)("p",null,"On Android, setting an ",Object(b.b)("inlineCode",{parentName:"p"},"id")," to the Component will prevent the component from being recreated each time it's used by a screen. The component will be created once and whenever possible it will be reused."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"/react-native-navigation/api/layout-component"}),"Component")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Both")))),Object(b.b)("h3",{id:"cliptobounds"},Object(b.b)("inlineCode",{parentName:"h3"},"clipToBounds")),Object(b.b)("p",null,"Clip the top bar background to bounds if set to true."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"iOS")))),Object(b.b)("h3",{id:"translucent"},Object(b.b)("inlineCode",{parentName:"h3"},"translucent")),Object(b.b)("p",null,"Allows the NavBar to be translucent (blurred)."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"iOS")))),Object(b.b)("h3",{id:"blur"},Object(b.b)("inlineCode",{parentName:"h3"},"blur")),Object(b.b)("p",null,"Enable background blur."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"iOS")))))}p.isMDXComponent=!0},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(n),O=a,j=u["".concat(o,".").concat(O)]||u[O]||d[O]||b;return n?r.a.createElement(j,c(c({ref:t},i),{},{components:n})):r.a.createElement(j,c({ref:t},i))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,o=new Array(b);o[0]=O;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<b;i++)o[i]=n[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);