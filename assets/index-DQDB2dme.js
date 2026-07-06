var i2=Object.defineProperty;var r2=(s,e,t)=>e in s?i2(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var et=(s,e,t)=>r2(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();var am={exports:{}},zu={},lm={exports:{}},kt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ry;function s2(){if(ry)return kt;ry=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function m(k){return k===null||typeof k!="object"?null:(k=g&&k[g]||k["@@iterator"],typeof k=="function"?k:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,M={};function y(k,J,ze){this.props=k,this.context=J,this.refs=M,this.updater=ze||_}y.prototype.isReactComponent={},y.prototype.setState=function(k,J){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,J,"setState")},y.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function S(){}S.prototype=y.prototype;function b(k,J,ze){this.props=k,this.context=J,this.refs=M,this.updater=ze||_}var C=b.prototype=new S;C.constructor=b,x(C,y.prototype),C.isPureReactComponent=!0;var T=Array.isArray,P=Object.prototype.hasOwnProperty,L={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function w(k,J,ze){var Ve,Be={},se=null,ve=null;if(J!=null)for(Ve in J.ref!==void 0&&(ve=J.ref),J.key!==void 0&&(se=""+J.key),J)P.call(J,Ve)&&!D.hasOwnProperty(Ve)&&(Be[Ve]=J[Ve]);var me=arguments.length-2;if(me===1)Be.children=ze;else if(1<me){for(var Ie=Array(me),Ze=0;Ze<me;Ze++)Ie[Ze]=arguments[Ze+2];Be.children=Ie}if(k&&k.defaultProps)for(Ve in me=k.defaultProps,me)Be[Ve]===void 0&&(Be[Ve]=me[Ve]);return{$$typeof:s,type:k,key:se,ref:ve,props:Be,_owner:L.current}}function N(k,J){return{$$typeof:s,type:k.type,key:J,ref:k.ref,props:k.props,_owner:k._owner}}function F(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function B(k){var J={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(ze){return J[ze]})}var z=/\/+/g;function re(k,J){return typeof k=="object"&&k!==null&&k.key!=null?B(""+k.key):J.toString(36)}function ie(k,J,ze,Ve,Be){var se=typeof k;(se==="undefined"||se==="boolean")&&(k=null);var ve=!1;if(k===null)ve=!0;else switch(se){case"string":case"number":ve=!0;break;case"object":switch(k.$$typeof){case s:case e:ve=!0}}if(ve)return ve=k,Be=Be(ve),k=Ve===""?"."+re(ve,0):Ve,T(Be)?(ze="",k!=null&&(ze=k.replace(z,"$&/")+"/"),ie(Be,J,ze,"",function(Ze){return Ze})):Be!=null&&(F(Be)&&(Be=N(Be,ze+(!Be.key||ve&&ve.key===Be.key?"":(""+Be.key).replace(z,"$&/")+"/")+k)),J.push(Be)),1;if(ve=0,Ve=Ve===""?".":Ve+":",T(k))for(var me=0;me<k.length;me++){se=k[me];var Ie=Ve+re(se,me);ve+=ie(se,J,ze,Ie,Be)}else if(Ie=m(k),typeof Ie=="function")for(k=Ie.call(k),me=0;!(se=k.next()).done;)se=se.value,Ie=Ve+re(se,me++),ve+=ie(se,J,ze,Ie,Be);else if(se==="object")throw J=String(k),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return ve}function q(k,J,ze){if(k==null)return k;var Ve=[],Be=0;return ie(k,Ve,"","",function(se){return J.call(ze,se,Be++)}),Ve}function ee(k){if(k._status===-1){var J=k._result;J=J(),J.then(function(ze){(k._status===0||k._status===-1)&&(k._status=1,k._result=ze)},function(ze){(k._status===0||k._status===-1)&&(k._status=2,k._result=ze)}),k._status===-1&&(k._status=0,k._result=J)}if(k._status===1)return k._result.default;throw k._result}var W={current:null},Y={transition:null},te={ReactCurrentDispatcher:W,ReactCurrentBatchConfig:Y,ReactCurrentOwner:L};function U(){throw Error("act(...) is not supported in production builds of React.")}return kt.Children={map:q,forEach:function(k,J,ze){q(k,function(){J.apply(this,arguments)},ze)},count:function(k){var J=0;return q(k,function(){J++}),J},toArray:function(k){return q(k,function(J){return J})||[]},only:function(k){if(!F(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},kt.Component=y,kt.Fragment=t,kt.Profiler=i,kt.PureComponent=b,kt.StrictMode=n,kt.Suspense=f,kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,kt.act=U,kt.cloneElement=function(k,J,ze){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var Ve=x({},k.props),Be=k.key,se=k.ref,ve=k._owner;if(J!=null){if(J.ref!==void 0&&(se=J.ref,ve=L.current),J.key!==void 0&&(Be=""+J.key),k.type&&k.type.defaultProps)var me=k.type.defaultProps;for(Ie in J)P.call(J,Ie)&&!D.hasOwnProperty(Ie)&&(Ve[Ie]=J[Ie]===void 0&&me!==void 0?me[Ie]:J[Ie])}var Ie=arguments.length-2;if(Ie===1)Ve.children=ze;else if(1<Ie){me=Array(Ie);for(var Ze=0;Ze<Ie;Ze++)me[Ze]=arguments[Ze+2];Ve.children=me}return{$$typeof:s,type:k.type,key:Be,ref:se,props:Ve,_owner:ve}},kt.createContext=function(k){return k={$$typeof:l,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:a,_context:k},k.Consumer=k},kt.createElement=w,kt.createFactory=function(k){var J=w.bind(null,k);return J.type=k,J},kt.createRef=function(){return{current:null}},kt.forwardRef=function(k){return{$$typeof:c,render:k}},kt.isValidElement=F,kt.lazy=function(k){return{$$typeof:p,_payload:{_status:-1,_result:k},_init:ee}},kt.memo=function(k,J){return{$$typeof:d,type:k,compare:J===void 0?null:J}},kt.startTransition=function(k){var J=Y.transition;Y.transition={};try{k()}finally{Y.transition=J}},kt.unstable_act=U,kt.useCallback=function(k,J){return W.current.useCallback(k,J)},kt.useContext=function(k){return W.current.useContext(k)},kt.useDebugValue=function(){},kt.useDeferredValue=function(k){return W.current.useDeferredValue(k)},kt.useEffect=function(k,J){return W.current.useEffect(k,J)},kt.useId=function(){return W.current.useId()},kt.useImperativeHandle=function(k,J,ze){return W.current.useImperativeHandle(k,J,ze)},kt.useInsertionEffect=function(k,J){return W.current.useInsertionEffect(k,J)},kt.useLayoutEffect=function(k,J){return W.current.useLayoutEffect(k,J)},kt.useMemo=function(k,J){return W.current.useMemo(k,J)},kt.useReducer=function(k,J,ze){return W.current.useReducer(k,J,ze)},kt.useRef=function(k){return W.current.useRef(k)},kt.useState=function(k){return W.current.useState(k)},kt.useSyncExternalStore=function(k,J,ze){return W.current.useSyncExternalStore(k,J,ze)},kt.useTransition=function(){return W.current.useTransition()},kt.version="18.3.1",kt}var sy;function Ug(){return sy||(sy=1,lm.exports=s2()),lm.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oy;function o2(){if(oy)return zu;oy=1;var s=Ug(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(c,f,d){var p,g={},m=null,_=null;d!==void 0&&(m=""+d),f.key!==void 0&&(m=""+f.key),f.ref!==void 0&&(_=f.ref);for(p in f)n.call(f,p)&&!a.hasOwnProperty(p)&&(g[p]=f[p]);if(c&&c.defaultProps)for(p in f=c.defaultProps,f)g[p]===void 0&&(g[p]=f[p]);return{$$typeof:e,type:c,key:m,ref:_,props:g,_owner:i.current}}return zu.Fragment=t,zu.jsx=l,zu.jsxs=l,zu}var ay;function a2(){return ay||(ay=1,am.exports=o2()),am.exports}var G=a2(),Et=Ug(),Gf={},um={exports:{}},ji={},cm={exports:{}},fm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly;function l2(){return ly||(ly=1,function(s){function e(Y,te){var U=Y.length;Y.push(te);e:for(;0<U;){var k=U-1>>>1,J=Y[k];if(0<i(J,te))Y[k]=te,Y[U]=J,U=k;else break e}}function t(Y){return Y.length===0?null:Y[0]}function n(Y){if(Y.length===0)return null;var te=Y[0],U=Y.pop();if(U!==te){Y[0]=U;e:for(var k=0,J=Y.length,ze=J>>>1;k<ze;){var Ve=2*(k+1)-1,Be=Y[Ve],se=Ve+1,ve=Y[se];if(0>i(Be,U))se<J&&0>i(ve,Be)?(Y[k]=ve,Y[se]=U,k=se):(Y[k]=Be,Y[Ve]=U,k=Ve);else if(se<J&&0>i(ve,U))Y[k]=ve,Y[se]=U,k=se;else break e}}return te}function i(Y,te){var U=Y.sortIndex-te.sortIndex;return U!==0?U:Y.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;s.unstable_now=function(){return a.now()}}else{var l=Date,c=l.now();s.unstable_now=function(){return l.now()-c}}var f=[],d=[],p=1,g=null,m=3,_=!1,x=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(Y){for(var te=t(d);te!==null;){if(te.callback===null)n(d);else if(te.startTime<=Y)n(d),te.sortIndex=te.expirationTime,e(f,te);else break;te=t(d)}}function T(Y){if(M=!1,C(Y),!x)if(t(f)!==null)x=!0,ee(P);else{var te=t(d);te!==null&&W(T,te.startTime-Y)}}function P(Y,te){x=!1,M&&(M=!1,S(w),w=-1),_=!0;var U=m;try{for(C(te),g=t(f);g!==null&&(!(g.expirationTime>te)||Y&&!B());){var k=g.callback;if(typeof k=="function"){g.callback=null,m=g.priorityLevel;var J=k(g.expirationTime<=te);te=s.unstable_now(),typeof J=="function"?g.callback=J:g===t(f)&&n(f),C(te)}else n(f);g=t(f)}if(g!==null)var ze=!0;else{var Ve=t(d);Ve!==null&&W(T,Ve.startTime-te),ze=!1}return ze}finally{g=null,m=U,_=!1}}var L=!1,D=null,w=-1,N=5,F=-1;function B(){return!(s.unstable_now()-F<N)}function z(){if(D!==null){var Y=s.unstable_now();F=Y;var te=!0;try{te=D(!0,Y)}finally{te?re():(L=!1,D=null)}}else L=!1}var re;if(typeof b=="function")re=function(){b(z)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,q=ie.port2;ie.port1.onmessage=z,re=function(){q.postMessage(null)}}else re=function(){y(z,0)};function ee(Y){D=Y,L||(L=!0,re())}function W(Y,te){w=y(function(){Y(s.unstable_now())},te)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Y){Y.callback=null},s.unstable_continueExecution=function(){x||_||(x=!0,ee(P))},s.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<Y?Math.floor(1e3/Y):5},s.unstable_getCurrentPriorityLevel=function(){return m},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(Y){switch(m){case 1:case 2:case 3:var te=3;break;default:te=m}var U=m;m=te;try{return Y()}finally{m=U}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Y,te){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var U=m;m=Y;try{return te()}finally{m=U}},s.unstable_scheduleCallback=function(Y,te,U){var k=s.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?k+U:k):U=k,Y){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=U+J,Y={id:p++,callback:te,priorityLevel:Y,startTime:U,expirationTime:J,sortIndex:-1},U>k?(Y.sortIndex=U,e(d,Y),t(f)===null&&Y===t(d)&&(M?(S(w),w=-1):M=!0,W(T,U-k))):(Y.sortIndex=J,e(f,Y),x||_||(x=!0,ee(P))),Y},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(Y){var te=m;return function(){var U=m;m=te;try{return Y.apply(this,arguments)}finally{m=U}}}}(fm)),fm}var uy;function u2(){return uy||(uy=1,cm.exports=l2()),cm.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cy;function c2(){if(cy)return ji;cy=1;var s=Ug(),e=u2();function t(r){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+r,u=1;u<arguments.length;u++)o+="&args[]="+encodeURIComponent(arguments[u]);return"Minified React error #"+r+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,i={};function a(r,o){l(r,o),l(r+"Capture",o)}function l(r,o){for(i[r]=o,r=0;r<o.length;r++)n.add(o[r])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function m(r){return f.call(g,r)?!0:f.call(p,r)?!1:d.test(r)?g[r]=!0:(p[r]=!0,!1)}function _(r,o,u,h){if(u!==null&&u.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return h?!1:u!==null?!u.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function x(r,o,u,h){if(o===null||typeof o>"u"||_(r,o,u,h))return!0;if(h)return!1;if(u!==null)switch(u.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function M(r,o,u,h,v,E,R){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=h,this.attributeNamespace=v,this.mustUseProperty=u,this.propertyName=r,this.type=o,this.sanitizeURL=E,this.removeEmptyString=R}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){y[r]=new M(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var o=r[0];y[o]=new M(o,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){y[r]=new M(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){y[r]=new M(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){y[r]=new M(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){y[r]=new M(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){y[r]=new M(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){y[r]=new M(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){y[r]=new M(r,5,!1,r.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function b(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var o=r.replace(S,b);y[o]=new M(o,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var o=r.replace(S,b);y[o]=new M(o,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var o=r.replace(S,b);y[o]=new M(o,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){y[r]=new M(r,1,!1,r.toLowerCase(),null,!1,!1)}),y.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){y[r]=new M(r,1,!1,r.toLowerCase(),null,!0,!0)});function C(r,o,u,h){var v=y.hasOwnProperty(o)?y[o]:null;(v!==null?v.type!==0:h||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(x(o,u,v,h)&&(u=null),h||v===null?m(o)&&(u===null?r.removeAttribute(o):r.setAttribute(o,""+u)):v.mustUseProperty?r[v.propertyName]=u===null?v.type===3?!1:"":u:(o=v.attributeName,h=v.attributeNamespace,u===null?r.removeAttribute(o):(v=v.type,u=v===3||v===4&&u===!0?"":""+u,h?r.setAttributeNS(h,o,u):r.setAttribute(o,u))))}var T=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),L=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),B=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),Y=Symbol.iterator;function te(r){return r===null||typeof r!="object"?null:(r=Y&&r[Y]||r["@@iterator"],typeof r=="function"?r:null)}var U=Object.assign,k;function J(r){if(k===void 0)try{throw Error()}catch(u){var o=u.stack.trim().match(/\n( *(at )?)/);k=o&&o[1]||""}return`
`+k+r}var ze=!1;function Ve(r,o){if(!r||ze)return"";ze=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(pe){var h=pe}Reflect.construct(r,[],o)}else{try{o.call()}catch(pe){h=pe}r.call(o.prototype)}else{try{throw Error()}catch(pe){h=pe}r()}}catch(pe){if(pe&&h&&typeof pe.stack=="string"){for(var v=pe.stack.split(`
`),E=h.stack.split(`
`),R=v.length-1,V=E.length-1;1<=R&&0<=V&&v[R]!==E[V];)V--;for(;1<=R&&0<=V;R--,V--)if(v[R]!==E[V]){if(R!==1||V!==1)do if(R--,V--,0>V||v[R]!==E[V]){var $=`
`+v[R].replace(" at new "," at ");return r.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",r.displayName)),$}while(1<=R&&0<=V);break}}}finally{ze=!1,Error.prepareStackTrace=u}return(r=r?r.displayName||r.name:"")?J(r):""}function Be(r){switch(r.tag){case 5:return J(r.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return r=Ve(r.type,!1),r;case 11:return r=Ve(r.type.render,!1),r;case 1:return r=Ve(r.type,!0),r;default:return""}}function se(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case D:return"Fragment";case L:return"Portal";case N:return"Profiler";case w:return"StrictMode";case re:return"Suspense";case ie:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case B:return(r.displayName||"Context")+".Consumer";case F:return(r._context.displayName||"Context")+".Provider";case z:var o=r.render;return r=r.displayName,r||(r=o.displayName||o.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case q:return o=r.displayName||null,o!==null?o:se(r.type)||"Memo";case ee:o=r._payload,r=r._init;try{return se(r(o))}catch{}}return null}function ve(r){var o=r.type;switch(r.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=o.render,r=r.displayName||r.name||"",o.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(o);case 8:return o===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function me(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Ie(r){var o=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Ze(r){var o=Ie(r)?"checked":"value",u=Object.getOwnPropertyDescriptor(r.constructor.prototype,o),h=""+r[o];if(!r.hasOwnProperty(o)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var v=u.get,E=u.set;return Object.defineProperty(r,o,{configurable:!0,get:function(){return v.call(this)},set:function(R){h=""+R,E.call(this,R)}}),Object.defineProperty(r,o,{enumerable:u.enumerable}),{getValue:function(){return h},setValue:function(R){h=""+R},stopTracking:function(){r._valueTracker=null,delete r[o]}}}}function qe(r){r._valueTracker||(r._valueTracker=Ze(r))}function Ct(r){if(!r)return!1;var o=r._valueTracker;if(!o)return!0;var u=o.getValue(),h="";return r&&(h=Ie(r)?r.checked?"true":"false":r.value),r=h,r!==u?(o.setValue(r),!0):!1}function Xe(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function dt(r,o){var u=o.checked;return U({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:u??r._wrapperState.initialChecked})}function mt(r,o){var u=o.defaultValue==null?"":o.defaultValue,h=o.checked!=null?o.checked:o.defaultChecked;u=me(o.value!=null?o.value:u),r._wrapperState={initialChecked:h,initialValue:u,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function ht(r,o){o=o.checked,o!=null&&C(r,"checked",o,!1)}function ce(r,o){ht(r,o);var u=me(o.value),h=o.type;if(u!=null)h==="number"?(u===0&&r.value===""||r.value!=u)&&(r.value=""+u):r.value!==""+u&&(r.value=""+u);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}o.hasOwnProperty("value")?Vt(r,o.type,u):o.hasOwnProperty("defaultValue")&&Vt(r,o.type,me(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(r.defaultChecked=!!o.defaultChecked)}function Nt(r,o,u){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var h=o.type;if(!(h!=="submit"&&h!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+r._wrapperState.initialValue,u||o===r.value||(r.value=o),r.defaultValue=o}u=r.name,u!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,u!==""&&(r.name=u)}function Vt(r,o,u){(o!=="number"||Xe(r.ownerDocument)!==r)&&(u==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+u&&(r.defaultValue=""+u))}var Ht=Array.isArray;function it(r,o,u,h){if(r=r.options,o){o={};for(var v=0;v<u.length;v++)o["$"+u[v]]=!0;for(u=0;u<r.length;u++)v=o.hasOwnProperty("$"+r[u].value),r[u].selected!==v&&(r[u].selected=v),v&&h&&(r[u].defaultSelected=!0)}else{for(u=""+me(u),o=null,v=0;v<r.length;v++){if(r[v].value===u){r[v].selected=!0,h&&(r[v].defaultSelected=!0);return}o!==null||r[v].disabled||(o=r[v])}o!==null&&(o.selected=!0)}}function Ft(r,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return U({},o,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function j(r,o){var u=o.value;if(u==null){if(u=o.children,o=o.defaultValue,u!=null){if(o!=null)throw Error(t(92));if(Ht(u)){if(1<u.length)throw Error(t(93));u=u[0]}o=u}o==null&&(o=""),u=o}r._wrapperState={initialValue:me(u)}}function jt(r,o){var u=me(o.value),h=me(o.defaultValue);u!=null&&(u=""+u,u!==r.value&&(r.value=u),o.defaultValue==null&&r.defaultValue!==u&&(r.defaultValue=u)),h!=null&&(r.defaultValue=""+h)}function pt(r){var o=r.textContent;o===r._wrapperState.initialValue&&o!==""&&o!==null&&(r.value=o)}function O(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function A(r,o){return r==null||r==="http://www.w3.org/1999/xhtml"?O(o):r==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Z,oe=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,u,h,v){MSApp.execUnsafeLocalFunction(function(){return r(o,u,h,v)})}:r}(function(r,o){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=o;else{for(Z=Z||document.createElement("div"),Z.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Z.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;o.firstChild;)r.appendChild(o.firstChild)}});function he(r,o){if(o){var u=r.firstChild;if(u&&u===r.lastChild&&u.nodeType===3){u.nodeValue=o;return}}r.textContent=o}var De={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},be=["Webkit","ms","Moz","O"];Object.keys(De).forEach(function(r){be.forEach(function(o){o=o+r.charAt(0).toUpperCase()+r.substring(1),De[o]=De[r]})});function ge(r,o,u){return o==null||typeof o=="boolean"||o===""?"":u||typeof o!="number"||o===0||De.hasOwnProperty(r)&&De[r]?(""+o).trim():o+"px"}function ne(r,o){r=r.style;for(var u in o)if(o.hasOwnProperty(u)){var h=u.indexOf("--")===0,v=ge(u,o[u],h);u==="float"&&(u="cssFloat"),h?r.setProperty(u,v):r[u]=v}}var xe=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Re(r,o){if(o){if(xe[r]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function ye(r,o){if(r.indexOf("-")===-1)return typeof o.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Se=null;function Me(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Ge=null,$e=null,H=null;function Te(r){if(r=Tu(r)){if(typeof Ge!="function")throw Error(t(280));var o=r.stateNode;o&&(o=rf(o),Ge(r.stateNode,r.type,o))}}function _e(r){$e?H?H.push(r):H=[r]:$e=r}function Ue(){if($e){var r=$e,o=H;if(H=$e=null,Te(r),o)for(r=0;r<o.length;r++)Te(o[r])}}function Fe(r,o){return r(o)}function Ee(){}var Ae=!1;function we(r,o,u){if(Ae)return r(o,u);Ae=!0;try{return Fe(r,o,u)}finally{Ae=!1,($e!==null||H!==null)&&(Ee(),Ue())}}function at(r,o){var u=r.stateNode;if(u===null)return null;var h=rf(u);if(h===null)return null;u=h[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(u&&typeof u!="function")throw Error(t(231,o,typeof u));return u}var Ce=!1;if(c)try{var lt={};Object.defineProperty(lt,"passive",{get:function(){Ce=!0}}),window.addEventListener("test",lt,lt),window.removeEventListener("test",lt,lt)}catch{Ce=!1}function Je(r,o,u,h,v,E,R,V,$){var pe=Array.prototype.slice.call(arguments,3);try{o.apply(u,pe)}catch(Le){this.onError(Le)}}var vt=!1,mn=null,Rt=!1,en=null,On={onError:function(r){vt=!0,mn=r}};function cn(r,o,u,h,v,E,R,V,$){vt=!1,mn=null,Je.apply(On,arguments)}function tn(r,o,u,h,v,E,R,V,$){if(cn.apply(this,arguments),vt){if(vt){var pe=mn;vt=!1,mn=null}else throw Error(t(198));Rt||(Rt=!0,en=pe)}}function Pt(r){var o=r,u=r;if(r.alternate)for(;o.return;)o=o.return;else{r=o;do o=r,o.flags&4098&&(u=o.return),r=o.return;while(r)}return o.tag===3?u:null}function Kn(r){if(r.tag===13){var o=r.memoizedState;if(o===null&&(r=r.alternate,r!==null&&(o=r.memoizedState)),o!==null)return o.dehydrated}return null}function nn(r){if(Pt(r)!==r)throw Error(t(188))}function Zn(r){var o=r.alternate;if(!o){if(o=Pt(r),o===null)throw Error(t(188));return o!==r?null:r}for(var u=r,h=o;;){var v=u.return;if(v===null)break;var E=v.alternate;if(E===null){if(h=v.return,h!==null){u=h;continue}break}if(v.child===E.child){for(E=v.child;E;){if(E===u)return nn(v),r;if(E===h)return nn(v),o;E=E.sibling}throw Error(t(188))}if(u.return!==h.return)u=v,h=E;else{for(var R=!1,V=v.child;V;){if(V===u){R=!0,u=v,h=E;break}if(V===h){R=!0,h=v,u=E;break}V=V.sibling}if(!R){for(V=E.child;V;){if(V===u){R=!0,u=E,h=v;break}if(V===h){R=!0,h=E,u=v;break}V=V.sibling}if(!R)throw Error(t(189))}}if(u.alternate!==h)throw Error(t(190))}if(u.tag!==3)throw Error(t(188));return u.stateNode.current===u?r:o}function Qn(r){return r=Zn(r),r!==null?En(r):null}function En(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var o=En(r);if(o!==null)return o;r=r.sibling}return null}var gn=e.unstable_scheduleCallback,Pn=e.unstable_cancelCallback,Ar=e.unstable_shouldYield,eo=e.unstable_requestPaint,Lt=e.unstable_now,wn=e.unstable_getCurrentPriorityLevel,_i=e.unstable_ImmediatePriority,I=e.unstable_UserBlockingPriority,Q=e.unstable_NormalPriority,de=e.unstable_LowPriority,ae=e.unstable_IdlePriority,le=null,Oe=null;function Ye(r){if(Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot(le,r,void 0,(r.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:wt,rt=Math.log,ct=Math.LN2;function wt(r){return r>>>=0,r===0?32:31-(rt(r)/ct|0)|0}var Tt=64,ot=4194304;function Xt(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function hn(r,o){var u=r.pendingLanes;if(u===0)return 0;var h=0,v=r.suspendedLanes,E=r.pingedLanes,R=u&268435455;if(R!==0){var V=R&~v;V!==0?h=Xt(V):(E&=R,E!==0&&(h=Xt(E)))}else R=u&~v,R!==0?h=Xt(R):E!==0&&(h=Xt(E));if(h===0)return 0;if(o!==0&&o!==h&&!(o&v)&&(v=h&-h,E=o&-o,v>=E||v===16&&(E&4194240)!==0))return o;if(h&4&&(h|=u&16),o=r.entangledLanes,o!==0)for(r=r.entanglements,o&=h;0<o;)u=31-He(o),v=1<<u,h|=r[u],o&=~v;return h}function yn(r,o){switch(r){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rn(r,o){for(var u=r.suspendedLanes,h=r.pingedLanes,v=r.expirationTimes,E=r.pendingLanes;0<E;){var R=31-He(E),V=1<<R,$=v[R];$===-1?(!(V&u)||V&h)&&(v[R]=yn(V,o)):$<=o&&(r.expiredLanes|=V),E&=~V}}function kn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function je(){var r=Tt;return Tt<<=1,!(Tt&4194240)&&(Tt=64),r}function oi(r){for(var o=[],u=0;31>u;u++)o.push(r);return o}function It(r,o,u){r.pendingLanes|=o,o!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,o=31-He(o),r[o]=u}function Hi(r,o){var u=r.pendingLanes&~o;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=o,r.mutableReadLanes&=o,r.entangledLanes&=o,o=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<u;){var v=31-He(u),E=1<<v;o[v]=0,h[v]=-1,r[v]=-1,u&=~E}}function Gi(r,o){var u=r.entangledLanes|=o;for(r=r.entanglements;u;){var h=31-He(u),v=1<<h;v&o|r[h]&o&&(r[h]|=o),u&=~v}}var Ot=0;function Cs(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var Kt,_n,Vr,sn,Hr,is=!1,$o=[],to=null,no=null,io=null,uu=new Map,cu=new Map,ro=[],AE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function V_(r,o){switch(r){case"focusin":case"focusout":to=null;break;case"dragenter":case"dragleave":no=null;break;case"mouseover":case"mouseout":io=null;break;case"pointerover":case"pointerout":uu.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":cu.delete(o.pointerId)}}function fu(r,o,u,h,v,E){return r===null||r.nativeEvent!==E?(r={blockedOn:o,domEventName:u,eventSystemFlags:h,nativeEvent:E,targetContainers:[v]},o!==null&&(o=Tu(o),o!==null&&_n(o)),r):(r.eventSystemFlags|=h,o=r.targetContainers,v!==null&&o.indexOf(v)===-1&&o.push(v),r)}function bE(r,o,u,h,v){switch(o){case"focusin":return to=fu(to,r,o,u,h,v),!0;case"dragenter":return no=fu(no,r,o,u,h,v),!0;case"mouseover":return io=fu(io,r,o,u,h,v),!0;case"pointerover":var E=v.pointerId;return uu.set(E,fu(uu.get(E)||null,r,o,u,h,v)),!0;case"gotpointercapture":return E=v.pointerId,cu.set(E,fu(cu.get(E)||null,r,o,u,h,v)),!0}return!1}function H_(r){var o=jo(r.target);if(o!==null){var u=Pt(o);if(u!==null){if(o=u.tag,o===13){if(o=Kn(u),o!==null){r.blockedOn=o,Hr(r.priority,function(){Vr(u)});return}}else if(o===3&&u.stateNode.current.memoizedState.isDehydrated){r.blockedOn=u.tag===3?u.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Gc(r){if(r.blockedOn!==null)return!1;for(var o=r.targetContainers;0<o.length;){var u=Ih(r.domEventName,r.eventSystemFlags,o[0],r.nativeEvent);if(u===null){u=r.nativeEvent;var h=new u.constructor(u.type,u);Se=h,u.target.dispatchEvent(h),Se=null}else return o=Tu(u),o!==null&&_n(o),r.blockedOn=u,!1;o.shift()}return!0}function G_(r,o,u){Gc(r)&&u.delete(o)}function CE(){is=!1,to!==null&&Gc(to)&&(to=null),no!==null&&Gc(no)&&(no=null),io!==null&&Gc(io)&&(io=null),uu.forEach(G_),cu.forEach(G_)}function du(r,o){r.blockedOn===o&&(r.blockedOn=null,is||(is=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,CE)))}function hu(r){function o(v){return du(v,r)}if(0<$o.length){du($o[0],r);for(var u=1;u<$o.length;u++){var h=$o[u];h.blockedOn===r&&(h.blockedOn=null)}}for(to!==null&&du(to,r),no!==null&&du(no,r),io!==null&&du(io,r),uu.forEach(o),cu.forEach(o),u=0;u<ro.length;u++)h=ro[u],h.blockedOn===r&&(h.blockedOn=null);for(;0<ro.length&&(u=ro[0],u.blockedOn===null);)H_(u),u.blockedOn===null&&ro.shift()}var za=T.ReactCurrentBatchConfig,Wc=!0;function RE(r,o,u,h){var v=Ot,E=za.transition;za.transition=null;try{Ot=1,Nh(r,o,u,h)}finally{Ot=v,za.transition=E}}function PE(r,o,u,h){var v=Ot,E=za.transition;za.transition=null;try{Ot=4,Nh(r,o,u,h)}finally{Ot=v,za.transition=E}}function Nh(r,o,u,h){if(Wc){var v=Ih(r,o,u,h);if(v===null)Zh(r,o,h,Xc,u),V_(r,h);else if(bE(v,r,o,u,h))h.stopPropagation();else if(V_(r,h),o&4&&-1<AE.indexOf(r)){for(;v!==null;){var E=Tu(v);if(E!==null&&Kt(E),E=Ih(r,o,u,h),E===null&&Zh(r,o,h,Xc,u),E===v)break;v=E}v!==null&&h.stopPropagation()}else Zh(r,o,h,null,u)}}var Xc=null;function Ih(r,o,u,h){if(Xc=null,r=Me(h),r=jo(r),r!==null)if(o=Pt(r),o===null)r=null;else if(u=o.tag,u===13){if(r=Kn(o),r!==null)return r;r=null}else if(u===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;r=null}else o!==r&&(r=null);return Xc=r,null}function W_(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wn()){case _i:return 1;case I:return 4;case Q:case de:return 16;case ae:return 536870912;default:return 16}default:return 16}}var so=null,Uh=null,Yc=null;function X_(){if(Yc)return Yc;var r,o=Uh,u=o.length,h,v="value"in so?so.value:so.textContent,E=v.length;for(r=0;r<u&&o[r]===v[r];r++);var R=u-r;for(h=1;h<=R&&o[u-h]===v[E-h];h++);return Yc=v.slice(r,1<h?1-h:void 0)}function qc(r){var o=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&o===13&&(r=13)):r=o,r===10&&(r=13),32<=r||r===13?r:0}function $c(){return!0}function Y_(){return!1}function or(r){function o(u,h,v,E,R){this._reactName=u,this._targetInst=v,this.type=h,this.nativeEvent=E,this.target=R,this.currentTarget=null;for(var V in r)r.hasOwnProperty(V)&&(u=r[V],this[V]=u?u(E):E[V]);return this.isDefaultPrevented=(E.defaultPrevented!=null?E.defaultPrevented:E.returnValue===!1)?$c:Y_,this.isPropagationStopped=Y_,this}return U(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var u=this.nativeEvent;u&&(u.preventDefault?u.preventDefault():typeof u.returnValue!="unknown"&&(u.returnValue=!1),this.isDefaultPrevented=$c)},stopPropagation:function(){var u=this.nativeEvent;u&&(u.stopPropagation?u.stopPropagation():typeof u.cancelBubble!="unknown"&&(u.cancelBubble=!0),this.isPropagationStopped=$c)},persist:function(){},isPersistent:$c}),o}var Va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fh=or(Va),pu=U({},Va,{view:0,detail:0}),LE=or(pu),Oh,kh,mu,jc=U({},pu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zh,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==mu&&(mu&&r.type==="mousemove"?(Oh=r.screenX-mu.screenX,kh=r.screenY-mu.screenY):kh=Oh=0,mu=r),Oh)},movementY:function(r){return"movementY"in r?r.movementY:kh}}),q_=or(jc),DE=U({},jc,{dataTransfer:0}),NE=or(DE),IE=U({},pu,{relatedTarget:0}),Bh=or(IE),UE=U({},Va,{animationName:0,elapsedTime:0,pseudoElement:0}),FE=or(UE),OE=U({},Va,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),kE=or(OE),BE=U({},Va,{data:0}),$_=or(BE),zE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},VE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},HE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function GE(r){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(r):(r=HE[r])?!!o[r]:!1}function zh(){return GE}var WE=U({},pu,{key:function(r){if(r.key){var o=zE[r.key]||r.key;if(o!=="Unidentified")return o}return r.type==="keypress"?(r=qc(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?VE[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zh,charCode:function(r){return r.type==="keypress"?qc(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?qc(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),XE=or(WE),YE=U({},jc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),j_=or(YE),qE=U({},pu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zh}),$E=or(qE),jE=U({},Va,{propertyName:0,elapsedTime:0,pseudoElement:0}),KE=or(jE),ZE=U({},jc,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),QE=or(ZE),JE=[9,13,27,32],Vh=c&&"CompositionEvent"in window,gu=null;c&&"documentMode"in document&&(gu=document.documentMode);var ew=c&&"TextEvent"in window&&!gu,K_=c&&(!Vh||gu&&8<gu&&11>=gu),Z_=" ",Q_=!1;function J_(r,o){switch(r){case"keyup":return JE.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ev(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Ha=!1;function tw(r,o){switch(r){case"compositionend":return ev(o);case"keypress":return o.which!==32?null:(Q_=!0,Z_);case"textInput":return r=o.data,r===Z_&&Q_?null:r;default:return null}}function nw(r,o){if(Ha)return r==="compositionend"||!Vh&&J_(r,o)?(r=X_(),Yc=Uh=so=null,Ha=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return K_&&o.locale!=="ko"?null:o.data;default:return null}}var iw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tv(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o==="input"?!!iw[r.type]:o==="textarea"}function nv(r,o,u,h){_e(h),o=ef(o,"onChange"),0<o.length&&(u=new Fh("onChange","change",null,u,h),r.push({event:u,listeners:o}))}var _u=null,vu=null;function rw(r){yv(r,0)}function Kc(r){var o=qa(r);if(Ct(o))return r}function sw(r,o){if(r==="change")return o}var iv=!1;if(c){var Hh;if(c){var Gh="oninput"in document;if(!Gh){var rv=document.createElement("div");rv.setAttribute("oninput","return;"),Gh=typeof rv.oninput=="function"}Hh=Gh}else Hh=!1;iv=Hh&&(!document.documentMode||9<document.documentMode)}function sv(){_u&&(_u.detachEvent("onpropertychange",ov),vu=_u=null)}function ov(r){if(r.propertyName==="value"&&Kc(vu)){var o=[];nv(o,vu,r,Me(r)),we(rw,o)}}function ow(r,o,u){r==="focusin"?(sv(),_u=o,vu=u,_u.attachEvent("onpropertychange",ov)):r==="focusout"&&sv()}function aw(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Kc(vu)}function lw(r,o){if(r==="click")return Kc(o)}function uw(r,o){if(r==="input"||r==="change")return Kc(o)}function cw(r,o){return r===o&&(r!==0||1/r===1/o)||r!==r&&o!==o}var Gr=typeof Object.is=="function"?Object.is:cw;function xu(r,o){if(Gr(r,o))return!0;if(typeof r!="object"||r===null||typeof o!="object"||o===null)return!1;var u=Object.keys(r),h=Object.keys(o);if(u.length!==h.length)return!1;for(h=0;h<u.length;h++){var v=u[h];if(!f.call(o,v)||!Gr(r[v],o[v]))return!1}return!0}function av(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function lv(r,o){var u=av(r);r=0;for(var h;u;){if(u.nodeType===3){if(h=r+u.textContent.length,r<=o&&h>=o)return{node:u,offset:o-r};r=h}e:{for(;u;){if(u.nextSibling){u=u.nextSibling;break e}u=u.parentNode}u=void 0}u=av(u)}}function uv(r,o){return r&&o?r===o?!0:r&&r.nodeType===3?!1:o&&o.nodeType===3?uv(r,o.parentNode):"contains"in r?r.contains(o):r.compareDocumentPosition?!!(r.compareDocumentPosition(o)&16):!1:!1}function cv(){for(var r=window,o=Xe();o instanceof r.HTMLIFrameElement;){try{var u=typeof o.contentWindow.location.href=="string"}catch{u=!1}if(u)r=o.contentWindow;else break;o=Xe(r.document)}return o}function Wh(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o&&(o==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||o==="textarea"||r.contentEditable==="true")}function fw(r){var o=cv(),u=r.focusedElem,h=r.selectionRange;if(o!==u&&u&&u.ownerDocument&&uv(u.ownerDocument.documentElement,u)){if(h!==null&&Wh(u)){if(o=h.start,r=h.end,r===void 0&&(r=o),"selectionStart"in u)u.selectionStart=o,u.selectionEnd=Math.min(r,u.value.length);else if(r=(o=u.ownerDocument||document)&&o.defaultView||window,r.getSelection){r=r.getSelection();var v=u.textContent.length,E=Math.min(h.start,v);h=h.end===void 0?E:Math.min(h.end,v),!r.extend&&E>h&&(v=h,h=E,E=v),v=lv(u,E);var R=lv(u,h);v&&R&&(r.rangeCount!==1||r.anchorNode!==v.node||r.anchorOffset!==v.offset||r.focusNode!==R.node||r.focusOffset!==R.offset)&&(o=o.createRange(),o.setStart(v.node,v.offset),r.removeAllRanges(),E>h?(r.addRange(o),r.extend(R.node,R.offset)):(o.setEnd(R.node,R.offset),r.addRange(o)))}}for(o=[],r=u;r=r.parentNode;)r.nodeType===1&&o.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<o.length;u++)r=o[u],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var dw=c&&"documentMode"in document&&11>=document.documentMode,Ga=null,Xh=null,yu=null,Yh=!1;function fv(r,o,u){var h=u.window===u?u.document:u.nodeType===9?u:u.ownerDocument;Yh||Ga==null||Ga!==Xe(h)||(h=Ga,"selectionStart"in h&&Wh(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),yu&&xu(yu,h)||(yu=h,h=ef(Xh,"onSelect"),0<h.length&&(o=new Fh("onSelect","select",null,o,u),r.push({event:o,listeners:h}),o.target=Ga)))}function Zc(r,o){var u={};return u[r.toLowerCase()]=o.toLowerCase(),u["Webkit"+r]="webkit"+o,u["Moz"+r]="moz"+o,u}var Wa={animationend:Zc("Animation","AnimationEnd"),animationiteration:Zc("Animation","AnimationIteration"),animationstart:Zc("Animation","AnimationStart"),transitionend:Zc("Transition","TransitionEnd")},qh={},dv={};c&&(dv=document.createElement("div").style,"AnimationEvent"in window||(delete Wa.animationend.animation,delete Wa.animationiteration.animation,delete Wa.animationstart.animation),"TransitionEvent"in window||delete Wa.transitionend.transition);function Qc(r){if(qh[r])return qh[r];if(!Wa[r])return r;var o=Wa[r],u;for(u in o)if(o.hasOwnProperty(u)&&u in dv)return qh[r]=o[u];return r}var hv=Qc("animationend"),pv=Qc("animationiteration"),mv=Qc("animationstart"),gv=Qc("transitionend"),_v=new Map,vv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function oo(r,o){_v.set(r,o),a(o,[r])}for(var $h=0;$h<vv.length;$h++){var jh=vv[$h],hw=jh.toLowerCase(),pw=jh[0].toUpperCase()+jh.slice(1);oo(hw,"on"+pw)}oo(hv,"onAnimationEnd"),oo(pv,"onAnimationIteration"),oo(mv,"onAnimationStart"),oo("dblclick","onDoubleClick"),oo("focusin","onFocus"),oo("focusout","onBlur"),oo(gv,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Su="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Su));function xv(r,o,u){var h=r.type||"unknown-event";r.currentTarget=u,tn(h,o,void 0,r),r.currentTarget=null}function yv(r,o){o=(o&4)!==0;for(var u=0;u<r.length;u++){var h=r[u],v=h.event;h=h.listeners;e:{var E=void 0;if(o)for(var R=h.length-1;0<=R;R--){var V=h[R],$=V.instance,pe=V.currentTarget;if(V=V.listener,$!==E&&v.isPropagationStopped())break e;xv(v,V,pe),E=$}else for(R=0;R<h.length;R++){if(V=h[R],$=V.instance,pe=V.currentTarget,V=V.listener,$!==E&&v.isPropagationStopped())break e;xv(v,V,pe),E=$}}}if(Rt)throw r=en,Rt=!1,en=null,r}function vn(r,o){var u=o[ip];u===void 0&&(u=o[ip]=new Set);var h=r+"__bubble";u.has(h)||(Sv(o,r,2,!1),u.add(h))}function Kh(r,o,u){var h=0;o&&(h|=4),Sv(u,r,h,o)}var Jc="_reactListening"+Math.random().toString(36).slice(2);function Mu(r){if(!r[Jc]){r[Jc]=!0,n.forEach(function(u){u!=="selectionchange"&&(mw.has(u)||Kh(u,!1,r),Kh(u,!0,r))});var o=r.nodeType===9?r:r.ownerDocument;o===null||o[Jc]||(o[Jc]=!0,Kh("selectionchange",!1,o))}}function Sv(r,o,u,h){switch(W_(o)){case 1:var v=RE;break;case 4:v=PE;break;default:v=Nh}u=v.bind(null,o,u,r),v=void 0,!Ce||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(v=!0),h?v!==void 0?r.addEventListener(o,u,{capture:!0,passive:v}):r.addEventListener(o,u,!0):v!==void 0?r.addEventListener(o,u,{passive:v}):r.addEventListener(o,u,!1)}function Zh(r,o,u,h,v){var E=h;if(!(o&1)&&!(o&2)&&h!==null)e:for(;;){if(h===null)return;var R=h.tag;if(R===3||R===4){var V=h.stateNode.containerInfo;if(V===v||V.nodeType===8&&V.parentNode===v)break;if(R===4)for(R=h.return;R!==null;){var $=R.tag;if(($===3||$===4)&&($=R.stateNode.containerInfo,$===v||$.nodeType===8&&$.parentNode===v))return;R=R.return}for(;V!==null;){if(R=jo(V),R===null)return;if($=R.tag,$===5||$===6){h=E=R;continue e}V=V.parentNode}}h=h.return}we(function(){var pe=E,Le=Me(u),Ne=[];e:{var Pe=_v.get(r);if(Pe!==void 0){var Ke=Fh,nt=r;switch(r){case"keypress":if(qc(u)===0)break e;case"keydown":case"keyup":Ke=XE;break;case"focusin":nt="focus",Ke=Bh;break;case"focusout":nt="blur",Ke=Bh;break;case"beforeblur":case"afterblur":Ke=Bh;break;case"click":if(u.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ke=q_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ke=NE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ke=$E;break;case hv:case pv:case mv:Ke=FE;break;case gv:Ke=KE;break;case"scroll":Ke=LE;break;case"wheel":Ke=QE;break;case"copy":case"cut":case"paste":Ke=kE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ke=j_}var st=(o&4)!==0,Nn=!st&&r==="scroll",ue=st?Pe!==null?Pe+"Capture":null:Pe;st=[];for(var K=pe,fe;K!==null;){fe=K;var ke=fe.stateNode;if(fe.tag===5&&ke!==null&&(fe=ke,ue!==null&&(ke=at(K,ue),ke!=null&&st.push(Eu(K,ke,fe)))),Nn)break;K=K.return}0<st.length&&(Pe=new Ke(Pe,nt,null,u,Le),Ne.push({event:Pe,listeners:st}))}}if(!(o&7)){e:{if(Pe=r==="mouseover"||r==="pointerover",Ke=r==="mouseout"||r==="pointerout",Pe&&u!==Se&&(nt=u.relatedTarget||u.fromElement)&&(jo(nt)||nt[Rs]))break e;if((Ke||Pe)&&(Pe=Le.window===Le?Le:(Pe=Le.ownerDocument)?Pe.defaultView||Pe.parentWindow:window,Ke?(nt=u.relatedTarget||u.toElement,Ke=pe,nt=nt?jo(nt):null,nt!==null&&(Nn=Pt(nt),nt!==Nn||nt.tag!==5&&nt.tag!==6)&&(nt=null)):(Ke=null,nt=pe),Ke!==nt)){if(st=q_,ke="onMouseLeave",ue="onMouseEnter",K="mouse",(r==="pointerout"||r==="pointerover")&&(st=j_,ke="onPointerLeave",ue="onPointerEnter",K="pointer"),Nn=Ke==null?Pe:qa(Ke),fe=nt==null?Pe:qa(nt),Pe=new st(ke,K+"leave",Ke,u,Le),Pe.target=Nn,Pe.relatedTarget=fe,ke=null,jo(Le)===pe&&(st=new st(ue,K+"enter",nt,u,Le),st.target=fe,st.relatedTarget=Nn,ke=st),Nn=ke,Ke&&nt)t:{for(st=Ke,ue=nt,K=0,fe=st;fe;fe=Xa(fe))K++;for(fe=0,ke=ue;ke;ke=Xa(ke))fe++;for(;0<K-fe;)st=Xa(st),K--;for(;0<fe-K;)ue=Xa(ue),fe--;for(;K--;){if(st===ue||ue!==null&&st===ue.alternate)break t;st=Xa(st),ue=Xa(ue)}st=null}else st=null;Ke!==null&&Mv(Ne,Pe,Ke,st,!1),nt!==null&&Nn!==null&&Mv(Ne,Nn,nt,st,!0)}}e:{if(Pe=pe?qa(pe):window,Ke=Pe.nodeName&&Pe.nodeName.toLowerCase(),Ke==="select"||Ke==="input"&&Pe.type==="file")var ut=sw;else if(tv(Pe))if(iv)ut=uw;else{ut=aw;var gt=ow}else(Ke=Pe.nodeName)&&Ke.toLowerCase()==="input"&&(Pe.type==="checkbox"||Pe.type==="radio")&&(ut=lw);if(ut&&(ut=ut(r,pe))){nv(Ne,ut,u,Le);break e}gt&&gt(r,Pe,pe),r==="focusout"&&(gt=Pe._wrapperState)&&gt.controlled&&Pe.type==="number"&&Vt(Pe,"number",Pe.value)}switch(gt=pe?qa(pe):window,r){case"focusin":(tv(gt)||gt.contentEditable==="true")&&(Ga=gt,Xh=pe,yu=null);break;case"focusout":yu=Xh=Ga=null;break;case"mousedown":Yh=!0;break;case"contextmenu":case"mouseup":case"dragend":Yh=!1,fv(Ne,u,Le);break;case"selectionchange":if(dw)break;case"keydown":case"keyup":fv(Ne,u,Le)}var _t;if(Vh)e:{switch(r){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else Ha?J_(r,u)&&(Mt="onCompositionEnd"):r==="keydown"&&u.keyCode===229&&(Mt="onCompositionStart");Mt&&(K_&&u.locale!=="ko"&&(Ha||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&Ha&&(_t=X_()):(so=Le,Uh="value"in so?so.value:so.textContent,Ha=!0)),gt=ef(pe,Mt),0<gt.length&&(Mt=new $_(Mt,r,null,u,Le),Ne.push({event:Mt,listeners:gt}),_t?Mt.data=_t:(_t=ev(u),_t!==null&&(Mt.data=_t)))),(_t=ew?tw(r,u):nw(r,u))&&(pe=ef(pe,"onBeforeInput"),0<pe.length&&(Le=new $_("onBeforeInput","beforeinput",null,u,Le),Ne.push({event:Le,listeners:pe}),Le.data=_t))}yv(Ne,o)})}function Eu(r,o,u){return{instance:r,listener:o,currentTarget:u}}function ef(r,o){for(var u=o+"Capture",h=[];r!==null;){var v=r,E=v.stateNode;v.tag===5&&E!==null&&(v=E,E=at(r,u),E!=null&&h.unshift(Eu(r,E,v)),E=at(r,o),E!=null&&h.push(Eu(r,E,v))),r=r.return}return h}function Xa(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Mv(r,o,u,h,v){for(var E=o._reactName,R=[];u!==null&&u!==h;){var V=u,$=V.alternate,pe=V.stateNode;if($!==null&&$===h)break;V.tag===5&&pe!==null&&(V=pe,v?($=at(u,E),$!=null&&R.unshift(Eu(u,$,V))):v||($=at(u,E),$!=null&&R.push(Eu(u,$,V)))),u=u.return}R.length!==0&&r.push({event:o,listeners:R})}var gw=/\r\n?/g,_w=/\u0000|\uFFFD/g;function Ev(r){return(typeof r=="string"?r:""+r).replace(gw,`
`).replace(_w,"")}function tf(r,o,u){if(o=Ev(o),Ev(r)!==o&&u)throw Error(t(425))}function nf(){}var Qh=null,Jh=null;function ep(r,o){return r==="textarea"||r==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var tp=typeof setTimeout=="function"?setTimeout:void 0,vw=typeof clearTimeout=="function"?clearTimeout:void 0,wv=typeof Promise=="function"?Promise:void 0,xw=typeof queueMicrotask=="function"?queueMicrotask:typeof wv<"u"?function(r){return wv.resolve(null).then(r).catch(yw)}:tp;function yw(r){setTimeout(function(){throw r})}function np(r,o){var u=o,h=0;do{var v=u.nextSibling;if(r.removeChild(u),v&&v.nodeType===8)if(u=v.data,u==="/$"){if(h===0){r.removeChild(v),hu(o);return}h--}else u!=="$"&&u!=="$?"&&u!=="$!"||h++;u=v}while(u);hu(o)}function ao(r){for(;r!=null;r=r.nextSibling){var o=r.nodeType;if(o===1||o===3)break;if(o===8){if(o=r.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return r}function Tv(r){r=r.previousSibling;for(var o=0;r;){if(r.nodeType===8){var u=r.data;if(u==="$"||u==="$!"||u==="$?"){if(o===0)return r;o--}else u==="/$"&&o++}r=r.previousSibling}return null}var Ya=Math.random().toString(36).slice(2),rs="__reactFiber$"+Ya,wu="__reactProps$"+Ya,Rs="__reactContainer$"+Ya,ip="__reactEvents$"+Ya,Sw="__reactListeners$"+Ya,Mw="__reactHandles$"+Ya;function jo(r){var o=r[rs];if(o)return o;for(var u=r.parentNode;u;){if(o=u[Rs]||u[rs]){if(u=o.alternate,o.child!==null||u!==null&&u.child!==null)for(r=Tv(r);r!==null;){if(u=r[rs])return u;r=Tv(r)}return o}r=u,u=r.parentNode}return null}function Tu(r){return r=r[rs]||r[Rs],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function qa(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function rf(r){return r[wu]||null}var rp=[],$a=-1;function lo(r){return{current:r}}function xn(r){0>$a||(r.current=rp[$a],rp[$a]=null,$a--)}function pn(r,o){$a++,rp[$a]=r.current,r.current=o}var uo={},vi=lo(uo),Wi=lo(!1),Ko=uo;function ja(r,o){var u=r.type.contextTypes;if(!u)return uo;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===o)return h.__reactInternalMemoizedMaskedChildContext;var v={},E;for(E in u)v[E]=o[E];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=o,r.__reactInternalMemoizedMaskedChildContext=v),v}function Xi(r){return r=r.childContextTypes,r!=null}function sf(){xn(Wi),xn(vi)}function Av(r,o,u){if(vi.current!==uo)throw Error(t(168));pn(vi,o),pn(Wi,u)}function bv(r,o,u){var h=r.stateNode;if(o=o.childContextTypes,typeof h.getChildContext!="function")return u;h=h.getChildContext();for(var v in h)if(!(v in o))throw Error(t(108,ve(r)||"Unknown",v));return U({},u,h)}function of(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||uo,Ko=vi.current,pn(vi,r),pn(Wi,Wi.current),!0}function Cv(r,o,u){var h=r.stateNode;if(!h)throw Error(t(169));u?(r=bv(r,o,Ko),h.__reactInternalMemoizedMergedChildContext=r,xn(Wi),xn(vi),pn(vi,r)):xn(Wi),pn(Wi,u)}var Ps=null,af=!1,sp=!1;function Rv(r){Ps===null?Ps=[r]:Ps.push(r)}function Ew(r){af=!0,Rv(r)}function co(){if(!sp&&Ps!==null){sp=!0;var r=0,o=Ot;try{var u=Ps;for(Ot=1;r<u.length;r++){var h=u[r];do h=h(!0);while(h!==null)}Ps=null,af=!1}catch(v){throw Ps!==null&&(Ps=Ps.slice(r+1)),gn(_i,co),v}finally{Ot=o,sp=!1}}return null}var Ka=[],Za=0,lf=null,uf=0,br=[],Cr=0,Zo=null,Ls=1,Ds="";function Qo(r,o){Ka[Za++]=uf,Ka[Za++]=lf,lf=r,uf=o}function Pv(r,o,u){br[Cr++]=Ls,br[Cr++]=Ds,br[Cr++]=Zo,Zo=r;var h=Ls;r=Ds;var v=32-He(h)-1;h&=~(1<<v),u+=1;var E=32-He(o)+v;if(30<E){var R=v-v%5;E=(h&(1<<R)-1).toString(32),h>>=R,v-=R,Ls=1<<32-He(o)+v|u<<v|h,Ds=E+r}else Ls=1<<E|u<<v|h,Ds=r}function op(r){r.return!==null&&(Qo(r,1),Pv(r,1,0))}function ap(r){for(;r===lf;)lf=Ka[--Za],Ka[Za]=null,uf=Ka[--Za],Ka[Za]=null;for(;r===Zo;)Zo=br[--Cr],br[Cr]=null,Ds=br[--Cr],br[Cr]=null,Ls=br[--Cr],br[Cr]=null}var ar=null,lr=null,Sn=!1,Wr=null;function Lv(r,o){var u=Dr(5,null,null,0);u.elementType="DELETED",u.stateNode=o,u.return=r,o=r.deletions,o===null?(r.deletions=[u],r.flags|=16):o.push(u)}function Dv(r,o){switch(r.tag){case 5:var u=r.type;return o=o.nodeType!==1||u.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(r.stateNode=o,ar=r,lr=ao(o.firstChild),!0):!1;case 6:return o=r.pendingProps===""||o.nodeType!==3?null:o,o!==null?(r.stateNode=o,ar=r,lr=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(u=Zo!==null?{id:Ls,overflow:Ds}:null,r.memoizedState={dehydrated:o,treeContext:u,retryLane:1073741824},u=Dr(18,null,null,0),u.stateNode=o,u.return=r,r.child=u,ar=r,lr=null,!0):!1;default:return!1}}function lp(r){return(r.mode&1)!==0&&(r.flags&128)===0}function up(r){if(Sn){var o=lr;if(o){var u=o;if(!Dv(r,o)){if(lp(r))throw Error(t(418));o=ao(u.nextSibling);var h=ar;o&&Dv(r,o)?Lv(h,u):(r.flags=r.flags&-4097|2,Sn=!1,ar=r)}}else{if(lp(r))throw Error(t(418));r.flags=r.flags&-4097|2,Sn=!1,ar=r}}}function Nv(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;ar=r}function cf(r){if(r!==ar)return!1;if(!Sn)return Nv(r),Sn=!0,!1;var o;if((o=r.tag!==3)&&!(o=r.tag!==5)&&(o=r.type,o=o!=="head"&&o!=="body"&&!ep(r.type,r.memoizedProps)),o&&(o=lr)){if(lp(r))throw Iv(),Error(t(418));for(;o;)Lv(r,o),o=ao(o.nextSibling)}if(Nv(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,o=0;r;){if(r.nodeType===8){var u=r.data;if(u==="/$"){if(o===0){lr=ao(r.nextSibling);break e}o--}else u!=="$"&&u!=="$!"&&u!=="$?"||o++}r=r.nextSibling}lr=null}}else lr=ar?ao(r.stateNode.nextSibling):null;return!0}function Iv(){for(var r=lr;r;)r=ao(r.nextSibling)}function Qa(){lr=ar=null,Sn=!1}function cp(r){Wr===null?Wr=[r]:Wr.push(r)}var ww=T.ReactCurrentBatchConfig;function Au(r,o,u){if(r=u.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(u._owner){if(u=u._owner,u){if(u.tag!==1)throw Error(t(309));var h=u.stateNode}if(!h)throw Error(t(147,r));var v=h,E=""+r;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===E?o.ref:(o=function(R){var V=v.refs;R===null?delete V[E]:V[E]=R},o._stringRef=E,o)}if(typeof r!="string")throw Error(t(284));if(!u._owner)throw Error(t(290,r))}return r}function ff(r,o){throw r=Object.prototype.toString.call(o),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":r))}function Uv(r){var o=r._init;return o(r._payload)}function Fv(r){function o(ue,K){if(r){var fe=ue.deletions;fe===null?(ue.deletions=[K],ue.flags|=16):fe.push(K)}}function u(ue,K){if(!r)return null;for(;K!==null;)o(ue,K),K=K.sibling;return null}function h(ue,K){for(ue=new Map;K!==null;)K.key!==null?ue.set(K.key,K):ue.set(K.index,K),K=K.sibling;return ue}function v(ue,K){return ue=xo(ue,K),ue.index=0,ue.sibling=null,ue}function E(ue,K,fe){return ue.index=fe,r?(fe=ue.alternate,fe!==null?(fe=fe.index,fe<K?(ue.flags|=2,K):fe):(ue.flags|=2,K)):(ue.flags|=1048576,K)}function R(ue){return r&&ue.alternate===null&&(ue.flags|=2),ue}function V(ue,K,fe,ke){return K===null||K.tag!==6?(K=tm(fe,ue.mode,ke),K.return=ue,K):(K=v(K,fe),K.return=ue,K)}function $(ue,K,fe,ke){var ut=fe.type;return ut===D?Le(ue,K,fe.props.children,ke,fe.key):K!==null&&(K.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===ee&&Uv(ut)===K.type)?(ke=v(K,fe.props),ke.ref=Au(ue,K,fe),ke.return=ue,ke):(ke=Uf(fe.type,fe.key,fe.props,null,ue.mode,ke),ke.ref=Au(ue,K,fe),ke.return=ue,ke)}function pe(ue,K,fe,ke){return K===null||K.tag!==4||K.stateNode.containerInfo!==fe.containerInfo||K.stateNode.implementation!==fe.implementation?(K=nm(fe,ue.mode,ke),K.return=ue,K):(K=v(K,fe.children||[]),K.return=ue,K)}function Le(ue,K,fe,ke,ut){return K===null||K.tag!==7?(K=oa(fe,ue.mode,ke,ut),K.return=ue,K):(K=v(K,fe),K.return=ue,K)}function Ne(ue,K,fe){if(typeof K=="string"&&K!==""||typeof K=="number")return K=tm(""+K,ue.mode,fe),K.return=ue,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case P:return fe=Uf(K.type,K.key,K.props,null,ue.mode,fe),fe.ref=Au(ue,null,K),fe.return=ue,fe;case L:return K=nm(K,ue.mode,fe),K.return=ue,K;case ee:var ke=K._init;return Ne(ue,ke(K._payload),fe)}if(Ht(K)||te(K))return K=oa(K,ue.mode,fe,null),K.return=ue,K;ff(ue,K)}return null}function Pe(ue,K,fe,ke){var ut=K!==null?K.key:null;if(typeof fe=="string"&&fe!==""||typeof fe=="number")return ut!==null?null:V(ue,K,""+fe,ke);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case P:return fe.key===ut?$(ue,K,fe,ke):null;case L:return fe.key===ut?pe(ue,K,fe,ke):null;case ee:return ut=fe._init,Pe(ue,K,ut(fe._payload),ke)}if(Ht(fe)||te(fe))return ut!==null?null:Le(ue,K,fe,ke,null);ff(ue,fe)}return null}function Ke(ue,K,fe,ke,ut){if(typeof ke=="string"&&ke!==""||typeof ke=="number")return ue=ue.get(fe)||null,V(K,ue,""+ke,ut);if(typeof ke=="object"&&ke!==null){switch(ke.$$typeof){case P:return ue=ue.get(ke.key===null?fe:ke.key)||null,$(K,ue,ke,ut);case L:return ue=ue.get(ke.key===null?fe:ke.key)||null,pe(K,ue,ke,ut);case ee:var gt=ke._init;return Ke(ue,K,fe,gt(ke._payload),ut)}if(Ht(ke)||te(ke))return ue=ue.get(fe)||null,Le(K,ue,ke,ut,null);ff(K,ke)}return null}function nt(ue,K,fe,ke){for(var ut=null,gt=null,_t=K,Mt=K=0,ti=null;_t!==null&&Mt<fe.length;Mt++){_t.index>Mt?(ti=_t,_t=null):ti=_t.sibling;var $t=Pe(ue,_t,fe[Mt],ke);if($t===null){_t===null&&(_t=ti);break}r&&_t&&$t.alternate===null&&o(ue,_t),K=E($t,K,Mt),gt===null?ut=$t:gt.sibling=$t,gt=$t,_t=ti}if(Mt===fe.length)return u(ue,_t),Sn&&Qo(ue,Mt),ut;if(_t===null){for(;Mt<fe.length;Mt++)_t=Ne(ue,fe[Mt],ke),_t!==null&&(K=E(_t,K,Mt),gt===null?ut=_t:gt.sibling=_t,gt=_t);return Sn&&Qo(ue,Mt),ut}for(_t=h(ue,_t);Mt<fe.length;Mt++)ti=Ke(_t,ue,Mt,fe[Mt],ke),ti!==null&&(r&&ti.alternate!==null&&_t.delete(ti.key===null?Mt:ti.key),K=E(ti,K,Mt),gt===null?ut=ti:gt.sibling=ti,gt=ti);return r&&_t.forEach(function(yo){return o(ue,yo)}),Sn&&Qo(ue,Mt),ut}function st(ue,K,fe,ke){var ut=te(fe);if(typeof ut!="function")throw Error(t(150));if(fe=ut.call(fe),fe==null)throw Error(t(151));for(var gt=ut=null,_t=K,Mt=K=0,ti=null,$t=fe.next();_t!==null&&!$t.done;Mt++,$t=fe.next()){_t.index>Mt?(ti=_t,_t=null):ti=_t.sibling;var yo=Pe(ue,_t,$t.value,ke);if(yo===null){_t===null&&(_t=ti);break}r&&_t&&yo.alternate===null&&o(ue,_t),K=E(yo,K,Mt),gt===null?ut=yo:gt.sibling=yo,gt=yo,_t=ti}if($t.done)return u(ue,_t),Sn&&Qo(ue,Mt),ut;if(_t===null){for(;!$t.done;Mt++,$t=fe.next())$t=Ne(ue,$t.value,ke),$t!==null&&(K=E($t,K,Mt),gt===null?ut=$t:gt.sibling=$t,gt=$t);return Sn&&Qo(ue,Mt),ut}for(_t=h(ue,_t);!$t.done;Mt++,$t=fe.next())$t=Ke(_t,ue,Mt,$t.value,ke),$t!==null&&(r&&$t.alternate!==null&&_t.delete($t.key===null?Mt:$t.key),K=E($t,K,Mt),gt===null?ut=$t:gt.sibling=$t,gt=$t);return r&&_t.forEach(function(n2){return o(ue,n2)}),Sn&&Qo(ue,Mt),ut}function Nn(ue,K,fe,ke){if(typeof fe=="object"&&fe!==null&&fe.type===D&&fe.key===null&&(fe=fe.props.children),typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case P:e:{for(var ut=fe.key,gt=K;gt!==null;){if(gt.key===ut){if(ut=fe.type,ut===D){if(gt.tag===7){u(ue,gt.sibling),K=v(gt,fe.props.children),K.return=ue,ue=K;break e}}else if(gt.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===ee&&Uv(ut)===gt.type){u(ue,gt.sibling),K=v(gt,fe.props),K.ref=Au(ue,gt,fe),K.return=ue,ue=K;break e}u(ue,gt);break}else o(ue,gt);gt=gt.sibling}fe.type===D?(K=oa(fe.props.children,ue.mode,ke,fe.key),K.return=ue,ue=K):(ke=Uf(fe.type,fe.key,fe.props,null,ue.mode,ke),ke.ref=Au(ue,K,fe),ke.return=ue,ue=ke)}return R(ue);case L:e:{for(gt=fe.key;K!==null;){if(K.key===gt)if(K.tag===4&&K.stateNode.containerInfo===fe.containerInfo&&K.stateNode.implementation===fe.implementation){u(ue,K.sibling),K=v(K,fe.children||[]),K.return=ue,ue=K;break e}else{u(ue,K);break}else o(ue,K);K=K.sibling}K=nm(fe,ue.mode,ke),K.return=ue,ue=K}return R(ue);case ee:return gt=fe._init,Nn(ue,K,gt(fe._payload),ke)}if(Ht(fe))return nt(ue,K,fe,ke);if(te(fe))return st(ue,K,fe,ke);ff(ue,fe)}return typeof fe=="string"&&fe!==""||typeof fe=="number"?(fe=""+fe,K!==null&&K.tag===6?(u(ue,K.sibling),K=v(K,fe),K.return=ue,ue=K):(u(ue,K),K=tm(fe,ue.mode,ke),K.return=ue,ue=K),R(ue)):u(ue,K)}return Nn}var Ja=Fv(!0),Ov=Fv(!1),df=lo(null),hf=null,el=null,fp=null;function dp(){fp=el=hf=null}function hp(r){var o=df.current;xn(df),r._currentValue=o}function pp(r,o,u){for(;r!==null;){var h=r.alternate;if((r.childLanes&o)!==o?(r.childLanes|=o,h!==null&&(h.childLanes|=o)):h!==null&&(h.childLanes&o)!==o&&(h.childLanes|=o),r===u)break;r=r.return}}function tl(r,o){hf=r,fp=el=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&o&&(Yi=!0),r.firstContext=null)}function Rr(r){var o=r._currentValue;if(fp!==r)if(r={context:r,memoizedValue:o,next:null},el===null){if(hf===null)throw Error(t(308));el=r,hf.dependencies={lanes:0,firstContext:r}}else el=el.next=r;return o}var Jo=null;function mp(r){Jo===null?Jo=[r]:Jo.push(r)}function kv(r,o,u,h){var v=o.interleaved;return v===null?(u.next=u,mp(o)):(u.next=v.next,v.next=u),o.interleaved=u,Ns(r,h)}function Ns(r,o){r.lanes|=o;var u=r.alternate;for(u!==null&&(u.lanes|=o),u=r,r=r.return;r!==null;)r.childLanes|=o,u=r.alternate,u!==null&&(u.childLanes|=o),u=r,r=r.return;return u.tag===3?u.stateNode:null}var fo=!1;function gp(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bv(r,o){r=r.updateQueue,o.updateQueue===r&&(o.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Is(r,o){return{eventTime:r,lane:o,tag:0,payload:null,callback:null,next:null}}function ho(r,o,u){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,qt&2){var v=h.pending;return v===null?o.next=o:(o.next=v.next,v.next=o),h.pending=o,Ns(r,u)}return v=h.interleaved,v===null?(o.next=o,mp(h)):(o.next=v.next,v.next=o),h.interleaved=o,Ns(r,u)}function pf(r,o,u){if(o=o.updateQueue,o!==null&&(o=o.shared,(u&4194240)!==0)){var h=o.lanes;h&=r.pendingLanes,u|=h,o.lanes=u,Gi(r,u)}}function zv(r,o){var u=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,u===h)){var v=null,E=null;if(u=u.firstBaseUpdate,u!==null){do{var R={eventTime:u.eventTime,lane:u.lane,tag:u.tag,payload:u.payload,callback:u.callback,next:null};E===null?v=E=R:E=E.next=R,u=u.next}while(u!==null);E===null?v=E=o:E=E.next=o}else v=E=o;u={baseState:h.baseState,firstBaseUpdate:v,lastBaseUpdate:E,shared:h.shared,effects:h.effects},r.updateQueue=u;return}r=u.lastBaseUpdate,r===null?u.firstBaseUpdate=o:r.next=o,u.lastBaseUpdate=o}function mf(r,o,u,h){var v=r.updateQueue;fo=!1;var E=v.firstBaseUpdate,R=v.lastBaseUpdate,V=v.shared.pending;if(V!==null){v.shared.pending=null;var $=V,pe=$.next;$.next=null,R===null?E=pe:R.next=pe,R=$;var Le=r.alternate;Le!==null&&(Le=Le.updateQueue,V=Le.lastBaseUpdate,V!==R&&(V===null?Le.firstBaseUpdate=pe:V.next=pe,Le.lastBaseUpdate=$))}if(E!==null){var Ne=v.baseState;R=0,Le=pe=$=null,V=E;do{var Pe=V.lane,Ke=V.eventTime;if((h&Pe)===Pe){Le!==null&&(Le=Le.next={eventTime:Ke,lane:0,tag:V.tag,payload:V.payload,callback:V.callback,next:null});e:{var nt=r,st=V;switch(Pe=o,Ke=u,st.tag){case 1:if(nt=st.payload,typeof nt=="function"){Ne=nt.call(Ke,Ne,Pe);break e}Ne=nt;break e;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=st.payload,Pe=typeof nt=="function"?nt.call(Ke,Ne,Pe):nt,Pe==null)break e;Ne=U({},Ne,Pe);break e;case 2:fo=!0}}V.callback!==null&&V.lane!==0&&(r.flags|=64,Pe=v.effects,Pe===null?v.effects=[V]:Pe.push(V))}else Ke={eventTime:Ke,lane:Pe,tag:V.tag,payload:V.payload,callback:V.callback,next:null},Le===null?(pe=Le=Ke,$=Ne):Le=Le.next=Ke,R|=Pe;if(V=V.next,V===null){if(V=v.shared.pending,V===null)break;Pe=V,V=Pe.next,Pe.next=null,v.lastBaseUpdate=Pe,v.shared.pending=null}}while(!0);if(Le===null&&($=Ne),v.baseState=$,v.firstBaseUpdate=pe,v.lastBaseUpdate=Le,o=v.shared.interleaved,o!==null){v=o;do R|=v.lane,v=v.next;while(v!==o)}else E===null&&(v.shared.lanes=0);na|=R,r.lanes=R,r.memoizedState=Ne}}function Vv(r,o,u){if(r=o.effects,o.effects=null,r!==null)for(o=0;o<r.length;o++){var h=r[o],v=h.callback;if(v!==null){if(h.callback=null,h=u,typeof v!="function")throw Error(t(191,v));v.call(h)}}}var bu={},ss=lo(bu),Cu=lo(bu),Ru=lo(bu);function ea(r){if(r===bu)throw Error(t(174));return r}function _p(r,o){switch(pn(Ru,o),pn(Cu,r),pn(ss,bu),r=o.nodeType,r){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:A(null,"");break;default:r=r===8?o.parentNode:o,o=r.namespaceURI||null,r=r.tagName,o=A(o,r)}xn(ss),pn(ss,o)}function nl(){xn(ss),xn(Cu),xn(Ru)}function Hv(r){ea(Ru.current);var o=ea(ss.current),u=A(o,r.type);o!==u&&(pn(Cu,r),pn(ss,u))}function vp(r){Cu.current===r&&(xn(ss),xn(Cu))}var Tn=lo(0);function gf(r){for(var o=r;o!==null;){if(o.tag===13){var u=o.memoizedState;if(u!==null&&(u=u.dehydrated,u===null||u.data==="$?"||u.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if(o.flags&128)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var xp=[];function yp(){for(var r=0;r<xp.length;r++)xp[r]._workInProgressVersionPrimary=null;xp.length=0}var _f=T.ReactCurrentDispatcher,Sp=T.ReactCurrentBatchConfig,ta=0,An=null,Gn=null,Jn=null,vf=!1,Pu=!1,Lu=0,Tw=0;function xi(){throw Error(t(321))}function Mp(r,o){if(o===null)return!1;for(var u=0;u<o.length&&u<r.length;u++)if(!Gr(r[u],o[u]))return!1;return!0}function Ep(r,o,u,h,v,E){if(ta=E,An=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,_f.current=r===null||r.memoizedState===null?Rw:Pw,r=u(h,v),Pu){E=0;do{if(Pu=!1,Lu=0,25<=E)throw Error(t(301));E+=1,Jn=Gn=null,o.updateQueue=null,_f.current=Lw,r=u(h,v)}while(Pu)}if(_f.current=Sf,o=Gn!==null&&Gn.next!==null,ta=0,Jn=Gn=An=null,vf=!1,o)throw Error(t(300));return r}function wp(){var r=Lu!==0;return Lu=0,r}function os(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jn===null?An.memoizedState=Jn=r:Jn=Jn.next=r,Jn}function Pr(){if(Gn===null){var r=An.alternate;r=r!==null?r.memoizedState:null}else r=Gn.next;var o=Jn===null?An.memoizedState:Jn.next;if(o!==null)Jn=o,Gn=r;else{if(r===null)throw Error(t(310));Gn=r,r={memoizedState:Gn.memoizedState,baseState:Gn.baseState,baseQueue:Gn.baseQueue,queue:Gn.queue,next:null},Jn===null?An.memoizedState=Jn=r:Jn=Jn.next=r}return Jn}function Du(r,o){return typeof o=="function"?o(r):o}function Tp(r){var o=Pr(),u=o.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=r;var h=Gn,v=h.baseQueue,E=u.pending;if(E!==null){if(v!==null){var R=v.next;v.next=E.next,E.next=R}h.baseQueue=v=E,u.pending=null}if(v!==null){E=v.next,h=h.baseState;var V=R=null,$=null,pe=E;do{var Le=pe.lane;if((ta&Le)===Le)$!==null&&($=$.next={lane:0,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null}),h=pe.hasEagerState?pe.eagerState:r(h,pe.action);else{var Ne={lane:Le,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null};$===null?(V=$=Ne,R=h):$=$.next=Ne,An.lanes|=Le,na|=Le}pe=pe.next}while(pe!==null&&pe!==E);$===null?R=h:$.next=V,Gr(h,o.memoizedState)||(Yi=!0),o.memoizedState=h,o.baseState=R,o.baseQueue=$,u.lastRenderedState=h}if(r=u.interleaved,r!==null){v=r;do E=v.lane,An.lanes|=E,na|=E,v=v.next;while(v!==r)}else v===null&&(u.lanes=0);return[o.memoizedState,u.dispatch]}function Ap(r){var o=Pr(),u=o.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=r;var h=u.dispatch,v=u.pending,E=o.memoizedState;if(v!==null){u.pending=null;var R=v=v.next;do E=r(E,R.action),R=R.next;while(R!==v);Gr(E,o.memoizedState)||(Yi=!0),o.memoizedState=E,o.baseQueue===null&&(o.baseState=E),u.lastRenderedState=E}return[E,h]}function Gv(){}function Wv(r,o){var u=An,h=Pr(),v=o(),E=!Gr(h.memoizedState,v);if(E&&(h.memoizedState=v,Yi=!0),h=h.queue,bp(qv.bind(null,u,h,r),[r]),h.getSnapshot!==o||E||Jn!==null&&Jn.memoizedState.tag&1){if(u.flags|=2048,Nu(9,Yv.bind(null,u,h,v,o),void 0,null),ei===null)throw Error(t(349));ta&30||Xv(u,o,v)}return v}function Xv(r,o,u){r.flags|=16384,r={getSnapshot:o,value:u},o=An.updateQueue,o===null?(o={lastEffect:null,stores:null},An.updateQueue=o,o.stores=[r]):(u=o.stores,u===null?o.stores=[r]:u.push(r))}function Yv(r,o,u,h){o.value=u,o.getSnapshot=h,$v(o)&&jv(r)}function qv(r,o,u){return u(function(){$v(o)&&jv(r)})}function $v(r){var o=r.getSnapshot;r=r.value;try{var u=o();return!Gr(r,u)}catch{return!0}}function jv(r){var o=Ns(r,1);o!==null&&$r(o,r,1,-1)}function Kv(r){var o=os();return typeof r=="function"&&(r=r()),o.memoizedState=o.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Du,lastRenderedState:r},o.queue=r,r=r.dispatch=Cw.bind(null,An,r),[o.memoizedState,r]}function Nu(r,o,u,h){return r={tag:r,create:o,destroy:u,deps:h,next:null},o=An.updateQueue,o===null?(o={lastEffect:null,stores:null},An.updateQueue=o,o.lastEffect=r.next=r):(u=o.lastEffect,u===null?o.lastEffect=r.next=r:(h=u.next,u.next=r,r.next=h,o.lastEffect=r)),r}function Zv(){return Pr().memoizedState}function xf(r,o,u,h){var v=os();An.flags|=r,v.memoizedState=Nu(1|o,u,void 0,h===void 0?null:h)}function yf(r,o,u,h){var v=Pr();h=h===void 0?null:h;var E=void 0;if(Gn!==null){var R=Gn.memoizedState;if(E=R.destroy,h!==null&&Mp(h,R.deps)){v.memoizedState=Nu(o,u,E,h);return}}An.flags|=r,v.memoizedState=Nu(1|o,u,E,h)}function Qv(r,o){return xf(8390656,8,r,o)}function bp(r,o){return yf(2048,8,r,o)}function Jv(r,o){return yf(4,2,r,o)}function ex(r,o){return yf(4,4,r,o)}function tx(r,o){if(typeof o=="function")return r=r(),o(r),function(){o(null)};if(o!=null)return r=r(),o.current=r,function(){o.current=null}}function nx(r,o,u){return u=u!=null?u.concat([r]):null,yf(4,4,tx.bind(null,o,r),u)}function Cp(){}function ix(r,o){var u=Pr();o=o===void 0?null:o;var h=u.memoizedState;return h!==null&&o!==null&&Mp(o,h[1])?h[0]:(u.memoizedState=[r,o],r)}function rx(r,o){var u=Pr();o=o===void 0?null:o;var h=u.memoizedState;return h!==null&&o!==null&&Mp(o,h[1])?h[0]:(r=r(),u.memoizedState=[r,o],r)}function sx(r,o,u){return ta&21?(Gr(u,o)||(u=je(),An.lanes|=u,na|=u,r.baseState=!0),o):(r.baseState&&(r.baseState=!1,Yi=!0),r.memoizedState=u)}function Aw(r,o){var u=Ot;Ot=u!==0&&4>u?u:4,r(!0);var h=Sp.transition;Sp.transition={};try{r(!1),o()}finally{Ot=u,Sp.transition=h}}function ox(){return Pr().memoizedState}function bw(r,o,u){var h=_o(r);if(u={lane:h,action:u,hasEagerState:!1,eagerState:null,next:null},ax(r))lx(o,u);else if(u=kv(r,o,u,h),u!==null){var v=Di();$r(u,r,h,v),ux(u,o,h)}}function Cw(r,o,u){var h=_o(r),v={lane:h,action:u,hasEagerState:!1,eagerState:null,next:null};if(ax(r))lx(o,v);else{var E=r.alternate;if(r.lanes===0&&(E===null||E.lanes===0)&&(E=o.lastRenderedReducer,E!==null))try{var R=o.lastRenderedState,V=E(R,u);if(v.hasEagerState=!0,v.eagerState=V,Gr(V,R)){var $=o.interleaved;$===null?(v.next=v,mp(o)):(v.next=$.next,$.next=v),o.interleaved=v;return}}catch{}finally{}u=kv(r,o,v,h),u!==null&&(v=Di(),$r(u,r,h,v),ux(u,o,h))}}function ax(r){var o=r.alternate;return r===An||o!==null&&o===An}function lx(r,o){Pu=vf=!0;var u=r.pending;u===null?o.next=o:(o.next=u.next,u.next=o),r.pending=o}function ux(r,o,u){if(u&4194240){var h=o.lanes;h&=r.pendingLanes,u|=h,o.lanes=u,Gi(r,u)}}var Sf={readContext:Rr,useCallback:xi,useContext:xi,useEffect:xi,useImperativeHandle:xi,useInsertionEffect:xi,useLayoutEffect:xi,useMemo:xi,useReducer:xi,useRef:xi,useState:xi,useDebugValue:xi,useDeferredValue:xi,useTransition:xi,useMutableSource:xi,useSyncExternalStore:xi,useId:xi,unstable_isNewReconciler:!1},Rw={readContext:Rr,useCallback:function(r,o){return os().memoizedState=[r,o===void 0?null:o],r},useContext:Rr,useEffect:Qv,useImperativeHandle:function(r,o,u){return u=u!=null?u.concat([r]):null,xf(4194308,4,tx.bind(null,o,r),u)},useLayoutEffect:function(r,o){return xf(4194308,4,r,o)},useInsertionEffect:function(r,o){return xf(4,2,r,o)},useMemo:function(r,o){var u=os();return o=o===void 0?null:o,r=r(),u.memoizedState=[r,o],r},useReducer:function(r,o,u){var h=os();return o=u!==void 0?u(o):o,h.memoizedState=h.baseState=o,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:o},h.queue=r,r=r.dispatch=bw.bind(null,An,r),[h.memoizedState,r]},useRef:function(r){var o=os();return r={current:r},o.memoizedState=r},useState:Kv,useDebugValue:Cp,useDeferredValue:function(r){return os().memoizedState=r},useTransition:function(){var r=Kv(!1),o=r[0];return r=Aw.bind(null,r[1]),os().memoizedState=r,[o,r]},useMutableSource:function(){},useSyncExternalStore:function(r,o,u){var h=An,v=os();if(Sn){if(u===void 0)throw Error(t(407));u=u()}else{if(u=o(),ei===null)throw Error(t(349));ta&30||Xv(h,o,u)}v.memoizedState=u;var E={value:u,getSnapshot:o};return v.queue=E,Qv(qv.bind(null,h,E,r),[r]),h.flags|=2048,Nu(9,Yv.bind(null,h,E,u,o),void 0,null),u},useId:function(){var r=os(),o=ei.identifierPrefix;if(Sn){var u=Ds,h=Ls;u=(h&~(1<<32-He(h)-1)).toString(32)+u,o=":"+o+"R"+u,u=Lu++,0<u&&(o+="H"+u.toString(32)),o+=":"}else u=Tw++,o=":"+o+"r"+u.toString(32)+":";return r.memoizedState=o},unstable_isNewReconciler:!1},Pw={readContext:Rr,useCallback:ix,useContext:Rr,useEffect:bp,useImperativeHandle:nx,useInsertionEffect:Jv,useLayoutEffect:ex,useMemo:rx,useReducer:Tp,useRef:Zv,useState:function(){return Tp(Du)},useDebugValue:Cp,useDeferredValue:function(r){var o=Pr();return sx(o,Gn.memoizedState,r)},useTransition:function(){var r=Tp(Du)[0],o=Pr().memoizedState;return[r,o]},useMutableSource:Gv,useSyncExternalStore:Wv,useId:ox,unstable_isNewReconciler:!1},Lw={readContext:Rr,useCallback:ix,useContext:Rr,useEffect:bp,useImperativeHandle:nx,useInsertionEffect:Jv,useLayoutEffect:ex,useMemo:rx,useReducer:Ap,useRef:Zv,useState:function(){return Ap(Du)},useDebugValue:Cp,useDeferredValue:function(r){var o=Pr();return Gn===null?o.memoizedState=r:sx(o,Gn.memoizedState,r)},useTransition:function(){var r=Ap(Du)[0],o=Pr().memoizedState;return[r,o]},useMutableSource:Gv,useSyncExternalStore:Wv,useId:ox,unstable_isNewReconciler:!1};function Xr(r,o){if(r&&r.defaultProps){o=U({},o),r=r.defaultProps;for(var u in r)o[u]===void 0&&(o[u]=r[u]);return o}return o}function Rp(r,o,u,h){o=r.memoizedState,u=u(h,o),u=u==null?o:U({},o,u),r.memoizedState=u,r.lanes===0&&(r.updateQueue.baseState=u)}var Mf={isMounted:function(r){return(r=r._reactInternals)?Pt(r)===r:!1},enqueueSetState:function(r,o,u){r=r._reactInternals;var h=Di(),v=_o(r),E=Is(h,v);E.payload=o,u!=null&&(E.callback=u),o=ho(r,E,v),o!==null&&($r(o,r,v,h),pf(o,r,v))},enqueueReplaceState:function(r,o,u){r=r._reactInternals;var h=Di(),v=_o(r),E=Is(h,v);E.tag=1,E.payload=o,u!=null&&(E.callback=u),o=ho(r,E,v),o!==null&&($r(o,r,v,h),pf(o,r,v))},enqueueForceUpdate:function(r,o){r=r._reactInternals;var u=Di(),h=_o(r),v=Is(u,h);v.tag=2,o!=null&&(v.callback=o),o=ho(r,v,h),o!==null&&($r(o,r,h,u),pf(o,r,h))}};function cx(r,o,u,h,v,E,R){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,E,R):o.prototype&&o.prototype.isPureReactComponent?!xu(u,h)||!xu(v,E):!0}function fx(r,o,u){var h=!1,v=uo,E=o.contextType;return typeof E=="object"&&E!==null?E=Rr(E):(v=Xi(o)?Ko:vi.current,h=o.contextTypes,E=(h=h!=null)?ja(r,v):uo),o=new o(u,E),r.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Mf,r.stateNode=o,o._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=v,r.__reactInternalMemoizedMaskedChildContext=E),o}function dx(r,o,u,h){r=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(u,h),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(u,h),o.state!==r&&Mf.enqueueReplaceState(o,o.state,null)}function Pp(r,o,u,h){var v=r.stateNode;v.props=u,v.state=r.memoizedState,v.refs={},gp(r);var E=o.contextType;typeof E=="object"&&E!==null?v.context=Rr(E):(E=Xi(o)?Ko:vi.current,v.context=ja(r,E)),v.state=r.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(Rp(r,o,E,u),v.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof v.getSnapshotBeforeUpdate=="function"||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(o=v.state,typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount(),o!==v.state&&Mf.enqueueReplaceState(v,v.state,null),mf(r,u,v,h),v.state=r.memoizedState),typeof v.componentDidMount=="function"&&(r.flags|=4194308)}function il(r,o){try{var u="",h=o;do u+=Be(h),h=h.return;while(h);var v=u}catch(E){v=`
Error generating stack: `+E.message+`
`+E.stack}return{value:r,source:o,stack:v,digest:null}}function Lp(r,o,u){return{value:r,source:null,stack:u??null,digest:o??null}}function Dp(r,o){try{console.error(o.value)}catch(u){setTimeout(function(){throw u})}}var Dw=typeof WeakMap=="function"?WeakMap:Map;function hx(r,o,u){u=Is(-1,u),u.tag=3,u.payload={element:null};var h=o.value;return u.callback=function(){Rf||(Rf=!0,qp=h),Dp(r,o)},u}function px(r,o,u){u=Is(-1,u),u.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var v=o.value;u.payload=function(){return h(v)},u.callback=function(){Dp(r,o)}}var E=r.stateNode;return E!==null&&typeof E.componentDidCatch=="function"&&(u.callback=function(){Dp(r,o),typeof h!="function"&&(mo===null?mo=new Set([this]):mo.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})}),u}function mx(r,o,u){var h=r.pingCache;if(h===null){h=r.pingCache=new Dw;var v=new Set;h.set(o,v)}else v=h.get(o),v===void 0&&(v=new Set,h.set(o,v));v.has(u)||(v.add(u),r=Yw.bind(null,r,o,u),o.then(r,r))}function gx(r){do{var o;if((o=r.tag===13)&&(o=r.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return r;r=r.return}while(r!==null);return null}function _x(r,o,u,h,v){return r.mode&1?(r.flags|=65536,r.lanes=v,r):(r===o?r.flags|=65536:(r.flags|=128,u.flags|=131072,u.flags&=-52805,u.tag===1&&(u.alternate===null?u.tag=17:(o=Is(-1,1),o.tag=2,ho(u,o,1))),u.lanes|=1),r)}var Nw=T.ReactCurrentOwner,Yi=!1;function Li(r,o,u,h){o.child=r===null?Ov(o,null,u,h):Ja(o,r.child,u,h)}function vx(r,o,u,h,v){u=u.render;var E=o.ref;return tl(o,v),h=Ep(r,o,u,h,E,v),u=wp(),r!==null&&!Yi?(o.updateQueue=r.updateQueue,o.flags&=-2053,r.lanes&=~v,Us(r,o,v)):(Sn&&u&&op(o),o.flags|=1,Li(r,o,h,v),o.child)}function xx(r,o,u,h,v){if(r===null){var E=u.type;return typeof E=="function"&&!em(E)&&E.defaultProps===void 0&&u.compare===null&&u.defaultProps===void 0?(o.tag=15,o.type=E,yx(r,o,E,h,v)):(r=Uf(u.type,null,h,o,o.mode,v),r.ref=o.ref,r.return=o,o.child=r)}if(E=r.child,!(r.lanes&v)){var R=E.memoizedProps;if(u=u.compare,u=u!==null?u:xu,u(R,h)&&r.ref===o.ref)return Us(r,o,v)}return o.flags|=1,r=xo(E,h),r.ref=o.ref,r.return=o,o.child=r}function yx(r,o,u,h,v){if(r!==null){var E=r.memoizedProps;if(xu(E,h)&&r.ref===o.ref)if(Yi=!1,o.pendingProps=h=E,(r.lanes&v)!==0)r.flags&131072&&(Yi=!0);else return o.lanes=r.lanes,Us(r,o,v)}return Np(r,o,u,h,v)}function Sx(r,o,u){var h=o.pendingProps,v=h.children,E=r!==null?r.memoizedState:null;if(h.mode==="hidden")if(!(o.mode&1))o.memoizedState={baseLanes:0,cachePool:null,transitions:null},pn(sl,ur),ur|=u;else{if(!(u&1073741824))return r=E!==null?E.baseLanes|u:u,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:r,cachePool:null,transitions:null},o.updateQueue=null,pn(sl,ur),ur|=r,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=E!==null?E.baseLanes:u,pn(sl,ur),ur|=h}else E!==null?(h=E.baseLanes|u,o.memoizedState=null):h=u,pn(sl,ur),ur|=h;return Li(r,o,v,u),o.child}function Mx(r,o){var u=o.ref;(r===null&&u!==null||r!==null&&r.ref!==u)&&(o.flags|=512,o.flags|=2097152)}function Np(r,o,u,h,v){var E=Xi(u)?Ko:vi.current;return E=ja(o,E),tl(o,v),u=Ep(r,o,u,h,E,v),h=wp(),r!==null&&!Yi?(o.updateQueue=r.updateQueue,o.flags&=-2053,r.lanes&=~v,Us(r,o,v)):(Sn&&h&&op(o),o.flags|=1,Li(r,o,u,v),o.child)}function Ex(r,o,u,h,v){if(Xi(u)){var E=!0;of(o)}else E=!1;if(tl(o,v),o.stateNode===null)wf(r,o),fx(o,u,h),Pp(o,u,h,v),h=!0;else if(r===null){var R=o.stateNode,V=o.memoizedProps;R.props=V;var $=R.context,pe=u.contextType;typeof pe=="object"&&pe!==null?pe=Rr(pe):(pe=Xi(u)?Ko:vi.current,pe=ja(o,pe));var Le=u.getDerivedStateFromProps,Ne=typeof Le=="function"||typeof R.getSnapshotBeforeUpdate=="function";Ne||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(V!==h||$!==pe)&&dx(o,R,h,pe),fo=!1;var Pe=o.memoizedState;R.state=Pe,mf(o,h,R,v),$=o.memoizedState,V!==h||Pe!==$||Wi.current||fo?(typeof Le=="function"&&(Rp(o,u,Le,h),$=o.memoizedState),(V=fo||cx(o,u,V,h,Pe,$,pe))?(Ne||typeof R.UNSAFE_componentWillMount!="function"&&typeof R.componentWillMount!="function"||(typeof R.componentWillMount=="function"&&R.componentWillMount(),typeof R.UNSAFE_componentWillMount=="function"&&R.UNSAFE_componentWillMount()),typeof R.componentDidMount=="function"&&(o.flags|=4194308)):(typeof R.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=h,o.memoizedState=$),R.props=h,R.state=$,R.context=pe,h=V):(typeof R.componentDidMount=="function"&&(o.flags|=4194308),h=!1)}else{R=o.stateNode,Bv(r,o),V=o.memoizedProps,pe=o.type===o.elementType?V:Xr(o.type,V),R.props=pe,Ne=o.pendingProps,Pe=R.context,$=u.contextType,typeof $=="object"&&$!==null?$=Rr($):($=Xi(u)?Ko:vi.current,$=ja(o,$));var Ke=u.getDerivedStateFromProps;(Le=typeof Ke=="function"||typeof R.getSnapshotBeforeUpdate=="function")||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(V!==Ne||Pe!==$)&&dx(o,R,h,$),fo=!1,Pe=o.memoizedState,R.state=Pe,mf(o,h,R,v);var nt=o.memoizedState;V!==Ne||Pe!==nt||Wi.current||fo?(typeof Ke=="function"&&(Rp(o,u,Ke,h),nt=o.memoizedState),(pe=fo||cx(o,u,pe,h,Pe,nt,$)||!1)?(Le||typeof R.UNSAFE_componentWillUpdate!="function"&&typeof R.componentWillUpdate!="function"||(typeof R.componentWillUpdate=="function"&&R.componentWillUpdate(h,nt,$),typeof R.UNSAFE_componentWillUpdate=="function"&&R.UNSAFE_componentWillUpdate(h,nt,$)),typeof R.componentDidUpdate=="function"&&(o.flags|=4),typeof R.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof R.componentDidUpdate!="function"||V===r.memoizedProps&&Pe===r.memoizedState||(o.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||V===r.memoizedProps&&Pe===r.memoizedState||(o.flags|=1024),o.memoizedProps=h,o.memoizedState=nt),R.props=h,R.state=nt,R.context=$,h=pe):(typeof R.componentDidUpdate!="function"||V===r.memoizedProps&&Pe===r.memoizedState||(o.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||V===r.memoizedProps&&Pe===r.memoizedState||(o.flags|=1024),h=!1)}return Ip(r,o,u,h,E,v)}function Ip(r,o,u,h,v,E){Mx(r,o);var R=(o.flags&128)!==0;if(!h&&!R)return v&&Cv(o,u,!1),Us(r,o,E);h=o.stateNode,Nw.current=o;var V=R&&typeof u.getDerivedStateFromError!="function"?null:h.render();return o.flags|=1,r!==null&&R?(o.child=Ja(o,r.child,null,E),o.child=Ja(o,null,V,E)):Li(r,o,V,E),o.memoizedState=h.state,v&&Cv(o,u,!0),o.child}function wx(r){var o=r.stateNode;o.pendingContext?Av(r,o.pendingContext,o.pendingContext!==o.context):o.context&&Av(r,o.context,!1),_p(r,o.containerInfo)}function Tx(r,o,u,h,v){return Qa(),cp(v),o.flags|=256,Li(r,o,u,h),o.child}var Up={dehydrated:null,treeContext:null,retryLane:0};function Fp(r){return{baseLanes:r,cachePool:null,transitions:null}}function Ax(r,o,u){var h=o.pendingProps,v=Tn.current,E=!1,R=(o.flags&128)!==0,V;if((V=R)||(V=r!==null&&r.memoizedState===null?!1:(v&2)!==0),V?(E=!0,o.flags&=-129):(r===null||r.memoizedState!==null)&&(v|=1),pn(Tn,v&1),r===null)return up(o),r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(o.mode&1?r.data==="$!"?o.lanes=8:o.lanes=1073741824:o.lanes=1,null):(R=h.children,r=h.fallback,E?(h=o.mode,E=o.child,R={mode:"hidden",children:R},!(h&1)&&E!==null?(E.childLanes=0,E.pendingProps=R):E=Ff(R,h,0,null),r=oa(r,h,u,null),E.return=o,r.return=o,E.sibling=r,o.child=E,o.child.memoizedState=Fp(u),o.memoizedState=Up,r):Op(o,R));if(v=r.memoizedState,v!==null&&(V=v.dehydrated,V!==null))return Iw(r,o,R,h,V,v,u);if(E){E=h.fallback,R=o.mode,v=r.child,V=v.sibling;var $={mode:"hidden",children:h.children};return!(R&1)&&o.child!==v?(h=o.child,h.childLanes=0,h.pendingProps=$,o.deletions=null):(h=xo(v,$),h.subtreeFlags=v.subtreeFlags&14680064),V!==null?E=xo(V,E):(E=oa(E,R,u,null),E.flags|=2),E.return=o,h.return=o,h.sibling=E,o.child=h,h=E,E=o.child,R=r.child.memoizedState,R=R===null?Fp(u):{baseLanes:R.baseLanes|u,cachePool:null,transitions:R.transitions},E.memoizedState=R,E.childLanes=r.childLanes&~u,o.memoizedState=Up,h}return E=r.child,r=E.sibling,h=xo(E,{mode:"visible",children:h.children}),!(o.mode&1)&&(h.lanes=u),h.return=o,h.sibling=null,r!==null&&(u=o.deletions,u===null?(o.deletions=[r],o.flags|=16):u.push(r)),o.child=h,o.memoizedState=null,h}function Op(r,o){return o=Ff({mode:"visible",children:o},r.mode,0,null),o.return=r,r.child=o}function Ef(r,o,u,h){return h!==null&&cp(h),Ja(o,r.child,null,u),r=Op(o,o.pendingProps.children),r.flags|=2,o.memoizedState=null,r}function Iw(r,o,u,h,v,E,R){if(u)return o.flags&256?(o.flags&=-257,h=Lp(Error(t(422))),Ef(r,o,R,h)):o.memoizedState!==null?(o.child=r.child,o.flags|=128,null):(E=h.fallback,v=o.mode,h=Ff({mode:"visible",children:h.children},v,0,null),E=oa(E,v,R,null),E.flags|=2,h.return=o,E.return=o,h.sibling=E,o.child=h,o.mode&1&&Ja(o,r.child,null,R),o.child.memoizedState=Fp(R),o.memoizedState=Up,E);if(!(o.mode&1))return Ef(r,o,R,null);if(v.data==="$!"){if(h=v.nextSibling&&v.nextSibling.dataset,h)var V=h.dgst;return h=V,E=Error(t(419)),h=Lp(E,h,void 0),Ef(r,o,R,h)}if(V=(R&r.childLanes)!==0,Yi||V){if(h=ei,h!==null){switch(R&-R){case 4:v=2;break;case 16:v=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:v=32;break;case 536870912:v=268435456;break;default:v=0}v=v&(h.suspendedLanes|R)?0:v,v!==0&&v!==E.retryLane&&(E.retryLane=v,Ns(r,v),$r(h,r,v,-1))}return Jp(),h=Lp(Error(t(421))),Ef(r,o,R,h)}return v.data==="$?"?(o.flags|=128,o.child=r.child,o=qw.bind(null,r),v._reactRetry=o,null):(r=E.treeContext,lr=ao(v.nextSibling),ar=o,Sn=!0,Wr=null,r!==null&&(br[Cr++]=Ls,br[Cr++]=Ds,br[Cr++]=Zo,Ls=r.id,Ds=r.overflow,Zo=o),o=Op(o,h.children),o.flags|=4096,o)}function bx(r,o,u){r.lanes|=o;var h=r.alternate;h!==null&&(h.lanes|=o),pp(r.return,o,u)}function kp(r,o,u,h,v){var E=r.memoizedState;E===null?r.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:h,tail:u,tailMode:v}:(E.isBackwards=o,E.rendering=null,E.renderingStartTime=0,E.last=h,E.tail=u,E.tailMode=v)}function Cx(r,o,u){var h=o.pendingProps,v=h.revealOrder,E=h.tail;if(Li(r,o,h.children,u),h=Tn.current,h&2)h=h&1|2,o.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=o.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&bx(r,u,o);else if(r.tag===19)bx(r,u,o);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===o)break e;for(;r.sibling===null;){if(r.return===null||r.return===o)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(pn(Tn,h),!(o.mode&1))o.memoizedState=null;else switch(v){case"forwards":for(u=o.child,v=null;u!==null;)r=u.alternate,r!==null&&gf(r)===null&&(v=u),u=u.sibling;u=v,u===null?(v=o.child,o.child=null):(v=u.sibling,u.sibling=null),kp(o,!1,v,u,E);break;case"backwards":for(u=null,v=o.child,o.child=null;v!==null;){if(r=v.alternate,r!==null&&gf(r)===null){o.child=v;break}r=v.sibling,v.sibling=u,u=v,v=r}kp(o,!0,u,null,E);break;case"together":kp(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function wf(r,o){!(o.mode&1)&&r!==null&&(r.alternate=null,o.alternate=null,o.flags|=2)}function Us(r,o,u){if(r!==null&&(o.dependencies=r.dependencies),na|=o.lanes,!(u&o.childLanes))return null;if(r!==null&&o.child!==r.child)throw Error(t(153));if(o.child!==null){for(r=o.child,u=xo(r,r.pendingProps),o.child=u,u.return=o;r.sibling!==null;)r=r.sibling,u=u.sibling=xo(r,r.pendingProps),u.return=o;u.sibling=null}return o.child}function Uw(r,o,u){switch(o.tag){case 3:wx(o),Qa();break;case 5:Hv(o);break;case 1:Xi(o.type)&&of(o);break;case 4:_p(o,o.stateNode.containerInfo);break;case 10:var h=o.type._context,v=o.memoizedProps.value;pn(df,h._currentValue),h._currentValue=v;break;case 13:if(h=o.memoizedState,h!==null)return h.dehydrated!==null?(pn(Tn,Tn.current&1),o.flags|=128,null):u&o.child.childLanes?Ax(r,o,u):(pn(Tn,Tn.current&1),r=Us(r,o,u),r!==null?r.sibling:null);pn(Tn,Tn.current&1);break;case 19:if(h=(u&o.childLanes)!==0,r.flags&128){if(h)return Cx(r,o,u);o.flags|=128}if(v=o.memoizedState,v!==null&&(v.rendering=null,v.tail=null,v.lastEffect=null),pn(Tn,Tn.current),h)break;return null;case 22:case 23:return o.lanes=0,Sx(r,o,u)}return Us(r,o,u)}var Rx,Bp,Px,Lx;Rx=function(r,o){for(var u=o.child;u!==null;){if(u.tag===5||u.tag===6)r.appendChild(u.stateNode);else if(u.tag!==4&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return;u=u.return}u.sibling.return=u.return,u=u.sibling}},Bp=function(){},Px=function(r,o,u,h){var v=r.memoizedProps;if(v!==h){r=o.stateNode,ea(ss.current);var E=null;switch(u){case"input":v=dt(r,v),h=dt(r,h),E=[];break;case"select":v=U({},v,{value:void 0}),h=U({},h,{value:void 0}),E=[];break;case"textarea":v=Ft(r,v),h=Ft(r,h),E=[];break;default:typeof v.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=nf)}Re(u,h);var R;u=null;for(pe in v)if(!h.hasOwnProperty(pe)&&v.hasOwnProperty(pe)&&v[pe]!=null)if(pe==="style"){var V=v[pe];for(R in V)V.hasOwnProperty(R)&&(u||(u={}),u[R]="")}else pe!=="dangerouslySetInnerHTML"&&pe!=="children"&&pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&pe!=="autoFocus"&&(i.hasOwnProperty(pe)?E||(E=[]):(E=E||[]).push(pe,null));for(pe in h){var $=h[pe];if(V=v!=null?v[pe]:void 0,h.hasOwnProperty(pe)&&$!==V&&($!=null||V!=null))if(pe==="style")if(V){for(R in V)!V.hasOwnProperty(R)||$&&$.hasOwnProperty(R)||(u||(u={}),u[R]="");for(R in $)$.hasOwnProperty(R)&&V[R]!==$[R]&&(u||(u={}),u[R]=$[R])}else u||(E||(E=[]),E.push(pe,u)),u=$;else pe==="dangerouslySetInnerHTML"?($=$?$.__html:void 0,V=V?V.__html:void 0,$!=null&&V!==$&&(E=E||[]).push(pe,$)):pe==="children"?typeof $!="string"&&typeof $!="number"||(E=E||[]).push(pe,""+$):pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&(i.hasOwnProperty(pe)?($!=null&&pe==="onScroll"&&vn("scroll",r),E||V===$||(E=[])):(E=E||[]).push(pe,$))}u&&(E=E||[]).push("style",u);var pe=E;(o.updateQueue=pe)&&(o.flags|=4)}},Lx=function(r,o,u,h){u!==h&&(o.flags|=4)};function Iu(r,o){if(!Sn)switch(r.tailMode){case"hidden":o=r.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r.tail=null:u.sibling=null;break;case"collapsed":u=r.tail;for(var h=null;u!==null;)u.alternate!==null&&(h=u),u=u.sibling;h===null?o||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function yi(r){var o=r.alternate!==null&&r.alternate.child===r.child,u=0,h=0;if(o)for(var v=r.child;v!==null;)u|=v.lanes|v.childLanes,h|=v.subtreeFlags&14680064,h|=v.flags&14680064,v.return=r,v=v.sibling;else for(v=r.child;v!==null;)u|=v.lanes|v.childLanes,h|=v.subtreeFlags,h|=v.flags,v.return=r,v=v.sibling;return r.subtreeFlags|=h,r.childLanes=u,o}function Fw(r,o,u){var h=o.pendingProps;switch(ap(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yi(o),null;case 1:return Xi(o.type)&&sf(),yi(o),null;case 3:return h=o.stateNode,nl(),xn(Wi),xn(vi),yp(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(cf(o)?o.flags|=4:r===null||r.memoizedState.isDehydrated&&!(o.flags&256)||(o.flags|=1024,Wr!==null&&(Kp(Wr),Wr=null))),Bp(r,o),yi(o),null;case 5:vp(o);var v=ea(Ru.current);if(u=o.type,r!==null&&o.stateNode!=null)Px(r,o,u,h,v),r.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!h){if(o.stateNode===null)throw Error(t(166));return yi(o),null}if(r=ea(ss.current),cf(o)){h=o.stateNode,u=o.type;var E=o.memoizedProps;switch(h[rs]=o,h[wu]=E,r=(o.mode&1)!==0,u){case"dialog":vn("cancel",h),vn("close",h);break;case"iframe":case"object":case"embed":vn("load",h);break;case"video":case"audio":for(v=0;v<Su.length;v++)vn(Su[v],h);break;case"source":vn("error",h);break;case"img":case"image":case"link":vn("error",h),vn("load",h);break;case"details":vn("toggle",h);break;case"input":mt(h,E),vn("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!E.multiple},vn("invalid",h);break;case"textarea":j(h,E),vn("invalid",h)}Re(u,E),v=null;for(var R in E)if(E.hasOwnProperty(R)){var V=E[R];R==="children"?typeof V=="string"?h.textContent!==V&&(E.suppressHydrationWarning!==!0&&tf(h.textContent,V,r),v=["children",V]):typeof V=="number"&&h.textContent!==""+V&&(E.suppressHydrationWarning!==!0&&tf(h.textContent,V,r),v=["children",""+V]):i.hasOwnProperty(R)&&V!=null&&R==="onScroll"&&vn("scroll",h)}switch(u){case"input":qe(h),Nt(h,E,!0);break;case"textarea":qe(h),pt(h);break;case"select":case"option":break;default:typeof E.onClick=="function"&&(h.onclick=nf)}h=v,o.updateQueue=h,h!==null&&(o.flags|=4)}else{R=v.nodeType===9?v:v.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=O(u)),r==="http://www.w3.org/1999/xhtml"?u==="script"?(r=R.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=R.createElement(u,{is:h.is}):(r=R.createElement(u),u==="select"&&(R=r,h.multiple?R.multiple=!0:h.size&&(R.size=h.size))):r=R.createElementNS(r,u),r[rs]=o,r[wu]=h,Rx(r,o,!1,!1),o.stateNode=r;e:{switch(R=ye(u,h),u){case"dialog":vn("cancel",r),vn("close",r),v=h;break;case"iframe":case"object":case"embed":vn("load",r),v=h;break;case"video":case"audio":for(v=0;v<Su.length;v++)vn(Su[v],r);v=h;break;case"source":vn("error",r),v=h;break;case"img":case"image":case"link":vn("error",r),vn("load",r),v=h;break;case"details":vn("toggle",r),v=h;break;case"input":mt(r,h),v=dt(r,h),vn("invalid",r);break;case"option":v=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},v=U({},h,{value:void 0}),vn("invalid",r);break;case"textarea":j(r,h),v=Ft(r,h),vn("invalid",r);break;default:v=h}Re(u,v),V=v;for(E in V)if(V.hasOwnProperty(E)){var $=V[E];E==="style"?ne(r,$):E==="dangerouslySetInnerHTML"?($=$?$.__html:void 0,$!=null&&oe(r,$)):E==="children"?typeof $=="string"?(u!=="textarea"||$!=="")&&he(r,$):typeof $=="number"&&he(r,""+$):E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&E!=="autoFocus"&&(i.hasOwnProperty(E)?$!=null&&E==="onScroll"&&vn("scroll",r):$!=null&&C(r,E,$,R))}switch(u){case"input":qe(r),Nt(r,h,!1);break;case"textarea":qe(r),pt(r);break;case"option":h.value!=null&&r.setAttribute("value",""+me(h.value));break;case"select":r.multiple=!!h.multiple,E=h.value,E!=null?it(r,!!h.multiple,E,!1):h.defaultValue!=null&&it(r,!!h.multiple,h.defaultValue,!0);break;default:typeof v.onClick=="function"&&(r.onclick=nf)}switch(u){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return yi(o),null;case 6:if(r&&o.stateNode!=null)Lx(r,o,r.memoizedProps,h);else{if(typeof h!="string"&&o.stateNode===null)throw Error(t(166));if(u=ea(Ru.current),ea(ss.current),cf(o)){if(h=o.stateNode,u=o.memoizedProps,h[rs]=o,(E=h.nodeValue!==u)&&(r=ar,r!==null))switch(r.tag){case 3:tf(h.nodeValue,u,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&tf(h.nodeValue,u,(r.mode&1)!==0)}E&&(o.flags|=4)}else h=(u.nodeType===9?u:u.ownerDocument).createTextNode(h),h[rs]=o,o.stateNode=h}return yi(o),null;case 13:if(xn(Tn),h=o.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Sn&&lr!==null&&o.mode&1&&!(o.flags&128))Iv(),Qa(),o.flags|=98560,E=!1;else if(E=cf(o),h!==null&&h.dehydrated!==null){if(r===null){if(!E)throw Error(t(318));if(E=o.memoizedState,E=E!==null?E.dehydrated:null,!E)throw Error(t(317));E[rs]=o}else Qa(),!(o.flags&128)&&(o.memoizedState=null),o.flags|=4;yi(o),E=!1}else Wr!==null&&(Kp(Wr),Wr=null),E=!0;if(!E)return o.flags&65536?o:null}return o.flags&128?(o.lanes=u,o):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(o.child.flags|=8192,o.mode&1&&(r===null||Tn.current&1?Wn===0&&(Wn=3):Jp())),o.updateQueue!==null&&(o.flags|=4),yi(o),null);case 4:return nl(),Bp(r,o),r===null&&Mu(o.stateNode.containerInfo),yi(o),null;case 10:return hp(o.type._context),yi(o),null;case 17:return Xi(o.type)&&sf(),yi(o),null;case 19:if(xn(Tn),E=o.memoizedState,E===null)return yi(o),null;if(h=(o.flags&128)!==0,R=E.rendering,R===null)if(h)Iu(E,!1);else{if(Wn!==0||r!==null&&r.flags&128)for(r=o.child;r!==null;){if(R=gf(r),R!==null){for(o.flags|=128,Iu(E,!1),h=R.updateQueue,h!==null&&(o.updateQueue=h,o.flags|=4),o.subtreeFlags=0,h=u,u=o.child;u!==null;)E=u,r=h,E.flags&=14680066,R=E.alternate,R===null?(E.childLanes=0,E.lanes=r,E.child=null,E.subtreeFlags=0,E.memoizedProps=null,E.memoizedState=null,E.updateQueue=null,E.dependencies=null,E.stateNode=null):(E.childLanes=R.childLanes,E.lanes=R.lanes,E.child=R.child,E.subtreeFlags=0,E.deletions=null,E.memoizedProps=R.memoizedProps,E.memoizedState=R.memoizedState,E.updateQueue=R.updateQueue,E.type=R.type,r=R.dependencies,E.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),u=u.sibling;return pn(Tn,Tn.current&1|2),o.child}r=r.sibling}E.tail!==null&&Lt()>ol&&(o.flags|=128,h=!0,Iu(E,!1),o.lanes=4194304)}else{if(!h)if(r=gf(R),r!==null){if(o.flags|=128,h=!0,u=r.updateQueue,u!==null&&(o.updateQueue=u,o.flags|=4),Iu(E,!0),E.tail===null&&E.tailMode==="hidden"&&!R.alternate&&!Sn)return yi(o),null}else 2*Lt()-E.renderingStartTime>ol&&u!==1073741824&&(o.flags|=128,h=!0,Iu(E,!1),o.lanes=4194304);E.isBackwards?(R.sibling=o.child,o.child=R):(u=E.last,u!==null?u.sibling=R:o.child=R,E.last=R)}return E.tail!==null?(o=E.tail,E.rendering=o,E.tail=o.sibling,E.renderingStartTime=Lt(),o.sibling=null,u=Tn.current,pn(Tn,h?u&1|2:u&1),o):(yi(o),null);case 22:case 23:return Qp(),h=o.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(o.flags|=8192),h&&o.mode&1?ur&1073741824&&(yi(o),o.subtreeFlags&6&&(o.flags|=8192)):yi(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function Ow(r,o){switch(ap(o),o.tag){case 1:return Xi(o.type)&&sf(),r=o.flags,r&65536?(o.flags=r&-65537|128,o):null;case 3:return nl(),xn(Wi),xn(vi),yp(),r=o.flags,r&65536&&!(r&128)?(o.flags=r&-65537|128,o):null;case 5:return vp(o),null;case 13:if(xn(Tn),r=o.memoizedState,r!==null&&r.dehydrated!==null){if(o.alternate===null)throw Error(t(340));Qa()}return r=o.flags,r&65536?(o.flags=r&-65537|128,o):null;case 19:return xn(Tn),null;case 4:return nl(),null;case 10:return hp(o.type._context),null;case 22:case 23:return Qp(),null;case 24:return null;default:return null}}var Tf=!1,Si=!1,kw=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function rl(r,o){var u=r.ref;if(u!==null)if(typeof u=="function")try{u(null)}catch(h){Ln(r,o,h)}else u.current=null}function zp(r,o,u){try{u()}catch(h){Ln(r,o,h)}}var Dx=!1;function Bw(r,o){if(Qh=Wc,r=cv(),Wh(r)){if("selectionStart"in r)var u={start:r.selectionStart,end:r.selectionEnd};else e:{u=(u=r.ownerDocument)&&u.defaultView||window;var h=u.getSelection&&u.getSelection();if(h&&h.rangeCount!==0){u=h.anchorNode;var v=h.anchorOffset,E=h.focusNode;h=h.focusOffset;try{u.nodeType,E.nodeType}catch{u=null;break e}var R=0,V=-1,$=-1,pe=0,Le=0,Ne=r,Pe=null;t:for(;;){for(var Ke;Ne!==u||v!==0&&Ne.nodeType!==3||(V=R+v),Ne!==E||h!==0&&Ne.nodeType!==3||($=R+h),Ne.nodeType===3&&(R+=Ne.nodeValue.length),(Ke=Ne.firstChild)!==null;)Pe=Ne,Ne=Ke;for(;;){if(Ne===r)break t;if(Pe===u&&++pe===v&&(V=R),Pe===E&&++Le===h&&($=R),(Ke=Ne.nextSibling)!==null)break;Ne=Pe,Pe=Ne.parentNode}Ne=Ke}u=V===-1||$===-1?null:{start:V,end:$}}else u=null}u=u||{start:0,end:0}}else u=null;for(Jh={focusedElem:r,selectionRange:u},Wc=!1,Qe=o;Qe!==null;)if(o=Qe,r=o.child,(o.subtreeFlags&1028)!==0&&r!==null)r.return=o,Qe=r;else for(;Qe!==null;){o=Qe;try{var nt=o.alternate;if(o.flags&1024)switch(o.tag){case 0:case 11:case 15:break;case 1:if(nt!==null){var st=nt.memoizedProps,Nn=nt.memoizedState,ue=o.stateNode,K=ue.getSnapshotBeforeUpdate(o.elementType===o.type?st:Xr(o.type,st),Nn);ue.__reactInternalSnapshotBeforeUpdate=K}break;case 3:var fe=o.stateNode.containerInfo;fe.nodeType===1?fe.textContent="":fe.nodeType===9&&fe.documentElement&&fe.removeChild(fe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ke){Ln(o,o.return,ke)}if(r=o.sibling,r!==null){r.return=o.return,Qe=r;break}Qe=o.return}return nt=Dx,Dx=!1,nt}function Uu(r,o,u){var h=o.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var v=h=h.next;do{if((v.tag&r)===r){var E=v.destroy;v.destroy=void 0,E!==void 0&&zp(o,u,E)}v=v.next}while(v!==h)}}function Af(r,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var u=o=o.next;do{if((u.tag&r)===r){var h=u.create;u.destroy=h()}u=u.next}while(u!==o)}}function Vp(r){var o=r.ref;if(o!==null){var u=r.stateNode;switch(r.tag){case 5:r=u;break;default:r=u}typeof o=="function"?o(r):o.current=r}}function Nx(r){var o=r.alternate;o!==null&&(r.alternate=null,Nx(o)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(o=r.stateNode,o!==null&&(delete o[rs],delete o[wu],delete o[ip],delete o[Sw],delete o[Mw])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Ix(r){return r.tag===5||r.tag===3||r.tag===4}function Ux(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Ix(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Hp(r,o,u){var h=r.tag;if(h===5||h===6)r=r.stateNode,o?u.nodeType===8?u.parentNode.insertBefore(r,o):u.insertBefore(r,o):(u.nodeType===8?(o=u.parentNode,o.insertBefore(r,u)):(o=u,o.appendChild(r)),u=u._reactRootContainer,u!=null||o.onclick!==null||(o.onclick=nf));else if(h!==4&&(r=r.child,r!==null))for(Hp(r,o,u),r=r.sibling;r!==null;)Hp(r,o,u),r=r.sibling}function Gp(r,o,u){var h=r.tag;if(h===5||h===6)r=r.stateNode,o?u.insertBefore(r,o):u.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(Gp(r,o,u),r=r.sibling;r!==null;)Gp(r,o,u),r=r.sibling}var ai=null,Yr=!1;function po(r,o,u){for(u=u.child;u!==null;)Fx(r,o,u),u=u.sibling}function Fx(r,o,u){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount(le,u)}catch{}switch(u.tag){case 5:Si||rl(u,o);case 6:var h=ai,v=Yr;ai=null,po(r,o,u),ai=h,Yr=v,ai!==null&&(Yr?(r=ai,u=u.stateNode,r.nodeType===8?r.parentNode.removeChild(u):r.removeChild(u)):ai.removeChild(u.stateNode));break;case 18:ai!==null&&(Yr?(r=ai,u=u.stateNode,r.nodeType===8?np(r.parentNode,u):r.nodeType===1&&np(r,u),hu(r)):np(ai,u.stateNode));break;case 4:h=ai,v=Yr,ai=u.stateNode.containerInfo,Yr=!0,po(r,o,u),ai=h,Yr=v;break;case 0:case 11:case 14:case 15:if(!Si&&(h=u.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){v=h=h.next;do{var E=v,R=E.destroy;E=E.tag,R!==void 0&&(E&2||E&4)&&zp(u,o,R),v=v.next}while(v!==h)}po(r,o,u);break;case 1:if(!Si&&(rl(u,o),h=u.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=u.memoizedProps,h.state=u.memoizedState,h.componentWillUnmount()}catch(V){Ln(u,o,V)}po(r,o,u);break;case 21:po(r,o,u);break;case 22:u.mode&1?(Si=(h=Si)||u.memoizedState!==null,po(r,o,u),Si=h):po(r,o,u);break;default:po(r,o,u)}}function Ox(r){var o=r.updateQueue;if(o!==null){r.updateQueue=null;var u=r.stateNode;u===null&&(u=r.stateNode=new kw),o.forEach(function(h){var v=$w.bind(null,r,h);u.has(h)||(u.add(h),h.then(v,v))})}}function qr(r,o){var u=o.deletions;if(u!==null)for(var h=0;h<u.length;h++){var v=u[h];try{var E=r,R=o,V=R;e:for(;V!==null;){switch(V.tag){case 5:ai=V.stateNode,Yr=!1;break e;case 3:ai=V.stateNode.containerInfo,Yr=!0;break e;case 4:ai=V.stateNode.containerInfo,Yr=!0;break e}V=V.return}if(ai===null)throw Error(t(160));Fx(E,R,v),ai=null,Yr=!1;var $=v.alternate;$!==null&&($.return=null),v.return=null}catch(pe){Ln(v,o,pe)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)kx(o,r),o=o.sibling}function kx(r,o){var u=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(qr(o,r),as(r),h&4){try{Uu(3,r,r.return),Af(3,r)}catch(st){Ln(r,r.return,st)}try{Uu(5,r,r.return)}catch(st){Ln(r,r.return,st)}}break;case 1:qr(o,r),as(r),h&512&&u!==null&&rl(u,u.return);break;case 5:if(qr(o,r),as(r),h&512&&u!==null&&rl(u,u.return),r.flags&32){var v=r.stateNode;try{he(v,"")}catch(st){Ln(r,r.return,st)}}if(h&4&&(v=r.stateNode,v!=null)){var E=r.memoizedProps,R=u!==null?u.memoizedProps:E,V=r.type,$=r.updateQueue;if(r.updateQueue=null,$!==null)try{V==="input"&&E.type==="radio"&&E.name!=null&&ht(v,E),ye(V,R);var pe=ye(V,E);for(R=0;R<$.length;R+=2){var Le=$[R],Ne=$[R+1];Le==="style"?ne(v,Ne):Le==="dangerouslySetInnerHTML"?oe(v,Ne):Le==="children"?he(v,Ne):C(v,Le,Ne,pe)}switch(V){case"input":ce(v,E);break;case"textarea":jt(v,E);break;case"select":var Pe=v._wrapperState.wasMultiple;v._wrapperState.wasMultiple=!!E.multiple;var Ke=E.value;Ke!=null?it(v,!!E.multiple,Ke,!1):Pe!==!!E.multiple&&(E.defaultValue!=null?it(v,!!E.multiple,E.defaultValue,!0):it(v,!!E.multiple,E.multiple?[]:"",!1))}v[wu]=E}catch(st){Ln(r,r.return,st)}}break;case 6:if(qr(o,r),as(r),h&4){if(r.stateNode===null)throw Error(t(162));v=r.stateNode,E=r.memoizedProps;try{v.nodeValue=E}catch(st){Ln(r,r.return,st)}}break;case 3:if(qr(o,r),as(r),h&4&&u!==null&&u.memoizedState.isDehydrated)try{hu(o.containerInfo)}catch(st){Ln(r,r.return,st)}break;case 4:qr(o,r),as(r);break;case 13:qr(o,r),as(r),v=r.child,v.flags&8192&&(E=v.memoizedState!==null,v.stateNode.isHidden=E,!E||v.alternate!==null&&v.alternate.memoizedState!==null||(Yp=Lt())),h&4&&Ox(r);break;case 22:if(Le=u!==null&&u.memoizedState!==null,r.mode&1?(Si=(pe=Si)||Le,qr(o,r),Si=pe):qr(o,r),as(r),h&8192){if(pe=r.memoizedState!==null,(r.stateNode.isHidden=pe)&&!Le&&r.mode&1)for(Qe=r,Le=r.child;Le!==null;){for(Ne=Qe=Le;Qe!==null;){switch(Pe=Qe,Ke=Pe.child,Pe.tag){case 0:case 11:case 14:case 15:Uu(4,Pe,Pe.return);break;case 1:rl(Pe,Pe.return);var nt=Pe.stateNode;if(typeof nt.componentWillUnmount=="function"){h=Pe,u=Pe.return;try{o=h,nt.props=o.memoizedProps,nt.state=o.memoizedState,nt.componentWillUnmount()}catch(st){Ln(h,u,st)}}break;case 5:rl(Pe,Pe.return);break;case 22:if(Pe.memoizedState!==null){Vx(Ne);continue}}Ke!==null?(Ke.return=Pe,Qe=Ke):Vx(Ne)}Le=Le.sibling}e:for(Le=null,Ne=r;;){if(Ne.tag===5){if(Le===null){Le=Ne;try{v=Ne.stateNode,pe?(E=v.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none"):(V=Ne.stateNode,$=Ne.memoizedProps.style,R=$!=null&&$.hasOwnProperty("display")?$.display:null,V.style.display=ge("display",R))}catch(st){Ln(r,r.return,st)}}}else if(Ne.tag===6){if(Le===null)try{Ne.stateNode.nodeValue=pe?"":Ne.memoizedProps}catch(st){Ln(r,r.return,st)}}else if((Ne.tag!==22&&Ne.tag!==23||Ne.memoizedState===null||Ne===r)&&Ne.child!==null){Ne.child.return=Ne,Ne=Ne.child;continue}if(Ne===r)break e;for(;Ne.sibling===null;){if(Ne.return===null||Ne.return===r)break e;Le===Ne&&(Le=null),Ne=Ne.return}Le===Ne&&(Le=null),Ne.sibling.return=Ne.return,Ne=Ne.sibling}}break;case 19:qr(o,r),as(r),h&4&&Ox(r);break;case 21:break;default:qr(o,r),as(r)}}function as(r){var o=r.flags;if(o&2){try{e:{for(var u=r.return;u!==null;){if(Ix(u)){var h=u;break e}u=u.return}throw Error(t(160))}switch(h.tag){case 5:var v=h.stateNode;h.flags&32&&(he(v,""),h.flags&=-33);var E=Ux(r);Gp(r,E,v);break;case 3:case 4:var R=h.stateNode.containerInfo,V=Ux(r);Hp(r,V,R);break;default:throw Error(t(161))}}catch($){Ln(r,r.return,$)}r.flags&=-3}o&4096&&(r.flags&=-4097)}function zw(r,o,u){Qe=r,Bx(r)}function Bx(r,o,u){for(var h=(r.mode&1)!==0;Qe!==null;){var v=Qe,E=v.child;if(v.tag===22&&h){var R=v.memoizedState!==null||Tf;if(!R){var V=v.alternate,$=V!==null&&V.memoizedState!==null||Si;V=Tf;var pe=Si;if(Tf=R,(Si=$)&&!pe)for(Qe=v;Qe!==null;)R=Qe,$=R.child,R.tag===22&&R.memoizedState!==null?Hx(v):$!==null?($.return=R,Qe=$):Hx(v);for(;E!==null;)Qe=E,Bx(E),E=E.sibling;Qe=v,Tf=V,Si=pe}zx(r)}else v.subtreeFlags&8772&&E!==null?(E.return=v,Qe=E):zx(r)}}function zx(r){for(;Qe!==null;){var o=Qe;if(o.flags&8772){var u=o.alternate;try{if(o.flags&8772)switch(o.tag){case 0:case 11:case 15:Si||Af(5,o);break;case 1:var h=o.stateNode;if(o.flags&4&&!Si)if(u===null)h.componentDidMount();else{var v=o.elementType===o.type?u.memoizedProps:Xr(o.type,u.memoizedProps);h.componentDidUpdate(v,u.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var E=o.updateQueue;E!==null&&Vv(o,E,h);break;case 3:var R=o.updateQueue;if(R!==null){if(u=null,o.child!==null)switch(o.child.tag){case 5:u=o.child.stateNode;break;case 1:u=o.child.stateNode}Vv(o,R,u)}break;case 5:var V=o.stateNode;if(u===null&&o.flags&4){u=V;var $=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":$.autoFocus&&u.focus();break;case"img":$.src&&(u.src=$.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var pe=o.alternate;if(pe!==null){var Le=pe.memoizedState;if(Le!==null){var Ne=Le.dehydrated;Ne!==null&&hu(Ne)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Si||o.flags&512&&Vp(o)}catch(Pe){Ln(o,o.return,Pe)}}if(o===r){Qe=null;break}if(u=o.sibling,u!==null){u.return=o.return,Qe=u;break}Qe=o.return}}function Vx(r){for(;Qe!==null;){var o=Qe;if(o===r){Qe=null;break}var u=o.sibling;if(u!==null){u.return=o.return,Qe=u;break}Qe=o.return}}function Hx(r){for(;Qe!==null;){var o=Qe;try{switch(o.tag){case 0:case 11:case 15:var u=o.return;try{Af(4,o)}catch($){Ln(o,u,$)}break;case 1:var h=o.stateNode;if(typeof h.componentDidMount=="function"){var v=o.return;try{h.componentDidMount()}catch($){Ln(o,v,$)}}var E=o.return;try{Vp(o)}catch($){Ln(o,E,$)}break;case 5:var R=o.return;try{Vp(o)}catch($){Ln(o,R,$)}}}catch($){Ln(o,o.return,$)}if(o===r){Qe=null;break}var V=o.sibling;if(V!==null){V.return=o.return,Qe=V;break}Qe=o.return}}var Vw=Math.ceil,bf=T.ReactCurrentDispatcher,Wp=T.ReactCurrentOwner,Lr=T.ReactCurrentBatchConfig,qt=0,ei=null,Bn=null,li=0,ur=0,sl=lo(0),Wn=0,Fu=null,na=0,Cf=0,Xp=0,Ou=null,qi=null,Yp=0,ol=1/0,Fs=null,Rf=!1,qp=null,mo=null,Pf=!1,go=null,Lf=0,ku=0,$p=null,Df=-1,Nf=0;function Di(){return qt&6?Lt():Df!==-1?Df:Df=Lt()}function _o(r){return r.mode&1?qt&2&&li!==0?li&-li:ww.transition!==null?(Nf===0&&(Nf=je()),Nf):(r=Ot,r!==0||(r=window.event,r=r===void 0?16:W_(r.type)),r):1}function $r(r,o,u,h){if(50<ku)throw ku=0,$p=null,Error(t(185));It(r,u,h),(!(qt&2)||r!==ei)&&(r===ei&&(!(qt&2)&&(Cf|=u),Wn===4&&vo(r,li)),$i(r,h),u===1&&qt===0&&!(o.mode&1)&&(ol=Lt()+500,af&&co()))}function $i(r,o){var u=r.callbackNode;rn(r,o);var h=hn(r,r===ei?li:0);if(h===0)u!==null&&Pn(u),r.callbackNode=null,r.callbackPriority=0;else if(o=h&-h,r.callbackPriority!==o){if(u!=null&&Pn(u),o===1)r.tag===0?Ew(Wx.bind(null,r)):Rv(Wx.bind(null,r)),xw(function(){!(qt&6)&&co()}),u=null;else{switch(Cs(h)){case 1:u=_i;break;case 4:u=I;break;case 16:u=Q;break;case 536870912:u=ae;break;default:u=Q}u=Qx(u,Gx.bind(null,r))}r.callbackPriority=o,r.callbackNode=u}}function Gx(r,o){if(Df=-1,Nf=0,qt&6)throw Error(t(327));var u=r.callbackNode;if(al()&&r.callbackNode!==u)return null;var h=hn(r,r===ei?li:0);if(h===0)return null;if(h&30||h&r.expiredLanes||o)o=If(r,h);else{o=h;var v=qt;qt|=2;var E=Yx();(ei!==r||li!==o)&&(Fs=null,ol=Lt()+500,ra(r,o));do try{Ww();break}catch(V){Xx(r,V)}while(!0);dp(),bf.current=E,qt=v,Bn!==null?o=0:(ei=null,li=0,o=Wn)}if(o!==0){if(o===2&&(v=kn(r),v!==0&&(h=v,o=jp(r,v))),o===1)throw u=Fu,ra(r,0),vo(r,h),$i(r,Lt()),u;if(o===6)vo(r,h);else{if(v=r.current.alternate,!(h&30)&&!Hw(v)&&(o=If(r,h),o===2&&(E=kn(r),E!==0&&(h=E,o=jp(r,E))),o===1))throw u=Fu,ra(r,0),vo(r,h),$i(r,Lt()),u;switch(r.finishedWork=v,r.finishedLanes=h,o){case 0:case 1:throw Error(t(345));case 2:sa(r,qi,Fs);break;case 3:if(vo(r,h),(h&130023424)===h&&(o=Yp+500-Lt(),10<o)){if(hn(r,0)!==0)break;if(v=r.suspendedLanes,(v&h)!==h){Di(),r.pingedLanes|=r.suspendedLanes&v;break}r.timeoutHandle=tp(sa.bind(null,r,qi,Fs),o);break}sa(r,qi,Fs);break;case 4:if(vo(r,h),(h&4194240)===h)break;for(o=r.eventTimes,v=-1;0<h;){var R=31-He(h);E=1<<R,R=o[R],R>v&&(v=R),h&=~E}if(h=v,h=Lt()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*Vw(h/1960))-h,10<h){r.timeoutHandle=tp(sa.bind(null,r,qi,Fs),h);break}sa(r,qi,Fs);break;case 5:sa(r,qi,Fs);break;default:throw Error(t(329))}}}return $i(r,Lt()),r.callbackNode===u?Gx.bind(null,r):null}function jp(r,o){var u=Ou;return r.current.memoizedState.isDehydrated&&(ra(r,o).flags|=256),r=If(r,o),r!==2&&(o=qi,qi=u,o!==null&&Kp(o)),r}function Kp(r){qi===null?qi=r:qi.push.apply(qi,r)}function Hw(r){for(var o=r;;){if(o.flags&16384){var u=o.updateQueue;if(u!==null&&(u=u.stores,u!==null))for(var h=0;h<u.length;h++){var v=u[h],E=v.getSnapshot;v=v.value;try{if(!Gr(E(),v))return!1}catch{return!1}}}if(u=o.child,o.subtreeFlags&16384&&u!==null)u.return=o,o=u;else{if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function vo(r,o){for(o&=~Xp,o&=~Cf,r.suspendedLanes|=o,r.pingedLanes&=~o,r=r.expirationTimes;0<o;){var u=31-He(o),h=1<<u;r[u]=-1,o&=~h}}function Wx(r){if(qt&6)throw Error(t(327));al();var o=hn(r,0);if(!(o&1))return $i(r,Lt()),null;var u=If(r,o);if(r.tag!==0&&u===2){var h=kn(r);h!==0&&(o=h,u=jp(r,h))}if(u===1)throw u=Fu,ra(r,0),vo(r,o),$i(r,Lt()),u;if(u===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=o,sa(r,qi,Fs),$i(r,Lt()),null}function Zp(r,o){var u=qt;qt|=1;try{return r(o)}finally{qt=u,qt===0&&(ol=Lt()+500,af&&co())}}function ia(r){go!==null&&go.tag===0&&!(qt&6)&&al();var o=qt;qt|=1;var u=Lr.transition,h=Ot;try{if(Lr.transition=null,Ot=1,r)return r()}finally{Ot=h,Lr.transition=u,qt=o,!(qt&6)&&co()}}function Qp(){ur=sl.current,xn(sl)}function ra(r,o){r.finishedWork=null,r.finishedLanes=0;var u=r.timeoutHandle;if(u!==-1&&(r.timeoutHandle=-1,vw(u)),Bn!==null)for(u=Bn.return;u!==null;){var h=u;switch(ap(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&sf();break;case 3:nl(),xn(Wi),xn(vi),yp();break;case 5:vp(h);break;case 4:nl();break;case 13:xn(Tn);break;case 19:xn(Tn);break;case 10:hp(h.type._context);break;case 22:case 23:Qp()}u=u.return}if(ei=r,Bn=r=xo(r.current,null),li=ur=o,Wn=0,Fu=null,Xp=Cf=na=0,qi=Ou=null,Jo!==null){for(o=0;o<Jo.length;o++)if(u=Jo[o],h=u.interleaved,h!==null){u.interleaved=null;var v=h.next,E=u.pending;if(E!==null){var R=E.next;E.next=v,h.next=R}u.pending=h}Jo=null}return r}function Xx(r,o){do{var u=Bn;try{if(dp(),_f.current=Sf,vf){for(var h=An.memoizedState;h!==null;){var v=h.queue;v!==null&&(v.pending=null),h=h.next}vf=!1}if(ta=0,Jn=Gn=An=null,Pu=!1,Lu=0,Wp.current=null,u===null||u.return===null){Wn=1,Fu=o,Bn=null;break}e:{var E=r,R=u.return,V=u,$=o;if(o=li,V.flags|=32768,$!==null&&typeof $=="object"&&typeof $.then=="function"){var pe=$,Le=V,Ne=Le.tag;if(!(Le.mode&1)&&(Ne===0||Ne===11||Ne===15)){var Pe=Le.alternate;Pe?(Le.updateQueue=Pe.updateQueue,Le.memoizedState=Pe.memoizedState,Le.lanes=Pe.lanes):(Le.updateQueue=null,Le.memoizedState=null)}var Ke=gx(R);if(Ke!==null){Ke.flags&=-257,_x(Ke,R,V,E,o),Ke.mode&1&&mx(E,pe,o),o=Ke,$=pe;var nt=o.updateQueue;if(nt===null){var st=new Set;st.add($),o.updateQueue=st}else nt.add($);break e}else{if(!(o&1)){mx(E,pe,o),Jp();break e}$=Error(t(426))}}else if(Sn&&V.mode&1){var Nn=gx(R);if(Nn!==null){!(Nn.flags&65536)&&(Nn.flags|=256),_x(Nn,R,V,E,o),cp(il($,V));break e}}E=$=il($,V),Wn!==4&&(Wn=2),Ou===null?Ou=[E]:Ou.push(E),E=R;do{switch(E.tag){case 3:E.flags|=65536,o&=-o,E.lanes|=o;var ue=hx(E,$,o);zv(E,ue);break e;case 1:V=$;var K=E.type,fe=E.stateNode;if(!(E.flags&128)&&(typeof K.getDerivedStateFromError=="function"||fe!==null&&typeof fe.componentDidCatch=="function"&&(mo===null||!mo.has(fe)))){E.flags|=65536,o&=-o,E.lanes|=o;var ke=px(E,V,o);zv(E,ke);break e}}E=E.return}while(E!==null)}$x(u)}catch(ut){o=ut,Bn===u&&u!==null&&(Bn=u=u.return);continue}break}while(!0)}function Yx(){var r=bf.current;return bf.current=Sf,r===null?Sf:r}function Jp(){(Wn===0||Wn===3||Wn===2)&&(Wn=4),ei===null||!(na&268435455)&&!(Cf&268435455)||vo(ei,li)}function If(r,o){var u=qt;qt|=2;var h=Yx();(ei!==r||li!==o)&&(Fs=null,ra(r,o));do try{Gw();break}catch(v){Xx(r,v)}while(!0);if(dp(),qt=u,bf.current=h,Bn!==null)throw Error(t(261));return ei=null,li=0,Wn}function Gw(){for(;Bn!==null;)qx(Bn)}function Ww(){for(;Bn!==null&&!Ar();)qx(Bn)}function qx(r){var o=Zx(r.alternate,r,ur);r.memoizedProps=r.pendingProps,o===null?$x(r):Bn=o,Wp.current=null}function $x(r){var o=r;do{var u=o.alternate;if(r=o.return,o.flags&32768){if(u=Ow(u,o),u!==null){u.flags&=32767,Bn=u;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Wn=6,Bn=null;return}}else if(u=Fw(u,o,ur),u!==null){Bn=u;return}if(o=o.sibling,o!==null){Bn=o;return}Bn=o=r}while(o!==null);Wn===0&&(Wn=5)}function sa(r,o,u){var h=Ot,v=Lr.transition;try{Lr.transition=null,Ot=1,Xw(r,o,u,h)}finally{Lr.transition=v,Ot=h}return null}function Xw(r,o,u,h){do al();while(go!==null);if(qt&6)throw Error(t(327));u=r.finishedWork;var v=r.finishedLanes;if(u===null)return null;if(r.finishedWork=null,r.finishedLanes=0,u===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var E=u.lanes|u.childLanes;if(Hi(r,E),r===ei&&(Bn=ei=null,li=0),!(u.subtreeFlags&2064)&&!(u.flags&2064)||Pf||(Pf=!0,Qx(Q,function(){return al(),null})),E=(u.flags&15990)!==0,u.subtreeFlags&15990||E){E=Lr.transition,Lr.transition=null;var R=Ot;Ot=1;var V=qt;qt|=4,Wp.current=null,Bw(r,u),kx(u,r),fw(Jh),Wc=!!Qh,Jh=Qh=null,r.current=u,zw(u),eo(),qt=V,Ot=R,Lr.transition=E}else r.current=u;if(Pf&&(Pf=!1,go=r,Lf=v),E=r.pendingLanes,E===0&&(mo=null),Ye(u.stateNode),$i(r,Lt()),o!==null)for(h=r.onRecoverableError,u=0;u<o.length;u++)v=o[u],h(v.value,{componentStack:v.stack,digest:v.digest});if(Rf)throw Rf=!1,r=qp,qp=null,r;return Lf&1&&r.tag!==0&&al(),E=r.pendingLanes,E&1?r===$p?ku++:(ku=0,$p=r):ku=0,co(),null}function al(){if(go!==null){var r=Cs(Lf),o=Lr.transition,u=Ot;try{if(Lr.transition=null,Ot=16>r?16:r,go===null)var h=!1;else{if(r=go,go=null,Lf=0,qt&6)throw Error(t(331));var v=qt;for(qt|=4,Qe=r.current;Qe!==null;){var E=Qe,R=E.child;if(Qe.flags&16){var V=E.deletions;if(V!==null){for(var $=0;$<V.length;$++){var pe=V[$];for(Qe=pe;Qe!==null;){var Le=Qe;switch(Le.tag){case 0:case 11:case 15:Uu(8,Le,E)}var Ne=Le.child;if(Ne!==null)Ne.return=Le,Qe=Ne;else for(;Qe!==null;){Le=Qe;var Pe=Le.sibling,Ke=Le.return;if(Nx(Le),Le===pe){Qe=null;break}if(Pe!==null){Pe.return=Ke,Qe=Pe;break}Qe=Ke}}}var nt=E.alternate;if(nt!==null){var st=nt.child;if(st!==null){nt.child=null;do{var Nn=st.sibling;st.sibling=null,st=Nn}while(st!==null)}}Qe=E}}if(E.subtreeFlags&2064&&R!==null)R.return=E,Qe=R;else e:for(;Qe!==null;){if(E=Qe,E.flags&2048)switch(E.tag){case 0:case 11:case 15:Uu(9,E,E.return)}var ue=E.sibling;if(ue!==null){ue.return=E.return,Qe=ue;break e}Qe=E.return}}var K=r.current;for(Qe=K;Qe!==null;){R=Qe;var fe=R.child;if(R.subtreeFlags&2064&&fe!==null)fe.return=R,Qe=fe;else e:for(R=K;Qe!==null;){if(V=Qe,V.flags&2048)try{switch(V.tag){case 0:case 11:case 15:Af(9,V)}}catch(ut){Ln(V,V.return,ut)}if(V===R){Qe=null;break e}var ke=V.sibling;if(ke!==null){ke.return=V.return,Qe=ke;break e}Qe=V.return}}if(qt=v,co(),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot(le,r)}catch{}h=!0}return h}finally{Ot=u,Lr.transition=o}}return!1}function jx(r,o,u){o=il(u,o),o=hx(r,o,1),r=ho(r,o,1),o=Di(),r!==null&&(It(r,1,o),$i(r,o))}function Ln(r,o,u){if(r.tag===3)jx(r,r,u);else for(;o!==null;){if(o.tag===3){jx(o,r,u);break}else if(o.tag===1){var h=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(mo===null||!mo.has(h))){r=il(u,r),r=px(o,r,1),o=ho(o,r,1),r=Di(),o!==null&&(It(o,1,r),$i(o,r));break}}o=o.return}}function Yw(r,o,u){var h=r.pingCache;h!==null&&h.delete(o),o=Di(),r.pingedLanes|=r.suspendedLanes&u,ei===r&&(li&u)===u&&(Wn===4||Wn===3&&(li&130023424)===li&&500>Lt()-Yp?ra(r,0):Xp|=u),$i(r,o)}function Kx(r,o){o===0&&(r.mode&1?(o=ot,ot<<=1,!(ot&130023424)&&(ot=4194304)):o=1);var u=Di();r=Ns(r,o),r!==null&&(It(r,o,u),$i(r,u))}function qw(r){var o=r.memoizedState,u=0;o!==null&&(u=o.retryLane),Kx(r,u)}function $w(r,o){var u=0;switch(r.tag){case 13:var h=r.stateNode,v=r.memoizedState;v!==null&&(u=v.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(o),Kx(r,u)}var Zx;Zx=function(r,o,u){if(r!==null)if(r.memoizedProps!==o.pendingProps||Wi.current)Yi=!0;else{if(!(r.lanes&u)&&!(o.flags&128))return Yi=!1,Uw(r,o,u);Yi=!!(r.flags&131072)}else Yi=!1,Sn&&o.flags&1048576&&Pv(o,uf,o.index);switch(o.lanes=0,o.tag){case 2:var h=o.type;wf(r,o),r=o.pendingProps;var v=ja(o,vi.current);tl(o,u),v=Ep(null,o,h,r,v,u);var E=wp();return o.flags|=1,typeof v=="object"&&v!==null&&typeof v.render=="function"&&v.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,Xi(h)?(E=!0,of(o)):E=!1,o.memoizedState=v.state!==null&&v.state!==void 0?v.state:null,gp(o),v.updater=Mf,o.stateNode=v,v._reactInternals=o,Pp(o,h,r,u),o=Ip(null,o,h,!0,E,u)):(o.tag=0,Sn&&E&&op(o),Li(null,o,v,u),o=o.child),o;case 16:h=o.elementType;e:{switch(wf(r,o),r=o.pendingProps,v=h._init,h=v(h._payload),o.type=h,v=o.tag=Kw(h),r=Xr(h,r),v){case 0:o=Np(null,o,h,r,u);break e;case 1:o=Ex(null,o,h,r,u);break e;case 11:o=vx(null,o,h,r,u);break e;case 14:o=xx(null,o,h,Xr(h.type,r),u);break e}throw Error(t(306,h,""))}return o;case 0:return h=o.type,v=o.pendingProps,v=o.elementType===h?v:Xr(h,v),Np(r,o,h,v,u);case 1:return h=o.type,v=o.pendingProps,v=o.elementType===h?v:Xr(h,v),Ex(r,o,h,v,u);case 3:e:{if(wx(o),r===null)throw Error(t(387));h=o.pendingProps,E=o.memoizedState,v=E.element,Bv(r,o),mf(o,h,null,u);var R=o.memoizedState;if(h=R.element,E.isDehydrated)if(E={element:h,isDehydrated:!1,cache:R.cache,pendingSuspenseBoundaries:R.pendingSuspenseBoundaries,transitions:R.transitions},o.updateQueue.baseState=E,o.memoizedState=E,o.flags&256){v=il(Error(t(423)),o),o=Tx(r,o,h,u,v);break e}else if(h!==v){v=il(Error(t(424)),o),o=Tx(r,o,h,u,v);break e}else for(lr=ao(o.stateNode.containerInfo.firstChild),ar=o,Sn=!0,Wr=null,u=Ov(o,null,h,u),o.child=u;u;)u.flags=u.flags&-3|4096,u=u.sibling;else{if(Qa(),h===v){o=Us(r,o,u);break e}Li(r,o,h,u)}o=o.child}return o;case 5:return Hv(o),r===null&&up(o),h=o.type,v=o.pendingProps,E=r!==null?r.memoizedProps:null,R=v.children,ep(h,v)?R=null:E!==null&&ep(h,E)&&(o.flags|=32),Mx(r,o),Li(r,o,R,u),o.child;case 6:return r===null&&up(o),null;case 13:return Ax(r,o,u);case 4:return _p(o,o.stateNode.containerInfo),h=o.pendingProps,r===null?o.child=Ja(o,null,h,u):Li(r,o,h,u),o.child;case 11:return h=o.type,v=o.pendingProps,v=o.elementType===h?v:Xr(h,v),vx(r,o,h,v,u);case 7:return Li(r,o,o.pendingProps,u),o.child;case 8:return Li(r,o,o.pendingProps.children,u),o.child;case 12:return Li(r,o,o.pendingProps.children,u),o.child;case 10:e:{if(h=o.type._context,v=o.pendingProps,E=o.memoizedProps,R=v.value,pn(df,h._currentValue),h._currentValue=R,E!==null)if(Gr(E.value,R)){if(E.children===v.children&&!Wi.current){o=Us(r,o,u);break e}}else for(E=o.child,E!==null&&(E.return=o);E!==null;){var V=E.dependencies;if(V!==null){R=E.child;for(var $=V.firstContext;$!==null;){if($.context===h){if(E.tag===1){$=Is(-1,u&-u),$.tag=2;var pe=E.updateQueue;if(pe!==null){pe=pe.shared;var Le=pe.pending;Le===null?$.next=$:($.next=Le.next,Le.next=$),pe.pending=$}}E.lanes|=u,$=E.alternate,$!==null&&($.lanes|=u),pp(E.return,u,o),V.lanes|=u;break}$=$.next}}else if(E.tag===10)R=E.type===o.type?null:E.child;else if(E.tag===18){if(R=E.return,R===null)throw Error(t(341));R.lanes|=u,V=R.alternate,V!==null&&(V.lanes|=u),pp(R,u,o),R=E.sibling}else R=E.child;if(R!==null)R.return=E;else for(R=E;R!==null;){if(R===o){R=null;break}if(E=R.sibling,E!==null){E.return=R.return,R=E;break}R=R.return}E=R}Li(r,o,v.children,u),o=o.child}return o;case 9:return v=o.type,h=o.pendingProps.children,tl(o,u),v=Rr(v),h=h(v),o.flags|=1,Li(r,o,h,u),o.child;case 14:return h=o.type,v=Xr(h,o.pendingProps),v=Xr(h.type,v),xx(r,o,h,v,u);case 15:return yx(r,o,o.type,o.pendingProps,u);case 17:return h=o.type,v=o.pendingProps,v=o.elementType===h?v:Xr(h,v),wf(r,o),o.tag=1,Xi(h)?(r=!0,of(o)):r=!1,tl(o,u),fx(o,h,v),Pp(o,h,v,u),Ip(null,o,h,!0,r,u);case 19:return Cx(r,o,u);case 22:return Sx(r,o,u)}throw Error(t(156,o.tag))};function Qx(r,o){return gn(r,o)}function jw(r,o,u,h){this.tag=r,this.key=u,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dr(r,o,u,h){return new jw(r,o,u,h)}function em(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Kw(r){if(typeof r=="function")return em(r)?1:0;if(r!=null){if(r=r.$$typeof,r===z)return 11;if(r===q)return 14}return 2}function xo(r,o){var u=r.alternate;return u===null?(u=Dr(r.tag,o,r.key,r.mode),u.elementType=r.elementType,u.type=r.type,u.stateNode=r.stateNode,u.alternate=r,r.alternate=u):(u.pendingProps=o,u.type=r.type,u.flags=0,u.subtreeFlags=0,u.deletions=null),u.flags=r.flags&14680064,u.childLanes=r.childLanes,u.lanes=r.lanes,u.child=r.child,u.memoizedProps=r.memoizedProps,u.memoizedState=r.memoizedState,u.updateQueue=r.updateQueue,o=r.dependencies,u.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},u.sibling=r.sibling,u.index=r.index,u.ref=r.ref,u}function Uf(r,o,u,h,v,E){var R=2;if(h=r,typeof r=="function")em(r)&&(R=1);else if(typeof r=="string")R=5;else e:switch(r){case D:return oa(u.children,v,E,o);case w:R=8,v|=8;break;case N:return r=Dr(12,u,o,v|2),r.elementType=N,r.lanes=E,r;case re:return r=Dr(13,u,o,v),r.elementType=re,r.lanes=E,r;case ie:return r=Dr(19,u,o,v),r.elementType=ie,r.lanes=E,r;case W:return Ff(u,v,E,o);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case F:R=10;break e;case B:R=9;break e;case z:R=11;break e;case q:R=14;break e;case ee:R=16,h=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return o=Dr(R,u,o,v),o.elementType=r,o.type=h,o.lanes=E,o}function oa(r,o,u,h){return r=Dr(7,r,h,o),r.lanes=u,r}function Ff(r,o,u,h){return r=Dr(22,r,h,o),r.elementType=W,r.lanes=u,r.stateNode={isHidden:!1},r}function tm(r,o,u){return r=Dr(6,r,null,o),r.lanes=u,r}function nm(r,o,u){return o=Dr(4,r.children!==null?r.children:[],r.key,o),o.lanes=u,o.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},o}function Zw(r,o,u,h,v){this.tag=o,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oi(0),this.expirationTimes=oi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oi(0),this.identifierPrefix=h,this.onRecoverableError=v,this.mutableSourceEagerHydrationData=null}function im(r,o,u,h,v,E,R,V,$){return r=new Zw(r,o,u,V,$),o===1?(o=1,E===!0&&(o|=8)):o=0,E=Dr(3,null,null,o),r.current=E,E.stateNode=r,E.memoizedState={element:h,isDehydrated:u,cache:null,transitions:null,pendingSuspenseBoundaries:null},gp(E),r}function Qw(r,o,u){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:h==null?null:""+h,children:r,containerInfo:o,implementation:u}}function Jx(r){if(!r)return uo;r=r._reactInternals;e:{if(Pt(r)!==r||r.tag!==1)throw Error(t(170));var o=r;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(Xi(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(r.tag===1){var u=r.type;if(Xi(u))return bv(r,u,o)}return o}function ey(r,o,u,h,v,E,R,V,$){return r=im(u,h,!0,r,v,E,R,V,$),r.context=Jx(null),u=r.current,h=Di(),v=_o(u),E=Is(h,v),E.callback=o??null,ho(u,E,v),r.current.lanes=v,It(r,v,h),$i(r,h),r}function Of(r,o,u,h){var v=o.current,E=Di(),R=_o(v);return u=Jx(u),o.context===null?o.context=u:o.pendingContext=u,o=Is(E,R),o.payload={element:r},h=h===void 0?null:h,h!==null&&(o.callback=h),r=ho(v,o,R),r!==null&&($r(r,v,R,E),pf(r,v,R)),R}function kf(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function ty(r,o){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var u=r.retryLane;r.retryLane=u!==0&&u<o?u:o}}function rm(r,o){ty(r,o),(r=r.alternate)&&ty(r,o)}var ny=typeof reportError=="function"?reportError:function(r){console.error(r)};function sm(r){this._internalRoot=r}Bf.prototype.render=sm.prototype.render=function(r){var o=this._internalRoot;if(o===null)throw Error(t(409));Of(r,o,null,null)},Bf.prototype.unmount=sm.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var o=r.containerInfo;ia(function(){Of(null,r,null,null)}),o[Rs]=null}};function Bf(r){this._internalRoot=r}Bf.prototype.unstable_scheduleHydration=function(r){if(r){var o=sn();r={blockedOn:null,target:r,priority:o};for(var u=0;u<ro.length&&o!==0&&o<ro[u].priority;u++);ro.splice(u,0,r),u===0&&H_(r)}};function om(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function zf(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function iy(){}function Jw(r,o,u,h,v){if(v){if(typeof h=="function"){var E=h;h=function(){var pe=kf(R);E.call(pe)}}var R=ey(o,h,r,0,null,!1,!1,"",iy);return r._reactRootContainer=R,r[Rs]=R.current,Mu(r.nodeType===8?r.parentNode:r),ia(),R}for(;v=r.lastChild;)r.removeChild(v);if(typeof h=="function"){var V=h;h=function(){var pe=kf($);V.call(pe)}}var $=im(r,0,!1,null,null,!1,!1,"",iy);return r._reactRootContainer=$,r[Rs]=$.current,Mu(r.nodeType===8?r.parentNode:r),ia(function(){Of(o,$,u,h)}),$}function Vf(r,o,u,h,v){var E=u._reactRootContainer;if(E){var R=E;if(typeof v=="function"){var V=v;v=function(){var $=kf(R);V.call($)}}Of(o,R,r,v)}else R=Jw(u,o,r,v,h);return kf(R)}Kt=function(r){switch(r.tag){case 3:var o=r.stateNode;if(o.current.memoizedState.isDehydrated){var u=Xt(o.pendingLanes);u!==0&&(Gi(o,u|1),$i(o,Lt()),!(qt&6)&&(ol=Lt()+500,co()))}break;case 13:ia(function(){var h=Ns(r,1);if(h!==null){var v=Di();$r(h,r,1,v)}}),rm(r,1)}},_n=function(r){if(r.tag===13){var o=Ns(r,134217728);if(o!==null){var u=Di();$r(o,r,134217728,u)}rm(r,134217728)}},Vr=function(r){if(r.tag===13){var o=_o(r),u=Ns(r,o);if(u!==null){var h=Di();$r(u,r,o,h)}rm(r,o)}},sn=function(){return Ot},Hr=function(r,o){var u=Ot;try{return Ot=r,o()}finally{Ot=u}},Ge=function(r,o,u){switch(o){case"input":if(ce(r,u),o=u.name,u.type==="radio"&&o!=null){for(u=r;u.parentNode;)u=u.parentNode;for(u=u.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<u.length;o++){var h=u[o];if(h!==r&&h.form===r.form){var v=rf(h);if(!v)throw Error(t(90));Ct(h),ce(h,v)}}}break;case"textarea":jt(r,u);break;case"select":o=u.value,o!=null&&it(r,!!u.multiple,o,!1)}},Fe=Zp,Ee=ia;var e2={usingClientEntryPoint:!1,Events:[Tu,qa,rf,_e,Ue,Zp]},Bu={findFiberByHostInstance:jo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},t2={bundleType:Bu.bundleType,version:Bu.version,rendererPackageName:Bu.rendererPackageName,rendererConfig:Bu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Qn(r),r===null?null:r.stateNode},findFiberByHostInstance:Bu.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hf.isDisabled&&Hf.supportsFiber)try{le=Hf.inject(t2),Oe=Hf}catch{}}return ji.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e2,ji.createPortal=function(r,o){var u=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!om(o))throw Error(t(200));return Qw(r,o,null,u)},ji.createRoot=function(r,o){if(!om(r))throw Error(t(299));var u=!1,h="",v=ny;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(v=o.onRecoverableError)),o=im(r,1,!1,null,null,u,!1,h,v),r[Rs]=o.current,Mu(r.nodeType===8?r.parentNode:r),new sm(o)},ji.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var o=r._reactInternals;if(o===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=Qn(o),r=r===null?null:r.stateNode,r},ji.flushSync=function(r){return ia(r)},ji.hydrate=function(r,o,u){if(!zf(o))throw Error(t(200));return Vf(null,r,o,!0,u)},ji.hydrateRoot=function(r,o,u){if(!om(r))throw Error(t(405));var h=u!=null&&u.hydratedSources||null,v=!1,E="",R=ny;if(u!=null&&(u.unstable_strictMode===!0&&(v=!0),u.identifierPrefix!==void 0&&(E=u.identifierPrefix),u.onRecoverableError!==void 0&&(R=u.onRecoverableError)),o=ey(o,null,r,1,u??null,v,!1,E,R),r[Rs]=o.current,Mu(r),h)for(r=0;r<h.length;r++)u=h[r],v=u._getVersion,v=v(u._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[u,v]:o.mutableSourceEagerHydrationData.push(u,v);return new Bf(o)},ji.render=function(r,o,u){if(!zf(o))throw Error(t(200));return Vf(null,r,o,!1,u)},ji.unmountComponentAtNode=function(r){if(!zf(r))throw Error(t(40));return r._reactRootContainer?(ia(function(){Vf(null,null,r,!1,function(){r._reactRootContainer=null,r[Rs]=null})}),!0):!1},ji.unstable_batchedUpdates=Zp,ji.unstable_renderSubtreeIntoContainer=function(r,o,u,h){if(!zf(u))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Vf(r,o,u,!1,h)},ji.version="18.3.1-next-f1338f8080-20240426",ji}var fy;function f2(){if(fy)return um.exports;fy=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),um.exports=c2(),um.exports}var dy;function d2(){if(dy)return Gf;dy=1;var s=f2();return Gf.createRoot=s.createRoot,Gf.hydrateRoot=s.hydrateRoot,Gf}var h2=d2();function Hs(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function yS(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Mr={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Tc={duration:.5,overwrite:!1,delay:0},Fg,mi,Mn,Ms=1e8,Ci=1/Ms,_0=Math.PI*2,p2=_0/4,m2=0,SS=Math.sqrt,g2=Math.cos,_2=Math.sin,si=function(e){return typeof e=="string"},Dn=function(e){return typeof e=="function"},Zs=function(e){return typeof e=="number"},Og=function(e){return typeof e>"u"},As=function(e){return typeof e=="object"},Ji=function(e){return e!==!1},kg=function(){return typeof window<"u"},Wf=function(e){return Dn(e)||si(e)},MS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Pi=Array.isArray,v2=/random\([^)]+\)/g,x2=/,\s*/g,hy=/(?:-?\.?\d|\.)+/gi,ES=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ul=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,dm=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,wS=/[+-]=-?[.\d]+/,y2=/[^,'"\[\]\s]+/gi,S2=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Cn,ds,v0,Bg,wr={},ih={},TS,AS=function(e){return(ih=$l(e,wr))&&sr},zg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ac=function(e,t){return!t&&console.warn(e)},bS=function(e,t){return e&&(wr[e]=t)&&ih&&(ih[e]=t)||wr},bc=function(){return 0},M2={suppressEvents:!0,isStart:!0,kill:!1},kd={suppressEvents:!0,kill:!1},E2={suppressEvents:!0},Vg={},Fo=[],x0={},CS,pr={},hm={},py=30,Bd=[],Hg="",Gg=function(e){var t=e[0],n,i;if(As(t)||Dn(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Bd.length;i--&&!Bd[i].targetTest(t););n=Bd[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new KS(e[i],n)))||e.splice(i,1);return e},Ea=function(e){return e._gsap||Gg(Br(e))[0]._gsap},RS=function(e,t,n){return(n=e[t])&&Dn(n)?e[t]():Og(n)&&e.getAttribute&&e.getAttribute(t)||n},er=function(e,t){return(e=e.split(",")).forEach(t)||e},In=function(e){return Math.round(e*1e5)/1e5||0},bn=function(e){return Math.round(e*1e7)/1e7||0},kl=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},w2=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},rh=function(){var e=Fo.length,t=Fo.slice(0),n,i;for(x0={},Fo.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Wg=function(e){return!!(e._initted||e._startAt||e.add)},PS=function(e,t,n,i){Fo.length&&!mi&&rh(),e.render(t,n,!!(mi&&t<0&&Wg(e))),Fo.length&&!mi&&rh()},LS=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(y2).length<2?t:si(e)?e.trim():e},DS=function(e){return e},Tr=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},T2=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},$l=function(e,t){for(var n in t)e[n]=t[n];return e},my=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=As(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},sh=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},cc=function(e){var t=e.parent||Cn,n=e.keyframes?T2(Pi(e.keyframes)):Tr;if(Ji(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},A2=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},NS=function(e,t,n,i,a){var l=e[i],c;if(a)for(c=t[a];l&&l[a]>c;)l=l._prev;return l?(t._next=l._next,l._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=l,t.parent=t._dp=e,t},Eh=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t._prev,l=t._next;a?a._next=l:e[n]===t&&(e[n]=l),l?l._prev=a:e[i]===t&&(e[i]=a),t._next=t._prev=t.parent=null},Bo=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},wa=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},b2=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},y0=function(e,t,n,i){return e._startAt&&(mi?e._startAt.revert(kd):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},C2=function s(e){return!e||e._ts&&s(e.parent)},gy=function(e){return e._repeat?jl(e._tTime,e=e.duration()+e._rDelay)*e:0},jl=function(e,t){var n=Math.floor(e=bn(e/t));return e&&n===e?n-1:n},oh=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},wh=function(e){return e._end=bn(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ci)||0))},Th=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=bn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),wh(e),n._dirty||wa(n,e)),e},IS=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=oh(e.rawTime(),t),(!t._dur||Vc(0,t.totalDuration(),n)-t._tTime>Ci)&&t.render(n,!0)),wa(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},ps=function(e,t,n,i){return t.parent&&Bo(t),t._start=bn((Zs(n)?n:n||e!==Cn?Ir(e,n,t):e._time)+t._delay),t._end=bn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),NS(e,t,"_first","_last",e._sort?"_start":0),S0(t)||(e._recent=t),i||IS(e,t),e._ts<0&&Th(e,e._tTime),e},US=function(e,t){return(wr.ScrollTrigger||zg("scrollTrigger",t))&&wr.ScrollTrigger.create(t,e)},FS=function(e,t,n,i,a){if(Yg(e,t,a),!e._initted)return 1;if(!n&&e._pt&&!mi&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&CS!==_r.frame)return Fo.push(e),e._lazy=[a,i],1},R2=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},S0=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},P2=function(e,t,n,i){var a=e.ratio,l=t<0||!t&&(!e._start&&R2(e)&&!(!e._initted&&S0(e))||(e._ts<0||e._dp._ts<0)&&!S0(e))?0:1,c=e._rDelay,f=0,d,p,g;if(c&&e._repeat&&(f=Vc(0,e._tDur,t),p=jl(f,c),e._yoyo&&p&1&&(l=1-l),p!==jl(e._tTime,c)&&(a=1-l,e.vars.repeatRefresh&&e._initted&&e.invalidate())),l!==a||mi||i||e._zTime===Ci||!t&&e._zTime){if(!e._initted&&FS(e,t,i,n,f))return;for(g=e._zTime,e._zTime=t||(n?Ci:0),n||(n=t&&!g),e.ratio=l,e._from&&(l=1-l),e._time=0,e._tTime=f,d=e._pt;d;)d.r(l,d.d),d=d._next;t<0&&y0(e,t,n,!0),e._onUpdate&&!n&&yr(e,"onUpdate"),f&&e._repeat&&!n&&e.parent&&yr(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===l&&(l&&Bo(e,1),!n&&!mi&&(yr(e,l?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},L2=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Kl=function(e,t,n,i){var a=e._repeat,l=bn(t)||0,c=e._tTime/e._tDur;return c&&!i&&(e._time*=l/e._dur),e._dur=l,e._tDur=a?a<0?1e10:bn(l*(a+1)+e._rDelay*a):l,c>0&&!i&&Th(e,e._tTime=e._tDur*c),e.parent&&wh(e),n||wa(e.parent,e),e},_y=function(e){return e instanceof Qi?wa(e):Kl(e,e._dur)},D2={_start:0,endTime:bc,totalDuration:bc},Ir=function s(e,t,n){var i=e.labels,a=e._recent||D2,l=e.duration()>=Ms?a.endTime(!1):e._dur,c,f,d;return si(t)&&(isNaN(t)||t in i)?(f=t.charAt(0),d=t.substr(-1)==="%",c=t.indexOf("="),f==="<"||f===">"?(c>=0&&(t=t.replace(/=/,"")),(f==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(d?(c<0?a:n).totalDuration()/100:1)):c<0?(t in i||(i[t]=l),i[t]):(f=parseFloat(t.charAt(c-1)+t.substr(c+1)),d&&n&&(f=f/100*(Pi(n)?n[0]:n).totalDuration()),c>1?s(e,t.substr(0,c-1),n)+f:l+f)):t==null?l:+t},fc=function(e,t,n){var i=Zs(t[1]),a=(i?2:1)+(e<2?0:1),l=t[a],c,f;if(i&&(l.duration=t[1]),l.parent=n,e){for(c=l,f=n;f&&!("immediateRender"in c);)c=f.vars.defaults||{},f=Ji(f.vars.inherit)&&f.parent;l.immediateRender=Ji(c.immediateRender),e<2?l.runBackwards=1:l.startAt=t[a-1]}return new Hn(t[0],l,t[a+1])},Xo=function(e,t){return e||e===0?t(e):t},Vc=function(e,t,n){return n<e?e:n>t?t:n},Ai=function(e,t){return!si(e)||!(t=S2.exec(e))?"":t[1]},N2=function(e,t,n){return Xo(n,function(i){return Vc(e,t,i)})},M0=[].slice,OS=function(e,t){return e&&As(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&As(e[0]))&&!e.nodeType&&e!==ds},I2=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var a;return si(i)&&!t||OS(i,1)?(a=n).push.apply(a,Br(i)):n.push(i)})||n},Br=function(e,t,n){return Mn&&!t&&Mn.selector?Mn.selector(e):si(e)&&!n&&(v0||!Zl())?M0.call((t||Bg).querySelectorAll(e),0):Pi(e)?I2(e,n):OS(e)?M0.call(e,0):e?[e]:[]},E0=function(e){return e=Br(e)[0]||Ac("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Br(t,n.querySelectorAll?n:n===e?Ac("Invalid scope")||Bg.createElement("div"):e)}},kS=function(e){return e.sort(function(){return .5-Math.random()})},BS=function(e){if(Dn(e))return e;var t=As(e)?e:{each:e},n=Ta(t.ease),i=t.from||0,a=parseFloat(t.base)||0,l={},c=i>0&&i<1,f=isNaN(i)||c,d=t.axis,p=i,g=i;return si(i)?p=g={center:.5,edges:.5,end:1}[i]||0:!c&&f&&(p=i[0],g=i[1]),function(m,_,x){var M=(x||t).length,y=l[M],S,b,C,T,P,L,D,w,N;if(!y){if(N=t.grid==="auto"?0:(t.grid||[1,Ms])[1],!N){for(D=-1e8;D<(D=x[N++].getBoundingClientRect().left)&&N<M;);N<M&&N--}for(y=l[M]=[],S=f?Math.min(N,M)*p-.5:i%N,b=N===Ms?0:f?M*g/N-.5:i/N|0,D=0,w=Ms,L=0;L<M;L++)C=L%N-S,T=b-(L/N|0),y[L]=P=d?Math.abs(d==="y"?T:C):SS(C*C+T*T),P>D&&(D=P),P<w&&(w=P);i==="random"&&kS(y),y.max=D-w,y.min=w,y.v=M=(parseFloat(t.amount)||parseFloat(t.each)*(N>M?M-1:d?d==="y"?M/N:N:Math.max(N,M/N))||0)*(i==="edges"?-1:1),y.b=M<0?a-M:a,y.u=Ai(t.amount||t.each)||0,n=n&&M<0?q2(n):n}return M=(y[m]-y.min)/y.max||0,bn(y.b+(n?n(M):M)*y.v)+y.u}},w0=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=bn(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Zs(n)?0:Ai(n))}},zS=function(e,t){var n=Pi(e),i,a;return!n&&As(e)&&(i=n=e.radius||Ms,e.values?(e=Br(e.values),(a=!Zs(e[0]))&&(i*=i)):e=w0(e.increment)),Xo(t,n?Dn(e)?function(l){return a=e(l),Math.abs(a-l)<=i?a:l}:function(l){for(var c=parseFloat(a?l.x:l),f=parseFloat(a?l.y:0),d=Ms,p=0,g=e.length,m,_;g--;)a?(m=e[g].x-c,_=e[g].y-f,m=m*m+_*_):m=Math.abs(e[g]-c),m<d&&(d=m,p=g);return p=!i||d<=i?e[p]:l,a||p===l||Zs(l)?p:p+Ai(l)}:w0(e))},VS=function(e,t,n,i){return Xo(Pi(e)?!t:n===!0?!!(n=0):!i,function(){return Pi(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},U2=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(a,l){return l(a)},i)}},F2=function(e,t){return function(n){return e(parseFloat(n))+(t||Ai(n))}},O2=function(e,t,n){return GS(e,t,0,1,n)},HS=function(e,t,n){return Xo(n,function(i){return e[~~t(i)]})},k2=function s(e,t,n){var i=t-e;return Pi(e)?HS(e,s(0,e.length),t):Xo(n,function(a){return(i+(a-e)%i)%i+e})},B2=function s(e,t,n){var i=t-e,a=i*2;return Pi(e)?HS(e,s(0,e.length-1),t):Xo(n,function(l){return l=(a+(l-e)%a)%a||0,e+(l>i?a-l:l)})},Cc=function(e){return e.replace(v2,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(x2);return VS(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},GS=function(e,t,n,i,a){var l=t-e,c=i-n;return Xo(a,function(f){return n+((f-e)/l*c||0)})},z2=function s(e,t,n,i){var a=isNaN(e+t)?0:function(_){return(1-_)*e+_*t};if(!a){var l=si(e),c={},f,d,p,g,m;if(n===!0&&(i=1)&&(n=null),l)e={p:e},t={p:t};else if(Pi(e)&&!Pi(t)){for(p=[],g=e.length,m=g-2,d=1;d<g;d++)p.push(s(e[d-1],e[d]));g--,a=function(x){x*=g;var M=Math.min(m,~~x);return p[M](x-M)},n=t}else i||(e=$l(Pi(e)?[]:{},e));if(!p){for(f in t)Xg.call(c,e,f,"get",t[f]);a=function(x){return jg(x,c)||(l?e.p:e)}}}return Xo(n,a)},vy=function(e,t,n){var i=e.labels,a=Ms,l,c,f;for(l in i)c=i[l]-t,c<0==!!n&&c&&a>(c=Math.abs(c))&&(f=l,a=c);return f},yr=function(e,t,n){var i=e.vars,a=i[t],l=Mn,c=e._ctx,f,d,p;if(a)return f=i[t+"Params"],d=i.callbackScope||e,n&&Fo.length&&rh(),c&&(Mn=c),p=f?a.apply(d,f):a.call(d),Mn=l,p},ec=function(e){return Bo(e),e.scrollTrigger&&e.scrollTrigger.kill(!!mi),e.progress()<1&&yr(e,"onInterrupt"),e},Fl,WS=[],XS=function(e){if(e)if(e=!e.name&&e.default||e,kg()||e.headless){var t=e.name,n=Dn(e),i=t&&!n&&e.init?function(){this._props=[]}:e,a={init:bc,render:jg,add:Xg,kill:iT,modifier:nT,rawVars:0},l={targetTest:0,get:0,getSetter:$g,aliases:{},register:0};if(Zl(),e!==i){if(pr[t])return;Tr(i,Tr(sh(e,a),l)),$l(i.prototype,$l(a,sh(e,l))),pr[i.prop=t]=i,e.targetTest&&(Bd.push(i),Vg[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}bS(t,i),e.register&&e.register(sr,i,tr)}else WS.push(e)},fn=255,tc={aqua:[0,fn,fn],lime:[0,fn,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,fn],navy:[0,0,128],white:[fn,fn,fn],olive:[128,128,0],yellow:[fn,fn,0],orange:[fn,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[fn,0,0],pink:[fn,192,203],cyan:[0,fn,fn],transparent:[fn,fn,fn,0]},pm=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*fn+.5|0},YS=function(e,t,n){var i=e?Zs(e)?[e>>16,e>>8&fn,e&fn]:0:tc.black,a,l,c,f,d,p,g,m,_,x;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),tc[e])i=tc[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),l=e.charAt(2),c=e.charAt(3),e="#"+a+a+l+l+c+c+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&fn,i&fn,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&fn,e&fn]}else if(e.substr(0,3)==="hsl"){if(i=x=e.match(hy),!t)f=+i[0]%360/360,d=+i[1]/100,p=+i[2]/100,l=p<=.5?p*(d+1):p+d-p*d,a=p*2-l,i.length>3&&(i[3]*=1),i[0]=pm(f+1/3,a,l),i[1]=pm(f,a,l),i[2]=pm(f-1/3,a,l);else if(~e.indexOf("="))return i=e.match(ES),n&&i.length<4&&(i[3]=1),i}else i=e.match(hy)||tc.transparent;i=i.map(Number)}return t&&!x&&(a=i[0]/fn,l=i[1]/fn,c=i[2]/fn,g=Math.max(a,l,c),m=Math.min(a,l,c),p=(g+m)/2,g===m?f=d=0:(_=g-m,d=p>.5?_/(2-g-m):_/(g+m),f=g===a?(l-c)/_+(l<c?6:0):g===l?(c-a)/_+2:(a-l)/_+4,f*=60),i[0]=~~(f+.5),i[1]=~~(d*100+.5),i[2]=~~(p*100+.5)),n&&i.length<4&&(i[3]=1),i},qS=function(e){var t=[],n=[],i=-1;return e.split(Oo).forEach(function(a){var l=a.match(Ul)||[];t.push.apply(t,l),n.push(i+=l.length+1)}),t.c=n,t},xy=function(e,t,n){var i="",a=(e+i).match(Oo),l=t?"hsla(":"rgba(",c=0,f,d,p,g;if(!a)return e;if(a=a.map(function(m){return(m=YS(m,t,1))&&l+(t?m[0]+","+m[1]+"%,"+m[2]+"%,"+m[3]:m.join(","))+")"}),n&&(p=qS(e),f=n.c,f.join(i)!==p.c.join(i)))for(d=e.replace(Oo,"1").split(Ul),g=d.length-1;c<g;c++)i+=d[c]+(~f.indexOf(c)?a.shift()||l+"0,0,0,0)":(p.length?p:a.length?a:n).shift());if(!d)for(d=e.split(Oo),g=d.length-1;c<g;c++)i+=d[c]+a[c];return i+d[g]},Oo=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in tc)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),V2=/hsl[a]?\(/,$S=function(e){var t=e.join(" "),n;if(Oo.lastIndex=0,Oo.test(t))return n=V2.test(t),e[1]=xy(e[1],n),e[0]=xy(e[0],n,qS(e[1])),!0},Rc,_r=function(){var s=Date.now,e=500,t=33,n=s(),i=n,a=1e3/240,l=a,c=[],f,d,p,g,m,_,x=function M(y){var S=s()-i,b=y===!0,C,T,P,L;if((S>e||S<0)&&(n+=S-t),i+=S,P=i-n,C=P-l,(C>0||b)&&(L=++g.frame,m=P-g.time*1e3,g.time=P=P/1e3,l+=C+(C>=a?4:a-C),T=1),b||(f=d(M)),T)for(_=0;_<c.length;_++)c[_](P,m,L,y)};return g={time:0,frame:0,tick:function(){x(!0)},deltaRatio:function(y){return m/(1e3/(y||60))},wake:function(){TS&&(!v0&&kg()&&(ds=v0=window,Bg=ds.document||{},wr.gsap=sr,(ds.gsapVersions||(ds.gsapVersions=[])).push(sr.version),AS(ih||ds.GreenSockGlobals||!ds.gsap&&ds||{}),WS.forEach(XS)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,f&&g.sleep(),d=p||function(y){return setTimeout(y,l-g.time*1e3+1|0)},Rc=1,x(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(f),Rc=0,d=bc},lagSmoothing:function(y,S){e=y||1/0,t=Math.min(S||33,e)},fps:function(y){a=1e3/(y||240),l=g.time*1e3+a},add:function(y,S,b){var C=S?function(T,P,L,D){y(T,P,L,D),g.remove(C)}:y;return g.remove(y),c[b?"unshift":"push"](C),Zl(),C},remove:function(y,S){~(S=c.indexOf(y))&&c.splice(S,1)&&_>=S&&_--},_listeners:c},g}(),Zl=function(){return!Rc&&_r.wake()},Wt={},H2=/^[\d.\-M][\d.\-,\s]/,G2=/["']/g,W2=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],a=1,l=n.length,c,f,d;a<l;a++)f=n[a],c=a!==l-1?f.lastIndexOf(","):f.length,d=f.substr(0,c),t[i]=isNaN(d)?d.replace(G2,"").trim():+d,i=f.substr(c+1).trim();return t},X2=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Y2=function(e){var t=(e+"").split("("),n=Wt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[W2(t[1])]:X2(e).split(",").map(LS)):Wt._CE&&H2.test(e)?Wt._CE("",e):n},q2=function(e){return function(t){return 1-e(1-t)}},Ta=function(e,t){return e&&(Dn(e)?e:Wt[e]||Y2(e))||t},Oa=function(e,t,n,i){n===void 0&&(n=function(f){return 1-t(1-f)}),i===void 0&&(i=function(f){return f<.5?t(f*2)/2:1-t((1-f)*2)/2});var a={easeIn:t,easeOut:n,easeInOut:i},l;return er(e,function(c){Wt[c]=wr[c]=a,Wt[l=c.toLowerCase()]=n;for(var f in a)Wt[l+(f==="easeIn"?".in":f==="easeOut"?".out":".inOut")]=Wt[c+"."+f]=a[f]}),a},jS=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},mm=function s(e,t,n){var i=t>=1?t:1,a=(n||(e?.3:.45))/(t<1?t:1),l=a/_0*(Math.asin(1/i)||0),c=function(p){return p===1?1:i*Math.pow(2,-10*p)*_2((p-l)*a)+1},f=e==="out"?c:e==="in"?function(d){return 1-c(1-d)}:jS(c);return a=_0/a,f.config=function(d,p){return s(e,d,p)},f},gm=function s(e,t){t===void 0&&(t=1.70158);var n=function(l){return l?--l*l*((t+1)*l+t)+1:0},i=e==="out"?n:e==="in"?function(a){return 1-n(1-a)}:jS(n);return i.config=function(a){return s(e,a)},i};er("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Oa(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Wt.Linear.easeNone=Wt.none=Wt.Linear.easeIn;Oa("Elastic",mm("in"),mm("out"),mm());(function(s,e){var t=1/e,n=2*t,i=2.5*t,a=function(c){return c<t?s*c*c:c<n?s*Math.pow(c-1.5/e,2)+.75:c<i?s*(c-=2.25/e)*c+.9375:s*Math.pow(c-2.625/e,2)+.984375};Oa("Bounce",function(l){return 1-a(1-l)},a)})(7.5625,2.75);Oa("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Oa("Circ",function(s){return-(SS(1-s*s)-1)});Oa("Sine",function(s){return s===1?1:-g2(s*p2)+1});Oa("Back",gm("in"),gm("out"),gm());Wt.SteppedEase=Wt.steps=wr.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),a=t?1:0,l=1-Ci;return function(c){return((i*Vc(0,l,c)|0)+a)*n}}};Tc.ease=Wt["quad.out"];er("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Hg+=s+","+s+"Params,"});var KS=function(e,t){this.id=m2++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:RS,this.set=t?t.getSetter:$g},Pc=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Kl(this,+t.duration,1,1),this.data=t.data,Mn&&(this._ctx=Mn,Mn.data.push(this)),Rc||_r.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Kl(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Zl(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(Th(this,n),!a._dp||a.parent||IS(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ps(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ci||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),PS(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+gy(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+gy(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*a,i):this._repeat?jl(this._tTime,a)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var a=this.parent&&this._ts?oh(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(Vc(-Math.abs(this._delay),this.totalDuration(),a),i!==!1),wh(this),b2(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Zl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ci&&(this._tTime-=Ci)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=bn(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ps(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ji(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?oh(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=E2);var i=mi;return mi=n,Wg(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),mi=i,this},e.globalTime=function(n){for(var i=this,a=arguments.length?n:i.rawTime();i;)a=i._start+a/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):a},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,_y(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,_y(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Ir(this,n),Ji(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ji(i)),this._dur||(this._zTime=-1e-8),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,a;return!!(!n||this._ts&&this._initted&&n.isActive()&&(a=n.rawTime(!0))>=i&&a<this.endTime(!0)-Ci)},e.eventCallback=function(n,i,a){var l=this.vars;return arguments.length>1?(i?(l[n]=i,a&&(l[n+"Params"]=a),n==="onUpdate"&&(this._onUpdate=i)):delete l[n],this):l[n]},e.then=function(n){var i=this,a=i._prom;return new Promise(function(l){var c=Dn(n)?n:DS,f=function(){var p=i.then;i.then=null,a&&a(),Dn(c)&&(c=c(i))&&(c.then||c===i)&&(i.then=p),l(c),i.then=p};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?f():i._prom=f})},e.kill=function(){ec(this)},s}();Tr(Pc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Qi=function(s){yS(e,s);function e(n,i){var a;return n===void 0&&(n={}),a=s.call(this,n)||this,a.labels={},a.smoothChildTiming=!!n.smoothChildTiming,a.autoRemoveChildren=!!n.autoRemoveChildren,a._sort=Ji(n.sortChildren),Cn&&ps(n.parent||Cn,Hs(a),i),n.reversed&&a.reverse(),n.paused&&a.paused(!0),n.scrollTrigger&&US(Hs(a),n.scrollTrigger),a}var t=e.prototype;return t.to=function(i,a,l){return fc(0,arguments,this),this},t.from=function(i,a,l){return fc(1,arguments,this),this},t.fromTo=function(i,a,l,c){return fc(2,arguments,this),this},t.set=function(i,a,l){return a.duration=0,a.parent=this,cc(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new Hn(i,a,Ir(this,l),1),this},t.call=function(i,a,l){return ps(this,Hn.delayedCall(0,i,a),l)},t.staggerTo=function(i,a,l,c,f,d,p){return l.duration=a,l.stagger=l.stagger||c,l.onComplete=d,l.onCompleteParams=p,l.parent=this,new Hn(i,l,Ir(this,f)),this},t.staggerFrom=function(i,a,l,c,f,d,p){return l.runBackwards=1,cc(l).immediateRender=Ji(l.immediateRender),this.staggerTo(i,a,l,c,f,d,p)},t.staggerFromTo=function(i,a,l,c,f,d,p,g){return c.startAt=l,cc(c).immediateRender=Ji(c.immediateRender),this.staggerTo(i,a,c,f,d,p,g)},t.render=function(i,a,l){var c=this._time,f=this._dirty?this.totalDuration():this._tDur,d=this._dur,p=i<=0?0:bn(i),g=this._zTime<0!=i<0&&(this._initted||!d),m,_,x,M,y,S,b,C,T,P,L,D;if(this!==Cn&&p>f&&i>=0&&(p=f),p!==this._tTime||l||g){if(c!==this._time&&d&&(p+=this._time-c,i+=this._time-c),m=p,T=this._start,C=this._ts,S=!C,g&&(d||(c=this._zTime),(i||!a)&&(this._zTime=i)),this._repeat){if(L=this._yoyo,y=d+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(y*100+i,a,l);if(m=bn(p%y),p===f?(M=this._repeat,m=d):(P=bn(p/y),M=~~P,M&&M===P&&(m=d,M--),m>d&&(m=d)),P=jl(this._tTime,y),!c&&this._tTime&&P!==M&&this._tTime-P*y-this._dur<=0&&(P=M),L&&M&1&&(m=d-m,D=1),M!==P&&!this._lock){var w=L&&P&1,N=w===(L&&M&1);if(M<P&&(w=!w),c=w?0:p%d?d:p,this._lock=1,this.render(c||(D?0:bn(M*y)),a,!d)._lock=0,this._tTime=p,!a&&this.parent&&yr(this,"onRepeat"),this.vars.repeatRefresh&&!D&&(this.invalidate()._lock=1,P=M),c&&c!==this._time||S!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,f=this._tDur,N&&(this._lock=2,c=w?d:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!D&&this.invalidate()),this._lock=0,!this._ts&&!S)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=L2(this,bn(c),bn(m)),b&&(p-=m-(m=b._start))),this._tTime=p,this._time=m,this._act=!!C,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,c=0),!c&&p&&d&&!a&&!P&&(yr(this,"onStart"),this._tTime!==p))return this;if(m>=c&&i>=0)for(_=this._first;_;){if(x=_._next,(_._act||m>=_._start)&&_._ts&&b!==_){if(_.parent!==this)return this.render(i,a,l);if(_.render(_._ts>0?(m-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(m-_._start)*_._ts,a,l),m!==this._time||!this._ts&&!S){b=0,x&&(p+=this._zTime=-1e-8);break}}_=x}else{_=this._last;for(var F=i<0?i:m;_;){if(x=_._prev,(_._act||F<=_._end)&&_._ts&&b!==_){if(_.parent!==this)return this.render(i,a,l);if(_.render(_._ts>0?(F-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(F-_._start)*_._ts,a,l||mi&&Wg(_)),m!==this._time||!this._ts&&!S){b=0,x&&(p+=this._zTime=F?-1e-8:Ci);break}}_=x}}if(b&&!a&&(this.pause(),b.render(m>=c?0:-1e-8)._zTime=m>=c?1:-1,this._ts))return this._start=T,wh(this),this.render(i,a,l);this._onUpdate&&!a&&yr(this,"onUpdate",!0),(p===f&&this._tTime>=this.totalDuration()||!p&&c)&&(T===this._start||Math.abs(C)!==Math.abs(this._ts))&&(this._lock||((i||!d)&&(p===f&&this._ts>0||!p&&this._ts<0)&&Bo(this,1),!a&&!(i<0&&!c)&&(p||c||!f)&&(yr(this,p===f&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<f&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,a){var l=this;if(Zs(a)||(a=Ir(this,a,i)),!(i instanceof Pc)){if(Pi(i))return i.forEach(function(c){return l.add(c,a)}),this;if(si(i))return this.addLabel(i,a);if(Dn(i))i=Hn.delayedCall(0,i);else return this}return this!==i?ps(this,i,a):this},t.getChildren=function(i,a,l,c){i===void 0&&(i=!0),a===void 0&&(a=!0),l===void 0&&(l=!0),c===void 0&&(c=-1e8);for(var f=[],d=this._first;d;)d._start>=c&&(d instanceof Hn?a&&f.push(d):(l&&f.push(d),i&&f.push.apply(f,d.getChildren(!0,a,l)))),d=d._next;return f},t.getById=function(i){for(var a=this.getChildren(1,1,1),l=a.length;l--;)if(a[l].vars.id===i)return a[l]},t.remove=function(i){return si(i)?this.removeLabel(i):Dn(i)?this.killTweensOf(i):(i.parent===this&&Eh(this,i),i===this._recent&&(this._recent=this._last),wa(this))},t.totalTime=function(i,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=bn(_r.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,a),this._forcing=0,this):this._tTime},t.addLabel=function(i,a){return this.labels[i]=Ir(this,a),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,a,l){var c=Hn.delayedCall(0,a||bc,l);return c.data="isPause",this._hasPause=1,ps(this,c,Ir(this,i))},t.removePause=function(i){var a=this._first;for(i=Ir(this,i);a;)a._start===i&&a.data==="isPause"&&Bo(a),a=a._next},t.killTweensOf=function(i,a,l){for(var c=this.getTweensOf(i,l),f=c.length;f--;)Po!==c[f]&&c[f].kill(i,a);return this},t.getTweensOf=function(i,a){for(var l=[],c=Br(i),f=this._first,d=Zs(a),p;f;)f instanceof Hn?w2(f._targets,c)&&(d?(!Po||f._initted&&f._ts)&&f.globalTime(0)<=a&&f.globalTime(f.totalDuration())>a:!a||f.isActive())&&l.push(f):(p=f.getTweensOf(c,a)).length&&l.push.apply(l,p),f=f._next;return l},t.tweenTo=function(i,a){a=a||{};var l=this,c=Ir(l,i),f=a,d=f.startAt,p=f.onStart,g=f.onStartParams,m=f.immediateRender,_,x=Hn.to(l,Tr({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:c,overwrite:"auto",duration:a.duration||Math.abs((c-(d&&"time"in d?d.time:l._time))/l.timeScale())||Ci,onStart:function(){if(l.pause(),!_){var y=a.duration||Math.abs((c-(d&&"time"in d?d.time:l._time))/l.timeScale());x._dur!==y&&Kl(x,y,0,1).render(x._time,!0,!0),_=1}p&&p.apply(x,g||[])}},a));return m?x.render(0):x},t.tweenFromTo=function(i,a,l){return this.tweenTo(a,Tr({startAt:{time:Ir(this,i)}},l))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),vy(this,Ir(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),vy(this,Ir(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ci)},t.shiftChildren=function(i,a,l){l===void 0&&(l=0);var c=this._first,f=this.labels,d;for(i=bn(i);c;)c._start>=l&&(c._start+=i,c._end+=i),c=c._next;if(a)for(d in f)f[d]>=l&&(f[d]+=i);return wa(this)},t.invalidate=function(i){var a=this._first;for(this._lock=0;a;)a.invalidate(i),a=a._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var a=this._first,l;a;)l=a._next,this.remove(a),a=l;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),wa(this)},t.totalDuration=function(i){var a=0,l=this,c=l._last,f=Ms,d,p,g;if(arguments.length)return l.timeScale((l._repeat<0?l.duration():l.totalDuration())/(l.reversed()?-i:i));if(l._dirty){for(g=l.parent;c;)d=c._prev,c._dirty&&c.totalDuration(),p=c._start,p>f&&l._sort&&c._ts&&!l._lock?(l._lock=1,ps(l,c,p-c._delay,1)._lock=0):f=p,p<0&&c._ts&&(a-=p,(!g&&!l._dp||g&&g.smoothChildTiming)&&(l._start+=bn(p/l._ts),l._time-=p,l._tTime-=p),l.shiftChildren(-p,!1,-1/0),f=0),c._end>a&&c._ts&&(a=c._end),c=d;Kl(l,l===Cn&&l._time>a?l._time:a,1,1),l._dirty=0}return l._tDur},e.updateRoot=function(i){if(Cn._ts&&(PS(Cn,oh(i,Cn)),CS=_r.frame),_r.frame>=py){py+=Mr.autoSleep||120;var a=Cn._first;if((!a||!a._ts)&&Mr.autoSleep&&_r._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||_r.sleep()}}},e}(Pc);Tr(Qi.prototype,{_lock:0,_hasPause:0,_forcing:0});var $2=function(e,t,n,i,a,l,c){var f=new tr(this._pt,e,t,0,1,nM,null,a),d=0,p=0,g,m,_,x,M,y,S,b;for(f.b=n,f.e=i,n+="",i+="",(S=~i.indexOf("random("))&&(i=Cc(i)),l&&(b=[n,i],l(b,e,t),n=b[0],i=b[1]),m=n.match(dm)||[];g=dm.exec(i);)x=g[0],M=i.substring(d,g.index),_?_=(_+1)%5:M.substr(-5)==="rgba("&&(_=1),x!==m[p++]&&(y=parseFloat(m[p-1])||0,f._pt={_next:f._pt,p:M||p===1?M:",",s:y,c:x.charAt(1)==="="?kl(y,x)-y:parseFloat(x)-y,m:_&&_<4?Math.round:0},d=dm.lastIndex);return f.c=d<i.length?i.substring(d,i.length):"",f.fp=c,(wS.test(i)||S)&&(f.e=0),this._pt=f,f},Xg=function(e,t,n,i,a,l,c,f,d,p){Dn(i)&&(i=i(a||0,e,l));var g=e[t],m=n!=="get"?n:Dn(g)?d?e[t.indexOf("set")||!Dn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](d):e[t]():g,_=Dn(g)?d?J2:eM:qg,x;if(si(i)&&(~i.indexOf("random(")&&(i=Cc(i)),i.charAt(1)==="="&&(x=kl(m,i)+(Ai(m)||0),(x||x===0)&&(i=x))),!p||m!==i||T0)return!isNaN(m*i)&&i!==""?(x=new tr(this._pt,e,t,+m||0,i-(m||0),typeof g=="boolean"?tT:tM,0,_),d&&(x.fp=d),c&&x.modifier(c,this,e),this._pt=x):(!g&&!(t in e)&&zg(t,i),$2.call(this,e,t,m,i,_,f||Mr.stringFilter,d))},j2=function(e,t,n,i,a){if(Dn(e)&&(e=dc(e,a,t,n,i)),!As(e)||e.style&&e.nodeType||Pi(e)||MS(e))return si(e)?dc(e,a,t,n,i):e;var l={},c;for(c in e)l[c]=dc(e[c],a,t,n,i);return l},ZS=function(e,t,n,i,a,l){var c,f,d,p;if(pr[e]&&(c=new pr[e]).init(a,c.rawVars?t[e]:j2(t[e],i,a,l,n),n,i,l)!==!1&&(n._pt=f=new tr(n._pt,a,e,0,1,c.render,c,0,c.priority),n!==Fl))for(d=n._ptLookup[n._targets.indexOf(a)],p=c._props.length;p--;)d[c._props[p]]=f;return c},Po,T0,Yg=function s(e,t,n){var i=e.vars,a=i.ease,l=i.startAt,c=i.immediateRender,f=i.lazy,d=i.onUpdate,p=i.runBackwards,g=i.yoyoEase,m=i.keyframes,_=i.autoRevert,x=e._dur,M=e._startAt,y=e._targets,S=e.parent,b=S&&S.data==="nested"?S.vars.targets:y,C=e._overwrite==="auto"&&!Fg,T=e.timeline,P=i.easeReverse||g,L,D,w,N,F,B,z,re,ie,q,ee,W,Y;if(T&&(!m||!a)&&(a="none"),e._ease=Ta(a,Tc.ease),e._rEase=P&&(Ta(P)||e._ease),e._from=!T&&!!i.runBackwards,e._from&&(e.ratio=1),!T||m&&!i.stagger){if(re=y[0]?Ea(y[0]).harness:0,W=re&&i[re.prop],L=sh(i,Vg),M&&(M._zTime<0&&M.progress(1),t<0&&p&&c&&!_?M.render(-1,!0):M.revert(p&&x?kd:M2),M._lazy=0),l){if(Bo(e._startAt=Hn.set(y,Tr({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:!M&&Ji(f),startAt:null,delay:0,onUpdate:d&&function(){return yr(e,"onUpdate")},stagger:0},l))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(mi||!c&&!_)&&e._startAt.revert(kd),c&&x&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(p&&x&&!M){if(t&&(c=!1),w=Tr({overwrite:!1,data:"isFromStart",lazy:c&&!M&&Ji(f),immediateRender:c,stagger:0,parent:S},L),W&&(w[re.prop]=W),Bo(e._startAt=Hn.set(y,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(mi?e._startAt.revert(kd):e._startAt.render(-1,!0)),e._zTime=t,!c)s(e._startAt,Ci,Ci);else if(!t)return}for(e._pt=e._ptCache=0,f=x&&Ji(f)||f&&!x,D=0;D<y.length;D++){if(F=y[D],z=F._gsap||Gg(y)[D]._gsap,e._ptLookup[D]=q={},x0[z.id]&&Fo.length&&rh(),ee=b===y?D:b.indexOf(F),re&&(ie=new re).init(F,W||L,e,ee,b)!==!1&&(e._pt=N=new tr(e._pt,F,ie.name,0,1,ie.render,ie,0,ie.priority),ie._props.forEach(function(te){q[te]=N}),ie.priority&&(B=1)),!re||W)for(w in L)pr[w]&&(ie=ZS(w,L,e,ee,F,b))?ie.priority&&(B=1):q[w]=N=Xg.call(e,F,w,"get",L[w],ee,b,0,i.stringFilter);e._op&&e._op[D]&&e.kill(F,e._op[D]),C&&e._pt&&(Po=e,Cn.killTweensOf(F,q,e.globalTime(t)),Y=!e.parent,Po=0),e._pt&&f&&(x0[z.id]=1)}B&&iM(e),e._onInit&&e._onInit(e)}e._onUpdate=d,e._initted=(!e._op||e._pt)&&!Y,m&&t<=0&&T.render(Ms,!0,!0)},K2=function(e,t,n,i,a,l,c,f){var d=(e._pt&&e._ptCache||(e._ptCache={}))[t],p,g,m,_;if(!d)for(d=e._ptCache[t]=[],m=e._ptLookup,_=e._targets.length;_--;){if(p=m[_][t],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==t&&p.fp!==t;)p=p._next;if(!p)return T0=1,e.vars[t]="+=0",Yg(e,c),T0=0,f?Ac(t+" not eligible for reset. Try splitting into individual properties"):1;d.push(p)}for(_=d.length;_--;)g=d[_],p=g._pt||g,p.s=(i||i===0)&&!a?i:p.s+(i||0)+l*p.c,p.c=n-p.s,g.e&&(g.e=In(n)+Ai(g.e)),g.b&&(g.b=p.s+Ai(g.b))},Z2=function(e,t){var n=e[0]?Ea(e[0]).harness:0,i=n&&n.aliases,a,l,c,f;if(!i)return t;a=$l({},t);for(l in i)if(l in a)for(f=i[l].split(","),c=f.length;c--;)a[f[c]]=a[l];return a},Q2=function(e,t,n,i){var a=t.ease||i||"power1.inOut",l,c;if(Pi(t))c=n[e]||(n[e]=[]),t.forEach(function(f,d){return c.push({t:d/(t.length-1)*100,v:f,e:a})});else for(l in t)c=n[l]||(n[l]=[]),l==="ease"||c.push({t:parseFloat(e),v:t[l],e:a})},dc=function(e,t,n,i,a){return Dn(e)?e.call(t,n,i,a):si(e)&&~e.indexOf("random(")?Cc(e):e},QS=Hg+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",JS={};er(QS+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return JS[s]=1});var Hn=function(s){yS(e,s);function e(n,i,a,l){var c;typeof i=="number"&&(a.duration=i,i=a,a=null),c=s.call(this,l?i:cc(i))||this;var f=c.vars,d=f.duration,p=f.delay,g=f.immediateRender,m=f.stagger,_=f.overwrite,x=f.keyframes,M=f.defaults,y=f.scrollTrigger,S=i.parent||Cn,b=(Pi(n)||MS(n)?Zs(n[0]):"length"in i)?[n]:Br(n),C,T,P,L,D,w,N,F;if(c._targets=b.length?Gg(b):Ac("GSAP target "+n+" not found. https://gsap.com",!Mr.nullTargetWarn)||[],c._ptLookup=[],c._overwrite=_,x||m||Wf(d)||Wf(p)){i=c.vars;var B=i.easeReverse||i.yoyoEase;if(C=c.timeline=new Qi({data:"nested",defaults:M||{},targets:S&&S.data==="nested"?S.vars.targets:b}),C.kill(),C.parent=C._dp=Hs(c),C._start=0,m||Wf(d)||Wf(p)){if(L=b.length,N=m&&BS(m),As(m))for(D in m)~QS.indexOf(D)&&(F||(F={}),F[D]=m[D]);for(T=0;T<L;T++)P=sh(i,JS),P.stagger=0,B&&(P.easeReverse=B),F&&$l(P,F),w=b[T],P.duration=+dc(d,Hs(c),T,w,b),P.delay=(+dc(p,Hs(c),T,w,b)||0)-c._delay,!m&&L===1&&P.delay&&(c._delay=p=P.delay,c._start+=p,P.delay=0),C.to(w,P,N?N(T,w,b):0),C._ease=Wt.none;C.duration()?d=p=0:c.timeline=0}else if(x){cc(Tr(C.vars.defaults,{ease:"none"})),C._ease=Ta(x.ease||i.ease||"none");var z=0,re,ie,q;if(Pi(x))x.forEach(function(ee){return C.to(b,ee,">")}),C.duration();else{P={};for(D in x)D==="ease"||D==="easeEach"||Q2(D,x[D],P,x.easeEach);for(D in P)for(re=P[D].sort(function(ee,W){return ee.t-W.t}),z=0,T=0;T<re.length;T++)ie=re[T],q={ease:ie.e,duration:(ie.t-(T?re[T-1].t:0))/100*d},q[D]=ie.v,C.to(b,q,z),z+=q.duration;C.duration()<d&&C.to({},{duration:d-C.duration()})}}d||c.duration(d=C.duration())}else c.timeline=0;return _===!0&&!Fg&&(Po=Hs(c),Cn.killTweensOf(b),Po=0),ps(S,Hs(c),a),i.reversed&&c.reverse(),i.paused&&c.paused(!0),(g||!d&&!x&&c._start===bn(S._time)&&Ji(g)&&C2(Hs(c))&&S.data!=="nested")&&(c._tTime=-1e-8,c.render(Math.max(0,-p)||0)),y&&US(Hs(c),y),c}var t=e.prototype;return t.render=function(i,a,l){var c=this._time,f=this._tDur,d=this._dur,p=i<0,g=i>f-Ci&&!p?f:i<Ci?0:i,m,_,x,M,y,S,b,C;if(!d)P2(this,i,a,l);else if(g!==this._tTime||!i||l||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p||this._lazy){if(m=g,C=this.timeline,this._repeat){if(M=d+this._rDelay,this._repeat<-1&&p)return this.totalTime(M*100+i,a,l);if(m=bn(g%M),g===f?(x=this._repeat,m=d):(y=bn(g/M),x=~~y,x&&x===y?(m=d,x--):m>d&&(m=d)),S=this._yoyo&&x&1,S&&(m=d-m),y=jl(this._tTime,M),m===c&&!l&&this._initted&&x===y)return this._tTime=g,this;x!==y&&this.vars.repeatRefresh&&!S&&!this._lock&&m!==M&&this._initted&&(this._lock=l=1,this.render(bn(M*x),!0).invalidate()._lock=0)}if(!this._initted){if(FS(this,p?i:m,l,a,g))return this._tTime=0,this;if(c!==this._time&&!(l&&this.vars.repeatRefresh&&x!==y))return this;if(d!==this._dur)return this.render(i,a,l)}if(this._rEase){var T=m<c;if(T!==this._inv){var P=T?c:d-c;this._inv=T,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=c,this._invRecip=P?(T?-1:1)/P:0,this._invScale=T?-this.ratio:1-this.ratio,this._invEase=T?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((m-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(m/d);if(this._from&&(this.ratio=b=1-b),this._tTime=g,this._time=m,!this._act&&this._ts&&(this._act=1,this._lazy=0),!c&&g&&!a&&!y&&(yr(this,"onStart"),this._tTime!==g))return this;for(_=this._pt;_;)_.r(b,_.d),_=_._next;C&&C.render(i<0?i:C._dur*C._ease(m/this._dur),a,l)||this._startAt&&(this._zTime=i),this._onUpdate&&!a&&(p&&y0(this,i,a,l),yr(this,"onUpdate")),this._repeat&&x!==y&&this.vars.onRepeat&&!a&&this.parent&&yr(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(p&&!this._onUpdate&&y0(this,i,!0,!0),(i||!d)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&Bo(this,1),!a&&!(p&&!c)&&(g||c||S)&&(yr(this,g===f?"onComplete":"onReverseComplete",!0),this._prom&&!(g<f&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,a,l,c,f){Rc||_r.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||Yg(this,d),p=this._ease(d/this._dur),K2(this,i,a,l,c,p,d,f)?this.resetTo(i,a,l,c,1):(Th(this,0),this.parent||NS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,a){if(a===void 0&&(a="all"),!i&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?ec(this):this.scrollTrigger&&this.scrollTrigger.kill(!!mi),this;if(this.timeline){var l=this.timeline.totalDuration();return this.timeline.killTweensOf(i,a,Po&&Po.vars.overwrite!==!0)._first||ec(this),this.parent&&l!==this.timeline.totalDuration()&&Kl(this,this._dur*this.timeline._tDur/l,0,1),this}var c=this._targets,f=i?Br(i):c,d=this._ptLookup,p=this._pt,g,m,_,x,M,y,S;if((!a||a==="all")&&A2(c,f))return a==="all"&&(this._pt=0),ec(this);for(g=this._op=this._op||[],a!=="all"&&(si(a)&&(M={},er(a,function(b){return M[b]=1}),a=M),a=Z2(c,a)),S=c.length;S--;)if(~f.indexOf(c[S])){m=d[S],a==="all"?(g[S]=a,x=m,_={}):(_=g[S]=g[S]||{},x=a);for(M in x)y=m&&m[M],y&&((!("kill"in y.d)||y.d.kill(M)===!0)&&Eh(this,y,"_pt"),delete m[M]),_!=="all"&&(_[M]=1)}return this._initted&&!this._pt&&p&&ec(this),this},e.to=function(i,a){return new e(i,a,arguments[2])},e.from=function(i,a){return fc(1,arguments)},e.delayedCall=function(i,a,l,c){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:a,onReverseComplete:a,onCompleteParams:l,onReverseCompleteParams:l,callbackScope:c})},e.fromTo=function(i,a,l){return fc(2,arguments)},e.set=function(i,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(i,a)},e.killTweensOf=function(i,a,l){return Cn.killTweensOf(i,a,l)},e}(Pc);Tr(Hn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});er("staggerTo,staggerFrom,staggerFromTo",function(s){Hn[s]=function(){var e=new Qi,t=M0.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var qg=function(e,t,n){return e[t]=n},eM=function(e,t,n){return e[t](n)},J2=function(e,t,n,i){return e[t](i.fp,n)},eT=function(e,t,n){return e.setAttribute(t,n)},$g=function(e,t){return Dn(e[t])?eM:Og(e[t])&&e.setAttribute?eT:qg},tM=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},tT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},nM=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},jg=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},nT=function(e,t,n,i){for(var a=this._pt,l;a;)l=a._next,a.p===i&&a.modifier(e,t,n),a=l},iT=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Eh(this,t,"_pt"):t.dep||(n=1),t=i;return!n},rT=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},iM=function(e){for(var t=e._pt,n,i,a,l;t;){for(n=t._next,i=a;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:l)?t._prev._next=t:a=t,(t._next=i)?i._prev=t:l=t,t=n}e._pt=a},tr=function(){function s(t,n,i,a,l,c,f,d,p){this.t=n,this.s=a,this.c=l,this.p=i,this.r=c||tM,this.d=f||this,this.set=d||qg,this.pr=p||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,a){this.mSet=this.mSet||this.set,this.set=rT,this.m=n,this.mt=a,this.tween=i},s}();er(Hg+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Vg[s]=1});wr.TweenMax=wr.TweenLite=Hn;wr.TimelineLite=wr.TimelineMax=Qi;Cn=new Qi({sortChildren:!1,defaults:Tc,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Mr.stringFilter=$S;var Aa=[],zd={},sT=[],yy=0,oT=0,_m=function(e){return(zd[e]||sT).map(function(t){return t()})},A0=function(){var e=Date.now(),t=[];e-yy>2&&(_m("matchMediaInit"),Aa.forEach(function(n){var i=n.queries,a=n.conditions,l,c,f,d;for(c in i)l=ds.matchMedia(i[c]).matches,l&&(f=1),l!==a[c]&&(a[c]=l,d=1);d&&(n.revert(),f&&t.push(n))}),_m("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),yy=e,_m("matchMedia"))},rM=function(){function s(t,n){this.selector=n&&E0(n),this.data=[],this._r=[],this.isReverted=!1,this.id=oT++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,a){Dn(n)&&(a=i,i=n,n=Dn);var l=this,c=function(){var d=Mn,p=l.selector,g;return d&&d!==l&&d.data.push(l),a&&(l.selector=E0(a)),Mn=l,g=i.apply(l,arguments),Dn(g)&&l._r.push(g),Mn=d,l.selector=p,l.isReverted=!1,g};return l.last=c,n===Dn?c(l,function(f){return l.add(null,f)}):n?l[n]=c:c},e.ignore=function(n){var i=Mn;Mn=null,n(this),Mn=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Hn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var a=this;if(n?function(){for(var c=a.getTweens(),f=a.data.length,d;f--;)d=a.data[f],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(p){return c.splice(c.indexOf(p),1)}));for(c.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,g){return g.g-p.g||-1/0}).forEach(function(p){return p.t.revert(n)}),f=a.data.length;f--;)d=a.data[f],d instanceof Qi?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof Hn)&&d.revert&&d.revert(n);a._r.forEach(function(p){return p(n,a)}),a.isReverted=!0}():this.data.forEach(function(c){return c.kill&&c.kill()}),this.clear(),i)for(var l=Aa.length;l--;)Aa[l].id===this.id&&Aa.splice(l,1)},e.revert=function(n){this.kill(n||{})},s}(),aT=function(){function s(t){this.contexts=[],this.scope=t,Mn&&Mn.data.push(this)}var e=s.prototype;return e.add=function(n,i,a){As(n)||(n={matches:n});var l=new rM(0,a||this.scope),c=l.conditions={},f,d,p;Mn&&!l.selector&&(l.selector=Mn.selector),this.contexts.push(l),i=l.add("onMatch",i),l.queries=n;for(d in n)d==="all"?p=1:(f=ds.matchMedia(n[d]),f&&(Aa.indexOf(l)<0&&Aa.push(l),(c[d]=f.matches)&&(p=1),f.addListener?f.addListener(A0):f.addEventListener("change",A0)));return p&&i(l,function(g){return l.add(null,g)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),ah={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return XS(i)})},timeline:function(e){return new Qi(e)},getTweensOf:function(e,t){return Cn.getTweensOf(e,t)},getProperty:function(e,t,n,i){si(e)&&(e=Br(e)[0]);var a=Ea(e||{}).get,l=n?DS:LS;return n==="native"&&(n=""),e&&(t?l((pr[t]&&pr[t].get||a)(e,t,n,i)):function(c,f,d){return l((pr[c]&&pr[c].get||a)(e,c,f,d))})},quickSetter:function(e,t,n){if(e=Br(e),e.length>1){var i=e.map(function(p){return sr.quickSetter(p,t,n)}),a=i.length;return function(p){for(var g=a;g--;)i[g](p)}}e=e[0]||{};var l=pr[t],c=Ea(e),f=c.harness&&(c.harness.aliases||{})[t]||t,d=l?function(p){var g=new l;Fl._pt=0,g.init(e,n?p+n:p,Fl,0,[e]),g.render(1,g),Fl._pt&&jg(1,Fl)}:c.set(e,f);return l?d:function(p){return d(e,f,n?p+n:p,c,1)}},quickTo:function(e,t,n){var i,a=sr.to(e,Tr((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),l=function(f,d,p){return a.resetTo(t,f,d,p)};return l.tween=a,l},isTweening:function(e){return Cn.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ta(e.ease,Tc.ease)),my(Tc,e||{})},config:function(e){return my(Mr,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,a=e.defaults,l=e.extendTimeline;(i||"").split(",").forEach(function(c){return c&&!pr[c]&&!wr[c]&&Ac(t+" effect requires "+c+" plugin.")}),hm[t]=function(c,f,d){return n(Br(c),Tr(f||{},a),d)},l&&(Qi.prototype[t]=function(c,f,d){return this.add(hm[t](c,As(f)?f:(d=f)&&{},this),d)})},registerEase:function(e,t){Wt[e]=Ta(t)},parseEase:function(e,t){return arguments.length?Ta(e,t):Wt},getById:function(e){return Cn.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Qi(e),i,a;for(n.smoothChildTiming=Ji(e.smoothChildTiming),Cn.remove(n),n._dp=0,n._time=n._tTime=Cn._time,i=Cn._first;i;)a=i._next,(t||!(!i._dur&&i instanceof Hn&&i.vars.onComplete===i._targets[0]))&&ps(n,i,i._start-i._delay),i=a;return ps(Cn,n,0),n},context:function(e,t){return e?new rM(e,t):Mn},matchMedia:function(e){return new aT(e)},matchMediaRefresh:function(){return Aa.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||A0()},addEventListener:function(e,t){var n=zd[e]||(zd[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=zd[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:k2,wrapYoyo:B2,distribute:BS,random:VS,snap:zS,normalize:O2,getUnit:Ai,clamp:N2,splitColor:YS,toArray:Br,selector:E0,mapRange:GS,pipe:U2,unitize:F2,interpolate:z2,shuffle:kS},install:AS,effects:hm,ticker:_r,updateRoot:Qi.updateRoot,plugins:pr,globalTimeline:Cn,core:{PropTween:tr,globals:bS,Tween:Hn,Timeline:Qi,Animation:Pc,getCache:Ea,_removeLinkedListItem:Eh,reverting:function(){return mi},context:function(e){return e&&Mn&&(Mn.data.push(e),e._ctx=Mn),Mn},suppressOverwrites:function(e){return Fg=e}}};er("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return ah[s]=Hn[s]});_r.add(Qi.updateRoot);Fl=ah.to({},{duration:0});var lT=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},uT=function(e,t){var n=e._targets,i,a,l;for(i in t)for(a=n.length;a--;)l=e._ptLookup[a][i],l&&(l=l.d)&&(l._pt&&(l=lT(l,i)),l&&l.modifier&&l.modifier(t[i],e,n[a],i))},vm=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,a,l){l._onInit=function(c){var f,d;if(si(a)&&(f={},er(a,function(p){return f[p]=1}),a=f),t){f={};for(d in a)f[d]=t(a[d]);a=f}uT(c,a)}}}},sr=ah.registerPlugin({name:"attr",init:function(e,t,n,i,a){var l,c,f;this.tween=n;for(l in t)f=e.getAttribute(l)||"",c=this.add(e,"setAttribute",(f||0)+"",t[l],i,a,0,0,l),c.op=l,c.b=f,this._props.push(l)},render:function(e,t){for(var n=t._pt;n;)mi?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},vm("roundProps",w0),vm("modifiers"),vm("snap",zS))||ah;Hn.version=Qi.version=sr.version="3.15.0";TS=1;kg()&&Zl();Wt.Power0;Wt.Power1;Wt.Power2;Wt.Power3;Wt.Power4;Wt.Linear;Wt.Quad;Wt.Cubic;Wt.Quart;Wt.Quint;Wt.Strong;Wt.Elastic;Wt.Back;Wt.SteppedEase;Wt.Bounce;Wt.Sine;Wt.Expo;Wt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Sy,Lo,Bl,Kg,xa,My,Zg,cT=function(){return typeof window<"u"},Qs={},ha=180/Math.PI,zl=Math.PI/180,ll=Math.atan2,Ey=1e8,Qg=/([A-Z])/g,fT=/(left|right|width|margin|padding|x)/i,dT=/[\s,\(]\S/,_s={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},b0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},hT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},pT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},mT=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},gT=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},sM=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},oM=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},_T=function(e,t,n){return e.style[t]=n},vT=function(e,t,n){return e.style.setProperty(t,n)},xT=function(e,t,n){return e._gsap[t]=n},yT=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},ST=function(e,t,n,i,a){var l=e._gsap;l.scaleX=l.scaleY=n,l.renderTransform(a,l)},MT=function(e,t,n,i,a){var l=e._gsap;l[t]=n,l.renderTransform(a,l)},Rn="transform",nr=Rn+"Origin",ET=function s(e,t){var n=this,i=this.target,a=i.style,l=i._gsap;if(e in Qs&&a){if(this.tfm=this.tfm||{},e!=="transform")e=_s[e]||e,~e.indexOf(",")?e.split(",").forEach(function(c){return n.tfm[c]=Gs(i,c)}):this.tfm[e]=l.x?l[e]:Gs(i,e),e===nr&&(this.tfm.zOrigin=l.zOrigin);else return _s.transform.split(",").forEach(function(c){return s.call(n,c,t)});if(this.props.indexOf(Rn)>=0)return;l.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(nr,t,"")),e=Rn}(a||t)&&this.props.push(e,t,a[e])},aM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},wT=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,a,l;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?t[e[a]](e[a+2]):t[e[a]]=e[a+2]:e[a+2]?n[e[a]]=e[a+2]:n.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(Qg,"-$1").toLowerCase());if(this.tfm){for(l in this.tfm)i[l]=this.tfm[l];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=Zg(),(!a||!a.isStart)&&!n[Rn]&&(aM(n),i.zOrigin&&n[nr]&&(n[nr]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},lM=function(e,t){var n={target:e,props:[],revert:wT,save:ET};return e._gsap||sr.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},uM,C0=function(e,t){var n=Lo.createElementNS?Lo.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Lo.createElement(e);return n&&n.style?n:Lo.createElement(e)},Sr=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Qg,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Ql(t)||t,1)||""},wy="O,Moz,ms,Ms,Webkit".split(","),Ql=function(e,t,n){var i=t||xa,a=i.style,l=5;if(e in a&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);l--&&!(wy[l]+e in a););return l<0?null:(l===3?"ms":l>=0?wy[l]:"")+e},R0=function(){cT()&&window.document&&(Sy=window,Lo=Sy.document,Bl=Lo.documentElement,xa=C0("div")||{style:{}},C0("div"),Rn=Ql(Rn),nr=Rn+"Origin",xa.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",uM=!!Ql("perspective"),Zg=sr.core.reverting,Kg=1)},Ty=function(e){var t=e.ownerSVGElement,n=C0("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),a;i.style.display="block",n.appendChild(i),Bl.appendChild(n);try{a=i.getBBox()}catch{}return n.removeChild(i),Bl.removeChild(n),a},Ay=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},cM=function(e){var t,n;try{t=e.getBBox()}catch{t=Ty(e),n=1}return t&&(t.width||t.height)||n||(t=Ty(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ay(e,["x","cx","x1"])||0,y:+Ay(e,["y","cy","y1"])||0,width:0,height:0}:t},fM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&cM(e))},zo=function(e,t){if(t){var n=e.style,i;t in Qs&&t!==nr&&(t=Rn),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Qg,"-$1").toLowerCase())):n.removeAttribute(t)}},Do=function(e,t,n,i,a,l){var c=new tr(e._pt,t,n,0,1,l?oM:sM);return e._pt=c,c.b=i,c.e=a,e._props.push(n),c},by={deg:1,rad:1,turn:1},TT={grid:1,flex:1},Vo=function s(e,t,n,i){var a=parseFloat(n)||0,l=(n+"").trim().substr((a+"").length)||"px",c=xa.style,f=fT.test(t),d=e.tagName.toLowerCase()==="svg",p=(d?"client":"offset")+(f?"Width":"Height"),g=100,m=i==="px",_=i==="%",x,M,y,S;if(i===l||!a||by[i]||by[l])return a;if(l!=="px"&&!m&&(a=s(e,t,n,"px")),S=e.getCTM&&fM(e),(_||l==="%")&&(Qs[t]||~t.indexOf("adius")))return x=S?e.getBBox()[f?"width":"height"]:e[p],In(_?a/x*g:a/100*x);if(c[f?"width":"height"]=g+(m?l:i),M=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!d?e:e.parentNode,S&&(M=(e.ownerSVGElement||{}).parentNode),(!M||M===Lo||!M.appendChild)&&(M=Lo.body),y=M._gsap,y&&_&&y.width&&f&&y.time===_r.time&&!y.uncache)return In(a/y.width*g);if(_&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=g+i,x=e[p],b?e.style[t]=b:zo(e,t)}else(_||l==="%")&&!TT[Sr(M,"display")]&&(c.position=Sr(e,"position")),M===e&&(c.position="static"),M.appendChild(xa),x=xa[p],M.removeChild(xa),c.position="absolute";return f&&_&&(y=Ea(M),y.time=_r.time,y.width=M[p]),In(m?x*a/g:x&&a?g/x*a:0)},Gs=function(e,t,n,i){var a;return Kg||R0(),t in _s&&t!=="transform"&&(t=_s[t],~t.indexOf(",")&&(t=t.split(",")[0])),Qs[t]&&t!=="transform"?(a=Dc(e,i),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:uh(Sr(e,nr))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||i||~(a+"").indexOf("calc("))&&(a=lh[t]&&lh[t](e,t,n)||Sr(e,t)||RS(e,t)||(t==="opacity"?1:0))),n&&!~(a+"").trim().indexOf(" ")?Vo(e,t,a,n)+n:a},AT=function(e,t,n,i){if(!n||n==="none"){var a=Ql(t,e,1),l=a&&Sr(e,a,1);l&&l!==n?(t=a,n=l):t==="borderColor"&&(n=Sr(e,"borderTopColor"))}var c=new tr(this._pt,e.style,t,0,1,nM),f=0,d=0,p,g,m,_,x,M,y,S,b,C,T,P;if(c.b=n,c.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Sr(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(M=e.style[t],e.style[t]=i,i=Sr(e,t)||i,M?e.style[t]=M:zo(e,t)),p=[n,i],$S(p),n=p[0],i=p[1],m=n.match(Ul)||[],P=i.match(Ul)||[],P.length){for(;g=Ul.exec(i);)y=g[0],b=i.substring(f,g.index),x?x=(x+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(x=1),y!==(M=m[d++]||"")&&(_=parseFloat(M)||0,T=M.substr((_+"").length),y.charAt(1)==="="&&(y=kl(_,y)+T),S=parseFloat(y),C=y.substr((S+"").length),f=Ul.lastIndex-C.length,C||(C=C||Mr.units[t]||T,f===i.length&&(i+=C,c.e+=C)),T!==C&&(_=Vo(e,t,M,C)||0),c._pt={_next:c._pt,p:b||d===1?b:",",s:_,c:S-_,m:x&&x<4||t==="zIndex"?Math.round:0});c.c=f<i.length?i.substring(f,i.length):""}else c.r=t==="display"&&i==="none"?oM:sM;return wS.test(i)&&(c.e=0),this._pt=c,c},Cy={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},bT=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Cy[n]||n,t[1]=Cy[i]||i,t.join(" ")},CT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,a=t.u,l=n._gsap,c,f,d;if(a==="all"||a===!0)i.cssText="",f=1;else for(a=a.split(","),d=a.length;--d>-1;)c=a[d],Qs[c]&&(f=1,c=c==="transformOrigin"?nr:Rn),zo(n,c);f&&(zo(n,Rn),l&&(l.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Dc(n,1),l.uncache=1,aM(i)))}},lh={clearProps:function(e,t,n,i,a){if(a.data!=="isFromStart"){var l=e._pt=new tr(e._pt,t,n,0,0,CT);return l.u=i,l.pr=-10,l.tween=a,e._props.push(n),1}}},Lc=[1,0,0,1,0,0],dM={},hM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Ry=function(e){var t=Sr(e,Rn);return hM(t)?Lc:t.substr(7).match(ES).map(In)},Jg=function(e,t){var n=e._gsap||Ea(e),i=e.style,a=Ry(e),l,c,f,d;return n.svg&&e.getAttribute("transform")?(f=e.transform.baseVal.consolidate().matrix,a=[f.a,f.b,f.c,f.d,f.e,f.f],a.join(",")==="1,0,0,1,0,0"?Lc:a):(a===Lc&&!e.offsetParent&&e!==Bl&&!n.svg&&(f=i.display,i.display="block",l=e.parentNode,(!l||!e.offsetParent&&!e.getBoundingClientRect().width)&&(d=1,c=e.nextElementSibling,Bl.appendChild(e)),a=Ry(e),f?i.display=f:zo(e,"display"),d&&(c?l.insertBefore(e,c):l?l.appendChild(e):Bl.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},P0=function(e,t,n,i,a,l){var c=e._gsap,f=a||Jg(e,!0),d=c.xOrigin||0,p=c.yOrigin||0,g=c.xOffset||0,m=c.yOffset||0,_=f[0],x=f[1],M=f[2],y=f[3],S=f[4],b=f[5],C=t.split(" "),T=parseFloat(C[0])||0,P=parseFloat(C[1])||0,L,D,w,N;n?f!==Lc&&(D=_*y-x*M)&&(w=T*(y/D)+P*(-M/D)+(M*b-y*S)/D,N=T*(-x/D)+P*(_/D)-(_*b-x*S)/D,T=w,P=N):(L=cM(e),T=L.x+(~C[0].indexOf("%")?T/100*L.width:T),P=L.y+(~(C[1]||C[0]).indexOf("%")?P/100*L.height:P)),i||i!==!1&&c.smooth?(S=T-d,b=P-p,c.xOffset=g+(S*_+b*M)-S,c.yOffset=m+(S*x+b*y)-b):c.xOffset=c.yOffset=0,c.xOrigin=T,c.yOrigin=P,c.smooth=!!i,c.origin=t,c.originIsAbsolute=!!n,e.style[nr]="0px 0px",l&&(Do(l,c,"xOrigin",d,T),Do(l,c,"yOrigin",p,P),Do(l,c,"xOffset",g,c.xOffset),Do(l,c,"yOffset",m,c.yOffset)),e.setAttribute("data-svg-origin",T+" "+P)},Dc=function(e,t){var n=e._gsap||new KS(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,a=n.scaleX<0,l="px",c="deg",f=getComputedStyle(e),d=Sr(e,nr)||"0",p,g,m,_,x,M,y,S,b,C,T,P,L,D,w,N,F,B,z,re,ie,q,ee,W,Y,te,U,k,J,ze,Ve,Be;return p=g=m=M=y=S=b=C=T=0,_=x=1,n.svg=!!(e.getCTM&&fM(e)),f.translate&&((f.translate!=="none"||f.scale!=="none"||f.rotate!=="none")&&(i[Rn]=(f.translate!=="none"?"translate3d("+(f.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(f.rotate!=="none"?"rotate("+f.rotate+") ":"")+(f.scale!=="none"?"scale("+f.scale.split(" ").join(",")+") ":"")+(f[Rn]!=="none"?f[Rn]:"")),i.scale=i.rotate=i.translate="none"),D=Jg(e,n.svg),n.svg&&(n.uncache?(Y=e.getBBox(),d=n.xOrigin-Y.x+"px "+(n.yOrigin-Y.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),P0(e,W||d,!!W||n.originIsAbsolute,n.smooth!==!1,D)),P=n.xOrigin||0,L=n.yOrigin||0,D!==Lc&&(B=D[0],z=D[1],re=D[2],ie=D[3],p=q=D[4],g=ee=D[5],D.length===6?(_=Math.sqrt(B*B+z*z),x=Math.sqrt(ie*ie+re*re),M=B||z?ll(z,B)*ha:0,b=re||ie?ll(re,ie)*ha+M:0,b&&(x*=Math.abs(Math.cos(b*zl))),n.svg&&(p-=P-(P*B+L*re),g-=L-(P*z+L*ie))):(Be=D[6],ze=D[7],U=D[8],k=D[9],J=D[10],Ve=D[11],p=D[12],g=D[13],m=D[14],w=ll(Be,J),y=w*ha,w&&(N=Math.cos(-w),F=Math.sin(-w),W=q*N+U*F,Y=ee*N+k*F,te=Be*N+J*F,U=q*-F+U*N,k=ee*-F+k*N,J=Be*-F+J*N,Ve=ze*-F+Ve*N,q=W,ee=Y,Be=te),w=ll(-re,J),S=w*ha,w&&(N=Math.cos(-w),F=Math.sin(-w),W=B*N-U*F,Y=z*N-k*F,te=re*N-J*F,Ve=ie*F+Ve*N,B=W,z=Y,re=te),w=ll(z,B),M=w*ha,w&&(N=Math.cos(w),F=Math.sin(w),W=B*N+z*F,Y=q*N+ee*F,z=z*N-B*F,ee=ee*N-q*F,B=W,q=Y),y&&Math.abs(y)+Math.abs(M)>359.9&&(y=M=0,S=180-S),_=In(Math.sqrt(B*B+z*z+re*re)),x=In(Math.sqrt(ee*ee+Be*Be)),w=ll(q,ee),b=Math.abs(w)>2e-4?w*ha:0,T=Ve?1/(Ve<0?-Ve:Ve):0),n.svg&&(W=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!hM(Sr(e,Rn)),W&&e.setAttribute("transform",W))),Math.abs(b)>90&&Math.abs(b)<270&&(a?(_*=-1,b+=M<=0?180:-180,M+=M<=0?180:-180):(x*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=p-((n.xPercent=p&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-p)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+l,n.y=g-((n.yPercent=g&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-g)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+l,n.z=m+l,n.scaleX=In(_),n.scaleY=In(x),n.rotation=In(M)+c,n.rotationX=In(y)+c,n.rotationY=In(S)+c,n.skewX=b+c,n.skewY=C+c,n.transformPerspective=T+l,(n.zOrigin=parseFloat(d.split(" ")[2])||!t&&n.zOrigin||0)&&(i[nr]=uh(d)),n.xOffset=n.yOffset=0,n.force3D=Mr.force3D,n.renderTransform=n.svg?PT:uM?pM:RT,n.uncache=0,n},uh=function(e){return(e=e.split(" "))[0]+" "+e[1]},xm=function(e,t,n){var i=Ai(t);return In(parseFloat(t)+parseFloat(Vo(e,"x",n+"px",i)))+i},RT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,pM(e,t)},aa="0deg",Vu="0px",la=") ",pM=function(e,t){var n=t||this,i=n.xPercent,a=n.yPercent,l=n.x,c=n.y,f=n.z,d=n.rotation,p=n.rotationY,g=n.rotationX,m=n.skewX,_=n.skewY,x=n.scaleX,M=n.scaleY,y=n.transformPerspective,S=n.force3D,b=n.target,C=n.zOrigin,T="",P=S==="auto"&&e&&e!==1||S===!0;if(C&&(g!==aa||p!==aa)){var L=parseFloat(p)*zl,D=Math.sin(L),w=Math.cos(L),N;L=parseFloat(g)*zl,N=Math.cos(L),l=xm(b,l,D*N*-C),c=xm(b,c,-Math.sin(L)*-C),f=xm(b,f,w*N*-C+C)}y!==Vu&&(T+="perspective("+y+la),(i||a)&&(T+="translate("+i+"%, "+a+"%) "),(P||l!==Vu||c!==Vu||f!==Vu)&&(T+=f!==Vu||P?"translate3d("+l+", "+c+", "+f+") ":"translate("+l+", "+c+la),d!==aa&&(T+="rotate("+d+la),p!==aa&&(T+="rotateY("+p+la),g!==aa&&(T+="rotateX("+g+la),(m!==aa||_!==aa)&&(T+="skew("+m+", "+_+la),(x!==1||M!==1)&&(T+="scale("+x+", "+M+la),b.style[Rn]=T||"translate(0, 0)"},PT=function(e,t){var n=t||this,i=n.xPercent,a=n.yPercent,l=n.x,c=n.y,f=n.rotation,d=n.skewX,p=n.skewY,g=n.scaleX,m=n.scaleY,_=n.target,x=n.xOrigin,M=n.yOrigin,y=n.xOffset,S=n.yOffset,b=n.forceCSS,C=parseFloat(l),T=parseFloat(c),P,L,D,w,N;f=parseFloat(f),d=parseFloat(d),p=parseFloat(p),p&&(p=parseFloat(p),d+=p,f+=p),f||d?(f*=zl,d*=zl,P=Math.cos(f)*g,L=Math.sin(f)*g,D=Math.sin(f-d)*-m,w=Math.cos(f-d)*m,d&&(p*=zl,N=Math.tan(d-p),N=Math.sqrt(1+N*N),D*=N,w*=N,p&&(N=Math.tan(p),N=Math.sqrt(1+N*N),P*=N,L*=N)),P=In(P),L=In(L),D=In(D),w=In(w)):(P=g,w=m,L=D=0),(C&&!~(l+"").indexOf("px")||T&&!~(c+"").indexOf("px"))&&(C=Vo(_,"x",l,"px"),T=Vo(_,"y",c,"px")),(x||M||y||S)&&(C=In(C+x-(x*P+M*D)+y),T=In(T+M-(x*L+M*w)+S)),(i||a)&&(N=_.getBBox(),C=In(C+i/100*N.width),T=In(T+a/100*N.height)),N="matrix("+P+","+L+","+D+","+w+","+C+","+T+")",_.setAttribute("transform",N),b&&(_.style[Rn]=N)},LT=function(e,t,n,i,a){var l=360,c=si(a),f=parseFloat(a)*(c&&~a.indexOf("rad")?ha:1),d=f-i,p=i+d+"deg",g,m;return c&&(g=a.split("_")[1],g==="short"&&(d%=l,d!==d%(l/2)&&(d+=d<0?l:-360)),g==="cw"&&d<0?d=(d+l*Ey)%l-~~(d/l)*l:g==="ccw"&&d>0&&(d=(d-l*Ey)%l-~~(d/l)*l)),e._pt=m=new tr(e._pt,t,n,i,d,hT),m.e=p,m.u="deg",e._props.push(n),m},Py=function(e,t){for(var n in t)e[n]=t[n];return e},DT=function(e,t,n){var i=Py({},n._gsap),a="perspective,force3D,transformOrigin,svgOrigin",l=n.style,c,f,d,p,g,m,_,x;i.svg?(d=n.getAttribute("transform"),n.setAttribute("transform",""),l[Rn]=t,c=Dc(n,1),zo(n,Rn),n.setAttribute("transform",d)):(d=getComputedStyle(n)[Rn],l[Rn]=t,c=Dc(n,1),l[Rn]=d);for(f in Qs)d=i[f],p=c[f],d!==p&&a.indexOf(f)<0&&(_=Ai(d),x=Ai(p),g=_!==x?Vo(n,f,d,x):parseFloat(d),m=parseFloat(p),e._pt=new tr(e._pt,c,f,g,m-g,b0),e._pt.u=x||0,e._props.push(f));Py(c,i)};er("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",a="Left",l=(e<3?[t,n,i,a]:[t+a,t+n,i+n,i+a]).map(function(c){return e<2?s+c:"border"+c+s});lh[e>1?"border"+s:s]=function(c,f,d,p,g){var m,_;if(arguments.length<4)return m=l.map(function(x){return Gs(c,x,d)}),_=m.join(" "),_.split(m[0]).length===5?m[0]:_;m=(p+"").split(" "),_={},l.forEach(function(x,M){return _[x]=m[M]=m[M]||m[(M-1)/2|0]}),c.init(f,_,g)}});var mM={name:"css",register:R0,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,a){var l=this._props,c=e.style,f=n.vars.startAt,d,p,g,m,_,x,M,y,S,b,C,T,P,L,D,w,N;Kg||R0(),this.styles=this.styles||lM(e),w=this.styles.props,this.tween=n;for(M in t)if(M!=="autoRound"&&(p=t[M],!(pr[M]&&ZS(M,t,n,i,e,a)))){if(_=typeof p,x=lh[M],_==="function"&&(p=p.call(n,i,e,a),_=typeof p),_==="string"&&~p.indexOf("random(")&&(p=Cc(p)),x)x(this,e,M,p,n)&&(D=1);else if(M.substr(0,2)==="--")d=(getComputedStyle(e).getPropertyValue(M)+"").trim(),p+="",Oo.lastIndex=0,Oo.test(d)||(y=Ai(d),S=Ai(p),S?y!==S&&(d=Vo(e,M,d,S)+S):y&&(p+=y)),this.add(c,"setProperty",d,p,i,a,0,0,M),l.push(M),w.push(M,0,c[M]);else if(_!=="undefined"){if(f&&M in f?(d=typeof f[M]=="function"?f[M].call(n,i,e,a):f[M],si(d)&&~d.indexOf("random(")&&(d=Cc(d)),Ai(d+"")||d==="auto"||(d+=Mr.units[M]||Ai(Gs(e,M))||""),(d+"").charAt(1)==="="&&(d=Gs(e,M))):d=Gs(e,M),m=parseFloat(d),b=_==="string"&&p.charAt(1)==="="&&p.substr(0,2),b&&(p=p.substr(2)),g=parseFloat(p),M in _s&&(M==="autoAlpha"&&(m===1&&Gs(e,"visibility")==="hidden"&&g&&(m=0),w.push("visibility",0,c.visibility),Do(this,c,"visibility",m?"inherit":"hidden",g?"inherit":"hidden",!g)),M!=="scale"&&M!=="transform"&&(M=_s[M],~M.indexOf(",")&&(M=M.split(",")[0]))),C=M in Qs,C){if(this.styles.save(M),N=p,_==="string"&&p.substring(0,6)==="var(--"){if(p=Sr(e,p.substring(4,p.indexOf(")"))),p.substring(0,5)==="calc("){var F=e.style.perspective;e.style.perspective=p,p=Sr(e,"perspective"),F?e.style.perspective=F:zo(e,"perspective")}g=parseFloat(p)}if(T||(P=e._gsap,P.renderTransform&&!t.parseTransform||Dc(e,t.parseTransform),L=t.smoothOrigin!==!1&&P.smooth,T=this._pt=new tr(this._pt,c,Rn,0,1,P.renderTransform,P,0,-1),T.dep=1),M==="scale")this._pt=new tr(this._pt,P,"scaleY",P.scaleY,(b?kl(P.scaleY,b+g):g)-P.scaleY||0,b0),this._pt.u=0,l.push("scaleY",M),M+="X";else if(M==="transformOrigin"){w.push(nr,0,c[nr]),p=bT(p),P.svg?P0(e,p,0,L,0,this):(S=parseFloat(p.split(" ")[2])||0,S!==P.zOrigin&&Do(this,P,"zOrigin",P.zOrigin,S),Do(this,c,M,uh(d),uh(p)));continue}else if(M==="svgOrigin"){P0(e,p,1,L,0,this);continue}else if(M in dM){LT(this,P,M,m,b?kl(m,b+p):p);continue}else if(M==="smoothOrigin"){Do(this,P,"smooth",P.smooth,p);continue}else if(M==="force3D"){P[M]=p;continue}else if(M==="transform"){DT(this,p,e);continue}}else M in c||(M=Ql(M)||M);if(C||(g||g===0)&&(m||m===0)&&!dT.test(p)&&M in c)y=(d+"").substr((m+"").length),g||(g=0),S=Ai(p)||(M in Mr.units?Mr.units[M]:y),y!==S&&(m=Vo(e,M,d,S)),this._pt=new tr(this._pt,C?P:c,M,m,(b?kl(m,b+g):g)-m,!C&&(S==="px"||M==="zIndex")&&t.autoRound!==!1?gT:b0),this._pt.u=S||0,C&&N!==p?(this._pt.b=d,this._pt.e=N,this._pt.r=mT):y!==S&&S!=="%"&&(this._pt.b=d,this._pt.r=pT);else if(M in c)AT.call(this,e,M,d,b?b+p:p);else if(M in e)this.add(e,M,d||e[M],b?b+p:p,i,a);else if(M!=="parseTransform"){zg(M,p);continue}C||(M in c?w.push(M,0,c[M]):typeof e[M]=="function"?w.push(M,2,e[M]()):w.push(M,1,d||e[M])),l.push(M)}}D&&iM(this)},render:function(e,t){if(t.tween._time||!Zg())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Gs,aliases:_s,getSetter:function(e,t,n){var i=_s[t];return i&&i.indexOf(",")<0&&(t=i),t in Qs&&t!==nr&&(e._gsap.x||Gs(e,"x"))?n&&My===n?t==="scale"?yT:xT:(My=n||{})&&(t==="scale"?ST:MT):e.style&&!Og(e.style[t])?_T:~t.indexOf("-")?vT:$g(e,t)},core:{_removeProperty:zo,_getMatrix:Jg}};sr.utils.checkPrefix=Ql;sr.core.getStyleSaver=lM;(function(s,e,t,n){var i=er(s+","+e+","+t,function(a){Qs[a]=1});er(e,function(a){Mr.units[a]="deg",dM[a]=1}),_s[i[13]]=s+","+e,er(n,function(a){var l=a.split(":");_s[l[1]]=i[l[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");er("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Mr.units[s]="px"});sr.registerPlugin(mM);var Jt=sr.registerPlugin(mM)||sr;Jt.core.Tween;/*!
 * @gsap/react 2.1.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/let Ly=typeof document<"u"?Et.useLayoutEffect:Et.useEffect,Dy=s=>s&&!Array.isArray(s)&&typeof s=="object",Xf=[],NT={},gM=Jt;const ns=(s,e=Xf)=>{let t=NT;Dy(s)?(t=s,s=null,e="dependencies"in t?t.dependencies:Xf):Dy(e)&&(t=e,e="dependencies"in t?t.dependencies:Xf),s&&typeof s!="function"&&console.warn("First parameter must be a function or config object");const{scope:n,revertOnUpdate:i}=t,a=Et.useRef(!1),l=Et.useRef(gM.context(()=>{},n)),c=Et.useRef(d=>l.current.add(null,d)),f=e&&e.length&&!i;return f&&Ly(()=>(a.current=!0,()=>l.current.revert()),Xf),Ly(()=>{if(s&&l.current.add(s,n),!f||!a.current)return()=>l.current.revert()},e),{context:l.current,contextSafe:c.current}};ns.register=s=>{gM=s};ns.headless=!0;function IT(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function UT(s,e,t){return IT(s.prototype,e),s}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var di,Vd,vr,No,Io,Vl,_M,pa,Hl,vM,Ys,Qr,xM,yM=function(){return di||typeof window<"u"&&(di=window.gsap)&&di.registerPlugin&&di},SM=1,Ol=[],zt=[],Es=[],hc=Date.now,L0=function(e,t){return t},FT=function(){var e=Hl.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,zt),i.push.apply(i,Es),zt=n,Es=i,L0=function(l,c){return t[l](c)}},ko=function(e,t){return~Es.indexOf(e)&&Es[Es.indexOf(e)+1][t]},pc=function(e){return!!~vM.indexOf(e)},Ui=function(e,t,n,i,a){return e.addEventListener(t,n,{passive:i!==!1,capture:!!a})},Ni=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Yf="scrollLeft",qf="scrollTop",D0=function(){return Ys&&Ys.isPressed||zt.cache++},ch=function(e,t){var n=function i(a){if(a||a===0){SM&&(vr.history.scrollRestoration="manual");var l=Ys&&Ys.isPressed;a=i.v=Math.round(a)||(Ys&&Ys.iOS?1:0),e(a),i.cacheID=zt.cache,l&&L0("ss",a)}else(t||zt.cache!==i.cacheID||L0("ref"))&&(i.cacheID=zt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},zi={s:Yf,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ch(function(s){return arguments.length?vr.scrollTo(s,Yn.sc()):vr.pageXOffset||No[Yf]||Io[Yf]||Vl[Yf]||0})},Yn={s:qf,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:zi,sc:ch(function(s){return arguments.length?vr.scrollTo(zi.sc(),s):vr.pageYOffset||No[qf]||Io[qf]||Vl[qf]||0})},Ki=function(e,t){return(t&&t._ctx&&t._ctx.selector||di.utils.toArray)(e)[0]||(typeof e=="string"&&di.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},OT=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Ho=function(e,t){var n=t.s,i=t.sc;pc(e)&&(e=No.scrollingElement||Io);var a=zt.indexOf(e),l=i===Yn.sc?1:2;!~a&&(a=zt.push(e)-1),zt[a+l]||Ui(e,"scroll",D0);var c=zt[a+l],f=c||(zt[a+l]=ch(ko(e,n),!0)||(pc(e)?i:ch(function(d){return arguments.length?e[n]=d:e[n]})));return f.target=e,c||(f.smooth=di.getProperty(e,"scrollBehavior")==="smooth"),f},N0=function(e,t,n){var i=e,a=e,l=hc(),c=l,f=t||50,d=Math.max(500,f*3),p=function(x,M){var y=hc();M||y-l>f?(a=i,i=x,c=l,l=y):n?i+=x:i=a+(x-a)/(y-c)*(l-c)},g=function(){a=i=n?0:i,c=l=0},m=function(x){var M=c,y=a,S=hc();return(x||x===0)&&x!==i&&p(x),l===c||S-c>d?0:(i+(n?y:-y))/((n?S:l)-M)*1e3};return{update:p,reset:g,getVelocity:m}},Hu=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Ny=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},MM=function(){Hl=di.core.globals().ScrollTrigger,Hl&&Hl.core&&FT()},EM=function(e){return di=e||yM(),!Vd&&di&&typeof document<"u"&&document.body&&(vr=window,No=document,Io=No.documentElement,Vl=No.body,vM=[vr,No,Io,Vl],di.utils.clamp,xM=di.core.context||function(){},pa="onpointerenter"in Vl?"pointer":"mouse",_M=Un.isTouch=vr.matchMedia&&vr.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in vr||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Qr=Un.eventTypes=("ontouchstart"in Io?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Io?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return SM=0},500),Vd=1),Hl||MM(),Vd};zi.op=Yn;zt.cache=0;var Un=function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){Vd||EM(di)||console.warn("Please gsap.registerPlugin(Observer)"),Hl||MM();var i=n.tolerance,a=n.dragMinimum,l=n.type,c=n.target,f=n.lineHeight,d=n.debounce,p=n.preventDefault,g=n.onStop,m=n.onStopDelay,_=n.ignore,x=n.wheelSpeed,M=n.event,y=n.onDragStart,S=n.onDragEnd,b=n.onDrag,C=n.onPress,T=n.onRelease,P=n.onRight,L=n.onLeft,D=n.onUp,w=n.onDown,N=n.onChangeX,F=n.onChangeY,B=n.onChange,z=n.onToggleX,re=n.onToggleY,ie=n.onHover,q=n.onHoverEnd,ee=n.onMove,W=n.ignoreCheck,Y=n.isNormalizer,te=n.onGestureStart,U=n.onGestureEnd,k=n.onWheel,J=n.onEnable,ze=n.onDisable,Ve=n.onClick,Be=n.scrollSpeed,se=n.capture,ve=n.allowClicks,me=n.lockAxis,Ie=n.onLockAxis;this.target=c=Ki(c)||Io,this.vars=n,_&&(_=di.utils.toArray(_)),i=i||1e-9,a=a||0,x=x||1,Be=Be||1,l=l||"wheel,touch,pointer",d=d!==!1,f||(f=parseFloat(vr.getComputedStyle(Vl).lineHeight)||22);var Ze,qe,Ct,Xe,dt,mt,ht,ce=this,Nt=0,Vt=0,Ht=n.passive||!p&&n.passive!==!1,it=Ho(c,zi),Ft=Ho(c,Yn),j=it(),jt=Ft(),pt=~l.indexOf("touch")&&!~l.indexOf("pointer")&&Qr[0]==="pointerdown",O=pc(c),A=c.ownerDocument||No,Z=[0,0,0],oe=[0,0,0],he=0,De=function(){return he=hc()},be=function(we,at){return(ce.event=we)&&_&&OT(we.target,_)||at&&pt&&we.pointerType!=="touch"||W&&W(we,at)},ge=function(){ce._vx.reset(),ce._vy.reset(),qe.pause(),g&&g(ce)},ne=function(){var we=ce.deltaX=Ny(Z),at=ce.deltaY=Ny(oe),Ce=Math.abs(we)>=i,lt=Math.abs(at)>=i;B&&(Ce||lt)&&B(ce,we,at,Z,oe),Ce&&(P&&ce.deltaX>0&&P(ce),L&&ce.deltaX<0&&L(ce),N&&N(ce),z&&ce.deltaX<0!=Nt<0&&z(ce),Nt=ce.deltaX,Z[0]=Z[1]=Z[2]=0),lt&&(w&&ce.deltaY>0&&w(ce),D&&ce.deltaY<0&&D(ce),F&&F(ce),re&&ce.deltaY<0!=Vt<0&&re(ce),Vt=ce.deltaY,oe[0]=oe[1]=oe[2]=0),(Xe||Ct)&&(ee&&ee(ce),Ct&&(y&&Ct===1&&y(ce),b&&b(ce),Ct=0),Xe=!1),mt&&!(mt=!1)&&Ie&&Ie(ce),dt&&(k(ce),dt=!1),Ze=0},xe=function(we,at,Ce){Z[Ce]+=we,oe[Ce]+=at,ce._vx.update(we),ce._vy.update(at),d?Ze||(Ze=requestAnimationFrame(ne)):ne()},Re=function(we,at){me&&!ht&&(ce.axis=ht=Math.abs(we)>Math.abs(at)?"x":"y",mt=!0),ht!=="y"&&(Z[2]+=we,ce._vx.update(we,!0)),ht!=="x"&&(oe[2]+=at,ce._vy.update(at,!0)),d?Ze||(Ze=requestAnimationFrame(ne)):ne()},ye=function(we){if(!be(we,1)){we=Hu(we,p);var at=we.clientX,Ce=we.clientY,lt=at-ce.x,Je=Ce-ce.y,vt=ce.isDragging;ce.x=at,ce.y=Ce,(vt||(lt||Je)&&(Math.abs(ce.startX-at)>=a||Math.abs(ce.startY-Ce)>=a))&&(Ct||(Ct=vt?2:1),vt||(ce.isDragging=!0),Re(lt,Je))}},Se=ce.onPress=function(Ae){be(Ae,1)||Ae&&Ae.button||(ce.axis=ht=null,qe.pause(),ce.isPressed=!0,Ae=Hu(Ae),Nt=Vt=0,ce.startX=ce.x=Ae.clientX,ce.startY=ce.y=Ae.clientY,ce._vx.reset(),ce._vy.reset(),Ui(Y?c:A,Qr[1],ye,Ht,!0),ce.deltaX=ce.deltaY=0,C&&C(ce))},Me=ce.onRelease=function(Ae){if(!be(Ae,1)){Ni(Y?c:A,Qr[1],ye,!0);var we=!isNaN(ce.y-ce.startY),at=ce.isDragging,Ce=at&&(Math.abs(ce.x-ce.startX)>3||Math.abs(ce.y-ce.startY)>3),lt=Hu(Ae);!Ce&&we&&(ce._vx.reset(),ce._vy.reset(),p&&ve&&di.delayedCall(.08,function(){if(hc()-he>300&&!Ae.defaultPrevented){if(Ae.target.click)Ae.target.click();else if(A.createEvent){var Je=A.createEvent("MouseEvents");Je.initMouseEvent("click",!0,!0,vr,1,lt.screenX,lt.screenY,lt.clientX,lt.clientY,!1,!1,!1,!1,0,null),Ae.target.dispatchEvent(Je)}}})),ce.isDragging=ce.isGesturing=ce.isPressed=!1,g&&at&&!Y&&qe.restart(!0),Ct&&ne(),S&&at&&S(ce),T&&T(ce,Ce)}},Ge=function(we){return we.touches&&we.touches.length>1&&(ce.isGesturing=!0)&&te(we,ce.isDragging)},$e=function(){return(ce.isGesturing=!1)||U(ce)},H=function(we){if(!be(we)){var at=it(),Ce=Ft();xe((at-j)*Be,(Ce-jt)*Be,1),j=at,jt=Ce,g&&qe.restart(!0)}},Te=function(we){if(!be(we)){we=Hu(we,p),k&&(dt=!0);var at=(we.deltaMode===1?f:we.deltaMode===2?vr.innerHeight:1)*x;xe(we.deltaX*at,we.deltaY*at,0),g&&!Y&&qe.restart(!0)}},_e=function(we){if(!be(we)){var at=we.clientX,Ce=we.clientY,lt=at-ce.x,Je=Ce-ce.y;ce.x=at,ce.y=Ce,Xe=!0,g&&qe.restart(!0),(lt||Je)&&Re(lt,Je)}},Ue=function(we){ce.event=we,ie(ce)},Fe=function(we){ce.event=we,q(ce)},Ee=function(we){return be(we)||Hu(we,p)&&Ve(ce)};qe=ce._dc=di.delayedCall(m||.25,ge).pause(),ce.deltaX=ce.deltaY=0,ce._vx=N0(0,50,!0),ce._vy=N0(0,50,!0),ce.scrollX=it,ce.scrollY=Ft,ce.isDragging=ce.isGesturing=ce.isPressed=!1,xM(this),ce.enable=function(Ae){return ce.isEnabled||(Ui(O?A:c,"scroll",D0),l.indexOf("scroll")>=0&&Ui(O?A:c,"scroll",H,Ht,se),l.indexOf("wheel")>=0&&Ui(c,"wheel",Te,Ht,se),(l.indexOf("touch")>=0&&_M||l.indexOf("pointer")>=0)&&(Ui(c,Qr[0],Se,Ht,se),Ui(A,Qr[2],Me),Ui(A,Qr[3],Me),ve&&Ui(c,"click",De,!0,!0),Ve&&Ui(c,"click",Ee),te&&Ui(A,"gesturestart",Ge),U&&Ui(A,"gestureend",$e),ie&&Ui(c,pa+"enter",Ue),q&&Ui(c,pa+"leave",Fe),ee&&Ui(c,pa+"move",_e)),ce.isEnabled=!0,ce.isDragging=ce.isGesturing=ce.isPressed=Xe=Ct=!1,ce._vx.reset(),ce._vy.reset(),j=it(),jt=Ft(),Ae&&Ae.type&&Se(Ae),J&&J(ce)),ce},ce.disable=function(){ce.isEnabled&&(Ol.filter(function(Ae){return Ae!==ce&&pc(Ae.target)}).length||Ni(O?A:c,"scroll",D0),ce.isPressed&&(ce._vx.reset(),ce._vy.reset(),Ni(Y?c:A,Qr[1],ye,!0)),Ni(O?A:c,"scroll",H,se),Ni(c,"wheel",Te,se),Ni(c,Qr[0],Se,se),Ni(A,Qr[2],Me),Ni(A,Qr[3],Me),Ni(c,"click",De,!0),Ni(c,"click",Ee),Ni(A,"gesturestart",Ge),Ni(A,"gestureend",$e),Ni(c,pa+"enter",Ue),Ni(c,pa+"leave",Fe),Ni(c,pa+"move",_e),ce.isEnabled=ce.isPressed=ce.isDragging=!1,ze&&ze(ce))},ce.kill=ce.revert=function(){ce.disable();var Ae=Ol.indexOf(ce);Ae>=0&&Ol.splice(Ae,1),Ys===ce&&(Ys=0)},Ol.push(ce),Y&&pc(c)&&(Ys=ce),ce.enable(M)},UT(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();Un.version="3.15.0";Un.create=function(s){return new Un(s)};Un.register=EM;Un.getAll=function(){return Ol.slice()};Un.getById=function(s){return Ol.filter(function(e){return e.vars.id===s})[0]};yM()&&di.registerPlugin(Un);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var tt,Nl,Bt,on,gr,Qt,e_,fh,Nc,mc,nc,$f,wi,Ah,I0,ki,Iy,Uy,Il,wM,ym,TM,Oi,U0,AM,bM,Co,F0,t_,Gl,n_,gc,O0,Sm,jf=1,Ti=Date.now,Mm=Ti(),zr=0,ic=0,Fy=function(e,t,n){var i=hr(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Oy=function(e,t){return t&&(!hr(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},kT=function s(){return ic&&requestAnimationFrame(s)},ky=function(){return Ah=1},By=function(){return Ah=0},hs=function(e){return e},rc=function(e){return Math.round(e*1e5)/1e5||0},CM=function(){return typeof window<"u"},RM=function(){return tt||CM()&&(tt=window.gsap)&&tt.registerPlugin&&tt},La=function(e){return!!~e_.indexOf(e)},PM=function(e){return(e==="Height"?n_:Bt["inner"+e])||gr["client"+e]||Qt["client"+e]},LM=function(e){return ko(e,"getBoundingClientRect")||(La(e)?function(){return Yd.width=Bt.innerWidth,Yd.height=n_,Yd}:function(){return Xs(e)})},BT=function(e,t,n){var i=n.d,a=n.d2,l=n.a;return(l=ko(e,"getBoundingClientRect"))?function(){return l()[i]}:function(){return(t?PM(a):e["client"+a])||0}},zT=function(e,t){return!t||~Es.indexOf(e)?LM(e):function(){return Yd}},vs=function(e,t){var n=t.s,i=t.d2,a=t.d,l=t.a;return Math.max(0,(n="scroll"+i)&&(l=ko(e,n))?l()-LM(e)()[a]:La(e)?(gr[n]||Qt[n])-PM(i):e[n]-e["offset"+i])},Kf=function(e,t){for(var n=0;n<Il.length;n+=3)(!t||~t.indexOf(Il[n+1]))&&e(Il[n],Il[n+1],Il[n+2])},hr=function(e){return typeof e=="string"},bi=function(e){return typeof e=="function"},sc=function(e){return typeof e=="number"},ma=function(e){return typeof e=="object"},Gu=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},ul=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},cl=Math.abs,DM="left",NM="top",i_="right",r_="bottom",ba="width",Ca="height",_c="Right",vc="Left",xc="Top",yc="Bottom",Vn="padding",Ur="margin",Jl="Width",s_="Height",Xn="px",Fr=function(e){return Bt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},VT=function(e){var t=Fr(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},zy=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Xs=function(e,t){var n=t&&Fr(e)[I0]!=="matrix(1, 0, 0, 1, 0, 0)"&&tt.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},dh=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},IM=function(e){var t=[],n=e.labels,i=e.duration(),a;for(a in n)t.push(n[a]/i);return t},HT=function(e){return function(t){return tt.utils.snap(IM(e),t)}},o_=function(e){var t=tt.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,a){return i-a});return n?function(i,a,l){l===void 0&&(l=.001);var c;if(!a)return t(i);if(a>0){for(i-=l,c=0;c<n.length;c++)if(n[c]>=i)return n[c];return n[c-1]}else for(c=n.length,i+=l;c--;)if(n[c]<=i)return n[c];return n[0]}:function(i,a,l){l===void 0&&(l=.001);var c=t(i);return!a||Math.abs(c-i)<l||c-i<0==a<0?c:t(a<0?i-e:i+e)}},GT=function(e){return function(t,n){return o_(IM(e))(t,n.direction)}},Zf=function(e,t,n,i){return n.split(",").forEach(function(a){return e(t,a,i)})},ri=function(e,t,n,i,a){return e.addEventListener(t,n,{passive:!i,capture:!!a})},ii=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Qf=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Vy={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Jf={toggleActions:"play",anticipatePin:0},hh={top:0,left:0,center:.5,bottom:1,right:1},Hd=function(e,t){if(hr(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in hh?hh[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ed=function(e,t,n,i,a,l,c,f){var d=a.startColor,p=a.endColor,g=a.fontSize,m=a.indent,_=a.fontWeight,x=on.createElement("div"),M=La(n)||ko(n,"pinType")==="fixed",y=e.indexOf("scroller")!==-1,S=M?Qt:n.tagName==="IFRAME"?n.contentDocument.body:n,b=e.indexOf("start")!==-1,C=b?d:p,T="border-color:"+C+";font-size:"+g+";color:"+C+";font-weight:"+_+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return T+="position:"+((y||f)&&M?"fixed;":"absolute;"),(y||f||!M)&&(T+=(i===Yn?i_:r_)+":"+(l+parseFloat(m))+"px;"),c&&(T+="box-sizing:border-box;text-align:left;width:"+c.offsetWidth+"px;"),x._isStart=b,x.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),x.style.cssText=T,x.innerText=t||t===0?e+"-"+t:e,S.children[0]?S.insertBefore(x,S.children[0]):S.appendChild(x),x._offset=x["offset"+i.op.d2],Gd(x,0,i,b),x},Gd=function(e,t,n,i){var a={display:"block"},l=n[i?"os2":"p2"],c=n[i?"p2":"os2"];e._isFlipped=i,a[n.a+"Percent"]=i?-100:0,a[n.a]=i?"1px":0,a["border"+l+Jl]=1,a["border"+c+Jl]=0,a[n.p]=t+"px",tt.set(e,a)},Ut=[],k0={},Ic,Hy=function(){return Ti()-zr>34&&(Ic||(Ic=requestAnimationFrame($s)))},fl=function(){(!Oi||!Oi.isPressed||Oi.startX>Qt.clientWidth)&&(zt.cache++,Oi?Ic||(Ic=requestAnimationFrame($s)):$s(),zr||Na("scrollStart"),zr=Ti())},Em=function(){bM=Bt.innerWidth,AM=Bt.innerHeight},oc=function(e){zt.cache++,(e===!0||!wi&&!TM&&!on.fullscreenElement&&!on.webkitFullscreenElement&&(!U0||bM!==Bt.innerWidth||Math.abs(Bt.innerHeight-AM)>Bt.innerHeight*.25))&&fh.restart(!0)},Da={},WT=[],UM=function s(){return ii(St,"scrollEnd",s)||ya(!0)},Na=function(e){return Da[e]&&Da[e].map(function(t){return t()})||WT},dr=[],FM=function(e){for(var t=0;t<dr.length;t+=5)(!e||dr[t+4]&&dr[t+4].query===e)&&(dr[t].style.cssText=dr[t+1],dr[t].getBBox&&dr[t].setAttribute("transform",dr[t+2]||""),dr[t+3].uncache=1)},OM=function(){return zt.forEach(function(e){return bi(e)&&++e.cacheID&&(e.rec=e())})},a_=function(e,t){var n;for(ki=0;ki<Ut.length;ki++)n=Ut[ki],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));gc=!0,t&&FM(t),t||Na("revert")},kM=function(e,t){zt.cache++,(t||!Bi)&&zt.forEach(function(n){return bi(n)&&n.cacheID++&&(n.rec=0)}),hr(e)&&(Bt.history.scrollRestoration=t_=e)},Bi,Ra=0,Gy,XT=function(){if(Gy!==Ra){var e=Gy=Ra;requestAnimationFrame(function(){return e===Ra&&ya(!0)})}},BM=function(){Qt.appendChild(Gl),n_=!Oi&&Gl.offsetHeight||Bt.innerHeight,Qt.removeChild(Gl)},Wy=function(e){return Nc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ya=function(e,t){if(gr=on.documentElement,Qt=on.body,e_=[Bt,on,gr,Qt],zr&&!e&&!gc){ri(St,"scrollEnd",UM);return}BM(),Bi=St.isRefreshing=!0,gc||OM();var n=Na("refreshInit");wM&&St.sort(),t||a_(),zt.forEach(function(i){bi(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Ut.slice(0).forEach(function(i){return i.refresh()}),gc=!1,Ut.forEach(function(i){if(i._subPinOffset&&i.pin){var a=i.vars.horizontal?"offsetWidth":"offsetHeight",l=i.pin[a];i.revert(!0,1),i.adjustPinSpacing(i.pin[a]-l),i.refresh()}}),O0=1,Wy(!0),Ut.forEach(function(i){var a=vs(i.scroller,i._dir),l=i.vars.end==="max"||i._endClamp&&i.end>a,c=i._startClamp&&i.start>=a;(l||c)&&i.setPositions(c?a-1:i.start,l?Math.max(c?a:i.start+1,a):i.end,!0)}),Wy(!1),O0=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),zt.forEach(function(i){bi(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),kM(t_,1),fh.pause(),Ra++,Bi=2,$s(2),Ut.forEach(function(i){return bi(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Bi=St.isRefreshing=!1,Na("refresh")},B0=0,Wd=1,Sc,$s=function(e){if(e===2||!Bi&&!gc){St.isUpdating=!0,Sc&&Sc.update(0);var t=Ut.length,n=Ti(),i=n-Mm>=50,a=t&&Ut[0].scroll();if(Wd=B0>a?-1:1,Bi||(B0=a),i&&(zr&&!Ah&&n-zr>200&&(zr=0,Na("scrollEnd")),nc=Mm,Mm=n),Wd<0){for(ki=t;ki-- >0;)Ut[ki]&&Ut[ki].update(0,i);Wd=1}else for(ki=0;ki<t;ki++)Ut[ki]&&Ut[ki].update(0,i);St.isUpdating=!1}Ic=0},z0=[DM,NM,r_,i_,Ur+yc,Ur+_c,Ur+xc,Ur+vc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Xd=z0.concat([ba,Ca,"boxSizing","max"+Jl,"max"+s_,"position",Ur,Vn,Vn+xc,Vn+_c,Vn+yc,Vn+vc]),YT=function(e,t,n){Wl(n);var i=e._gsap;if(i.spacerIsNative)Wl(i.spacerState);else if(e._gsap.swappedIn){var a=t.parentNode;a&&(a.insertBefore(e,t),a.removeChild(t))}e._gsap.swappedIn=!1},wm=function(e,t,n,i){if(!e._gsap.swappedIn){for(var a=z0.length,l=t.style,c=e.style,f;a--;)f=z0[a],l[f]=n[f];l.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(l.display="inline-block"),c[r_]=c[i_]="auto",l.flexBasis=n.flexBasis||"auto",l.overflow="visible",l.boxSizing="border-box",l[ba]=dh(e,zi)+Xn,l[Ca]=dh(e,Yn)+Xn,l[Vn]=c[Ur]=c[NM]=c[DM]="0",Wl(i),c[ba]=c["max"+Jl]=n[ba],c[Ca]=c["max"+s_]=n[Ca],c[Vn]=n[Vn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},qT=/([A-Z])/g,Wl=function(e){if(e){var t=e.t.style,n=e.length,i=0,a,l;for((e.t._gsap||tt.core.getCache(e.t)).uncache=1;i<n;i+=2)l=e[i+1],a=e[i],l?t[a]=l:t[a]&&t.removeProperty(a.replace(qT,"-$1").toLowerCase())}},td=function(e){for(var t=Xd.length,n=e.style,i=[],a=0;a<t;a++)i.push(Xd[a],n[Xd[a]]);return i.t=e,i},$T=function(e,t,n){for(var i=[],a=e.length,l=n?8:0,c;l<a;l+=2)c=e[l],i.push(c,c in t?t[c]:e[l+1]);return i.t=e.t,i},Yd={left:0,top:0},Xy=function(e,t,n,i,a,l,c,f,d,p,g,m,_,x){bi(e)&&(e=e(f)),hr(e)&&e.substr(0,3)==="max"&&(e=m+(e.charAt(4)==="="?Hd("0"+e.substr(3),n):0));var M=_?_.time():0,y,S,b;if(_&&_.seek(0),isNaN(e)||(e=+e),sc(e))_&&(e=tt.utils.mapRange(_.scrollTrigger.start,_.scrollTrigger.end,0,m,e)),c&&Gd(c,n,i,!0);else{bi(t)&&(t=t(f));var C=(e||"0").split(" "),T,P,L,D;b=Ki(t,f)||Qt,T=Xs(b)||{},(!T||!T.left&&!T.top)&&Fr(b).display==="none"&&(D=b.style.display,b.style.display="block",T=Xs(b),D?b.style.display=D:b.style.removeProperty("display")),P=Hd(C[0],T[i.d]),L=Hd(C[1]||"0",n),e=T[i.p]-d[i.p]-p+P+a-L,c&&Gd(c,L,i,n-L<20||c._isStart&&L>20),n-=n-L}if(x&&(f[x]=e||-.001,e<0&&(e=0)),l){var w=e+n,N=l._isStart;y="scroll"+i.d2,Gd(l,w,i,N&&w>20||!N&&(g?Math.max(Qt[y],gr[y]):l.parentNode[y])<=w+1),g&&(d=Xs(c),g&&(l.style[i.op.p]=d[i.op.p]-i.op.m-l._offset+Xn))}return _&&b&&(y=Xs(b),_.seek(m),S=Xs(b),_._caScrollDist=y[i.p]-S[i.p],e=e/_._caScrollDist*m),_&&_.seek(M),_?e:Math.round(e)},jT=/(webkit|moz|length|cssText|inset)/i,Yy=function(e,t,n,i){if(e.parentNode!==t){var a=e.style,l,c;if(t===Qt){e._stOrig=a.cssText,c=Fr(e);for(l in c)!+l&&!jT.test(l)&&c[l]&&typeof a[l]=="string"&&l!=="0"&&(a[l]=c[l]);a.top=n,a.left=i}else a.cssText=e._stOrig;tt.core.getCache(e).uncache=1,t.appendChild(e)}},zM=function(e,t,n){var i=t,a=i;return function(l){var c=Math.round(e());return c!==i&&c!==a&&Math.abs(c-i)>3&&Math.abs(c-a)>3&&(l=c,n&&n()),a=i,i=Math.round(l),i}},nd=function(e,t,n){var i={};i[t.p]="+="+n,tt.set(e,i)},qy=function(e,t){var n=Ho(e,t),i="_scroll"+t.p2,a=function l(c,f,d,p,g){var m=l.tween,_=f.onComplete,x={};d=d||n();var M=zM(n,d,function(){m.kill(),l.tween=0});return g=p&&g||0,p=p||c-d,m&&m.kill(),f[i]=c,f.inherit=!1,f.modifiers=x,x[i]=function(){return M(d+p*m.ratio+g*m.ratio*m.ratio)},f.onUpdate=function(){zt.cache++,l.tween&&$s()},f.onComplete=function(){l.tween=0,_&&_.call(m)},m=l.tween=tt.to(e,f),m};return e[i]=n,n.wheelHandler=function(){return a.tween&&a.tween.kill()&&(a.tween=0)},ri(e,"wheel",n.wheelHandler),St.isTouch&&ri(e,"touchmove",n.wheelHandler),a},St=function(){function s(t,n){Nl||s.register(tt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),F0(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ic){this.update=this.refresh=this.kill=hs;return}n=zy(hr(n)||sc(n)||n.nodeType?{trigger:n}:n,Jf);var a=n,l=a.onUpdate,c=a.toggleClass,f=a.id,d=a.onToggle,p=a.onRefresh,g=a.scrub,m=a.trigger,_=a.pin,x=a.pinSpacing,M=a.invalidateOnRefresh,y=a.anticipatePin,S=a.onScrubComplete,b=a.onSnapComplete,C=a.once,T=a.snap,P=a.pinReparent,L=a.pinSpacer,D=a.containerAnimation,w=a.fastScrollEnd,N=a.preventOverlaps,F=n.horizontal||n.containerAnimation&&n.horizontal!==!1?zi:Yn,B=!g&&g!==0,z=Ki(n.scroller||Bt),re=tt.core.getCache(z),ie=La(z),q=("pinType"in n?n.pinType:ko(z,"pinType")||ie&&"fixed")==="fixed",ee=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],W=B&&n.toggleActions.split(" "),Y="markers"in n?n.markers:Jf.markers,te=ie?0:parseFloat(Fr(z)["border"+F.p2+Jl])||0,U=this,k=n.onRefreshInit&&function(){return n.onRefreshInit(U)},J=BT(z,ie,F),ze=zT(z,ie),Ve=0,Be=0,se=0,ve=Ho(z,F),me,Ie,Ze,qe,Ct,Xe,dt,mt,ht,ce,Nt,Vt,Ht,it,Ft,j,jt,pt,O,A,Z,oe,he,De,be,ge,ne,xe,Re,ye,Se,Me,Ge,$e,H,Te,_e,Ue,Fe;if(U._startClamp=U._endClamp=!1,U._dir=F,y*=45,U.scroller=z,U.scroll=D?D.time.bind(D):ve,qe=ve(),U.vars=n,i=i||n.animation,"refreshPriority"in n&&(wM=1,n.refreshPriority===-9999&&(Sc=U)),re.tweenScroll=re.tweenScroll||{top:qy(z,Yn),left:qy(z,zi)},U.tweenTo=me=re.tweenScroll[F.p],U.scrubDuration=function(Ce){Ge=sc(Ce)&&Ce,Ge?Me?Me.duration(Ce):Me=tt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ge,paused:!0,onComplete:function(){return S&&S(U)}}):(Me&&Me.progress(1).kill(),Me=0)},i&&(i.vars.lazy=!1,i._initted&&!U.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),U.animation=i.pause(),i.scrollTrigger=U,U.scrubDuration(g),ye=0,f||(f=i.vars.id)),T&&((!ma(T)||T.push)&&(T={snapTo:T}),"scrollBehavior"in Qt.style&&tt.set(ie?[Qt,gr]:z,{scrollBehavior:"auto"}),zt.forEach(function(Ce){return bi(Ce)&&Ce.target===(ie?on.scrollingElement||gr:z)&&(Ce.smooth=!1)}),Ze=bi(T.snapTo)?T.snapTo:T.snapTo==="labels"?HT(i):T.snapTo==="labelsDirectional"?GT(i):T.directional!==!1?function(Ce,lt){return o_(T.snapTo)(Ce,Ti()-Be<500?0:lt.direction)}:tt.utils.snap(T.snapTo),$e=T.duration||{min:.1,max:2},$e=ma($e)?mc($e.min,$e.max):mc($e,$e),H=tt.delayedCall(T.delay||Ge/2||.1,function(){var Ce=ve(),lt=Ti()-Be<500,Je=me.tween;if((lt||Math.abs(U.getVelocity())<10)&&!Je&&!Ah&&Ve!==Ce){var vt=(Ce-Xe)/it,mn=i&&!B?i.totalProgress():vt,Rt=lt?0:(mn-Se)/(Ti()-nc)*1e3||0,en=tt.utils.clamp(-vt,1-vt,cl(Rt/2)*Rt/.185),On=vt+(T.inertia===!1?0:en),cn,tn,Pt=T,Kn=Pt.onStart,nn=Pt.onInterrupt,Zn=Pt.onComplete;if(cn=Ze(On,U),sc(cn)||(cn=On),tn=Math.max(0,Math.round(Xe+cn*it)),Ce<=dt&&Ce>=Xe&&tn!==Ce){if(Je&&!Je._initted&&Je.data<=cl(tn-Ce))return;T.inertia===!1&&(en=cn-vt),me(tn,{duration:$e(cl(Math.max(cl(On-mn),cl(cn-mn))*.185/Rt/.05||0)),ease:T.ease||"power3",data:cl(tn-Ce),onInterrupt:function(){return H.restart(!0)&&nn&&ul(U,nn)},onComplete:function(){U.update(),Ve=ve(),i&&!B&&(Me?Me.resetTo("totalProgress",cn,i._tTime/i._tDur):i.progress(cn)),ye=Se=i&&!B?i.totalProgress():U.progress,b&&b(U),Zn&&ul(U,Zn)}},Ce,en*it,tn-Ce-en*it),Kn&&ul(U,Kn,me.tween)}}else U.isActive&&Ve!==Ce&&H.restart(!0)}).pause()),f&&(k0[f]=U),m=U.trigger=Ki(m||_!==!0&&_),Fe=m&&m._gsap&&m._gsap.stRevert,Fe&&(Fe=Fe(U)),_=_===!0?m:Ki(_),hr(c)&&(c={targets:m,className:c}),_&&(x===!1||x===Ur||(x=!x&&_.parentNode&&_.parentNode.style&&Fr(_.parentNode).display==="flex"?!1:Vn),U.pin=_,Ie=tt.core.getCache(_),Ie.spacer?Ft=Ie.pinState:(L&&(L=Ki(L),L&&!L.nodeType&&(L=L.current||L.nativeElement),Ie.spacerIsNative=!!L,L&&(Ie.spacerState=td(L))),Ie.spacer=pt=L||on.createElement("div"),pt.classList.add("pin-spacer"),f&&pt.classList.add("pin-spacer-"+f),Ie.pinState=Ft=td(_)),n.force3D!==!1&&tt.set(_,{force3D:!0}),U.spacer=pt=Ie.spacer,Re=Fr(_),De=Re[x+F.os2],A=tt.getProperty(_),Z=tt.quickSetter(_,F.a,Xn),wm(_,pt,Re),jt=td(_)),Y){Vt=ma(Y)?zy(Y,Vy):Vy,ce=ed("scroller-start",f,z,F,Vt,0),Nt=ed("scroller-end",f,z,F,Vt,0,ce),O=ce["offset"+F.op.d2];var Ee=Ki(ko(z,"content")||z);mt=this.markerStart=ed("start",f,Ee,F,Vt,O,0,D),ht=this.markerEnd=ed("end",f,Ee,F,Vt,O,0,D),D&&(Ue=tt.quickSetter([mt,ht],F.a,Xn)),!q&&!(Es.length&&ko(z,"fixedMarkers")===!0)&&(VT(ie?Qt:z),tt.set([ce,Nt],{force3D:!0}),ge=tt.quickSetter(ce,F.a,Xn),xe=tt.quickSetter(Nt,F.a,Xn))}if(D){var Ae=D.vars.onUpdate,we=D.vars.onUpdateParams;D.eventCallback("onUpdate",function(){U.update(0,0,1),Ae&&Ae.apply(D,we||[])})}if(U.previous=function(){return Ut[Ut.indexOf(U)-1]},U.next=function(){return Ut[Ut.indexOf(U)+1]},U.revert=function(Ce,lt){if(!lt)return U.kill(!0);var Je=Ce!==!1||!U.enabled,vt=wi;Je!==U.isReverted&&(Je&&(Te=Math.max(ve(),U.scroll.rec||0),se=U.progress,_e=i&&i.progress()),mt&&[mt,ht,ce,Nt].forEach(function(mn){return mn.style.display=Je?"none":"block"}),Je&&(wi=U,U.update(Je)),_&&(!P||!U.isActive)&&(Je?YT(_,pt,Ft):wm(_,pt,Fr(_),be)),Je||U.update(Je),wi=vt,U.isReverted=Je)},U.refresh=function(Ce,lt,Je,vt){if(!((wi||!U.enabled)&&!lt)){if(_&&Ce&&zr){ri(s,"scrollEnd",UM);return}!Bi&&k&&k(U),wi=U,me.tween&&!Je&&(me.tween.kill(),me.tween=0),Me&&Me.pause(),M&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Ye){return Ye.vars.immediateRender&&Ye.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),U.isReverted||U.revert(!0,!0),U._subPinOffset=!1;var mn=J(),Rt=ze(),en=D?D.duration():vs(z,F),On=it<=.01||!it,cn=0,tn=vt||0,Pt=ma(Je)?Je.end:n.end,Kn=n.endTrigger||m,nn=ma(Je)?Je.start:n.start||(n.start===0||!m?0:_?"0 0":"0 100%"),Zn=U.pinnedContainer=n.pinnedContainer&&Ki(n.pinnedContainer,U),Qn=m&&Math.max(0,Ut.indexOf(U))||0,En=Qn,gn,Pn,Ar,eo,Lt,wn,_i,I,Q,de,ae,le,Oe;for(Y&&ma(Je)&&(le=tt.getProperty(ce,F.p),Oe=tt.getProperty(Nt,F.p));En-- >0;)wn=Ut[En],wn.end||wn.refresh(0,1)||(wi=U),_i=wn.pin,_i&&(_i===m||_i===_||_i===Zn)&&!wn.isReverted&&(de||(de=[]),de.unshift(wn),wn.revert(!0,!0)),wn!==Ut[En]&&(Qn--,En--);for(bi(nn)&&(nn=nn(U)),nn=Fy(nn,"start",U),Xe=Xy(nn,m,mn,F,ve(),mt,ce,U,Rt,te,q,en,D,U._startClamp&&"_startClamp")||(_?-.001:0),bi(Pt)&&(Pt=Pt(U)),hr(Pt)&&!Pt.indexOf("+=")&&(~Pt.indexOf(" ")?Pt=(hr(nn)?nn.split(" ")[0]:"")+Pt:(cn=Hd(Pt.substr(2),mn),Pt=hr(nn)?nn:(D?tt.utils.mapRange(0,D.duration(),D.scrollTrigger.start,D.scrollTrigger.end,Xe):Xe)+cn,Kn=m)),Pt=Fy(Pt,"end",U),dt=Math.max(Xe,Xy(Pt||(Kn?"100% 0":en),Kn,mn,F,ve()+cn,ht,Nt,U,Rt,te,q,en,D,U._endClamp&&"_endClamp"))||-.001,cn=0,En=Qn;En--;)wn=Ut[En]||{},_i=wn.pin,_i&&wn.start-wn._pinPush<=Xe&&!D&&wn.end>0&&(gn=wn.end-(U._startClamp?Math.max(0,wn.start):wn.start),(_i===m&&wn.start-wn._pinPush<Xe||_i===Zn)&&isNaN(nn)&&(cn+=gn*(1-wn.progress)),_i===_&&(tn+=gn));if(Xe+=cn,dt+=cn,U._startClamp&&(U._startClamp+=cn),U._endClamp&&!Bi&&(U._endClamp=dt||-.001,dt=Math.min(dt,vs(z,F))),it=dt-Xe||(Xe-=.01)&&.001,On&&(se=tt.utils.clamp(0,1,tt.utils.normalize(Xe,dt,Te))),U._pinPush=tn,mt&&cn&&(gn={},gn[F.a]="+="+cn,Zn&&(gn[F.p]="-="+ve()),tt.set([mt,ht],gn)),_&&!(O0&&U.end>=vs(z,F)))gn=Fr(_),eo=F===Yn,Ar=ve(),oe=parseFloat(A(F.a))+tn,!en&&dt>1&&(ae=(ie?on.scrollingElement||gr:z).style,ae={style:ae,value:ae["overflow"+F.a.toUpperCase()]},ie&&Fr(Qt)["overflow"+F.a.toUpperCase()]!=="scroll"&&(ae.style["overflow"+F.a.toUpperCase()]="scroll")),wm(_,pt,gn),jt=td(_),Pn=Xs(_,!0),I=q&&Ho(z,eo?zi:Yn)(),x?(be=[x+F.os2,it+tn+Xn],be.t=pt,En=x===Vn?dh(_,F)+it+tn:0,En&&(be.push(F.d,En+Xn),pt.style.flexBasis!=="auto"&&(pt.style.flexBasis=En+Xn)),Wl(be),Zn&&Ut.forEach(function(Ye){Ye.pin===Zn&&Ye.vars.pinSpacing!==!1&&(Ye._subPinOffset=!0)}),q&&ve(Te)):(En=dh(_,F),En&&pt.style.flexBasis!=="auto"&&(pt.style.flexBasis=En+Xn)),q&&(Lt={top:Pn.top+(eo?Ar-Xe:I)+Xn,left:Pn.left+(eo?I:Ar-Xe)+Xn,boxSizing:"border-box",position:"fixed"},Lt[ba]=Lt["max"+Jl]=Math.ceil(Pn.width)+Xn,Lt[Ca]=Lt["max"+s_]=Math.ceil(Pn.height)+Xn,Lt[Ur]=Lt[Ur+xc]=Lt[Ur+_c]=Lt[Ur+yc]=Lt[Ur+vc]="0",Lt[Vn]=gn[Vn],Lt[Vn+xc]=gn[Vn+xc],Lt[Vn+_c]=gn[Vn+_c],Lt[Vn+yc]=gn[Vn+yc],Lt[Vn+vc]=gn[Vn+vc],j=$T(Ft,Lt,P),Bi&&ve(0)),i?(Q=i._initted,ym(1),i.render(i.duration(),!0,!0),he=A(F.a)-oe+it+tn,ne=Math.abs(it-he)>1,q&&ne&&j.splice(j.length-2,2),i.render(0,!0,!0),Q||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),ym(0)):he=it,ae&&(ae.value?ae.style["overflow"+F.a.toUpperCase()]=ae.value:ae.style.removeProperty("overflow-"+F.a));else if(m&&ve()&&!D)for(Pn=m.parentNode;Pn&&Pn!==Qt;)Pn._pinOffset&&(Xe-=Pn._pinOffset,dt-=Pn._pinOffset),Pn=Pn.parentNode;de&&de.forEach(function(Ye){return Ye.revert(!1,!0)}),U.start=Xe,U.end=dt,qe=Ct=Bi?Te:ve(),!D&&!Bi&&(qe<Te&&ve(Te),U.scroll.rec=0),U.revert(!1,!0),Be=Ti(),H&&(Ve=-1,H.restart(!0)),wi=0,i&&B&&(i._initted||_e)&&i.progress()!==_e&&i.progress(_e||0,!0).render(i.time(),!0,!0),(On||se!==U.progress||D||M||i&&!i._initted)&&(i&&!B&&(i._initted||se||i.vars.immediateRender!==!1)&&i.totalProgress(D&&Xe<-.001&&!se?tt.utils.normalize(Xe,dt,0):se,!0),U.progress=On||(qe-Xe)/it===se?0:se),_&&x&&(pt._pinOffset=Math.round(U.progress*he)),Me&&Me.invalidate(),isNaN(le)||(le-=tt.getProperty(ce,F.p),Oe-=tt.getProperty(Nt,F.p),nd(ce,F,le),nd(mt,F,le-(vt||0)),nd(Nt,F,Oe),nd(ht,F,Oe-(vt||0))),On&&!Bi&&U.update(),p&&!Bi&&!Ht&&(Ht=!0,p(U),Ht=!1)}},U.getVelocity=function(){return(ve()-Ct)/(Ti()-nc)*1e3||0},U.endAnimation=function(){Gu(U.callbackAnimation),i&&(Me?Me.progress(1):i.paused()?B||Gu(i,U.direction<0,1):Gu(i,i.reversed()))},U.labelToScroll=function(Ce){return i&&i.labels&&(Xe||U.refresh()||Xe)+i.labels[Ce]/i.duration()*it||0},U.getTrailing=function(Ce){var lt=Ut.indexOf(U),Je=U.direction>0?Ut.slice(0,lt).reverse():Ut.slice(lt+1);return(hr(Ce)?Je.filter(function(vt){return vt.vars.preventOverlaps===Ce}):Je).filter(function(vt){return U.direction>0?vt.end<=Xe:vt.start>=dt})},U.update=function(Ce,lt,Je){if(!(D&&!Je&&!Ce)){var vt=Bi===!0?Te:U.scroll(),mn=Ce?0:(vt-Xe)/it,Rt=mn<0?0:mn>1?1:mn||0,en=U.progress,On,cn,tn,Pt,Kn,nn,Zn,Qn;if(lt&&(Ct=qe,qe=D?ve():vt,T&&(Se=ye,ye=i&&!B?i.totalProgress():Rt)),y&&_&&!wi&&!jf&&zr&&(!Rt&&Xe<vt+(vt-Ct)/(Ti()-nc)*y?Rt=1e-4:Rt===1&&dt>vt+(vt-Ct)/(Ti()-nc)*y&&(Rt=.9999)),Rt!==en&&U.enabled){if(On=U.isActive=!!Rt&&Rt<1,cn=!!en&&en<1,nn=On!==cn,Kn=nn||!!Rt!=!!en,U.direction=Rt>en?1:-1,U.progress=Rt,Kn&&!wi&&(tn=Rt&&!en?0:Rt===1?1:en===1?2:3,B&&(Pt=!nn&&W[tn+1]!=="none"&&W[tn+1]||W[tn],Qn=i&&(Pt==="complete"||Pt==="reset"||Pt in i))),N&&(nn||Qn)&&(Qn||g||!i)&&(bi(N)?N(U):U.getTrailing(N).forEach(function(Ar){return Ar.endAnimation()})),B||(Me&&!wi&&!jf?(Me._dp._time-Me._start!==Me._time&&Me.render(Me._dp._time-Me._start),Me.resetTo?Me.resetTo("totalProgress",Rt,i._tTime/i._tDur):(Me.vars.totalProgress=Rt,Me.invalidate().restart())):i&&i.totalProgress(Rt,!!(wi&&(Be||Ce)))),_){if(Ce&&x&&(pt.style[x+F.os2]=De),!q)Z(rc(oe+he*Rt));else if(Kn){if(Zn=!Ce&&Rt>en&&dt+1>vt&&vt+1>=vs(z,F),P)if(!Ce&&(On||Zn)){var En=Xs(_,!0),gn=vt-Xe;Yy(_,Qt,En.top+(F===Yn?gn:0)+Xn,En.left+(F===Yn?0:gn)+Xn)}else Yy(_,pt);Wl(On||Zn?j:jt),ne&&Rt<1&&On||Z(oe+(Rt===1&&!Zn?he:0))}}T&&!me.tween&&!wi&&!jf&&H.restart(!0),c&&(nn||C&&Rt&&(Rt<1||!Sm))&&Nc(c.targets).forEach(function(Ar){return Ar.classList[On||C?"add":"remove"](c.className)}),l&&!B&&!Ce&&l(U),Kn&&!wi?(B&&(Qn&&(Pt==="complete"?i.pause().totalProgress(1):Pt==="reset"?i.restart(!0).pause():Pt==="restart"?i.restart(!0):i[Pt]()),l&&l(U)),(nn||!Sm)&&(d&&nn&&ul(U,d),ee[tn]&&ul(U,ee[tn]),C&&(Rt===1?U.kill(!1,1):ee[tn]=0),nn||(tn=Rt===1?1:3,ee[tn]&&ul(U,ee[tn]))),w&&!On&&Math.abs(U.getVelocity())>(sc(w)?w:2500)&&(Gu(U.callbackAnimation),Me?Me.progress(1):Gu(i,Pt==="reverse"?1:!Rt,1))):B&&l&&!wi&&l(U)}if(xe){var Pn=D?vt/D.duration()*(D._caScrollDist||0):vt;ge(Pn+(ce._isFlipped?1:0)),xe(Pn)}Ue&&Ue(-vt/D.duration()*(D._caScrollDist||0))}},U.enable=function(Ce,lt){U.enabled||(U.enabled=!0,ri(z,"resize",oc),ie||ri(z,"scroll",fl),k&&ri(s,"refreshInit",k),Ce!==!1&&(U.progress=se=0,qe=Ct=Ve=ve()),lt!==!1&&U.refresh())},U.getTween=function(Ce){return Ce&&me?me.tween:Me},U.setPositions=function(Ce,lt,Je,vt){if(D){var mn=D.scrollTrigger,Rt=D.duration(),en=mn.end-mn.start;Ce=mn.start+en*Ce/Rt,lt=mn.start+en*lt/Rt}U.refresh(!1,!1,{start:Oy(Ce,Je&&!!U._startClamp),end:Oy(lt,Je&&!!U._endClamp)},vt),U.update()},U.adjustPinSpacing=function(Ce){if(be&&Ce){var lt=be.indexOf(F.d)+1;be[lt]=parseFloat(be[lt])+Ce+Xn,be[1]=parseFloat(be[1])+Ce+Xn,Wl(be)}},U.disable=function(Ce,lt){if(Ce!==!1&&U.revert(!0,!0),U.enabled&&(U.enabled=U.isActive=!1,lt||Me&&Me.pause(),Te=0,Ie&&(Ie.uncache=1),k&&ii(s,"refreshInit",k),H&&(H.pause(),me.tween&&me.tween.kill()&&(me.tween=0)),!ie)){for(var Je=Ut.length;Je--;)if(Ut[Je].scroller===z&&Ut[Je]!==U)return;ii(z,"resize",oc),ie||ii(z,"scroll",fl)}},U.kill=function(Ce,lt){U.disable(Ce,lt),Me&&!lt&&Me.kill(),f&&delete k0[f];var Je=Ut.indexOf(U);Je>=0&&Ut.splice(Je,1),Je===ki&&Wd>0&&ki--,Je=0,Ut.forEach(function(vt){return vt.scroller===U.scroller&&(Je=1)}),Je||Bi||(U.scroll.rec=0),i&&(i.scrollTrigger=null,Ce&&i.revert({kill:!1}),lt||i.kill()),mt&&[mt,ht,ce,Nt].forEach(function(vt){return vt.parentNode&&vt.parentNode.removeChild(vt)}),Sc===U&&(Sc=0),_&&(Ie&&(Ie.uncache=1),Je=0,Ut.forEach(function(vt){return vt.pin===_&&Je++}),Je||(Ie.spacer=0)),n.onKill&&n.onKill(U)},Ut.push(U),U.enable(!1,!1),Fe&&Fe(U),i&&i.add&&!it){var at=U.update;U.update=function(){U.update=at,zt.cache++,Xe||dt||U.refresh()},tt.delayedCall(.01,U.update),it=.01,Xe=dt=0}else U.refresh();_&&XT()},s.register=function(n){return Nl||(tt=n||RM(),CM()&&window.document&&s.enable(),Nl=ic),Nl},s.defaults=function(n){if(n)for(var i in n)Jf[i]=n[i];return Jf},s.disable=function(n,i){ic=0,Ut.forEach(function(l){return l[i?"kill":"disable"](n)}),ii(Bt,"wheel",fl),ii(on,"scroll",fl),clearInterval($f),ii(on,"touchcancel",hs),ii(Qt,"touchstart",hs),Zf(ii,on,"pointerdown,touchstart,mousedown",ky),Zf(ii,on,"pointerup,touchend,mouseup",By),fh.kill(),Kf(ii);for(var a=0;a<zt.length;a+=3)Qf(ii,zt[a],zt[a+1]),Qf(ii,zt[a],zt[a+2])},s.enable=function(){if(Bt=window,on=document,gr=on.documentElement,Qt=on.body,tt){if(Nc=tt.utils.toArray,mc=tt.utils.clamp,F0=tt.core.context||hs,ym=tt.core.suppressOverwrites||hs,t_=Bt.history.scrollRestoration||"auto",B0=Bt.pageYOffset||0,tt.core.globals("ScrollTrigger",s),Qt){ic=1,Gl=document.createElement("div"),Gl.style.height="100vh",Gl.style.position="absolute",BM(),kT(),Un.register(tt),s.isTouch=Un.isTouch,Co=Un.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),U0=Un.isTouch===1,ri(Bt,"wheel",fl),e_=[Bt,on,gr,Qt],tt.matchMedia?(s.matchMedia=function(p){var g=tt.matchMedia(),m;for(m in p)g.add(m,p[m]);return g},tt.addEventListener("matchMediaInit",function(){OM(),a_()}),tt.addEventListener("matchMediaRevert",function(){return FM()}),tt.addEventListener("matchMedia",function(){ya(0,1),Na("matchMedia")}),tt.matchMedia().add("(orientation: portrait)",function(){return Em(),Em})):console.warn("Requires GSAP 3.11.0 or later"),Em(),ri(on,"scroll",fl);var n=Qt.hasAttribute("style"),i=Qt.style,a=i.borderTopStyle,l=tt.core.Animation.prototype,c,f;for(l.revert||Object.defineProperty(l,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",c=Xs(Qt),Yn.m=Math.round(c.top+Yn.sc())||0,zi.m=Math.round(c.left+zi.sc())||0,a?i.borderTopStyle=a:i.removeProperty("border-top-style"),n||(Qt.setAttribute("style",""),Qt.removeAttribute("style")),$f=setInterval(Hy,250),tt.delayedCall(.5,function(){return jf=0}),ri(on,"touchcancel",hs),ri(Qt,"touchstart",hs),Zf(ri,on,"pointerdown,touchstart,mousedown",ky),Zf(ri,on,"pointerup,touchend,mouseup",By),I0=tt.utils.checkPrefix("transform"),Xd.push(I0),Nl=Ti(),fh=tt.delayedCall(.2,ya).pause(),Il=[on,"visibilitychange",function(){var p=Bt.innerWidth,g=Bt.innerHeight;on.hidden?(Iy=p,Uy=g):(Iy!==p||Uy!==g)&&oc()},on,"DOMContentLoaded",ya,Bt,"load",ya,Bt,"resize",oc],Kf(ri),Ut.forEach(function(p){return p.enable(0,1)}),f=0;f<zt.length;f+=3)Qf(ii,zt[f],zt[f+1]),Qf(ii,zt[f],zt[f+2])}else if(on){var d=function p(){s.enable(),on.removeEventListener("DOMContentLoaded",p)};on.addEventListener("DOMContentLoaded",d)}}},s.config=function(n){"limitCallbacks"in n&&(Sm=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval($f)||($f=i)&&setInterval(Hy,i),"ignoreMobileResize"in n&&(U0=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Kf(ii)||Kf(ri,n.autoRefreshEvents||"none"),TM=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var a=Ki(n),l=zt.indexOf(a),c=La(a);~l&&zt.splice(l,c?6:2),i&&(c?Es.unshift(Bt,i,Qt,i,gr,i):Es.unshift(a,i))},s.clearMatchMedia=function(n){Ut.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,a){var l=(hr(n)?Ki(n):n).getBoundingClientRect(),c=l[a?ba:Ca]*i||0;return a?l.right-c>0&&l.left+c<Bt.innerWidth:l.bottom-c>0&&l.top+c<Bt.innerHeight},s.positionInViewport=function(n,i,a){hr(n)&&(n=Ki(n));var l=n.getBoundingClientRect(),c=l[a?ba:Ca],f=i==null?c/2:i in hh?hh[i]*c:~i.indexOf("%")?parseFloat(i)*c/100:parseFloat(i)||0;return a?(l.left+f)/Bt.innerWidth:(l.top+f)/Bt.innerHeight},s.killAll=function(n){if(Ut.slice(0).forEach(function(a){return a.vars.id!=="ScrollSmoother"&&a.kill()}),n!==!0){var i=Da.killAll||[];Da={},i.forEach(function(a){return a()})}},s}();St.version="3.15.0";St.saveStyles=function(s){return s?Nc(s).forEach(function(e){if(e&&e.style){var t=dr.indexOf(e);t>=0&&dr.splice(t,5),dr.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),tt.core.getCache(e),F0())}}):dr};St.revert=function(s,e){return a_(!s,e)};St.create=function(s,e){return new St(s,e)};St.refresh=function(s){return s?oc(!0):(Nl||St.register())&&ya(!0)};St.update=function(s){return++zt.cache&&$s(s===!0?2:0)};St.clearScrollMemory=kM;St.maxScroll=function(s,e){return vs(s,e?zi:Yn)};St.getScrollFunc=function(s,e){return Ho(Ki(s),e?zi:Yn)};St.getById=function(s){return k0[s]};St.getAll=function(){return Ut.filter(function(s){return s.vars.id!=="ScrollSmoother"})};St.isScrolling=function(){return!!zr};St.snapDirectional=o_;St.addEventListener=function(s,e){var t=Da[s]||(Da[s]=[]);~t.indexOf(e)||t.push(e)};St.removeEventListener=function(s,e){var t=Da[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};St.batch=function(s,e){var t=[],n={},i=e.interval||.016,a=e.batchMax||1e9,l=function(d,p){var g=[],m=[],_=tt.delayedCall(i,function(){p(g,m),g=[],m=[]}).pause();return function(x){g.length||_.restart(!0),g.push(x.trigger),m.push(x),a<=g.length&&_.progress(1)}},c;for(c in e)n[c]=c.substr(0,2)==="on"&&bi(e[c])&&c!=="onRefreshInit"?l(c,e[c]):e[c];return bi(a)&&(a=a(),ri(St,"refresh",function(){return a=e.batchMax()})),Nc(s).forEach(function(f){var d={};for(c in n)d[c]=n[c];d.trigger=f,t.push(St.create(d))}),t};var $y=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Tm=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Un.isTouch?" pinch-zoom":""):"none",e===gr&&s(Qt,t)},id={auto:1,scroll:1},KT=function(e){var t=e.event,n=e.target,i=e.axis,a=(t.changedTouches?t.changedTouches[0]:t).target,l=a._gsap||tt.core.getCache(a),c=Ti(),f;if(!l._isScrollT||c-l._isScrollT>2e3){for(;a&&a!==Qt&&(a.scrollHeight<=a.clientHeight&&a.scrollWidth<=a.clientWidth||!(id[(f=Fr(a)).overflowY]||id[f.overflowX]));)a=a.parentNode;l._isScroll=a&&a!==n&&!La(a)&&(id[(f=Fr(a)).overflowY]||id[f.overflowX]),l._isScrollT=c}(l._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},VM=function(e,t,n,i){return Un.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&KT,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&ri(on,Un.eventTypes[0],Ky,!1,!0)},onDisable:function(){return ii(on,Un.eventTypes[0],Ky,!0)}})},ZT=/(input|label|select|textarea)/i,jy,Ky=function(e){var t=ZT.test(e.target.tagName);(t||jy)&&(e._gsapAllow=!0,jy=t)},QT=function(e){ma(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,a=t.allowNestedScroll,l=t.onRelease,c,f,d=Ki(e.target)||gr,p=tt.core.globals().ScrollSmoother,g=p&&p.get(),m=Co&&(e.content&&Ki(e.content)||g&&e.content!==!1&&!g.smooth()&&g.content()),_=Ho(d,Yn),x=Ho(d,zi),M=1,y=(Un.isTouch&&Bt.visualViewport?Bt.visualViewport.scale*Bt.visualViewport.width:Bt.outerWidth)/Bt.innerWidth,S=0,b=bi(i)?function(){return i(c)}:function(){return i||2.8},C,T,P=VM(d,e.type,!0,a),L=function(){return T=!1},D=hs,w=hs,N=function(){f=vs(d,Yn),w=mc(Co?1:0,f),n&&(D=mc(0,vs(d,zi))),C=Ra},F=function(){m._gsap.y=rc(parseFloat(m._gsap.y)+_.offset)+"px",m.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(m._gsap.y)+", 0, 1)",_.offset=_.cacheID=0},B=function(){if(T){requestAnimationFrame(L);var Y=rc(c.deltaY/2),te=w(_.v-Y);if(m&&te!==_.v+_.offset){_.offset=te-_.v;var U=rc((parseFloat(m&&m._gsap.y)||0)-_.offset);m.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+U+", 0, 1)",m._gsap.y=U+"px",_.cacheID=zt.cache,$s()}return!0}_.offset&&F(),T=!0},z,re,ie,q,ee=function(){N(),z.isActive()&&z.vars.scrollY>f&&(_()>f?z.progress(1)&&_(f):z.resetTo("scrollY",f))};return m&&tt.set(m,{y:"+=0"}),e.ignoreCheck=function(W){return Co&&W.type==="touchmove"&&B()||M>1.05&&W.type!=="touchstart"||c.isGesturing||W.touches&&W.touches.length>1},e.onPress=function(){T=!1;var W=M;M=rc((Bt.visualViewport&&Bt.visualViewport.scale||1)/y),z.pause(),W!==M&&Tm(d,M>1.01?!0:n?!1:"x"),re=x(),ie=_(),N(),C=Ra},e.onRelease=e.onGestureStart=function(W,Y){if(_.offset&&F(),!Y)q.restart(!0);else{zt.cache++;var te=b(),U,k;n&&(U=x(),k=U+te*.05*-W.velocityX/.227,te*=$y(x,U,k,vs(d,zi)),z.vars.scrollX=D(k)),U=_(),k=U+te*.05*-W.velocityY/.227,te*=$y(_,U,k,vs(d,Yn)),z.vars.scrollY=w(k),z.invalidate().duration(te).play(.01),(Co&&z.vars.scrollY>=f||U>=f-1)&&tt.to({},{onUpdate:ee,duration:te})}l&&l(W)},e.onWheel=function(){z._ts&&z.pause(),Ti()-S>1e3&&(C=0,S=Ti())},e.onChange=function(W,Y,te,U,k){if(Ra!==C&&N(),Y&&n&&x(D(U[2]===Y?re+(W.startX-W.x):x()+Y-U[1])),te){_.offset&&F();var J=k[2]===te,ze=J?ie+W.startY-W.y:_()+te-k[1],Ve=w(ze);J&&ze!==Ve&&(ie+=Ve-ze),_(Ve)}(te||Y)&&$s()},e.onEnable=function(){Tm(d,n?!1:"x"),St.addEventListener("refresh",ee),ri(Bt,"resize",ee),_.smooth&&(_.target.style.scrollBehavior="auto",_.smooth=x.smooth=!1),P.enable()},e.onDisable=function(){Tm(d,!0),ii(Bt,"resize",ee),St.removeEventListener("refresh",ee),P.kill()},e.lockAxis=e.lockAxis!==!1,c=new Un(e),c.iOS=Co,Co&&!_()&&_(1),Co&&tt.ticker.add(hs),q=c._dc,z=tt.to(c,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:zM(_,_(),function(){return z.pause()})},onUpdate:$s,onComplete:q.vars.onComplete}),c};St.sort=function(s){if(bi(s))return Ut.sort(s);var e=Bt.pageYOffset||0;return St.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+Bt.innerHeight}),Ut.sort(s||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};St.observe=function(s){return new Un(s)};St.normalizeScroll=function(s){if(typeof s>"u")return Oi;if(s===!0&&Oi)return Oi.enable();if(s===!1){Oi&&Oi.kill(),Oi=s;return}var e=s instanceof Un?s:QT(s);return Oi&&Oi.target===e.target&&Oi.kill(),La(e.target)&&(Oi=e),e};St.core={_getVelocityProp:N0,_inputObserver:VM,_scrollers:zt,_proxies:Es,bridge:{ss:function(){zr||Na("scrollStart"),zr=Ti()},ref:function(){return wi}}};RM()&&tt.registerPlugin(St);const JT=()=>{const s=Et.useRef(null),[e,t]=Et.useState({x:-100,y:-100}),[n,i]=Et.useState(!1),[a,l]=Et.useState(!1),[c,f]=Et.useState(!1);Et.useEffect(()=>{const p=b=>{t({x:b.clientX,y:b.clientY})},g=()=>{i(!0)},m=()=>{i(!1)},_=()=>{l(!0)},x=()=>{l(!1)},M=()=>{f(!0)},y=()=>{f(!1)};window.addEventListener("mousemove",p),window.addEventListener("mousedown",g),window.addEventListener("mouseup",m),document.addEventListener("mouseleave",M),document.addEventListener("mouseenter",y);const S=document.querySelectorAll('a, button, input[type="submit"]');return S.forEach(b=>{b.addEventListener("mouseenter",_),b.addEventListener("mouseleave",x)}),()=>{window.removeEventListener("mousemove",p),window.removeEventListener("mousedown",g),window.removeEventListener("mouseup",m),document.removeEventListener("mouseleave",M),document.removeEventListener("mouseenter",y),S.forEach(b=>{b.removeEventListener("mouseenter",_),b.removeEventListener("mouseleave",x)})}},[]);const d={position:"fixed",top:0,left:0,pointerEvents:"none",zIndex:9999,transform:`translate(${e.x}px, ${e.y}px)`,mixBlendMode:"difference",transition:"transform 0.1s ease, width 0.2s, height 0.2s, opacity 0.2s",opacity:c?0:1};return G.jsx("div",{ref:s,style:d,children:G.jsx("div",{style:{width:n?"30px":a?"45px":"20px",height:n?"30px":a?"45px":"20px",backgroundColor:"white",borderRadius:"50%",position:"absolute",transform:"translate(-50%, -50%)",transition:"width 0.2s, height 0.2s"}})})},eA="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='-20%200%20190%20190'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M129.49%20114.51C129.121%20116.961%20128.187%20119.293%20126.762%20121.322C125.337%20123.351%20123.461%20125.021%20121.28%20126.2C120.676%20126.535%20120.043%20126.816%20119.39%20127.04C120.22%20138.04%20102.74%20142.04%2093.32%20139.42L96.82%20151.66L87.82%20151.98L72.07%20129.43C66.76%20130.93%2060.49%20131.65%2056.44%20125.15C56.0721%20124.553%2055.7382%20123.935%2055.44%20123.3C54.4098%20123.51%2053.3614%20123.617%2052.31%20123.62C49.31%20123.62%2044.31%20122.72%2041.77%20120.96C39.7563%20119.625%2038.1588%20117.75%2037.16%20115.55C31.75%20116.29%2027.16%20115.02%2024.16%20111.88C20.36%20107.97%2019.28%20101.51%2021.26%2094.58C23.87%2085.33%2031.81%2074.91%2047.59%2071C48.9589%2069.2982%2050.5972%2067.8322%2052.44%2066.66C62.35%2060.31%2078.44%2059.76%2090.65%2065.79C95.3836%2064.9082%20100.27%2065.376%20104.75%2067.14C113.53%2070.43%20119.91%2077.31%20121.11%2084.3C123.487%2085.5317%20125.433%2087.4568%20126.69%2089.82C129.32%2094.76%20129.69%2099.71%20127.92%20103.71C129.587%20107.049%20130.138%20110.835%20129.49%20114.51ZM123.01%20109.31C121.612%20110.048%20120.056%20110.434%20118.475%20110.434C116.894%20110.434%20115.338%20110.048%20113.94%20109.31L114.67%20104.46C117.75%20104.76%20120.26%20103.8%20121.57%20101.83C123.04%2099.64%20122.81%2096.39%20120.95%2092.9C118.87%2088.99%20114.38%2088.37%20111.89%2088.34H111.73C105.49%2088.34%2099.13%2091.89%2096.56%2096.52L92.82%2094.73C93.5553%2092.3449%2094.8046%2090.15%2096.48%2088.3C95.0376%2087.0754%2093.9474%2085.4887%2093.3217%2083.703C92.696%2081.9173%2092.5574%2079.9971%2092.92%2078.14L96.61%2077.8C96.7789%2079.302%2097.4%2080.7172%2098.3911%2081.8583C99.3822%2082.9994%20100.697%2083.8125%20102.16%2084.19C105.238%2082.8161%20108.58%2082.1335%20111.95%2082.19C112.43%2082.19%20112.89%2082.24%20113.36%2082.27C110.969%2078.0312%20107.18%2074.7545%20102.64%2073C91.56%2068.7%2084.09%2075.37%2082.38%2077.67C78.26%2083.19%2080.9%2088.41%2082.91%2091.8L79.61%2094.8C76.736%2092.314%2074.8075%2088.9127%2074.15%2085.17C69.92%2086.44%2064.24%2086.17%2061.06%2080.74L64.06%2078.68C67.43%2081.2%2072.78%2080.98%2075.32%2077.87C75.9252%2076.4949%2076.6905%2075.1959%2077.6%2074C79.044%2072.093%2080.7864%2070.4316%2082.76%2069.08C74.47%2066.82%2062.76%2067.19%2055.68%2071.73C53.7668%2072.841%2052.192%2074.4517%2051.1244%2076.3895C50.0569%2078.3274%2049.5368%2080.5192%2049.62%2082.73C49.62%2086.3%2052.42%2091.94%2056.19%2092.82L54%2097.07C51.5946%2096.5129%2049.4109%2095.2487%2047.73%2093.44L44.48%2097.58L41.23%2096L44.41%2087.68C43.8904%2086.064%2043.624%2084.3774%2043.62%2082.68C43.628%2081.3361%2043.7687%2079.9963%2044.04%2078.68C34.04%2082.81%2029.1%2089.68%2027.29%2095.96C25.9%20100.79%2026.44%20105.15%2028.72%20107.49C30.53%20109.35%2033.3%20109.79%2035.91%20109.62L42.91%20104.17L45.21%20106.11L43.13%20112.93C44.22%20116.4%2047.79%20118.19%2054.3%20116.93C54.6375%20114.169%2055.7272%20111.554%2057.45%20109.37C58.7133%20107.552%2060.3846%20106.056%2062.33%20105L65.75%2095.79L69.17%2095.64L68.8%20103.19C74.55%20102.6%2080.98%20103.77%2086.97%20102.87L88.07%20106.87C79.29%20110.93%2070.3%20104.31%2062.15%20113.04C59.22%20116.18%2060.34%20118.91%2062.15%20121.66C64.76%20125.59%2069.66%20123.23%2074.67%20121.66C82.26%20119.34%2087.77%20117.66%2098.16%20118.51C95.68%20113.8%2095.92%20108.11%2099.24%20101.85L104.13%20103.78C100.7%20111.69%20103.91%20116.27%20106.13%20118.29C109.56%20121.41%20114.72%20122.35%20118.13%20120.47C119.436%20119.749%20120.559%20118.737%20121.412%20117.513C122.265%20116.289%20122.825%20114.885%20123.05%20113.41C123.275%20112.051%20123.258%20110.663%20123%20109.31H123.01Z'%20fill='%23000000'/%3e%3c/svg%3e",tA="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20x='0px'%20y='0px'%20width='100'%20height='100'%20viewBox='0%200%2050%2050'%3e%3cpath%20d='M%2016%203%20C%208.83%203%203%208.83%203%2016%20L%203%2034%20C%203%2041.17%208.83%2047%2016%2047%20L%2034%2047%20C%2041.17%2047%2047%2041.17%2047%2034%20L%2047%2016%20C%2047%208.83%2041.17%203%2034%203%20L%2016%203%20z%20M%2037%2011%20C%2038.1%2011%2039%2011.9%2039%2013%20C%2039%2014.1%2038.1%2015%2037%2015%20C%2035.9%2015%2035%2014.1%2035%2013%20C%2035%2011.9%2035.9%2011%2037%2011%20z%20M%2025%2014%20C%2031.07%2014%2036%2018.93%2036%2025%20C%2036%2031.07%2031.07%2036%2025%2036%20C%2018.93%2036%2014%2031.07%2014%2025%20C%2014%2018.93%2018.93%2014%2025%2014%20z%20M%2025%2016%20C%2020.04%2016%2016%2020.04%2016%2025%20C%2016%2029.96%2020.04%2034%2025%2034%20C%2029.96%2034%2034%2029.96%2034%2025%20C%2034%2020.04%2029.96%2016%2025%2016%20z'%3e%3c/path%3e%3c/svg%3e",nA="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20x='0px'%20y='0px'%20width='100'%20height='100'%20viewBox='0%200%2064%2064'%3e%3cpath%20d='M32%206C17.641%206%206%2017.641%206%2032c0%2012.277%208.512%2022.56%2019.955%2025.286-.592-.141-1.179-.299-1.755-.479V50.85c0%200-.975.325-2.275.325-3.637%200-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471%201.625%200%202.857%201.729%203.429%202.623%201.417%202.207%202.938%202.577%203.721%202.577.975%200%201.817-.146%202.397-.426.268-1.888%201.108-3.57%202.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4%200-2.928%201.175-5.619%203.133-7.792C19.333%2023.641%2019%2022.494%2019%2020.625c0-1.235.086-2.751.65-4.225%200%200%203.708.026%207.205%203.338C28.469%2019.268%2030.196%2019%2032%2019s3.531.268%205.145.738c3.497-3.312%207.205-3.338%207.205-3.338.567%201.474.65%202.99.65%204.225%200%202.015-.268%203.19-.432%203.697C46.466%2026.475%2047.6%2029.124%2047.6%2032c0%205.684-4.303%209.181-10.4%2010.4%201.628%201.43%202.6%203.513%202.6%205.85v8.557c-.576.181-1.162.338-1.755.479C49.488%2054.56%2058%2044.277%2058%2032%2058%2017.641%2046.359%206%2032%206zM33.813%2057.93C33.214%2057.972%2032.61%2058%2032%2058%2032.61%2058%2033.213%2057.971%2033.813%2057.93zM37.786%2057.346c-1.164.265-2.357.451-3.575.554C35.429%2057.797%2036.622%2057.61%2037.786%2057.346zM32%2058c-.61%200-1.214-.028-1.813-.07C30.787%2057.971%2031.39%2058%2032%2058zM29.788%2057.9c-1.217-.103-2.411-.289-3.574-.554C27.378%2057.61%2028.571%2057.797%2029.788%2057.9z'%3e%3c/path%3e%3c/svg%3e",iA="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20x='0px'%20y='0px'%20width='100'%20height='100'%20viewBox='0%200%2050%2050'%3e%3cpath%20d='M%2011%204%20C%207.134%204%204%207.134%204%2011%20L%204%2039%20C%204%2042.866%207.134%2046%2011%2046%20L%2039%2046%20C%2042.866%2046%2046%2042.866%2046%2039%20L%2046%2011%20C%2046%207.134%2042.866%204%2039%204%20L%2011%204%20z%20M%2013.085938%2013%20L%2021.023438%2013%20L%2026.660156%2021.009766%20L%2033.5%2013%20L%2036%2013%20L%2027.789062%2022.613281%20L%2037.914062%2037%20L%2029.978516%2037%20L%2023.4375%2027.707031%20L%2015.5%2037%20L%2013%2037%20L%2022.308594%2026.103516%20L%2013.085938%2013%20z%20M%2016.914062%2015%20L%2031.021484%2035%20L%2034.085938%2035%20L%2019.978516%2015%20L%2016.914062%2015%20z'%3e%3c/path%3e%3c/svg%3e",rA="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20x='0px'%20y='0px'%20width='100'%20height='100'%20viewBox='0%200%2050%2050'%3e%3cpath%20d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z%20M17,20v19h-6V20H17z%20M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z%20M39,39h-6c0,0,0-9.26,0-10%20c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56%20c3.97,0,7.19,2.73,7.19,8.26V39z'%3e%3c/path%3e%3c/svg%3e",sA=[{id:"tradepulse",label:"Trade",idx:"01",flight:0},{id:"ragdesk",label:"RAG",idx:"02",flight:1},{id:"flowops",label:"Flow",idx:"03",flight:2},{id:"designlab",label:"Design",idx:"04",flight:3},{id:"toolkit",label:"Toolkit",idx:"05",flight:-1},{id:"contact",label:"Contact",idx:"06",flight:-1}],oA=[{name:"TypeScript",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",desc:"Scalable, type-safe applications end to end."},{name:"React",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",desc:"Interactive interfaces with modern React."},{name:"Node.js",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",desc:"Server-side systems and APIs."},{name:"MongoDB",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",desc:"Document data modelling and querying."},{name:"Java",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",desc:"Backend development, OOP foundations."},{name:"Anything else",icon:eA,desc:"I pick up whatever the problem needs."}],aA=[{idx:"K-01",title:"Financial & Trading",copy:"Built trading platforms, processed real-time order flows, integrated market data APIs. Price action analysis with disciplined trading psychology."},{idx:"K-02",title:"AI & Automation",copy:"Customer-service chatbots with RAG and vector databases. Deep understanding of LLM behavior, embeddings and agents that solve real user problems."},{idx:"K-03",title:"Multidisciplinary",copy:"Reading across psychology, history, productivity and investing. Shaped by Poor Charlie's Almanack, Atomic Habits, Sapiens and Deep Work."},{idx:"K-04",title:"Sports & Discipline",copy:"Regular training — sharpening focus, building discipline, staying calm under pressure and committing to long-term growth."}],HM=[{href:"https://x.com/horuscheung",icon:iA,alt:"X"},{href:"https://github.com/horuscheung",icon:nA,alt:"GitHub"},{href:"https://instagram.com/horus.developer",icon:tA,alt:"Instagram"},{href:"https://linkedin.com/in/horuscheung",icon:rA,alt:"LinkedIn"}],lA=["DEVELOPER","AI","TRADING","PROBLEM SOLVER","UI"],uA=["TYPESCRIPT","REACT","NODE.JS","MONGODB","JAVA","LLM AGENTS","RAG"],cA=({active:s,scrolled:e,onNavigate:t,onHome:n})=>G.jsxs("nav",{className:`nav ${e?"scrolled":""}`,children:[G.jsxs("a",{className:"nav-brand",href:"#top",onClick:i=>{i.preventDefault(),n()},children:["HORUS",G.jsx("span",{className:"tick",children:"//"}),"CHEUNG"]}),G.jsx("ul",{className:"nav-links",children:sA.map(({id:i,label:a,idx:l,flight:c})=>G.jsx("li",{children:G.jsxs("button",{className:s===i?"active":"",onClick:()=>t(i,c),children:[G.jsx("span",{className:"idx",children:l}),a]})},i))}),G.jsx("div",{className:"nav-social",children:HM.map(({href:i,icon:a,alt:l})=>G.jsx("a",{href:i,target:"_blank",rel:"noopener noreferrer",children:G.jsx("img",{src:a,alt:l})},l))})]});class fA{constructor(e){et(this,"el");et(this,"chars");et(this,"queue");et(this,"frameRequest");et(this,"frame");et(this,"resolvePromise");this.el=e,this.chars="!<>-_\\/[]{}—=+*^?#________",this.queue=0,this.frameRequest=null,this.frame=0,this.resolvePromise=null}setText(e,t=30){e.length>t&&(e=e.substring(0,t)),this.frameRequest&&(cancelAnimationFrame(this.frameRequest),this.frameRequest=null);const n=this.el.innerText,i=Math.max(n.length,e.length);return this.queue=0,this.frame=0,this.el.innerText="",new Promise(a=>{this.resolvePromise=a,this.el.style.visibility="visible";const l=()=>{let c="",f=0;for(let d=0;d<i;d++){if(d>=e.length){f++;continue}const p=e[d],g=Math.random()*100;this.frame>=5+d*2||g>90?(f++,c+=p):c+=this.chars[Math.floor(Math.random()*this.chars.length)]}this.el.innerText=c,f===i?this.resolvePromise&&(this.resolvePromise(),this.resolvePromise=null):(this.frame++,this.frameRequest=requestAnimationFrame(l))};this.frameRequest=requestAnimationFrame(l)})}}const Zy=["SOFTWARE DEVELOPER","AI BUILDER","PROBLEM SOLVER"],dA=()=>{const s=Et.useRef(null);return Et.useEffect(()=>{if(!s.current)return;const e=new fA(s.current);let t=0,n,i=!1;const a=()=>{i||(e.setText(Zy[t%Zy.length],24).then(()=>{n=window.setTimeout(a,2200)}),t+=1)};return a(),()=>{i=!0,window.clearTimeout(n)}},[]),G.jsxs("section",{className:"hero",id:"hero",children:[G.jsxs("div",{className:"hero-deco","aria-hidden":"true",children:[G.jsx("svg",{className:"deco-a",viewBox:"0 0 220 90",children:G.jsx("path",{className:"deco-red",d:"M2 88 C 60 80, 80 30, 140 24 S 210 8, 218 2"})}),G.jsx("svg",{className:"deco-b",viewBox:"0 0 260 100",children:G.jsx("path",{className:"deco-blue",d:"M2 6 C 70 14, 110 70, 170 76 S 246 92, 258 98"})})]}),G.jsxs("div",{className:"hero-inner",children:[G.jsxs("div",{className:"hero-text",children:[G.jsxs("p",{className:"hero-eyebrow",children:["SOFTWARE · AI · DESIGN ",G.jsx("span",{className:"blink",children:"▮"})]}),G.jsxs("h1",{className:"hero-title",children:[G.jsx("span",{className:"line line-1",children:"HORUS".split("").map((e,t)=>G.jsx("span",{className:"c",children:e},t))}),G.jsx("span",{className:"line line-2",children:"CHEUNG".split("").map((e,t)=>G.jsx("span",{className:"c",children:e},t))})]}),G.jsx("p",{className:"hero-scramble",ref:s}),G.jsxs("p",{className:"hero-desc",children:[G.jsx("b",{children:"Developer, innovator, creator, problem solver."})," I build software and AI products end-to-end — from idea to launch."]})]}),G.jsxs("div",{className:"hero-art",children:[G.jsx("div",{className:"hero-art-frame",children:G.jsxs("svg",{className:"mission-map",viewBox:"0 0 340 300",role:"img","aria-label":"Mission flight plan",children:[G.jsxs("g",{className:"mm-orbits",children:[G.jsx("ellipse",{cx:"170",cy:"150",rx:"150",ry:"118"}),G.jsx("ellipse",{cx:"170",cy:"150",rx:"112",ry:"86"}),G.jsx("ellipse",{cx:"170",cy:"150",rx:"72",ry:"54"})]}),G.jsx("path",{className:"mm-route",d:"M28 268 C 90 236, 60 176, 118 152 S 214 130, 234 96 S 296 52, 312 32"}),G.jsxs("g",{className:"mm-points",children:[G.jsx("circle",{cx:"28",cy:"268",r:"5",fill:"#fb7185"}),G.jsx("circle",{cx:"118",cy:"152",r:"5",fill:"#2dd4bf"}),G.jsx("circle",{cx:"234",cy:"96",r:"5",fill:"#a78bfa"}),G.jsx("circle",{cx:"312",cy:"32",r:"5",fill:"#4f6df5"})]}),G.jsxs("g",{className:"mm-labels",children:[G.jsx("text",{x:"38",y:"272",children:"01 LAUNCH"}),G.jsx("text",{x:"128",y:"138",children:"02 RAGDESK"}),G.jsx("text",{x:"176",y:"88",children:"03 FLOWOPS"}),G.jsx("text",{x:"222",y:"20",children:"04 DESIGNLAB"})]}),G.jsx("g",{className:"mm-sat",children:G.jsx("circle",{cx:"170",cy:"32",r:"3.4",fill:"#ffd166"})}),G.jsx("circle",{cx:"170",cy:"150",r:"10",fill:"#1a2030",stroke:"#4f6df5"})]})}),G.jsx("span",{className:"hero-art-caption",children:"FIG. 00 — FLIGHT PLAN"})]})]}),G.jsxs("div",{className:"hero-cue",children:[G.jsx("span",{className:"cue-mouse","aria-hidden":"true",children:G.jsx("span",{className:"cue-dot"})}),"SCROLL TO LAUNCH"]})]})};Jt.registerPlugin(ns,St);const Qy=({items:s,color:e="transparent",reverse:t=!1,speed:n=22})=>{const i=Et.useRef(null);ns(()=>{const l=i.current.querySelector(".marquee-track"),c=t?1:-1,f=Jt.fromTo(l,{xPercent:c===1?-50:0},{xPercent:c===1?0:-50,ease:"none",duration:n,repeat:-1});St.create({trigger:i.current,start:"top bottom",end:"bottom top",onUpdate:d=>{Jt.to(f,{timeScale:d.direction,duration:.4,overwrite:!0})}})},{scope:i});const a=[...s,...s,...s];return G.jsx("div",{className:"brutal-marquee",ref:i,style:{backgroundColor:e},"aria-hidden":"true",children:G.jsx("div",{className:"marquee-track",children:[0,1].map(l=>G.jsx("div",{className:"marquee-half",children:a.map((c,f)=>G.jsxs("span",{className:"marquee-item",children:[c,G.jsx("span",{className:"marquee-star",children:"✦"})]},f))},l))})})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const l_="185",hA=0,Jy=1,pA=2,qd=1,mA=2,ac=3,Go=0,ir=1,ms=2,ws=0,Xl=1,Ws=2,e1=3,t1=4,gA=5,_a=100,_A=101,vA=102,xA=103,yA=104,SA=200,MA=201,EA=202,wA=203,V0=204,H0=205,TA=206,AA=207,bA=208,CA=209,RA=210,PA=211,LA=212,DA=213,NA=214,G0=0,W0=1,X0=2,eu=3,Y0=4,q0=5,$0=6,j0=7,GM=0,IA=1,UA=2,Ts=0,u_=1,c_=2,f_=3,bh=4,d_=5,h_=6,p_=7,WM=300,Ia=301,tu=302,Am=303,bm=304,Ch=306,K0=1e3,qs=1001,Z0=1002,hi=1003,FA=1004,rd=1005,Ri=1006,Cm=1007,Sa=1008,xr=1009,XM=1010,YM=1011,Uc=1012,m_=1013,bs=1014,xs=1015,Er=1016,g_=1017,__=1018,Fc=1020,qM=35902,$M=35899,jM=1021,KM=1022,es=1023,Js=1026,Ma=1027,ZM=1028,v_=1029,Ua=1030,x_=1031,y_=1033,$d=33776,jd=33777,Kd=33778,Zd=33779,Q0=35840,J0=35841,eg=35842,tg=35843,ng=36196,ig=37492,rg=37496,sg=37488,og=37489,ph=37490,ag=37491,lg=37808,ug=37809,cg=37810,fg=37811,dg=37812,hg=37813,pg=37814,mg=37815,gg=37816,_g=37817,vg=37818,xg=37819,yg=37820,Sg=37821,Mg=36492,Eg=36494,wg=36495,Tg=36283,Ag=36284,mh=36285,bg=36286,OA=3200,Cg=0,kA=1,Ro="",mr="srgb",gh="srgb-linear",_h="linear",Zt="srgb",dl=7680,n1=519,BA=512,zA=513,VA=514,S_=515,HA=516,GA=517,M_=518,WA=519,Rg=35044,i1="300 es",ys=2e3,Oc=2001;function XA(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function kc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function YA(){const s=kc("canvas");return s.style.display="block",s}const r1={};function vh(...s){const e="THREE."+s.shift();console.log(e,...s)}function QM(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function xt(...s){s=QM(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Yt(...s){s=QM(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Yl(...s){const e=s.join(" ");e in r1||(r1[e]=!0,xt(...s))}function qA(s,e,t){return new Promise(function(n,i){function a(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const $A={[G0]:W0,[X0]:$0,[Y0]:j0,[eu]:q0,[W0]:G0,[$0]:X0,[j0]:Y0,[q0]:eu};class ka{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const a=i.indexOf(t);a!==-1&&i.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let a=0,l=i.length;a<l;a++)i[a].call(this,e);e.target=null}}}const Mi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let s1=1234567;const Mc=Math.PI/180,Bc=180/Math.PI;function js(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mi[s&255]+Mi[s>>8&255]+Mi[s>>16&255]+Mi[s>>24&255]+"-"+Mi[e&255]+Mi[e>>8&255]+"-"+Mi[e>>16&15|64]+Mi[e>>24&255]+"-"+Mi[t&63|128]+Mi[t>>8&255]+"-"+Mi[t>>16&255]+Mi[t>>24&255]+Mi[n&255]+Mi[n>>8&255]+Mi[n>>16&255]+Mi[n>>24&255]).toLowerCase()}function bt(s,e,t){return Math.max(e,Math.min(t,s))}function E_(s,e){return(s%e+e)%e}function jA(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function KA(s,e,t){return s!==e?(t-s)/(e-s):0}function Ec(s,e,t){return(1-t)*s+t*e}function ZA(s,e,t,n){return Ec(s,e,1-Math.exp(-t*n))}function QA(s,e=1){return e-Math.abs(E_(s,e*2)-e)}function JA(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function eb(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function tb(s,e){return s+Math.floor(Math.random()*(e-s+1))}function nb(s,e){return s+Math.random()*(e-s)}function ib(s){return s*(.5-Math.random())}function rb(s){s!==void 0&&(s1=s);let e=s1+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sb(s){return s*Mc}function ob(s){return s*Bc}function ab(s){return(s&s-1)===0&&s!==0}function lb(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ub(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function cb(s,e,t,n,i){const a=Math.cos,l=Math.sin,c=a(t/2),f=l(t/2),d=a((e+n)/2),p=l((e+n)/2),g=a((e-n)/2),m=l((e-n)/2),_=a((n-e)/2),x=l((n-e)/2);switch(i){case"XYX":s.set(c*p,f*g,f*m,c*d);break;case"YZY":s.set(f*m,c*p,f*g,c*d);break;case"ZXZ":s.set(f*g,f*m,c*p,c*d);break;case"XZX":s.set(c*p,f*x,f*_,c*d);break;case"YXY":s.set(f*_,c*p,f*x,c*d);break;case"ZYZ":s.set(f*x,f*_,c*p,c*d);break;default:xt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Jr(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function an(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Qd={DEG2RAD:Mc,RAD2DEG:Bc,generateUUID:js,clamp:bt,euclideanModulo:E_,mapLinear:jA,inverseLerp:KA,lerp:Ec,damp:ZA,pingpong:QA,smoothstep:JA,smootherstep:eb,randInt:tb,randFloat:nb,randFloatSpread:ib,seededRandom:rb,degToRad:sb,radToDeg:ob,isPowerOfTwo:ab,ceilPowerOfTwo:lb,floorPowerOfTwo:ub,setQuaternionFromProperEuler:cb,normalize:an,denormalize:Jr},F_=class F_{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*i+e.x,this.y=a*i+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};F_.prototype.isVector2=!0;let ft=F_;class ou{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,a,l,c){let f=n[i+0],d=n[i+1],p=n[i+2],g=n[i+3],m=a[l+0],_=a[l+1],x=a[l+2],M=a[l+3];if(g!==M||f!==m||d!==_||p!==x){let y=f*m+d*_+p*x+g*M;y<0&&(m=-m,_=-_,x=-x,M=-M,y=-y);let S=1-c;if(y<.9995){const b=Math.acos(y),C=Math.sin(b);S=Math.sin(S*b)/C,c=Math.sin(c*b)/C,f=f*S+m*c,d=d*S+_*c,p=p*S+x*c,g=g*S+M*c}else{f=f*S+m*c,d=d*S+_*c,p=p*S+x*c,g=g*S+M*c;const b=1/Math.sqrt(f*f+d*d+p*p+g*g);f*=b,d*=b,p*=b,g*=b}}e[t]=f,e[t+1]=d,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,i,a,l){const c=n[i],f=n[i+1],d=n[i+2],p=n[i+3],g=a[l],m=a[l+1],_=a[l+2],x=a[l+3];return e[t]=c*x+p*g+f*_-d*m,e[t+1]=f*x+p*m+d*g-c*_,e[t+2]=d*x+p*_+c*m-f*g,e[t+3]=p*x-c*g-f*m-d*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,a=e._z,l=e._order,c=Math.cos,f=Math.sin,d=c(n/2),p=c(i/2),g=c(a/2),m=f(n/2),_=f(i/2),x=f(a/2);switch(l){case"XYZ":this._x=m*p*g+d*_*x,this._y=d*_*g-m*p*x,this._z=d*p*x+m*_*g,this._w=d*p*g-m*_*x;break;case"YXZ":this._x=m*p*g+d*_*x,this._y=d*_*g-m*p*x,this._z=d*p*x-m*_*g,this._w=d*p*g+m*_*x;break;case"ZXY":this._x=m*p*g-d*_*x,this._y=d*_*g+m*p*x,this._z=d*p*x+m*_*g,this._w=d*p*g-m*_*x;break;case"ZYX":this._x=m*p*g-d*_*x,this._y=d*_*g+m*p*x,this._z=d*p*x-m*_*g,this._w=d*p*g+m*_*x;break;case"YZX":this._x=m*p*g+d*_*x,this._y=d*_*g+m*p*x,this._z=d*p*x-m*_*g,this._w=d*p*g-m*_*x;break;case"XZY":this._x=m*p*g-d*_*x,this._y=d*_*g-m*p*x,this._z=d*p*x+m*_*g,this._w=d*p*g+m*_*x;break;default:xt("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],a=t[8],l=t[1],c=t[5],f=t[9],d=t[2],p=t[6],g=t[10],m=n+c+g;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(p-f)*_,this._y=(a-d)*_,this._z=(l-i)*_}else if(n>c&&n>g){const _=2*Math.sqrt(1+n-c-g);this._w=(p-f)/_,this._x=.25*_,this._y=(i+l)/_,this._z=(a+d)/_}else if(c>g){const _=2*Math.sqrt(1+c-n-g);this._w=(a-d)/_,this._x=(i+l)/_,this._y=.25*_,this._z=(f+p)/_}else{const _=2*Math.sqrt(1+g-n-c);this._w=(l-i)/_,this._x=(a+d)/_,this._y=(f+p)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,a=e._z,l=e._w,c=t._x,f=t._y,d=t._z,p=t._w;return this._x=n*p+l*c+i*d-a*f,this._y=i*p+l*f+a*c-n*d,this._z=a*p+l*d+n*f-i*c,this._w=l*p-n*c-i*f-a*d,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,a=e._z,l=e._w,c=this.dot(e);c<0&&(n=-n,i=-i,a=-a,l=-l,c=-c);let f=1-t;if(c<.9995){const d=Math.acos(c),p=Math.sin(d);f=Math.sin(f*d)/p,t=Math.sin(t*d)/p,this._x=this._x*f+n*t,this._y=this._y*f+i*t,this._z=this._z*f+a*t,this._w=this._w*f+l*t,this._onChangeCallback()}else this._x=this._x*f+n*t,this._y=this._y*f+i*t,this._z=this._z*f+a*t,this._w=this._w*f+l*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const O_=class O_{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(o1.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(o1.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*i,this.y=a[1]*t+a[4]*n+a[7]*i,this.z=a[2]*t+a[5]*n+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*i+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*i+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*i+a[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,a=e.x,l=e.y,c=e.z,f=e.w,d=2*(l*i-c*n),p=2*(c*t-a*i),g=2*(a*n-l*t);return this.x=t+f*d+l*g-c*p,this.y=n+f*p+c*d-a*g,this.z=i+f*g+a*p-l*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i,this.y=a[1]*t+a[5]*n+a[9]*i,this.z=a[2]*t+a[6]*n+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,a=e.z,l=t.x,c=t.y,f=t.z;return this.x=i*f-a*c,this.y=a*l-n*f,this.z=n*c-i*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rm.copy(this).projectOnVector(e),this.sub(Rm)}reflect(e){return this.sub(Rm.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};O_.prototype.isVector3=!0;let X=O_;const Rm=new X,o1=new ou,k_=class k_{constructor(e,t,n,i,a,l,c,f,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,l,c,f,d)}set(e,t,n,i,a,l,c,f,d){const p=this.elements;return p[0]=e,p[1]=i,p[2]=c,p[3]=t,p[4]=a,p[5]=f,p[6]=n,p[7]=l,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,l=n[0],c=n[3],f=n[6],d=n[1],p=n[4],g=n[7],m=n[2],_=n[5],x=n[8],M=i[0],y=i[3],S=i[6],b=i[1],C=i[4],T=i[7],P=i[2],L=i[5],D=i[8];return a[0]=l*M+c*b+f*P,a[3]=l*y+c*C+f*L,a[6]=l*S+c*T+f*D,a[1]=d*M+p*b+g*P,a[4]=d*y+p*C+g*L,a[7]=d*S+p*T+g*D,a[2]=m*M+_*b+x*P,a[5]=m*y+_*C+x*L,a[8]=m*S+_*T+x*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],l=e[4],c=e[5],f=e[6],d=e[7],p=e[8];return t*l*p-t*c*d-n*a*p+n*c*f+i*a*d-i*l*f}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],l=e[4],c=e[5],f=e[6],d=e[7],p=e[8],g=p*l-c*d,m=c*f-p*a,_=d*a-l*f,x=t*g+n*m+i*_;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/x;return e[0]=g*M,e[1]=(i*d-p*n)*M,e[2]=(c*n-i*l)*M,e[3]=m*M,e[4]=(p*t-i*f)*M,e[5]=(i*a-c*t)*M,e[6]=_*M,e[7]=(n*f-d*t)*M,e[8]=(l*t-n*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,a,l,c){const f=Math.cos(a),d=Math.sin(a);return this.set(n*f,n*d,-n*(f*l+d*c)+l+e,-i*d,i*f,-i*(-d*l+f*c)+c+t,0,0,1),this}scale(e,t){return Yl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Pm.makeScale(e,t)),this}rotate(e){return Yl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Pm.makeRotation(-e)),this}translate(e,t){return Yl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Pm.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};k_.prototype.isMatrix3=!0;let At=k_;const Pm=new At,a1=new At().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),l1=new At().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fb(){const s={enabled:!0,workingColorSpace:gh,spaces:{},convert:function(i,a,l){return this.enabled===!1||a===l||!a||!l||(this.spaces[a].transfer===Zt&&(i.r=Ks(i.r),i.g=Ks(i.g),i.b=Ks(i.b)),this.spaces[a].primaries!==this.spaces[l].primaries&&(i.applyMatrix3(this.spaces[a].toXYZ),i.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Zt&&(i.r=ql(i.r),i.g=ql(i.g),i.b=ql(i.b))),i},workingToColorSpace:function(i,a){return this.convert(i,this.workingColorSpace,a)},colorSpaceToWorking:function(i,a){return this.convert(i,a,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ro?_h:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,a=this.workingColorSpace){return i.fromArray(this.spaces[a].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,a,l){return i.copy(this.spaces[a].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,a){return Yl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,a)},toWorkingColorSpace:function(i,a){return Yl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[gh]:{primaries:e,whitePoint:n,transfer:_h,toXYZ:a1,fromXYZ:l1,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mr},outputColorSpaceConfig:{drawingBufferColorSpace:mr}},[mr]:{primaries:e,whitePoint:n,transfer:Zt,toXYZ:a1,fromXYZ:l1,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mr}}}),s}const Gt=fb();function Ks(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ql(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let hl;class db{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hl===void 0&&(hl=kc("canvas")),hl.width=e.width,hl.height=e.height;const i=hl.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=hl}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=kc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),a=i.data;for(let l=0;l<a.length;l++)a[l]=Ks(a[l]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ks(t[n]/255)*255):t[n]=Ks(t[n]);return{data:t,width:e.width,height:e.height}}else return xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hb=0;class w_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hb++}),this.uuid=js(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let l=0,c=i.length;l<c;l++)i[l].isDataTexture?a.push(Lm(i[l].image)):a.push(Lm(i[l]))}else a=Lm(i);n.url=a}return t||(e.images[this.uuid]=n),n}}function Lm(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?db.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(xt("Texture: Unable to serialize Texture."),{})}let pb=0;const Dm=new X;class gi extends ka{constructor(e=gi.DEFAULT_IMAGE,t=gi.DEFAULT_MAPPING,n=qs,i=qs,a=Ri,l=Sa,c=es,f=xr,d=gi.DEFAULT_ANISOTROPY,p=Ro){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pb++}),this.uuid=js(),this.name="",this.source=new w_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=l,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=f,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new At,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Dm).x}get height(){return this.source.getSize(Dm).y}get depth(){return this.source.getSize(Dm).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){xt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){xt(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==WM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case K0:e.x=e.x-Math.floor(e.x);break;case qs:e.x=e.x<0?0:1;break;case Z0:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case K0:e.y=e.y-Math.floor(e.y);break;case qs:e.y=e.y<0?0:1;break;case Z0:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gi.DEFAULT_IMAGE=null;gi.DEFAULT_MAPPING=WM;gi.DEFAULT_ANISOTROPY=1;const B_=class B_{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*i+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*i+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*i+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*i+l[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,a;const f=e.elements,d=f[0],p=f[4],g=f[8],m=f[1],_=f[5],x=f[9],M=f[2],y=f[6],S=f[10];if(Math.abs(p-m)<.01&&Math.abs(g-M)<.01&&Math.abs(x-y)<.01){if(Math.abs(p+m)<.1&&Math.abs(g+M)<.1&&Math.abs(x+y)<.1&&Math.abs(d+_+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(d+1)/2,T=(_+1)/2,P=(S+1)/2,L=(p+m)/4,D=(g+M)/4,w=(x+y)/4;return C>T&&C>P?C<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(C),i=L/n,a=D/n):T>P?T<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(T),n=L/i,a=w/i):P<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(P),n=D/a,i=w/a),this.set(n,i,a,t),this}let b=Math.sqrt((y-x)*(y-x)+(g-M)*(g-M)+(m-p)*(m-p));return Math.abs(b)<.001&&(b=1),this.x=(y-x)/b,this.y=(g-M)/b,this.z=(m-p)/b,this.w=Math.acos((d+_+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this.w=bt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this.w=bt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};B_.prototype.isVector4=!0;let ln=B_;class mb extends ka{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ln(0,0,e,t),this.scissorTest=!1,this.viewport=new ln(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},a=new gi(i),l=n.count;for(let c=0;c<l;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ri,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new w_(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rr extends mb{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class JM extends gi{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hi,this.minFilter=hi,this.wrapR=qs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gb extends gi{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hi,this.minFilter=hi,this.wrapR=qs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mh=class Mh{constructor(e,t,n,i,a,l,c,f,d,p,g,m,_,x,M,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,l,c,f,d,p,g,m,_,x,M,y)}set(e,t,n,i,a,l,c,f,d,p,g,m,_,x,M,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=n,S[12]=i,S[1]=a,S[5]=l,S[9]=c,S[13]=f,S[2]=d,S[6]=p,S[10]=g,S[14]=m,S[3]=_,S[7]=x,S[11]=M,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mh().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/pl.setFromMatrixColumn(e,0).length(),a=1/pl.setFromMatrixColumn(e,1).length(),l=1/pl.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,a=e.z,l=Math.cos(n),c=Math.sin(n),f=Math.cos(i),d=Math.sin(i),p=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const m=l*p,_=l*g,x=c*p,M=c*g;t[0]=f*p,t[4]=-f*g,t[8]=d,t[1]=_+x*d,t[5]=m-M*d,t[9]=-c*f,t[2]=M-m*d,t[6]=x+_*d,t[10]=l*f}else if(e.order==="YXZ"){const m=f*p,_=f*g,x=d*p,M=d*g;t[0]=m+M*c,t[4]=x*c-_,t[8]=l*d,t[1]=l*g,t[5]=l*p,t[9]=-c,t[2]=_*c-x,t[6]=M+m*c,t[10]=l*f}else if(e.order==="ZXY"){const m=f*p,_=f*g,x=d*p,M=d*g;t[0]=m-M*c,t[4]=-l*g,t[8]=x+_*c,t[1]=_+x*c,t[5]=l*p,t[9]=M-m*c,t[2]=-l*d,t[6]=c,t[10]=l*f}else if(e.order==="ZYX"){const m=l*p,_=l*g,x=c*p,M=c*g;t[0]=f*p,t[4]=x*d-_,t[8]=m*d+M,t[1]=f*g,t[5]=M*d+m,t[9]=_*d-x,t[2]=-d,t[6]=c*f,t[10]=l*f}else if(e.order==="YZX"){const m=l*f,_=l*d,x=c*f,M=c*d;t[0]=f*p,t[4]=M-m*g,t[8]=x*g+_,t[1]=g,t[5]=l*p,t[9]=-c*p,t[2]=-d*p,t[6]=_*g+x,t[10]=m-M*g}else if(e.order==="XZY"){const m=l*f,_=l*d,x=c*f,M=c*d;t[0]=f*p,t[4]=-g,t[8]=d*p,t[1]=m*g+M,t[5]=l*p,t[9]=_*g-x,t[2]=x*g-_,t[6]=c*p,t[10]=M*g+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_b,e,vb)}lookAt(e,t,n){const i=this.elements;return cr.subVectors(e,t),cr.lengthSq()===0&&(cr.z=1),cr.normalize(),So.crossVectors(n,cr),So.lengthSq()===0&&(Math.abs(n.z)===1?cr.x+=1e-4:cr.z+=1e-4,cr.normalize(),So.crossVectors(n,cr)),So.normalize(),sd.crossVectors(cr,So),i[0]=So.x,i[4]=sd.x,i[8]=cr.x,i[1]=So.y,i[5]=sd.y,i[9]=cr.y,i[2]=So.z,i[6]=sd.z,i[10]=cr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,l=n[0],c=n[4],f=n[8],d=n[12],p=n[1],g=n[5],m=n[9],_=n[13],x=n[2],M=n[6],y=n[10],S=n[14],b=n[3],C=n[7],T=n[11],P=n[15],L=i[0],D=i[4],w=i[8],N=i[12],F=i[1],B=i[5],z=i[9],re=i[13],ie=i[2],q=i[6],ee=i[10],W=i[14],Y=i[3],te=i[7],U=i[11],k=i[15];return a[0]=l*L+c*F+f*ie+d*Y,a[4]=l*D+c*B+f*q+d*te,a[8]=l*w+c*z+f*ee+d*U,a[12]=l*N+c*re+f*W+d*k,a[1]=p*L+g*F+m*ie+_*Y,a[5]=p*D+g*B+m*q+_*te,a[9]=p*w+g*z+m*ee+_*U,a[13]=p*N+g*re+m*W+_*k,a[2]=x*L+M*F+y*ie+S*Y,a[6]=x*D+M*B+y*q+S*te,a[10]=x*w+M*z+y*ee+S*U,a[14]=x*N+M*re+y*W+S*k,a[3]=b*L+C*F+T*ie+P*Y,a[7]=b*D+C*B+T*q+P*te,a[11]=b*w+C*z+T*ee+P*U,a[15]=b*N+C*re+T*W+P*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],a=e[12],l=e[1],c=e[5],f=e[9],d=e[13],p=e[2],g=e[6],m=e[10],_=e[14],x=e[3],M=e[7],y=e[11],S=e[15],b=f*_-d*m,C=c*_-d*g,T=c*m-f*g,P=l*_-d*p,L=l*m-f*p,D=l*g-c*p;return t*(M*b-y*C+S*T)-n*(x*b-y*P+S*L)+i*(x*C-M*P+S*D)-a*(x*T-M*L+y*D)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],a=e[1],l=e[5],c=e[9],f=e[2],d=e[6],p=e[10];return t*(l*p-c*d)-n*(a*p-c*f)+i*(a*d-l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],l=e[4],c=e[5],f=e[6],d=e[7],p=e[8],g=e[9],m=e[10],_=e[11],x=e[12],M=e[13],y=e[14],S=e[15],b=t*c-n*l,C=t*f-i*l,T=t*d-a*l,P=n*f-i*c,L=n*d-a*c,D=i*d-a*f,w=p*M-g*x,N=p*y-m*x,F=p*S-_*x,B=g*y-m*M,z=g*S-_*M,re=m*S-_*y,ie=b*re-C*z+T*B+P*F-L*N+D*w;if(ie===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/ie;return e[0]=(c*re-f*z+d*B)*q,e[1]=(i*z-n*re-a*B)*q,e[2]=(M*D-y*L+S*P)*q,e[3]=(m*L-g*D-_*P)*q,e[4]=(f*F-l*re-d*N)*q,e[5]=(t*re-i*F+a*N)*q,e[6]=(y*T-x*D-S*C)*q,e[7]=(p*D-m*T+_*C)*q,e[8]=(l*z-c*F+d*w)*q,e[9]=(n*F-t*z-a*w)*q,e[10]=(x*L-M*T+S*b)*q,e[11]=(g*T-p*L-_*b)*q,e[12]=(c*N-l*B-f*w)*q,e[13]=(t*B-n*N+i*w)*q,e[14]=(M*C-x*P-y*b)*q,e[15]=(p*P-g*C+m*b)*q,this}scale(e){const t=this.elements,n=e.x,i=e.y,a=e.z;return t[0]*=n,t[4]*=i,t[8]*=a,t[1]*=n,t[5]*=i,t[9]*=a,t[2]*=n,t[6]*=i,t[10]*=a,t[3]*=n,t[7]*=i,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),a=1-n,l=e.x,c=e.y,f=e.z,d=a*l,p=a*c;return this.set(d*l+n,d*c-i*f,d*f+i*c,0,d*c+i*f,p*c+n,p*f-i*l,0,d*f-i*c,p*f+i*l,a*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,a,l){return this.set(1,n,a,0,e,1,l,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,a=t._x,l=t._y,c=t._z,f=t._w,d=a+a,p=l+l,g=c+c,m=a*d,_=a*p,x=a*g,M=l*p,y=l*g,S=c*g,b=f*d,C=f*p,T=f*g,P=n.x,L=n.y,D=n.z;return i[0]=(1-(M+S))*P,i[1]=(_+T)*P,i[2]=(x-C)*P,i[3]=0,i[4]=(_-T)*L,i[5]=(1-(m+S))*L,i[6]=(y+b)*L,i[7]=0,i[8]=(x+C)*D,i[9]=(y-b)*D,i[10]=(1-(m+M))*D,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const a=this.determinantAffine();if(a===0)return n.set(1,1,1),t.identity(),this;let l=pl.set(i[0],i[1],i[2]).length();const c=pl.set(i[4],i[5],i[6]).length(),f=pl.set(i[8],i[9],i[10]).length();a<0&&(l=-l),jr.copy(this);const d=1/l,p=1/c,g=1/f;return jr.elements[0]*=d,jr.elements[1]*=d,jr.elements[2]*=d,jr.elements[4]*=p,jr.elements[5]*=p,jr.elements[6]*=p,jr.elements[8]*=g,jr.elements[9]*=g,jr.elements[10]*=g,t.setFromRotationMatrix(jr),n.x=l,n.y=c,n.z=f,this}makePerspective(e,t,n,i,a,l,c=ys,f=!1){const d=this.elements,p=2*a/(t-e),g=2*a/(n-i),m=(t+e)/(t-e),_=(n+i)/(n-i);let x,M;if(f)x=a/(l-a),M=l*a/(l-a);else if(c===ys)x=-(l+a)/(l-a),M=-2*l*a/(l-a);else if(c===Oc)x=-l/(l-a),M=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=p,d[4]=0,d[8]=m,d[12]=0,d[1]=0,d[5]=g,d[9]=_,d[13]=0,d[2]=0,d[6]=0,d[10]=x,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,i,a,l,c=ys,f=!1){const d=this.elements,p=2/(t-e),g=2/(n-i),m=-(t+e)/(t-e),_=-(n+i)/(n-i);let x,M;if(f)x=1/(l-a),M=l/(l-a);else if(c===ys)x=-2/(l-a),M=-(l+a)/(l-a);else if(c===Oc)x=-1/(l-a),M=-a/(l-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=p,d[4]=0,d[8]=0,d[12]=m,d[1]=0,d[5]=g,d[9]=0,d[13]=_,d[2]=0,d[6]=0,d[10]=x,d[14]=M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Mh.prototype.isMatrix4=!0;let dn=Mh;const pl=new X,jr=new dn,_b=new X(0,0,0),vb=new X(1,1,1),So=new X,sd=new X,cr=new X,u1=new dn,c1=new ou;class Wo{constructor(e=0,t=0,n=0,i=Wo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,a=i[0],l=i[4],c=i[8],f=i[1],d=i[5],p=i[9],g=i[2],m=i[6],_=i[10];switch(t){case"XYZ":this._y=Math.asin(bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,_),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(m,d),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,_),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(bt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-g,_),this._z=Math.atan2(-l,d)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-bt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-l,d));break;case"YZX":this._z=Math.asin(bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(c,_));break;case"XZY":this._z=Math.asin(-bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(m,d),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,_),this._y=0);break;default:xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return u1.makeRotationFromQuaternion(e),this.setFromRotationMatrix(u1,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return c1.setFromEuler(this),this.setFromQuaternion(c1,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wo.DEFAULT_ORDER="XYZ";class eE{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xb=0;const f1=new X,ml=new ou,Os=new dn,od=new X,Wu=new X,yb=new X,Sb=new ou,d1=new X(1,0,0),h1=new X(0,1,0),p1=new X(0,0,1),m1={type:"added"},Mb={type:"removed"},gl={type:"childadded",child:null},Nm={type:"childremoved",child:null};class qn extends ka{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xb++}),this.uuid=js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const e=new X,t=new Wo,n=new ou,i=new X(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new dn},normalMatrix:{value:new At}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ml.setFromAxisAngle(e,t),this.quaternion.multiply(ml),this}rotateOnWorldAxis(e,t){return ml.setFromAxisAngle(e,t),this.quaternion.premultiply(ml),this}rotateX(e){return this.rotateOnAxis(d1,e)}rotateY(e){return this.rotateOnAxis(h1,e)}rotateZ(e){return this.rotateOnAxis(p1,e)}translateOnAxis(e,t){return f1.copy(e).applyQuaternion(this.quaternion),this.position.add(f1.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(d1,e)}translateY(e){return this.translateOnAxis(h1,e)}translateZ(e){return this.translateOnAxis(p1,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Os.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?od.copy(e):od.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Wu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Os.lookAt(Wu,od,this.up):Os.lookAt(od,Wu,this.up),this.quaternion.setFromRotationMatrix(Os),i&&(Os.extractRotation(i.matrixWorld),ml.setFromRotationMatrix(Os),this.quaternion.premultiply(ml.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Yt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(m1),gl.child=e,this.dispatchEvent(gl),gl.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mb),Nm.child=e,this.dispatchEvent(Nm),Nm.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Os.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Os.multiply(e.parent.matrixWorld)),e.applyMatrix4(Os),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(m1),gl.child=e,this.dispatchEvent(gl),gl.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wu,e,yb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wu,Sb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*i,a[13]+=n-a[1]*t-a[5]*n-a[9]*i,a[14]+=i-a[2]*t-a[6]*n-a[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(c=>({...c})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function a(c,f){return c[f.uuid]===void 0&&(c[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const f=c.shapes;if(Array.isArray(f))for(let d=0,p=f.length;d<p;d++){const g=f[d];a(e.shapes,g)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let f=0,d=this.material.length;f<d;f++)c.push(a(e.materials,this.material[f]));i.material=c}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let c=0;c<this.children.length;c++)i.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let c=0;c<this.animations.length;c++){const f=this.animations[c];i.animations.push(a(e.animations,f))}}if(t){const c=l(e.geometries),f=l(e.materials),d=l(e.textures),p=l(e.images),g=l(e.shapes),m=l(e.skeletons),_=l(e.animations),x=l(e.nodes);c.length>0&&(n.geometries=c),f.length>0&&(n.materials=f),d.length>0&&(n.textures=d),p.length>0&&(n.images=p),g.length>0&&(n.shapes=g),m.length>0&&(n.skeletons=m),_.length>0&&(n.animations=_),x.length>0&&(n.nodes=x)}return n.object=i,n;function l(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}qn.DEFAULT_UP=new X(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class lc extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Eb={type:"move"};class Im{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,l=null;const c=this._targetRay,f=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){l=!0;for(const M of e.hand.values()){const y=t.getJointPose(M,n),S=this._getHandJoint(d,M);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const p=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],m=p.position.distanceTo(g.position),_=.02,x=.005;d.inputState.pinching&&m>_+x?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&m<=_-x&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));c!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Eb)))}return c!==null&&(c.visible=i!==null),f!==null&&(f.visible=a!==null),d!==null&&(d.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new lc;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const tE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mo={h:0,s:0,l:0},ad={h:0,s:0,l:0};function Um(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class yt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Gt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Gt.workingColorSpace){if(e=E_(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=Um(l,a,e+1/3),this.g=Um(l,a,e),this.b=Um(l,a,e-1/3)}return Gt.colorSpaceToWorking(this,i),this}setStyle(e,t=mr){function n(a){a!==void 0&&parseFloat(a)<1&&xt("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=i[1],c=i[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:xt("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);xt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mr){const n=tE[e.toLowerCase()];return n!==void 0?this.setHex(n,t):xt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}copyLinearToSRGB(e){return this.r=ql(e.r),this.g=ql(e.g),this.b=ql(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mr){return Gt.workingToColorSpace(Ei.copy(this),e),Math.round(bt(Ei.r*255,0,255))*65536+Math.round(bt(Ei.g*255,0,255))*256+Math.round(bt(Ei.b*255,0,255))}getHexString(e=mr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Gt.workingColorSpace){Gt.workingToColorSpace(Ei.copy(this),t);const n=Ei.r,i=Ei.g,a=Ei.b,l=Math.max(n,i,a),c=Math.min(n,i,a);let f,d;const p=(c+l)/2;if(c===l)f=0,d=0;else{const g=l-c;switch(d=p<=.5?g/(l+c):g/(2-l-c),l){case n:f=(i-a)/g+(i<a?6:0);break;case i:f=(a-n)/g+2;break;case a:f=(n-i)/g+4;break}f/=6}return e.h=f,e.s=d,e.l=p,e}getRGB(e,t=Gt.workingColorSpace){return Gt.workingToColorSpace(Ei.copy(this),t),e.r=Ei.r,e.g=Ei.g,e.b=Ei.b,e}getStyle(e=mr){Gt.workingToColorSpace(Ei.copy(this),e);const t=Ei.r,n=Ei.g,i=Ei.b;return e!==mr?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Mo),this.setHSL(Mo.h+e,Mo.s+t,Mo.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mo),e.getHSL(ad);const n=Ec(Mo.h,ad.h,t),i=Ec(Mo.s,ad.s,t),a=Ec(Mo.l,ad.l,t);return this.setHSL(n,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*i,this.g=a[1]*t+a[4]*n+a[7]*i,this.b=a[2]*t+a[5]*n+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ei=new yt;yt.NAMES=tE;class T_{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new yt(e),this.near=t,this.far=n}clone(){return new T_(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class wb extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wo,this.environmentIntensity=1,this.environmentRotation=new Wo,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Kr=new X,ks=new X,Fm=new X,Bs=new X,_l=new X,vl=new X,g1=new X,Om=new X,km=new X,Bm=new X,zm=new ln,Vm=new ln,Hm=new ln;class kr{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Kr.subVectors(e,t),i.cross(Kr);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,t,n,i,a){Kr.subVectors(i,t),ks.subVectors(n,t),Fm.subVectors(e,t);const l=Kr.dot(Kr),c=Kr.dot(ks),f=Kr.dot(Fm),d=ks.dot(ks),p=ks.dot(Fm),g=l*d-c*c;if(g===0)return a.set(0,0,0),null;const m=1/g,_=(d*f-c*p)*m,x=(l*p-c*f)*m;return a.set(1-_-x,x,_)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Bs)===null?!1:Bs.x>=0&&Bs.y>=0&&Bs.x+Bs.y<=1}static getInterpolation(e,t,n,i,a,l,c,f){return this.getBarycoord(e,t,n,i,Bs)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,Bs.x),f.addScaledVector(l,Bs.y),f.addScaledVector(c,Bs.z),f)}static getInterpolatedAttribute(e,t,n,i,a,l){return zm.setScalar(0),Vm.setScalar(0),Hm.setScalar(0),zm.fromBufferAttribute(e,t),Vm.fromBufferAttribute(e,n),Hm.fromBufferAttribute(e,i),l.setScalar(0),l.addScaledVector(zm,a.x),l.addScaledVector(Vm,a.y),l.addScaledVector(Hm,a.z),l}static isFrontFacing(e,t,n,i){return Kr.subVectors(n,t),ks.subVectors(e,t),Kr.cross(ks).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kr.subVectors(this.c,this.b),ks.subVectors(this.a,this.b),Kr.cross(ks).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,a){return kr.getInterpolation(e,this.a,this.b,this.c,t,n,i,a)}containsPoint(e){return kr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,a=this.c;let l,c;_l.subVectors(i,n),vl.subVectors(a,n),Om.subVectors(e,n);const f=_l.dot(Om),d=vl.dot(Om);if(f<=0&&d<=0)return t.copy(n);km.subVectors(e,i);const p=_l.dot(km),g=vl.dot(km);if(p>=0&&g<=p)return t.copy(i);const m=f*g-p*d;if(m<=0&&f>=0&&p<=0)return l=f/(f-p),t.copy(n).addScaledVector(_l,l);Bm.subVectors(e,a);const _=_l.dot(Bm),x=vl.dot(Bm);if(x>=0&&_<=x)return t.copy(a);const M=_*d-f*x;if(M<=0&&d>=0&&x<=0)return c=d/(d-x),t.copy(n).addScaledVector(vl,c);const y=p*x-_*g;if(y<=0&&g-p>=0&&_-x>=0)return g1.subVectors(a,i),c=(g-p)/(g-p+(_-x)),t.copy(i).addScaledVector(g1,c);const S=1/(y+M+m);return l=M*S,c=m*S,t.copy(n).addScaledVector(_l,l).addScaledVector(vl,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Yo{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let l=0,c=a.count;l<c;l++)e.isMesh===!0?e.getVertexPosition(l,Zr):Zr.fromBufferAttribute(a,l),Zr.applyMatrix4(e.matrixWorld),this.expandByPoint(Zr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ld.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ld.copy(n.boundingBox)),ld.applyMatrix4(e.matrixWorld),this.union(ld)}const i=e.children;for(let a=0,l=i.length;a<l;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zr),Zr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xu),ud.subVectors(this.max,Xu),xl.subVectors(e.a,Xu),yl.subVectors(e.b,Xu),Sl.subVectors(e.c,Xu),Eo.subVectors(yl,xl),wo.subVectors(Sl,yl),ua.subVectors(xl,Sl);let t=[0,-Eo.z,Eo.y,0,-wo.z,wo.y,0,-ua.z,ua.y,Eo.z,0,-Eo.x,wo.z,0,-wo.x,ua.z,0,-ua.x,-Eo.y,Eo.x,0,-wo.y,wo.x,0,-ua.y,ua.x,0];return!Gm(t,xl,yl,Sl,ud)||(t=[1,0,0,0,1,0,0,0,1],!Gm(t,xl,yl,Sl,ud))?!1:(cd.crossVectors(Eo,wo),t=[cd.x,cd.y,cd.z],Gm(t,xl,yl,Sl,ud))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zs=[new X,new X,new X,new X,new X,new X,new X,new X],Zr=new X,ld=new Yo,xl=new X,yl=new X,Sl=new X,Eo=new X,wo=new X,ua=new X,Xu=new X,ud=new X,cd=new X,ca=new X;function Gm(s,e,t,n,i){for(let a=0,l=s.length-3;a<=l;a+=3){ca.fromArray(s,a);const c=i.x*Math.abs(ca.x)+i.y*Math.abs(ca.y)+i.z*Math.abs(ca.z),f=e.dot(ca),d=t.dot(ca),p=n.dot(ca);if(Math.max(-Math.max(f,d,p),Math.min(f,d,p))>c)return!1}return!0}const zn=new X,fd=new ft;let Tb=0;class ts extends ka{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Rg,this.updateRanges=[],this.gpuType=xs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fd.fromBufferAttribute(this,t),fd.applyMatrix3(e),this.setXY(t,fd.x,fd.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.applyMatrix3(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.applyMatrix4(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.applyNormalMatrix(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.transformDirection(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Jr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jr(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jr(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jr(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array),i=an(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array),i=an(i,this.array),a=an(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rg&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class nE extends ts{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class iE extends ts{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class un extends ts{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Ab=new Yo,Yu=new X,Wm=new X;class Ba{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ab.setFromPoints(e).getCenter(n);let i=0;for(let a=0,l=e.length;a<l;a++)i=Math.max(i,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yu.subVectors(e,this.center);const t=Yu.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Yu,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wm.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yu.copy(e.center).add(Wm)),this.expandByPoint(Yu.copy(e.center).sub(Wm))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let bb=0;const Nr=new dn,Xm=new qn,Ml=new X,fr=new Yo,qu=new Yo,ni=new X;class Fn extends ka{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bb++}),this.uuid=js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(XA(e)?iE:nE)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new At().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Nr.makeRotationFromQuaternion(e),this.applyMatrix4(Nr),this}rotateX(e){return Nr.makeRotationX(e),this.applyMatrix4(Nr),this}rotateY(e){return Nr.makeRotationY(e),this.applyMatrix4(Nr),this}rotateZ(e){return Nr.makeRotationZ(e),this.applyMatrix4(Nr),this}translate(e,t,n){return Nr.makeTranslation(e,t,n),this.applyMatrix4(Nr),this}scale(e,t,n){return Nr.makeScale(e,t,n),this.applyMatrix4(Nr),this}lookAt(e){return Xm.lookAt(e),Xm.updateMatrix(),this.applyMatrix4(Xm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ml).negate(),this.translate(Ml.x,Ml.y,Ml.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,a=e.length;i<a;i++){const l=e[i];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new un(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const a=e[i];t.setXYZ(i,a.x,a.y,a.z||0)}e.length>t.count&&xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const a=t[n];fr.setFromBufferAttribute(a),this.morphTargetsRelative?(ni.addVectors(this.boundingBox.min,fr.min),this.boundingBox.expandByPoint(ni),ni.addVectors(this.boundingBox.max,fr.max),this.boundingBox.expandByPoint(ni)):(this.boundingBox.expandByPoint(fr.min),this.boundingBox.expandByPoint(fr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ba);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(fr.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const c=t[a];qu.setFromBufferAttribute(c),this.morphTargetsRelative?(ni.addVectors(fr.min,qu.min),fr.expandByPoint(ni),ni.addVectors(fr.max,qu.max),fr.expandByPoint(ni)):(fr.expandByPoint(qu.min),fr.expandByPoint(qu.max))}fr.getCenter(n);let i=0;for(let a=0,l=e.count;a<l;a++)ni.fromBufferAttribute(e,a),i=Math.max(i,n.distanceToSquared(ni));if(t)for(let a=0,l=t.length;a<l;a++){const c=t[a],f=this.morphTargetsRelative;for(let d=0,p=c.count;d<p;d++)ni.fromBufferAttribute(c,d),f&&(Ml.fromBufferAttribute(e,d),ni.add(Ml)),i=Math.max(i,n.distanceToSquared(ni))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,a=t.uv;let l=this.getAttribute("tangent");(l===void 0||l.count!==n.count)&&(l=new ts(new Float32Array(4*n.count),4),this.setAttribute("tangent",l));const c=[],f=[];for(let w=0;w<n.count;w++)c[w]=new X,f[w]=new X;const d=new X,p=new X,g=new X,m=new ft,_=new ft,x=new ft,M=new X,y=new X;function S(w,N,F){d.fromBufferAttribute(n,w),p.fromBufferAttribute(n,N),g.fromBufferAttribute(n,F),m.fromBufferAttribute(a,w),_.fromBufferAttribute(a,N),x.fromBufferAttribute(a,F),p.sub(d),g.sub(d),_.sub(m),x.sub(m);const B=1/(_.x*x.y-x.x*_.y);isFinite(B)&&(M.copy(p).multiplyScalar(x.y).addScaledVector(g,-_.y).multiplyScalar(B),y.copy(g).multiplyScalar(_.x).addScaledVector(p,-x.x).multiplyScalar(B),c[w].add(M),c[N].add(M),c[F].add(M),f[w].add(y),f[N].add(y),f[F].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let w=0,N=b.length;w<N;++w){const F=b[w],B=F.start,z=F.count;for(let re=B,ie=B+z;re<ie;re+=3)S(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const C=new X,T=new X,P=new X,L=new X;function D(w){P.fromBufferAttribute(i,w),L.copy(P);const N=c[w];C.copy(N),C.sub(P.multiplyScalar(P.dot(N))).normalize(),T.crossVectors(L,N);const B=T.dot(f[w])<0?-1:1;l.setXYZW(w,C.x,C.y,C.z,B)}for(let w=0,N=b.length;w<N;++w){const F=b[w],B=F.start,z=F.count;for(let re=B,ie=B+z;re<ie;re+=3)D(e.getX(re+0)),D(e.getX(re+1)),D(e.getX(re+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ts(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,_=n.count;m<_;m++)n.setXYZ(m,0,0,0);const i=new X,a=new X,l=new X,c=new X,f=new X,d=new X,p=new X,g=new X;if(e)for(let m=0,_=e.count;m<_;m+=3){const x=e.getX(m+0),M=e.getX(m+1),y=e.getX(m+2);i.fromBufferAttribute(t,x),a.fromBufferAttribute(t,M),l.fromBufferAttribute(t,y),p.subVectors(l,a),g.subVectors(i,a),p.cross(g),c.fromBufferAttribute(n,x),f.fromBufferAttribute(n,M),d.fromBufferAttribute(n,y),c.add(p),f.add(p),d.add(p),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(M,f.x,f.y,f.z),n.setXYZ(y,d.x,d.y,d.z)}else for(let m=0,_=t.count;m<_;m+=3)i.fromBufferAttribute(t,m+0),a.fromBufferAttribute(t,m+1),l.fromBufferAttribute(t,m+2),p.subVectors(l,a),g.subVectors(i,a),p.cross(g),n.setXYZ(m+0,p.x,p.y,p.z),n.setXYZ(m+1,p.x,p.y,p.z),n.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ni.fromBufferAttribute(e,t),ni.normalize(),e.setXYZ(t,ni.x,ni.y,ni.z)}toNonIndexed(){function e(c,f){const d=c.array,p=c.itemSize,g=c.normalized,m=new d.constructor(f.length*p);let _=0,x=0;for(let M=0,y=f.length;M<y;M++){c.isInterleavedBufferAttribute?_=f[M]*c.data.stride+c.offset:_=f[M]*p;for(let S=0;S<p;S++)m[x++]=d[_++]}return new ts(m,p,g)}if(this.index===null)return xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fn,n=this.index.array,i=this.attributes;for(const c in i){const f=i[c],d=e(f,n);t.setAttribute(c,d)}const a=this.morphAttributes;for(const c in a){const f=[],d=a[c];for(let p=0,g=d.length;p<g;p++){const m=d[p],_=e(m,n);f.push(_)}t.morphAttributes[c]=f}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,f=l.length;c<f;c++){const d=l[c];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const f in n){const d=n[f];e.data.attributes[f]=d.toJSON(e.data)}const i={};let a=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],p=[];for(let g=0,m=d.length;g<m;g++){const _=d[g];p.push(_.toJSON(e.data))}p.length>0&&(i[f]=p,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const d in i){const p=i[d];this.setAttribute(d,p.clone(t))}const a=e.morphAttributes;for(const d in a){const p=[],g=a[d];for(let m=0,_=g.length;m<_;m++)p.push(g[m].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let d=0,p=l.length;d<p;d++){const g=l[d];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Rg,this.updateRanges=[],this.version=0,this.uuid=js()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,a=this.stride;i<a;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=js()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=js()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ii=new X;class Ss{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ii.fromBufferAttribute(this,t),Ii.applyMatrix4(e),this.setXYZ(t,Ii.x,Ii.y,Ii.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ii.fromBufferAttribute(this,t),Ii.applyNormalMatrix(e),this.setXYZ(t,Ii.x,Ii.y,Ii.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ii.fromBufferAttribute(this,t),Ii.transformDirection(e),this.setXYZ(t,Ii.x,Ii.y,Ii.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Jr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=an(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Jr(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Jr(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Jr(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Jr(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=an(t,this.array),n=an(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=an(t,this.array),n=an(n,this.array),i=an(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=an(t,this.array),n=an(n,this.array),i=an(i,this.array),a=an(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=a,this}clone(e){if(e===void 0){vh("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[i+a])}return new ts(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ss(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){vh("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[i+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Cb=0;class qo extends ka{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cb++}),this.uuid=js(),this.name="",this.type="Material",this.blending=Xl,this.side=Go,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=V0,this.blendDst=H0,this.blendEquation=_a,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=eu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=n1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dl,this.stencilZFail=dl,this.stencilZPass=dl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){xt(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){xt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xl&&(n.blending=this.blending),this.side!==Go&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==V0&&(n.blendSrc=this.blendSrc),this.blendDst!==H0&&(n.blendDst=this.blendDst),this.blendEquation!==_a&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==eu&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==n1&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==dl&&(n.stencilFail=this.stencilFail),this.stencilZFail!==dl&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==dl&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}if(t){const a=i(e.textures),l=i(e.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new yt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ft().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ft().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Jd extends qo{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let El;const $u=new X,wl=new X,Tl=new X,Al=new ft,ju=new ft,sE=new dn,dd=new X,Ku=new X,hd=new X,_1=new ft,Ym=new ft,v1=new ft;class qm extends qn{constructor(e=new Jd){if(super(),this.isSprite=!0,this.type="Sprite",El===void 0){El=new Fn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new rE(t,5);El.setIndex([0,1,2,0,2,3]),El.setAttribute("position",new Ss(n,3,0,!1)),El.setAttribute("uv",new Ss(n,2,3,!1))}this.geometry=El,this.material=e,this.center=new ft(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Yt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),wl.setFromMatrixScale(this.matrixWorld),sE.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Tl.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&wl.multiplyScalar(-Tl.z);const n=this.material.rotation;let i,a;n!==0&&(a=Math.cos(n),i=Math.sin(n));const l=this.center;pd(dd.set(-.5,-.5,0),Tl,l,wl,i,a),pd(Ku.set(.5,-.5,0),Tl,l,wl,i,a),pd(hd.set(.5,.5,0),Tl,l,wl,i,a),_1.set(0,0),Ym.set(1,0),v1.set(1,1);let c=e.ray.intersectTriangle(dd,Ku,hd,!1,$u);if(c===null&&(pd(Ku.set(-.5,.5,0),Tl,l,wl,i,a),Ym.set(0,1),c=e.ray.intersectTriangle(dd,hd,Ku,!1,$u),c===null))return;const f=e.ray.origin.distanceTo($u);f<e.near||f>e.far||t.push({distance:f,point:$u.clone(),uv:kr.getInterpolation($u,dd,Ku,hd,_1,Ym,v1,new ft),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function pd(s,e,t,n,i,a){Al.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(ju.x=a*Al.x-i*Al.y,ju.y=i*Al.x+a*Al.y):ju.copy(Al),s.copy(e),s.x+=ju.x,s.y+=ju.y,s.applyMatrix4(sE)}const Vs=new X,$m=new X,md=new X,To=new X,jm=new X,gd=new X,Km=new X;class A_{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vs.copy(this.origin).addScaledVector(this.direction,t),Vs.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){$m.copy(e).add(t).multiplyScalar(.5),md.copy(t).sub(e).normalize(),To.copy(this.origin).sub($m);const a=e.distanceTo(t)*.5,l=-this.direction.dot(md),c=To.dot(this.direction),f=-To.dot(md),d=To.lengthSq(),p=Math.abs(1-l*l);let g,m,_,x;if(p>0)if(g=l*f-c,m=l*c-f,x=a*p,g>=0)if(m>=-x)if(m<=x){const M=1/p;g*=M,m*=M,_=g*(g+l*m+2*c)+m*(l*g+m+2*f)+d}else m=a,g=Math.max(0,-(l*m+c)),_=-g*g+m*(m+2*f)+d;else m=-a,g=Math.max(0,-(l*m+c)),_=-g*g+m*(m+2*f)+d;else m<=-x?(g=Math.max(0,-(-l*a+c)),m=g>0?-a:Math.min(Math.max(-a,-f),a),_=-g*g+m*(m+2*f)+d):m<=x?(g=0,m=Math.min(Math.max(-a,-f),a),_=m*(m+2*f)+d):(g=Math.max(0,-(l*a+c)),m=g>0?a:Math.min(Math.max(-a,-f),a),_=-g*g+m*(m+2*f)+d);else m=l>0?-a:a,g=Math.max(0,-(l*m+c)),_=-g*g+m*(m+2*f)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,g),i&&i.copy($m).addScaledVector(md,m),_}intersectSphere(e,t){Vs.subVectors(e.center,this.origin);const n=Vs.dot(this.direction),i=Vs.dot(Vs)-n*n,a=e.radius*e.radius;if(i>a)return null;const l=Math.sqrt(a-i),c=n-l,f=n+l;return f<0?null:c<0?this.at(f,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,a,l,c,f;const d=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,m=this.origin;return d>=0?(n=(e.min.x-m.x)*d,i=(e.max.x-m.x)*d):(n=(e.max.x-m.x)*d,i=(e.min.x-m.x)*d),p>=0?(a=(e.min.y-m.y)*p,l=(e.max.y-m.y)*p):(a=(e.max.y-m.y)*p,l=(e.min.y-m.y)*p),n>l||a>i||((a>n||isNaN(n))&&(n=a),(l<i||isNaN(i))&&(i=l),g>=0?(c=(e.min.z-m.z)*g,f=(e.max.z-m.z)*g):(c=(e.max.z-m.z)*g,f=(e.min.z-m.z)*g),n>f||c>i)||((c>n||n!==n)&&(n=c),(f<i||i!==i)&&(i=f),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Vs)!==null}intersectTriangle(e,t,n,i,a){jm.subVectors(t,e),gd.subVectors(n,e),Km.crossVectors(jm,gd);let l=this.direction.dot(Km),c;if(l>0){if(i)return null;c=1}else if(l<0)c=-1,l=-l;else return null;To.subVectors(this.origin,e);const f=c*this.direction.dot(gd.crossVectors(To,gd));if(f<0)return null;const d=c*this.direction.dot(jm.cross(To));if(d<0||f+d>l)return null;const p=-c*To.dot(Km);return p<0?null:this.at(p/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zc extends qo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wo,this.combine=GM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const x1=new dn,fa=new A_,_d=new Ba,y1=new X,vd=new X,xd=new X,yd=new X,Zm=new X,Sd=new X,S1=new X,Md=new X;class Vi extends qn{constructor(e=new Fn,t=new zc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=i.length;a<l;a++){const c=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const c=this.morphTargetInfluences;if(a&&c){Sd.set(0,0,0);for(let f=0,d=a.length;f<d;f++){const p=c[f],g=a[f];p!==0&&(Zm.fromBufferAttribute(g,e),l?Sd.addScaledVector(Zm,p):Sd.addScaledVector(Zm.sub(t),p))}t.add(Sd)}return t}raycast(e,t){const n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_d.copy(n.boundingSphere),_d.applyMatrix4(a),fa.copy(e.ray).recast(e.near),!(_d.containsPoint(fa.origin)===!1&&(fa.intersectSphere(_d,y1)===null||fa.origin.distanceToSquared(y1)>(e.far-e.near)**2))&&(x1.copy(a).invert(),fa.copy(e.ray).applyMatrix4(x1),!(n.boundingBox!==null&&fa.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fa)))}_computeIntersections(e,t,n){let i;const a=this.geometry,l=this.material,c=a.index,f=a.attributes.position,d=a.attributes.uv,p=a.attributes.uv1,g=a.attributes.normal,m=a.groups,_=a.drawRange;if(c!==null)if(Array.isArray(l))for(let x=0,M=m.length;x<M;x++){const y=m[x],S=l[y.materialIndex],b=Math.max(y.start,_.start),C=Math.min(c.count,Math.min(y.start+y.count,_.start+_.count));for(let T=b,P=C;T<P;T+=3){const L=c.getX(T),D=c.getX(T+1),w=c.getX(T+2);i=Ed(this,S,e,n,d,p,g,L,D,w),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=y.materialIndex,t.push(i))}}else{const x=Math.max(0,_.start),M=Math.min(c.count,_.start+_.count);for(let y=x,S=M;y<S;y+=3){const b=c.getX(y),C=c.getX(y+1),T=c.getX(y+2);i=Ed(this,l,e,n,d,p,g,b,C,T),i&&(i.faceIndex=Math.floor(y/3),t.push(i))}}else if(f!==void 0)if(Array.isArray(l))for(let x=0,M=m.length;x<M;x++){const y=m[x],S=l[y.materialIndex],b=Math.max(y.start,_.start),C=Math.min(f.count,Math.min(y.start+y.count,_.start+_.count));for(let T=b,P=C;T<P;T+=3){const L=T,D=T+1,w=T+2;i=Ed(this,S,e,n,d,p,g,L,D,w),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=y.materialIndex,t.push(i))}}else{const x=Math.max(0,_.start),M=Math.min(f.count,_.start+_.count);for(let y=x,S=M;y<S;y+=3){const b=y,C=y+1,T=y+2;i=Ed(this,l,e,n,d,p,g,b,C,T),i&&(i.faceIndex=Math.floor(y/3),t.push(i))}}}}function Rb(s,e,t,n,i,a,l,c){let f;if(e.side===ir?f=n.intersectTriangle(l,a,i,!0,c):f=n.intersectTriangle(i,a,l,e.side===Go,c),f===null)return null;Md.copy(c),Md.applyMatrix4(s.matrixWorld);const d=t.ray.origin.distanceTo(Md);return d<t.near||d>t.far?null:{distance:d,point:Md.clone(),object:s}}function Ed(s,e,t,n,i,a,l,c,f,d){s.getVertexPosition(c,vd),s.getVertexPosition(f,xd),s.getVertexPosition(d,yd);const p=Rb(s,e,t,n,vd,xd,yd,S1);if(p){const g=new X;kr.getBarycoord(S1,vd,xd,yd,g),i&&(p.uv=kr.getInterpolatedAttribute(i,c,f,d,g,new ft)),a&&(p.uv1=kr.getInterpolatedAttribute(a,c,f,d,g,new ft)),l&&(p.normal=kr.getInterpolatedAttribute(l,c,f,d,g,new X),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const m={a:c,b:f,c:d,normal:new X,materialIndex:0};kr.getNormal(vd,xd,yd,m.normal),p.face=m,p.barycoord=g}return p}class Pb extends gi{constructor(e=null,t=1,n=1,i,a,l,c,f,d=hi,p=hi,g,m){super(null,l,c,f,d,p,i,a,g,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qm=new X,Lb=new X,Db=new At;class ga{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Qm.subVectors(n,t).cross(Lb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(Qm),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return n===!0&&(l<0||l>1)?null:t.copy(e.start).addScaledVector(i,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Db.getNormalMatrix(e),i=this.coplanarPoint(Qm).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const da=new Ba,Nb=new ft(.5,.5),wd=new X;class b_{constructor(e=new ga,t=new ga,n=new ga,i=new ga,a=new ga,l=new ga){this.planes=[e,t,n,i,a,l]}set(e,t,n,i,a,l){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(i),c[4].copy(a),c[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ys,n=!1){const i=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],d=a[3],p=a[4],g=a[5],m=a[6],_=a[7],x=a[8],M=a[9],y=a[10],S=a[11],b=a[12],C=a[13],T=a[14],P=a[15];if(i[0].setComponents(d-l,_-p,S-x,P-b).normalize(),i[1].setComponents(d+l,_+p,S+x,P+b).normalize(),i[2].setComponents(d+c,_+g,S+M,P+C).normalize(),i[3].setComponents(d-c,_-g,S-M,P-C).normalize(),n)i[4].setComponents(f,m,y,T).normalize(),i[5].setComponents(d-f,_-m,S-y,P-T).normalize();else if(i[4].setComponents(d-f,_-m,S-y,P-T).normalize(),t===ys)i[5].setComponents(d+f,_+m,S+y,P+T).normalize();else if(t===Oc)i[5].setComponents(f,m,y,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),da.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),da.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(da)}intersectsSprite(e){da.center.set(0,0,0);const t=Nb.distanceTo(e.center);return da.radius=.7071067811865476+t,da.applyMatrix4(e.matrixWorld),this.intersectsSphere(da)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(wd.x=i.normal.x>0?e.max.x:e.min.x,wd.y=i.normal.y>0?e.max.y:e.min.y,wd.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(wd)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class oE extends qo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xh=new X,yh=new X,M1=new dn,Zu=new A_,Td=new Ba,Jm=new X,E1=new X;class Ib extends qn{constructor(e=new Fn,t=new oE){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,a=t.count;i<a;i++)xh.fromBufferAttribute(t,i-1),yh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=xh.distanceTo(yh);e.setAttribute("lineDistance",new un(n,1))}else xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Td.copy(n.boundingSphere),Td.applyMatrix4(i),Td.radius+=a,e.ray.intersectsSphere(Td)===!1)return;M1.copy(i).invert(),Zu.copy(e.ray).applyMatrix4(M1);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=c*c,d=this.isLineSegments?2:1,p=n.index,m=n.attributes.position;if(p!==null){const _=Math.max(0,l.start),x=Math.min(p.count,l.start+l.count);for(let M=_,y=x-1;M<y;M+=d){const S=p.getX(M),b=p.getX(M+1),C=Ad(this,e,Zu,f,S,b,M);C&&t.push(C)}if(this.isLineLoop){const M=p.getX(x-1),y=p.getX(_),S=Ad(this,e,Zu,f,M,y,x-1);S&&t.push(S)}}else{const _=Math.max(0,l.start),x=Math.min(m.count,l.start+l.count);for(let M=_,y=x-1;M<y;M+=d){const S=Ad(this,e,Zu,f,M,M+1,M);S&&t.push(S)}if(this.isLineLoop){const M=Ad(this,e,Zu,f,x-1,_,x-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=i.length;a<l;a++){const c=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function Ad(s,e,t,n,i,a,l){const c=s.geometry.attributes.position;if(xh.fromBufferAttribute(c,i),yh.fromBufferAttribute(c,a),t.distanceSqToSegment(xh,yh,Jm,E1)>n)return;Jm.applyMatrix4(s.matrixWorld);const d=e.ray.origin.distanceTo(Jm);if(!(d<e.near||d>e.far))return{distance:d,point:E1.clone().applyMatrix4(s.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:s}}class aE extends qo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const w1=new dn,Pg=new A_,bd=new Ba,Cd=new X;class Ub extends qn{constructor(e=new Fn,t=new aE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Points.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bd.copy(n.boundingSphere),bd.applyMatrix4(i),bd.radius+=a,e.ray.intersectsSphere(bd)===!1)return;w1.copy(i).invert(),Pg.copy(e.ray).applyMatrix4(w1);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=c*c,d=n.index,g=n.attributes.position;if(d!==null){const m=Math.max(0,l.start),_=Math.min(d.count,l.start+l.count);for(let x=m,M=_;x<M;x++){const y=d.getX(x);Cd.fromBufferAttribute(g,y),T1(Cd,y,f,i,e,t,this)}}else{const m=Math.max(0,l.start),_=Math.min(g.count,l.start+l.count);for(let x=m,M=_;x<M;x++)Cd.fromBufferAttribute(g,x),T1(Cd,x,f,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=i.length;a<l;a++){const c=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function T1(s,e,t,n,i,a,l){const c=Pg.distanceSqToPoint(s);if(c<t){const f=new X;Pg.closestPointToPoint(s,f),f.applyMatrix4(n);const d=i.ray.origin.distanceTo(f);if(d<i.near||d>i.far)return;a.push({distance:d,distanceToRay:Math.sqrt(c),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:l})}}class lE extends gi{constructor(e=[],t=Ia,n,i,a,l,c,f,d,p){super(e,t,n,i,a,l,c,f,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fb extends gi{constructor(e,t,n,i,a,l,c,f,d){super(e,t,n,i,a,l,c,f,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nu extends gi{constructor(e,t,n=bs,i,a,l,c=hi,f=hi,d,p=Js,g=1){if(p!==Js&&p!==Ma)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:g};super(m,i,a,l,c,f,p,n,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new w_(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ob extends nu{constructor(e,t=bs,n=Ia,i,a,l=hi,c=hi,f,d=Js){const p={width:e,height:e,depth:1},g=[p,p,p,p,p,p];super(e,e,t,n,i,a,l,c,f,d),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class uE extends gi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Hc extends Fn{constructor(e=1,t=1,n=1,i=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:a,depthSegments:l};const c=this;i=Math.floor(i),a=Math.floor(a),l=Math.floor(l);const f=[],d=[],p=[],g=[];let m=0,_=0;x("z","y","x",-1,-1,n,t,e,l,a,0),x("z","y","x",1,-1,n,t,-e,l,a,1),x("x","z","y",1,1,e,n,t,i,l,2),x("x","z","y",1,-1,e,n,-t,i,l,3),x("x","y","z",1,-1,e,t,n,i,a,4),x("x","y","z",-1,-1,e,t,-n,i,a,5),this.setIndex(f),this.setAttribute("position",new un(d,3)),this.setAttribute("normal",new un(p,3)),this.setAttribute("uv",new un(g,2));function x(M,y,S,b,C,T,P,L,D,w,N){const F=T/D,B=P/w,z=T/2,re=P/2,ie=L/2,q=D+1,ee=w+1;let W=0,Y=0;const te=new X;for(let U=0;U<ee;U++){const k=U*B-re;for(let J=0;J<q;J++){const ze=J*F-z;te[M]=ze*b,te[y]=k*C,te[S]=ie,d.push(te.x,te.y,te.z),te[M]=0,te[y]=0,te[S]=L>0?1:-1,p.push(te.x,te.y,te.z),g.push(J/D),g.push(1-U/w),W+=1}}for(let U=0;U<w;U++)for(let k=0;k<D;k++){const J=m+k+q*U,ze=m+k+q*(U+1),Ve=m+(k+1)+q*(U+1),Be=m+(k+1)+q*U;f.push(J,ze,Be),f.push(ze,Ve,Be),Y+=6}c.addGroup(_,Y,N),_+=Y,m+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class C_ extends Fn{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const a=[],l=[];c(i),d(n),p(),this.setAttribute("position",new un(a,3)),this.setAttribute("normal",new un(a.slice(),3)),this.setAttribute("uv",new un(l,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function c(b){const C=new X,T=new X,P=new X;for(let L=0;L<t.length;L+=3)_(t[L+0],C),_(t[L+1],T),_(t[L+2],P),f(C,T,P,b)}function f(b,C,T,P){const L=P+1,D=[];for(let w=0;w<=L;w++){D[w]=[];const N=b.clone().lerp(T,w/L),F=C.clone().lerp(T,w/L),B=L-w;for(let z=0;z<=B;z++)z===0&&w===L?D[w][z]=N:D[w][z]=N.clone().lerp(F,z/B)}for(let w=0;w<L;w++)for(let N=0;N<2*(L-w)-1;N++){const F=Math.floor(N/2);N%2===0?(m(D[w][F+1]),m(D[w+1][F]),m(D[w][F])):(m(D[w][F+1]),m(D[w+1][F+1]),m(D[w+1][F]))}}function d(b){const C=new X;for(let T=0;T<a.length;T+=3)C.x=a[T+0],C.y=a[T+1],C.z=a[T+2],C.normalize().multiplyScalar(b),a[T+0]=C.x,a[T+1]=C.y,a[T+2]=C.z}function p(){const b=new X;for(let C=0;C<a.length;C+=3){b.x=a[C+0],b.y=a[C+1],b.z=a[C+2];const T=y(b)/2/Math.PI+.5,P=S(b)/Math.PI+.5;l.push(T,1-P)}x(),g()}function g(){for(let b=0;b<l.length;b+=6){const C=l[b+0],T=l[b+2],P=l[b+4],L=Math.max(C,T,P),D=Math.min(C,T,P);L>.9&&D<.1&&(C<.2&&(l[b+0]+=1),T<.2&&(l[b+2]+=1),P<.2&&(l[b+4]+=1))}}function m(b){a.push(b.x,b.y,b.z)}function _(b,C){const T=b*3;C.x=e[T+0],C.y=e[T+1],C.z=e[T+2]}function x(){const b=new X,C=new X,T=new X,P=new X,L=new ft,D=new ft,w=new ft;for(let N=0,F=0;N<a.length;N+=9,F+=6){b.set(a[N+0],a[N+1],a[N+2]),C.set(a[N+3],a[N+4],a[N+5]),T.set(a[N+6],a[N+7],a[N+8]),L.set(l[F+0],l[F+1]),D.set(l[F+2],l[F+3]),w.set(l[F+4],l[F+5]),P.copy(b).add(C).add(T).divideScalar(3);const B=y(P);M(L,F+0,b,B),M(D,F+2,C,B),M(w,F+4,T,B)}}function M(b,C,T,P){P<0&&b.x===1&&(l[C]=b.x-1),T.x===0&&T.z===0&&(l[C]=P/2/Math.PI+.5)}function y(b){return Math.atan2(b.z,-b.x)}function S(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new C_(e.vertices,e.indices,e.radius,e.detail)}}class R_ extends C_{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],l=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,l,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new R_(e.radius,e.detail)}}class kb{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){xt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),a=0;t.push(0);for(let l=1;l<=e;l++)n=this.getPoint(l/e),a+=n.distanceTo(i),t.push(a),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const a=n.length;let l;t?l=t:l=e*n[a-1];let c=0,f=a-1,d;for(;c<=f;)if(i=Math.floor(c+(f-c)/2),d=n[i]-l,d<0)c=i+1;else if(d>0)f=i-1;else{f=i;break}if(i=f,n[i]===l)return i/(a-1);const p=n[i],m=n[i+1]-p,_=(l-p)/m;return(i+_)/(a-1)}getTangent(e,t){let i=e-1e-4,a=e+1e-4;i<0&&(i=0),a>1&&(a=1);const l=this.getPoint(i),c=this.getPoint(a),f=t||(l.isVector2?new ft:new X);return f.copy(c).sub(l).normalize(),f}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new X,i=[],a=[],l=[],c=new X,f=new dn;for(let _=0;_<=e;_++){const x=_/e;i[_]=this.getTangentAt(x,new X)}a[0]=new X,l[0]=new X;let d=Number.MAX_VALUE;const p=Math.abs(i[0].x),g=Math.abs(i[0].y),m=Math.abs(i[0].z);p<=d&&(d=p,n.set(1,0,0)),g<=d&&(d=g,n.set(0,1,0)),m<=d&&n.set(0,0,1),c.crossVectors(i[0],n).normalize(),a[0].crossVectors(i[0],c),l[0].crossVectors(i[0],a[0]);for(let _=1;_<=e;_++){if(a[_]=a[_-1].clone(),l[_]=l[_-1].clone(),c.crossVectors(i[_-1],i[_]),c.length()>Number.EPSILON){c.normalize();const x=Math.acos(bt(i[_-1].dot(i[_]),-1,1));a[_].applyMatrix4(f.makeRotationAxis(c,x))}l[_].crossVectors(i[_],a[_])}if(t===!0){let _=Math.acos(bt(a[0].dot(a[e]),-1,1));_/=e,i[0].dot(c.crossVectors(a[0],a[e]))>0&&(_=-_);for(let x=1;x<=e;x++)a[x].applyMatrix4(f.makeRotationAxis(i[x],_*x)),l[x].crossVectors(i[x],a[x])}return{tangents:i,normals:a,binormals:l}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function P_(){let s=0,e=0,t=0,n=0;function i(a,l,c,f){s=a,e=c,t=-3*a+3*l-2*c-f,n=2*a-2*l+c+f}return{initCatmullRom:function(a,l,c,f,d){i(l,c,d*(c-a),d*(f-l))},initNonuniformCatmullRom:function(a,l,c,f,d,p,g){let m=(l-a)/d-(c-a)/(d+p)+(c-l)/p,_=(c-l)/p-(f-l)/(p+g)+(f-c)/g;m*=p,_*=p,i(l,c,m,_)},calc:function(a){const l=a*a,c=l*a;return s+e*a+t*l+n*c}}}const A1=new X,b1=new X,e0=new P_,t0=new P_,n0=new P_;class Bb extends kb{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new X){const n=t,i=this.points,a=i.length,l=(a-(this.closed?0:1))*e;let c=Math.floor(l),f=l-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/a)+1)*a:f===0&&c===a-1&&(c=a-2,f=1);let d,p;this.closed||c>0?d=i[(c-1)%a]:(b1.subVectors(i[0],i[1]).add(i[0]),d=b1);const g=i[c%a],m=i[(c+1)%a];if(this.closed||c+2<a?p=i[(c+2)%a]:(A1.subVectors(i[a-1],i[a-2]).add(i[a-1]),p=A1),this.curveType==="centripetal"||this.curveType==="chordal"){const _=this.curveType==="chordal"?.5:.25;let x=Math.pow(d.distanceToSquared(g),_),M=Math.pow(g.distanceToSquared(m),_),y=Math.pow(m.distanceToSquared(p),_);M<1e-4&&(M=1),x<1e-4&&(x=M),y<1e-4&&(y=M),e0.initNonuniformCatmullRom(d.x,g.x,m.x,p.x,x,M,y),t0.initNonuniformCatmullRom(d.y,g.y,m.y,p.y,x,M,y),n0.initNonuniformCatmullRom(d.z,g.z,m.z,p.z,x,M,y)}else this.curveType==="catmullrom"&&(e0.initCatmullRom(d.x,g.x,m.x,p.x,this.tension),t0.initCatmullRom(d.y,g.y,m.y,p.y,this.tension),n0.initCatmullRom(d.z,g.z,m.z,p.z,this.tension));return n.set(e0.calc(f),t0.calc(f),n0.calc(f)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new X().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Rh extends Fn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const a=e/2,l=t/2,c=Math.floor(n),f=Math.floor(i),d=c+1,p=f+1,g=e/c,m=t/f,_=[],x=[],M=[],y=[];for(let S=0;S<p;S++){const b=S*m-l;for(let C=0;C<d;C++){const T=C*g-a;x.push(T,-b,0),M.push(0,0,1),y.push(C/c),y.push(1-S/f)}}for(let S=0;S<f;S++)for(let b=0;b<c;b++){const C=b+d*S,T=b+d*(S+1),P=b+1+d*(S+1),L=b+1+d*S;_.push(C,T,L),_.push(T,P,L)}this.setIndex(_),this.setAttribute("position",new un(x,3)),this.setAttribute("normal",new un(M,3)),this.setAttribute("uv",new un(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rh(e.width,e.height,e.widthSegments,e.heightSegments)}}class L_ extends Fn{constructor(e=.5,t=1,n=32,i=1,a=0,l=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:a,thetaLength:l},n=Math.max(3,n),i=Math.max(1,i);const c=[],f=[],d=[],p=[];let g=e;const m=(t-e)/i,_=new X,x=new ft;for(let M=0;M<=i;M++){for(let y=0;y<=n;y++){const S=a+y/n*l;_.x=g*Math.cos(S),_.y=g*Math.sin(S),f.push(_.x,_.y,_.z),d.push(0,0,1),x.x=(_.x/t+1)/2,x.y=(_.y/t+1)/2,p.push(x.x,x.y)}g+=m}for(let M=0;M<i;M++){const y=M*(n+1);for(let S=0;S<n;S++){const b=S+y,C=b,T=b+n+1,P=b+n+2,L=b+1;c.push(C,T,L),c.push(T,P,L)}}this.setIndex(c),this.setAttribute("position",new un(f,3)),this.setAttribute("normal",new un(d,3)),this.setAttribute("uv",new un(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new L_(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class D_ extends Fn{constructor(e=1,t=32,n=16,i=0,a=Math.PI*2,l=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:a,thetaStart:l,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const f=Math.min(l+c,Math.PI);let d=0;const p=[],g=new X,m=new X,_=[],x=[],M=[],y=[];for(let S=0;S<=n;S++){const b=[],C=S/n,T=l+C*c,P=e*Math.cos(T),L=Math.sqrt(e*e-P*P);let D=0;S===0&&l===0?D=.5/t:S===n&&f===Math.PI&&(D=-.5/t);for(let w=0;w<=t;w++){const N=w/t,F=i+N*a;g.x=-L*Math.cos(F),g.y=P,g.z=L*Math.sin(F),x.push(g.x,g.y,g.z),m.copy(g).normalize(),M.push(m.x,m.y,m.z),y.push(N+D,1-C),b.push(d++)}p.push(b)}for(let S=0;S<n;S++)for(let b=0;b<t;b++){const C=p[S][b+1],T=p[S][b],P=p[S+1][b],L=p[S+1][b+1];(S!==0||l>0)&&_.push(C,T,L),(S!==n-1||f<Math.PI)&&_.push(T,P,L)}this.setIndex(_),this.setAttribute("position",new un(x,3)),this.setAttribute("normal",new un(M,3)),this.setAttribute("uv",new un(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new D_(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class N_ extends Fn{constructor(e=1,t=.4,n=12,i=48,a=Math.PI*2,l=0,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:a,thetaStart:l,thetaLength:c},n=Math.floor(n),i=Math.floor(i);const f=[],d=[],p=[],g=[],m=new X,_=new X,x=new X;for(let M=0;M<=n;M++){const y=l+M/n*c;for(let S=0;S<=i;S++){const b=S/i*a;_.x=(e+t*Math.cos(y))*Math.cos(b),_.y=(e+t*Math.cos(y))*Math.sin(b),_.z=t*Math.sin(y),d.push(_.x,_.y,_.z),m.x=e*Math.cos(b),m.y=e*Math.sin(b),x.subVectors(_,m).normalize(),p.push(x.x,x.y,x.z),g.push(S/i),g.push(M/n)}}for(let M=1;M<=n;M++)for(let y=1;y<=i;y++){const S=(i+1)*M+y-1,b=(i+1)*(M-1)+y-1,C=(i+1)*(M-1)+y,T=(i+1)*M+y;f.push(S,b,T),f.push(b,C,T)}this.setIndex(f),this.setAttribute("position",new un(d,3)),this.setAttribute("normal",new un(p,3)),this.setAttribute("uv",new un(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new N_(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class zb extends Fn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new X,a=new X;if(e.index!==null){const l=e.attributes.position,c=e.index;let f=e.groups;f.length===0&&(f=[{start:0,count:c.count,materialIndex:0}]);for(let d=0,p=f.length;d<p;++d){const g=f[d],m=g.start,_=g.count;for(let x=m,M=m+_;x<M;x+=3)for(let y=0;y<3;y++){const S=c.getX(x+y),b=c.getX(x+(y+1)%3);i.fromBufferAttribute(l,S),a.fromBufferAttribute(l,b),C1(i,a,n)===!0&&(t.push(i.x,i.y,i.z),t.push(a.x,a.y,a.z))}}}else{const l=e.attributes.position;for(let c=0,f=l.count/3;c<f;c++)for(let d=0;d<3;d++){const p=3*c+d,g=3*c+(d+1)%3;i.fromBufferAttribute(l,p),a.fromBufferAttribute(l,g),C1(i,a,n)===!0&&(t.push(i.x,i.y,i.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new un(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function C1(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}function iu(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(R1(i))i.isRenderTargetTexture?(xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(R1(i[0])){const a=[];for(let l=0,c=i.length;l<c;l++)a[l]=i[l].clone();e[t][n]=a}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Fi(s){const e={};for(let t=0;t<s.length;t++){const n=iu(s[t]);for(const i in n)e[i]=n[i]}return e}function R1(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Vb(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function cE(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Gt.workingColorSpace}const Fa={clone:iu,merge:Fi};var Hb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends qo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hb,this.fragmentShader=Gb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=iu(e.uniforms),this.uniformsGroups=Vb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const l=this.uniforms[i].value;l&&l.isTexture?t.uniforms[i]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[i]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[i]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[i]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[i]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[i]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[i]={type:"m4",value:l.toArray()}:t.uniforms[i]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new yt().setHex(i.value);break;case"v2":this.uniforms[n].value=new ft().fromArray(i.value);break;case"v3":this.uniforms[n].value=new X().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ln().fromArray(i.value);break;case"m3":this.uniforms[n].value=new At().fromArray(i.value);break;case"m4":this.uniforms[n].value=new dn().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class fE extends pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class P1 extends qo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cg,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wo,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wb extends qo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=OA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xb extends qo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Yb extends oE{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const i0={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(L1(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!L1(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function L1(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class qb{constructor(e,t,n){const i=this;let a=!1,l=0,c=0,f;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(p){c++,a===!1&&i.onStart!==void 0&&i.onStart(p,l,c),a=!0},this.itemEnd=function(p){l++,i.onProgress!==void 0&&i.onProgress(p,l,c),l===c&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(p){i.onError!==void 0&&i.onError(p)},this.resolveURL=function(p){return p=p.normalize("NFC"),f?f(p):p},this.setURLModifier=function(p){return f=p,this},this.addHandler=function(p,g){return d.push(p,g),this},this.removeHandler=function(p){const g=d.indexOf(p);return g!==-1&&d.splice(g,2),this},this.getHandler=function(p){for(let g=0,m=d.length;g<m;g+=2){const _=d[g],x=d[g+1];if(_.global&&(_.lastIndex=0),_.test(p))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const $b=new qb;class I_{constructor(e){this.manager=e!==void 0?e:$b,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,a){n.load(e,i,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}I_.DEFAULT_MATERIAL_NAME="__DEFAULT";const bl=new WeakMap;class jb extends I_{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,l=i0.get(`image:${e}`);if(l!==void 0){if(l.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(l),a.manager.itemEnd(e)},0);else{let g=bl.get(l);g===void 0&&(g=[],bl.set(l,g)),g.push({onLoad:t,onError:i})}return l}const c=kc("img");function f(){p(),t&&t(this);const g=bl.get(this)||[];for(let m=0;m<g.length;m++){const _=g[m];_.onLoad&&_.onLoad(this)}bl.delete(this),a.manager.itemEnd(e)}function d(g){p(),i&&i(g),i0.remove(`image:${e}`);const m=bl.get(this)||[];for(let _=0;_<m.length;_++){const x=m[_];x.onError&&x.onError(g)}bl.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function p(){c.removeEventListener("load",f,!1),c.removeEventListener("error",d,!1)}return c.addEventListener("load",f,!1),c.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),i0.add(`image:${e}`,c),a.manager.itemStart(e),c.src=e,c}}class Kb extends I_{constructor(e){super(e)}load(e,t,n,i){const a=new gi,l=new jb(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(c){a.image=c,a.needsUpdate=!0,t!==void 0&&t(a)},n,i),a}}class dE extends qn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const r0=new dn,D1=new X,N1=new X;class Zb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=xr,this.map=null,this.mapPass=null,this.matrix=new dn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new b_,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;D1.setFromMatrixPosition(e.matrixWorld),t.position.copy(D1),N1.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(N1),t.updateMatrixWorld(),r0.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(r0,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Oc||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(r0)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Rd=new X,Pd=new ou,ls=new X;class hE extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=ys,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Rd,Pd,ls),ls.x===1&&ls.y===1&&ls.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rd,Pd,ls.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Rd,Pd,ls),ls.x===1&&ls.y===1&&ls.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rd,Pd,ls.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ao=new X,I1=new ft,U1=new ft;class Or extends hE{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bc*2*Math.atan(Math.tan(Mc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ao.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ao.x,Ao.y).multiplyScalar(-e/Ao.z),Ao.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ao.x,Ao.y).multiplyScalar(-e/Ao.z)}getViewSize(e,t){return this.getViewBounds(e,I1,U1),t.subVectors(U1,I1)}setViewOffset(e,t,n,i,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mc*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,a=-.5*i;const l=this.view;if(this.view!==null&&this.view.enabled){const f=l.fullWidth,d=l.fullHeight;a+=l.offsetX*i/f,t-=l.offsetY*n/d,i*=l.width/f,n*=l.height/d}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ph extends hE{constructor(e=-1,t=1,n=1,i=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-e,l=n+e,c=i+t,f=i-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,l=a+d*this.view.width,c-=p*this.view.offsetY,f=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,l,c,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Qb extends Zb{constructor(){super(new Ph(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jb extends dE{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qn.DEFAULT_UP),this.updateMatrix(),this.target=new qn,this.shadow=new Qb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class eC extends dE{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class tC extends Fn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Cl=-90,Rl=1;class nC extends qn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Or(Cl,Rl,e,t);i.layers=this.layers,this.add(i);const a=new Or(Cl,Rl,e,t);a.layers=this.layers,this.add(a);const l=new Or(Cl,Rl,e,t);l.layers=this.layers,this.add(l);const c=new Or(Cl,Rl,e,t);c.layers=this.layers,this.add(c);const f=new Or(Cl,Rl,e,t);f.layers=this.layers,this.add(f);const d=new Or(Cl,Rl,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,a,l,c,f]=t;for(const d of t)this.remove(d);if(e===ys)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Oc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,l,c,f,d,p]=this.children,g=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,i),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,2,i),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,3,i),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(n,4,i),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,i),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(g,m,_),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class iC extends Or{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class rC{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=sC.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function sC(){this._document.hidden===!1&&this.reset()}class Lg extends rE{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const z_=class z_{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const a=this.elements;return a[0]=e,a[2]=t,a[1]=n,a[3]=i,this}};z_.prototype.isMatrix2=!0;let F1=z_;const O1=new X,Ld=new X,Pl=new X,Ll=new X,s0=new X,oC=new X,aC=new X;class lC{constructor(e=new X,t=new X){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){O1.subVectors(e,this.start),Ld.subVectors(this.end,this.start);const n=Ld.dot(Ld);if(n===0)return 0;let a=Ld.dot(O1)/n;return t&&(a=bt(a,0,1)),a}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=oC,n=aC){const i=10000000000000001e-32;let a,l;const c=this.start,f=e.start,d=this.end,p=e.end;Pl.subVectors(d,c),Ll.subVectors(p,f),s0.subVectors(c,f);const g=Pl.dot(Pl),m=Ll.dot(Ll),_=Ll.dot(s0);if(g<=i&&m<=i)return t.copy(c),n.copy(f),t.sub(n),t.dot(t);if(g<=i)a=0,l=_/m,l=bt(l,0,1);else{const x=Pl.dot(s0);if(m<=i)l=0,a=bt(-x/g,0,1);else{const M=Pl.dot(Ll),y=g*m-M*M;y!==0?a=bt((M*_-x*m)/y,0,1):a=0,l=(M*a+_)/m,l<0?(l=0,a=bt(-x/g,0,1)):l>1&&(l=1,a=bt((M-x)/g,0,1))}}return t.copy(c).addScaledVector(Pl,a),n.copy(f).addScaledVector(Ll,l),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function k1(s,e,t,n){const i=uC(n);switch(t){case jM:return s*e;case ZM:return s*e/i.components*i.byteLength;case v_:return s*e/i.components*i.byteLength;case Ua:return s*e*2/i.components*i.byteLength;case x_:return s*e*2/i.components*i.byteLength;case KM:return s*e*3/i.components*i.byteLength;case es:return s*e*4/i.components*i.byteLength;case y_:return s*e*4/i.components*i.byteLength;case $d:case jd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Kd:case Zd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case J0:case tg:return Math.max(s,16)*Math.max(e,8)/4;case Q0:case eg:return Math.max(s,8)*Math.max(e,8)/2;case ng:case ig:case sg:case og:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case rg:case ph:case ag:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case lg:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ug:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case cg:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case fg:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case dg:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case hg:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case pg:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case mg:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case gg:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case _g:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case vg:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case xg:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case yg:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Sg:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Mg:case Eg:case wg:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Tg:case Ag:return Math.ceil(s/4)*Math.ceil(e/4)*8;case mh:case bg:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function uC(s){switch(s){case xr:case XM:return{byteLength:1,components:1};case Uc:case YM:case Er:return{byteLength:2,components:1};case g_:case __:return{byteLength:2,components:4};case bs:case m_:case xs:return{byteLength:4,components:1};case qM:case $M:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:l_}}));typeof window<"u"&&(window.__THREE__?xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=l_);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pE(){let s=null,e=!1,t=null,n=null;function i(a,l){t(a,l),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function cC(s){const e=new WeakMap;function t(c,f){const d=c.array,p=c.usage,g=d.byteLength,m=s.createBuffer();s.bindBuffer(f,m),s.bufferData(f,d,p),c.onUploadCallback();let _;if(d instanceof Float32Array)_=s.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)_=s.HALF_FLOAT;else if(d instanceof Uint16Array)c.isFloat16BufferAttribute?_=s.HALF_FLOAT:_=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=s.SHORT;else if(d instanceof Uint32Array)_=s.UNSIGNED_INT;else if(d instanceof Int32Array)_=s.INT;else if(d instanceof Int8Array)_=s.BYTE;else if(d instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:g}}function n(c,f,d){const p=f.array,g=f.updateRanges;if(s.bindBuffer(d,c),g.length===0)s.bufferSubData(d,0,p);else{g.sort((_,x)=>_.start-x.start);let m=0;for(let _=1;_<g.length;_++){const x=g[m],M=g[_];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++m,g[m]=M)}g.length=m+1;for(let _=0,x=g.length;_<x;_++){const M=g[_];s.bufferSubData(d,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}f.clearUpdateRanges()}f.onUploadCallback()}function i(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=e.get(c);f&&(s.deleteBuffer(f.buffer),e.delete(c))}function l(c,f){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const d=e.get(c);if(d===void 0)e.set(c,t(c,f));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,c,f),d.version=c.version}}return{get:i,remove:a,update:l}}var fC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_C=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,yC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,MC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,EC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,TC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,AC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,LC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,DC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,NC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,IC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,UC=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,FC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,OC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VC="gl_FragColor = linearToOutputTexel( gl_FragColor );",HC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,WC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,XC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,YC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$C=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,JC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,iR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uR=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dR=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hR=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,pR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_R=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,SR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ER=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,CR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,PR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,LR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,IR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,UR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,OR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,VR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,$R=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,KR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ZR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,JR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,t3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,s3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,o3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,a3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,u3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,c3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const f3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,d3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,v3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,x3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,y3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,S3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,w3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,A3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,P3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,D3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,N3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,F3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,z3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,G3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,W3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dt={alphahash_fragment:fC,alphahash_pars_fragment:dC,alphamap_fragment:hC,alphamap_pars_fragment:pC,alphatest_fragment:mC,alphatest_pars_fragment:gC,aomap_fragment:_C,aomap_pars_fragment:vC,batching_pars_vertex:xC,batching_vertex:yC,begin_vertex:SC,beginnormal_vertex:MC,bsdfs:EC,iridescence_fragment:wC,bumpmap_pars_fragment:TC,clipping_planes_fragment:AC,clipping_planes_pars_fragment:bC,clipping_planes_pars_vertex:CC,clipping_planes_vertex:RC,color_fragment:PC,color_pars_fragment:LC,color_pars_vertex:DC,color_vertex:NC,common:IC,cube_uv_reflection_fragment:UC,defaultnormal_vertex:FC,displacementmap_pars_vertex:OC,displacementmap_vertex:kC,emissivemap_fragment:BC,emissivemap_pars_fragment:zC,colorspace_fragment:VC,colorspace_pars_fragment:HC,envmap_fragment:GC,envmap_common_pars_fragment:WC,envmap_pars_fragment:XC,envmap_pars_vertex:YC,envmap_physical_pars_fragment:iR,envmap_vertex:qC,fog_vertex:$C,fog_pars_vertex:jC,fog_fragment:KC,fog_pars_fragment:ZC,gradientmap_pars_fragment:QC,lightmap_pars_fragment:JC,lights_lambert_fragment:eR,lights_lambert_pars_fragment:tR,lights_pars_begin:nR,lights_toon_fragment:rR,lights_toon_pars_fragment:sR,lights_phong_fragment:oR,lights_phong_pars_fragment:aR,lights_physical_fragment:lR,lights_physical_pars_fragment:uR,lights_fragment_begin:cR,lights_fragment_maps:fR,lights_fragment_end:dR,lightprobes_pars_fragment:hR,logdepthbuf_fragment:pR,logdepthbuf_pars_fragment:mR,logdepthbuf_pars_vertex:gR,logdepthbuf_vertex:_R,map_fragment:vR,map_pars_fragment:xR,map_particle_fragment:yR,map_particle_pars_fragment:SR,metalnessmap_fragment:MR,metalnessmap_pars_fragment:ER,morphinstance_vertex:wR,morphcolor_vertex:TR,morphnormal_vertex:AR,morphtarget_pars_vertex:bR,morphtarget_vertex:CR,normal_fragment_begin:RR,normal_fragment_maps:PR,normal_pars_fragment:LR,normal_pars_vertex:DR,normal_vertex:NR,normalmap_pars_fragment:IR,clearcoat_normal_fragment_begin:UR,clearcoat_normal_fragment_maps:FR,clearcoat_pars_fragment:OR,iridescence_pars_fragment:kR,opaque_fragment:BR,packing:zR,premultiplied_alpha_fragment:VR,project_vertex:HR,dithering_fragment:GR,dithering_pars_fragment:WR,roughnessmap_fragment:XR,roughnessmap_pars_fragment:YR,shadowmap_pars_fragment:qR,shadowmap_pars_vertex:$R,shadowmap_vertex:jR,shadowmask_pars_fragment:KR,skinbase_vertex:ZR,skinning_pars_vertex:QR,skinning_vertex:JR,skinnormal_vertex:e3,specularmap_fragment:t3,specularmap_pars_fragment:n3,tonemapping_fragment:i3,tonemapping_pars_fragment:r3,transmission_fragment:s3,transmission_pars_fragment:o3,uv_pars_fragment:a3,uv_pars_vertex:l3,uv_vertex:u3,worldpos_vertex:c3,background_vert:f3,background_frag:d3,backgroundCube_vert:h3,backgroundCube_frag:p3,cube_vert:m3,cube_frag:g3,depth_vert:_3,depth_frag:v3,distance_vert:x3,distance_frag:y3,equirect_vert:S3,equirect_frag:M3,linedashed_vert:E3,linedashed_frag:w3,meshbasic_vert:T3,meshbasic_frag:A3,meshlambert_vert:b3,meshlambert_frag:C3,meshmatcap_vert:R3,meshmatcap_frag:P3,meshnormal_vert:L3,meshnormal_frag:D3,meshphong_vert:N3,meshphong_frag:I3,meshphysical_vert:U3,meshphysical_frag:F3,meshtoon_vert:O3,meshtoon_frag:k3,points_vert:B3,points_frag:z3,shadow_vert:V3,shadow_frag:H3,sprite_vert:G3,sprite_frag:W3},We={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new At}},envmap:{envMap:{value:null},envMapRotation:{value:new At},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new At}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new At}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new At},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new At},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new At},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new At}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new At}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new At}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0},uvTransform:{value:new At}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}}},Zi={basic:{uniforms:Fi([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:Fi([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new yt(0)},envMapIntensity:{value:1}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:Fi([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:Fi([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:Fi([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new yt(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:Fi([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:Fi([We.points,We.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:Fi([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:Fi([We.common,We.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:Fi([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:Fi([We.sprite,We.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new At},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new At}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distance:{uniforms:Fi([We.common,We.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distance_vert,fragmentShader:Dt.distance_frag},shadow:{uniforms:Fi([We.lights,We.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};Zi.physical={uniforms:Fi([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new At},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new At},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new At},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new At},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new At},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new At},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new At},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new At},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new At},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new At},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new At},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new At}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const Dd={r:0,b:0,g:0},X3=new dn,mE=new At;mE.set(-1,0,0,0,1,0,0,0,1);function Y3(s,e,t,n,i,a){const l=new yt(0);let c=i===!0?0:1,f,d,p=null,g=0,m=null;function _(b){let C=b.isScene===!0?b.background:null;if(C&&C.isTexture){const T=b.backgroundBlurriness>0;C=e.get(C,T)}return C}function x(b){let C=!1;const T=_(b);T===null?y(l,c):T&&T.isColor&&(y(T,1),C=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(s.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(b,C){const T=_(C);T&&(T.isCubeTexture||T.mapping===Ch)?(d===void 0&&(d=new Vi(new Hc(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:iu(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,L,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(d)),d.material.uniforms.envMap.value=T,d.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(X3.makeRotationFromEuler(C.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(mE),d.material.toneMapped=Gt.getTransfer(T.colorSpace)!==Zt,(p!==T||g!==T.version||m!==s.toneMapping)&&(d.material.needsUpdate=!0,p=T,g=T.version,m=s.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):T&&T.isTexture&&(f===void 0&&(f=new Vi(new Rh(2,2),new pi({name:"BackgroundMaterial",uniforms:iu(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:Go,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(f)),f.material.uniforms.t2D.value=T,f.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,f.material.toneMapped=Gt.getTransfer(T.colorSpace)!==Zt,T.matrixAutoUpdate===!0&&T.updateMatrix(),f.material.uniforms.uvTransform.value.copy(T.matrix),(p!==T||g!==T.version||m!==s.toneMapping)&&(f.material.needsUpdate=!0,p=T,g=T.version,m=s.toneMapping),f.layers.enableAll(),b.unshift(f,f.geometry,f.material,0,0,null))}function y(b,C){b.getRGB(Dd,cE(s)),t.buffers.color.setClear(Dd.r,Dd.g,Dd.b,C,a)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return l},setClearColor:function(b,C=1){l.set(b),c=C,y(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,y(l,c)},render:x,addToRenderList:M,dispose:S}}function q3(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=m(null);let a=i,l=!1;function c(B,z,re,ie,q){let ee=!1;const W=g(B,ie,re,z);a!==W&&(a=W,d(a.object)),ee=_(B,ie,re,q),ee&&x(B,ie,re,q),q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(ee||l)&&(l=!1,T(B,z,re,ie),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function f(){return s.createVertexArray()}function d(B){return s.bindVertexArray(B)}function p(B){return s.deleteVertexArray(B)}function g(B,z,re,ie){const q=ie.wireframe===!0;let ee=n[z.id];ee===void 0&&(ee={},n[z.id]=ee);const W=B.isInstancedMesh===!0?B.id:0;let Y=ee[W];Y===void 0&&(Y={},ee[W]=Y);let te=Y[re.id];te===void 0&&(te={},Y[re.id]=te);let U=te[q];return U===void 0&&(U=m(f()),te[q]=U),U}function m(B){const z=[],re=[],ie=[];for(let q=0;q<t;q++)z[q]=0,re[q]=0,ie[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:re,attributeDivisors:ie,object:B,attributes:{},index:null}}function _(B,z,re,ie){const q=a.attributes,ee=z.attributes;let W=0;const Y=re.getAttributes();for(const te in Y)if(Y[te].location>=0){const k=q[te];let J=ee[te];if(J===void 0&&(te==="instanceMatrix"&&B.instanceMatrix&&(J=B.instanceMatrix),te==="instanceColor"&&B.instanceColor&&(J=B.instanceColor)),k===void 0||k.attribute!==J||J&&k.data!==J.data)return!0;W++}return a.attributesNum!==W||a.index!==ie}function x(B,z,re,ie){const q={},ee=z.attributes;let W=0;const Y=re.getAttributes();for(const te in Y)if(Y[te].location>=0){let k=ee[te];k===void 0&&(te==="instanceMatrix"&&B.instanceMatrix&&(k=B.instanceMatrix),te==="instanceColor"&&B.instanceColor&&(k=B.instanceColor));const J={};J.attribute=k,k&&k.data&&(J.data=k.data),q[te]=J,W++}a.attributes=q,a.attributesNum=W,a.index=ie}function M(){const B=a.newAttributes;for(let z=0,re=B.length;z<re;z++)B[z]=0}function y(B){S(B,0)}function S(B,z){const re=a.newAttributes,ie=a.enabledAttributes,q=a.attributeDivisors;re[B]=1,ie[B]===0&&(s.enableVertexAttribArray(B),ie[B]=1),q[B]!==z&&(s.vertexAttribDivisor(B,z),q[B]=z)}function b(){const B=a.newAttributes,z=a.enabledAttributes;for(let re=0,ie=z.length;re<ie;re++)z[re]!==B[re]&&(s.disableVertexAttribArray(re),z[re]=0)}function C(B,z,re,ie,q,ee,W){W===!0?s.vertexAttribIPointer(B,z,re,q,ee):s.vertexAttribPointer(B,z,re,ie,q,ee)}function T(B,z,re,ie){M();const q=ie.attributes,ee=re.getAttributes(),W=z.defaultAttributeValues;for(const Y in ee){const te=ee[Y];if(te.location>=0){let U=q[Y];if(U===void 0&&(Y==="instanceMatrix"&&B.instanceMatrix&&(U=B.instanceMatrix),Y==="instanceColor"&&B.instanceColor&&(U=B.instanceColor)),U!==void 0){const k=U.normalized,J=U.itemSize,ze=e.get(U);if(ze===void 0)continue;const Ve=ze.buffer,Be=ze.type,se=ze.bytesPerElement,ve=Be===s.INT||Be===s.UNSIGNED_INT||U.gpuType===m_;if(U.isInterleavedBufferAttribute){const me=U.data,Ie=me.stride,Ze=U.offset;if(me.isInstancedInterleavedBuffer){for(let qe=0;qe<te.locationSize;qe++)S(te.location+qe,me.meshPerAttribute);B.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let qe=0;qe<te.locationSize;qe++)y(te.location+qe);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let qe=0;qe<te.locationSize;qe++)C(te.location+qe,J/te.locationSize,Be,k,Ie*se,(Ze+J/te.locationSize*qe)*se,ve)}else{if(U.isInstancedBufferAttribute){for(let me=0;me<te.locationSize;me++)S(te.location+me,U.meshPerAttribute);B.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let me=0;me<te.locationSize;me++)y(te.location+me);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let me=0;me<te.locationSize;me++)C(te.location+me,J/te.locationSize,Be,k,J*se,J/te.locationSize*me*se,ve)}}else if(W!==void 0){const k=W[Y];if(k!==void 0)switch(k.length){case 2:s.vertexAttrib2fv(te.location,k);break;case 3:s.vertexAttrib3fv(te.location,k);break;case 4:s.vertexAttrib4fv(te.location,k);break;default:s.vertexAttrib1fv(te.location,k)}}}}b()}function P(){N();for(const B in n){const z=n[B];for(const re in z){const ie=z[re];for(const q in ie){const ee=ie[q];for(const W in ee)p(ee[W].object),delete ee[W];delete ie[q]}}delete n[B]}}function L(B){if(n[B.id]===void 0)return;const z=n[B.id];for(const re in z){const ie=z[re];for(const q in ie){const ee=ie[q];for(const W in ee)p(ee[W].object),delete ee[W];delete ie[q]}}delete n[B.id]}function D(B){for(const z in n){const re=n[z];for(const ie in re){const q=re[ie];if(q[B.id]===void 0)continue;const ee=q[B.id];for(const W in ee)p(ee[W].object),delete ee[W];delete q[B.id]}}}function w(B){for(const z in n){const re=n[z],ie=B.isInstancedMesh===!0?B.id:0,q=re[ie];if(q!==void 0){for(const ee in q){const W=q[ee];for(const Y in W)p(W[Y].object),delete W[Y];delete q[ee]}delete re[ie],Object.keys(re).length===0&&delete n[z]}}}function N(){F(),l=!0,a!==i&&(a=i,d(a.object))}function F(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:c,reset:N,resetDefaultState:F,dispose:P,releaseStatesOfGeometry:L,releaseStatesOfObject:w,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:y,disableUnusedAttributes:b}}function $3(s,e,t){let n;function i(f){n=f}function a(f,d){s.drawArrays(n,f,d),t.update(d,n,1)}function l(f,d,p){p!==0&&(s.drawArraysInstanced(n,f,d,p),t.update(d,n,p))}function c(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,d,0,p);let m=0;for(let _=0;_<p;_++)m+=d[_];t.update(m,n,1)}this.setMode=i,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function j3(s,e,t,n){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function l(D){return!(D!==es&&n.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(D){const w=D===Er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==xr&&n.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==xs&&!w)}function f(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const p=f(d);p!==d&&(xt("WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const g=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const _=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),C=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=s.getParameter(s.MAX_SAMPLES),L=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:l,textureTypeReadable:c,precision:d,logarithmicDepthBuffer:g,reversedDepthBuffer:m,maxTextures:_,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:b,maxVaryings:C,maxFragmentUniforms:T,maxSamples:P,samples:L}}function K3(s){const e=this;let t=null,n=0,i=!1,a=!1;const l=new ga,c=new At,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,m){const _=g.length!==0||m||n!==0||i;return i=m,n=g.length,_},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,m){t=p(g,m,0)},this.setState=function(g,m,_){const x=g.clippingPlanes,M=g.clipIntersection,y=g.clipShadows,S=s.get(g);if(!i||x===null||x.length===0||a&&!y)a?p(null):d();else{const b=a?0:n,C=b*4;let T=S.clippingState||null;f.value=T,T=p(x,m,C,_);for(let P=0;P!==C;++P)T[P]=t[P];S.clippingState=T,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(g,m,_,x){const M=g!==null?g.length:0;let y=null;if(M!==0){if(y=f.value,x!==!0||y===null){const S=_+M*4,b=m.matrixWorldInverse;c.getNormalMatrix(b),(y===null||y.length<S)&&(y=new Float32Array(S));for(let C=0,T=_;C!==M;++C,T+=4)l.copy(g[C]).applyMatrix4(b,c),l.normal.toArray(y,T),y[T+3]=l.constant}f.value=y,f.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}const Uo=4,B1=[.125,.215,.35,.446,.526,.582],va=20,Z3=256,Qu=new Ph,z1=new yt;let o0=null,a0=0,l0=0,u0=!1;const Q3=new X;class V1{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,a={}){const{size:l=256,position:c=Q3}=a;o0=this._renderer.getRenderTarget(),a0=this._renderer.getActiveCubeFace(),l0=this._renderer.getActiveMipmapLevel(),u0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,n,i,f,c),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=W1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=G1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(o0,a0,l0),this._renderer.xr.enabled=u0,e.scissorTest=!1,Dl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ia||e.mapping===tu?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),o0=this._renderer.getRenderTarget(),a0=this._renderer.getActiveCubeFace(),l0=this._renderer.getActiveMipmapLevel(),u0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:Er,format:es,colorSpace:gh,depthBuffer:!1},i=H1(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=H1(e,t,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=J3(a)),this._blurMaterial=tP(a,e,t),this._ggxMaterial=eP(a,e,t)}return i}_compileMaterial(e){const t=new Vi(new Fn,e);this._renderer.compile(t,Qu)}_sceneToCubeUV(e,t,n,i,a){const f=new Or(90,1,t,n),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,m=g.autoClear,_=g.toneMapping;g.getClearColor(z1),g.toneMapping=Ts,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(i),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vi(new Hc,new zc({name:"PMREM.Background",side:ir,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,y=M.material;let S=!1;const b=e.background;b?b.isColor&&(y.color.copy(b),e.background=null,S=!0):(y.color.copy(z1),S=!0);for(let C=0;C<6;C++){const T=C%3;T===0?(f.up.set(0,d[C],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x+p[C],a.y,a.z)):T===1?(f.up.set(0,0,d[C]),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y+p[C],a.z)):(f.up.set(0,d[C],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y,a.z+p[C]));const P=this._cubeSize;Dl(i,T*P,C>2?P:0,P,P),g.setRenderTarget(i),S&&g.render(M,f),g.render(e,f)}g.toneMapping=_,g.autoClear=m,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ia||e.mapping===tu;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=W1()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=G1());const a=i?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=a;const c=a.uniforms;c.envMap.value=e;const f=this._cubeSize;Dl(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(l,Qu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let a=1;a<i;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,a=this._pingPongRenderTarget,l=this._ggxMaterial,c=this._lodMeshes[n];c.material=l;const f=l.uniforms,d=n/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),g=Math.sqrt(d*d-p*p),m=0+d*1.25,_=g*m,{_lodMax:x}=this,M=this._sizeLods[n],y=3*M*(n>x-Uo?n-x+Uo:0),S=4*(this._cubeSize-M);f.envMap.value=e.texture,f.roughness.value=_,f.mipInt.value=x-t,Dl(a,y,S,3*M,2*M),i.setRenderTarget(a),i.render(c,Qu),f.envMap.value=a.texture,f.roughness.value=0,f.mipInt.value=x-n,Dl(e,y,S,3*M,2*M),i.setRenderTarget(e),i.render(c,Qu)}_blur(e,t,n,i,a){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,i,"latitudinal",a),this._halfBlur(l,e,n,n,i,"longitudinal",a)}_halfBlur(e,t,n,i,a,l,c){const f=this._renderer,d=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&Yt("blur direction must be either latitudinal or longitudinal!");const p=3,g=this._lodMeshes[i];g.material=d;const m=d.uniforms,_=this._sizeLods[n]-1,x=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*va-1),M=a/x,y=isFinite(a)?1+Math.floor(p*M):va;y>va&&xt(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${va}`);const S=[];let b=0;for(let D=0;D<va;++D){const w=D/M,N=Math.exp(-w*w/2);S.push(N),D===0?b+=N:D<y&&(b+=2*N)}for(let D=0;D<S.length;D++)S[D]=S[D]/b;m.envMap.value=e.texture,m.samples.value=y,m.weights.value=S,m.latitudinal.value=l==="latitudinal",c&&(m.poleAxis.value=c);const{_lodMax:C}=this;m.dTheta.value=x,m.mipInt.value=C-n;const T=this._sizeLods[i],P=3*T*(i>C-Uo?i-C+Uo:0),L=4*(this._cubeSize-T);Dl(t,P,L,3*T,2*T),f.setRenderTarget(t),f.render(g,Qu)}}function J3(s){const e=[],t=[],n=[];let i=s;const a=s-Uo+1+B1.length;for(let l=0;l<a;l++){const c=Math.pow(2,i);e.push(c);let f=1/c;l>s-Uo?f=B1[l-s+Uo-1]:l===0&&(f=0),t.push(f);const d=1/(c-2),p=-d,g=1+d,m=[p,p,g,p,g,g,p,p,g,g,p,g],_=6,x=6,M=3,y=2,S=1,b=new Float32Array(M*x*_),C=new Float32Array(y*x*_),T=new Float32Array(S*x*_);for(let L=0;L<_;L++){const D=L%3*2/3-1,w=L>2?0:-1,N=[D,w,0,D+2/3,w,0,D+2/3,w+1,0,D,w,0,D+2/3,w+1,0,D,w+1,0];b.set(N,M*x*L),C.set(m,y*x*L);const F=[L,L,L,L,L,L];T.set(F,S*x*L)}const P=new Fn;P.setAttribute("position",new ts(b,M)),P.setAttribute("uv",new ts(C,y)),P.setAttribute("faceIndex",new ts(T,S)),n.push(new Vi(P,null)),i>Uo&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function H1(s,e,t){const n=new rr(s,e,t);return n.texture.mapping=Ch,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Dl(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function eP(s,e,t){return new pi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Z3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ws,depthTest:!1,depthWrite:!1})}function tP(s,e,t){const n=new Float32Array(va),i=new X(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:va,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ws,depthTest:!1,depthWrite:!1})}function G1(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ws,depthTest:!1,depthWrite:!1})}function W1(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ws,depthTest:!1,depthWrite:!1})}function Lh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class gE extends rr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new lE(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Hc(5,5,5),a=new pi({name:"CubemapFromEquirect",uniforms:iu(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ir,blending:ws});a.uniforms.tEquirect.value=t;const l=new Vi(i,a),c=t.minFilter;return t.minFilter===Sa&&(t.minFilter=Ri),new nC(1,10,this).update(e,l),t.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,i);e.setRenderTarget(a)}}function nP(s){let e=new WeakMap,t=new WeakMap,n=null;function i(m,_=!1){return m==null?null:_?l(m):a(m)}function a(m){if(m&&m.isTexture){const _=m.mapping;if(_===Am||_===bm)if(e.has(m)){const x=e.get(m).texture;return c(x,m.mapping)}else{const x=m.image;if(x&&x.height>0){const M=new gE(x.height);return M.fromEquirectangularTexture(s,m),e.set(m,M),m.addEventListener("dispose",d),c(M.texture,m.mapping)}else return null}}return m}function l(m){if(m&&m.isTexture){const _=m.mapping,x=_===Am||_===bm,M=_===Ia||_===tu;if(x||M){let y=t.get(m);const S=y!==void 0?y.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==S)return n===null&&(n=new V1(s)),y=x?n.fromEquirectangular(m,y):n.fromCubemap(m,y),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),y.texture;if(y!==void 0)return y.texture;{const b=m.image;return x&&b&&b.height>0||M&&b&&f(b)?(n===null&&(n=new V1(s)),y=x?n.fromEquirectangular(m):n.fromCubemap(m),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),m.addEventListener("dispose",p),y.texture):null}}}return m}function c(m,_){return _===Am?m.mapping=Ia:_===bm&&(m.mapping=tu),m}function f(m){let _=0;const x=6;for(let M=0;M<x;M++)m[M]!==void 0&&_++;return _===x}function d(m){const _=m.target;_.removeEventListener("dispose",d);const x=e.get(_);x!==void 0&&(e.delete(_),x.dispose())}function p(m){const _=m.target;_.removeEventListener("dispose",p);const x=t.get(_);x!==void 0&&(t.delete(_),x.dispose())}function g(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:g}}function iP(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Yl("WebGLRenderer: "+n+" extension not supported."),i}}}function rP(s,e,t,n){const i={},a=new WeakMap;function l(g){const m=g.target;m.index!==null&&e.remove(m.index);for(const x in m.attributes)e.remove(m.attributes[x]);m.removeEventListener("dispose",l),delete i[m.id];const _=a.get(m);_&&(e.remove(_),a.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(g,m){return i[m.id]===!0||(m.addEventListener("dispose",l),i[m.id]=!0,t.memory.geometries++),m}function f(g){const m=g.attributes;for(const _ in m)e.update(m[_],s.ARRAY_BUFFER)}function d(g){const m=[],_=g.index,x=g.attributes.position;let M=0;if(x===void 0)return;if(_!==null){const b=_.array;M=_.version;for(let C=0,T=b.length;C<T;C+=3){const P=b[C+0],L=b[C+1],D=b[C+2];m.push(P,L,L,D,D,P)}}else{const b=x.array;M=x.version;for(let C=0,T=b.length/3-1;C<T;C+=3){const P=C+0,L=C+1,D=C+2;m.push(P,L,L,D,D,P)}}const y=new(x.count>=65535?iE:nE)(m,1);y.version=M;const S=a.get(g);S&&e.remove(S),a.set(g,y)}function p(g){const m=a.get(g);if(m){const _=g.index;_!==null&&m.version<_.version&&d(g)}else d(g);return a.get(g)}return{get:c,update:f,getWireframeAttribute:p}}function sP(s,e,t){let n;function i(g){n=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function f(g,m){s.drawElements(n,m,a,g*l),t.update(m,n,1)}function d(g,m,_){_!==0&&(s.drawElementsInstanced(n,m,a,g*l,_),t.update(m,n,_))}function p(g,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,a,g,0,_);let M=0;for(let y=0;y<_;y++)M+=m[y];t.update(M,n,1)}this.setMode=i,this.setIndex=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=p}function oP(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,c){switch(t.calls++,l){case s.TRIANGLES:t.triangles+=c*(a/3);break;case s.LINES:t.lines+=c*(a/2);break;case s.LINE_STRIP:t.lines+=c*(a-1);break;case s.LINE_LOOP:t.lines+=c*a;break;case s.POINTS:t.points+=c*a;break;default:Yt("WebGLInfo: Unknown draw mode:",l);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function aP(s,e,t){const n=new WeakMap,i=new ln;function a(l,c,f){const d=l.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=p!==void 0?p.length:0;let m=n.get(c);if(m===void 0||m.count!==g){let F=function(){w.dispose(),n.delete(c),c.removeEventListener("dispose",F)};var _=F;m!==void 0&&m.texture.dispose();const x=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,S=c.morphAttributes.position||[],b=c.morphAttributes.normal||[],C=c.morphAttributes.color||[];let T=0;x===!0&&(T=1),M===!0&&(T=2),y===!0&&(T=3);let P=c.attributes.position.count*T,L=1;P>e.maxTextureSize&&(L=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const D=new Float32Array(P*L*4*g),w=new JM(D,P,L,g);w.type=xs,w.needsUpdate=!0;const N=T*4;for(let B=0;B<g;B++){const z=S[B],re=b[B],ie=C[B],q=P*L*4*B;for(let ee=0;ee<z.count;ee++){const W=ee*N;x===!0&&(i.fromBufferAttribute(z,ee),D[q+W+0]=i.x,D[q+W+1]=i.y,D[q+W+2]=i.z,D[q+W+3]=0),M===!0&&(i.fromBufferAttribute(re,ee),D[q+W+4]=i.x,D[q+W+5]=i.y,D[q+W+6]=i.z,D[q+W+7]=0),y===!0&&(i.fromBufferAttribute(ie,ee),D[q+W+8]=i.x,D[q+W+9]=i.y,D[q+W+10]=i.z,D[q+W+11]=ie.itemSize===4?i.w:1)}}m={count:g,texture:w,size:new ft(P,L)},n.set(c,m),c.addEventListener("dispose",F)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",l.morphTexture,t);else{let x=0;for(let y=0;y<d.length;y++)x+=d[y];const M=c.morphTargetsRelative?1:1-x;f.getUniforms().setValue(s,"morphTargetBaseInfluence",M),f.getUniforms().setValue(s,"morphTargetInfluences",d)}f.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}return{update:a}}function lP(s,e,t,n,i){let a=new WeakMap;function l(d){const p=i.render.frame,g=d.geometry,m=e.get(d,g);if(a.get(m)!==p&&(e.update(m),a.set(m,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),a.get(d)!==p&&(t.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,s.ARRAY_BUFFER),a.set(d,p))),d.isSkinnedMesh){const _=d.skeleton;a.get(_)!==p&&(_.update(),a.set(_,p))}return m}function c(){a=new WeakMap}function f(d){const p=d.target;p.removeEventListener("dispose",f),n.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const uP={[u_]:"LINEAR_TONE_MAPPING",[c_]:"REINHARD_TONE_MAPPING",[f_]:"CINEON_TONE_MAPPING",[bh]:"ACES_FILMIC_TONE_MAPPING",[h_]:"AGX_TONE_MAPPING",[p_]:"NEUTRAL_TONE_MAPPING",[d_]:"CUSTOM_TONE_MAPPING"};function cP(s,e,t,n,i,a){const l=new rr(e,t,{type:s,depthBuffer:i,stencilBuffer:a,samples:n?4:0,depthTexture:i?new nu(e,t):void 0}),c=new rr(e,t,{type:Er,depthBuffer:!1,stencilBuffer:!1}),f=new Fn;f.setAttribute("position",new un([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new un([0,2,0,0,2,0],2));const d=new fE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Vi(f,d),g=new Ph(-1,1,1,-1,0,1);let m=null,_=null,x=!1,M,y=null,S=[],b=!1;this.setSize=function(C,T){l.setSize(C,T),c.setSize(C,T);for(let P=0;P<S.length;P++){const L=S[P];L.setSize&&L.setSize(C,T)}},this.setEffects=function(C){S=C,b=S.length>0&&S[0].isRenderPass===!0;const T=l.width,P=l.height;for(let L=0;L<S.length;L++){const D=S[L];D.setSize&&D.setSize(T,P)}},this.begin=function(C,T){if(x||C.toneMapping===Ts&&S.length===0)return!1;if(y=T,T!==null){const P=T.width,L=T.height;(l.width!==P||l.height!==L)&&this.setSize(P,L)}return b===!1&&C.setRenderTarget(l),M=C.toneMapping,C.toneMapping=Ts,!0},this.hasRenderPass=function(){return b},this.end=function(C,T){C.toneMapping=M,x=!0;let P=l,L=c;for(let D=0;D<S.length;D++){const w=S[D];if(w.enabled!==!1&&(w.render(C,L,P,T),w.needsSwap!==!1)){const N=P;P=L,L=N}}if(m!==C.outputColorSpace||_!==C.toneMapping){m=C.outputColorSpace,_=C.toneMapping,d.defines={},Gt.getTransfer(m)===Zt&&(d.defines.SRGB_TRANSFER="");const D=uP[_];D&&(d.defines[D]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=P.texture,C.setRenderTarget(y),C.render(p,g),y=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),c.dispose(),f.dispose(),d.dispose()}}const _E=new gi,Dg=new nu(1,1),vE=new JM,xE=new gb,yE=new lE,X1=[],Y1=[],q1=new Float32Array(16),$1=new Float32Array(9),j1=new Float32Array(4);function au(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let a=X1[i];if(a===void 0&&(a=new Float32Array(i),X1[i]=a),e!==0){n.toArray(a,0);for(let l=1,c=0;l!==e;++l)c+=t,s[l].toArray(a,c)}return a}function $n(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function jn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Dh(s,e){let t=Y1[e];t===void 0&&(t=new Int32Array(e),Y1[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function fP(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function dP(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($n(t,e))return;s.uniform2fv(this.addr,e),jn(t,e)}}function hP(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($n(t,e))return;s.uniform3fv(this.addr,e),jn(t,e)}}function pP(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($n(t,e))return;s.uniform4fv(this.addr,e),jn(t,e)}}function mP(s,e){const t=this.cache,n=e.elements;if(n===void 0){if($n(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),jn(t,e)}else{if($n(t,n))return;j1.set(n),s.uniformMatrix2fv(this.addr,!1,j1),jn(t,n)}}function gP(s,e){const t=this.cache,n=e.elements;if(n===void 0){if($n(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),jn(t,e)}else{if($n(t,n))return;$1.set(n),s.uniformMatrix3fv(this.addr,!1,$1),jn(t,n)}}function _P(s,e){const t=this.cache,n=e.elements;if(n===void 0){if($n(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),jn(t,e)}else{if($n(t,n))return;q1.set(n),s.uniformMatrix4fv(this.addr,!1,q1),jn(t,n)}}function vP(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function xP(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($n(t,e))return;s.uniform2iv(this.addr,e),jn(t,e)}}function yP(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($n(t,e))return;s.uniform3iv(this.addr,e),jn(t,e)}}function SP(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($n(t,e))return;s.uniform4iv(this.addr,e),jn(t,e)}}function MP(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function EP(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($n(t,e))return;s.uniform2uiv(this.addr,e),jn(t,e)}}function wP(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($n(t,e))return;s.uniform3uiv(this.addr,e),jn(t,e)}}function TP(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($n(t,e))return;s.uniform4uiv(this.addr,e),jn(t,e)}}function AP(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let a;this.type===s.SAMPLER_2D_SHADOW?(Dg.compareFunction=t.isReversedDepthBuffer()?M_:S_,a=Dg):a=_E,t.setTexture2D(e||a,i)}function bP(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||xE,i)}function CP(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||yE,i)}function RP(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||vE,i)}function PP(s){switch(s){case 5126:return fP;case 35664:return dP;case 35665:return hP;case 35666:return pP;case 35674:return mP;case 35675:return gP;case 35676:return _P;case 5124:case 35670:return vP;case 35667:case 35671:return xP;case 35668:case 35672:return yP;case 35669:case 35673:return SP;case 5125:return MP;case 36294:return EP;case 36295:return wP;case 36296:return TP;case 35678:case 36198:case 36298:case 36306:case 35682:return AP;case 35679:case 36299:case 36307:return bP;case 35680:case 36300:case 36308:case 36293:return CP;case 36289:case 36303:case 36311:case 36292:return RP}}function LP(s,e){s.uniform1fv(this.addr,e)}function DP(s,e){const t=au(e,this.size,2);s.uniform2fv(this.addr,t)}function NP(s,e){const t=au(e,this.size,3);s.uniform3fv(this.addr,t)}function IP(s,e){const t=au(e,this.size,4);s.uniform4fv(this.addr,t)}function UP(s,e){const t=au(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function FP(s,e){const t=au(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function OP(s,e){const t=au(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function kP(s,e){s.uniform1iv(this.addr,e)}function BP(s,e){s.uniform2iv(this.addr,e)}function zP(s,e){s.uniform3iv(this.addr,e)}function VP(s,e){s.uniform4iv(this.addr,e)}function HP(s,e){s.uniform1uiv(this.addr,e)}function GP(s,e){s.uniform2uiv(this.addr,e)}function WP(s,e){s.uniform3uiv(this.addr,e)}function XP(s,e){s.uniform4uiv(this.addr,e)}function YP(s,e,t){const n=this.cache,i=e.length,a=Dh(t,i);$n(n,a)||(s.uniform1iv(this.addr,a),jn(n,a));let l;this.type===s.SAMPLER_2D_SHADOW?l=Dg:l=_E;for(let c=0;c!==i;++c)t.setTexture2D(e[c]||l,a[c])}function qP(s,e,t){const n=this.cache,i=e.length,a=Dh(t,i);$n(n,a)||(s.uniform1iv(this.addr,a),jn(n,a));for(let l=0;l!==i;++l)t.setTexture3D(e[l]||xE,a[l])}function $P(s,e,t){const n=this.cache,i=e.length,a=Dh(t,i);$n(n,a)||(s.uniform1iv(this.addr,a),jn(n,a));for(let l=0;l!==i;++l)t.setTextureCube(e[l]||yE,a[l])}function jP(s,e,t){const n=this.cache,i=e.length,a=Dh(t,i);$n(n,a)||(s.uniform1iv(this.addr,a),jn(n,a));for(let l=0;l!==i;++l)t.setTexture2DArray(e[l]||vE,a[l])}function KP(s){switch(s){case 5126:return LP;case 35664:return DP;case 35665:return NP;case 35666:return IP;case 35674:return UP;case 35675:return FP;case 35676:return OP;case 5124:case 35670:return kP;case 35667:case 35671:return BP;case 35668:case 35672:return zP;case 35669:case 35673:return VP;case 5125:return HP;case 36294:return GP;case 36295:return WP;case 36296:return XP;case 35678:case 36198:case 36298:case 36306:case 35682:return YP;case 35679:case 36299:case 36307:return qP;case 35680:case 36300:case 36308:case 36293:return $P;case 36289:case 36303:case 36311:case 36292:return jP}}class ZP{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=PP(t.type)}}class QP{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=KP(t.type)}}class JP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let a=0,l=i.length;a!==l;++a){const c=i[a];c.setValue(e,t[c.id],n)}}}const c0=/(\w+)(\])?(\[|\.)?/g;function K1(s,e){s.seq.push(e),s.map[e.id]=e}function eL(s,e,t){const n=s.name,i=n.length;for(c0.lastIndex=0;;){const a=c0.exec(n),l=c0.lastIndex;let c=a[1];const f=a[2]==="]",d=a[3];if(f&&(c=c|0),d===void 0||d==="["&&l+2===i){K1(t,d===void 0?new ZP(c,s,e):new QP(c,s,e));break}else{let g=t.map[c];g===void 0&&(g=new JP(c),K1(t,g)),t=g}}}class eh{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let l=0;l<n;++l){const c=e.getActiveUniform(t,l),f=e.getUniformLocation(t,c.name);eL(c,f,this)}const i=[],a=[];for(const l of this.seq)l.type===e.SAMPLER_2D_SHADOW||l.type===e.SAMPLER_CUBE_SHADOW||l.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(l):a.push(l);i.length>0&&(this.seq=i.concat(a))}setValue(e,t,n,i){const a=this.map[t];a!==void 0&&a.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let a=0,l=t.length;a!==l;++a){const c=t[a],f=n[c.id];f.needsUpdate!==!1&&c.setValue(e,f.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,a=e.length;i!==a;++i){const l=e[i];l.id in t&&n.push(l)}return n}}function Z1(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const tL=37297;let nL=0;function iL(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=i;l<a;l++){const c=l+1;n.push(`${c===e?">":" "} ${c}: ${t[l]}`)}return n.join(`
`)}const Q1=new At;function rL(s){Gt._getMatrix(Q1,Gt.workingColorSpace,s);const e=`mat3( ${Q1.elements.map(t=>t.toFixed(4))} )`;switch(Gt.getTransfer(s)){case _h:return[e,"LinearTransferOETF"];case Zt:return[e,"sRGBTransferOETF"];default:return xt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function J1(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),a=(s.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+iL(s.getShaderSource(e),c)}else return a}function sL(s,e){const t=rL(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const oL={[u_]:"Linear",[c_]:"Reinhard",[f_]:"Cineon",[bh]:"ACESFilmic",[h_]:"AgX",[p_]:"Neutral",[d_]:"Custom"};function aL(s,e){const t=oL[e];return t===void 0?(xt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Nd=new X;function lL(){Gt.getLuminanceCoefficients(Nd);const s=Nd.x.toFixed(4),e=Nd.y.toFixed(4),t=Nd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uL(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(uc).join(`
`)}function cL(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fL(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const a=s.getActiveAttrib(e,i),l=a.name;let c=1;a.type===s.FLOAT_MAT2&&(c=2),a.type===s.FLOAT_MAT3&&(c=3),a.type===s.FLOAT_MAT4&&(c=4),t[l]={type:a.type,location:s.getAttribLocation(e,l),locationSize:c}}return t}function uc(s){return s!==""}function eS(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tS(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ng(s){return s.replace(dL,pL)}const hL=new Map;function pL(s,e){let t=Dt[e];if(t===void 0){const n=hL.get(e);if(n!==void 0)t=Dt[n],xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ng(t)}const mL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nS(s){return s.replace(mL,gL)}function gL(s,e,t,n){let i="";for(let a=parseInt(e);a<parseInt(t);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function iS(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const _L={[qd]:"SHADOWMAP_TYPE_PCF",[ac]:"SHADOWMAP_TYPE_VSM"};function vL(s){return _L[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const xL={[Ia]:"ENVMAP_TYPE_CUBE",[tu]:"ENVMAP_TYPE_CUBE",[Ch]:"ENVMAP_TYPE_CUBE_UV"};function yL(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":xL[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const SL={[tu]:"ENVMAP_MODE_REFRACTION"};function ML(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":SL[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const EL={[GM]:"ENVMAP_BLENDING_MULTIPLY",[IA]:"ENVMAP_BLENDING_MIX",[UA]:"ENVMAP_BLENDING_ADD"};function wL(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":EL[s.combine]||"ENVMAP_BLENDING_NONE"}function TL(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function AL(s,e,t,n){const i=s.getContext(),a=t.defines;let l=t.vertexShader,c=t.fragmentShader;const f=vL(t),d=yL(t),p=ML(t),g=wL(t),m=TL(t),_=uL(t),x=cL(a),M=i.createProgram();let y,S,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(uc).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(uc).join(`
`),S.length>0&&(S+=`
`)):(y=[iS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(uc).join(`
`),S=[iS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ts?"#define TONE_MAPPING":"",t.toneMapping!==Ts?Dt.tonemapping_pars_fragment:"",t.toneMapping!==Ts?aL("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,sL("linearToOutputTexel",t.outputColorSpace),lL(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(uc).join(`
`)),l=Ng(l),l=eS(l,t),l=tS(l,t),c=Ng(c),c=eS(c,t),c=tS(c,t),l=nS(l),c=nS(c),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,y=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===i1?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===i1?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const C=b+y+l,T=b+S+c,P=Z1(i,i.VERTEX_SHADER,C),L=Z1(i,i.FRAGMENT_SHADER,T);i.attachShader(M,P),i.attachShader(M,L),t.index0AttributeName!==void 0?i.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(M,0,"position"),i.linkProgram(M);function D(B){if(s.debug.checkShaderErrors){const z=i.getProgramInfoLog(M)||"",re=i.getShaderInfoLog(P)||"",ie=i.getShaderInfoLog(L)||"",q=z.trim(),ee=re.trim(),W=ie.trim();let Y=!0,te=!0;if(i.getProgramParameter(M,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,M,P,L);else{const U=J1(i,P,"vertex"),k=J1(i,L,"fragment");Yt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(M,i.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+q+`
`+U+`
`+k)}else q!==""?xt("WebGLProgram: Program Info Log:",q):(ee===""||W==="")&&(te=!1);te&&(B.diagnostics={runnable:Y,programLog:q,vertexShader:{log:ee,prefix:y},fragmentShader:{log:W,prefix:S}})}i.deleteShader(P),i.deleteShader(L),w=new eh(i,M),N=fL(i,M)}let w;this.getUniforms=function(){return w===void 0&&D(this),w};let N;this.getAttributes=function(){return N===void 0&&D(this),N};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=i.getProgramParameter(M,tL)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nL++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=P,this.fragmentShader=L,this}let bL=0;class CL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new RL(e),t.set(e,n)),n}}class RL{constructor(e){this.id=bL++,this.code=e,this.usedTimes=0}}function PL(s){return s===Ua||s===ph||s===mh}function LL(s,e,t,n,i,a){const l=new eE,c=new CL,f=new Set,d=[],p=new Map,g=n.logarithmicDepthBuffer;let m=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return f.add(w),w===0?"uv":`uv${w}`}function M(w,N,F,B,z,re){const ie=B.fog,q=z.geometry,ee=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?B.environment:null,W=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,Y=e.get(w.envMap||ee,W),te=Y&&Y.mapping===Ch?Y.image.height:null,U=_[w.type];w.precision!==null&&(m=n.getMaxPrecision(w.precision),m!==w.precision&&xt("WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const k=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,J=k!==void 0?k.length:0;let ze=0;q.morphAttributes.position!==void 0&&(ze=1),q.morphAttributes.normal!==void 0&&(ze=2),q.morphAttributes.color!==void 0&&(ze=3);let Ve,Be,se,ve;if(U){const we=Zi[U];Ve=we.vertexShader,Be=we.fragmentShader}else{Ve=w.vertexShader,Be=w.fragmentShader;const we=c.getVertexShaderStage(w),at=c.getFragmentShaderStage(w);c.update(w,we,at),se=we.id,ve=at.id}const me=s.getRenderTarget(),Ie=s.state.buffers.depth.getReversed(),Ze=z.isInstancedMesh===!0,qe=z.isBatchedMesh===!0,Ct=!!w.map,Xe=!!w.matcap,dt=!!Y,mt=!!w.aoMap,ht=!!w.lightMap,ce=!!w.bumpMap&&w.wireframe===!1,Nt=!!w.normalMap,Vt=!!w.displacementMap,Ht=!!w.emissiveMap,it=!!w.metalnessMap,Ft=!!w.roughnessMap,j=w.anisotropy>0,jt=w.clearcoat>0,pt=w.dispersion>0,O=w.iridescence>0,A=w.sheen>0,Z=w.transmission>0,oe=j&&!!w.anisotropyMap,he=jt&&!!w.clearcoatMap,De=jt&&!!w.clearcoatNormalMap,be=jt&&!!w.clearcoatRoughnessMap,ge=O&&!!w.iridescenceMap,ne=O&&!!w.iridescenceThicknessMap,xe=A&&!!w.sheenColorMap,Re=A&&!!w.sheenRoughnessMap,ye=!!w.specularMap,Se=!!w.specularColorMap,Me=!!w.specularIntensityMap,Ge=Z&&!!w.transmissionMap,$e=Z&&!!w.thicknessMap,H=!!w.gradientMap,Te=!!w.alphaMap,_e=w.alphaTest>0,Ue=!!w.alphaHash,Fe=!!w.extensions;let Ee=Ts;w.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Ee=s.toneMapping);const Ae={shaderID:U,shaderType:w.type,shaderName:w.name,vertexShader:Ve,fragmentShader:Be,defines:w.defines,customVertexShaderID:se,customFragmentShaderID:ve,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:qe,batchingColor:qe&&z._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&z.instanceColor!==null,instancingMorph:Ze&&z.morphTexture!==null,outputColorSpace:me===null?s.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Gt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:Ct,matcap:Xe,envMap:dt,envMapMode:dt&&Y.mapping,envMapCubeUVHeight:te,aoMap:mt,lightMap:ht,bumpMap:ce,normalMap:Nt,displacementMap:Vt,emissiveMap:Ht,normalMapObjectSpace:Nt&&w.normalMapType===kA,normalMapTangentSpace:Nt&&w.normalMapType===Cg,packedNormalMap:Nt&&w.normalMapType===Cg&&PL(w.normalMap.format),metalnessMap:it,roughnessMap:Ft,anisotropy:j,anisotropyMap:oe,clearcoat:jt,clearcoatMap:he,clearcoatNormalMap:De,clearcoatRoughnessMap:be,dispersion:pt,iridescence:O,iridescenceMap:ge,iridescenceThicknessMap:ne,sheen:A,sheenColorMap:xe,sheenRoughnessMap:Re,specularMap:ye,specularColorMap:Se,specularIntensityMap:Me,transmission:Z,transmissionMap:Ge,thicknessMap:$e,gradientMap:H,opaque:w.transparent===!1&&w.blending===Xl&&w.alphaToCoverage===!1,alphaMap:Te,alphaTest:_e,alphaHash:Ue,combine:w.combine,mapUv:Ct&&x(w.map.channel),aoMapUv:mt&&x(w.aoMap.channel),lightMapUv:ht&&x(w.lightMap.channel),bumpMapUv:ce&&x(w.bumpMap.channel),normalMapUv:Nt&&x(w.normalMap.channel),displacementMapUv:Vt&&x(w.displacementMap.channel),emissiveMapUv:Ht&&x(w.emissiveMap.channel),metalnessMapUv:it&&x(w.metalnessMap.channel),roughnessMapUv:Ft&&x(w.roughnessMap.channel),anisotropyMapUv:oe&&x(w.anisotropyMap.channel),clearcoatMapUv:he&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:De&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Re&&x(w.sheenRoughnessMap.channel),specularMapUv:ye&&x(w.specularMap.channel),specularColorMapUv:Se&&x(w.specularColorMap.channel),specularIntensityMapUv:Me&&x(w.specularIntensityMap.channel),transmissionMapUv:Ge&&x(w.transmissionMap.channel),thicknessMapUv:$e&&x(w.thicknessMap.channel),alphaMapUv:Te&&x(w.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Nt||j),vertexNormals:!!q.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!q.attributes.uv&&(Ct||Te),fog:!!ie,useFog:w.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||q.attributes.normal===void 0&&Nt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ie,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ze,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:re.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Ct&&w.map.isVideoTexture===!0&&Gt.getTransfer(w.map.colorSpace)===Zt,decodeVideoTextureEmissive:Ht&&w.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(w.emissiveMap.colorSpace)===Zt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ms,flipSided:w.side===ir,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Fe&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&w.extensions.multiDraw===!0||qe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ae.vertexUv1s=f.has(1),Ae.vertexUv2s=f.has(2),Ae.vertexUv3s=f.has(3),f.clear(),Ae}function y(w){const N=[];if(w.shaderID?N.push(w.shaderID):(N.push(w.customVertexShaderID),N.push(w.customFragmentShaderID)),w.defines!==void 0)for(const F in w.defines)N.push(F),N.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(S(N,w),b(N,w),N.push(s.outputColorSpace)),N.push(w.customProgramCacheKey),N.join()}function S(w,N){w.push(N.precision),w.push(N.outputColorSpace),w.push(N.envMapMode),w.push(N.envMapCubeUVHeight),w.push(N.mapUv),w.push(N.alphaMapUv),w.push(N.lightMapUv),w.push(N.aoMapUv),w.push(N.bumpMapUv),w.push(N.normalMapUv),w.push(N.displacementMapUv),w.push(N.emissiveMapUv),w.push(N.metalnessMapUv),w.push(N.roughnessMapUv),w.push(N.anisotropyMapUv),w.push(N.clearcoatMapUv),w.push(N.clearcoatNormalMapUv),w.push(N.clearcoatRoughnessMapUv),w.push(N.iridescenceMapUv),w.push(N.iridescenceThicknessMapUv),w.push(N.sheenColorMapUv),w.push(N.sheenRoughnessMapUv),w.push(N.specularMapUv),w.push(N.specularColorMapUv),w.push(N.specularIntensityMapUv),w.push(N.transmissionMapUv),w.push(N.thicknessMapUv),w.push(N.combine),w.push(N.fogExp2),w.push(N.sizeAttenuation),w.push(N.morphTargetsCount),w.push(N.morphAttributeCount),w.push(N.numDirLights),w.push(N.numPointLights),w.push(N.numSpotLights),w.push(N.numSpotLightMaps),w.push(N.numHemiLights),w.push(N.numRectAreaLights),w.push(N.numDirLightShadows),w.push(N.numPointLightShadows),w.push(N.numSpotLightShadows),w.push(N.numSpotLightShadowsWithMaps),w.push(N.numLightProbes),w.push(N.shadowMapType),w.push(N.toneMapping),w.push(N.numClippingPlanes),w.push(N.numClipIntersection),w.push(N.depthPacking)}function b(w,N){l.disableAll(),N.instancing&&l.enable(0),N.instancingColor&&l.enable(1),N.instancingMorph&&l.enable(2),N.matcap&&l.enable(3),N.envMap&&l.enable(4),N.normalMapObjectSpace&&l.enable(5),N.normalMapTangentSpace&&l.enable(6),N.clearcoat&&l.enable(7),N.iridescence&&l.enable(8),N.alphaTest&&l.enable(9),N.vertexColors&&l.enable(10),N.vertexAlphas&&l.enable(11),N.vertexUv1s&&l.enable(12),N.vertexUv2s&&l.enable(13),N.vertexUv3s&&l.enable(14),N.vertexTangents&&l.enable(15),N.anisotropy&&l.enable(16),N.alphaHash&&l.enable(17),N.batching&&l.enable(18),N.dispersion&&l.enable(19),N.batchingColor&&l.enable(20),N.gradientMap&&l.enable(21),N.packedNormalMap&&l.enable(22),N.vertexNormals&&l.enable(23),w.push(l.mask),l.disableAll(),N.fog&&l.enable(0),N.useFog&&l.enable(1),N.flatShading&&l.enable(2),N.logarithmicDepthBuffer&&l.enable(3),N.reversedDepthBuffer&&l.enable(4),N.skinning&&l.enable(5),N.morphTargets&&l.enable(6),N.morphNormals&&l.enable(7),N.morphColors&&l.enable(8),N.premultipliedAlpha&&l.enable(9),N.shadowMapEnabled&&l.enable(10),N.doubleSided&&l.enable(11),N.flipSided&&l.enable(12),N.useDepthPacking&&l.enable(13),N.dithering&&l.enable(14),N.transmission&&l.enable(15),N.sheen&&l.enable(16),N.opaque&&l.enable(17),N.pointsUvs&&l.enable(18),N.decodeVideoTexture&&l.enable(19),N.decodeVideoTextureEmissive&&l.enable(20),N.alphaToCoverage&&l.enable(21),N.numLightProbeGrids>0&&l.enable(22),N.hasPositionAttribute&&l.enable(23),w.push(l.mask)}function C(w){const N=_[w.type];let F;if(N){const B=Zi[N];F=Fa.clone(B.uniforms)}else F=w.uniforms;return F}function T(w,N){let F=p.get(N);return F!==void 0?++F.usedTimes:(F=new AL(s,N,w,i),d.push(F),p.set(N,F)),F}function P(w){if(--w.usedTimes===0){const N=d.indexOf(w);d[N]=d[d.length-1],d.pop(),p.delete(w.cacheKey),w.destroy()}}function L(w){c.remove(w)}function D(){c.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:C,acquireProgram:T,releaseProgram:P,releaseShaderCache:L,programs:d,dispose:D}}function DL(){let s=new WeakMap;function e(l){return s.has(l)}function t(l){let c=s.get(l);return c===void 0&&(c={},s.set(l,c)),c}function n(l){s.delete(l)}function i(l,c,f){s.get(l)[c]=f}function a(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:a}}function NL(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function rS(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function sS(){const s=[];let e=0;const t=[],n=[],i=[];function a(){e=0,t.length=0,n.length=0,i.length=0}function l(m){let _=0;return m.isInstancedMesh&&(_+=2),m.isSkinnedMesh&&(_+=1),_}function c(m,_,x,M,y,S){let b=s[e];return b===void 0?(b={id:m.id,object:m,geometry:_,material:x,materialVariant:l(m),groupOrder:M,renderOrder:m.renderOrder,z:y,group:S},s[e]=b):(b.id=m.id,b.object=m,b.geometry=_,b.material=x,b.materialVariant=l(m),b.groupOrder=M,b.renderOrder=m.renderOrder,b.z=y,b.group=S),e++,b}function f(m,_,x,M,y,S){const b=c(m,_,x,M,y,S);x.transmission>0?n.push(b):x.transparent===!0?i.push(b):t.push(b)}function d(m,_,x,M,y,S){const b=c(m,_,x,M,y,S);x.transmission>0?n.unshift(b):x.transparent===!0?i.unshift(b):t.unshift(b)}function p(m,_,x){t.length>1&&t.sort(m||NL),n.length>1&&n.sort(_||rS),i.length>1&&i.sort(_||rS),x&&(t.reverse(),n.reverse(),i.reverse())}function g(){for(let m=e,_=s.length;m<_;m++){const x=s[m];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:i,init:a,push:f,unshift:d,finish:g,sort:p}}function IL(){let s=new WeakMap;function e(n,i){const a=s.get(n);let l;return a===void 0?(l=new sS,s.set(n,[l])):i>=a.length?(l=new sS,a.push(l)):l=a[i],l}function t(){s=new WeakMap}return{get:e,dispose:t}}function UL(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new yt};break;case"SpotLight":t={position:new X,direction:new X,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new yt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":t={color:new yt,position:new X,halfWidth:new X,halfHeight:new X};break}return s[e.id]=t,t}}}function FL(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let OL=0;function kL(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function BL(s){const e=new UL,t=FL(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new X);const i=new X,a=new dn,l=new dn;function c(d){let p=0,g=0,m=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let _=0,x=0,M=0,y=0,S=0,b=0,C=0,T=0,P=0,L=0,D=0;d.sort(kL);for(let N=0,F=d.length;N<F;N++){const B=d[N],z=B.color,re=B.intensity,ie=B.distance;let q=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Ua?q=B.shadow.map.texture:q=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)p+=z.r*re,g+=z.g*re,m+=z.b*re;else if(B.isLightProbe){for(let ee=0;ee<9;ee++)n.probe[ee].addScaledVector(B.sh.coefficients[ee],re);D++}else if(B.isDirectionalLight){const ee=e.get(B);if(ee.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const W=B.shadow,Y=t.get(B);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,n.directionalShadow[_]=Y,n.directionalShadowMap[_]=q,n.directionalShadowMatrix[_]=B.shadow.matrix,b++}n.directional[_]=ee,_++}else if(B.isSpotLight){const ee=e.get(B);ee.position.setFromMatrixPosition(B.matrixWorld),ee.color.copy(z).multiplyScalar(re),ee.distance=ie,ee.coneCos=Math.cos(B.angle),ee.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ee.decay=B.decay,n.spot[M]=ee;const W=B.shadow;if(B.map&&(n.spotLightMap[P]=B.map,P++,W.updateMatrices(B),B.castShadow&&L++),n.spotLightMatrix[M]=W.matrix,B.castShadow){const Y=t.get(B);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,n.spotShadow[M]=Y,n.spotShadowMap[M]=q,T++}M++}else if(B.isRectAreaLight){const ee=e.get(B);ee.color.copy(z).multiplyScalar(re),ee.halfWidth.set(B.width*.5,0,0),ee.halfHeight.set(0,B.height*.5,0),n.rectArea[y]=ee,y++}else if(B.isPointLight){const ee=e.get(B);if(ee.color.copy(B.color).multiplyScalar(B.intensity),ee.distance=B.distance,ee.decay=B.decay,B.castShadow){const W=B.shadow,Y=t.get(B);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,Y.shadowCameraNear=W.camera.near,Y.shadowCameraFar=W.camera.far,n.pointShadow[x]=Y,n.pointShadowMap[x]=q,n.pointShadowMatrix[x]=B.shadow.matrix,C++}n.point[x]=ee,x++}else if(B.isHemisphereLight){const ee=e.get(B);ee.skyColor.copy(B.color).multiplyScalar(re),ee.groundColor.copy(B.groundColor).multiplyScalar(re),n.hemi[S]=ee,S++}}y>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=We.LTC_FLOAT_1,n.rectAreaLTC2=We.LTC_FLOAT_2):(n.rectAreaLTC1=We.LTC_HALF_1,n.rectAreaLTC2=We.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=g,n.ambient[2]=m;const w=n.hash;(w.directionalLength!==_||w.pointLength!==x||w.spotLength!==M||w.rectAreaLength!==y||w.hemiLength!==S||w.numDirectionalShadows!==b||w.numPointShadows!==C||w.numSpotShadows!==T||w.numSpotMaps!==P||w.numLightProbes!==D)&&(n.directional.length=_,n.spot.length=M,n.rectArea.length=y,n.point.length=x,n.hemi.length=S,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=T+P-L,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=D,w.directionalLength=_,w.pointLength=x,w.spotLength=M,w.rectAreaLength=y,w.hemiLength=S,w.numDirectionalShadows=b,w.numPointShadows=C,w.numSpotShadows=T,w.numSpotMaps=P,w.numLightProbes=D,n.version=OL++)}function f(d,p){let g=0,m=0,_=0,x=0,M=0;const y=p.matrixWorldInverse;for(let S=0,b=d.length;S<b;S++){const C=d[S];if(C.isDirectionalLight){const T=n.directional[g];T.direction.setFromMatrixPosition(C.matrixWorld),i.setFromMatrixPosition(C.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(y),g++}else if(C.isSpotLight){const T=n.spot[_];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(y),T.direction.setFromMatrixPosition(C.matrixWorld),i.setFromMatrixPosition(C.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(y),_++}else if(C.isRectAreaLight){const T=n.rectArea[x];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(y),l.identity(),a.copy(C.matrixWorld),a.premultiply(y),l.extractRotation(a),T.halfWidth.set(C.width*.5,0,0),T.halfHeight.set(0,C.height*.5,0),T.halfWidth.applyMatrix4(l),T.halfHeight.applyMatrix4(l),x++}else if(C.isPointLight){const T=n.point[m];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(y),m++}else if(C.isHemisphereLight){const T=n.hemi[M];T.direction.setFromMatrixPosition(C.matrixWorld),T.direction.transformDirection(y),M++}}}return{setup:c,setupView:f,state:n}}function oS(s){const e=new BL(s),t=[],n=[],i=[];function a(m){g.camera=m,t.length=0,n.length=0,i.length=0}function l(m){t.push(m)}function c(m){n.push(m)}function f(m){i.push(m)}function d(){e.setup(t)}function p(m){e.setupView(t,m)}const g={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:g,setupLights:d,setupLightsView:p,pushLight:l,pushShadow:c,pushLightProbeGrid:f}}function zL(s){let e=new WeakMap;function t(i,a=0){const l=e.get(i);let c;return l===void 0?(c=new oS(s),e.set(i,[c])):a>=l.length?(c=new oS(s),l.push(c)):c=l[a],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const VL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,GL=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],WL=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],aS=new dn,Ju=new X,f0=new X;function XL(s,e,t){let n=new b_;const i=new ft,a=new ft,l=new ln,c=new Wb,f=new Xb,d={},p=t.maxTextureSize,g={[Go]:ir,[ir]:Go,[ms]:ms},m=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:VL,fragmentShader:HL}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const x=new Fn;x.setAttribute("position",new ts(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Vi(x,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qd;let S=this.type;this.render=function(L,D,w){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===mA&&(xt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=qd);const N=s.getRenderTarget(),F=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),z=s.state;z.setBlending(ws),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const re=S!==this.type;re&&D.traverse(function(ie){ie.material&&(Array.isArray(ie.material)?ie.material.forEach(q=>q.needsUpdate=!0):ie.material.needsUpdate=!0)});for(let ie=0,q=L.length;ie<q;ie++){const ee=L[ie],W=ee.shadow;if(W===void 0){xt("WebGLShadowMap:",ee,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const Y=W.getFrameExtents();i.multiply(Y),a.copy(W.mapSize),(i.x>p||i.y>p)&&(i.x>p&&(a.x=Math.floor(p/Y.x),i.x=a.x*Y.x,W.mapSize.x=a.x),i.y>p&&(a.y=Math.floor(p/Y.y),i.y=a.y*Y.y,W.mapSize.y=a.y));const te=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=te,W.map===null||re===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===ac){if(ee.isPointLight){xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new rr(i.x,i.y,{format:Ua,type:Er,minFilter:Ri,magFilter:Ri,generateMipmaps:!1}),W.map.texture.name=ee.name+".shadowMap",W.map.depthTexture=new nu(i.x,i.y,xs),W.map.depthTexture.name=ee.name+".shadowMapDepth",W.map.depthTexture.format=Js,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=hi,W.map.depthTexture.magFilter=hi}else ee.isPointLight?(W.map=new gE(i.x),W.map.depthTexture=new Ob(i.x,bs)):(W.map=new rr(i.x,i.y),W.map.depthTexture=new nu(i.x,i.y,bs)),W.map.depthTexture.name=ee.name+".shadowMap",W.map.depthTexture.format=Js,this.type===qd?(W.map.depthTexture.compareFunction=te?M_:S_,W.map.depthTexture.minFilter=Ri,W.map.depthTexture.magFilter=Ri):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=hi,W.map.depthTexture.magFilter=hi);W.camera.updateProjectionMatrix()}const U=W.map.isWebGLCubeRenderTarget?6:1;for(let k=0;k<U;k++){if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,k),s.clear();else{k===0&&(s.setRenderTarget(W.map),s.clear());const J=W.getViewport(k);l.set(a.x*J.x,a.y*J.y,a.x*J.z,a.y*J.w),z.viewport(l)}if(ee.isPointLight){const J=W.camera,ze=W.matrix,Ve=ee.distance||J.far;Ve!==J.far&&(J.far=Ve,J.updateProjectionMatrix()),Ju.setFromMatrixPosition(ee.matrixWorld),J.position.copy(Ju),f0.copy(J.position),f0.add(GL[k]),J.up.copy(WL[k]),J.lookAt(f0),J.updateMatrixWorld(),ze.makeTranslation(-Ju.x,-Ju.y,-Ju.z),aS.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),W._frustum.setFromProjectionMatrix(aS,J.coordinateSystem,J.reversedDepth)}else W.updateMatrices(ee);n=W.getFrustum(),T(D,w,W.camera,ee,this.type)}W.isPointLightShadow!==!0&&this.type===ac&&b(W,w),W.needsUpdate=!1}S=this.type,y.needsUpdate=!1,s.setRenderTarget(N,F,B)};function b(L,D){const w=e.update(M);m.defines.VSM_SAMPLES!==L.blurSamples&&(m.defines.VSM_SAMPLES=L.blurSamples,_.defines.VSM_SAMPLES=L.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new rr(i.x,i.y,{format:Ua,type:Er})),m.uniforms.shadow_pass.value=L.map.depthTexture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(D,null,w,m,M,null),_.uniforms.shadow_pass.value=L.mapPass.texture,_.uniforms.resolution.value=L.mapSize,_.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(D,null,w,_,M,null)}function C(L,D,w,N){let F=null;const B=w.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(B!==void 0)F=B;else if(F=w.isPointLight===!0?f:c,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const z=F.uuid,re=D.uuid;let ie=d[z];ie===void 0&&(ie={},d[z]=ie);let q=ie[re];q===void 0&&(q=F.clone(),ie[re]=q,D.addEventListener("dispose",P)),F=q}if(F.visible=D.visible,F.wireframe=D.wireframe,N===ac?F.side=D.shadowSide!==null?D.shadowSide:D.side:F.side=D.shadowSide!==null?D.shadowSide:g[D.side],F.alphaMap=D.alphaMap,F.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,F.map=D.map,F.clipShadows=D.clipShadows,F.clippingPlanes=D.clippingPlanes,F.clipIntersection=D.clipIntersection,F.displacementMap=D.displacementMap,F.displacementScale=D.displacementScale,F.displacementBias=D.displacementBias,F.wireframeLinewidth=D.wireframeLinewidth,F.linewidth=D.linewidth,w.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const z=s.properties.get(F);z.light=w}return F}function T(L,D,w,N,F){if(L.visible===!1)return;if(L.layers.test(D.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&F===ac)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,L.matrixWorld);const re=e.update(L),ie=L.material;if(Array.isArray(ie)){const q=re.groups;for(let ee=0,W=q.length;ee<W;ee++){const Y=q[ee],te=ie[Y.materialIndex];if(te&&te.visible){const U=C(L,te,N,F);L.onBeforeShadow(s,L,D,w,re,U,Y),s.renderBufferDirect(w,null,re,U,L,Y),L.onAfterShadow(s,L,D,w,re,U,Y)}}}else if(ie.visible){const q=C(L,ie,N,F);L.onBeforeShadow(s,L,D,w,re,q,null),s.renderBufferDirect(w,null,re,q,L,null),L.onAfterShadow(s,L,D,w,re,q,null)}}const z=L.children;for(let re=0,ie=z.length;re<ie;re++)T(z[re],D,w,N,F)}function P(L){L.target.removeEventListener("dispose",P);for(const w in d){const N=d[w],F=L.target.uuid;F in N&&(N[F].dispose(),delete N[F])}}}function YL(s,e){function t(){let H=!1;const Te=new ln;let _e=null;const Ue=new ln(0,0,0,0);return{setMask:function(Fe){_e!==Fe&&!H&&(s.colorMask(Fe,Fe,Fe,Fe),_e=Fe)},setLocked:function(Fe){H=Fe},setClear:function(Fe,Ee,Ae,we,at){at===!0&&(Fe*=we,Ee*=we,Ae*=we),Te.set(Fe,Ee,Ae,we),Ue.equals(Te)===!1&&(s.clearColor(Fe,Ee,Ae,we),Ue.copy(Te))},reset:function(){H=!1,_e=null,Ue.set(-1,0,0,0)}}}function n(){let H=!1,Te=!1,_e=null,Ue=null,Fe=null;return{setReversed:function(Ee){if(Te!==Ee){const Ae=e.get("EXT_clip_control");Ee?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),Te=Ee;const we=Fe;Fe=null,this.setClear(we)}},getReversed:function(){return Te},setTest:function(Ee){Ee?me(s.DEPTH_TEST):Ie(s.DEPTH_TEST)},setMask:function(Ee){_e!==Ee&&!H&&(s.depthMask(Ee),_e=Ee)},setFunc:function(Ee){if(Te&&(Ee=$A[Ee]),Ue!==Ee){switch(Ee){case G0:s.depthFunc(s.NEVER);break;case W0:s.depthFunc(s.ALWAYS);break;case X0:s.depthFunc(s.LESS);break;case eu:s.depthFunc(s.LEQUAL);break;case Y0:s.depthFunc(s.EQUAL);break;case q0:s.depthFunc(s.GEQUAL);break;case $0:s.depthFunc(s.GREATER);break;case j0:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ue=Ee}},setLocked:function(Ee){H=Ee},setClear:function(Ee){Fe!==Ee&&(Fe=Ee,Te&&(Ee=1-Ee),s.clearDepth(Ee))},reset:function(){H=!1,_e=null,Ue=null,Fe=null,Te=!1}}}function i(){let H=!1,Te=null,_e=null,Ue=null,Fe=null,Ee=null,Ae=null,we=null,at=null;return{setTest:function(Ce){H||(Ce?me(s.STENCIL_TEST):Ie(s.STENCIL_TEST))},setMask:function(Ce){Te!==Ce&&!H&&(s.stencilMask(Ce),Te=Ce)},setFunc:function(Ce,lt,Je){(_e!==Ce||Ue!==lt||Fe!==Je)&&(s.stencilFunc(Ce,lt,Je),_e=Ce,Ue=lt,Fe=Je)},setOp:function(Ce,lt,Je){(Ee!==Ce||Ae!==lt||we!==Je)&&(s.stencilOp(Ce,lt,Je),Ee=Ce,Ae=lt,we=Je)},setLocked:function(Ce){H=Ce},setClear:function(Ce){at!==Ce&&(s.clearStencil(Ce),at=Ce)},reset:function(){H=!1,Te=null,_e=null,Ue=null,Fe=null,Ee=null,Ae=null,we=null,at=null}}}const a=new t,l=new n,c=new i,f=new WeakMap,d=new WeakMap;let p={},g={},m={},_=new WeakMap,x=[],M=null,y=!1,S=null,b=null,C=null,T=null,P=null,L=null,D=null,w=new yt(0,0,0),N=0,F=!1,B=null,z=null,re=null,ie=null,q=null;const ee=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Y=0;const te=s.getParameter(s.VERSION);te.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(te)[1]),W=Y>=1):te.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),W=Y>=2);let U=null,k={};const J=s.getParameter(s.SCISSOR_BOX),ze=s.getParameter(s.VIEWPORT),Ve=new ln().fromArray(J),Be=new ln().fromArray(ze);function se(H,Te,_e,Ue){const Fe=new Uint8Array(4),Ee=s.createTexture();s.bindTexture(H,Ee),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ae=0;Ae<_e;Ae++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Te,0,s.RGBA,1,1,Ue,0,s.RGBA,s.UNSIGNED_BYTE,Fe):s.texImage2D(Te+Ae,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Fe);return Ee}const ve={};ve[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),ve[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ve[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),me(s.DEPTH_TEST),l.setFunc(eu),ce(!1),Nt(Jy),me(s.CULL_FACE),mt(ws);function me(H){p[H]!==!0&&(s.enable(H),p[H]=!0)}function Ie(H){p[H]!==!1&&(s.disable(H),p[H]=!1)}function Ze(H,Te){return m[H]!==Te?(s.bindFramebuffer(H,Te),m[H]=Te,H===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=Te),H===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=Te),!0):!1}function qe(H,Te){let _e=x,Ue=!1;if(H){_e=_.get(Te),_e===void 0&&(_e=[],_.set(Te,_e));const Fe=H.textures;if(_e.length!==Fe.length||_e[0]!==s.COLOR_ATTACHMENT0){for(let Ee=0,Ae=Fe.length;Ee<Ae;Ee++)_e[Ee]=s.COLOR_ATTACHMENT0+Ee;_e.length=Fe.length,Ue=!0}}else _e[0]!==s.BACK&&(_e[0]=s.BACK,Ue=!0);Ue&&s.drawBuffers(_e)}function Ct(H){return M!==H?(s.useProgram(H),M=H,!0):!1}const Xe={[_a]:s.FUNC_ADD,[_A]:s.FUNC_SUBTRACT,[vA]:s.FUNC_REVERSE_SUBTRACT};Xe[xA]=s.MIN,Xe[yA]=s.MAX;const dt={[SA]:s.ZERO,[MA]:s.ONE,[EA]:s.SRC_COLOR,[V0]:s.SRC_ALPHA,[RA]:s.SRC_ALPHA_SATURATE,[bA]:s.DST_COLOR,[TA]:s.DST_ALPHA,[wA]:s.ONE_MINUS_SRC_COLOR,[H0]:s.ONE_MINUS_SRC_ALPHA,[CA]:s.ONE_MINUS_DST_COLOR,[AA]:s.ONE_MINUS_DST_ALPHA,[PA]:s.CONSTANT_COLOR,[LA]:s.ONE_MINUS_CONSTANT_COLOR,[DA]:s.CONSTANT_ALPHA,[NA]:s.ONE_MINUS_CONSTANT_ALPHA};function mt(H,Te,_e,Ue,Fe,Ee,Ae,we,at,Ce){if(H===ws){y===!0&&(Ie(s.BLEND),y=!1);return}if(y===!1&&(me(s.BLEND),y=!0),H!==gA){if(H!==S||Ce!==F){if((b!==_a||P!==_a)&&(s.blendEquation(s.FUNC_ADD),b=_a,P=_a),Ce)switch(H){case Xl:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ws:s.blendFunc(s.ONE,s.ONE);break;case e1:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case t1:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Yt("WebGLState: Invalid blending: ",H);break}else switch(H){case Xl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case e1:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case t1:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",H);break}C=null,T=null,L=null,D=null,w.set(0,0,0),N=0,S=H,F=Ce}return}Fe=Fe||Te,Ee=Ee||_e,Ae=Ae||Ue,(Te!==b||Fe!==P)&&(s.blendEquationSeparate(Xe[Te],Xe[Fe]),b=Te,P=Fe),(_e!==C||Ue!==T||Ee!==L||Ae!==D)&&(s.blendFuncSeparate(dt[_e],dt[Ue],dt[Ee],dt[Ae]),C=_e,T=Ue,L=Ee,D=Ae),(we.equals(w)===!1||at!==N)&&(s.blendColor(we.r,we.g,we.b,at),w.copy(we),N=at),S=H,F=!1}function ht(H,Te){H.side===ms?Ie(s.CULL_FACE):me(s.CULL_FACE);let _e=H.side===ir;Te&&(_e=!_e),ce(_e),H.blending===Xl&&H.transparent===!1?mt(ws):mt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),l.setFunc(H.depthFunc),l.setTest(H.depthTest),l.setMask(H.depthWrite),a.setMask(H.colorWrite);const Ue=H.stencilWrite;c.setTest(Ue),Ue&&(c.setMask(H.stencilWriteMask),c.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),c.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ht(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?me(s.SAMPLE_ALPHA_TO_COVERAGE):Ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function ce(H){B!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),B=H)}function Nt(H){H!==hA?(me(s.CULL_FACE),H!==z&&(H===Jy?s.cullFace(s.BACK):H===pA?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ie(s.CULL_FACE),z=H}function Vt(H){H!==re&&(W&&s.lineWidth(H),re=H)}function Ht(H,Te,_e){H?(me(s.POLYGON_OFFSET_FILL),(ie!==Te||q!==_e)&&(ie=Te,q=_e,l.getReversed()&&(Te=-Te),s.polygonOffset(Te,_e))):Ie(s.POLYGON_OFFSET_FILL)}function it(H){H?me(s.SCISSOR_TEST):Ie(s.SCISSOR_TEST)}function Ft(H){H===void 0&&(H=s.TEXTURE0+ee-1),U!==H&&(s.activeTexture(H),U=H)}function j(H,Te,_e){_e===void 0&&(U===null?_e=s.TEXTURE0+ee-1:_e=U);let Ue=k[_e];Ue===void 0&&(Ue={type:void 0,texture:void 0},k[_e]=Ue),(Ue.type!==H||Ue.texture!==Te)&&(U!==_e&&(s.activeTexture(_e),U=_e),s.bindTexture(H,Te||ve[H]),Ue.type=H,Ue.texture=Te)}function jt(){const H=k[U];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function pt(){try{s.compressedTexImage2D(...arguments)}catch(H){Yt("WebGLState:",H)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(H){Yt("WebGLState:",H)}}function A(){try{s.texSubImage2D(...arguments)}catch(H){Yt("WebGLState:",H)}}function Z(){try{s.texSubImage3D(...arguments)}catch(H){Yt("WebGLState:",H)}}function oe(){try{s.compressedTexSubImage2D(...arguments)}catch(H){Yt("WebGLState:",H)}}function he(){try{s.compressedTexSubImage3D(...arguments)}catch(H){Yt("WebGLState:",H)}}function De(){try{s.texStorage2D(...arguments)}catch(H){Yt("WebGLState:",H)}}function be(){try{s.texStorage3D(...arguments)}catch(H){Yt("WebGLState:",H)}}function ge(){try{s.texImage2D(...arguments)}catch(H){Yt("WebGLState:",H)}}function ne(){try{s.texImage3D(...arguments)}catch(H){Yt("WebGLState:",H)}}function xe(H){return g[H]!==void 0?g[H]:s.getParameter(H)}function Re(H,Te){g[H]!==Te&&(s.pixelStorei(H,Te),g[H]=Te)}function ye(H){Ve.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),Ve.copy(H))}function Se(H){Be.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),Be.copy(H))}function Me(H,Te){let _e=d.get(Te);_e===void 0&&(_e=new WeakMap,d.set(Te,_e));let Ue=_e.get(H);Ue===void 0&&(Ue=s.getUniformBlockIndex(Te,H.name),_e.set(H,Ue))}function Ge(H,Te){const Ue=d.get(Te).get(H);f.get(Te)!==Ue&&(s.uniformBlockBinding(Te,Ue,H.__bindingPointIndex),f.set(Te,Ue))}function $e(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),l.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),p={},g={},U=null,k={},m={},_=new WeakMap,x=[],M=null,y=!1,S=null,b=null,C=null,T=null,P=null,L=null,D=null,w=new yt(0,0,0),N=0,F=!1,B=null,z=null,re=null,ie=null,q=null,Ve.set(0,0,s.canvas.width,s.canvas.height),Be.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:me,disable:Ie,bindFramebuffer:Ze,drawBuffers:qe,useProgram:Ct,setBlending:mt,setMaterial:ht,setFlipSided:ce,setCullFace:Nt,setLineWidth:Vt,setPolygonOffset:Ht,setScissorTest:it,activeTexture:Ft,bindTexture:j,unbindTexture:jt,compressedTexImage2D:pt,compressedTexImage3D:O,texImage2D:ge,texImage3D:ne,pixelStorei:Re,getParameter:xe,updateUBOMapping:Me,uniformBlockBinding:Ge,texStorage2D:De,texStorage3D:be,texSubImage2D:A,texSubImage3D:Z,compressedTexSubImage2D:oe,compressedTexSubImage3D:he,scissor:ye,viewport:Se,reset:$e}}function qL(s,e,t,n,i,a,l){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ft,p=new WeakMap,g=new Set;let m;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(O,A){return x?new OffscreenCanvas(O,A):kc("canvas")}function y(O,A,Z){let oe=1;const he=pt(O);if((he.width>Z||he.height>Z)&&(oe=Z/Math.max(he.width,he.height)),oe<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const De=Math.floor(oe*he.width),be=Math.floor(oe*he.height);m===void 0&&(m=M(De,be));const ge=A?M(De,be):m;return ge.width=De,ge.height=be,ge.getContext("2d").drawImage(O,0,0,De,be),xt("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+De+"x"+be+")."),ge}else return"data"in O&&xt("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),O;return O}function S(O){return O.generateMipmaps}function b(O){s.generateMipmap(O)}function C(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(O,A,Z,oe,he,De=!1){if(O!==null){if(s[O]!==void 0)return s[O];xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let be;oe&&(be=e.get("EXT_texture_norm16"),be||xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=A;if(A===s.RED&&(Z===s.FLOAT&&(ge=s.R32F),Z===s.HALF_FLOAT&&(ge=s.R16F),Z===s.UNSIGNED_BYTE&&(ge=s.R8),Z===s.UNSIGNED_SHORT&&be&&(ge=be.R16_EXT),Z===s.SHORT&&be&&(ge=be.R16_SNORM_EXT)),A===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ge=s.R8UI),Z===s.UNSIGNED_SHORT&&(ge=s.R16UI),Z===s.UNSIGNED_INT&&(ge=s.R32UI),Z===s.BYTE&&(ge=s.R8I),Z===s.SHORT&&(ge=s.R16I),Z===s.INT&&(ge=s.R32I)),A===s.RG&&(Z===s.FLOAT&&(ge=s.RG32F),Z===s.HALF_FLOAT&&(ge=s.RG16F),Z===s.UNSIGNED_BYTE&&(ge=s.RG8),Z===s.UNSIGNED_SHORT&&be&&(ge=be.RG16_EXT),Z===s.SHORT&&be&&(ge=be.RG16_SNORM_EXT)),A===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ge=s.RG8UI),Z===s.UNSIGNED_SHORT&&(ge=s.RG16UI),Z===s.UNSIGNED_INT&&(ge=s.RG32UI),Z===s.BYTE&&(ge=s.RG8I),Z===s.SHORT&&(ge=s.RG16I),Z===s.INT&&(ge=s.RG32I)),A===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ge=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(ge=s.RGB16UI),Z===s.UNSIGNED_INT&&(ge=s.RGB32UI),Z===s.BYTE&&(ge=s.RGB8I),Z===s.SHORT&&(ge=s.RGB16I),Z===s.INT&&(ge=s.RGB32I)),A===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ge=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(ge=s.RGBA16UI),Z===s.UNSIGNED_INT&&(ge=s.RGBA32UI),Z===s.BYTE&&(ge=s.RGBA8I),Z===s.SHORT&&(ge=s.RGBA16I),Z===s.INT&&(ge=s.RGBA32I)),A===s.RGB&&(Z===s.UNSIGNED_SHORT&&be&&(ge=be.RGB16_EXT),Z===s.SHORT&&be&&(ge=be.RGB16_SNORM_EXT),Z===s.UNSIGNED_INT_5_9_9_9_REV&&(ge=s.RGB9_E5),Z===s.UNSIGNED_INT_10F_11F_11F_REV&&(ge=s.R11F_G11F_B10F)),A===s.RGBA){const ne=De?_h:Gt.getTransfer(he);Z===s.FLOAT&&(ge=s.RGBA32F),Z===s.HALF_FLOAT&&(ge=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(ge=ne===Zt?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT&&be&&(ge=be.RGBA16_EXT),Z===s.SHORT&&be&&(ge=be.RGBA16_SNORM_EXT),Z===s.UNSIGNED_SHORT_4_4_4_4&&(ge=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(ge=s.RGB5_A1)}return(ge===s.R16F||ge===s.R32F||ge===s.RG16F||ge===s.RG32F||ge===s.RGBA16F||ge===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function P(O,A){let Z;return O?A===null||A===bs||A===Fc?Z=s.DEPTH24_STENCIL8:A===xs?Z=s.DEPTH32F_STENCIL8:A===Uc&&(Z=s.DEPTH24_STENCIL8,xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===bs||A===Fc?Z=s.DEPTH_COMPONENT24:A===xs?Z=s.DEPTH_COMPONENT32F:A===Uc&&(Z=s.DEPTH_COMPONENT16),Z}function L(O,A){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==hi&&O.minFilter!==Ri?Math.log2(Math.max(A.width,A.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?A.mipmaps.length:1}function D(O){const A=O.target;A.removeEventListener("dispose",D),N(A),A.isVideoTexture&&p.delete(A),A.isHTMLTexture&&g.delete(A)}function w(O){const A=O.target;A.removeEventListener("dispose",w),B(A)}function N(O){const A=n.get(O);if(A.__webglInit===void 0)return;const Z=O.source,oe=_.get(Z);if(oe){const he=oe[A.__cacheKey];he.usedTimes--,he.usedTimes===0&&F(O),Object.keys(oe).length===0&&_.delete(Z)}n.remove(O)}function F(O){const A=n.get(O);s.deleteTexture(A.__webglTexture);const Z=O.source,oe=_.get(Z);delete oe[A.__cacheKey],l.memory.textures--}function B(O){const A=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(A.__webglFramebuffer[oe]))for(let he=0;he<A.__webglFramebuffer[oe].length;he++)s.deleteFramebuffer(A.__webglFramebuffer[oe][he]);else s.deleteFramebuffer(A.__webglFramebuffer[oe]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[oe])}else{if(Array.isArray(A.__webglFramebuffer))for(let oe=0;oe<A.__webglFramebuffer.length;oe++)s.deleteFramebuffer(A.__webglFramebuffer[oe]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let oe=0;oe<A.__webglColorRenderbuffer.length;oe++)A.__webglColorRenderbuffer[oe]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[oe]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Z=O.textures;for(let oe=0,he=Z.length;oe<he;oe++){const De=n.get(Z[oe]);De.__webglTexture&&(s.deleteTexture(De.__webglTexture),l.memory.textures--),n.remove(Z[oe])}n.remove(O)}let z=0;function re(){z=0}function ie(){return z}function q(O){z=O}function ee(){const O=z;return O>=i.maxTextures&&xt("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+i.maxTextures),z+=1,O}function W(O){const A=[];return A.push(O.wrapS),A.push(O.wrapT),A.push(O.wrapR||0),A.push(O.magFilter),A.push(O.minFilter),A.push(O.anisotropy),A.push(O.internalFormat),A.push(O.format),A.push(O.type),A.push(O.generateMipmaps),A.push(O.premultiplyAlpha),A.push(O.flipY),A.push(O.unpackAlignment),A.push(O.colorSpace),A.join()}function Y(O,A){const Z=n.get(O);if(O.isVideoTexture&&j(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&Z.__version!==O.version){const oe=O.image;if(oe===null)xt("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)xt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(Z,O,A);return}}else O.isExternalTexture&&(Z.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+A)}function te(O,A){const Z=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Z.__version!==O.version){Ie(Z,O,A);return}else O.isExternalTexture&&(Z.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+A)}function U(O,A){const Z=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Z.__version!==O.version){Ie(Z,O,A);return}t.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+A)}function k(O,A){const Z=n.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&Z.__version!==O.version){Ze(Z,O,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+A)}const J={[K0]:s.REPEAT,[qs]:s.CLAMP_TO_EDGE,[Z0]:s.MIRRORED_REPEAT},ze={[hi]:s.NEAREST,[FA]:s.NEAREST_MIPMAP_NEAREST,[rd]:s.NEAREST_MIPMAP_LINEAR,[Ri]:s.LINEAR,[Cm]:s.LINEAR_MIPMAP_NEAREST,[Sa]:s.LINEAR_MIPMAP_LINEAR},Ve={[BA]:s.NEVER,[WA]:s.ALWAYS,[zA]:s.LESS,[S_]:s.LEQUAL,[VA]:s.EQUAL,[M_]:s.GEQUAL,[HA]:s.GREATER,[GA]:s.NOTEQUAL};function Be(O,A){if(A.type===xs&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Ri||A.magFilter===Cm||A.magFilter===rd||A.magFilter===Sa||A.minFilter===Ri||A.minFilter===Cm||A.minFilter===rd||A.minFilter===Sa)&&xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,J[A.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,J[A.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,J[A.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,ze[A.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,ze[A.minFilter]),A.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,Ve[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===hi||A.minFilter!==rd&&A.minFilter!==Sa||A.type===xs&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(O,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function se(O,A){let Z=!1;O.__webglInit===void 0&&(O.__webglInit=!0,A.addEventListener("dispose",D));const oe=A.source;let he=_.get(oe);he===void 0&&(he={},_.set(oe,he));const De=W(A);if(De!==O.__cacheKey){he[De]===void 0&&(he[De]={texture:s.createTexture(),usedTimes:0},l.memory.textures++,Z=!0),he[De].usedTimes++;const be=he[O.__cacheKey];be!==void 0&&(he[O.__cacheKey].usedTimes--,be.usedTimes===0&&F(A)),O.__cacheKey=De,O.__webglTexture=he[De].texture}return Z}function ve(O,A,Z){return Math.floor(Math.floor(O/Z)/A)}function me(O,A,Z,oe){const De=O.updateRanges;if(De.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,Z,oe,A.data);else{De.sort((Re,ye)=>Re.start-ye.start);let be=0;for(let Re=1;Re<De.length;Re++){const ye=De[be],Se=De[Re],Me=ye.start+ye.count,Ge=ve(Se.start,A.width,4),$e=ve(ye.start,A.width,4);Se.start<=Me+1&&Ge===$e&&ve(Se.start+Se.count-1,A.width,4)===Ge?ye.count=Math.max(ye.count,Se.start+Se.count-ye.start):(++be,De[be]=Se)}De.length=be+1;const ge=t.getParameter(s.UNPACK_ROW_LENGTH),ne=t.getParameter(s.UNPACK_SKIP_PIXELS),xe=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let Re=0,ye=De.length;Re<ye;Re++){const Se=De[Re],Me=Math.floor(Se.start/4),Ge=Math.ceil(Se.count/4),$e=Me%A.width,H=Math.floor(Me/A.width),Te=Ge,_e=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(s.UNPACK_SKIP_ROWS,H),t.texSubImage2D(s.TEXTURE_2D,0,$e,H,Te,_e,Z,oe,A.data)}O.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ge),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(s.UNPACK_SKIP_ROWS,xe)}}function Ie(O,A,Z){let oe=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(oe=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(oe=s.TEXTURE_3D);const he=se(O,A),De=A.source;t.bindTexture(oe,O.__webglTexture,s.TEXTURE0+Z);const be=n.get(De);if(De.version!==be.__version||he===!0){if(t.activeTexture(s.TEXTURE0+Z),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const _e=Gt.getPrimaries(Gt.workingColorSpace),Ue=A.colorSpace===Ro?null:Gt.getPrimaries(A.colorSpace),Fe=A.colorSpace===Ro||_e===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment);let ne=y(A.image,!1,i.maxTextureSize);ne=jt(A,ne);const xe=a.convert(A.format,A.colorSpace),Re=a.convert(A.type);let ye=T(A.internalFormat,xe,Re,A.normalized,A.colorSpace,A.isVideoTexture);Be(oe,A);let Se;const Me=A.mipmaps,Ge=A.isVideoTexture!==!0,$e=be.__version===void 0||he===!0,H=De.dataReady,Te=L(A,ne);if(A.isDepthTexture)ye=P(A.format===Ma,A.type),$e&&(Ge?t.texStorage2D(s.TEXTURE_2D,1,ye,ne.width,ne.height):t.texImage2D(s.TEXTURE_2D,0,ye,ne.width,ne.height,0,xe,Re,null));else if(A.isDataTexture)if(Me.length>0){Ge&&$e&&t.texStorage2D(s.TEXTURE_2D,Te,ye,Me[0].width,Me[0].height);for(let _e=0,Ue=Me.length;_e<Ue;_e++)Se=Me[_e],Ge?H&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,Se.width,Se.height,xe,Re,Se.data):t.texImage2D(s.TEXTURE_2D,_e,ye,Se.width,Se.height,0,xe,Re,Se.data);A.generateMipmaps=!1}else Ge?($e&&t.texStorage2D(s.TEXTURE_2D,Te,ye,ne.width,ne.height),H&&me(A,ne,xe,Re)):t.texImage2D(s.TEXTURE_2D,0,ye,ne.width,ne.height,0,xe,Re,ne.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ge&&$e&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,ye,Me[0].width,Me[0].height,ne.depth);for(let _e=0,Ue=Me.length;_e<Ue;_e++)if(Se=Me[_e],A.format!==es)if(xe!==null)if(Ge){if(H)if(A.layerUpdates.size>0){const Fe=k1(Se.width,Se.height,A.format,A.type);for(const Ee of A.layerUpdates){const Ae=Se.data.subarray(Ee*Fe/Se.data.BYTES_PER_ELEMENT,(Ee+1)*Fe/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,Ee,Se.width,Se.height,1,xe,Ae)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,Se.width,Se.height,ne.depth,xe,Se.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,_e,ye,Se.width,Se.height,ne.depth,0,Se.data,0,0);else xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?H&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,Se.width,Se.height,ne.depth,xe,Re,Se.data):t.texImage3D(s.TEXTURE_2D_ARRAY,_e,ye,Se.width,Se.height,ne.depth,0,xe,Re,Se.data)}else{Ge&&$e&&t.texStorage2D(s.TEXTURE_2D,Te,ye,Me[0].width,Me[0].height);for(let _e=0,Ue=Me.length;_e<Ue;_e++)Se=Me[_e],A.format!==es?xe!==null?Ge?H&&t.compressedTexSubImage2D(s.TEXTURE_2D,_e,0,0,Se.width,Se.height,xe,Se.data):t.compressedTexImage2D(s.TEXTURE_2D,_e,ye,Se.width,Se.height,0,Se.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?H&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,Se.width,Se.height,xe,Re,Se.data):t.texImage2D(s.TEXTURE_2D,_e,ye,Se.width,Se.height,0,xe,Re,Se.data)}else if(A.isDataArrayTexture)if(Ge){if($e&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,ye,ne.width,ne.height,ne.depth),H)if(A.layerUpdates.size>0){const _e=k1(ne.width,ne.height,A.format,A.type);for(const Ue of A.layerUpdates){const Fe=ne.data.subarray(Ue*_e/ne.data.BYTES_PER_ELEMENT,(Ue+1)*_e/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ue,ne.width,ne.height,1,xe,Re,Fe)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,xe,Re,ne.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ye,ne.width,ne.height,ne.depth,0,xe,Re,ne.data);else if(A.isData3DTexture)Ge?($e&&t.texStorage3D(s.TEXTURE_3D,Te,ye,ne.width,ne.height,ne.depth),H&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,xe,Re,ne.data)):t.texImage3D(s.TEXTURE_3D,0,ye,ne.width,ne.height,ne.depth,0,xe,Re,ne.data);else if(A.isFramebufferTexture){if($e)if(Ge)t.texStorage2D(s.TEXTURE_2D,Te,ye,ne.width,ne.height);else{let _e=ne.width,Ue=ne.height;for(let Fe=0;Fe<Te;Fe++)t.texImage2D(s.TEXTURE_2D,Fe,ye,_e,Ue,0,xe,Re,null),_e>>=1,Ue>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in s){const _e=s.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),ne.parentNode!==_e){_e.appendChild(ne),g.add(A),_e.onpaint=Ue=>{const Fe=Ue.changedElements;for(const Ee of g)Fe.includes(Ee.image)&&(Ee.needsUpdate=!0)},_e.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ne);else{const Fe=s.RGBA,Ee=s.RGBA,Ae=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Fe,Ee,Ae,ne)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Me.length>0){if(Ge&&$e){const _e=pt(Me[0]);t.texStorage2D(s.TEXTURE_2D,Te,ye,_e.width,_e.height)}for(let _e=0,Ue=Me.length;_e<Ue;_e++)Se=Me[_e],Ge?H&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,xe,Re,Se):t.texImage2D(s.TEXTURE_2D,_e,ye,xe,Re,Se);A.generateMipmaps=!1}else if(Ge){if($e){const _e=pt(ne);t.texStorage2D(s.TEXTURE_2D,Te,ye,_e.width,_e.height)}H&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,xe,Re,ne)}else t.texImage2D(s.TEXTURE_2D,0,ye,xe,Re,ne);S(A)&&b(oe),be.__version=De.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function Ze(O,A,Z){if(A.image.length!==6)return;const oe=se(O,A),he=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+Z);const De=n.get(he);if(he.version!==De.__version||oe===!0){t.activeTexture(s.TEXTURE0+Z);const be=Gt.getPrimaries(Gt.workingColorSpace),ge=A.colorSpace===Ro?null:Gt.getPrimaries(A.colorSpace),ne=A.colorSpace===Ro||be===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const xe=A.isCompressedTexture||A.image[0].isCompressedTexture,Re=A.image[0]&&A.image[0].isDataTexture,ye=[];for(let Ee=0;Ee<6;Ee++)!xe&&!Re?ye[Ee]=y(A.image[Ee],!0,i.maxCubemapSize):ye[Ee]=Re?A.image[Ee].image:A.image[Ee],ye[Ee]=jt(A,ye[Ee]);const Se=ye[0],Me=a.convert(A.format,A.colorSpace),Ge=a.convert(A.type),$e=T(A.internalFormat,Me,Ge,A.normalized,A.colorSpace),H=A.isVideoTexture!==!0,Te=De.__version===void 0||oe===!0,_e=he.dataReady;let Ue=L(A,Se);Be(s.TEXTURE_CUBE_MAP,A);let Fe;if(xe){H&&Te&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,$e,Se.width,Se.height);for(let Ee=0;Ee<6;Ee++){Fe=ye[Ee].mipmaps;for(let Ae=0;Ae<Fe.length;Ae++){const we=Fe[Ae];A.format!==es?Me!==null?H?_e&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ae,0,0,we.width,we.height,Me,we.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ae,$e,we.width,we.height,0,we.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ae,0,0,we.width,we.height,Me,Ge,we.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ae,$e,we.width,we.height,0,Me,Ge,we.data)}}}else{if(Fe=A.mipmaps,H&&Te){Fe.length>0&&Ue++;const Ee=pt(ye[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,$e,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(Re){H?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,ye[Ee].width,ye[Ee].height,Me,Ge,ye[Ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,$e,ye[Ee].width,ye[Ee].height,0,Me,Ge,ye[Ee].data);for(let Ae=0;Ae<Fe.length;Ae++){const at=Fe[Ae].image[Ee].image;H?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ae+1,0,0,at.width,at.height,Me,Ge,at.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ae+1,$e,at.width,at.height,0,Me,Ge,at.data)}}else{H?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Me,Ge,ye[Ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,$e,Me,Ge,ye[Ee]);for(let Ae=0;Ae<Fe.length;Ae++){const we=Fe[Ae];H?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ae+1,0,0,Me,Ge,we.image[Ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ae+1,$e,Me,Ge,we.image[Ee])}}}S(A)&&b(s.TEXTURE_CUBE_MAP),De.__version=he.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function qe(O,A,Z,oe,he,De){const be=a.convert(Z.format,Z.colorSpace),ge=a.convert(Z.type),ne=T(Z.internalFormat,be,ge,Z.normalized,Z.colorSpace),xe=n.get(A),Re=n.get(Z);if(Re.__renderTarget=A,!xe.__hasExternalTextures){const ye=Math.max(1,A.width>>De),Se=Math.max(1,A.height>>De);he===s.TEXTURE_3D||he===s.TEXTURE_2D_ARRAY?t.texImage3D(he,De,ne,ye,Se,A.depth,0,be,ge,null):t.texImage2D(he,De,ne,ye,Se,0,be,ge,null)}t.bindFramebuffer(s.FRAMEBUFFER,O),Ft(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,oe,he,Re.__webglTexture,0,it(A)):(he===s.TEXTURE_2D||he>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,oe,he,Re.__webglTexture,De),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ct(O,A,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,O),A.depthBuffer){const oe=A.depthTexture,he=oe&&oe.isDepthTexture?oe.type:null,De=P(A.stencilBuffer,he),be=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ft(A)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,it(A),De,A.width,A.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,it(A),De,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,De,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,O)}else{const oe=A.textures;for(let he=0;he<oe.length;he++){const De=oe[he],be=a.convert(De.format,De.colorSpace),ge=a.convert(De.type),ne=T(De.internalFormat,be,ge,De.normalized,De.colorSpace);Ft(A)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,it(A),ne,A.width,A.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,it(A),ne,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ne,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Xe(O,A,Z){const oe=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,O),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=n.get(A.depthTexture);if(he.__renderTarget=A,(!he.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),oe){if(he.__webglInit===void 0&&(he.__webglInit=!0,A.depthTexture.addEventListener("dispose",D)),he.__webglTexture===void 0){he.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),Be(s.TEXTURE_CUBE_MAP,A.depthTexture);const xe=a.convert(A.depthTexture.format),Re=a.convert(A.depthTexture.type);let ye;A.depthTexture.format===Js?ye=s.DEPTH_COMPONENT24:A.depthTexture.format===Ma&&(ye=s.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ye,A.width,A.height,0,xe,Re,null)}}else Y(A.depthTexture,0);const De=he.__webglTexture,be=it(A),ge=oe?s.TEXTURE_CUBE_MAP_POSITIVE_X+Z:s.TEXTURE_2D,ne=A.depthTexture.format===Ma?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(A.depthTexture.format===Js)Ft(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,ge,De,0,be):s.framebufferTexture2D(s.FRAMEBUFFER,ne,ge,De,0);else if(A.depthTexture.format===Ma)Ft(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,ge,De,0,be):s.framebufferTexture2D(s.FRAMEBUFFER,ne,ge,De,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(O){const A=n.get(O),Z=O.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==O.depthTexture){const oe=O.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),oe){const he=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,oe.removeEventListener("dispose",he)};oe.addEventListener("dispose",he),A.__depthDisposeCallback=he}A.__boundDepthTexture=oe}if(O.depthTexture&&!A.__autoAllocateDepthBuffer)if(Z)for(let oe=0;oe<6;oe++)Xe(A.__webglFramebuffer[oe],O,oe);else{const oe=O.texture.mipmaps;oe&&oe.length>0?Xe(A.__webglFramebuffer[0],O,0):Xe(A.__webglFramebuffer,O,0)}else if(Z){A.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[oe]),A.__webglDepthbuffer[oe]===void 0)A.__webglDepthbuffer[oe]=s.createRenderbuffer(),Ct(A.__webglDepthbuffer[oe],O,!1);else{const he=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=A.__webglDepthbuffer[oe];s.bindRenderbuffer(s.RENDERBUFFER,De),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,De)}}else{const oe=O.texture.mipmaps;if(oe&&oe.length>0?t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Ct(A.__webglDepthbuffer,O,!1);else{const he=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,De),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,De)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function mt(O,A,Z){const oe=n.get(O);A!==void 0&&qe(oe.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&dt(O)}function ht(O){const A=O.texture,Z=n.get(O),oe=n.get(A);O.addEventListener("dispose",w);const he=O.textures,De=O.isWebGLCubeRenderTarget===!0,be=he.length>1;if(be||(oe.__webglTexture===void 0&&(oe.__webglTexture=s.createTexture()),oe.__version=A.version,l.memory.textures++),De){Z.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer[ge]=[];for(let ne=0;ne<A.mipmaps.length;ne++)Z.__webglFramebuffer[ge][ne]=s.createFramebuffer()}else Z.__webglFramebuffer[ge]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ge=0;ge<A.mipmaps.length;ge++)Z.__webglFramebuffer[ge]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(be)for(let ge=0,ne=he.length;ge<ne;ge++){const xe=n.get(he[ge]);xe.__webglTexture===void 0&&(xe.__webglTexture=s.createTexture(),l.memory.textures++)}if(O.samples>0&&Ft(O)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ge=0;ge<he.length;ge++){const ne=he[ge];Z.__webglColorRenderbuffer[ge]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[ge]);const xe=a.convert(ne.format,ne.colorSpace),Re=a.convert(ne.type),ye=T(ne.internalFormat,xe,Re,ne.normalized,ne.colorSpace,O.isXRRenderTarget===!0),Se=it(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,Se,ye,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,Z.__webglColorRenderbuffer[ge])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),Ct(Z.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(De){t.bindTexture(s.TEXTURE_CUBE_MAP,oe.__webglTexture),Be(s.TEXTURE_CUBE_MAP,A);for(let ge=0;ge<6;ge++)if(A.mipmaps&&A.mipmaps.length>0)for(let ne=0;ne<A.mipmaps.length;ne++)qe(Z.__webglFramebuffer[ge][ne],O,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ne);else qe(Z.__webglFramebuffer[ge],O,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);S(A)&&b(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ge=0,ne=he.length;ge<ne;ge++){const xe=he[ge],Re=n.get(xe);let ye=s.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ye=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ye,Re.__webglTexture),Be(ye,xe),qe(Z.__webglFramebuffer,O,xe,s.COLOR_ATTACHMENT0+ge,ye,0),S(xe)&&b(ye)}t.unbindTexture()}else{let ge=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ge=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ge,oe.__webglTexture),Be(ge,A),A.mipmaps&&A.mipmaps.length>0)for(let ne=0;ne<A.mipmaps.length;ne++)qe(Z.__webglFramebuffer[ne],O,A,s.COLOR_ATTACHMENT0,ge,ne);else qe(Z.__webglFramebuffer,O,A,s.COLOR_ATTACHMENT0,ge,0);S(A)&&b(ge),t.unbindTexture()}O.depthBuffer&&dt(O)}function ce(O){const A=O.textures;for(let Z=0,oe=A.length;Z<oe;Z++){const he=A[Z];if(S(he)){const De=C(O),be=n.get(he).__webglTexture;t.bindTexture(De,be),b(De),t.unbindTexture()}}}const Nt=[],Vt=[];function Ht(O){if(O.samples>0){if(Ft(O)===!1){const A=O.textures,Z=O.width,oe=O.height;let he=s.COLOR_BUFFER_BIT;const De=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=n.get(O),ge=A.length>1;if(ge)for(let xe=0;xe<A.length;xe++)t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const ne=O.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let xe=0;xe<A.length;xe++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(he|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(he|=s.STENCIL_BUFFER_BIT)),ge){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,be.__webglColorRenderbuffer[xe]);const Re=n.get(A[xe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Re,0)}s.blitFramebuffer(0,0,Z,oe,0,0,Z,oe,he,s.NEAREST),f===!0&&(Nt.length=0,Vt.length=0,Nt.push(s.COLOR_ATTACHMENT0+xe),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Nt.push(De),Vt.push(De),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Vt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Nt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ge)for(let xe=0;xe<A.length;xe++){t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,be.__webglColorRenderbuffer[xe]);const Re=n.get(A[xe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,Re,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&f){const A=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function it(O){return Math.min(i.maxSamples,O.samples)}function Ft(O){const A=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function j(O){const A=l.render.frame;p.get(O)!==A&&(p.set(O,A),O.update())}function jt(O,A){const Z=O.colorSpace,oe=O.format,he=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Z!==gh&&Z!==Ro&&(Gt.getTransfer(Z)===Zt?(oe!==es||he!==xr)&&xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",Z)),A}function pt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(d.width=O.naturalWidth||O.width,d.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(d.width=O.displayWidth,d.height=O.displayHeight):(d.width=O.width,d.height=O.height),d}this.allocateTextureUnit=ee,this.resetTextureUnits=re,this.getTextureUnits=ie,this.setTextureUnits=q,this.setTexture2D=Y,this.setTexture2DArray=te,this.setTexture3D=U,this.setTextureCube=k,this.rebindTextures=mt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=qe,this.useMultisampledRTT=Ft,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function $L(s,e){function t(n,i=Ro){let a;const l=Gt.getTransfer(i);if(n===xr)return s.UNSIGNED_BYTE;if(n===g_)return s.UNSIGNED_SHORT_4_4_4_4;if(n===__)return s.UNSIGNED_SHORT_5_5_5_1;if(n===qM)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===$M)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===XM)return s.BYTE;if(n===YM)return s.SHORT;if(n===Uc)return s.UNSIGNED_SHORT;if(n===m_)return s.INT;if(n===bs)return s.UNSIGNED_INT;if(n===xs)return s.FLOAT;if(n===Er)return s.HALF_FLOAT;if(n===jM)return s.ALPHA;if(n===KM)return s.RGB;if(n===es)return s.RGBA;if(n===Js)return s.DEPTH_COMPONENT;if(n===Ma)return s.DEPTH_STENCIL;if(n===ZM)return s.RED;if(n===v_)return s.RED_INTEGER;if(n===Ua)return s.RG;if(n===x_)return s.RG_INTEGER;if(n===y_)return s.RGBA_INTEGER;if(n===$d||n===jd||n===Kd||n===Zd)if(l===Zt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===$d)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Kd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===$d)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jd)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Kd)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zd)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Q0||n===J0||n===eg||n===tg)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Q0)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===J0)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===eg)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tg)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ng||n===ig||n===rg||n===sg||n===og||n===ph||n===ag)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===ng||n===ig)return l===Zt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===rg)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===sg)return a.COMPRESSED_R11_EAC;if(n===og)return a.COMPRESSED_SIGNED_R11_EAC;if(n===ph)return a.COMPRESSED_RG11_EAC;if(n===ag)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===lg||n===ug||n===cg||n===fg||n===dg||n===hg||n===pg||n===mg||n===gg||n===_g||n===vg||n===xg||n===yg||n===Sg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===lg)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ug)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cg)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fg)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dg)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===hg)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pg)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mg)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gg)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_g)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vg)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xg)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yg)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sg)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mg||n===Eg||n===wg)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Mg)return l===Zt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Eg)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wg)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tg||n===Ag||n===mh||n===bg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Tg)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Ag)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fc?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const jL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ZL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new uE(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new pi({vertexShader:jL,fragmentShader:KL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vi(new Rh(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QL extends ka{constructor(e,t){super();const n=this;let i=null,a=1,l=null,c="local-floor",f=1,d=null,p=null,g=null,m=null,_=null,x=null;const M=typeof XRWebGLBinding<"u",y=new ZL,S={},b=t.getContextAttributes();let C=null,T=null;const P=[],L=[],D=new ft;let w=null;const N=new Or;N.viewport=new ln;const F=new Or;F.viewport=new ln;const B=[N,F],z=new iC;let re=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let ve=P[se];return ve===void 0&&(ve=new Im,P[se]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(se){let ve=P[se];return ve===void 0&&(ve=new Im,P[se]=ve),ve.getGripSpace()},this.getHand=function(se){let ve=P[se];return ve===void 0&&(ve=new Im,P[se]=ve),ve.getHandSpace()};function q(se){const ve=L.indexOf(se.inputSource);if(ve===-1)return;const me=P[ve];me!==void 0&&(me.update(se.inputSource,se.frame,d||l),me.dispatchEvent({type:se.type,data:se.inputSource}))}function ee(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",ee),i.removeEventListener("inputsourceschange",W);for(let se=0;se<P.length;se++){const ve=L[se];ve!==null&&(L[se]=null,P[se].disconnect(ve))}re=null,ie=null,y.reset();for(const se in S)delete S[se];e.setRenderTarget(C),_=null,m=null,g=null,i=null,T=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){a=se,n.isPresenting===!0&&xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){c=se,n.isPresenting===!0&&xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||l},this.setReferenceSpace=function(se){d=se},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return g===null&&M&&(g=new XRWebGLBinding(i,t)),g},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(se){if(i=se,i!==null){if(C=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",ee),i.addEventListener("inputsourceschange",W),b.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(D),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ie=null,Ze=null;b.depth&&(Ze=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=b.stencil?Ma:Js,Ie=b.stencil?Fc:bs);const qe={colorFormat:t.RGBA8,depthFormat:Ze,scaleFactor:a};g=this.getBinding(),m=g.createProjectionLayer(qe),i.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),T=new rr(m.textureWidth,m.textureHeight,{format:es,type:xr,depthTexture:new nu(m.textureWidth,m.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const me={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(i,t,me),i.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),T=new rr(_.framebufferWidth,_.framebufferHeight,{format:es,type:xr,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(f),d=null,l=await i.requestReferenceSpace(c),Be.setContext(i),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function W(se){for(let ve=0;ve<se.removed.length;ve++){const me=se.removed[ve],Ie=L.indexOf(me);Ie>=0&&(L[Ie]=null,P[Ie].disconnect(me))}for(let ve=0;ve<se.added.length;ve++){const me=se.added[ve];let Ie=L.indexOf(me);if(Ie===-1){for(let qe=0;qe<P.length;qe++)if(qe>=L.length){L.push(me),Ie=qe;break}else if(L[qe]===null){L[qe]=me,Ie=qe;break}if(Ie===-1)break}const Ze=P[Ie];Ze&&Ze.connect(me)}}const Y=new X,te=new X;function U(se,ve,me){Y.setFromMatrixPosition(ve.matrixWorld),te.setFromMatrixPosition(me.matrixWorld);const Ie=Y.distanceTo(te),Ze=ve.projectionMatrix.elements,qe=me.projectionMatrix.elements,Ct=Ze[14]/(Ze[10]-1),Xe=Ze[14]/(Ze[10]+1),dt=(Ze[9]+1)/Ze[5],mt=(Ze[9]-1)/Ze[5],ht=(Ze[8]-1)/Ze[0],ce=(qe[8]+1)/qe[0],Nt=Ct*ht,Vt=Ct*ce,Ht=Ie/(-ht+ce),it=Ht*-ht;if(ve.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(it),se.translateZ(Ht),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),Ze[10]===-1)se.projectionMatrix.copy(ve.projectionMatrix),se.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const Ft=Ct+Ht,j=Xe+Ht,jt=Nt-it,pt=Vt+(Ie-it),O=dt*Xe/j*Ft,A=mt*Xe/j*Ft;se.projectionMatrix.makePerspective(jt,pt,O,A,Ft,j),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function k(se,ve){ve===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(ve.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(i===null)return;let ve=se.near,me=se.far;y.texture!==null&&(y.depthNear>0&&(ve=y.depthNear),y.depthFar>0&&(me=y.depthFar)),z.near=F.near=N.near=ve,z.far=F.far=N.far=me,(re!==z.near||ie!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),re=z.near,ie=z.far),z.layers.mask=se.layers.mask|6,N.layers.mask=z.layers.mask&-5,F.layers.mask=z.layers.mask&-3;const Ie=se.parent,Ze=z.cameras;k(z,Ie);for(let qe=0;qe<Ze.length;qe++)k(Ze[qe],Ie);Ze.length===2?U(z,N,F):z.projectionMatrix.copy(N.projectionMatrix),J(se,z,Ie)};function J(se,ve,me){me===null?se.matrix.copy(ve.matrixWorld):(se.matrix.copy(me.matrixWorld),se.matrix.invert(),se.matrix.multiply(ve.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(ve.projectionMatrix),se.projectionMatrixInverse.copy(ve.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Bc*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(m===null&&_===null))return f},this.setFoveation=function(se){f=se,m!==null&&(m.fixedFoveation=se),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=se)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(z)},this.getCameraTexture=function(se){return S[se]};let ze=null;function Ve(se,ve){if(p=ve.getViewerPose(d||l),x=ve,p!==null){const me=p.views;_!==null&&(e.setRenderTargetFramebuffer(T,_.framebuffer),e.setRenderTarget(T));let Ie=!1;me.length!==z.cameras.length&&(z.cameras.length=0,Ie=!0);for(let Xe=0;Xe<me.length;Xe++){const dt=me[Xe];let mt=null;if(_!==null)mt=_.getViewport(dt);else{const ce=g.getViewSubImage(m,dt);mt=ce.viewport,Xe===0&&(e.setRenderTargetTextures(T,ce.colorTexture,ce.depthStencilTexture),e.setRenderTarget(T))}let ht=B[Xe];ht===void 0&&(ht=new Or,ht.layers.enable(Xe),ht.viewport=new ln,B[Xe]=ht),ht.matrix.fromArray(dt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(dt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(mt.x,mt.y,mt.width,mt.height),Xe===0&&(z.matrix.copy(ht.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ie===!0&&z.cameras.push(ht)}const Ze=i.enabledFeatures;if(Ze&&Ze.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&M){g=n.getBinding();const Xe=g.getDepthInformation(me[0]);Xe&&Xe.isValid&&Xe.texture&&y.init(Xe,i.renderState)}if(Ze&&Ze.includes("camera-access")&&M){e.state.unbindTexture(),g=n.getBinding();for(let Xe=0;Xe<me.length;Xe++){const dt=me[Xe].camera;if(dt){let mt=S[dt];mt||(mt=new uE,S[dt]=mt);const ht=g.getCameraImage(dt);mt.sourceTexture=ht}}}}for(let me=0;me<P.length;me++){const Ie=L[me],Ze=P[me];Ie!==null&&Ze!==void 0&&Ze.update(Ie,ve,d||l)}ze&&ze(se,ve),ve.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ve}),x=null}const Be=new pE;Be.setAnimationLoop(Ve),this.setAnimationLoop=function(se){ze=se},this.dispose=function(){}}}const JL=new dn,SE=new At;SE.set(-1,0,0,0,1,0,0,0,1);function eD(s,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function n(y,S){S.color.getRGB(y.fogColor.value,cE(s)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function i(y,S,b,C,T){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?a(y,S):S.isMeshLambertMaterial?(a(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(a(y,S),g(y,S)):S.isMeshPhongMaterial?(a(y,S),p(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(a(y,S),m(y,S),S.isMeshPhysicalMaterial&&_(y,S,T)):S.isMeshMatcapMaterial?(a(y,S),x(y,S)):S.isMeshDepthMaterial?a(y,S):S.isMeshDistanceMaterial?(a(y,S),M(y,S)):S.isMeshNormalMaterial?a(y,S):S.isLineBasicMaterial?(l(y,S),S.isLineDashedMaterial&&c(y,S)):S.isPointsMaterial?f(y,S,b,C):S.isSpriteMaterial?d(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function a(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===ir&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===ir&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const b=e.get(S),C=b.envMap,T=b.envMapRotation;C&&(y.envMap.value=C,y.envMapRotation.value.setFromMatrix4(JL.makeRotationFromEuler(T)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(SE),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function l(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function c(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function f(y,S,b,C){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*b,y.scale.value=C*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function g(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function m(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function _(y,S,b){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ir&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=b.texture,y.transmissionSamplerSize.value.set(b.width,b.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function x(y,S){S.matcap&&(y.matcap.value=S.matcap)}function M(y,S){const b=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(b.matrixWorld),y.nearDistance.value=b.shadow.camera.near,y.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function tD(s,e,t,n){let i={},a={},l=[];const c=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(T,P){const L=P.program;n.uniformBlockBinding(T,L)}function d(T,P){let L=i[T.id];L===void 0&&(y(T),L=p(T),i[T.id]=L,T.addEventListener("dispose",b));const D=P.program;n.updateUBOMapping(T,D);const w=e.render.frame;a[T.id]!==w&&(m(T),a[T.id]=w)}function p(T){const P=g();T.__bindingPointIndex=P;const L=s.createBuffer(),D=T.__size,w=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,D,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,L),L}function g(){for(let T=0;T<c;T++)if(l.indexOf(T)===-1)return l.push(T),T;return Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(T){const P=i[T.id],L=T.uniforms,D=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let w=0,N=L.length;w<N;w++){const F=L[w];if(Array.isArray(F))for(let B=0,z=F.length;B<z;B++)_(F[B],w,B,D);else _(F,w,0,D)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function _(T,P,L,D){if(M(T,P,L,D)===!0){const w=T.__offset,N=T.value;if(Array.isArray(N)){let F=0;for(let B=0;B<N.length;B++){const z=N[B],re=S(z);x(z,T.__data,F),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(F+=re.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(N,T.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,T.__data)}}function x(T,P,L){typeof T=="number"||typeof T=="boolean"?P[0]=T:T.isMatrix3?(P[0]=T.elements[0],P[1]=T.elements[1],P[2]=T.elements[2],P[3]=0,P[4]=T.elements[3],P[5]=T.elements[4],P[6]=T.elements[5],P[7]=0,P[8]=T.elements[6],P[9]=T.elements[7],P[10]=T.elements[8],P[11]=0):ArrayBuffer.isView(T)?P.set(new T.constructor(T.buffer,T.byteOffset,P.length)):T.toArray(P,L)}function M(T,P,L,D){const w=T.value,N=P+"_"+L;if(D[N]===void 0)return typeof w=="number"||typeof w=="boolean"?D[N]=w:ArrayBuffer.isView(w)?D[N]=w.slice():D[N]=w.clone(),!0;{const F=D[N];if(typeof w=="number"||typeof w=="boolean"){if(F!==w)return D[N]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(F.equals(w)===!1)return F.copy(w),!0}}return!1}function y(T){const P=T.uniforms;let L=0;const D=16;for(let N=0,F=P.length;N<F;N++){const B=Array.isArray(P[N])?P[N]:[P[N]];for(let z=0,re=B.length;z<re;z++){const ie=B[z],q=Array.isArray(ie.value)?ie.value:[ie.value];for(let ee=0,W=q.length;ee<W;ee++){const Y=q[ee],te=S(Y),U=L%D,k=U%te.boundary,J=U+k;L+=k,J!==0&&D-J<te.storage&&(L+=D-J),ie.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=L,L+=te.storage}}}const w=L%D;return w>0&&(L+=D-w),T.__size=L,T.__cache={},this}function S(T){const P={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(P.boundary=4,P.storage=4):T.isVector2?(P.boundary=8,P.storage=8):T.isVector3||T.isColor?(P.boundary=16,P.storage=12):T.isVector4?(P.boundary=16,P.storage=16):T.isMatrix3?(P.boundary=48,P.storage=48):T.isMatrix4?(P.boundary=64,P.storage=64):T.isTexture?xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(P.boundary=16,P.storage=T.byteLength):xt("WebGLRenderer: Unsupported uniform value type.",T),P}function b(T){const P=T.target;P.removeEventListener("dispose",b);const L=l.indexOf(P.__bindingPointIndex);l.splice(L,1),s.deleteBuffer(i[P.id]),delete i[P.id],delete a[P.id]}function C(){for(const T in i)s.deleteBuffer(i[T]);l=[],i={},a={}}return{bind:f,update:d,dispose:C}}const nD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let us=null;function iD(){return us===null&&(us=new Pb(nD,16,16,Ua,Er),us.name="DFG_LUT",us.minFilter=Ri,us.magFilter=Ri,us.wrapS=qs,us.wrapT=qs,us.generateMipmaps=!1,us.needsUpdate=!0),us}class rD{constructor(e={}){const{canvas:t=YA(),context:n=null,depth:i=!0,stencil:a=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:m=!1,outputBufferType:_=xr}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=l;const M=_,y=new Set([y_,x_,v_]),S=new Set([xr,bs,Uc,Fc,g_,__]),b=new Uint32Array(4),C=new Int32Array(4),T=new X;let P=null,L=null;const D=[],w=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ts,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let B=!1,z=null,re=null,ie=null,q=null;this._outputColorSpace=mr;let ee=0,W=0,Y=null,te=-1,U=null;const k=new ln,J=new ln;let ze=null;const Ve=new yt(0);let Be=0,se=t.width,ve=t.height,me=1,Ie=null,Ze=null;const qe=new ln(0,0,se,ve),Ct=new ln(0,0,se,ve);let Xe=!1;const dt=new b_;let mt=!1,ht=!1;const ce=new dn,Nt=new X,Vt=new ln,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function Ft(){return Y===null?me:1}let j=n;function jt(I,Q){return t.getContext(I,Q)}try{const I={alpha:!0,depth:i,stencil:a,antialias:c,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${l_}`),t.addEventListener("webglcontextlost",at,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",lt,!1),j===null){const Q="webgl2";if(j=jt(Q,I),j===null)throw jt(Q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(I){throw Yt("WebGLRenderer: "+I.message),I}let pt,O,A,Z,oe,he,De,be,ge,ne,xe,Re,ye,Se,Me,Ge,$e,H,Te,_e,Ue,Fe,Ee;function Ae(){pt=new iP(j),pt.init(),Ue=new $L(j,pt),O=new j3(j,pt,e,Ue),A=new YL(j,pt),O.reversedDepthBuffer&&m&&A.buffers.depth.setReversed(!0),re=j.createFramebuffer(),ie=j.createFramebuffer(),q=j.createFramebuffer(),Z=new oP(j),oe=new DL,he=new qL(j,pt,A,oe,O,Ue,Z),De=new nP(F),be=new cC(j),Fe=new q3(j,be),ge=new rP(j,be,Z,Fe),ne=new lP(j,ge,be,Fe,Z),H=new aP(j,O,he),Me=new K3(oe),xe=new LL(F,De,pt,O,Fe,Me),Re=new eD(F,oe),ye=new IL,Se=new zL(pt),$e=new Y3(F,De,A,ne,x,f),Ge=new XL(F,ne,O),Ee=new tD(j,Z,O,A),Te=new $3(j,pt,Z),_e=new sP(j,pt,Z),Z.programs=xe.programs,F.capabilities=O,F.extensions=pt,F.properties=oe,F.renderLists=ye,F.shadowMap=Ge,F.state=A,F.info=Z}Ae(),M!==xr&&(N=new cP(M,t.width,t.height,c,i,a));const we=new QL(F,j);this.xr=we,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const I=pt.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=pt.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(I){I!==void 0&&(me=I,this.setSize(se,ve,!1))},this.getSize=function(I){return I.set(se,ve)},this.setSize=function(I,Q,de=!0){if(we.isPresenting){xt("WebGLRenderer: Can't change size while VR device is presenting.");return}se=I,ve=Q,t.width=Math.floor(I*me),t.height=Math.floor(Q*me),de===!0&&(t.style.width=I+"px",t.style.height=Q+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,I,Q)},this.getDrawingBufferSize=function(I){return I.set(se*me,ve*me).floor()},this.setDrawingBufferSize=function(I,Q,de){se=I,ve=Q,me=de,t.width=Math.floor(I*de),t.height=Math.floor(Q*de),this.setViewport(0,0,I,Q)},this.setEffects=function(I){if(M===xr){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let Q=0;Q<I.length;Q++)if(I[Q].isOutputPass===!0){xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(k)},this.getViewport=function(I){return I.copy(qe)},this.setViewport=function(I,Q,de,ae){I.isVector4?qe.set(I.x,I.y,I.z,I.w):qe.set(I,Q,de,ae),A.viewport(k.copy(qe).multiplyScalar(me).round())},this.getScissor=function(I){return I.copy(Ct)},this.setScissor=function(I,Q,de,ae){I.isVector4?Ct.set(I.x,I.y,I.z,I.w):Ct.set(I,Q,de,ae),A.scissor(J.copy(Ct).multiplyScalar(me).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(I){A.setScissorTest(Xe=I)},this.setOpaqueSort=function(I){Ie=I},this.setTransparentSort=function(I){Ze=I},this.getClearColor=function(I){return I.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(I=!0,Q=!0,de=!0){let ae=0;if(I){let le=!1;if(Y!==null){const Oe=Y.texture.format;le=y.has(Oe)}if(le){const Oe=Y.texture.type,Ye=S.has(Oe),He=$e.getClearColor(),rt=$e.getClearAlpha(),ct=He.r,wt=He.g,Tt=He.b;Ye?(b[0]=ct,b[1]=wt,b[2]=Tt,b[3]=rt,j.clearBufferuiv(j.COLOR,0,b)):(C[0]=ct,C[1]=wt,C[2]=Tt,C[3]=rt,j.clearBufferiv(j.COLOR,0,C))}else ae|=j.COLOR_BUFFER_BIT}Q&&(ae|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(ae|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&j.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),z=I},this.dispose=function(){t.removeEventListener("webglcontextlost",at,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",lt,!1),$e.dispose(),ye.dispose(),Se.dispose(),oe.dispose(),De.dispose(),ne.dispose(),Fe.dispose(),Ee.dispose(),xe.dispose(),we.dispose(),we.removeEventListener("sessionstart",cn),we.removeEventListener("sessionend",tn),Pt.stop()};function at(I){I.preventDefault(),vh("WebGLRenderer: Context Lost."),B=!0}function Ce(){vh("WebGLRenderer: Context Restored."),B=!1;const I=Z.autoReset,Q=Ge.enabled,de=Ge.autoUpdate,ae=Ge.needsUpdate,le=Ge.type;Ae(),Z.autoReset=I,Ge.enabled=Q,Ge.autoUpdate=de,Ge.needsUpdate=ae,Ge.type=le}function lt(I){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Je(I){const Q=I.target;Q.removeEventListener("dispose",Je),vt(Q)}function vt(I){mn(I),oe.remove(I)}function mn(I){const Q=oe.get(I).programs;Q!==void 0&&(Q.forEach(function(de){xe.releaseProgram(de)}),I.isShaderMaterial&&xe.releaseShaderCache(I))}this.renderBufferDirect=function(I,Q,de,ae,le,Oe){Q===null&&(Q=Ht);const Ye=le.isMesh&&le.matrixWorld.determinantAffine()<0,He=Lt(I,Q,de,ae,le);A.setMaterial(ae,Ye);let rt=de.index,ct=1;if(ae.wireframe===!0){if(rt=ge.getWireframeAttribute(de),rt===void 0)return;ct=2}const wt=de.drawRange,Tt=de.attributes.position;let ot=wt.start*ct,Xt=(wt.start+wt.count)*ct;Oe!==null&&(ot=Math.max(ot,Oe.start*ct),Xt=Math.min(Xt,(Oe.start+Oe.count)*ct)),rt!==null?(ot=Math.max(ot,0),Xt=Math.min(Xt,rt.count)):Tt!=null&&(ot=Math.max(ot,0),Xt=Math.min(Xt,Tt.count));const hn=Xt-ot;if(hn<0||hn===1/0)return;Fe.setup(le,ae,He,de,rt);let yn,rn=Te;if(rt!==null&&(yn=be.get(rt),rn=_e,rn.setIndex(yn)),le.isMesh)ae.wireframe===!0?(A.setLineWidth(ae.wireframeLinewidth*Ft()),rn.setMode(j.LINES)):rn.setMode(j.TRIANGLES);else if(le.isLine){let kn=ae.linewidth;kn===void 0&&(kn=1),A.setLineWidth(kn*Ft()),le.isLineSegments?rn.setMode(j.LINES):le.isLineLoop?rn.setMode(j.LINE_LOOP):rn.setMode(j.LINE_STRIP)}else le.isPoints?rn.setMode(j.POINTS):le.isSprite&&rn.setMode(j.TRIANGLES);if(le.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))rn.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else{const kn=le._multiDrawStarts,je=le._multiDrawCounts,oi=le._multiDrawCount,It=rt?be.get(rt).bytesPerElement:1,Hi=oe.get(ae).currentProgram.getUniforms();for(let Gi=0;Gi<oi;Gi++)Hi.setValue(j,"_gl_DrawID",Gi),rn.render(kn[Gi]/It,je[Gi])}else if(le.isInstancedMesh)rn.renderInstances(ot,hn,le.count);else if(de.isInstancedBufferGeometry){const kn=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,je=Math.min(de.instanceCount,kn);rn.renderInstances(ot,hn,je)}else rn.render(ot,hn)};function Rt(I,Q,de){I.transparent===!0&&I.side===ms&&I.forceSinglePass===!1?(I.side=ir,I.needsUpdate=!0,gn(I,Q,de),I.side=Go,I.needsUpdate=!0,gn(I,Q,de),I.side=ms):gn(I,Q,de)}this.compile=function(I,Q,de=null){de===null&&(de=I),L=Se.get(de),L.init(Q),w.push(L),de.traverseVisible(function(le){le.isLight&&le.layers.test(Q.layers)&&(L.pushLight(le),le.castShadow&&L.pushShadow(le))}),I!==de&&I.traverseVisible(function(le){le.isLight&&le.layers.test(Q.layers)&&(L.pushLight(le),le.castShadow&&L.pushShadow(le))}),L.setupLights();const ae=new Set;return I.traverse(function(le){if(!(le.isMesh||le.isPoints||le.isLine||le.isSprite))return;const Oe=le.material;if(Oe)if(Array.isArray(Oe))for(let Ye=0;Ye<Oe.length;Ye++){const He=Oe[Ye];Rt(He,de,le),ae.add(He)}else Rt(Oe,de,le),ae.add(Oe)}),L=w.pop(),ae},this.compileAsync=function(I,Q,de=null){const ae=this.compile(I,Q,de);return new Promise(le=>{function Oe(){if(ae.forEach(function(Ye){oe.get(Ye).currentProgram.isReady()&&ae.delete(Ye)}),ae.size===0){le(I);return}setTimeout(Oe,10)}pt.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let en=null;function On(I){en&&en(I)}function cn(){Pt.stop()}function tn(){Pt.start()}const Pt=new pE;Pt.setAnimationLoop(On),typeof self<"u"&&Pt.setContext(self),this.setAnimationLoop=function(I){en=I,we.setAnimationLoop(I),I===null?Pt.stop():Pt.start()},we.addEventListener("sessionstart",cn),we.addEventListener("sessionend",tn),this.render=function(I,Q){if(Q!==void 0&&Q.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;z!==null&&z.renderStart(I,Q);const de=we.enabled===!0&&we.isPresenting===!0,ae=N!==null&&(Y===null||de)&&N.begin(F,Y);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(Q),Q=we.getCamera()),I.isScene===!0&&I.onBeforeRender(F,I,Q,Y),L=Se.get(I,w.length),L.init(Q),L.state.textureUnits=he.getTextureUnits(),w.push(L),ce.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),dt.setFromProjectionMatrix(ce,ys,Q.reversedDepth),ht=this.localClippingEnabled,mt=Me.init(this.clippingPlanes,ht),P=ye.get(I,D.length),P.init(),D.push(P),we.enabled===!0&&we.isPresenting===!0){const Ye=F.xr.getDepthSensingMesh();Ye!==null&&Kn(Ye,Q,-1/0,F.sortObjects)}Kn(I,Q,0,F.sortObjects),P.finish(),F.sortObjects===!0&&P.sort(Ie,Ze,Q.reversedDepth),it=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,it&&$e.addToRenderList(P,I),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),mt===!0&&Me.beginShadows();const le=L.state.shadowsArray;if(Ge.render(le,I,Q),mt===!0&&Me.endShadows(),(ae&&N.hasRenderPass())===!1){const Ye=P.opaque,He=P.transmissive;if(L.setupLights(),Q.isArrayCamera){const rt=Q.cameras;if(He.length>0)for(let ct=0,wt=rt.length;ct<wt;ct++){const Tt=rt[ct];Zn(Ye,He,I,Tt)}it&&$e.render(I);for(let ct=0,wt=rt.length;ct<wt;ct++){const Tt=rt[ct];nn(P,I,Tt,Tt.viewport)}}else He.length>0&&Zn(Ye,He,I,Q),it&&$e.render(I),nn(P,I,Q)}Y!==null&&W===0&&(he.updateMultisampleRenderTarget(Y),he.updateRenderTargetMipmap(Y)),ae&&N.end(F),I.isScene===!0&&I.onAfterRender(F,I,Q),Fe.resetDefaultState(),te=-1,U=null,w.pop(),w.length>0?(L=w[w.length-1],he.setTextureUnits(L.state.textureUnits),mt===!0&&Me.setGlobalState(F.clippingPlanes,L.state.camera)):L=null,D.pop(),D.length>0?P=D[D.length-1]:P=null,z!==null&&z.renderEnd()};function Kn(I,Q,de,ae){if(I.visible===!1)return;if(I.layers.test(Q.layers)){if(I.isGroup)de=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(Q);else if(I.isLightProbeGrid)L.pushLightProbeGrid(I);else if(I.isLight)L.pushLight(I),I.castShadow&&L.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||dt.intersectsSprite(I)){ae&&Vt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(ce);const Ye=ne.update(I),He=I.material;He.visible&&P.push(I,Ye,He,de,Vt.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||dt.intersectsObject(I))){const Ye=ne.update(I),He=I.material;if(ae&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Vt.copy(I.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),Vt.copy(Ye.boundingSphere.center)),Vt.applyMatrix4(I.matrixWorld).applyMatrix4(ce)),Array.isArray(He)){const rt=Ye.groups;for(let ct=0,wt=rt.length;ct<wt;ct++){const Tt=rt[ct],ot=He[Tt.materialIndex];ot&&ot.visible&&P.push(I,Ye,ot,de,Vt.z,Tt)}}else He.visible&&P.push(I,Ye,He,de,Vt.z,null)}}const Oe=I.children;for(let Ye=0,He=Oe.length;Ye<He;Ye++)Kn(Oe[Ye],Q,de,ae)}function nn(I,Q,de,ae){const{opaque:le,transmissive:Oe,transparent:Ye}=I;L.setupLightsView(de),mt===!0&&Me.setGlobalState(F.clippingPlanes,de),ae&&A.viewport(k.copy(ae)),le.length>0&&Qn(le,Q,de),Oe.length>0&&Qn(Oe,Q,de),Ye.length>0&&Qn(Ye,Q,de),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function Zn(I,Q,de,ae){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ae.id]===void 0){const ot=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ae.id]=new rr(1,1,{generateMipmaps:!0,type:ot?Er:xr,minFilter:Sa,samples:Math.max(4,O.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Gt.workingColorSpace})}const Oe=L.state.transmissionRenderTarget[ae.id],Ye=ae.viewport||k;Oe.setSize(Ye.z*F.transmissionResolutionScale,Ye.w*F.transmissionResolutionScale);const He=F.getRenderTarget(),rt=F.getActiveCubeFace(),ct=F.getActiveMipmapLevel();F.setRenderTarget(Oe),F.getClearColor(Ve),Be=F.getClearAlpha(),Be<1&&F.setClearColor(16777215,.5),F.clear(),it&&$e.render(de);const wt=F.toneMapping;F.toneMapping=Ts;const Tt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),L.setupLightsView(ae),mt===!0&&Me.setGlobalState(F.clippingPlanes,ae),Qn(I,de,ae),he.updateMultisampleRenderTarget(Oe),he.updateRenderTargetMipmap(Oe),pt.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Xt=0,hn=Q.length;Xt<hn;Xt++){const yn=Q[Xt],{object:rn,geometry:kn,material:je,group:oi}=yn;if(je.side===ms&&rn.layers.test(ae.layers)){const It=je.side;je.side=ir,je.needsUpdate=!0,En(rn,de,ae,kn,je,oi),je.side=It,je.needsUpdate=!0,ot=!0}}ot===!0&&(he.updateMultisampleRenderTarget(Oe),he.updateRenderTargetMipmap(Oe))}F.setRenderTarget(He,rt,ct),F.setClearColor(Ve,Be),Tt!==void 0&&(ae.viewport=Tt),F.toneMapping=wt}function Qn(I,Q,de){const ae=Q.isScene===!0?Q.overrideMaterial:null;for(let le=0,Oe=I.length;le<Oe;le++){const Ye=I[le],{object:He,geometry:rt,group:ct}=Ye;let wt=Ye.material;wt.allowOverride===!0&&ae!==null&&(wt=ae),He.layers.test(de.layers)&&En(He,Q,de,rt,wt,ct)}}function En(I,Q,de,ae,le,Oe){I.onBeforeRender(F,Q,de,ae,le,Oe),I.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),le.onBeforeRender(F,Q,de,ae,I,Oe),le.transparent===!0&&le.side===ms&&le.forceSinglePass===!1?(le.side=ir,le.needsUpdate=!0,F.renderBufferDirect(de,Q,ae,le,I,Oe),le.side=Go,le.needsUpdate=!0,F.renderBufferDirect(de,Q,ae,le,I,Oe),le.side=ms):F.renderBufferDirect(de,Q,ae,le,I,Oe),I.onAfterRender(F,Q,de,ae,le,Oe)}function gn(I,Q,de){Q.isScene!==!0&&(Q=Ht);const ae=oe.get(I),le=L.state.lights,Oe=L.state.shadowsArray,Ye=le.state.version,He=xe.getParameters(I,le.state,Oe,Q,de,L.state.lightProbeGridArray),rt=xe.getProgramCacheKey(He);let ct=ae.programs;ae.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?Q.environment:null,ae.fog=Q.fog;const wt=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;ae.envMap=De.get(I.envMap||ae.environment,wt),ae.envMapRotation=ae.environment!==null&&I.envMap===null?Q.environmentRotation:I.envMapRotation,ct===void 0&&(I.addEventListener("dispose",Je),ct=new Map,ae.programs=ct);let Tt=ct.get(rt);if(Tt!==void 0){if(ae.currentProgram===Tt&&ae.lightsStateVersion===Ye)return Ar(I,He),Tt}else He.uniforms=xe.getUniforms(I),z!==null&&I.isNodeMaterial&&z.build(I,de,He),I.onBeforeCompile(He,F),Tt=xe.acquireProgram(He,rt),ct.set(rt,Tt),ae.uniforms=He.uniforms;const ot=ae.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(ot.clippingPlanes=Me.uniform),Ar(I,He),ae.needsLights=_i(I),ae.lightsStateVersion=Ye,ae.needsLights&&(ot.ambientLightColor.value=le.state.ambient,ot.lightProbe.value=le.state.probe,ot.directionalLights.value=le.state.directional,ot.directionalLightShadows.value=le.state.directionalShadow,ot.spotLights.value=le.state.spot,ot.spotLightShadows.value=le.state.spotShadow,ot.rectAreaLights.value=le.state.rectArea,ot.ltc_1.value=le.state.rectAreaLTC1,ot.ltc_2.value=le.state.rectAreaLTC2,ot.pointLights.value=le.state.point,ot.pointLightShadows.value=le.state.pointShadow,ot.hemisphereLights.value=le.state.hemi,ot.directionalShadowMatrix.value=le.state.directionalShadowMatrix,ot.spotLightMatrix.value=le.state.spotLightMatrix,ot.spotLightMap.value=le.state.spotLightMap,ot.pointShadowMatrix.value=le.state.pointShadowMatrix),ae.lightProbeGrid=L.state.lightProbeGridArray.length>0,ae.currentProgram=Tt,ae.uniformsList=null,Tt}function Pn(I){if(I.uniformsList===null){const Q=I.currentProgram.getUniforms();I.uniformsList=eh.seqWithValue(Q.seq,I.uniforms)}return I.uniformsList}function Ar(I,Q){const de=oe.get(I);de.outputColorSpace=Q.outputColorSpace,de.batching=Q.batching,de.batchingColor=Q.batchingColor,de.instancing=Q.instancing,de.instancingColor=Q.instancingColor,de.instancingMorph=Q.instancingMorph,de.skinning=Q.skinning,de.morphTargets=Q.morphTargets,de.morphNormals=Q.morphNormals,de.morphColors=Q.morphColors,de.morphTargetsCount=Q.morphTargetsCount,de.numClippingPlanes=Q.numClippingPlanes,de.numIntersection=Q.numClipIntersection,de.vertexAlphas=Q.vertexAlphas,de.vertexTangents=Q.vertexTangents,de.toneMapping=Q.toneMapping}function eo(I,Q){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;T.setFromMatrixPosition(Q.matrixWorld);for(let de=0,ae=I.length;de<ae;de++){const le=I[de];if(le.texture!==null&&le.boundingBox.containsPoint(T))return le}return null}function Lt(I,Q,de,ae,le){Q.isScene!==!0&&(Q=Ht),he.resetTextureUnits();const Oe=Q.fog,Ye=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?Q.environment:null,He=Y===null?F.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Gt.workingColorSpace,rt=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,ct=De.get(ae.envMap||Ye,rt),wt=ae.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,Tt=!!de.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),ot=!!de.morphAttributes.position,Xt=!!de.morphAttributes.normal,hn=!!de.morphAttributes.color;let yn=Ts;ae.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(yn=F.toneMapping);const rn=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,kn=rn!==void 0?rn.length:0,je=oe.get(ae),oi=L.state.lights;if(mt===!0&&(ht===!0||I!==U)){const sn=I===U&&ae.id===te;Me.setState(ae,I,sn)}let It=!1;ae.version===je.__version?(je.needsLights&&je.lightsStateVersion!==oi.state.version||je.outputColorSpace!==He||le.isBatchedMesh&&je.batching===!1||!le.isBatchedMesh&&je.batching===!0||le.isBatchedMesh&&je.batchingColor===!0&&le.colorTexture===null||le.isBatchedMesh&&je.batchingColor===!1&&le.colorTexture!==null||le.isInstancedMesh&&je.instancing===!1||!le.isInstancedMesh&&je.instancing===!0||le.isSkinnedMesh&&je.skinning===!1||!le.isSkinnedMesh&&je.skinning===!0||le.isInstancedMesh&&je.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&je.instancingColor===!1&&le.instanceColor!==null||le.isInstancedMesh&&je.instancingMorph===!0&&le.morphTexture===null||le.isInstancedMesh&&je.instancingMorph===!1&&le.morphTexture!==null||je.envMap!==ct||ae.fog===!0&&je.fog!==Oe||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Me.numPlanes||je.numIntersection!==Me.numIntersection)||je.vertexAlphas!==wt||je.vertexTangents!==Tt||je.morphTargets!==ot||je.morphNormals!==Xt||je.morphColors!==hn||je.toneMapping!==yn||je.morphTargetsCount!==kn||!!je.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(It=!0):(It=!0,je.__version=ae.version);let Hi=je.currentProgram;It===!0&&(Hi=gn(ae,Q,le),z&&ae.isNodeMaterial&&z.onUpdateProgram(ae,Hi,je));let Gi=!1,Ot=!1,Cs=!1;const Kt=Hi.getUniforms(),_n=je.uniforms;if(A.useProgram(Hi.program)&&(Gi=!0,Ot=!0,Cs=!0),ae.id!==te&&(te=ae.id,Ot=!0),je.needsLights){const sn=eo(L.state.lightProbeGridArray,le);je.lightProbeGrid!==sn&&(je.lightProbeGrid=sn,Ot=!0)}if(Gi||U!==I){A.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Kt.setValue(j,"projectionMatrix",I.projectionMatrix),Kt.setValue(j,"viewMatrix",I.matrixWorldInverse);const Hr=Kt.map.cameraPosition;Hr!==void 0&&Hr.setValue(j,Nt.setFromMatrixPosition(I.matrixWorld)),O.logarithmicDepthBuffer&&Kt.setValue(j,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Kt.setValue(j,"isOrthographic",I.isOrthographicCamera===!0),U!==I&&(U=I,Ot=!0,Cs=!0)}if(je.needsLights&&(oi.state.directionalShadowMap.length>0&&Kt.setValue(j,"directionalShadowMap",oi.state.directionalShadowMap,he),oi.state.spotShadowMap.length>0&&Kt.setValue(j,"spotShadowMap",oi.state.spotShadowMap,he),oi.state.pointShadowMap.length>0&&Kt.setValue(j,"pointShadowMap",oi.state.pointShadowMap,he)),le.isSkinnedMesh){Kt.setOptional(j,le,"bindMatrix"),Kt.setOptional(j,le,"bindMatrixInverse");const sn=le.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Kt.setValue(j,"boneTexture",sn.boneTexture,he))}le.isBatchedMesh&&(Kt.setOptional(j,le,"batchingTexture"),Kt.setValue(j,"batchingTexture",le._matricesTexture,he),Kt.setOptional(j,le,"batchingIdTexture"),Kt.setValue(j,"batchingIdTexture",le._indirectTexture,he),Kt.setOptional(j,le,"batchingColorTexture"),le._colorsTexture!==null&&Kt.setValue(j,"batchingColorTexture",le._colorsTexture,he));const Vr=de.morphAttributes;if((Vr.position!==void 0||Vr.normal!==void 0||Vr.color!==void 0)&&H.update(le,de,Hi),(Ot||je.receiveShadow!==le.receiveShadow)&&(je.receiveShadow=le.receiveShadow,Kt.setValue(j,"receiveShadow",le.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&Q.environment!==null&&(_n.envMapIntensity.value=Q.environmentIntensity),_n.dfgLUT!==void 0&&(_n.dfgLUT.value=iD()),Ot){if(Kt.setValue(j,"toneMappingExposure",F.toneMappingExposure),je.needsLights&&wn(_n,Cs),Oe&&ae.fog===!0&&Re.refreshFogUniforms(_n,Oe),Re.refreshMaterialUniforms(_n,ae,me,ve,L.state.transmissionRenderTarget[I.id]),je.needsLights&&je.lightProbeGrid){const sn=je.lightProbeGrid;_n.probesSH.value=sn.texture,_n.probesMin.value.copy(sn.boundingBox.min),_n.probesMax.value.copy(sn.boundingBox.max),_n.probesResolution.value.copy(sn.resolution)}eh.upload(j,Pn(je),_n,he)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(eh.upload(j,Pn(je),_n,he),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Kt.setValue(j,"center",le.center),Kt.setValue(j,"modelViewMatrix",le.modelViewMatrix),Kt.setValue(j,"normalMatrix",le.normalMatrix),Kt.setValue(j,"modelMatrix",le.matrixWorld),ae.uniformsGroups!==void 0){const sn=ae.uniformsGroups;for(let Hr=0,is=sn.length;Hr<is;Hr++){const $o=sn[Hr];Ee.update($o,Hi),Ee.bind($o,Hi)}}return Hi}function wn(I,Q){I.ambientLightColor.needsUpdate=Q,I.lightProbe.needsUpdate=Q,I.directionalLights.needsUpdate=Q,I.directionalLightShadows.needsUpdate=Q,I.pointLights.needsUpdate=Q,I.pointLightShadows.needsUpdate=Q,I.spotLights.needsUpdate=Q,I.spotLightShadows.needsUpdate=Q,I.rectAreaLights.needsUpdate=Q,I.hemisphereLights.needsUpdate=Q}function _i(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(I,Q,de){const ae=oe.get(I);ae.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),oe.get(I.texture).__webglTexture=Q,oe.get(I.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:de,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,Q){const de=oe.get(I);de.__webglFramebuffer=Q,de.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(I,Q=0,de=0){Y=I,ee=Q,W=de;let ae=null,le=!1,Oe=!1;if(I){const He=oe.get(I);if(He.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(j.FRAMEBUFFER,He.__webglFramebuffer),k.copy(I.viewport),J.copy(I.scissor),ze=I.scissorTest,A.viewport(k),A.scissor(J),A.setScissorTest(ze),te=-1;return}else if(He.__webglFramebuffer===void 0)he.setupRenderTarget(I);else if(He.__hasExternalTextures)he.rebindTextures(I,oe.get(I.texture).__webglTexture,oe.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const wt=I.depthTexture;if(He.__boundDepthTexture!==wt){if(wt!==null&&oe.has(wt)&&(I.width!==wt.image.width||I.height!==wt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(I)}}const rt=I.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Oe=!0);const ct=oe.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(ct[Q])?ae=ct[Q][de]:ae=ct[Q],le=!0):I.samples>0&&he.useMultisampledRTT(I)===!1?ae=oe.get(I).__webglMultisampledFramebuffer:Array.isArray(ct)?ae=ct[de]:ae=ct,k.copy(I.viewport),J.copy(I.scissor),ze=I.scissorTest}else k.copy(qe).multiplyScalar(me).floor(),J.copy(Ct).multiplyScalar(me).floor(),ze=Xe;if(de!==0&&(ae=re),A.bindFramebuffer(j.FRAMEBUFFER,ae)&&A.drawBuffers(I,ae),A.viewport(k),A.scissor(J),A.setScissorTest(ze),le){const He=oe.get(I.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+Q,He.__webglTexture,de)}else if(Oe){const He=Q;for(let rt=0;rt<I.textures.length;rt++){const ct=oe.get(I.textures[rt]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+rt,ct.__webglTexture,de,He)}}else if(I!==null&&de!==0){const He=oe.get(I.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,He.__webglTexture,de)}te=-1},this.readRenderTargetPixels=function(I,Q,de,ae,le,Oe,Ye,He=0){if(!(I&&I.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let rt=oe.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ye!==void 0&&(rt=rt[Ye]),rt){A.bindFramebuffer(j.FRAMEBUFFER,rt);try{const ct=I.textures[He],wt=ct.format,Tt=ct.type;if(I.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+He),!O.textureFormatReadable(wt)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!O.textureTypeReadable(Tt)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=I.width-ae&&de>=0&&de<=I.height-le&&j.readPixels(Q,de,ae,le,Ue.convert(wt),Ue.convert(Tt),Oe)}finally{const ct=Y!==null?oe.get(Y).__webglFramebuffer:null;A.bindFramebuffer(j.FRAMEBUFFER,ct)}}},this.readRenderTargetPixelsAsync=async function(I,Q,de,ae,le,Oe,Ye,He=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let rt=oe.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ye!==void 0&&(rt=rt[Ye]),rt)if(Q>=0&&Q<=I.width-ae&&de>=0&&de<=I.height-le){A.bindFramebuffer(j.FRAMEBUFFER,rt);const ct=I.textures[He],wt=ct.format,Tt=ct.type;if(I.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+He),!O.textureFormatReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,ot),j.bufferData(j.PIXEL_PACK_BUFFER,Oe.byteLength,j.STREAM_READ),j.readPixels(Q,de,ae,le,Ue.convert(wt),Ue.convert(Tt),0);const Xt=Y!==null?oe.get(Y).__webglFramebuffer:null;A.bindFramebuffer(j.FRAMEBUFFER,Xt);const hn=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await qA(j,hn,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,ot),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Oe),j.deleteBuffer(ot),j.deleteSync(hn),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,Q=null,de=0){const ae=Math.pow(2,-de),le=Math.floor(I.image.width*ae),Oe=Math.floor(I.image.height*ae),Ye=Q!==null?Q.x:0,He=Q!==null?Q.y:0;he.setTexture2D(I,0),j.copyTexSubImage2D(j.TEXTURE_2D,de,0,0,Ye,He,le,Oe),A.unbindTexture()},this.copyTextureToTexture=function(I,Q,de=null,ae=null,le=0,Oe=0){let Ye,He,rt,ct,wt,Tt,ot,Xt,hn;const yn=I.isCompressedTexture?I.mipmaps[Oe]:I.image;if(de!==null)Ye=de.max.x-de.min.x,He=de.max.y-de.min.y,rt=de.isBox3?de.max.z-de.min.z:1,ct=de.min.x,wt=de.min.y,Tt=de.isBox3?de.min.z:0;else{const _n=Math.pow(2,-le);Ye=Math.floor(yn.width*_n),He=Math.floor(yn.height*_n),I.isDataArrayTexture?rt=yn.depth:I.isData3DTexture?rt=Math.floor(yn.depth*_n):rt=1,ct=0,wt=0,Tt=0}ae!==null?(ot=ae.x,Xt=ae.y,hn=ae.z):(ot=0,Xt=0,hn=0);const rn=Ue.convert(Q.format),kn=Ue.convert(Q.type);let je;Q.isData3DTexture?(he.setTexture3D(Q,0),je=j.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(he.setTexture2DArray(Q,0),je=j.TEXTURE_2D_ARRAY):(he.setTexture2D(Q,0),je=j.TEXTURE_2D),A.activeTexture(j.TEXTURE0),A.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,Q.flipY),A.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),A.pixelStorei(j.UNPACK_ALIGNMENT,Q.unpackAlignment);const oi=A.getParameter(j.UNPACK_ROW_LENGTH),It=A.getParameter(j.UNPACK_IMAGE_HEIGHT),Hi=A.getParameter(j.UNPACK_SKIP_PIXELS),Gi=A.getParameter(j.UNPACK_SKIP_ROWS),Ot=A.getParameter(j.UNPACK_SKIP_IMAGES);A.pixelStorei(j.UNPACK_ROW_LENGTH,yn.width),A.pixelStorei(j.UNPACK_IMAGE_HEIGHT,yn.height),A.pixelStorei(j.UNPACK_SKIP_PIXELS,ct),A.pixelStorei(j.UNPACK_SKIP_ROWS,wt),A.pixelStorei(j.UNPACK_SKIP_IMAGES,Tt);const Cs=I.isDataArrayTexture||I.isData3DTexture,Kt=Q.isDataArrayTexture||Q.isData3DTexture;if(I.isDepthTexture){const _n=oe.get(I),Vr=oe.get(Q),sn=oe.get(_n.__renderTarget),Hr=oe.get(Vr.__renderTarget);A.bindFramebuffer(j.READ_FRAMEBUFFER,sn.__webglFramebuffer),A.bindFramebuffer(j.DRAW_FRAMEBUFFER,Hr.__webglFramebuffer);for(let is=0;is<rt;is++)Cs&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,oe.get(I).__webglTexture,le,Tt+is),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,oe.get(Q).__webglTexture,Oe,hn+is)),j.blitFramebuffer(ct,wt,Ye,He,ot,Xt,Ye,He,j.DEPTH_BUFFER_BIT,j.NEAREST);A.bindFramebuffer(j.READ_FRAMEBUFFER,null),A.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(le!==0||I.isRenderTargetTexture||oe.has(I)){const _n=oe.get(I),Vr=oe.get(Q);A.bindFramebuffer(j.READ_FRAMEBUFFER,ie),A.bindFramebuffer(j.DRAW_FRAMEBUFFER,q);for(let sn=0;sn<rt;sn++)Cs?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,_n.__webglTexture,le,Tt+sn):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,_n.__webglTexture,le),Kt?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Vr.__webglTexture,Oe,hn+sn):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Vr.__webglTexture,Oe),le!==0?j.blitFramebuffer(ct,wt,Ye,He,ot,Xt,Ye,He,j.COLOR_BUFFER_BIT,j.NEAREST):Kt?j.copyTexSubImage3D(je,Oe,ot,Xt,hn+sn,ct,wt,Ye,He):j.copyTexSubImage2D(je,Oe,ot,Xt,ct,wt,Ye,He);A.bindFramebuffer(j.READ_FRAMEBUFFER,null),A.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Kt?I.isDataTexture||I.isData3DTexture?j.texSubImage3D(je,Oe,ot,Xt,hn,Ye,He,rt,rn,kn,yn.data):Q.isCompressedArrayTexture?j.compressedTexSubImage3D(je,Oe,ot,Xt,hn,Ye,He,rt,rn,yn.data):j.texSubImage3D(je,Oe,ot,Xt,hn,Ye,He,rt,rn,kn,yn):I.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Oe,ot,Xt,Ye,He,rn,kn,yn.data):I.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Oe,ot,Xt,yn.width,yn.height,rn,yn.data):j.texSubImage2D(j.TEXTURE_2D,Oe,ot,Xt,Ye,He,rn,kn,yn);A.pixelStorei(j.UNPACK_ROW_LENGTH,oi),A.pixelStorei(j.UNPACK_IMAGE_HEIGHT,It),A.pixelStorei(j.UNPACK_SKIP_PIXELS,Hi),A.pixelStorei(j.UNPACK_SKIP_ROWS,Gi),A.pixelStorei(j.UNPACK_SKIP_IMAGES,Ot),Oe===0&&Q.generateMipmaps&&j.generateMipmap(je),A.unbindTexture()},this.initRenderTarget=function(I){oe.get(I).__webglFramebuffer===void 0&&he.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?he.setTextureCube(I,0):I.isData3DTexture?he.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?he.setTexture2DArray(I,0):he.setTexture2D(I,0),A.unbindTexture()},this.resetState=function(){ee=0,W=0,Y=null,A.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ys}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Gt._getUnpackColorSpace()}}const lS=new Yo,Id=new X;class ME extends tC{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new un(e,3)),this.setAttribute("uv",new un(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Lg(t,6,1);return this.setAttribute("instanceStart",new Ss(n,3,0)),this.setAttribute("instanceEnd",new Ss(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Lg(t,6,1);return this.setAttribute("instanceColorStart",new Ss(n,3,0)),this.setAttribute("instanceColorEnd",new Ss(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new zb(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),lS.setFromBufferAttribute(t),this.boundingBox.union(lS))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ba),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let a=0,l=e.count;a<l;a++)Id.fromBufferAttribute(e,a),i=Math.max(i,n.distanceToSquared(Id)),Id.fromBufferAttribute(t,a),i=Math.max(i,n.distanceToSquared(Id));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}We.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ft},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Zi.line={uniforms:Fa.merge([We.common,We.fog,We.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class wc extends pi{constructor(e){super({type:"LineMaterial",uniforms:Fa.clone(Zi.line.uniforms),vertexShader:Zi.line.vertexShader,fragmentShader:Zi.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const d0=new ln,uS=new X,cS=new X,ui=new ln,ci=new ln,cs=new ln,h0=new X,p0=new dn,fi=new lC,fS=new X,Ud=new Yo,Fd=new Ba,fs=new ln;let gs,Pa;function dS(s,e,t){return fs.set(0,0,-e,1).applyMatrix4(s.projectionMatrix),fs.multiplyScalar(1/fs.w),fs.x=Pa/t.width,fs.y=Pa/t.height,fs.applyMatrix4(s.projectionMatrixInverse),fs.multiplyScalar(1/fs.w),Math.abs(Math.max(fs.x,fs.y))}function sD(s,e){const t=s.matrixWorld,n=s.geometry,i=n.attributes.instanceStart,a=n.attributes.instanceEnd,l=Math.min(n.instanceCount,i.count);for(let c=0,f=l;c<f;c++){fi.start.fromBufferAttribute(i,c),fi.end.fromBufferAttribute(a,c),fi.applyMatrix4(t);const d=new X,p=new X;gs.distanceSqToSegment(fi.start,fi.end,p,d),p.distanceTo(d)<Pa*.5&&e.push({point:p,pointOnLine:d,distance:gs.origin.distanceTo(p),object:s,face:null,faceIndex:c,uv:null,uv1:null})}}function oD(s,e,t){const n=e.projectionMatrix,a=s.material.resolution,l=s.matrixWorld,c=s.geometry,f=c.attributes.instanceStart,d=c.attributes.instanceEnd,p=Math.min(c.instanceCount,f.count),g=-e.near;gs.at(1,cs),cs.w=1,cs.applyMatrix4(e.matrixWorldInverse),cs.applyMatrix4(n),cs.multiplyScalar(1/cs.w),cs.x*=a.x/2,cs.y*=a.y/2,cs.z=0,h0.copy(cs),p0.multiplyMatrices(e.matrixWorldInverse,l);for(let m=0,_=p;m<_;m++){if(ui.fromBufferAttribute(f,m),ci.fromBufferAttribute(d,m),ui.w=1,ci.w=1,ui.applyMatrix4(p0),ci.applyMatrix4(p0),ui.z>g&&ci.z>g)continue;if(ui.z>g){const C=ui.z-ci.z,T=(ui.z-g)/C;ui.lerp(ci,T)}else if(ci.z>g){const C=ci.z-ui.z,T=(ci.z-g)/C;ci.lerp(ui,T)}ui.applyMatrix4(n),ci.applyMatrix4(n),ui.multiplyScalar(1/ui.w),ci.multiplyScalar(1/ci.w),ui.x*=a.x/2,ui.y*=a.y/2,ci.x*=a.x/2,ci.y*=a.y/2,fi.start.copy(ui),fi.start.z=0,fi.end.copy(ci),fi.end.z=0;const M=fi.closestPointToPointParameter(h0,!0);fi.at(M,fS);const y=Qd.lerp(ui.z,ci.z,M),S=y>=-1&&y<=1,b=h0.distanceTo(fS)<Pa*.5;if(S&&b){fi.start.fromBufferAttribute(f,m),fi.end.fromBufferAttribute(d,m),fi.start.applyMatrix4(l),fi.end.applyMatrix4(l);const C=new X,T=new X;gs.distanceSqToSegment(fi.start,fi.end,T,C),t.push({point:T,pointOnLine:C,distance:gs.origin.distanceTo(T),object:s,face:null,faceIndex:m,uv:null,uv1:null})}}}class aD extends Vi{constructor(e=new ME,t=new wc({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let l=0,c=0,f=t.count;l<f;l++,c+=2)uS.fromBufferAttribute(t,l),cS.fromBufferAttribute(n,l),i[c]=c===0?0:i[c-1],i[c+1]=i[c]+uS.distanceTo(cS);const a=new Lg(i,2,1);return e.setAttribute("instanceDistanceStart",new Ss(a,1,0)),e.setAttribute("instanceDistanceEnd",new Ss(a,1,1)),this}raycast(e,t){const n=this.material.worldUnits,i=e.camera;if(i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;const a=e.params.Line2!==void 0&&e.params.Line2.threshold||0;gs=e.ray;const l=this.matrixWorld,c=this.geometry,f=this.material;Pa=f.linewidth+a,c.boundingSphere===null&&c.computeBoundingSphere(),Fd.copy(c.boundingSphere).applyMatrix4(l);let d;if(n)d=Pa*.5;else{const g=Math.max(i.near,Fd.distanceToPoint(gs.origin));d=dS(i,g,f.resolution)}if(Fd.radius+=d,gs.intersectsSphere(Fd)===!1)return;c.boundingBox===null&&c.computeBoundingBox(),Ud.copy(c.boundingBox).applyMatrix4(l);let p;if(n)p=Pa*.5;else{const g=Math.max(i.near,Ud.distanceToPoint(gs.origin));p=dS(i,g,f.resolution)}Ud.expandByScalar(p),gs.intersectsBox(Ud)!==!1&&(n?sD(this,t):oD(this,i,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(d0),this.material.uniforms.resolution.value.set(d0.z,d0.w))}}class th extends ME{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setColors(n),this}setFromPoints(e){const t=e.length-1,n=new Float32Array(6*t);for(let i=0;i<t;i++)n[6*i]=e[i].x,n[6*i+1]=e[i].y,n[6*i+2]=e[i].z||0,n[6*i+3]=e[i+1].x,n[6*i+4]=e[i+1].y,n[6*i+5]=e[i+1].z||0;return super.setPositions(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class m0 extends aD{constructor(e=new th,t=new wc({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const nh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class lu{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const lD=new Ph(-1,1,1,-1,0,1);class uD extends Fn{constructor(){super(),this.setAttribute("position",new un([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new un([0,2,0,0,2,0],2))}}const cD=new uD;class U_{constructor(e){this._mesh=new Vi(cD,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,lD)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class fD extends lu{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof pi?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Fa.clone(e.uniforms),this.material=new pi({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new U_(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class hS extends lu{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let l,c;this.inverse?(l=0,c=1):(l=1,c=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),a.buffers.stencil.setFunc(i.ALWAYS,l,4294967295),a.buffers.stencil.setClear(c),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(i.EQUAL,1,4294967295),a.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),a.buffers.stencil.setLocked(!0)}}class dD extends lu{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class hD{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ft);this._width=n.width,this._height=n.height,t=new rr(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Er}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new fD(nh),this.copyPass.material.blending=ws,this.timer=new rC}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,a=this.passes.length;i<a;i++){const l=this.passes[i];if(l.enabled!==!1){if(l.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),l.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),l.needsSwap){if(n){const c=this.renderer.getContext(),f=this.renderer.state.buffers.stencil;f.setFunc(c.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),f.setFunc(c.EQUAL,1,4294967295)}this.swapBuffers()}hS!==void 0&&(l instanceof hS?n=!0:l instanceof dD&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ft);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class pD extends lu{constructor(e,t,n=null,i=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new yt}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let a,l;this.overrideMaterial!==null&&(l=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=l),e.autoClear=i}}const mD={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new yt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ru extends lu{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ft(e.x,e.y):new ft(256,256),this.clearColor=new yt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),l=Math.round(this.resolution.y/2);this.renderTargetBright=new rr(a,l,{type:Er}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let p=0;p<this.nMips;p++){const g=new rr(a,l,{type:Er});g.texture.name="UnrealBloomPass.h"+p,g.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(g);const m=new rr(a,l,{type:Er});m.texture.name="UnrealBloomPass.v"+p,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),a=Math.round(a/2),l=Math.round(l/2)}const c=mD;this.highPassUniforms=Fa.clone(c.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new pi({uniforms:this.highPassUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader}),this.separableBlurMaterials=[];const f=[6,10,14,18,22];a=Math.round(this.resolution.x/2),l=Math.round(this.resolution.y/2);for(let p=0;p<this.nMips;p++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(f[p])),this.separableBlurMaterials[p].uniforms.invSize.value=new ft(1/a,1/l),a=Math.round(a/2),l=Math.round(l/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Fa.clone(nh.uniforms),this.blendMaterial=new pi({uniforms:this.copyUniforms,vertexShader:nh.vertexShader,fragmentShader:nh.fragmentShader,premultipliedAlpha:!0,blending:Ws,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new yt,this._oldClearAlpha=1,this._basic=new zc,this._fsQuad=new U_(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(n,i),this.renderTargetsVertical[a].setSize(n,i),this.separableBlurMaterials[a].uniforms.invSize.value=new ft(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,a){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const l=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let c=this.renderTargetBright;for(let f=0;f<this.nMips;f++)this._fsQuad.material=this.separableBlurMaterials[f],this.separableBlurMaterials[f].uniforms.colorTexture.value=c.texture,this.separableBlurMaterials[f].uniforms.direction.value=ru.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[f]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[f].uniforms.colorTexture.value=this.renderTargetsHorizontal[f].texture,this.separableBlurMaterials[f].uniforms.direction.value=ru.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[f]),e.clear(),this._fsQuad.render(e),c=this.renderTargetsVertical[f];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=l}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(n*n))/n);return new pi({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ft(.5,.5)},direction:{value:new ft(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new pi({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}ru.BlurDirectionX=new ft(1,0);ru.BlurDirectionY=new ft(0,1);const Od={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class gD extends lu{constructor(){super(),this.isOutputPass=!0,this.uniforms=Fa.clone(Od.uniforms),this.material=new fE({name:Od.name,uniforms:this.uniforms,vertexShader:Od.vertexShader,fragmentShader:Od.fragmentShader}),this._fsQuad=new U_(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Gt.getTransfer(this._outputColorSpace)===Zt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===u_?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===c_?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===f_?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===bh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===h_?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===p_?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===d_&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const _D="/assets/planet-ember-DhCmMkFZ.webp",vD="/assets/planet-glacier-Cq_0Qwda.webp",xD="/assets/planet-violet-BsSDhKA3.webp",yD="/assets/planet-ocean-ClWwW1sN.webp",SD="/assets/nebula-D2QVCqCp.webp";Jt.registerPlugin(St);const g0=[{id:"tradepulse",num:"01",kicker:"FINTECH / REAL-TIME",title:"TRADEPULSE",accent:"#fb7185",copy:"Real-time trading platform concept — live order flow, streaming market data and disciplined execution, straight from my fintech background.",chips:["WEBSOCKETS","ORDER FLOW","MARKET DATA"],url:"tradepulse.app",fig:"FIG. 01 — LIVE EXECUTION",mock:"trade",side:"left"},{id:"ragdesk",num:"02",kicker:"AI / SUPPORT",title:"RAGDESK",accent:"#2dd4bf",copy:"Customer-support copilot — RAG over a vector knowledge base for fast, context-aware answers with sources attached and humans in the loop.",chips:["RAG","VECTOR DB","LLM"],url:"ragdesk.ai",fig:"FIG. 02 — CONTEXT-AWARE ANSWERS",mock:"chat",side:"right"},{id:"flowops",num:"03",kicker:"AGENTS / AUTOMATION",title:"FLOWOPS",accent:"#a78bfa",copy:"Agent pipeline builder — chain LLM agents, queues and guardrails into automations that actually ship work, not demos.",chips:["LLM AGENTS","PIPELINES","GUARDRAILS"],url:"flowops.dev",fig:"FIG. 03 — AGENT PIPELINE",mock:"flow",side:"left"},{id:"designlab",num:"04",kicker:"DESIGN / UI·UX",title:"DESIGNLAB",accent:"#4f6df5",copy:"UI/UX design practice — wireframes, design systems and micro-interactions, always centred on how the product feels to the person using it.",chips:["USER RESEARCH","DESIGN SYSTEM","MICRO-INTERACTIONS"],url:"designlab.studio",fig:"FIG. 04 — DESIGNED AROUND PEOPLE",mock:"design",side:"right"}],Ig=[.16,.4,.64,.88],MD=.085,Sh={st:null,checkpoints:Ig},pS=724242,mS=(s="255,255,255",e="160,190,255")=>{const t=document.createElement("canvas");t.width=128,t.height=128;const n=t.getContext("2d"),i=n.createRadialGradient(64,64,0,64,64,64);return i.addColorStop(0,`rgba(${s},1)`),i.addColorStop(.25,`rgba(${s},0.55)`),i.addColorStop(.6,`rgba(${e},0.14)`),i.addColorStop(1,`rgba(${e},0)`),n.fillStyle=i,n.fillRect(0,0,128,128),new Fb(t)},ED=[[62,1],[38,0],[74,1],[55,0],[81,1],[47,0],[68,1],[90,1],[36,0],[58,1],[44,0],[76,1]],wD=[82,64,51,38,26,15],TD=[76,60,44,33,22,12],AD={trade:G.jsxs("div",{className:"mock-body mock-trade",children:[G.jsxs("div",{className:"mt-ticker",children:[G.jsx("span",{className:"up",children:"BTC 64,120 ▲"}),G.jsx("span",{className:"up",children:"ETH 3,410 ▲"}),G.jsx("span",{className:"down",children:"HSI 18,020 ▼"})]}),G.jsxs("div",{className:"mt-main",children:[G.jsx("div",{className:"mt-candles",children:ED.map(([s,e],t)=>G.jsx("i",{className:e?"up":"down",style:{height:`${s}%`}},t))}),G.jsxs("div",{className:"mt-book",children:[wD.map((s,e)=>G.jsx("div",{className:"row",children:G.jsx("i",{className:"bid",style:{width:`${s}%`}})},`b${e}`)),TD.map((s,e)=>G.jsx("div",{className:"row",children:G.jsx("i",{className:"ask",style:{width:`${s}%`}})},`a${e}`))]})]})]}),chat:G.jsxs("div",{className:"mock-body mock-chat",children:[G.jsxs("div",{className:"mc-row bot",children:[G.jsx("span",{className:"mc-avatar",children:"◆"}),G.jsx("p",{children:"Hi! How can I help with your order?"})]}),G.jsx("div",{className:"mc-row user",children:G.jsx("p",{children:"Where is shipment #8842?"})}),G.jsxs("div",{className:"mc-row bot",children:[G.jsx("span",{className:"mc-avatar",children:"◆"}),G.jsxs("p",{children:["Cleared HK customs 2h ago — ETA tomorrow 10:00.",G.jsx("em",{className:"mc-src",children:"▣ kb://shipping-policy"})]})]}),G.jsxs("div",{className:"mc-row bot typing",children:[G.jsx("span",{className:"mc-avatar",children:"◆"}),G.jsxs("p",{children:[G.jsx("i",{}),G.jsx("i",{}),G.jsx("i",{})]})]})]}),flow:G.jsxs("div",{className:"mock-body mock-flow",children:[G.jsxs("div",{className:"mf-lane",children:[G.jsxs("div",{className:"mf-node ok",children:[G.jsx("b",{children:"TRIGGER"}),G.jsx("span",{children:"webhook"})]}),G.jsx("i",{className:"mf-link"}),G.jsxs("div",{className:"mf-node ok",children:[G.jsx("b",{children:"AGENT"}),G.jsx("span",{children:"llm-runner"})]}),G.jsx("i",{className:"mf-link"}),G.jsxs("div",{className:"mf-node run",children:[G.jsx("b",{children:"GUARD"}),G.jsx("span",{children:"schema check"})]}),G.jsx("i",{className:"mf-link"}),G.jsxs("div",{className:"mf-node idle",children:[G.jsx("b",{children:"DEPLOY"}),G.jsx("span",{children:"queue"})]})]}),G.jsx("div",{className:"mf-log",children:"▸ run #4021 — 3/4 stages passed, guard validating…"})]}),design:G.jsxs("div",{className:"mock-body mock-design",children:[G.jsxs("div",{className:"md-canvas",children:[G.jsxs("div",{className:"md-frame",children:[G.jsx("i",{className:"md-el md-title"}),G.jsx("i",{className:"md-el md-text"}),G.jsx("i",{className:"md-el md-text short"}),G.jsx("i",{className:"md-el md-btn"})]}),G.jsxs("div",{className:"md-panel",children:[G.jsx("span",{className:"md-label",children:"PALETTE"}),G.jsxs("div",{className:"md-swatches",children:[G.jsx("i",{style:{background:"#22d3ee"}}),G.jsx("i",{style:{background:"#a78bfa"}}),G.jsx("i",{style:{background:"#fb7185"}}),G.jsx("i",{style:{background:"#f2f0ea"}})]}),G.jsx("span",{className:"md-label",children:"TYPE"}),G.jsxs("div",{className:"md-type",children:[G.jsx("b",{children:"Aa"}),G.jsx("span",{children:"Display / 48"})]})]})]}),G.jsx("div",{className:"md-note",children:"◆ USER TEST — “the flow just feels right”"})]})},bD=({onActiveChapter:s})=>{const e=Et.useRef(null),t=Et.useRef(null),n=Et.useRef([]),i=Et.useRef(null),a=Et.useRef(null),l=Et.useRef(null),c=Et.useRef(null),[f,d]=Et.useState(!1);return Et.useLayoutEffect(()=>{const p=e.current,g=t.current,m=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let _;try{_=new rD({canvas:g,antialias:!0,powerPreference:"high-performance"})}catch{d(!0);return}_.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),_.setClearColor(pS,1),_.toneMapping=bh,_.toneMappingExposure=1.08;const x=new wb;x.fog=new T_(pS,34,170);const M=new Or(window.innerWidth<768?72:60,1,.1,500),y=new Kb,S=[],b=ne=>{const xe=y.load(ne);return xe.colorSpace=mr,xe.anisotropy=Math.min(8,_.capabilities.getMaxAnisotropy()),S.push(xe),xe},C={ember:b(_D),glacier:b(vD),violet:b(xD),ocean:b(yD)},T=b(SD),P=new hD(_);P.addPass(new pD(x,M));const L=new ru(new ft(window.innerWidth,window.innerHeight),.42,.5,.7);P.addPass(L),P.addPass(new gD),x.add(new eC(8425648,.38));const D=new Jb(16773855,2.5);D.position.set(40,30,20),x.add(D);const w=new Bb([new X(0,1.4,10),new X(5,1.2,-12),new X(-8,3.2,-34),new X(4,.4,-58),new X(-5,4.2,-82),new X(6,1.4,-104),new X(-3,3.4,-128),new X(2,1.6,-148)],!1,"catmullrom",.6),N=700,F=w.getSpacedPoints(N),B=[],z=[],re=[[0,new yt("#fb7185")],[.4,new yt("#2dd4bf")],[.64,new yt("#a78bfa")],[.88,new yt("#4f6df5")],[1,new yt("#8fb4ff")]],ie=ne=>{for(let xe=0;xe<re.length-1;xe++){const[Re,ye]=re[xe],[Se,Me]=re[xe+1];if(ne>=Re&&ne<=Se)return ye.clone().lerp(Me,(ne-Re)/(Se-Re))}return re[re.length-1][1]};F.forEach((ne,xe)=>{B.push(ne.x,ne.y,ne.z);const Re=ie(xe/N);z.push(Re.r,Re.g,Re.b)});const q=new ft(window.innerWidth,window.innerHeight),ee=new th;ee.setPositions(B),ee.setColors(z);const W=new wc({vertexColors:!0,linewidth:window.innerWidth<768?2.6:3.4,transparent:!0,opacity:1});W.resolution.copy(q),x.add(new m0(ee,W));const Y=new th;Y.setPositions(B),Y.setColors(z);const te=new wc({vertexColors:!0,linewidth:window.innerWidth<768?9:12,transparent:!0,opacity:.18,blending:Ws,depthWrite:!1});te.resolution.copy(q),x.add(new m0(Y,te));const U=ne=>{const xe=Math.max(2,Math.floor(ne*N));ee.instanceCount=xe,Y.instanceCount=xe};U(.001);const k=new Fn().setFromPoints(F),J=new Yb({color:16777215,transparent:!0,opacity:.13,dashSize:.6,gapSize:2.4}),ze=new Ib(k,J);ze.computeLineDistances(),x.add(ze);const Ve=[],Be=(ne,xe,Re,ye)=>w.getPointAt(ne).add(new X(xe,Re,ye)),se=(ne,xe,Re,ye={})=>{const Se=new lc;Se.position.copy(Re),Se.rotation.z=ye.tilt??.25;const Me=new Vi(new D_(ne,64,48),new P1({map:xe,color:ye.tint?new yt(ye.tint):16777215,roughness:1,metalness:0}));if(Se.add(Me),Ve.push({obj:Me,speed:ye.spin??.05}),ye.ring){const Ge=($e,H,Te)=>{const _e=new Vi(new L_(ne*$e,ne*H,64),new zc({color:new yt(ye.ring),side:ms,transparent:!0,opacity:Te,depthWrite:!1}));_e.rotation.x=Math.PI/2.25,Se.add(_e)};Ge(1.4,1.72,.3),Ge(1.78,2,.16)}x.add(Se)};se(4.4,C.ember,Be(.2,18,7,-14),{ring:"#ffb347",tilt:.35,spin:.05}),se(3.2,C.glacier,Be(.44,-14,7,-10),{tilt:-.2,spin:.08}),se(7,C.violet,Be(.68,16,-3,-13),{ring:"#c4b0ff",tilt:.5,spin:.035}),se(2.6,C.ocean,Be(.9,-12,6,-10),{spin:.1}),se(1.4,C.ember,new X(-34,18,-70),{spin:.12,tint:"#ff9d9d"}),se(1.8,C.glacier,new X(38,14,-120),{spin:.09,tint:"#9dffcb"}),[[-72,30,-80,52,.4,"#b9a4ff"],[64,22,-60,42,2.1,"#9fb2ff"],[82,34,-120,62,4.4,"#8ff2e4"],[-80,16,-140,56,1.2,"#ffb08c"],[-52,44,-175,68,3.3,"#c7b3ff"],[55,30,-180,58,5.2,"#9fb2ff"],[8,62,-150,70,.9,"#a8fff0"]].forEach(([ne,xe,Re,ye,Se,Me])=>{const Ge=new qm(new Jd({map:T,color:new yt(Me),rotation:Se,transparent:!0,opacity:.3,blending:Ws,depthWrite:!1,fog:!1}));Ge.position.set(ne,xe,Re),Ge.scale.setScalar(ye),x.add(Ge)});const me=new Fn,Ie=[];for(let ne=0;ne<1200;ne++)Ie.push((Math.random()-.5)*240,(Math.random()-.5)*120+20,-Math.random()*260+40);me.setAttribute("position",new un(Ie,3));const Ze=new aE({color:12437990,size:.16,transparent:!0,opacity:.75,sizeAttenuation:!0,fog:!1});x.add(new Ub(me,Ze));const qe=new P1({color:9080734,roughness:1,metalness:.1}),Ct=[];for(let ne=0;ne<34;ne++){const xe=.08+Math.random()*.86,Re=Math.random()>.5?1:-1,ye=new X(Re*(5+Math.random()*12),(Math.random()-.4)*10,(Math.random()-.5)*8),Se=new Vi(new R_(.14+Math.random()*.4,0),qe);Se.position.copy(w.getPointAt(xe).add(ye)),Se.rotation.set(Math.random()*3,Math.random()*3,0),x.add(Se),Ct.push({mesh:Se,ax:(Math.random()-.5)*.8,ay:(Math.random()-.5)*.8})}const Xe=mS("255,244,214","255,180,90"),dt=new qm(new Jd({map:Xe,transparent:!0,opacity:.95,blending:Ws,depthWrite:!1,fog:!1}));dt.position.set(4,4,-170),dt.scale.setScalar(34),x.add(dt);const mt=[];g0.forEach((ne,xe)=>{const Re=Ig[xe],ye=w.getPointAt(Re),Se=w.getTangentAt(Re),Me=(Ge,$e,H=1)=>{const Te=new Vi(new N_(Ge,.045,10,72),new zc({color:new yt(ne.accent),transparent:!0,opacity:$e,blending:Ws,depthWrite:!1}));Te.position.copy(ye),Te.lookAt(ye.clone().add(Se)),Te.scale.setScalar(H),x.add(Te),mt.push(Te)};Me(2.4,.85),Me(2.4,.2,1.35)});const ht=[],ce=[15087942,5205493,10980346];for(let ne=0;ne<3;ne++){const xe=new X((Math.random()-.5)*30,Math.random()*9+4,0),Re=[],ye=Math.random()*.5;for(let Ge=0;Ge<=60;Ge++){const $e=ye+Ge/60*.35,H=w.getPointAt(Math.min(1,$e));Re.push(H.x+xe.x,H.y+xe.y,H.z+xe.z)}const Se=new th;Se.setPositions(Re);const Me=new wc({color:ce[ne],linewidth:1.6,transparent:!0,opacity:.25,blending:Ws,depthWrite:!1});Me.resolution.copy(q),x.add(new m0(Se,Me)),ht.push({mat:Me,phase:Math.random()*Math.PI*2})}const Nt=mS(),Vt=new qm(new Jd({map:Nt,transparent:!0,blending:Ws,depthWrite:!1,opacity:.9}));Vt.scale.setScalar(1.9),x.add(Vt);let Ht=0,it=-1,Ft=!0,j=0;const jt={x:0,y:0},pt=ne=>{jt.x=(ne.clientX/window.innerWidth-.5)*2,jt.y=(ne.clientY/window.innerHeight-.5)*2};window.addEventListener("pointermove",pt);const O=()=>{const ne=window.innerWidth,xe=window.innerHeight;_.setSize(ne,xe,!1),P.setSize(ne,xe),M.aspect=ne/xe,M.updateProjectionMatrix(),q.set(ne,xe),W.resolution.copy(q),te.resolution.copy(q),ht.forEach(Re=>Re.mat.resolution.copy(q))};O(),window.addEventListener("resize",O);const A=new X,Z=new X,oe=new X,he=new X,De=St.create({trigger:p,start:"top top",end:"+=400%",pin:!0,anticipatePin:1,refreshPriority:1,onUpdate:ne=>{Ht=ne.progress},onToggle:ne=>{Ft=ne.isActive}});Sh.st=De;let be="";const ge=(ne,xe)=>{if(!Ft&&it>=0&&Math.abs(Ht-it)<5e-4)return;const Re=Math.min(xe/1e3,.05);j+=Re,it<0&&(it=Ht),it+=(Ht-it)*(1-Math.exp(-Re*7));const ye=Qd.clamp(it,5e-4,1);U(ye),w.getPointAt(ye,A),Vt.position.copy(A),Vt.material.opacity=.5+Math.sin(j*6)*.15,w.getTangentAt(ye,he),Z.copy(A).addScaledVector(he,-7.5).add(new X(jt.x*.9,2.3-jt.y*.6,0)),M.position.lerp(Z,m?1:.3),oe.copy(A).addScaledVector(he,4),oe.y+=.6,M.lookAt(oe),mt.forEach((H,Te)=>{H.rotation.z+=Re*(Te%2?.5:-.35)}),Ve.forEach(H=>{H.obj.rotation.y+=Re*H.speed}),Ct.forEach(H=>{H.mesh.rotation.x+=Re*H.ax,H.mesh.rotation.y+=Re*H.ay}),ht.forEach((H,Te)=>{H.mat.opacity=.12+.18*(.5+.5*Math.sin(j*(.9+Te*.3)+H.phase))}),dt.material.opacity=.85+Math.sin(j*1.6)*.1;let Se=-1,Me=1;n.current.forEach((H,Te)=>{if(!H)return;const _e=Math.abs(it-Ig[Te]);_e<Me&&(Me=_e,Se=Te);const Ue=Qd.clamp(1-_e/MD,0,1),Fe=Ue*Ue*(3-2*Ue);H.style.opacity=String(Fe),H.style.setProperty("--fc-shift",`${(1-Fe)*34}px`),H.style.pointerEvents=Fe>.5?"auto":"none"}),a.current&&(a.current.style.transform=`scaleX(${it})`);const Ge=Qd.clamp((it-.92)/.08,0,1),$e=Ge*Ge*(3-2*Ge);if(c.current&&(c.current.style.opacity=String($e)),l.current&&(l.current.style.opacity=String(1-$e)),Se>=0&&i.current){const H=g0[Se],Te=`LEG ${H.num}/04 — ${H.title}`;i.current.textContent!==Te&&(i.current.textContent=Te),Ft&&Me<.12&&be!==H.id&&(be=H.id,s==null||s(H.id))}P.render()};return Jt.ticker.add(ge),()=>{Jt.ticker.remove(ge),window.removeEventListener("resize",O),window.removeEventListener("pointermove",pt),De.kill(),Sh.st=null,x.traverse(ne=>{var ye;const xe=ne;xe.geometry&&xe.geometry.dispose();const Re=xe.material;Re&&((ye=Re.map)==null||ye.dispose(),Re.dispose())}),Nt.dispose(),Xe.dispose(),S.forEach(ne=>ne.dispose()),P.dispose(),_.dispose()}},[]),G.jsxs("div",{className:`flight ${f?"flight-fallback":""}`,id:"journey",ref:e,children:[G.jsx("canvas",{className:"flight-canvas",ref:t}),g0.map((p,g)=>G.jsxs("article",{className:`flight-card side-${p.side}`,id:p.id,ref:m=>{n.current[g]=m},style:{"--accent":p.accent},children:[G.jsxs("header",{className:"fc-head",children:[G.jsx("span",{className:"fc-num",children:p.num}),G.jsxs("div",{children:[G.jsxs("span",{className:"fc-kicker",children:[G.jsx("span",{className:"dot",children:"◆"})," ",p.kicker]}),G.jsx("h2",{className:"fc-title",children:p.title})]})]}),G.jsxs("figure",{className:"fc-mock",children:[G.jsxs("div",{className:"mock-bar",children:[G.jsx("i",{}),G.jsx("i",{}),G.jsx("i",{}),G.jsx("span",{className:"mock-url",children:p.url})]}),AD[p.mock],G.jsx("figcaption",{children:p.fig})]}),G.jsx("p",{className:"fc-copy",children:p.copy}),G.jsx("ul",{className:"fc-chips",children:p.chips.map(m=>G.jsx("li",{children:m},m))})]},p.id)),G.jsx("div",{className:"flight-landing",ref:c,"aria-hidden":"true"}),G.jsxs("div",{className:"flight-hud",ref:l,"aria-hidden":"true",children:[G.jsx("span",{className:"hud-leg",ref:i,children:"LEG 01/04 — TRADEPULSE"}),G.jsx("div",{className:"hud-bar",children:G.jsx("div",{className:"hud-bar-fill",ref:a})}),G.jsx("span",{className:"hud-hint",children:"KEEP SCROLLING — FOLLOW THE LINE"})]})]})},EE=({text:s})=>G.jsx(G.Fragment,{children:s.split(" ").map((e,t)=>G.jsx("span",{className:"w",children:e.split("").map((n,i)=>G.jsx("span",{className:"cm",children:G.jsx("span",{className:"c",children:n})},i))},t))});Jt.registerPlugin(ns,St);const CD=()=>{const s=Et.useRef(null),e=Et.useRef(null);return ns(()=>{const t=s.current,n=e.current,i=n.getTotalLength();Jt.set(n,{strokeDasharray:i,strokeDashoffset:i}),Jt.to(n,{strokeDashoffset:0,ease:"none",scrollTrigger:{trigger:t,start:"top bottom",end:"top 20%",scrub:.5}}),Jt.fromTo(".jc-end",{autoAlpha:0,scale:.4,transformOrigin:"50% 50%"},{autoAlpha:1,scale:1,duration:.5,ease:"back.out(2)",scrollTrigger:{trigger:t,start:"top 24%",toggleActions:"play none none none"}})},{scope:s}),G.jsxs("section",{className:"sec",id:"toolkit",ref:s,children:[G.jsxs("svg",{className:"journey-curve",viewBox:"0 0 1440 640",preserveAspectRatio:"none","aria-hidden":"true",children:[G.jsx("defs",{children:G.jsxs("linearGradient",{id:"jc-grad",x1:"0",y1:"0",x2:"0",y2:"1",children:[G.jsx("stop",{offset:"0",stopColor:"#22d3ee"}),G.jsx("stop",{offset:"1",stopColor:"#a78bfa"})]})}),G.jsx("path",{ref:e,d:"M 720 0 C 750 120, 520 160, 470 260 C 420 360, 980 340, 950 460 C 925 560, 420 570, 215 610",fill:"none",stroke:"url(#jc-grad)",strokeWidth:"2.5",strokeLinecap:"round",vectorEffect:"non-scaling-stroke"}),G.jsx("text",{className:"jc-end",x:"215",y:"618",textAnchor:"middle",children:"◆"})]}),G.jsxs("div",{className:"sec-inner",children:[G.jsxs("header",{className:"sec-head",children:[G.jsx("span",{className:"sec-num",children:"05"}),G.jsxs("div",{className:"sec-head-text",children:[G.jsxs("span",{className:"sec-kicker",children:[G.jsx("span",{className:"dot",children:"◆"})," STACK + BEYOND CODE"]}),G.jsx("h2",{className:"sec-title",children:G.jsx(EE,{text:"THE TOOLKIT"})})]}),G.jsx("div",{className:"sec-rule"})]}),G.jsx("div",{className:"toolkit-grid",children:oA.map(t=>G.jsxs("div",{className:"tool-card",children:[G.jsx("img",{src:t.icon,alt:t.name,loading:"lazy"}),G.jsxs("div",{children:[G.jsx("h3",{children:t.name}),G.jsx("p",{children:t.desc})]})]},t.name))}),G.jsx("div",{className:"knowledge-grid",children:aA.map(t=>G.jsxs("div",{className:"knowledge-tile",children:[G.jsx("span",{className:"k-idx",children:t.idx}),G.jsx("h3",{children:t.title}),G.jsx("p",{children:t.copy})]},t.idx))})]})]})},RD=s=>Math.min(1,Math.max(0,s)),PD=({src:s,play:e,onReady:t,className:n,step:i=3,scatter:a=150})=>{const l=Et.useRef(null),c=Et.useRef(null),f=Et.useRef(!1),d=Et.useRef(0),p=Et.useRef(t);return p.current=t,Et.useEffect(()=>{const g=new Image;return g.src=s,g.onload=()=>{var m;c.current=g,(m=p.current)==null||m.call(p,!0)},g.onerror=()=>{var m;return(m=p.current)==null?void 0:m.call(p,!1)},()=>{g.onload=null,g.onerror=null}},[s]),Et.useEffect(()=>{if(!e||f.current)return;const g=l.current,m=c.current;if(!g||!m)return;f.current=!0;const _=g.getContext("2d"),x=Math.min(window.devicePixelRatio||1,2),M=g.clientWidth,y=g.clientHeight;if(M<=0||y<=0)return;g.width=M*x,g.height=y*x,_.scale(x,x);const S=Math.min(M/m.width,y/m.height),b=m.width*S,C=m.height*S,T=(M-b)/2,P=y-C,L=()=>{_.setTransform(x,0,0,x,0,0),_.globalAlpha=1,_.clearRect(0,0,M,y),_.drawImage(m,T,P,b,C)};if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){L();return}let D;try{const ie=document.createElement("canvas");ie.width=M,ie.height=y;const q=ie.getContext("2d",{willReadFrequently:!0});q.drawImage(m,T,P,b,C),D=q.getImageData(0,0,M,y).data}catch{L();return}const w=[];for(let ie=0;ie<y;ie+=i)for(let q=0;q<M;q+=i){const ee=(ie*M+q)*4,W=D[ee+3];if(W<30)continue;const Y=Math.random()*Math.PI*2,te=Math.random()*a;w.push({tx:q,ty:ie,x:q+Math.cos(Y)*te,y:ie+Math.sin(Y)*te,r:D[ee],g:D[ee+1],b:D[ee+2],a:W/255,d:Math.random()})}const N=i+.6,F=ie=>1-Math.pow(1-ie,3);let B=0;const z=ie=>{B||(B=ie);const q=ie-B;_.clearRect(0,0,M,y);let ee=!0;for(const W of w){const Y=RD((q-650*W.d)/1500),te=F(Y),U=W.x+(W.tx-W.x)*te,k=W.y+(W.ty-W.y)*te;_.globalAlpha=W.a*Y,_.fillStyle=`rgb(${W.r},${W.g},${W.b})`,_.fillRect(U,k,N,N),Y<1&&(ee=!1)}ee?L():d.current=requestAnimationFrame(z)};d.current=requestAnimationFrame(z);const re=window.setTimeout(()=>{B||L()},4500);return()=>{cancelAnimationFrame(d.current),window.clearTimeout(re)}},[e,i,a]),G.jsx("canvas",{ref:l,className:n})},LD="/assets/pixel-horus-CfQGoiXi.png";Jt.registerPlugin(ns,St);const DD=()=>{const s=Et.useRef(null),e=Et.useRef(null),[t,n]=Et.useState(!1),[i,a]=Et.useState(!1),[l,c]=Et.useState(!1),f=(t||l)&&i;return Et.useEffect(()=>{if(!i||t)return;const d=window.setTimeout(()=>c(!0),4e3);return()=>window.clearTimeout(d)},[i,t]),ns(()=>{const d=s.current,p=g=>{const m=e.current;if(!m)return;const _=Math.hypot(m.offsetWidth/2,m.offsetHeight/2)+2,x=g*_,M=`radial-gradient(circle at 50% 50%, transparent ${x}px, #000 ${x+1}px)`;m.style.webkitMaskImage=M,m.style.maskImage=M};St.create({trigger:d,start:"top bottom",end:"top top",onUpdate:g=>p(g.progress),onRefresh:g=>p(g.progress)}),Jt.fromTo(".contact-parallax",{yPercent:-14},{yPercent:0,ease:"none",scrollTrigger:{trigger:d,start:"top bottom",end:"top top",scrub:!0}}),St.create({trigger:d,start:"top 68%",once:!0,onEnter:()=>a(!0)})},{scope:s}),ns(()=>{if(!f)return;Jt.timeline({defaults:{ease:"power3.out"}}).to(s.current,{"--sec-alpha":1,duration:.01}).from(".sec-num",{y:46,autoAlpha:0,duration:1},0).from(".sec-title .c",{yPercent:120,duration:.85,stagger:.045},.05).from(".sec-rule",{scaleX:0,duration:1.3,ease:"power2.inOut"},.1),s.current.classList.add("in")},{scope:s,dependencies:[f]}),G.jsxs("section",{className:"sec contact-sec",id:"contact",ref:s,"data-shown":f?"1":"0",children:[G.jsx("div",{className:"curtain","aria-hidden":"true",ref:e}),G.jsxs("div",{className:"sec-inner contact-parallax",children:[G.jsxs("header",{className:"sec-head",children:[G.jsx("span",{className:"sec-num",children:"06"}),G.jsxs("div",{className:"sec-head-text",children:[G.jsxs("span",{className:"sec-kicker",children:[G.jsx("span",{className:"dot",children:"◆"})," FINAL APPROACH"]}),G.jsx("h2",{className:"sec-title",children:G.jsx(EE,{text:"LET'S CONNECT"})})]}),G.jsx("div",{className:"sec-rule"})]}),G.jsxs("div",{className:"contact-grid",children:[G.jsxs("div",{className:"contact-left",children:[G.jsx(PD,{className:"pixel-canvas",src:LD,play:f,onReady:d=>n(d)}),G.jsx("p",{className:"lede mask-line",style:{"--d":"0.35s"},children:G.jsx("span",{children:"Let's build something"})}),G.jsxs("div",{className:"cta-big",children:[G.jsx("span",{className:"mask-line",style:{"--d":"0.52s"},children:G.jsx("span",{children:"OUT OF"})}),G.jsx("span",{className:"mask-line",style:{"--d":"0.66s"},children:G.jsx("span",{children:"THIS WORLD"})})]}),G.jsx("ul",{className:"contact-links",children:[["mailto:horuscheung.coding@gmail.com","horuscheung.coding@gmail.com","0.85s"],["https://github.com/horuscheung","github.com/horuscheung","0.97s"],["https://linkedin.com/in/horuscheung","linkedin.com/in/horuscheung","1.09s"]].map(([d,p,g])=>G.jsx("li",{className:"mask-line",style:{"--d":g},children:G.jsx("a",{href:d,...d.startsWith("http")?{target:"_blank",rel:"noopener noreferrer"}:{},children:p})},p))})]}),G.jsx("form",{className:"contact-form mask-line",style:{"--d":"0.75s"},action:"mailto:horuscheung.coding@gmail.com",method:"post",encType:"text/plain",children:G.jsxs("div",{className:"form-body",children:[G.jsxs("div",{children:[G.jsx("label",{htmlFor:"name",children:"Name"}),G.jsx("input",{type:"text",id:"name",name:"name",placeholder:"Your name",required:!0})]}),G.jsxs("div",{children:[G.jsx("label",{htmlFor:"email",children:"Email"}),G.jsx("input",{type:"email",id:"email",name:"email",placeholder:"your.email@example.com",required:!0})]}),G.jsxs("div",{children:[G.jsx("label",{htmlFor:"message",children:"Message"}),G.jsx("textarea",{id:"message",name:"message",rows:5,placeholder:"Your message...",required:!0})]}),G.jsxs("button",{type:"submit",className:"btn-primary",children:["Send message",G.jsx("svg",{width:"16",height:"12",viewBox:"0 0 16 12",fill:"none",children:G.jsx("path",{d:"M1 6 H 14 M9 1 L 15 6 L 9 11",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})})]})]})})]})]})]})},ND=()=>G.jsxs("footer",{className:"footer",children:[G.jsxs("span",{children:["© ",new Date().getFullYear()," HORUS CHEUNG"]}),G.jsx("div",{className:"footer-social",children:HM.map(({href:s,icon:e,alt:t})=>G.jsx("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:G.jsx("img",{src:e,alt:t})},t))})]});var gS="1.3.25";function wE(s,e,t){return Math.max(s,Math.min(e,t))}function ID(s,e,t){return(1-t)*s+t*e}function UD(s,e,t,n){return ID(s,e,1-Math.exp(-t*n))}function FD(s,e){return(s%e+e)%e}var OD=class{constructor(){et(this,"isRunning",!1);et(this,"value",0);et(this,"from",0);et(this,"to",0);et(this,"currentTime",0);et(this,"lerp");et(this,"duration");et(this,"easing");et(this,"onUpdate")}advance(s){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=s;const n=wE(0,this.currentTime/this.duration,1);e=n>=1;const i=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=UD(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(s,e,{lerp:t,duration:n,easing:i,onStart:a,onUpdate:l}){this.from=this.value=s,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,a==null||a(),this.onUpdate=l}};function kD(s,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,s.apply(this,n)},e)}}var BD=class{constructor(s,e,{autoResize:t=!0,debounce:n=250}={}){et(this,"width",0);et(this,"height",0);et(this,"scrollHeight",0);et(this,"scrollWidth",0);et(this,"debouncedResize");et(this,"wrapperResizeObserver");et(this,"contentResizeObserver");et(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});et(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});et(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=e,t&&(this.debouncedResize=kD(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var s,e;(s=this.wrapperResizeObserver)==null||s.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},TE=class{constructor(){et(this,"events",{})}emit(s,...e){var n;const t=this.events[s]||[];for(let i=0,a=t.length;i<a;i++)(n=t[i])==null||n.call(t,...e)}on(s,e){return this.events[s]?this.events[s].push(e):this.events[s]=[e],()=>{var t;this.events[s]=(t=this.events[s])==null?void 0:t.filter(n=>e!==n)}}off(s,e){var t;this.events[s]=(t=this.events[s])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}};const zD=100/6,bo={passive:!1};function _S(s,e){return s===1?zD:s===2?e:1}var VD=class{constructor(s,e={wheelMultiplier:1,touchMultiplier:1}){et(this,"touchStart",{x:0,y:0});et(this,"lastDelta",{x:0,y:0});et(this,"window",{width:0,height:0});et(this,"emitter",new TE);et(this,"onTouchStart",s=>{const{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});et(this,"onTouchMove",s=>{const{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:s})});et(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});et(this,"onWheel",s=>{let{deltaX:e,deltaY:t,deltaMode:n}=s;const i=_S(n,this.window.width),a=_S(n,this.window.height);e*=i,t*=a,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:s})});et(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,bo),this.element.addEventListener("touchstart",this.onTouchStart,bo),this.element.addEventListener("touchmove",this.onTouchMove,bo),this.element.addEventListener("touchend",this.onTouchEnd,bo)}on(s,e){return this.emitter.on(s,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,bo),this.element.removeEventListener("touchstart",this.onTouchStart,bo),this.element.removeEventListener("touchmove",this.onTouchMove,bo),this.element.removeEventListener("touchend",this.onTouchEnd,bo)}};const vS=s=>Math.min(1,1.001-2**(-10*s));var HD=class{constructor({wrapper:s=window,content:e=document.documentElement,eventsTarget:t=s,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:a=.075,touchInertiaExponent:l=1.7,duration:c,easing:f,lerp:d=.1,infinite:p=!1,orientation:g="vertical",gestureOrientation:m=g==="horizontal"?"both":"vertical",touchMultiplier:_=1,wheelMultiplier:x=1,autoResize:M=!0,prevent:y,virtualScroll:S,overscroll:b=!0,autoRaf:C=!1,anchors:T=!1,autoToggle:P=!1,allowNestedScroll:L=!1,__experimental__naiveDimensions:D=!1,naiveDimensions:w=D,stopInertiaOnNavigate:N=!1}={}){et(this,"_isScrolling",!1);et(this,"_isStopped",!1);et(this,"_isLocked",!1);et(this,"_preventNextNativeScrollEvent",!1);et(this,"_resetVelocityTimeout",null);et(this,"_rafId",null);et(this,"_isDraggingSelection",!1);et(this,"isTouching");et(this,"isIos");et(this,"time",0);et(this,"userData",{});et(this,"lastVelocity",0);et(this,"velocity",0);et(this,"direction",0);et(this,"options");et(this,"targetScroll");et(this,"animatedScroll");et(this,"animate",new OD);et(this,"emitter",new TE);et(this,"dimensions");et(this,"virtualScroll");et(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});et(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});et(this,"onTransitionEnd",s=>{var e;(e=s.propertyName)!=null&&e.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()});et(this,"onClick",s=>{const e=s.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(i=>t.host===i.host&&t.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,a=decodeURIComponent(n.hash);this.scrollTo(a,i);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});et(this,"onPointerDown",s=>{s.button===1&&this.reset()});et(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;const{deltaX:e,deltaY:t,event:n}=s;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),a=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const l=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&l&&!this.isStopped&&!this.isLocked){this.reset();return}const c=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(l||c)return;let f=n.composedPath();f=f.slice(0,f.indexOf(this.rootElement));const d=this.options.prevent,p=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(f.find(x=>{var M,y,S,b,C;return x instanceof HTMLElement&&(typeof d=="function"&&(d==null?void 0:d(x))||((M=x.hasAttribute)==null?void 0:M.call(x,"data-lenis-prevent"))||p==="vertical"&&((y=x.hasAttribute)==null?void 0:y.call(x,"data-lenis-prevent-vertical"))||p==="horizontal"&&((S=x.hasAttribute)==null?void 0:S.call(x,"data-lenis-prevent-horizontal"))||i&&((b=x.hasAttribute)==null?void 0:b.call(x,"data-lenis-prevent-touch"))||a&&((C=x.hasAttribute)==null?void 0:C.call(x,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(x,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&a)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let g=t;this.options.gestureOrientation==="both"?g=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(g=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const m=i&&this.options.syncTouch,_=i&&n.type==="touchend";_&&(g=Math.sign(g)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+g,{programmatic:!1,...m?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});et(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});et(this,"raf",s=>{const e=s-(this.time||s);this.time=s,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=gS,window.lenis||(window.lenis={}),window.lenis.version=gS,g==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof c=="number"&&typeof f!="function"?f=vS:typeof f=="function"&&typeof c!="number"&&(c=1),this.options={wrapper:s,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:a,touchInertiaExponent:l,duration:c,easing:f,lerp:d,infinite:p,gestureOrientation:m,orientation:g,touchMultiplier:_,wheelMultiplier:x,autoResize:M,prevent:y,virtualScroll:S,overscroll:b,autoRaf:C,anchors:T,autoToggle:P,allowNestedScroll:L,naiveDimensions:w,stopInertiaOnNavigate:N},this.dimensions=new BD(s,e,{autoResize:M}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new VD(t,{touchMultiplier:_,wheelMultiplier:x}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,e){return this.emitter.on(s,e)}off(s,e){return this.emitter.off(s,e)}get overflow(){const s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}isTouchOnSelectionHandle(s){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=s.targetTouches[0]??s.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],a=n[n.length-1],l=40,c=Math.hypot(t.clientX-i.left,t.clientY-i.top)<=l,f=Math.hypot(t.clientX-a.right,t.clientY-a.bottom)<=l;return c||f}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:a=i?this.options.lerp:void 0,duration:l=i?this.options.duration:void 0,easing:c=i?this.options.easing:void 0,onStart:f,onComplete:d,force:p=!1,userData:g}={}){if((this.isStopped||this.isLocked)&&!p)return;let m=s,_=e;if(typeof m=="string"&&["top","left","start","#"].includes(m))m=0;else if(typeof m=="string"&&["bottom","right","end"].includes(m))m=this.limit;else{let x=null;if(typeof m=="string"?(x=m.startsWith("#")?document.getElementById(m.slice(1)):document.querySelector(m),x||(m==="#top"?m=0:console.warn("Lenis: Target not found",m))):m instanceof HTMLElement&&(m!=null&&m.nodeType)&&(x=m),x){if(this.options.wrapper!==window){const T=this.rootElement.getBoundingClientRect();_-=this.isHorizontal?T.left:T.top}const M=x.getBoundingClientRect(),y=getComputedStyle(x),S=this.isHorizontal?Number.parseFloat(y.scrollMarginLeft):Number.parseFloat(y.scrollMarginTop),b=getComputedStyle(this.rootElement),C=this.isHorizontal?Number.parseFloat(b.scrollPaddingLeft):Number.parseFloat(b.scrollPaddingTop);m=(this.isHorizontal?M.left:M.top)+this.animatedScroll-(Number.isNaN(S)?0:S)-(Number.isNaN(C)?0:C)}}if(typeof m=="number"){if(m+=_,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const x=m-this.animatedScroll;x>this.limit/2?m-=this.limit:x<-this.limit/2&&(m+=this.limit)}}else m=wE(0,m,this.limit);if(m===this.targetScroll){f==null||f(this),d==null||d(this);return}if(this.userData=g??{},t){this.animatedScroll=this.targetScroll=m,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),d==null||d(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=m),typeof l=="number"&&typeof c!="function"?c=vS:typeof c=="function"&&typeof l!="number"&&(l=1),this.animate.fromTo(this.animatedScroll,m,{duration:l,easing:c,lerp:a,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",f==null||f(this)},onUpdate:(x,M)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=x-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=x,this.setScroll(this.scroll),i&&(this.targetScroll=x),M||this.emit(),M&&(this.reset(),this.emit(),d==null||d(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:e,deltaY:t}){const n=Date.now();s._lenis||(s._lenis={});const i=s._lenis;let a,l,c,f,d,p,g,m,_,x;if(n-(i.time??0)>2e3){i.time=Date.now();const L=window.getComputedStyle(s);if(i.computedStyle=L,a=["auto","overlay","scroll"].includes(L.overflowX),l=["auto","overlay","scroll"].includes(L.overflowY),d=["auto"].includes(L.overscrollBehaviorX),p=["auto"].includes(L.overscrollBehaviorY),i.hasOverflowX=a,i.hasOverflowY=l,!(a||l))return!1;g=s.scrollWidth,m=s.scrollHeight,_=s.clientWidth,x=s.clientHeight,c=g>_,f=m>x,i.isScrollableX=c,i.isScrollableY=f,i.scrollWidth=g,i.scrollHeight=m,i.clientWidth=_,i.clientHeight=x,i.hasOverscrollBehaviorX=d,i.hasOverscrollBehaviorY=p}else c=i.isScrollableX,f=i.isScrollableY,a=i.hasOverflowX,l=i.hasOverflowY,g=i.scrollWidth,m=i.scrollHeight,_=i.clientWidth,x=i.clientHeight,d=i.hasOverscrollBehaviorX,p=i.hasOverscrollBehaviorY;if(!(a&&c||l&&f))return!1;const M=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let y,S,b,C,T,P;if(M==="horizontal")y=Math.round(s.scrollLeft),S=g-_,b=e,C=a,T=c,P=d;else if(M==="vertical")y=Math.round(s.scrollTop),S=m-x,b=t,C=l,T=f,P=p;else return!1;return!P&&(y>=S||y<=0)?!0:(b>0?y<S:y>0)&&C&&T}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?FD(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(const s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}};Jt.registerPlugin(St);const su={lenis:null},xS=s=>{const e=document.getElementById(s);e&&(su.lenis?su.lenis.scrollTo(e,{duration:1.4}):e.scrollIntoView({behavior:"smooth"}))};function GD(){Et.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const e=new HD({lerp:.115});su.lenis=e,e.on("scroll",St.update);const t=n=>e.raf(n*1e3);return Jt.ticker.add(t),Jt.ticker.lagSmoothing(0),()=>{Jt.ticker.remove(t),e.destroy(),su.lenis=null}},[])}Jt.registerPlugin(ns,St);const WD=()=>{GD();const s=Et.useRef(null),[e,t]=Et.useState(""),[n,i]=Et.useState(!1),[a,l]=Et.useState(!1);Et.useEffect(()=>{const f=()=>l(window.innerWidth<768);return f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[]);const c=(f,d)=>{const p=Sh.st;if(d>=0&&p){const g=p.start+Sh.checkpoints[d]*(p.end-p.start);su.lenis?su.lenis.scrollTo(g,{duration:1.6}):window.scrollTo({top:g,behavior:"smooth"})}else xS(f)};return ns(()=>{Jt.to(".scroll-progress",{scaleX:1,ease:"none",scrollTrigger:{start:0,end:"max",scrub:.3}}),St.create({start:40,end:"max",onToggle:d=>i(d.isActive)}),["toolkit","contact"].forEach(d=>{St.create({trigger:`#${d}`,start:"top center",end:"bottom center",onToggle:p=>{p.isActive?t(d):t(g=>g===d?"":g)}})});const f=Jt.timeline({defaults:{ease:"power3.out"}});f.from(".hero-title .c",{yPercent:120,duration:.9,stagger:.03}).from(".hero-eyebrow, .hero-scramble, .hero-desc",{y:24,autoAlpha:0,duration:.7,stagger:.12},"-=0.5").from(".hero-art",{y:60,autoAlpha:0,rotate:6,duration:.9},"-=0.6").from(".hero-cue",{autoAlpha:0,duration:.6},"-=0.3"),Jt.utils.toArray(".hero-deco path").forEach((d,p)=>{const g=d.getTotalLength();Jt.set(d,{strokeDasharray:g,strokeDashoffset:g}),f.to(d,{strokeDashoffset:0,duration:1.2,ease:"power2.inOut"},.4+p*.25)}),Jt.to(".hero-inner",{yPercent:-14,autoAlpha:.15,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:!0}}),Jt.to(".hero-cue",{autoAlpha:0,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"20% top",scrub:!0}}),Jt.utils.toArray(".sec:not(.contact-sec)").forEach(d=>{const p=(g,m,_="top 68%")=>{const x=typeof g=="string"?d.querySelectorAll(g):g;x.length&&Jt.from(x,{...m,scrollTrigger:{trigger:d,start:_,toggleActions:"play none none none"}})};p(".sec-title .c",{yPercent:120,duration:.7,stagger:.03,ease:"power3.out"}),p(".sec-num",{y:46,autoAlpha:0,duration:.8,ease:"power3.out"}),p(".sec-rule",{scaleX:0,duration:1,ease:"power2.inOut"}),p(".reveal",{y:46,autoAlpha:0,duration:.75,stagger:.1,ease:"power3.out"},"top 58%")}),Jt.set(".tool-card, .knowledge-tile",{autoAlpha:0,y:40}),St.batch(".tool-card, .knowledge-tile",{start:"top 88%",once:!0,onEnter:d=>Jt.to(d,{y:0,autoAlpha:1,stagger:.07,duration:.9,ease:"power2.out"})})},{scope:s}),G.jsxs("div",{className:"site",ref:s,children:[!a&&G.jsx(JT,{}),G.jsx("div",{className:"scroll-progress","aria-hidden":"true"}),G.jsx(cA,{active:e,scrolled:n,onNavigate:c,onHome:()=>xS("hero")}),G.jsxs("main",{className:"page",children:[G.jsx(dA,{}),G.jsx(Qy,{items:lA}),G.jsx(bD,{onActiveChapter:t}),G.jsx(Qy,{items:uA,reverse:!0,speed:26}),G.jsx(CD,{}),G.jsx("div",{className:"pre-contact-spacer","aria-hidden":"true"}),G.jsx(DD,{})]}),G.jsx(ND,{})]})};h2.createRoot(document.getElementById("root")).render(G.jsx(Et.StrictMode,{children:G.jsx(WD,{})}));
