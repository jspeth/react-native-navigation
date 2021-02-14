(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{328:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var o=t(2),a=t(6),r=(t(0),t(369)),i={id:"third-party-react-native-vector-icons",title:"react-native-vector-icons",sidebar_label:"react-native-vector-icons"},c={unversionedId:"docs/third-party-react-native-vector-icons",id:"docs/third-party-react-native-vector-icons",isDocsHomePage:!1,title:"react-native-vector-icons",description:"react-native-vector-icons is a very popular library for using SVG icons in react-native, which keeps large static images",source:"@site/docs/docs/third-party-react-native-vector-icons.mdx",slug:"/docs/third-party-react-native-vector-icons",permalink:"/react-native-navigation/next/docs/third-party-react-native-vector-icons",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/third-party-react-native-vector-icons.mdx",version:"current",sidebar_label:"react-native-vector-icons"},s=[{value:"Using SVG icons in BottomTabs or TopBarButtons",id:"using-svg-icons-in-bottomtabs-or-topbarbuttons",children:[{value:"Step 1 - Choose icons and load image source.",id:"step-1---choose-icons-and-load-image-source",children:[]},{value:"Step 2 - Launching the app.",id:"step-2---launching-the-app",children:[]},{value:"Step 3 - Using NavIcons in components.",id:"step-3---using-navicons-in-components",children:[]}]}],p={rightToc:s};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"react-native-vector-icons is a very popular library for using SVG icons in react-native, which keeps large static images\nout of your app while providing crisp icons. Using this library with React Native Navigation is not difficult, but does take\na few extra steps.."),Object(r.b)("h2",{id:"using-svg-icons-in-bottomtabs-or-topbarbuttons"},"Using SVG icons in BottomTabs or TopBarButtons"),Object(r.b)("p",null,"In the example below we will detail a simple app that pre-loads several icons from react-native-vector-icons to be used in our navigation. The example assumes\nyou have worked through the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/oblador/react-native-vector-icons#installation"},"installation")," and optional steps to support ",Object(r.b)("a",{parentName:"p",href:"https://github.com/oblador/react-native-vector-icons#custom-fonts"},"custom fonts"),"\naccording to the react-native-vector-icons project."),Object(r.b)("h3",{id:"step-1---choose-icons-and-load-image-source"},"Step 1 - Choose icons and load image source."),Object(r.b)("p",null,"The core issue here is that React Native Navigation wants 'images' for its icons while react-native-vector-icon typically works as a component. However,\nthere is a way around this, by using the ",Object(r.b)("inlineCode",{parentName:"p"},"getImageSourceSync")," method exposed by react-native-vector-icons."),Object(r.b)("p",null,"You can use this directly when specifying an ",Object(r.b)("inlineCode",{parentName:"p"},"icon")," in an react-native-navigation option, or you can group them all together into a central object like so:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx",metastring:"file=./third-party-react-native-vector-icons/NavIcons.tsx",file:"./third-party-react-native-vector-icons/NavIcons.tsx"},"import { forEach, keys, map } from 'lodash';\n\nimport MyIcon from './MyIcon';\nimport MaterialIcons from 'react-native-vector-icons/MaterialIcons';\nimport { Icon } from 'react-native-vector-icons/Icon';\n\nconst iconsMap: {\n  [key: string]: number;\n} = {\n  book: MyIcon.getImageSourceSync('book', 30, '#888'),\n  gear: MyIcon.getImageSourceSync('gear', 30, '#888'),\n  'arrow-back': MaterialIcons.getImageSourceSync('arrow-back', 24, '#888'),\n  add: MaterialIcons.getImageSourceSync('add', 28, '#888'),\n};\n\nexport {\n  iconsMap,\n};\n")),Object(r.b)("h3",{id:"step-2---launching-the-app"},"Step 2 - Launching the app."),Object(r.b)("p",null,"We now launch our app in the usual fashion."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx",metastring:"file=./third-party-react-native-vector-icons/index.ts",file:"./third-party-react-native-vector-icons/index.ts"},"import { Navigation } from 'react-native-navigation';\n\nimport { iconsMap } from './NavIcons';\n\nNavigation.events().registerAppLaunchedListener(() => {\n  registerScreens();\n  const firstTab = {\n    component: {\n      name: 'MyFirstTab',\n      options: {\n        topBar: {\n          title: {\n            text: 'First Tab',\n          },\n          rightButtons: [{\n            icon: iconsMap.add,\n            id: 'add',\n            color: 'blue',\n            accessibilityLabel: 'Add item',\n          }],\n        },\n      },\n    },\n  };\n  const secondTab = {\n    component: {\n      name: 'MySecondTab',\n      options: {\n        topBar: {\n          title: {\n            text: 'Second Tab',\n          },\n        },\n      },\n    },\n  };\n  Navigation.setRoot({\n    root: {\n      bottomTabs: {\n        children: [{\n          stack: {\n            children: [firstTab],\n            bottomTab: {\n              text: 'First',\n              icon: iconsMap.book,\n            },\n          },\n        },\n        {\n          stack: {\n            children: [secondTab],\n            bottomTab: {\n              text: 'Second',\n              icon: iconsMap.gear,\n            },\n          },\n        }],\n      },\n    },\n  });\n});\n")),Object(r.b)("h3",{id:"step-3---using-navicons-in-components"},"Step 3 - Using NavIcons in components."),Object(r.b)("p",null,"One of the nice features of React Native Navigation is that it is possible to specify the navigation 'options' on each individual component. This still works with NavIcons\nframework we have setup:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx",metastring:"file=./third-party-react-native-vector-icons/ExampleComponent.tsx",file:"./third-party-react-native-vector-icons/ExampleComponent.tsx"},"import React from 'react';\nimport { Text, View } from 'react-native';\n\nimport { iconsMap } from './NavIcons';\ninterface Props {\n  // ... my props\n}\n\nfunction ExampleComponent({ }: Props) {\n  return (\n    <View>\n      <Text>An example component</Text>\n    </View>\n  )\n}\n\nExampleComponent.options = () => {\n  return {\n    topBar: {\n      title: {\n        text: 'Example Component',\n      },\n      leftButtons: [{\n        icon: iconsMap.add,\n        color: '#888',\n        accessibilityLabel: 'Add',\n      }],\n    },\n  };\n};\n\nexport default ExampleComponent;\n")))}l.isMDXComponent=!0},369:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var o=t(0),a=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return t?a.a.createElement(b,c(c({ref:n},p),{},{components:t})):a.a.createElement(b,c({ref:n},p))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<r;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);