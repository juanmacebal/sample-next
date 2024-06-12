"use strict";var e,r=require("react"),t={exports:{}},n={};var o,a={};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */"production"===process.env.NODE_ENV?t.exports=function(){if(e)return n;e=1;var t=r,o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var n,a={},l=null,u=null;for(n in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(u=r.ref),r)i.call(r,n)&&!c.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:o,type:e,key:l,ref:u,props:a,_owner:s.current}}return n.Fragment=a,n.jsx=l,n.jsxs=l,n}():t.exports=(o||(o=1,"production"!==process.env.NODE_ENV&&function(){var e=r,t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),v=Symbol.for("react.offscreen"),m=Symbol.iterator,b="@@iterator",g=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function h(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];!function(e,r,t){var n=g.ReactDebugCurrentFrame.getStackAddendum();""!==n&&(r+="%s",t=t.concat([n]));var o=t.map((function(e){return String(e)}));o.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,o)}("error",e,t)}var _,k=!1,w=!1,S=!1,j=!1,O=!1;function R(e){return e.displayName||"Context"}function E(e){if(null==e)return null;if("number"==typeof e.tag&&h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case o:return"Fragment";case n:return"Portal";case s:return"Profiler";case i:return"StrictMode";case f:return"Suspense";case p:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case l:return R(e)+".Consumer";case c:return R(e._context)+".Provider";case u:return function(e,r,t){var n=e.displayName;if(n)return n;var o=r.displayName||r.name||"";return""!==o?t+"("+o+")":t}(e,e.render,"ForwardRef");case y:var r=e.displayName||null;return null!==r?r:E(e.type)||"Memo";case d:var t=e,a=t._payload,v=t._init;try{return E(v(a))}catch(e){return null}}return null}_=Symbol.for("react.module.reference");var x,P,T,$,C,N,D,F=Object.assign,I=0;function L(){}L.__reactDisabledLog=!0;var W,U=g.ReactCurrentDispatcher;function A(e,r,t){if(void 0===W)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);W=n&&n[1]||""}return"\n"+W+e}var z,M=!1,Y="function"==typeof WeakMap?WeakMap:Map;function B(e,r){if(!e||M)return"";var t,n=z.get(e);if(void 0!==n)return n;M=!0;var o,a=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=U.current,U.current=null,function(){if(0===I){x=console.log,P=console.info,T=console.warn,$=console.error,C=console.group,N=console.groupCollapsed,D=console.groupEnd;var e={configurable:!0,enumerable:!0,value:L,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}I++}();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(i,[])}catch(e){t=e}Reflect.construct(e,[],i)}else{try{i.call()}catch(e){t=e}e.call(i.prototype)}}else{try{throw Error()}catch(e){t=e}e()}}catch(r){if(r&&t&&"string"==typeof r.stack){for(var s=r.stack.split("\n"),c=t.stack.split("\n"),l=s.length-1,u=c.length-1;l>=1&&u>=0&&s[l]!==c[u];)u--;for(;l>=1&&u>=0;l--,u--)if(s[l]!==c[u]){if(1!==l||1!==u)do{if(l--,--u<0||s[l]!==c[u]){var f="\n"+s[l].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),"function"==typeof e&&z.set(e,f),f}}while(l>=1&&u>=0);break}}}finally{M=!1,U.current=o,function(){if(0==--I){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:F({},e,{value:x}),info:F({},e,{value:P}),warn:F({},e,{value:T}),error:F({},e,{value:$}),group:F({},e,{value:C}),groupCollapsed:F({},e,{value:N}),groupEnd:F({},e,{value:D})})}I<0&&h("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=a}var p=e?e.displayName||e.name:"",y=p?A(p):"";return"function"==typeof e&&z.set(e,y),y}function K(e,r,t){if(null==e)return"";if("function"==typeof e)return B(e,!(!(n=e.prototype)||!n.isReactComponent));var n;if("string"==typeof e)return A(e);switch(e){case f:return A("Suspense");case p:return A("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case u:return B(e.render,!1);case y:return K(e.type,r,t);case d:var o=e,a=o._payload,i=o._init;try{return K(i(a),r,t)}catch(e){}}return""}z=new Y;var V=Object.prototype.hasOwnProperty,q={},J=g.ReactDebugCurrentFrame;function X(e){if(e){var r=e._owner,t=K(e.type,e._source,r?r.type:null);J.setExtraStackFrame(t)}else J.setExtraStackFrame(null)}var H=Array.isArray;function G(e){return H(e)}function Q(e){return""+e}function Z(e){if(function(e){try{return Q(e),!1}catch(e){return!0}}(e))return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",function(e){return"function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}(e)),Q(e)}var ee,re,te,ne=g.ReactCurrentOwner,oe={key:!0,ref:!0,__self:!0,__source:!0};te={};var ae=function(e,r,n,o,a,i,s){var c={$$typeof:t,type:e,key:r,ref:n,props:s,_owner:i,_store:{}};return Object.defineProperty(c._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(c,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(c,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(c.props),Object.freeze(c)),c};function ie(e,r,t,n,o){var a,i={},s=null,c=null;for(a in void 0!==t&&(Z(t),s=""+t),function(e){if(V.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return void 0!==e.key}(r)&&(Z(r.key),s=""+r.key),function(e){if(V.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return void 0!==e.ref}(r)&&(c=r.ref,function(e,r){if("string"==typeof e.ref&&ne.current&&r&&ne.current.stateNode!==r){var t=E(ne.current.type);te[t]||(h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',E(ne.current.type),e.ref),te[t]=!0)}}(r,o)),r)V.call(r,a)&&!oe.hasOwnProperty(a)&&(i[a]=r[a]);if(e&&e.defaultProps){var l=e.defaultProps;for(a in l)void 0===i[a]&&(i[a]=l[a])}if(s||c){var u="function"==typeof e?e.displayName||e.name||"Unknown":e;s&&function(e,r){var t=function(){ee||(ee=!0,h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}(i,u),c&&function(e,r){var t=function(){re||(re=!0,h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}(i,u)}return ae(e,s,c,o,n,ne.current,i)}var se,ce=g.ReactCurrentOwner,le=g.ReactDebugCurrentFrame;function ue(e){if(e){var r=e._owner,t=K(e.type,e._source,r?r.type:null);le.setExtraStackFrame(t)}else le.setExtraStackFrame(null)}function fe(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}function pe(){if(ce.current){var e=E(ce.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}se=!1;var ye={};function de(e,r){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var t=function(e){var r=pe();if(!r){var t="string"==typeof e?e:e.displayName||e.name;t&&(r="\n\nCheck the top-level render call using <"+t+">.")}return r}(r);if(!ye[t]){ye[t]=!0;var n="";e&&e._owner&&e._owner!==ce.current&&(n=" It was passed a child from "+E(e._owner.type)+"."),ue(e),h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),ue(null)}}}function ve(e,r){if("object"==typeof e)if(G(e))for(var t=0;t<e.length;t++){var n=e[t];fe(n)&&de(n,r)}else if(fe(e))e._store&&(e._store.validated=!0);else if(e){var o=function(e){if(null===e||"object"!=typeof e)return null;var r=m&&e[m]||e[b];return"function"==typeof r?r:null}(e);if("function"==typeof o&&o!==e.entries)for(var a,i=o.call(e);!(a=i.next()).done;)fe(a.value)&&de(a.value,r)}}function me(e){var r,t=e.type;if(null!=t&&"string"!=typeof t){if("function"==typeof t)r=t.propTypes;else{if("object"!=typeof t||t.$$typeof!==u&&t.$$typeof!==y)return;r=t.propTypes}if(r){var n=E(t);!function(e,r,t,n,o){var a=Function.call.bind(V);for(var i in e)if(a(e,i)){var s=void 0;try{if("function"!=typeof e[i]){var c=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw c.name="Invariant Violation",c}s=e[i](r,i,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){s=e}!s||s instanceof Error||(X(o),h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,i,typeof s),X(null)),s instanceof Error&&!(s.message in q)&&(q[s.message]=!0,X(o),h("Failed %s type: %s",t,s.message),X(null))}}(r,e.props,"prop",n,e)}else void 0===t.PropTypes||se||(se=!0,h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",E(t)||"Unknown"));"function"!=typeof t.getDefaultProps||t.getDefaultProps.isReactClassApproved||h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}var be={};function ge(e,r,n,a,m,b){var g=function(e){return"string"==typeof e||"function"==typeof e||!!(e===o||e===s||O||e===i||e===f||e===p||j||e===v||k||w||S)||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===y||e.$$typeof===c||e.$$typeof===l||e.$$typeof===u||e.$$typeof===_||void 0!==e.getModuleId)}(e);if(!g){var R,x="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(x+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),x+=pe(),null===e?R="null":G(e)?R="array":void 0!==e&&e.$$typeof===t?(R="<"+(E(e.type)||"Unknown")+" />",x=" Did you accidentally export a JSX literal instead of a component?"):R=typeof e,h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",R,x)}var P=ie(e,r,n,m,b);if(null==P)return P;if(g){var T=r.children;if(void 0!==T)if(a)if(G(T)){for(var $=0;$<T.length;$++)ve(T[$],e);Object.freeze&&Object.freeze(T)}else h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ve(T,e)}if(V.call(r,"key")){var C=E(e),N=Object.keys(r).filter((function(e){return"key"!==e})),D=N.length>0?"{key: someKey, "+N.join(": ..., ")+": ...}":"{key: someKey}";be[C+D]||(h('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',D,C,N.length>0?"{"+N.join(": ..., ")+": ...}":"{}",C),be[C+D]=!0)}return e===o?function(e){for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if("children"!==n&&"key"!==n){ue(e),h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),ue(null);break}}null!==e.ref&&(ue(e),h("Invalid attribute `ref` supplied to `React.Fragment`."),ue(null))}(P):me(P),P}var he=function(e,r,t){return ge(e,r,t,!1)},_e=function(e,r,t){return ge(e,r,t,!0)};a.Fragment=o,a.jsx=he,a.jsxs=_e}()),a);var i=t.exports;exports.Button=function(e){var r=e.text,t=e.variant,n=e.disabled,o=e.onClick;return i.jsx("button",{className:"button button--".concat(t),disabled:n,onClick:o,children:r})},exports.Link=function(e){var r=e.text,t=e.onClick;return i.jsx("div",{role:"button",className:"link",onClick:t,onKeyDown:function(e){"Enter"===e.key&&t()},children:r})};
//# sourceMappingURL=index.js.map
