(this["webpackJsonplocal-skills-admin-dashboard"]=this["webpackJsonplocal-skills-admin-dashboard"]||[]).push([[52],{1466:function(e,t,n){},1532:function(e,t,n){"use strict";n.r(t);var r=n(15),o=n(1),c=n(3),a=n.n(c),i=n(139),s=n(488),l=n(945),u=n(920),d=n(889),p=n(490),b=n(489),f=n(99),j=(n(1466),n(10));t.default=function(){var e=[],t=Object(o.useState)([]),n=Object(r.a)(t,2),c=n[0],m=n[1],h=Object(o.useState)([]),y=Object(r.a)(h,2),O=y[0],x=y[1],g=Object(o.useState)(null),v=Object(r.a)(g,2),w=v[0],C=v[1];for(var N in s)e.push(N);return Object(j.jsxs)(o.Fragment,{children:[Object(j.jsx)(b.a,{title:"Feather Icons",data:[{title:"UI"},{title:"Feather Icons"}]}),Object(j.jsx)(f.ib,{children:Object(j.jsx)(f.B,{sm:"12",children:Object(j.jsx)("div",{className:"icon-search-wrapper my-3 mx-auto",children:Object(j.jsxs)(f.L,{className:"input-group-merge mb-1",children:[Object(j.jsx)(f.M,{children:Object(j.jsx)(u.a,{size:14})}),Object(j.jsx)(f.K,{placeholder:"Search icons...",onChange:function(t){!function(t){var n=[];t.length&&e.filter((function(e){e.toLowerCase().includes(t.toLowerCase())&&n.push(e)})),x([].concat(n))}(t.target.value),m(t.target.value)}})]})})})}),Object(j.jsx)("div",{className:"d-flex flex-wrap",id:"icons-container",children:function(){var t=c.length?O:e;return t.length?t.map((function(e){var t=s[e];return Object(j.jsxs)(o.Fragment,{children:[Object(j.jsx)(d.CopyToClipboard,{text:"<".concat(e," />"),children:Object(j.jsx)(f.l,{id:e,className:a()("icon-card cursor-pointer text-center mb-2 mx-50",{active:w===e}),onClick:function(){return function(e){C(e),Object(i.b)((function(){return Object(j.jsxs)("div",{className:"d-flex",children:[Object(j.jsx)("div",{className:"me-1",children:Object(j.jsx)(p.a,{size:"sm",color:"success",icon:Object(j.jsx)(l.a,{size:12})})}),Object(j.jsxs)("div",{className:"d-flex flex-column",children:[Object(j.jsx)("h6",{className:"toast-title",children:"Icon Name Copied! \ud83d\udccb"}),Object(j.jsx)("span",{role:"img","aria-label":"toast-text",children:e})]})]})}))}(e)},children:Object(j.jsxs)(f.m,{children:[Object(j.jsx)("div",{className:"icon-wrapper",children:Object(j.jsx)(t,{})}),Object(j.jsx)("p",{className:"icon-name text-truncate mb-0 mt-1",children:e})]})})}),Object(j.jsx)(f.yb,{placement:"top",target:e,children:e.replace(/([A-Z])/g," $1").trim()})]},e)})):Object(j.jsx)("div",{className:"d-flex align-items-center justify-content-center w-100",children:Object(j.jsx)("h4",{className:"mb-0",children:"No Icons Found!"})})}()})]})}},489:function(e,t,n){"use strict";var r=n(13),o=n(1),c=n(136),a=n(3),i=n.n(a),s=n(985),l=n(914),u=n(915),d=n(913),p=n(942),b=n(99),f=n(10);t.a=function(e){var t=e.data,n=e.title;return Object(f.jsxs)("div",{className:"content-header row",children:[Object(f.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(f.jsx)("div",{className:"row breadcrumbs-top",children:Object(f.jsxs)("div",{className:"col-12",children:[n?Object(f.jsx)("h2",{className:"content-header-title float-start mb-0",children:n}):"",Object(f.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(f.jsxs)(b.g,{children:[Object(f.jsx)(b.h,{tag:"li",children:Object(f.jsx)(c.b,{to:"/",children:"Home"})}),t.map((function(e,n){var a=e.link?c.b:o.Fragment,s=t.length-1===n;return Object(f.jsx)(b.h,{tag:"li",active:!s,className:i()({"text-primary":!s}),children:Object(f.jsx)(a,Object(r.a)(Object(r.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},n)}))]})})]})})}),Object(f.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(f.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(f.jsxs)(b.tb,{children:[Object(f.jsx)(b.G,{color:"primary",className:"btn-icon btn-round dropdown-toggle",children:Object(f.jsx)(s.a,{size:14})}),Object(f.jsxs)(b.F,{tag:"ul",end:!0,children:[Object(f.jsxs)(b.E,{tag:c.b,to:"/apps/todo",children:[Object(f.jsx)(l.a,{className:"me-1",size:14}),Object(f.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(f.jsxs)(b.E,{tag:c.b,to:"/apps/chat",children:[Object(f.jsx)(u.a,{className:"me-1",size:14}),Object(f.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(f.jsxs)(b.E,{tag:c.b,to:"/apps/email",children:[Object(f.jsx)(d.a,{className:"me-1",size:14}),Object(f.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(f.jsxs)(b.E,{tag:c.b,to:"/apps/calendar",children:[Object(f.jsx)(p.a,{className:"me-1",size:14}),Object(f.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},889:function(e,t,n){"use strict";var r=n(890).CopyToClipboard;r.CopyToClipboard=r,e.exports=r},890:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=i(n(1)),c=i(n(891)),a=["text","onCopy","options","children"];function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return j(this,n)}}function j(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(s,e);var t,n,r,i=f(s);function s(){var e;d(this,s);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return y(m(e=i.call.apply(i,[this].concat(n))),"onClick",(function(t){var n=e.props,r=n.text,a=n.onCopy,i=n.children,s=n.options,l=o.default.Children.only(i),u=(0,c.default)(r,s);a&&a(r,u),l&&l.props&&"function"===typeof l.props.onClick&&l.props.onClick(t)})),e}return t=s,(n=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=u(e,a),r=o.default.Children.only(t);return o.default.cloneElement(r,l(l({},n),{},{onClick:this.onClick}))}}])&&p(t.prototype,n),r&&p(t,r),Object.defineProperty(t,"prototype",{writable:!1}),s}(o.default.PureComponent);t.CopyToClipboard=O,y(O,"defaultProps",{onCopy:void 0,options:void 0})},891:function(e,t,n){"use strict";var r=n(892),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,c,a,i,s,l,u=!1;t||(t={}),n=t.debug||!1;try{if(a=r(),i=document.createRange(),s=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var c=o[t.format]||o.default;window.clipboardData.setData(c,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(l),i.selectNodeContents(l),s.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(d){n&&console.error("unable to copy using execCommand: ",d),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(d){n&&console.error("unable to copy using clipboardData: ",d),n&&console.error("falling back to prompt"),c=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(c,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(i):s.removeAllRanges()),l&&document.body.removeChild(l),a()}return u}},892:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=52.757a4c36.chunk.js.map