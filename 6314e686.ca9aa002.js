(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return b}));var r=n(2),o=n(6),a=(n(0),n(284)),i=n(289),s=n(290),c=n(291),l={id:"overlay",title:"Overlay",sidebar_label:"Overlay"},u={unversionedId:"docs/overlay",id:"version-6.12.2/docs/overlay",isDocsHomePage:!1,title:"Overlay",description:"Overlays are used to layout content on top of all other layout hierarchies, while fitting the screen bounds.",source:"@site/versioned_docs/version-6.12.2/docs/docs-overlay.mdx",slug:"/docs/overlay",permalink:"/react-native-navigation/6.12.2/docs/overlay",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-6.12.2/docs/docs-overlay.mdx",version:"6.12.2",sidebar_label:"Overlay",sidebar:"version-6.12.2/docs",previous:{title:"Modal",permalink:"/react-native-navigation/6.12.2/docs/modal"},next:{title:"Styling with options",permalink:"/react-native-navigation/6.12.2/docs/style-options"}},d=[{value:"Handling touch events outside the view",id:"handling-touch-events-outside-the-view",children:[]},{value:"Overlay examples",id:"overlay-examples",children:[]}],f={rightToc:d};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Overlays are used to layout content on top of all other layout hierarchies, while fitting the screen bounds.\nThe contents displayed in an Overlay can either be non-obtrusive, like Toasts and Snackbars, or an Alert that blocks all interactions with any content behind it. The view contained within it should be aligned either with absolute position, flex, or with margins, all according to your needs."),Object(a.b)("h2",{id:"handling-touch-events-outside-the-view"},"Handling touch events outside the view"),Object(a.b)("p",null,"When showing views like Alert or Toast in an Overlay, you would want to configure if you want to allow users to interact with content behind the alert. This is done via the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#"}),"interceptTouchOutside")," option."),Object(a.b)("h2",{id:"overlay-examples"},"Overlay examples"),Object(a.b)(i.a,{defaultValue:"alert",values:[{label:"Alert",value:"alert"},{label:"Toast",value:"toast"}],mdxType:"Tabs"},Object(a.b)(s.a,{value:"alert",mdxType:"TabItem"},Object(a.b)("p",null,"The example below demonstrates how to create a simple alert dialog using an Overlay. Touch events outside the alert will be blocked and won't pass through to the content behind the alert since we're specifying ",Object(a.b)("inlineCode",{parentName:"p"},"interceptTouchOutside: true")," in the static options of the Alert."),Object(a.b)("img",{width:"30%",src:Object(c.a)("/img/alert_android.png")}),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const React = require('react');\nconst { Text, Button, View } = require('react-native');\nconst { Navigation } = require('react-native-navigation');\n\nfunction Alert({ componentId, title, message }) {\n  const dismiss = () => Navigation.dismissOverlay(componentId);\n\n  return (\n    <View style={styles.root}>\n      <View style={styles.alert}>\n        <Text style={styles.title}>{title}</Text>\n        <Text style={styles.message}>{message}</Text>\n        <Button title=\"OK\" onPress={dismiss} />\n      </View>\n    </View>\n  );\n}\n\nconst styles = {\n  root: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n    backgroundColor: '#00000050',\n  },\n  alert: {\n    alignItems: 'center',\n    backgroundColor: 'whitesmoke',\n    width: 250,\n    elevation: 4,\n    padding: 16,\n  },\n  title: {\n    fontSize: 18,\n  },\n  message: {\n    marginVertical: 8,\n  },\n};\n\nAlert.options = (props) => {\n  return {\n    overlay: {\n      interceptTouchOutside: true,\n    },\n  };\n};\n\nmodule.exports = Alert;\n"))),Object(a.b)(s.a,{value:"toast",mdxType:"TabItem"},Object(a.b)("p",null,"The example below demonstrates how to show a Toast using an Overlay. A user can interact with the content behind the toast since we've declared ",Object(a.b)("inlineCode",{parentName:"p"},"interceptTouchOutside: false")," in the static options of the Alert."),Object(a.b)("img",{width:"30%",src:Object(c.a)("/img/toast_android.png")}),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const React = require('react');\nconst { View, Text, StyleSheet, TouchableOpacity } = require('react-native');\nconst Colors = require('../commons/Colors');\nconst Navigation = require('../services/Navigation');\n\nconst Toast = function ({ componentId }) {\n  return (\n    <View style={styles.root}>\n      <View style={styles.toast}>\n        <Text style={styles.text}>This a very important message!</Text>\n        <TouchableOpacity\n          style={styles.button}\n          onPress={() => Navigation.dismissOverlay(componentId)}\n        >\n          <Text style={styles.buttonText}>OK</Text>\n        </TouchableOpacity>\n      </View>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  root: {\n    flex: 1,\n    flexDirection: 'column-reverse',\n  },\n  toast: {\n    elevation: 2,\n    flexDirection: 'row',\n    height: 40,\n    margin: 16,\n    borderRadius: 20,\n    backgroundColor: Colors.accent,\n    alignItems: 'center',\n    justifyContent: 'space-between',\n  },\n  text: {\n    color: 'white',\n    fontSize: 16,\n    marginLeft: 16,\n  },\n  button: {\n    marginRight: 16,\n  },\n  buttonText: {\n    color: 'white',\n    fontSize: 16,\n    fontWeight: 'bold',\n  },\n});\n\nToast.options = {\n  layout: {\n    componentBackgroundColor: 'transparent',\n  },\n  overlay: {\n    interceptTouchOutside: false,\n  },\n};\n\nmodule.exports = Toast;\n")))))}b.isMDXComponent=!0},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,p=d["".concat(i,".").concat(b)]||d[b]||f[b]||a;return n?o.a.createElement(p,s(s({ref:t},l),{},{components:n})):o.a.createElement(p,s({ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},285:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},286:function(e,t,n){"use strict";var r=n(0),o=n(20);t.a=function(){var e=Object(r.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},287:function(e,t,n){"use strict";var r=n(0),o=Object(r.createContext)(void 0);t.a=o},288:function(e,t,n){"use strict";var r=n(0),o=n(287);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},289:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(288),i=n(285),s=n(47),c=n.n(s),l=37,u=39;t.a=function(e){var t=e.block,n=e.children,s=e.defaultValue,d=e.values,f=e.groupId,b=Object(a.a)(),p=b.tabGroupChoices,v=b.setTabGroupChoices,y=Object(r.useState)(s),h=y[0],m=y[1],O=Object(r.useState)(!1),g=O[0],w=O[1];if(null!=f){var j=p[f];null!=j&&j!==h&&d.some((function(e){return e.value===j}))&&m(j)}var x=function(e){m(e),null!=f&&v(f,e)},T=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},k=function(){w(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",C),window.addEventListener("mousedown",k)}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},d.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":h===t}),style:g?{}:{outline:"none"},key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e),C(e)},onFocus:function(){return x(t)},onClick:function(){x(t),w(!1)},onPointerDown:function(){return w(!1)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===h}))[0]))}},290:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function(e){return o.a.createElement("div",null,e.children)}},291:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(286),o=n(292);function a(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,s=void 0!==i&&i,c=a.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(s)return t+n;var u=!n.startsWith(t)?t+n.replace(/^\//,""):n;return l?e+u:u}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},292:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))}}]);