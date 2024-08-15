function W2(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var H2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var bS={exports:{}},Hp={},kS={exports:{}},Ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rf=Symbol.for("react.element"),G2=Symbol.for("react.portal"),K2=Symbol.for("react.fragment"),Y2=Symbol.for("react.strict_mode"),Q2=Symbol.for("react.profiler"),X2=Symbol.for("react.provider"),J2=Symbol.for("react.context"),Z2=Symbol.for("react.forward_ref"),eN=Symbol.for("react.suspense"),tN=Symbol.for("react.memo"),nN=Symbol.for("react.lazy"),Ew=Symbol.iterator;function rN(t){return t===null||typeof t!="object"?null:(t=Ew&&t[Ew]||t["@@iterator"],typeof t=="function"?t:null)}var AS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},PS=Object.assign,CS={};function mu(t,e,n){this.props=t,this.context=e,this.refs=CS,this.updater=n||AS}mu.prototype.isReactComponent={};mu.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};mu.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function RS(){}RS.prototype=mu.prototype;function pv(t,e,n){this.props=t,this.context=e,this.refs=CS,this.updater=n||AS}var mv=pv.prototype=new RS;mv.constructor=pv;PS(mv,mu.prototype);mv.isPureReactComponent=!0;var Tw=Array.isArray,NS=Object.prototype.hasOwnProperty,gv={current:null},OS={key:!0,ref:!0,__self:!0,__source:!0};function DS(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)NS.call(e,r)&&!OS.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Rf,type:t,key:s,ref:o,props:i,_owner:gv.current}}function iN(t,e){return{$$typeof:Rf,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _v(t){return typeof t=="object"&&t!==null&&t.$$typeof===Rf}function sN(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Iw=/\/+/g;function Ym(t,e){return typeof t=="object"&&t!==null&&t.key!=null?sN(""+t.key):e.toString(36)}function ld(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Rf:case G2:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ym(o,0):r,Tw(i)?(n="",t!=null&&(n=t.replace(Iw,"$&/")+"/"),ld(i,e,n,"",function(c){return c})):i!=null&&(_v(i)&&(i=iN(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Iw,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Tw(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Ym(s,a);o+=ld(s,e,n,l,i)}else if(l=rN(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Ym(s,a++),o+=ld(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function fh(t,e,n){if(t==null)return t;var r=[],i=0;return ld(t,r,"","",function(s){return e.call(n,s,i++)}),r}function oN(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Jn={current:null},ud={transition:null},aN={ReactCurrentDispatcher:Jn,ReactCurrentBatchConfig:ud,ReactCurrentOwner:gv};function MS(){throw Error("act(...) is not supported in production builds of React.")}Ie.Children={map:fh,forEach:function(t,e,n){fh(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fh(t,function(){e++}),e},toArray:function(t){return fh(t,function(e){return e})||[]},only:function(t){if(!_v(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ie.Component=mu;Ie.Fragment=K2;Ie.Profiler=Q2;Ie.PureComponent=pv;Ie.StrictMode=Y2;Ie.Suspense=eN;Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aN;Ie.act=MS;Ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=PS({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=gv.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)NS.call(e,l)&&!OS.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Rf,type:t.type,key:i,ref:s,props:r,_owner:o}};Ie.createContext=function(t){return t={$$typeof:J2,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:X2,_context:t},t.Consumer=t};Ie.createElement=DS;Ie.createFactory=function(t){var e=DS.bind(null,t);return e.type=t,e};Ie.createRef=function(){return{current:null}};Ie.forwardRef=function(t){return{$$typeof:Z2,render:t}};Ie.isValidElement=_v;Ie.lazy=function(t){return{$$typeof:nN,_payload:{_status:-1,_result:t},_init:oN}};Ie.memo=function(t,e){return{$$typeof:tN,type:t,compare:e===void 0?null:e}};Ie.startTransition=function(t){var e=ud.transition;ud.transition={};try{t()}finally{ud.transition=e}};Ie.unstable_act=MS;Ie.useCallback=function(t,e){return Jn.current.useCallback(t,e)};Ie.useContext=function(t){return Jn.current.useContext(t)};Ie.useDebugValue=function(){};Ie.useDeferredValue=function(t){return Jn.current.useDeferredValue(t)};Ie.useEffect=function(t,e){return Jn.current.useEffect(t,e)};Ie.useId=function(){return Jn.current.useId()};Ie.useImperativeHandle=function(t,e,n){return Jn.current.useImperativeHandle(t,e,n)};Ie.useInsertionEffect=function(t,e){return Jn.current.useInsertionEffect(t,e)};Ie.useLayoutEffect=function(t,e){return Jn.current.useLayoutEffect(t,e)};Ie.useMemo=function(t,e){return Jn.current.useMemo(t,e)};Ie.useReducer=function(t,e,n){return Jn.current.useReducer(t,e,n)};Ie.useRef=function(t){return Jn.current.useRef(t)};Ie.useState=function(t){return Jn.current.useState(t)};Ie.useSyncExternalStore=function(t,e,n){return Jn.current.useSyncExternalStore(t,e,n)};Ie.useTransition=function(){return Jn.current.useTransition()};Ie.version="18.3.1";kS.exports=Ie;var U=kS.exports;const Gp=xS(U),lN=W2({__proto__:null,default:Gp},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uN=U,cN=Symbol.for("react.element"),fN=Symbol.for("react.fragment"),hN=Object.prototype.hasOwnProperty,dN=uN.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pN={key:!0,ref:!0,__self:!0,__source:!0};function LS(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)hN.call(e,r)&&!pN.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:cN,type:t,key:s,ref:o,props:i,_owner:dN.current}}Hp.Fragment=fN;Hp.jsx=LS;Hp.jsxs=LS;bS.exports=Hp;var g=bS.exports,o_={},VS={exports:{}},Rr={},jS={exports:{}},FS={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,H){var M=F.length;F.push(H);e:for(;0<M;){var se=M-1>>>1,de=F[se];if(0<i(de,H))F[se]=H,F[M]=de,M=se;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var H=F[0],M=F.pop();if(M!==H){F[0]=M;e:for(var se=0,de=F.length,ke=de>>>1;se<ke;){var Re=2*(se+1)-1,Le=F[Re],Ue=Re+1,Se=F[Ue];if(0>i(Le,M))Ue<de&&0>i(Se,Le)?(F[se]=Se,F[Ue]=M,se=Ue):(F[se]=Le,F[Re]=M,se=Re);else if(Ue<de&&0>i(Se,M))F[se]=Se,F[Ue]=M,se=Ue;else break e}}return H}function i(F,H){var M=F.sortIndex-H.sortIndex;return M!==0?M:F.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,h=null,p=3,m=!1,I=!1,w=!1,b=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(F){for(var H=n(c);H!==null;){if(H.callback===null)r(c);else if(H.startTime<=F)r(c),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(c)}}function A(F){if(w=!1,x(F),!I)if(n(l)!==null)I=!0,oe(O);else{var H=n(c);H!==null&&Z(A,H.startTime-F)}}function O(F,H){I=!1,w&&(w=!1,E(y),y=-1),m=!0;var M=p;try{for(x(H),h=n(l);h!==null&&(!(h.expirationTime>H)||F&&!N());){var se=h.callback;if(typeof se=="function"){h.callback=null,p=h.priorityLevel;var de=se(h.expirationTime<=H);H=t.unstable_now(),typeof de=="function"?h.callback=de:h===n(l)&&r(l),x(H)}else r(l);h=n(l)}if(h!==null)var ke=!0;else{var Re=n(c);Re!==null&&Z(A,Re.startTime-H),ke=!1}return ke}finally{h=null,p=M,m=!1}}var D=!1,T=null,y=-1,S=5,k=-1;function N(){return!(t.unstable_now()-k<S)}function R(){if(T!==null){var F=t.unstable_now();k=F;var H=!0;try{H=T(!0,F)}finally{H?C():(D=!1,T=null)}}else D=!1}var C;if(typeof v=="function")C=function(){v(R)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,ce=ne.port2;ne.port1.onmessage=R,C=function(){ce.postMessage(null)}}else C=function(){b(R,0)};function oe(F){T=F,D||(D=!0,C())}function Z(F,H){y=b(function(){F(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){I||m||(I=!0,oe(O))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(p){case 1:case 2:case 3:var H=3;break;default:H=p}var M=p;p=H;try{return F()}finally{p=M}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var M=p;p=F;try{return H()}finally{p=M}},t.unstable_scheduleCallback=function(F,H,M){var se=t.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?se+M:se):M=se,F){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=M+de,F={id:f++,callback:H,priorityLevel:F,startTime:M,expirationTime:de,sortIndex:-1},M>se?(F.sortIndex=M,e(c,F),n(l)===null&&F===n(c)&&(w?(E(y),y=-1):w=!0,Z(A,M-se))):(F.sortIndex=de,e(l,F),I||m||(I=!0,oe(O))),F},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(F){var H=p;return function(){var M=p;p=H;try{return F.apply(this,arguments)}finally{p=M}}}})(FS);jS.exports=FS;var mN=jS.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gN=U,Pr=mN;function $(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var US=new Set,zc={};function $a(t,e){Gl(t,e),Gl(t+"Capture",e)}function Gl(t,e){for(zc[t]=e,t=0;t<e.length;t++)US.add(e[t])}var gs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),a_=Object.prototype.hasOwnProperty,_N=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sw={},xw={};function yN(t){return a_.call(xw,t)?!0:a_.call(Sw,t)?!1:_N.test(t)?xw[t]=!0:(Sw[t]=!0,!1)}function vN(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function wN(t,e,n,r){if(e===null||typeof e>"u"||vN(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zn(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var pn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){pn[t]=new Zn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];pn[e]=new Zn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){pn[t]=new Zn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){pn[t]=new Zn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){pn[t]=new Zn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){pn[t]=new Zn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){pn[t]=new Zn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){pn[t]=new Zn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){pn[t]=new Zn(t,5,!1,t.toLowerCase(),null,!1,!1)});var yv=/[\-:]([a-z])/g;function vv(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(yv,vv);pn[e]=new Zn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(yv,vv);pn[e]=new Zn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(yv,vv);pn[e]=new Zn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){pn[t]=new Zn(t,1,!1,t.toLowerCase(),null,!1,!1)});pn.xlinkHref=new Zn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){pn[t]=new Zn(t,1,!1,t.toLowerCase(),null,!0,!0)});function wv(t,e,n,r){var i=pn.hasOwnProperty(e)?pn[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(wN(e,n,i,r)&&(n=null),r||i===null?yN(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var As=gN.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hh=Symbol.for("react.element"),fl=Symbol.for("react.portal"),hl=Symbol.for("react.fragment"),Ev=Symbol.for("react.strict_mode"),l_=Symbol.for("react.profiler"),zS=Symbol.for("react.provider"),BS=Symbol.for("react.context"),Tv=Symbol.for("react.forward_ref"),u_=Symbol.for("react.suspense"),c_=Symbol.for("react.suspense_list"),Iv=Symbol.for("react.memo"),Us=Symbol.for("react.lazy"),$S=Symbol.for("react.offscreen"),bw=Symbol.iterator;function Du(t){return t===null||typeof t!="object"?null:(t=bw&&t[bw]||t["@@iterator"],typeof t=="function"?t:null)}var dt=Object.assign,Qm;function Ku(t){if(Qm===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Qm=e&&e[1]||""}return`
`+Qm+t}var Xm=!1;function Jm(t,e){if(!t||Xm)return"";Xm=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Xm=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ku(t):""}function EN(t){switch(t.tag){case 5:return Ku(t.type);case 16:return Ku("Lazy");case 13:return Ku("Suspense");case 19:return Ku("SuspenseList");case 0:case 2:case 15:return t=Jm(t.type,!1),t;case 11:return t=Jm(t.type.render,!1),t;case 1:return t=Jm(t.type,!0),t;default:return""}}function f_(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hl:return"Fragment";case fl:return"Portal";case l_:return"Profiler";case Ev:return"StrictMode";case u_:return"Suspense";case c_:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case BS:return(t.displayName||"Context")+".Consumer";case zS:return(t._context.displayName||"Context")+".Provider";case Tv:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Iv:return e=t.displayName||null,e!==null?e:f_(t.type)||"Memo";case Us:e=t._payload,t=t._init;try{return f_(t(e))}catch{}}return null}function TN(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return f_(e);case 8:return e===Ev?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Eo(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qS(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function IN(t){var e=qS(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function dh(t){t._valueTracker||(t._valueTracker=IN(t))}function WS(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=qS(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ud(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function h_(t,e){var n=e.checked;return dt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function kw(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Eo(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function HS(t,e){e=e.checked,e!=null&&wv(t,"checked",e,!1)}function d_(t,e){HS(t,e);var n=Eo(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?p_(t,e.type,n):e.hasOwnProperty("defaultValue")&&p_(t,e.type,Eo(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Aw(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function p_(t,e,n){(e!=="number"||Ud(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Yu=Array.isArray;function Cl(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Eo(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function m_(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return dt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Pw(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error($(92));if(Yu(n)){if(1<n.length)throw Error($(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Eo(n)}}function GS(t,e){var n=Eo(e.value),r=Eo(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Cw(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function KS(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function g_(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?KS(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ph,YS=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ph=ph||document.createElement("div"),ph.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ph.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Bc(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fc={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},SN=["Webkit","ms","Moz","O"];Object.keys(fc).forEach(function(t){SN.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fc[e]=fc[t]})});function QS(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fc.hasOwnProperty(t)&&fc[t]?(""+e).trim():e+"px"}function XS(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=QS(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var xN=dt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function __(t,e){if(e){if(xN[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function y_(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var v_=null;function Sv(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var w_=null,Rl=null,Nl=null;function Rw(t){if(t=Df(t)){if(typeof w_!="function")throw Error($(280));var e=t.stateNode;e&&(e=Jp(e),w_(t.stateNode,t.type,e))}}function JS(t){Rl?Nl?Nl.push(t):Nl=[t]:Rl=t}function ZS(){if(Rl){var t=Rl,e=Nl;if(Nl=Rl=null,Rw(t),e)for(t=0;t<e.length;t++)Rw(e[t])}}function ex(t,e){return t(e)}function tx(){}var Zm=!1;function nx(t,e,n){if(Zm)return t(e,n);Zm=!0;try{return ex(t,e,n)}finally{Zm=!1,(Rl!==null||Nl!==null)&&(tx(),ZS())}}function $c(t,e){var n=t.stateNode;if(n===null)return null;var r=Jp(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error($(231,e,typeof n));return n}var E_=!1;if(gs)try{var Mu={};Object.defineProperty(Mu,"passive",{get:function(){E_=!0}}),window.addEventListener("test",Mu,Mu),window.removeEventListener("test",Mu,Mu)}catch{E_=!1}function bN(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var hc=!1,zd=null,Bd=!1,T_=null,kN={onError:function(t){hc=!0,zd=t}};function AN(t,e,n,r,i,s,o,a,l){hc=!1,zd=null,bN.apply(kN,arguments)}function PN(t,e,n,r,i,s,o,a,l){if(AN.apply(this,arguments),hc){if(hc){var c=zd;hc=!1,zd=null}else throw Error($(198));Bd||(Bd=!0,T_=c)}}function qa(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function rx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Nw(t){if(qa(t)!==t)throw Error($(188))}function CN(t){var e=t.alternate;if(!e){if(e=qa(t),e===null)throw Error($(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Nw(i),t;if(s===r)return Nw(i),e;s=s.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?t:e}function ix(t){return t=CN(t),t!==null?sx(t):null}function sx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=sx(t);if(e!==null)return e;t=t.sibling}return null}var ox=Pr.unstable_scheduleCallback,Ow=Pr.unstable_cancelCallback,RN=Pr.unstable_shouldYield,NN=Pr.unstable_requestPaint,kt=Pr.unstable_now,ON=Pr.unstable_getCurrentPriorityLevel,xv=Pr.unstable_ImmediatePriority,ax=Pr.unstable_UserBlockingPriority,$d=Pr.unstable_NormalPriority,DN=Pr.unstable_LowPriority,lx=Pr.unstable_IdlePriority,Kp=null,Ui=null;function MN(t){if(Ui&&typeof Ui.onCommitFiberRoot=="function")try{Ui.onCommitFiberRoot(Kp,t,void 0,(t.current.flags&128)===128)}catch{}}var pi=Math.clz32?Math.clz32:jN,LN=Math.log,VN=Math.LN2;function jN(t){return t>>>=0,t===0?32:31-(LN(t)/VN|0)|0}var mh=64,gh=4194304;function Qu(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function qd(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Qu(a):(s&=o,s!==0&&(r=Qu(s)))}else o=n&~i,o!==0?r=Qu(o):s!==0&&(r=Qu(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-pi(e),i=1<<n,r|=t[n],e&=~i;return r}function FN(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function UN(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-pi(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=FN(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function I_(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ux(){var t=mh;return mh<<=1,!(mh&4194240)&&(mh=64),t}function eg(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Nf(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-pi(e),t[e]=n}function zN(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-pi(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function bv(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-pi(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Fe=0;function cx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var fx,kv,hx,dx,px,S_=!1,_h=[],io=null,so=null,oo=null,qc=new Map,Wc=new Map,Bs=[],BN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dw(t,e){switch(t){case"focusin":case"focusout":io=null;break;case"dragenter":case"dragleave":so=null;break;case"mouseover":case"mouseout":oo=null;break;case"pointerover":case"pointerout":qc.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wc.delete(e.pointerId)}}function Lu(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Df(e),e!==null&&kv(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function $N(t,e,n,r,i){switch(e){case"focusin":return io=Lu(io,t,e,n,r,i),!0;case"dragenter":return so=Lu(so,t,e,n,r,i),!0;case"mouseover":return oo=Lu(oo,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return qc.set(s,Lu(qc.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Wc.set(s,Lu(Wc.get(s)||null,t,e,n,r,i)),!0}return!1}function mx(t){var e=ea(t.target);if(e!==null){var n=qa(e);if(n!==null){if(e=n.tag,e===13){if(e=rx(n),e!==null){t.blockedOn=e,px(t.priority,function(){hx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cd(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=x_(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);v_=r,n.target.dispatchEvent(r),v_=null}else return e=Df(n),e!==null&&kv(e),t.blockedOn=n,!1;e.shift()}return!0}function Mw(t,e,n){cd(t)&&n.delete(e)}function qN(){S_=!1,io!==null&&cd(io)&&(io=null),so!==null&&cd(so)&&(so=null),oo!==null&&cd(oo)&&(oo=null),qc.forEach(Mw),Wc.forEach(Mw)}function Vu(t,e){t.blockedOn===e&&(t.blockedOn=null,S_||(S_=!0,Pr.unstable_scheduleCallback(Pr.unstable_NormalPriority,qN)))}function Hc(t){function e(i){return Vu(i,t)}if(0<_h.length){Vu(_h[0],t);for(var n=1;n<_h.length;n++){var r=_h[n];r.blockedOn===t&&(r.blockedOn=null)}}for(io!==null&&Vu(io,t),so!==null&&Vu(so,t),oo!==null&&Vu(oo,t),qc.forEach(e),Wc.forEach(e),n=0;n<Bs.length;n++)r=Bs[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Bs.length&&(n=Bs[0],n.blockedOn===null);)mx(n),n.blockedOn===null&&Bs.shift()}var Ol=As.ReactCurrentBatchConfig,Wd=!0;function WN(t,e,n,r){var i=Fe,s=Ol.transition;Ol.transition=null;try{Fe=1,Av(t,e,n,r)}finally{Fe=i,Ol.transition=s}}function HN(t,e,n,r){var i=Fe,s=Ol.transition;Ol.transition=null;try{Fe=4,Av(t,e,n,r)}finally{Fe=i,Ol.transition=s}}function Av(t,e,n,r){if(Wd){var i=x_(t,e,n,r);if(i===null)cg(t,e,r,Hd,n),Dw(t,r);else if($N(i,t,e,n,r))r.stopPropagation();else if(Dw(t,r),e&4&&-1<BN.indexOf(t)){for(;i!==null;){var s=Df(i);if(s!==null&&fx(s),s=x_(t,e,n,r),s===null&&cg(t,e,r,Hd,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else cg(t,e,r,null,n)}}var Hd=null;function x_(t,e,n,r){if(Hd=null,t=Sv(r),t=ea(t),t!==null)if(e=qa(t),e===null)t=null;else if(n=e.tag,n===13){if(t=rx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Hd=t,null}function gx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ON()){case xv:return 1;case ax:return 4;case $d:case DN:return 16;case lx:return 536870912;default:return 16}default:return 16}}var Ys=null,Pv=null,fd=null;function _x(){if(fd)return fd;var t,e=Pv,n=e.length,r,i="value"in Ys?Ys.value:Ys.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return fd=i.slice(t,1<r?1-r:void 0)}function hd(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function yh(){return!0}function Lw(){return!1}function Nr(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?yh:Lw,this.isPropagationStopped=Lw,this}return dt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yh)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yh)},persist:function(){},isPersistent:yh}),e}var gu={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cv=Nr(gu),Of=dt({},gu,{view:0,detail:0}),GN=Nr(Of),tg,ng,ju,Yp=dt({},Of,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rv,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ju&&(ju&&t.type==="mousemove"?(tg=t.screenX-ju.screenX,ng=t.screenY-ju.screenY):ng=tg=0,ju=t),tg)},movementY:function(t){return"movementY"in t?t.movementY:ng}}),Vw=Nr(Yp),KN=dt({},Yp,{dataTransfer:0}),YN=Nr(KN),QN=dt({},Of,{relatedTarget:0}),rg=Nr(QN),XN=dt({},gu,{animationName:0,elapsedTime:0,pseudoElement:0}),JN=Nr(XN),ZN=dt({},gu,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),eO=Nr(ZN),tO=dt({},gu,{data:0}),jw=Nr(tO),nO={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rO={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iO={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sO(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=iO[t])?!!e[t]:!1}function Rv(){return sO}var oO=dt({},Of,{key:function(t){if(t.key){var e=nO[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hd(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rO[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rv,charCode:function(t){return t.type==="keypress"?hd(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hd(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),aO=Nr(oO),lO=dt({},Yp,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fw=Nr(lO),uO=dt({},Of,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rv}),cO=Nr(uO),fO=dt({},gu,{propertyName:0,elapsedTime:0,pseudoElement:0}),hO=Nr(fO),dO=dt({},Yp,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pO=Nr(dO),mO=[9,13,27,32],Nv=gs&&"CompositionEvent"in window,dc=null;gs&&"documentMode"in document&&(dc=document.documentMode);var gO=gs&&"TextEvent"in window&&!dc,yx=gs&&(!Nv||dc&&8<dc&&11>=dc),Uw=" ",zw=!1;function vx(t,e){switch(t){case"keyup":return mO.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var dl=!1;function _O(t,e){switch(t){case"compositionend":return wx(e);case"keypress":return e.which!==32?null:(zw=!0,Uw);case"textInput":return t=e.data,t===Uw&&zw?null:t;default:return null}}function yO(t,e){if(dl)return t==="compositionend"||!Nv&&vx(t,e)?(t=_x(),fd=Pv=Ys=null,dl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return yx&&e.locale!=="ko"?null:e.data;default:return null}}var vO={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bw(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!vO[t.type]:e==="textarea"}function Ex(t,e,n,r){JS(r),e=Gd(e,"onChange"),0<e.length&&(n=new Cv("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var pc=null,Gc=null;function wO(t){Nx(t,0)}function Qp(t){var e=gl(t);if(WS(e))return t}function EO(t,e){if(t==="change")return e}var Tx=!1;if(gs){var ig;if(gs){var sg="oninput"in document;if(!sg){var $w=document.createElement("div");$w.setAttribute("oninput","return;"),sg=typeof $w.oninput=="function"}ig=sg}else ig=!1;Tx=ig&&(!document.documentMode||9<document.documentMode)}function qw(){pc&&(pc.detachEvent("onpropertychange",Ix),Gc=pc=null)}function Ix(t){if(t.propertyName==="value"&&Qp(Gc)){var e=[];Ex(e,Gc,t,Sv(t)),nx(wO,e)}}function TO(t,e,n){t==="focusin"?(qw(),pc=e,Gc=n,pc.attachEvent("onpropertychange",Ix)):t==="focusout"&&qw()}function IO(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qp(Gc)}function SO(t,e){if(t==="click")return Qp(e)}function xO(t,e){if(t==="input"||t==="change")return Qp(e)}function bO(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gi=typeof Object.is=="function"?Object.is:bO;function Kc(t,e){if(gi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!a_.call(e,i)||!gi(t[i],e[i]))return!1}return!0}function Ww(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hw(t,e){var n=Ww(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ww(n)}}function Sx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Sx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function xx(){for(var t=window,e=Ud();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ud(t.document)}return e}function Ov(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function kO(t){var e=xx(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Sx(n.ownerDocument.documentElement,n)){if(r!==null&&Ov(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Hw(n,s);var o=Hw(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var AO=gs&&"documentMode"in document&&11>=document.documentMode,pl=null,b_=null,mc=null,k_=!1;function Gw(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;k_||pl==null||pl!==Ud(r)||(r=pl,"selectionStart"in r&&Ov(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mc&&Kc(mc,r)||(mc=r,r=Gd(b_,"onSelect"),0<r.length&&(e=new Cv("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=pl)))}function vh(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ml={animationend:vh("Animation","AnimationEnd"),animationiteration:vh("Animation","AnimationIteration"),animationstart:vh("Animation","AnimationStart"),transitionend:vh("Transition","TransitionEnd")},og={},bx={};gs&&(bx=document.createElement("div").style,"AnimationEvent"in window||(delete ml.animationend.animation,delete ml.animationiteration.animation,delete ml.animationstart.animation),"TransitionEvent"in window||delete ml.transitionend.transition);function Xp(t){if(og[t])return og[t];if(!ml[t])return t;var e=ml[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in bx)return og[t]=e[n];return t}var kx=Xp("animationend"),Ax=Xp("animationiteration"),Px=Xp("animationstart"),Cx=Xp("transitionend"),Rx=new Map,Kw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Oo(t,e){Rx.set(t,e),$a(e,[t])}for(var ag=0;ag<Kw.length;ag++){var lg=Kw[ag],PO=lg.toLowerCase(),CO=lg[0].toUpperCase()+lg.slice(1);Oo(PO,"on"+CO)}Oo(kx,"onAnimationEnd");Oo(Ax,"onAnimationIteration");Oo(Px,"onAnimationStart");Oo("dblclick","onDoubleClick");Oo("focusin","onFocus");Oo("focusout","onBlur");Oo(Cx,"onTransitionEnd");Gl("onMouseEnter",["mouseout","mouseover"]);Gl("onMouseLeave",["mouseout","mouseover"]);Gl("onPointerEnter",["pointerout","pointerover"]);Gl("onPointerLeave",["pointerout","pointerover"]);$a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$a("onBeforeInput",["compositionend","keypress","textInput","paste"]);$a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RO=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xu));function Yw(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,PN(r,e,void 0,t),t.currentTarget=null}function Nx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Yw(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Yw(i,a,c),s=l}}}if(Bd)throw t=T_,Bd=!1,T_=null,t}function Je(t,e){var n=e[N_];n===void 0&&(n=e[N_]=new Set);var r=t+"__bubble";n.has(r)||(Ox(e,t,2,!1),n.add(r))}function ug(t,e,n){var r=0;e&&(r|=4),Ox(n,t,r,e)}var wh="_reactListening"+Math.random().toString(36).slice(2);function Yc(t){if(!t[wh]){t[wh]=!0,US.forEach(function(n){n!=="selectionchange"&&(RO.has(n)||ug(n,!1,t),ug(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wh]||(e[wh]=!0,ug("selectionchange",!1,e))}}function Ox(t,e,n,r){switch(gx(e)){case 1:var i=WN;break;case 4:i=HN;break;default:i=Av}n=i.bind(null,e,n,t),i=void 0,!E_||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function cg(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ea(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}nx(function(){var c=s,f=Sv(n),h=[];e:{var p=Rx.get(t);if(p!==void 0){var m=Cv,I=t;switch(t){case"keypress":if(hd(n)===0)break e;case"keydown":case"keyup":m=aO;break;case"focusin":I="focus",m=rg;break;case"focusout":I="blur",m=rg;break;case"beforeblur":case"afterblur":m=rg;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Vw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=YN;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=cO;break;case kx:case Ax:case Px:m=JN;break;case Cx:m=hO;break;case"scroll":m=GN;break;case"wheel":m=pO;break;case"copy":case"cut":case"paste":m=eO;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Fw}var w=(e&4)!==0,b=!w&&t==="scroll",E=w?p!==null?p+"Capture":null:p;w=[];for(var v=c,x;v!==null;){x=v;var A=x.stateNode;if(x.tag===5&&A!==null&&(x=A,E!==null&&(A=$c(v,E),A!=null&&w.push(Qc(v,A,x)))),b)break;v=v.return}0<w.length&&(p=new m(p,I,null,n,f),h.push({event:p,listeners:w}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",p&&n!==v_&&(I=n.relatedTarget||n.fromElement)&&(ea(I)||I[_s]))break e;if((m||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,m?(I=n.relatedTarget||n.toElement,m=c,I=I?ea(I):null,I!==null&&(b=qa(I),I!==b||I.tag!==5&&I.tag!==6)&&(I=null)):(m=null,I=c),m!==I)){if(w=Vw,A="onMouseLeave",E="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(w=Fw,A="onPointerLeave",E="onPointerEnter",v="pointer"),b=m==null?p:gl(m),x=I==null?p:gl(I),p=new w(A,v+"leave",m,n,f),p.target=b,p.relatedTarget=x,A=null,ea(f)===c&&(w=new w(E,v+"enter",I,n,f),w.target=x,w.relatedTarget=b,A=w),b=A,m&&I)t:{for(w=m,E=I,v=0,x=w;x;x=nl(x))v++;for(x=0,A=E;A;A=nl(A))x++;for(;0<v-x;)w=nl(w),v--;for(;0<x-v;)E=nl(E),x--;for(;v--;){if(w===E||E!==null&&w===E.alternate)break t;w=nl(w),E=nl(E)}w=null}else w=null;m!==null&&Qw(h,p,m,w,!1),I!==null&&b!==null&&Qw(h,b,I,w,!0)}}e:{if(p=c?gl(c):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var O=EO;else if(Bw(p))if(Tx)O=xO;else{O=IO;var D=TO}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(O=SO);if(O&&(O=O(t,c))){Ex(h,O,n,f);break e}D&&D(t,p,c),t==="focusout"&&(D=p._wrapperState)&&D.controlled&&p.type==="number"&&p_(p,"number",p.value)}switch(D=c?gl(c):window,t){case"focusin":(Bw(D)||D.contentEditable==="true")&&(pl=D,b_=c,mc=null);break;case"focusout":mc=b_=pl=null;break;case"mousedown":k_=!0;break;case"contextmenu":case"mouseup":case"dragend":k_=!1,Gw(h,n,f);break;case"selectionchange":if(AO)break;case"keydown":case"keyup":Gw(h,n,f)}var T;if(Nv)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else dl?vx(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(yx&&n.locale!=="ko"&&(dl||y!=="onCompositionStart"?y==="onCompositionEnd"&&dl&&(T=_x()):(Ys=f,Pv="value"in Ys?Ys.value:Ys.textContent,dl=!0)),D=Gd(c,y),0<D.length&&(y=new jw(y,t,null,n,f),h.push({event:y,listeners:D}),T?y.data=T:(T=wx(n),T!==null&&(y.data=T)))),(T=gO?_O(t,n):yO(t,n))&&(c=Gd(c,"onBeforeInput"),0<c.length&&(f=new jw("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=T))}Nx(h,e)})}function Qc(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Gd(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=$c(t,n),s!=null&&r.unshift(Qc(t,s,i)),s=$c(t,e),s!=null&&r.push(Qc(t,s,i))),t=t.return}return r}function nl(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Qw(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=$c(n,s),l!=null&&o.unshift(Qc(n,l,a))):i||(l=$c(n,s),l!=null&&o.push(Qc(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var NO=/\r\n?/g,OO=/\u0000|\uFFFD/g;function Xw(t){return(typeof t=="string"?t:""+t).replace(NO,`
`).replace(OO,"")}function Eh(t,e,n){if(e=Xw(e),Xw(t)!==e&&n)throw Error($(425))}function Kd(){}var A_=null,P_=null;function C_(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var R_=typeof setTimeout=="function"?setTimeout:void 0,DO=typeof clearTimeout=="function"?clearTimeout:void 0,Jw=typeof Promise=="function"?Promise:void 0,MO=typeof queueMicrotask=="function"?queueMicrotask:typeof Jw<"u"?function(t){return Jw.resolve(null).then(t).catch(LO)}:R_;function LO(t){setTimeout(function(){throw t})}function fg(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Hc(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Hc(e)}function ao(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Zw(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var _u=Math.random().toString(36).slice(2),Oi="__reactFiber$"+_u,Xc="__reactProps$"+_u,_s="__reactContainer$"+_u,N_="__reactEvents$"+_u,VO="__reactListeners$"+_u,jO="__reactHandles$"+_u;function ea(t){var e=t[Oi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_s]||n[Oi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Zw(t);t!==null;){if(n=t[Oi])return n;t=Zw(t)}return e}t=n,n=t.parentNode}return null}function Df(t){return t=t[Oi]||t[_s],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gl(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error($(33))}function Jp(t){return t[Xc]||null}var O_=[],_l=-1;function Do(t){return{current:t}}function nt(t){0>_l||(t.current=O_[_l],O_[_l]=null,_l--)}function Ge(t,e){_l++,O_[_l]=t.current,t.current=e}var To={},On=Do(To),sr=Do(!1),Ea=To;function Kl(t,e){var n=t.type.contextTypes;if(!n)return To;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function or(t){return t=t.childContextTypes,t!=null}function Yd(){nt(sr),nt(On)}function eE(t,e,n){if(On.current!==To)throw Error($(168));Ge(On,e),Ge(sr,n)}function Dx(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error($(108,TN(t)||"Unknown",i));return dt({},n,r)}function Qd(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||To,Ea=On.current,Ge(On,t),Ge(sr,sr.current),!0}function tE(t,e,n){var r=t.stateNode;if(!r)throw Error($(169));n?(t=Dx(t,e,Ea),r.__reactInternalMemoizedMergedChildContext=t,nt(sr),nt(On),Ge(On,t)):nt(sr),Ge(sr,n)}var rs=null,Zp=!1,hg=!1;function Mx(t){rs===null?rs=[t]:rs.push(t)}function FO(t){Zp=!0,Mx(t)}function Mo(){if(!hg&&rs!==null){hg=!0;var t=0,e=Fe;try{var n=rs;for(Fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}rs=null,Zp=!1}catch(i){throw rs!==null&&(rs=rs.slice(t+1)),ox(xv,Mo),i}finally{Fe=e,hg=!1}}return null}var yl=[],vl=0,Xd=null,Jd=0,Fr=[],Ur=0,Ta=null,os=1,as="";function Ko(t,e){yl[vl++]=Jd,yl[vl++]=Xd,Xd=t,Jd=e}function Lx(t,e,n){Fr[Ur++]=os,Fr[Ur++]=as,Fr[Ur++]=Ta,Ta=t;var r=os;t=as;var i=32-pi(r)-1;r&=~(1<<i),n+=1;var s=32-pi(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,os=1<<32-pi(e)+i|n<<i|r,as=s+t}else os=1<<s|n<<i|r,as=t}function Dv(t){t.return!==null&&(Ko(t,1),Lx(t,1,0))}function Mv(t){for(;t===Xd;)Xd=yl[--vl],yl[vl]=null,Jd=yl[--vl],yl[vl]=null;for(;t===Ta;)Ta=Fr[--Ur],Fr[Ur]=null,as=Fr[--Ur],Fr[Ur]=null,os=Fr[--Ur],Fr[Ur]=null}var br=null,Ir=null,it=!1,ci=null;function Vx(t,e){var n=qr(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function nE(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,br=t,Ir=ao(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,br=t,Ir=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ta!==null?{id:os,overflow:as}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=qr(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,br=t,Ir=null,!0):!1;default:return!1}}function D_(t){return(t.mode&1)!==0&&(t.flags&128)===0}function M_(t){if(it){var e=Ir;if(e){var n=e;if(!nE(t,e)){if(D_(t))throw Error($(418));e=ao(n.nextSibling);var r=br;e&&nE(t,e)?Vx(r,n):(t.flags=t.flags&-4097|2,it=!1,br=t)}}else{if(D_(t))throw Error($(418));t.flags=t.flags&-4097|2,it=!1,br=t}}}function rE(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;br=t}function Th(t){if(t!==br)return!1;if(!it)return rE(t),it=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!C_(t.type,t.memoizedProps)),e&&(e=Ir)){if(D_(t))throw jx(),Error($(418));for(;e;)Vx(t,e),e=ao(e.nextSibling)}if(rE(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ir=ao(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ir=null}}else Ir=br?ao(t.stateNode.nextSibling):null;return!0}function jx(){for(var t=Ir;t;)t=ao(t.nextSibling)}function Yl(){Ir=br=null,it=!1}function Lv(t){ci===null?ci=[t]:ci.push(t)}var UO=As.ReactCurrentBatchConfig;function Fu(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error($(284));if(!n._owner)throw Error($(290,t))}return t}function Ih(t,e){throw t=Object.prototype.toString.call(e),Error($(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function iE(t){var e=t._init;return e(t._payload)}function Fx(t){function e(E,v){if(t){var x=E.deletions;x===null?(E.deletions=[v],E.flags|=16):x.push(v)}}function n(E,v){if(!t)return null;for(;v!==null;)e(E,v),v=v.sibling;return null}function r(E,v){for(E=new Map;v!==null;)v.key!==null?E.set(v.key,v):E.set(v.index,v),v=v.sibling;return E}function i(E,v){return E=fo(E,v),E.index=0,E.sibling=null,E}function s(E,v,x){return E.index=x,t?(x=E.alternate,x!==null?(x=x.index,x<v?(E.flags|=2,v):x):(E.flags|=2,v)):(E.flags|=1048576,v)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function a(E,v,x,A){return v===null||v.tag!==6?(v=vg(x,E.mode,A),v.return=E,v):(v=i(v,x),v.return=E,v)}function l(E,v,x,A){var O=x.type;return O===hl?f(E,v,x.props.children,A,x.key):v!==null&&(v.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Us&&iE(O)===v.type)?(A=i(v,x.props),A.ref=Fu(E,v,x),A.return=E,A):(A=vd(x.type,x.key,x.props,null,E.mode,A),A.ref=Fu(E,v,x),A.return=E,A)}function c(E,v,x,A){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=wg(x,E.mode,A),v.return=E,v):(v=i(v,x.children||[]),v.return=E,v)}function f(E,v,x,A,O){return v===null||v.tag!==7?(v=fa(x,E.mode,A,O),v.return=E,v):(v=i(v,x),v.return=E,v)}function h(E,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=vg(""+v,E.mode,x),v.return=E,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case hh:return x=vd(v.type,v.key,v.props,null,E.mode,x),x.ref=Fu(E,null,v),x.return=E,x;case fl:return v=wg(v,E.mode,x),v.return=E,v;case Us:var A=v._init;return h(E,A(v._payload),x)}if(Yu(v)||Du(v))return v=fa(v,E.mode,x,null),v.return=E,v;Ih(E,v)}return null}function p(E,v,x,A){var O=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return O!==null?null:a(E,v,""+x,A);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case hh:return x.key===O?l(E,v,x,A):null;case fl:return x.key===O?c(E,v,x,A):null;case Us:return O=x._init,p(E,v,O(x._payload),A)}if(Yu(x)||Du(x))return O!==null?null:f(E,v,x,A,null);Ih(E,x)}return null}function m(E,v,x,A,O){if(typeof A=="string"&&A!==""||typeof A=="number")return E=E.get(x)||null,a(v,E,""+A,O);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case hh:return E=E.get(A.key===null?x:A.key)||null,l(v,E,A,O);case fl:return E=E.get(A.key===null?x:A.key)||null,c(v,E,A,O);case Us:var D=A._init;return m(E,v,x,D(A._payload),O)}if(Yu(A)||Du(A))return E=E.get(x)||null,f(v,E,A,O,null);Ih(v,A)}return null}function I(E,v,x,A){for(var O=null,D=null,T=v,y=v=0,S=null;T!==null&&y<x.length;y++){T.index>y?(S=T,T=null):S=T.sibling;var k=p(E,T,x[y],A);if(k===null){T===null&&(T=S);break}t&&T&&k.alternate===null&&e(E,T),v=s(k,v,y),D===null?O=k:D.sibling=k,D=k,T=S}if(y===x.length)return n(E,T),it&&Ko(E,y),O;if(T===null){for(;y<x.length;y++)T=h(E,x[y],A),T!==null&&(v=s(T,v,y),D===null?O=T:D.sibling=T,D=T);return it&&Ko(E,y),O}for(T=r(E,T);y<x.length;y++)S=m(T,E,y,x[y],A),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?y:S.key),v=s(S,v,y),D===null?O=S:D.sibling=S,D=S);return t&&T.forEach(function(N){return e(E,N)}),it&&Ko(E,y),O}function w(E,v,x,A){var O=Du(x);if(typeof O!="function")throw Error($(150));if(x=O.call(x),x==null)throw Error($(151));for(var D=O=null,T=v,y=v=0,S=null,k=x.next();T!==null&&!k.done;y++,k=x.next()){T.index>y?(S=T,T=null):S=T.sibling;var N=p(E,T,k.value,A);if(N===null){T===null&&(T=S);break}t&&T&&N.alternate===null&&e(E,T),v=s(N,v,y),D===null?O=N:D.sibling=N,D=N,T=S}if(k.done)return n(E,T),it&&Ko(E,y),O;if(T===null){for(;!k.done;y++,k=x.next())k=h(E,k.value,A),k!==null&&(v=s(k,v,y),D===null?O=k:D.sibling=k,D=k);return it&&Ko(E,y),O}for(T=r(E,T);!k.done;y++,k=x.next())k=m(T,E,y,k.value,A),k!==null&&(t&&k.alternate!==null&&T.delete(k.key===null?y:k.key),v=s(k,v,y),D===null?O=k:D.sibling=k,D=k);return t&&T.forEach(function(R){return e(E,R)}),it&&Ko(E,y),O}function b(E,v,x,A){if(typeof x=="object"&&x!==null&&x.type===hl&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case hh:e:{for(var O=x.key,D=v;D!==null;){if(D.key===O){if(O=x.type,O===hl){if(D.tag===7){n(E,D.sibling),v=i(D,x.props.children),v.return=E,E=v;break e}}else if(D.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Us&&iE(O)===D.type){n(E,D.sibling),v=i(D,x.props),v.ref=Fu(E,D,x),v.return=E,E=v;break e}n(E,D);break}else e(E,D);D=D.sibling}x.type===hl?(v=fa(x.props.children,E.mode,A,x.key),v.return=E,E=v):(A=vd(x.type,x.key,x.props,null,E.mode,A),A.ref=Fu(E,v,x),A.return=E,E=A)}return o(E);case fl:e:{for(D=x.key;v!==null;){if(v.key===D)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(E,v.sibling),v=i(v,x.children||[]),v.return=E,E=v;break e}else{n(E,v);break}else e(E,v);v=v.sibling}v=wg(x,E.mode,A),v.return=E,E=v}return o(E);case Us:return D=x._init,b(E,v,D(x._payload),A)}if(Yu(x))return I(E,v,x,A);if(Du(x))return w(E,v,x,A);Ih(E,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(E,v.sibling),v=i(v,x),v.return=E,E=v):(n(E,v),v=vg(x,E.mode,A),v.return=E,E=v),o(E)):n(E,v)}return b}var Ql=Fx(!0),Ux=Fx(!1),Zd=Do(null),ep=null,wl=null,Vv=null;function jv(){Vv=wl=ep=null}function Fv(t){var e=Zd.current;nt(Zd),t._currentValue=e}function L_(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Dl(t,e){ep=t,Vv=wl=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ir=!0),t.firstContext=null)}function Xr(t){var e=t._currentValue;if(Vv!==t)if(t={context:t,memoizedValue:e,next:null},wl===null){if(ep===null)throw Error($(308));wl=t,ep.dependencies={lanes:0,firstContext:t}}else wl=wl.next=t;return e}var ta=null;function Uv(t){ta===null?ta=[t]:ta.push(t)}function zx(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Uv(e)):(n.next=i.next,i.next=n),e.interleaved=n,ys(t,r)}function ys(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zs=!1;function zv(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hs(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function lo(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ys(t,n)}return i=r.interleaved,i===null?(e.next=e,Uv(r)):(e.next=i.next,i.next=e),r.interleaved=e,ys(t,n)}function dd(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bv(t,n)}}function sE(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function tp(t,e,n,r){var i=t.updateQueue;zs=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,f=c=l=null,a=s;do{var p=a.lane,m=a.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var I=t,w=a;switch(p=e,m=n,w.tag){case 1:if(I=w.payload,typeof I=="function"){h=I.call(m,h,p);break e}h=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=w.payload,p=typeof I=="function"?I.call(m,h,p):I,p==null)break e;h=dt({},h,p);break e;case 2:zs=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else m={eventTime:m,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=m,l=h):f=f.next=m,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(f===null&&(l=h),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Sa|=o,t.lanes=o,t.memoizedState=h}}function oE(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var Mf={},zi=Do(Mf),Jc=Do(Mf),Zc=Do(Mf);function na(t){if(t===Mf)throw Error($(174));return t}function Bv(t,e){switch(Ge(Zc,e),Ge(Jc,t),Ge(zi,Mf),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:g_(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=g_(e,t)}nt(zi),Ge(zi,e)}function Xl(){nt(zi),nt(Jc),nt(Zc)}function $x(t){na(Zc.current);var e=na(zi.current),n=g_(e,t.type);e!==n&&(Ge(Jc,t),Ge(zi,n))}function $v(t){Jc.current===t&&(nt(zi),nt(Jc))}var ut=Do(0);function np(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var dg=[];function qv(){for(var t=0;t<dg.length;t++)dg[t]._workInProgressVersionPrimary=null;dg.length=0}var pd=As.ReactCurrentDispatcher,pg=As.ReactCurrentBatchConfig,Ia=0,ht=null,zt=null,Jt=null,rp=!1,gc=!1,ef=0,zO=0;function Tn(){throw Error($(321))}function Wv(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gi(t[n],e[n]))return!1;return!0}function Hv(t,e,n,r,i,s){if(Ia=s,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pd.current=t===null||t.memoizedState===null?WO:HO,t=n(r,i),gc){s=0;do{if(gc=!1,ef=0,25<=s)throw Error($(301));s+=1,Jt=zt=null,e.updateQueue=null,pd.current=GO,t=n(r,i)}while(gc)}if(pd.current=ip,e=zt!==null&&zt.next!==null,Ia=0,Jt=zt=ht=null,rp=!1,e)throw Error($(300));return t}function Gv(){var t=ef!==0;return ef=0,t}function Pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?ht.memoizedState=Jt=t:Jt=Jt.next=t,Jt}function Jr(){if(zt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var e=Jt===null?ht.memoizedState:Jt.next;if(e!==null)Jt=e,zt=t;else{if(t===null)throw Error($(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},Jt===null?ht.memoizedState=Jt=t:Jt=Jt.next=t}return Jt}function tf(t,e){return typeof e=="function"?e(t):e}function mg(t){var e=Jr(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=zt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((Ia&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ht.lanes|=f,Sa|=f}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,gi(r,e.memoizedState)||(ir=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ht.lanes|=s,Sa|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function gg(t){var e=Jr(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);gi(s,e.memoizedState)||(ir=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function qx(){}function Wx(t,e){var n=ht,r=Jr(),i=e(),s=!gi(r.memoizedState,i);if(s&&(r.memoizedState=i,ir=!0),r=r.queue,Kv(Kx.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Jt!==null&&Jt.memoizedState.tag&1){if(n.flags|=2048,nf(9,Gx.bind(null,n,r,i,e),void 0,null),tn===null)throw Error($(349));Ia&30||Hx(n,e,i)}return i}function Hx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Gx(t,e,n,r){e.value=n,e.getSnapshot=r,Yx(e)&&Qx(t)}function Kx(t,e,n){return n(function(){Yx(e)&&Qx(t)})}function Yx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gi(t,n)}catch{return!0}}function Qx(t){var e=ys(t,1);e!==null&&mi(e,t,1,-1)}function aE(t){var e=Pi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tf,lastRenderedState:t},e.queue=t,t=t.dispatch=qO.bind(null,ht,t),[e.memoizedState,t]}function nf(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Xx(){return Jr().memoizedState}function md(t,e,n,r){var i=Pi();ht.flags|=t,i.memoizedState=nf(1|e,n,void 0,r===void 0?null:r)}function em(t,e,n,r){var i=Jr();r=r===void 0?null:r;var s=void 0;if(zt!==null){var o=zt.memoizedState;if(s=o.destroy,r!==null&&Wv(r,o.deps)){i.memoizedState=nf(e,n,s,r);return}}ht.flags|=t,i.memoizedState=nf(1|e,n,s,r)}function lE(t,e){return md(8390656,8,t,e)}function Kv(t,e){return em(2048,8,t,e)}function Jx(t,e){return em(4,2,t,e)}function Zx(t,e){return em(4,4,t,e)}function eb(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function tb(t,e,n){return n=n!=null?n.concat([t]):null,em(4,4,eb.bind(null,e,t),n)}function Yv(){}function nb(t,e){var n=Jr();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wv(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function rb(t,e){var n=Jr();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wv(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ib(t,e,n){return Ia&21?(gi(n,e)||(n=ux(),ht.lanes|=n,Sa|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ir=!0),t.memoizedState=n)}function BO(t,e){var n=Fe;Fe=n!==0&&4>n?n:4,t(!0);var r=pg.transition;pg.transition={};try{t(!1),e()}finally{Fe=n,pg.transition=r}}function sb(){return Jr().memoizedState}function $O(t,e,n){var r=co(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ob(t))ab(e,n);else if(n=zx(t,e,n,r),n!==null){var i=Xn();mi(n,t,r,i),lb(n,e,r)}}function qO(t,e,n){var r=co(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ob(t))ab(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,gi(a,o)){var l=e.interleaved;l===null?(i.next=i,Uv(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=zx(t,e,i,r),n!==null&&(i=Xn(),mi(n,t,r,i),lb(n,e,r))}}function ob(t){var e=t.alternate;return t===ht||e!==null&&e===ht}function ab(t,e){gc=rp=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function lb(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bv(t,n)}}var ip={readContext:Xr,useCallback:Tn,useContext:Tn,useEffect:Tn,useImperativeHandle:Tn,useInsertionEffect:Tn,useLayoutEffect:Tn,useMemo:Tn,useReducer:Tn,useRef:Tn,useState:Tn,useDebugValue:Tn,useDeferredValue:Tn,useTransition:Tn,useMutableSource:Tn,useSyncExternalStore:Tn,useId:Tn,unstable_isNewReconciler:!1},WO={readContext:Xr,useCallback:function(t,e){return Pi().memoizedState=[t,e===void 0?null:e],t},useContext:Xr,useEffect:lE,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,md(4194308,4,eb.bind(null,e,t),n)},useLayoutEffect:function(t,e){return md(4194308,4,t,e)},useInsertionEffect:function(t,e){return md(4,2,t,e)},useMemo:function(t,e){var n=Pi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Pi();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=$O.bind(null,ht,t),[r.memoizedState,t]},useRef:function(t){var e=Pi();return t={current:t},e.memoizedState=t},useState:aE,useDebugValue:Yv,useDeferredValue:function(t){return Pi().memoizedState=t},useTransition:function(){var t=aE(!1),e=t[0];return t=BO.bind(null,t[1]),Pi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ht,i=Pi();if(it){if(n===void 0)throw Error($(407));n=n()}else{if(n=e(),tn===null)throw Error($(349));Ia&30||Hx(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,lE(Kx.bind(null,r,s,t),[t]),r.flags|=2048,nf(9,Gx.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Pi(),e=tn.identifierPrefix;if(it){var n=as,r=os;n=(r&~(1<<32-pi(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ef++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=zO++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},HO={readContext:Xr,useCallback:nb,useContext:Xr,useEffect:Kv,useImperativeHandle:tb,useInsertionEffect:Jx,useLayoutEffect:Zx,useMemo:rb,useReducer:mg,useRef:Xx,useState:function(){return mg(tf)},useDebugValue:Yv,useDeferredValue:function(t){var e=Jr();return ib(e,zt.memoizedState,t)},useTransition:function(){var t=mg(tf)[0],e=Jr().memoizedState;return[t,e]},useMutableSource:qx,useSyncExternalStore:Wx,useId:sb,unstable_isNewReconciler:!1},GO={readContext:Xr,useCallback:nb,useContext:Xr,useEffect:Kv,useImperativeHandle:tb,useInsertionEffect:Jx,useLayoutEffect:Zx,useMemo:rb,useReducer:gg,useRef:Xx,useState:function(){return gg(tf)},useDebugValue:Yv,useDeferredValue:function(t){var e=Jr();return zt===null?e.memoizedState=t:ib(e,zt.memoizedState,t)},useTransition:function(){var t=gg(tf)[0],e=Jr().memoizedState;return[t,e]},useMutableSource:qx,useSyncExternalStore:Wx,useId:sb,unstable_isNewReconciler:!1};function li(t,e){if(t&&t.defaultProps){e=dt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function V_(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:dt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tm={isMounted:function(t){return(t=t._reactInternals)?qa(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Xn(),i=co(t),s=hs(r,i);s.payload=e,n!=null&&(s.callback=n),e=lo(t,s,i),e!==null&&(mi(e,t,i,r),dd(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Xn(),i=co(t),s=hs(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=lo(t,s,i),e!==null&&(mi(e,t,i,r),dd(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xn(),r=co(t),i=hs(n,r);i.tag=2,e!=null&&(i.callback=e),e=lo(t,i,r),e!==null&&(mi(e,t,r,n),dd(e,t,r))}};function uE(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Kc(n,r)||!Kc(i,s):!0}function ub(t,e,n){var r=!1,i=To,s=e.contextType;return typeof s=="object"&&s!==null?s=Xr(s):(i=or(e)?Ea:On.current,r=e.contextTypes,s=(r=r!=null)?Kl(t,i):To),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tm,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function cE(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&tm.enqueueReplaceState(e,e.state,null)}function j_(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},zv(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Xr(s):(s=or(e)?Ea:On.current,i.context=Kl(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(V_(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&tm.enqueueReplaceState(i,i.state,null),tp(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Jl(t,e){try{var n="",r=e;do n+=EN(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function _g(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function F_(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var KO=typeof WeakMap=="function"?WeakMap:Map;function cb(t,e,n){n=hs(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){op||(op=!0,Y_=r),F_(t,e)},n}function fb(t,e,n){n=hs(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){F_(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){F_(t,e),typeof r!="function"&&(uo===null?uo=new Set([this]):uo.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function fE(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new KO;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=lD.bind(null,t,e,n),e.then(t,t))}function hE(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function dE(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hs(-1,1),e.tag=2,lo(n,e,1))),n.lanes|=1),t)}var YO=As.ReactCurrentOwner,ir=!1;function Wn(t,e,n,r){e.child=t===null?Ux(e,null,n,r):Ql(e,t.child,n,r)}function pE(t,e,n,r,i){n=n.render;var s=e.ref;return Dl(e,i),r=Hv(t,e,n,r,s,i),n=Gv(),t!==null&&!ir?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vs(t,e,i)):(it&&n&&Dv(e),e.flags|=1,Wn(t,e,r,i),e.child)}function mE(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!r0(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,hb(t,e,s,r,i)):(t=vd(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Kc,n(o,r)&&t.ref===e.ref)return vs(t,e,i)}return e.flags|=1,t=fo(s,r),t.ref=e.ref,t.return=e,e.child=t}function hb(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Kc(s,r)&&t.ref===e.ref)if(ir=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ir=!0);else return e.lanes=t.lanes,vs(t,e,i)}return U_(t,e,n,r,i)}function db(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(Tl,yr),yr|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ge(Tl,yr),yr|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ge(Tl,yr),yr|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ge(Tl,yr),yr|=r;return Wn(t,e,i,n),e.child}function pb(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function U_(t,e,n,r,i){var s=or(n)?Ea:On.current;return s=Kl(e,s),Dl(e,i),n=Hv(t,e,n,r,s,i),r=Gv(),t!==null&&!ir?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vs(t,e,i)):(it&&r&&Dv(e),e.flags|=1,Wn(t,e,n,i),e.child)}function gE(t,e,n,r,i){if(or(n)){var s=!0;Qd(e)}else s=!1;if(Dl(e,i),e.stateNode===null)gd(t,e),ub(e,n,r),j_(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Xr(c):(c=or(n)?Ea:On.current,c=Kl(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&cE(e,o,r,c),zs=!1;var p=e.memoizedState;o.state=p,tp(e,r,o,i),l=e.memoizedState,a!==r||p!==l||sr.current||zs?(typeof f=="function"&&(V_(e,n,f,r),l=e.memoizedState),(a=zs||uE(e,n,a,r,p,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Bx(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:li(e.type,a),o.props=c,h=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Xr(l):(l=or(n)?Ea:On.current,l=Kl(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||p!==l)&&cE(e,o,r,l),zs=!1,p=e.memoizedState,o.state=p,tp(e,r,o,i);var I=e.memoizedState;a!==h||p!==I||sr.current||zs?(typeof m=="function"&&(V_(e,n,m,r),I=e.memoizedState),(c=zs||uE(e,n,c,r,p,I,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,I,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,I,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=I),o.props=r,o.state=I,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return z_(t,e,n,r,s,i)}function z_(t,e,n,r,i,s){pb(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&tE(e,n,!1),vs(t,e,s);r=e.stateNode,YO.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ql(e,t.child,null,s),e.child=Ql(e,null,a,s)):Wn(t,e,a,s),e.memoizedState=r.state,i&&tE(e,n,!0),e.child}function mb(t){var e=t.stateNode;e.pendingContext?eE(t,e.pendingContext,e.pendingContext!==e.context):e.context&&eE(t,e.context,!1),Bv(t,e.containerInfo)}function _E(t,e,n,r,i){return Yl(),Lv(i),e.flags|=256,Wn(t,e,n,r),e.child}var B_={dehydrated:null,treeContext:null,retryLane:0};function $_(t){return{baseLanes:t,cachePool:null,transitions:null}}function gb(t,e,n){var r=e.pendingProps,i=ut.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ge(ut,i&1),t===null)return M_(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=im(o,r,0,null),t=fa(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=$_(n),e.memoizedState=B_,t):Qv(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return QO(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=fo(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=fo(a,s):(s=fa(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?$_(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=B_,r}return s=t.child,t=s.sibling,r=fo(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Qv(t,e){return e=im({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Sh(t,e,n,r){return r!==null&&Lv(r),Ql(e,t.child,null,n),t=Qv(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function QO(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=_g(Error($(422))),Sh(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=im({mode:"visible",children:r.children},i,0,null),s=fa(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ql(e,t.child,null,o),e.child.memoizedState=$_(o),e.memoizedState=B_,s);if(!(e.mode&1))return Sh(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error($(419)),r=_g(s,r,void 0),Sh(t,e,o,r)}if(a=(o&t.childLanes)!==0,ir||a){if(r=tn,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ys(t,i),mi(r,t,i,-1))}return n0(),r=_g(Error($(421))),Sh(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=uD.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ir=ao(i.nextSibling),br=e,it=!0,ci=null,t!==null&&(Fr[Ur++]=os,Fr[Ur++]=as,Fr[Ur++]=Ta,os=t.id,as=t.overflow,Ta=e),e=Qv(e,r.children),e.flags|=4096,e)}function yE(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),L_(t.return,e,n)}function yg(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function _b(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Wn(t,e,r.children,n),r=ut.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&yE(t,n,e);else if(t.tag===19)yE(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ge(ut,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&np(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),yg(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&np(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}yg(e,!0,n,null,s);break;case"together":yg(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function gd(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vs(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Sa|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error($(153));if(e.child!==null){for(t=e.child,n=fo(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fo(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function XO(t,e,n){switch(e.tag){case 3:mb(e),Yl();break;case 5:$x(e);break;case 1:or(e.type)&&Qd(e);break;case 4:Bv(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ge(Zd,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ge(ut,ut.current&1),e.flags|=128,null):n&e.child.childLanes?gb(t,e,n):(Ge(ut,ut.current&1),t=vs(t,e,n),t!==null?t.sibling:null);Ge(ut,ut.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return _b(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ge(ut,ut.current),r)break;return null;case 22:case 23:return e.lanes=0,db(t,e,n)}return vs(t,e,n)}var yb,q_,vb,wb;yb=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};q_=function(){};vb=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,na(zi.current);var s=null;switch(n){case"input":i=h_(t,i),r=h_(t,r),s=[];break;case"select":i=dt({},i,{value:void 0}),r=dt({},r,{value:void 0}),s=[];break;case"textarea":i=m_(t,i),r=m_(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Kd)}__(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(zc.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(zc.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Je("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};wb=function(t,e,n,r){n!==r&&(e.flags|=4)};function Uu(t,e){if(!it)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function In(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function JO(t,e,n){var r=e.pendingProps;switch(Mv(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return In(e),null;case 1:return or(e.type)&&Yd(),In(e),null;case 3:return r=e.stateNode,Xl(),nt(sr),nt(On),qv(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Th(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ci!==null&&(J_(ci),ci=null))),q_(t,e),In(e),null;case 5:$v(e);var i=na(Zc.current);if(n=e.type,t!==null&&e.stateNode!=null)vb(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error($(166));return In(e),null}if(t=na(zi.current),Th(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Oi]=e,r[Xc]=s,t=(e.mode&1)!==0,n){case"dialog":Je("cancel",r),Je("close",r);break;case"iframe":case"object":case"embed":Je("load",r);break;case"video":case"audio":for(i=0;i<Xu.length;i++)Je(Xu[i],r);break;case"source":Je("error",r);break;case"img":case"image":case"link":Je("error",r),Je("load",r);break;case"details":Je("toggle",r);break;case"input":kw(r,s),Je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Je("invalid",r);break;case"textarea":Pw(r,s),Je("invalid",r)}__(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Eh(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Eh(r.textContent,a,t),i=["children",""+a]):zc.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Je("scroll",r)}switch(n){case"input":dh(r),Aw(r,s,!0);break;case"textarea":dh(r),Cw(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Kd)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=KS(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Oi]=e,t[Xc]=r,yb(t,e,!1,!1),e.stateNode=t;e:{switch(o=y_(n,r),n){case"dialog":Je("cancel",t),Je("close",t),i=r;break;case"iframe":case"object":case"embed":Je("load",t),i=r;break;case"video":case"audio":for(i=0;i<Xu.length;i++)Je(Xu[i],t);i=r;break;case"source":Je("error",t),i=r;break;case"img":case"image":case"link":Je("error",t),Je("load",t),i=r;break;case"details":Je("toggle",t),i=r;break;case"input":kw(t,r),i=h_(t,r),Je("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=dt({},r,{value:void 0}),Je("invalid",t);break;case"textarea":Pw(t,r),i=m_(t,r),Je("invalid",t);break;default:i=r}__(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?XS(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&YS(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Bc(t,l):typeof l=="number"&&Bc(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(zc.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Je("scroll",t):l!=null&&wv(t,s,l,o))}switch(n){case"input":dh(t),Aw(t,r,!1);break;case"textarea":dh(t),Cw(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Eo(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Cl(t,!!r.multiple,s,!1):r.defaultValue!=null&&Cl(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Kd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return In(e),null;case 6:if(t&&e.stateNode!=null)wb(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error($(166));if(n=na(Zc.current),na(zi.current),Th(e)){if(r=e.stateNode,n=e.memoizedProps,r[Oi]=e,(s=r.nodeValue!==n)&&(t=br,t!==null))switch(t.tag){case 3:Eh(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Eh(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Oi]=e,e.stateNode=r}return In(e),null;case 13:if(nt(ut),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(it&&Ir!==null&&e.mode&1&&!(e.flags&128))jx(),Yl(),e.flags|=98560,s=!1;else if(s=Th(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error($(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error($(317));s[Oi]=e}else Yl(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;In(e),s=!1}else ci!==null&&(J_(ci),ci=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ut.current&1?$t===0&&($t=3):n0())),e.updateQueue!==null&&(e.flags|=4),In(e),null);case 4:return Xl(),q_(t,e),t===null&&Yc(e.stateNode.containerInfo),In(e),null;case 10:return Fv(e.type._context),In(e),null;case 17:return or(e.type)&&Yd(),In(e),null;case 19:if(nt(ut),s=e.memoizedState,s===null)return In(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Uu(s,!1);else{if($t!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=np(t),o!==null){for(e.flags|=128,Uu(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ge(ut,ut.current&1|2),e.child}t=t.sibling}s.tail!==null&&kt()>Zl&&(e.flags|=128,r=!0,Uu(s,!1),e.lanes=4194304)}else{if(!r)if(t=np(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Uu(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!it)return In(e),null}else 2*kt()-s.renderingStartTime>Zl&&n!==1073741824&&(e.flags|=128,r=!0,Uu(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=kt(),e.sibling=null,n=ut.current,Ge(ut,r?n&1|2:n&1),e):(In(e),null);case 22:case 23:return t0(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?yr&1073741824&&(In(e),e.subtreeFlags&6&&(e.flags|=8192)):In(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function ZO(t,e){switch(Mv(e),e.tag){case 1:return or(e.type)&&Yd(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xl(),nt(sr),nt(On),qv(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $v(e),null;case 13:if(nt(ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error($(340));Yl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return nt(ut),null;case 4:return Xl(),null;case 10:return Fv(e.type._context),null;case 22:case 23:return t0(),null;case 24:return null;default:return null}}var xh=!1,An=!1,eD=typeof WeakSet=="function"?WeakSet:Set,Y=null;function El(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_t(t,e,r)}else n.current=null}function W_(t,e,n){try{n()}catch(r){_t(t,e,r)}}var vE=!1;function tD(t,e){if(A_=Wd,t=xx(),Ov(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,h=t,p=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)p=h,h=m;for(;;){if(h===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++f===r&&(l=o),(m=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(P_={focusedElem:t,selectionRange:n},Wd=!1,Y=e;Y!==null;)if(e=Y,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Y=t;else for(;Y!==null;){e=Y;try{var I=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var w=I.memoizedProps,b=I.memoizedState,E=e.stateNode,v=E.getSnapshotBeforeUpdate(e.elementType===e.type?w:li(e.type,w),b);E.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(A){_t(e,e.return,A)}if(t=e.sibling,t!==null){t.return=e.return,Y=t;break}Y=e.return}return I=vE,vE=!1,I}function _c(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&W_(e,n,s)}i=i.next}while(i!==r)}}function nm(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function H_(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Eb(t){var e=t.alternate;e!==null&&(t.alternate=null,Eb(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Oi],delete e[Xc],delete e[N_],delete e[VO],delete e[jO])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Tb(t){return t.tag===5||t.tag===3||t.tag===4}function wE(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Tb(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function G_(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Kd));else if(r!==4&&(t=t.child,t!==null))for(G_(t,e,n),t=t.sibling;t!==null;)G_(t,e,n),t=t.sibling}function K_(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(K_(t,e,n),t=t.sibling;t!==null;)K_(t,e,n),t=t.sibling}var ln=null,ui=!1;function Ls(t,e,n){for(n=n.child;n!==null;)Ib(t,e,n),n=n.sibling}function Ib(t,e,n){if(Ui&&typeof Ui.onCommitFiberUnmount=="function")try{Ui.onCommitFiberUnmount(Kp,n)}catch{}switch(n.tag){case 5:An||El(n,e);case 6:var r=ln,i=ui;ln=null,Ls(t,e,n),ln=r,ui=i,ln!==null&&(ui?(t=ln,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ln.removeChild(n.stateNode));break;case 18:ln!==null&&(ui?(t=ln,n=n.stateNode,t.nodeType===8?fg(t.parentNode,n):t.nodeType===1&&fg(t,n),Hc(t)):fg(ln,n.stateNode));break;case 4:r=ln,i=ui,ln=n.stateNode.containerInfo,ui=!0,Ls(t,e,n),ln=r,ui=i;break;case 0:case 11:case 14:case 15:if(!An&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&W_(n,e,o),i=i.next}while(i!==r)}Ls(t,e,n);break;case 1:if(!An&&(El(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){_t(n,e,a)}Ls(t,e,n);break;case 21:Ls(t,e,n);break;case 22:n.mode&1?(An=(r=An)||n.memoizedState!==null,Ls(t,e,n),An=r):Ls(t,e,n);break;default:Ls(t,e,n)}}function EE(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new eD),e.forEach(function(r){var i=cD.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function oi(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ln=a.stateNode,ui=!1;break e;case 3:ln=a.stateNode.containerInfo,ui=!0;break e;case 4:ln=a.stateNode.containerInfo,ui=!0;break e}a=a.return}if(ln===null)throw Error($(160));Ib(s,o,i),ln=null,ui=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){_t(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Sb(e,t),e=e.sibling}function Sb(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(oi(e,t),ki(t),r&4){try{_c(3,t,t.return),nm(3,t)}catch(w){_t(t,t.return,w)}try{_c(5,t,t.return)}catch(w){_t(t,t.return,w)}}break;case 1:oi(e,t),ki(t),r&512&&n!==null&&El(n,n.return);break;case 5:if(oi(e,t),ki(t),r&512&&n!==null&&El(n,n.return),t.flags&32){var i=t.stateNode;try{Bc(i,"")}catch(w){_t(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&HS(i,s),y_(a,o);var c=y_(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?XS(i,h):f==="dangerouslySetInnerHTML"?YS(i,h):f==="children"?Bc(i,h):wv(i,f,h,c)}switch(a){case"input":d_(i,s);break;case"textarea":GS(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Cl(i,!!s.multiple,m,!1):p!==!!s.multiple&&(s.defaultValue!=null?Cl(i,!!s.multiple,s.defaultValue,!0):Cl(i,!!s.multiple,s.multiple?[]:"",!1))}i[Xc]=s}catch(w){_t(t,t.return,w)}}break;case 6:if(oi(e,t),ki(t),r&4){if(t.stateNode===null)throw Error($(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){_t(t,t.return,w)}}break;case 3:if(oi(e,t),ki(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hc(e.containerInfo)}catch(w){_t(t,t.return,w)}break;case 4:oi(e,t),ki(t);break;case 13:oi(e,t),ki(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Zv=kt())),r&4&&EE(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(An=(c=An)||f,oi(e,t),An=c):oi(e,t),ki(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Y=t,f=t.child;f!==null;){for(h=Y=f;Y!==null;){switch(p=Y,m=p.child,p.tag){case 0:case 11:case 14:case 15:_c(4,p,p.return);break;case 1:El(p,p.return);var I=p.stateNode;if(typeof I.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,I.props=e.memoizedProps,I.state=e.memoizedState,I.componentWillUnmount()}catch(w){_t(r,n,w)}}break;case 5:El(p,p.return);break;case 22:if(p.memoizedState!==null){IE(h);continue}}m!==null?(m.return=p,Y=m):IE(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{i=h.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=QS("display",o))}catch(w){_t(t,t.return,w)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(w){_t(t,t.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:oi(e,t),ki(t),r&4&&EE(t);break;case 21:break;default:oi(e,t),ki(t)}}function ki(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Tb(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Bc(i,""),r.flags&=-33);var s=wE(t);K_(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=wE(t);G_(t,a,o);break;default:throw Error($(161))}}catch(l){_t(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function nD(t,e,n){Y=t,xb(t)}function xb(t,e,n){for(var r=(t.mode&1)!==0;Y!==null;){var i=Y,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||xh;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||An;a=xh;var c=An;if(xh=o,(An=l)&&!c)for(Y=i;Y!==null;)o=Y,l=o.child,o.tag===22&&o.memoizedState!==null?SE(i):l!==null?(l.return=o,Y=l):SE(i);for(;s!==null;)Y=s,xb(s),s=s.sibling;Y=i,xh=a,An=c}TE(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Y=s):TE(t)}}function TE(t){for(;Y!==null;){var e=Y;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:An||nm(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!An)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:li(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&oE(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}oE(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Hc(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}An||e.flags&512&&H_(e)}catch(p){_t(e,e.return,p)}}if(e===t){Y=null;break}if(n=e.sibling,n!==null){n.return=e.return,Y=n;break}Y=e.return}}function IE(t){for(;Y!==null;){var e=Y;if(e===t){Y=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Y=n;break}Y=e.return}}function SE(t){for(;Y!==null;){var e=Y;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{nm(4,e)}catch(l){_t(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){_t(e,i,l)}}var s=e.return;try{H_(e)}catch(l){_t(e,s,l)}break;case 5:var o=e.return;try{H_(e)}catch(l){_t(e,o,l)}}}catch(l){_t(e,e.return,l)}if(e===t){Y=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Y=a;break}Y=e.return}}var rD=Math.ceil,sp=As.ReactCurrentDispatcher,Xv=As.ReactCurrentOwner,Gr=As.ReactCurrentBatchConfig,Oe=0,tn=null,Lt=null,hn=0,yr=0,Tl=Do(0),$t=0,rf=null,Sa=0,rm=0,Jv=0,yc=null,rr=null,Zv=0,Zl=1/0,ts=null,op=!1,Y_=null,uo=null,bh=!1,Qs=null,ap=0,vc=0,Q_=null,_d=-1,yd=0;function Xn(){return Oe&6?kt():_d!==-1?_d:_d=kt()}function co(t){return t.mode&1?Oe&2&&hn!==0?hn&-hn:UO.transition!==null?(yd===0&&(yd=ux()),yd):(t=Fe,t!==0||(t=window.event,t=t===void 0?16:gx(t.type)),t):1}function mi(t,e,n,r){if(50<vc)throw vc=0,Q_=null,Error($(185));Nf(t,n,r),(!(Oe&2)||t!==tn)&&(t===tn&&(!(Oe&2)&&(rm|=n),$t===4&&$s(t,hn)),ar(t,r),n===1&&Oe===0&&!(e.mode&1)&&(Zl=kt()+500,Zp&&Mo()))}function ar(t,e){var n=t.callbackNode;UN(t,e);var r=qd(t,t===tn?hn:0);if(r===0)n!==null&&Ow(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ow(n),e===1)t.tag===0?FO(xE.bind(null,t)):Mx(xE.bind(null,t)),MO(function(){!(Oe&6)&&Mo()}),n=null;else{switch(cx(r)){case 1:n=xv;break;case 4:n=ax;break;case 16:n=$d;break;case 536870912:n=lx;break;default:n=$d}n=Ob(n,bb.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function bb(t,e){if(_d=-1,yd=0,Oe&6)throw Error($(327));var n=t.callbackNode;if(Ml()&&t.callbackNode!==n)return null;var r=qd(t,t===tn?hn:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=lp(t,r);else{e=r;var i=Oe;Oe|=2;var s=Ab();(tn!==t||hn!==e)&&(ts=null,Zl=kt()+500,ca(t,e));do try{oD();break}catch(a){kb(t,a)}while(!0);jv(),sp.current=s,Oe=i,Lt!==null?e=0:(tn=null,hn=0,e=$t)}if(e!==0){if(e===2&&(i=I_(t),i!==0&&(r=i,e=X_(t,i))),e===1)throw n=rf,ca(t,0),$s(t,r),ar(t,kt()),n;if(e===6)$s(t,r);else{if(i=t.current.alternate,!(r&30)&&!iD(i)&&(e=lp(t,r),e===2&&(s=I_(t),s!==0&&(r=s,e=X_(t,s))),e===1))throw n=rf,ca(t,0),$s(t,r),ar(t,kt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error($(345));case 2:Yo(t,rr,ts);break;case 3:if($s(t,r),(r&130023424)===r&&(e=Zv+500-kt(),10<e)){if(qd(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Xn(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=R_(Yo.bind(null,t,rr,ts),e);break}Yo(t,rr,ts);break;case 4:if($s(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-pi(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=kt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rD(r/1960))-r,10<r){t.timeoutHandle=R_(Yo.bind(null,t,rr,ts),r);break}Yo(t,rr,ts);break;case 5:Yo(t,rr,ts);break;default:throw Error($(329))}}}return ar(t,kt()),t.callbackNode===n?bb.bind(null,t):null}function X_(t,e){var n=yc;return t.current.memoizedState.isDehydrated&&(ca(t,e).flags|=256),t=lp(t,e),t!==2&&(e=rr,rr=n,e!==null&&J_(e)),t}function J_(t){rr===null?rr=t:rr.push.apply(rr,t)}function iD(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!gi(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $s(t,e){for(e&=~Jv,e&=~rm,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-pi(e),r=1<<n;t[n]=-1,e&=~r}}function xE(t){if(Oe&6)throw Error($(327));Ml();var e=qd(t,0);if(!(e&1))return ar(t,kt()),null;var n=lp(t,e);if(t.tag!==0&&n===2){var r=I_(t);r!==0&&(e=r,n=X_(t,r))}if(n===1)throw n=rf,ca(t,0),$s(t,e),ar(t,kt()),n;if(n===6)throw Error($(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Yo(t,rr,ts),ar(t,kt()),null}function e0(t,e){var n=Oe;Oe|=1;try{return t(e)}finally{Oe=n,Oe===0&&(Zl=kt()+500,Zp&&Mo())}}function xa(t){Qs!==null&&Qs.tag===0&&!(Oe&6)&&Ml();var e=Oe;Oe|=1;var n=Gr.transition,r=Fe;try{if(Gr.transition=null,Fe=1,t)return t()}finally{Fe=r,Gr.transition=n,Oe=e,!(Oe&6)&&Mo()}}function t0(){yr=Tl.current,nt(Tl)}function ca(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,DO(n)),Lt!==null)for(n=Lt.return;n!==null;){var r=n;switch(Mv(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yd();break;case 3:Xl(),nt(sr),nt(On),qv();break;case 5:$v(r);break;case 4:Xl();break;case 13:nt(ut);break;case 19:nt(ut);break;case 10:Fv(r.type._context);break;case 22:case 23:t0()}n=n.return}if(tn=t,Lt=t=fo(t.current,null),hn=yr=e,$t=0,rf=null,Jv=rm=Sa=0,rr=yc=null,ta!==null){for(e=0;e<ta.length;e++)if(n=ta[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ta=null}return t}function kb(t,e){do{var n=Lt;try{if(jv(),pd.current=ip,rp){for(var r=ht.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}rp=!1}if(Ia=0,Jt=zt=ht=null,gc=!1,ef=0,Xv.current=null,n===null||n.return===null){$t=1,rf=e,Lt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=hn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=hE(o);if(m!==null){m.flags&=-257,dE(m,o,a,s,e),m.mode&1&&fE(s,c,e),e=m,l=c;var I=e.updateQueue;if(I===null){var w=new Set;w.add(l),e.updateQueue=w}else I.add(l);break e}else{if(!(e&1)){fE(s,c,e),n0();break e}l=Error($(426))}}else if(it&&a.mode&1){var b=hE(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),dE(b,o,a,s,e),Lv(Jl(l,a));break e}}s=l=Jl(l,a),$t!==4&&($t=2),yc===null?yc=[s]:yc.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=cb(s,l,e);sE(s,E);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(uo===null||!uo.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var A=fb(s,a,e);sE(s,A);break e}}s=s.return}while(s!==null)}Cb(n)}catch(O){e=O,Lt===n&&n!==null&&(Lt=n=n.return);continue}break}while(!0)}function Ab(){var t=sp.current;return sp.current=ip,t===null?ip:t}function n0(){($t===0||$t===3||$t===2)&&($t=4),tn===null||!(Sa&268435455)&&!(rm&268435455)||$s(tn,hn)}function lp(t,e){var n=Oe;Oe|=2;var r=Ab();(tn!==t||hn!==e)&&(ts=null,ca(t,e));do try{sD();break}catch(i){kb(t,i)}while(!0);if(jv(),Oe=n,sp.current=r,Lt!==null)throw Error($(261));return tn=null,hn=0,$t}function sD(){for(;Lt!==null;)Pb(Lt)}function oD(){for(;Lt!==null&&!RN();)Pb(Lt)}function Pb(t){var e=Nb(t.alternate,t,yr);t.memoizedProps=t.pendingProps,e===null?Cb(t):Lt=e,Xv.current=null}function Cb(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ZO(n,e),n!==null){n.flags&=32767,Lt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$t=6,Lt=null;return}}else if(n=JO(n,e,yr),n!==null){Lt=n;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=t}while(e!==null);$t===0&&($t=5)}function Yo(t,e,n){var r=Fe,i=Gr.transition;try{Gr.transition=null,Fe=1,aD(t,e,n,r)}finally{Gr.transition=i,Fe=r}return null}function aD(t,e,n,r){do Ml();while(Qs!==null);if(Oe&6)throw Error($(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error($(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(zN(t,s),t===tn&&(Lt=tn=null,hn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bh||(bh=!0,Ob($d,function(){return Ml(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Gr.transition,Gr.transition=null;var o=Fe;Fe=1;var a=Oe;Oe|=4,Xv.current=null,tD(t,n),Sb(n,t),kO(P_),Wd=!!A_,P_=A_=null,t.current=n,nD(n),NN(),Oe=a,Fe=o,Gr.transition=s}else t.current=n;if(bh&&(bh=!1,Qs=t,ap=i),s=t.pendingLanes,s===0&&(uo=null),MN(n.stateNode),ar(t,kt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(op)throw op=!1,t=Y_,Y_=null,t;return ap&1&&t.tag!==0&&Ml(),s=t.pendingLanes,s&1?t===Q_?vc++:(vc=0,Q_=t):vc=0,Mo(),null}function Ml(){if(Qs!==null){var t=cx(ap),e=Gr.transition,n=Fe;try{if(Gr.transition=null,Fe=16>t?16:t,Qs===null)var r=!1;else{if(t=Qs,Qs=null,ap=0,Oe&6)throw Error($(331));var i=Oe;for(Oe|=4,Y=t.current;Y!==null;){var s=Y,o=s.child;if(Y.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Y=c;Y!==null;){var f=Y;switch(f.tag){case 0:case 11:case 15:_c(8,f,s)}var h=f.child;if(h!==null)h.return=f,Y=h;else for(;Y!==null;){f=Y;var p=f.sibling,m=f.return;if(Eb(f),f===c){Y=null;break}if(p!==null){p.return=m,Y=p;break}Y=m}}}var I=s.alternate;if(I!==null){var w=I.child;if(w!==null){I.child=null;do{var b=w.sibling;w.sibling=null,w=b}while(w!==null)}}Y=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Y=o;else e:for(;Y!==null;){if(s=Y,s.flags&2048)switch(s.tag){case 0:case 11:case 15:_c(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,Y=E;break e}Y=s.return}}var v=t.current;for(Y=v;Y!==null;){o=Y;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Y=x;else e:for(o=v;Y!==null;){if(a=Y,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:nm(9,a)}}catch(O){_t(a,a.return,O)}if(a===o){Y=null;break e}var A=a.sibling;if(A!==null){A.return=a.return,Y=A;break e}Y=a.return}}if(Oe=i,Mo(),Ui&&typeof Ui.onPostCommitFiberRoot=="function")try{Ui.onPostCommitFiberRoot(Kp,t)}catch{}r=!0}return r}finally{Fe=n,Gr.transition=e}}return!1}function bE(t,e,n){e=Jl(n,e),e=cb(t,e,1),t=lo(t,e,1),e=Xn(),t!==null&&(Nf(t,1,e),ar(t,e))}function _t(t,e,n){if(t.tag===3)bE(t,t,n);else for(;e!==null;){if(e.tag===3){bE(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(uo===null||!uo.has(r))){t=Jl(n,t),t=fb(e,t,1),e=lo(e,t,1),t=Xn(),e!==null&&(Nf(e,1,t),ar(e,t));break}}e=e.return}}function lD(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Xn(),t.pingedLanes|=t.suspendedLanes&n,tn===t&&(hn&n)===n&&($t===4||$t===3&&(hn&130023424)===hn&&500>kt()-Zv?ca(t,0):Jv|=n),ar(t,e)}function Rb(t,e){e===0&&(t.mode&1?(e=gh,gh<<=1,!(gh&130023424)&&(gh=4194304)):e=1);var n=Xn();t=ys(t,e),t!==null&&(Nf(t,e,n),ar(t,n))}function uD(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Rb(t,n)}function cD(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(e),Rb(t,n)}var Nb;Nb=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||sr.current)ir=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ir=!1,XO(t,e,n);ir=!!(t.flags&131072)}else ir=!1,it&&e.flags&1048576&&Lx(e,Jd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;gd(t,e),t=e.pendingProps;var i=Kl(e,On.current);Dl(e,n),i=Hv(null,e,r,t,i,n);var s=Gv();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,or(r)?(s=!0,Qd(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zv(e),i.updater=tm,e.stateNode=i,i._reactInternals=e,j_(e,r,t,n),e=z_(null,e,r,!0,s,n)):(e.tag=0,it&&s&&Dv(e),Wn(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(gd(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=hD(r),t=li(r,t),i){case 0:e=U_(null,e,r,t,n);break e;case 1:e=gE(null,e,r,t,n);break e;case 11:e=pE(null,e,r,t,n);break e;case 14:e=mE(null,e,r,li(r.type,t),n);break e}throw Error($(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:li(r,i),U_(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:li(r,i),gE(t,e,r,i,n);case 3:e:{if(mb(e),t===null)throw Error($(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Bx(t,e),tp(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Jl(Error($(423)),e),e=_E(t,e,r,n,i);break e}else if(r!==i){i=Jl(Error($(424)),e),e=_E(t,e,r,n,i);break e}else for(Ir=ao(e.stateNode.containerInfo.firstChild),br=e,it=!0,ci=null,n=Ux(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yl(),r===i){e=vs(t,e,n);break e}Wn(t,e,r,n)}e=e.child}return e;case 5:return $x(e),t===null&&M_(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,C_(r,i)?o=null:s!==null&&C_(r,s)&&(e.flags|=32),pb(t,e),Wn(t,e,o,n),e.child;case 6:return t===null&&M_(e),null;case 13:return gb(t,e,n);case 4:return Bv(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ql(e,null,r,n):Wn(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:li(r,i),pE(t,e,r,i,n);case 7:return Wn(t,e,e.pendingProps,n),e.child;case 8:return Wn(t,e,e.pendingProps.children,n),e.child;case 12:return Wn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ge(Zd,r._currentValue),r._currentValue=o,s!==null)if(gi(s.value,o)){if(s.children===i.children&&!sr.current){e=vs(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=hs(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),L_(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error($(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),L_(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Wn(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Dl(e,n),i=Xr(i),r=r(i),e.flags|=1,Wn(t,e,r,n),e.child;case 14:return r=e.type,i=li(r,e.pendingProps),i=li(r.type,i),mE(t,e,r,i,n);case 15:return hb(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:li(r,i),gd(t,e),e.tag=1,or(r)?(t=!0,Qd(e)):t=!1,Dl(e,n),ub(e,r,i),j_(e,r,i,n),z_(null,e,r,!0,t,n);case 19:return _b(t,e,n);case 22:return db(t,e,n)}throw Error($(156,e.tag))};function Ob(t,e){return ox(t,e)}function fD(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qr(t,e,n,r){return new fD(t,e,n,r)}function r0(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hD(t){if(typeof t=="function")return r0(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Tv)return 11;if(t===Iv)return 14}return 2}function fo(t,e){var n=t.alternate;return n===null?(n=qr(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function vd(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")r0(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case hl:return fa(n.children,i,s,e);case Ev:o=8,i|=8;break;case l_:return t=qr(12,n,e,i|2),t.elementType=l_,t.lanes=s,t;case u_:return t=qr(13,n,e,i),t.elementType=u_,t.lanes=s,t;case c_:return t=qr(19,n,e,i),t.elementType=c_,t.lanes=s,t;case $S:return im(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case zS:o=10;break e;case BS:o=9;break e;case Tv:o=11;break e;case Iv:o=14;break e;case Us:o=16,r=null;break e}throw Error($(130,t==null?t:typeof t,""))}return e=qr(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function fa(t,e,n,r){return t=qr(7,t,r,e),t.lanes=n,t}function im(t,e,n,r){return t=qr(22,t,r,e),t.elementType=$S,t.lanes=n,t.stateNode={isHidden:!1},t}function vg(t,e,n){return t=qr(6,t,null,e),t.lanes=n,t}function wg(t,e,n){return e=qr(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function dD(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=eg(0),this.expirationTimes=eg(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eg(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function i0(t,e,n,r,i,s,o,a,l){return t=new dD(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=qr(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zv(s),t}function pD(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fl,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Db(t){if(!t)return To;t=t._reactInternals;e:{if(qa(t)!==t||t.tag!==1)throw Error($(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(or(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error($(171))}if(t.tag===1){var n=t.type;if(or(n))return Dx(t,n,e)}return e}function Mb(t,e,n,r,i,s,o,a,l){return t=i0(n,r,!0,t,i,s,o,a,l),t.context=Db(null),n=t.current,r=Xn(),i=co(n),s=hs(r,i),s.callback=e??null,lo(n,s,i),t.current.lanes=i,Nf(t,i,r),ar(t,r),t}function sm(t,e,n,r){var i=e.current,s=Xn(),o=co(i);return n=Db(n),e.context===null?e.context=n:e.pendingContext=n,e=hs(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=lo(i,e,o),t!==null&&(mi(t,i,o,s),dd(t,i,o)),o}function up(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function kE(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function s0(t,e){kE(t,e),(t=t.alternate)&&kE(t,e)}function mD(){return null}var Lb=typeof reportError=="function"?reportError:function(t){console.error(t)};function o0(t){this._internalRoot=t}om.prototype.render=o0.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error($(409));sm(t,e,null,null)};om.prototype.unmount=o0.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;xa(function(){sm(null,t,null,null)}),e[_s]=null}};function om(t){this._internalRoot=t}om.prototype.unstable_scheduleHydration=function(t){if(t){var e=dx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Bs.length&&e!==0&&e<Bs[n].priority;n++);Bs.splice(n,0,t),n===0&&mx(t)}};function a0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function am(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function AE(){}function gD(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=up(o);s.call(c)}}var o=Mb(e,r,t,0,null,!1,!1,"",AE);return t._reactRootContainer=o,t[_s]=o.current,Yc(t.nodeType===8?t.parentNode:t),xa(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=up(l);a.call(c)}}var l=i0(t,0,!1,null,null,!1,!1,"",AE);return t._reactRootContainer=l,t[_s]=l.current,Yc(t.nodeType===8?t.parentNode:t),xa(function(){sm(e,l,n,r)}),l}function lm(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=up(o);a.call(l)}}sm(e,o,t,i)}else o=gD(n,e,t,i,r);return up(o)}fx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Qu(e.pendingLanes);n!==0&&(bv(e,n|1),ar(e,kt()),!(Oe&6)&&(Zl=kt()+500,Mo()))}break;case 13:xa(function(){var r=ys(t,1);if(r!==null){var i=Xn();mi(r,t,1,i)}}),s0(t,1)}};kv=function(t){if(t.tag===13){var e=ys(t,134217728);if(e!==null){var n=Xn();mi(e,t,134217728,n)}s0(t,134217728)}};hx=function(t){if(t.tag===13){var e=co(t),n=ys(t,e);if(n!==null){var r=Xn();mi(n,t,e,r)}s0(t,e)}};dx=function(){return Fe};px=function(t,e){var n=Fe;try{return Fe=t,e()}finally{Fe=n}};w_=function(t,e,n){switch(e){case"input":if(d_(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Jp(r);if(!i)throw Error($(90));WS(r),d_(r,i)}}}break;case"textarea":GS(t,n);break;case"select":e=n.value,e!=null&&Cl(t,!!n.multiple,e,!1)}};ex=e0;tx=xa;var _D={usingClientEntryPoint:!1,Events:[Df,gl,Jp,JS,ZS,e0]},zu={findFiberByHostInstance:ea,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yD={bundleType:zu.bundleType,version:zu.version,rendererPackageName:zu.rendererPackageName,rendererConfig:zu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:As.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ix(t),t===null?null:t.stateNode},findFiberByHostInstance:zu.findFiberByHostInstance||mD,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kh.isDisabled&&kh.supportsFiber)try{Kp=kh.inject(yD),Ui=kh}catch{}}Rr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_D;Rr.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!a0(e))throw Error($(200));return pD(t,e,null,n)};Rr.createRoot=function(t,e){if(!a0(t))throw Error($(299));var n=!1,r="",i=Lb;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=i0(t,1,!1,null,null,n,!1,r,i),t[_s]=e.current,Yc(t.nodeType===8?t.parentNode:t),new o0(e)};Rr.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error($(188)):(t=Object.keys(t).join(","),Error($(268,t)));return t=ix(e),t=t===null?null:t.stateNode,t};Rr.flushSync=function(t){return xa(t)};Rr.hydrate=function(t,e,n){if(!am(e))throw Error($(200));return lm(null,t,e,!0,n)};Rr.hydrateRoot=function(t,e,n){if(!a0(t))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Lb;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Mb(e,null,t,1,n??null,i,!1,s,o),t[_s]=e.current,Yc(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new om(e)};Rr.render=function(t,e,n){if(!am(e))throw Error($(200));return lm(null,t,e,!1,n)};Rr.unmountComponentAtNode=function(t){if(!am(t))throw Error($(40));return t._reactRootContainer?(xa(function(){lm(null,null,t,!1,function(){t._reactRootContainer=null,t[_s]=null})}),!0):!1};Rr.unstable_batchedUpdates=e0;Rr.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!am(n))throw Error($(200));if(t==null||t._reactInternals===void 0)throw Error($(38));return lm(t,e,n,!1,r)};Rr.version="18.3.1-next-f1338f8080-20240426";function Vb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vb)}catch(t){console.error(t)}}Vb(),VS.exports=Rr;var vD=VS.exports,PE=vD;o_.createRoot=PE.createRoot,o_.hydrateRoot=PE.hydrateRoot;/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sf(){return sf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},sf.apply(this,arguments)}var Xs;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Xs||(Xs={}));const CE="popstate";function wD(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Z_("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:cp(i)}return TD(e,n,null,t)}function jt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function jb(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ED(){return Math.random().toString(36).substr(2,8)}function RE(t,e){return{usr:t.state,key:t.key,idx:e}}function Z_(t,e,n,r){return n===void 0&&(n=null),sf({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?yu(e):e,{state:n,key:e&&e.key||r||ED()})}function cp(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function yu(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function TD(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Xs.Pop,l=null,c=f();c==null&&(c=0,o.replaceState(sf({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function h(){a=Xs.Pop;let b=f(),E=b==null?null:b-c;c=b,l&&l({action:a,location:w.location,delta:E})}function p(b,E){a=Xs.Push;let v=Z_(w.location,b,E);c=f()+1;let x=RE(v,c),A=w.createHref(v);try{o.pushState(x,"",A)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;i.location.assign(A)}s&&l&&l({action:a,location:w.location,delta:1})}function m(b,E){a=Xs.Replace;let v=Z_(w.location,b,E);c=f();let x=RE(v,c),A=w.createHref(v);o.replaceState(x,"",A),s&&l&&l({action:a,location:w.location,delta:0})}function I(b){let E=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof b=="string"?b:cp(b);return v=v.replace(/ $/,"%20"),jt(E,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,E)}let w={get action(){return a},get location(){return t(i,o)},listen(b){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(CE,h),l=b,()=>{i.removeEventListener(CE,h),l=null}},createHref(b){return e(i,b)},createURL:I,encodeLocation(b){let E=I(b);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:p,replace:m,go(b){return o.go(b)}};return w}var NE;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(NE||(NE={}));function ID(t,e,n){return n===void 0&&(n="/"),SD(t,e,n,!1)}function SD(t,e,n,r){let i=typeof e=="string"?yu(e):e,s=l0(i.pathname||"/",n);if(s==null)return null;let o=Fb(t);xD(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=LD(s);a=DD(o[l],c,r)}return a}function Fb(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(jt(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=ho([r,l.relativePath]),f=n.concat(l);s.children&&s.children.length>0&&(jt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Fb(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:ND(c,s.index),routesMeta:f})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Ub(s.path))i(s,o,l)}),e}function Ub(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Ub(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function xD(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:OD(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const bD=/^:[\w-]+$/,kD=3,AD=2,PD=1,CD=10,RD=-2,OE=t=>t==="*";function ND(t,e){let n=t.split("/"),r=n.length;return n.some(OE)&&(r+=RD),e&&(r+=AD),n.filter(i=>!OE(i)).reduce((i,s)=>i+(bD.test(s)?kD:s===""?PD:CD),r)}function OD(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function DD(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",h=DE({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},f),p=l.route;if(!h&&c&&n&&!r[r.length-1].route.index&&(h=DE({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},f)),!h)return null;Object.assign(i,h.params),o.push({params:i,pathname:ho([s,h.pathname]),pathnameBase:UD(ho([s,h.pathnameBase])),route:p}),h.pathnameBase!=="/"&&(s=ho([s,h.pathnameBase]))}return o}function DE(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=MD(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,f,h)=>{let{paramName:p,isOptional:m}=f;if(p==="*"){let w=a[h]||"";o=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const I=a[h];return m&&!I?c[p]=void 0:c[p]=(I||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function MD(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),jb(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function LD(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return jb(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function l0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function VD(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?yu(t):t;return{pathname:n?n.startsWith("/")?n:jD(n,e):e,search:zD(r),hash:BD(i)}}function jD(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Eg(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function FD(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function zb(t,e){let n=FD(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Bb(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=yu(t):(i=sf({},t),jt(!i.pathname||!i.pathname.includes("?"),Eg("?","pathname","search",i)),jt(!i.pathname||!i.pathname.includes("#"),Eg("#","pathname","hash",i)),jt(!i.search||!i.search.includes("#"),Eg("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let h=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),h-=1;i.pathname=p.join("/")}a=h>=0?e[h]:"/"}let l=VD(i,a),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||f)&&(l.pathname+="/"),l}const ho=t=>t.join("/").replace(/\/\/+/g,"/"),UD=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),zD=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,BD=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function $D(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const $b=["post","put","patch","delete"];new Set($b);const qD=["get",...$b];new Set(qD);/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function of(){return of=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},of.apply(this,arguments)}const u0=U.createContext(null),WD=U.createContext(null),Wa=U.createContext(null),um=U.createContext(null),Lo=U.createContext({outlet:null,matches:[],isDataRoute:!1}),qb=U.createContext(null);function HD(t,e){let{relative:n}=e===void 0?{}:e;Lf()||jt(!1);let{basename:r,navigator:i}=U.useContext(Wa),{hash:s,pathname:o,search:a}=Gb(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:ho([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Lf(){return U.useContext(um)!=null}function cm(){return Lf()||jt(!1),U.useContext(um).location}function Wb(t){U.useContext(Wa).static||U.useLayoutEffect(t)}function Hb(){let{isDataRoute:t}=U.useContext(Lo);return t?oM():GD()}function GD(){Lf()||jt(!1);let t=U.useContext(u0),{basename:e,future:n,navigator:r}=U.useContext(Wa),{matches:i}=U.useContext(Lo),{pathname:s}=cm(),o=JSON.stringify(zb(i,n.v7_relativeSplatPath)),a=U.useRef(!1);return Wb(()=>{a.current=!0}),U.useCallback(function(c,f){if(f===void 0&&(f={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let h=Bb(c,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:ho([e,h.pathname])),(f.replace?r.replace:r.push)(h,f.state,f)},[e,r,o,s,t])}function KD(){let{matches:t}=U.useContext(Lo),e=t[t.length-1];return e?e.params:{}}function Gb(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=U.useContext(Wa),{matches:i}=U.useContext(Lo),{pathname:s}=cm(),o=JSON.stringify(zb(i,r.v7_relativeSplatPath));return U.useMemo(()=>Bb(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function YD(t,e){return QD(t,e)}function QD(t,e,n,r){Lf()||jt(!1);let{navigator:i}=U.useContext(Wa),{matches:s}=U.useContext(Lo),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=cm(),f;if(e){var h;let b=typeof e=="string"?yu(e):e;l==="/"||(h=b.pathname)!=null&&h.startsWith(l)||jt(!1),f=b}else f=c;let p=f.pathname||"/",m=p;if(l!=="/"){let b=l.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(b.length).join("/")}let I=ID(t,{pathname:m}),w=tM(I&&I.map(b=>Object.assign({},b,{params:Object.assign({},a,b.params),pathname:ho([l,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?l:ho([l,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),s,n,r);return e&&w?U.createElement(um.Provider,{value:{location:of({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Xs.Pop}},w):w}function XD(){let t=sM(),e=$D(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),n?U.createElement("pre",{style:i},n):null,null)}const JD=U.createElement(XD,null);class ZD extends U.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?U.createElement(Lo.Provider,{value:this.props.routeContext},U.createElement(qb.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function eM(t){let{routeContext:e,match:n,children:r}=t,i=U.useContext(u0);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),U.createElement(Lo.Provider,{value:e},r)}function tM(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let f=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);f>=0||jt(!1),o=o.slice(0,Math.min(o.length,f+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let h=o[f];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=f),h.route.id){let{loaderData:p,errors:m}=n,I=h.route.loader&&p[h.route.id]===void 0&&(!m||m[h.route.id]===void 0);if(h.route.lazy||I){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,h,p)=>{let m,I=!1,w=null,b=null;n&&(m=a&&h.route.id?a[h.route.id]:void 0,w=h.route.errorElement||JD,l&&(c<0&&p===0?(I=!0,b=null):c===p&&(I=!0,b=h.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,p+1)),v=()=>{let x;return m?x=w:I?x=b:h.route.Component?x=U.createElement(h.route.Component,null):h.route.element?x=h.route.element:x=f,U.createElement(eM,{match:h,routeContext:{outlet:f,matches:E,isDataRoute:n!=null},children:x})};return n&&(h.route.ErrorBoundary||h.route.errorElement||p===0)?U.createElement(ZD,{location:n.location,revalidation:n.revalidation,component:w,error:m,children:v(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):v()},null)}var Kb=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Kb||{}),fp=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(fp||{});function nM(t){let e=U.useContext(u0);return e||jt(!1),e}function rM(t){let e=U.useContext(WD);return e||jt(!1),e}function iM(t){let e=U.useContext(Lo);return e||jt(!1),e}function Yb(t){let e=iM(),n=e.matches[e.matches.length-1];return n.route.id||jt(!1),n.route.id}function sM(){var t;let e=U.useContext(qb),n=rM(fp.UseRouteError),r=Yb(fp.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function oM(){let{router:t}=nM(Kb.UseNavigateStable),e=Yb(fp.UseNavigateStable),n=U.useRef(!1);return Wb(()=>{n.current=!0}),U.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,of({fromRouteId:e},s)))},[t,e])}function Ai(t){jt(!1)}function aM(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Xs.Pop,navigator:s,static:o=!1,future:a}=t;Lf()&&jt(!1);let l=e.replace(/^\/*/,"/"),c=U.useMemo(()=>({basename:l,navigator:s,static:o,future:of({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=yu(r));let{pathname:f="/",search:h="",hash:p="",state:m=null,key:I="default"}=r,w=U.useMemo(()=>{let b=l0(f,l);return b==null?null:{location:{pathname:b,search:h,hash:p,state:m,key:I},navigationType:i}},[l,f,h,p,m,I,i]);return w==null?null:U.createElement(Wa.Provider,{value:c},U.createElement(um.Provider,{children:n,value:w}))}function lM(t){let{children:e,location:n}=t;return YD(ey(e),n)}new Promise(()=>{});function ey(t,e){e===void 0&&(e=[]);let n=[];return U.Children.forEach(t,(r,i)=>{if(!U.isValidElement(r))return;let s=[...e,i];if(r.type===U.Fragment){n.push.apply(n,ey(r.props.children,s));return}r.type!==Ai&&jt(!1),!r.props.index||!r.props.children||jt(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ey(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ty(){return ty=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ty.apply(this,arguments)}function uM(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function cM(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function fM(t,e){return t.button===0&&(!e||e==="_self")&&!cM(t)}const hM=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],dM="6";try{window.__reactRouterVersion=dM}catch{}const pM="startTransition",ME=lN[pM];function mM(t){let{basename:e,children:n,future:r,window:i}=t,s=U.useRef();s.current==null&&(s.current=wD({window:i,v5Compat:!0}));let o=s.current,[a,l]=U.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},f=U.useCallback(h=>{c&&ME?ME(()=>l(h)):l(h)},[l,c]);return U.useLayoutEffect(()=>o.listen(f),[o,f]),U.createElement(aM,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const gM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_M=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yM=U.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:f,unstable_viewTransition:h}=e,p=uM(e,hM),{basename:m}=U.useContext(Wa),I,w=!1;if(typeof c=="string"&&_M.test(c)&&(I=c,gM))try{let x=new URL(window.location.href),A=c.startsWith("//")?new URL(x.protocol+c):new URL(c),O=l0(A.pathname,m);A.origin===x.origin&&O!=null?c=O+A.search+A.hash:w=!0}catch{}let b=HD(c,{relative:i}),E=vM(c,{replace:o,state:a,target:l,preventScrollReset:f,relative:i,unstable_viewTransition:h});function v(x){r&&r(x),x.defaultPrevented||E(x)}return U.createElement("a",ty({},p,{href:I||b,onClick:w||s?r:v,ref:n,target:l}))});var LE;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(LE||(LE={}));var VE;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(VE||(VE={}));function vM(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=Hb(),c=cm(),f=Gb(t,{relative:o});return U.useCallback(h=>{if(fM(h,n)){h.preventDefault();let p=r!==void 0?r:cp(c)===cp(f);l(t,{replace:p,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[c,l,f,r,i,n,t,s,o,a])}const ba=""+new URL("logo-woC3euWd.png",import.meta.url).href;var jE={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},wM=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Xb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,f=s>>2,h=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(p=64)),r.push(n[f],n[h],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qb(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wM(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new EM;const p=s<<2|a>>4;if(r.push(p),c!==64){const m=a<<4&240|c>>2;if(r.push(m),h!==64){const I=c<<6&192|h;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class EM extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const TM=function(t){const e=Qb(t);return Xb.encodeByteArray(e,!0)},hp=function(t){return TM(t).replace(/\./g,"")},Jb=function(t){try{return Xb.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IM(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SM=()=>IM().__FIREBASE_DEFAULTS__,xM=()=>{if(typeof process>"u"||typeof jE>"u")return;const t=jE.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bM=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Jb(t[1]);return e&&JSON.parse(e)},fm=()=>{try{return SM()||xM()||bM()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Zb=t=>{var e,n;return(n=(e=fm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ek=t=>{const e=Zb(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},tk=()=>{var t;return(t=fm())===null||t===void 0?void 0:t.config},nk=t=>{var e;return(e=fm())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kM{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[hp(JSON.stringify(n)),hp(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function AM(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mn())}function PM(){var t;const e=(t=fm())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ik(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function CM(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function RM(){const t=mn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function NM(){return!PM()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sk(){try{return typeof indexedDB=="object"}catch{return!1}}function ok(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function OM(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DM="FirebaseError";class ti extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=DM,Object.setPrototypeOf(this,ti.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ha.prototype.create)}}class Ha{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?MM(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ti(i,a,r)}}function MM(t,e){return t.replace(LM,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const LM=/\{\$([^}]+)}/g;function VM(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function af(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(FE(s)&&FE(o)){if(!af(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function FE(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ju(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Zu(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function jM(t,e){const n=new FM(t,e);return n.subscribe.bind(n)}class FM{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");UM(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Tg),i.error===void 0&&(i.error=Tg),i.complete===void 0&&(i.complete=Tg);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UM(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Tg(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zM=1e3,BM=2,$M=4*60*60*1e3,qM=.5;function UE(t,e=zM,n=BM){const r=e*Math.pow(n,t),i=Math.round(qM*r*(Math.random()-.5)*2);return Math.min($M,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t){return t&&t._delegate?t._delegate:t}class Zr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new kM;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(GM(e))try{this.getOrInitializeService({instanceIdentifier:Qo})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Qo){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qo){return this.instances.has(e)}getOptions(e=Qo){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:HM(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qo){return this.component?this.component.multipleInstances?e:Qo:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function HM(t){return t===Qo?void 0:t}function GM(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KM{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new WM(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Pe||(Pe={}));const YM={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},QM=Pe.INFO,XM={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},JM=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=XM[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hm{constructor(e){this.name=e,this._logLevel=QM,this._logHandler=JM,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?YM[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const ZM=(t,e)=>e.some(n=>t instanceof n);let zE,BE;function eL(){return zE||(zE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tL(){return BE||(BE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ak=new WeakMap,ny=new WeakMap,lk=new WeakMap,Ig=new WeakMap,c0=new WeakMap;function nL(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(po(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ak.set(n,t)}).catch(()=>{}),c0.set(e,t),e}function rL(t){if(ny.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ny.set(t,e)}let ry={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ny.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lk.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return po(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function iL(t){ry=t(ry)}function sL(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Sg(this),e,...n);return lk.set(r,e.sort?e.sort():[e]),po(r)}:tL().includes(t)?function(...e){return t.apply(Sg(this),e),po(ak.get(this))}:function(...e){return po(t.apply(Sg(this),e))}}function oL(t){return typeof t=="function"?sL(t):(t instanceof IDBTransaction&&rL(t),ZM(t,eL())?new Proxy(t,ry):t)}function po(t){if(t instanceof IDBRequest)return nL(t);if(Ig.has(t))return Ig.get(t);const e=oL(t);return e!==t&&(Ig.set(t,e),c0.set(e,t)),e}const Sg=t=>c0.get(t);function uk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=po(o);return r&&o.addEventListener("upgradeneeded",l=>{r(po(o.result),l.oldVersion,l.newVersion,po(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const aL=["get","getKey","getAll","getAllKeys","count"],lL=["put","add","delete","clear"],xg=new Map;function $E(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xg.get(e))return xg.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=lL.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||aL.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return xg.set(e,s),s}iL(t=>({...t,get:(e,n,r)=>$E(e,n)||t.get(e,n,r),has:(e,n)=>!!$E(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uL{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cL(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function cL(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const iy="@firebase/app",qE="0.10.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=new hm("@firebase/app"),fL="@firebase/app-compat",hL="@firebase/analytics-compat",dL="@firebase/analytics",pL="@firebase/app-check-compat",mL="@firebase/app-check",gL="@firebase/auth",_L="@firebase/auth-compat",yL="@firebase/database",vL="@firebase/database-compat",wL="@firebase/functions",EL="@firebase/functions-compat",TL="@firebase/installations",IL="@firebase/installations-compat",SL="@firebase/messaging",xL="@firebase/messaging-compat",bL="@firebase/performance",kL="@firebase/performance-compat",AL="@firebase/remote-config",PL="@firebase/remote-config-compat",CL="@firebase/storage",RL="@firebase/storage-compat",NL="@firebase/firestore",OL="@firebase/vertexai-preview",DL="@firebase/firestore-compat",ML="firebase",LL="10.12.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy="[DEFAULT]",VL={[iy]:"fire-core",[fL]:"fire-core-compat",[dL]:"fire-analytics",[hL]:"fire-analytics-compat",[mL]:"fire-app-check",[pL]:"fire-app-check-compat",[gL]:"fire-auth",[_L]:"fire-auth-compat",[yL]:"fire-rtdb",[vL]:"fire-rtdb-compat",[wL]:"fire-fn",[EL]:"fire-fn-compat",[TL]:"fire-iid",[IL]:"fire-iid-compat",[SL]:"fire-fcm",[xL]:"fire-fcm-compat",[bL]:"fire-perf",[kL]:"fire-perf-compat",[AL]:"fire-rc",[PL]:"fire-rc-compat",[CL]:"fire-gcs",[RL]:"fire-gcs-compat",[NL]:"fire-fst",[DL]:"fire-fst-compat",[OL]:"fire-vertex","fire-js":"fire-js",[ML]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp=new Map,jL=new Map,oy=new Map;function WE(t,e){try{t.container.addComponent(e)}catch(n){ka.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _i(t){const e=t.name;if(oy.has(e))return ka.debug(`There were multiple attempts to register component ${e}.`),!1;oy.set(e,t);for(const n of dp.values())WE(n,t);for(const n of jL.values())WE(n,t);return!0}function Vo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Mi(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FL={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mo=new Ha("app","Firebase",FL);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UL{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mo.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=LL;function ck(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:sy,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw mo.create("bad-app-name",{appName:String(i)});if(n||(n=tk()),!n)throw mo.create("no-options");const s=dp.get(i);if(s){if(af(n,s.options)&&af(r,s.config))return s;throw mo.create("duplicate-app",{appName:i})}const o=new KM(i);for(const l of oy.values())o.addComponent(l);const a=new UL(n,r,o);return dp.set(i,a),a}function dm(t=sy){const e=dp.get(t);if(!e&&t===sy&&tk())return ck();if(!e)throw mo.create("no-app",{appName:t});return e}function lr(t,e,n){var r;let i=(r=VL[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ka.warn(a.join(" "));return}_i(new Zr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zL="firebase-heartbeat-database",BL=1,lf="firebase-heartbeat-store";let bg=null;function fk(){return bg||(bg=uk(zL,BL,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(lf)}catch(n){console.warn(n)}}}}).catch(t=>{throw mo.create("idb-open",{originalErrorMessage:t.message})})),bg}async function $L(t){try{const n=(await fk()).transaction(lf),r=await n.objectStore(lf).get(hk(t));return await n.done,r}catch(e){if(e instanceof ti)ka.warn(e.message);else{const n=mo.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ka.warn(n.message)}}}async function HE(t,e){try{const r=(await fk()).transaction(lf,"readwrite");await r.objectStore(lf).put(e,hk(t)),await r.done}catch(n){if(n instanceof ti)ka.warn(n.message);else{const r=mo.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ka.warn(r.message)}}}function hk(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qL=1024,WL=30*24*60*60*1e3;class HL{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new KL(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=GE();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=WL}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=GE(),{heartbeatsToSend:r,unsentEntries:i}=GL(this._heartbeatsCache.heartbeats),s=hp(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function GE(){return new Date().toISOString().substring(0,10)}function GL(t,e=qL){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),KE(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),KE(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class KL{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sk()?ok().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $L(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return HE(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return HE(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function KE(t){return hp(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YL(t){_i(new Zr("platform-logger",e=>new uL(e),"PRIVATE")),_i(new Zr("heartbeat",e=>new HL(e),"PRIVATE")),lr(iy,qE,t),lr(iy,qE,"esm2017"),lr("fire-js","")}YL("");var QL="firebase",XL="10.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lr(QL,XL,"app");/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const JL={};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Ah(t){return Object.isFrozen(t)&&Object.isFrozen(t.raw)}function Ph(t){return t.toString().indexOf("`")===-1}Ph(t=>t``)||Ph(t=>t`\0`)||Ph(t=>t`\n`)||Ph(t=>t`\u0000`);Ah``&&Ah`\0`&&Ah`\n`&&Ah`\u0000`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let dk="google#safe";function ZL(){if(typeof window<"u")return window.trustedTypes}function pk(){var t;return dk!==""&&(t=ZL())!==null&&t!==void 0?t:null}let Ch;function e4(){var t,e;if(Ch===void 0)try{Ch=(e=(t=pk())===null||t===void 0?void 0:t.createPolicy(dk,{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n}))!==null&&e!==void 0?e:null}catch{Ch=null}return Ch}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class mk{constructor(e,n){this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function YE(t){var e;const n=t,r=(e=e4())===null||e===void 0?void 0:e.createScriptURL(n);return r??new mk(n,JL)}function t4(t){var e;if(!((e=pk())===null||e===void 0)&&e.isScriptURL(t))return t;if(t instanceof mk)return t.privateDoNotAccessOrElseWrappedResourceUrl;{let n="";throw new Error(n)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function n4(t,...e){if(e.length===0)return YE(t[0]);t[0].toLowerCase();let n=t[0];for(let r=0;r<e.length;r++)n+=encodeURIComponent(e[r])+t[r+1];return YE(n)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function r4(t){return i4("script",t)}function i4(t,e){var n;const r=e.document,i=(n=r.querySelector)===null||n===void 0?void 0:n.call(r,`${t}[nonce]`);return i&&(i.nonce||i.getAttribute("nonce"))||""}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function s4(t){const e=t.ownerDocument&&t.ownerDocument.defaultView,n=r4(e||window);n&&t.setAttribute("nonce",n)}function o4(t,e,n){t.src=t4(e),s4(t)}const gk="@firebase/installations",f0="0.6.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k=1e4,yk=`w:${f0}`,vk="FIS_v2",a4="https://firebaseinstallations.googleapis.com/v1",l4=60*60*1e3,u4="installations",c4="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f4={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Aa=new Ha(u4,c4,f4);function wk(t){return t instanceof ti&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek({projectId:t}){return`${a4}/projects/${t}/installations`}function Tk(t){return{token:t.token,requestStatus:2,expiresIn:d4(t.expiresIn),creationTime:Date.now()}}async function Ik(t,e){const r=(await e.json()).error;return Aa.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Sk({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function h4(t,{refreshToken:e}){const n=Sk(t);return n.append("Authorization",p4(e)),n}async function xk(t){const e=await t();return e.status>=500&&e.status<600?t():e}function d4(t){return Number(t.replace("s","000"))}function p4(t){return`${vk} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m4({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Ek(t),i=Sk(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:vk,appId:t.appId,sdkVersion:yk},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await xk(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Tk(c.authToken)}}else throw await Ik("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bk(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g4(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _4=/^[cdef][\w-]{21}$/,ay="";function y4(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=v4(t);return _4.test(n)?n:ay}catch{return ay}}function v4(t){return g4(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk=new Map;function Ak(t,e){const n=pm(t);Pk(n,e),w4(n,e)}function Pk(t,e){const n=kk.get(t);if(n)for(const r of n)r(e)}function w4(t,e){const n=E4();n&&n.postMessage({key:t,fid:e}),T4()}let ra=null;function E4(){return!ra&&"BroadcastChannel"in self&&(ra=new BroadcastChannel("[Firebase] FID Change"),ra.onmessage=t=>{Pk(t.data.key,t.data.fid)}),ra}function T4(){kk.size===0&&ra&&(ra.close(),ra=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I4="firebase-installations-database",S4=1,Pa="firebase-installations-store";let kg=null;function h0(){return kg||(kg=uk(I4,S4,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Pa)}}})),kg}async function pp(t,e){const n=pm(t),i=(await h0()).transaction(Pa,"readwrite"),s=i.objectStore(Pa),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Ak(t,e.fid),e}async function Ck(t){const e=pm(t),r=(await h0()).transaction(Pa,"readwrite");await r.objectStore(Pa).delete(e),await r.done}async function mm(t,e){const n=pm(t),i=(await h0()).transaction(Pa,"readwrite"),s=i.objectStore(Pa),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Ak(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d0(t){let e;const n=await mm(t.appConfig,r=>{const i=x4(r),s=b4(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===ay?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function x4(t){const e=t||{fid:y4(),registrationStatus:0};return Rk(e)}function b4(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Aa.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=k4(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:A4(t)}:{installationEntry:e}}async function k4(t,e){try{const n=await m4(t,e);return pp(t.appConfig,n)}catch(n){throw wk(n)&&n.customData.serverCode===409?await Ck(t.appConfig):await pp(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function A4(t){let e=await QE(t.appConfig);for(;e.registrationStatus===1;)await bk(100),e=await QE(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await d0(t);return r||n}return e}function QE(t){return mm(t,e=>{if(!e)throw Aa.create("installation-not-found");return Rk(e)})}function Rk(t){return P4(t)?{fid:t.fid,registrationStatus:0}:t}function P4(t){return t.registrationStatus===1&&t.registrationTime+_k<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C4({appConfig:t,heartbeatServiceProvider:e},n){const r=R4(t,n),i=h4(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:yk,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await xk(()=>fetch(r,a));if(l.ok){const c=await l.json();return Tk(c)}else throw await Ik("Generate Auth Token",l)}function R4(t,{fid:e}){return`${Ek(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p0(t,e=!1){let n;const r=await mm(t.appConfig,s=>{if(!Nk(s))throw Aa.create("not-registered");const o=s.authToken;if(!e&&D4(o))return s;if(o.requestStatus===1)return n=N4(t,e),s;{if(!navigator.onLine)throw Aa.create("app-offline");const a=L4(s);return n=O4(t,a),a}});return n?await n:r.authToken}async function N4(t,e){let n=await XE(t.appConfig);for(;n.authToken.requestStatus===1;)await bk(100),n=await XE(t.appConfig);const r=n.authToken;return r.requestStatus===0?p0(t,e):r}function XE(t){return mm(t,e=>{if(!Nk(e))throw Aa.create("not-registered");const n=e.authToken;return V4(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function O4(t,e){try{const n=await C4(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await pp(t.appConfig,r),n}catch(n){if(wk(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ck(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await pp(t.appConfig,r)}throw n}}function Nk(t){return t!==void 0&&t.registrationStatus===2}function D4(t){return t.requestStatus===2&&!M4(t)}function M4(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+l4}function L4(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function V4(t){return t.requestStatus===1&&t.requestTime+_k<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j4(t){const e=t,{installationEntry:n,registrationPromise:r}=await d0(e);return r?r.catch(console.error):p0(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F4(t,e=!1){const n=t;return await U4(n),(await p0(n,e)).token}async function U4(t){const{registrationPromise:e}=await d0(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z4(t){if(!t||!t.options)throw Ag("App Configuration");if(!t.name)throw Ag("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ag(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ag(t){return Aa.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok="installations",B4="installations-internal",$4=t=>{const e=t.getProvider("app").getImmediate(),n=z4(e),r=Vo(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},q4=t=>{const e=t.getProvider("app").getImmediate(),n=Vo(e,Ok).getImmediate();return{getId:()=>j4(n),getToken:i=>F4(n,i)}};function W4(){_i(new Zr(Ok,$4,"PUBLIC")),_i(new Zr(B4,q4,"PRIVATE"))}W4();lr(gk,f0);lr(gk,f0,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp="analytics",H4="firebase_id",G4="origin",K4=60*1e3,Y4="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Q4="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new hm("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dk(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function X4(t,e){const n=document.createElement("script"),r=n4`https://www.googletagmanager.com/gtag/js?l=${t}&id=${e}`;o4(n,r),n.async=!0,document.head.appendChild(n)}function J4(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Z4(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await Dk(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){kr.error(a)}t("config",i,s)}async function eV(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Dk(n);for(const l of o){const c=a.find(h=>h.measurementId===l),f=c&&e[c.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){kr.error(s)}}function tV(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await eV(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await Z4(t,e,n,r,a,l)}else if(s==="consent"){const[a,l]=o;t("consent",a,l)}else if(s==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){kr.error(a)}}return i}function nV(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=tV(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function rV(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Q4)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iV={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Kr=new Ha("analytics","Analytics",iV);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sV=30,oV=1e3;class aV{constructor(e={},n=oV){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Mk=new aV;function lV(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function uV(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:lV(r)},s=Y4.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Kr.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function cV(t,e=Mk,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Kr.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Kr.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new dV;return setTimeout(async()=>{a.abort()},K4),Lk({appId:r,apiKey:i,measurementId:s},o,a,e)}async function Lk(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Mk){var s;const{appId:o,measurementId:a}=t;try{await fV(r,e)}catch(l){if(a)return kr.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await uV(t);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!hV(c)){if(i.deleteThrottleMetadata(o),a)return kr.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const f=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?UE(n,i.intervalMillis,sV):UE(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(o,h),kr.debug(`Calling attemptFetch again in ${f} millis`),Lk(t,h,r,i)}}function fV(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Kr.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function hV(t){if(!(t instanceof ti)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class dV{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function pV(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mV(){if(sk())try{await ok()}catch(t){return kr.warn(Kr.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return kr.warn(Kr.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function gV(t,e,n,r,i,s,o){var a;const l=cV(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&kr.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>kr.error(m)),e.push(l);const c=mV().then(m=>{if(m)return r.getId()}),[f,h]=await Promise.all([l,c]);rV(s)||X4(s,f.measurementId),i("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[G4]="firebase",p.update=!0,h!=null&&(p[H4]=h),i("config",f.measurementId,p),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _V{constructor(e){this.app=e}_delete(){return delete wc[this.app.options.appId],Promise.resolve()}}let wc={},JE=[];const ZE={};let Pg="dataLayer",yV="gtag",eT,Vk,tT=!1;function vV(){const t=[];if(ik()&&t.push("This is a browser extension environment."),OM()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Kr.create("invalid-analytics-context",{errorInfo:e});kr.warn(n.message)}}function wV(t,e,n){vV();const r=t.options.appId;if(!r)throw Kr.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)kr.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Kr.create("no-api-key");if(wc[r]!=null)throw Kr.create("already-exists",{id:r});if(!tT){J4(Pg);const{wrappedGtag:s,gtagCore:o}=nV(wc,JE,ZE,Pg,yV);Vk=s,eT=o,tT=!0}return wc[r]=gV(t,JE,ZE,e,eT,Pg,n),new _V(t)}function EV(t=dm()){t=Pt(t);const e=Vo(t,mp);return e.isInitialized()?e.getImmediate():TV(t)}function TV(t,e={}){const n=Vo(t,mp);if(n.isInitialized()){const i=n.getImmediate();if(af(e,n.getOptions()))return i;throw Kr.create("already-initialized")}return n.initialize({options:e})}function IV(t,e,n,r){t=Pt(t),pV(Vk,wc[t.app.options.appId],e,n,r).catch(i=>kr.error(i))}const nT="@firebase/analytics",rT="0.10.6";function SV(){_i(new Zr(mp,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return wV(r,i,n)},"PUBLIC")),_i(new Zr("analytics-internal",t,"PRIVATE")),lr(nT,rT),lr(nT,rT,"esm2017");function t(e){try{const n=e.getProvider(mp).getImmediate();return{logEvent:(r,i,s)=>IV(n,r,i,s)}}catch(n){throw Kr.create("interop-component-reg-failed",{reason:n})}}}SV();var iT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ha,jk;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function S(){}S.prototype=y.prototype,T.D=y.prototype,T.prototype=new S,T.prototype.constructor=T,T.C=function(k,N,R){for(var C=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)C[ne-2]=arguments[ne];return y.prototype[N].apply(k,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,y,S){S||(S=0);var k=Array(16);if(typeof y=="string")for(var N=0;16>N;++N)k[N]=y.charCodeAt(S++)|y.charCodeAt(S++)<<8|y.charCodeAt(S++)<<16|y.charCodeAt(S++)<<24;else for(N=0;16>N;++N)k[N]=y[S++]|y[S++]<<8|y[S++]<<16|y[S++]<<24;y=T.g[0],S=T.g[1],N=T.g[2];var R=T.g[3],C=y+(R^S&(N^R))+k[0]+3614090360&4294967295;y=S+(C<<7&4294967295|C>>>25),C=R+(N^y&(S^N))+k[1]+3905402710&4294967295,R=y+(C<<12&4294967295|C>>>20),C=N+(S^R&(y^S))+k[2]+606105819&4294967295,N=R+(C<<17&4294967295|C>>>15),C=S+(y^N&(R^y))+k[3]+3250441966&4294967295,S=N+(C<<22&4294967295|C>>>10),C=y+(R^S&(N^R))+k[4]+4118548399&4294967295,y=S+(C<<7&4294967295|C>>>25),C=R+(N^y&(S^N))+k[5]+1200080426&4294967295,R=y+(C<<12&4294967295|C>>>20),C=N+(S^R&(y^S))+k[6]+2821735955&4294967295,N=R+(C<<17&4294967295|C>>>15),C=S+(y^N&(R^y))+k[7]+4249261313&4294967295,S=N+(C<<22&4294967295|C>>>10),C=y+(R^S&(N^R))+k[8]+1770035416&4294967295,y=S+(C<<7&4294967295|C>>>25),C=R+(N^y&(S^N))+k[9]+2336552879&4294967295,R=y+(C<<12&4294967295|C>>>20),C=N+(S^R&(y^S))+k[10]+4294925233&4294967295,N=R+(C<<17&4294967295|C>>>15),C=S+(y^N&(R^y))+k[11]+2304563134&4294967295,S=N+(C<<22&4294967295|C>>>10),C=y+(R^S&(N^R))+k[12]+1804603682&4294967295,y=S+(C<<7&4294967295|C>>>25),C=R+(N^y&(S^N))+k[13]+4254626195&4294967295,R=y+(C<<12&4294967295|C>>>20),C=N+(S^R&(y^S))+k[14]+2792965006&4294967295,N=R+(C<<17&4294967295|C>>>15),C=S+(y^N&(R^y))+k[15]+1236535329&4294967295,S=N+(C<<22&4294967295|C>>>10),C=y+(N^R&(S^N))+k[1]+4129170786&4294967295,y=S+(C<<5&4294967295|C>>>27),C=R+(S^N&(y^S))+k[6]+3225465664&4294967295,R=y+(C<<9&4294967295|C>>>23),C=N+(y^S&(R^y))+k[11]+643717713&4294967295,N=R+(C<<14&4294967295|C>>>18),C=S+(R^y&(N^R))+k[0]+3921069994&4294967295,S=N+(C<<20&4294967295|C>>>12),C=y+(N^R&(S^N))+k[5]+3593408605&4294967295,y=S+(C<<5&4294967295|C>>>27),C=R+(S^N&(y^S))+k[10]+38016083&4294967295,R=y+(C<<9&4294967295|C>>>23),C=N+(y^S&(R^y))+k[15]+3634488961&4294967295,N=R+(C<<14&4294967295|C>>>18),C=S+(R^y&(N^R))+k[4]+3889429448&4294967295,S=N+(C<<20&4294967295|C>>>12),C=y+(N^R&(S^N))+k[9]+568446438&4294967295,y=S+(C<<5&4294967295|C>>>27),C=R+(S^N&(y^S))+k[14]+3275163606&4294967295,R=y+(C<<9&4294967295|C>>>23),C=N+(y^S&(R^y))+k[3]+4107603335&4294967295,N=R+(C<<14&4294967295|C>>>18),C=S+(R^y&(N^R))+k[8]+1163531501&4294967295,S=N+(C<<20&4294967295|C>>>12),C=y+(N^R&(S^N))+k[13]+2850285829&4294967295,y=S+(C<<5&4294967295|C>>>27),C=R+(S^N&(y^S))+k[2]+4243563512&4294967295,R=y+(C<<9&4294967295|C>>>23),C=N+(y^S&(R^y))+k[7]+1735328473&4294967295,N=R+(C<<14&4294967295|C>>>18),C=S+(R^y&(N^R))+k[12]+2368359562&4294967295,S=N+(C<<20&4294967295|C>>>12),C=y+(S^N^R)+k[5]+4294588738&4294967295,y=S+(C<<4&4294967295|C>>>28),C=R+(y^S^N)+k[8]+2272392833&4294967295,R=y+(C<<11&4294967295|C>>>21),C=N+(R^y^S)+k[11]+1839030562&4294967295,N=R+(C<<16&4294967295|C>>>16),C=S+(N^R^y)+k[14]+4259657740&4294967295,S=N+(C<<23&4294967295|C>>>9),C=y+(S^N^R)+k[1]+2763975236&4294967295,y=S+(C<<4&4294967295|C>>>28),C=R+(y^S^N)+k[4]+1272893353&4294967295,R=y+(C<<11&4294967295|C>>>21),C=N+(R^y^S)+k[7]+4139469664&4294967295,N=R+(C<<16&4294967295|C>>>16),C=S+(N^R^y)+k[10]+3200236656&4294967295,S=N+(C<<23&4294967295|C>>>9),C=y+(S^N^R)+k[13]+681279174&4294967295,y=S+(C<<4&4294967295|C>>>28),C=R+(y^S^N)+k[0]+3936430074&4294967295,R=y+(C<<11&4294967295|C>>>21),C=N+(R^y^S)+k[3]+3572445317&4294967295,N=R+(C<<16&4294967295|C>>>16),C=S+(N^R^y)+k[6]+76029189&4294967295,S=N+(C<<23&4294967295|C>>>9),C=y+(S^N^R)+k[9]+3654602809&4294967295,y=S+(C<<4&4294967295|C>>>28),C=R+(y^S^N)+k[12]+3873151461&4294967295,R=y+(C<<11&4294967295|C>>>21),C=N+(R^y^S)+k[15]+530742520&4294967295,N=R+(C<<16&4294967295|C>>>16),C=S+(N^R^y)+k[2]+3299628645&4294967295,S=N+(C<<23&4294967295|C>>>9),C=y+(N^(S|~R))+k[0]+4096336452&4294967295,y=S+(C<<6&4294967295|C>>>26),C=R+(S^(y|~N))+k[7]+1126891415&4294967295,R=y+(C<<10&4294967295|C>>>22),C=N+(y^(R|~S))+k[14]+2878612391&4294967295,N=R+(C<<15&4294967295|C>>>17),C=S+(R^(N|~y))+k[5]+4237533241&4294967295,S=N+(C<<21&4294967295|C>>>11),C=y+(N^(S|~R))+k[12]+1700485571&4294967295,y=S+(C<<6&4294967295|C>>>26),C=R+(S^(y|~N))+k[3]+2399980690&4294967295,R=y+(C<<10&4294967295|C>>>22),C=N+(y^(R|~S))+k[10]+4293915773&4294967295,N=R+(C<<15&4294967295|C>>>17),C=S+(R^(N|~y))+k[1]+2240044497&4294967295,S=N+(C<<21&4294967295|C>>>11),C=y+(N^(S|~R))+k[8]+1873313359&4294967295,y=S+(C<<6&4294967295|C>>>26),C=R+(S^(y|~N))+k[15]+4264355552&4294967295,R=y+(C<<10&4294967295|C>>>22),C=N+(y^(R|~S))+k[6]+2734768916&4294967295,N=R+(C<<15&4294967295|C>>>17),C=S+(R^(N|~y))+k[13]+1309151649&4294967295,S=N+(C<<21&4294967295|C>>>11),C=y+(N^(S|~R))+k[4]+4149444226&4294967295,y=S+(C<<6&4294967295|C>>>26),C=R+(S^(y|~N))+k[11]+3174756917&4294967295,R=y+(C<<10&4294967295|C>>>22),C=N+(y^(R|~S))+k[2]+718787259&4294967295,N=R+(C<<15&4294967295|C>>>17),C=S+(R^(N|~y))+k[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(N+(C<<21&4294967295|C>>>11))&4294967295,T.g[2]=T.g[2]+N&4294967295,T.g[3]=T.g[3]+R&4294967295}r.prototype.u=function(T,y){y===void 0&&(y=T.length);for(var S=y-this.blockSize,k=this.B,N=this.h,R=0;R<y;){if(N==0)for(;R<=S;)i(this,T,R),R+=this.blockSize;if(typeof T=="string"){for(;R<y;)if(k[N++]=T.charCodeAt(R++),N==this.blockSize){i(this,k),N=0;break}}else for(;R<y;)if(k[N++]=T[R++],N==this.blockSize){i(this,k),N=0;break}}this.h=N,this.o+=y},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;var S=8*this.o;for(y=T.length-8;y<T.length;++y)T[y]=S&255,S/=256;for(this.u(T),T=Array(16),y=S=0;4>y;++y)for(var k=0;32>k;k+=8)T[S++]=this.g[y]>>>k&255;return T};function s(T,y){var S=a;return Object.prototype.hasOwnProperty.call(S,T)?S[T]:S[T]=y(T)}function o(T,y){this.h=y;for(var S=[],k=!0,N=T.length-1;0<=N;N--){var R=T[N]|0;k&&R==y||(S[N]=R,k=!1)}this.g=S}var a={};function l(T){return-128<=T&&128>T?s(T,function(y){return new o([y|0],0>y?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return h;if(0>T)return b(c(-T));for(var y=[],S=1,k=0;T>=S;k++)y[k]=T/S|0,S*=4294967296;return new o(y,0)}function f(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return b(f(T.substring(1),y));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=c(Math.pow(y,8)),k=h,N=0;N<T.length;N+=8){var R=Math.min(8,T.length-N),C=parseInt(T.substring(N,N+R),y);8>R?(R=c(Math.pow(y,R)),k=k.j(R).add(c(C))):(k=k.j(S),k=k.add(c(C)))}return k}var h=l(0),p=l(1),m=l(16777216);t=o.prototype,t.m=function(){if(w(this))return-b(this).m();for(var T=0,y=1,S=0;S<this.g.length;S++){var k=this.i(S);T+=(0<=k?k:4294967296+k)*y,y*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(I(this))return"0";if(w(this))return"-"+b(this).toString(T);for(var y=c(Math.pow(T,6)),S=this,k="";;){var N=A(S,y).g;S=E(S,N.j(y));var R=((0<S.g.length?S.g[0]:S.h)>>>0).toString(T);if(S=N,I(S))return R+k;for(;6>R.length;)R="0"+R;k=R+k}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function I(T){if(T.h!=0)return!1;for(var y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function w(T){return T.h==-1}t.l=function(T){return T=E(this,T),w(T)?-1:I(T)?0:1};function b(T){for(var y=T.g.length,S=[],k=0;k<y;k++)S[k]=~T.g[k];return new o(S,~T.h).add(p)}t.abs=function(){return w(this)?b(this):this},t.add=function(T){for(var y=Math.max(this.g.length,T.g.length),S=[],k=0,N=0;N<=y;N++){var R=k+(this.i(N)&65535)+(T.i(N)&65535),C=(R>>>16)+(this.i(N)>>>16)+(T.i(N)>>>16);k=C>>>16,R&=65535,C&=65535,S[N]=C<<16|R}return new o(S,S[S.length-1]&-2147483648?-1:0)};function E(T,y){return T.add(b(y))}t.j=function(T){if(I(this)||I(T))return h;if(w(this))return w(T)?b(this).j(b(T)):b(b(this).j(T));if(w(T))return b(this.j(b(T)));if(0>this.l(m)&&0>T.l(m))return c(this.m()*T.m());for(var y=this.g.length+T.g.length,S=[],k=0;k<2*y;k++)S[k]=0;for(k=0;k<this.g.length;k++)for(var N=0;N<T.g.length;N++){var R=this.i(k)>>>16,C=this.i(k)&65535,ne=T.i(N)>>>16,ce=T.i(N)&65535;S[2*k+2*N]+=C*ce,v(S,2*k+2*N),S[2*k+2*N+1]+=R*ce,v(S,2*k+2*N+1),S[2*k+2*N+1]+=C*ne,v(S,2*k+2*N+1),S[2*k+2*N+2]+=R*ne,v(S,2*k+2*N+2)}for(k=0;k<y;k++)S[k]=S[2*k+1]<<16|S[2*k];for(k=y;k<2*y;k++)S[k]=0;return new o(S,0)};function v(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function x(T,y){this.g=T,this.h=y}function A(T,y){if(I(y))throw Error("division by zero");if(I(T))return new x(h,h);if(w(T))return y=A(b(T),y),new x(b(y.g),b(y.h));if(w(y))return y=A(T,b(y)),new x(b(y.g),y.h);if(30<T.g.length){if(w(T)||w(y))throw Error("slowDivide_ only works with positive integers.");for(var S=p,k=y;0>=k.l(T);)S=O(S),k=O(k);var N=D(S,1),R=D(k,1);for(k=D(k,2),S=D(S,2);!I(k);){var C=R.add(k);0>=C.l(T)&&(N=N.add(S),R=C),k=D(k,1),S=D(S,1)}return y=E(T,N.j(y)),new x(N,y)}for(N=h;0<=T.l(y);){for(S=Math.max(1,Math.floor(T.m()/y.m())),k=Math.ceil(Math.log(S)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),R=c(S),C=R.j(y);w(C)||0<C.l(T);)S-=k,R=c(S),C=R.j(y);I(R)&&(R=p),N=N.add(R),T=E(T,C)}return new x(N,T)}t.A=function(T){return A(this,T).h},t.and=function(T){for(var y=Math.max(this.g.length,T.g.length),S=[],k=0;k<y;k++)S[k]=this.i(k)&T.i(k);return new o(S,this.h&T.h)},t.or=function(T){for(var y=Math.max(this.g.length,T.g.length),S=[],k=0;k<y;k++)S[k]=this.i(k)|T.i(k);return new o(S,this.h|T.h)},t.xor=function(T){for(var y=Math.max(this.g.length,T.g.length),S=[],k=0;k<y;k++)S[k]=this.i(k)^T.i(k);return new o(S,this.h^T.h)};function O(T){for(var y=T.g.length+1,S=[],k=0;k<y;k++)S[k]=T.i(k)<<1|T.i(k-1)>>>31;return new o(S,T.h)}function D(T,y){var S=y>>5;y%=32;for(var k=T.g.length-S,N=[],R=0;R<k;R++)N[R]=0<y?T.i(R+S)>>>y|T.i(R+S+1)<<32-y:T.i(R+S);return new o(N,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,jk=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,ha=o}).apply(typeof iT<"u"?iT:typeof self<"u"?self:typeof window<"u"?window:{});var Rh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fk,Uk,ec,zk,wd,ly,Bk,$k,qk;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,d,_){return u==Array.prototype||u==Object.prototype||(u[d]=_.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Rh=="object"&&Rh];for(var d=0;d<u.length;++d){var _=u[d];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var r=n(this);function i(u,d){if(d)e:{var _=r;u=u.split(".");for(var P=0;P<u.length-1;P++){var L=u[P];if(!(L in _))break e;_=_[L]}u=u[u.length-1],P=_[u],d=d(P),d!=P&&d!=null&&e(_,u,{configurable:!0,writable:!0,value:d})}}function s(u,d){u instanceof String&&(u+="");var _=0,P=!1,L={next:function(){if(!P&&_<u.length){var V=_++;return{value:d(V,u[V]),done:!1}}return P=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}i("Array.prototype.values",function(u){return u||function(){return s(this,function(d,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var d=typeof u;return d=d!="object"?d:u?Array.isArray(u)?"array":d:"null",d=="array"||d=="object"&&typeof u.length=="number"}function c(u){var d=typeof u;return d=="object"&&u!=null||d=="function"}function f(u,d,_){return u.call.apply(u.bind,arguments)}function h(u,d,_){if(!u)throw Error();if(2<arguments.length){var P=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,P),u.apply(d,L)}}return function(){return u.apply(d,arguments)}}function p(u,d,_){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:h,p.apply(null,arguments)}function m(u,d){var _=Array.prototype.slice.call(arguments,1);return function(){var P=_.slice();return P.push.apply(P,arguments),u.apply(this,P)}}function I(u,d){function _(){}_.prototype=d.prototype,u.aa=d.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(P,L,V){for(var q=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)q[$e-2]=arguments[$e];return d.prototype[L].apply(P,q)}}function w(u){const d=u.length;if(0<d){const _=Array(d);for(let P=0;P<d;P++)_[P]=u[P];return _}return[]}function b(u,d){for(let _=1;_<arguments.length;_++){const P=arguments[_];if(l(P)){const L=u.length||0,V=P.length||0;u.length=L+V;for(let q=0;q<V;q++)u[L+q]=P[q]}else u.push(P)}}class E{constructor(d,_){this.i=d,this.j=_,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function v(u){return/^[\s\xa0]*$/.test(u)}function x(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function A(u){return A[" "](u),u}A[" "]=function(){};var O=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function D(u,d,_){for(const P in u)d.call(_,u[P],P,u)}function T(u,d){for(const _ in u)d.call(void 0,u[_],_,u)}function y(u){const d={};for(const _ in u)d[_]=u[_];return d}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(u,d){let _,P;for(let L=1;L<arguments.length;L++){P=arguments[L];for(_ in P)u[_]=P[_];for(let V=0;V<S.length;V++)_=S[V],Object.prototype.hasOwnProperty.call(P,_)&&(u[_]=P[_])}}function N(u){var d=1;u=u.split(":");const _=[];for(;0<d&&u.length;)_.push(u.shift()),d--;return u.length&&_.push(u.join(":")),_}function R(u){a.setTimeout(()=>{throw u},0)}function C(){var u=H;let d=null;return u.g&&(d=u.g,u.g=u.g.next,u.g||(u.h=null),d.next=null),d}class ne{constructor(){this.h=this.g=null}add(d,_){const P=ce.get();P.set(d,_),this.h?this.h.next=P:this.g=P,this.h=P}}var ce=new E(()=>new oe,u=>u.reset());class oe{constructor(){this.next=this.g=this.h=null}set(d,_){this.h=d,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Z,F=!1,H=new ne,M=()=>{const u=a.Promise.resolve(void 0);Z=()=>{u.then(se)}};var se=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(_){R(_)}var d=ce;d.j(u),100>d.h&&(d.h++,u.next=d.g,d.g=u)}F=!1};function de(){this.s=this.s,this.C=this.C}de.prototype.s=!1,de.prototype.ma=function(){this.s||(this.s=!0,this.N())},de.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ke(u,d){this.type=u,this.g=this.target=d,this.defaultPrevented=!1}ke.prototype.h=function(){this.defaultPrevented=!0};var Re=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,d=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};a.addEventListener("test",_,d),a.removeEventListener("test",_,d)}catch{}return u}();function Le(u,d){if(ke.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,P=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=d,d=u.relatedTarget){if(O){e:{try{A(d.nodeName);var L=!0;break e}catch{}L=!1}L||(d=null)}}else _=="mouseover"?d=u.fromElement:_=="mouseout"&&(d=u.toElement);this.relatedTarget=d,P?(this.clientX=P.clientX!==void 0?P.clientX:P.pageX,this.clientY=P.clientY!==void 0?P.clientY:P.pageY,this.screenX=P.screenX||0,this.screenY=P.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Ue[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Le.aa.h.call(this)}}I(Le,ke);var Ue={2:"touch",3:"pen",4:"mouse"};Le.prototype.h=function(){Le.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Se="closure_listenable_"+(1e6*Math.random()|0),rn=0;function Ht(u,d,_,P,L){this.listener=u,this.proxy=null,this.src=d,this.type=_,this.capture=!!P,this.ha=L,this.key=++rn,this.da=this.fa=!1}function pr(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Ct(u){this.src=u,this.g={},this.h=0}Ct.prototype.add=function(u,d,_,P,L){var V=u.toString();u=this.g[V],u||(u=this.g[V]=[],this.h++);var q=xe(u,d,P,L);return-1<q?(d=u[q],_||(d.fa=!1)):(d=new Ht(d,this.src,V,!!P,L),d.fa=_,u.push(d)),d};function Mn(u,d){var _=d.type;if(_ in u.g){var P=u.g[_],L=Array.prototype.indexOf.call(P,d,void 0),V;(V=0<=L)&&Array.prototype.splice.call(P,L,1),V&&(pr(d),u.g[_].length==0&&(delete u.g[_],u.h--))}}function xe(u,d,_,P){for(var L=0;L<u.length;++L){var V=u[L];if(!V.da&&V.listener==d&&V.capture==!!_&&V.ha==P)return L}return-1}var Ye="closure_lm_"+(1e6*Math.random()|0),Gt={};function gn(u,d,_,P,L){if(Array.isArray(d)){for(var V=0;V<d.length;V++)gn(u,d[V],_,P,L);return null}return _=Tt(_),u&&u[Se]?u.K(d,_,c(P)?!!P.capture:!!P,L):j(u,d,_,!1,P,L)}function j(u,d,_,P,L,V){if(!d)throw Error("Invalid event type");var q=c(L)?!!L.capture:!!L,$e=ni(u);if($e||(u[Ye]=$e=new Ct(u)),_=$e.add(d,_,P,q,V),_.proxy)return _;if(P=Ln(),_.proxy=P,P.src=u,P.listener=_,u.addEventListener)Re||(L=q),L===void 0&&(L=!1),u.addEventListener(d.toString(),P,L);else if(u.attachEvent)u.attachEvent(ot(d.toString()),P);else if(u.addListener&&u.removeListener)u.addListener(P);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Ln(){function u(_){return d.call(u.src,u.listener,_)}const d=wi;return u}function Dr(u,d,_,P,L){if(Array.isArray(d))for(var V=0;V<d.length;V++)Dr(u,d[V],_,P,L);else P=c(P)?!!P.capture:!!P,_=Tt(_),u&&u[Se]?(u=u.i,d=String(d).toString(),d in u.g&&(V=u.g[d],_=xe(V,_,P,L),-1<_&&(pr(V[_]),Array.prototype.splice.call(V,_,1),V.length==0&&(delete u.g[d],u.h--)))):u&&(u=ni(u))&&(d=u.g[d.toString()],u=-1,d&&(u=xe(d,_,P,L)),(_=-1<u?d[u]:null)&&Mr(_))}function Mr(u){if(typeof u!="number"&&u&&!u.da){var d=u.src;if(d&&d[Se])Mn(d.i,u);else{var _=u.type,P=u.proxy;d.removeEventListener?d.removeEventListener(_,P,u.capture):d.detachEvent?d.detachEvent(ot(_),P):d.addListener&&d.removeListener&&d.removeListener(P),(_=ni(d))?(Mn(_,u),_.h==0&&(_.src=null,d[Ye]=null)):pr(u)}}}function ot(u){return u in Gt?Gt[u]:Gt[u]="on"+u}function wi(u,d){if(u.da)u=!0;else{d=new Le(d,this);var _=u.listener,P=u.ha||u.src;u.fa&&Mr(u),u=_.call(P,d)}return u}function ni(u){return u=u[Ye],u instanceof Ct?u:null}var Ei="__closure_events_fn_"+(1e9*Math.random()>>>0);function Tt(u){return typeof u=="function"?u:(u[Ei]||(u[Ei]=function(d){return u.handleEvent(d)}),u[Ei])}function Qe(){de.call(this),this.i=new Ct(this),this.M=this,this.F=null}I(Qe,de),Qe.prototype[Se]=!0,Qe.prototype.removeEventListener=function(u,d,_,P){Dr(this,u,d,_,P)};function we(u,d){var _,P=u.F;if(P)for(_=[];P;P=P.F)_.push(P);if(u=u.M,P=d.type||d,typeof d=="string")d=new ke(d,u);else if(d instanceof ke)d.target=d.target||u;else{var L=d;d=new ke(P,u),k(d,L)}if(L=!0,_)for(var V=_.length-1;0<=V;V--){var q=d.g=_[V];L=_n(q,P,!0,d)&&L}if(q=d.g=u,L=_n(q,P,!0,d)&&L,L=_n(q,P,!1,d)&&L,_)for(V=0;V<_.length;V++)q=d.g=_[V],L=_n(q,P,!1,d)&&L}Qe.prototype.N=function(){if(Qe.aa.N.call(this),this.i){var u=this.i,d;for(d in u.g){for(var _=u.g[d],P=0;P<_.length;P++)pr(_[P]);delete u.g[d],u.h--}}this.F=null},Qe.prototype.K=function(u,d,_,P){return this.i.add(String(u),d,!1,_,P)},Qe.prototype.L=function(u,d,_,P){return this.i.add(String(u),d,!0,_,P)};function _n(u,d,_,P){if(d=u.i.g[String(d)],!d)return!0;d=d.concat();for(var L=!0,V=0;V<d.length;++V){var q=d[V];if(q&&!q.da&&q.capture==_){var $e=q.listener,on=q.ha||q.src;q.fa&&Mn(u.i,q),L=$e.call(on,P)!==!1&&L}}return L&&!P.defaultPrevented}function Vn(u,d,_){if(typeof u=="function")_&&(u=p(u,_));else if(u&&typeof u.handleEvent=="function")u=p(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(u,d||0)}function Lr(u){u.g=Vn(()=>{u.g=null,u.i&&(u.i=!1,Lr(u))},u.l);const d=u.h;u.h=null,u.m.apply(null,d)}class zo extends de{constructor(d,_){super(),this.m=d,this.l=_,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Lr(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function We(u){de.call(this),this.h=u,this.g={}}I(We,de);var Bo=[];function ri(u){D(u.g,function(d,_){this.g.hasOwnProperty(_)&&Mr(d)},u),u.g={}}We.prototype.N=function(){We.aa.N.call(this),ri(this)},We.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ti=a.JSON.stringify,Cs=a.JSON.parse,Ii=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function ii(){}ii.prototype.h=null;function ye(u){return u.h||(u.h=u.i())}function Si(){}var sn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function jn(){ke.call(this,"d")}I(jn,ke);function Fn(){ke.call(this,"c")}I(Fn,ke);var Un={},Qi=null;function er(){return Qi=Qi||new Qe}Un.La="serverreachability";function Rs(u){ke.call(this,Un.La,u)}I(Rs,ke);function ae(u){const d=er();we(d,new Rs(d))}Un.STAT_EVENT="statevent";function ie(u,d){ke.call(this,Un.STAT_EVENT,u),this.stat=d}I(ie,ke);function fe(u){const d=er();we(d,new ie(d,u))}Un.Ma="timingevent";function G(u,d){ke.call(this,Un.Ma,u),this.size=d}I(G,ke);function le(u,d){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},d)}function te(){this.g=!0}te.prototype.xa=function(){this.g=!1};function pe(u,d,_,P,L,V){u.info(function(){if(u.g)if(V)for(var q="",$e=V.split("&"),on=0;on<$e.length;on++){var Me=$e[on].split("=");if(1<Me.length){var wn=Me[0];Me=Me[1];var En=wn.split("_");q=2<=En.length&&En[1]=="type"?q+(wn+"="+Me+"&"):q+(wn+"=redacted&")}}else q=null;else q=V;return"XMLHTTP REQ ("+P+") [attempt "+L+"]: "+d+`
`+_+`
`+q})}function Rt(u,d,_,P,L,V,q){u.info(function(){return"XMLHTTP RESP ("+P+") [ attempt "+L+"]: "+d+`
`+_+`
`+V+" "+q})}function _e(u,d,_,P){u.info(function(){return"XMLHTTP TEXT ("+d+"): "+Kt(u,_)+(P?" "+P:"")})}function at(u,d){u.info(function(){return"TIMEOUT: "+d})}te.prototype.info=function(){};function Kt(u,d){if(!u.g)return d;if(!d)return null;try{var _=JSON.parse(d);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var P=_[u];if(!(2>P.length)){var L=P[1];if(Array.isArray(L)&&!(1>L.length)){var V=L[0];if(V!="noop"&&V!="stop"&&V!="close")for(var q=1;q<L.length;q++)L[q]=""}}}}return Ti(_)}catch{return d}}var ze={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Be={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ve;function yn(){}I(yn,ii),yn.prototype.g=function(){return new XMLHttpRequest},yn.prototype.i=function(){return{}},Ve=new yn;function De(u,d,_,P){this.j=u,this.i=d,this.l=_,this.R=P||1,this.U=new We(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vn}function vn(){this.i=null,this.g="",this.h=!1}var mr={},It={};function St(u,d,_){u.L=1,u.v=rh(Zi(d)),u.m=_,u.P=!0,Ft(u,null)}function Ft(u,d){u.F=Date.now(),xt(u),u.A=Zi(u.v);var _=u.A,P=u.R;Array.isArray(P)||(P=[String(P)]),Z1(_.i,"t",P),u.C=0,_=u.j.J,u.h=new vn,u.g=_w(u.j,_?d:null,!u.m),0<u.O&&(u.M=new zo(p(u.Y,u,u.g),u.O)),d=u.U,_=u.g,P=u.ca;var L="readystatechange";Array.isArray(L)||(L&&(Bo[0]=L.toString()),L=Bo);for(var V=0;V<L.length;V++){var q=gn(_,L[V],P||d.handleEvent,!1,d.h||d);if(!q)break;d.g[q.key]=q}d=u.H?y(u.H):{},u.m?(u.u||(u.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,d)):(u.u="GET",u.g.ea(u.A,u.u,null,d)),ae(),pe(u.i,u.u,u.A,u.l,u.R,u.m)}De.prototype.ca=function(u){u=u.target;const d=this.M;d&&es(u)==3?d.j():this.Y(u)},De.prototype.Y=function(u){try{if(u==this.g)e:{const En=es(this.g);var d=this.g.Ba();const tl=this.g.Z();if(!(3>En)&&(En!=3||this.g&&(this.h.h||this.g.oa()||ow(this.g)))){this.J||En!=4||d==7||(d==8||0>=tl?ae(3):ae(2)),tr(this);var _=this.g.Z();this.X=_;t:if(xi(this)){var P=ow(this.g);u="";var L=P.length,V=es(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bi(this),Xi(this);var q="";break t}this.h.i=new a.TextDecoder}for(d=0;d<L;d++)this.h.h=!0,u+=this.h.i.decode(P[d],{stream:!(V&&d==L-1)});P.length=0,this.h.g+=u,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=_==200,Rt(this.i,this.u,this.A,this.l,this.R,En,_),this.o){if(this.T&&!this.K){t:{if(this.g){var $e,on=this.g;if(($e=on.g?on.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v($e)){var Me=$e;break t}}Me=null}if(_=Me)_e(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ji(this,_);else{this.o=!1,this.s=3,fe(12),bi(this),Xi(this);break e}}if(this.P){_=!0;let si;for(;!this.J&&this.C<q.length;)if(si=Ja(this,q),si==It){En==4&&(this.s=4,fe(14),_=!1),_e(this.i,this.l,null,"[Incomplete Response]");break}else if(si==mr){this.s=4,fe(15),_e(this.i,this.l,q,"[Invalid Chunk]"),_=!1;break}else _e(this.i,this.l,si,null),Ji(this,si);if(xi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),En!=4||q.length!=0||this.h.h||(this.s=1,fe(16),_=!1),this.o=this.o&&_,!_)_e(this.i,this.l,q,"[Invalid Chunked Response]"),bi(this),Xi(this);else if(0<q.length&&!this.W){this.W=!0;var wn=this.j;wn.g==this&&wn.ba&&!wn.M&&(wn.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),Gm(wn),wn.M=!0,fe(11))}}else _e(this.i,this.l,q,null),Ji(this,q);En==4&&bi(this),this.o&&!this.J&&(En==4?dw(this.j,this):(this.o=!1,xt(this)))}else $2(this.g),_==400&&0<q.indexOf("Unknown SID")?(this.s=3,fe(12)):(this.s=0,fe(13)),bi(this),Xi(this)}}}catch{}finally{}};function xi(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Ja(u,d){var _=u.C,P=d.indexOf(`
`,_);return P==-1?It:(_=Number(d.substring(_,P)),isNaN(_)?mr:(P+=1,P+_>d.length?It:(d=d.slice(P,P+_),u.C=P+_,d)))}De.prototype.cancel=function(){this.J=!0,bi(this)};function xt(u){u.S=Date.now()+u.I,mt(u,u.I)}function mt(u,d){if(u.B!=null)throw Error("WatchDog timer not null");u.B=le(p(u.ba,u),d)}function tr(u){u.B&&(a.clearTimeout(u.B),u.B=null)}De.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(at(this.i,this.A),this.L!=2&&(ae(),fe(17)),bi(this),this.s=2,Xi(this)):mt(this,this.S-u)};function Xi(u){u.j.G==0||u.J||dw(u.j,u)}function bi(u){tr(u);var d=u.M;d&&typeof d.ma=="function"&&d.ma(),u.M=null,ri(u.U),u.g&&(d=u.g,u.g=null,d.abort(),d.ma())}function Ji(u,d){try{var _=u.j;if(_.G!=0&&(_.g==u||Bm(_.h,u))){if(!u.K&&Bm(_.h,u)&&_.G==3){try{var P=_.Da.g.parse(d)}catch{P=null}if(Array.isArray(P)&&P.length==3){var L=P;if(L[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)lh(_),oh(_);else break e;Hm(_),fe(18)}}else _.za=L[1],0<_.za-_.T&&37500>L[2]&&_.F&&_.v==0&&!_.C&&(_.C=le(p(_.Za,_),6e3));if(1>=Os(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Wo(_,11)}else if((u.K||_.g==u)&&lh(_),!v(d))for(L=_.Da.g.parse(d),d=0;d<L.length;d++){let Me=L[d];if(_.T=Me[0],Me=Me[1],_.G==2)if(Me[0]=="c"){_.K=Me[1],_.ia=Me[2];const wn=Me[3];wn!=null&&(_.la=wn,_.j.info("VER="+_.la));const En=Me[4];En!=null&&(_.Aa=En,_.j.info("SVER="+_.Aa));const tl=Me[5];tl!=null&&typeof tl=="number"&&0<tl&&(P=1.5*tl,_.L=P,_.j.info("backChannelRequestTimeoutMs_="+P)),P=_;const si=u.g;if(si){const ch=si.g?si.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ch){var V=P.h;V.g||ch.indexOf("spdy")==-1&&ch.indexOf("quic")==-1&&ch.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&($m(V,V.h),V.h=null))}if(P.D){const Km=si.g?si.g.getResponseHeader("X-HTTP-Session-Id"):null;Km&&(P.ya=Km,Xe(P.I,P.D,Km))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),P=_;var q=u;if(P.qa=gw(P,P.J?P.ia:null,P.W),q.K){W1(P.h,q);var $e=q,on=P.L;on&&($e.I=on),$e.B&&(tr($e),xt($e)),P.g=q}else fw(P);0<_.i.length&&ah(_)}else Me[0]!="stop"&&Me[0]!="close"||Wo(_,7);else _.G==3&&(Me[0]=="stop"||Me[0]=="close"?Me[0]=="stop"?Wo(_,7):Wm(_):Me[0]!="noop"&&_.l&&_.l.ta(Me),_.v=0)}}ae(4)}catch{}}var Vr=class{constructor(u,d){this.g=u,this.map=d}};function Ns(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $o(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Os(u){return u.h?1:u.g?u.g.size:0}function Bm(u,d){return u.h?u.h==d:u.g?u.g.has(d):!1}function $m(u,d){u.g?u.g.add(d):u.h=d}function W1(u,d){u.h&&u.h==d?u.h=null:u.g&&u.g.has(d)&&u.g.delete(d)}Ns.prototype.cancel=function(){if(this.i=H1(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function H1(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let d=u.i;for(const _ of u.g.values())d=d.concat(_.D);return d}return w(u.i)}function A2(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var d=[],_=u.length,P=0;P<_;P++)d.push(u[P]);return d}d=[],_=0;for(P in u)d[_++]=u[P];return d}function P2(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var d=[];u=u.length;for(var _=0;_<u;_++)d.push(_);return d}d=[],_=0;for(const P in u)d[_++]=P;return d}}}function G1(u,d){if(u.forEach&&typeof u.forEach=="function")u.forEach(d,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,d,void 0);else for(var _=P2(u),P=A2(u),L=P.length,V=0;V<L;V++)d.call(void 0,P[V],_&&_[V],u)}var K1=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function C2(u,d){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var P=u[_].indexOf("="),L=null;if(0<=P){var V=u[_].substring(0,P);L=u[_].substring(P+1)}else V=u[_];d(V,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function qo(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof qo){this.h=u.h,th(this,u.j),this.o=u.o,this.g=u.g,nh(this,u.s),this.l=u.l;var d=u.i,_=new Au;_.i=d.i,d.g&&(_.g=new Map(d.g),_.h=d.h),Y1(this,_),this.m=u.m}else u&&(d=String(u).match(K1))?(this.h=!1,th(this,d[1]||"",!0),this.o=bu(d[2]||""),this.g=bu(d[3]||"",!0),nh(this,d[4]),this.l=bu(d[5]||"",!0),Y1(this,d[6]||"",!0),this.m=bu(d[7]||"")):(this.h=!1,this.i=new Au(null,this.h))}qo.prototype.toString=function(){var u=[],d=this.j;d&&u.push(ku(d,Q1,!0),":");var _=this.g;return(_||d=="file")&&(u.push("//"),(d=this.o)&&u.push(ku(d,Q1,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(ku(_,_.charAt(0)=="/"?O2:N2,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",ku(_,M2)),u.join("")};function Zi(u){return new qo(u)}function th(u,d,_){u.j=_?bu(d,!0):d,u.j&&(u.j=u.j.replace(/:$/,""))}function nh(u,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);u.s=d}else u.s=null}function Y1(u,d,_){d instanceof Au?(u.i=d,L2(u.i,u.h)):(_||(d=ku(d,D2)),u.i=new Au(d,u.h))}function Xe(u,d,_){u.i.set(d,_)}function rh(u){return Xe(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function bu(u,d){return u?d?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ku(u,d,_){return typeof u=="string"?(u=encodeURI(u).replace(d,R2),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function R2(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Q1=/[#\/\?@]/g,N2=/[#\?:]/g,O2=/[#\?]/g,D2=/[#\?@]/g,M2=/#/g;function Au(u,d){this.h=this.g=null,this.i=u||null,this.j=!!d}function Ds(u){u.g||(u.g=new Map,u.h=0,u.i&&C2(u.i,function(d,_){u.add(decodeURIComponent(d.replace(/\+/g," ")),_)}))}t=Au.prototype,t.add=function(u,d){Ds(this),this.i=null,u=Za(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(d),this.h+=1,this};function X1(u,d){Ds(u),d=Za(u,d),u.g.has(d)&&(u.i=null,u.h-=u.g.get(d).length,u.g.delete(d))}function J1(u,d){return Ds(u),d=Za(u,d),u.g.has(d)}t.forEach=function(u,d){Ds(this),this.g.forEach(function(_,P){_.forEach(function(L){u.call(d,L,P,this)},this)},this)},t.na=function(){Ds(this);const u=Array.from(this.g.values()),d=Array.from(this.g.keys()),_=[];for(let P=0;P<d.length;P++){const L=u[P];for(let V=0;V<L.length;V++)_.push(d[P])}return _},t.V=function(u){Ds(this);let d=[];if(typeof u=="string")J1(this,u)&&(d=d.concat(this.g.get(Za(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)d=d.concat(u[_])}return d},t.set=function(u,d){return Ds(this),this.i=null,u=Za(this,u),J1(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[d]),this.h+=1,this},t.get=function(u,d){return u?(u=this.V(u),0<u.length?String(u[0]):d):d};function Z1(u,d,_){X1(u,d),0<_.length&&(u.i=null,u.g.set(Za(u,d),w(_)),u.h+=_.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],d=Array.from(this.g.keys());for(var _=0;_<d.length;_++){var P=d[_];const V=encodeURIComponent(String(P)),q=this.V(P);for(P=0;P<q.length;P++){var L=V;q[P]!==""&&(L+="="+encodeURIComponent(String(q[P]))),u.push(L)}}return this.i=u.join("&")};function Za(u,d){return d=String(d),u.j&&(d=d.toLowerCase()),d}function L2(u,d){d&&!u.j&&(Ds(u),u.i=null,u.g.forEach(function(_,P){var L=P.toLowerCase();P!=L&&(X1(this,P),Z1(this,L,_))},u)),u.j=d}function V2(u,d){const _=new te;if(a.Image){const P=new Image;P.onload=m(Ms,_,"TestLoadImage: loaded",!0,d,P),P.onerror=m(Ms,_,"TestLoadImage: error",!1,d,P),P.onabort=m(Ms,_,"TestLoadImage: abort",!1,d,P),P.ontimeout=m(Ms,_,"TestLoadImage: timeout",!1,d,P),a.setTimeout(function(){P.ontimeout&&P.ontimeout()},1e4),P.src=u}else d(!1)}function j2(u,d){const _=new te,P=new AbortController,L=setTimeout(()=>{P.abort(),Ms(_,"TestPingServer: timeout",!1,d)},1e4);fetch(u,{signal:P.signal}).then(V=>{clearTimeout(L),V.ok?Ms(_,"TestPingServer: ok",!0,d):Ms(_,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(L),Ms(_,"TestPingServer: error",!1,d)})}function Ms(u,d,_,P,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),P(_)}catch{}}function F2(){this.g=new Ii}function U2(u,d,_){const P=_||"";try{G1(u,function(L,V){let q=L;c(L)&&(q=Ti(L)),d.push(P+V+"="+encodeURIComponent(q))})}catch(L){throw d.push(P+"type="+encodeURIComponent("_badmap")),L}}function Pu(u){this.l=u.Ub||null,this.j=u.eb||!1}I(Pu,ii),Pu.prototype.g=function(){return new ih(this.l,this.j)},Pu.prototype.i=function(u){return function(){return u}}({});function ih(u,d){Qe.call(this),this.D=u,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(ih,Qe),t=ih.prototype,t.open=function(u,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=d,this.readyState=1,Ru(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(d.body=u),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cu(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Ru(this)),this.g&&(this.readyState=3,Ru(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ew(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function ew(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var d=u.value?u.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!u.done}))&&(this.response=this.responseText+=d)}u.done?Cu(this):Ru(this),this.readyState==3&&ew(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,Cu(this))},t.Qa=function(u){this.g&&(this.response=u,Cu(this))},t.ga=function(){this.g&&Cu(this)};function Cu(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Ru(u)}t.setRequestHeader=function(u,d){this.u.append(u,d)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],d=this.h.entries();for(var _=d.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=d.next();return u.join(`\r
`)};function Ru(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(ih.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function tw(u){let d="";return D(u,function(_,P){d+=P,d+=":",d+=_,d+=`\r
`}),d}function qm(u,d,_){e:{for(P in _){var P=!1;break e}P=!0}P||(_=tw(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):Xe(u,d,_))}function gt(u){Qe.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(gt,Qe);var z2=/^https?$/i,B2=["POST","PUT"];t=gt.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,d,_,P){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);d=d?d.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ve.g(),this.v=this.o?ye(this.o):ye(Ve),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(u),!0),this.B=!1}catch(V){nw(this,V);return}if(u=_||"",_=new Map(this.headers),P)if(Object.getPrototypeOf(P)===Object.prototype)for(var L in P)_.set(L,P[L]);else if(typeof P.keys=="function"&&typeof P.get=="function")for(const V of P.keys())_.set(V,P.get(V));else throw Error("Unknown input type for opt_headers: "+String(P));P=Array.from(_.keys()).find(V=>V.toLowerCase()=="content-type"),L=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(B2,d,void 0))||P||L||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,q]of _)this.g.setRequestHeader(V,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{sw(this),this.u=!0,this.g.send(u),this.u=!1}catch(V){nw(this,V)}};function nw(u,d){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=d,u.m=5,rw(u),sh(u)}function rw(u){u.A||(u.A=!0,we(u,"complete"),we(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,we(this,"complete"),we(this,"abort"),sh(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),sh(this,!0)),gt.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?iw(this):this.bb())},t.bb=function(){iw(this)};function iw(u){if(u.h&&typeof o<"u"&&(!u.v[1]||es(u)!=4||u.Z()!=2)){if(u.u&&es(u)==4)Vn(u.Ea,0,u);else if(we(u,"readystatechange"),es(u)==4){u.h=!1;try{const q=u.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var _;if(!(_=d)){var P;if(P=q===0){var L=String(u.D).match(K1)[1]||null;!L&&a.self&&a.self.location&&(L=a.self.location.protocol.slice(0,-1)),P=!z2.test(L?L.toLowerCase():"")}_=P}if(_)we(u,"complete"),we(u,"success");else{u.m=6;try{var V=2<es(u)?u.g.statusText:""}catch{V=""}u.l=V+" ["+u.Z()+"]",rw(u)}}finally{sh(u)}}}}function sh(u,d){if(u.g){sw(u);const _=u.g,P=u.v[0]?()=>{}:null;u.g=null,u.v=null,d||we(u,"ready");try{_.onreadystatechange=P}catch{}}}function sw(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function es(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<es(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var d=this.g.responseText;return u&&d.indexOf(u)==0&&(d=d.substring(u.length)),Cs(d)}};function ow(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function $2(u){const d={};u=(u.g&&2<=es(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let P=0;P<u.length;P++){if(v(u[P]))continue;var _=N(u[P]);const L=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const V=d[L]||[];d[L]=V,V.push(_)}T(d,function(P){return P.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Nu(u,d,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||d}function aw(u){this.Aa=0,this.i=[],this.j=new te,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Nu("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Nu("baseRetryDelayMs",5e3,u),this.cb=Nu("retryDelaySeedMs",1e4,u),this.Wa=Nu("forwardChannelMaxRetries",2,u),this.wa=Nu("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Ns(u&&u.concurrentRequestLimit),this.Da=new F2,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=aw.prototype,t.la=8,t.G=1,t.connect=function(u,d,_,P){fe(0),this.W=u,this.H=d||{},_&&P!==void 0&&(this.H.OSID=_,this.H.OAID=P),this.F=this.X,this.I=gw(this,null,this.W),ah(this)};function Wm(u){if(lw(u),u.G==3){var d=u.U++,_=Zi(u.I);if(Xe(_,"SID",u.K),Xe(_,"RID",d),Xe(_,"TYPE","terminate"),Ou(u,_),d=new De(u,u.j,d),d.L=2,d.v=rh(Zi(_)),_=!1,a.navigator&&a.navigator.sendBeacon)try{_=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!_&&a.Image&&(new Image().src=d.v,_=!0),_||(d.g=_w(d.j,null),d.g.ea(d.v)),d.F=Date.now(),xt(d)}mw(u)}function oh(u){u.g&&(Gm(u),u.g.cancel(),u.g=null)}function lw(u){oh(u),u.u&&(a.clearTimeout(u.u),u.u=null),lh(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function ah(u){if(!$o(u.h)&&!u.s){u.s=!0;var d=u.Ga;Z||M(),F||(Z(),F=!0),H.add(d,u),u.B=0}}function q2(u,d){return Os(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=d.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=le(p(u.Ga,u,d),pw(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const L=new De(this,this.j,u);let V=this.o;if(this.S&&(V?(V=y(V),k(V,this.S)):V=this.S),this.m!==null||this.O||(L.H=V,V=null),this.P)e:{for(var d=0,_=0;_<this.i.length;_++){t:{var P=this.i[_];if("__data__"in P.map&&(P=P.map.__data__,typeof P=="string")){P=P.length;break t}P=void 0}if(P===void 0)break;if(d+=P,4096<d){d=_;break e}if(d===4096||_===this.i.length-1){d=_+1;break e}}d=1e3}else d=1e3;d=cw(this,L,d),_=Zi(this.I),Xe(_,"RID",u),Xe(_,"CVER",22),this.D&&Xe(_,"X-HTTP-Session-Id",this.D),Ou(this,_),V&&(this.O?d="headers="+encodeURIComponent(String(tw(V)))+"&"+d:this.m&&qm(_,this.m,V)),$m(this.h,L),this.Ua&&Xe(_,"TYPE","init"),this.P?(Xe(_,"$req",d),Xe(_,"SID","null"),L.T=!0,St(L,_,null)):St(L,_,d),this.G=2}}else this.G==3&&(u?uw(this,u):this.i.length==0||$o(this.h)||uw(this))};function uw(u,d){var _;d?_=d.l:_=u.U++;const P=Zi(u.I);Xe(P,"SID",u.K),Xe(P,"RID",_),Xe(P,"AID",u.T),Ou(u,P),u.m&&u.o&&qm(P,u.m,u.o),_=new De(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),d&&(u.i=d.D.concat(u.i)),d=cw(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),$m(u.h,_),St(_,P,d)}function Ou(u,d){u.H&&D(u.H,function(_,P){Xe(d,P,_)}),u.l&&G1({},function(_,P){Xe(d,P,_)})}function cw(u,d,_){_=Math.min(u.i.length,_);var P=u.l?p(u.l.Na,u.l,u):null;e:{var L=u.i;let V=-1;for(;;){const q=["count="+_];V==-1?0<_?(V=L[0].g,q.push("ofs="+V)):V=0:q.push("ofs="+V);let $e=!0;for(let on=0;on<_;on++){let Me=L[on].g;const wn=L[on].map;if(Me-=V,0>Me)V=Math.max(0,L[on].g-100),$e=!1;else try{U2(wn,q,"req"+Me+"_")}catch{P&&P(wn)}}if($e){P=q.join("&");break e}}}return u=u.i.splice(0,_),d.D=u,P}function fw(u){if(!u.g&&!u.u){u.Y=1;var d=u.Fa;Z||M(),F||(Z(),F=!0),H.add(d,u),u.v=0}}function Hm(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=le(p(u.Fa,u),pw(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,hw(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=le(p(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,fe(10),oh(this),hw(this))};function Gm(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function hw(u){u.g=new De(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var d=Zi(u.qa);Xe(d,"RID","rpc"),Xe(d,"SID",u.K),Xe(d,"AID",u.T),Xe(d,"CI",u.F?"0":"1"),!u.F&&u.ja&&Xe(d,"TO",u.ja),Xe(d,"TYPE","xmlhttp"),Ou(u,d),u.m&&u.o&&qm(d,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=rh(Zi(d)),_.m=null,_.P=!0,Ft(_,u)}t.Za=function(){this.C!=null&&(this.C=null,oh(this),Hm(this),fe(19))};function lh(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function dw(u,d){var _=null;if(u.g==d){lh(u),Gm(u),u.g=null;var P=2}else if(Bm(u.h,d))_=d.D,W1(u.h,d),P=1;else return;if(u.G!=0){if(d.o)if(P==1){_=d.m?d.m.length:0,d=Date.now()-d.F;var L=u.B;P=er(),we(P,new G(P,_)),ah(u)}else fw(u);else if(L=d.s,L==3||L==0&&0<d.X||!(P==1&&q2(u,d)||P==2&&Hm(u)))switch(_&&0<_.length&&(d=u.h,d.i=d.i.concat(_)),L){case 1:Wo(u,5);break;case 4:Wo(u,10);break;case 3:Wo(u,6);break;default:Wo(u,2)}}}function pw(u,d){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*d}function Wo(u,d){if(u.j.info("Error code "+d),d==2){var _=p(u.fb,u),P=u.Xa;const L=!P;P=new qo(P||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||th(P,"https"),rh(P),L?V2(P.toString(),_):j2(P.toString(),_)}else fe(2);u.G=0,u.l&&u.l.sa(d),mw(u),lw(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),fe(2)):(this.j.info("Failed to ping google.com"),fe(1))};function mw(u){if(u.G=0,u.ka=[],u.l){const d=H1(u.h);(d.length!=0||u.i.length!=0)&&(b(u.ka,d),b(u.ka,u.i),u.h.i.length=0,w(u.i),u.i.length=0),u.l.ra()}}function gw(u,d,_){var P=_ instanceof qo?Zi(_):new qo(_);if(P.g!="")d&&(P.g=d+"."+P.g),nh(P,P.s);else{var L=a.location;P=L.protocol,d=d?d+"."+L.hostname:L.hostname,L=+L.port;var V=new qo(null);P&&th(V,P),d&&(V.g=d),L&&nh(V,L),_&&(V.l=_),P=V}return _=u.D,d=u.ya,_&&d&&Xe(P,_,d),Xe(P,"VER",u.la),Ou(u,P),P}function _w(u,d,_){if(d&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=u.Ca&&!u.pa?new gt(new Pu({eb:_})):new gt(u.pa),d.Ha(u.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function yw(){}t=yw.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function uh(){}uh.prototype.g=function(u,d){return new gr(u,d)};function gr(u,d){Qe.call(this),this.g=new aw(d),this.l=u,this.h=d&&d.messageUrlParams||null,u=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(u?u["X-WebChannel-Content-Type"]=d.messageContentType:u={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(u?u["X-WebChannel-Client-Profile"]=d.va:u={"X-WebChannel-Client-Profile":d.va}),this.g.S=u,(u=d&&d.Sb)&&!v(u)&&(this.g.m=u),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!v(d)&&(this.g.D=d,u=this.h,u!==null&&d in u&&(u=this.h,d in u&&delete u[d])),this.j=new el(this)}I(gr,Qe),gr.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},gr.prototype.close=function(){Wm(this.g)},gr.prototype.o=function(u){var d=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=Ti(u),u=_);d.i.push(new Vr(d.Ya++,u)),d.G==3&&ah(d)},gr.prototype.N=function(){this.g.l=null,delete this.j,Wm(this.g),delete this.g,gr.aa.N.call(this)};function vw(u){jn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var d=u.__sm__;if(d){e:{for(const _ in d){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,d=d!==null&&u in d?d[u]:void 0),this.data=d}else this.data=u}I(vw,jn);function ww(){Fn.call(this),this.status=1}I(ww,Fn);function el(u){this.g=u}I(el,yw),el.prototype.ua=function(){we(this.g,"a")},el.prototype.ta=function(u){we(this.g,new vw(u))},el.prototype.sa=function(u){we(this.g,new ww)},el.prototype.ra=function(){we(this.g,"b")},uh.prototype.createWebChannel=uh.prototype.g,gr.prototype.send=gr.prototype.o,gr.prototype.open=gr.prototype.m,gr.prototype.close=gr.prototype.close,qk=function(){return new uh},$k=function(){return er()},Bk=Un,ly={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ze.NO_ERROR=0,ze.TIMEOUT=8,ze.HTTP_ERROR=6,wd=ze,Be.COMPLETE="complete",zk=Be,Si.EventType=sn,sn.OPEN="a",sn.CLOSE="b",sn.ERROR="c",sn.MESSAGE="d",Qe.prototype.listen=Qe.prototype.K,ec=Si,Uk=Pu,gt.prototype.listenOnce=gt.prototype.L,gt.prototype.getLastError=gt.prototype.Ka,gt.prototype.getLastErrorCode=gt.prototype.Ba,gt.prototype.getStatus=gt.prototype.Z,gt.prototype.getResponseJson=gt.prototype.Oa,gt.prototype.getResponseText=gt.prototype.oa,gt.prototype.send=gt.prototype.ea,gt.prototype.setWithCredentials=gt.prototype.Ha,Fk=gt}).apply(typeof Rh<"u"?Rh:typeof self<"u"?self:typeof window<"u"?window:{});const sT="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}bn.UNAUTHENTICATED=new bn(null),bn.GOOGLE_CREDENTIALS=new bn("google-credentials-uid"),bn.FIRST_PARTY=new bn("first-party-uid"),bn.MOCK_USER=new bn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vu="10.12.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=new hm("@firebase/firestore");function Bu(){return Ca.logLevel}function X(t,...e){if(Ca.logLevel<=Pe.DEBUG){const n=e.map(m0);Ca.debug(`Firestore (${vu}): ${t}`,...n)}}function ws(t,...e){if(Ca.logLevel<=Pe.ERROR){const n=e.map(m0);Ca.error(`Firestore (${vu}): ${t}`,...n)}}function eu(t,...e){if(Ca.logLevel<=Pe.WARN){const n=e.map(m0);Ca.warn(`Firestore (${vu}): ${t}`,...n)}}function m0(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t="Unexpected state"){const e=`FIRESTORE (${vu}) INTERNAL ASSERTION FAILED: `+t;throw ws(e),new Error(e)}function Ke(t,e){t||he()}function ge(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends ti{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xV{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(bn.UNAUTHENTICATED))}shutdown(){}}class bV{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class kV{constructor(e){this.t=e,this.currentUser=bn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new go;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new go,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new go)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ke(typeof r.accessToken=="string"),new Wk(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ke(e===null||typeof e=="string"),new bn(e)}}class AV{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=bn.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class PV{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new AV(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(bn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class CV{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RV{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ke(typeof n.token=="string"),this.R=n.token,new CV(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NV(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=NV(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function je(t,e){return t<e?-1:t>e?1:0}function tu(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new J(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return qt.fromMillis(Date.now())}static fromDate(e){return qt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new qt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?je(this.nanoseconds,e.nanoseconds):je(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.timestamp=e}static fromTimestamp(e){return new me(e)}static min(){return new me(new qt(0,0))}static max(){return new me(new qt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,n,r){n===void 0?n=0:n>e.length&&he(),r===void 0?r=e.length-n:r>e.length-n&&he(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return uf.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof uf?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class tt extends uf{construct(e,n,r){return new tt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new tt(n)}static emptyPath(){return new tt([])}}const OV=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class cn extends uf{construct(e,n,r){return new cn(e,n,r)}static isValidIdentifier(e){return OV.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),cn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new cn(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new J(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new J(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new J(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new J(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new cn(n)}static emptyPath(){return new cn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(tt.fromString(e))}static fromName(e){return new re(tt.fromString(e).popFirst(5))}static empty(){return new re(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&tt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return tt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new tt(e.slice()))}}function DV(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=me.fromTimestamp(r===1e9?new qt(n+1,0):new qt(n,r));return new Io(i,re.empty(),e)}function MV(t){return new Io(t.readTime,t.key,-1)}class Io{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Io(me.min(),re.empty(),-1)}static max(){return new Io(me.max(),re.empty(),-1)}}function LV(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:je(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VV="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jV{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jf(t){if(t.code!==z.FAILED_PRECONDITION||t.message!==VV)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(i=>i?B.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new B((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(f=>{o[c]=f,++a,a===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new B((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function FV(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ff(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}g0.oe=-1;function gm(t){return t==null}function gp(t){return t===0&&1/t==-1/0}function UV(t){return typeof t=="number"&&Number.isInteger(t)&&!gp(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function wu(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Gk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,n){this.comparator=e,this.root=n||un.EMPTY}insert(e,n){return new pt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,un.BLACK,null,null))}remove(e){return new pt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,un.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Nh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Nh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Nh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Nh(this.root,e,this.comparator,!0)}}class Nh{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class un{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??un.RED,this.left=i??un.EMPTY,this.right=s??un.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new un(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return un.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return un.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,un.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,un.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}}un.EMPTY=null,un.RED=!0,un.BLACK=!1;un.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,n,r,i,s){return this}insert(e,n,r){return new un(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.comparator=e,this.data=new pt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new aT(this.data.getIterator())}getIteratorFrom(e){return new aT(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof dn)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new dn(this.comparator);return n.data=e,n}}class aT{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this.fields=e,e.sort(cn.comparator)}static empty(){return new hi([])}unionWith(e){let n=new dn(cn.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new hi(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return tu(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Kk("Invalid base64 string: "+s):s}}(e);return new Dn(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Dn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return je(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dn.EMPTY_BYTE_STRING=new Dn("");const zV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function So(t){if(Ke(!!t),typeof t=="string"){let e=0;const n=zV.exec(t);if(Ke(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Dt(t.seconds),nanos:Dt(t.nanos)}}function Dt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ra(t){return typeof t=="string"?Dn.fromBase64String(t):Dn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function y0(t){const e=t.mapValue.fields.__previous_value__;return _0(e)?y0(e):e}function cf(t){const e=So(t.mapValue.fields.__local_write_time__.timestampValue);return new qt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BV{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class ff{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ff("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ff&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Na(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?_0(t)?4:$V(t)?9007199254740991:10:he()}function Ki(t,e){if(t===e)return!0;const n=Na(t);if(n!==Na(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return cf(t).isEqual(cf(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=So(i.timestampValue),a=So(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ra(i.bytesValue).isEqual(Ra(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Dt(i.geoPointValue.latitude)===Dt(s.geoPointValue.latitude)&&Dt(i.geoPointValue.longitude)===Dt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Dt(i.integerValue)===Dt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Dt(i.doubleValue),a=Dt(s.doubleValue);return o===a?gp(o)===gp(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return tu(t.arrayValue.values||[],e.arrayValue.values||[],Ki);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(oT(o)!==oT(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Ki(o[l],a[l])))return!1;return!0}(t,e);default:return he()}}function hf(t,e){return(t.values||[]).find(n=>Ki(n,e))!==void 0}function nu(t,e){if(t===e)return 0;const n=Na(t),r=Na(e);if(n!==r)return je(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return je(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Dt(s.integerValue||s.doubleValue),l=Dt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return lT(t.timestampValue,e.timestampValue);case 4:return lT(cf(t),cf(e));case 5:return je(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ra(s),l=Ra(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const f=je(a[c],l[c]);if(f!==0)return f}return je(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=je(Dt(s.latitude),Dt(o.latitude));return a!==0?a:je(Dt(s.longitude),Dt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const f=nu(a[c],l[c]);if(f)return f}return je(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Oh.mapValue&&o===Oh.mapValue)return 0;if(s===Oh.mapValue)return 1;if(o===Oh.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},f=Object.keys(c);l.sort(),f.sort();for(let h=0;h<l.length&&h<f.length;++h){const p=je(l[h],f[h]);if(p!==0)return p;const m=nu(a[l[h]],c[f[h]]);if(m!==0)return m}return je(l.length,f.length)}(t.mapValue,e.mapValue);default:throw he()}}function lT(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return je(t,e);const n=So(t),r=So(e),i=je(n.seconds,r.seconds);return i!==0?i:je(n.nanos,r.nanos)}function ru(t){return uy(t)}function uy(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=So(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ra(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=uy(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${uy(n.fields[o])}`;return i+"}"}(t.mapValue):he()}function uT(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function cy(t){return!!t&&"integerValue"in t}function v0(t){return!!t&&"arrayValue"in t}function cT(t){return!!t&&"nullValue"in t}function fT(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ed(t){return!!t&&"mapValue"in t}function Ec(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return wu(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ec(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ec(t.arrayValue.values[n]);return e}return Object.assign({},t)}function $V(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e){this.value=e}static empty(){return new $r({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ed(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ec(n)}setAll(e){let n=cn.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ec(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ed(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ki(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ed(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){wu(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new $r(Ec(this.value))}}function Yk(t){const e=[];return wu(t.fields,(n,r)=>{const i=new cn([n]);if(Ed(r)){const s=Yk(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new hi(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Pn(e,0,me.min(),me.min(),me.min(),$r.empty(),0)}static newFoundDocument(e,n,r,i){return new Pn(e,1,n,me.min(),r,i,0)}static newNoDocument(e,n){return new Pn(e,2,n,me.min(),me.min(),$r.empty(),0)}static newUnknownDocument(e,n){return new Pn(e,3,n,me.min(),me.min(),$r.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(me.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$r.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$r.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=me.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,n){this.position=e,this.inclusive=n}}function hT(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=nu(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function dT(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ki(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,n="asc"){this.field=e,this.dir=n}}function qV(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{}class Vt extends Qk{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new HV(e,n,r):n==="array-contains"?new YV(e,r):n==="in"?new QV(e,r):n==="not-in"?new XV(e,r):n==="array-contains-any"?new JV(e,r):new Vt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new GV(e,r):new KV(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(nu(n,this.value)):n!==null&&Na(this.value)===Na(n)&&this.matchesComparison(nu(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yi extends Qk{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new yi(e,n)}matches(e){return Xk(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Xk(t){return t.op==="and"}function Jk(t){return WV(t)&&Xk(t)}function WV(t){for(const e of t.filters)if(e instanceof yi)return!1;return!0}function fy(t){if(t instanceof Vt)return t.field.canonicalString()+t.op.toString()+ru(t.value);if(Jk(t))return t.filters.map(e=>fy(e)).join(",");{const e=t.filters.map(n=>fy(n)).join(",");return`${t.op}(${e})`}}function Zk(t,e){return t instanceof Vt?function(r,i){return i instanceof Vt&&r.op===i.op&&r.field.isEqual(i.field)&&Ki(r.value,i.value)}(t,e):t instanceof yi?function(r,i){return i instanceof yi&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Zk(o,i.filters[a]),!0):!1}(t,e):void he()}function eA(t){return t instanceof Vt?function(n){return`${n.field.canonicalString()} ${n.op} ${ru(n.value)}`}(t):t instanceof yi?function(n){return n.op.toString()+" {"+n.getFilters().map(eA).join(" ,")+"}"}(t):"Filter"}class HV extends Vt{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class GV extends Vt{constructor(e,n){super(e,"in",n),this.keys=tA("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class KV extends Vt{constructor(e,n){super(e,"not-in",n),this.keys=tA("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function tA(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>re.fromName(r.referenceValue))}class YV extends Vt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return v0(n)&&hf(n.arrayValue,this.value)}}class QV extends Vt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&hf(this.value.arrayValue,n)}}class XV extends Vt{constructor(e,n){super(e,"not-in",n)}matches(e){if(hf(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!hf(this.value.arrayValue,n)}}class JV extends Vt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!v0(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>hf(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZV{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function pT(t,e=null,n=[],r=[],i=null,s=null,o=null){return new ZV(t,e,n,r,i,s,o)}function w0(t){const e=ge(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>fy(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),gm(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ru(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ru(r)).join(",")),e.ue=n}return e.ue}function E0(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!qV(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Zk(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!dT(t.startAt,e.startAt)&&dT(t.endAt,e.endAt)}function hy(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ej(t,e,n,r,i,s,o,a){return new Uf(t,e,n,r,i,s,o,a)}function nA(t){return new Uf(t)}function mT(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function rA(t){return t.collectionGroup!==null}function Tc(t){const e=ge(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new dn(cn.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new yp(s,r))}),n.has(cn.keyField().canonicalString())||e.ce.push(new yp(cn.keyField(),r))}return e.ce}function Bi(t){const e=ge(t);return e.le||(e.le=tj(e,Tc(t))),e.le}function tj(t,e){if(t.limitType==="F")return pT(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new yp(i.field,s)});const n=t.endAt?new _p(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new _p(t.startAt.position,t.startAt.inclusive):null;return pT(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function dy(t,e){const n=t.filters.concat([e]);return new Uf(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function py(t,e,n){return new Uf(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function _m(t,e){return E0(Bi(t),Bi(e))&&t.limitType===e.limitType}function iA(t){return`${w0(Bi(t))}|lt:${t.limitType}`}function ol(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>eA(i)).join(", ")}]`),gm(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ru(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ru(i)).join(",")),`Target(${r})`}(Bi(t))}; limitType=${t.limitType})`}function ym(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):re.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Tc(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=hT(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,Tc(r),i)||r.endAt&&!function(o,a,l){const c=hT(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,Tc(r),i))}(t,e)}function nj(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function sA(t){return(e,n)=>{let r=!1;for(const i of Tc(t)){const s=rj(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function rj(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?nu(l,c):he()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return he()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){wu(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Gk(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ij=new pt(re.comparator);function Es(){return ij}const oA=new pt(re.comparator);function tc(...t){let e=oA;for(const n of t)e=e.insert(n.key,n);return e}function aA(t){let e=oA;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ia(){return Ic()}function lA(){return Ic()}function Ic(){return new Eu(t=>t.toString(),(t,e)=>t.isEqual(e))}const sj=new pt(re.comparator),oj=new dn(re.comparator);function be(...t){let e=oj;for(const n of t)e=e.add(n);return e}const aj=new dn(je);function lj(){return aj}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uA(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gp(e)?"-0":e}}function cA(t){return{integerValue:""+t}}function uj(t,e){return UV(e)?cA(e):uA(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(){this._=void 0}}function cj(t,e,n){return t instanceof vp?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&_0(s)&&(s=y0(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof df?hA(t,e):t instanceof pf?dA(t,e):function(i,s){const o=fA(i,s),a=gT(o)+gT(i.Pe);return cy(o)&&cy(i.Pe)?cA(a):uA(i.serializer,a)}(t,e)}function fj(t,e,n){return t instanceof df?hA(t,e):t instanceof pf?dA(t,e):n}function fA(t,e){return t instanceof wp?function(r){return cy(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class vp extends vm{}class df extends vm{constructor(e){super(),this.elements=e}}function hA(t,e){const n=pA(e);for(const r of t.elements)n.some(i=>Ki(i,r))||n.push(r);return{arrayValue:{values:n}}}class pf extends vm{constructor(e){super(),this.elements=e}}function dA(t,e){let n=pA(e);for(const r of t.elements)n=n.filter(i=>!Ki(i,r));return{arrayValue:{values:n}}}class wp extends vm{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function gT(t){return Dt(t.integerValue||t.doubleValue)}function pA(t){return v0(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function hj(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof df&&i instanceof df||r instanceof pf&&i instanceof pf?tu(r.elements,i.elements,Ki):r instanceof wp&&i instanceof wp?Ki(r.Pe,i.Pe):r instanceof vp&&i instanceof vp}(t.transform,e.transform)}class dj{constructor(e,n){this.version=e,this.transformResults=n}}class ds{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ds}static exists(e){return new ds(void 0,e)}static updateTime(e){return new ds(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Td(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class wm{}function mA(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new _A(t.key,ds.none()):new zf(t.key,t.data,ds.none());{const n=t.data,r=$r.empty();let i=new dn(cn.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ka(t.key,r,new hi(i.toArray()),ds.none())}}function pj(t,e,n){t instanceof zf?function(i,s,o){const a=i.value.clone(),l=yT(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ka?function(i,s,o){if(!Td(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=yT(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(gA(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Sc(t,e,n,r){return t instanceof zf?function(s,o,a,l){if(!Td(s.precondition,o))return a;const c=s.value.clone(),f=vT(s.fieldTransforms,l,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ka?function(s,o,a,l){if(!Td(s.precondition,o))return a;const c=vT(s.fieldTransforms,l,o),f=o.data;return f.setAll(gA(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Td(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function mj(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=fA(r.transform,i||null);s!=null&&(n===null&&(n=$r.empty()),n.set(r.field,s))}return n||null}function _T(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&tu(r,i,(s,o)=>hj(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class zf extends wm{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ka extends wm{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function gA(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function yT(t,e,n){const r=new Map;Ke(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,fj(o,a,n[i]))}return r}function vT(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,cj(s,o,e))}return r}class _A extends wm{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gj extends wm{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _j{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&pj(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Sc(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Sc(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=lA();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=mA(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(me.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),be())}isEqual(e){return this.batchId===e.batchId&&tu(this.mutations,e.mutations,(n,r)=>_T(n,r))&&tu(this.baseMutations,e.baseMutations,(n,r)=>_T(n,r))}}class T0{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ke(e.mutations.length===r.length);let i=function(){return sj}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new T0(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yj{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vj{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nt,Ne;function wj(t){switch(t){default:return he();case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0}}function yA(t){if(t===void 0)return ws("GRPC error has no .code"),z.UNKNOWN;switch(t){case Nt.OK:return z.OK;case Nt.CANCELLED:return z.CANCELLED;case Nt.UNKNOWN:return z.UNKNOWN;case Nt.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case Nt.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case Nt.INTERNAL:return z.INTERNAL;case Nt.UNAVAILABLE:return z.UNAVAILABLE;case Nt.UNAUTHENTICATED:return z.UNAUTHENTICATED;case Nt.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case Nt.NOT_FOUND:return z.NOT_FOUND;case Nt.ALREADY_EXISTS:return z.ALREADY_EXISTS;case Nt.PERMISSION_DENIED:return z.PERMISSION_DENIED;case Nt.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case Nt.ABORTED:return z.ABORTED;case Nt.OUT_OF_RANGE:return z.OUT_OF_RANGE;case Nt.UNIMPLEMENTED:return z.UNIMPLEMENTED;case Nt.DATA_LOSS:return z.DATA_LOSS;default:return he()}}(Ne=Nt||(Nt={}))[Ne.OK=0]="OK",Ne[Ne.CANCELLED=1]="CANCELLED",Ne[Ne.UNKNOWN=2]="UNKNOWN",Ne[Ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ne[Ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ne[Ne.NOT_FOUND=5]="NOT_FOUND",Ne[Ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ne[Ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ne[Ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ne[Ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ne[Ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ne[Ne.ABORTED=10]="ABORTED",Ne[Ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ne[Ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ne[Ne.INTERNAL=13]="INTERNAL",Ne[Ne.UNAVAILABLE=14]="UNAVAILABLE",Ne[Ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ej(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tj=new ha([4294967295,4294967295],0);function wT(t){const e=Ej().encode(t),n=new jk;return n.update(e),new Uint8Array(n.digest())}function ET(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ha([n,r],0),new ha([i,s],0)]}class I0{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new nc(`Invalid padding: ${n}`);if(r<0)throw new nc(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new nc(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new nc(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ha.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(ha.fromNumber(r)));return i.compare(Tj)===1&&(i=new ha([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=wT(e),[r,i]=ET(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new I0(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=wT(e),[r,i]=ET(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class nc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Bf.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Em(me.min(),i,new pt(je),Es(),be())}}class Bf{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Bf(r,n,be(),be(),be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class vA{constructor(e,n){this.targetId=e,this.me=n}}class wA{constructor(e,n,r=Dn.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class TT{constructor(){this.fe=0,this.ge=ST(),this.pe=Dn.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=be(),n=be(),r=be();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:he()}}),new Bf(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=ST()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ke(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Ij{constructor(e){this.Le=e,this.Be=new Map,this.ke=Es(),this.qe=IT(),this.Qe=new pt(je)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:he()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(hy(s))if(r===0){const o=new re(s.path);this.Ue(n,o,Pn.newNoDocument(o,me.min()))}else Ke(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ra(r).toUint8Array()}catch(l){if(l instanceof Kk)return eu("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new I0(o,i,s)}catch(l){return eu(l instanceof nc?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&hy(a.target)){const l=new re(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Pn.newNoDocument(l,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=be();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Em(e,n,this.Qe,this.ke,r);return this.ke=Es(),this.qe=IT(),this.Qe=new pt(je),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new TT,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new dn(je),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new TT),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function IT(){return new pt(re.comparator)}function ST(){return new pt(re.comparator)}const Sj={asc:"ASCENDING",desc:"DESCENDING"},xj={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},bj={and:"AND",or:"OR"};class kj{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function my(t,e){return t.useProto3Json||gm(e)?e:{value:e}}function Ep(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function EA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Aj(t,e){return Ep(t,e.toTimestamp())}function $i(t){return Ke(!!t),me.fromTimestamp(function(n){const r=So(n);return new qt(r.seconds,r.nanos)}(t))}function S0(t,e){return gy(t,e).canonicalString()}function gy(t,e){const n=function(i){return new tt(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function TA(t){const e=tt.fromString(t);return Ke(kA(e)),e}function _y(t,e){return S0(t.databaseId,e.path)}function Cg(t,e){const n=TA(e);if(n.get(1)!==t.databaseId.projectId)throw new J(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new J(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(SA(n))}function IA(t,e){return S0(t.databaseId,e)}function Pj(t){const e=TA(t);return e.length===4?tt.emptyPath():SA(e)}function yy(t){return new tt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function SA(t){return Ke(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function xT(t,e,n){return{name:_y(t,e),fields:n.value.mapValue.fields}}function Cj(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(Ke(f===void 0||typeof f=="string"),Dn.fromBase64String(f||"")):(Ke(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Dn.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const f=c.code===void 0?z.UNKNOWN:yA(c.code);return new J(f,c.message||"")}(o);n=new wA(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Cg(t,r.document.name),s=$i(r.document.updateTime),o=r.document.createTime?$i(r.document.createTime):me.min(),a=new $r({mapValue:{fields:r.document.fields}}),l=Pn.newFoundDocument(i,s,o,a),c=r.targetIds||[],f=r.removedTargetIds||[];n=new Id(c,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Cg(t,r.document),s=r.readTime?$i(r.readTime):me.min(),o=Pn.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Id([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Cg(t,r.document),s=r.removedTargetIds||[];n=new Id([],s,i,null)}else{if(!("filter"in e))return he();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new vj(i,s),a=r.targetId;n=new vA(a,o)}}return n}function Rj(t,e){let n;if(e instanceof zf)n={update:xT(t,e.key,e.value)};else if(e instanceof _A)n={delete:_y(t,e.key)};else if(e instanceof Ka)n={update:xT(t,e.key,e.data),updateMask:Uj(e.fieldMask)};else{if(!(e instanceof gj))return he();n={verify:_y(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof vp)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof df)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof pf)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof wp)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw he()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Aj(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:he()}(t,e.precondition)),n}function Nj(t,e){return t&&t.length>0?(Ke(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?$i(i.updateTime):$i(s);return o.isEqual(me.min())&&(o=$i(s)),new dj(o,i.transformResults||[])}(n,e))):[]}function Oj(t,e){return{documents:[IA(t,e.path)]}}function Dj(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=IA(t,i);const s=function(c){if(c.length!==0)return bA(yi.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(p){return{field:al(p.field),direction:Vj(p.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=my(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function Mj(t){let e=Pj(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ke(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(h){const p=xA(h);return p instanceof yi&&Jk(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(p=>function(I){return new yp(ll(I.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(h){let p;return p=typeof h=="object"?h.value:h,gm(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(h){const p=!!h.before,m=h.values||[];return new _p(m,p)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const p=!h.before,m=h.values||[];return new _p(m,p)}(n.endAt)),ej(e,i,o,s,a,"F",l,c)}function Lj(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function xA(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ll(n.unaryFilter.field);return Vt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ll(n.unaryFilter.field);return Vt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ll(n.unaryFilter.field);return Vt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ll(n.unaryFilter.field);return Vt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(n){return Vt.create(ll(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return yi.create(n.compositeFilter.filters.map(r=>xA(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return he()}}(n.compositeFilter.op))}(t):he()}function Vj(t){return Sj[t]}function jj(t){return xj[t]}function Fj(t){return bj[t]}function al(t){return{fieldPath:t.canonicalString()}}function ll(t){return cn.fromServerFormat(t.fieldPath)}function bA(t){return t instanceof Vt?function(n){if(n.op==="=="){if(fT(n.value))return{unaryFilter:{field:al(n.field),op:"IS_NAN"}};if(cT(n.value))return{unaryFilter:{field:al(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(fT(n.value))return{unaryFilter:{field:al(n.field),op:"IS_NOT_NAN"}};if(cT(n.value))return{unaryFilter:{field:al(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:al(n.field),op:jj(n.op),value:n.value}}}(t):t instanceof yi?function(n){const r=n.getFilters().map(i=>bA(i));return r.length===1?r[0]:{compositeFilter:{op:Fj(n.op),filters:r}}}(t):he()}function Uj(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function kA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n,r,i,s=me.min(),o=me.min(),a=Dn.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Js(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Js(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Js(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Js(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zj{constructor(e){this.ct=e}}function Bj(t){const e=Mj({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?py(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $j{constructor(){this._n=new qj}addToCollectionParentIndex(e,n){return this._n.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(Io.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(Io.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class qj{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new dn(tt.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new dn(tt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new iu(0)}static Ln(){return new iu(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wj{constructor(){this.changes=new Eu(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Pn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hj{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gj{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Sc(r.mutation,i,hi.empty(),qt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,be()).next(()=>r))}getLocalViewOfDocuments(e,n,r=be()){const i=ia();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=tc();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ia();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,be()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Es();const o=Ic(),a=function(){return Ic()}();return n.forEach((l,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof Ka)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),Sc(f.mutation,c,f.mutation.getFieldMask(),qt.now())):o.set(c.key,hi.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>{var h;return a.set(c,new Hj(f,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ic();let i=new pt((o,a)=>o-a),s=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let f=r.get(l)||hi.empty();f=a.applyToLocalView(c,f),r.set(l,f);const h=(i.get(a.batchId)||be()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,f=l.value,h=lA();f.forEach(p=>{if(!s.has(p)){const m=mA(n.get(p),r.get(p));m!==null&&h.set(p,m),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return re.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):rA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):B.resolve(ia());let a=-1,l=s;return o.next(c=>B.forEach(c,(f,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(f)?B.resolve():this.remoteDocumentCache.getEntry(e,f).next(p=>{l=l.insert(f,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,be())).next(f=>({batchId:a,changes:aA(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let i=tc();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=tc();return this.indexManager.getCollectionParents(e,s).next(a=>B.forEach(a,l=>{const c=function(h,p){return new Uf(p,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((h,p)=>{o=o.insert(h,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,Pn.newInvalidDocument(f)))});let a=tc();return o.forEach((l,c)=>{const f=s.get(l);f!==void 0&&Sc(f.mutation,c,hi.empty(),qt.now()),ym(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kj{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return B.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:$i(i.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:Bj(i.bundledQuery),readTime:$i(i.readTime)}}(n)),B.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yj{constructor(){this.overlays=new pt(re.comparator),this.hr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ia();return B.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const i=ia(),s=n.length+1,o=new re(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return B.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new pt((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=ia(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const a=ia(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,f)=>a.set(c,f)),!(a.size()>=i)););return B.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new yj(n,r));let s=this.hr.get(n);s===void 0&&(s=be(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(){this.Pr=new dn(Xt.Ir),this.Tr=new dn(Xt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Xt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Xt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new re(new tt([])),r=new Xt(n,e),i=new Xt(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new re(new tt([])),r=new Xt(n,e),i=new Xt(n,e+1);let s=be();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Xt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return re.comparator(e.key,n.key)||je(e.pr,n.pr)}static Er(e,n){return je(e.pr,n.pr)||re.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qj{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new dn(Xt.Ir)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new _j(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new Xt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return B.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xt(n,0),i=new Xt(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),B.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new dn(je);return n.forEach(i=>{const s=new Xt(i,0),o=new Xt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),B.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;re.isDocumentKey(s)||(s=s.child(""));const o=new Xt(new re(s),0);let a=new dn(je);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.pr)),!0)},o),B.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ke(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return B.forEach(n.mutations,i=>{const s=new Xt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Xt(n,0),i=this.wr.firstAfterOrEqual(r);return B.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xj{constructor(e){this.vr=e,this.docs=function(){return new pt(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():Pn.newInvalidDocument(n))}getEntries(e,n){let r=Es();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Pn.newInvalidDocument(i))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Es();const o=n.path,a=new re(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:f}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||LV(MV(f),r)<=0||(i.has(f.key)||ym(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return B.resolve(s)}getAllFromCollectionGroup(e,n,r,i){he()}Fr(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Jj(this)}getSize(e){return B.resolve(this.size)}}class Jj extends Wj{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zj{constructor(e){this.persistence=e,this.Mr=new Eu(n=>w0(n),E0),this.lastRemoteSnapshotVersion=me.min(),this.highestTargetId=0,this.Or=0,this.Nr=new x0,this.targetCount=0,this.Lr=iu.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),B.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new iu(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.qn(n),B.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),B.waitFor(s).next(()=>i)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),B.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e3{constructor(e,n){this.Br={},this.overlays={},this.kr=new g0(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new Zj(this),this.indexManager=new $j,this.remoteDocumentCache=function(i){return new Xj(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new zj(n),this.$r=new Kj(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Yj,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new Qj(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const i=new t3(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return B.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class t3 extends jV{constructor(e){super(),this.currentSequenceNumber=e}}class b0{constructor(e){this.persistence=e,this.zr=new x0,this.jr=null}static Hr(e){return new b0(e)}get Jr(){if(this.jr)return this.jr;throw he()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),B.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Jr,r=>{const i=re.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,me.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return B.or([()=>B.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=be(),i=be();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new k0(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n3{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r3{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return NM()?8:FV(mn())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new n3;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Bu()<=Pe.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",ol(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),B.resolve()):(Bu()<=Pe.DEBUG&&X("QueryEngine","Query:",ol(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Bu()<=Pe.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",ol(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Bi(n))):B.resolve())}ji(e,n){if(mT(n))return B.resolve(null);let r=Bi(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=py(n,null,"F"),r=Bi(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=be(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Zi(n,a);return this.Xi(n,c,o,l.readTime)?this.ji(e,py(n,null,"F")):this.es(e,c,n,l)}))})))}Hi(e,n,r,i){return mT(n)||i.isEqual(me.min())?B.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?B.resolve(null):(Bu()<=Pe.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ol(n)),this.es(e,o,n,DV(i,-1)).next(a=>a))})}Zi(e,n){let r=new dn(sA(e));return n.forEach((i,s)=>{ym(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return Bu()<=Pe.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",ol(n)),this.zi.getDocumentsMatchingQuery(e,n,Io.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i3{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new pt(je),this.rs=new Eu(s=>w0(s),E0),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Gj(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function s3(t,e,n,r){return new i3(t,e,n,r)}async function AA(t,e){const n=ge(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=be();for(const c of i){o.push(c.batchId);for(const f of c.mutations)l=l.add(f.key)}for(const c of s){a.push(c.batchId);for(const f of c.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function o3(t,e){const n=ge(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,f){const h=c.batch,p=h.keys();let m=B.resolve();return p.forEach(I=>{m=m.next(()=>f.getEntry(l,I)).next(w=>{const b=c.docVersions.get(I);Ke(b!==null),w.version.compareTo(b)<0&&(h.applyToRemoteDocument(w,c),w.isValidDocument()&&(w.setReadTime(c.commitVersion),f.addEntry(w)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=be();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function PA(t){const e=ge(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function a3(t,e){const n=ge(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((f,h)=>{const p=i.get(h);if(!p)return;a.push(n.Qr.removeMatchingKeys(s,f.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(s,f.addedDocuments,h)));let m=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(Dn.EMPTY_BYTE_STRING,me.min()).withLastLimboFreeSnapshotVersion(me.min()):f.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(f.resumeToken,r)),i=i.insert(h,m),function(w,b,E){return w.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(p,m,f)&&a.push(n.Qr.updateTargetData(s,m))});let l=Es(),c=be();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),a.push(l3(s,o,e.documentUpdates).next(f=>{l=f.cs,c=f.ls})),!r.isEqual(me.min())){const f=n.Qr.getLastRemoteSnapshotVersion(s).next(h=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(f)}return B.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.ns=i,s))}function l3(t,e,n){let r=be(),i=be();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Es();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(me.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):X("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:i}})}function u3(t,e){const n=ge(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function c3(t,e){const n=ge(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,B.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new Js(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function vy(t,e,n){const r=ge(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ff(o))throw o;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function bT(t,e,n){const r=ge(t);let i=me.min(),s=be();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,f){const h=ge(l),p=h.rs.get(f);return p!==void 0?B.resolve(h.ns.get(p)):h.Qr.getTargetData(c,f)}(r,o,Bi(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:me.min(),n?s:be())).next(a=>(f3(r,nj(e),a),{documents:a,hs:s})))}function f3(t,e,n){let r=t.ss.get(e)||me.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class kT{constructor(){this.activeTargetIds=lj()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class h3{constructor(){this.no=new kT,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new kT,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d3{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dh=null;function Rg(){return Dh===null?Dh=function(){return 268435456+Math.round(2147483648*Math.random())}():Dh++,"0x"+Dh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p3={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m3{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn="WebChannelConnection";class g3 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=Rg(),l=this.vo(n,r.toUriEncodedString());X("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,l,c,i).then(f=>(X("RestConnection",`Received RPC '${n}' ${a}: `,f),f),f=>{throw eu("RestConnection",`RPC '${n}' ${a} failed with error: `,f,"url: ",l,"request:",i),f})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+vu}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=p3[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Rg();return new Promise((o,a)=>{const l=new Fk;l.setWithCredentials(!0),l.listenOnce(zk.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case wd.NO_ERROR:const f=l.getResponseJson();X(Sn,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case wd.TIMEOUT:X(Sn,`RPC '${e}' ${s} timed out`),a(new J(z.DEADLINE_EXCEEDED,"Request time out"));break;case wd.HTTP_ERROR:const h=l.getStatus();if(X(Sn,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const m=p==null?void 0:p.error;if(m&&m.status&&m.message){const I=function(b){const E=b.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(E)>=0?E:z.UNKNOWN}(m.status);a(new J(I,m.message))}else a(new J(z.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new J(z.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{X(Sn,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);X(Sn,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=Rg(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=qk(),a=$k(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new Uk({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=s.join("");X(Sn,`Creating RPC '${e}' stream ${i}: ${f}`,l);const h=o.createWebChannel(f,l);let p=!1,m=!1;const I=new m3({lo:b=>{m?X(Sn,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(p||(X(Sn,`Opening RPC '${e}' stream ${i} transport.`),h.open(),p=!0),X(Sn,`RPC '${e}' stream ${i} sending:`,b),h.send(b))},ho:()=>h.close()}),w=(b,E,v)=>{b.listen(E,x=>{try{v(x)}catch(A){setTimeout(()=>{throw A},0)}})};return w(h,ec.EventType.OPEN,()=>{m||(X(Sn,`RPC '${e}' stream ${i} transport opened.`),I.mo())}),w(h,ec.EventType.CLOSE,()=>{m||(m=!0,X(Sn,`RPC '${e}' stream ${i} transport closed`),I.po())}),w(h,ec.EventType.ERROR,b=>{m||(m=!0,eu(Sn,`RPC '${e}' stream ${i} transport errored:`,b),I.po(new J(z.UNAVAILABLE,"The operation could not be completed")))}),w(h,ec.EventType.MESSAGE,b=>{var E;if(!m){const v=b.data[0];Ke(!!v);const x=v,A=x.error||((E=x[0])===null||E===void 0?void 0:E.error);if(A){X(Sn,`RPC '${e}' stream ${i} received error:`,A);const O=A.status;let D=function(S){const k=Nt[S];if(k!==void 0)return yA(k)}(O),T=A.message;D===void 0&&(D=z.INTERNAL,T="Unknown error status: "+O+" with message "+A.message),m=!0,I.po(new J(D,T)),h.close()}else X(Sn,`RPC '${e}' stream ${i} received:`,v),I.yo(v)}}),w(a,Bk.STAT_EVENT,b=>{b.stat===ly.PROXY?X(Sn,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===ly.NOPROXY&&X(Sn,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.fo()},0),I}}function Ng(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(t){return new kj(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&X("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new CA(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===z.RESOURCE_EXHAUSTED?(ws(n.toString()),ws("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new J(z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _3 extends RA{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=Cj(this.serializer,e),r=function(s){if(!("targetChange"in s))return me.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?me.min():o.readTime?$i(o.readTime):me.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=yy(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=hy(l)?{documents:Oj(s,l)}:{query:Dj(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=EA(s,o.resumeToken);const c=my(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(me.min())>0){a.readTime=Ep(s,o.snapshotVersion.toTimestamp());const c=my(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=Lj(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=yy(this.serializer),n.removeTarget=e,this.i_(n)}}class y3 extends RA{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Ke(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=Nj(e.writeResults,e.commitTime),r=$i(e.commitTime);return this.listener.A_(r,n)}return Ke(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=yy(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Rj(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v3 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new J(z.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,gy(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new J(z.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,gy(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new J(z.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class w3{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(ws(n),this.y_=!1):X("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E3{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{Ya(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=ge(l);c.M_.add(4),await $f(c),c.N_.set("Unknown"),c.M_.delete(4),await Im(c)}(this))})}),this.N_=new w3(r,i)}}async function Im(t){if(Ya(t))for(const e of t.x_)await e(!0)}async function $f(t){for(const e of t.x_)await e(!1)}function NA(t,e){const n=ge(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),R0(n)?C0(n):Tu(n).Xo()&&P0(n,e))}function A0(t,e){const n=ge(t),r=Tu(n);n.F_.delete(e),r.Xo()&&OA(n,e),n.F_.size===0&&(r.Xo()?r.n_():Ya(n)&&n.N_.set("Unknown"))}function P0(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(me.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Tu(t).P_(e)}function OA(t,e){t.L_.xe(e),Tu(t).I_(e)}function C0(t){t.L_=new Ij({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Tu(t).start(),t.N_.w_()}function R0(t){return Ya(t)&&!Tu(t).Zo()&&t.F_.size>0}function Ya(t){return ge(t).M_.size===0}function DA(t){t.L_=void 0}async function T3(t){t.N_.set("Online")}async function I3(t){t.F_.forEach((e,n)=>{P0(t,e)})}async function S3(t,e){DA(t),R0(t)?(t.N_.D_(e),C0(t)):t.N_.set("Unknown")}async function x3(t,e,n){if(t.N_.set("Online"),e instanceof wA&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Tp(t,r)}else if(e instanceof Id?t.L_.Ke(e):e instanceof vA?t.L_.He(e):t.L_.We(e),!n.isEqual(me.min()))try{const r=await PA(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const f=s.F_.get(c);f&&s.F_.set(c,f.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const f=s.F_.get(l);if(!f)return;s.F_.set(l,f.withResumeToken(Dn.EMPTY_BYTE_STRING,f.snapshotVersion)),OA(s,l);const h=new Js(f.target,l,c,f.sequenceNumber);P0(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await Tp(t,r)}}async function Tp(t,e,n){if(!Ff(e))throw e;t.M_.add(1),await $f(t),t.N_.set("Offline"),n||(n=()=>PA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Im(t)})}function MA(t,e){return e().catch(n=>Tp(t,n,e))}async function Sm(t){const e=ge(t),n=xo(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;b3(e);)try{const i=await u3(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,k3(e,i)}catch(i){await Tp(e,i)}LA(e)&&VA(e)}function b3(t){return Ya(t)&&t.v_.length<10}function k3(t,e){t.v_.push(e);const n=xo(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function LA(t){return Ya(t)&&!xo(t).Zo()&&t.v_.length>0}function VA(t){xo(t).start()}async function A3(t){xo(t).V_()}async function P3(t){const e=xo(t);for(const n of t.v_)e.d_(n.mutations)}async function C3(t,e,n){const r=t.v_.shift(),i=T0.from(r,e,n);await MA(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Sm(t)}async function R3(t,e){e&&xo(t).E_&&await async function(r,i){if(function(o){return wj(o)&&o!==z.ABORTED}(i.code)){const s=r.v_.shift();xo(r).t_(),await MA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Sm(r)}}(t,e),LA(t)&&VA(t)}async function PT(t,e){const n=ge(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=Ya(n);n.M_.add(3),await $f(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Im(n)}async function N3(t,e){const n=ge(t);e?(n.M_.delete(2),await Im(n)):e||(n.M_.add(2),await $f(n),n.N_.set("Unknown"))}function Tu(t){return t.B_||(t.B_=function(n,r,i){const s=ge(n);return s.f_(),new _3(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:T3.bind(null,t),To:I3.bind(null,t),Ao:S3.bind(null,t),h_:x3.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),R0(t)?C0(t):t.N_.set("Unknown")):(await t.B_.stop(),DA(t))})),t.B_}function xo(t){return t.k_||(t.k_=function(n,r,i){const s=ge(n);return s.f_(),new y3(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:A3.bind(null,t),Ao:R3.bind(null,t),R_:P3.bind(null,t),A_:C3.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Sm(t)):(await t.k_.stop(),t.v_.length>0&&(X("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new go,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new N0(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function O0(t,e){if(ws("AsyncQueue",`${e}: ${t}`),Ff(t))return new J(z.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=tc(),this.sortedSet=new pt(this.comparator)}static emptySet(e){return new Ll(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ll)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ll;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(){this.q_=new pt(re.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):he():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class su{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new su(e,n,Ll.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_m(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O3{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class D3{constructor(){this.queries=new Eu(e=>iA(e),_m),this.onlineState="Unknown",this.z_=new Set}}async function M3(t,e){const n=ge(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new O3,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=O0(o,`Initialization of query '${ol(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&D0(n)}async function L3(t,e){const n=ge(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function V3(t,e){const n=ge(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&D0(n)}function j3(t,e,n){const r=ge(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function D0(t){t.z_.forEach(e=>{e.next()})}var wy,RT;(RT=wy||(wy={})).J_="default",RT.Cache="cache";class F3{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new su(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=su.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==wy.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e){this.key=e}}class FA{constructor(e){this.key=e}}class U3{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=be(),this.mutatedKeys=be(),this.Ia=sA(e),this.Ta=new Ll(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new CT,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,h)=>{const p=i.get(f),m=ym(this.query,h)?h:null,I=!!p&&this.mutatedKeys.has(p.key),w=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let b=!1;p&&m?p.data.isEqual(m.data)?I!==w&&(r.track({type:3,doc:m}),b=!0):this.Ra(p,m)||(r.track({type:2,doc:m}),b=!0,(l&&this.Ia(m,l)>0||c&&this.Ia(m,c)<0)&&(a=!0)):!p&&m?(r.track({type:0,doc:m}),b=!0):p&&!m&&(r.track({type:1,doc:p}),b=!0,(l||c)&&(a=!0)),b&&(m?(o=o.add(m),s=w?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((f,h)=>function(m,I){const w=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return w(m)-w(I)}(f.type,h.type)||this.Ia(f.doc,h.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],l=this.Pa.size===0&&this.current&&!i?1:0,c=l!==this.ha;return this.ha=l,o.length!==0||c?{snapshot:new su(this.query,e.Ta,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new CT,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=be(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new FA(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new jA(r))}),n}pa(e){this.la=e.hs,this.Pa=be();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return su.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class z3{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class B3{constructor(e){this.key=e,this.wa=!1}}class $3{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Eu(a=>iA(a),_m),this.Da=new Map,this.Ca=new Set,this.va=new pt(re.comparator),this.Fa=new Map,this.Ma=new x0,this.xa={},this.Oa=new Map,this.Na=iu.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function q3(t,e,n=!0){const r=WA(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await UA(r,e,n,!0),i}async function W3(t,e){const n=WA(t);await UA(n,e,!0,!1)}async function UA(t,e,n,r){const i=await c3(t.localStore,Bi(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await H3(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&NA(t.remoteStore,i),a}async function H3(t,e,n,r,i){t.Ba=(h,p,m)=>async function(w,b,E,v){let x=b.view.da(E);x.Xi&&(x=await bT(w.localStore,b.query,!1).then(({documents:T})=>b.view.da(T,x)));const A=v&&v.targetChanges.get(b.targetId),O=v&&v.targetMismatches.get(b.targetId)!=null,D=b.view.applyChanges(x,w.isPrimaryClient,A,O);return OT(w,b.targetId,D.fa),D.snapshot}(t,h,p,m);const s=await bT(t.localStore,e,!0),o=new U3(e,s.hs),a=o.da(s.documents),l=Bf.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);OT(t,n,c.fa);const f=new z3(e,n,o);return t.ba.set(e,f),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function G3(t,e,n){const r=ge(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!_m(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await vy(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&A0(r.remoteStore,i.targetId),Ey(r,i.targetId)}).catch(jf)):(Ey(r,i.targetId),await vy(r.localStore,i.targetId,!0))}async function K3(t,e){const n=ge(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),A0(n.remoteStore,r.targetId))}async function Y3(t,e,n){const r=nF(t);try{const i=await function(o,a){const l=ge(o),c=qt.now(),f=a.reduce((m,I)=>m.add(I.key),be());let h,p;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let I=Es(),w=be();return l.os.getEntries(m,f).next(b=>{I=b,I.forEach((E,v)=>{v.isValidDocument()||(w=w.add(E))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,I)).next(b=>{h=b;const E=[];for(const v of a){const x=mj(v,h.get(v.key).overlayedDocument);x!=null&&E.push(new Ka(v.key,x,Yk(x.value.mapValue),ds.exists(!0)))}return l.mutationQueue.addMutationBatch(m,c,E,a)}).next(b=>{p=b;const E=b.applyToLocalDocumentSet(h,w);return l.documentOverlayCache.saveOverlays(m,b.batchId,E)})}).then(()=>({batchId:p.batchId,changes:aA(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.xa[o.currentUser.toKey()];c||(c=new pt(je)),c=c.insert(a,l),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await qf(r,i.changes),await Sm(r.remoteStore)}catch(i){const s=O0(i,"Failed to persist write");n.reject(s)}}async function zA(t,e){const n=ge(t);try{const r=await a3(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(Ke(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?Ke(o.wa):i.removedDocuments.size>0&&(Ke(o.wa),o.wa=!1))}),await qf(n,r,e)}catch(r){await jf(r)}}function NT(t,e,n){const r=ge(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=ge(o);l.onlineState=a;let c=!1;l.queries.forEach((f,h)=>{for(const p of h.U_)p.j_(a)&&(c=!0)}),c&&D0(l)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Q3(t,e,n){const r=ge(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new pt(re.comparator);o=o.insert(s,Pn.newNoDocument(s,me.min()));const a=be().add(s),l=new Em(me.min(),new Map,new pt(je),o,a);await zA(r,l),r.va=r.va.remove(s),r.Fa.delete(e),M0(r)}else await vy(r.localStore,e,!1).then(()=>Ey(r,e,n)).catch(jf)}async function X3(t,e){const n=ge(t),r=e.batch.batchId;try{const i=await o3(n.localStore,e);$A(n,r,null),BA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await qf(n,i)}catch(i){await jf(i)}}async function J3(t,e,n){const r=ge(t);try{const i=await function(o,a){const l=ge(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Ke(h!==null),f=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,f,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>l.localDocuments.getDocuments(c,f))})}(r.localStore,e);$A(r,e,n),BA(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await qf(r,i)}catch(i){await jf(i)}}function BA(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function $A(t,e,n){const r=ge(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function Ey(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||qA(t,r)})}function qA(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(A0(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),M0(t))}function OT(t,e,n){for(const r of n)r instanceof jA?(t.Ma.addReference(r.key,e),Z3(t,r)):r instanceof FA?(X("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||qA(t,r.key)):he()}function Z3(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(X("SyncEngine","New document in limbo: "+n),t.Ca.add(r),M0(t))}function M0(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new re(tt.fromString(e)),r=t.Na.next();t.Fa.set(r,new B3(n)),t.va=t.va.insert(n,r),NA(t.remoteStore,new Js(Bi(nA(n.path)),r,"TargetPurposeLimboResolution",g0.oe))}}async function qf(t,e,n){const r=ge(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,l)=>{o.push(r.Ba(l,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const h=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,h?"current":"not-current")}if(c){i.push(c);const h=k0.Ki(l.targetId,c);s.push(h)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(l,c){const f=ge(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>B.forEach(c,p=>B.forEach(p.qi,m=>f.persistence.referenceDelegate.addReference(h,p.targetId,m)).next(()=>B.forEach(p.Qi,m=>f.persistence.referenceDelegate.removeReference(h,p.targetId,m)))))}catch(h){if(!Ff(h))throw h;X("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const p=h.targetId;if(!h.fromCache){const m=f.ns.get(p),I=m.snapshotVersion,w=m.withLastLimboFreeSnapshotVersion(I);f.ns=f.ns.insert(p,w)}}}(r.localStore,s))}async function eF(t,e){const n=ge(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await AA(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(l=>{l.reject(new J(z.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qf(n,r.us)}}function tF(t,e){const n=ge(t),r=n.Fa.get(e);if(r&&r.wa)return be().add(r.key);{let i=be();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}function WA(t){const e=ge(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=zA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tF.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Q3.bind(null,e),e.Sa.h_=V3.bind(null,e.eventManager),e.Sa.ka=j3.bind(null,e.eventManager),e}function nF(t){const e=ge(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=X3.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=J3.bind(null,e),e}class DT{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Tm(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return s3(this.persistence,new r3,e.initialUser,this.serializer)}createPersistence(e){return new e3(b0.Hr,this.serializer)}createSharedClientState(e){return new h3}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class rF{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>NT(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=eF.bind(null,this.syncEngine),await N3(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new D3}()}createDatastore(e){const n=Tm(e.databaseInfo.databaseId),r=function(s){return new g3(s)}(e.databaseInfo);return function(s,o,a,l){return new v3(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new E3(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>NT(this.syncEngine,n,0),function(){return AT.D()?new AT:new d3}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,f){const h=new $3(i,s,o,a,l,c);return f&&(h.La=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=ge(r);X("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await $f(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):ws("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sF{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=bn.UNAUTHENTICATED,this.clientId=Hk.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{X("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(X("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new J(z.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new go;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=O0(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Og(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await AA(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function MT(t,e){t.asyncQueue.verifyOperationInProgress();const n=await aF(t);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>PT(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>PT(e.remoteStore,i)),t._onlineComponents=e}function oF(t){return t.name==="FirebaseError"?t.code===z.FAILED_PRECONDITION||t.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function aF(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await Og(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!oF(n))throw n;eu("Error using user provided cache. Falling back to memory cache: "+n),await Og(t,new DT)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await Og(t,new DT);return t._offlineComponents}async function HA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await MT(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await MT(t,new rF))),t._onlineComponents}function lF(t){return HA(t).then(e=>e.syncEngine)}async function uF(t){const e=await HA(t),n=e.eventManager;return n.onListen=q3.bind(null,e.syncEngine),n.onUnlisten=G3.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=W3.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=K3.bind(null,e.syncEngine),n}function cF(t,e,n={}){const r=new go;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const f=new iF({next:p=>{o.enqueueAndForget(()=>L3(s,h)),p.fromCache&&l.source==="server"?c.reject(new J(z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),h=new F3(a,f,{includeMetadataChanges:!0,ra:!0});return M3(s,h)}(await uF(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(t,e,n){if(!n)throw new J(z.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fF(t,e,n,r){if(e===!0&&r===!0)throw new J(z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function VT(t){if(!re.isDocumentKey(t))throw new J(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function jT(t){if(re.isDocumentKey(t))throw new J(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function xm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function Ip(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xm(t);throw new J(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new J(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new J(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fF("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=GA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new J(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new J(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new J(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class bm{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new FT({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new J(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new J(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new FT(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new xV;switch(r.type){case"firstParty":return new PV(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=LT.get(n);r&&(X("ComponentProvider","Removing Datastore"),LT.delete(n),r.terminate())}(this),Promise.resolve()}}function hF(t,e,n,r={}){var i;const s=(t=Ip(t,bm))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&eu("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=bn.MOCK_USER;else{a=rk(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new J(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new bn(c)}t._authCredentials=new bV(new Wk(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Iu(this.firestore,e,this._query)}}class Yr{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _o(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Yr(this.firestore,e,this._key)}}class _o extends Iu{constructor(e,n,r){super(e,n,nA(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Yr(this.firestore,null,new re(e))}withConverter(e){return new _o(this.firestore,e,this._path)}}function km(t,e,...n){if(t=Pt(t),KA("collection","path",e),t instanceof bm){const r=tt.fromString(e,...n);return jT(r),new _o(t,null,r)}{if(!(t instanceof Yr||t instanceof _o))throw new J(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(tt.fromString(e,...n));return jT(r),new _o(t.firestore,null,r)}}function dF(t,e,...n){if(t=Pt(t),arguments.length===1&&(e=Hk.newId()),KA("doc","path",e),t instanceof bm){const r=tt.fromString(e,...n);return VT(r),new Yr(t,null,new re(r))}{if(!(t instanceof Yr||t instanceof _o))throw new J(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(tt.fromString(e,...n));return VT(r),new Yr(t.firestore,t instanceof _o?t.converter:null,new re(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pF{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new CA(this,"async_queue_retry"),this.hu=()=>{const n=Ng();n&&X("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Ng();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Ng();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new go;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Ff(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ws("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=N0.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&he()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class L0 extends bm{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new pF}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||QA(this),this._firestoreClient.terminate()}}function mF(t,e){const n=typeof t=="object"?t:dm(),r=typeof t=="string"?t:"(default)",i=Vo(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=ek("firestore");s&&hF(i,...s)}return i}function YA(t){return t._firestoreClient||QA(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function QA(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,f){return new BV(a,l,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,GA(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new sF(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ou(Dn.fromBase64String(e))}catch(n){throw new J(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ou(Dn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new cn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return je(this._lat,e._lat)||je(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gF=/^__.*__$/;class _F{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ka(e,this.data,this.fieldMask,n,this.fieldTransforms):new zf(e,this.data,n,this.fieldTransforms)}}function JA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class F0{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new F0(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Sp(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(JA(this.fu)&&gF.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class yF{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Tm(e)}Fu(e,n,r,i=!1){return new F0({fu:e,methodName:n,vu:r,path:cn.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ZA(t){const e=t._freezeSettings(),n=Tm(t._databaseId);return new yF(t._databaseId,!!e.ignoreUndefinedProperties,n)}function vF(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);nP("Data must be an object, but it was:",o,r);const a=eP(r,o);let l,c;if(s.merge)l=new hi(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const h of s.mergeFields){const p=EF(e,h,n);if(!o.contains(p))throw new J(z.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);IF(f,p)||f.push(p)}l=new hi(f),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new _F(new $r(a),l,c)}function wF(t,e,n,r=!1){return U0(n,t.Fu(r?4:3,e))}function U0(t,e){if(tP(t=Pt(t)))return nP("Unsupported field value:",e,t),eP(t,e);if(t instanceof XA)return function(r,i){if(!JA(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=U0(a,i.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Pt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return uj(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=qt.fromDate(r);return{timestampValue:Ep(i.serializer,s)}}if(r instanceof qt){const s=new qt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ep(i.serializer,s)}}if(r instanceof j0)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ou)return{bytesValue:EA(i.serializer,r._byteString)};if(r instanceof Yr){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:S0(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${xm(r)}`)}(t,e)}function eP(t,e){const n={};return Gk(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wu(t,(r,i)=>{const s=U0(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function tP(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof qt||t instanceof j0||t instanceof ou||t instanceof Yr||t instanceof XA)}function nP(t,e,n){if(!tP(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=xm(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function EF(t,e,n){if((e=Pt(e))instanceof V0)return e._internalPath;if(typeof e=="string")return rP(t,e);throw Sp("Field path arguments must be of type string or ",t,!1,void 0,n)}const TF=new RegExp("[~\\*/\\[\\]]");function rP(t,e,n){if(e.search(TF)>=0)throw Sp(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new V0(...e.split("."))._internalPath}catch{throw Sp(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Sp(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new J(z.INVALID_ARGUMENT,a+t+l)}function IF(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Yr(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new SF(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(z0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class SF extends iP{data(){return super.data()}}function z0(t,e){return typeof e=="string"?rP(t,e):e instanceof V0?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xF(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new J(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class B0{}class bF extends B0{}function kF(t,e,...n){let r=[];e instanceof B0&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof $0).length,a=s.filter(l=>l instanceof Am).length;if(o>1||o>0&&a>0)throw new J(z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Am extends bF{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Am(e,n,r)}_apply(e){const n=this._parse(e);return sP(e._query,n),new Iu(e.firestore,e.converter,dy(e._query,n))}_parse(e){const n=ZA(e.firestore);return function(s,o,a,l,c,f,h){let p;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new J(z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){zT(h,f);const m=[];for(const I of h)m.push(UT(l,s,I));p={arrayValue:{values:m}}}else p=UT(l,s,h)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||zT(h,f),p=wF(a,o,h,f==="in"||f==="not-in");return Vt.create(c,f,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function AF(t,e,n){const r=e,i=z0("where",t);return Am._create(i,r,n)}class $0 extends B0{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new $0(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:yi.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)sP(o,l),o=dy(o,l)}(e._query,n),new Iu(e.firestore,e.converter,dy(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function UT(t,e,n){if(typeof(n=Pt(n))=="string"){if(n==="")throw new J(z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!rA(e)&&n.indexOf("/")!==-1)throw new J(z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(tt.fromString(n));if(!re.isDocumentKey(r))throw new J(z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return uT(t,new re(r))}if(n instanceof Yr)return uT(t,n._key);throw new J(z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${xm(n)}.`)}function zT(t,e){if(!Array.isArray(t)||t.length===0)throw new J(z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function sP(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new J(z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new J(z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class PF{convertValue(e,n="none"){switch(Na(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ra(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw he()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return wu(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new j0(Dt(e.latitude),Dt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=y0(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(cf(e));default:return null}}convertTimestamp(e){const n=So(e);return new qt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=tt.fromString(e);Ke(kA(r));const i=new ff(r.get(1),r.get(3)),s=new re(r.popFirst(5));return i.isEqual(n)||ws(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CF(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class RF extends iP{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Sd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(z0("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Sd extends RF{data(e={}){return super.data(e)}}class NF{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Mh(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Sd(this._firestore,this._userDataWriter,r.key,r,new Mh(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Sd(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Mh(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Sd(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Mh(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),f=o.indexOf(a.doc.key)),{type:OF(a.type),doc:l,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function OF(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he()}}class DF extends PF{constructor(e){super(),this.firestore=e}convertBytes(e){return new ou(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Yr(this.firestore,null,n)}}function oP(t){t=Ip(t,Iu);const e=Ip(t.firestore,L0),n=YA(e),r=new DF(e);return xF(t._query),cF(n,t._query).then(i=>new NF(e,r,t,i))}function aP(t,e){const n=Ip(t.firestore,L0),r=dF(t),i=CF(t.converter,e);return MF(n,[vF(ZA(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,ds.exists(!1))]).then(()=>r)}function MF(t,e){return function(r,i){const s=new go;return r.asyncQueue.enqueueAndForget(async()=>Y3(await lF(r),i,s)),s.promise}(YA(t),e)}(function(e,n=!0){(function(i){vu=i})(Ga),_i(new Zr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new L0(new kV(r.getProvider("auth-internal")),new RV(r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new J(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ff(c.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),lr(sT,"4.6.4",e),lr(sT,"4.6.4","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lP="firebasestorage.googleapis.com",uP="storageBucket",LF=2*60*1e3,VF=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends ti{constructor(e,n,r=0){super(Dg(e),`Firebase Storage: ${n} (${Dg(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Et.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Dg(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var wt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(wt||(wt={}));function Dg(t){return"storage/"+t}function q0(){const t="An unknown error occurred, please check the error payload for server response.";return new Et(wt.UNKNOWN,t)}function jF(t){return new Et(wt.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function FF(t){return new Et(wt.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function UF(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Et(wt.UNAUTHENTICATED,t)}function zF(){return new Et(wt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function BF(t){return new Et(wt.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function $F(){return new Et(wt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function qF(){return new Et(wt.CANCELED,"User canceled the upload/download.")}function WF(t){return new Et(wt.INVALID_URL,"Invalid URL '"+t+"'.")}function HF(t){return new Et(wt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function GF(){return new Et(wt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+uP+"' property when initializing the app?")}function KF(){return new Et(wt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function YF(){return new Et(wt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function QF(t){return new Et(wt.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ty(t){return new Et(wt.INVALID_ARGUMENT,t)}function cP(){return new Et(wt.APP_DELETED,"The Firebase app was deleted.")}function XF(t){return new Et(wt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function xc(t,e){return new Et(wt.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function $u(t){throw new Et(wt.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Sr.makeFromUrl(e,n)}catch{return new Sr(e,"")}if(r.path==="")return r;throw HF(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(A){A.path.charAt(A.path.length-1)==="/"&&(A.path_=A.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(A){A.path_=decodeURIComponent(A.path)}const f="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${f}/b/${i}/o${p}`,"i"),I={bucket:1,path:3},w=n===lP?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",E=new RegExp(`^https?://${w}/${i}/${b}`,"i"),x=[{regex:a,indices:l,postModify:s},{regex:m,indices:I,postModify:c},{regex:E,indices:{bucket:1,path:2},postModify:c}];for(let A=0;A<x.length;A++){const O=x[A],D=O.regex.exec(e);if(D){const T=D[O.indices.bucket];let y=D[O.indices.path];y||(y=""),r=new Sr(T,y),O.postModify(r);break}}if(r==null)throw WF(e);return r}}class JF{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZF(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function f(...b){c||(c=!0,e.apply(null,b))}function h(b){i=setTimeout(()=>{i=null,t(m,l())},b)}function p(){s&&clearTimeout(s)}function m(b,...E){if(c){p();return}if(b){p(),f.call(null,b,...E);return}if(l()||o){p(),f.call(null,b,...E);return}r<64&&(r*=2);let x;a===1?(a=2,x=0):x=(r+Math.random())*1e3,h(x)}let I=!1;function w(b){I||(I=!0,p(),!c&&(i!==null?(b||(a=2),clearTimeout(i),h(0)):b||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function e5(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t5(t){return t!==void 0}function n5(t){return typeof t=="object"&&!Array.isArray(t)}function W0(t){return typeof t=="string"||t instanceof String}function BT(t){return H0()&&t instanceof Blob}function H0(){return typeof Blob<"u"}function $T(t,e,n,r){if(r<e)throw Ty(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ty(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function fP(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var da;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(da||(da={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r5(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i5{constructor(e,n,r,i,s,o,a,l,c,f,h,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=f,this.connectionFactory_=h,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,I)=>{this.resolve_=m,this.reject_=I,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Lh(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===da.NO_ERROR,l=s.getStatus();if(!a||r5(l,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===da.ABORT;r(!1,new Lh(!1,null,f));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Lh(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());t5(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=q0();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?cP():qF();o(l)}else{const l=$F();o(l)}};this.canceled_?n(!1,new Lh(!1,null,!0)):this.backoffId_=ZF(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&e5(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Lh{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function s5(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function o5(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function a5(t,e){e&&(t["X-Firebase-GMPID"]=e)}function l5(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function u5(t,e,n,r,i,s,o=!0){const a=fP(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return a5(c,e),s5(c,n),o5(c,s),l5(c,r),new i5(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c5(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function f5(...t){const e=c5();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(H0())return new Blob(t);throw new Et(wt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function h5(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d5(t){if(typeof atob>"u")throw QF("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Mg{constructor(e,n){this.data=e,this.contentType=n||null}}function p5(t,e){switch(t){case Li.RAW:return new Mg(hP(e));case Li.BASE64:case Li.BASE64URL:return new Mg(dP(t,e));case Li.DATA_URL:return new Mg(g5(e),_5(e))}throw q0()}function hP(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function m5(t){let e;try{e=decodeURIComponent(t)}catch{throw xc(Li.DATA_URL,"Malformed data URL.")}return hP(e)}function dP(t,e){switch(t){case Li.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw xc(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Li.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw xc(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=d5(e)}catch(i){throw i.message.includes("polyfill")?i:xc(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class pP{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw xc(Li.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=y5(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function g5(t){const e=new pP(t);return e.base64?dP(Li.BASE64,e.rest):m5(e.rest)}function _5(t){return new pP(t).contentType}function y5(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,n){let r=0,i="";BT(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(BT(this.data_)){const r=this.data_,i=h5(r,e,n);return i===null?null:new qs(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new qs(r,!0)}}static getBlob(...e){if(H0()){const n=e.map(r=>r instanceof qs?r.data_:r);return new qs(f5.apply(null,n))}else{const n=e.map(o=>W0(o)?p5(Li.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new qs(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mP(t){let e;try{e=JSON.parse(t)}catch{return null}return n5(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v5(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function w5(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function gP(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E5(t,e){return e}class zn{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||E5}}let Vh=null;function T5(t){return!W0(t)||t.length<2?t:gP(t)}function _P(){if(Vh)return Vh;const t=[];t.push(new zn("bucket")),t.push(new zn("generation")),t.push(new zn("metageneration")),t.push(new zn("name","fullPath",!0));function e(s,o){return T5(o)}const n=new zn("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new zn("size");return i.xform=r,t.push(i),t.push(new zn("timeCreated")),t.push(new zn("updated")),t.push(new zn("md5Hash",null,!0)),t.push(new zn("cacheControl",null,!0)),t.push(new zn("contentDisposition",null,!0)),t.push(new zn("contentEncoding",null,!0)),t.push(new zn("contentLanguage",null,!0)),t.push(new zn("contentType",null,!0)),t.push(new zn("metadata","customMetadata",!0)),Vh=t,Vh}function I5(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Sr(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function S5(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return I5(r,t),r}function yP(t,e,n){const r=mP(e);return r===null?null:S5(t,r,n)}function x5(t,e,n,r){const i=mP(e);if(i===null||!W0(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const f=t.bucket,h=t.fullPath,p="/b/"+o(f)+"/o/"+o(h),m=G0(p,n,r),I=fP({alt:"media",token:c});return m+I})[0]}function b5(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class vP{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(t){if(!t)throw q0()}function k5(t,e){function n(r,i){const s=yP(t,i,e);return wP(s!==null),s}return n}function A5(t,e){function n(r,i){const s=yP(t,i,e);return wP(s!==null),x5(s,i,t.host,t._protocol)}return n}function EP(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=zF():i=UF():n.getStatus()===402?i=FF(t.bucket):n.getStatus()===403?i=BF(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function P5(t){const e=EP(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=jF(t.path)),s.serverResponse=i.serverResponse,s}return n}function C5(t,e,n){const r=e.fullServerUrl(),i=G0(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new vP(i,s,A5(t,n),o);return a.errorHandler=P5(e),a}function R5(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function N5(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=R5(null,e)),r}function O5(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let x="";for(let A=0;A<2;A++)x=x+Math.random().toString().slice(2);return x}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=N5(e,r,i),f=b5(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,p=`\r
--`+l+"--",m=qs.getBlob(h,r,p);if(m===null)throw KF();const I={name:c.fullPath},w=G0(s,t.host,t._protocol),b="POST",E=t.maxUploadRetryTime,v=new vP(w,b,k5(t,n),E);return v.urlParams=I,v.headers=o,v.body=m.uploadData(),v.errorHandler=EP(e),v}class D5{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=da.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=da.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=da.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw $u("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw $u("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw $u("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw $u("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw $u("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class M5 extends D5{initXhr(){this.xhr_.responseType="text"}}function TP(){return new M5}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n){this._service=e,n instanceof Sr?this._location=n:this._location=Sr.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Oa(e,n)}get root(){const e=new Sr(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return gP(this._location.path)}get storage(){return this._service}get parent(){const e=v5(this._location.path);if(e===null)return null;const n=new Sr(this._location.bucket,e);return new Oa(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw XF(e)}}function L5(t,e,n){t._throwIfRoot("uploadBytes");const r=O5(t.storage,t._location,_P(),new qs(e,!0),n);return t.storage.makeRequestWithTokens(r,TP).then(i=>({metadata:i,ref:t}))}function V5(t){t._throwIfRoot("getDownloadURL");const e=C5(t.storage,t._location,_P());return t.storage.makeRequestWithTokens(e,TP).then(n=>{if(n===null)throw YF();return n})}function j5(t,e){const n=w5(t._location.path,e),r=new Sr(t._location.bucket,n);return new Oa(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F5(t){return/^[A-Za-z]+:\/\//.test(t)}function U5(t,e){return new Oa(t,e)}function IP(t,e){if(t instanceof K0){const n=t;if(n._bucket==null)throw GF();const r=new Oa(n,n._bucket);return e!=null?IP(r,e):r}else return e!==void 0?j5(t,e):t}function z5(t,e){if(e&&F5(e)){if(t instanceof K0)return U5(t,e);throw Ty("To use ref(service, url), the first argument must be a Storage instance.")}else return IP(t,e)}function qT(t,e){const n=e==null?void 0:e[uP];return n==null?null:Sr.makeFromBucketSpec(n,t)}function B5(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:rk(i,t.app.options.projectId))}class K0{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=lP,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=LF,this._maxUploadRetryTime=VF,this._requests=new Set,i!=null?this._bucket=Sr.makeFromBucketSpec(i,this._host):this._bucket=qT(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Sr.makeFromBucketSpec(this._url,e):this._bucket=qT(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){$T("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){$T("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Oa(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new JF(cP());{const o=u5(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const WT="@firebase/storage",HT="0.12.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP="storage";function xP(t,e,n){return t=Pt(t),L5(t,e,n)}function bP(t){return t=Pt(t),V5(t)}function kP(t,e){return t=Pt(t),z5(t,e)}function $5(t=dm(),e){t=Pt(t);const r=Vo(t,SP).getImmediate({identifier:e}),i=ek("storage");return i&&q5(r,...i),r}function q5(t,e,n,r={}){B5(t,e,n,r)}function W5(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new K0(n,r,i,e,Ga)}function H5(){_i(new Zr(SP,W5,"PUBLIC").setMultipleInstances(!0)),lr(WT,HT,""),lr(WT,HT,"esm2017")}H5();function Y0(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function AP(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const G5=AP,PP=new Ha("auth","Firebase",AP());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp=new hm("@firebase/auth");function K5(t,...e){xp.logLevel<=Pe.WARN&&xp.warn(`Auth (${Ga}): ${t}`,...e)}function xd(t,...e){xp.logLevel<=Pe.ERROR&&xp.error(`Auth (${Ga}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t,...e){throw Q0(t,...e)}function qi(t,...e){return Q0(t,...e)}function CP(t,e,n){const r=Object.assign(Object.assign({},G5()),{[e]:n});return new Ha("auth","Firebase",r).create(e,{appName:t.name})}function ps(t){return CP(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Q0(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return PP.create(t,...e)}function ue(t,e,...n){if(!t)throw Q0(e,...n)}function ls(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xd(e),new Error(e)}function Ts(t,e){t||ls(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Y5(){return GT()==="http:"||GT()==="https:"}function GT(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q5(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Y5()||ik()||"connection"in navigator)?navigator.onLine:!0}function X5(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ts(n>e,"Short delay should be less than long delay!"),this.isMobile=AM()||CM()}get(){return Q5()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(t,e){Ts(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ls("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ls("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ls("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J5={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z5=new Wf(3e4,6e4);function jo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fo(t,e,n,r,i={}){return NP(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Vf(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),RP.fetch()(OP(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function NP(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},J5),e);try{const i=new tU(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw jh(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw jh(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw jh(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw jh(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw CP(t,f,c);vi(t,f)}}catch(i){if(i instanceof ti)throw i;vi(t,"network-request-failed",{message:String(i)})}}async function Hf(t,e,n,r,i={}){const s=await Fo(t,e,n,r,i);return"mfaPendingCredential"in s&&vi(t,"multi-factor-auth-required",{_serverResponse:s}),s}function OP(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?X0(t.config,i):`${t.config.apiScheme}://${i}`}function eU(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tU{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qi(this.auth,"network-request-failed")),Z5.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function jh(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=qi(t,e,r);return i.customData._tokenResponse=n,i}function KT(t){return t!==void 0&&t.enterprise!==void 0}class nU{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return eU(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function rU(t,e){return Fo(t,"GET","/v2/recaptchaConfig",jo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iU(t,e){return Fo(t,"POST","/v1/accounts:delete",e)}async function DP(t,e){return Fo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sU(t,e=!1){const n=Pt(t),r=await n.getIdToken(e),i=J0(r);ue(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:bc(Lg(i.auth_time)),issuedAtTime:bc(Lg(i.iat)),expirationTime:bc(Lg(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Lg(t){return Number(t)*1e3}function J0(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xd("JWT malformed, contained fewer than 3 sections"),null;try{const i=Jb(n);return i?JSON.parse(i):(xd("Failed to decode base64 JWT payload"),null)}catch(i){return xd("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function YT(t){const e=J0(t);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mf(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ti&&oU(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function oU({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aU{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bc(this.lastLoginAt),this.creationTime=bc(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bp(t){var e;const n=t.auth,r=await t.getIdToken(),i=await mf(t,DP(n,{idToken:r}));ue(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?MP(s.providerUserInfo):[],a=uU(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),f=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Sy(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function lU(t){const e=Pt(t);await bp(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uU(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function MP(t){return t.map(e=>{var{providerId:n}=e,r=Y0(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cU(t,e){const n=await NP(t,{},async()=>{const r=Vf({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=OP(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",RP.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function fU(t,e){return Fo(t,"POST","/v2/accounts:revokeToken",jo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):YT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ue(e.length!==0,"internal-error");const n=YT(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ue(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await cU(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Vl;return r&&(ue(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ue(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ue(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vl,this.toJSON())}_performRefresh(){return ls("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(t,e){ue(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class us{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Y0(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aU(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Sy(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await mf(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sU(this,e)}reload(){return lU(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new us(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await bp(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mi(this.auth.app))return Promise.reject(ps(this.auth));const e=await this.getIdToken();return await mf(this,iU(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:x,emailVerified:A,isAnonymous:O,providerData:D,stsTokenManager:T}=n;ue(x&&T,e,"internal-error");const y=Vl.fromJSON(this.name,T);ue(typeof x=="string",e,"internal-error"),Vs(h,e.name),Vs(p,e.name),ue(typeof A=="boolean",e,"internal-error"),ue(typeof O=="boolean",e,"internal-error"),Vs(m,e.name),Vs(I,e.name),Vs(w,e.name),Vs(b,e.name),Vs(E,e.name),Vs(v,e.name);const S=new us({uid:x,auth:e,email:p,emailVerified:A,displayName:h,isAnonymous:O,photoURL:I,phoneNumber:m,tenantId:w,stsTokenManager:y,createdAt:E,lastLoginAt:v});return D&&Array.isArray(D)&&(S.providerData=D.map(k=>Object.assign({},k))),b&&(S._redirectEventId=b),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new Vl;i.updateFromServerResponse(n);const s=new us({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await bp(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ue(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?MP(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Vl;a.updateFromIdToken(r);const l=new us({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Sy(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT=new Map;function cs(t){Ts(t instanceof Function,"Expected a class definition");let e=QT.get(t);return e?(Ts(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,QT.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}LP.type="NONE";const XT=LP;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(t,e,n){return`firebase:${t}:${e}:${n}`}class jl{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=bd(this.userKey,i.apiKey,s),this.fullPersistenceKey=bd("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?us._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new jl(cs(XT),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||cs(XT);const o=bd(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const f=await c._get(o);if(f){const h=us._fromJSON(e,f);c!==s&&(a=h),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new jl(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new jl(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(FP(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(VP(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zP(e))return"Blackberry";if(BP(e))return"Webos";if(Z0(e))return"Safari";if((e.includes("chrome/")||jP(e))&&!e.includes("edge/"))return"Chrome";if(UP(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function VP(t=mn()){return/firefox\//i.test(t)}function Z0(t=mn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jP(t=mn()){return/crios\//i.test(t)}function FP(t=mn()){return/iemobile/i.test(t)}function UP(t=mn()){return/android/i.test(t)}function zP(t=mn()){return/blackberry/i.test(t)}function BP(t=mn()){return/webos/i.test(t)}function Pm(t=mn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hU(t=mn()){var e;return Pm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dU(){return RM()&&document.documentMode===10}function $P(t=mn()){return Pm(t)||UP(t)||BP(t)||zP(t)||/windows phone/i.test(t)||FP(t)}function pU(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qP(t,e=[]){let n;switch(t){case"Browser":n=JT(mn());break;case"Worker":n=`${JT(mn())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ga}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mU{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gU(t,e={}){return Fo(t,"GET","/v2/passwordPolicy",jo(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _U=6;class yU{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:_U,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vU{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ZT(this),this.idTokenSubscription=new ZT(this),this.beforeStateQueue=new mU(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=PP,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=cs(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await jl.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await DP(this,{idToken:e}),r=await us._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Mi(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await bp(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=X5()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Mi(this.app))return Promise.reject(ps(this));const n=e?Pt(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Mi(this.app)?Promise.reject(ps(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Mi(this.app)?Promise.reject(ps(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(cs(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gU(this),n=new yU(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ha("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await fU(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&cs(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await jl.create(this,[cs(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qP(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&K5(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Qa(t){return Pt(t)}class ZT{constructor(e){this.auth=e,this.observer=null,this.addObserver=jM(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cm={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wU(t){Cm=t}function WP(t){return Cm.loadJS(t)}function EU(){return Cm.recaptchaEnterpriseScript}function TU(){return Cm.gapiScript}function IU(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const SU="recaptcha-enterprise",xU="NO_RECAPTCHA";class bU{constructor(e){this.type=SU,this.auth=Qa(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{rU(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new nU(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;KT(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(xU)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&KT(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=EU();l.length!==0&&(l+=a),WP(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function eI(t,e,n,r=!1){const i=new bU(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function xy(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await eI(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await eI(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kU(t,e){const n=Vo(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(af(s,e??{}))return i;vi(i,"already-initialized")}return n.initialize({options:e})}function AU(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(cs);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function PU(t,e,n){const r=Qa(t);ue(r._canInitEmulator,r,"emulator-config-failed"),ue(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=HP(e),{host:o,port:a}=CU(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),RU()}function HP(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function CU(t){const e=HP(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:tI(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:tI(o)}}}function tI(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function RU(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ls("not implemented")}_getIdTokenResponse(e){return ls("not implemented")}_linkToIdToken(e,n){return ls("not implemented")}_getReauthenticationResolver(e){return ls("not implemented")}}async function NU(t,e){return Fo(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OU(t,e){return Hf(t,"POST","/v1/accounts:signInWithPassword",jo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DU(t,e){return Hf(t,"POST","/v1/accounts:signInWithEmailLink",jo(t,e))}async function MU(t,e){return Hf(t,"POST","/v1/accounts:signInWithEmailLink",jo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf extends e1{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new gf(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new gf(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xy(e,n,"signInWithPassword",OU);case"emailLink":return DU(e,{email:this._email,oobCode:this._password});default:vi(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xy(e,r,"signUpPassword",NU);case"emailLink":return MU(e,{idToken:n,email:this._email,oobCode:this._password});default:vi(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fl(t,e){return Hf(t,"POST","/v1/accounts:signInWithIdp",jo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LU="http://localhost";class Da extends e1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Da(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):vi("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Y0(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Da(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Fl(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Fl(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fl(e,n)}buildRequest(){const e={requestUri:LU,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vf(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VU(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function jU(t){const e=Ju(Zu(t)).link,n=e?Ju(Zu(e)).deep_link_id:null,r=Ju(Zu(t)).deep_link_id;return(r?Ju(Zu(r)).link:null)||r||n||e||t}class t1{constructor(e){var n,r,i,s,o,a;const l=Ju(Zu(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,h=VU((i=l.mode)!==null&&i!==void 0?i:null);ue(c&&f&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=f,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=jU(e);try{return new t1(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(){this.providerId=Su.PROVIDER_ID}static credential(e,n){return gf._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=t1.parseLink(n);return ue(r,"argument-error"),gf._fromEmailAndCode(e,r.code,r.tenantId)}}Su.PROVIDER_ID="password";Su.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Su.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf extends GP{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws extends Gf{constructor(){super("facebook.com")}static credential(e){return Da._fromParams({providerId:Ws.PROVIDER_ID,signInMethod:Ws.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ws.credentialFromTaggedObject(e)}static credentialFromError(e){return Ws.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ws.credential(e.oauthAccessToken)}catch{return null}}}Ws.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ws.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs extends Gf{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Da._fromParams({providerId:Hs.PROVIDER_ID,signInMethod:Hs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Hs.credentialFromTaggedObject(e)}static credentialFromError(e){return Hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Hs.credential(n,r)}catch{return null}}}Hs.GOOGLE_SIGN_IN_METHOD="google.com";Hs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs extends Gf{constructor(){super("github.com")}static credential(e){return Da._fromParams({providerId:Gs.PROVIDER_ID,signInMethod:Gs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gs.credentialFromTaggedObject(e)}static credentialFromError(e){return Gs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gs.credential(e.oauthAccessToken)}catch{return null}}}Gs.GITHUB_SIGN_IN_METHOD="github.com";Gs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks extends Gf{constructor(){super("twitter.com")}static credential(e,n){return Da._fromParams({providerId:Ks.PROVIDER_ID,signInMethod:Ks.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ks.credentialFromTaggedObject(e)}static credentialFromError(e){return Ks.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ks.credential(n,r)}catch{return null}}}Ks.TWITTER_SIGN_IN_METHOD="twitter.com";Ks.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FU(t,e){return Hf(t,"POST","/v1/accounts:signUp",jo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await us._fromIdTokenResponse(e,r,i),o=nI(r);return new Ma({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=nI(r);return new Ma({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function nI(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp extends ti{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,kp.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new kp(e,n,r,i)}}function KP(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?kp._fromErrorAndOperation(t,s,e,r):s})}async function UU(t,e,n=!1){const r=await mf(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ma._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zU(t,e,n=!1){const{auth:r}=t;if(Mi(r.app))return Promise.reject(ps(r));const i="reauthenticate";try{const s=await mf(t,KP(r,i,e,t),n);ue(s.idToken,r,"internal-error");const o=J0(s.idToken);ue(o,r,"internal-error");const{sub:a}=o;return ue(t.uid===a,r,"user-mismatch"),Ma._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&vi(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YP(t,e,n=!1){if(Mi(t.app))return Promise.reject(ps(t));const r="signIn",i=await KP(t,r,e),s=await Ma._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function BU(t,e){return YP(Qa(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QP(t){const e=Qa(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $U(t,e,n){if(Mi(t.app))return Promise.reject(ps(t));const r=Qa(t),o=await xy(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",FU).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&QP(t),l}),a=await Ma._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function qU(t,e,n){return Mi(t.app)?Promise.reject(ps(t)):BU(Pt(t),Su.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&QP(t),r})}function WU(t,e,n,r){return Pt(t).onIdTokenChanged(e,n,r)}function HU(t,e,n){return Pt(t).beforeAuthStateChanged(e,n)}function XP(t,e,n,r){return Pt(t).onAuthStateChanged(e,n,r)}function GU(t){return Pt(t).signOut()}const Ap="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ap,"1"),this.storage.removeItem(Ap),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KU(){const t=mn();return Z0(t)||Pm(t)}const YU=1e3,QU=10;class ZP extends JP{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=KU()&&pU(),this.fallbackToPolling=$P(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);dU()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,QU):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},YU)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ZP.type="LOCAL";const XU=ZP;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC extends JP{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}eC.type="SESSION";const tC=eC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JU(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Rm(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await JU(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rm.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZU{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=n1("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const p=h;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(){return window}function e6(t){Wi().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(){return typeof Wi().WorkerGlobalScope<"u"&&typeof Wi().importScripts=="function"}async function t6(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function n6(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function r6(){return nC()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC="firebaseLocalStorageDb",i6=1,Pp="firebaseLocalStorage",iC="fbase_key";class Kf{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Nm(t,e){return t.transaction([Pp],e?"readwrite":"readonly").objectStore(Pp)}function s6(){const t=indexedDB.deleteDatabase(rC);return new Kf(t).toPromise()}function by(){const t=indexedDB.open(rC,i6);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Pp,{keyPath:iC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Pp)?e(r):(r.close(),await s6(),e(await by()))})})}async function rI(t,e,n){const r=Nm(t,!0).put({[iC]:e,value:n});return new Kf(r).toPromise()}async function o6(t,e){const n=Nm(t,!1).get(e),r=await new Kf(n).toPromise();return r===void 0?null:r.value}function iI(t,e){const n=Nm(t,!0).delete(e);return new Kf(n).toPromise()}const a6=800,l6=3;class sC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await by(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>l6)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rm._getInstance(r6()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await t6(),!this.activeServiceWorker)return;this.sender=new ZU(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||n6()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await by();return await rI(e,Ap,"1"),await iI(e,Ap),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>rI(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>o6(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>iI(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Nm(i,!1).getAll();return new Kf(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),a6)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sC.type="LOCAL";const u6=sC;new Wf(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c6(t,e){return e?cs(e):(ue(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1 extends e1{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fl(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fl(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fl(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function f6(t){return YP(t.auth,new r1(t),t.bypassAuthState)}function h6(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),zU(n,new r1(t),t.bypassAuthState)}async function d6(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),UU(n,new r1(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return f6;case"linkViaPopup":case"linkViaRedirect":return d6;case"reauthViaPopup":case"reauthViaRedirect":return h6;default:vi(this.auth,"internal-error")}}resolve(e){Ts(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ts(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p6=new Wf(2e3,1e4);class Il extends oC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Il.currentPopupAction&&Il.currentPopupAction.cancel(),Il.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){Ts(this.filter.length===1,"Popup operations only handle one event");const e=n1();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Il.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,p6.get())};e()}}Il.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m6="pendingRedirect",kd=new Map;class g6 extends oC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=kd.get(this.auth._key());if(!e){try{const r=await _6(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}kd.set(this.auth._key(),e)}return this.bypassAuthState||kd.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _6(t,e){const n=w6(e),r=v6(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function y6(t,e){kd.set(t._key(),e)}function v6(t){return cs(t._redirectPersistence)}function w6(t){return bd(m6,t.config.apiKey,t.name)}async function E6(t,e,n=!1){if(Mi(t.app))return Promise.reject(ps(t));const r=Qa(t),i=c6(r,e),o=await new g6(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T6=10*60*1e3;class I6{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!S6(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!aC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(qi(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=T6&&this.cachedEventUids.clear(),this.cachedEventUids.has(sI(e))}saveEventToCache(e){this.cachedEventUids.add(sI(e)),this.lastProcessedEventTime=Date.now()}}function sI(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function aC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function S6(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return aC(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x6(t,e={}){return Fo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b6=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,k6=/^https?/;async function A6(t){if(t.config.emulator)return;const{authorizedDomains:e}=await x6(t);for(const n of e)try{if(P6(n))return}catch{}vi(t,"unauthorized-domain")}function P6(t){const e=Iy(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!k6.test(n))return!1;if(b6.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C6=new Wf(3e4,6e4);function oI(){const t=Wi().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function R6(t){return new Promise((e,n)=>{var r,i,s;function o(){oI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{oI(),n(qi(t,"network-request-failed"))},timeout:C6.get()})}if(!((i=(r=Wi().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Wi().gapi)===null||s===void 0)&&s.load)o();else{const a=IU("iframefcb");return Wi()[a]=()=>{gapi.load?o():n(qi(t,"network-request-failed"))},WP(`${TU()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ad=null,e})}let Ad=null;function N6(t){return Ad=Ad||R6(t),Ad}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O6=new Wf(5e3,15e3),D6="__/auth/iframe",M6="emulator/auth/iframe",L6={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},V6=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function j6(t){const e=t.config;ue(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?X0(e,M6):`https://${t.config.authDomain}/${D6}`,r={apiKey:e.apiKey,appName:t.name,v:Ga},i=V6.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Vf(r).slice(1)}`}async function F6(t){const e=await N6(t),n=Wi().gapi;return ue(n,t,"internal-error"),e.open({where:document.body,url:j6(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:L6,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=qi(t,"network-request-failed"),a=Wi().setTimeout(()=>{s(o)},O6.get());function l(){Wi().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U6={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},z6=500,B6=600,$6="_blank",q6="http://localhost";class aI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function W6(t,e,n,r=z6,i=B6){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},U6),{width:r.toString(),height:i.toString(),top:s,left:o}),c=mn().toLowerCase();n&&(a=jP(c)?$6:n),VP(c)&&(e=e||q6,l.scrollbars="yes");const f=Object.entries(l).reduce((p,[m,I])=>`${p}${m}=${I},`,"");if(hU(c)&&a!=="_self")return H6(e||"",a),new aI(null);const h=window.open(e||"",a,f);ue(h,t,"popup-blocked");try{h.focus()}catch{}return new aI(h)}function H6(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G6="__/auth/handler",K6="emulator/auth/handler",Y6=encodeURIComponent("fac");async function lI(t,e,n,r,i,s){ue(t.config.authDomain,t,"auth-domain-config-required"),ue(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ga,eventId:i};if(e instanceof GP){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",VM(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,h]of Object.entries({}))o[f]=h}if(e instanceof Gf){const f=e.getScopes().filter(h=>h!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await t._getAppCheckToken(),c=l?`#${Y6}=${encodeURIComponent(l)}`:"";return`${Q6(t)}?${Vf(a).slice(1)}${c}`}function Q6({config:t}){return t.emulator?X0(t,K6):`https://${t.authDomain}/${G6}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="webStorageSupport";class X6{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tC,this._completeRedirectFn=E6,this._overrideRedirectResult=y6}async _openPopup(e,n,r,i){var s;Ts((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await lI(e,n,r,Iy(),i);return W6(e,o,n1())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await lI(e,n,r,Iy(),i);return e6(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ts(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await F6(e),r=new I6(e);return n.register("authEvent",i=>(ue(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vg,{type:Vg},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Vg];o!==void 0&&n(!!o),vi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=A6(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $P()||Z0()||Pm()}}const J6=X6;var uI="@firebase/auth",cI="1.7.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z6{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e9(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function t9(t){_i(new Zr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qP(t)},c=new vU(r,i,s,l);return AU(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_i(new Zr("auth-internal",e=>{const n=Qa(e.getProvider("auth").getImmediate());return(r=>new Z6(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),lr(uI,cI,e9(t)),lr(uI,cI,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n9=5*60,r9=nk("authIdTokenMaxAge")||n9;let fI=null;const i9=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>r9)return;const i=n==null?void 0:n.token;fI!==i&&(fI=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function s9(t=dm()){const e=Vo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kU(t,{popupRedirectResolver:J6,persistence:[u6,XU,tC]}),r=nk("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=i9(s.toString());HU(n,o,()=>o(n.currentUser)),WU(n,a=>o(a))}}const i=Zb("auth");return i&&PU(n,`http://${i}`),n}function o9(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}wU({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=qi("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",o9().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});t9("Browser");const lC={apiKey:"AIzaSyDYReHFx4qqPPNtvUmSHaSsddnCskGEGm4",authDomain:"babydiva-f620c.firebaseapp.com",projectId:"babydiva-f620c",storageBucket:"babydiva-f620c.appspot.com",messagingSenderId:"34514054268",appId:"1:34514054268:web:a2b94828e9cfc9e4106df9",measurementId:"G-E8MY9QDGTG"};let qu,Yf,i1,au;const a9=()=>Object.values(lC).every(t=>t!==void 0),uC=()=>{a9()?(console.log("Firebase configuration is present. Initializing Firebase..."),qu=ck(lC),EV(qu),Yf=mF(qu),i1=$5(qu),au=s9(qu),console.log("Firebase initialized successfully.")):(console.error("Missing Firebase configuration. Retrying..."),setTimeout(uC,1e3))};uC();const cC=async()=>{try{const t=km(Yf,"products");return(await oP(t)).docs.map(r=>{const i=r.data();return{id:i["product-id"],...i}})}catch(t){return console.error("Error fetching products:",t),[]}};function hI(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function K(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?hI(Object(n),!0).forEach(function(r){Wt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):hI(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Cp(t){"@babel/helpers - typeof";return Cp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Cp(t)}function l9(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u9(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c9(t,e,n){return e&&u9(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Wt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s1(t,e){return h9(t)||p9(t,e)||fC(t,e)||g9()}function Qf(t){return f9(t)||d9(t)||fC(t)||m9()}function f9(t){if(Array.isArray(t))return ky(t)}function h9(t){if(Array.isArray(t))return t}function d9(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function p9(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function fC(t,e){if(t){if(typeof t=="string")return ky(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ky(t,e)}}function ky(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function m9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g9(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var dI=function(){},o1={},hC={},dC=null,pC={mark:dI,measure:dI};try{typeof window<"u"&&(o1=window),typeof document<"u"&&(hC=document),typeof MutationObserver<"u"&&(dC=MutationObserver),typeof performance<"u"&&(pC=performance)}catch{}var _9=o1.navigator||{},pI=_9.userAgent,mI=pI===void 0?"":pI,bo=o1,rt=hC,gI=dC,Fh=pC;bo.document;var Ps=!!rt.documentElement&&!!rt.head&&typeof rt.addEventListener=="function"&&typeof rt.createElement=="function",mC=~mI.indexOf("MSIE")||~mI.indexOf("Trident/"),Uh,zh,Bh,$h,qh,Is="___FONT_AWESOME___",Ay=16,gC="fa",_C="svg-inline--fa",La="data-fa-i2svg",Py="data-fa-pseudo-element",y9="data-fa-pseudo-element-pending",a1="data-prefix",l1="data-icon",_I="fontawesome-i2svg",v9="async",w9=["HTML","HEAD","STYLE","SCRIPT"],yC=function(){try{return!0}catch{return!1}}(),et="classic",yt="sharp",u1=[et,yt];function Xf(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[et]}})}var _f=Xf((Uh={},Wt(Uh,et,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Wt(Uh,yt,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Uh)),yf=Xf((zh={},Wt(zh,et,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Wt(zh,yt,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),zh)),vf=Xf((Bh={},Wt(Bh,et,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Wt(Bh,yt,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Bh)),E9=Xf(($h={},Wt($h,et,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Wt($h,yt,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),$h)),T9=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,vC="fa-layers-text",I9=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,S9=Xf((qh={},Wt(qh,et,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Wt(qh,yt,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),qh)),wC=[1,2,3,4,5,6,7,8,9,10],x9=wC.concat([11,12,13,14,15,16,17,18,19,20]),b9=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],sa={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},wf=new Set;Object.keys(yf[et]).map(wf.add.bind(wf));Object.keys(yf[yt]).map(wf.add.bind(wf));var k9=[].concat(u1,Qf(wf),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",sa.GROUP,sa.SWAP_OPACITY,sa.PRIMARY,sa.SECONDARY]).concat(wC.map(function(t){return"".concat(t,"x")})).concat(x9.map(function(t){return"w-".concat(t)})),kc=bo.FontAwesomeConfig||{};function A9(t){var e=rt.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function P9(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(rt&&typeof rt.querySelector=="function"){var C9=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];C9.forEach(function(t){var e=s1(t,2),n=e[0],r=e[1],i=P9(A9(n));i!=null&&(kc[r]=i)})}var EC={styleDefault:"solid",familyDefault:"classic",cssPrefix:gC,replacementClass:_C,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};kc.familyPrefix&&(kc.cssPrefix=kc.familyPrefix);var lu=K(K({},EC),kc);lu.autoReplaceSvg||(lu.observeMutations=!1);var ee={};Object.keys(EC).forEach(function(t){Object.defineProperty(ee,t,{enumerable:!0,set:function(n){lu[t]=n,Ac.forEach(function(r){return r(ee)})},get:function(){return lu[t]}})});Object.defineProperty(ee,"familyPrefix",{enumerable:!0,set:function(e){lu.cssPrefix=e,Ac.forEach(function(n){return n(ee)})},get:function(){return lu.cssPrefix}});bo.FontAwesomeConfig=ee;var Ac=[];function R9(t){return Ac.push(t),function(){Ac.splice(Ac.indexOf(t),1)}}var js=Ay,Vi={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function N9(t){if(!(!t||!Ps)){var e=rt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=rt.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return rt.head.insertBefore(e,r),t}}var O9="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ef(){for(var t=12,e="";t-- >0;)e+=O9[Math.random()*62|0];return e}function xu(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function c1(t){return t.classList?xu(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function TC(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function D9(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(TC(t[n]),'" ')},"").trim()}function Om(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function f1(t){return t.size!==Vi.size||t.x!==Vi.x||t.y!==Vi.y||t.rotate!==Vi.rotate||t.flipX||t.flipY}function M9(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function L9(t){var e=t.transform,n=t.width,r=n===void 0?Ay:n,i=t.height,s=i===void 0?Ay:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&mC?l+="translate(".concat(e.x/js-r/2,"em, ").concat(e.y/js-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/js,"em), calc(-50% + ").concat(e.y/js,"em)) "):l+="translate(".concat(e.x/js,"em, ").concat(e.y/js,"em) "),l+="scale(".concat(e.size/js*(e.flipX?-1:1),", ").concat(e.size/js*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var V9=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function IC(){var t=gC,e=_C,n=ee.cssPrefix,r=ee.replacementClass,i=V9;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var yI=!1;function jg(){ee.autoAddCss&&!yI&&(N9(IC()),yI=!0)}var j9={mixout:function(){return{dom:{css:IC,insertCss:jg}}},hooks:function(){return{beforeDOMElementCreation:function(){jg()},beforeI2svg:function(){jg()}}}},Ss=bo||{};Ss[Is]||(Ss[Is]={});Ss[Is].styles||(Ss[Is].styles={});Ss[Is].hooks||(Ss[Is].hooks={});Ss[Is].shims||(Ss[Is].shims=[]);var di=Ss[Is],SC=[],F9=function t(){rt.removeEventListener("DOMContentLoaded",t),Rp=1,SC.map(function(e){return e()})},Rp=!1;Ps&&(Rp=(rt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(rt.readyState),Rp||rt.addEventListener("DOMContentLoaded",F9));function U9(t){Ps&&(Rp?setTimeout(t,0):SC.push(t))}function Jf(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?TC(t):"<".concat(e," ").concat(D9(r),">").concat(s.map(Jf).join(""),"</").concat(e,">")}function vI(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Fg=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=n,l,c,f;for(r===void 0?(l=1,f=e[s[0]]):(l=0,f=r);l<o;l++)c=s[l],f=a(f,e[c],c,e);return f};function z9(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Cy(t){var e=z9(t);return e.length===1?e[0].toString(16):null}function B9(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function wI(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Ry(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=wI(e);typeof di.hooks.addPack=="function"&&!i?di.hooks.addPack(t,wI(e)):di.styles[t]=K(K({},di.styles[t]||{}),s),t==="fas"&&Ry("fa",e)}var Wh,Hh,Gh,Sl=di.styles,$9=di.shims,q9=(Wh={},Wt(Wh,et,Object.values(vf[et])),Wt(Wh,yt,Object.values(vf[yt])),Wh),h1=null,xC={},bC={},kC={},AC={},PC={},W9=(Hh={},Wt(Hh,et,Object.keys(_f[et])),Wt(Hh,yt,Object.keys(_f[yt])),Hh);function H9(t){return~k9.indexOf(t)}function G9(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!H9(i)?i:null}var CC=function(){var e=function(s){return Fg(Sl,function(o,a,l){return o[l]=Fg(a,s,{}),o},{})};xC=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),bC=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),PC=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Sl||ee.autoFetchSvg,r=Fg($9,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});kC=r.names,AC=r.unicodes,h1=Dm(ee.styleDefault,{family:ee.familyDefault})};R9(function(t){h1=Dm(t.styleDefault,{family:ee.familyDefault})});CC();function d1(t,e){return(xC[t]||{})[e]}function K9(t,e){return(bC[t]||{})[e]}function oa(t,e){return(PC[t]||{})[e]}function RC(t){return kC[t]||{prefix:null,iconName:null}}function Y9(t){var e=AC[t],n=d1("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ko(){return h1}var p1=function(){return{prefix:null,iconName:null,rest:[]}};function Dm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?et:n,i=_f[r][t],s=yf[r][t]||yf[r][i],o=t in di.styles?t:null;return s||o||null}var EI=(Gh={},Wt(Gh,et,Object.keys(vf[et])),Wt(Gh,yt,Object.keys(vf[yt])),Gh);function Mm(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Wt(e,et,"".concat(ee.cssPrefix,"-").concat(et)),Wt(e,yt,"".concat(ee.cssPrefix,"-").concat(yt)),e),o=null,a=et;(t.includes(s[et])||t.some(function(c){return EI[et].includes(c)}))&&(a=et),(t.includes(s[yt])||t.some(function(c){return EI[yt].includes(c)}))&&(a=yt);var l=t.reduce(function(c,f){var h=G9(ee.cssPrefix,f);if(Sl[f]?(f=q9[a].includes(f)?E9[a][f]:f,o=f,c.prefix=f):W9[a].indexOf(f)>-1?(o=f,c.prefix=Dm(f,{family:a})):h?c.iconName=h:f!==ee.replacementClass&&f!==s[et]&&f!==s[yt]&&c.rest.push(f),!i&&c.prefix&&c.iconName){var p=o==="fa"?RC(c.iconName):{},m=oa(c.prefix,c.iconName);p.prefix&&(o=null),c.iconName=p.iconName||m||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!Sl.far&&Sl.fas&&!ee.autoFetchSvg&&(c.prefix="fas")}return c},p1());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===yt&&(Sl.fass||ee.autoFetchSvg)&&(l.prefix="fass",l.iconName=oa(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=ko()||"fas"),l}var Q9=function(){function t(){l9(this,t),this.definitions={}}return c9(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=K(K({},n.definitions[a]||{}),o[a]),Ry(a,o[a]);var l=vf[et][a];l&&Ry(l,o[a]),CC()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[a]||(n[a]={}),f.length>0&&f.forEach(function(h){typeof h=="string"&&(n[a][h]=c)}),n[a][l]=c}),n}}]),t}(),TI=[],xl={},Ul={},X9=Object.keys(Ul);function J9(t,e){var n=e.mixoutsTo;return TI=t,xl={},Object.keys(Ul).forEach(function(r){X9.indexOf(r)===-1&&delete Ul[r]}),TI.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Cp(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){xl[o]||(xl[o]=[]),xl[o].push(s[o])})}r.provides&&r.provides(Ul)}),n}function Ny(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=xl[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Va(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=xl[t]||[];i.forEach(function(s){s.apply(null,n)})}function xs(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ul[t]?Ul[t].apply(null,e):void 0}function Oy(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||ko();if(e)return e=oa(n,e)||e,vI(NC.definitions,n,e)||vI(di.styles,n,e)}var NC=new Q9,Z9=function(){ee.autoReplaceSvg=!1,ee.observeMutations=!1,Va("noAuto")},ez={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ps?(Va("beforeI2svg",e),xs("pseudoElements2svg",e),xs("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;ee.autoReplaceSvg===!1&&(ee.autoReplaceSvg=!0),ee.observeMutations=!0,U9(function(){nz({autoReplaceSvgRoot:n}),Va("watch",e)})}},tz={icon:function(e){if(e===null)return null;if(Cp(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:oa(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Dm(e[0]);return{prefix:r,iconName:oa(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(ee.cssPrefix,"-"))>-1||e.match(T9))){var i=Mm(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||ko(),iconName:oa(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=ko();return{prefix:s,iconName:oa(s,e)||e}}}},Or={noAuto:Z9,config:ee,dom:ez,parse:tz,library:NC,findIconDefinition:Oy,toHtml:Jf},nz=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?rt:n;(Object.keys(di.styles).length>0||ee.autoFetchSvg)&&Ps&&ee.autoReplaceSvg&&Or.dom.i2svg({node:r})};function Lm(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Jf(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Ps){var r=rt.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function rz(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(f1(o)&&n.found&&!r.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};i.style=Om(K(K({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function iz(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(ee.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:K(K({},i),{},{id:o}),children:r}]}]}function m1(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,f=t.titleId,h=t.extra,p=t.watchable,m=p===void 0?!1:p,I=r.found?r:n,w=I.width,b=I.height,E=i==="fak",v=[ee.replacementClass,s?"".concat(ee.cssPrefix,"-").concat(s):""].filter(function(S){return h.classes.indexOf(S)===-1}).filter(function(S){return S!==""||!!S}).concat(h.classes).join(" "),x={children:[],attributes:K(K({},h.attributes),{},{"data-prefix":i,"data-icon":s,class:v,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(b)})},A=E&&!~h.classes.indexOf("fa-fw")?{width:"".concat(w/b*16*.0625,"em")}:{};m&&(x.attributes[La]=""),l&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(f||Ef())},children:[l]}),delete x.attributes.title);var O=K(K({},x),{},{prefix:i,iconName:s,main:n,mask:r,maskId:c,transform:o,symbol:a,styles:K(K({},A),h.styles)}),D=r.found&&n.found?xs("generateAbstractMask",O)||{children:[],attributes:{}}:xs("generateAbstractIcon",O)||{children:[],attributes:{}},T=D.children,y=D.attributes;return O.children=T,O.attributes=y,a?iz(O):rz(O)}function II(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=K(K(K({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(c[La]="");var f=K({},o.styles);f1(i)&&(f.transform=L9({transform:i,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var h=Om(f);h.length>0&&(c.style=h);var p=[];return p.push({tag:"span",attributes:c,children:[e]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function sz(t){var e=t.content,n=t.title,r=t.extra,i=K(K(K({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Om(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ug=di.styles;function Dy(t){var e=t[0],n=t[1],r=t.slice(4),i=s1(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(ee.cssPrefix,"-").concat(sa.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ee.cssPrefix,"-").concat(sa.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(ee.cssPrefix,"-").concat(sa.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var oz={found:!1,width:512,height:512};function az(t,e){!yC&&!ee.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function My(t,e){var n=e;return e==="fa"&&ee.styleDefault!==null&&(e=ko()),new Promise(function(r,i){if(xs("missingIconAbstract"),n==="fa"){var s=RC(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Ug[e]&&Ug[e][t]){var o=Ug[e][t];return r(Dy(o))}az(t,e),r(K(K({},oz),{},{icon:ee.showMissingIcons&&t?xs("missingIconAbstract")||{}:{}}))})}var SI=function(){},Ly=ee.measurePerformance&&Fh&&Fh.mark&&Fh.measure?Fh:{mark:SI,measure:SI},rc='FA "6.5.2"',lz=function(e){return Ly.mark("".concat(rc," ").concat(e," begins")),function(){return OC(e)}},OC=function(e){Ly.mark("".concat(rc," ").concat(e," ends")),Ly.measure("".concat(rc," ").concat(e),"".concat(rc," ").concat(e," begins"),"".concat(rc," ").concat(e," ends"))},g1={begin:lz,end:OC},Pd=function(){};function xI(t){var e=t.getAttribute?t.getAttribute(La):null;return typeof e=="string"}function uz(t){var e=t.getAttribute?t.getAttribute(a1):null,n=t.getAttribute?t.getAttribute(l1):null;return e&&n}function cz(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(ee.replacementClass)}function fz(){if(ee.autoReplaceSvg===!0)return Cd.replace;var t=Cd[ee.autoReplaceSvg];return t||Cd.replace}function hz(t){return rt.createElementNS("http://www.w3.org/2000/svg",t)}function dz(t){return rt.createElement(t)}function DC(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?hz:dz:n;if(typeof t=="string")return rt.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(DC(o,{ceFn:r}))}),i}function pz(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Cd={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(DC(i),n)}),n.getAttribute(La)===null&&ee.keepOriginalSource){var r=rt.createComment(pz(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~c1(n).indexOf(ee.replacementClass))return Cd.replace(e);var i=new RegExp("".concat(ee.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===ee.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Jf(a)}).join(`
`);n.setAttribute(La,""),n.innerHTML=o}};function bI(t){t()}function MC(t,e){var n=typeof e=="function"?e:Pd;if(t.length===0)n();else{var r=bI;ee.mutateApproach===v9&&(r=bo.requestAnimationFrame||bI),r(function(){var i=fz(),s=g1.begin("mutate");t.map(i),s(),n()})}}var _1=!1;function LC(){_1=!0}function Vy(){_1=!1}var Np=null;function kI(t){if(gI&&ee.observeMutations){var e=t.treeCallback,n=e===void 0?Pd:e,r=t.nodeCallback,i=r===void 0?Pd:r,s=t.pseudoElementsCallback,o=s===void 0?Pd:s,a=t.observeMutationsRoot,l=a===void 0?rt:a;Np=new gI(function(c){if(!_1){var f=ko();xu(c).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!xI(h.addedNodes[0])&&(ee.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&ee.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&xI(h.target)&&~b9.indexOf(h.attributeName))if(h.attributeName==="class"&&uz(h.target)){var p=Mm(c1(h.target)),m=p.prefix,I=p.iconName;h.target.setAttribute(a1,m||f),I&&h.target.setAttribute(l1,I)}else cz(h.target)&&i(h.target)})}}),Ps&&Np.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function mz(){Np&&Np.disconnect()}function gz(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function _z(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Mm(c1(t));return i.prefix||(i.prefix=ko()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=K9(i.prefix,t.innerText)||d1(i.prefix,Cy(t.innerText))),!i.iconName&&ee.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function yz(t){var e=xu(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return ee.autoA11y&&(n?e["aria-labelledby"]="".concat(ee.replacementClass,"-title-").concat(r||Ef()):(e["aria-hidden"]="true",e.focusable="false")),e}function vz(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Vi,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function AI(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=_z(t),r=n.iconName,i=n.prefix,s=n.rest,o=yz(t),a=Ny("parseNodeAttributes",{},t),l=e.styleParser?gz(t):[];return K({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Vi,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var wz=di.styles;function VC(t){var e=ee.autoReplaceSvg==="nest"?AI(t,{styleParser:!1}):AI(t);return~e.extra.classes.indexOf(vC)?xs("generateLayersText",t,e):xs("generateSvgReplacementMutation",t,e)}var Ao=new Set;u1.map(function(t){Ao.add("fa-".concat(t))});Object.keys(_f[et]).map(Ao.add.bind(Ao));Object.keys(_f[yt]).map(Ao.add.bind(Ao));Ao=Qf(Ao);function PI(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ps)return Promise.resolve();var n=rt.documentElement.classList,r=function(h){return n.add("".concat(_I,"-").concat(h))},i=function(h){return n.remove("".concat(_I,"-").concat(h))},s=ee.autoFetchSvg?Ao:u1.map(function(f){return"fa-".concat(f)}).concat(Object.keys(wz));s.includes("fa")||s.push("fa");var o=[".".concat(vC,":not([").concat(La,"])")].concat(s.map(function(f){return".".concat(f,":not([").concat(La,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=xu(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=g1.begin("onTree"),c=a.reduce(function(f,h){try{var p=VC(h);p&&f.push(p)}catch(m){yC||m.name==="MissingIcon"&&console.error(m)}return f},[]);return new Promise(function(f,h){Promise.all(c).then(function(p){MC(p,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),f()})}).catch(function(p){l(),h(p)})})}function Ez(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;VC(t).then(function(n){n&&MC([n],e)})}function Tz(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Oy(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Oy(i||{})),t(r,K(K({},n),{},{mask:i}))}}var Iz=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Vi:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,c=n.maskId,f=c===void 0?null:c,h=n.title,p=h===void 0?null:h,m=n.titleId,I=m===void 0?null:m,w=n.classes,b=w===void 0?[]:w,E=n.attributes,v=E===void 0?{}:E,x=n.styles,A=x===void 0?{}:x;if(e){var O=e.prefix,D=e.iconName,T=e.icon;return Lm(K({type:"icon"},e),function(){return Va("beforeDOMElementCreation",{iconDefinition:e,params:n}),ee.autoA11y&&(p?v["aria-labelledby"]="".concat(ee.replacementClass,"-title-").concat(I||Ef()):(v["aria-hidden"]="true",v.focusable="false")),m1({icons:{main:Dy(T),mask:l?Dy(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:D,transform:K(K({},Vi),i),symbol:o,title:p,maskId:f,titleId:I,extra:{attributes:v,styles:A,classes:b}})})}},Sz={mixout:function(){return{icon:Tz(Iz)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=PI,n.nodeCallback=Ez,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?rt:r,s=n.callback,o=s===void 0?function(){}:s;return PI(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,c=r.symbol,f=r.mask,h=r.maskId,p=r.extra;return new Promise(function(m,I){Promise.all([My(i,a),f.iconName?My(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var b=s1(w,2),E=b[0],v=b[1];m([n,m1({icons:{main:E,mask:v},prefix:a,iconName:i,transform:l,symbol:c,maskId:h,title:s,titleId:o,extra:p,watchable:!0})])}).catch(I)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Om(a);l.length>0&&(i.style=l);var c;return f1(o)&&(c=xs("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(c||s.icon),{children:r,attributes:i}}}},xz={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Lm({type:"layer"},function(){Va("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(ee.cssPrefix,"-layers")].concat(Qf(s)).join(" ")},children:o}]})}}}},bz={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,h=f===void 0?{}:f;return Lm({type:"counter",content:n},function(){return Va("beforeDOMElementCreation",{content:n,params:r}),sz({content:n.toString(),title:s,extra:{attributes:c,styles:h,classes:["".concat(ee.cssPrefix,"-layers-counter")].concat(Qf(a))}})})}}}},kz={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Vi:i,o=r.title,a=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,f=r.attributes,h=f===void 0?{}:f,p=r.styles,m=p===void 0?{}:p;return Lm({type:"text",content:n},function(){return Va("beforeDOMElementCreation",{content:n,params:r}),II({content:n,transform:K(K({},Vi),s),title:a,extra:{attributes:h,styles:m,classes:["".concat(ee.cssPrefix,"-layers-text")].concat(Qf(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(mC){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();a=f.width/c,l=f.height/c}return ee.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,II({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},Az=new RegExp('"',"ug"),CI=[1105920,1112319];function Pz(t){var e=t.replace(Az,""),n=B9(e,0),r=n>=CI[0]&&n<=CI[1],i=e.length===2?e[0]===e[1]:!1;return{value:Cy(i?e[0]:e),isSecondary:r||i}}function RI(t,e){var n="".concat(y9).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=xu(t.children),o=s.filter(function(T){return T.getAttribute(Py)===e})[0],a=bo.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(I9),c=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&f!=="none"&&f!==""){var h=a.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?yt:et,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?yf[p][l[2].toLowerCase()]:S9[p][c],I=Pz(h),w=I.value,b=I.isSecondary,E=l[0].startsWith("FontAwesome"),v=d1(m,w),x=v;if(E){var A=Y9(w);A.iconName&&A.prefix&&(v=A.iconName,m=A.prefix)}if(v&&!b&&(!o||o.getAttribute(a1)!==m||o.getAttribute(l1)!==x)){t.setAttribute(n,x),o&&t.removeChild(o);var O=vz(),D=O.extra;D.attributes[Py]=e,My(v,m).then(function(T){var y=m1(K(K({},O),{},{icons:{main:T,mask:p1()},prefix:m,iconName:x,extra:D,watchable:!0})),S=rt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(S,t.firstChild):t.appendChild(S),S.outerHTML=y.map(function(k){return Jf(k)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Cz(t){return Promise.all([RI(t,"::before"),RI(t,"::after")])}function Rz(t){return t.parentNode!==document.head&&!~w9.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Py)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function NI(t){if(Ps)return new Promise(function(e,n){var r=xu(t.querySelectorAll("*")).filter(Rz).map(Cz),i=g1.begin("searchPseudoElements");LC(),Promise.all(r).then(function(){i(),Vy(),e()}).catch(function(){i(),Vy(),n()})})}var Nz={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=NI,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?rt:r;ee.searchPseudoElements&&NI(i)}}},OI=!1,Oz={mixout:function(){return{dom:{unwatch:function(){LC(),OI=!0}}}},hooks:function(){return{bootstrap:function(){kI(Ny("mutationObserverCallbacks",{}))},noAuto:function(){mz()},watch:function(n){var r=n.observeMutationsRoot;OI?Vy():kI(Ny("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},DI=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},Dz={mixout:function(){return{parse:{transform:function(n){return DI(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=DI(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(l," ").concat(c," ").concat(f)},p={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:h,path:p};return{tag:"g",attributes:K({},m.outer),children:[{tag:"g",attributes:K({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:K(K({},r.icon.attributes),m.path)}]}]}}}},zg={x:0,y:0,width:"100%",height:"100%"};function MI(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Mz(t){return t.tag==="g"?t.children:[t]}var Lz={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Mm(i.split(" ").map(function(o){return o.trim()})):p1();return s.prefix||(s.prefix=ko()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,c=s.width,f=s.icon,h=o.width,p=o.icon,m=M9({transform:l,containerWidth:h,iconWidth:c}),I={tag:"rect",attributes:K(K({},zg),{},{fill:"white"})},w=f.children?{children:f.children.map(MI)}:{},b={tag:"g",attributes:K({},m.inner),children:[MI(K({tag:f.tag,attributes:K(K({},f.attributes),m.path)},w))]},E={tag:"g",attributes:K({},m.outer),children:[b]},v="mask-".concat(a||Ef()),x="clip-".concat(a||Ef()),A={tag:"mask",attributes:K(K({},zg),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[I,E]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:Mz(p)},A]};return r.push(O,{tag:"rect",attributes:K({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(v,")")},zg)}),{children:r,attributes:i}}}},Vz={provides:function(e){var n=!1;bo.matchMedia&&(n=bo.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:K(K({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=K(K({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:K(K({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:K(K({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:K(K({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:K(K({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:K(K({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:K(K({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:K(K({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},jz={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},Fz=[j9,Sz,xz,bz,kz,Nz,Oz,Dz,Lz,Vz,jz];J9(Fz,{mixoutsTo:Or});Or.noAuto;Or.config;Or.library;Or.dom;var jy=Or.parse;Or.findIconDefinition;Or.toHtml;var Uz=Or.icon;Or.layer;Or.text;Or.counter;var jC={exports:{}},zz="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Bz=zz,$z=Bz;function FC(){}function UC(){}UC.resetWarningCache=FC;var qz=function(){function t(r,i,s,o,a,l){if(l!==$z){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:UC,resetWarningCache:FC};return n.PropTypes=n,n};jC.exports=qz();var Wz=jC.exports;const W=xS(Wz);function LI(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Ni(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?LI(Object(n),!0).forEach(function(r){bl(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):LI(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Op(t){"@babel/helpers - typeof";return Op=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Op(t)}function bl(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Hz(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Gz(t,e){if(t==null)return{};var n=Hz(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Fy(t){return Kz(t)||Yz(t)||Qz(t)||Xz()}function Kz(t){if(Array.isArray(t))return Uy(t)}function Yz(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Qz(t,e){if(t){if(typeof t=="string")return Uy(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Uy(t,e)}}function Uy(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Xz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jz(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,c=t.spinPulse,f=t.spinReverse,h=t.pulse,p=t.fixedWidth,m=t.inverse,I=t.border,w=t.listItem,b=t.flip,E=t.size,v=t.rotation,x=t.pull,A=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":h,"fa-fw":p,"fa-inverse":m,"fa-border":I,"fa-li":w,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},bl(e,"fa-".concat(E),typeof E<"u"&&E!==null),bl(e,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),bl(e,"fa-pull-".concat(x),typeof x<"u"&&x!==null),bl(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(A).map(function(O){return A[O]?O:null}).filter(function(O){return O})}function Zz(t){return t=t-0,t===t}function zC(t){return Zz(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var eB=["style"];function tB(t){return t.charAt(0).toUpperCase()+t.slice(1)}function nB(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=zC(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[tB(i)]=s:e[i]=s,e},{})}function BC(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return BC(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,c){var f=e.attributes[c];switch(c){case"class":l.attrs.className=f,delete e.attributes.class;break;case"style":l.attrs.style=nB(f);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=f:l.attrs[zC(c)]=f}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=Gz(n,eB);return i.attrs.style=Ni(Ni({},i.attrs.style),o),t.apply(void 0,[e.tag,Ni(Ni({},i.attrs),a)].concat(Fy(r)))}var $C=!1;try{$C=!0}catch{}function rB(){if(!$C&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function VI(t){if(t&&Op(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(jy.icon)return jy.icon(t);if(t===null)return null;if(t&&Op(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Bg(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?bl({},t,e):{}}var jI={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},en=Gp.forwardRef(function(t,e){var n=Ni(Ni({},jI),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,l=n.titleId,c=n.maskId,f=VI(r),h=Bg("classes",[].concat(Fy(Jz(n)),Fy((o||"").split(" ")))),p=Bg("transform",typeof n.transform=="string"?jy.transform(n.transform):n.transform),m=Bg("mask",VI(i)),I=Uz(f,Ni(Ni(Ni(Ni({},h),p),m),{},{symbol:s,title:a,titleId:l,maskId:c}));if(!I)return rB("Could not find icon",f),null;var w=I.abstract,b={ref:e};return Object.keys(n).forEach(function(E){jI.hasOwnProperty(E)||(b[E]=n[E])}),iB(w[0],b)});en.displayName="FontAwesomeIcon";en.propTypes={beat:W.bool,border:W.bool,beatFade:W.bool,bounce:W.bool,className:W.string,fade:W.bool,flash:W.bool,mask:W.oneOfType([W.object,W.array,W.string]),maskId:W.string,fixedWidth:W.bool,inverse:W.bool,flip:W.oneOf([!0,!1,"horizontal","vertical","both"]),icon:W.oneOfType([W.object,W.array,W.string]),listItem:W.bool,pull:W.oneOf(["right","left"]),pulse:W.bool,rotation:W.oneOf([0,90,180,270]),shake:W.bool,size:W.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:W.bool,spinPulse:W.bool,spinReverse:W.bool,symbol:W.oneOfType([W.bool,W.string]),title:W.string,titleId:W.string,transform:W.oneOfType([W.string,W.object]),swapOpacity:W.bool};var iB=BC.bind(null,Gp.createElement),FI={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},UI={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},zI={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},sB={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},BI=sB,oB={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},aB={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};const Zf=()=>{const[t,e]=U.useState(!1),[n,r]=U.useState(null),[i,s]=U.useState(!1);U.useEffect(()=>{const l=()=>{window.scrollY>0?e(!0):e(!1)};return window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)}},[]),U.useEffect(()=>{const l=XP(au,c=>{if(c){r(c);const f=c.uid;console.log(f)}else r(null)});return()=>{l()}},[]);const o=()=>{GU(au).then(()=>{console.log("sign out")}).catch(l=>{console.log(l)})},a=()=>{s(!i)};return g.jsx("div",{className:`navbar ${t?"scrolled":""}`,children:g.jsx("div",{className:"container",children:g.jsxs("div",{className:"navbar-content",children:[g.jsxs("div",{className:`offcanvas-menu ${i?"open":""}`,children:[g.jsx("div",{className:"hamburger-menu",onClick:a,children:g.jsx(en,{icon:i?BI:FI})}),g.jsxs("div",{className:"links",children:[g.jsxs("ul",{children:[g.jsx("li",{children:g.jsx("a",{href:"/aboutUs",children:"About Us"})}),g.jsx("li",{children:g.jsx("a",{href:"/about-team",children:"Team"})}),g.jsx("li",{children:g.jsx("a",{href:"/products",children:"Shop"})}),g.jsx("li",{children:g.jsx("a",{href:"/",children:"Services"})}),g.jsx("li",{children:g.jsx("a",{href:"/",children:"FAQs"})})]}),g.jsxs("div",{className:"action-buttons",children:[g.jsxs("a",{href:"/",className:"btn-alt",children:[g.jsx("div",{className:"pulse-ring"}),g.jsx("div",{className:"outline"}),"Gallery"]}),g.jsx("a",{href:"/",className:"btn",children:"Book now"}),n?g.jsxs("div",{className:"profile-dropdown",children:[g.jsx(en,{icon:UI,className:"profile-icon"}),g.jsxs("div",{className:"dropdown-content",children:[g.jsx("a",{href:"/",children:"My Account"}),g.jsx("button",{onClick:o,children:"Sign out"})]})]}):g.jsx("a",{href:"/login",className:"btn",children:"Login"})]})]})]}),g.jsx("div",{className:"links",children:g.jsxs("ul",{children:[g.jsx("li",{children:g.jsx("a",{href:"/aboutUs",children:"About Us"})}),g.jsx("li",{children:g.jsx("a",{href:"/about-team",children:"Team"})}),g.jsx("li",{children:g.jsx("a",{href:"/products",children:"Shop"})}),g.jsx("li",{children:g.jsx("a",{href:"/",children:"Services"})}),g.jsx("li",{children:g.jsx("a",{href:"/",children:"FAQs"})})]})}),g.jsx("div",{className:"logo",children:g.jsxs("a",{href:"/",className:"logo",children:[g.jsx("img",{src:ba,alt:"Logo"}),g.jsx("span",{children:"Exclusive Baby Diva"})]})}),g.jsxs("div",{className:"action-buttons",children:[g.jsxs("a",{href:"/",className:"btn-alt",children:[g.jsx("div",{className:"pulse-ring"}),g.jsx("div",{className:"outline"}),"Gallery"]}),g.jsx("a",{href:"/",className:"btn",children:"Book now"}),n?g.jsxs("div",{className:"profile-dropdown",children:[g.jsx(en,{icon:UI,className:"profile-icon"}),g.jsxs("div",{className:"dropdown-content",children:[g.jsx("a",{href:"/",children:"My Account"}),g.jsx("button",{onClick:o,children:"Sign out"})]})]}):g.jsx("a",{href:"/login",className:"btn",children:"Login"})]}),g.jsx("div",{className:"hamburger-menu",onClick:a,children:g.jsx(en,{icon:i?BI:FI})})]})})})};function ns(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function qC(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ar={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},uu={duration:.5,overwrite:!1,delay:0},y1,Rn,st,Wr=1e8,He=1/Wr,zy=Math.PI*2,lB=zy/4,uB=0,WC=Math.sqrt,cB=Math.cos,fB=Math.sin,nn=function(e){return typeof e=="string"},vt=function(e){return typeof e=="function"},bs=function(e){return typeof e=="number"},v1=function(e){return typeof e>"u"},Yi=function(e){return typeof e=="object"},ur=function(e){return e!==!1},w1=function(){return typeof window<"u"},Kh=function(e){return vt(e)||nn(e)},HC=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Nn=Array.isArray,By=/(?:-?\.?\d|\.)+/gi,GC=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,kl=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,$g=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,KC=/[+-]=-?[.\d]+/,YC=/[^,'"\[\]\s]+/gi,hB=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ct,Ci,$y,E1,Cr={},Dp={},QC,XC=function(e){return(Dp=ja(e,Cr))&&dr},T1=function(e,n){return console.warn("Invalid property",e,"set to",n,"Missing plugin? gsap.registerPlugin()")},Tf=function(e,n){return!n&&console.warn(e)},JC=function(e,n){return e&&(Cr[e]=n)&&Dp&&(Dp[e]=n)||Cr},If=function(){return 0},dB={suppressEvents:!0,isStart:!0,kill:!1},Rd={suppressEvents:!0,kill:!1},pB={suppressEvents:!0},I1={},yo=[],qy={},ZC,wr={},qg={},$I=30,Nd=[],S1="",x1=function(e){var n=e[0],r,i;if(Yi(n)||vt(n)||(e=[e]),!(r=(n._gsap||{}).harness)){for(i=Nd.length;i--&&!Nd[i].targetTest(n););r=Nd[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new IR(e[i],r)))||e.splice(i,1);return e},pa=function(e){return e._gsap||x1(Hr(e))[0]._gsap},eR=function(e,n,r){return(r=e[n])&&vt(r)?e[n]():v1(r)&&e.getAttribute&&e.getAttribute(n)||r},cr=function(e,n){return(e=e.split(",")).forEach(n)||e},bt=function(e){return Math.round(e*1e5)/1e5||0},Zt=function(e){return Math.round(e*1e7)/1e7||0},zl=function(e,n){var r=n.charAt(0),i=parseFloat(n.substr(2));return e=parseFloat(e),r==="+"?e+i:r==="-"?e-i:r==="*"?e*i:e/i},mB=function(e,n){for(var r=n.length,i=0;e.indexOf(n[i])<0&&++i<r;);return i<r},Mp=function(){var e=yo.length,n=yo.slice(0),r,i;for(qy={},yo.length=0,r=0;r<e;r++)i=n[r],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},tR=function(e,n,r,i){yo.length&&!Rn&&Mp(),e.render(n,r,Rn&&n<0&&(e._initted||e._startAt)),yo.length&&!Rn&&Mp()},nR=function(e){var n=parseFloat(e);return(n||n===0)&&(e+"").match(YC).length<2?n:nn(e)?e.trim():e},rR=function(e){return e},ei=function(e,n){for(var r in n)r in e||(e[r]=n[r]);return e},gB=function(e){return function(n,r){for(var i in r)i in n||i==="duration"&&e||i==="ease"||(n[i]=r[i])}},ja=function(e,n){for(var r in n)e[r]=n[r];return e},qI=function t(e,n){for(var r in n)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(e[r]=Yi(n[r])?t(e[r]||(e[r]={}),n[r]):n[r]);return e},Lp=function(e,n){var r={},i;for(i in e)i in n||(r[i]=e[i]);return r},Pc=function(e){var n=e.parent||ct,r=e.keyframes?gB(Nn(e.keyframes)):ei;if(ur(e.inherit))for(;n;)r(e,n.vars.defaults),n=n.parent||n._dp;return e},_B=function(e,n){for(var r=e.length,i=r===n.length;i&&r--&&e[r]===n[r];);return r<0},iR=function(e,n,r,i,s){var o=e[i],a;if(s)for(a=n[s];o&&o[s]>a;)o=o._prev;return o?(n._next=o._next,o._next=n):(n._next=e[r],e[r]=n),n._next?n._next._prev=n:e[i]=n,n._prev=o,n.parent=n._dp=e,n},Vm=function(e,n,r,i){r===void 0&&(r="_first"),i===void 0&&(i="_last");var s=n._prev,o=n._next;s?s._next=o:e[r]===n&&(e[r]=o),o?o._prev=s:e[i]===n&&(e[i]=s),n._next=n._prev=n.parent=null},Po=function(e,n){e.parent&&(!n||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ma=function(e,n){if(e&&(!n||n._end>e._dur||n._start<0))for(var r=e;r;)r._dirty=1,r=r.parent;return e},yB=function(e){for(var n=e.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return e},Wy=function(e,n,r,i){return e._startAt&&(Rn?e._startAt.revert(Rd):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(n,!0,i))},vB=function t(e){return!e||e._ts&&t(e.parent)},WI=function(e){return e._repeat?cu(e._tTime,e=e.duration()+e._rDelay)*e:0},cu=function(e,n){var r=Math.floor(e/=n);return e&&r===e?r-1:r},Vp=function(e,n){return(e-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},jm=function(e){return e._end=Zt(e._start+(e._tDur/Math.abs(e._ts||e._rts||He)||0))},Fm=function(e,n){var r=e._dp;return r&&r.smoothChildTiming&&e._ts&&(e._start=Zt(r._time-(e._ts>0?n/e._ts:((e._dirty?e.totalDuration():e._tDur)-n)/-e._ts)),jm(e),r._dirty||ma(r,e)),e},sR=function(e,n){var r;if((n._time||!n._dur&&n._initted||n._start<e._time&&(n._dur||!n.add))&&(r=Vp(e.rawTime(),n),(!n._dur||eh(0,n.totalDuration(),r)-n._tTime>He)&&n.render(r,!0)),ma(e,n)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(r=e;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;e._zTime=-He}},Di=function(e,n,r,i){return n.parent&&Po(n),n._start=Zt((bs(r)?r:r||e!==ct?jr(e,r,n):e._time)+n._delay),n._end=Zt(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),iR(e,n,"_first","_last",e._sort?"_start":0),Hy(n)||(e._recent=n),i||sR(e,n),e._ts<0&&Fm(e,e._tTime),e},oR=function(e,n){return(Cr.ScrollTrigger||T1("scrollTrigger",n))&&Cr.ScrollTrigger.create(n,e)},aR=function(e,n,r,i,s){if(k1(e,n,s),!e._initted)return 1;if(!r&&e._pt&&!Rn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ZC!==Er.frame)return yo.push(e),e._lazy=[s,i],1},wB=function t(e){var n=e.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||t(n))},Hy=function(e){var n=e.data;return n==="isFromStart"||n==="isStart"},EB=function(e,n,r,i){var s=e.ratio,o=n<0||!n&&(!e._start&&wB(e)&&!(!e._initted&&Hy(e))||(e._ts<0||e._dp._ts<0)&&!Hy(e))?0:1,a=e._rDelay,l=0,c,f,h;if(a&&e._repeat&&(l=eh(0,e._tDur,n),f=cu(l,a),e._yoyo&&f&1&&(o=1-o),f!==cu(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Rn||i||e._zTime===He||!n&&e._zTime){if(!e._initted&&aR(e,n,i,r,l))return;for(h=e._zTime,e._zTime=n||(r?He:0),r||(r=n&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;n<0&&Wy(e,n,r,!0),e._onUpdate&&!r&&xr(e,"onUpdate"),l&&e._repeat&&!r&&e.parent&&xr(e,"onRepeat"),(n>=e._tDur||n<0)&&e.ratio===o&&(o&&Po(e,1),!r&&!Rn&&(xr(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=n)},TB=function(e,n,r){var i;if(r>n)for(i=e._first;i&&i._start<=r;){if(i.data==="isPause"&&i._start>n)return i;i=i._next}else for(i=e._last;i&&i._start>=r;){if(i.data==="isPause"&&i._start<n)return i;i=i._prev}},fu=function(e,n,r,i){var s=e._repeat,o=Zt(n)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Zt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Fm(e,e._tTime=e._tDur*a),e.parent&&jm(e),r||ma(e.parent,e),e},HI=function(e){return e instanceof Kn?ma(e):fu(e,e._dur)},IB={_start:0,endTime:If,totalDuration:If},jr=function t(e,n,r){var i=e.labels,s=e._recent||IB,o=e.duration()>=Wr?s.endTime(!1):e._dur,a,l,c;return nn(n)&&(isNaN(n)||n in i)?(l=n.charAt(0),c=n.substr(-1)==="%",a=n.indexOf("="),l==="<"||l===">"?(a>=0&&(n=n.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(n.substr(1))||0)*(c?(a<0?s:r).totalDuration()/100:1)):a<0?(n in i||(i[n]=o),i[n]):(l=parseFloat(n.charAt(a-1)+n.substr(a+1)),c&&r&&(l=l/100*(Nn(r)?r[0]:r).totalDuration()),a>1?t(e,n.substr(0,a-1),r)+l:o+l)):n==null?o:+n},Cc=function(e,n,r){var i=bs(n[1]),s=(i?2:1)+(e<2?0:1),o=n[s],a,l;if(i&&(o.duration=n[1]),o.parent=r,e){for(a=o,l=r;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ur(l.vars.inherit)&&l.parent;o.immediateRender=ur(a.immediateRender),e<2?o.runBackwards=1:o.startAt=n[s-1]}return new Mt(n[0],o,n[s+1])},Uo=function(e,n){return e||e===0?n(e):n},eh=function(e,n,r){return r<e?e:r>n?n:r},Cn=function(e,n){return!nn(e)||!(n=hB.exec(e))?"":n[1]},SB=function(e,n,r){return Uo(r,function(i){return eh(e,n,i)})},Gy=[].slice,lR=function(e,n){return e&&Yi(e)&&"length"in e&&(!n&&!e.length||e.length-1 in e&&Yi(e[0]))&&!e.nodeType&&e!==Ci},xB=function(e,n,r){return r===void 0&&(r=[]),e.forEach(function(i){var s;return nn(i)&&!n||lR(i,1)?(s=r).push.apply(s,Hr(i)):r.push(i)})||r},Hr=function(e,n,r){return st&&!n&&st.selector?st.selector(e):nn(e)&&!r&&($y||!hu())?Gy.call((n||E1).querySelectorAll(e),0):Nn(e)?xB(e,r):lR(e)?Gy.call(e,0):e?[e]:[]},Ky=function(e){return e=Hr(e)[0]||Tf("Invalid scope")||{},function(n){var r=e.current||e.nativeElement||e;return Hr(n,r.querySelectorAll?r:r===e?Tf("Invalid scope")||E1.createElement("div"):e)}},uR=function(e){return e.sort(function(){return .5-Math.random()})},cR=function(e){if(vt(e))return e;var n=Yi(e)?e:{each:e},r=ga(n.ease),i=n.from||0,s=parseFloat(n.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=n.axis,f=i,h=i;return nn(i)?f=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(f=i[0],h=i[1]),function(p,m,I){var w=(I||n).length,b=o[w],E,v,x,A,O,D,T,y,S;if(!b){if(S=n.grid==="auto"?0:(n.grid||[1,Wr])[1],!S){for(T=-Wr;T<(T=I[S++].getBoundingClientRect().left)&&S<w;);S<w&&S--}for(b=o[w]=[],E=l?Math.min(S,w)*f-.5:i%S,v=S===Wr?0:l?w*h/S-.5:i/S|0,T=0,y=Wr,D=0;D<w;D++)x=D%S-E,A=v-(D/S|0),b[D]=O=c?Math.abs(c==="y"?A:x):WC(x*x+A*A),O>T&&(T=O),O<y&&(y=O);i==="random"&&uR(b),b.max=T-y,b.min=y,b.v=w=(parseFloat(n.amount)||parseFloat(n.each)*(S>w?w-1:c?c==="y"?w/S:S:Math.max(S,w/S))||0)*(i==="edges"?-1:1),b.b=w<0?s-w:s,b.u=Cn(n.amount||n.each)||0,r=r&&w<0?wR(r):r}return w=(b[p]-b.min)/b.max||0,Zt(b.b+(r?r(w):w)*b.v)+b.u}},Yy=function(e){var n=Math.pow(10,((e+"").split(".")[1]||"").length);return function(r){var i=Zt(Math.round(parseFloat(r)/e)*e*n);return(i-i%1)/n+(bs(r)?0:Cn(r))}},fR=function(e,n){var r=Nn(e),i,s;return!r&&Yi(e)&&(i=r=e.radius||Wr,e.values?(e=Hr(e.values),(s=!bs(e[0]))&&(i*=i)):e=Yy(e.increment)),Uo(n,r?vt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Wr,f=0,h=e.length,p,m;h--;)s?(p=e[h].x-a,m=e[h].y-l,p=p*p+m*m):p=Math.abs(e[h]-a),p<c&&(c=p,f=h);return f=!i||c<=i?e[f]:o,s||f===o||bs(o)?f:f+Cn(o)}:Yy(e))},hR=function(e,n,r,i){return Uo(Nn(e)?!n:r===!0?!!(r=0):!i,function(){return Nn(e)?e[~~(Math.random()*e.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((e-r/2+Math.random()*(n-e+r*.99))/r)*r*i)/i})},bB=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(i){return n.reduce(function(s,o){return o(s)},i)}},kB=function(e,n){return function(r){return e(parseFloat(r))+(n||Cn(r))}},AB=function(e,n,r){return pR(e,n,0,1,r)},dR=function(e,n,r){return Uo(r,function(i){return e[~~n(i)]})},PB=function t(e,n,r){var i=n-e;return Nn(e)?dR(e,t(0,e.length),n):Uo(r,function(s){return(i+(s-e)%i)%i+e})},CB=function t(e,n,r){var i=n-e,s=i*2;return Nn(e)?dR(e,t(0,e.length-1),n):Uo(r,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Sf=function(e){for(var n=0,r="",i,s,o,a;~(i=e.indexOf("random(",n));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?YC:By),r+=e.substr(n,i-n)+hR(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),n=o+1;return r+e.substr(n,e.length-n)},pR=function(e,n,r,i,s){var o=n-e,a=i-r;return Uo(s,function(l){return r+((l-e)/o*a||0)})},RB=function t(e,n,r,i){var s=isNaN(e+n)?0:function(m){return(1-m)*e+m*n};if(!s){var o=nn(e),a={},l,c,f,h,p;if(r===!0&&(i=1)&&(r=null),o)e={p:e},n={p:n};else if(Nn(e)&&!Nn(n)){for(f=[],h=e.length,p=h-2,c=1;c<h;c++)f.push(t(e[c-1],e[c]));h--,s=function(I){I*=h;var w=Math.min(p,~~I);return f[w](I-w)},r=n}else i||(e=ja(Nn(e)?[]:{},e));if(!f){for(l in n)b1.call(a,e,l,"get",n[l]);s=function(I){return C1(I,a)||(o?e.p:e)}}}return Uo(r,s)},GI=function(e,n,r){var i=e.labels,s=Wr,o,a,l;for(o in i)a=i[o]-n,a<0==!!r&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},xr=function(e,n,r){var i=e.vars,s=i[n],o=st,a=e._ctx,l,c,f;if(s)return l=i[n+"Params"],c=i.callbackScope||e,r&&yo.length&&Mp(),a&&(st=a),f=l?s.apply(c,l):s.call(c),st=o,f},ic=function(e){return Po(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Rn),e.progress()<1&&xr(e,"onInterrupt"),e},Al,mR=[],gR=function(e){if(e)if(e=!e.name&&e.default||e,w1()||e.headless){var n=e.name,r=vt(e),i=n&&!r&&e.init?function(){this._props=[]}:e,s={init:If,render:C1,add:b1,kill:GB,modifier:HB,rawVars:0},o={targetTest:0,get:0,getSetter:P1,aliases:{},register:0};if(hu(),e!==i){if(wr[n])return;ei(i,ei(Lp(e,s),o)),ja(i.prototype,ja(s,Lp(e,o))),wr[i.prop=n]=i,e.targetTest&&(Nd.push(i),I1[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}JC(n,i),e.register&&e.register(dr,i,fr)}else mR.push(e)},qe=255,sc={aqua:[0,qe,qe],lime:[0,qe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,qe],navy:[0,0,128],white:[qe,qe,qe],olive:[128,128,0],yellow:[qe,qe,0],orange:[qe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[qe,0,0],pink:[qe,192,203],cyan:[0,qe,qe],transparent:[qe,qe,qe,0]},Wg=function(e,n,r){return e+=e<0?1:e>1?-1:0,(e*6<1?n+(r-n)*e*6:e<.5?r:e*3<2?n+(r-n)*(2/3-e)*6:n)*qe+.5|0},_R=function(e,n,r){var i=e?bs(e)?[e>>16,e>>8&qe,e&qe]:0:sc.black,s,o,a,l,c,f,h,p,m,I;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),sc[e])i=sc[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&qe,i&qe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&qe,e&qe]}else if(e.substr(0,3)==="hsl"){if(i=I=e.match(By),!n)l=+i[0]%360/360,c=+i[1]/100,f=+i[2]/100,o=f<=.5?f*(c+1):f+c-f*c,s=f*2-o,i.length>3&&(i[3]*=1),i[0]=Wg(l+1/3,s,o),i[1]=Wg(l,s,o),i[2]=Wg(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(GC),r&&i.length<4&&(i[3]=1),i}else i=e.match(By)||sc.transparent;i=i.map(Number)}return n&&!I&&(s=i[0]/qe,o=i[1]/qe,a=i[2]/qe,h=Math.max(s,o,a),p=Math.min(s,o,a),f=(h+p)/2,h===p?l=c=0:(m=h-p,c=f>.5?m/(2-h-p):m/(h+p),l=h===s?(o-a)/m+(o<a?6:0):h===o?(a-s)/m+2:(s-o)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(f*100+.5)),r&&i.length<4&&(i[3]=1),i},yR=function(e){var n=[],r=[],i=-1;return e.split(vo).forEach(function(s){var o=s.match(kl)||[];n.push.apply(n,o),r.push(i+=o.length+1)}),n.c=r,n},KI=function(e,n,r){var i="",s=(e+i).match(vo),o=n?"hsla(":"rgba(",a=0,l,c,f,h;if(!s)return e;if(s=s.map(function(p){return(p=_R(p,n,1))&&o+(n?p[0]+","+p[1]+"%,"+p[2]+"%,"+p[3]:p.join(","))+")"}),r&&(f=yR(e),l=r.c,l.join(i)!==f.c.join(i)))for(c=e.replace(vo,"1").split(kl),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(f.length?f:s.length?s:r).shift());if(!c)for(c=e.split(vo),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},vo=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in sc)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),NB=/hsl[a]?\(/,vR=function(e){var n=e.join(" "),r;if(vo.lastIndex=0,vo.test(n))return r=NB.test(n),e[1]=KI(e[1],r),e[0]=KI(e[0],r,yR(e[1])),!0},xf,Er=function(){var t=Date.now,e=500,n=33,r=t(),i=r,s=1e3/240,o=s,a=[],l,c,f,h,p,m,I=function w(b){var E=t()-i,v=b===!0,x,A,O,D;if((E>e||E<0)&&(r+=E-n),i+=E,O=i-r,x=O-o,(x>0||v)&&(D=++h.frame,p=O-h.time*1e3,h.time=O=O/1e3,o+=x+(x>=s?4:s-x),A=1),v||(l=c(w)),A)for(m=0;m<a.length;m++)a[m](O,p,D,b)};return h={time:0,frame:0,tick:function(){I(!0)},deltaRatio:function(b){return p/(1e3/(b||60))},wake:function(){QC&&(!$y&&w1()&&(Ci=$y=window,E1=Ci.document||{},Cr.gsap=dr,(Ci.gsapVersions||(Ci.gsapVersions=[])).push(dr.version),XC(Dp||Ci.GreenSockGlobals||!Ci.gsap&&Ci||{}),mR.forEach(gR)),f=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=f||function(b){return setTimeout(b,o-h.time*1e3+1|0)},xf=1,I(2))},sleep:function(){(f?cancelAnimationFrame:clearTimeout)(l),xf=0,c=If},lagSmoothing:function(b,E){e=b||1/0,n=Math.min(E||33,e)},fps:function(b){s=1e3/(b||240),o=h.time*1e3+s},add:function(b,E,v){var x=E?function(A,O,D,T){b(A,O,D,T),h.remove(x)}:b;return h.remove(b),a[v?"unshift":"push"](x),hu(),x},remove:function(b,E){~(E=a.indexOf(b))&&a.splice(E,1)&&m>=E&&m--},_listeners:a},h}(),hu=function(){return!xf&&Er.wake()},Ce={},OB=/^[\d.\-M][\d.\-,\s]/,DB=/["']/g,MB=function(e){for(var n={},r=e.substr(1,e.length-3).split(":"),i=r[0],s=1,o=r.length,a,l,c;s<o;s++)l=r[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),n[i]=isNaN(c)?c.replace(DB,"").trim():+c,i=l.substr(a+1).trim();return n},LB=function(e){var n=e.indexOf("(")+1,r=e.indexOf(")"),i=e.indexOf("(",n);return e.substring(n,~i&&i<r?e.indexOf(")",r+1):r)},VB=function(e){var n=(e+"").split("("),r=Ce[n[0]];return r&&n.length>1&&r.config?r.config.apply(null,~e.indexOf("{")?[MB(n[1])]:LB(e).split(",").map(nR)):Ce._CE&&OB.test(e)?Ce._CE("",e):r},wR=function(e){return function(n){return 1-e(1-n)}},ER=function t(e,n){for(var r=e._first,i;r;)r instanceof Kn?t(r,n):r.vars.yoyoEase&&(!r._yoyo||!r._repeat)&&r._yoyo!==n&&(r.timeline?t(r.timeline,n):(i=r._ease,r._ease=r._yEase,r._yEase=i,r._yoyo=n)),r=r._next},ga=function(e,n){return e&&(vt(e)?e:Ce[e]||VB(e))||n},Xa=function(e,n,r,i){r===void 0&&(r=function(l){return 1-n(1-l)}),i===void 0&&(i=function(l){return l<.5?n(l*2)/2:1-n((1-l)*2)/2});var s={easeIn:n,easeOut:r,easeInOut:i},o;return cr(e,function(a){Ce[a]=Cr[a]=s,Ce[o=a.toLowerCase()]=r;for(var l in s)Ce[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ce[a+"."+l]=s[l]}),s},TR=function(e){return function(n){return n<.5?(1-e(1-n*2))/2:.5+e((n-.5)*2)/2}},Hg=function t(e,n,r){var i=n>=1?n:1,s=(r||(e?.3:.45))/(n<1?n:1),o=s/zy*(Math.asin(1/i)||0),a=function(f){return f===1?1:i*Math.pow(2,-10*f)*fB((f-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:TR(a);return s=zy/s,l.config=function(c,f){return t(e,c,f)},l},Gg=function t(e,n){n===void 0&&(n=1.70158);var r=function(o){return o?--o*o*((n+1)*o+n)+1:0},i=e==="out"?r:e==="in"?function(s){return 1-r(1-s)}:TR(r);return i.config=function(s){return t(e,s)},i};cr("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var n=e<5?e+1:e;Xa(t+",Power"+(n-1),e?function(r){return Math.pow(r,n)}:function(r){return r},function(r){return 1-Math.pow(1-r,n)},function(r){return r<.5?Math.pow(r*2,n)/2:1-Math.pow((1-r)*2,n)/2})});Ce.Linear.easeNone=Ce.none=Ce.Linear.easeIn;Xa("Elastic",Hg("in"),Hg("out"),Hg());(function(t,e){var n=1/e,r=2*n,i=2.5*n,s=function(a){return a<n?t*a*a:a<r?t*Math.pow(a-1.5/e,2)+.75:a<i?t*(a-=2.25/e)*a+.9375:t*Math.pow(a-2.625/e,2)+.984375};Xa("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Xa("Expo",function(t){return t?Math.pow(2,10*(t-1)):0});Xa("Circ",function(t){return-(WC(1-t*t)-1)});Xa("Sine",function(t){return t===1?1:-cB(t*lB)+1});Xa("Back",Gg("in"),Gg("out"),Gg());Ce.SteppedEase=Ce.steps=Cr.SteppedEase={config:function(e,n){e===void 0&&(e=1);var r=1/e,i=e+(n?0:1),s=n?1:0,o=1-He;return function(a){return((i*eh(0,o,a)|0)+s)*r}}};uu.ease=Ce["quad.out"];cr("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return S1+=t+","+t+"Params,"});var IR=function(e,n){this.id=uB++,e._gsap=this,this.target=e,this.harness=n,this.get=n?n.get:eR,this.set=n?n.getSetter:P1},bf=function(){function t(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,fu(this,+n.duration,1,1),this.data=n.data,st&&(this._ctx=st,st.data.push(this)),xf||Er.wake()}var e=t.prototype;return e.delay=function(r){return r||r===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+r-this._delay),this._delay=r,this):this._delay},e.duration=function(r){return arguments.length?this.totalDuration(this._repeat>0?r+(r+this._rDelay)*this._repeat:r):this.totalDuration()&&this._dur},e.totalDuration=function(r){return arguments.length?(this._dirty=0,fu(this,this._repeat<0?r:(r-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(r,i){if(hu(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Fm(this,r),!s._dp||s.parent||sR(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&r<this._tDur||this._ts<0&&r>0||!this._tDur&&!r)&&Di(this._dp,this,this._start-this._delay)}return(this._tTime!==r||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===He||!r&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=r),tR(this,r,i)),this},e.time=function(r,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),r+WI(this))%(this._dur+this._rDelay)||(r?this._dur:0),i):this._time},e.totalProgress=function(r,i){return arguments.length?this.totalTime(this.totalDuration()*r,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(r,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-r:r)+WI(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(r,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(r-1)*s,i):this._repeat?cu(this._tTime,s)+1:1},e.timeScale=function(r,i){if(!arguments.length)return this._rts===-He?0:this._rts;if(this._rts===r)return this;var s=this.parent&&this._ts?Vp(this.parent._time,this):this._tTime;return this._rts=+r||0,this._ts=this._ps||r===-He?0:this._rts,this.totalTime(eh(-Math.abs(this._delay),this._tDur,s),i!==!1),jm(this),yB(this)},e.paused=function(r){return arguments.length?(this._ps!==r&&(this._ps=r,r?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(hu(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==He&&(this._tTime-=He)))),this):this._ps},e.startTime=function(r){if(arguments.length){this._start=r;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Di(i,this,r-this._delay),this}return this._start},e.endTime=function(r){return this._start+(ur(r)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(r){var i=this.parent||this._dp;return i?r&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Vp(i.rawTime(r),this):this._tTime:this._tTime},e.revert=function(r){r===void 0&&(r=pB);var i=Rn;return Rn=r,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(r),this.totalTime(-.01,r.suppressEvents)),this.data!=="nested"&&r.kill!==!1&&this.kill(),Rn=i,this},e.globalTime=function(r){for(var i=this,s=arguments.length?r:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(r):s},e.repeat=function(r){return arguments.length?(this._repeat=r===1/0?-2:r,HI(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(r){if(arguments.length){var i=this._time;return this._rDelay=r,HI(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(r){return arguments.length?(this._yoyo=r,this):this._yoyo},e.seek=function(r,i){return this.totalTime(jr(this,r),ur(i))},e.restart=function(r,i){return this.play().totalTime(r?-this._delay:0,ur(i))},e.play=function(r,i){return r!=null&&this.seek(r,i),this.reversed(!1).paused(!1)},e.reverse=function(r,i){return r!=null&&this.seek(r||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(r,i){return r!=null&&this.seek(r,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(r){return arguments.length?(!!r!==this.reversed()&&this.timeScale(-this._rts||(r?-He:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-He,this},e.isActive=function(){var r=this.parent||this._dp,i=this._start,s;return!!(!r||this._ts&&this._initted&&r.isActive()&&(s=r.rawTime(!0))>=i&&s<this.endTime(!0)-He)},e.eventCallback=function(r,i,s){var o=this.vars;return arguments.length>1?(i?(o[r]=i,s&&(o[r+"Params"]=s),r==="onUpdate"&&(this._onUpdate=i)):delete o[r],this):o[r]},e.then=function(r){var i=this;return new Promise(function(s){var o=vt(r)?r:rR,a=function(){var c=i.then;i.then=null,vt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){ic(this)},t}();ei(bf.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-He,_prom:0,_ps:!1,_rts:1});var Kn=function(t){qC(e,t);function e(r,i){var s;return r===void 0&&(r={}),s=t.call(this,r)||this,s.labels={},s.smoothChildTiming=!!r.smoothChildTiming,s.autoRemoveChildren=!!r.autoRemoveChildren,s._sort=ur(r.sortChildren),ct&&Di(r.parent||ct,ns(s),i),r.reversed&&s.reverse(),r.paused&&s.paused(!0),r.scrollTrigger&&oR(ns(s),r.scrollTrigger),s}var n=e.prototype;return n.to=function(i,s,o){return Cc(0,arguments,this),this},n.from=function(i,s,o){return Cc(1,arguments,this),this},n.fromTo=function(i,s,o,a){return Cc(2,arguments,this),this},n.set=function(i,s,o){return s.duration=0,s.parent=this,Pc(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Mt(i,s,jr(this,o),1),this},n.call=function(i,s,o){return Di(this,Mt.delayedCall(0,i,s),o)},n.staggerTo=function(i,s,o,a,l,c,f){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=f,o.parent=this,new Mt(i,o,jr(this,l)),this},n.staggerFrom=function(i,s,o,a,l,c,f){return o.runBackwards=1,Pc(o).immediateRender=ur(o.immediateRender),this.staggerTo(i,s,o,a,l,c,f)},n.staggerFromTo=function(i,s,o,a,l,c,f,h){return a.startAt=o,Pc(a).immediateRender=ur(a.immediateRender),this.staggerTo(i,s,a,l,c,f,h)},n.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,f=i<=0?0:Zt(i),h=this._zTime<0!=i<0&&(this._initted||!c),p,m,I,w,b,E,v,x,A,O,D,T;if(this!==ct&&f>l&&i>=0&&(f=l),f!==this._tTime||o||h){if(a!==this._time&&c&&(f+=this._time-a,i+=this._time-a),p=f,A=this._start,x=this._ts,E=!x,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(D=this._yoyo,b=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(b*100+i,s,o);if(p=Zt(f%b),f===l?(w=this._repeat,p=c):(w=~~(f/b),w&&w===f/b&&(p=c,w--),p>c&&(p=c)),O=cu(this._tTime,b),!a&&this._tTime&&O!==w&&this._tTime-O*b-this._dur<=0&&(O=w),D&&w&1&&(p=c-p,T=1),w!==O&&!this._lock){var y=D&&O&1,S=y===(D&&w&1);if(w<O&&(y=!y),a=y?0:f%c?c:f,this._lock=1,this.render(a||(T?0:Zt(w*b)),s,!c)._lock=0,this._tTime=f,!s&&this.parent&&xr(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||E!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=y?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!E)return this;ER(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=TB(this,Zt(a),Zt(p)),v&&(f-=p-(p=v._start))),this._tTime=f,this._time=p,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&p&&!s&&!w&&(xr(this,"onStart"),this._tTime!==f))return this;if(p>=a&&i>=0)for(m=this._first;m;){if(I=m._next,(m._act||p>=m._start)&&m._ts&&v!==m){if(m.parent!==this)return this.render(i,s,o);if(m.render(m._ts>0?(p-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(p-m._start)*m._ts,s,o),p!==this._time||!this._ts&&!E){v=0,I&&(f+=this._zTime=-He);break}}m=I}else{m=this._last;for(var k=i<0?i:p;m;){if(I=m._prev,(m._act||k<=m._end)&&m._ts&&v!==m){if(m.parent!==this)return this.render(i,s,o);if(m.render(m._ts>0?(k-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(k-m._start)*m._ts,s,o||Rn&&(m._initted||m._startAt)),p!==this._time||!this._ts&&!E){v=0,I&&(f+=this._zTime=k?-He:He);break}}m=I}}if(v&&!s&&(this.pause(),v.render(p>=a?0:-He)._zTime=p>=a?1:-1,this._ts))return this._start=A,jm(this),this.render(i,s,o);this._onUpdate&&!s&&xr(this,"onUpdate",!0),(f===l&&this._tTime>=this.totalDuration()||!f&&a)&&(A===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(f===l&&this._ts>0||!f&&this._ts<0)&&Po(this,1),!s&&!(i<0&&!a)&&(f||a||!l)&&(xr(this,f===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(i,s){var o=this;if(bs(s)||(s=jr(this,s,i)),!(i instanceof bf)){if(Nn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(nn(i))return this.addLabel(i,s);if(vt(i))i=Mt.delayedCall(0,i);else return this}return this!==i?Di(this,i,s):this},n.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Wr);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Mt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},n.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},n.remove=function(i){return nn(i)?this.removeLabel(i):vt(i)?this.killTweensOf(i):(Vm(this,i),i===this._recent&&(this._recent=this._last),ma(this))},n.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Zt(Er.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),t.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},n.addLabel=function(i,s){return this.labels[i]=jr(this,s),this},n.removeLabel=function(i){return delete this.labels[i],this},n.addPause=function(i,s,o){var a=Mt.delayedCall(0,s||If,o);return a.data="isPause",this._hasPause=1,Di(this,a,jr(this,i))},n.removePause=function(i){var s=this._first;for(i=jr(this,i);s;)s._start===i&&s.data==="isPause"&&Po(s),s=s._next},n.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Zs!==a[l]&&a[l].kill(i,s);return this},n.getTweensOf=function(i,s){for(var o=[],a=Hr(i),l=this._first,c=bs(s),f;l;)l instanceof Mt?mB(l._targets,a)&&(c?(!Zs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(f=l.getTweensOf(a,s)).length&&o.push.apply(o,f),l=l._next;return o},n.tweenTo=function(i,s){s=s||{};var o=this,a=jr(o,i),l=s,c=l.startAt,f=l.onStart,h=l.onStartParams,p=l.immediateRender,m,I=Mt.to(o,ei({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||He,onStart:function(){if(o.pause(),!m){var b=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());I._dur!==b&&fu(I,b,0,1).render(I._time,!0,!0),m=1}f&&f.apply(I,h||[])}},s));return p?I.render(0):I},n.tweenFromTo=function(i,s,o){return this.tweenTo(s,ei({startAt:{time:jr(this,i)}},o))},n.recent=function(){return this._recent},n.nextLabel=function(i){return i===void 0&&(i=this._time),GI(this,jr(this,i))},n.previousLabel=function(i){return i===void 0&&(i=this._time),GI(this,jr(this,i),1)},n.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+He)},n.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return ma(this)},n.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return t.prototype.invalidate.call(this,i)},n.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ma(this)},n.totalDuration=function(i){var s=0,o=this,a=o._last,l=Wr,c,f,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),f=a._start,f>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Di(o,a,f-a._delay,1)._lock=0):l=f,f<0&&a._ts&&(s-=f,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=f/o._ts,o._time-=f,o._tTime-=f),o.shiftChildren(-f,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;fu(o,o===ct&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(ct._ts&&(tR(ct,Vp(i,ct)),ZC=Er.frame),Er.frame>=$I){$I+=Ar.autoSleep||120;var s=ct._first;if((!s||!s._ts)&&Ar.autoSleep&&Er._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Er.sleep()}}},e}(bf);ei(Kn.prototype,{_lock:0,_hasPause:0,_forcing:0});var jB=function(e,n,r,i,s,o,a){var l=new fr(this._pt,e,n,0,1,PR,null,s),c=0,f=0,h,p,m,I,w,b,E,v;for(l.b=r,l.e=i,r+="",i+="",(E=~i.indexOf("random("))&&(i=Sf(i)),o&&(v=[r,i],o(v,e,n),r=v[0],i=v[1]),p=r.match($g)||[];h=$g.exec(i);)I=h[0],w=i.substring(c,h.index),m?m=(m+1)%5:w.substr(-5)==="rgba("&&(m=1),I!==p[f++]&&(b=parseFloat(p[f-1])||0,l._pt={_next:l._pt,p:w||f===1?w:",",s:b,c:I.charAt(1)==="="?zl(b,I)-b:parseFloat(I)-b,m:m&&m<4?Math.round:0},c=$g.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(KC.test(i)||E)&&(l.e=0),this._pt=l,l},b1=function(e,n,r,i,s,o,a,l,c,f){vt(i)&&(i=i(s||0,e,o));var h=e[n],p=r!=="get"?r:vt(h)?c?e[n.indexOf("set")||!vt(e["get"+n.substr(3)])?n:"get"+n.substr(3)](c):e[n]():h,m=vt(h)?c?$B:kR:A1,I;if(nn(i)&&(~i.indexOf("random(")&&(i=Sf(i)),i.charAt(1)==="="&&(I=zl(p,i)+(Cn(p)||0),(I||I===0)&&(i=I))),!f||p!==i||Qy)return!isNaN(p*i)&&i!==""?(I=new fr(this._pt,e,n,+p||0,i-(p||0),typeof h=="boolean"?WB:AR,0,m),c&&(I.fp=c),a&&I.modifier(a,this,e),this._pt=I):(!h&&!(n in e)&&T1(n,i),jB.call(this,e,n,p,i,m,l||Ar.stringFilter,c))},FB=function(e,n,r,i,s){if(vt(e)&&(e=Rc(e,s,n,r,i)),!Yi(e)||e.style&&e.nodeType||Nn(e)||HC(e))return nn(e)?Rc(e,s,n,r,i):e;var o={},a;for(a in e)o[a]=Rc(e[a],s,n,r,i);return o},SR=function(e,n,r,i,s,o){var a,l,c,f;if(wr[e]&&(a=new wr[e]).init(s,a.rawVars?n[e]:FB(n[e],i,s,o,r),r,i,o)!==!1&&(r._pt=l=new fr(r._pt,s,e,0,1,a.render,a,0,a.priority),r!==Al))for(c=r._ptLookup[r._targets.indexOf(s)],f=a._props.length;f--;)c[a._props[f]]=l;return a},Zs,Qy,k1=function t(e,n,r){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,f=i.runBackwards,h=i.yoyoEase,p=i.keyframes,m=i.autoRevert,I=e._dur,w=e._startAt,b=e._targets,E=e.parent,v=E&&E.data==="nested"?E.vars.targets:b,x=e._overwrite==="auto"&&!y1,A=e.timeline,O,D,T,y,S,k,N,R,C,ne,ce,oe,Z;if(A&&(!p||!s)&&(s="none"),e._ease=ga(s,uu.ease),e._yEase=h?wR(ga(h===!0?s:h,uu.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!A&&!!i.runBackwards,!A||p&&!i.stagger){if(R=b[0]?pa(b[0]).harness:0,oe=R&&i[R.prop],O=Lp(i,I1),w&&(w._zTime<0&&w.progress(1),n<0&&f&&a&&!m?w.render(-1,!0):w.revert(f&&I?Rd:dB),w._lazy=0),o){if(Po(e._startAt=Mt.set(b,ei({data:"isStart",overwrite:!1,parent:E,immediateRender:!0,lazy:!w&&ur(l),startAt:null,delay:0,onUpdate:c&&function(){return xr(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,n<0&&(Rn||!a&&!m)&&e._startAt.revert(Rd),a&&I&&n<=0&&r<=0){n&&(e._zTime=n);return}}else if(f&&I&&!w){if(n&&(a=!1),T=ei({overwrite:!1,data:"isFromStart",lazy:a&&!w&&ur(l),immediateRender:a,stagger:0,parent:E},O),oe&&(T[R.prop]=oe),Po(e._startAt=Mt.set(b,T)),e._startAt._dp=0,e._startAt._sat=e,n<0&&(Rn?e._startAt.revert(Rd):e._startAt.render(-1,!0)),e._zTime=n,!a)t(e._startAt,He,He);else if(!n)return}for(e._pt=e._ptCache=0,l=I&&ur(l)||l&&!I,D=0;D<b.length;D++){if(S=b[D],N=S._gsap||x1(b)[D]._gsap,e._ptLookup[D]=ne={},qy[N.id]&&yo.length&&Mp(),ce=v===b?D:v.indexOf(S),R&&(C=new R).init(S,oe||O,e,ce,v)!==!1&&(e._pt=y=new fr(e._pt,S,C.name,0,1,C.render,C,0,C.priority),C._props.forEach(function(F){ne[F]=y}),C.priority&&(k=1)),!R||oe)for(T in O)wr[T]&&(C=SR(T,O,e,ce,S,v))?C.priority&&(k=1):ne[T]=y=b1.call(e,S,T,"get",O[T],ce,v,0,i.stringFilter);e._op&&e._op[D]&&e.kill(S,e._op[D]),x&&e._pt&&(Zs=e,ct.killTweensOf(S,ne,e.globalTime(n)),Z=!e.parent,Zs=0),e._pt&&l&&(qy[N.id]=1)}k&&CR(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Z,p&&n<=0&&A.render(Wr,!0,!0)},UB=function(e,n,r,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[n],f,h,p,m;if(!c)for(c=e._ptCache[n]=[],p=e._ptLookup,m=e._targets.length;m--;){if(f=p[m][n],f&&f.d&&f.d._pt)for(f=f.d._pt;f&&f.p!==n&&f.fp!==n;)f=f._next;if(!f)return Qy=1,e.vars[n]="+=0",k1(e,a),Qy=0,l?Tf(n+" not eligible for reset"):1;c.push(f)}for(m=c.length;m--;)h=c[m],f=h._pt||h,f.s=(i||i===0)&&!s?i:f.s+(i||0)+o*f.c,f.c=r-f.s,h.e&&(h.e=bt(r)+Cn(h.e)),h.b&&(h.b=f.s+Cn(h.b))},zB=function(e,n){var r=e[0]?pa(e[0]).harness:0,i=r&&r.aliases,s,o,a,l;if(!i)return n;s=ja({},n);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},BB=function(e,n,r,i){var s=n.ease||i||"power1.inOut",o,a;if(Nn(n))a=r[e]||(r[e]=[]),n.forEach(function(l,c){return a.push({t:c/(n.length-1)*100,v:l,e:s})});else for(o in n)a=r[o]||(r[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:n[o],e:s})},Rc=function(e,n,r,i,s){return vt(e)?e.call(n,r,i,s):nn(e)&&~e.indexOf("random(")?Sf(e):e},xR=S1+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",bR={};cr(xR+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return bR[t]=1});var Mt=function(t){qC(e,t);function e(r,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=t.call(this,o?i:Pc(i))||this;var l=a.vars,c=l.duration,f=l.delay,h=l.immediateRender,p=l.stagger,m=l.overwrite,I=l.keyframes,w=l.defaults,b=l.scrollTrigger,E=l.yoyoEase,v=i.parent||ct,x=(Nn(r)||HC(r)?bs(r[0]):"length"in i)?[r]:Hr(r),A,O,D,T,y,S,k,N;if(a._targets=x.length?x1(x):Tf("GSAP target "+r+" not found. https://gsap.com",!Ar.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,I||p||Kh(c)||Kh(f)){if(i=a.vars,A=a.timeline=new Kn({data:"nested",defaults:w||{},targets:v&&v.data==="nested"?v.vars.targets:x}),A.kill(),A.parent=A._dp=ns(a),A._start=0,p||Kh(c)||Kh(f)){if(T=x.length,k=p&&cR(p),Yi(p))for(y in p)~xR.indexOf(y)&&(N||(N={}),N[y]=p[y]);for(O=0;O<T;O++)D=Lp(i,bR),D.stagger=0,E&&(D.yoyoEase=E),N&&ja(D,N),S=x[O],D.duration=+Rc(c,ns(a),O,S,x),D.delay=(+Rc(f,ns(a),O,S,x)||0)-a._delay,!p&&T===1&&D.delay&&(a._delay=f=D.delay,a._start+=f,D.delay=0),A.to(S,D,k?k(O,S,x):0),A._ease=Ce.none;A.duration()?c=f=0:a.timeline=0}else if(I){Pc(ei(A.vars.defaults,{ease:"none"})),A._ease=ga(I.ease||i.ease||"none");var R=0,C,ne,ce;if(Nn(I))I.forEach(function(oe){return A.to(x,oe,">")}),A.duration();else{D={};for(y in I)y==="ease"||y==="easeEach"||BB(y,I[y],D,I.easeEach);for(y in D)for(C=D[y].sort(function(oe,Z){return oe.t-Z.t}),R=0,O=0;O<C.length;O++)ne=C[O],ce={ease:ne.e,duration:(ne.t-(O?C[O-1].t:0))/100*c},ce[y]=ne.v,A.to(x,ce,R),R+=ce.duration;A.duration()<c&&A.to({},{duration:c-A.duration()})}}c||a.duration(c=A.duration())}else a.timeline=0;return m===!0&&!y1&&(Zs=ns(a),ct.killTweensOf(x),Zs=0),Di(v,ns(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!I&&a._start===Zt(v._time)&&ur(h)&&vB(ns(a))&&v.data!=="nested")&&(a._tTime=-He,a.render(Math.max(0,-f)||0)),b&&oR(ns(a),b),a}var n=e.prototype;return n.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,f=i<0,h=i>l-He&&!f?l:i<He?0:i,p,m,I,w,b,E,v,x,A;if(!c)EB(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==f){if(p=h,x=this.timeline,this._repeat){if(w=c+this._rDelay,this._repeat<-1&&f)return this.totalTime(w*100+i,s,o);if(p=Zt(h%w),h===l?(I=this._repeat,p=c):(I=~~(h/w),I&&I===Zt(h/w)&&(p=c,I--),p>c&&(p=c)),E=this._yoyo&&I&1,E&&(A=this._yEase,p=c-p),b=cu(this._tTime,w),p===a&&!o&&this._initted&&I===b)return this._tTime=h,this;I!==b&&(x&&this._yEase&&ER(x,E),this.vars.repeatRefresh&&!E&&!this._lock&&this._time!==w&&this._initted&&(this._lock=o=1,this.render(Zt(w*I),!0).invalidate()._lock=0))}if(!this._initted){if(aR(this,f?i:p,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&I!==b))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=p,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(A||this._ease)(p/c),this._from&&(this.ratio=v=1-v),p&&!a&&!s&&!I&&(xr(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(v,m.d),m=m._next;x&&x.render(i<0?i:x._dur*x._ease(p/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(f&&Wy(this,i,s,o),xr(this,"onUpdate")),this._repeat&&I!==b&&this.vars.onRepeat&&!s&&this.parent&&xr(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(f&&!this._onUpdate&&Wy(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Po(this,1),!s&&!(f&&!a)&&(h||a||E)&&(xr(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),t.prototype.invalidate.call(this,i)},n.resetTo=function(i,s,o,a,l){xf||Er.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),f;return this._initted||k1(this,c),f=this._ease(c/this._dur),UB(this,i,s,o,a,f,c,l)?this.resetTo(i,s,o,a,1):(Fm(this,0),this.parent||iR(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ic(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Zs&&Zs.vars.overwrite!==!0)._first||ic(this),this.parent&&o!==this.timeline.totalDuration()&&fu(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Hr(i):a,c=this._ptLookup,f=this._pt,h,p,m,I,w,b,E;if((!s||s==="all")&&_B(a,l))return s==="all"&&(this._pt=0),ic(this);for(h=this._op=this._op||[],s!=="all"&&(nn(s)&&(w={},cr(s,function(v){return w[v]=1}),s=w),s=zB(a,s)),E=a.length;E--;)if(~l.indexOf(a[E])){p=c[E],s==="all"?(h[E]=s,I=p,m={}):(m=h[E]=h[E]||{},I=s);for(w in I)b=p&&p[w],b&&((!("kill"in b.d)||b.d.kill(w)===!0)&&Vm(this,b,"_pt"),delete p[w]),m!=="all"&&(m[w]=1)}return this._initted&&!this._pt&&f&&ic(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Cc(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Cc(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return ct.killTweensOf(i,s,o)},e}(bf);ei(Mt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});cr("staggerTo,staggerFrom,staggerFromTo",function(t){Mt[t]=function(){var e=new Kn,n=Gy.call(arguments,0);return n.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,n)}});var A1=function(e,n,r){return e[n]=r},kR=function(e,n,r){return e[n](r)},$B=function(e,n,r,i){return e[n](i.fp,r)},qB=function(e,n,r){return e.setAttribute(n,r)},P1=function(e,n){return vt(e[n])?kR:v1(e[n])&&e.setAttribute?qB:A1},AR=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e6)/1e6,n)},WB=function(e,n){return n.set(n.t,n.p,!!(n.s+n.c*e),n)},PR=function(e,n){var r=n._pt,i="";if(!e&&n.b)i=n.b;else if(e===1&&n.e)i=n.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*e):Math.round((r.s+r.c*e)*1e4)/1e4)+i,r=r._next;i+=n.c}n.set(n.t,n.p,i,n)},C1=function(e,n){for(var r=n._pt;r;)r.r(e,r.d),r=r._next},HB=function(e,n,r,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,n,r),s=o},GB=function(e){for(var n=this._pt,r,i;n;)i=n._next,n.p===e&&!n.op||n.op===e?Vm(this,n,"_pt"):n.dep||(r=1),n=i;return!r},KB=function(e,n,r,i){i.mSet(e,n,i.m.call(i.tween,r,i.mt),i)},CR=function(e){for(var n=e._pt,r,i,s,o;n;){for(r=n._next,i=s;i&&i.pr>n.pr;)i=i._next;(n._prev=i?i._prev:o)?n._prev._next=n:s=n,(n._next=i)?i._prev=n:o=n,n=r}e._pt=s},fr=function(){function t(n,r,i,s,o,a,l,c,f){this.t=r,this.s=s,this.c=o,this.p=i,this.r=a||AR,this.d=l||this,this.set=c||A1,this.pr=f||0,this._next=n,n&&(n._prev=this)}var e=t.prototype;return e.modifier=function(r,i,s){this.mSet=this.mSet||this.set,this.set=KB,this.m=r,this.mt=s,this.tween=i},t}();cr(S1+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return I1[t]=1});Cr.TweenMax=Cr.TweenLite=Mt;Cr.TimelineLite=Cr.TimelineMax=Kn;ct=new Kn({sortChildren:!1,defaults:uu,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ar.stringFilter=vR;var _a=[],Od={},YB=[],YI=0,QB=0,Kg=function(e){return(Od[e]||YB).map(function(n){return n()})},Xy=function(){var e=Date.now(),n=[];e-YI>2&&(Kg("matchMediaInit"),_a.forEach(function(r){var i=r.queries,s=r.conditions,o,a,l,c;for(a in i)o=Ci.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(r.revert(),l&&n.push(r))}),Kg("matchMediaRevert"),n.forEach(function(r){return r.onMatch(r,function(i){return r.add(null,i)})}),YI=e,Kg("matchMedia"))},RR=function(){function t(n,r){this.selector=r&&Ky(r),this.data=[],this._r=[],this.isReverted=!1,this.id=QB++,n&&this.add(n)}var e=t.prototype;return e.add=function(r,i,s){vt(r)&&(s=i,i=r,r=vt);var o=this,a=function(){var c=st,f=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Ky(s)),st=o,h=i.apply(o,arguments),vt(h)&&o._r.push(h),st=c,o.selector=f,o.isReverted=!1,h};return o.last=a,r===vt?a(o,function(l){return o.add(null,l)}):r?o[r]=a:a},e.ignore=function(r){var i=st;st=null,r(this),st=i},e.getTweens=function(){var r=[];return this.data.forEach(function(i){return i instanceof t?r.push.apply(r,i.getTweens()):i instanceof Mt&&!(i.parent&&i.parent.data==="nested")&&r.push(i)}),r},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(r,i){var s=this;if(r?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(f){return a.splice(a.indexOf(f),1)}));for(a.map(function(f){return{g:f._dur||f._delay||f._sat&&!f._sat.vars.immediateRender?f.globalTime(0):-1/0,t:f}}).sort(function(f,h){return h.g-f.g||-1/0}).forEach(function(f){return f.t.revert(r)}),l=s.data.length;l--;)c=s.data[l],c instanceof Kn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Mt)&&c.revert&&c.revert(r);s._r.forEach(function(f){return f(r,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=_a.length;o--;)_a[o].id===this.id&&_a.splice(o,1)},e.revert=function(r){this.kill(r||{})},t}(),XB=function(){function t(n){this.contexts=[],this.scope=n,st&&st.data.push(this)}var e=t.prototype;return e.add=function(r,i,s){Yi(r)||(r={matches:r});var o=new RR(0,s||this.scope),a=o.conditions={},l,c,f;st&&!o.selector&&(o.selector=st.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=r;for(c in r)c==="all"?f=1:(l=Ci.matchMedia(r[c]),l&&(_a.indexOf(o)<0&&_a.push(o),(a[c]=l.matches)&&(f=1),l.addListener?l.addListener(Xy):l.addEventListener("change",Xy)));return f&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(r){this.kill(r||{})},e.kill=function(r){this.contexts.forEach(function(i){return i.kill(r,!0)})},t}(),jp={registerPlugin:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];n.forEach(function(i){return gR(i)})},timeline:function(e){return new Kn(e)},getTweensOf:function(e,n){return ct.getTweensOf(e,n)},getProperty:function(e,n,r,i){nn(e)&&(e=Hr(e)[0]);var s=pa(e||{}).get,o=r?rR:nR;return r==="native"&&(r=""),e&&(n?o((wr[n]&&wr[n].get||s)(e,n,r,i)):function(a,l,c){return o((wr[a]&&wr[a].get||s)(e,a,l,c))})},quickSetter:function(e,n,r){if(e=Hr(e),e.length>1){var i=e.map(function(f){return dr.quickSetter(f,n,r)}),s=i.length;return function(f){for(var h=s;h--;)i[h](f)}}e=e[0]||{};var o=wr[n],a=pa(e),l=a.harness&&(a.harness.aliases||{})[n]||n,c=o?function(f){var h=new o;Al._pt=0,h.init(e,r?f+r:f,Al,0,[e]),h.render(1,h),Al._pt&&C1(1,Al)}:a.set(e,l);return o?c:function(f){return c(e,l,r?f+r:f,a,1)}},quickTo:function(e,n,r){var i,s=dr.to(e,ja((i={},i[n]="+=0.1",i.paused=!0,i),r||{})),o=function(l,c,f){return s.resetTo(n,l,c,f)};return o.tween=s,o},isTweening:function(e){return ct.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ga(e.ease,uu.ease)),qI(uu,e||{})},config:function(e){return qI(Ar,e||{})},registerEffect:function(e){var n=e.name,r=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!wr[a]&&!Cr[a]&&Tf(n+" effect requires "+a+" plugin.")}),qg[n]=function(a,l,c){return r(Hr(a),ei(l||{},s),c)},o&&(Kn.prototype[n]=function(a,l,c){return this.add(qg[n](a,Yi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,n){Ce[e]=ga(n)},parseEase:function(e,n){return arguments.length?ga(e,n):Ce},getById:function(e){return ct.getById(e)},exportRoot:function(e,n){e===void 0&&(e={});var r=new Kn(e),i,s;for(r.smoothChildTiming=ur(e.smoothChildTiming),ct.remove(r),r._dp=0,r._time=r._tTime=ct._time,i=ct._first;i;)s=i._next,(n||!(!i._dur&&i instanceof Mt&&i.vars.onComplete===i._targets[0]))&&Di(r,i,i._start-i._delay),i=s;return Di(ct,r,0),r},context:function(e,n){return e?new RR(e,n):st},matchMedia:function(e){return new XB(e)},matchMediaRefresh:function(){return _a.forEach(function(e){var n=e.conditions,r,i;for(i in n)n[i]&&(n[i]=!1,r=1);r&&e.revert()})||Xy()},addEventListener:function(e,n){var r=Od[e]||(Od[e]=[]);~r.indexOf(n)||r.push(n)},removeEventListener:function(e,n){var r=Od[e],i=r&&r.indexOf(n);i>=0&&r.splice(i,1)},utils:{wrap:PB,wrapYoyo:CB,distribute:cR,random:hR,snap:fR,normalize:AB,getUnit:Cn,clamp:SB,splitColor:_R,toArray:Hr,selector:Ky,mapRange:pR,pipe:bB,unitize:kB,interpolate:RB,shuffle:uR},install:XC,effects:qg,ticker:Er,updateRoot:Kn.updateRoot,plugins:wr,globalTimeline:ct,core:{PropTween:fr,globals:JC,Tween:Mt,Timeline:Kn,Animation:bf,getCache:pa,_removeLinkedListItem:Vm,reverting:function(){return Rn},context:function(e){return e&&st&&(st.data.push(e),e._ctx=st),st},suppressOverwrites:function(e){return y1=e}}};cr("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return jp[t]=Mt[t]});Er.add(Kn.updateRoot);Al=jp.to({},{duration:0});var JB=function(e,n){for(var r=e._pt;r&&r.p!==n&&r.op!==n&&r.fp!==n;)r=r._next;return r},ZB=function(e,n){var r=e._targets,i,s,o;for(i in n)for(s=r.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=JB(o,i)),o&&o.modifier&&o.modifier(n[i],e,r[s],i))},Yg=function(e,n){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(nn(s)&&(l={},cr(s,function(f){return l[f]=1}),s=l),n){l={};for(c in s)l[c]=n(s[c]);s=l}ZB(a,s)}}}},dr=jp.registerPlugin({name:"attr",init:function(e,n,r,i,s){var o,a,l;this.tween=r;for(o in n)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",n[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,n){for(var r=n._pt;r;)Rn?r.set(r.t,r.p,r.b,r):r.r(e,r.d),r=r._next}},{name:"endArray",init:function(e,n){for(var r=n.length;r--;)this.add(e,r,e[r]||0,n[r],0,0,0,0,0,1)}},Yg("roundProps",Yy),Yg("modifiers"),Yg("snap",fR))||jp;Mt.version=Kn.version=dr.version="3.12.5";QC=1;w1()&&hu();Ce.Power0;Ce.Power1;Ce.Power2;Ce.Power3;Ce.Power4;Ce.Linear;Ce.Quad;Ce.Cubic;Ce.Quart;Ce.Quint;Ce.Strong;Ce.Elastic;Ce.Back;Ce.SteppedEase;Ce.Bounce;Ce.Sine;Ce.Expo;Ce.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var QI,eo,Bl,R1,aa,XI,N1,e8=function(){return typeof window<"u"},ks={},Xo=180/Math.PI,$l=Math.PI/180,rl=Math.atan2,JI=1e8,O1=/([A-Z])/g,t8=/(left|right|width|margin|padding|x)/i,n8=/[\s,\(]\S/,ji={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Jy=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},r8=function(e,n){return n.set(n.t,n.p,e===1?n.e:Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},i8=function(e,n){return n.set(n.t,n.p,e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},s8=function(e,n){var r=n.s+n.c*e;n.set(n.t,n.p,~~(r+(r<0?-.5:.5))+n.u,n)},NR=function(e,n){return n.set(n.t,n.p,e?n.e:n.b,n)},OR=function(e,n){return n.set(n.t,n.p,e!==1?n.b:n.e,n)},o8=function(e,n,r){return e.style[n]=r},a8=function(e,n,r){return e.style.setProperty(n,r)},l8=function(e,n,r){return e._gsap[n]=r},u8=function(e,n,r){return e._gsap.scaleX=e._gsap.scaleY=r},c8=function(e,n,r,i,s){var o=e._gsap;o.scaleX=o.scaleY=r,o.renderTransform(s,o)},f8=function(e,n,r,i,s){var o=e._gsap;o[n]=r,o.renderTransform(s,o)},ft="transform",hr=ft+"Origin",h8=function t(e,n){var r=this,i=this.target,s=i.style,o=i._gsap;if(e in ks&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ji[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return r.tfm[a]=is(i,a)}):this.tfm[e]=o.x?o[e]:is(i,e),e===hr&&(this.tfm.zOrigin=o.zOrigin);else return ji.transform.split(",").forEach(function(a){return t.call(r,a,n)});if(this.props.indexOf(ft)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(hr,n,"")),e=ft}(s||n)&&this.props.push(e,n,s[e])},DR=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},d8=function(){var e=this.props,n=this.target,r=n.style,i=n._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?n[e[s]]=e[s+2]:e[s+2]?r[e[s]]=e[s+2]:r.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(O1,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),s=N1(),(!s||!s.isStart)&&!r[ft]&&(DR(r),i.zOrigin&&r[hr]&&(r[hr]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},MR=function(e,n){var r={target:e,props:[],revert:d8,save:h8};return e._gsap||dr.core.getCache(e),n&&n.split(",").forEach(function(i){return r.save(i)}),r},LR,Zy=function(e,n){var r=eo.createElementNS?eo.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):eo.createElement(e);return r&&r.style?r:eo.createElement(e)},Hi=function t(e,n,r){var i=getComputedStyle(e);return i[n]||i.getPropertyValue(n.replace(O1,"-$1").toLowerCase())||i.getPropertyValue(n)||!r&&t(e,du(n)||n,1)||""},ZI="O,Moz,ms,Ms,Webkit".split(","),du=function(e,n,r){var i=n||aa,s=i.style,o=5;if(e in s&&!r)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(ZI[o]+e in s););return o<0?null:(o===3?"ms":o>=0?ZI[o]:"")+e},ev=function(){e8()&&window.document&&(QI=window,eo=QI.document,Bl=eo.documentElement,aa=Zy("div")||{style:{}},Zy("div"),ft=du(ft),hr=ft+"Origin",aa.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",LR=!!du("perspective"),N1=dr.core.reverting,R1=1)},Qg=function t(e){var n=Zy("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(Bl.appendChild(n),n.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=t}catch{}else this._gsapBBox&&(o=this._gsapBBox());return r&&(i?r.insertBefore(this,i):r.appendChild(this)),Bl.removeChild(n),this.style.cssText=s,o},eS=function(e,n){for(var r=n.length;r--;)if(e.hasAttribute(n[r]))return e.getAttribute(n[r])},VR=function(e){var n;try{n=e.getBBox()}catch{n=Qg.call(e,!0)}return n&&(n.width||n.height)||e.getBBox===Qg||(n=Qg.call(e,!0)),n&&!n.width&&!n.x&&!n.y?{x:+eS(e,["x","cx","x1"])||0,y:+eS(e,["y","cy","y1"])||0,width:0,height:0}:n},jR=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&VR(e))},Fa=function(e,n){if(n){var r=e.style,i;n in ks&&n!==hr&&(n=ft),r.removeProperty?(i=n.substr(0,2),(i==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),r.removeProperty(i==="--"?n:n.replace(O1,"-$1").toLowerCase())):r.removeAttribute(n)}},to=function(e,n,r,i,s,o){var a=new fr(e._pt,n,r,0,1,o?OR:NR);return e._pt=a,a.b=i,a.e=s,e._props.push(r),a},tS={deg:1,rad:1,turn:1},p8={grid:1,flex:1},Co=function t(e,n,r,i){var s=parseFloat(r)||0,o=(r+"").trim().substr((s+"").length)||"px",a=aa.style,l=t8.test(n),c=e.tagName.toLowerCase()==="svg",f=(c?"client":"offset")+(l?"Width":"Height"),h=100,p=i==="px",m=i==="%",I,w,b,E;if(i===o||!s||tS[i]||tS[o])return s;if(o!=="px"&&!p&&(s=t(e,n,r,"px")),E=e.getCTM&&jR(e),(m||o==="%")&&(ks[n]||~n.indexOf("adius")))return I=E?e.getBBox()[l?"width":"height"]:e[f],bt(m?s/I*h:s/100*I);if(a[l?"width":"height"]=h+(p?o:i),w=~n.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,E&&(w=(e.ownerSVGElement||{}).parentNode),(!w||w===eo||!w.appendChild)&&(w=eo.body),b=w._gsap,b&&m&&b.width&&l&&b.time===Er.time&&!b.uncache)return bt(s/b.width*h);if(m&&(n==="height"||n==="width")){var v=e.style[n];e.style[n]=h+i,I=e[f],v?e.style[n]=v:Fa(e,n)}else(m||o==="%")&&!p8[Hi(w,"display")]&&(a.position=Hi(e,"position")),w===e&&(a.position="static"),w.appendChild(aa),I=aa[f],w.removeChild(aa),a.position="absolute";return l&&m&&(b=pa(w),b.time=Er.time,b.width=w[f]),bt(p?I*s/h:I&&s?h/I*s:0)},is=function(e,n,r,i){var s;return R1||ev(),n in ji&&n!=="transform"&&(n=ji[n],~n.indexOf(",")&&(n=n.split(",")[0])),ks[n]&&n!=="transform"?(s=Af(e,i),s=n!=="transformOrigin"?s[n]:s.svg?s.origin:Up(Hi(e,hr))+" "+s.zOrigin+"px"):(s=e.style[n],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Fp[n]&&Fp[n](e,n,r)||Hi(e,n)||eR(e,n)||(n==="opacity"?1:0))),r&&!~(s+"").trim().indexOf(" ")?Co(e,n,s,r)+r:s},m8=function(e,n,r,i){if(!r||r==="none"){var s=du(n,e,1),o=s&&Hi(e,s,1);o&&o!==r?(n=s,r=o):n==="borderColor"&&(r=Hi(e,"borderTopColor"))}var a=new fr(this._pt,e.style,n,0,1,PR),l=0,c=0,f,h,p,m,I,w,b,E,v,x,A,O;if(a.b=r,a.e=i,r+="",i+="",i==="auto"&&(w=e.style[n],e.style[n]=i,i=Hi(e,n)||i,w?e.style[n]=w:Fa(e,n)),f=[r,i],vR(f),r=f[0],i=f[1],p=r.match(kl)||[],O=i.match(kl)||[],O.length){for(;h=kl.exec(i);)b=h[0],v=i.substring(l,h.index),I?I=(I+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(I=1),b!==(w=p[c++]||"")&&(m=parseFloat(w)||0,A=w.substr((m+"").length),b.charAt(1)==="="&&(b=zl(m,b)+A),E=parseFloat(b),x=b.substr((E+"").length),l=kl.lastIndex-x.length,x||(x=x||Ar.units[n]||A,l===i.length&&(i+=x,a.e+=x)),A!==x&&(m=Co(e,n,w,x)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:m,c:E-m,m:I&&I<4||n==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=n==="display"&&i==="none"?OR:NR;return KC.test(i)&&(a.e=0),this._pt=a,a},nS={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},g8=function(e){var n=e.split(" "),r=n[0],i=n[1]||"50%";return(r==="top"||r==="bottom"||i==="left"||i==="right")&&(e=r,r=i,i=e),n[0]=nS[r]||r,n[1]=nS[i]||i,n.join(" ")},_8=function(e,n){if(n.tween&&n.tween._time===n.tween._dur){var r=n.t,i=r.style,s=n.u,o=r._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ks[a]&&(l=1,a=a==="transformOrigin"?hr:ft),Fa(r,a);l&&(Fa(r,ft),o&&(o.svg&&r.removeAttribute("transform"),Af(r,1),o.uncache=1,DR(i)))}},Fp={clearProps:function(e,n,r,i,s){if(s.data!=="isFromStart"){var o=e._pt=new fr(e._pt,n,r,0,0,_8);return o.u=i,o.pr=-10,o.tween=s,e._props.push(r),1}}},kf=[1,0,0,1,0,0],FR={},UR=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},rS=function(e){var n=Hi(e,ft);return UR(n)?kf:n.substr(7).match(GC).map(bt)},D1=function(e,n){var r=e._gsap||pa(e),i=e.style,s=rS(e),o,a,l,c;return r.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?kf:s):(s===kf&&!e.offsetParent&&e!==Bl&&!r.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,Bl.appendChild(e)),s=rS(e),l?i.display=l:Fa(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Bl.removeChild(e))),n&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},tv=function(e,n,r,i,s,o){var a=e._gsap,l=s||D1(e,!0),c=a.xOrigin||0,f=a.yOrigin||0,h=a.xOffset||0,p=a.yOffset||0,m=l[0],I=l[1],w=l[2],b=l[3],E=l[4],v=l[5],x=n.split(" "),A=parseFloat(x[0])||0,O=parseFloat(x[1])||0,D,T,y,S;r?l!==kf&&(T=m*b-I*w)&&(y=A*(b/T)+O*(-w/T)+(w*v-b*E)/T,S=A*(-I/T)+O*(m/T)-(m*v-I*E)/T,A=y,O=S):(D=VR(e),A=D.x+(~x[0].indexOf("%")?A/100*D.width:A),O=D.y+(~(x[1]||x[0]).indexOf("%")?O/100*D.height:O)),i||i!==!1&&a.smooth?(E=A-c,v=O-f,a.xOffset=h+(E*m+v*w)-E,a.yOffset=p+(E*I+v*b)-v):a.xOffset=a.yOffset=0,a.xOrigin=A,a.yOrigin=O,a.smooth=!!i,a.origin=n,a.originIsAbsolute=!!r,e.style[hr]="0px 0px",o&&(to(o,a,"xOrigin",c,A),to(o,a,"yOrigin",f,O),to(o,a,"xOffset",h,a.xOffset),to(o,a,"yOffset",p,a.yOffset)),e.setAttribute("data-svg-origin",A+" "+O)},Af=function(e,n){var r=e._gsap||new IR(e);if("x"in r&&!n&&!r.uncache)return r;var i=e.style,s=r.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Hi(e,hr)||"0",f,h,p,m,I,w,b,E,v,x,A,O,D,T,y,S,k,N,R,C,ne,ce,oe,Z,F,H,M,se,de,ke,Re,Le;return f=h=p=w=b=E=v=x=A=0,m=I=1,r.svg=!!(e.getCTM&&jR(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ft]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ft]!=="none"?l[ft]:"")),i.scale=i.rotate=i.translate="none"),T=D1(e,r.svg),r.svg&&(r.uncache?(F=e.getBBox(),c=r.xOrigin-F.x+"px "+(r.yOrigin-F.y)+"px",Z=""):Z=!n&&e.getAttribute("data-svg-origin"),tv(e,Z||c,!!Z||r.originIsAbsolute,r.smooth!==!1,T)),O=r.xOrigin||0,D=r.yOrigin||0,T!==kf&&(N=T[0],R=T[1],C=T[2],ne=T[3],f=ce=T[4],h=oe=T[5],T.length===6?(m=Math.sqrt(N*N+R*R),I=Math.sqrt(ne*ne+C*C),w=N||R?rl(R,N)*Xo:0,v=C||ne?rl(C,ne)*Xo+w:0,v&&(I*=Math.abs(Math.cos(v*$l))),r.svg&&(f-=O-(O*N+D*C),h-=D-(O*R+D*ne))):(Le=T[6],ke=T[7],M=T[8],se=T[9],de=T[10],Re=T[11],f=T[12],h=T[13],p=T[14],y=rl(Le,de),b=y*Xo,y&&(S=Math.cos(-y),k=Math.sin(-y),Z=ce*S+M*k,F=oe*S+se*k,H=Le*S+de*k,M=ce*-k+M*S,se=oe*-k+se*S,de=Le*-k+de*S,Re=ke*-k+Re*S,ce=Z,oe=F,Le=H),y=rl(-C,de),E=y*Xo,y&&(S=Math.cos(-y),k=Math.sin(-y),Z=N*S-M*k,F=R*S-se*k,H=C*S-de*k,Re=ne*k+Re*S,N=Z,R=F,C=H),y=rl(R,N),w=y*Xo,y&&(S=Math.cos(y),k=Math.sin(y),Z=N*S+R*k,F=ce*S+oe*k,R=R*S-N*k,oe=oe*S-ce*k,N=Z,ce=F),b&&Math.abs(b)+Math.abs(w)>359.9&&(b=w=0,E=180-E),m=bt(Math.sqrt(N*N+R*R+C*C)),I=bt(Math.sqrt(oe*oe+Le*Le)),y=rl(ce,oe),v=Math.abs(y)>2e-4?y*Xo:0,A=Re?1/(Re<0?-Re:Re):0),r.svg&&(Z=e.getAttribute("transform"),r.forceCSS=e.setAttribute("transform","")||!UR(Hi(e,ft)),Z&&e.setAttribute("transform",Z))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(m*=-1,v+=w<=0?180:-180,w+=w<=0?180:-180):(I*=-1,v+=v<=0?180:-180)),n=n||r.uncache,r.x=f-((r.xPercent=f&&(!n&&r.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-f)?-50:0)))?e.offsetWidth*r.xPercent/100:0)+o,r.y=h-((r.yPercent=h&&(!n&&r.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*r.yPercent/100:0)+o,r.z=p+o,r.scaleX=bt(m),r.scaleY=bt(I),r.rotation=bt(w)+a,r.rotationX=bt(b)+a,r.rotationY=bt(E)+a,r.skewX=v+a,r.skewY=x+a,r.transformPerspective=A+o,(r.zOrigin=parseFloat(c.split(" ")[2])||!n&&r.zOrigin||0)&&(i[hr]=Up(c)),r.xOffset=r.yOffset=0,r.force3D=Ar.force3D,r.renderTransform=r.svg?v8:LR?zR:y8,r.uncache=0,r},Up=function(e){return(e=e.split(" "))[0]+" "+e[1]},Xg=function(e,n,r){var i=Cn(n);return bt(parseFloat(n)+parseFloat(Co(e,"x",r+"px",i)))+i},y8=function(e,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,zR(e,n)},Ho="0deg",Wu="0px",Go=") ",zR=function(e,n){var r=n||this,i=r.xPercent,s=r.yPercent,o=r.x,a=r.y,l=r.z,c=r.rotation,f=r.rotationY,h=r.rotationX,p=r.skewX,m=r.skewY,I=r.scaleX,w=r.scaleY,b=r.transformPerspective,E=r.force3D,v=r.target,x=r.zOrigin,A="",O=E==="auto"&&e&&e!==1||E===!0;if(x&&(h!==Ho||f!==Ho)){var D=parseFloat(f)*$l,T=Math.sin(D),y=Math.cos(D),S;D=parseFloat(h)*$l,S=Math.cos(D),o=Xg(v,o,T*S*-x),a=Xg(v,a,-Math.sin(D)*-x),l=Xg(v,l,y*S*-x+x)}b!==Wu&&(A+="perspective("+b+Go),(i||s)&&(A+="translate("+i+"%, "+s+"%) "),(O||o!==Wu||a!==Wu||l!==Wu)&&(A+=l!==Wu||O?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Go),c!==Ho&&(A+="rotate("+c+Go),f!==Ho&&(A+="rotateY("+f+Go),h!==Ho&&(A+="rotateX("+h+Go),(p!==Ho||m!==Ho)&&(A+="skew("+p+", "+m+Go),(I!==1||w!==1)&&(A+="scale("+I+", "+w+Go),v.style[ft]=A||"translate(0, 0)"},v8=function(e,n){var r=n||this,i=r.xPercent,s=r.yPercent,o=r.x,a=r.y,l=r.rotation,c=r.skewX,f=r.skewY,h=r.scaleX,p=r.scaleY,m=r.target,I=r.xOrigin,w=r.yOrigin,b=r.xOffset,E=r.yOffset,v=r.forceCSS,x=parseFloat(o),A=parseFloat(a),O,D,T,y,S;l=parseFloat(l),c=parseFloat(c),f=parseFloat(f),f&&(f=parseFloat(f),c+=f,l+=f),l||c?(l*=$l,c*=$l,O=Math.cos(l)*h,D=Math.sin(l)*h,T=Math.sin(l-c)*-p,y=Math.cos(l-c)*p,c&&(f*=$l,S=Math.tan(c-f),S=Math.sqrt(1+S*S),T*=S,y*=S,f&&(S=Math.tan(f),S=Math.sqrt(1+S*S),O*=S,D*=S)),O=bt(O),D=bt(D),T=bt(T),y=bt(y)):(O=h,y=p,D=T=0),(x&&!~(o+"").indexOf("px")||A&&!~(a+"").indexOf("px"))&&(x=Co(m,"x",o,"px"),A=Co(m,"y",a,"px")),(I||w||b||E)&&(x=bt(x+I-(I*O+w*T)+b),A=bt(A+w-(I*D+w*y)+E)),(i||s)&&(S=m.getBBox(),x=bt(x+i/100*S.width),A=bt(A+s/100*S.height)),S="matrix("+O+","+D+","+T+","+y+","+x+","+A+")",m.setAttribute("transform",S),v&&(m.style[ft]=S)},w8=function(e,n,r,i,s){var o=360,a=nn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Xo:1),c=l-i,f=i+c+"deg",h,p;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*JI)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*JI)%o-~~(c/o)*o)),e._pt=p=new fr(e._pt,n,r,i,c,r8),p.e=f,p.u="deg",e._props.push(r),p},iS=function(e,n){for(var r in n)e[r]=n[r];return e},E8=function(e,n,r){var i=iS({},r._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=r.style,a,l,c,f,h,p,m,I;i.svg?(c=r.getAttribute("transform"),r.setAttribute("transform",""),o[ft]=n,a=Af(r,1),Fa(r,ft),r.setAttribute("transform",c)):(c=getComputedStyle(r)[ft],o[ft]=n,a=Af(r,1),o[ft]=c);for(l in ks)c=i[l],f=a[l],c!==f&&s.indexOf(l)<0&&(m=Cn(c),I=Cn(f),h=m!==I?Co(r,l,c,I):parseFloat(c),p=parseFloat(f),e._pt=new fr(e._pt,a,l,h,p-h,Jy),e._pt.u=I||0,e._props.push(l));iS(a,i)};cr("padding,margin,Width,Radius",function(t,e){var n="Top",r="Right",i="Bottom",s="Left",o=(e<3?[n,r,i,s]:[n+s,n+r,i+r,i+s]).map(function(a){return e<2?t+a:"border"+a+t});Fp[e>1?"border"+t:t]=function(a,l,c,f,h){var p,m;if(arguments.length<4)return p=o.map(function(I){return is(a,I,c)}),m=p.join(" "),m.split(p[0]).length===5?p[0]:m;p=(f+"").split(" "),m={},o.forEach(function(I,w){return m[I]=p[w]=p[w]||p[(w-1)/2|0]}),a.init(l,m,h)}});var BR={name:"css",register:ev,targetTest:function(e){return e.style&&e.nodeType},init:function(e,n,r,i,s){var o=this._props,a=e.style,l=r.vars.startAt,c,f,h,p,m,I,w,b,E,v,x,A,O,D,T,y;R1||ev(),this.styles=this.styles||MR(e),y=this.styles.props,this.tween=r;for(w in n)if(w!=="autoRound"&&(f=n[w],!(wr[w]&&SR(w,n,r,i,e,s)))){if(m=typeof f,I=Fp[w],m==="function"&&(f=f.call(r,i,e,s),m=typeof f),m==="string"&&~f.indexOf("random(")&&(f=Sf(f)),I)I(this,e,w,f,r)&&(T=1);else if(w.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(w)+"").trim(),f+="",vo.lastIndex=0,vo.test(c)||(b=Cn(c),E=Cn(f)),E?b!==E&&(c=Co(e,w,c,E)+E):b&&(f+=b),this.add(a,"setProperty",c,f,i,s,0,0,w),o.push(w),y.push(w,0,a[w]);else if(m!=="undefined"){if(l&&w in l?(c=typeof l[w]=="function"?l[w].call(r,i,e,s):l[w],nn(c)&&~c.indexOf("random(")&&(c=Sf(c)),Cn(c+"")||c==="auto"||(c+=Ar.units[w]||Cn(is(e,w))||""),(c+"").charAt(1)==="="&&(c=is(e,w))):c=is(e,w),p=parseFloat(c),v=m==="string"&&f.charAt(1)==="="&&f.substr(0,2),v&&(f=f.substr(2)),h=parseFloat(f),w in ji&&(w==="autoAlpha"&&(p===1&&is(e,"visibility")==="hidden"&&h&&(p=0),y.push("visibility",0,a.visibility),to(this,a,"visibility",p?"inherit":"hidden",h?"inherit":"hidden",!h)),w!=="scale"&&w!=="transform"&&(w=ji[w],~w.indexOf(",")&&(w=w.split(",")[0]))),x=w in ks,x){if(this.styles.save(w),A||(O=e._gsap,O.renderTransform&&!n.parseTransform||Af(e,n.parseTransform),D=n.smoothOrigin!==!1&&O.smooth,A=this._pt=new fr(this._pt,a,ft,0,1,O.renderTransform,O,0,-1),A.dep=1),w==="scale")this._pt=new fr(this._pt,O,"scaleY",O.scaleY,(v?zl(O.scaleY,v+h):h)-O.scaleY||0,Jy),this._pt.u=0,o.push("scaleY",w),w+="X";else if(w==="transformOrigin"){y.push(hr,0,a[hr]),f=g8(f),O.svg?tv(e,f,0,D,0,this):(E=parseFloat(f.split(" ")[2])||0,E!==O.zOrigin&&to(this,O,"zOrigin",O.zOrigin,E),to(this,a,w,Up(c),Up(f)));continue}else if(w==="svgOrigin"){tv(e,f,1,D,0,this);continue}else if(w in FR){w8(this,O,w,p,v?zl(p,v+f):f);continue}else if(w==="smoothOrigin"){to(this,O,"smooth",O.smooth,f);continue}else if(w==="force3D"){O[w]=f;continue}else if(w==="transform"){E8(this,f,e);continue}}else w in a||(w=du(w)||w);if(x||(h||h===0)&&(p||p===0)&&!n8.test(f)&&w in a)b=(c+"").substr((p+"").length),h||(h=0),E=Cn(f)||(w in Ar.units?Ar.units[w]:b),b!==E&&(p=Co(e,w,c,E)),this._pt=new fr(this._pt,x?O:a,w,p,(v?zl(p,v+h):h)-p,!x&&(E==="px"||w==="zIndex")&&n.autoRound!==!1?s8:Jy),this._pt.u=E||0,b!==E&&E!=="%"&&(this._pt.b=c,this._pt.r=i8);else if(w in a)m8.call(this,e,w,c,v?v+f:f);else if(w in e)this.add(e,w,c||e[w],v?v+f:f,i,s);else if(w!=="parseTransform"){T1(w,f);continue}x||(w in a?y.push(w,0,a[w]):y.push(w,1,c||e[w])),o.push(w)}}T&&CR(this)},render:function(e,n){if(n.tween._time||!N1())for(var r=n._pt;r;)r.r(e,r.d),r=r._next;else n.styles.revert()},get:is,aliases:ji,getSetter:function(e,n,r){var i=ji[n];return i&&i.indexOf(",")<0&&(n=i),n in ks&&n!==hr&&(e._gsap.x||is(e,"x"))?r&&XI===r?n==="scale"?u8:l8:(XI=r||{})&&(n==="scale"?c8:f8):e.style&&!v1(e.style[n])?o8:~n.indexOf("-")?a8:P1(e,n)},core:{_removeProperty:Fa,_getMatrix:D1}};dr.utils.checkPrefix=du;dr.core.getStyleSaver=MR;(function(t,e,n,r){var i=cr(t+","+e+","+n,function(s){ks[s]=1});cr(e,function(s){Ar.units[s]="deg",FR[s]=1}),ji[i[13]]=t+","+e,cr(r,function(s){var o=s.split(":");ji[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");cr("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){Ar.units[t]="px"});dr.registerPlugin(BR);var Ro=dr.registerPlugin(BR)||dr;Ro.core.Tween;const T8=""+new URL("fashion-CxeNlKyH.mp4",import.meta.url).href,I8=()=>{const t=U.useRef(null),e=U.useRef(null),n=U.useRef(null);return U.useEffect(()=>{const r=Ro.timeline();Ro.set(e.current,{opacity:0,scale:3,x:"50%",y:"50%",transformOrigin:"center center"}),r.to(e.current,{opacity:1,scale:1,x:"0%",y:"0%",duration:2,ease:"power2.out"}).fromTo(n.current,{y:100,opacity:0},{y:0,opacity:1,duration:2,ease:"power2.out"},"-=1.5")},[]),g.jsxs("div",{className:"video-container",children:[g.jsxs("video",{ref:t,autoPlay:!0,muted:!0,loop:!0,className:"background-video",children:[g.jsx("source",{src:T8,type:"video/mp4"}),"Your browser does not support the video tag."]}),g.jsxs("div",{className:"overlay",children:[g.jsx("h1",{ref:e,className:"text text1",children:"We are fashion"}),g.jsx("h2",{ref:n,className:"text text2",children:"Come and be elegant"})]}),g.jsx("div",{className:"dark-overlay"})]})};var $R={exports:{}};(function(t,e){(function(r,i){t.exports=i(U)})(typeof self<"u"?self:H2,function(n){return function(r){var i={};function s(o){if(i[o])return i[o].exports;var a=i[o]={i:o,l:!1,exports:{}};return r[o].call(a.exports,a,a.exports,s),a.l=!0,a.exports}return s.m=r,s.c=i,s.d=function(o,a,l){s.o(o,a)||Object.defineProperty(o,a,{enumerable:!0,get:l})},s.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},s.t=function(o,a){if(1&a&&(o=s(o)),8&a||4&a&&typeof o=="object"&&o&&o.__esModule)return o;var l=Object.create(null);if(s.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:o}),2&a&&typeof o!="string")for(var c in o)s.d(l,c,(function(f){return o[f]}).bind(null,c));return l},s.n=function(o){var a=o&&o.__esModule?function(){return o.default}:function(){return o};return s.d(a,"a",a),a},s.o=function(o,a){return Object.prototype.hasOwnProperty.call(o,a)},s.p="",s(s.s=3)}([function(r,i){r.exports=n},function(r,i,s){function o(E){return(o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(x){return typeof x}:function(x){return x&&typeof Symbol=="function"&&x.constructor===Symbol&&x!==Symbol.prototype?"symbol":typeof x})(E)}function a(E,v){if(!(E instanceof v))throw new TypeError("Cannot call a class as a function")}function l(E,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function");E.prototype=Object.create(v&&v.prototype,{constructor:{value:E,writable:!0,configurable:!0}}),v&&c(E,v)}function c(E,v){return(c=Object.setPrototypeOf||function(A,O){return A.__proto__=O,A})(E,v)}function f(E){var v=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var A,O=p(E);if(v){var D=p(this).constructor;A=Reflect.construct(O,arguments,D)}else A=O.apply(this,arguments);return h(this,A)}}function h(E,v){return!v||o(v)!=="object"&&typeof v!="function"?function(A){if(A===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return A}(E):v}function p(E){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(x){return x.__proto__||Object.getPrototypeOf(x)})(E)}var m=this&&this.__importDefault||function(E){return E&&E.__esModule?E:{default:E}};Object.defineProperty(i,"__esModule",{value:!0}),i.Background=i.Parallax=void 0;var I=m(s(0)),w=function(E){l(x,E);var v=f(x);function x(){return a(this,x),v.apply(this,arguments)}return x}(I.default.Component);i.Parallax=w;var b=function(E){l(x,E);var v=f(x);function x(){return a(this,x),v.apply(this,arguments)}return x}(I.default.Component);i.Background=b},function(r,i,s){Object.defineProperty(i,"__esModule",{value:!0}),i.canUseDOM=i.getNodeHeight=i.isScrolledIntoView=i.getWindowHeight=void 0,i.getWindowHeight=function(o){if(!o)return 0;var a=window,l=document,c=l.documentElement,f=l.getElementsByTagName("body")[0];return a.innerHeight||c.clientHeight||f.clientHeight},i.isScrolledIntoView=function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,l=arguments.length>2?arguments[2]:void 0;if(!l)return!1;var c=o.getBoundingClientRect().top-a,f=o.getBoundingClientRect().bottom+a;return c<=i.getWindowHeight(l)&&f>=0},i.getNodeHeight=function(o,a){return o?a&&"clientHeight"in a?a.clientHeight:i.getWindowHeight(o):0},i.canUseDOM=function(){return!(typeof window>"u"||!window.document||!window.document.createElement)}},function(r,i,s){var o=this&&this.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(i,"__esModule",{value:!0}),i.Background=i.Parallax=void 0;var a=o(s(4));i.Parallax=a.default;var l=o(s(7));i.Background=l.default},function(r,i,s){function o(A){return(o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D})(A)}function a(A,O){for(var D=0;D<O.length;D++){var T=O[D];T.enumerable=T.enumerable||!1,T.configurable=!0,"value"in T&&(T.writable=!0),Object.defineProperty(A,T.key,T)}}function l(A,O){return(l=Object.setPrototypeOf||function(T,y){return T.__proto__=y,T})(A,O)}function c(A){var O=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var T,y=h(A);if(O){var S=h(this).constructor;T=Reflect.construct(y,arguments,S)}else T=y.apply(this,arguments);return f(this,T)}}function f(A,O){return!O||o(O)!=="object"&&typeof O!="function"?function(T){if(T===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return T}(A):O}function h(A){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(D){return D.__proto__||Object.getPrototypeOf(D)})(A)}var p=this&&this.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(i,"__esModule",{value:!0});var m=p(s(0)),I=s(1),w=s(5),b=s(2),E=p(s(6)),v={position:"absolute",left:"50%",WebkitTransform:"translate3d(-50%, 0, 0)",transform:"translate3d(-50%, 0, 0)",WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",MozBackfaceVisibility:"hidden",MsBackfaceVisibility:"hidden"},x=function(A){(function(y,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function");y.prototype=Object.create(S&&S.prototype,{constructor:{value:y,writable:!0,configurable:!0}}),S&&l(y,S)})(D,A);var O=c(D);function D(T){var y;return function(k,N){if(!(k instanceof N))throw new TypeError("Cannot call a class as a function")}(this,D),(y=O.call(this,T)).onWindowResize=function(){y.parentHeight=b.getNodeHeight(y.canUseDOM,y.parent),y.updatePosition()},y.onWindowLoad=function(){y.updatePosition()},y.onScroll=function(){if(y.canUseDOM){var S=Date.now();S-y.timestamp>=10&&b.isScrolledIntoView(y.node,100,y.canUseDOM)&&(window.requestAnimationFrame(y.updatePosition),y.timestamp=S)}},y.onContentMount=function(S){y.content=S},y.updatePosition=function(){if(y.content){var S=!1;y.contentHeight=y.content.getBoundingClientRect().height,y.contentWidth=y.node.getBoundingClientRect().width,y.img&&y.img.naturalWidth/y.img.naturalHeight<y.contentWidth/y.getImageHeight()&&(S=!0);var k=w.getRelativePosition(y.node,y.canUseDOM),N=!!y.img,R=y.bg&&y.state.splitChildren.bgChildren.length>0;N&&y.setImagePosition(k,S),R&&y.setBackgroundPosition(k),N||R||y.setState({percentage:k})}},y.state={bgImage:T.bgImage,bgImageSrcSet:T.bgImageSrcSet,bgImageSizes:T.bgImageSizes,imgStyle:v,bgStyle:Object.assign(Object.assign({},v),T.bgStyle),percentage:0,splitChildren:w.getSplitChildren(T)},y.canUseDOM=b.canUseDOM(),y.node=null,y.content=null,y.bgImageLoaded=!1,y.bgImageRef=void 0,y.parent=T.parent,y.parentHeight=b.getNodeHeight(y.canUseDOM,y.parent),y.timestamp=Date.now(),y.isDynamicBlur=w.getHasDynamicBlur(T.blur),y}return function(y,S,k){return S&&a(y.prototype,S),k&&a(y,k),y}(D,[{key:"componentDidMount",value:function(){var y=this.props.parent,S=this.state,k=S.bgImage,N=S.bgImageSrcSet,R=S.bgImageSizes;this.parent=y||document,this.addListeners(),k?this.loadImage(k,N,R):this.updatePosition()}},{key:"componentDidUpdate",value:function(y){var S=this.props,k=S.parent,N=S.bgImage,R=S.bgImageSrcSet,C=S.bgImageSizes,ne=this.state.bgImage;y.parent!==k&&(this.removeListeners(this.parent),this.parent=k,k&&this.addListeners()),this.parentHeight=b.getNodeHeight(this.canUseDOM,this.parent),ne!==N&&this.loadImage(N,R,C)}},{key:"componentWillUnmount",value:function(){this.removeListeners(this.parent),this.releaseImage()}},{key:"setBackgroundPosition",value:function(y){var S=this.props,k=S.disabled,N=S.strength,R=Object.assign({},this.state.bgStyle);if(!k){var C="translate3d(-50%, ".concat((N<0?N:0)-N*y,"px, 0)");R.WebkitTransform=C,R.transform=C}this.setState({bgStyle:R,percentage:y})}},{key:"setImagePosition",value:function(y){var S=arguments.length>1&&arguments[1]!==void 0&&arguments[1],k=this.props,N=k.disabled,R=k.strength,C=k.blur,ne=S?"auto":"".concat(this.getImageHeight(),"px"),ce=S?"".concat(this.contentWidth,"px"):"auto",oe=Object.assign(Object.assign({},this.state.imgStyle),{height:ne,width:ce});if(!N){var Z=R<0,F=(Z?R:0)-R*y,H="translate3d(-50%, ".concat(F,"px, 0)"),M="none";C&&(M="blur(".concat(w.getBlurValue(this.isDynamicBlur,C,y),"px)")),oe.WebkitTransform=H,oe.transform=H,oe.WebkitFilter=M,oe.filter=M}this.setState({imgStyle:oe,percentage:y})}},{key:"getImageHeight",value:function(){var y=this.props.strength,S=(y<0?2.5:1)*Math.abs(y);return Math.floor(this.contentHeight+S)}},{key:"loadImage",value:function(y,S,k){var N=this;this.releaseImage(),this.bgImageRef=new Image,this.bgImageRef.onload=function(R){N.setState({bgImage:y,bgImageSrcSet:S,bgImageSizes:k},function(){return N.updatePosition()}),N.props.onLoad&&N.props.onLoad(R)},this.bgImageRef.onerror=this.bgImageRef.onload,this.bgImageRef.src=y,this.bgImageRef.srcset=S||"",this.bgImageRef.sizes=k||""}},{key:"releaseImage",value:function(){this.bgImageRef&&(this.bgImageRef.onload=null,this.bgImageRef.onerror=null,delete this.bgImageRef)}},{key:"addListeners",value:function(){this.canUseDOM&&this.parent&&(this.parent.addEventListener("scroll",this.onScroll,!1),window.addEventListener("resize",this.onWindowResize,!1),window.addEventListener("load",this.onWindowLoad,!1))}},{key:"removeListeners",value:function(y){this.canUseDOM&&(y&&y.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),window.removeEventListener("load",this.onWindowLoad,!1))}},{key:"render",value:function(){var y=this,S=this.props,k=S.className,N=S.style,R=S.bgClassName,C=S.contentClassName,ne=S.bgImageAlt,ce=S.renderLayer,oe=S.bgImageStyle,Z=S.lazy,F=this.state,H=F.bgImage,M=F.bgImageSrcSet,se=F.bgImageSizes,de=F.percentage,ke=F.imgStyle,Re=F.bgStyle,Le=F.splitChildren;return m.default.createElement("div",{className:"react-parallax ".concat(k),style:Object.assign({position:"relative",overflow:"hidden"},N),ref:function(Se){y.node=Se}},H?m.default.createElement("img",{className:R,src:H,srcSet:M,sizes:se,ref:function(Se){y.img=Se},alt:ne,style:Object.assign(Object.assign({},ke),oe),loading:Z?"lazy":"eager"}):null,ce?ce(-(de-1)):null,Le.bgChildren.length>0?m.default.createElement("div",{className:"react-parallax-background-children",ref:function(Se){y.bg=Se},style:Re},Le.bgChildren):null,m.default.createElement(E.default,{onMount:this.onContentMount,className:C},Le.children))}}],[{key:"getDerivedStateFromProps",value:function(y){return{splitChildren:w.getSplitChildren(y)}}}]),D}(I.Parallax);x.defaultProps={bgClassName:"react-parallax-bgimage",bgImageAlt:"",className:"",contentClassName:"",disabled:!1,strength:100},i.default=x},function(r,i,s){function o(c){return(o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h})(c)}Object.defineProperty(i,"__esModule",{value:!0}),i.setBlur=i.getBlurValue=i.getHasDynamicBlur=i.getSplitChildren=i.getRelativePosition=i.getPercentage=void 0;var a=s(0),l=s(2);i.getPercentage=function(c,f,h){return(h-c)/(f-c)||0},i.getRelativePosition=function(c,f){if(!f)return 0;var h=c.getBoundingClientRect(),p=h.top,m=h.height,I=l.getNodeHeight(f),w=m>I?m:I,b=Math.round(p>w?w:p);return i.getPercentage(0,w,b)},i.getSplitChildren=function(c){var f=[],h=a.Children.toArray(c.children);return h.forEach(function(p,m){var I=p;I.type&&I.type.isParallaxBackground&&(f=f.concat(h.splice(m,1)))}),{bgChildren:f,children:h}},i.getHasDynamicBlur=function(c){return o(c)==="object"&&c.min!==void 0&&c.max!==void 0},i.getBlurValue=function(c,f,h){return c?f.min+(1-h)*f.max:f},i.setBlur=function(c,f){c.style.webkitFilter="blur(".concat(f,"px)"),c.style.filter="blur(".concat(f,"px)")}},function(r,i,s){var o=this&&this.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(i,"__esModule",{value:!0});var a=o(s(0));i.default=function(c){var f=c.children,h=c.onMount,p=c.className;return a.default.createElement("div",{ref:function(I){return h(I)},className:p||"react-parallax-content",style:{position:"relative"}},f)}},function(r,i,s){function o(b){return(o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v})(b)}function a(b,E){if(!(b instanceof E))throw new TypeError("Cannot call a class as a function")}function l(b,E){for(var v=0;v<E.length;v++){var x=E[v];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(b,x.key,x)}}function c(b,E){return(c=Object.setPrototypeOf||function(x,A){return x.__proto__=A,x})(b,E)}function f(b){var E=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var x,A=p(b);if(E){var O=p(this).constructor;x=Reflect.construct(A,arguments,O)}else x=A.apply(this,arguments);return h(this,x)}}function h(b,E){return!E||o(E)!=="object"&&typeof E!="function"?function(x){if(x===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return x}(b):E}function p(b){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(v){return v.__proto__||Object.getPrototypeOf(v)})(b)}var m=this&&this.__importDefault||function(b){return b&&b.__esModule?b:{default:b}};Object.defineProperty(i,"__esModule",{value:!0});var I=m(s(0)),w=function(b){(function(A,O){if(typeof O!="function"&&O!==null)throw new TypeError("Super expression must either be null or a function");A.prototype=Object.create(O&&O.prototype,{constructor:{value:A,writable:!0,configurable:!0}}),O&&c(A,O)})(v,b);var E=f(v);function v(){return a(this,v),E.apply(this,arguments)}return function(A,O,D){return O&&l(A.prototype,O),A}(v,[{key:"render",value:function(){var A=this.props,O=A.className,D=A.children;return I.default.createElement("div",{className:"react-parallax-background ".concat(O)},D)}}]),v}(s(1).Background);w.defaultProps={className:""},w.isParallaxBackground=!0,i.default=w}])})})($R);var la=$R.exports;function S8(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function x8(t,e,n){return e&&S8(t.prototype,e),t}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var fn,Dd,Tr,no,ro,ql,qR,Jo,Nc,WR,fs,ai,HR,GR=function(){return fn||typeof window<"u"&&(fn=window.gsap)&&fn.registerPlugin&&fn},KR=1,Pl=[],Ee=[],Gi=[],Oc=Date.now,nv=function(e,n){return n},b8=function(){var e=Nc.core,n=e.bridge||{},r=e._scrollers,i=e._proxies;r.push.apply(r,Ee),i.push.apply(i,Gi),Ee=r,Gi=i,nv=function(o,a){return n[o](a)}},wo=function(e,n){return~Gi.indexOf(e)&&Gi[Gi.indexOf(e)+1][n]},Dc=function(e){return!!~WR.indexOf(e)},$n=function(e,n,r,i,s){return e.addEventListener(n,r,{passive:i!==!1,capture:!!s})},Bn=function(e,n,r,i){return e.removeEventListener(n,r,!!i)},Yh="scrollLeft",Qh="scrollTop",rv=function(){return fs&&fs.isPressed||Ee.cache++},zp=function(e,n){var r=function i(s){if(s||s===0){KR&&(Tr.history.scrollRestoration="manual");var o=fs&&fs.isPressed;s=i.v=Math.round(s)||(fs&&fs.iOS?1:0),e(s),i.cacheID=Ee.cache,o&&nv("ss",s)}else(n||Ee.cache!==i.cacheID||nv("ref"))&&(i.cacheID=Ee.cache,i.v=e());return i.v+i.offset};return r.offset=0,e&&r},Yn={s:Yh,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:zp(function(t){return arguments.length?Tr.scrollTo(t,Bt.sc()):Tr.pageXOffset||no[Yh]||ro[Yh]||ql[Yh]||0})},Bt={s:Qh,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Yn,sc:zp(function(t){return arguments.length?Tr.scrollTo(Yn.sc(),t):Tr.pageYOffset||no[Qh]||ro[Qh]||ql[Qh]||0})},nr=function(e,n){return(n&&n._ctx&&n._ctx.selector||fn.utils.toArray)(e)[0]||(typeof e=="string"&&fn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},No=function(e,n){var r=n.s,i=n.sc;Dc(e)&&(e=no.scrollingElement||ro);var s=Ee.indexOf(e),o=i===Bt.sc?1:2;!~s&&(s=Ee.push(e)-1),Ee[s+o]||$n(e,"scroll",rv);var a=Ee[s+o],l=a||(Ee[s+o]=zp(wo(e,r),!0)||(Dc(e)?i:zp(function(c){return arguments.length?e[r]=c:e[r]})));return l.target=e,a||(l.smooth=fn.getProperty(e,"scrollBehavior")==="smooth"),l},iv=function(e,n,r){var i=e,s=e,o=Oc(),a=o,l=n||50,c=Math.max(500,l*3),f=function(I,w){var b=Oc();w||b-o>l?(s=i,i=I,a=o,o=b):r?i+=I:i=s+(I-s)/(b-a)*(o-a)},h=function(){s=i=r?0:i,a=o=0},p=function(I){var w=a,b=s,E=Oc();return(I||I===0)&&I!==i&&f(I),o===a||E-a>c?0:(i+(r?b:-b))/((r?E:o)-w)*1e3};return{update:f,reset:h,getVelocity:p}},Hu=function(e,n){return n&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},sS=function(e){var n=Math.max.apply(Math,e),r=Math.min.apply(Math,e);return Math.abs(n)>=Math.abs(r)?n:r},YR=function(){Nc=fn.core.globals().ScrollTrigger,Nc&&Nc.core&&b8()},QR=function(e){return fn=e||GR(),!Dd&&fn&&typeof document<"u"&&document.body&&(Tr=window,no=document,ro=no.documentElement,ql=no.body,WR=[Tr,no,ro,ql],fn.utils.clamp,HR=fn.core.context||function(){},Jo="onpointerenter"in ql?"pointer":"mouse",qR=At.isTouch=Tr.matchMedia&&Tr.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Tr||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ai=At.eventTypes=("ontouchstart"in ro?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ro?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return KR=0},500),YR(),Dd=1),Dd};Yn.op=Bt;Ee.cache=0;var At=function(){function t(n){this.init(n)}var e=t.prototype;return e.init=function(r){Dd||QR(fn)||console.warn("Please gsap.registerPlugin(Observer)"),Nc||YR();var i=r.tolerance,s=r.dragMinimum,o=r.type,a=r.target,l=r.lineHeight,c=r.debounce,f=r.preventDefault,h=r.onStop,p=r.onStopDelay,m=r.ignore,I=r.wheelSpeed,w=r.event,b=r.onDragStart,E=r.onDragEnd,v=r.onDrag,x=r.onPress,A=r.onRelease,O=r.onRight,D=r.onLeft,T=r.onUp,y=r.onDown,S=r.onChangeX,k=r.onChangeY,N=r.onChange,R=r.onToggleX,C=r.onToggleY,ne=r.onHover,ce=r.onHoverEnd,oe=r.onMove,Z=r.ignoreCheck,F=r.isNormalizer,H=r.onGestureStart,M=r.onGestureEnd,se=r.onWheel,de=r.onEnable,ke=r.onDisable,Re=r.onClick,Le=r.scrollSpeed,Ue=r.capture,Se=r.allowClicks,rn=r.lockAxis,Ht=r.onLockAxis;this.target=a=nr(a)||ro,this.vars=r,m&&(m=fn.utils.toArray(m)),i=i||1e-9,s=s||0,I=I||1,Le=Le||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Tr.getComputedStyle(ql).lineHeight)||22);var pr,Ct,Mn,xe,Ye,Gt,gn,j=this,Ln=0,Dr=0,Mr=r.passive||!f,ot=No(a,Yn),wi=No(a,Bt),ni=ot(),Ei=wi(),Tt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ai[0]==="pointerdown",Qe=Dc(a),we=a.ownerDocument||no,_n=[0,0,0],Vn=[0,0,0],Lr=0,zo=function(){return Lr=Oc()},We=function(ie,fe){return(j.event=ie)&&m&&~m.indexOf(ie.target)||fe&&Tt&&ie.pointerType!=="touch"||Z&&Z(ie,fe)},Bo=function(){j._vx.reset(),j._vy.reset(),Ct.pause(),h&&h(j)},ri=function(){var ie=j.deltaX=sS(_n),fe=j.deltaY=sS(Vn),G=Math.abs(ie)>=i,le=Math.abs(fe)>=i;N&&(G||le)&&N(j,ie,fe,_n,Vn),G&&(O&&j.deltaX>0&&O(j),D&&j.deltaX<0&&D(j),S&&S(j),R&&j.deltaX<0!=Ln<0&&R(j),Ln=j.deltaX,_n[0]=_n[1]=_n[2]=0),le&&(y&&j.deltaY>0&&y(j),T&&j.deltaY<0&&T(j),k&&k(j),C&&j.deltaY<0!=Dr<0&&C(j),Dr=j.deltaY,Vn[0]=Vn[1]=Vn[2]=0),(xe||Mn)&&(oe&&oe(j),Mn&&(v(j),Mn=!1),xe=!1),Gt&&!(Gt=!1)&&Ht&&Ht(j),Ye&&(se(j),Ye=!1),pr=0},Ti=function(ie,fe,G){_n[G]+=ie,Vn[G]+=fe,j._vx.update(ie),j._vy.update(fe),c?pr||(pr=requestAnimationFrame(ri)):ri()},Cs=function(ie,fe){rn&&!gn&&(j.axis=gn=Math.abs(ie)>Math.abs(fe)?"x":"y",Gt=!0),gn!=="y"&&(_n[2]+=ie,j._vx.update(ie,!0)),gn!=="x"&&(Vn[2]+=fe,j._vy.update(fe,!0)),c?pr||(pr=requestAnimationFrame(ri)):ri()},Ii=function(ie){if(!We(ie,1)){ie=Hu(ie,f);var fe=ie.clientX,G=ie.clientY,le=fe-j.x,te=G-j.y,pe=j.isDragging;j.x=fe,j.y=G,(pe||Math.abs(j.startX-fe)>=s||Math.abs(j.startY-G)>=s)&&(v&&(Mn=!0),pe||(j.isDragging=!0),Cs(le,te),pe||b&&b(j))}},ii=j.onPress=function(ae){We(ae,1)||ae&&ae.button||(j.axis=gn=null,Ct.pause(),j.isPressed=!0,ae=Hu(ae),Ln=Dr=0,j.startX=j.x=ae.clientX,j.startY=j.y=ae.clientY,j._vx.reset(),j._vy.reset(),$n(F?a:we,ai[1],Ii,Mr,!0),j.deltaX=j.deltaY=0,x&&x(j))},ye=j.onRelease=function(ae){if(!We(ae,1)){Bn(F?a:we,ai[1],Ii,!0);var ie=!isNaN(j.y-j.startY),fe=j.isDragging,G=fe&&(Math.abs(j.x-j.startX)>3||Math.abs(j.y-j.startY)>3),le=Hu(ae);!G&&ie&&(j._vx.reset(),j._vy.reset(),f&&Se&&fn.delayedCall(.08,function(){if(Oc()-Lr>300&&!ae.defaultPrevented){if(ae.target.click)ae.target.click();else if(we.createEvent){var te=we.createEvent("MouseEvents");te.initMouseEvent("click",!0,!0,Tr,1,le.screenX,le.screenY,le.clientX,le.clientY,!1,!1,!1,!1,0,null),ae.target.dispatchEvent(te)}}})),j.isDragging=j.isGesturing=j.isPressed=!1,h&&fe&&!F&&Ct.restart(!0),E&&fe&&E(j),A&&A(j,G)}},Si=function(ie){return ie.touches&&ie.touches.length>1&&(j.isGesturing=!0)&&H(ie,j.isDragging)},sn=function(){return(j.isGesturing=!1)||M(j)},jn=function(ie){if(!We(ie)){var fe=ot(),G=wi();Ti((fe-ni)*Le,(G-Ei)*Le,1),ni=fe,Ei=G,h&&Ct.restart(!0)}},Fn=function(ie){if(!We(ie)){ie=Hu(ie,f),se&&(Ye=!0);var fe=(ie.deltaMode===1?l:ie.deltaMode===2?Tr.innerHeight:1)*I;Ti(ie.deltaX*fe,ie.deltaY*fe,0),h&&!F&&Ct.restart(!0)}},Un=function(ie){if(!We(ie)){var fe=ie.clientX,G=ie.clientY,le=fe-j.x,te=G-j.y;j.x=fe,j.y=G,xe=!0,h&&Ct.restart(!0),(le||te)&&Cs(le,te)}},Qi=function(ie){j.event=ie,ne(j)},er=function(ie){j.event=ie,ce(j)},Rs=function(ie){return We(ie)||Hu(ie,f)&&Re(j)};Ct=j._dc=fn.delayedCall(p||.25,Bo).pause(),j.deltaX=j.deltaY=0,j._vx=iv(0,50,!0),j._vy=iv(0,50,!0),j.scrollX=ot,j.scrollY=wi,j.isDragging=j.isGesturing=j.isPressed=!1,HR(this),j.enable=function(ae){return j.isEnabled||($n(Qe?we:a,"scroll",rv),o.indexOf("scroll")>=0&&$n(Qe?we:a,"scroll",jn,Mr,Ue),o.indexOf("wheel")>=0&&$n(a,"wheel",Fn,Mr,Ue),(o.indexOf("touch")>=0&&qR||o.indexOf("pointer")>=0)&&($n(a,ai[0],ii,Mr,Ue),$n(we,ai[2],ye),$n(we,ai[3],ye),Se&&$n(a,"click",zo,!0,!0),Re&&$n(a,"click",Rs),H&&$n(we,"gesturestart",Si),M&&$n(we,"gestureend",sn),ne&&$n(a,Jo+"enter",Qi),ce&&$n(a,Jo+"leave",er),oe&&$n(a,Jo+"move",Un)),j.isEnabled=!0,ae&&ae.type&&ii(ae),de&&de(j)),j},j.disable=function(){j.isEnabled&&(Pl.filter(function(ae){return ae!==j&&Dc(ae.target)}).length||Bn(Qe?we:a,"scroll",rv),j.isPressed&&(j._vx.reset(),j._vy.reset(),Bn(F?a:we,ai[1],Ii,!0)),Bn(Qe?we:a,"scroll",jn,Ue),Bn(a,"wheel",Fn,Ue),Bn(a,ai[0],ii,Ue),Bn(we,ai[2],ye),Bn(we,ai[3],ye),Bn(a,"click",zo,!0),Bn(a,"click",Rs),Bn(we,"gesturestart",Si),Bn(we,"gestureend",sn),Bn(a,Jo+"enter",Qi),Bn(a,Jo+"leave",er),Bn(a,Jo+"move",Un),j.isEnabled=j.isPressed=j.isDragging=!1,ke&&ke(j))},j.kill=j.revert=function(){j.disable();var ae=Pl.indexOf(j);ae>=0&&Pl.splice(ae,1),fs===j&&(fs=0)},Pl.push(j),F&&Dc(a)&&(fs=j),j.enable(w)},x8(t,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),t}();At.version="3.12.5";At.create=function(t){return new At(t)};At.register=QR;At.getAll=function(){return Pl.slice()};At.getById=function(t){return Pl.filter(function(e){return e.vars.id===t})[0]};GR()&&fn.registerPlugin(At);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Q,ul,Ae,lt,fi,Ze,XR,Bp,Pf,Mc,oc,Xh,xn,Um,sv,Hn,oS,aS,cl,JR,Jg,ZR,qn,ov,e2,t2,Fs,av,M1,Wl,L1,$p,lv,Zg,Jh=1,kn=Date.now,e_=kn(),Qr=0,ac=0,lS=function(e,n,r){var i=vr(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return r["_"+n+"Clamp"]=i,i?e.substr(6,e.length-7):e},uS=function(e,n){return n&&(!vr(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},k8=function t(){return ac&&requestAnimationFrame(t)},cS=function(){return Um=1},fS=function(){return Um=0},Ri=function(e){return e},lc=function(e){return Math.round(e*1e5)/1e5||0},n2=function(){return typeof window<"u"},r2=function(){return Q||n2()&&(Q=window.gsap)&&Q.registerPlugin&&Q},Ua=function(e){return!!~XR.indexOf(e)},i2=function(e){return(e==="Height"?L1:Ae["inner"+e])||fi["client"+e]||Ze["client"+e]},s2=function(e){return wo(e,"getBoundingClientRect")||(Ua(e)?function(){return Fd.width=Ae.innerWidth,Fd.height=L1,Fd}:function(){return ss(e)})},A8=function(e,n,r){var i=r.d,s=r.d2,o=r.a;return(o=wo(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(n?i2(s):e["client"+s])||0}},P8=function(e,n){return!n||~Gi.indexOf(e)?s2(e):function(){return Fd}},Fi=function(e,n){var r=n.s,i=n.d2,s=n.d,o=n.a;return Math.max(0,(r="scroll"+i)&&(o=wo(e,r))?o()-s2(e)()[s]:Ua(e)?(fi[r]||Ze[r])-i2(i):e[r]-e["offset"+i])},Zh=function(e,n){for(var r=0;r<cl.length;r+=3)(!n||~n.indexOf(cl[r+1]))&&e(cl[r],cl[r+1],cl[r+2])},vr=function(e){return typeof e=="string"},Qn=function(e){return typeof e=="function"},uc=function(e){return typeof e=="number"},Zo=function(e){return typeof e=="object"},Gu=function(e,n,r){return e&&e.progress(n?0:1)&&r&&e.pause()},t_=function(e,n){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return n(e)}):n(e);r&&r.totalTime&&(e.callbackAnimation=r)}},il=Math.abs,o2="left",a2="top",V1="right",j1="bottom",ya="width",va="height",Lc="Right",Vc="Left",jc="Top",Fc="Bottom",Ot="padding",zr="margin",pu="Width",F1="Height",Ut="px",Br=function(e){return Ae.getComputedStyle(e)},C8=function(e){var n=Br(e).position;e.style.position=n==="absolute"||n==="fixed"?n:"relative"},hS=function(e,n){for(var r in n)r in e||(e[r]=n[r]);return e},ss=function(e,n){var r=n&&Br(e)[sv]!=="matrix(1, 0, 0, 1, 0, 0)"&&Q.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return r&&r.progress(0).kill(),i},qp=function(e,n){var r=n.d2;return e["offset"+r]||e["client"+r]||0},l2=function(e){var n=[],r=e.labels,i=e.duration(),s;for(s in r)n.push(r[s]/i);return n},R8=function(e){return function(n){return Q.utils.snap(l2(e),n)}},U1=function(e){var n=Q.utils.snap(e),r=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return r?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return n(i);if(s>0){for(i-=o,a=0;a<r.length;a++)if(r[a]>=i)return r[a];return r[a-1]}else for(a=r.length,i+=o;a--;)if(r[a]<=i)return r[a];return r[0]}:function(i,s,o){o===void 0&&(o=.001);var a=n(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:n(s<0?i-e:i+e)}},N8=function(e){return function(n,r){return U1(l2(e))(n,r.direction)}},ed=function(e,n,r,i){return r.split(",").forEach(function(s){return e(n,s,i)})},Qt=function(e,n,r,i,s){return e.addEventListener(n,r,{passive:!i,capture:!!s})},Yt=function(e,n,r,i){return e.removeEventListener(n,r,!!i)},td=function(e,n,r){r=r&&r.wheelHandler,r&&(e(n,"wheel",r),e(n,"touchmove",r))},dS={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},nd={toggleActions:"play",anticipatePin:0},Wp={top:0,left:0,center:.5,bottom:1,right:1},Md=function(e,n){if(vr(e)){var r=e.indexOf("="),i=~r?+(e.charAt(r-1)+1)*parseFloat(e.substr(r+1)):0;~r&&(e.indexOf("%")>r&&(i*=n/100),e=e.substr(0,r-1)),e=i+(e in Wp?Wp[e]*n:~e.indexOf("%")?parseFloat(e)*n/100:parseFloat(e)||0)}return e},rd=function(e,n,r,i,s,o,a,l){var c=s.startColor,f=s.endColor,h=s.fontSize,p=s.indent,m=s.fontWeight,I=lt.createElement("div"),w=Ua(r)||wo(r,"pinType")==="fixed",b=e.indexOf("scroller")!==-1,E=w?Ze:r,v=e.indexOf("start")!==-1,x=v?c:f,A="border-color:"+x+";font-size:"+h+";color:"+x+";font-weight:"+m+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return A+="position:"+((b||l)&&w?"fixed;":"absolute;"),(b||l||!w)&&(A+=(i===Bt?V1:j1)+":"+(o+parseFloat(p))+"px;"),a&&(A+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),I._isStart=v,I.setAttribute("class","gsap-marker-"+e+(n?" marker-"+n:"")),I.style.cssText=A,I.innerText=n||n===0?e+"-"+n:e,E.children[0]?E.insertBefore(I,E.children[0]):E.appendChild(I),I._offset=I["offset"+i.op.d2],Ld(I,0,i,v),I},Ld=function(e,n,r,i){var s={display:"block"},o=r[i?"os2":"p2"],a=r[i?"p2":"os2"];e._isFlipped=i,s[r.a+"Percent"]=i?-100:0,s[r.a]=i?"1px":0,s["border"+o+pu]=1,s["border"+a+pu]=0,s[r.p]=n+"px",Q.set(e,s)},ve=[],uv={},Cf,pS=function(){return kn()-Qr>34&&(Cf||(Cf=requestAnimationFrame(ms)))},sl=function(){(!qn||!qn.isPressed||qn.startX>Ze.clientWidth)&&(Ee.cache++,qn?Cf||(Cf=requestAnimationFrame(ms)):ms(),Qr||Ba("scrollStart"),Qr=kn())},n_=function(){t2=Ae.innerWidth,e2=Ae.innerHeight},cc=function(){Ee.cache++,!xn&&!ZR&&!lt.fullscreenElement&&!lt.webkitFullscreenElement&&(!ov||t2!==Ae.innerWidth||Math.abs(Ae.innerHeight-e2)>Ae.innerHeight*.25)&&Bp.restart(!0)},za={},O8=[],u2=function t(){return Yt(Te,"scrollEnd",t)||ua(!0)},Ba=function(e){return za[e]&&za[e].map(function(n){return n()})||O8},_r=[],c2=function(e){for(var n=0;n<_r.length;n+=5)(!e||_r[n+4]&&_r[n+4].query===e)&&(_r[n].style.cssText=_r[n+1],_r[n].getBBox&&_r[n].setAttribute("transform",_r[n+2]||""),_r[n+3].uncache=1)},z1=function(e,n){var r;for(Hn=0;Hn<ve.length;Hn++)r=ve[Hn],r&&(!n||r._ctx===n)&&(e?r.kill(1):r.revert(!0,!0));$p=!0,n&&c2(n),n||Ba("revert")},f2=function(e,n){Ee.cache++,(n||!Gn)&&Ee.forEach(function(r){return Qn(r)&&r.cacheID++&&(r.rec=0)}),vr(e)&&(Ae.history.scrollRestoration=M1=e)},Gn,wa=0,mS,D8=function(){if(mS!==wa){var e=mS=wa;requestAnimationFrame(function(){return e===wa&&ua(!0)})}},h2=function(){Ze.appendChild(Wl),L1=!qn&&Wl.offsetHeight||Ae.innerHeight,Ze.removeChild(Wl)},gS=function(e){return Pf(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(n){return n.style.display=e?"none":"block"})},ua=function(e,n){if(Qr&&!e&&!$p){Qt(Te,"scrollEnd",u2);return}h2(),Gn=Te.isRefreshing=!0,Ee.forEach(function(i){return Qn(i)&&++i.cacheID&&(i.rec=i())});var r=Ba("refreshInit");JR&&Te.sort(),n||z1(),Ee.forEach(function(i){Qn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ve.slice(0).forEach(function(i){return i.refresh()}),$p=!1,ve.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),lv=1,gS(!0),ve.forEach(function(i){var s=Fi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),gS(!1),lv=0,r.forEach(function(i){return i&&i.render&&i.render(-1)}),Ee.forEach(function(i){Qn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),f2(M1,1),Bp.pause(),wa++,Gn=2,ms(2),ve.forEach(function(i){return Qn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Gn=Te.isRefreshing=!1,Ba("refresh")},cv=0,Vd=1,Uc,ms=function(e){if(e===2||!Gn&&!$p){Te.isUpdating=!0,Uc&&Uc.update(0);var n=ve.length,r=kn(),i=r-e_>=50,s=n&&ve[0].scroll();if(Vd=cv>s?-1:1,Gn||(cv=s),i&&(Qr&&!Um&&r-Qr>200&&(Qr=0,Ba("scrollEnd")),oc=e_,e_=r),Vd<0){for(Hn=n;Hn-- >0;)ve[Hn]&&ve[Hn].update(0,i);Vd=1}else for(Hn=0;Hn<n;Hn++)ve[Hn]&&ve[Hn].update(0,i);Te.isUpdating=!1}Cf=0},fv=[o2,a2,j1,V1,zr+Fc,zr+Lc,zr+jc,zr+Vc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],jd=fv.concat([ya,va,"boxSizing","max"+pu,"max"+F1,"position",zr,Ot,Ot+jc,Ot+Lc,Ot+Fc,Ot+Vc]),M8=function(e,n,r){Hl(r);var i=e._gsap;if(i.spacerIsNative)Hl(i.spacerState);else if(e._gsap.swappedIn){var s=n.parentNode;s&&(s.insertBefore(e,n),s.removeChild(n))}e._gsap.swappedIn=!1},r_=function(e,n,r,i){if(!e._gsap.swappedIn){for(var s=fv.length,o=n.style,a=e.style,l;s--;)l=fv[s],o[l]=r[l];o.position=r.position==="absolute"?"absolute":"relative",r.display==="inline"&&(o.display="inline-block"),a[j1]=a[V1]="auto",o.flexBasis=r.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ya]=qp(e,Yn)+Ut,o[va]=qp(e,Bt)+Ut,o[Ot]=a[zr]=a[a2]=a[o2]="0",Hl(i),a[ya]=a["max"+pu]=r[ya],a[va]=a["max"+F1]=r[va],a[Ot]=r[Ot],e.parentNode!==n&&(e.parentNode.insertBefore(n,e),n.appendChild(e)),e._gsap.swappedIn=!0}},L8=/([A-Z])/g,Hl=function(e){if(e){var n=e.t.style,r=e.length,i=0,s,o;for((e.t._gsap||Q.core.getCache(e.t)).uncache=1;i<r;i+=2)o=e[i+1],s=e[i],o?n[s]=o:n[s]&&n.removeProperty(s.replace(L8,"-$1").toLowerCase())}},id=function(e){for(var n=jd.length,r=e.style,i=[],s=0;s<n;s++)i.push(jd[s],r[jd[s]]);return i.t=e,i},V8=function(e,n,r){for(var i=[],s=e.length,o=r?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in n?n[a]:e[o+1]);return i.t=e.t,i},Fd={left:0,top:0},_S=function(e,n,r,i,s,o,a,l,c,f,h,p,m,I){Qn(e)&&(e=e(l)),vr(e)&&e.substr(0,3)==="max"&&(e=p+(e.charAt(4)==="="?Md("0"+e.substr(3),r):0));var w=m?m.time():0,b,E,v;if(m&&m.seek(0),isNaN(e)||(e=+e),uc(e))m&&(e=Q.utils.mapRange(m.scrollTrigger.start,m.scrollTrigger.end,0,p,e)),a&&Ld(a,r,i,!0);else{Qn(n)&&(n=n(l));var x=(e||"0").split(" "),A,O,D,T;v=nr(n,l)||Ze,A=ss(v)||{},(!A||!A.left&&!A.top)&&Br(v).display==="none"&&(T=v.style.display,v.style.display="block",A=ss(v),T?v.style.display=T:v.style.removeProperty("display")),O=Md(x[0],A[i.d]),D=Md(x[1]||"0",r),e=A[i.p]-c[i.p]-f+O+s-D,a&&Ld(a,D,i,r-D<20||a._isStart&&D>20),r-=r-D}if(I&&(l[I]=e||-.001,e<0&&(e=0)),o){var y=e+r,S=o._isStart;b="scroll"+i.d2,Ld(o,y,i,S&&y>20||!S&&(h?Math.max(Ze[b],fi[b]):o.parentNode[b])<=y+1),h&&(c=ss(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Ut))}return m&&v&&(b=ss(v),m.seek(p),E=ss(v),m._caScrollDist=b[i.p]-E[i.p],e=e/m._caScrollDist*p),m&&m.seek(w),m?e:Math.round(e)},j8=/(webkit|moz|length|cssText|inset)/i,yS=function(e,n,r,i){if(e.parentNode!==n){var s=e.style,o,a;if(n===Ze){e._stOrig=s.cssText,a=Br(e);for(o in a)!+o&&!j8.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=r,s.left=i}else s.cssText=e._stOrig;Q.core.getCache(e).uncache=1,n.appendChild(e)}},d2=function(e,n,r){var i=n,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,r&&r()),s=i,i=o,o}},sd=function(e,n,r){var i={};i[n.p]="+="+r,Q.set(e,i)},vS=function(e,n){var r=No(e,n),i="_scroll"+n.p2,s=function o(a,l,c,f,h){var p=o.tween,m=l.onComplete,I={};c=c||r();var w=d2(r,c,function(){p.kill(),o.tween=0});return h=f&&h||0,f=f||a-c,p&&p.kill(),l[i]=a,l.inherit=!1,l.modifiers=I,I[i]=function(){return w(c+f*p.ratio+h*p.ratio*p.ratio)},l.onUpdate=function(){Ee.cache++,o.tween&&ms()},l.onComplete=function(){o.tween=0,m&&m.call(p)},p=o.tween=Q.to(e,l),p};return e[i]=r,r.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Qt(e,"wheel",r.wheelHandler),Te.isTouch&&Qt(e,"touchmove",r.wheelHandler),s},Te=function(){function t(n,r){ul||t.register(Q)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),av(this),this.init(n,r)}var e=t.prototype;return e.init=function(r,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ac){this.update=this.refresh=this.kill=Ri;return}r=hS(vr(r)||uc(r)||r.nodeType?{trigger:r}:r,nd);var s=r,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,f=s.onRefresh,h=s.scrub,p=s.trigger,m=s.pin,I=s.pinSpacing,w=s.invalidateOnRefresh,b=s.anticipatePin,E=s.onScrubComplete,v=s.onSnapComplete,x=s.once,A=s.snap,O=s.pinReparent,D=s.pinSpacer,T=s.containerAnimation,y=s.fastScrollEnd,S=s.preventOverlaps,k=r.horizontal||r.containerAnimation&&r.horizontal!==!1?Yn:Bt,N=!h&&h!==0,R=nr(r.scroller||Ae),C=Q.core.getCache(R),ne=Ua(R),ce=("pinType"in r?r.pinType:wo(R,"pinType")||ne&&"fixed")==="fixed",oe=[r.onEnter,r.onLeave,r.onEnterBack,r.onLeaveBack],Z=N&&r.toggleActions.split(" "),F="markers"in r?r.markers:nd.markers,H=ne?0:parseFloat(Br(R)["border"+k.p2+pu])||0,M=this,se=r.onRefreshInit&&function(){return r.onRefreshInit(M)},de=A8(R,ne,k),ke=P8(R,ne),Re=0,Le=0,Ue=0,Se=No(R,k),rn,Ht,pr,Ct,Mn,xe,Ye,Gt,gn,j,Ln,Dr,Mr,ot,wi,ni,Ei,Tt,Qe,we,_n,Vn,Lr,zo,We,Bo,ri,Ti,Cs,Ii,ii,ye,Si,sn,jn,Fn,Un,Qi,er;if(M._startClamp=M._endClamp=!1,M._dir=k,b*=45,M.scroller=R,M.scroll=T?T.time.bind(T):Se,Ct=Se(),M.vars=r,i=i||r.animation,"refreshPriority"in r&&(JR=1,r.refreshPriority===-9999&&(Uc=M)),C.tweenScroll=C.tweenScroll||{top:vS(R,Bt),left:vS(R,Yn)},M.tweenTo=rn=C.tweenScroll[k.p],M.scrubDuration=function(G){Si=uc(G)&&G,Si?ye?ye.duration(G):ye=Q.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Si,paused:!0,onComplete:function(){return E&&E(M)}}):(ye&&ye.progress(1).kill(),ye=0)},i&&(i.vars.lazy=!1,i._initted&&!M.isReverted||i.vars.immediateRender!==!1&&r.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),M.animation=i.pause(),i.scrollTrigger=M,M.scrubDuration(h),Ii=0,l||(l=i.vars.id)),A&&((!Zo(A)||A.push)&&(A={snapTo:A}),"scrollBehavior"in Ze.style&&Q.set(ne?[Ze,fi]:R,{scrollBehavior:"auto"}),Ee.forEach(function(G){return Qn(G)&&G.target===(ne?lt.scrollingElement||fi:R)&&(G.smooth=!1)}),pr=Qn(A.snapTo)?A.snapTo:A.snapTo==="labels"?R8(i):A.snapTo==="labelsDirectional"?N8(i):A.directional!==!1?function(G,le){return U1(A.snapTo)(G,kn()-Le<500?0:le.direction)}:Q.utils.snap(A.snapTo),sn=A.duration||{min:.1,max:2},sn=Zo(sn)?Mc(sn.min,sn.max):Mc(sn,sn),jn=Q.delayedCall(A.delay||Si/2||.1,function(){var G=Se(),le=kn()-Le<500,te=rn.tween;if((le||Math.abs(M.getVelocity())<10)&&!te&&!Um&&Re!==G){var pe=(G-xe)/ot,Rt=i&&!N?i.totalProgress():pe,_e=le?0:(Rt-ii)/(kn()-oc)*1e3||0,at=Q.utils.clamp(-pe,1-pe,il(_e/2)*_e/.185),Kt=pe+(A.inertia===!1?0:at),ze,Be,Ve=A,yn=Ve.onStart,De=Ve.onInterrupt,vn=Ve.onComplete;if(ze=pr(Kt,M),uc(ze)||(ze=Kt),Be=Math.round(xe+ze*ot),G<=Ye&&G>=xe&&Be!==G){if(te&&!te._initted&&te.data<=il(Be-G))return;A.inertia===!1&&(at=ze-pe),rn(Be,{duration:sn(il(Math.max(il(Kt-Rt),il(ze-Rt))*.185/_e/.05||0)),ease:A.ease||"power3",data:il(Be-G),onInterrupt:function(){return jn.restart(!0)&&De&&De(M)},onComplete:function(){M.update(),Re=Se(),i&&(ye?ye.resetTo("totalProgress",ze,i._tTime/i._tDur):i.progress(ze)),Ii=ii=i&&!N?i.totalProgress():M.progress,v&&v(M),vn&&vn(M)}},G,at*ot,Be-G-at*ot),yn&&yn(M,rn.tween)}}else M.isActive&&Re!==G&&jn.restart(!0)}).pause()),l&&(uv[l]=M),p=M.trigger=nr(p||m!==!0&&m),er=p&&p._gsap&&p._gsap.stRevert,er&&(er=er(M)),m=m===!0?p:nr(m),vr(a)&&(a={targets:p,className:a}),m&&(I===!1||I===zr||(I=!I&&m.parentNode&&m.parentNode.style&&Br(m.parentNode).display==="flex"?!1:Ot),M.pin=m,Ht=Q.core.getCache(m),Ht.spacer?wi=Ht.pinState:(D&&(D=nr(D),D&&!D.nodeType&&(D=D.current||D.nativeElement),Ht.spacerIsNative=!!D,D&&(Ht.spacerState=id(D))),Ht.spacer=Tt=D||lt.createElement("div"),Tt.classList.add("pin-spacer"),l&&Tt.classList.add("pin-spacer-"+l),Ht.pinState=wi=id(m)),r.force3D!==!1&&Q.set(m,{force3D:!0}),M.spacer=Tt=Ht.spacer,Cs=Br(m),zo=Cs[I+k.os2],we=Q.getProperty(m),_n=Q.quickSetter(m,k.a,Ut),r_(m,Tt,Cs),Ei=id(m)),F){Dr=Zo(F)?hS(F,dS):dS,j=rd("scroller-start",l,R,k,Dr,0),Ln=rd("scroller-end",l,R,k,Dr,0,j),Qe=j["offset"+k.op.d2];var Rs=nr(wo(R,"content")||R);Gt=this.markerStart=rd("start",l,Rs,k,Dr,Qe,0,T),gn=this.markerEnd=rd("end",l,Rs,k,Dr,Qe,0,T),T&&(Qi=Q.quickSetter([Gt,gn],k.a,Ut)),!ce&&!(Gi.length&&wo(R,"fixedMarkers")===!0)&&(C8(ne?Ze:R),Q.set([j,Ln],{force3D:!0}),Bo=Q.quickSetter(j,k.a,Ut),Ti=Q.quickSetter(Ln,k.a,Ut))}if(T){var ae=T.vars.onUpdate,ie=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){M.update(0,0,1),ae&&ae.apply(T,ie||[])})}if(M.previous=function(){return ve[ve.indexOf(M)-1]},M.next=function(){return ve[ve.indexOf(M)+1]},M.revert=function(G,le){if(!le)return M.kill(!0);var te=G!==!1||!M.enabled,pe=xn;te!==M.isReverted&&(te&&(Fn=Math.max(Se(),M.scroll.rec||0),Ue=M.progress,Un=i&&i.progress()),Gt&&[Gt,gn,j,Ln].forEach(function(Rt){return Rt.style.display=te?"none":"block"}),te&&(xn=M,M.update(te)),m&&(!O||!M.isActive)&&(te?M8(m,Tt,wi):r_(m,Tt,Br(m),We)),te||M.update(te),xn=pe,M.isReverted=te)},M.refresh=function(G,le,te,pe){if(!((xn||!M.enabled)&&!le)){if(m&&G&&Qr){Qt(t,"scrollEnd",u2);return}!Gn&&se&&se(M),xn=M,rn.tween&&!te&&(rn.tween.kill(),rn.tween=0),ye&&ye.pause(),w&&i&&i.revert({kill:!1}).invalidate(),M.isReverted||M.revert(!0,!0),M._subPinOffset=!1;var Rt=de(),_e=ke(),at=T?T.duration():Fi(R,k),Kt=ot<=.01,ze=0,Be=pe||0,Ve=Zo(te)?te.end:r.end,yn=r.endTrigger||p,De=Zo(te)?te.start:r.start||(r.start===0||!p?0:m?"0 0":"0 100%"),vn=M.pinnedContainer=r.pinnedContainer&&nr(r.pinnedContainer,M),mr=p&&Math.max(0,ve.indexOf(M))||0,It=mr,St,Ft,xi,Ja,xt,mt,tr,Xi,bi,Ji,Vr,Ns,$o;for(F&&Zo(te)&&(Ns=Q.getProperty(j,k.p),$o=Q.getProperty(Ln,k.p));It--;)mt=ve[It],mt.end||mt.refresh(0,1)||(xn=M),tr=mt.pin,tr&&(tr===p||tr===m||tr===vn)&&!mt.isReverted&&(Ji||(Ji=[]),Ji.unshift(mt),mt.revert(!0,!0)),mt!==ve[It]&&(mr--,It--);for(Qn(De)&&(De=De(M)),De=lS(De,"start",M),xe=_S(De,p,Rt,k,Se(),Gt,j,M,_e,H,ce,at,T,M._startClamp&&"_startClamp")||(m?-.001:0),Qn(Ve)&&(Ve=Ve(M)),vr(Ve)&&!Ve.indexOf("+=")&&(~Ve.indexOf(" ")?Ve=(vr(De)?De.split(" ")[0]:"")+Ve:(ze=Md(Ve.substr(2),Rt),Ve=vr(De)?De:(T?Q.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,xe):xe)+ze,yn=p)),Ve=lS(Ve,"end",M),Ye=Math.max(xe,_S(Ve||(yn?"100% 0":at),yn,Rt,k,Se()+ze,gn,Ln,M,_e,H,ce,at,T,M._endClamp&&"_endClamp"))||-.001,ze=0,It=mr;It--;)mt=ve[It],tr=mt.pin,tr&&mt.start-mt._pinPush<=xe&&!T&&mt.end>0&&(St=mt.end-(M._startClamp?Math.max(0,mt.start):mt.start),(tr===p&&mt.start-mt._pinPush<xe||tr===vn)&&isNaN(De)&&(ze+=St*(1-mt.progress)),tr===m&&(Be+=St));if(xe+=ze,Ye+=ze,M._startClamp&&(M._startClamp+=ze),M._endClamp&&!Gn&&(M._endClamp=Ye||-.001,Ye=Math.min(Ye,Fi(R,k))),ot=Ye-xe||(xe-=.01)&&.001,Kt&&(Ue=Q.utils.clamp(0,1,Q.utils.normalize(xe,Ye,Fn))),M._pinPush=Be,Gt&&ze&&(St={},St[k.a]="+="+ze,vn&&(St[k.p]="-="+Se()),Q.set([Gt,gn],St)),m&&!(lv&&M.end>=Fi(R,k)))St=Br(m),Ja=k===Bt,xi=Se(),Vn=parseFloat(we(k.a))+Be,!at&&Ye>1&&(Vr=(ne?lt.scrollingElement||fi:R).style,Vr={style:Vr,value:Vr["overflow"+k.a.toUpperCase()]},ne&&Br(Ze)["overflow"+k.a.toUpperCase()]!=="scroll"&&(Vr.style["overflow"+k.a.toUpperCase()]="scroll")),r_(m,Tt,St),Ei=id(m),Ft=ss(m,!0),Xi=ce&&No(R,Ja?Yn:Bt)(),I?(We=[I+k.os2,ot+Be+Ut],We.t=Tt,It=I===Ot?qp(m,k)+ot+Be:0,It&&(We.push(k.d,It+Ut),Tt.style.flexBasis!=="auto"&&(Tt.style.flexBasis=It+Ut)),Hl(We),vn&&ve.forEach(function(Os){Os.pin===vn&&Os.vars.pinSpacing!==!1&&(Os._subPinOffset=!0)}),ce&&Se(Fn)):(It=qp(m,k),It&&Tt.style.flexBasis!=="auto"&&(Tt.style.flexBasis=It+Ut)),ce&&(xt={top:Ft.top+(Ja?xi-xe:Xi)+Ut,left:Ft.left+(Ja?Xi:xi-xe)+Ut,boxSizing:"border-box",position:"fixed"},xt[ya]=xt["max"+pu]=Math.ceil(Ft.width)+Ut,xt[va]=xt["max"+F1]=Math.ceil(Ft.height)+Ut,xt[zr]=xt[zr+jc]=xt[zr+Lc]=xt[zr+Fc]=xt[zr+Vc]="0",xt[Ot]=St[Ot],xt[Ot+jc]=St[Ot+jc],xt[Ot+Lc]=St[Ot+Lc],xt[Ot+Fc]=St[Ot+Fc],xt[Ot+Vc]=St[Ot+Vc],ni=V8(wi,xt,O),Gn&&Se(0)),i?(bi=i._initted,Jg(1),i.render(i.duration(),!0,!0),Lr=we(k.a)-Vn+ot+Be,ri=Math.abs(ot-Lr)>1,ce&&ri&&ni.splice(ni.length-2,2),i.render(0,!0,!0),bi||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Jg(0)):Lr=ot,Vr&&(Vr.value?Vr.style["overflow"+k.a.toUpperCase()]=Vr.value:Vr.style.removeProperty("overflow-"+k.a));else if(p&&Se()&&!T)for(Ft=p.parentNode;Ft&&Ft!==Ze;)Ft._pinOffset&&(xe-=Ft._pinOffset,Ye-=Ft._pinOffset),Ft=Ft.parentNode;Ji&&Ji.forEach(function(Os){return Os.revert(!1,!0)}),M.start=xe,M.end=Ye,Ct=Mn=Gn?Fn:Se(),!T&&!Gn&&(Ct<Fn&&Se(Fn),M.scroll.rec=0),M.revert(!1,!0),Le=kn(),jn&&(Re=-1,jn.restart(!0)),xn=0,i&&N&&(i._initted||Un)&&i.progress()!==Un&&i.progress(Un||0,!0).render(i.time(),!0,!0),(Kt||Ue!==M.progress||T||w)&&(i&&!N&&i.totalProgress(T&&xe<-.001&&!Ue?Q.utils.normalize(xe,Ye,0):Ue,!0),M.progress=Kt||(Ct-xe)/ot===Ue?0:Ue),m&&I&&(Tt._pinOffset=Math.round(M.progress*Lr)),ye&&ye.invalidate(),isNaN(Ns)||(Ns-=Q.getProperty(j,k.p),$o-=Q.getProperty(Ln,k.p),sd(j,k,Ns),sd(Gt,k,Ns-(pe||0)),sd(Ln,k,$o),sd(gn,k,$o-(pe||0))),Kt&&!Gn&&M.update(),f&&!Gn&&!Mr&&(Mr=!0,f(M),Mr=!1)}},M.getVelocity=function(){return(Se()-Mn)/(kn()-oc)*1e3||0},M.endAnimation=function(){Gu(M.callbackAnimation),i&&(ye?ye.progress(1):i.paused()?N||Gu(i,M.direction<0,1):Gu(i,i.reversed()))},M.labelToScroll=function(G){return i&&i.labels&&(xe||M.refresh()||xe)+i.labels[G]/i.duration()*ot||0},M.getTrailing=function(G){var le=ve.indexOf(M),te=M.direction>0?ve.slice(0,le).reverse():ve.slice(le+1);return(vr(G)?te.filter(function(pe){return pe.vars.preventOverlaps===G}):te).filter(function(pe){return M.direction>0?pe.end<=xe:pe.start>=Ye})},M.update=function(G,le,te){if(!(T&&!te&&!G)){var pe=Gn===!0?Fn:M.scroll(),Rt=G?0:(pe-xe)/ot,_e=Rt<0?0:Rt>1?1:Rt||0,at=M.progress,Kt,ze,Be,Ve,yn,De,vn,mr;if(le&&(Mn=Ct,Ct=T?Se():pe,A&&(ii=Ii,Ii=i&&!N?i.totalProgress():_e)),b&&m&&!xn&&!Jh&&Qr&&(!_e&&xe<pe+(pe-Mn)/(kn()-oc)*b?_e=1e-4:_e===1&&Ye>pe+(pe-Mn)/(kn()-oc)*b&&(_e=.9999)),_e!==at&&M.enabled){if(Kt=M.isActive=!!_e&&_e<1,ze=!!at&&at<1,De=Kt!==ze,yn=De||!!_e!=!!at,M.direction=_e>at?1:-1,M.progress=_e,yn&&!xn&&(Be=_e&&!at?0:_e===1?1:at===1?2:3,N&&(Ve=!De&&Z[Be+1]!=="none"&&Z[Be+1]||Z[Be],mr=i&&(Ve==="complete"||Ve==="reset"||Ve in i))),S&&(De||mr)&&(mr||h||!i)&&(Qn(S)?S(M):M.getTrailing(S).forEach(function(xi){return xi.endAnimation()})),N||(ye&&!xn&&!Jh?(ye._dp._time-ye._start!==ye._time&&ye.render(ye._dp._time-ye._start),ye.resetTo?ye.resetTo("totalProgress",_e,i._tTime/i._tDur):(ye.vars.totalProgress=_e,ye.invalidate().restart())):i&&i.totalProgress(_e,!!(xn&&(Le||G)))),m){if(G&&I&&(Tt.style[I+k.os2]=zo),!ce)_n(lc(Vn+Lr*_e));else if(yn){if(vn=!G&&_e>at&&Ye+1>pe&&pe+1>=Fi(R,k),O)if(!G&&(Kt||vn)){var It=ss(m,!0),St=pe-xe;yS(m,Ze,It.top+(k===Bt?St:0)+Ut,It.left+(k===Bt?0:St)+Ut)}else yS(m,Tt);Hl(Kt||vn?ni:Ei),ri&&_e<1&&Kt||_n(Vn+(_e===1&&!vn?Lr:0))}}A&&!rn.tween&&!xn&&!Jh&&jn.restart(!0),a&&(De||x&&_e&&(_e<1||!Zg))&&Pf(a.targets).forEach(function(xi){return xi.classList[Kt||x?"add":"remove"](a.className)}),o&&!N&&!G&&o(M),yn&&!xn?(N&&(mr&&(Ve==="complete"?i.pause().totalProgress(1):Ve==="reset"?i.restart(!0).pause():Ve==="restart"?i.restart(!0):i[Ve]()),o&&o(M)),(De||!Zg)&&(c&&De&&t_(M,c),oe[Be]&&t_(M,oe[Be]),x&&(_e===1?M.kill(!1,1):oe[Be]=0),De||(Be=_e===1?1:3,oe[Be]&&t_(M,oe[Be]))),y&&!Kt&&Math.abs(M.getVelocity())>(uc(y)?y:2500)&&(Gu(M.callbackAnimation),ye?ye.progress(1):Gu(i,Ve==="reverse"?1:!_e,1))):N&&o&&!xn&&o(M)}if(Ti){var Ft=T?pe/T.duration()*(T._caScrollDist||0):pe;Bo(Ft+(j._isFlipped?1:0)),Ti(Ft)}Qi&&Qi(-pe/T.duration()*(T._caScrollDist||0))}},M.enable=function(G,le){M.enabled||(M.enabled=!0,Qt(R,"resize",cc),ne||Qt(R,"scroll",sl),se&&Qt(t,"refreshInit",se),G!==!1&&(M.progress=Ue=0,Ct=Mn=Re=Se()),le!==!1&&M.refresh())},M.getTween=function(G){return G&&rn?rn.tween:ye},M.setPositions=function(G,le,te,pe){if(T){var Rt=T.scrollTrigger,_e=T.duration(),at=Rt.end-Rt.start;G=Rt.start+at*G/_e,le=Rt.start+at*le/_e}M.refresh(!1,!1,{start:uS(G,te&&!!M._startClamp),end:uS(le,te&&!!M._endClamp)},pe),M.update()},M.adjustPinSpacing=function(G){if(We&&G){var le=We.indexOf(k.d)+1;We[le]=parseFloat(We[le])+G+Ut,We[1]=parseFloat(We[1])+G+Ut,Hl(We)}},M.disable=function(G,le){if(M.enabled&&(G!==!1&&M.revert(!0,!0),M.enabled=M.isActive=!1,le||ye&&ye.pause(),Fn=0,Ht&&(Ht.uncache=1),se&&Yt(t,"refreshInit",se),jn&&(jn.pause(),rn.tween&&rn.tween.kill()&&(rn.tween=0)),!ne)){for(var te=ve.length;te--;)if(ve[te].scroller===R&&ve[te]!==M)return;Yt(R,"resize",cc),ne||Yt(R,"scroll",sl)}},M.kill=function(G,le){M.disable(G,le),ye&&!le&&ye.kill(),l&&delete uv[l];var te=ve.indexOf(M);te>=0&&ve.splice(te,1),te===Hn&&Vd>0&&Hn--,te=0,ve.forEach(function(pe){return pe.scroller===M.scroller&&(te=1)}),te||Gn||(M.scroll.rec=0),i&&(i.scrollTrigger=null,G&&i.revert({kill:!1}),le||i.kill()),Gt&&[Gt,gn,j,Ln].forEach(function(pe){return pe.parentNode&&pe.parentNode.removeChild(pe)}),Uc===M&&(Uc=0),m&&(Ht&&(Ht.uncache=1),te=0,ve.forEach(function(pe){return pe.pin===m&&te++}),te||(Ht.spacer=0)),r.onKill&&r.onKill(M)},ve.push(M),M.enable(!1,!1),er&&er(M),i&&i.add&&!ot){var fe=M.update;M.update=function(){M.update=fe,xe||Ye||M.refresh()},Q.delayedCall(.01,M.update),ot=.01,xe=Ye=0}else M.refresh();m&&D8()},t.register=function(r){return ul||(Q=r||r2(),n2()&&window.document&&t.enable(),ul=ac),ul},t.defaults=function(r){if(r)for(var i in r)nd[i]=r[i];return nd},t.disable=function(r,i){ac=0,ve.forEach(function(o){return o[i?"kill":"disable"](r)}),Yt(Ae,"wheel",sl),Yt(lt,"scroll",sl),clearInterval(Xh),Yt(lt,"touchcancel",Ri),Yt(Ze,"touchstart",Ri),ed(Yt,lt,"pointerdown,touchstart,mousedown",cS),ed(Yt,lt,"pointerup,touchend,mouseup",fS),Bp.kill(),Zh(Yt);for(var s=0;s<Ee.length;s+=3)td(Yt,Ee[s],Ee[s+1]),td(Yt,Ee[s],Ee[s+2])},t.enable=function(){if(Ae=window,lt=document,fi=lt.documentElement,Ze=lt.body,Q&&(Pf=Q.utils.toArray,Mc=Q.utils.clamp,av=Q.core.context||Ri,Jg=Q.core.suppressOverwrites||Ri,M1=Ae.history.scrollRestoration||"auto",cv=Ae.pageYOffset,Q.core.globals("ScrollTrigger",t),Ze)){ac=1,Wl=document.createElement("div"),Wl.style.height="100vh",Wl.style.position="absolute",h2(),k8(),At.register(Q),t.isTouch=At.isTouch,Fs=At.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ov=At.isTouch===1,Qt(Ae,"wheel",sl),XR=[Ae,lt,fi,Ze],Q.matchMedia?(t.matchMedia=function(l){var c=Q.matchMedia(),f;for(f in l)c.add(f,l[f]);return c},Q.addEventListener("matchMediaInit",function(){return z1()}),Q.addEventListener("matchMediaRevert",function(){return c2()}),Q.addEventListener("matchMedia",function(){ua(0,1),Ba("matchMedia")}),Q.matchMedia("(orientation: portrait)",function(){return n_(),n_})):console.warn("Requires GSAP 3.11.0 or later"),n_(),Qt(lt,"scroll",sl);var r=Ze.style,i=r.borderTopStyle,s=Q.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",o=ss(Ze),Bt.m=Math.round(o.top+Bt.sc())||0,Yn.m=Math.round(o.left+Yn.sc())||0,i?r.borderTopStyle=i:r.removeProperty("border-top-style"),Xh=setInterval(pS,250),Q.delayedCall(.5,function(){return Jh=0}),Qt(lt,"touchcancel",Ri),Qt(Ze,"touchstart",Ri),ed(Qt,lt,"pointerdown,touchstart,mousedown",cS),ed(Qt,lt,"pointerup,touchend,mouseup",fS),sv=Q.utils.checkPrefix("transform"),jd.push(sv),ul=kn(),Bp=Q.delayedCall(.2,ua).pause(),cl=[lt,"visibilitychange",function(){var l=Ae.innerWidth,c=Ae.innerHeight;lt.hidden?(oS=l,aS=c):(oS!==l||aS!==c)&&cc()},lt,"DOMContentLoaded",ua,Ae,"load",ua,Ae,"resize",cc],Zh(Qt),ve.forEach(function(l){return l.enable(0,1)}),a=0;a<Ee.length;a+=3)td(Yt,Ee[a],Ee[a+1]),td(Yt,Ee[a],Ee[a+2])}},t.config=function(r){"limitCallbacks"in r&&(Zg=!!r.limitCallbacks);var i=r.syncInterval;i&&clearInterval(Xh)||(Xh=i)&&setInterval(pS,i),"ignoreMobileResize"in r&&(ov=t.isTouch===1&&r.ignoreMobileResize),"autoRefreshEvents"in r&&(Zh(Yt)||Zh(Qt,r.autoRefreshEvents||"none"),ZR=(r.autoRefreshEvents+"").indexOf("resize")===-1)},t.scrollerProxy=function(r,i){var s=nr(r),o=Ee.indexOf(s),a=Ua(s);~o&&Ee.splice(o,a?6:2),i&&(a?Gi.unshift(Ae,i,Ze,i,fi,i):Gi.unshift(s,i))},t.clearMatchMedia=function(r){ve.forEach(function(i){return i._ctx&&i._ctx.query===r&&i._ctx.kill(!0,!0)})},t.isInViewport=function(r,i,s){var o=(vr(r)?nr(r):r).getBoundingClientRect(),a=o[s?ya:va]*i||0;return s?o.right-a>0&&o.left+a<Ae.innerWidth:o.bottom-a>0&&o.top+a<Ae.innerHeight},t.positionInViewport=function(r,i,s){vr(r)&&(r=nr(r));var o=r.getBoundingClientRect(),a=o[s?ya:va],l=i==null?a/2:i in Wp?Wp[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/Ae.innerWidth:(o.top+l)/Ae.innerHeight},t.killAll=function(r){if(ve.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),r!==!0){var i=za.killAll||[];za={},i.forEach(function(s){return s()})}},t}();Te.version="3.12.5";Te.saveStyles=function(t){return t?Pf(t).forEach(function(e){if(e&&e.style){var n=_r.indexOf(e);n>=0&&_r.splice(n,5),_r.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Q.core.getCache(e),av())}}):_r};Te.revert=function(t,e){return z1(!t,e)};Te.create=function(t,e){return new Te(t,e)};Te.refresh=function(t){return t?cc():(ul||Te.register())&&ua(!0)};Te.update=function(t){return++Ee.cache&&ms(t===!0?2:0)};Te.clearScrollMemory=f2;Te.maxScroll=function(t,e){return Fi(t,e?Yn:Bt)};Te.getScrollFunc=function(t,e){return No(nr(t),e?Yn:Bt)};Te.getById=function(t){return uv[t]};Te.getAll=function(){return ve.filter(function(t){return t.vars.id!=="ScrollSmoother"})};Te.isScrolling=function(){return!!Qr};Te.snapDirectional=U1;Te.addEventListener=function(t,e){var n=za[t]||(za[t]=[]);~n.indexOf(e)||n.push(e)};Te.removeEventListener=function(t,e){var n=za[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)};Te.batch=function(t,e){var n=[],r={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,f){var h=[],p=[],m=Q.delayedCall(i,function(){f(h,p),h=[],p=[]}).pause();return function(I){h.length||m.restart(!0),h.push(I.trigger),p.push(I),s<=h.length&&m.progress(1)}},a;for(a in e)r[a]=a.substr(0,2)==="on"&&Qn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Qn(s)&&(s=s(),Qt(Te,"refresh",function(){return s=e.batchMax()})),Pf(t).forEach(function(l){var c={};for(a in r)c[a]=r[a];c.trigger=l,n.push(Te.create(c))}),n};var wS=function(e,n,r,i){return n>i?e(i):n<0&&e(0),r>i?(i-n)/(r-n):r<0?n/(n-r):1},i_=function t(e,n){n===!0?e.style.removeProperty("touch-action"):e.style.touchAction=n===!0?"auto":n?"pan-"+n+(At.isTouch?" pinch-zoom":""):"none",e===fi&&t(Ze,n)},od={auto:1,scroll:1},F8=function(e){var n=e.event,r=e.target,i=e.axis,s=(n.changedTouches?n.changedTouches[0]:n).target,o=s._gsap||Q.core.getCache(s),a=kn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Ze&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(od[(l=Br(s)).overflowY]||od[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==r&&!Ua(s)&&(od[(l=Br(s)).overflowY]||od[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(n.stopPropagation(),n._gsapAllow=!0)},p2=function(e,n,r,i){return At.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:n,onWheel:i=i&&F8,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return r&&Qt(lt,At.eventTypes[0],TS,!1,!0)},onDisable:function(){return Yt(lt,At.eventTypes[0],TS,!0)}})},U8=/(input|label|select|textarea)/i,ES,TS=function(e){var n=U8.test(e.target.tagName);(n||ES)&&(e._gsapAllow=!0,ES=n)},z8=function(e){Zo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var n=e,r=n.normalizeScrollX,i=n.momentum,s=n.allowNestedScroll,o=n.onRelease,a,l,c=nr(e.target)||fi,f=Q.core.globals().ScrollSmoother,h=f&&f.get(),p=Fs&&(e.content&&nr(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),m=No(c,Bt),I=No(c,Yn),w=1,b=(At.isTouch&&Ae.visualViewport?Ae.visualViewport.scale*Ae.visualViewport.width:Ae.outerWidth)/Ae.innerWidth,E=0,v=Qn(i)?function(){return i(a)}:function(){return i||2.8},x,A,O=p2(c,e.type,!0,s),D=function(){return A=!1},T=Ri,y=Ri,S=function(){l=Fi(c,Bt),y=Mc(Fs?1:0,l),r&&(T=Mc(0,Fi(c,Yn))),x=wa},k=function(){p._gsap.y=lc(parseFloat(p._gsap.y)+m.offset)+"px",p.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(p._gsap.y)+", 0, 1)",m.offset=m.cacheID=0},N=function(){if(A){requestAnimationFrame(D);var F=lc(a.deltaY/2),H=y(m.v-F);if(p&&H!==m.v+m.offset){m.offset=H-m.v;var M=lc((parseFloat(p&&p._gsap.y)||0)-m.offset);p.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+M+", 0, 1)",p._gsap.y=M+"px",m.cacheID=Ee.cache,ms()}return!0}m.offset&&k(),A=!0},R,C,ne,ce,oe=function(){S(),R.isActive()&&R.vars.scrollY>l&&(m()>l?R.progress(1)&&m(l):R.resetTo("scrollY",l))};return p&&Q.set(p,{y:"+=0"}),e.ignoreCheck=function(Z){return Fs&&Z.type==="touchmove"&&N()||w>1.05&&Z.type!=="touchstart"||a.isGesturing||Z.touches&&Z.touches.length>1},e.onPress=function(){A=!1;var Z=w;w=lc((Ae.visualViewport&&Ae.visualViewport.scale||1)/b),R.pause(),Z!==w&&i_(c,w>1.01?!0:r?!1:"x"),C=I(),ne=m(),S(),x=wa},e.onRelease=e.onGestureStart=function(Z,F){if(m.offset&&k(),!F)ce.restart(!0);else{Ee.cache++;var H=v(),M,se;r&&(M=I(),se=M+H*.05*-Z.velocityX/.227,H*=wS(I,M,se,Fi(c,Yn)),R.vars.scrollX=T(se)),M=m(),se=M+H*.05*-Z.velocityY/.227,H*=wS(m,M,se,Fi(c,Bt)),R.vars.scrollY=y(se),R.invalidate().duration(H).play(.01),(Fs&&R.vars.scrollY>=l||M>=l-1)&&Q.to({},{onUpdate:oe,duration:H})}o&&o(Z)},e.onWheel=function(){R._ts&&R.pause(),kn()-E>1e3&&(x=0,E=kn())},e.onChange=function(Z,F,H,M,se){if(wa!==x&&S(),F&&r&&I(T(M[2]===F?C+(Z.startX-Z.x):I()+F-M[1])),H){m.offset&&k();var de=se[2]===H,ke=de?ne+Z.startY-Z.y:m()+H-se[1],Re=y(ke);de&&ke!==Re&&(ne+=Re-ke),m(Re)}(H||F)&&ms()},e.onEnable=function(){i_(c,r?!1:"x"),Te.addEventListener("refresh",oe),Qt(Ae,"resize",oe),m.smooth&&(m.target.style.scrollBehavior="auto",m.smooth=I.smooth=!1),O.enable()},e.onDisable=function(){i_(c,!0),Yt(Ae,"resize",oe),Te.removeEventListener("refresh",oe),O.kill()},e.lockAxis=e.lockAxis!==!1,a=new At(e),a.iOS=Fs,Fs&&!m()&&m(1),Fs&&Q.ticker.add(Ri),ce=a._dc,R=Q.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:r?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:d2(m,m(),function(){return R.pause()})},onUpdate:ms,onComplete:ce.vars.onComplete}),a};Te.sort=function(t){return ve.sort(t||function(e,n){return(e.vars.refreshPriority||0)*-1e6+e.start-(n.start+(n.vars.refreshPriority||0)*-1e6)})};Te.observe=function(t){return new At(t)};Te.normalizeScroll=function(t){if(typeof t>"u")return qn;if(t===!0&&qn)return qn.enable();if(t===!1){qn&&qn.kill(),qn=t;return}var e=t instanceof At?t:z8(t);return qn&&qn.target===e.target&&qn.kill(),Ua(e.target)&&(qn=e),e};Te.core={_getVelocityProp:iv,_inputObserver:p2,_scrollers:Ee,_proxies:Gi,bridge:{ss:function(){Qr||Ba("scrollStart"),Qr=kn()},ref:function(){return xn}}};r2()&&Q.registerPlugin(Te);const m2=""+new URL("gold-sparkless-left-CuVBHWyt.png",import.meta.url).href,B8=""+new URL("gold-sparkless-left-CuVBHWyt.png",import.meta.url).href,g2=""+new URL("gold-B3bMPZzk.png",import.meta.url).href,hv=""+new URL("mens-UqTsMbbF.jpeg",import.meta.url).href,IS=""+new URL("womens-BZz1XLp_.jpg",import.meta.url).href,_2=""+new URL("pole-CNspcB1y.jpeg",import.meta.url).href;Ro.registerPlugin(Te);const $8=()=>{const t='"';U.useEffect(()=>{(()=>{document.querySelectorAll(".ani-text").forEach(s=>{const o=s.textContent.split(" ");s.innerHTML="",o.forEach((a,l)=>{const c=document.createElement("span");c.textContent=a,c.style.color="#fff",c.classList.add("word"),c.style.opacity="0",s.appendChild(c),l<o.length-1&&s.appendChild(document.createTextNode(" "))})}),document.querySelectorAll(".word").forEach(s=>{Ro.fromTo(s,{opacity:0},{opacity:1,duration:.6,scrollTrigger:{trigger:s,start:"top 80%",toggleActions:"play none none reverse",scrub:!0,onComplete:()=>{s.style.opacity=1}}})})})()},[]);const e=new Date().getFullYear();return g.jsxs("div",{className:"home-about-sec",children:[g.jsxs("div",{className:"home-about-img",children:[g.jsx("img",{src:m2,alt:"Gold Left",className:"goldLeft"}),g.jsx("img",{src:B8,alt:"Gold Right",className:"goldRight"})]}),g.jsxs("div",{className:"container",children:[g.jsx("div",{className:"home-about-wrapper",children:g.jsxs("div",{className:"home-about-grid",children:[g.jsxs("div",{className:"home-about-content",children:[g.jsx("div",{className:"top-content marg-medium",children:g.jsxs("p",{children:[g.jsx("span",{children:e})," is your time to be elegant with exclusive baby diva"]})}),g.jsx("div",{className:"bottom-content",children:g.jsx("p",{children:"A world-renowned wearable art experience, where an annual design competition culminates in a spectacular show combining theatre, art, fashion, music & performance."})})]}),g.jsxs("div",{className:"home-about-content",children:[g.jsxs("div",{className:"top-content",children:[g.jsx("p",{children:"26 JULY - 13 AUGUST"}),g.jsx("p",{children:"ACCRA, GHANA"}),g.jsx("p",{children:"TSB ARENA WELLINGTON"})]}),g.jsx("div",{className:"bottom-content",children:g.jsx("a",{href:"/",className:"btn-line",children:"tickets on sale"})})]}),g.jsxs("div",{className:"home-about-content-double",children:[g.jsxs("div",{className:"home-about-content-inner",children:[g.jsx("img",{src:hv,alt:"Mens fit"}),g.jsxs("span",{children:[g.jsx("a",{href:"/",children:"Mens Outfit"}),g.jsx(en,{icon:zI,className:"icon"})]}),g.jsx("div",{className:"dark-overlay"})]}),g.jsxs("div",{className:"home-about-content-inner",children:[g.jsx("img",{src:IS,alt:"Womens fit"}),g.jsxs("span",{children:[g.jsx("a",{href:"/",children:"Womens Outfit"}),g.jsx(en,{icon:zI,className:"icon"})]}),g.jsx("div",{className:"dark-overlay"})]})]})]})}),g.jsxs("div",{className:"about-sec",children:[g.jsxs("div",{className:"about-left",children:[g.jsxs("div",{className:"top",children:[g.jsx("span",{children:"Wow is an"}),g.jsxs("span",{children:["EXPLOSION OF ",g.jsx("span",{children:"CREATIVITY"})]})]}),g.jsxs("div",{className:"bottom",children:[g.jsx(la.Parallax,{className:"parallax-img gold-bg",style:{overflow:"auto"},blur:2,bgImage:g2,strength:100}),g.jsx(la.Parallax,{className:"parallax-img",bgImage:hv,strength:300,bgClassName:"custom-bg-class",contentClassName:"custom-content-class"}),g.jsx(la.Parallax,{className:"parallax-img",bgImage:IS,strength:-100,bgClassName:"custom-bg-class",contentClassName:"custom-content-class"}),g.jsx(la.Parallax,{className:"parallax-img",bgImage:_2,strength:-100,bgClassName:"custom-bg-class",contentClassName:"custom-content-class"})]})]}),g.jsx("div",{className:"about-right",children:g.jsxs("div",{className:"done",children:[g.jsx("div",{className:"quote_quotation-wrapper",children:g.jsx("div",{className:"text-size-quotation outline-stroke-gold",children:t})}),g.jsx("span",{className:"ani-text",children:"To take art off the wall and out of static display. To adorn the body in wildly wonderful ways. To celebrate creativity in a lavish and unique on-stage spectacular that will inspire us all."}),g.jsx("div",{className:"quote_quotation-wrapper quotation-right",children:g.jsx("div",{className:"text-size-quotation outline-stroke-gold",children:t})})]})})]})]})]})},y2=({products:t})=>{const[e,n]=U.useState(0),r=()=>{n(s=>(s+1)%t.length)},i=()=>{n(s=>(s-1+t.length)%t.length)};return g.jsx("div",{className:"product-carousel",children:g.jsxs("div",{className:"product-carousel-content",children:[g.jsxs("div",{className:"product-carousel-content",children:[g.jsx("img",{src:m2,alt:"",className:"obtained"}),g.jsx("img",{className:"product-image",src:t[e]["product-url"],alt:t[e].title})]}),g.jsxs("div",{className:"product-info",children:[g.jsxs("div",{className:"carousel-buttons",children:[g.jsx("button",{className:"outline2",onClick:i,children:g.jsx(en,{icon:oB})}),g.jsx("button",{className:"outline2",onClick:r,children:g.jsx(en,{icon:aB})})]}),g.jsxs("div",{className:"product-view",children:[g.jsxs("div",{children:[g.jsx("h3",{children:t[e].title}),g.jsxs("p",{children:[" ",t[e].author]})]}),g.jsxs("div",{children:[g.jsxs("p",{children:[" ",t[e].country]}),g.jsx("p",{children:t[e].year})]}),g.jsx("a",{href:t[e].link,className:"btn-line",children:"View Garment"})]})]})]})})};y2.propTypes={products:W.arrayOf(W.shape({title:W.string.isRequired,author:W.string.isRequired,country:W.string.isRequired,year:W.string.isRequired,link:W.string.isRequired,"product-url":W.string.isRequired})).isRequired};const v2=({products:t})=>g.jsx("div",{className:"product-display-wrapper",children:g.jsx("div",{className:"container",children:g.jsxs("div",{className:"product-display",children:[g.jsxs("div",{className:"display-content",children:[g.jsx("span",{children:"CUTTING EDGE ART"}),g.jsx("span",{children:"PUSHING CREATIVE LIMITS"}),g.jsx("div",{className:"content-body",children:g.jsx("p",{children:"Each year, winners of WOW Awards are added to an incredible collection of garments. Here you can browse through our digital collection of groundbreaking wearable art as previously seen on the WOW stage. You will read about the designers and the inspiration behind these stunning works of art and see their impressive awards and accolades."})}),g.jsx("div",{className:"content-link",children:g.jsx("a",{href:"/",className:"btn-line",children:"EXPLORE THE WEARABLE ART ARCHIVE"})})]}),g.jsx("div",{className:"display-content",children:g.jsx(y2,{products:t})})]})})});v2.propTypes={products:W.arrayOf(W.shape({title:W.string.isRequired,author:W.string.isRequired,country:W.string.isRequired,year:W.string.isRequired,link:W.string.isRequired,"product-url":W.string.isRequired})).isRequired};const q8=[{title:"Product 01",author:"Telvin varfley",country:"Ghana",year:"2024",link:"/","product-url":"../src/assets/images/woman.png"},{title:"Product 02",author:"Telvin varfley",country:"Ghana",year:"2024",link:"/","product-url":"../src/assets/images/woman.png"},{title:"Product 03",author:"Telvin varfley",country:"Ghana",year:"2024",link:"/","product-url":"../src/assets/images/woman.png"}];var W8={prefix:"fab",iconName:"square-instagram",icon:[448,512,["instagram-square"],"e055","M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"]},w2=W8,E2={prefix:"fab",iconName:"pinterest-p",icon:[384,512,[],"f231","M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"]},T2={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},B1={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fab",n="facebook-f",r=320,i=512,s=[],o="f39e",a="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z";t.definition={prefix:e,iconName:n,icon:[r,i,s,o,a]},t.faFacebookF=t.definition,t.prefix=e,t.iconName=n,t.width=r,t.height=i,t.ligatures=s,t.unicode=o,t.svgPathData=a,t.aliases=s})(B1);const H8=()=>g.jsxs("div",{className:"footer",children:[g.jsx("div",{className:"container",children:g.jsxs("div",{className:"footer-content",children:[g.jsxs("div",{className:"left",children:[g.jsxs("div",{className:"logo",children:[g.jsx("img",{src:ba,alt:"Logo"}),g.jsx("span",{children:"Exclusive Baby Diva"})]}),g.jsx("div",{className:"footer-content",children:g.jsx("p",{children:"s a world renowned wearable art experience, where an annual design competition culminates in a spectacular show combining theatre, art, fashion, music, & performance."})}),g.jsxs("div",{className:"footer-socials",children:[g.jsx("a",{href:"/",children:g.jsx(en,{icon:E2})}),g.jsx("a",{href:"/",children:g.jsx(en,{icon:B1.faFacebookF})}),g.jsx("a",{href:"/",children:g.jsx(en,{icon:w2})}),g.jsx("a",{href:"/",children:g.jsx(en,{icon:T2})})]})]}),g.jsxs("div",{className:"right",children:[g.jsxs("div",{className:"footer-about",children:[g.jsx("h2",{className:"footer-about-title",children:"About Us"}),g.jsxs("ul",{children:[g.jsx("li",{children:g.jsx("a",{href:"/",children:"About us"})}),g.jsx("li",{children:g.jsx("a",{href:"/",children:"Text 01"})}),g.jsx("li",{children:g.jsx("a",{href:"/",children:"Text 02"})})]})]}),g.jsxs("div",{className:"footer-about",children:[g.jsx("h2",{className:"footer-about-title",children:"Explore"}),g.jsxs("ul",{children:[g.jsx("li",{children:g.jsx("a",{href:"/",children:"About us"})}),g.jsx("li",{children:g.jsx("a",{href:"/",children:"Text 01"})}),g.jsx("li",{children:g.jsx("a",{href:"/",children:"Text 02"})})]})]}),g.jsxs("div",{className:"footer-about",children:[g.jsx("h2",{className:"footer-about-title",children:"About Us"}),g.jsxs("ul",{children:[g.jsx("li",{children:g.jsx("a",{href:"/",children:"About us"})}),g.jsx("li",{children:g.jsx("a",{href:"/",children:"Text 01"})}),g.jsx("li",{children:g.jsx("a",{href:"/",children:"Text 02"})})]})]})]})]})}),g.jsx("div",{className:"dark-overlay top-overlay"})]}),G8=()=>g.jsxs("div",{className:"page",children:[g.jsx(Zf,{}),g.jsx(I8,{}),g.jsx($8,{}),g.jsx(v2,{products:q8}),g.jsx(H8,{})]}),dv=""+new URL("about-DAvP7DEt.jpeg",import.meta.url).href,zm=()=>g.jsxs("div",{className:"footer ewl",children:[g.jsx("div",{className:"container",children:g.jsxs("div",{className:"footer-content",children:[g.jsxs("div",{className:"left",children:[g.jsxs("div",{className:"logo",children:[g.jsx("img",{src:ba,alt:"Logo"}),g.jsx("span",{children:"Exclusive Baby Diva"})]}),g.jsx("div",{className:"footer-content",children:g.jsx("p",{children:"s a world renowned wearable art experience, where an annual design competition culminates in a spectacular show combining theatre, art, fashion, music, & performance."})}),g.jsxs("div",{className:"footer-socials",children:[g.jsx("a",{href:"/",children:g.jsx(en,{icon:E2})}),g.jsx("a",{href:"/",children:g.jsx(en,{icon:B1.faFacebookF})}),g.jsx("a",{href:"/",children:g.jsx(en,{icon:w2})}),g.jsx("a",{href:"/",children:g.jsx(en,{icon:T2})})]})]}),g.jsxs("div",{className:"right",children:[g.jsxs("div",{className:"footer-about",children:[g.jsx("h2",{className:"footer-about-title",children:"About Us"}),g.jsxs("ul",{children:[g.jsx("li",{children:g.jsx("a",{href:"/",children:"About us"})}),g.jsx("li",{children:g.jsx("a",{href:"/",children:"Text 01"})}),g.jsx("li",{children:g.jsx("a",{href:"/",children:"Text 02"})})]})]}),g.jsxs("div",{className:"footer-about",children:[g.jsx("h2",{className:"footer-about-title",children:"Explore"}),g.jsxs("ul",{children:[g.jsx("li",{children:g.jsx("a",{href:"/",children:"About us"})}),g.jsx("li",{children:g.jsx("a",{href:"/",children:"Text 01"})}),g.jsx("li",{children:g.jsx("a",{href:"/",children:"Text 02"})})]})]}),g.jsxs("div",{className:"footer-about",children:[g.jsx("h2",{className:"footer-about-title",children:"About Us"}),g.jsxs("ul",{children:[g.jsx("li",{children:g.jsx("a",{href:"/",children:"About us"})}),g.jsx("li",{children:g.jsx("a",{href:"/",children:"Text 01"})}),g.jsx("li",{children:g.jsx("a",{href:"/",children:"Text 02"})})]})]})]})]})}),g.jsx("div",{className:"dark-overlay top-overlay"})]}),$1=({imageUrl:t,bigText:e,smallText:n})=>(U.useEffect(()=>{Ro.timeline().fromTo(".heroTextBig",{x:"-100%"},{x:"-40%",duration:1.5,ease:"power2.out"}).fromTo(".heroTextSmall",{x:"-100%"},{x:"-40%",duration:1.5,ease:"power2.out"},"-=1")},[]),g.jsxs("div",{className:"heroContainer",children:[g.jsx("div",{className:"dark-overlay"}),g.jsx("div",{className:"overlay"}),g.jsx("div",{className:"leftoverlay"}),g.jsx("img",{src:t,alt:"Hero Background",className:"heroImage"}),g.jsxs("div",{className:"heroContent",children:[g.jsx("h1",{className:"heroTextSmall",children:n}),g.jsx("h2",{className:"heroTextBig",children:e})]})]}));$1.propTypes={imageUrl:W.string.isRequired,bigText:W.string.isRequired,smallText:W.string.isRequired};const K8=""+new URL("Founder-B78DOUix.jpeg",import.meta.url).href;Ro.registerPlugin(Te);const Y8=()=>{const t='"';return U.useEffect(()=>{(()=>{document.querySelectorAll(".ani-text").forEach(i=>{const s=i.textContent.split(" ");i.innerHTML="",s.forEach((o,a)=>{const l=document.createElement("span");l.textContent=o,l.style.color="#fff",l.classList.add("word"),l.style.opacity="0",i.appendChild(l),a<s.length-1&&i.appendChild(document.createTextNode(" "))})}),document.querySelectorAll(".word").forEach(i=>{Ro.fromTo(i,{opacity:0},{opacity:1,duration:.6,scrollTrigger:{trigger:i,start:"top 80%",toggleActions:"play none none reverse",scrub:!0,onComplete:()=>{i.style.opacity=1}}})})})()},[]),g.jsx("div",{className:"aboutWrapper",style:{height:"150vh"},children:g.jsxs("div",{className:"container",children:[g.jsxs("div",{className:"basic-about-sec ",children:[g.jsxs("div",{className:"left w-40",children:[g.jsxs("div",{className:"title",children:[g.jsx("span",{className:"heading-style-h4",children:"Our Founder"}),g.jsx("span",{className:"heading-style-h2 text-weight-bold text-colour-blue text-color-gold",children:"MILDRED ALEXANDRA MENKITI"})]}),g.jsxs("div",{className:"body",children:[g.jsx("span",{className:"inline"}),g.jsx("p",{className:"text",children:"Every night of the show season is a spectacular visual feast. If you want to see the show before anyone else or are budget conscious, come to our Preview. If you love the glitz and glamour of an opening night join us for our Awards Night and see the winners announced in a live ceremony after the show."})]})]}),g.jsxs("div",{className:"right w-60",children:[g.jsx("div",{className:"image-overlay_wrapper is-left-side is-large hide-tablet"}),g.jsx("div",{className:"image-overlay_wrapper is-top-side"}),g.jsx("div",{className:"image-overlay_wrapper is-bottom-side"}),g.jsx("div",{className:"image-overlay_wrapper is-right-side"}),g.jsx("img",{src:K8,alt:"",className:"img-side"})]})]}),g.jsxs("div",{className:"about-sec sub",children:[g.jsx("div",{className:"about-left",style:{marginTop:"50px"},children:g.jsxs("div",{className:"bottom",children:[g.jsx(la.Parallax,{className:"parallax-img gold-bg about-img rene",style:{overflow:"auto"},blur:2,bgImage:g2,strength:100}),g.jsx(la.Parallax,{className:"parallax-img",bgImage:hv,strength:300,bgClassName:"custom-bg-class",stylecontentClassName:"custom-content-class"}),g.jsx(la.Parallax,{className:"parallax-img",bgImage:_2,strength:-100,bgClassName:"custom-bg-class",contentClassName:"custom-content-class"})]})}),g.jsx("div",{className:"about-right",style:{marginTop:"0"},children:g.jsxs("div",{className:"done",children:[g.jsx("div",{className:"quote_quotation-wrapper",children:g.jsx("div",{className:"text-size-quotation outline-stroke-gold",children:t})}),g.jsx("span",{className:"ani-text",children:"To take art off the wall and out of static display. To adorn the body in wildly wonderful ways. To celebrate creativity in a lavish and unique on-stage spectacular that will inspire us all."}),g.jsx("div",{className:"quote_quotation-wrapper quotation-right",children:g.jsx("div",{className:"text-size-quotation outline-stroke-gold",children:t})})]})})]})]})})},Q8=()=>g.jsxs("div",{className:"page",children:[g.jsx(Zf,{}),g.jsx($1,{imageUrl:dv,bigText:"African Fashion",smallText:"Welcome to the World of"}),g.jsx(Y8,{}),g.jsx(zm,{})]}),q1=({home:t,links:e,pageName:n})=>g.jsx("div",{className:"breadCrumbs",children:g.jsx("div",{className:"container",children:g.jsxs("div",{className:"crumbsWrap",children:[g.jsx("p",{children:n}),g.jsxs("span",{children:[g.jsx("a",{className:"hyper-link",href:t.href,children:t.label})," / ",e]})]})})});q1.propTypes={home:W.shape({href:W.string.isRequired,label:W.string.isRequired}).isRequired,links:W.string.isRequired,pageName:W.string.isRequired};const I2=({product:t})=>g.jsx("div",{className:"product-card",children:g.jsxs(yM,{to:`/product/${t.id}`,children:[g.jsxs("div",{className:"image-container",children:[g.jsx("img",{src:t["product-url"],alt:t["product-name"],className:"product-image"}),g.jsx("div",{className:"overlay",children:g.jsx("span",{className:"bid-now",children:"Order now"})})]}),g.jsxs("div",{className:"product-info",children:[g.jsx("p",{children:t["product-name"]}),g.jsxs("p",{children:["$",t.price]})]})]})});I2.propTypes={product:W.shape({id:W.string.isRequired,"product-name":W.string.isRequired,"product-url":W.string.isRequired,price:W.string.isRequired,"product-details":W.string}).isRequired};const X8=()=>{const[t,e]=U.useState([]),[n,r]=U.useState(!0),[i,s]=U.useState(null);return U.useEffect(()=>{(async()=>{try{const a=await cC();e(a)}catch(a){console.error("Error fetching products:",a),s("Failed to fetch products.")}finally{r(!1)}})()},[]),n?g.jsx("p",{children:"Loading products..."}):i?g.jsx("p",{children:i}):g.jsx("div",{className:"products-grid",children:t.length>0?t.map(o=>g.jsx(I2,{product:o},o.id)):g.jsx("p",{children:"No products available."})})},J8=()=>{const[t,e]=U.useState([]),[n,r]=U.useState(!0),[i,s]=U.useState(null);return U.useEffect(()=>{(async()=>{try{const a=await cC();e(a)}catch(a){console.error("Error fetching products:",a),s("Failed to fetch products.")}finally{r(!1)}})()},[]),n?g.jsx("p",{children:"Loading products..."}):i?g.jsx("p",{children:i}):g.jsxs("div",{children:[g.jsx(Zf,{}),g.jsx(q1,{pageName:"Products",home:{href:"/",label:"Home"},links:"Shop"}),g.jsx("div",{className:"container",children:g.jsx(X8,{products:t})}),g.jsx(zm,{})]})};var an=[];for(var s_=0;s_<256;++s_)an.push((s_+256).toString(16).slice(1));function Z8(t,e=0){return(an[t[e+0]]+an[t[e+1]]+an[t[e+2]]+an[t[e+3]]+"-"+an[t[e+4]]+an[t[e+5]]+"-"+an[t[e+6]]+an[t[e+7]]+"-"+an[t[e+8]]+an[t[e+9]]+"-"+an[t[e+10]]+an[t[e+11]]+an[t[e+12]]+an[t[e+13]]+an[t[e+14]]+an[t[e+15]]).toLowerCase()}var ad,e$=new Uint8Array(16);function t$(){if(!ad&&(ad=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ad))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ad(e$)}var n$=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const SS={randomUUID:n$};function r$(t,e,n){if(SS.randomUUID&&!e&&!t)return SS.randomUUID();t=t||{};var r=t.random||(t.rng||t$)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,Z8(r)}const i$=()=>{const[t,e]=U.useState(""),[n,r]=U.useState(""),[i,s]=U.useState(""),[o,a]=U.useState(""),[l,c]=U.useState(null),f=p=>{c(p.target.files)},h=async p=>{p.preventDefault();try{const m=[];if(l)for(const b of l){const E=kP(i1,`Products/${b.name}`);await xP(E,b);const v=await bP(E);m.push(v)}const w={"product-id":r$(),"product-name":t,price:n,category:i,"product-details":o,"product-url":m[0],"alt-images":m.slice(1)};await aP(km(Yf,"products"),w),alert("Product uploaded successfully!"),e(""),r(""),s(""),a(""),c(null)}catch(m){console.error("Error uploading product:",m),alert("Error uploading product.")}};return g.jsxs("form",{onSubmit:h,className:"product-upload-form",children:[g.jsxs("div",{className:"form-group",children:[g.jsx("label",{children:"Product Name:"}),g.jsx("input",{type:"text",value:t,onChange:p=>e(p.target.value),required:!0})]}),g.jsxs("div",{className:"form-group",children:[g.jsx("label",{children:"Price:"}),g.jsx("input",{type:"text",value:n,onChange:p=>r(p.target.value),required:!0})]}),g.jsxs("div",{className:"form-group",children:[g.jsx("label",{children:"Category:"}),g.jsx("input",{type:"text",value:i,onChange:p=>s(p.target.value),required:!0})]}),g.jsxs("div",{className:"form-group",children:[g.jsx("label",{children:"Product Details:"}),g.jsx("textarea",{value:o,onChange:p=>a(p.target.value),required:!0})]}),g.jsxs("div",{className:"form-group",children:[g.jsx("label",{children:"Images:"}),g.jsx("input",{type:"file",accept:"image/*",onChange:f,multiple:!0,required:!0})]}),g.jsx("button",{type:"submit",children:"Upload Product"})]})},S2=({isOpen:t,images:e,currentIndex:n,onClose:r,onPrev:i,onNext:s})=>t?g.jsx("div",{className:"modal-overlay",onClick:r,children:g.jsxs("div",{className:"modal-content",onClick:o=>o.stopPropagation(),children:[g.jsx("span",{className:"close-button",onClick:r,children:"×"}),n>0&&g.jsx("span",{className:"prev-button",onClick:i,children:"◀"}),g.jsx("img",{src:e[n],alt:"Product",className:"modal-image"}),n<e.length-1&&g.jsx("span",{className:"next-button",onClick:s,children:"▶"})]})}):null;S2.propTypes={isOpen:W.bool.isRequired,images:W.arrayOf(W.string).isRequired,currentIndex:W.number.isRequired,onClose:W.func.isRequired,onPrev:W.func.isRequired,onNext:W.func.isRequired};const x2=({product:t,onSelectProduct:e})=>{const[n,r]=U.useState(!1),[i,s]=U.useState(0),[o,a]=U.useState(!0),[l,c]=U.useState(!1);U.useEffect(()=>{e(t["product-id"])},[t,e]);const f=I=>{s(I),r(!0)},h=()=>{s(I=>Math.max(I-1,0))},p=()=>{s(I=>Math.min(I+1,t["alt-images"]?t["alt-images"].length:0))};if(!t)return g.jsx("div",{children:"Loading..."});const m=[t["product-url"],...t["alt-images"]||[]];return g.jsxs("div",{className:"content-wrapper mt-30",children:[g.jsx("div",{className:"other-images",children:t["alt-images"]&&t["alt-images"].length>0?t["alt-images"].map((I,w)=>g.jsx("img",{src:I,alt:`${t["product-name"]} alternative ${w+1}`,className:"alt-image",onClick:()=>f(w+1)},w)):g.jsx("p",{children:"No other images"})}),g.jsx("div",{className:"product-detail",children:g.jsx("div",{className:"image-container",children:g.jsx("img",{src:t["product-url"],alt:t["product-name"],className:"product-image",onClick:()=>f(0)})})}),g.jsxs("div",{className:"product-info",children:[g.jsx("h2",{children:t["product-name"]}),g.jsxs("p",{children:["Item Condition: ",t["item-condition"]]}),g.jsx("p",{children:t["product-details"]}),g.jsxs("div",{className:"accordion-container",children:[g.jsxs("div",{className:`accordion ${o?"open":""}`,children:[g.jsx("div",{className:`accordion-header ${o?"open":""}`,onClick:()=>a(!o),children:"Product Details"}),g.jsxs("div",{className:`accordion-content ${o?"open":""}`,children:[g.jsxs("p",{children:[g.jsx("strong",{children:"Price:"})," ",t.price]}),g.jsxs("p",{children:[g.jsx("strong",{children:"Expiry Date:"})," ",t["expiry-Date"]]}),g.jsxs("p",{children:[g.jsx("strong",{children:"Condition:"})," ",t["item-condition"]]})]})]}),g.jsxs("div",{className:`accordion ${l?"open":""}`,children:[g.jsx("div",{className:`accordion-header ${l?"open":""}`,onClick:()=>c(!l),children:"More Details"}),g.jsxs("div",{className:`accordion-content ${l?"open":""}`,children:[g.jsxs("p",{children:[g.jsx("strong",{children:"Product Name:"})," ",t["product-name"]]}),g.jsxs("p",{children:[g.jsx("strong",{children:"Product Details:"})," ",t["product-details"]]}),g.jsxs("p",{children:[g.jsx("strong",{children:"Additional Information:"})," ",t["additional-info"]]})]})]})]})]}),g.jsx(S2,{isOpen:n,images:m,currentIndex:i,onClose:()=>r(!1),onPrev:h,onNext:p})]})};x2.propTypes={product:W.object.isRequired,onSelectProduct:W.func.isRequired};const s$=()=>{const{id:t}=KD(),[e,n]=U.useState(null),[r,i]=U.useState(!0),[s,o]=U.useState(null);U.useEffect(()=>{(async()=>{i(!0);try{console.log("Fetching product with product-id:",t);const c=kF(km(Yf,"products"),AF("product-id","==",t)),f=await oP(c);if(f.empty)console.log("No product found with product-id:",t),o("No product found.");else{const h=f.docs[0].data();console.log("Product data:",h),n(h)}}catch(c){console.error("Error fetching product:",c),o("Error fetching product.")}finally{i(!1)}})()},[t]);const a=l=>{console.log("Product selected with product-id:",l)};return r?g.jsx("p",{children:"Loading..."}):s?g.jsx("p",{children:s}):g.jsxs("div",{children:[g.jsx(Zf,{}),g.jsx(q1,{pageName:"Products",home:{href:"/",label:"Women"},links:"oh well"}),g.jsx("div",{className:"container",children:e?g.jsx(x2,{product:e,onSelectProduct:a}):g.jsx("p",{children:"No product found."})}),g.jsx(zm,{})]})},b2=""+new URL("about-D08qwmCl.png",import.meta.url).href,o$=()=>{const[t,e]=U.useState(null);return U.useEffect(()=>{const n=XP(au,r=>{if(r){e(r);const i=r.uid;console.log(i)}else e(null)});return()=>{n()}},[]),g.jsx("div",{style:{color:"white",display:"none"},children:t?g.jsxs(g.Fragment,{children:[g.jsx("p",{children:` Signed In as ${t.email}`}),"  "]}):g.jsx(g.Fragment,{children:"Signed Out"})})},a$=()=>{const[t,e]=U.useState(""),[n,r]=U.useState(""),[i,s]=U.useState(""),o=Hb(),a=l=>{l.preventDefault(),s(""),qU(au,t,n).then(c=>{console.log(c),o("/")}).catch(c=>{console.log(c),s("Invalid email or password. Please try again.")})};return g.jsxs("div",{className:"login-container",children:[g.jsx(o$,{}),g.jsxs("div",{className:"login-image",children:[g.jsx("img",{src:ba,alt:"Login Illustration"}),g.jsx("p",{className:"form-left-p",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend nunc ut lacus hendrerit molestie."}),g.jsx("img",{src:b2,className:"users-img",alt:"Login Illustration"}),g.jsx("p",{className:"sub-txt",children:"Join over 20k customers and vendors bidding today"})]}),g.jsxs("div",{className:"login-form",children:[g.jsx("img",{src:ba,alt:"Login Illustration",style:{width:"20%"}}),g.jsx("p",{style:{color:"#BCBCBC",fontSize:"25px"},children:"Log In"}),g.jsxs("form",{className:"log-in",onSubmit:a,children:[g.jsxs("div",{className:"form-group w-100",children:[g.jsx("label",{htmlFor:"email",children:"Email or Phone Number"}),g.jsx("input",{type:"text",id:"email",name:"email",placeholder:"Email or phone number",value:t,onChange:l=>e(l.target.value),required:!0})]}),g.jsxs("div",{className:"form-group w-100",children:[g.jsx("label",{htmlFor:"password",children:"Password"}),g.jsx("input",{type:"password",id:"password",name:"password",placeholder:"Enter password",value:n,onChange:l=>r(l.target.value),required:!0})]}),i&&g.jsx("p",{style:{color:"red"},children:i}),g.jsx("a",{href:"/forgot-password",className:"forgot-pass",children:"Forgot password?"}),g.jsx("button",{className:"sign-btn",type:"submit",children:"Log In"})]}),g.jsxs("div",{className:"signUp",children:[g.jsx("p",{children:"Don’t have an account?"}),g.jsx("a",{href:"/signup",children:"Sign up now"})]})]})]})},l$=()=>{const[t,e]=U.useState(""),[n,r]=U.useState(""),[i,s]=U.useState(""),[o,a]=U.useState(""),[l,c]=U.useState(""),f=h=>{h.preventDefault(),console.log("Email or Phone:",t),console.log("Password:",i),$U(au,t,i).then(p=>{console.log(p)}).catch(p=>{console.log(p)})};return g.jsxs("div",{className:"login-container",children:[g.jsxs("div",{className:"login-image",children:[g.jsx("img",{src:ba,alt:"Login Illustration"}),g.jsx("p",{className:"form-left-p",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend nunc ut lacus hendrerit molestie."}),g.jsx("img",{src:b2,className:"users-img",alt:"Login Illustration"}),g.jsx("p",{className:"sub-txt",children:"Join over 20k customers and vendors bidding today"})]}),g.jsxs("div",{className:"login-form",children:[g.jsx("img",{src:ba,alt:"Login Illustration",style:{width:"20%"}}),g.jsx("p",{style:{color:"#BCBCBC",fontSize:"25px"},children:"Create an Account"}),g.jsxs("form",{className:"log-in",onSubmit:f,children:[g.jsxs("div",{className:"form-group w-100",children:[g.jsx("label",{htmlFor:"fname",children:"First Name"}),g.jsx("input",{type:"text",id:"fname",name:"fname",placeholder:"First Name",value:o,onChange:h=>a(h.target.value),required:!0})]}),g.jsxs("div",{className:"form-group w-100",children:[g.jsx("label",{htmlFor:"lname",children:"Last Name"}),g.jsx("input",{type:"text",id:"lname",name:"lname",placeholder:"Last Name",value:l,onChange:h=>c(h.target.value),required:!0})]}),g.jsxs("div",{className:"form-group w-100",children:[g.jsx("label",{htmlFor:"email",children:"Email"}),g.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Enter your email",value:t,onChange:h=>e(h.target.value),required:!0})]}),g.jsxs("div",{className:"form-group w-100",children:[g.jsx("label",{htmlFor:"phone",children:"Phone Number"}),g.jsx("input",{type:"tel",id:"phone",name:"phone",placeholder:"Enter your phone number",value:n,onChange:h=>r(h.target.value),required:!0})]}),g.jsxs("div",{className:"form-group w-100",children:[g.jsx("label",{htmlFor:"password",children:"Password"}),g.jsx("input",{type:"password",id:"password",name:"password",placeholder:"Enter password",value:i,onChange:h=>s(h.target.value),required:!0})]}),g.jsx("button",{type:"submit",className:"sign-btn",children:"Sign Up"})]}),g.jsx("hr",{style:{marginTop:"20px"}}),g.jsxs("div",{className:"signUp",style:{justifyContent:"center"},children:[g.jsx("p",{children:"Already have an account?"}),g.jsx("a",{href:"/login",children:"Log In"})]})]})]})},u$=()=>{const[t,e]=U.useState([]),[n,r]=U.useState(!1),i=o=>{e(o.target.files)},s=async()=>{r(!0);const a=Array.from(t).map(async l=>{const c=kP(i1,`pageContent/${l.name}`);await xP(c,l);const f=await bP(c);await aP(km(Yf,"SiteContent"),{url:f,name:l.name,createdAt:new Date})});try{await Promise.all(a),alert("Upload successful")}catch(l){console.error("Error uploading files:",l)}finally{r(!1)}};return g.jsxs("div",{children:[g.jsx("input",{type:"file",multiple:!0,onChange:i}),g.jsx("button",{onClick:s,disabled:n,children:n?"Uploading...":"Upload Images"})]})},k2=({imageUrl:t,smallText:e,smallerText:n,bigText:r})=>g.jsx("div",{className:"basicContainer",children:g.jsxs("div",{className:"container",children:[g.jsx("img",{src:t,alt:"Hero Background",className:"heroImage"}),g.jsxs("div",{className:"basicTextContent",children:[g.jsx("div",{className:"margin-bottom margin-tiny",children:g.jsx("h2",{className:"heading-style-h4",children:e})}),g.jsx("h2",{className:"heading-style-h2",children:n}),g.jsxs("div",{className:"dFlex",children:[g.jsx("div",{className:"info-line-p_line margin-top margin-xsmall"}),g.jsx("p",{className:"basicTextBig",children:r})]})]})]})});k2.propTypes={imageUrl:W.string.isRequired,bigText:W.string.isRequired,smallerText:W.string.isRequired,smallText:W.string.isRequired};const c$=()=>g.jsxs("div",{className:"page",children:[g.jsx(Zf,{}),g.jsx($1,{imageUrl:dv,bigText:`Meet our\r
world-class team`,smallText:"Our Team"}),g.jsx(k2,{imageUrl:dv,smallerText:"passionate team",bigText:`Meet the world-class team working behind-the-scenes at EBD. From garment technicians and lighting designers, to marketers and finance, our team is a talented group of individuals who care passionately about the arts and creative endeavour.\r
In the lead up to the show our core team is joined by an exceptional cast and crew of over 10 people.`,smallText:"Impossible without OUR"}),g.jsx(zm,{})]});function f$(){return g.jsx(mM,{children:g.jsxs(lM,{children:[g.jsx(Ai,{path:"/",element:g.jsx(G8,{})}),g.jsx(Ai,{path:"/aboutUs",element:g.jsx(Q8,{})}),g.jsx(Ai,{path:"/about-team",element:g.jsx(c$,{})}),g.jsx(Ai,{path:"/products",element:g.jsx(J8,{})}),g.jsx(Ai,{path:"/pro-upload",element:g.jsx(i$,{})}),g.jsx(Ai,{path:"/pageUpload",element:g.jsx(u$,{})}),g.jsx(Ai,{path:"/product/:id",element:g.jsx(s$,{})}),g.jsx(Ai,{path:"/login",element:g.jsx(a$,{})}),g.jsx(Ai,{path:"/signup",element:g.jsx(l$,{})})]})})}o_.createRoot(document.getElementById("root")).render(g.jsx(Gp.StrictMode,{children:g.jsx(f$,{})}));
