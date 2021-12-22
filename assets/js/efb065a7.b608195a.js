(window.webpackJsonp=window.webpackJsonp||[]).push([[364],{438:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),r=(n(0),n(468)),i=["components"],c={id:"style-fonts",title:"Changing fonts",sidebar_label:"Changing fonts"},l={unversionedId:"docs/style-fonts",id:"version-7.24.3/docs/style-fonts",isDocsHomePage:!1,title:"Changing fonts",description:"Before you begin using your own fonts, you'll first need to add them to the app project.",source:"@site/versioned_docs/version-7.24.3/docs/style-fonts.mdx",slug:"/docs/style-fonts",permalink:"/react-native-navigation/docs/style-fonts",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-7.24.3/docs/style-fonts.mdx",version:"7.24.3",sidebar_label:"Changing fonts",sidebar:"version-7.24.3/docs",previous:{title:"Animations",permalink:"/react-native-navigation/docs/style-animations"},next:{title:"Constants",permalink:"/react-native-navigation/docs/style-constants"}},s=[{value:"BottomTab font",id:"bottomtab-font",children:[]},{value:"Button font",id:"button-font",children:[]},{value:"Title font",id:"title-font",children:[]},{value:"Subtitle font",id:"subtitle-font",children:[]},{value:"Back button",id:"back-button",children:[]}],b={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,i);return Object(r.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Before you begin using your own fonts, you'll first need to add them to the app project."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Android")," - add the ",Object(r.b)("inlineCode",{parentName:"li"},".ttf")," or ",Object(r.b)("inlineCode",{parentName:"li"},".otf")," files to ",Object(r.b)("inlineCode",{parentName:"li"},"src/main/assets/fonts/")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"iOS")," - follow this ",Object(r.b)("a",{parentName:"li",href:"https://medium.com/react-native-training/react-native-custom-fonts-ccc9aacf9e5e"},"guide"))),Object(r.b)("p",null,"Once we've added the font files to our project, we can star using them in options."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"When declaring fonts in options, use only the file name without the file type suffix."))),Object(r.b)("h2",{id:"bottomtab-font"},"BottomTab font"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"options: {\n  bottomTab: {\n    fontFamily: 'helvetica'\n  }\n}\n")),Object(r.b)("h2",{id:"button-font"},"Button font"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"options: {\n  rightButtons: [\n    {\n      id: 'SAVE_BUTTON',\n      text: 'Save',\n      fontFamily: 'helvetica'\n    }\n  ],\n  leftButtons: [\n    {\n      id: 'CANCEL_BUTTON',\n      text: 'Cancel',\n      fontFamily: 'helvetica'\n    }\n  ]\n}\n")),Object(r.b)("h2",{id:"title-font"},"Title font"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"options: {\n  topBar: {\n    title: {\n      fontFamily: 'helvetica'\n    }\n  }\n}\n")),Object(r.b)("h2",{id:"subtitle-font"},"Subtitle font"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"options: {\n  topBar: {\n    subtitle: {\n      fontFamily: 'helvetica'\n    }\n  }\n}\n")),Object(r.b)("h2",{id:"back-button"},"Back button"),Object(r.b)("p",null,"In iOS the back button will display the title of the previous screen. Use the ",Object(r.b)("inlineCode",{parentName:"p"},"backButton")," option to modify its font family."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"options: {\n  topBar: {\n    backButton: {\n      fontFamily: 'helvetica'\n    }\n  }\n}\n")))}p.isMDXComponent=!0},468:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=o,f=p["".concat(i,".").concat(d)]||p[d]||u[d]||r;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);