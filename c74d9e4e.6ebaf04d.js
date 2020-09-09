(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{231:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var o=n(2),a=n(6),r=(n(0),n(284)),i=n(289),l=n(290),c={id:"style-orientation",title:"Orientation",sidebar_label:"Orientation"},s={unversionedId:"docs/style-orientation",id:"version-6.12.2/docs/style-orientation",isDocsHomePage:!1,title:"Orientation",description:"Locking orientation",source:"@site/versioned_docs/version-6.12.2/docs/style-orientation.mdx",slug:"/docs/style-orientation",permalink:"/react-native-navigation/6.12.2/docs/style-orientation",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-6.12.2/docs/style-orientation.mdx",version:"6.12.2",sidebar_label:"Orientation",sidebar:"version-6.12.2/docs",previous:{title:"StatusBar",permalink:"/react-native-navigation/6.12.2/docs/style-statusBar"},next:{title:"Animations",permalink:"/react-native-navigation/6.12.2/docs/style-animations"}},u=[{value:"Locking orientation",id:"locking-orientation",children:[]},{value:"Changing orientation dynamically",id:"changing-orientation-dynamically",children:[]}],p={rightToc:u};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"locking-orientation"},"Locking orientation"),Object(r.b)("p",null,"Orientation can be locked either in the layout level, or across the app via default options. You can declare orientations you'd like your app to support in default options."),Object(r.b)(i.a,{defaultValue:"defaultOptions",values:[{label:"Locking orientation in default options",value:"defaultOptions"},{label:"Locking root layout orientation",value:"root"},{label:"Showing landscape modal",value:"modal"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"defaultOptions",mdxType:"TabItem"},Object(r.b)("p",null,"Setting orientation in default options will affect all screens in all hierarchy levels. It's still possible to override orientation for specific screens."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"Navigation.setDefaultOptions({\n  layout: {\n    orientation: ['portrait']\n  }\n});\n"))),Object(r.b)(l.a,{value:"modal",mdxType:"TabItem"},Object(r.b)("p",null,"The following example demonstrates how to show a modal in landscape orientation."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"Navigation.showModal({\n  component: {\n    name: 'VideoPlayer'\n    options: {\n      layout: {\n        orientation: ['landscape']\n      }\n    }\n  }\n});\n"))),Object(r.b)(l.a,{value:"root",mdxType:"TabItem"},Object(r.b)("p",null,"Applying orientation in the root level will affect all screens in the root hierarchy level. It ",Object(r.b)("strong",{parentName:"p"},"will not")," apply to modals."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"Navigation.setRoot({\n  root: {\n    bottomTabs: {\n      options: {\n        layout: {\n          orientation: ['portrait']\n        }\n      },\n      children: [\n        ...\n      ]\n    }\n  }\n});\n")))),Object(r.b)("h2",{id:"changing-orientation-dynamically"},"Changing orientation dynamically"),Object(r.b)("p",null,"Changing orientation dynamically through ",Object(r.b)("inlineCode",{parentName:"p"},"Navigation.mergeOption()")," is supported only on Android."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"Navigation.mergeOptions(this.props.componentId, {\n  layout: {\n    orientation: ['landscape']\n  }\n});\n")))}d.isMDXComponent=!0},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=o,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||r;return n?a.a.createElement(f,l(l({ref:t},s),{},{components:n})):a.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},285:function(e,t,n){"use strict";function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}},287:function(e,t,n){"use strict";var o=n(0),a=Object(o.createContext)(void 0);t.a=a},288:function(e,t,n){"use strict";var o=n(0),a=n(287);t.a=function(){var e=Object(o.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},289:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(288),i=n(285),l=n(47),c=n.n(l),s=37,u=39;t.a=function(e){var t=e.block,n=e.children,l=e.defaultValue,p=e.values,d=e.groupId,b=Object(r.a)(),f=b.tabGroupChoices,m=b.setTabGroupChoices,y=Object(o.useState)(l),v=y[0],O=y[1],g=Object(o.useState)(!1),j=g[0],h=g[1];if(null!=d){var w=f[d];null!=w&&w!==v&&p.some((function(e){return e.value===w}))&&O(w)}var x=function(e){O(e),null!=d&&m(d,e)},k=[],N=function(e){e.metaKey||e.altKey||e.ctrlKey||h(!0)},T=function(){h(!1)};return Object(o.useEffect)((function(){window.addEventListener("keydown",N),window.addEventListener("mousedown",T)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===t}),style:j?{}:{outline:"none"},key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e),N(e)},onFocus:function(){return x(t)},onClick:function(){x(t),h(!1)},onPointerDown:function(){return h(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}},290:function(e,t,n){"use strict";var o=n(0),a=n.n(o);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);