(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();var _m={exports:{}},$l={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uv;function yS(){if(Uv)return $l;Uv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return $l.Fragment=e,$l.jsx=n,$l.jsxs=n,$l}var jv;function _S(){return jv||(jv=1,_m.exports=yS()),_m.exports}var M=_S(),vm={exports:{}},Se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv;function vS(){if(zv)return Se;zv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),R=Symbol.iterator;function S(A){return A===null||typeof A!="object"?null:(A=R&&A[R]||A["@@iterator"],typeof A=="function"?A:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,ne={};function J(A,F,Z){this.props=A,this.context=F,this.refs=ne,this.updater=Z||B}J.prototype.isReactComponent={},J.prototype.setState=function(A,F){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,F,"setState")},J.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function ye(){}ye.prototype=J.prototype;function ie(A,F,Z){this.props=A,this.context=F,this.refs=ne,this.updater=Z||B}var he=ie.prototype=new ye;he.constructor=ie,K(he,J.prototype),he.isPureReactComponent=!0;var Te=Array.isArray,me={H:null,A:null,T:null,S:null,V:null},Oe=Object.prototype.hasOwnProperty;function P(A,F,Z,te,ge,Ie){return Z=Ie.ref,{$$typeof:r,type:A,key:F,ref:Z!==void 0?Z:null,props:Ie}}function b(A,F){return P(A.type,F,void 0,void 0,void 0,A.props)}function C(A){return typeof A=="object"&&A!==null&&A.$$typeof===r}function O(A){var F={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(Z){return F[Z]})}var x=/\/+/g;function V(A,F){return typeof A=="object"&&A!==null&&A.key!=null?O(""+A.key):F.toString(36)}function N(){}function mt(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(N,N):(A.status="pending",A.then(function(F){A.status==="pending"&&(A.status="fulfilled",A.value=F)},function(F){A.status==="pending"&&(A.status="rejected",A.reason=F)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function et(A,F,Z,te,ge){var Ie=typeof A;(Ie==="undefined"||Ie==="boolean")&&(A=null);var we=!1;if(A===null)we=!0;else switch(Ie){case"bigint":case"string":case"number":we=!0;break;case"object":switch(A.$$typeof){case r:case e:we=!0;break;case E:return we=A._init,et(we(A._payload),F,Z,te,ge)}}if(we)return ge=ge(A),we=te===""?"."+V(A,0):te,Te(ge)?(Z="",we!=null&&(Z=we.replace(x,"$&/")+"/"),et(ge,F,Z,"",function(oi){return oi})):ge!=null&&(C(ge)&&(ge=b(ge,Z+(ge.key==null||A&&A.key===ge.key?"":(""+ge.key).replace(x,"$&/")+"/")+we)),F.push(ge)),1;we=0;var Pt=te===""?".":te+":";if(Te(A))for(var tt=0;tt<A.length;tt++)te=A[tt],Ie=Pt+V(te,tt),we+=et(te,F,Z,Ie,ge);else if(tt=S(A),typeof tt=="function")for(A=tt.call(A),tt=0;!(te=A.next()).done;)te=te.value,Ie=Pt+V(te,tt++),we+=et(te,F,Z,Ie,ge);else if(Ie==="object"){if(typeof A.then=="function")return et(mt(A),F,Z,te,ge);throw F=String(A),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.")}return we}function G(A,F,Z){if(A==null)return A;var te=[],ge=0;return et(A,te,"","",function(Ie){return F.call(Z,Ie,ge++)}),te}function se(A){if(A._status===-1){var F=A._result;F=F(),F.then(function(Z){(A._status===0||A._status===-1)&&(A._status=1,A._result=Z)},function(Z){(A._status===0||A._status===-1)&&(A._status=2,A._result=Z)}),A._status===-1&&(A._status=0,A._result=F)}if(A._status===1)return A._result.default;throw A._result}var ee=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var F=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(F))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function ue(){}return Se.Children={map:G,forEach:function(A,F,Z){G(A,function(){F.apply(this,arguments)},Z)},count:function(A){var F=0;return G(A,function(){F++}),F},toArray:function(A){return G(A,function(F){return F})||[]},only:function(A){if(!C(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},Se.Component=J,Se.Fragment=n,Se.Profiler=o,Se.PureComponent=ie,Se.StrictMode=s,Se.Suspense=p,Se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=me,Se.__COMPILER_RUNTIME={__proto__:null,c:function(A){return me.H.useMemoCache(A)}},Se.cache=function(A){return function(){return A.apply(null,arguments)}},Se.cloneElement=function(A,F,Z){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var te=K({},A.props),ge=A.key,Ie=void 0;if(F!=null)for(we in F.ref!==void 0&&(Ie=void 0),F.key!==void 0&&(ge=""+F.key),F)!Oe.call(F,we)||we==="key"||we==="__self"||we==="__source"||we==="ref"&&F.ref===void 0||(te[we]=F[we]);var we=arguments.length-2;if(we===1)te.children=Z;else if(1<we){for(var Pt=Array(we),tt=0;tt<we;tt++)Pt[tt]=arguments[tt+2];te.children=Pt}return P(A.type,ge,void 0,void 0,Ie,te)},Se.createContext=function(A){return A={$$typeof:f,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:u,_context:A},A},Se.createElement=function(A,F,Z){var te,ge={},Ie=null;if(F!=null)for(te in F.key!==void 0&&(Ie=""+F.key),F)Oe.call(F,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(ge[te]=F[te]);var we=arguments.length-2;if(we===1)ge.children=Z;else if(1<we){for(var Pt=Array(we),tt=0;tt<we;tt++)Pt[tt]=arguments[tt+2];ge.children=Pt}if(A&&A.defaultProps)for(te in we=A.defaultProps,we)ge[te]===void 0&&(ge[te]=we[te]);return P(A,Ie,void 0,void 0,null,ge)},Se.createRef=function(){return{current:null}},Se.forwardRef=function(A){return{$$typeof:m,render:A}},Se.isValidElement=C,Se.lazy=function(A){return{$$typeof:E,_payload:{_status:-1,_result:A},_init:se}},Se.memo=function(A,F){return{$$typeof:y,type:A,compare:F===void 0?null:F}},Se.startTransition=function(A){var F=me.T,Z={};me.T=Z;try{var te=A(),ge=me.S;ge!==null&&ge(Z,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(ue,ee)}catch(Ie){ee(Ie)}finally{me.T=F}},Se.unstable_useCacheRefresh=function(){return me.H.useCacheRefresh()},Se.use=function(A){return me.H.use(A)},Se.useActionState=function(A,F,Z){return me.H.useActionState(A,F,Z)},Se.useCallback=function(A,F){return me.H.useCallback(A,F)},Se.useContext=function(A){return me.H.useContext(A)},Se.useDebugValue=function(){},Se.useDeferredValue=function(A,F){return me.H.useDeferredValue(A,F)},Se.useEffect=function(A,F,Z){var te=me.H;if(typeof Z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return te.useEffect(A,F)},Se.useId=function(){return me.H.useId()},Se.useImperativeHandle=function(A,F,Z){return me.H.useImperativeHandle(A,F,Z)},Se.useInsertionEffect=function(A,F){return me.H.useInsertionEffect(A,F)},Se.useLayoutEffect=function(A,F){return me.H.useLayoutEffect(A,F)},Se.useMemo=function(A,F){return me.H.useMemo(A,F)},Se.useOptimistic=function(A,F){return me.H.useOptimistic(A,F)},Se.useReducer=function(A,F,Z){return me.H.useReducer(A,F,Z)},Se.useRef=function(A){return me.H.useRef(A)},Se.useState=function(A){return me.H.useState(A)},Se.useSyncExternalStore=function(A,F,Z){return me.H.useSyncExternalStore(A,F,Z)},Se.useTransition=function(){return me.H.useTransition()},Se.version="19.1.1",Se}var Bv;function vg(){return Bv||(Bv=1,vm.exports=vS()),vm.exports}var Ve=vg(),Em={exports:{}},Xl={},Tm={exports:{}},wm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv;function ES(){return qv||(qv=1,(function(r){function e(G,se){var ee=G.length;G.push(se);e:for(;0<ee;){var ue=ee-1>>>1,A=G[ue];if(0<o(A,se))G[ue]=se,G[ee]=A,ee=ue;else break e}}function n(G){return G.length===0?null:G[0]}function s(G){if(G.length===0)return null;var se=G[0],ee=G.pop();if(ee!==se){G[0]=ee;e:for(var ue=0,A=G.length,F=A>>>1;ue<F;){var Z=2*(ue+1)-1,te=G[Z],ge=Z+1,Ie=G[ge];if(0>o(te,ee))ge<A&&0>o(Ie,te)?(G[ue]=Ie,G[ge]=ee,ue=ge):(G[ue]=te,G[Z]=ee,ue=Z);else if(ge<A&&0>o(Ie,ee))G[ue]=Ie,G[ge]=ee,ue=ge;else break e}}return se}function o(G,se){var ee=G.sortIndex-se.sortIndex;return ee!==0?ee:G.id-se.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var p=[],y=[],E=1,R=null,S=3,B=!1,K=!1,ne=!1,J=!1,ye=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,he=typeof setImmediate<"u"?setImmediate:null;function Te(G){for(var se=n(y);se!==null;){if(se.callback===null)s(y);else if(se.startTime<=G)s(y),se.sortIndex=se.expirationTime,e(p,se);else break;se=n(y)}}function me(G){if(ne=!1,Te(G),!K)if(n(p)!==null)K=!0,Oe||(Oe=!0,V());else{var se=n(y);se!==null&&et(me,se.startTime-G)}}var Oe=!1,P=-1,b=5,C=-1;function O(){return J?!0:!(r.unstable_now()-C<b)}function x(){if(J=!1,Oe){var G=r.unstable_now();C=G;var se=!0;try{e:{K=!1,ne&&(ne=!1,ie(P),P=-1),B=!0;var ee=S;try{t:{for(Te(G),R=n(p);R!==null&&!(R.expirationTime>G&&O());){var ue=R.callback;if(typeof ue=="function"){R.callback=null,S=R.priorityLevel;var A=ue(R.expirationTime<=G);if(G=r.unstable_now(),typeof A=="function"){R.callback=A,Te(G),se=!0;break t}R===n(p)&&s(p),Te(G)}else s(p);R=n(p)}if(R!==null)se=!0;else{var F=n(y);F!==null&&et(me,F.startTime-G),se=!1}}break e}finally{R=null,S=ee,B=!1}se=void 0}}finally{se?V():Oe=!1}}}var V;if(typeof he=="function")V=function(){he(x)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,mt=N.port2;N.port1.onmessage=x,V=function(){mt.postMessage(null)}}else V=function(){ye(x,0)};function et(G,se){P=ye(function(){G(r.unstable_now())},se)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(G){G.callback=null},r.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<G?Math.floor(1e3/G):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(G){switch(S){case 1:case 2:case 3:var se=3;break;default:se=S}var ee=S;S=se;try{return G()}finally{S=ee}},r.unstable_requestPaint=function(){J=!0},r.unstable_runWithPriority=function(G,se){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var ee=S;S=G;try{return se()}finally{S=ee}},r.unstable_scheduleCallback=function(G,se,ee){var ue=r.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ue+ee:ue):ee=ue,G){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=ee+A,G={id:E++,callback:se,priorityLevel:G,startTime:ee,expirationTime:A,sortIndex:-1},ee>ue?(G.sortIndex=ee,e(y,G),n(p)===null&&G===n(y)&&(ne?(ie(P),P=-1):ne=!0,et(me,ee-ue))):(G.sortIndex=A,e(p,G),K||B||(K=!0,Oe||(Oe=!0,V()))),G},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(G){var se=S;return function(){var ee=S;S=se;try{return G.apply(this,arguments)}finally{S=ee}}}})(wm)),wm}var Fv;function TS(){return Fv||(Fv=1,Tm.exports=ES()),Tm.exports}var Am={exports:{}},Zt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hv;function wS(){if(Hv)return Zt;Hv=1;var r=vg();function e(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)y+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,y,E){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:R==null?null:""+R,children:p,containerInfo:y,implementation:E}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Zt.createPortal=function(p,y){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(e(299));return u(p,y,null,E)},Zt.flushSync=function(p){var y=f.T,E=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=y,s.p=E,s.d.f()}},Zt.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(p,y))},Zt.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Zt.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var E=y.as,R=m(E,y.crossOrigin),S=typeof y.integrity=="string"?y.integrity:void 0,B=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;E==="style"?s.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:R,integrity:S,fetchPriority:B}):E==="script"&&s.d.X(p,{crossOrigin:R,integrity:S,fetchPriority:B,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Zt.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var E=m(y.as,y.crossOrigin);s.d.M(p,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(p)},Zt.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var E=y.as,R=m(E,y.crossOrigin);s.d.L(p,E,{crossOrigin:R,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Zt.preloadModule=function(p,y){if(typeof p=="string")if(y){var E=m(y.as,y.crossOrigin);s.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(p)},Zt.requestFormReset=function(p){s.d.r(p)},Zt.unstable_batchedUpdates=function(p,y){return p(y)},Zt.useFormState=function(p,y,E){return f.H.useFormState(p,y,E)},Zt.useFormStatus=function(){return f.H.useHostTransitionStatus()},Zt.version="19.1.1",Zt}var Gv;function AS(){if(Gv)return Am.exports;Gv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Am.exports=wS(),Am.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yv;function bS(){if(Yv)return Xl;Yv=1;var r=TS(),e=vg(),n=AS();function s(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var i=t.alternate;if(!i){if(i=u(t),i===null)throw Error(s(188));return i!==t?null:t}for(var a=t,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return m(h),t;if(d===l)return m(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,T=h.child;T;){if(T===a){v=!0,a=h,l=d;break}if(T===l){v=!0,l=h,a=d;break}T=T.sibling}if(!v){for(T=d.child;T;){if(T===a){v=!0,a=d,l=h;break}if(T===l){v=!0,l=d,a=h;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:i}function y(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=y(t),i!==null)return i;t=t.sibling}return null}var E=Object.assign,R=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),ne=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),ye=Symbol.for("react.provider"),ie=Symbol.for("react.consumer"),he=Symbol.for("react.context"),Te=Symbol.for("react.forward_ref"),me=Symbol.for("react.suspense"),Oe=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),x=Symbol.iterator;function V(t){return t===null||typeof t!="object"?null:(t=x&&t[x]||t["@@iterator"],typeof t=="function"?t:null)}var N=Symbol.for("react.client.reference");function mt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===N?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case K:return"Fragment";case J:return"Profiler";case ne:return"StrictMode";case me:return"Suspense";case Oe:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case B:return"Portal";case he:return(t.displayName||"Context")+".Provider";case ie:return(t._context.displayName||"Context")+".Consumer";case Te:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return i=t.displayName||null,i!==null?i:mt(t.type)||"Memo";case b:i=t._payload,t=t._init;try{return mt(t(i))}catch{}}return null}var et=Array.isArray,G=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},ue=[],A=-1;function F(t){return{current:t}}function Z(t){0>A||(t.current=ue[A],ue[A]=null,A--)}function te(t,i){A++,ue[A]=t.current,t.current=i}var ge=F(null),Ie=F(null),we=F(null),Pt=F(null);function tt(t,i){switch(te(we,i),te(Ie,t),te(ge,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?fv(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=fv(i),t=dv(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Z(ge),te(ge,t)}function oi(){Z(ge),Z(Ie),Z(we)}function pr(t){t.memoizedState!==null&&te(Pt,t);var i=ge.current,a=dv(i,t.type);i!==a&&(te(Ie,t),te(ge,a))}function xi(t){Ie.current===t&&(Z(ge),Z(Ie)),Pt.current===t&&(Z(Pt),Hl._currentValue=ee)}var ys=Object.prototype.hasOwnProperty,_s=r.unstable_scheduleCallback,vs=r.unstable_cancelCallback,Bo=r.unstable_shouldYield,Ou=r.unstable_requestPaint,On=r.unstable_now,_f=r.unstable_getCurrentPriorityLevel,qo=r.unstable_ImmediatePriority,ya=r.unstable_UserBlockingPriority,Es=r.unstable_NormalPriority,vf=r.unstable_LowPriority,_a=r.unstable_IdlePriority,Fo=r.log,xu=r.unstable_setDisableYieldValue,ct=null,Ge=null;function yn(t){if(typeof Fo=="function"&&xu(t),Ge&&typeof Ge.setStrictMode=="function")try{Ge.setStrictMode(ct,t)}catch{}}var Xt=Math.clz32?Math.clz32:Ts,Pu=Math.log,Ef=Math.LN2;function Ts(t){return t>>>=0,t===0?32:31-(Pu(t)/Ef|0)|0}var ws=256,As=4194304;function Qn(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function va(t,i,a){var l=t.pendingLanes;if(l===0)return 0;var h=0,d=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?h=Qn(l):(v&=T,v!==0?h=Qn(v):a||(a=T&~t,a!==0&&(h=Qn(a))))):(T=l&~d,T!==0?h=Qn(T):v!==0?h=Qn(v):a||(a=l&~t,a!==0&&(h=Qn(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function bs(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Ho(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Go(){var t=ws;return ws<<=1,(ws&4194048)===0&&(ws=256),t}function Yo(){var t=As;return As<<=1,(As&62914560)===0&&(As=4194304),t}function Pi(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function Mi(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ko(t,i,a,l,h,d){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,I=t.expirationTimes,j=t.hiddenUpdates;for(a=v&~a;0<a;){var Y=31-Xt(a),X=1<<Y;T[Y]=0,I[Y]=-1;var z=j[Y];if(z!==null)for(j[Y]=null,Y=0;Y<z.length;Y++){var q=z[Y];q!==null&&(q.lane&=-536870913)}a&=~X}l!==0&&li(t,l,0),d!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=d&~(v&~i))}function li(t,i,a){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Xt(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194090}function Qo(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-Xt(a),h=1<<l;h&i|t[l]&i&&(t[l]|=i),a&=~h}}function yr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ea(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function _r(){var t=se.p;return t!==0?t:(t=window.event,t===void 0?32:xv(t.type))}function Mu(t,i){var a=se.p;try{return se.p=t,i()}finally{se.p=a}}var at=Math.random().toString(36).slice(2),It="__reactFiber$"+at,vt="__reactProps$"+at,xn="__reactContainer$"+at,$o="__reactEvents$"+at,Tf="__reactListeners$"+at,vr="__reactHandles$"+at,Vu="__reactResources$"+at,Ss="__reactMarker$"+at;function Er(t){delete t[It],delete t[vt],delete t[$o],delete t[Tf],delete t[vr]}function Vi(t){var i=t[It];if(i)return i;for(var a=t.parentNode;a;){if(i=a[xn]||a[It]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=yv(t);t!==null;){if(a=t[It])return a;t=yv(t)}return i}t=a,a=t.parentNode}return null}function ui(t){if(t=t[It]||t[xn]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function ci(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(s(33))}function rn(t){var i=t[Vu];return i||(i=t[Vu]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function gt(t){t[Ss]=!0}var Xo=new Set,Ta={};function $n(t,i){ki(t,i),ki(t+"Capture",i)}function ki(t,i){for(Ta[t]=i,t=0;t<i.length;t++)Xo.add(i[t])}var ku=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Lu={},Rs={};function Uu(t){return ys.call(Rs,t)?!0:ys.call(Lu,t)?!1:ku.test(t)?Rs[t]=!0:(Lu[t]=!0,!1)}function Tr(t,i,a){if(Uu(i))if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+a)}}function hi(t,i,a){if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+a)}}function Bt(t,i,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(i,a,""+l)}}var Is,ju;function Li(t){if(Is===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Is=i&&i[1]||"",ju=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Is+t+ju}var wa=!1;function Aa(t,i){if(!t||wa)return"";wa=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(q){var z=q}Reflect.construct(t,[],X)}else{try{X.call()}catch(q){z=q}t.call(X.prototype)}}else{try{throw Error()}catch(q){z=q}(X=t())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(q){if(q&&z&&typeof q.stack=="string")return[q.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],T=d[1];if(v&&T){var I=v.split(`
`),j=T.split(`
`);for(h=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;h<j.length&&!j[h].includes("DetermineComponentFrameRoot");)h++;if(l===I.length||h===j.length)for(l=I.length-1,h=j.length-1;1<=l&&0<=h&&I[l]!==j[h];)h--;for(;1<=l&&0<=h;l--,h--)if(I[l]!==j[h]){if(l!==1||h!==1)do if(l--,h--,0>h||I[l]!==j[h]){var Y=`
`+I[l].replace(" at new "," at ");return t.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",t.displayName)),Y}while(1<=l&&0<=h);break}}}finally{wa=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Li(a):""}function Wo(t){switch(t.tag){case 26:case 27:case 5:return Li(t.type);case 16:return Li("Lazy");case 13:return Li("Suspense");case 19:return Li("SuspenseList");case 0:case 15:return Aa(t.type,!1);case 11:return Aa(t.type.render,!1);case 1:return Aa(t.type,!0);case 31:return Li("Activity");default:return""}}function ba(t){try{var i="";do i+=Wo(t),t=t.return;while(t);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function sn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zo(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function wf(t){var i=Zo(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Sa(t){t._valueTracker||(t._valueTracker=wf(t))}function Jo(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=Zo(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function Cs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Af=/[\n"\\]/g;function Et(t){return t.replace(Af,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function _n(t,i,a,l,h,d,v,T){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),i!=null?v==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+sn(i)):t.value!==""+sn(i)&&(t.value=""+sn(i)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),i!=null?wr(t,v,sn(i)):a!=null?wr(t,v,sn(a)):l!=null&&t.removeAttribute("value"),h==null&&d!=null&&(t.defaultChecked=!!d),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+sn(T):t.removeAttribute("name")}function Ns(t,i,a,l,h,d,v,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+sn(a):"",i=i!=null?""+sn(i):a,T||i===t.value||(t.value=i),t.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=T?t.checked:!!l,t.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v)}function wr(t,i,a){i==="number"&&Cs(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ui(t,i,a,l){if(t=t.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=i.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&l&&(t[a].defaultSelected=!0)}else{for(a=""+sn(a),i=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function Qe(t,i,a){if(i!=null&&(i=""+sn(i),i!==t.value&&(t.value=i),a==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=a!=null?""+sn(a):""}function Ds(t,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(et(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=sn(i),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function Pn(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Os=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function zu(t,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,a):typeof a!="number"||a===0||Os.has(i)?i==="float"?t.cssFloat=a:t[i]=(""+a).trim():t[i]=a+"px"}function el(t,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&zu(t,h,l)}else for(var d in i)i.hasOwnProperty(d)&&zu(t,d,i[d])}function tl(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ra(t){return Sf.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var ji=null;function Mn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zi=null,Bi=null;function nl(t){var i=ui(t);if(i&&(t=i.stateNode)){var a=t[vt]||null;e:switch(t=i.stateNode,i.type){case"input":if(_n(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Et(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var h=l[vt]||null;if(!h)throw Error(s(90));_n(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===t.form&&Jo(l)}break e;case"textarea":Qe(t,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&Ui(t,!!a.multiple,i,!1)}}}var fi=!1;function Bu(t,i,a){if(fi)return t(i,a);fi=!0;try{var l=t(i);return l}finally{if(fi=!1,(zi!==null||Bi!==null)&&(Mc(),zi&&(i=zi,t=Bi,Bi=zi=null,nl(i),t)))for(i=0;i<t.length;i++)nl(t[i])}}function xs(t,i){var a=t.stateNode;if(a===null)return null;var l=a[vt]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vn=!1;if(Xn)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){Vn=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{Vn=!1}var di=null,Ar=null,qi=null;function il(){if(qi)return qi;var t,i=Ar,a=i.length,l,h="value"in di?di.value:di.textContent,d=h.length;for(t=0;t<a&&i[t]===h[t];t++);var v=a-t;for(l=1;l<=v&&i[a-l]===h[d-l];l++);return qi=h.slice(t,1<l?1-l:void 0)}function mi(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function gi(){return!0}function rl(){return!1}function Mt(t){function i(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?gi:rl,this.isPropagationStopped=rl,this}return E(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=gi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=gi)},persist:function(){},isPersistent:gi}),i}var Fe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ia=Mt(Fe),Ms=E({},Fe,{view:0,detail:0}),qu=Mt(Ms),Ca,Na,pi,Vs=E({},Ms,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Us,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==pi&&(pi&&t.type==="mousemove"?(Ca=t.screenX-pi.screenX,Na=t.screenY-pi.screenY):Na=Ca=0,pi=t),Ca)},movementY:function(t){return"movementY"in t?t.movementY:Na}}),kn=Mt(Vs),Fu=E({},Vs,{dataTransfer:0}),Rf=Mt(Fu),ks=E({},Ms,{relatedTarget:0}),Da=Mt(ks),sl=E({},Fe,{animationName:0,elapsedTime:0,pseudoElement:0}),Oa=Mt(sl),Hu=E({},Fe,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xa=Mt(Hu),If=E({},Fe,{data:0}),al=Mt(If),Ls={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ol(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Yu[t])?!!i[t]:!1}function Us(){return ol}var Ku=E({},Ms,{key:function(t){if(t.key){var i=Ls[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=mi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Gu[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Us,charCode:function(t){return t.type==="keypress"?mi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?mi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Pa=Mt(Ku),Qu=E({},Vs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ll=Mt(Qu),Fi=E({},Ms,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Us}),$u=Mt(Fi),Xu=E({},Fe,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wu=Mt(Xu),Zu=E({},Vs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ma=Mt(Zu),an=E({},Fe,{newState:0,oldState:0}),Ju=Mt(an),ec=[9,13,27,32],yi=Xn&&"CompositionEvent"in window,c=null;Xn&&"documentMode"in document&&(c=document.documentMode);var g=Xn&&"TextEvent"in window&&!c,_=Xn&&(!yi||c&&8<c&&11>=c),w=" ",L=!1;function H(t,i){switch(t){case"keyup":return ec.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function re(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ke=!1;function Ct(t,i){switch(t){case"compositionend":return re(i);case"keypress":return i.which!==32?null:(L=!0,w);case"textInput":return t=i.data,t===w&&L?null:t;default:return null}}function Le(t,i){if(ke)return t==="compositionend"||!yi&&H(t,i)?(t=il(),qi=Ar=di=null,ke=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var Vt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nt(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Vt[t.type]:i==="textarea"}function Hi(t,i,a,l){zi?Bi?Bi.push(l):Bi=[l]:zi=l,i=zc(i,"onChange"),0<i.length&&(a=new Ia("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var qt=null,_i=null;function ul(t){ov(t,0)}function tc(t){var i=ci(t);if(Jo(i))return t}function Cp(t,i){if(t==="change")return i}var Np=!1;if(Xn){var Cf;if(Xn){var Nf="oninput"in document;if(!Nf){var Dp=document.createElement("div");Dp.setAttribute("oninput","return;"),Nf=typeof Dp.oninput=="function"}Cf=Nf}else Cf=!1;Np=Cf&&(!document.documentMode||9<document.documentMode)}function Op(){qt&&(qt.detachEvent("onpropertychange",xp),_i=qt=null)}function xp(t){if(t.propertyName==="value"&&tc(_i)){var i=[];Hi(i,_i,t,Mn(t)),Bu(ul,i)}}function KA(t,i,a){t==="focusin"?(Op(),qt=i,_i=a,qt.attachEvent("onpropertychange",xp)):t==="focusout"&&Op()}function QA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return tc(_i)}function $A(t,i){if(t==="click")return tc(i)}function XA(t,i){if(t==="input"||t==="change")return tc(i)}function WA(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var vn=typeof Object.is=="function"?Object.is:WA;function cl(t,i){if(vn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!ys.call(i,h)||!vn(t[h],i[h]))return!1}return!0}function Pp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mp(t,i){var a=Pp(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Pp(a)}}function Vp(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Vp(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function kp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Cs(t.document);i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=Cs(t.document)}return i}function Df(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var ZA=Xn&&"documentMode"in document&&11>=document.documentMode,Va=null,Of=null,hl=null,xf=!1;function Lp(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xf||Va==null||Va!==Cs(l)||(l=Va,"selectionStart"in l&&Df(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),hl&&cl(hl,l)||(hl=l,l=zc(Of,"onSelect"),0<l.length&&(i=new Ia("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=Va)))}function js(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var ka={animationend:js("Animation","AnimationEnd"),animationiteration:js("Animation","AnimationIteration"),animationstart:js("Animation","AnimationStart"),transitionrun:js("Transition","TransitionRun"),transitionstart:js("Transition","TransitionStart"),transitioncancel:js("Transition","TransitionCancel"),transitionend:js("Transition","TransitionEnd")},Pf={},Up={};Xn&&(Up=document.createElement("div").style,"AnimationEvent"in window||(delete ka.animationend.animation,delete ka.animationiteration.animation,delete ka.animationstart.animation),"TransitionEvent"in window||delete ka.transitionend.transition);function zs(t){if(Pf[t])return Pf[t];if(!ka[t])return t;var i=ka[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Up)return Pf[t]=i[a];return t}var jp=zs("animationend"),zp=zs("animationiteration"),Bp=zs("animationstart"),JA=zs("transitionrun"),eb=zs("transitionstart"),tb=zs("transitioncancel"),qp=zs("transitionend"),Fp=new Map,Mf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mf.push("scrollEnd");function Wn(t,i){Fp.set(t,i),$n(i,[t])}var Hp=new WeakMap;function Ln(t,i){if(typeof t=="object"&&t!==null){var a=Hp.get(t);return a!==void 0?a:(i={value:t,source:i,stack:ba(i)},Hp.set(t,i),i)}return{value:t,source:i,stack:ba(i)}}var Un=[],La=0,Vf=0;function nc(){for(var t=La,i=Vf=La=0;i<t;){var a=Un[i];Un[i++]=null;var l=Un[i];Un[i++]=null;var h=Un[i];Un[i++]=null;var d=Un[i];if(Un[i++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&Gp(a,h,d)}}function ic(t,i,a,l){Un[La++]=t,Un[La++]=i,Un[La++]=a,Un[La++]=l,Vf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function kf(t,i,a,l){return ic(t,i,a,l),rc(t)}function Ua(t,i){return ic(t,null,null,i),rc(t)}function Gp(t,i,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=t.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(h=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,h&&i!==null&&(h=31-Xt(a),t=d.hiddenUpdates,l=t[h],l===null?t[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function rc(t){if(50<kl)throw kl=0,qd=null,Error(s(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var ja={};function nb(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(t,i,a,l){return new nb(t,i,a,l)}function Lf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Gi(t,i){var a=t.alternate;return a===null?(a=En(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Yp(t,i){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,i=a.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function sc(t,i,a,l,h,d){var v=0;if(l=t,typeof t=="function")Lf(t)&&(v=1);else if(typeof t=="string")v=rS(t,a,ge.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=En(31,a,i,h),t.elementType=C,t.lanes=d,t;case K:return Bs(a.children,h,d,i);case ne:v=8,h|=24;break;case J:return t=En(12,a,i,h|2),t.elementType=J,t.lanes=d,t;case me:return t=En(13,a,i,h),t.elementType=me,t.lanes=d,t;case Oe:return t=En(19,a,i,h),t.elementType=Oe,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ye:case he:v=10;break e;case ie:v=9;break e;case Te:v=11;break e;case P:v=14;break e;case b:v=16,l=null;break e}v=29,a=Error(s(130,t===null?"null":typeof t,"")),l=null}return i=En(v,a,i,h),i.elementType=t,i.type=l,i.lanes=d,i}function Bs(t,i,a,l){return t=En(7,t,l,i),t.lanes=a,t}function Uf(t,i,a){return t=En(6,t,null,i),t.lanes=a,t}function jf(t,i,a){return i=En(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var za=[],Ba=0,ac=null,oc=0,jn=[],zn=0,qs=null,Yi=1,Ki="";function Fs(t,i){za[Ba++]=oc,za[Ba++]=ac,ac=t,oc=i}function Kp(t,i,a){jn[zn++]=Yi,jn[zn++]=Ki,jn[zn++]=qs,qs=t;var l=Yi;t=Ki;var h=32-Xt(l)-1;l&=~(1<<h),a+=1;var d=32-Xt(i)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,Yi=1<<32-Xt(i)+h|a<<h|l,Ki=d+t}else Yi=1<<d|a<<h|l,Ki=t}function zf(t){t.return!==null&&(Fs(t,1),Kp(t,1,0))}function Bf(t){for(;t===ac;)ac=za[--Ba],za[Ba]=null,oc=za[--Ba],za[Ba]=null;for(;t===qs;)qs=jn[--zn],jn[zn]=null,Ki=jn[--zn],jn[zn]=null,Yi=jn[--zn],jn[zn]=null}var on=null,ht=null,qe=!1,Hs=null,vi=!1,qf=Error(s(519));function Gs(t){var i=Error(s(418,""));throw ml(Ln(i,t)),qf}function Qp(t){var i=t.stateNode,a=t.type,l=t.memoizedProps;switch(i[It]=t,i[vt]=l,a){case"dialog":De("cancel",i),De("close",i);break;case"iframe":case"object":case"embed":De("load",i);break;case"video":case"audio":for(a=0;a<Ul.length;a++)De(Ul[a],i);break;case"source":De("error",i);break;case"img":case"image":case"link":De("error",i),De("load",i);break;case"details":De("toggle",i);break;case"input":De("invalid",i),Ns(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Sa(i);break;case"select":De("invalid",i);break;case"textarea":De("invalid",i),Ds(i,l.value,l.defaultValue,l.children),Sa(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||hv(i.textContent,a)?(l.popover!=null&&(De("beforetoggle",i),De("toggle",i)),l.onScroll!=null&&De("scroll",i),l.onScrollEnd!=null&&De("scrollend",i),l.onClick!=null&&(i.onclick=Bc),i=!0):i=!1,i||Gs(t)}function $p(t){for(on=t.return;on;)switch(on.tag){case 5:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:on=on.return}}function fl(t){if(t!==on)return!1;if(!qe)return $p(t),qe=!0,!1;var i=t.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||rm(t.type,t.memoizedProps)),a=!a),a&&ht&&Gs(t),$p(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(i===0){ht=Jn(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;t=t.nextSibling}ht=null}}else i===27?(i=ht,jr(t.type)?(t=lm,lm=null,ht=t):ht=i):ht=on?Jn(t.stateNode.nextSibling):null;return!0}function dl(){ht=on=null,qe=!1}function Xp(){var t=Hs;return t!==null&&(cn===null?cn=t:cn.push.apply(cn,t),Hs=null),t}function ml(t){Hs===null?Hs=[t]:Hs.push(t)}var Ff=F(null),Ys=null,Qi=null;function br(t,i,a){te(Ff,i._currentValue),i._currentValue=a}function $i(t){t._currentValue=Ff.current,Z(Ff)}function Hf(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function Gf(t,i,a,l){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=h;for(var I=0;I<i.length;I++)if(T.context===i[I]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),Hf(d.return,a,t),l||(v=null);break e}d=T.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),Hf(v,a,t),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===t){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function gl(t,i,a,l){t=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=h.type;vn(h.pendingProps.value,v.value)||(t!==null?t.push(T):t=[T])}}else if(h===Pt.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(Hl):t=[Hl])}h=h.return}t!==null&&Gf(i,t,a,l),i.flags|=262144}function lc(t){for(t=t.firstContext;t!==null;){if(!vn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ks(t){Ys=t,Qi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Wt(t){return Wp(Ys,t)}function uc(t,i){return Ys===null&&Ks(t),Wp(t,i)}function Wp(t,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Qi===null){if(t===null)throw Error(s(308));Qi=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Qi=Qi.next=i;return a}var ib=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(a){return a()})}},rb=r.unstable_scheduleCallback,sb=r.unstable_NormalPriority,Dt={$$typeof:he,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yf(){return{controller:new ib,data:new Map,refCount:0}}function pl(t){t.refCount--,t.refCount===0&&rb(sb,function(){t.controller.abort()})}var yl=null,Kf=0,qa=0,Fa=null;function ab(t,i){if(yl===null){var a=yl=[];Kf=0,qa=$d(),Fa={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Kf++,i.then(Zp,Zp),i}function Zp(){if(--Kf===0&&yl!==null){Fa!==null&&(Fa.status="fulfilled");var t=yl;yl=null,qa=0,Fa=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function ob(t,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var Jp=G.S;G.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&ab(t,i),Jp!==null&&Jp(t,i)};var Qs=F(null);function Qf(){var t=Qs.current;return t!==null?t:nt.pooledCache}function cc(t,i){i===null?te(Qs,Qs.current):te(Qs,i.pool)}function ey(){var t=Qf();return t===null?null:{parent:Dt._currentValue,pool:t}}var _l=Error(s(460)),ty=Error(s(474)),hc=Error(s(542)),$f={then:function(){}};function ny(t){return t=t.status,t==="fulfilled"||t==="rejected"}function fc(){}function iy(t,i,a){switch(a=t[a],a===void 0?t.push(i):a!==i&&(i.then(fc,fc),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,sy(t),t;default:if(typeof i.status=="string")i.then(fc,fc);else{if(t=nt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,sy(t),t}throw vl=i,_l}}var vl=null;function ry(){if(vl===null)throw Error(s(459));var t=vl;return vl=null,t}function sy(t){if(t===_l||t===hc)throw Error(s(483))}var Sr=!1;function Xf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Rr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ir(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ye&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=rc(t),Gp(t,null,a),i}return ic(t,l,i,a),rc(t)}function El(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Qo(t,a)}}function Zf(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}var Jf=!1;function Tl(){if(Jf){var t=Fa;if(t!==null)throw t}}function wl(t,i,a,l){Jf=!1;var h=t.updateQueue;Sr=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var I=T,j=I.next;I.next=null,v===null?d=j:v.next=j,v=I;var Y=t.alternate;Y!==null&&(Y=Y.updateQueue,T=Y.lastBaseUpdate,T!==v&&(T===null?Y.firstBaseUpdate=j:T.next=j,Y.lastBaseUpdate=I))}if(d!==null){var X=h.baseState;v=0,Y=j=I=null,T=d;do{var z=T.lane&-536870913,q=z!==T.lane;if(q?(Ue&z)===z:(l&z)===z){z!==0&&z===qa&&(Jf=!0),Y!==null&&(Y=Y.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Ee=t,pe=T;z=i;var We=a;switch(pe.tag){case 1:if(Ee=pe.payload,typeof Ee=="function"){X=Ee.call(We,X,z);break e}X=Ee;break e;case 3:Ee.flags=Ee.flags&-65537|128;case 0:if(Ee=pe.payload,z=typeof Ee=="function"?Ee.call(We,X,z):Ee,z==null)break e;X=E({},X,z);break e;case 2:Sr=!0}}z=T.callback,z!==null&&(t.flags|=64,q&&(t.flags|=8192),q=h.callbacks,q===null?h.callbacks=[z]:q.push(z))}else q={lane:z,tag:T.tag,payload:T.payload,callback:T.callback,next:null},Y===null?(j=Y=q,I=X):Y=Y.next=q,v|=z;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;q=T,T=q.next,q.next=null,h.lastBaseUpdate=q,h.shared.pending=null}}while(!0);Y===null&&(I=X),h.baseState=I,h.firstBaseUpdate=j,h.lastBaseUpdate=Y,d===null&&(h.shared.lanes=0),Vr|=v,t.lanes=v,t.memoizedState=X}}function ay(t,i){if(typeof t!="function")throw Error(s(191,t));t.call(i)}function oy(t,i){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)ay(a[t],i)}var Ha=F(null),dc=F(0);function ly(t,i){t=nr,te(dc,t),te(Ha,i),nr=t|i.baseLanes}function ed(){te(dc,nr),te(Ha,Ha.current)}function td(){nr=dc.current,Z(Ha),Z(dc)}var Cr=0,Re=null,$e=null,Tt=null,mc=!1,Ga=!1,$s=!1,gc=0,Al=0,Ya=null,lb=0;function pt(){throw Error(s(321))}function nd(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!vn(t[a],i[a]))return!1;return!0}function id(t,i,a,l,h,d){return Cr=d,Re=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,G.H=t===null||t.memoizedState===null?Gy:Yy,$s=!1,d=a(l,h),$s=!1,Ga&&(d=cy(i,a,l,h)),uy(t),d}function uy(t){G.H=Tc;var i=$e!==null&&$e.next!==null;if(Cr=0,Tt=$e=Re=null,mc=!1,Al=0,Ya=null,i)throw Error(s(300));t===null||kt||(t=t.dependencies,t!==null&&lc(t)&&(kt=!0))}function cy(t,i,a,l){Re=t;var h=0;do{if(Ga&&(Ya=null),Al=0,Ga=!1,25<=h)throw Error(s(301));if(h+=1,Tt=$e=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}G.H=gb,d=i(a,l)}while(Ga);return d}function ub(){var t=G.H,i=t.useState()[0];return i=typeof i.then=="function"?bl(i):i,t=t.useState()[0],($e!==null?$e.memoizedState:null)!==t&&(Re.flags|=1024),i}function rd(){var t=gc!==0;return gc=0,t}function sd(t,i,a){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~a}function ad(t){if(mc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}mc=!1}Cr=0,Tt=$e=Re=null,Ga=!1,Al=gc=0,Ya=null}function ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?Re.memoizedState=Tt=t:Tt=Tt.next=t,Tt}function wt(){if($e===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=$e.next;var i=Tt===null?Re.memoizedState:Tt.next;if(i!==null)Tt=i,$e=t;else{if(t===null)throw Re.alternate===null?Error(s(467)):Error(s(310));$e=t,t={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Tt===null?Re.memoizedState=Tt=t:Tt=Tt.next=t}return Tt}function od(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bl(t){var i=Al;return Al+=1,Ya===null&&(Ya=[]),t=iy(Ya,t,i),i=Re,(Tt===null?i.memoizedState:Tt.next)===null&&(i=i.alternate,G.H=i===null||i.memoizedState===null?Gy:Yy),t}function pc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return bl(t);if(t.$$typeof===he)return Wt(t)}throw Error(s(438,String(t)))}function ld(t){var i=null,a=Re.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Re.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=od(),Re.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(t),l=0;l<t;l++)a[l]=O;return i.index++,a}function Xi(t,i){return typeof i=="function"?i(t):i}function yc(t){var i=wt();return ud(i,$e,t)}function ud(t,i,a){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=t.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,l.pending=null}if(d=t.baseState,h===null)t.memoizedState=d;else{i=h.next;var T=v=null,I=null,j=i,Y=!1;do{var X=j.lane&-536870913;if(X!==j.lane?(Ue&X)===X:(Cr&X)===X){var z=j.revertLane;if(z===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),X===qa&&(Y=!0);else if((Cr&z)===z){j=j.next,z===qa&&(Y=!0);continue}else X={lane:0,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},I===null?(T=I=X,v=d):I=I.next=X,Re.lanes|=z,Vr|=z;X=j.action,$s&&a(d,X),d=j.hasEagerState?j.eagerState:a(d,X)}else z={lane:X,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},I===null?(T=I=z,v=d):I=I.next=z,Re.lanes|=X,Vr|=X;j=j.next}while(j!==null&&j!==i);if(I===null?v=d:I.next=T,!vn(d,t.memoizedState)&&(kt=!0,Y&&(a=Fa,a!==null)))throw a;t.memoizedState=d,t.baseState=v,t.baseQueue=I,l.lastRenderedState=d}return h===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function cd(t){var i=wt(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=t(d,v.action),v=v.next;while(v!==h);vn(d,i.memoizedState)||(kt=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function hy(t,i,a){var l=Re,h=wt(),d=qe;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!vn(($e||h).memoizedState,a);v&&(h.memoizedState=a,kt=!0),h=h.queue;var T=my.bind(null,l,h,t);if(Sl(2048,8,T,[t]),h.getSnapshot!==i||v||Tt!==null&&Tt.memoizedState.tag&1){if(l.flags|=2048,Ka(9,_c(),dy.bind(null,l,h,a,i),null),nt===null)throw Error(s(349));d||(Cr&124)!==0||fy(l,i,a)}return a}function fy(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Re.updateQueue,i===null?(i=od(),Re.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function dy(t,i,a,l){i.value=a,i.getSnapshot=l,gy(i)&&py(t)}function my(t,i,a){return a(function(){gy(i)&&py(t)})}function gy(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!vn(t,a)}catch{return!0}}function py(t){var i=Ua(t,2);i!==null&&Sn(i,t,2)}function hd(t){var i=ln();if(typeof t=="function"){var a=t;if(t=a(),$s){yn(!0);try{a()}finally{yn(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:t},i}function yy(t,i,a,l){return t.baseState=a,ud(t,$e,typeof l=="function"?l:Xi)}function cb(t,i,a,l,h){if(Ec(t))throw Error(s(485));if(t=i.action,t!==null){var d={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};G.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,_y(i,d)):(d.next=a.next,i.pending=a.next=d)}}function _y(t,i){var a=i.action,l=i.payload,h=t.state;if(i.isTransition){var d=G.T,v={};G.T=v;try{var T=a(h,l),I=G.S;I!==null&&I(v,T),vy(t,i,T)}catch(j){fd(t,i,j)}finally{G.T=d}}else try{d=a(h,l),vy(t,i,d)}catch(j){fd(t,i,j)}}function vy(t,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Ey(t,i,l)},function(l){return fd(t,i,l)}):Ey(t,i,a)}function Ey(t,i,a){i.status="fulfilled",i.value=a,Ty(i),t.state=a,i=t.pending,i!==null&&(a=i.next,a===i?t.pending=null:(a=a.next,i.next=a,_y(t,a)))}function fd(t,i,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,Ty(i),i=i.next;while(i!==l)}t.action=null}function Ty(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function wy(t,i){return i}function Ay(t,i){if(qe){var a=nt.formState;if(a!==null){e:{var l=Re;if(qe){if(ht){t:{for(var h=ht,d=vi;h.nodeType!==8;){if(!d){h=null;break t}if(h=Jn(h.nextSibling),h===null){h=null;break t}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){ht=Jn(h.nextSibling),l=h.data==="F!";break e}}Gs(l)}l=!1}l&&(i=a[0])}}return a=ln(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wy,lastRenderedState:i},a.queue=l,a=qy.bind(null,Re,l),l.dispatch=a,l=hd(!1),d=yd.bind(null,Re,!1,l.queue),l=ln(),h={state:i,dispatch:null,action:t,pending:null},l.queue=h,a=cb.bind(null,Re,h,d,a),h.dispatch=a,l.memoizedState=t,[i,a,!1]}function by(t){var i=wt();return Sy(i,$e,t)}function Sy(t,i,a){if(i=ud(t,i,wy)[0],t=yc(Xi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=bl(i)}catch(v){throw v===_l?hc:v}else l=i;i=wt();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(Re.flags|=2048,Ka(9,_c(),hb.bind(null,h,a),null)),[l,d,t]}function hb(t,i){t.action=i}function Ry(t){var i=wt(),a=$e;if(a!==null)return Sy(i,a,t);wt(),i=i.memoizedState,a=wt();var l=a.queue.dispatch;return a.memoizedState=t,[i,l,!1]}function Ka(t,i,a,l){return t={tag:t,create:a,deps:l,inst:i,next:null},i=Re.updateQueue,i===null&&(i=od(),Re.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t),t}function _c(){return{destroy:void 0,resource:void 0}}function Iy(){return wt().memoizedState}function vc(t,i,a,l){var h=ln();l=l===void 0?null:l,Re.flags|=t,h.memoizedState=Ka(1|i,_c(),a,l)}function Sl(t,i,a,l){var h=wt();l=l===void 0?null:l;var d=h.memoizedState.inst;$e!==null&&l!==null&&nd(l,$e.memoizedState.deps)?h.memoizedState=Ka(i,d,a,l):(Re.flags|=t,h.memoizedState=Ka(1|i,d,a,l))}function Cy(t,i){vc(8390656,8,t,i)}function Ny(t,i){Sl(2048,8,t,i)}function Dy(t,i){return Sl(4,2,t,i)}function Oy(t,i){return Sl(4,4,t,i)}function xy(t,i){if(typeof i=="function"){t=t();var a=i(t);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Py(t,i,a){a=a!=null?a.concat([t]):null,Sl(4,4,xy.bind(null,i,t),a)}function dd(){}function My(t,i){var a=wt();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&nd(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function Vy(t,i){var a=wt();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&nd(i,l[1]))return l[0];if(l=t(),$s){yn(!0);try{t()}finally{yn(!1)}}return a.memoizedState=[l,i],l}function md(t,i,a){return a===void 0||(Cr&1073741824)!==0?t.memoizedState=i:(t.memoizedState=a,t=U_(),Re.lanes|=t,Vr|=t,a)}function ky(t,i,a,l){return vn(a,i)?a:Ha.current!==null?(t=md(t,a,l),vn(t,i)||(kt=!0),t):(Cr&42)===0?(kt=!0,t.memoizedState=a):(t=U_(),Re.lanes|=t,Vr|=t,i)}function Ly(t,i,a,l,h){var d=se.p;se.p=d!==0&&8>d?d:8;var v=G.T,T={};G.T=T,yd(t,!1,i,a);try{var I=h(),j=G.S;if(j!==null&&j(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var Y=ob(I,l);Rl(t,i,Y,bn(t))}else Rl(t,i,l,bn(t))}catch(X){Rl(t,i,{then:function(){},status:"rejected",reason:X},bn())}finally{se.p=d,G.T=v}}function fb(){}function gd(t,i,a,l){if(t.tag!==5)throw Error(s(476));var h=Uy(t).queue;Ly(t,h,i,ee,a===null?fb:function(){return jy(t),a(l)})}function Uy(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:ee},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:a},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function jy(t){var i=Uy(t).next.queue;Rl(t,i,{},bn())}function pd(){return Wt(Hl)}function zy(){return wt().memoizedState}function By(){return wt().memoizedState}function db(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var a=bn();t=Rr(a);var l=Ir(i,t,a);l!==null&&(Sn(l,i,a),El(l,i,a)),i={cache:Yf()},t.payload=i;return}i=i.return}}function mb(t,i,a){var l=bn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ec(t)?Fy(i,a):(a=kf(t,i,a,l),a!==null&&(Sn(a,t,l),Hy(a,i,l)))}function qy(t,i,a){var l=bn();Rl(t,i,a,l)}function Rl(t,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ec(t))Fy(i,h);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,T=d(v,a);if(h.hasEagerState=!0,h.eagerState=T,vn(T,v))return ic(t,i,h,0),nt===null&&nc(),!1}catch{}finally{}if(a=kf(t,i,h,l),a!==null)return Sn(a,t,l),Hy(a,i,l),!0}return!1}function yd(t,i,a,l){if(l={lane:2,revertLane:$d(),action:l,hasEagerState:!1,eagerState:null,next:null},Ec(t)){if(i)throw Error(s(479))}else i=kf(t,a,l,2),i!==null&&Sn(i,t,2)}function Ec(t){var i=t.alternate;return t===Re||i!==null&&i===Re}function Fy(t,i){Ga=mc=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Hy(t,i,a){if((a&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Qo(t,a)}}var Tc={readContext:Wt,use:pc,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useLayoutEffect:pt,useInsertionEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useSyncExternalStore:pt,useId:pt,useHostTransitionStatus:pt,useFormState:pt,useActionState:pt,useOptimistic:pt,useMemoCache:pt,useCacheRefresh:pt},Gy={readContext:Wt,use:pc,useCallback:function(t,i){return ln().memoizedState=[t,i===void 0?null:i],t},useContext:Wt,useEffect:Cy,useImperativeHandle:function(t,i,a){a=a!=null?a.concat([t]):null,vc(4194308,4,xy.bind(null,i,t),a)},useLayoutEffect:function(t,i){return vc(4194308,4,t,i)},useInsertionEffect:function(t,i){vc(4,2,t,i)},useMemo:function(t,i){var a=ln();i=i===void 0?null:i;var l=t();if($s){yn(!0);try{t()}finally{yn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(t,i,a){var l=ln();if(a!==void 0){var h=a(i);if($s){yn(!0);try{a(i)}finally{yn(!1)}}}else h=i;return l.memoizedState=l.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},l.queue=t,t=t.dispatch=mb.bind(null,Re,t),[l.memoizedState,t]},useRef:function(t){var i=ln();return t={current:t},i.memoizedState=t},useState:function(t){t=hd(t);var i=t.queue,a=qy.bind(null,Re,i);return i.dispatch=a,[t.memoizedState,a]},useDebugValue:dd,useDeferredValue:function(t,i){var a=ln();return md(a,t,i)},useTransition:function(){var t=hd(!1);return t=Ly.bind(null,Re,t.queue,!0,!1),ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,a){var l=Re,h=ln();if(qe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),nt===null)throw Error(s(349));(Ue&124)!==0||fy(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,Cy(my.bind(null,l,d,t),[t]),l.flags|=2048,Ka(9,_c(),dy.bind(null,l,d,a,i),null),a},useId:function(){var t=ln(),i=nt.identifierPrefix;if(qe){var a=Ki,l=Yi;a=(l&~(1<<32-Xt(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=gc++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=lb++,i="«"+i+"r"+a.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:pd,useFormState:Ay,useActionState:Ay,useOptimistic:function(t){var i=ln();i.memoizedState=i.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=yd.bind(null,Re,!0,a),a.dispatch=i,[t,i]},useMemoCache:ld,useCacheRefresh:function(){return ln().memoizedState=db.bind(null,Re)}},Yy={readContext:Wt,use:pc,useCallback:My,useContext:Wt,useEffect:Ny,useImperativeHandle:Py,useInsertionEffect:Dy,useLayoutEffect:Oy,useMemo:Vy,useReducer:yc,useRef:Iy,useState:function(){return yc(Xi)},useDebugValue:dd,useDeferredValue:function(t,i){var a=wt();return ky(a,$e.memoizedState,t,i)},useTransition:function(){var t=yc(Xi)[0],i=wt().memoizedState;return[typeof t=="boolean"?t:bl(t),i]},useSyncExternalStore:hy,useId:zy,useHostTransitionStatus:pd,useFormState:by,useActionState:by,useOptimistic:function(t,i){var a=wt();return yy(a,$e,t,i)},useMemoCache:ld,useCacheRefresh:By},gb={readContext:Wt,use:pc,useCallback:My,useContext:Wt,useEffect:Ny,useImperativeHandle:Py,useInsertionEffect:Dy,useLayoutEffect:Oy,useMemo:Vy,useReducer:cd,useRef:Iy,useState:function(){return cd(Xi)},useDebugValue:dd,useDeferredValue:function(t,i){var a=wt();return $e===null?md(a,t,i):ky(a,$e.memoizedState,t,i)},useTransition:function(){var t=cd(Xi)[0],i=wt().memoizedState;return[typeof t=="boolean"?t:bl(t),i]},useSyncExternalStore:hy,useId:zy,useHostTransitionStatus:pd,useFormState:Ry,useActionState:Ry,useOptimistic:function(t,i){var a=wt();return $e!==null?yy(a,$e,t,i):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ld,useCacheRefresh:By},Qa=null,Il=0;function wc(t){var i=Il;return Il+=1,Qa===null&&(Qa=[]),iy(Qa,t,i)}function Cl(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Ac(t,i){throw i.$$typeof===R?Error(s(525)):(t=Object.prototype.toString.call(i),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Ky(t){var i=t._init;return i(t._payload)}function Qy(t){function i(k,D){if(t){var U=k.deletions;U===null?(k.deletions=[D],k.flags|=16):U.push(D)}}function a(k,D){if(!t)return null;for(;D!==null;)i(k,D),D=D.sibling;return null}function l(k){for(var D=new Map;k!==null;)k.key!==null?D.set(k.key,k):D.set(k.index,k),k=k.sibling;return D}function h(k,D){return k=Gi(k,D),k.index=0,k.sibling=null,k}function d(k,D,U){return k.index=U,t?(U=k.alternate,U!==null?(U=U.index,U<D?(k.flags|=67108866,D):U):(k.flags|=67108866,D)):(k.flags|=1048576,D)}function v(k){return t&&k.alternate===null&&(k.flags|=67108866),k}function T(k,D,U,Q){return D===null||D.tag!==6?(D=Uf(U,k.mode,Q),D.return=k,D):(D=h(D,U),D.return=k,D)}function I(k,D,U,Q){var ce=U.type;return ce===K?Y(k,D,U.props.children,Q,U.key):D!==null&&(D.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===b&&Ky(ce)===D.type)?(D=h(D,U.props),Cl(D,U),D.return=k,D):(D=sc(U.type,U.key,U.props,null,k.mode,Q),Cl(D,U),D.return=k,D)}function j(k,D,U,Q){return D===null||D.tag!==4||D.stateNode.containerInfo!==U.containerInfo||D.stateNode.implementation!==U.implementation?(D=jf(U,k.mode,Q),D.return=k,D):(D=h(D,U.children||[]),D.return=k,D)}function Y(k,D,U,Q,ce){return D===null||D.tag!==7?(D=Bs(U,k.mode,Q,ce),D.return=k,D):(D=h(D,U),D.return=k,D)}function X(k,D,U){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=Uf(""+D,k.mode,U),D.return=k,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case S:return U=sc(D.type,D.key,D.props,null,k.mode,U),Cl(U,D),U.return=k,U;case B:return D=jf(D,k.mode,U),D.return=k,D;case b:var Q=D._init;return D=Q(D._payload),X(k,D,U)}if(et(D)||V(D))return D=Bs(D,k.mode,U,null),D.return=k,D;if(typeof D.then=="function")return X(k,wc(D),U);if(D.$$typeof===he)return X(k,uc(k,D),U);Ac(k,D)}return null}function z(k,D,U,Q){var ce=D!==null?D.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return ce!==null?null:T(k,D,""+U,Q);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case S:return U.key===ce?I(k,D,U,Q):null;case B:return U.key===ce?j(k,D,U,Q):null;case b:return ce=U._init,U=ce(U._payload),z(k,D,U,Q)}if(et(U)||V(U))return ce!==null?null:Y(k,D,U,Q,null);if(typeof U.then=="function")return z(k,D,wc(U),Q);if(U.$$typeof===he)return z(k,D,uc(k,U),Q);Ac(k,U)}return null}function q(k,D,U,Q,ce){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return k=k.get(U)||null,T(D,k,""+Q,ce);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case S:return k=k.get(Q.key===null?U:Q.key)||null,I(D,k,Q,ce);case B:return k=k.get(Q.key===null?U:Q.key)||null,j(D,k,Q,ce);case b:var Ce=Q._init;return Q=Ce(Q._payload),q(k,D,U,Q,ce)}if(et(Q)||V(Q))return k=k.get(U)||null,Y(D,k,Q,ce,null);if(typeof Q.then=="function")return q(k,D,U,wc(Q),ce);if(Q.$$typeof===he)return q(k,D,U,uc(D,Q),ce);Ac(D,Q)}return null}function Ee(k,D,U,Q){for(var ce=null,Ce=null,fe=D,_e=D=0,Ut=null;fe!==null&&_e<U.length;_e++){fe.index>_e?(Ut=fe,fe=null):Ut=fe.sibling;var Be=z(k,fe,U[_e],Q);if(Be===null){fe===null&&(fe=Ut);break}t&&fe&&Be.alternate===null&&i(k,fe),D=d(Be,D,_e),Ce===null?ce=Be:Ce.sibling=Be,Ce=Be,fe=Ut}if(_e===U.length)return a(k,fe),qe&&Fs(k,_e),ce;if(fe===null){for(;_e<U.length;_e++)fe=X(k,U[_e],Q),fe!==null&&(D=d(fe,D,_e),Ce===null?ce=fe:Ce.sibling=fe,Ce=fe);return qe&&Fs(k,_e),ce}for(fe=l(fe);_e<U.length;_e++)Ut=q(fe,k,_e,U[_e],Q),Ut!==null&&(t&&Ut.alternate!==null&&fe.delete(Ut.key===null?_e:Ut.key),D=d(Ut,D,_e),Ce===null?ce=Ut:Ce.sibling=Ut,Ce=Ut);return t&&fe.forEach(function(Hr){return i(k,Hr)}),qe&&Fs(k,_e),ce}function pe(k,D,U,Q){if(U==null)throw Error(s(151));for(var ce=null,Ce=null,fe=D,_e=D=0,Ut=null,Be=U.next();fe!==null&&!Be.done;_e++,Be=U.next()){fe.index>_e?(Ut=fe,fe=null):Ut=fe.sibling;var Hr=z(k,fe,Be.value,Q);if(Hr===null){fe===null&&(fe=Ut);break}t&&fe&&Hr.alternate===null&&i(k,fe),D=d(Hr,D,_e),Ce===null?ce=Hr:Ce.sibling=Hr,Ce=Hr,fe=Ut}if(Be.done)return a(k,fe),qe&&Fs(k,_e),ce;if(fe===null){for(;!Be.done;_e++,Be=U.next())Be=X(k,Be.value,Q),Be!==null&&(D=d(Be,D,_e),Ce===null?ce=Be:Ce.sibling=Be,Ce=Be);return qe&&Fs(k,_e),ce}for(fe=l(fe);!Be.done;_e++,Be=U.next())Be=q(fe,k,_e,Be.value,Q),Be!==null&&(t&&Be.alternate!==null&&fe.delete(Be.key===null?_e:Be.key),D=d(Be,D,_e),Ce===null?ce=Be:Ce.sibling=Be,Ce=Be);return t&&fe.forEach(function(pS){return i(k,pS)}),qe&&Fs(k,_e),ce}function We(k,D,U,Q){if(typeof U=="object"&&U!==null&&U.type===K&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case S:e:{for(var ce=U.key;D!==null;){if(D.key===ce){if(ce=U.type,ce===K){if(D.tag===7){a(k,D.sibling),Q=h(D,U.props.children),Q.return=k,k=Q;break e}}else if(D.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===b&&Ky(ce)===D.type){a(k,D.sibling),Q=h(D,U.props),Cl(Q,U),Q.return=k,k=Q;break e}a(k,D);break}else i(k,D);D=D.sibling}U.type===K?(Q=Bs(U.props.children,k.mode,Q,U.key),Q.return=k,k=Q):(Q=sc(U.type,U.key,U.props,null,k.mode,Q),Cl(Q,U),Q.return=k,k=Q)}return v(k);case B:e:{for(ce=U.key;D!==null;){if(D.key===ce)if(D.tag===4&&D.stateNode.containerInfo===U.containerInfo&&D.stateNode.implementation===U.implementation){a(k,D.sibling),Q=h(D,U.children||[]),Q.return=k,k=Q;break e}else{a(k,D);break}else i(k,D);D=D.sibling}Q=jf(U,k.mode,Q),Q.return=k,k=Q}return v(k);case b:return ce=U._init,U=ce(U._payload),We(k,D,U,Q)}if(et(U))return Ee(k,D,U,Q);if(V(U)){if(ce=V(U),typeof ce!="function")throw Error(s(150));return U=ce.call(U),pe(k,D,U,Q)}if(typeof U.then=="function")return We(k,D,wc(U),Q);if(U.$$typeof===he)return We(k,D,uc(k,U),Q);Ac(k,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,D!==null&&D.tag===6?(a(k,D.sibling),Q=h(D,U),Q.return=k,k=Q):(a(k,D),Q=Uf(U,k.mode,Q),Q.return=k,k=Q),v(k)):a(k,D)}return function(k,D,U,Q){try{Il=0;var ce=We(k,D,U,Q);return Qa=null,ce}catch(fe){if(fe===_l||fe===hc)throw fe;var Ce=En(29,fe,null,k.mode);return Ce.lanes=Q,Ce.return=k,Ce}finally{}}}var $a=Qy(!0),$y=Qy(!1),Bn=F(null),Ei=null;function Nr(t){var i=t.alternate;te(Ot,Ot.current&1),te(Bn,t),Ei===null&&(i===null||Ha.current!==null||i.memoizedState!==null)&&(Ei=t)}function Xy(t){if(t.tag===22){if(te(Ot,Ot.current),te(Bn,t),Ei===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(Ei=t)}}else Dr()}function Dr(){te(Ot,Ot.current),te(Bn,Bn.current)}function Wi(t){Z(Bn),Ei===t&&(Ei=null),Z(Ot)}var Ot=F(0);function bc(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||om(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function _d(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:E({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var vd={enqueueSetState:function(t,i,a){t=t._reactInternals;var l=bn(),h=Rr(l);h.payload=i,a!=null&&(h.callback=a),i=Ir(t,h,l),i!==null&&(Sn(i,t,l),El(i,t,l))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=bn(),h=Rr(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Ir(t,h,l),i!==null&&(Sn(i,t,l),El(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=bn(),l=Rr(a);l.tag=2,i!=null&&(l.callback=i),i=Ir(t,l,a),i!==null&&(Sn(i,t,a),El(i,t,a))}};function Wy(t,i,a,l,h,d,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!cl(a,l)||!cl(h,d):!0}function Zy(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&vd.enqueueReplaceState(i,i.state,null)}function Xs(t,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(t=t.defaultProps){a===i&&(a=E({},a));for(var h in t)a[h]===void 0&&(a[h]=t[h])}return a}var Sc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Jy(t){Sc(t)}function e_(t){console.error(t)}function t_(t){Sc(t)}function Rc(t,i){try{var a=t.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function n_(t,i,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Ed(t,i,a){return a=Rr(a),a.tag=3,a.payload={element:null},a.callback=function(){Rc(t,i)},a}function i_(t){return t=Rr(t),t.tag=3,t}function r_(t,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;t.payload=function(){return h(d)},t.callback=function(){n_(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){n_(i,a,l),typeof h!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function pb(t,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&gl(i,a,h,!0),a=Bn.current,a!==null){switch(a.tag){case 13:return Ei===null?Hd():a.alternate===null&&ft===0&&(ft=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===$f?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),Yd(t,l,h)),!1;case 22:return a.flags|=65536,l===$f?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),Yd(t,l,h)),!1}throw Error(s(435,a.tag))}return Yd(t,l,h),Hd(),!1}if(qe)return i=Bn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==qf&&(t=Error(s(422),{cause:l}),ml(Ln(t,a)))):(l!==qf&&(i=Error(s(423),{cause:l}),ml(Ln(i,a))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,l=Ln(l,a),h=Ed(t.stateNode,l,h),Zf(t,h),ft!==4&&(ft=2)),!1;var d=Error(s(520),{cause:l});if(d=Ln(d,a),Vl===null?Vl=[d]:Vl.push(d),ft!==4&&(ft=2),i===null)return!0;l=Ln(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,t=h&-h,a.lanes|=t,t=Ed(a.stateNode,l,t),Zf(a,t),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(kr===null||!kr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=i_(h),r_(h,t,a,l),Zf(a,h),!1}a=a.return}while(a!==null);return!1}var s_=Error(s(461)),kt=!1;function Ft(t,i,a,l){i.child=t===null?$y(i,null,a,l):$a(i,t.child,a,l)}function a_(t,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var v={};for(var T in l)T!=="ref"&&(v[T]=l[T])}else v=l;return Ks(i),l=id(t,i,a,v,d,h),T=rd(),t!==null&&!kt?(sd(t,i,h),Zi(t,i,h)):(qe&&T&&zf(i),i.flags|=1,Ft(t,i,l,h),i.child)}function o_(t,i,a,l,h){if(t===null){var d=a.type;return typeof d=="function"&&!Lf(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,l_(t,i,d,l,h)):(t=sc(a.type,null,l,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!Cd(t,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:cl,a(v,l)&&t.ref===i.ref)return Zi(t,i,h)}return i.flags|=1,t=Gi(d,l),t.ref=i.ref,t.return=i,i.child=t}function l_(t,i,a,l,h){if(t!==null){var d=t.memoizedProps;if(cl(d,l)&&t.ref===i.ref)if(kt=!1,i.pendingProps=l=d,Cd(t,h))(t.flags&131072)!==0&&(kt=!0);else return i.lanes=t.lanes,Zi(t,i,h)}return Td(t,i,a,l,h)}function u_(t,i,a){var l=i.pendingProps,h=l.children,d=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,t!==null){for(h=i.child=t.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return c_(t,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&cc(i,d!==null?d.cachePool:null),d!==null?ly(i,d):ed(),Xy(i);else return i.lanes=i.childLanes=536870912,c_(t,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(cc(i,d.cachePool),ly(i,d),Dr(),i.memoizedState=null):(t!==null&&cc(i,null),ed(),Dr());return Ft(t,i,h,a),i.child}function c_(t,i,a,l){var h=Qf();return h=h===null?null:{parent:Dt._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},t!==null&&cc(i,null),ed(),Xy(i),t!==null&&gl(t,i,l,!0),null}function Ic(t,i){var a=i.ref;if(a===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(i.flags|=4194816)}}function Td(t,i,a,l,h){return Ks(i),a=id(t,i,a,l,void 0,h),l=rd(),t!==null&&!kt?(sd(t,i,h),Zi(t,i,h)):(qe&&l&&zf(i),i.flags|=1,Ft(t,i,a,h),i.child)}function h_(t,i,a,l,h,d){return Ks(i),i.updateQueue=null,a=cy(i,l,a,h),uy(t),l=rd(),t!==null&&!kt?(sd(t,i,d),Zi(t,i,d)):(qe&&l&&zf(i),i.flags|=1,Ft(t,i,a,d),i.child)}function f_(t,i,a,l,h){if(Ks(i),i.stateNode===null){var d=ja,v=a.contextType;typeof v=="object"&&v!==null&&(d=Wt(v)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=vd,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Xf(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?Wt(v):ja,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(_d(i,a,v,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&vd.enqueueReplaceState(d,d.state,null),wl(i,l,d,h),Tl(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var T=i.memoizedProps,I=Xs(a,T);d.props=I;var j=d.context,Y=a.contextType;v=ja,typeof Y=="object"&&Y!==null&&(v=Wt(Y));var X=a.getDerivedStateFromProps;Y=typeof X=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,Y||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||j!==v)&&Zy(i,d,l,v),Sr=!1;var z=i.memoizedState;d.state=z,wl(i,l,d,h),Tl(),j=i.memoizedState,T||z!==j||Sr?(typeof X=="function"&&(_d(i,a,X,l),j=i.memoizedState),(I=Sr||Wy(i,a,I,l,z,j,v))?(Y||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=j),d.props=l,d.state=j,d.context=v,l=I):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Wf(t,i),v=i.memoizedProps,Y=Xs(a,v),d.props=Y,X=i.pendingProps,z=d.context,j=a.contextType,I=ja,typeof j=="object"&&j!==null&&(I=Wt(j)),T=a.getDerivedStateFromProps,(j=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==X||z!==I)&&Zy(i,d,l,I),Sr=!1,z=i.memoizedState,d.state=z,wl(i,l,d,h),Tl();var q=i.memoizedState;v!==X||z!==q||Sr||t!==null&&t.dependencies!==null&&lc(t.dependencies)?(typeof T=="function"&&(_d(i,a,T,l),q=i.memoizedState),(Y=Sr||Wy(i,a,Y,l,z,q,I)||t!==null&&t.dependencies!==null&&lc(t.dependencies))?(j||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,q,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,q,I)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&z===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&z===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=q),d.props=l,d.state=q,d.context=I,l=Y):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&z===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&z===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,Ic(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=$a(i,t.child,null,h),i.child=$a(i,null,a,h)):Ft(t,i,a,h),i.memoizedState=d.state,t=i.child):t=Zi(t,i,h),t}function d_(t,i,a,l){return dl(),i.flags|=256,Ft(t,i,a,l),i.child}var wd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ad(t){return{baseLanes:t,cachePool:ey()}}function bd(t,i,a){return t=t!==null?t.childLanes&~a:0,i&&(t|=qn),t}function m_(t,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=t!==null&&t.memoizedState===null?!1:(Ot.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,t===null){if(qe){if(h?Nr(i):Dr(),qe){var T=ht,I;if(I=T){e:{for(I=T,T=vi;I.nodeType!==8;){if(!T){T=null;break e}if(I=Jn(I.nextSibling),I===null){T=null;break e}}T=I}T!==null?(i.memoizedState={dehydrated:T,treeContext:qs!==null?{id:Yi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},I=En(18,null,null,0),I.stateNode=T,I.return=i,i.child=I,on=i,ht=null,I=!0):I=!1}I||Gs(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return om(T)?i.lanes=32:i.lanes=536870912,null;Wi(i)}return T=l.children,l=l.fallback,h?(Dr(),h=i.mode,T=Cc({mode:"hidden",children:T},h),l=Bs(l,h,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,h=i.child,h.memoizedState=Ad(a),h.childLanes=bd(t,v,a),i.memoizedState=wd,l):(Nr(i),Sd(i,T))}if(I=t.memoizedState,I!==null&&(T=I.dehydrated,T!==null)){if(d)i.flags&256?(Nr(i),i.flags&=-257,i=Rd(t,i,a)):i.memoizedState!==null?(Dr(),i.child=t.child,i.flags|=128,i=null):(Dr(),h=l.fallback,T=i.mode,l=Cc({mode:"visible",children:l.children},T),h=Bs(h,T,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,$a(i,t.child,null,a),l=i.child,l.memoizedState=Ad(a),l.childLanes=bd(t,v,a),i.memoizedState=wd,i=h);else if(Nr(i),om(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var j=v.dgst;v=j,l=Error(s(419)),l.stack="",l.digest=v,ml({value:l,source:null,stack:null}),i=Rd(t,i,a)}else if(kt||gl(t,i,a,!1),v=(a&t.childLanes)!==0,kt||v){if(v=nt,v!==null&&(l=a&-a,l=(l&42)!==0?1:yr(l),l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==I.retryLane))throw I.retryLane=l,Ua(t,l),Sn(v,t,l),s_;T.data==="$?"||Hd(),i=Rd(t,i,a)}else T.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=I.treeContext,ht=Jn(T.nextSibling),on=i,qe=!0,Hs=null,vi=!1,t!==null&&(jn[zn++]=Yi,jn[zn++]=Ki,jn[zn++]=qs,Yi=t.id,Ki=t.overflow,qs=i),i=Sd(i,l.children),i.flags|=4096);return i}return h?(Dr(),h=l.fallback,T=i.mode,I=t.child,j=I.sibling,l=Gi(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&65011712,j!==null?h=Gi(j,h):(h=Bs(h,T,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,T=t.child.memoizedState,T===null?T=Ad(a):(I=T.cachePool,I!==null?(j=Dt._currentValue,I=I.parent!==j?{parent:j,pool:j}:I):I=ey(),T={baseLanes:T.baseLanes|a,cachePool:I}),h.memoizedState=T,h.childLanes=bd(t,v,a),i.memoizedState=wd,l):(Nr(i),a=t.child,t=a.sibling,a=Gi(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,t!==null&&(v=i.deletions,v===null?(i.deletions=[t],i.flags|=16):v.push(t)),i.child=a,i.memoizedState=null,a)}function Sd(t,i){return i=Cc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Cc(t,i){return t=En(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Rd(t,i,a){return $a(i,t.child,null,a),t=Sd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function g_(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Hf(t.return,i,a)}function Id(t,i,a,l,h){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function p_(t,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(Ft(t,i,l.children,a),l=Ot.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&g_(t,a,i);else if(t.tag===19)g_(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(te(Ot,l),h){case"forwards":for(a=i.child,h=null;a!==null;)t=a.alternate,t!==null&&bc(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Id(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&bc(t)===null){i.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}Id(i,!0,a,null,d);break;case"together":Id(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Zi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Vr|=i.lanes,(a&i.childLanes)===0)if(t!==null){if(gl(t,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(s(153));if(i.child!==null){for(t=i.child,a=Gi(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Gi(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function Cd(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&lc(t)))}function yb(t,i,a){switch(i.tag){case 3:tt(i,i.stateNode.containerInfo),br(i,Dt,t.memoizedState.cache),dl();break;case 27:case 5:pr(i);break;case 4:tt(i,i.stateNode.containerInfo);break;case 10:br(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Nr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?m_(t,i,a):(Nr(i),t=Zi(t,i,a),t!==null?t.sibling:null);Nr(i);break;case 19:var h=(t.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(gl(t,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return p_(t,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),te(Ot,Ot.current),l)break;return null;case 22:case 23:return i.lanes=0,u_(t,i,a);case 24:br(i,Dt,t.memoizedState.cache)}return Zi(t,i,a)}function y_(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps)kt=!0;else{if(!Cd(t,a)&&(i.flags&128)===0)return kt=!1,yb(t,i,a);kt=(t.flags&131072)!==0}else kt=!1,qe&&(i.flags&1048576)!==0&&Kp(i,oc,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")Lf(l)?(t=Xs(l,t),i.tag=1,i=f_(null,i,l,t,a)):(i.tag=0,i=Td(null,i,l,t,a));else{if(l!=null){if(h=l.$$typeof,h===Te){i.tag=11,i=a_(null,i,l,t,a);break e}else if(h===P){i.tag=14,i=o_(null,i,l,t,a);break e}}throw i=mt(l)||l,Error(s(306,i,""))}}return i;case 0:return Td(t,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=Xs(l,i.pendingProps),f_(t,i,l,h,a);case 3:e:{if(tt(i,i.stateNode.containerInfo),t===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,Wf(t,i),wl(i,l,null,a);var v=i.memoizedState;if(l=v.cache,br(i,Dt,l),l!==d.cache&&Gf(i,[Dt],a,!0),Tl(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=d_(t,i,l,a);break e}else if(l!==h){h=Ln(Error(s(424)),i),ml(h),i=d_(t,i,l,a);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ht=Jn(t.firstChild),on=i,qe=!0,Hs=null,vi=!0,a=$y(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(dl(),l===h){i=Zi(t,i,a);break e}Ft(t,i,l,a)}i=i.child}return i;case 26:return Ic(t,i),t===null?(a=Tv(i.type,null,i.pendingProps,null))?i.memoizedState=a:qe||(a=i.type,t=i.pendingProps,l=qc(we.current).createElement(a),l[It]=i,l[vt]=t,Gt(l,a,t),gt(l),i.stateNode=l):i.memoizedState=Tv(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return pr(i),t===null&&qe&&(l=i.stateNode=_v(i.type,i.pendingProps,we.current),on=i,vi=!0,h=ht,jr(i.type)?(lm=h,ht=Jn(l.firstChild)):ht=h),Ft(t,i,i.pendingProps.children,a),Ic(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&qe&&((h=l=ht)&&(l=Gb(l,i.type,i.pendingProps,vi),l!==null?(i.stateNode=l,on=i,ht=Jn(l.firstChild),vi=!1,h=!0):h=!1),h||Gs(i)),pr(i),h=i.type,d=i.pendingProps,v=t!==null?t.memoizedProps:null,l=d.children,rm(h,d)?l=null:v!==null&&rm(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=id(t,i,ub,null,null,a),Hl._currentValue=h),Ic(t,i),Ft(t,i,l,a),i.child;case 6:return t===null&&qe&&((t=a=ht)&&(a=Yb(a,i.pendingProps,vi),a!==null?(i.stateNode=a,on=i,ht=null,t=!0):t=!1),t||Gs(i)),null;case 13:return m_(t,i,a);case 4:return tt(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=$a(i,null,l,a):Ft(t,i,l,a),i.child;case 11:return a_(t,i,i.type,i.pendingProps,a);case 7:return Ft(t,i,i.pendingProps,a),i.child;case 8:return Ft(t,i,i.pendingProps.children,a),i.child;case 12:return Ft(t,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,br(i,i.type,l.value),Ft(t,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Ks(i),h=Wt(h),l=l(h),i.flags|=1,Ft(t,i,l,a),i.child;case 14:return o_(t,i,i.type,i.pendingProps,a);case 15:return l_(t,i,i.type,i.pendingProps,a);case 19:return p_(t,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},t===null?(a=Cc(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Gi(t.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return u_(t,i,a);case 24:return Ks(i),l=Wt(Dt),t===null?(h=Qf(),h===null&&(h=nt,d=Yf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},Xf(i),br(i,Dt,h)):((t.lanes&a)!==0&&(Wf(t,i),wl(i,null,null,a),Tl()),h=t.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),br(i,Dt,l)):(l=d.cache,br(i,Dt,l),l!==h.cache&&Gf(i,[Dt],a,!0))),Ft(t,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Ji(t){t.flags|=4}function __(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Rv(i)){if(i=Bn.current,i!==null&&((Ue&4194048)===Ue?Ei!==null:(Ue&62914560)!==Ue&&(Ue&536870912)===0||i!==Ei))throw vl=$f,ty;t.flags|=8192}}function Nc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Yo():536870912,t.lanes|=i,Ja|=i)}function Nl(t,i){if(!qe)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function lt(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function _b(t,i,a){var l=i.pendingProps;switch(Bf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(i),null;case 1:return lt(i),null;case 3:return a=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),$i(Dt),oi(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(fl(i)?Ji(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Xp())),lt(i),null;case 26:return a=i.memoizedState,t===null?(Ji(i),a!==null?(lt(i),__(i,a)):(lt(i),i.flags&=-16777217)):a?a!==t.memoizedState?(Ji(i),lt(i),__(i,a)):(lt(i),i.flags&=-16777217):(t.memoizedProps!==l&&Ji(i),lt(i),i.flags&=-16777217),null;case 27:xi(i),a=we.current;var h=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Ji(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return lt(i),null}t=ge.current,fl(i)?Qp(i):(t=_v(h,l,a),i.stateNode=t,Ji(i))}return lt(i),null;case 5:if(xi(i),a=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Ji(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return lt(i),null}if(t=ge.current,fl(i))Qp(i);else{switch(h=qc(we.current),t){case 1:t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=h.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}t[It]=i,t[vt]=l;e:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)t.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break e;for(;h.sibling===null;){if(h.return===null||h.return===i)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=t;e:switch(Gt(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Ji(i)}}return lt(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Ji(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(t=we.current,fl(i)){if(t=i.stateNode,a=i.memoizedProps,l=null,h=on,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}t[It]=i,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||hv(t.nodeValue,a)),t||Gs(i)}else t=qc(t).createTextNode(l),t[It]=i,i.stateNode=t}return lt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=fl(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[It]=i}else dl(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;lt(i),h=!1}else h=Xp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Wi(i),i):(Wi(i),null)}if(Wi(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==t&&a&&(i.child.flags|=8192),Nc(i,i.updateQueue),lt(i),null;case 4:return oi(),t===null&&Jd(i.stateNode.containerInfo),lt(i),null;case 10:return $i(i.type),lt(i),null;case 19:if(Z(Ot),h=i.memoizedState,h===null)return lt(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)Nl(h,!1);else{if(ft!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=bc(t),d!==null){for(i.flags|=128,Nl(h,!1),t=d.updateQueue,i.updateQueue=t,Nc(i,t),i.subtreeFlags=0,t=a,a=i.child;a!==null;)Yp(a,t),a=a.sibling;return te(Ot,Ot.current&1|2),i.child}t=t.sibling}h.tail!==null&&On()>xc&&(i.flags|=128,l=!0,Nl(h,!1),i.lanes=4194304)}else{if(!l)if(t=bc(d),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,Nc(i,t),Nl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!qe)return lt(i),null}else 2*On()-h.renderingStartTime>xc&&a!==536870912&&(i.flags|=128,l=!0,Nl(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(t=h.last,t!==null?t.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=On(),i.sibling=null,t=Ot.current,te(Ot,l?t&1|2:t&1),i):(lt(i),null);case 22:case 23:return Wi(i),td(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(lt(i),i.subtreeFlags&6&&(i.flags|=8192)):lt(i),a=i.updateQueue,a!==null&&Nc(i,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),t!==null&&Z(Qs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),$i(Dt),lt(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function vb(t,i){switch(Bf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return $i(Dt),oi(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return xi(i),null;case 13:if(Wi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(s(340));dl()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Z(Ot),null;case 4:return oi(),null;case 10:return $i(i.type),null;case 22:case 23:return Wi(i),td(),t!==null&&Z(Qs),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return $i(Dt),null;case 25:return null;default:return null}}function v_(t,i){switch(Bf(i),i.tag){case 3:$i(Dt),oi();break;case 26:case 27:case 5:xi(i);break;case 4:oi();break;case 13:Wi(i);break;case 19:Z(Ot);break;case 10:$i(i.type);break;case 22:case 23:Wi(i),td(),t!==null&&Z(Qs);break;case 24:$i(Dt)}}function Dl(t,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&t)===t){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(T){Je(i,i.return,T)}}function Or(t,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&t)===t){var v=l.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,h=i;var I=a,j=T;try{j()}catch(Y){Je(h,I,Y)}}}l=l.next}while(l!==d)}}catch(Y){Je(i,i.return,Y)}}function E_(t){var i=t.updateQueue;if(i!==null){var a=t.stateNode;try{oy(i,a)}catch(l){Je(t,t.return,l)}}}function T_(t,i,a){a.props=Xs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){Je(t,i,l)}}function Ol(t,i){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(h){Je(t,i,h)}}function Ti(t,i){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Je(t,i,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Je(t,i,h)}else a.current=null}function w_(t){var i=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Je(t,t.return,h)}}function Nd(t,i,a){try{var l=t.stateNode;zb(l,t.type,a,i),l[vt]=i}catch(h){Je(t,t.return,h)}}function A_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&jr(t.type)||t.tag===4}function Dd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||A_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&jr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Od(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(t),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Bc));else if(l!==4&&(l===27&&jr(t.type)&&(a=t.stateNode,i=null),t=t.child,t!==null))for(Od(t,i,a),t=t.sibling;t!==null;)Od(t,i,a),t=t.sibling}function Dc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(l===27&&jr(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Dc(t,i,a),t=t.sibling;t!==null;)Dc(t,i,a),t=t.sibling}function b_(t){var i=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Gt(i,l,a),i[It]=t,i[vt]=a}catch(d){Je(t,t.return,d)}}var er=!1,yt=!1,xd=!1,S_=typeof WeakSet=="function"?WeakSet:Set,Lt=null;function Eb(t,i){if(t=t.containerInfo,nm=Qc,t=kp(t),Df(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var v=0,T=-1,I=-1,j=0,Y=0,X=t,z=null;t:for(;;){for(var q;X!==a||h!==0&&X.nodeType!==3||(T=v+h),X!==d||l!==0&&X.nodeType!==3||(I=v+l),X.nodeType===3&&(v+=X.nodeValue.length),(q=X.firstChild)!==null;)z=X,X=q;for(;;){if(X===t)break t;if(z===a&&++j===h&&(T=v),z===d&&++Y===l&&(I=v),(q=X.nextSibling)!==null)break;X=z,z=X.parentNode}X=q}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(im={focusedElem:t,selectionRange:a},Qc=!1,Lt=i;Lt!==null;)if(i=Lt,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,Lt=t;else for(;Lt!==null;){switch(i=Lt,d=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var Ee=Xs(a.type,h,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(Ee,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(pe){Je(a,a.return,pe)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,a=t.nodeType,a===9)am(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":am(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=i.sibling,t!==null){t.return=i.return,Lt=t;break}Lt=i.return}}function R_(t,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:xr(t,a),l&4&&Dl(5,a);break;case 1:if(xr(t,a),l&4)if(t=a.stateNode,i===null)try{t.componentDidMount()}catch(v){Je(a,a.return,v)}else{var h=Xs(a.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(h,i,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Je(a,a.return,v)}}l&64&&E_(a),l&512&&Ol(a,a.return);break;case 3:if(xr(t,a),l&64&&(t=a.updateQueue,t!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{oy(t,i)}catch(v){Je(a,a.return,v)}}break;case 27:i===null&&l&4&&b_(a);case 26:case 5:xr(t,a),i===null&&l&4&&w_(a),l&512&&Ol(a,a.return);break;case 12:xr(t,a);break;case 13:xr(t,a),l&4&&N_(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Nb.bind(null,a),Kb(t,a))));break;case 22:if(l=a.memoizedState!==null||er,!l){i=i!==null&&i.memoizedState!==null||yt,h=er;var d=yt;er=l,(yt=i)&&!d?Pr(t,a,(a.subtreeFlags&8772)!==0):xr(t,a),er=h,yt=d}break;case 30:break;default:xr(t,a)}}function I_(t){var i=t.alternate;i!==null&&(t.alternate=null,I_(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Er(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ot=null,un=!1;function tr(t,i,a){for(a=a.child;a!==null;)C_(t,i,a),a=a.sibling}function C_(t,i,a){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(ct,a)}catch{}switch(a.tag){case 26:yt||Ti(a,i),tr(t,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:yt||Ti(a,i);var l=ot,h=un;jr(a.type)&&(ot=a.stateNode,un=!1),tr(t,i,a),zl(a.stateNode),ot=l,un=h;break;case 5:yt||Ti(a,i);case 6:if(l=ot,h=un,ot=null,tr(t,i,a),ot=l,un=h,ot!==null)if(un)try{(ot.nodeType===9?ot.body:ot.nodeName==="HTML"?ot.ownerDocument.body:ot).removeChild(a.stateNode)}catch(d){Je(a,i,d)}else try{ot.removeChild(a.stateNode)}catch(d){Je(a,i,d)}break;case 18:ot!==null&&(un?(t=ot,pv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ql(t)):pv(ot,a.stateNode));break;case 4:l=ot,h=un,ot=a.stateNode.containerInfo,un=!0,tr(t,i,a),ot=l,un=h;break;case 0:case 11:case 14:case 15:yt||Or(2,a,i),yt||Or(4,a,i),tr(t,i,a);break;case 1:yt||(Ti(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&T_(a,i,l)),tr(t,i,a);break;case 21:tr(t,i,a);break;case 22:yt=(l=yt)||a.memoizedState!==null,tr(t,i,a),yt=l;break;default:tr(t,i,a)}}function N_(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ql(t)}catch(a){Je(i,i.return,a)}}function Tb(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new S_),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new S_),i;default:throw Error(s(435,t.tag))}}function Pd(t,i){var a=Tb(t);i.forEach(function(l){var h=Db.bind(null,t,l);a.has(l)||(a.add(l),l.then(h,h))})}function Tn(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=t,v=i,T=v;e:for(;T!==null;){switch(T.tag){case 27:if(jr(T.type)){ot=T.stateNode,un=!1;break e}break;case 5:ot=T.stateNode,un=!1;break e;case 3:case 4:ot=T.stateNode.containerInfo,un=!0;break e}T=T.return}if(ot===null)throw Error(s(160));C_(d,v,h),ot=null,un=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)D_(i,t),i=i.sibling}var Zn=null;function D_(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Tn(i,t),wn(t),l&4&&(Or(3,t,t.return),Dl(3,t),Or(5,t,t.return));break;case 1:Tn(i,t),wn(t),l&512&&(yt||a===null||Ti(a,a.return)),l&64&&er&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=Zn;if(Tn(i,t),wn(t),l&512&&(yt||a===null||Ti(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[Ss]||d[It]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Gt(d,l,a),d[It]=t,gt(d),l=d;break e;case"link":var v=bv("link","href",h).get(l+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(d=v[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break t}}d=h.createElement(l),Gt(d,l,a),h.head.appendChild(d);break;case"meta":if(v=bv("meta","content",h).get(l+(a.content||""))){for(T=0;T<v.length;T++)if(d=v[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break t}}d=h.createElement(l),Gt(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[It]=t,gt(d),l=d}t.stateNode=l}else Sv(h,t.type,t.stateNode);else t.stateNode=Av(h,l,t.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?Sv(h,t.type,t.stateNode):Av(h,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Nd(t,t.memoizedProps,a.memoizedProps)}break;case 27:Tn(i,t),wn(t),l&512&&(yt||a===null||Ti(a,a.return)),a!==null&&l&4&&Nd(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Tn(i,t),wn(t),l&512&&(yt||a===null||Ti(a,a.return)),t.flags&32){h=t.stateNode;try{Pn(h,"")}catch(q){Je(t,t.return,q)}}l&4&&t.stateNode!=null&&(h=t.memoizedProps,Nd(t,h,a!==null?a.memoizedProps:h)),l&1024&&(xd=!0);break;case 6:if(Tn(i,t),wn(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(q){Je(t,t.return,q)}}break;case 3:if(Gc=null,h=Zn,Zn=Fc(i.containerInfo),Tn(i,t),Zn=h,wn(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Ql(i.containerInfo)}catch(q){Je(t,t.return,q)}xd&&(xd=!1,O_(t));break;case 4:l=Zn,Zn=Fc(t.stateNode.containerInfo),Tn(i,t),wn(t),Zn=l;break;case 12:Tn(i,t),wn(t);break;case 13:Tn(i,t),wn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(jd=On()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Pd(t,l)));break;case 22:h=t.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,j=er,Y=yt;if(er=j||h,yt=Y||I,Tn(i,t),yt=Y,er=j,wn(t),l&8192)e:for(i=t.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||I||er||yt||Ws(t)),a=null,i=t;;){if(i.tag===5||i.tag===26){if(a===null){I=a=i;try{if(d=I.stateNode,h)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=I.stateNode;var X=I.memoizedProps.style,z=X!=null&&X.hasOwnProperty("display")?X.display:null;T.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(q){Je(I,I.return,q)}}}else if(i.tag===6){if(a===null){I=i;try{I.stateNode.nodeValue=h?"":I.memoizedProps}catch(q){Je(I,I.return,q)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Pd(t,a))));break;case 19:Tn(i,t),wn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Pd(t,l)));break;case 30:break;case 21:break;default:Tn(i,t),wn(t)}}function wn(t){var i=t.flags;if(i&2){try{for(var a,l=t.return;l!==null;){if(A_(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Dd(t);Dc(t,d,h);break;case 5:var v=a.stateNode;a.flags&32&&(Pn(v,""),a.flags&=-33);var T=Dd(t);Dc(t,T,v);break;case 3:case 4:var I=a.stateNode.containerInfo,j=Dd(t);Od(t,j,I);break;default:throw Error(s(161))}}catch(Y){Je(t,t.return,Y)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function O_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;O_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function xr(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)R_(t,i.alternate,i),i=i.sibling}function Ws(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Or(4,i,i.return),Ws(i);break;case 1:Ti(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&T_(i,i.return,a),Ws(i);break;case 27:zl(i.stateNode);case 26:case 5:Ti(i,i.return),Ws(i);break;case 22:i.memoizedState===null&&Ws(i);break;case 30:Ws(i);break;default:Ws(i)}t=t.sibling}}function Pr(t,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=t,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:Pr(h,d,a),Dl(4,d);break;case 1:if(Pr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(j){Je(l,l.return,j)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var I=h.shared.hiddenCallbacks;if(I!==null)for(h.shared.hiddenCallbacks=null,h=0;h<I.length;h++)ay(I[h],T)}catch(j){Je(l,l.return,j)}}a&&v&64&&E_(d),Ol(d,d.return);break;case 27:b_(d);case 26:case 5:Pr(h,d,a),a&&l===null&&v&4&&w_(d),Ol(d,d.return);break;case 12:Pr(h,d,a);break;case 13:Pr(h,d,a),a&&v&4&&N_(h,d);break;case 22:d.memoizedState===null&&Pr(h,d,a),Ol(d,d.return);break;case 30:break;default:Pr(h,d,a)}i=i.sibling}}function Md(t,i){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&pl(a))}function Vd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&pl(t))}function wi(t,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)x_(t,i,a,l),i=i.sibling}function x_(t,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:wi(t,i,a,l),h&2048&&Dl(9,i);break;case 1:wi(t,i,a,l);break;case 3:wi(t,i,a,l),h&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&pl(t)));break;case 12:if(h&2048){wi(t,i,a,l),t=i.stateNode;try{var d=i.memoizedProps,v=d.id,T=d.onPostCommit;typeof T=="function"&&T(v,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Je(i,i.return,I)}}else wi(t,i,a,l);break;case 13:wi(t,i,a,l);break;case 23:break;case 22:d=i.stateNode,v=i.alternate,i.memoizedState!==null?d._visibility&2?wi(t,i,a,l):xl(t,i):d._visibility&2?wi(t,i,a,l):(d._visibility|=2,Xa(t,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&Md(v,i);break;case 24:wi(t,i,a,l),h&2048&&Vd(i.alternate,i);break;default:wi(t,i,a,l)}}function Xa(t,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=t,v=i,T=a,I=l,j=v.flags;switch(v.tag){case 0:case 11:case 15:Xa(d,v,T,I,h),Dl(8,v);break;case 23:break;case 22:var Y=v.stateNode;v.memoizedState!==null?Y._visibility&2?Xa(d,v,T,I,h):xl(d,v):(Y._visibility|=2,Xa(d,v,T,I,h)),h&&j&2048&&Md(v.alternate,v);break;case 24:Xa(d,v,T,I,h),h&&j&2048&&Vd(v.alternate,v);break;default:Xa(d,v,T,I,h)}i=i.sibling}}function xl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=t,l=i,h=l.flags;switch(l.tag){case 22:xl(a,l),h&2048&&Md(l.alternate,l);break;case 24:xl(a,l),h&2048&&Vd(l.alternate,l);break;default:xl(a,l)}i=i.sibling}}var Pl=8192;function Wa(t){if(t.subtreeFlags&Pl)for(t=t.child;t!==null;)P_(t),t=t.sibling}function P_(t){switch(t.tag){case 26:Wa(t),t.flags&Pl&&t.memoizedState!==null&&aS(Zn,t.memoizedState,t.memoizedProps);break;case 5:Wa(t);break;case 3:case 4:var i=Zn;Zn=Fc(t.stateNode.containerInfo),Wa(t),Zn=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Pl,Pl=16777216,Wa(t),Pl=i):Wa(t));break;default:Wa(t)}}function M_(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Ml(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Lt=l,k_(l,t)}M_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)V_(t),t=t.sibling}function V_(t){switch(t.tag){case 0:case 11:case 15:Ml(t),t.flags&2048&&Or(9,t,t.return);break;case 3:Ml(t);break;case 12:Ml(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Oc(t)):Ml(t);break;default:Ml(t)}}function Oc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Lt=l,k_(l,t)}M_(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Or(8,i,i.return),Oc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,Oc(i));break;default:Oc(i)}t=t.sibling}}function k_(t,i){for(;Lt!==null;){var a=Lt;switch(a.tag){case 0:case 11:case 15:Or(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:pl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Lt=l;else e:for(a=t;Lt!==null;){l=Lt;var h=l.sibling,d=l.return;if(I_(l),l===a){Lt=null;break e}if(h!==null){h.return=d,Lt=h;break e}Lt=d}}}var wb={getCacheForType:function(t){var i=Wt(Dt),a=i.data.get(t);return a===void 0&&(a=t(),i.data.set(t,a)),a}},Ab=typeof WeakMap=="function"?WeakMap:Map,Ye=0,nt=null,Ne=null,Ue=0,Ke=0,An=null,Mr=!1,Za=!1,kd=!1,nr=0,ft=0,Vr=0,Zs=0,Ld=0,qn=0,Ja=0,Vl=null,cn=null,Ud=!1,jd=0,xc=1/0,Pc=null,kr=null,Ht=0,Lr=null,eo=null,to=0,zd=0,Bd=null,L_=null,kl=0,qd=null;function bn(){if((Ye&2)!==0&&Ue!==0)return Ue&-Ue;if(G.T!==null){var t=qa;return t!==0?t:$d()}return _r()}function U_(){qn===0&&(qn=(Ue&536870912)===0||qe?Go():536870912);var t=Bn.current;return t!==null&&(t.flags|=32),qn}function Sn(t,i,a){(t===nt&&(Ke===2||Ke===9)||t.cancelPendingCommit!==null)&&(no(t,0),Ur(t,Ue,qn,!1)),Mi(t,a),((Ye&2)===0||t!==nt)&&(t===nt&&((Ye&2)===0&&(Zs|=a),ft===4&&Ur(t,Ue,qn,!1)),Ai(t))}function j_(t,i,a){if((Ye&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&t.expiredLanes)===0||bs(t,i),h=l?Rb(t,i):Gd(t,i,!0),d=l;do{if(h===0){Za&&!l&&Ur(t,i,0,!1);break}else{if(a=t.current.alternate,d&&!bb(a)){h=Gd(t,i,!1),d=!1;continue}if(h===2){if(d=i,t.errorRecoveryDisabledLanes&d)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;e:{var T=t;h=Vl;var I=T.current.memoizedState.isDehydrated;if(I&&(no(T,v).flags|=256),v=Gd(T,v,!1),v!==2){if(kd&&!I){T.errorRecoveryDisabledLanes|=d,Zs|=d,h=4;break e}d=cn,cn=h,d!==null&&(cn===null?cn=d:cn.push.apply(cn,d))}h=v}if(d=!1,h!==2)continue}}if(h===1){no(t,0),Ur(t,i,0,!0);break}e:{switch(l=t,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Ur(l,i,qn,!Mr);break e;case 2:cn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=jd+300-On(),10<h)){if(Ur(l,i,qn,!Mr),va(l,0,!0)!==0)break e;l.timeoutHandle=mv(z_.bind(null,l,a,cn,Pc,Ud,i,qn,Zs,Ja,Mr,d,2,-0,0),h);break e}z_(l,a,cn,Pc,Ud,i,qn,Zs,Ja,Mr,d,0,-0,0)}}break}while(!0);Ai(t)}function z_(t,i,a,l,h,d,v,T,I,j,Y,X,z,q){if(t.timeoutHandle=-1,X=i.subtreeFlags,(X&8192||(X&16785408)===16785408)&&(Fl={stylesheets:null,count:0,unsuspend:sS},P_(i),X=oS(),X!==null)){t.cancelPendingCommit=X(K_.bind(null,t,i,d,a,l,h,v,T,I,Y,1,z,q)),Ur(t,d,v,!j);return}K_(t,i,d,a,l,h,v,T,I)}function bb(t){for(var i=t;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!vn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ur(t,i,a,l){i&=~Ld,i&=~Zs,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var h=i;0<h;){var d=31-Xt(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&li(t,a,i)}function Mc(){return(Ye&6)===0?(Ll(0),!1):!0}function Fd(){if(Ne!==null){if(Ke===0)var t=Ne.return;else t=Ne,Qi=Ys=null,ad(t),Qa=null,Il=0,t=Ne;for(;t!==null;)v_(t.alternate,t),t=t.return;Ne=null}}function no(t,i){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,qb(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Fd(),nt=t,Ne=a=Gi(t.current,null),Ue=i,Ke=0,An=null,Mr=!1,Za=bs(t,i),kd=!1,Ja=qn=Ld=Zs=Vr=ft=0,cn=Vl=null,Ud=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var h=31-Xt(l),d=1<<h;i|=t[h],l&=~d}return nr=i,nc(),a}function B_(t,i){Re=null,G.H=Tc,i===_l||i===hc?(i=ry(),Ke=3):i===ty?(i=ry(),Ke=4):Ke=i===s_?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,An=i,Ne===null&&(ft=1,Rc(t,Ln(i,t.current)))}function q_(){var t=G.H;return G.H=Tc,t===null?Tc:t}function F_(){var t=G.A;return G.A=wb,t}function Hd(){ft=4,Mr||(Ue&4194048)!==Ue&&Bn.current!==null||(Za=!0),(Vr&134217727)===0&&(Zs&134217727)===0||nt===null||Ur(nt,Ue,qn,!1)}function Gd(t,i,a){var l=Ye;Ye|=2;var h=q_(),d=F_();(nt!==t||Ue!==i)&&(Pc=null,no(t,i)),i=!1;var v=ft;e:do try{if(Ke!==0&&Ne!==null){var T=Ne,I=An;switch(Ke){case 8:Fd(),v=6;break e;case 3:case 2:case 9:case 6:Bn.current===null&&(i=!0);var j=Ke;if(Ke=0,An=null,io(t,T,I,j),a&&Za){v=0;break e}break;default:j=Ke,Ke=0,An=null,io(t,T,I,j)}}Sb(),v=ft;break}catch(Y){B_(t,Y)}while(!0);return i&&t.shellSuspendCounter++,Qi=Ys=null,Ye=l,G.H=h,G.A=d,Ne===null&&(nt=null,Ue=0,nc()),v}function Sb(){for(;Ne!==null;)H_(Ne)}function Rb(t,i){var a=Ye;Ye|=2;var l=q_(),h=F_();nt!==t||Ue!==i?(Pc=null,xc=On()+500,no(t,i)):Za=bs(t,i);e:do try{if(Ke!==0&&Ne!==null){i=Ne;var d=An;t:switch(Ke){case 1:Ke=0,An=null,io(t,i,d,1);break;case 2:case 9:if(ny(d)){Ke=0,An=null,G_(i);break}i=function(){Ke!==2&&Ke!==9||nt!==t||(Ke=7),Ai(t)},d.then(i,i);break e;case 3:Ke=7;break e;case 4:Ke=5;break e;case 7:ny(d)?(Ke=0,An=null,G_(i)):(Ke=0,An=null,io(t,i,d,7));break;case 5:var v=null;switch(Ne.tag){case 26:v=Ne.memoizedState;case 5:case 27:var T=Ne;if(!v||Rv(v)){Ke=0,An=null;var I=T.sibling;if(I!==null)Ne=I;else{var j=T.return;j!==null?(Ne=j,Vc(j)):Ne=null}break t}}Ke=0,An=null,io(t,i,d,5);break;case 6:Ke=0,An=null,io(t,i,d,6);break;case 8:Fd(),ft=6;break e;default:throw Error(s(462))}}Ib();break}catch(Y){B_(t,Y)}while(!0);return Qi=Ys=null,G.H=l,G.A=h,Ye=a,Ne!==null?0:(nt=null,Ue=0,nc(),ft)}function Ib(){for(;Ne!==null&&!Bo();)H_(Ne)}function H_(t){var i=y_(t.alternate,t,nr);t.memoizedProps=t.pendingProps,i===null?Vc(t):Ne=i}function G_(t){var i=t,a=i.alternate;switch(i.tag){case 15:case 0:i=h_(a,i,i.pendingProps,i.type,void 0,Ue);break;case 11:i=h_(a,i,i.pendingProps,i.type.render,i.ref,Ue);break;case 5:ad(i);default:v_(a,i),i=Ne=Yp(i,nr),i=y_(a,i,nr)}t.memoizedProps=t.pendingProps,i===null?Vc(t):Ne=i}function io(t,i,a,l){Qi=Ys=null,ad(i),Qa=null,Il=0;var h=i.return;try{if(pb(t,h,i,a,Ue)){ft=1,Rc(t,Ln(a,t.current)),Ne=null;return}}catch(d){if(h!==null)throw Ne=h,d;ft=1,Rc(t,Ln(a,t.current)),Ne=null;return}i.flags&32768?(qe||l===1?t=!0:Za||(Ue&536870912)!==0?t=!1:(Mr=t=!0,(l===2||l===9||l===3||l===6)&&(l=Bn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Y_(i,t)):Vc(i)}function Vc(t){var i=t;do{if((i.flags&32768)!==0){Y_(i,Mr);return}t=i.return;var a=_b(i.alternate,i,nr);if(a!==null){Ne=a;return}if(i=i.sibling,i!==null){Ne=i;return}Ne=i=t}while(i!==null);ft===0&&(ft=5)}function Y_(t,i){do{var a=vb(t.alternate,t);if(a!==null){a.flags&=32767,Ne=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(t=t.sibling,t!==null)){Ne=t;return}Ne=t=a}while(t!==null);ft=6,Ne=null}function K_(t,i,a,l,h,d,v,T,I){t.cancelPendingCommit=null;do kc();while(Ht!==0);if((Ye&6)!==0)throw Error(s(327));if(i!==null){if(i===t.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Vf,Ko(t,a,d,v,T,I),t===nt&&(Ne=nt=null,Ue=0),eo=i,Lr=t,to=a,zd=d,Bd=h,L_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Ob(Es,function(){return Z_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=G.T,G.T=null,h=se.p,se.p=2,v=Ye,Ye|=4;try{Eb(t,i,a)}finally{Ye=v,se.p=h,G.T=l}}Ht=1,Q_(),$_(),X_()}}function Q_(){if(Ht===1){Ht=0;var t=Lr,i=eo,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=G.T,G.T=null;var l=se.p;se.p=2;var h=Ye;Ye|=4;try{D_(i,t);var d=im,v=kp(t.containerInfo),T=d.focusedElem,I=d.selectionRange;if(v!==T&&T&&T.ownerDocument&&Vp(T.ownerDocument.documentElement,T)){if(I!==null&&Df(T)){var j=I.start,Y=I.end;if(Y===void 0&&(Y=j),"selectionStart"in T)T.selectionStart=j,T.selectionEnd=Math.min(Y,T.value.length);else{var X=T.ownerDocument||document,z=X&&X.defaultView||window;if(z.getSelection){var q=z.getSelection(),Ee=T.textContent.length,pe=Math.min(I.start,Ee),We=I.end===void 0?pe:Math.min(I.end,Ee);!q.extend&&pe>We&&(v=We,We=pe,pe=v);var k=Mp(T,pe),D=Mp(T,We);if(k&&D&&(q.rangeCount!==1||q.anchorNode!==k.node||q.anchorOffset!==k.offset||q.focusNode!==D.node||q.focusOffset!==D.offset)){var U=X.createRange();U.setStart(k.node,k.offset),q.removeAllRanges(),pe>We?(q.addRange(U),q.extend(D.node,D.offset)):(U.setEnd(D.node,D.offset),q.addRange(U))}}}}for(X=[],q=T;q=q.parentNode;)q.nodeType===1&&X.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<X.length;T++){var Q=X[T];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}Qc=!!nm,im=nm=null}finally{Ye=h,se.p=l,G.T=a}}t.current=i,Ht=2}}function $_(){if(Ht===2){Ht=0;var t=Lr,i=eo,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=G.T,G.T=null;var l=se.p;se.p=2;var h=Ye;Ye|=4;try{R_(t,i.alternate,i)}finally{Ye=h,se.p=l,G.T=a}}Ht=3}}function X_(){if(Ht===4||Ht===3){Ht=0,Ou();var t=Lr,i=eo,a=to,l=L_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Ht=5:(Ht=0,eo=Lr=null,W_(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(kr=null),Ea(a),i=i.stateNode,Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(ct,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=G.T,h=se.p,se.p=2,G.T=null;try{for(var d=t.onRecoverableError,v=0;v<l.length;v++){var T=l[v];d(T.value,{componentStack:T.stack})}}finally{G.T=i,se.p=h}}(to&3)!==0&&kc(),Ai(t),h=t.pendingLanes,(a&4194090)!==0&&(h&42)!==0?t===qd?kl++:(kl=0,qd=t):kl=0,Ll(0)}}function W_(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,pl(i)))}function kc(t){return Q_(),$_(),X_(),Z_()}function Z_(){if(Ht!==5)return!1;var t=Lr,i=zd;zd=0;var a=Ea(to),l=G.T,h=se.p;try{se.p=32>a?32:a,G.T=null,a=Bd,Bd=null;var d=Lr,v=to;if(Ht=0,eo=Lr=null,to=0,(Ye&6)!==0)throw Error(s(331));var T=Ye;if(Ye|=4,V_(d.current),x_(d,d.current,v,a),Ye=T,Ll(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(ct,d)}catch{}return!0}finally{se.p=h,G.T=l,W_(t,i)}}function J_(t,i,a){i=Ln(a,i),i=Ed(t.stateNode,i,2),t=Ir(t,i,2),t!==null&&(Mi(t,2),Ai(t))}function Je(t,i,a){if(t.tag===3)J_(t,t,a);else for(;i!==null;){if(i.tag===3){J_(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(kr===null||!kr.has(l))){t=Ln(a,t),a=i_(2),l=Ir(i,a,2),l!==null&&(r_(a,l,i,t),Mi(l,2),Ai(l));break}}i=i.return}}function Yd(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new Ab;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(kd=!0,h.add(a),t=Cb.bind(null,t,i,a),i.then(t,t))}function Cb(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,nt===t&&(Ue&a)===a&&(ft===4||ft===3&&(Ue&62914560)===Ue&&300>On()-jd?(Ye&2)===0&&no(t,0):Ld|=a,Ja===Ue&&(Ja=0)),Ai(t)}function ev(t,i){i===0&&(i=Yo()),t=Ua(t,i),t!==null&&(Mi(t,i),Ai(t))}function Nb(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),ev(t,a)}function Db(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),ev(t,a)}function Ob(t,i){return _s(t,i)}var Lc=null,ro=null,Kd=!1,Uc=!1,Qd=!1,Js=0;function Ai(t){t!==ro&&t.next===null&&(ro===null?Lc=ro=t:ro=ro.next=t),Uc=!0,Kd||(Kd=!0,Pb())}function Ll(t,i){if(!Qd&&Uc){Qd=!0;do for(var a=!1,l=Lc;l!==null;){if(t!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-Xt(42|t)+1)-1,d&=h&~(v&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,rv(l,d))}else d=Ue,d=va(l,l===nt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||bs(l,d)||(a=!0,rv(l,d));l=l.next}while(a);Qd=!1}}function xb(){tv()}function tv(){Uc=Kd=!1;var t=0;Js!==0&&(Bb()&&(t=Js),Js=0);for(var i=On(),a=null,l=Lc;l!==null;){var h=l.next,d=nv(l,i);d===0?(l.next=null,a===null?Lc=h:a.next=h,h===null&&(ro=a)):(a=l,(t!==0||(d&3)!==0)&&(Uc=!0)),l=h}Ll(t)}function nv(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var v=31-Xt(d),T=1<<v,I=h[v];I===-1?((T&a)===0||(T&l)!==0)&&(h[v]=Ho(T,i)):I<=i&&(t.expiredLanes|=T),d&=~T}if(i=nt,a=Ue,a=va(t,t===i?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===i&&(Ke===2||Ke===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&vs(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||bs(t,a)){if(i=a&-a,i===t.callbackPriority)return i;switch(l!==null&&vs(l),Ea(a)){case 2:case 8:a=ya;break;case 32:a=Es;break;case 268435456:a=_a;break;default:a=Es}return l=iv.bind(null,t),a=_s(a,l),t.callbackPriority=i,t.callbackNode=a,i}return l!==null&&l!==null&&vs(l),t.callbackPriority=2,t.callbackNode=null,2}function iv(t,i){if(Ht!==0&&Ht!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(kc()&&t.callbackNode!==a)return null;var l=Ue;return l=va(t,t===nt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(j_(t,l,i),nv(t,On()),t.callbackNode!=null&&t.callbackNode===a?iv.bind(null,t):null)}function rv(t,i){if(kc())return null;j_(t,i,!0)}function Pb(){Fb(function(){(Ye&6)!==0?_s(qo,xb):tv()})}function $d(){return Js===0&&(Js=Go()),Js}function sv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ra(""+t)}function av(t,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,t.id&&a.setAttribute("form",t.id),i.parentNode.insertBefore(a,i),t=new FormData(t),a.parentNode.removeChild(a),t}function Mb(t,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=sv((h[vt]||null).action),v=l.submitter;v&&(i=(i=v[vt]||null)?sv(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var T=new Ia("action","action",null,l,h);t.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Js!==0){var I=v?av(h,v):new FormData(h);gd(a,{pending:!0,data:I,method:h.method,action:d},null,I)}}else typeof d=="function"&&(T.preventDefault(),I=v?av(h,v):new FormData(h),gd(a,{pending:!0,data:I,method:h.method,action:d},d,I))},currentTarget:h}]})}}for(var Xd=0;Xd<Mf.length;Xd++){var Wd=Mf[Xd],Vb=Wd.toLowerCase(),kb=Wd[0].toUpperCase()+Wd.slice(1);Wn(Vb,"on"+kb)}Wn(jp,"onAnimationEnd"),Wn(zp,"onAnimationIteration"),Wn(Bp,"onAnimationStart"),Wn("dblclick","onDoubleClick"),Wn("focusin","onFocus"),Wn("focusout","onBlur"),Wn(JA,"onTransitionRun"),Wn(eb,"onTransitionStart"),Wn(tb,"onTransitionCancel"),Wn(qp,"onTransitionEnd"),ki("onMouseEnter",["mouseout","mouseover"]),ki("onMouseLeave",["mouseout","mouseover"]),ki("onPointerEnter",["pointerout","pointerover"]),ki("onPointerLeave",["pointerout","pointerover"]),$n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$n("onBeforeInput",["compositionend","keypress","textInput","paste"]),$n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ul));function ov(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],h=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var T=l[v],I=T.instance,j=T.currentTarget;if(T=T.listener,I!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=j;try{d(h)}catch(Y){Sc(Y)}h.currentTarget=null,d=I}else for(v=0;v<l.length;v++){if(T=l[v],I=T.instance,j=T.currentTarget,T=T.listener,I!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=j;try{d(h)}catch(Y){Sc(Y)}h.currentTarget=null,d=I}}}}function De(t,i){var a=i[$o];a===void 0&&(a=i[$o]=new Set);var l=t+"__bubble";a.has(l)||(lv(i,t,2,!1),a.add(l))}function Zd(t,i,a){var l=0;i&&(l|=4),lv(a,t,l,i)}var jc="_reactListening"+Math.random().toString(36).slice(2);function Jd(t){if(!t[jc]){t[jc]=!0,Xo.forEach(function(a){a!=="selectionchange"&&(Lb.has(a)||Zd(a,!1,t),Zd(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[jc]||(i[jc]=!0,Zd("selectionchange",!1,i))}}function lv(t,i,a,l){switch(xv(i)){case 2:var h=cS;break;case 8:h=hS;break;default:h=dm}a=h.bind(null,i,a,t),h=void 0,!Vn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(i,a,{capture:!0,passive:h}):t.addEventListener(i,a,!0):h!==void 0?t.addEventListener(i,a,{passive:h}):t.addEventListener(i,a,!1)}function em(t,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var T=l.stateNode.containerInfo;if(T===h)break;if(v===4)for(v=l.return;v!==null;){var I=v.tag;if((I===3||I===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;T!==null;){if(v=Vi(T),v===null)return;if(I=v.tag,I===5||I===6||I===26||I===27){l=d=v;continue e}T=T.parentNode}}l=l.return}Bu(function(){var j=d,Y=Mn(a),X=[];e:{var z=Fp.get(t);if(z!==void 0){var q=Ia,Ee=t;switch(t){case"keypress":if(mi(a)===0)break e;case"keydown":case"keyup":q=Pa;break;case"focusin":Ee="focus",q=Da;break;case"focusout":Ee="blur",q=Da;break;case"beforeblur":case"afterblur":q=Da;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=kn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=Rf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=$u;break;case jp:case zp:case Bp:q=Oa;break;case qp:q=Wu;break;case"scroll":case"scrollend":q=qu;break;case"wheel":q=Ma;break;case"copy":case"cut":case"paste":q=xa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=ll;break;case"toggle":case"beforetoggle":q=Ju}var pe=(i&4)!==0,We=!pe&&(t==="scroll"||t==="scrollend"),k=pe?z!==null?z+"Capture":null:z;pe=[];for(var D=j,U;D!==null;){var Q=D;if(U=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||U===null||k===null||(Q=xs(D,k),Q!=null&&pe.push(jl(D,Q,U))),We)break;D=D.return}0<pe.length&&(z=new q(z,Ee,null,a,Y),X.push({event:z,listeners:pe}))}}if((i&7)===0){e:{if(z=t==="mouseover"||t==="pointerover",q=t==="mouseout"||t==="pointerout",z&&a!==ji&&(Ee=a.relatedTarget||a.fromElement)&&(Vi(Ee)||Ee[xn]))break e;if((q||z)&&(z=Y.window===Y?Y:(z=Y.ownerDocument)?z.defaultView||z.parentWindow:window,q?(Ee=a.relatedTarget||a.toElement,q=j,Ee=Ee?Vi(Ee):null,Ee!==null&&(We=u(Ee),pe=Ee.tag,Ee!==We||pe!==5&&pe!==27&&pe!==6)&&(Ee=null)):(q=null,Ee=j),q!==Ee)){if(pe=kn,Q="onMouseLeave",k="onMouseEnter",D="mouse",(t==="pointerout"||t==="pointerover")&&(pe=ll,Q="onPointerLeave",k="onPointerEnter",D="pointer"),We=q==null?z:ci(q),U=Ee==null?z:ci(Ee),z=new pe(Q,D+"leave",q,a,Y),z.target=We,z.relatedTarget=U,Q=null,Vi(Y)===j&&(pe=new pe(k,D+"enter",Ee,a,Y),pe.target=U,pe.relatedTarget=We,Q=pe),We=Q,q&&Ee)t:{for(pe=q,k=Ee,D=0,U=pe;U;U=so(U))D++;for(U=0,Q=k;Q;Q=so(Q))U++;for(;0<D-U;)pe=so(pe),D--;for(;0<U-D;)k=so(k),U--;for(;D--;){if(pe===k||k!==null&&pe===k.alternate)break t;pe=so(pe),k=so(k)}pe=null}else pe=null;q!==null&&uv(X,z,q,pe,!1),Ee!==null&&We!==null&&uv(X,We,Ee,pe,!0)}}e:{if(z=j?ci(j):window,q=z.nodeName&&z.nodeName.toLowerCase(),q==="select"||q==="input"&&z.type==="file")var ce=Cp;else if(Nt(z))if(Np)ce=XA;else{ce=QA;var Ce=KA}else q=z.nodeName,!q||q.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?j&&tl(j.elementType)&&(ce=Cp):ce=$A;if(ce&&(ce=ce(t,j))){Hi(X,ce,a,Y);break e}Ce&&Ce(t,z,j),t==="focusout"&&j&&z.type==="number"&&j.memoizedProps.value!=null&&wr(z,"number",z.value)}switch(Ce=j?ci(j):window,t){case"focusin":(Nt(Ce)||Ce.contentEditable==="true")&&(Va=Ce,Of=j,hl=null);break;case"focusout":hl=Of=Va=null;break;case"mousedown":xf=!0;break;case"contextmenu":case"mouseup":case"dragend":xf=!1,Lp(X,a,Y);break;case"selectionchange":if(ZA)break;case"keydown":case"keyup":Lp(X,a,Y)}var fe;if(yi)e:{switch(t){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else ke?H(t,a)&&(_e="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(_&&a.locale!=="ko"&&(ke||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&ke&&(fe=il()):(di=Y,Ar="value"in di?di.value:di.textContent,ke=!0)),Ce=zc(j,_e),0<Ce.length&&(_e=new al(_e,t,null,a,Y),X.push({event:_e,listeners:Ce}),fe?_e.data=fe:(fe=re(a),fe!==null&&(_e.data=fe)))),(fe=g?Ct(t,a):Le(t,a))&&(_e=zc(j,"onBeforeInput"),0<_e.length&&(Ce=new al("onBeforeInput","beforeinput",null,a,Y),X.push({event:Ce,listeners:_e}),Ce.data=fe)),Mb(X,t,j,a,Y)}ov(X,i)})}function jl(t,i,a){return{instance:t,listener:i,currentTarget:a}}function zc(t,i){for(var a=i+"Capture",l=[];t!==null;){var h=t,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=xs(t,a),h!=null&&l.unshift(jl(t,h,d)),h=xs(t,i),h!=null&&l.push(jl(t,h,d))),t.tag===3)return l;t=t.return}return[]}function so(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function uv(t,i,a,l,h){for(var d=i._reactName,v=[];a!==null&&a!==l;){var T=a,I=T.alternate,j=T.stateNode;if(T=T.tag,I!==null&&I===l)break;T!==5&&T!==26&&T!==27||j===null||(I=j,h?(j=xs(a,d),j!=null&&v.unshift(jl(a,j,I))):h||(j=xs(a,d),j!=null&&v.push(jl(a,j,I)))),a=a.return}v.length!==0&&t.push({event:i,listeners:v})}var Ub=/\r\n?/g,jb=/\u0000|\uFFFD/g;function cv(t){return(typeof t=="string"?t:""+t).replace(Ub,`
`).replace(jb,"")}function hv(t,i){return i=cv(i),cv(t)===i}function Bc(){}function Xe(t,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Pn(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Pn(t,""+l);break;case"className":hi(t,"class",l);break;case"tabIndex":hi(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":hi(t,a,l);break;case"style":el(t,l,d);break;case"data":if(i!=="object"){hi(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Ra(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Xe(t,i,"name",h.name,h,null),Xe(t,i,"formEncType",h.formEncType,h,null),Xe(t,i,"formMethod",h.formMethod,h,null),Xe(t,i,"formTarget",h.formTarget,h,null)):(Xe(t,i,"encType",h.encType,h,null),Xe(t,i,"method",h.method,h,null),Xe(t,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Ra(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=Bc);break;case"onScroll":l!=null&&De("scroll",t);break;case"onScrollEnd":l!=null&&De("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=Ra(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":De("beforetoggle",t),De("toggle",t),Tr(t,"popover",l);break;case"xlinkActuate":Bt(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Bt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Bt(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Bt(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Bt(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Bt(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Bt(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Bt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Bt(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Tr(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=bf.get(a)||a,Tr(t,a,l))}}function tm(t,i,a,l,h,d){switch(a){case"style":el(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof l=="string"?Pn(t,l):(typeof l=="number"||typeof l=="bigint")&&Pn(t,""+l);break;case"onScroll":l!=null&&De("scroll",t);break;case"onScrollEnd":l!=null&&De("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Bc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ta.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=t[vt]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(i,l,h);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):Tr(t,a,l)}}}function Gt(t,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":De("error",t),De("load",t);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xe(t,i,d,v,a,null)}}h&&Xe(t,i,"srcSet",a.srcSet,a,null),l&&Xe(t,i,"src",a.src,a,null);return;case"input":De("invalid",t);var T=d=v=h=null,I=null,j=null;for(l in a)if(a.hasOwnProperty(l)){var Y=a[l];if(Y!=null)switch(l){case"name":h=Y;break;case"type":v=Y;break;case"checked":I=Y;break;case"defaultChecked":j=Y;break;case"value":d=Y;break;case"defaultValue":T=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,i));break;default:Xe(t,i,l,Y,a,null)}}Ns(t,d,T,I,j,v,h,!1),Sa(t);return;case"select":De("invalid",t),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":v=T;break;case"multiple":l=T;default:Xe(t,i,h,T,a,null)}i=d,a=v,t.multiple=!!l,i!=null?Ui(t,!!l,i,!1):a!=null&&Ui(t,!!l,a,!0);return;case"textarea":De("invalid",t),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Xe(t,i,v,T,a,null)}Ds(t,l,h,d),Sa(t);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(l=a[I],l!=null))switch(I){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Xe(t,i,I,l,a,null)}return;case"dialog":De("beforetoggle",t),De("toggle",t),De("cancel",t),De("close",t);break;case"iframe":case"object":De("load",t);break;case"video":case"audio":for(l=0;l<Ul.length;l++)De(Ul[l],t);break;case"image":De("error",t),De("load",t);break;case"details":De("toggle",t);break;case"embed":case"source":case"link":De("error",t),De("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(l=a[j],l!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xe(t,i,j,l,a,null)}return;default:if(tl(i)){for(Y in a)a.hasOwnProperty(Y)&&(l=a[Y],l!==void 0&&tm(t,i,Y,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&Xe(t,i,T,l,a,null))}function zb(t,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,T=null,I=null,j=null,Y=null;for(q in a){var X=a[q];if(a.hasOwnProperty(q)&&X!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":I=X;default:l.hasOwnProperty(q)||Xe(t,i,q,null,l,X)}}for(var z in l){var q=l[z];if(X=a[z],l.hasOwnProperty(z)&&(q!=null||X!=null))switch(z){case"type":d=q;break;case"name":h=q;break;case"checked":j=q;break;case"defaultChecked":Y=q;break;case"value":v=q;break;case"defaultValue":T=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,i));break;default:q!==X&&Xe(t,i,z,q,l,X)}}_n(t,v,T,I,j,Y,d,h);return;case"select":q=v=T=z=null;for(d in a)if(I=a[d],a.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":q=I;default:l.hasOwnProperty(d)||Xe(t,i,d,null,l,I)}for(h in l)if(d=l[h],I=a[h],l.hasOwnProperty(h)&&(d!=null||I!=null))switch(h){case"value":z=d;break;case"defaultValue":T=d;break;case"multiple":v=d;default:d!==I&&Xe(t,i,h,d,l,I)}i=T,a=v,l=q,z!=null?Ui(t,!!a,z,!1):!!l!=!!a&&(i!=null?Ui(t,!!a,i,!0):Ui(t,!!a,a?[]:"",!1));return;case"textarea":q=z=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Xe(t,i,T,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":z=h;break;case"defaultValue":q=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Xe(t,i,v,h,l,d)}Qe(t,z,q);return;case"option":for(var Ee in a)if(z=a[Ee],a.hasOwnProperty(Ee)&&z!=null&&!l.hasOwnProperty(Ee))switch(Ee){case"selected":t.selected=!1;break;default:Xe(t,i,Ee,null,l,z)}for(I in l)if(z=l[I],q=a[I],l.hasOwnProperty(I)&&z!==q&&(z!=null||q!=null))switch(I){case"selected":t.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Xe(t,i,I,z,l,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pe in a)z=a[pe],a.hasOwnProperty(pe)&&z!=null&&!l.hasOwnProperty(pe)&&Xe(t,i,pe,null,l,z);for(j in l)if(z=l[j],q=a[j],l.hasOwnProperty(j)&&z!==q&&(z!=null||q!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:Xe(t,i,j,z,l,q)}return;default:if(tl(i)){for(var We in a)z=a[We],a.hasOwnProperty(We)&&z!==void 0&&!l.hasOwnProperty(We)&&tm(t,i,We,void 0,l,z);for(Y in l)z=l[Y],q=a[Y],!l.hasOwnProperty(Y)||z===q||z===void 0&&q===void 0||tm(t,i,Y,z,l,q);return}}for(var k in a)z=a[k],a.hasOwnProperty(k)&&z!=null&&!l.hasOwnProperty(k)&&Xe(t,i,k,null,l,z);for(X in l)z=l[X],q=a[X],!l.hasOwnProperty(X)||z===q||z==null&&q==null||Xe(t,i,X,z,l,q)}var nm=null,im=null;function qc(t){return t.nodeType===9?t:t.ownerDocument}function fv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dv(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function rm(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var sm=null;function Bb(){var t=window.event;return t&&t.type==="popstate"?t===sm?!1:(sm=t,!0):(sm=null,!1)}var mv=typeof setTimeout=="function"?setTimeout:void 0,qb=typeof clearTimeout=="function"?clearTimeout:void 0,gv=typeof Promise=="function"?Promise:void 0,Fb=typeof queueMicrotask=="function"?queueMicrotask:typeof gv<"u"?function(t){return gv.resolve(null).then(t).catch(Hb)}:mv;function Hb(t){setTimeout(function(){throw t})}function jr(t){return t==="head"}function pv(t,i){var a=i,l=0,h=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var v=t.ownerDocument;if(a&1&&zl(v.documentElement),a&2&&zl(v.body),a&4)for(a=v.head,zl(a),v=a.firstChild;v;){var T=v.nextSibling,I=v.nodeName;v[Ss]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=T}}if(h===0){t.removeChild(d),Ql(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);Ql(i)}function am(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":am(a),Er(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Gb(t,i,a,l){for(;t.nodeType===1;){var h=a;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Ss])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Jn(t.nextSibling),t===null)break}return null}function Yb(t,i,a){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Jn(t.nextSibling),t===null))return null;return t}function om(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Kb(t,i){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Jn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var lm=null;function yv(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}function _v(t,i,a){switch(i=qc(a),t){case"html":if(t=i.documentElement,!t)throw Error(s(452));return t;case"head":if(t=i.head,!t)throw Error(s(453));return t;case"body":if(t=i.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function zl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Er(t)}var Fn=new Map,vv=new Set;function Fc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ir=se.d;se.d={f:Qb,r:$b,D:Xb,C:Wb,L:Zb,m:Jb,X:tS,S:eS,M:nS};function Qb(){var t=ir.f(),i=Mc();return t||i}function $b(t){var i=ui(t);i!==null&&i.tag===5&&i.type==="form"?jy(i):ir.r(t)}var ao=typeof document>"u"?null:document;function Ev(t,i,a){var l=ao;if(l&&typeof i=="string"&&i){var h=Et(i);h='link[rel="'+t+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),vv.has(h)||(vv.add(h),t={rel:t,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Gt(i,"link",t),gt(i),l.head.appendChild(i)))}}function Xb(t){ir.D(t),Ev("dns-prefetch",t,null)}function Wb(t,i){ir.C(t,i),Ev("preconnect",t,i)}function Zb(t,i,a){ir.L(t,i,a);var l=ao;if(l&&t&&i){var h='link[rel="preload"][as="'+Et(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+Et(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+Et(a.imageSizes)+'"]')):h+='[href="'+Et(t)+'"]';var d=h;switch(i){case"style":d=oo(t);break;case"script":d=lo(t)}Fn.has(d)||(t=E({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:t,as:i},a),Fn.set(d,t),l.querySelector(h)!==null||i==="style"&&l.querySelector(Bl(d))||i==="script"&&l.querySelector(ql(d))||(i=l.createElement("link"),Gt(i,"link",t),gt(i),l.head.appendChild(i)))}}function Jb(t,i){ir.m(t,i);var a=ao;if(a&&t){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+Et(l)+'"][href="'+Et(t)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=lo(t)}if(!Fn.has(d)&&(t=E({rel:"modulepreload",href:t},i),Fn.set(d,t),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ql(d)))return}l=a.createElement("link"),Gt(l,"link",t),gt(l),a.head.appendChild(l)}}}function eS(t,i,a){ir.S(t,i,a);var l=ao;if(l&&t){var h=rn(l).hoistableStyles,d=oo(t);i=i||"default";var v=h.get(d);if(!v){var T={loading:0,preload:null};if(v=l.querySelector(Bl(d)))T.loading=5;else{t=E({rel:"stylesheet",href:t,"data-precedence":i},a),(a=Fn.get(d))&&um(t,a);var I=v=l.createElement("link");gt(I),Gt(I,"link",t),I._p=new Promise(function(j,Y){I.onload=j,I.onerror=Y}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Hc(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:T},h.set(d,v)}}}function tS(t,i){ir.X(t,i);var a=ao;if(a&&t){var l=rn(a).hoistableScripts,h=lo(t),d=l.get(h);d||(d=a.querySelector(ql(h)),d||(t=E({src:t,async:!0},i),(i=Fn.get(h))&&cm(t,i),d=a.createElement("script"),gt(d),Gt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function nS(t,i){ir.M(t,i);var a=ao;if(a&&t){var l=rn(a).hoistableScripts,h=lo(t),d=l.get(h);d||(d=a.querySelector(ql(h)),d||(t=E({src:t,async:!0,type:"module"},i),(i=Fn.get(h))&&cm(t,i),d=a.createElement("script"),gt(d),Gt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function Tv(t,i,a,l){var h=(h=we.current)?Fc(h):null;if(!h)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=oo(a.href),a=rn(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=oo(a.href);var d=rn(h).hoistableStyles,v=d.get(t);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,v),(d=h.querySelector(Bl(t)))&&!d._p&&(v.instance=d,v.state.loading=5),Fn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Fn.set(t,a),d||iS(h,t,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=lo(a),a=rn(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function oo(t){return'href="'+Et(t)+'"'}function Bl(t){return'link[rel="stylesheet"]['+t+"]"}function wv(t){return E({},t,{"data-precedence":t.precedence,precedence:null})}function iS(t,i,a,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Gt(i,"link",a),gt(i),t.head.appendChild(i))}function lo(t){return'[src="'+Et(t)+'"]'}function ql(t){return"script[async]"+t}function Av(t,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+Et(a.href)+'"]');if(l)return i.instance=l,gt(l),l;var h=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),gt(l),Gt(l,"style",h),Hc(l,a.precedence,t),i.instance=l;case"stylesheet":h=oo(a.href);var d=t.querySelector(Bl(h));if(d)return i.state.loading|=4,i.instance=d,gt(d),d;l=wv(a),(h=Fn.get(h))&&um(l,h),d=(t.ownerDocument||t).createElement("link"),gt(d);var v=d;return v._p=new Promise(function(T,I){v.onload=T,v.onerror=I}),Gt(d,"link",l),i.state.loading|=4,Hc(d,a.precedence,t),i.instance=d;case"script":return d=lo(a.src),(h=t.querySelector(ql(d)))?(i.instance=h,gt(h),h):(l=a,(h=Fn.get(d))&&(l=E({},a),cm(l,h)),t=t.ownerDocument||t,h=t.createElement("script"),gt(h),Gt(h,"link",l),t.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Hc(l,a.precedence,t));return i.instance}function Hc(t,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var T=l[v];if(T.dataset.precedence===i)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(t,i.firstChild))}function um(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function cm(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Gc=null;function bv(t,i,a){if(Gc===null){var l=new Map,h=Gc=new Map;h.set(a,l)}else h=Gc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),h=0;h<a.length;h++){var d=a[h];if(!(d[Ss]||d[It]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=t+v;var T=l.get(v);T?T.push(d):l.set(v,[d])}}return l}function Sv(t,i,a){t=t.ownerDocument||t,t.head.insertBefore(a,i==="title"?t.querySelector("head > title"):null)}function rS(t,i,a){if(a===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Rv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Fl=null;function sS(){}function aS(t,i,a){if(Fl===null)throw Error(s(475));var l=Fl;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=oo(a.href),d=t.querySelector(Bl(h));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Yc.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=d,gt(d);return}d=t.ownerDocument||t,a=wv(a),(h=Fn.get(h))&&um(a,h),d=d.createElement("link"),gt(d);var v=d;v._p=new Promise(function(T,I){v.onload=T,v.onerror=I}),Gt(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Yc.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function oS(){if(Fl===null)throw Error(s(475));var t=Fl;return t.stylesheets&&t.count===0&&hm(t,t.stylesheets),0<t.count?function(i){var a=setTimeout(function(){if(t.stylesheets&&hm(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Yc(){if(this.count--,this.count===0){if(this.stylesheets)hm(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Kc=null;function hm(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Kc=new Map,i.forEach(lS,t),Kc=null,Yc.call(t))}function lS(t,i){if(!(i.state.loading&4)){var a=Kc.get(t);if(a)var l=a.get(null);else{a=new Map,Kc.set(t,a);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=Yc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),i.state.loading|=4}}var Hl={$$typeof:he,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function uS(t,i,a,l,h,d,v,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Pi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pi(0),this.hiddenUpdates=Pi(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Iv(t,i,a,l,h,d,v,T,I,j,Y,X){return t=new uS(t,i,a,v,T,I,j,X),i=1,d===!0&&(i|=24),d=En(3,null,null,i),t.current=d,d.stateNode=t,i=Yf(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},Xf(d),t}function Cv(t){return t?(t=ja,t):ja}function Nv(t,i,a,l,h,d){h=Cv(h),l.context===null?l.context=h:l.pendingContext=h,l=Rr(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Ir(t,l,i),a!==null&&(Sn(a,t,i),El(a,t,i))}function Dv(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function fm(t,i){Dv(t,i),(t=t.alternate)&&Dv(t,i)}function Ov(t){if(t.tag===13){var i=Ua(t,67108864);i!==null&&Sn(i,t,67108864),fm(t,67108864)}}var Qc=!0;function cS(t,i,a,l){var h=G.T;G.T=null;var d=se.p;try{se.p=2,dm(t,i,a,l)}finally{se.p=d,G.T=h}}function hS(t,i,a,l){var h=G.T;G.T=null;var d=se.p;try{se.p=8,dm(t,i,a,l)}finally{se.p=d,G.T=h}}function dm(t,i,a,l){if(Qc){var h=mm(l);if(h===null)em(t,i,l,$c,a),Pv(t,l);else if(dS(h,t,i,a,l))l.stopPropagation();else if(Pv(t,l),i&4&&-1<fS.indexOf(t)){for(;h!==null;){var d=ui(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Qn(d.pendingLanes);if(v!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var I=1<<31-Xt(v);T.entanglements[1]|=I,v&=~I}Ai(d),(Ye&6)===0&&(xc=On()+500,Ll(0))}}break;case 13:T=Ua(d,2),T!==null&&Sn(T,d,2),Mc(),fm(d,2)}if(d=mm(l),d===null&&em(t,i,l,$c,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else em(t,i,l,null,a)}}function mm(t){return t=Mn(t),gm(t)}var $c=null;function gm(t){if($c=null,t=Vi(t),t!==null){var i=u(t);if(i===null)t=null;else{var a=i.tag;if(a===13){if(t=f(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return $c=t,null}function xv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_f()){case qo:return 2;case ya:return 8;case Es:case vf:return 32;case _a:return 268435456;default:return 32}default:return 32}}var pm=!1,zr=null,Br=null,qr=null,Gl=new Map,Yl=new Map,Fr=[],fS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Pv(t,i){switch(t){case"focusin":case"focusout":zr=null;break;case"dragenter":case"dragleave":Br=null;break;case"mouseover":case"mouseout":qr=null;break;case"pointerover":case"pointerout":Gl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yl.delete(i.pointerId)}}function Kl(t,i,a,l,h,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=ui(i),i!==null&&Ov(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function dS(t,i,a,l,h){switch(i){case"focusin":return zr=Kl(zr,t,i,a,l,h),!0;case"dragenter":return Br=Kl(Br,t,i,a,l,h),!0;case"mouseover":return qr=Kl(qr,t,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return Gl.set(d,Kl(Gl.get(d)||null,t,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,Yl.set(d,Kl(Yl.get(d)||null,t,i,a,l,h)),!0}return!1}function Mv(t){var i=Vi(t.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){t.blockedOn=i,Mu(t.priority,function(){if(a.tag===13){var l=bn();l=yr(l);var h=Ua(a,l);h!==null&&Sn(h,a,l),fm(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=mm(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);ji=l,a.target.dispatchEvent(l),ji=null}else return i=ui(a),i!==null&&Ov(i),t.blockedOn=a,!1;i.shift()}return!0}function Vv(t,i,a){Xc(t)&&a.delete(i)}function mS(){pm=!1,zr!==null&&Xc(zr)&&(zr=null),Br!==null&&Xc(Br)&&(Br=null),qr!==null&&Xc(qr)&&(qr=null),Gl.forEach(Vv),Yl.forEach(Vv)}function Wc(t,i){t.blockedOn===i&&(t.blockedOn=null,pm||(pm=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,mS)))}var Zc=null;function kv(t){Zc!==t&&(Zc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Zc===t&&(Zc=null);for(var i=0;i<t.length;i+=3){var a=t[i],l=t[i+1],h=t[i+2];if(typeof l!="function"){if(gm(l||a)===null)continue;break}var d=ui(a);d!==null&&(t.splice(i,3),i-=3,gd(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function Ql(t){function i(I){return Wc(I,t)}zr!==null&&Wc(zr,t),Br!==null&&Wc(Br,t),qr!==null&&Wc(qr,t),Gl.forEach(i),Yl.forEach(i);for(var a=0;a<Fr.length;a++){var l=Fr[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Fr.length&&(a=Fr[0],a.blockedOn===null);)Mv(a),a.blockedOn===null&&Fr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[vt]||null;if(typeof d=="function")v||kv(a);else if(v){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[vt]||null)T=v.formAction;else if(gm(h)!==null)continue}else T=v.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),kv(a)}}}function ym(t){this._internalRoot=t}Jc.prototype.render=ym.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=bn();Nv(a,l,t,i,null,null)},Jc.prototype.unmount=ym.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Nv(t.current,2,null,t,null,null),Mc(),i[xn]=null}};function Jc(t){this._internalRoot=t}Jc.prototype.unstable_scheduleHydration=function(t){if(t){var i=_r();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Fr.length&&i!==0&&i<Fr[a].priority;a++);Fr.splice(a,0,t),a===0&&Mv(t)}};var Lv=e.version;if(Lv!=="19.1.1")throw Error(s(527,Lv,"19.1.1"));se.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(i),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var gS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var eh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!eh.isDisabled&&eh.supportsFiber)try{ct=eh.inject(gS),Ge=eh}catch{}}return Xl.createRoot=function(t,i){if(!o(t))throw Error(s(299));var a=!1,l="",h=Jy,d=e_,v=t_,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=Iv(t,1,!1,null,null,a,l,h,d,v,T,null),t[xn]=i.current,Jd(t),new ym(i)},Xl.hydrateRoot=function(t,i,a){if(!o(t))throw Error(s(299));var l=!1,h="",d=Jy,v=e_,T=t_,I=null,j=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(I=a.unstable_transitionCallbacks),a.formState!==void 0&&(j=a.formState)),i=Iv(t,1,!0,i,a??null,l,h,d,v,T,I,j),i.context=Cv(null),a=i.current,l=bn(),l=yr(l),h=Rr(l),h.callback=null,Ir(a,h,l),a=l,i.current.lanes=a,Mi(i,a),Ai(i),t[xn]=i.current,Jd(t),new Jc(i)},Xl.version="19.1.1",Xl}var Kv;function SS(){if(Kv)return Em.exports;Kv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Em.exports=bS(),Em.exports}var RS=SS();const IS=()=>{};var Qv={};/**
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
 */const HT=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},CS=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],m=r[n++],p=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=r[n++],f=r[n++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return e.join("")},GT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,m=f?r[o+1]:0,p=o+2<r.length,y=p?r[o+2]:0,E=u>>2,R=(u&3)<<4|m>>4;let S=(m&15)<<2|y>>6,B=y&63;p||(B=64,f||(S=64)),s.push(n[E],n[R],n[S],n[B])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(HT(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):CS(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],m=o<r.length?n[r.charAt(o)]:0;++o;const y=o<r.length?n[r.charAt(o)]:64;++o;const R=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||m==null||y==null||R==null)throw new NS;const S=u<<2|m>>4;if(s.push(S),y!==64){const B=m<<4&240|y>>2;if(s.push(B),R!==64){const K=y<<6&192|R;s.push(K)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class NS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const DS=function(r){const e=HT(r);return GT.encodeByteArray(e,!0)},_h=function(r){return DS(r).replace(/\./g,"")},YT=function(r){try{return GT.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function OS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const xS=()=>OS().__FIREBASE_DEFAULTS__,PS=()=>{if(typeof process>"u"||typeof Qv>"u")return;const r=Qv.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},MS=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&YT(r[1]);return e&&JSON.parse(e)},Bh=()=>{try{return IS()||xS()||PS()||MS()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},KT=r=>Bh()?.emulatorHosts?.[r],QT=r=>{const e=KT(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},$T=()=>Bh()?.config,XT=r=>Bh()?.[`_${r}`];/**
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
 */class VS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function hs(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Eg(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function kS(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[_h(JSON.stringify(n)),_h(JSON.stringify(f)),""].join(".")}const su={};function LS(){const r={prod:[],emulator:[]};for(const e of Object.keys(su))su[e]?r.emulator.push(e):r.prod.push(e);return r}function US(r){let e=document.getElementById(r),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),n=!0),{created:n,element:e}}let $v=!1;function Tg(r,e){if(typeof window>"u"||typeof document>"u"||!hs(window.location.host)||su[r]===e||su[r]||$v)return;su[r]=e;function n(S){return`__firebase__banner__${S}`}const s="__firebase__banner",u=LS().prod.length>0;function f(){const S=document.getElementById(s);S&&S.remove()}function m(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function p(S,B){S.setAttribute("width","24"),S.setAttribute("id",B),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function y(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{$v=!0,f()},S}function E(S,B){S.setAttribute("id",B),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function R(){const S=US(s),B=n("text"),K=document.getElementById(B)||document.createElement("span"),ne=n("learnmore"),J=document.getElementById(ne)||document.createElement("a"),ye=n("preprendIcon"),ie=document.getElementById(ye)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const he=S.element;m(he),E(J,ne);const Te=y();p(ie,ye),he.append(ie,K,J,Te),document.body.appendChild(he)}u?(K.innerText="Preview backend disconnected.",ie.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ie.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,K.innerText="Preview backend running in this workspace."),K.setAttribute("id",B)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",R):R()}/**
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
 */function nn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nn())}function zS(){const r=Bh()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function BS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function WT(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function qS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function FS(){const r=nn();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function HS(){return!zS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ZT(){try{return typeof indexedDB=="object"}catch{return!1}}function JT(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(n){e(n)}})}function GS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const YS="FirebaseError";class Kn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=YS,Object.setPrototypeOf(this,Kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,da.prototype.create)}}class da{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,u=this.errors[e],f=u?KS(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new Kn(o,m,s)}}function KS(r,e){return r.replace(QS,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const QS=/\{\$([^}]+)}/g;function $S(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Di(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=e[o];if(Xv(u)&&Xv(f)){if(!Di(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function Xv(r){return r!==null&&typeof r=="object"}/**
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
 */function xo(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Zl(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Jl(r){const e=r.indexOf("?");if(!e)return"";const n=r.indexOf("#",e);return r.substring(e,n>0?n:void 0)}function XS(r,e){const n=new WS(r,e);return n.subscribe.bind(n)}class WS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");ZS(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=bm),o.error===void 0&&(o.error=bm),o.complete===void 0&&(o.complete=bm);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZS(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function bm(){}/**
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
 */const JS=1e3,eR=2,tR=14400*1e3,nR=.5;function Wv(r,e=JS,n=eR){const s=e*Math.pow(n,r),o=Math.round(nR*s*(Math.random()-.5)*2);return Math.min(tR,s+o)}/**
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
 */function Ze(r){return r&&r._delegate?r._delegate:r}class Gn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ea="[DEFAULT]";/**
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
 */class iR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new VS;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sR(e))try{this.getOrInitializeService({instanceIdentifier:ea})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=ea){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ea){return this.instances.has(e)}getOptions(e=ea){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:rR(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ea){return this.component?this.component.multipleInstances?e:ea:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rR(r){return r===ea?void 0:r}function sR(r){return r.instantiationMode==="EAGER"}/**
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
 */class aR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new iR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var xe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(xe||(xe={}));const oR={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},lR=xe.INFO,uR={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},cR=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=uR[e];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qh{constructor(e){this.name=e,this._logLevel=lR,this._logHandler=cR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}const hR=(r,e)=>e.some(n=>r instanceof n);let Zv,Jv;function fR(){return Zv||(Zv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dR(){return Jv||(Jv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const e0=new WeakMap,Hm=new WeakMap,t0=new WeakMap,Sm=new WeakMap,wg=new WeakMap;function mR(r){const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(Zr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return e.then(n=>{n instanceof IDBCursor&&e0.set(n,r)}).catch(()=>{}),wg.set(e,r),e}function gR(r){if(Hm.has(r))return;const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});Hm.set(r,e)}let Gm={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return Hm.get(r);if(e==="objectStoreNames")return r.objectStoreNames||t0.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zr(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function pR(r){Gm=r(Gm)}function yR(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(Rm(this),e,...n);return t0.set(s,e.sort?e.sort():[e]),Zr(s)}:dR().includes(r)?function(...e){return r.apply(Rm(this),e),Zr(e0.get(this))}:function(...e){return Zr(r.apply(Rm(this),e))}}function _R(r){return typeof r=="function"?yR(r):(r instanceof IDBTransaction&&gR(r),hR(r,fR())?new Proxy(r,Gm):r)}function Zr(r){if(r instanceof IDBRequest)return mR(r);if(Sm.has(r))return Sm.get(r);const e=_R(r);return e!==r&&(Sm.set(r,e),wg.set(e,r)),e}const Rm=r=>wg.get(r);function n0(r,e,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,e),m=Zr(f);return s&&f.addEventListener("upgradeneeded",p=>{s(Zr(f.result),p.oldVersion,p.newVersion,Zr(f.transaction),p)}),n&&f.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),m.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const vR=["get","getKey","getAll","getAllKeys","count"],ER=["put","add","delete","clear"],Im=new Map;function eE(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Im.get(e))return Im.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=ER.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||vR.includes(n)))return;const u=async function(f,...m){const p=this.transaction(f,o?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(m.shift())),(await Promise.all([y[n](...m),o&&p.done]))[0]};return Im.set(e,u),u}pR(r=>({...r,get:(e,n,s)=>eE(e,n)||r.get(e,n,s),has:(e,n)=>!!eE(e,n)||r.has(e,n)}));/**
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
 */class TR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wR(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function wR(r){return r.getComponent()?.type==="VERSION"}const Ym="@firebase/app",tE="0.14.2";/**
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
 */const fr=new qh("@firebase/app"),AR="@firebase/app-compat",bR="@firebase/analytics-compat",SR="@firebase/analytics",RR="@firebase/app-check-compat",IR="@firebase/app-check",CR="@firebase/auth",NR="@firebase/auth-compat",DR="@firebase/database",OR="@firebase/data-connect",xR="@firebase/database-compat",PR="@firebase/functions",MR="@firebase/functions-compat",VR="@firebase/installations",kR="@firebase/installations-compat",LR="@firebase/messaging",UR="@firebase/messaging-compat",jR="@firebase/performance",zR="@firebase/performance-compat",BR="@firebase/remote-config",qR="@firebase/remote-config-compat",FR="@firebase/storage",HR="@firebase/storage-compat",GR="@firebase/firestore",YR="@firebase/ai",KR="@firebase/firestore-compat",QR="firebase",$R="12.2.0";/**
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
 */const Km="[DEFAULT]",XR={[Ym]:"fire-core",[AR]:"fire-core-compat",[SR]:"fire-analytics",[bR]:"fire-analytics-compat",[IR]:"fire-app-check",[RR]:"fire-app-check-compat",[CR]:"fire-auth",[NR]:"fire-auth-compat",[DR]:"fire-rtdb",[OR]:"fire-data-connect",[xR]:"fire-rtdb-compat",[PR]:"fire-fn",[MR]:"fire-fn-compat",[VR]:"fire-iid",[kR]:"fire-iid-compat",[LR]:"fire-fcm",[UR]:"fire-fcm-compat",[jR]:"fire-perf",[zR]:"fire-perf-compat",[BR]:"fire-rc",[qR]:"fire-rc-compat",[FR]:"fire-gcs",[HR]:"fire-gcs-compat",[GR]:"fire-fst",[KR]:"fire-fst-compat",[YR]:"fire-vertex","fire-js":"fire-js",[QR]:"fire-js-all"};/**
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
 */const vh=new Map,WR=new Map,Qm=new Map;function nE(r,e){try{r.container.addComponent(e)}catch(n){fr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function ri(r){const e=r.name;if(Qm.has(e))return fr.debug(`There were multiple attempts to register component ${e}.`),!1;Qm.set(e,r);for(const n of vh.values())nE(n,r);for(const n of WR.values())nE(n,r);return!0}function fs(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function Rn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const ZR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jr=new da("app","Firebase",ZR);/**
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
 */class JR{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jr.create("app-deleted",{appName:this._name})}}/**
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
 */const Po=$R;function i0(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s={name:Km,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw Jr.create("bad-app-name",{appName:String(o)});if(n||(n=$T()),!n)throw Jr.create("no-options");const u=vh.get(o);if(u){if(Di(n,u.options)&&Di(s,u.config))return u;throw Jr.create("duplicate-app",{appName:o})}const f=new aR(o);for(const p of Qm.values())f.addComponent(p);const m=new JR(n,s,f);return vh.set(o,m),m}function Fh(r=Km){const e=vh.get(r);if(!e&&r===Km&&$T())return i0();if(!e)throw Jr.create("no-app",{appName:r});return e}function gn(r,e,n){let s=XR[r]??r;n&&(s+=`-${n}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const f=[`Unable to register library "${s}" with version "${e}":`];o&&f.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&f.push("and"),u&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fr.warn(f.join(" "));return}ri(new Gn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const eI="firebase-heartbeat-database",tI=1,mu="firebase-heartbeat-store";let Cm=null;function r0(){return Cm||(Cm=n0(eI,tI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(mu)}catch(n){console.warn(n)}}}}).catch(r=>{throw Jr.create("idb-open",{originalErrorMessage:r.message})})),Cm}async function nI(r){try{const n=(await r0()).transaction(mu),s=await n.objectStore(mu).get(s0(r));return await n.done,s}catch(e){if(e instanceof Kn)fr.warn(e.message);else{const n=Jr.create("idb-get",{originalErrorMessage:e?.message});fr.warn(n.message)}}}async function iE(r,e){try{const s=(await r0()).transaction(mu,"readwrite");await s.objectStore(mu).put(e,s0(r)),await s.done}catch(n){if(n instanceof Kn)fr.warn(n.message);else{const s=Jr.create("idb-set",{originalErrorMessage:n?.message});fr.warn(s.message)}}}function s0(r){return`${r.name}!${r.options.appId}`}/**
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
 */const iI=1024,rI=30;class sI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=rE();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>rI){const o=lI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){fr.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=rE(),{heartbeatsToSend:n,unsentEntries:s}=aI(this._heartbeatsCache.heartbeats),o=_h(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return fr.warn(e),""}}}function rE(){return new Date().toISOString().substring(0,10)}function aI(r,e=iI){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),sE(n)>e){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),sE(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class oI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ZT()?JT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nI(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return iE(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return iE(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function sE(r){return _h(JSON.stringify({version:2,heartbeats:r})).length}function lI(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
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
 */function uI(r){ri(new Gn("platform-logger",e=>new TR(e),"PRIVATE")),ri(new Gn("heartbeat",e=>new sI(e),"PRIVATE")),gn(Ym,tE,r),gn(Ym,tE,"esm2020"),gn("fire-js","")}uI("");function a0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cI=a0,o0=new da("auth","Firebase",a0());/**
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
 */const Eh=new qh("@firebase/auth");function hI(r,...e){Eh.logLevel<=xe.WARN&&Eh.warn(`Auth (${Po}): ${r}`,...e)}function lh(r,...e){Eh.logLevel<=xe.ERROR&&Eh.error(`Auth (${Po}): ${r}`,...e)}/**
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
 */function Yn(r,...e){throw Ag(r,...e)}function Cn(r,...e){return Ag(r,...e)}function l0(r,e,n){const s={...cI(),[e]:n};return new da("auth","Firebase",s).create(e,{appName:r.name})}function cr(r){return l0(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ag(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return o0.create(r,...e)}function le(r,e,...n){if(!r)throw Ag(e,...n)}function Si(r){const e="INTERNAL ASSERTION FAILED: "+r;throw lh(e),new Error(e)}function dr(r,e){r||Si(e)}/**
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
 */function $m(){return typeof self<"u"&&self.location?.href||""}function u0(){return aE()==="http:"||aE()==="https:"}function aE(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function fI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(u0()||WT()||"connection"in navigator)?navigator.onLine:!0}function dI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class wu{constructor(e,n){this.shortDelay=e,this.longDelay=n,dr(n>e,"Short delay should be less than long delay!"),this.isMobile=jS()||qS()}get(){return fI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bg(r,e){dr(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class c0{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Si("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Si("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Si("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const mI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const gI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],pI=new wu(3e4,6e4);function zt(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function $t(r,e,n,s,o={}){return h0(r,o,async()=>{let u={},f={};s&&(e==="GET"?f=s:u={body:JSON.stringify(s)});const m=xo({key:r.config.apiKey,...f}).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const y={method:e,headers:p,...u};return BS()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&hs(r.emulatorConfig.host)&&(y.credentials="include"),c0.fetch()(await f0(r,r.config.apiHost,n,m),y)})}async function h0(r,e,n){r._canInitEmulator=!1;const s={...mI,...e};try{const o=new _I(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw eu(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[p,y]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw eu(r,"credential-already-in-use",f);if(p==="EMAIL_EXISTS")throw eu(r,"email-already-in-use",f);if(p==="USER_DISABLED")throw eu(r,"user-disabled",f);const E=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw l0(r,E,y);Yn(r,E)}}catch(o){if(o instanceof Kn)throw o;Yn(r,"network-request-failed",{message:String(o)})}}async function ds(r,e,n,s,o={}){const u=await $t(r,e,n,s,o);return"mfaPendingCredential"in u&&Yn(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function f0(r,e,n,s){const o=`${e}${n}?${s}`,u=r,f=u.config.emulator?bg(r.config,o):`${r.config.apiScheme}://${o}`;return gI.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function yI(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _I{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Cn(this.auth,"network-request-failed")),pI.get())})}}function eu(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=Cn(r,e,s);return o.customData._tokenResponse=n,o}/**
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
 */function oE(r){return r!==void 0&&r.getResponse!==void 0}function lE(r){return r!==void 0&&r.enterprise!==void 0}class d0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return yI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function vI(r){return(await $t(r,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function m0(r,e){return $t(r,"GET","/v2/recaptchaConfig",zt(r,e))}/**
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
 */async function EI(r,e){return $t(r,"POST","/v1/accounts:delete",e)}async function Th(r,e){return $t(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function au(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TI(r,e=!1){const n=Ze(r),s=await n.getIdToken(e),o=Sg(s);le(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u?.sign_in_provider;return{claims:o,token:s,authTime:au(Nm(o.auth_time)),issuedAtTime:au(Nm(o.iat)),expirationTime:au(Nm(o.exp)),signInProvider:f||null,signInSecondFactor:u?.sign_in_second_factor||null}}function Nm(r){return Number(r)*1e3}function Sg(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return lh("JWT malformed, contained fewer than 3 sections"),null;try{const o=YT(n);return o?JSON.parse(o):(lh("Failed to decode base64 JWT payload"),null)}catch(o){return lh("Caught error parsing JWT payload as JSON",o?.toString()),null}}function uE(r){const e=Sg(r);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function is(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Kn&&wI(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function wI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class AI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Xm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=au(this.lastLoginAt),this.creationTime=au(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wh(r){const e=r.auth,n=await r.getIdToken(),s=await is(r,Th(e,{idToken:n}));le(s?.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const u=o.providerUserInfo?.length?g0(o.providerUserInfo):[],f=SI(r.providerData,u),m=r.isAnonymous,p=!(r.email&&o.passwordHash)&&!f?.length,y=m?p:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new Xm(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(r,E)}async function bI(r){const e=Ze(r);await wh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function SI(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function g0(r){return r.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function RI(r,e){const n=await h0(r,{},async()=>{const s=xo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=await f0(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:m,body:s};return r.emulatorConfig&&hs(r.emulatorConfig.host)&&(p.credentials="include"),c0.fetch()(f,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function II(r,e){return $t(r,"POST","/v2/accounts:revokeToken",zt(r,e))}/**
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
 */class _o{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){le(e.length!==0,"internal-error");const n=uE(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await RI(e,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new _o;return s&&(le(typeof s=="string","internal-error",{appName:e}),f.refreshToken=s),o&&(le(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),u&&(le(typeof u=="number","internal-error",{appName:e}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _o,this.toJSON())}_performRefresh(){return Si("not implemented")}}/**
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
 */function Gr(r,e){le(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class ni{constructor({uid:e,auth:n,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new AI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Xm(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await is(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return TI(this,e)}reload(){return bI(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ni({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await wh(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rn(this.auth.app))return Promise.reject(cr(this.auth));const e=await this.getIdToken();return await is(this,EI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,o=n.email??void 0,u=n.phoneNumber??void 0,f=n.photoURL??void 0,m=n.tenantId??void 0,p=n._redirectEventId??void 0,y=n.createdAt??void 0,E=n.lastLoginAt??void 0,{uid:R,emailVerified:S,isAnonymous:B,providerData:K,stsTokenManager:ne}=n;le(R&&ne,e,"internal-error");const J=_o.fromJSON(this.name,ne);le(typeof R=="string",e,"internal-error"),Gr(s,e.name),Gr(o,e.name),le(typeof S=="boolean",e,"internal-error"),le(typeof B=="boolean",e,"internal-error"),Gr(u,e.name),Gr(f,e.name),Gr(m,e.name),Gr(p,e.name),Gr(y,e.name),Gr(E,e.name);const ye=new ni({uid:R,auth:e,email:o,emailVerified:S,displayName:s,isAnonymous:B,photoURL:f,phoneNumber:u,tenantId:m,stsTokenManager:J,createdAt:y,lastLoginAt:E});return K&&Array.isArray(K)&&(ye.providerData=K.map(ie=>({...ie}))),p&&(ye._redirectEventId=p),ye}static async _fromIdTokenResponse(e,n,s=!1){const o=new _o;o.updateFromServerResponse(n);const u=new ni({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await wh(u),u}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];le(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?g0(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!u?.length,m=new _o;m.updateFromIdToken(s);const p=new ni({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Xm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!u?.length};return Object.assign(p,y),p}}/**
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
 */const cE=new Map;function ur(r){dr(r instanceof Function,"Expected a class definition");let e=cE.get(r);return e?(dr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,cE.set(r,e),e)}/**
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
 */class p0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}p0.type="NONE";const hE=p0;/**
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
 */function uh(r,e,n){return`firebase:${r}:${e}:${n}`}class vo{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=uh(this.userKey,o.apiKey,u),this.fullPersistenceKey=uh("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Th(this.auth,{idToken:e}).catch(()=>{});return n?ni._fromGetAccountInfoResponse(this.auth,n,e):null}return ni._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new vo(ur(hE),e,s);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||ur(hE);const f=uh(s,e.config.apiKey,e.name);let m=null;for(const y of n)try{const E=await y._get(f);if(E){let R;if(typeof E=="string"){const S=await Th(e,{idToken:E}).catch(()=>{});if(!S)break;R=await ni._fromGetAccountInfoResponse(e,S,E)}else R=ni._fromJSON(e,E);y!==u&&(m=R),u=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new vo(u,e,s):(u=p[0],m&&await u._set(f,m.toJSON()),await Promise.all(n.map(async y=>{if(y!==u)try{await y._remove(f)}catch{}})),new vo(u,e,s))}}/**
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
 */function fE(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(E0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(y0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(w0(e))return"Blackberry";if(A0(e))return"Webos";if(_0(e))return"Safari";if((e.includes("chrome/")||v0(e))&&!e.includes("edge/"))return"Chrome";if(T0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if(s?.length===2)return s[1]}return"Other"}function y0(r=nn()){return/firefox\//i.test(r)}function _0(r=nn()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function v0(r=nn()){return/crios\//i.test(r)}function E0(r=nn()){return/iemobile/i.test(r)}function T0(r=nn()){return/android/i.test(r)}function w0(r=nn()){return/blackberry/i.test(r)}function A0(r=nn()){return/webos/i.test(r)}function Rg(r=nn()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function CI(r=nn()){return Rg(r)&&!!window.navigator?.standalone}function NI(){return FS()&&document.documentMode===10}function b0(r=nn()){return Rg(r)||T0(r)||A0(r)||w0(r)||/windows phone/i.test(r)||E0(r)}/**
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
 */function S0(r,e=[]){let n;switch(r){case"Browser":n=fE(nn());break;case"Worker":n=`${fE(nn())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Po}/${s}`}/**
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
 */class DI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((f,m)=>{try{const p=e(u);f(p)}catch(p){m(p)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function OI(r,e={}){return $t(r,"GET","/v2/passwordPolicy",zt(r,e))}/**
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
 */const xI=6;class PI{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??xI,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class MI{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dE(this),this.idTokenSubscription=new dE(this),this.beforeStateQueue=new DI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=o0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ur(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await vo.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Th(this,{idToken:e}),s=await ni._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Rn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(f,f))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=this.redirectUser?._redirectEventId,f=s?._redirectEventId,m=await this.tryRedirectSignIn(e);(!u||u===f)&&m?.user&&(s=m.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wh(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Rn(this.app))return Promise.reject(cr(this));const n=e?Ze(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Rn(this.app)?Promise.reject(cr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Rn(this.app)?Promise.reject(cr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ur(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await OI(this),n=new PI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new da("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await II(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ur(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await vo.create(this,[ur(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,o);return()=>{f=!0,p()}}else{const p=e.addObserver(n);return()=>{f=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=S0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(Rn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&hI(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ai(r){return Ze(r)}class dE{constructor(e){this.auth=e,this.observer=null,this.addObserver=XS(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Au={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VI(r){Au=r}function Ig(r){return Au.loadJS(r)}function kI(){return Au.recaptchaV2Script}function LI(){return Au.recaptchaEnterpriseScript}function UI(){return Au.gapiScript}function R0(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */const jI=500,zI=6e4,th=1e12;class BI{constructor(e){this.auth=e,this.counter=th,this._widgets=new Map}render(e,n){const s=this.counter;return this._widgets.set(s,new HI(e,this.auth.name,n||{})),this.counter++,s}reset(e){const n=e||th;this._widgets.get(n)?.delete(),this._widgets.delete(n)}getResponse(e){const n=e||th;return this._widgets.get(n)?.getResponse()||""}async execute(e){const n=e||th;return this._widgets.get(n)?.execute(),""}}class qI{constructor(){this.enterprise=new FI}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class FI{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class HI{constructor(e,n,s){this.params=s,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const o=typeof e=="string"?document.getElementById(e):e;le(o,"argument-error",{appName:n}),this.container=o,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=GI(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},zI)},jI))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function GI(r){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let s=0;s<r;s++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const YI="recaptcha-enterprise",ou="NO_RECAPTCHA";class I0{constructor(e){this.type=YI,this.auth=ai(e)}async verify(e="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,m)=>{m0(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const y=new d0(p);return u.tenantId==null?u._agentRecaptchaConfig=y:u._tenantRecaptchaConfigs[u.tenantId]=y,f(y.siteKey)}}).catch(p=>{m(p)})})}function o(u,f,m){const p=window.grecaptcha;lE(p)?p.enterprise.ready(()=>{p.enterprise.execute(u,{action:e}).then(y=>{f(y)}).catch(()=>{f(ou)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new qI().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(m=>{if(!n&&lE(window.grecaptcha))o(m,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let p=LI();p.length!==0&&(p+=m),Ig(p).then(()=>{o(m,u,f)}).catch(y=>{f(y)})}}).catch(m=>{f(m)})})}}async function Wl(r,e,n,s=!1,o=!1){const u=new I0(r);let f;if(o)f=ou;else try{f=await u.verify(n)}catch{f=await u.verify(n,!0)}const m={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const p=m.phoneEnrollmentInfo.phoneNumber,y=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const p=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:f}):Object.assign(m,{captchaResponse:f}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function ra(r,e,n,s,o){if(o==="EMAIL_PASSWORD_PROVIDER")if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await Wl(r,e,n,n==="getOobCode");return s(r,u)}else return s(r,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Wl(r,e,n,n==="getOobCode");return s(r,f)}else return Promise.reject(u)});else if(o==="PHONE_PROVIDER")if(r._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const u=await Wl(r,e,n);return s(r,u).catch(async f=>{if(r._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")==="AUDIT"&&(f.code==="auth/missing-recaptcha-token"||f.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const m=await Wl(r,e,n,!1,!0);return s(r,m)}return Promise.reject(f)})}else{const u=await Wl(r,e,n,!1,!0);return s(r,u)}else return Promise.reject(o+" provider is not supported.")}async function KI(r){const e=ai(r),n=await m0(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),s=new d0(n);e.tenantId==null?e._agentRecaptchaConfig=s:e._tenantRecaptchaConfigs[e.tenantId]=s,s.isAnyProviderEnabled()&&new I0(e).verify()}/**
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
 */function QI(r,e){const n=fs(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(Di(u,e??{}))return o;Yn(o,"already-initialized")}return n.initialize({options:e})}function $I(r,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(ur);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e?.popupRedirectResolver)}function XI(r,e,n){const s=ai(r);le(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=C0(e),{host:f,port:m}=WI(e),p=m===null?"":`:${m}`,y={url:`${u}//${f}${p}/`},E=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){le(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),le(Di(y,s.config.emulator)&&Di(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,hs(f)?(Eg(`${u}//${f}${p}`),Tg("Auth",!0)):ZI()}function C0(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function WI(r){const e=C0(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:mE(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:mE(f)}}}function mE(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function ZI(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Hh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Si("not implemented")}_getIdTokenResponse(e){return Si("not implemented")}_linkToIdToken(e,n){return Si("not implemented")}_getReauthenticationResolver(e){return Si("not implemented")}}async function JI(r,e){return $t(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function e1(r,e){return ds(r,"POST","/v1/accounts:signInWithPassword",zt(r,e))}async function N0(r,e){return $t(r,"POST","/v1/accounts:sendOobCode",zt(r,e))}async function t1(r,e){return N0(r,e)}async function n1(r,e){return N0(r,e)}/**
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
 */async function i1(r,e){return ds(r,"POST","/v1/accounts:signInWithEmailLink",zt(r,e))}async function r1(r,e){return ds(r,"POST","/v1/accounts:signInWithEmailLink",zt(r,e))}/**
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
 */class gu extends Hh{constructor(e,n,s,o=null){super("password",s),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new gu(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new gu(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ra(e,n,"signInWithPassword",e1,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return i1(e,{email:this._email,oobCode:this._password});default:Yn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ra(e,s,"signUpPassword",JI,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return r1(e,{idToken:n,email:this._email,oobCode:this._password});default:Yn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Eo(r,e){return ds(r,"POST","/v1/accounts:signInWithIdp",zt(r,e))}/**
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
 */const s1="http://localhost";class oa extends Hh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new oa(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=n;if(!s||!o)return null;const f=new oa(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(e){const n=this.buildRequest();return Eo(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Eo(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Eo(e,n)}buildRequest(){const e={requestUri:s1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xo(n)}return e}}/**
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
 */async function gE(r,e){return $t(r,"POST","/v1/accounts:sendVerificationCode",zt(r,e))}async function a1(r,e){return ds(r,"POST","/v1/accounts:signInWithPhoneNumber",zt(r,e))}async function o1(r,e){const n=await ds(r,"POST","/v1/accounts:signInWithPhoneNumber",zt(r,e));if(n.temporaryProof)throw eu(r,"account-exists-with-different-credential",n);return n}const l1={USER_NOT_FOUND:"user-not-found"};async function u1(r,e){const n={...e,operation:"REAUTH"};return ds(r,"POST","/v1/accounts:signInWithPhoneNumber",zt(r,n),l1)}/**
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
 */class To extends Hh{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new To({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new To({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return a1(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return o1(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return u1(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:s,verificationCode:o}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:s,code:o}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:s,phoneNumber:o,temporaryProof:u}=e;return!s&&!n&&!o&&!u?null:new To({verificationId:n,verificationCode:s,phoneNumber:o,temporaryProof:u})}}/**
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
 */function c1(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function h1(r){const e=Zl(Jl(r)).link,n=e?Zl(Jl(e)).deep_link_id:null,s=Zl(Jl(r)).deep_link_id;return(s?Zl(Jl(s)).link:null)||s||n||e||r}class Cg{constructor(e){const n=Zl(Jl(e)),s=n.apiKey??null,o=n.oobCode??null,u=c1(n.mode??null);le(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=h1(e);try{return new Cg(n)}catch{return null}}}/**
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
 */class Mo{constructor(){this.providerId=Mo.PROVIDER_ID}static credential(e,n){return gu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Cg.parseLink(n);return le(s,"argument-error"),gu._fromEmailAndCode(e,s.code,s.tenantId)}}Mo.PROVIDER_ID="password";Mo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class D0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class bu extends D0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Kr extends bu{constructor(){super("facebook.com")}static credential(e){return oa._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kr.credential(e.oauthAccessToken)}catch{return null}}}Kr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kr.PROVIDER_ID="facebook.com";/**
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
 */class Qr extends bu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return oa._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Qr.credential(n,s)}catch{return null}}}Qr.GOOGLE_SIGN_IN_METHOD="google.com";Qr.PROVIDER_ID="google.com";/**
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
 */class $r extends bu{constructor(){super("github.com")}static credential(e){return oa._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $r.credential(e.oauthAccessToken)}catch{return null}}}$r.GITHUB_SIGN_IN_METHOD="github.com";$r.PROVIDER_ID="github.com";/**
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
 */class Xr extends bu{constructor(){super("twitter.com")}static credential(e,n){return oa._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Xr.credential(n,s)}catch{return null}}}Xr.TWITTER_SIGN_IN_METHOD="twitter.com";Xr.PROVIDER_ID="twitter.com";/**
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
 */async function f1(r,e){return ds(r,"POST","/v1/accounts:signUp",zt(r,e))}/**
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
 */class la{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,o=!1){const u=await ni._fromIdTokenResponse(e,s,o),f=pE(s);return new la({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const o=pE(s);return new la({user:e,providerId:o,_tokenResponse:s,operationType:n})}}function pE(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Ah extends Kn{constructor(e,n,s,o){super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Ah.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new Ah(e,n,s,o)}}function O0(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Ah._fromErrorAndOperation(r,u,e,s):u})}async function d1(r,e,n=!1){const s=await is(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return la._forOperation(r,"link",s)}/**
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
 */async function m1(r,e,n=!1){const{auth:s}=r;if(Rn(s.app))return Promise.reject(cr(s));const o="reauthenticate";try{const u=await is(r,O0(s,o,e,r),n);le(u.idToken,s,"internal-error");const f=Sg(u.idToken);le(f,s,"internal-error");const{sub:m}=f;return le(r.uid===m,s,"user-mismatch"),la._forOperation(r,o,u)}catch(u){throw u?.code==="auth/user-not-found"&&Yn(s,"user-mismatch"),u}}/**
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
 */async function x0(r,e,n=!1){if(Rn(r.app))return Promise.reject(cr(r));const s="signIn",o=await O0(r,s,e),u=await la._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}async function g1(r,e){return x0(ai(r),e)}/**
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
 */class Ng{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Dg._fromServerResponse(e,n):"totpInfo"in n?Og._fromServerResponse(e,n):Yn(e,"internal-error")}}class Dg extends Ng{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Dg(n)}}class Og extends Ng{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Og(n)}}/**
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
 */async function P0(r){const e=ai(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function p1(r,e,n){const s=ai(r);await ra(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",n1,"EMAIL_PASSWORD_PROVIDER")}async function y1(r,e,n){if(Rn(r.app))return Promise.reject(cr(r));const s=ai(r),f=await ra(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",f1,"EMAIL_PASSWORD_PROVIDER").catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&P0(r),p}),m=await la._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(m.user),m}function _1(r,e,n){return Rn(r.app)?Promise.reject(cr(r)):g1(Ze(r),Mo.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&P0(r),s})}async function v1(r,e){const n=Ze(r),o={requestType:"VERIFY_EMAIL",idToken:await r.getIdToken()},{email:u}=await t1(n.auth,o);u!==r.email&&await r.reload()}/**
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
 */async function E1(r,e){return $t(r,"POST","/v1/accounts:update",e)}/**
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
 */async function T1(r,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=Ze(r),u={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},f=await is(s,E1(s.auth,u));s.displayName=f.displayName||null,s.photoURL=f.photoUrl||null;const m=s.providerData.find(({providerId:p})=>p==="password");m&&(m.displayName=s.displayName,m.photoURL=s.photoURL),await s._updateTokensIfNecessary(f)}function w1(r,e,n,s){return Ze(r).onIdTokenChanged(e,n,s)}function A1(r,e,n){return Ze(r).beforeAuthStateChanged(e,n)}function Wm(r,e,n,s){return Ze(r).onAuthStateChanged(e,n,s)}function b1(r){return Ze(r).signOut()}/**
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
 */class po{constructor(e,n,s){this.type=e,this.credential=n,this.user=s}static _fromIdtoken(e,n){return new po("enroll",e,n)}static _fromMfaPendingCredential(e){return new po("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){if(e?.multiFactorSession){if(e.multiFactorSession?.pendingCredential)return po._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(e.multiFactorSession?.idToken)return po._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */function yE(r,e){return $t(r,"POST","/v2/accounts/mfaEnrollment:start",zt(r,e))}function S1(r,e){return $t(r,"POST","/v2/accounts/mfaEnrollment:finalize",zt(r,e))}function R1(r,e){return $t(r,"POST","/v2/accounts/mfaEnrollment:withdraw",zt(r,e))}class xg{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(s=>Ng._fromServerResponse(e.auth,s)))})}static _fromUser(e){return new xg(e)}async getSession(){return po._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const s=e,o=await this.getSession(),u=await is(this.user,s._process(this.user.auth,o,n));return await this.user._updateTokensIfNecessary(u),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,s=await this.user.getIdToken();try{const o=await is(this.user,R1(this.user.auth,{idToken:s,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:u})=>u!==n),await this.user._updateTokensIfNecessary(o),await this.user.reload()}catch(o){throw o}}}const Dm=new WeakMap;function _E(r){const e=Ze(r);return Dm.has(e)||Dm.set(e,xg._fromUser(e)),Dm.get(e)}const bh="__sak";/**
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
 */class M0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bh,"1"),this.storage.removeItem(bh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const I1=1e3,C1=10;class V0 extends M0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=b0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((f,m,p)=>{this.notifyListeners(f,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);NI()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,C1):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},I1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}V0.type="LOCAL";const N1=V0;/**
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
 */class k0 extends M0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}k0.type="SESSION";const L0=k0;/**
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
 */function D1(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Gh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new Gh(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!f?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async y=>y(n.origin,u)),p=await D1(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gh.receivers=[];/**
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
 */function Pg(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class O1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,p)=>{const y=Pg("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(R){const S=R;if(S.data.eventId===y)switch(S.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(S.data.response);break;default:clearTimeout(E),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:y,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function bt(){return window}function x1(r){bt().location.href=r}/**
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
 */function Mg(){return typeof bt().WorkerGlobalScope<"u"&&typeof bt().importScripts=="function"}async function P1(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function M1(){return navigator?.serviceWorker?.controller||null}function V1(){return Mg()?self:null}/**
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
 */const U0="firebaseLocalStorageDb",k1=1,Sh="firebaseLocalStorage",j0="fbase_key";class Su{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yh(r,e){return r.transaction([Sh],e?"readwrite":"readonly").objectStore(Sh)}function L1(){const r=indexedDB.deleteDatabase(U0);return new Su(r).toPromise()}function Zm(){const r=indexedDB.open(U0,k1);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Sh,{keyPath:j0})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Sh)?e(s):(s.close(),await L1(),e(await Zm()))})})}async function vE(r,e,n){const s=Yh(r,!0).put({[j0]:e,value:n});return new Su(s).toPromise()}async function U1(r,e){const n=Yh(r,!1).get(e),s=await new Su(n).toPromise();return s===void 0?null:s.value}function EE(r,e){const n=Yh(r,!0).delete(e);return new Su(n).toPromise()}const j1=800,z1=3;class z0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>z1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gh._getInstance(V1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await P1(),!this.activeServiceWorker)return;this.sender=new O1(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||M1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zm();return await vE(e,bh,"1"),await EE(e,bh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>vE(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>U1(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>EE(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Yh(o,!1).getAll();return new Su(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),j1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}z0.type="LOCAL";const B1=z0;/**
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
 */function TE(r,e){return $t(r,"POST","/v2/accounts/mfaSignIn:start",zt(r,e))}function q1(r,e){return $t(r,"POST","/v2/accounts/mfaSignIn:finalize",zt(r,e))}/**
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
 */const Om=R0("rcb"),F1=new wu(3e4,6e4);class H1{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!bt().grecaptcha?.render}load(e,n=""){return le(G1(n),e,"argument-error"),this.shouldResolveImmediately(n)&&oE(bt().grecaptcha)?Promise.resolve(bt().grecaptcha):new Promise((s,o)=>{const u=bt().setTimeout(()=>{o(Cn(e,"network-request-failed"))},F1.get());bt()[Om]=()=>{bt().clearTimeout(u),delete bt()[Om];const m=bt().grecaptcha;if(!m||!oE(m)){o(Cn(e,"internal-error"));return}const p=m.render;m.render=(y,E)=>{const R=p(y,E);return this.counter++,R},this.hostLanguage=n,s(m)};const f=`${kI()}?${xo({onload:Om,render:"explicit",hl:n})}`;Ig(f).catch(()=>{clearTimeout(u),o(Cn(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!bt().grecaptcha?.render&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function G1(r){return r.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(r)}class Y1{async load(e){return new BI(e)}clearedOneInstance(){}}/**
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
 */const lu="recaptcha",K1={theme:"light",type:"image"};class Q1{constructor(e,n,s={...K1}){this.parameters=s,this.type=lu,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ai(e),this.isInvisible=this.parameters.size==="invisible",le(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const o=typeof n=="string"?document.getElementById(n):n;le(o,this.auth,"argument-error"),this.container=o,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Y1:new H1,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),s=n.getResponse(e);return s||new Promise(o=>{const u=f=>{f&&(this.tokenChangeListeners.delete(u),o(f))};this.tokenChangeListeners.add(u),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){le(!this.parameters.sitekey,this.auth,"argument-error"),le(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),le(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(s=>s(n)),typeof e=="function")e(n);else if(typeof e=="string"){const s=bt()[e];typeof s=="function"&&s(n)}}}assertNotDestroyed(){le(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){le(u0()&&!Mg(),this.auth,"internal-error"),await $1(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await vI(this.auth);le(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return le(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function $1(){let r=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}r=()=>e(),window.addEventListener("load",r)}).catch(e=>{throw r&&window.removeEventListener("load",r),e})}async function X1(r,e,n){if(!r._getRecaptchaConfig())try{await KI(r)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s){le(o.type==="enroll",r,"internal-error");const u={idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await ra(r,u,"mfaSmsEnrollment",async(y,E)=>{if(E.phoneEnrollmentInfo.captchaResponse===ou){le(n?.type===lu,y,"argument-error");const R=await xm(y,E,n);return yE(y,R)}return yE(y,E)},"PHONE_PROVIDER").catch(y=>Promise.reject(y))).phoneSessionInfo.sessionInfo}else{le(o.type==="signin",r,"internal-error");const u=s.multiFactorHint?.uid||s.multiFactorUid;le(u,r,"missing-multi-factor-info");const f={mfaPendingCredential:o.credential,mfaEnrollmentId:u,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await ra(r,f,"mfaSmsSignIn",async(E,R)=>{if(R.phoneSignInInfo.captchaResponse===ou){le(n?.type===lu,E,"argument-error");const S=await xm(E,R,n);return TE(E,S)}return TE(E,R)},"PHONE_PROVIDER").catch(E=>Promise.reject(E))).phoneResponseInfo.sessionInfo}}else{const o={phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await ra(r,o,"sendVerificationCode",async(p,y)=>{if(y.captchaResponse===ou){le(n?.type===lu,p,"argument-error");const E=await xm(p,y,n);return gE(p,E)}return gE(p,y)},"PHONE_PROVIDER").catch(p=>Promise.reject(p))).sessionInfo}}finally{n?._reset()}}async function xm(r,e,n){le(n.type===lu,r,"argument-error");const s=await n.verify();le(typeof s=="string",r,"argument-error");const o={...e};if("phoneEnrollmentInfo"in o){const u=o.phoneEnrollmentInfo.phoneNumber,f=o.phoneEnrollmentInfo.captchaResponse,m=o.phoneEnrollmentInfo.clientType,p=o.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:s,captchaResponse:f,clientType:m,recaptchaVersion:p}}),o}else if("phoneSignInInfo"in o){const u=o.phoneSignInInfo.captchaResponse,f=o.phoneSignInInfo.clientType,m=o.phoneSignInInfo.recaptchaVersion;return Object.assign(o,{phoneSignInInfo:{recaptchaToken:s,captchaResponse:u,clientType:f,recaptchaVersion:m}}),o}else return Object.assign(o,{recaptchaToken:s}),o}/**
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
 */class es{constructor(e){this.providerId=es.PROVIDER_ID,this.auth=ai(e)}verifyPhoneNumber(e,n){return X1(this.auth,e,Ze(n))}static credential(e,n){return To._fromVerification(e,n)}static credentialFromResult(e){const n=e;return es.credentialFromTaggedObject(n)}static credentialFromError(e){return es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:s}=e;return n&&s?To._fromTokenResponse(n,s):null}}es.PROVIDER_ID="phone";es.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function W1(r,e){return e?ur(e):(le(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Vg extends Hh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Eo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Eo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Eo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Z1(r){return x0(r.auth,new Vg(r),r.bypassAuthState)}function J1(r){const{auth:e,user:n}=r;return le(n,e,"internal-error"),m1(n,new Vg(r),r.bypassAuthState)}async function eC(r){const{auth:e,user:n}=r;return le(n,e,"internal-error"),d1(n,new Vg(r),r.bypassAuthState)}/**
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
 */class B0{constructor(e,n,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=e;if(f){this.reject(f);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Z1;case"linkViaPopup":case"linkViaRedirect":return eC;case"reauthViaPopup":case"reauthViaRedirect":return J1;default:Yn(this.auth,"internal-error")}}resolve(e){dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const tC=new wu(2e3,1e4);class yo extends B0{constructor(e,n,s,o,u){super(e,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,yo.currentPopupAction&&yo.currentPopupAction.cancel(),yo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){dr(this.filter.length===1,"Popup operations only handle one event");const e=Pg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yo.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tC.get())};e()}}yo.currentPopupAction=null;/**
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
 */const nC="pendingRedirect",ch=new Map;class iC extends B0{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ch.get(this.auth._key());if(!e){try{const s=await rC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ch.set(this.auth._key(),e)}return this.bypassAuthState||ch.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rC(r,e){const n=oC(e),s=aC(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function sC(r,e){ch.set(r._key(),e)}function aC(r){return ur(r._redirectPersistence)}function oC(r){return uh(nC,r.config.apiKey,r.name)}async function lC(r,e,n=!1){if(Rn(r.app))return Promise.reject(cr(r));const s=ai(r),o=W1(s,e),f=await new iC(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,e)),f}/**
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
 */const uC=600*1e3;class cC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!q0(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(Cn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uC&&this.cachedEventUids.clear(),this.cachedEventUids.has(wE(e))}saveEventToCache(e){this.cachedEventUids.add(wE(e)),this.lastProcessedEventTime=Date.now()}}function wE(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function q0({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function hC(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return q0(r);default:return!1}}/**
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
 */async function fC(r,e={}){return $t(r,"GET","/v1/projects",e)}/**
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
 */const dC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mC=/^https?/;async function gC(r){if(r.config.emulator)return;const{authorizedDomains:e}=await fC(r);for(const n of e)try{if(pC(n))return}catch{}Yn(r,"unauthorized-domain")}function pC(r){const e=$m(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!mC.test(n))return!1;if(dC.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const yC=new wu(3e4,6e4);function AE(){const r=bt().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function _C(r){return new Promise((e,n)=>{function s(){AE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{AE(),n(Cn(r,"network-request-failed"))},timeout:yC.get()})}if(bt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(bt().gapi?.load)s();else{const o=R0("iframefcb");return bt()[o]=()=>{gapi.load?s():n(Cn(r,"network-request-failed"))},Ig(`${UI()}?onload=${o}`).catch(u=>n(u))}}).catch(e=>{throw hh=null,e})}let hh=null;function vC(r){return hh=hh||_C(r),hh}/**
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
 */const EC=new wu(5e3,15e3),TC="__/auth/iframe",wC="emulator/auth/iframe",AC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function SC(r){const e=r.config;le(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?bg(e,wC):`https://${r.config.authDomain}/${TC}`,s={apiKey:e.apiKey,appName:r.name,v:Po},o=bC.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${xo(s).slice(1)}`}async function RC(r){const e=await vC(r),n=bt().gapi;return le(n,r,"internal-error"),e.open({where:document.body,url:SC(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:AC,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=Cn(r,"network-request-failed"),m=bt().setTimeout(()=>{u(f)},EC.get());function p(){bt().clearTimeout(m),o(s)}s.ping(p).then(p,()=>{u(f)})}))}/**
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
 */const IC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},CC=500,NC=600,DC="_blank",OC="http://localhost";class bE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xC(r,e,n,s=CC,o=NC){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const p={...IC,width:s.toString(),height:o.toString(),top:u,left:f},y=nn().toLowerCase();n&&(m=v0(y)?DC:n),y0(y)&&(e=e||OC,p.scrollbars="yes");const E=Object.entries(p).reduce((S,[B,K])=>`${S}${B}=${K},`,"");if(CI(y)&&m!=="_self")return PC(e||"",m),new bE(null);const R=window.open(e||"",m,E);le(R,r,"popup-blocked");try{R.focus()}catch{}return new bE(R)}function PC(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const MC="__/auth/handler",VC="emulator/auth/handler",kC=encodeURIComponent("fac");async function SE(r,e,n,s,o,u){le(r.config.authDomain,r,"auth-domain-config-required"),le(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Po,eventId:o};if(e instanceof D0){e.setDefaultLanguage(r.languageCode),f.providerId=e.providerId||"",$S(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,R]of Object.entries({}))f[E]=R}if(e instanceof bu){const E=e.getScopes().filter(R=>R!=="");E.length>0&&(f.scopes=E.join(","))}r.tenantId&&(f.tid=r.tenantId);const m=f;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const p=await r._getAppCheckToken(),y=p?`#${kC}=${encodeURIComponent(p)}`:"";return`${LC(r)}?${xo(m).slice(1)}${y}`}function LC({config:r}){return r.emulator?bg(r,VC):`https://${r.authDomain}/${MC}`}/**
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
 */const Pm="webStorageSupport";class UC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=L0,this._completeRedirectFn=lC,this._overrideRedirectResult=sC}async _openPopup(e,n,s,o){dr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const u=await SE(e,n,s,$m(),o);return xC(e,u,Pg())}async _openRedirect(e,n,s,o){await this._originValidation(e);const u=await SE(e,n,s,$m(),o);return x1(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(dr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await RC(e),s=new cC(e);return n.register("authEvent",o=>(le(o?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pm,{type:Pm},o=>{const u=o?.[0]?.[Pm];u!==void 0&&n(!!u),Yn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=gC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return b0()||_0()||Rg()}}const jC=UC;class zC{constructor(e){this.factorId=e}_process(e,n,s){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,s);case"signin":return this._finalizeSignIn(e,n.credential);default:return Si("unexpected MultiFactorSessionType")}}}class kg extends zC{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new kg(e)}_finalizeEnroll(e,n,s){return S1(e,{idToken:n,displayName:s,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return q1(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class F0{constructor(){}static assertion(e){return kg._fromCredential(e)}}F0.FACTOR_ID="phone";var RE="@firebase/auth",IE="1.11.0";/**
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
 */class BC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function qC(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function FC(r){ri(new Gn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;le(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:f,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:S0(r)},y=new MI(s,o,u,p);return $I(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ri(new Gn("auth-internal",e=>{const n=ai(e.getProvider("auth").getImmediate());return(s=>new BC(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(RE,IE,qC(r)),gn(RE,IE,"esm2020")}/**
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
 */const HC=300,GC=XT("authIdTokenMaxAge")||HC;let CE=null;const YC=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>GC)return;const o=n?.token;CE!==o&&(CE=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function KC(r=Fh()){const e=fs(r,"auth");if(e.isInitialized())return e.getImmediate();const n=QI(r,{popupRedirectResolver:jC,persistence:[B1,N1,L0]}),s=XT("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=YC(u.toString());A1(n,f,()=>f(n.currentUser)),w1(n,m=>f(m))}}const o=KT("auth");return o&&XI(n,`http://${o}`),n}function QC(){return document.getElementsByTagName("head")?.[0]??document}VI({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=Cn("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",QC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});FC("Browser");var $C="firebase",XC="12.2.1";/**
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
 */gn($C,XC,"app");var NE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ts,H0;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,b){function C(){}C.prototype=b.prototype,P.D=b.prototype,P.prototype=new C,P.prototype.constructor=P,P.C=function(O,x,V){for(var N=Array(arguments.length-2),mt=2;mt<arguments.length;mt++)N[mt-2]=arguments[mt];return b.prototype[x].apply(O,N)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(P,b,C){C||(C=0);var O=Array(16);if(typeof b=="string")for(var x=0;16>x;++x)O[x]=b.charCodeAt(C++)|b.charCodeAt(C++)<<8|b.charCodeAt(C++)<<16|b.charCodeAt(C++)<<24;else for(x=0;16>x;++x)O[x]=b[C++]|b[C++]<<8|b[C++]<<16|b[C++]<<24;b=P.g[0],C=P.g[1],x=P.g[2];var V=P.g[3],N=b+(V^C&(x^V))+O[0]+3614090360&4294967295;b=C+(N<<7&4294967295|N>>>25),N=V+(x^b&(C^x))+O[1]+3905402710&4294967295,V=b+(N<<12&4294967295|N>>>20),N=x+(C^V&(b^C))+O[2]+606105819&4294967295,x=V+(N<<17&4294967295|N>>>15),N=C+(b^x&(V^b))+O[3]+3250441966&4294967295,C=x+(N<<22&4294967295|N>>>10),N=b+(V^C&(x^V))+O[4]+4118548399&4294967295,b=C+(N<<7&4294967295|N>>>25),N=V+(x^b&(C^x))+O[5]+1200080426&4294967295,V=b+(N<<12&4294967295|N>>>20),N=x+(C^V&(b^C))+O[6]+2821735955&4294967295,x=V+(N<<17&4294967295|N>>>15),N=C+(b^x&(V^b))+O[7]+4249261313&4294967295,C=x+(N<<22&4294967295|N>>>10),N=b+(V^C&(x^V))+O[8]+1770035416&4294967295,b=C+(N<<7&4294967295|N>>>25),N=V+(x^b&(C^x))+O[9]+2336552879&4294967295,V=b+(N<<12&4294967295|N>>>20),N=x+(C^V&(b^C))+O[10]+4294925233&4294967295,x=V+(N<<17&4294967295|N>>>15),N=C+(b^x&(V^b))+O[11]+2304563134&4294967295,C=x+(N<<22&4294967295|N>>>10),N=b+(V^C&(x^V))+O[12]+1804603682&4294967295,b=C+(N<<7&4294967295|N>>>25),N=V+(x^b&(C^x))+O[13]+4254626195&4294967295,V=b+(N<<12&4294967295|N>>>20),N=x+(C^V&(b^C))+O[14]+2792965006&4294967295,x=V+(N<<17&4294967295|N>>>15),N=C+(b^x&(V^b))+O[15]+1236535329&4294967295,C=x+(N<<22&4294967295|N>>>10),N=b+(x^V&(C^x))+O[1]+4129170786&4294967295,b=C+(N<<5&4294967295|N>>>27),N=V+(C^x&(b^C))+O[6]+3225465664&4294967295,V=b+(N<<9&4294967295|N>>>23),N=x+(b^C&(V^b))+O[11]+643717713&4294967295,x=V+(N<<14&4294967295|N>>>18),N=C+(V^b&(x^V))+O[0]+3921069994&4294967295,C=x+(N<<20&4294967295|N>>>12),N=b+(x^V&(C^x))+O[5]+3593408605&4294967295,b=C+(N<<5&4294967295|N>>>27),N=V+(C^x&(b^C))+O[10]+38016083&4294967295,V=b+(N<<9&4294967295|N>>>23),N=x+(b^C&(V^b))+O[15]+3634488961&4294967295,x=V+(N<<14&4294967295|N>>>18),N=C+(V^b&(x^V))+O[4]+3889429448&4294967295,C=x+(N<<20&4294967295|N>>>12),N=b+(x^V&(C^x))+O[9]+568446438&4294967295,b=C+(N<<5&4294967295|N>>>27),N=V+(C^x&(b^C))+O[14]+3275163606&4294967295,V=b+(N<<9&4294967295|N>>>23),N=x+(b^C&(V^b))+O[3]+4107603335&4294967295,x=V+(N<<14&4294967295|N>>>18),N=C+(V^b&(x^V))+O[8]+1163531501&4294967295,C=x+(N<<20&4294967295|N>>>12),N=b+(x^V&(C^x))+O[13]+2850285829&4294967295,b=C+(N<<5&4294967295|N>>>27),N=V+(C^x&(b^C))+O[2]+4243563512&4294967295,V=b+(N<<9&4294967295|N>>>23),N=x+(b^C&(V^b))+O[7]+1735328473&4294967295,x=V+(N<<14&4294967295|N>>>18),N=C+(V^b&(x^V))+O[12]+2368359562&4294967295,C=x+(N<<20&4294967295|N>>>12),N=b+(C^x^V)+O[5]+4294588738&4294967295,b=C+(N<<4&4294967295|N>>>28),N=V+(b^C^x)+O[8]+2272392833&4294967295,V=b+(N<<11&4294967295|N>>>21),N=x+(V^b^C)+O[11]+1839030562&4294967295,x=V+(N<<16&4294967295|N>>>16),N=C+(x^V^b)+O[14]+4259657740&4294967295,C=x+(N<<23&4294967295|N>>>9),N=b+(C^x^V)+O[1]+2763975236&4294967295,b=C+(N<<4&4294967295|N>>>28),N=V+(b^C^x)+O[4]+1272893353&4294967295,V=b+(N<<11&4294967295|N>>>21),N=x+(V^b^C)+O[7]+4139469664&4294967295,x=V+(N<<16&4294967295|N>>>16),N=C+(x^V^b)+O[10]+3200236656&4294967295,C=x+(N<<23&4294967295|N>>>9),N=b+(C^x^V)+O[13]+681279174&4294967295,b=C+(N<<4&4294967295|N>>>28),N=V+(b^C^x)+O[0]+3936430074&4294967295,V=b+(N<<11&4294967295|N>>>21),N=x+(V^b^C)+O[3]+3572445317&4294967295,x=V+(N<<16&4294967295|N>>>16),N=C+(x^V^b)+O[6]+76029189&4294967295,C=x+(N<<23&4294967295|N>>>9),N=b+(C^x^V)+O[9]+3654602809&4294967295,b=C+(N<<4&4294967295|N>>>28),N=V+(b^C^x)+O[12]+3873151461&4294967295,V=b+(N<<11&4294967295|N>>>21),N=x+(V^b^C)+O[15]+530742520&4294967295,x=V+(N<<16&4294967295|N>>>16),N=C+(x^V^b)+O[2]+3299628645&4294967295,C=x+(N<<23&4294967295|N>>>9),N=b+(x^(C|~V))+O[0]+4096336452&4294967295,b=C+(N<<6&4294967295|N>>>26),N=V+(C^(b|~x))+O[7]+1126891415&4294967295,V=b+(N<<10&4294967295|N>>>22),N=x+(b^(V|~C))+O[14]+2878612391&4294967295,x=V+(N<<15&4294967295|N>>>17),N=C+(V^(x|~b))+O[5]+4237533241&4294967295,C=x+(N<<21&4294967295|N>>>11),N=b+(x^(C|~V))+O[12]+1700485571&4294967295,b=C+(N<<6&4294967295|N>>>26),N=V+(C^(b|~x))+O[3]+2399980690&4294967295,V=b+(N<<10&4294967295|N>>>22),N=x+(b^(V|~C))+O[10]+4293915773&4294967295,x=V+(N<<15&4294967295|N>>>17),N=C+(V^(x|~b))+O[1]+2240044497&4294967295,C=x+(N<<21&4294967295|N>>>11),N=b+(x^(C|~V))+O[8]+1873313359&4294967295,b=C+(N<<6&4294967295|N>>>26),N=V+(C^(b|~x))+O[15]+4264355552&4294967295,V=b+(N<<10&4294967295|N>>>22),N=x+(b^(V|~C))+O[6]+2734768916&4294967295,x=V+(N<<15&4294967295|N>>>17),N=C+(V^(x|~b))+O[13]+1309151649&4294967295,C=x+(N<<21&4294967295|N>>>11),N=b+(x^(C|~V))+O[4]+4149444226&4294967295,b=C+(N<<6&4294967295|N>>>26),N=V+(C^(b|~x))+O[11]+3174756917&4294967295,V=b+(N<<10&4294967295|N>>>22),N=x+(b^(V|~C))+O[2]+718787259&4294967295,x=V+(N<<15&4294967295|N>>>17),N=C+(V^(x|~b))+O[9]+3951481745&4294967295,P.g[0]=P.g[0]+b&4294967295,P.g[1]=P.g[1]+(x+(N<<21&4294967295|N>>>11))&4294967295,P.g[2]=P.g[2]+x&4294967295,P.g[3]=P.g[3]+V&4294967295}s.prototype.u=function(P,b){b===void 0&&(b=P.length);for(var C=b-this.blockSize,O=this.B,x=this.h,V=0;V<b;){if(x==0)for(;V<=C;)o(this,P,V),V+=this.blockSize;if(typeof P=="string"){for(;V<b;)if(O[x++]=P.charCodeAt(V++),x==this.blockSize){o(this,O),x=0;break}}else for(;V<b;)if(O[x++]=P[V++],x==this.blockSize){o(this,O),x=0;break}}this.h=x,this.o+=b},s.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var b=1;b<P.length-8;++b)P[b]=0;var C=8*this.o;for(b=P.length-8;b<P.length;++b)P[b]=C&255,C/=256;for(this.u(P),P=Array(16),b=C=0;4>b;++b)for(var O=0;32>O;O+=8)P[C++]=this.g[b]>>>O&255;return P};function u(P,b){var C=m;return Object.prototype.hasOwnProperty.call(C,P)?C[P]:C[P]=b(P)}function f(P,b){this.h=b;for(var C=[],O=!0,x=P.length-1;0<=x;x--){var V=P[x]|0;O&&V==b||(C[x]=V,O=!1)}this.g=C}var m={};function p(P){return-128<=P&&128>P?u(P,function(b){return new f([b|0],0>b?-1:0)}):new f([P|0],0>P?-1:0)}function y(P){if(isNaN(P)||!isFinite(P))return R;if(0>P)return J(y(-P));for(var b=[],C=1,O=0;P>=C;O++)b[O]=P/C|0,C*=4294967296;return new f(b,0)}function E(P,b){if(P.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(P.charAt(0)=="-")return J(E(P.substring(1),b));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=y(Math.pow(b,8)),O=R,x=0;x<P.length;x+=8){var V=Math.min(8,P.length-x),N=parseInt(P.substring(x,x+V),b);8>V?(V=y(Math.pow(b,V)),O=O.j(V).add(y(N))):(O=O.j(C),O=O.add(y(N)))}return O}var R=p(0),S=p(1),B=p(16777216);r=f.prototype,r.m=function(){if(ne(this))return-J(this).m();for(var P=0,b=1,C=0;C<this.g.length;C++){var O=this.i(C);P+=(0<=O?O:4294967296+O)*b,b*=4294967296}return P},r.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(K(this))return"0";if(ne(this))return"-"+J(this).toString(P);for(var b=y(Math.pow(P,6)),C=this,O="";;){var x=Te(C,b).g;C=ye(C,x.j(b));var V=((0<C.g.length?C.g[0]:C.h)>>>0).toString(P);if(C=x,K(C))return V+O;for(;6>V.length;)V="0"+V;O=V+O}},r.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function K(P){if(P.h!=0)return!1;for(var b=0;b<P.g.length;b++)if(P.g[b]!=0)return!1;return!0}function ne(P){return P.h==-1}r.l=function(P){return P=ye(this,P),ne(P)?-1:K(P)?0:1};function J(P){for(var b=P.g.length,C=[],O=0;O<b;O++)C[O]=~P.g[O];return new f(C,~P.h).add(S)}r.abs=function(){return ne(this)?J(this):this},r.add=function(P){for(var b=Math.max(this.g.length,P.g.length),C=[],O=0,x=0;x<=b;x++){var V=O+(this.i(x)&65535)+(P.i(x)&65535),N=(V>>>16)+(this.i(x)>>>16)+(P.i(x)>>>16);O=N>>>16,V&=65535,N&=65535,C[x]=N<<16|V}return new f(C,C[C.length-1]&-2147483648?-1:0)};function ye(P,b){return P.add(J(b))}r.j=function(P){if(K(this)||K(P))return R;if(ne(this))return ne(P)?J(this).j(J(P)):J(J(this).j(P));if(ne(P))return J(this.j(J(P)));if(0>this.l(B)&&0>P.l(B))return y(this.m()*P.m());for(var b=this.g.length+P.g.length,C=[],O=0;O<2*b;O++)C[O]=0;for(O=0;O<this.g.length;O++)for(var x=0;x<P.g.length;x++){var V=this.i(O)>>>16,N=this.i(O)&65535,mt=P.i(x)>>>16,et=P.i(x)&65535;C[2*O+2*x]+=N*et,ie(C,2*O+2*x),C[2*O+2*x+1]+=V*et,ie(C,2*O+2*x+1),C[2*O+2*x+1]+=N*mt,ie(C,2*O+2*x+1),C[2*O+2*x+2]+=V*mt,ie(C,2*O+2*x+2)}for(O=0;O<b;O++)C[O]=C[2*O+1]<<16|C[2*O];for(O=b;O<2*b;O++)C[O]=0;return new f(C,0)};function ie(P,b){for(;(P[b]&65535)!=P[b];)P[b+1]+=P[b]>>>16,P[b]&=65535,b++}function he(P,b){this.g=P,this.h=b}function Te(P,b){if(K(b))throw Error("division by zero");if(K(P))return new he(R,R);if(ne(P))return b=Te(J(P),b),new he(J(b.g),J(b.h));if(ne(b))return b=Te(P,J(b)),new he(J(b.g),b.h);if(30<P.g.length){if(ne(P)||ne(b))throw Error("slowDivide_ only works with positive integers.");for(var C=S,O=b;0>=O.l(P);)C=me(C),O=me(O);var x=Oe(C,1),V=Oe(O,1);for(O=Oe(O,2),C=Oe(C,2);!K(O);){var N=V.add(O);0>=N.l(P)&&(x=x.add(C),V=N),O=Oe(O,1),C=Oe(C,1)}return b=ye(P,x.j(b)),new he(x,b)}for(x=R;0<=P.l(b);){for(C=Math.max(1,Math.floor(P.m()/b.m())),O=Math.ceil(Math.log(C)/Math.LN2),O=48>=O?1:Math.pow(2,O-48),V=y(C),N=V.j(b);ne(N)||0<N.l(P);)C-=O,V=y(C),N=V.j(b);K(V)&&(V=S),x=x.add(V),P=ye(P,N)}return new he(x,P)}r.A=function(P){return Te(this,P).h},r.and=function(P){for(var b=Math.max(this.g.length,P.g.length),C=[],O=0;O<b;O++)C[O]=this.i(O)&P.i(O);return new f(C,this.h&P.h)},r.or=function(P){for(var b=Math.max(this.g.length,P.g.length),C=[],O=0;O<b;O++)C[O]=this.i(O)|P.i(O);return new f(C,this.h|P.h)},r.xor=function(P){for(var b=Math.max(this.g.length,P.g.length),C=[],O=0;O<b;O++)C[O]=this.i(O)^P.i(O);return new f(C,this.h^P.h)};function me(P){for(var b=P.g.length+1,C=[],O=0;O<b;O++)C[O]=P.i(O)<<1|P.i(O-1)>>>31;return new f(C,P.h)}function Oe(P,b){var C=b>>5;b%=32;for(var O=P.g.length-C,x=[],V=0;V<O;V++)x[V]=0<b?P.i(V+C)>>>b|P.i(V+C+1)<<32-b:P.i(V+C);return new f(x,P.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,H0=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=E,ts=f}).apply(typeof NE<"u"?NE:typeof self<"u"?self:typeof window<"u"?window:{});var nh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var G0,tu,Y0,fh,Jm,K0,Q0,$0;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,_){return c==Array.prototype||c==Object.prototype||(c[g]=_.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof nh=="object"&&nh];for(var g=0;g<c.length;++g){var _=c[g];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(c,g){if(g)e:{var _=s;c=c.split(".");for(var w=0;w<c.length-1;w++){var L=c[w];if(!(L in _))break e;_=_[L]}c=c[c.length-1],w=_[c],g=g(w),g!=w&&g!=null&&e(_,c,{configurable:!0,writable:!0,value:g})}}function u(c,g){c instanceof String&&(c+="");var _=0,w=!1,L={next:function(){if(!w&&_<c.length){var H=_++;return{value:g(H,c[H]),done:!1}}return w=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(c){return c||function(){return u(this,function(g,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function p(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function y(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function E(c,g,_){return c.call.apply(c.bind,arguments)}function R(c,g,_){if(!c)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,w),c.apply(g,L)}}return function(){return c.apply(g,arguments)}}function S(c,g,_){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:R,S.apply(null,arguments)}function B(c,g){var _=Array.prototype.slice.call(arguments,1);return function(){var w=_.slice();return w.push.apply(w,arguments),c.apply(this,w)}}function K(c,g){function _(){}_.prototype=g.prototype,c.aa=g.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(w,L,H){for(var re=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)re[ke-2]=arguments[ke];return g.prototype[L].apply(w,re)}}function ne(c){const g=c.length;if(0<g){const _=Array(g);for(let w=0;w<g;w++)_[w]=c[w];return _}return[]}function J(c,g){for(let _=1;_<arguments.length;_++){const w=arguments[_];if(p(w)){const L=c.length||0,H=w.length||0;c.length=L+H;for(let re=0;re<H;re++)c[L+re]=w[re]}else c.push(w)}}class ye{constructor(g,_){this.i=g,this.j=_,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function ie(c){return/^[\s\xa0]*$/.test(c)}function he(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function Te(c){return Te[" "](c),c}Te[" "]=function(){};var me=he().indexOf("Gecko")!=-1&&!(he().toLowerCase().indexOf("webkit")!=-1&&he().indexOf("Edge")==-1)&&!(he().indexOf("Trident")!=-1||he().indexOf("MSIE")!=-1)&&he().indexOf("Edge")==-1;function Oe(c,g,_){for(const w in c)g.call(_,c[w],w,c)}function P(c,g){for(const _ in c)g.call(void 0,c[_],_,c)}function b(c){const g={};for(const _ in c)g[_]=c[_];return g}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(c,g){let _,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(_ in w)c[_]=w[_];for(let H=0;H<C.length;H++)_=C[H],Object.prototype.hasOwnProperty.call(w,_)&&(c[_]=w[_])}}function x(c){var g=1;c=c.split(":");const _=[];for(;0<g&&c.length;)_.push(c.shift()),g--;return c.length&&_.push(c.join(":")),_}function V(c){m.setTimeout(()=>{throw c},0)}function N(){var c=ue;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class mt{constructor(){this.h=this.g=null}add(g,_){const w=et.get();w.set(g,_),this.h?this.h.next=w:this.g=w,this.h=w}}var et=new ye(()=>new G,c=>c.reset());class G{constructor(){this.next=this.g=this.h=null}set(g,_){this.h=g,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let se,ee=!1,ue=new mt,A=()=>{const c=m.Promise.resolve(void 0);se=()=>{c.then(F)}};var F=()=>{for(var c;c=N();){try{c.h.call(c.g)}catch(_){V(_)}var g=et;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}ee=!1};function Z(){this.s=this.s,this.C=this.C}Z.prototype.s=!1,Z.prototype.ma=function(){this.s||(this.s=!0,this.N())},Z.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function te(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}te.prototype.h=function(){this.defaultPrevented=!0};var ge=(function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};m.addEventListener("test",_,g),m.removeEventListener("test",_,g)}catch{}return c})();function Ie(c,g){if(te.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,w=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(me){e:{try{Te(g.nodeName);var L=!0;break e}catch{}L=!1}L||(g=null)}}else _=="mouseover"?g=c.fromElement:_=="mouseout"&&(g=c.toElement);this.relatedTarget=g,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:we[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ie.aa.h.call(this)}}K(Ie,te);var we={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Pt="closure_listenable_"+(1e6*Math.random()|0),tt=0;function oi(c,g,_,w,L){this.listener=c,this.proxy=null,this.src=g,this.type=_,this.capture=!!w,this.ha=L,this.key=++tt,this.da=this.fa=!1}function pr(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function xi(c){this.src=c,this.g={},this.h=0}xi.prototype.add=function(c,g,_,w,L){var H=c.toString();c=this.g[H],c||(c=this.g[H]=[],this.h++);var re=_s(c,g,w,L);return-1<re?(g=c[re],_||(g.fa=!1)):(g=new oi(g,this.src,H,!!w,L),g.fa=_,c.push(g)),g};function ys(c,g){var _=g.type;if(_ in c.g){var w=c.g[_],L=Array.prototype.indexOf.call(w,g,void 0),H;(H=0<=L)&&Array.prototype.splice.call(w,L,1),H&&(pr(g),c.g[_].length==0&&(delete c.g[_],c.h--))}}function _s(c,g,_,w){for(var L=0;L<c.length;++L){var H=c[L];if(!H.da&&H.listener==g&&H.capture==!!_&&H.ha==w)return L}return-1}var vs="closure_lm_"+(1e6*Math.random()|0),Bo={};function Ou(c,g,_,w,L){if(Array.isArray(g)){for(var H=0;H<g.length;H++)Ou(c,g[H],_,w,L);return null}return _=xu(_),c&&c[Pt]?c.K(g,_,y(w)?!!w.capture:!1,L):On(c,g,_,!1,w,L)}function On(c,g,_,w,L,H){if(!g)throw Error("Invalid event type");var re=y(L)?!!L.capture:!!L,ke=_a(c);if(ke||(c[vs]=ke=new xi(c)),_=ke.add(g,_,w,re,H),_.proxy)return _;if(w=_f(),_.proxy=w,w.src=c,w.listener=_,c.addEventListener)ge||(L=re),L===void 0&&(L=!1),c.addEventListener(g.toString(),w,L);else if(c.attachEvent)c.attachEvent(Es(g.toString()),w);else if(c.addListener&&c.removeListener)c.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return _}function _f(){function c(_){return g.call(c.src,c.listener,_)}const g=vf;return c}function qo(c,g,_,w,L){if(Array.isArray(g))for(var H=0;H<g.length;H++)qo(c,g[H],_,w,L);else w=y(w)?!!w.capture:!!w,_=xu(_),c&&c[Pt]?(c=c.i,g=String(g).toString(),g in c.g&&(H=c.g[g],_=_s(H,_,w,L),-1<_&&(pr(H[_]),Array.prototype.splice.call(H,_,1),H.length==0&&(delete c.g[g],c.h--)))):c&&(c=_a(c))&&(g=c.g[g.toString()],c=-1,g&&(c=_s(g,_,w,L)),(_=-1<c?g[c]:null)&&ya(_))}function ya(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[Pt])ys(g.i,c);else{var _=c.type,w=c.proxy;g.removeEventListener?g.removeEventListener(_,w,c.capture):g.detachEvent?g.detachEvent(Es(_),w):g.addListener&&g.removeListener&&g.removeListener(w),(_=_a(g))?(ys(_,c),_.h==0&&(_.src=null,g[vs]=null)):pr(c)}}}function Es(c){return c in Bo?Bo[c]:Bo[c]="on"+c}function vf(c,g){if(c.da)c=!0;else{g=new Ie(g,this);var _=c.listener,w=c.ha||c.src;c.fa&&ya(c),c=_.call(w,g)}return c}function _a(c){return c=c[vs],c instanceof xi?c:null}var Fo="__closure_events_fn_"+(1e9*Math.random()>>>0);function xu(c){return typeof c=="function"?c:(c[Fo]||(c[Fo]=function(g){return c.handleEvent(g)}),c[Fo])}function ct(){Z.call(this),this.i=new xi(this),this.M=this,this.F=null}K(ct,Z),ct.prototype[Pt]=!0,ct.prototype.removeEventListener=function(c,g,_,w){qo(this,c,g,_,w)};function Ge(c,g){var _,w=c.F;if(w)for(_=[];w;w=w.F)_.push(w);if(c=c.M,w=g.type||g,typeof g=="string")g=new te(g,c);else if(g instanceof te)g.target=g.target||c;else{var L=g;g=new te(w,c),O(g,L)}if(L=!0,_)for(var H=_.length-1;0<=H;H--){var re=g.g=_[H];L=yn(re,w,!0,g)&&L}if(re=g.g=c,L=yn(re,w,!0,g)&&L,L=yn(re,w,!1,g)&&L,_)for(H=0;H<_.length;H++)re=g.g=_[H],L=yn(re,w,!1,g)&&L}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var _=c.g[g],w=0;w<_.length;w++)pr(_[w]);delete c.g[g],c.h--}}this.F=null},ct.prototype.K=function(c,g,_,w){return this.i.add(String(c),g,!1,_,w)},ct.prototype.L=function(c,g,_,w){return this.i.add(String(c),g,!0,_,w)};function yn(c,g,_,w){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var L=!0,H=0;H<g.length;++H){var re=g[H];if(re&&!re.da&&re.capture==_){var ke=re.listener,Ct=re.ha||re.src;re.fa&&ys(c.i,re),L=ke.call(Ct,w)!==!1&&L}}return L&&!w.defaultPrevented}function Xt(c,g,_){if(typeof c=="function")_&&(c=S(c,_));else if(c&&typeof c.handleEvent=="function")c=S(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:m.setTimeout(c,g||0)}function Pu(c){c.g=Xt(()=>{c.g=null,c.i&&(c.i=!1,Pu(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class Ef extends Z{constructor(g,_){super(),this.m=g,this.l=_,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:Pu(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ts(c){Z.call(this),this.h=c,this.g={}}K(Ts,Z);var ws=[];function As(c){Oe(c.g,function(g,_){this.g.hasOwnProperty(_)&&ya(g)},c),c.g={}}Ts.prototype.N=function(){Ts.aa.N.call(this),As(this)},Ts.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qn=m.JSON.stringify,va=m.JSON.parse,bs=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function Ho(){}Ho.prototype.h=null;function Go(c){return c.h||(c.h=c.i())}function Yo(){}var Pi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Mi(){te.call(this,"d")}K(Mi,te);function Ko(){te.call(this,"c")}K(Ko,te);var li={},Qo=null;function yr(){return Qo=Qo||new ct}li.La="serverreachability";function Ea(c){te.call(this,li.La,c)}K(Ea,te);function _r(c){const g=yr();Ge(g,new Ea(g))}li.STAT_EVENT="statevent";function Mu(c,g){te.call(this,li.STAT_EVENT,c),this.stat=g}K(Mu,te);function at(c){const g=yr();Ge(g,new Mu(g,c))}li.Ma="timingevent";function It(c,g){te.call(this,li.Ma,c),this.size=g}K(It,te);function vt(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},g)}function xn(){this.g=!0}xn.prototype.xa=function(){this.g=!1};function $o(c,g,_,w,L,H){c.info(function(){if(c.g)if(H)for(var re="",ke=H.split("&"),Ct=0;Ct<ke.length;Ct++){var Le=ke[Ct].split("=");if(1<Le.length){var Vt=Le[0];Le=Le[1];var Nt=Vt.split("_");re=2<=Nt.length&&Nt[1]=="type"?re+(Vt+"="+Le+"&"):re+(Vt+"=redacted&")}}else re=null;else re=H;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+g+`
`+_+`
`+re})}function Tf(c,g,_,w,L,H,re){c.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+g+`
`+_+`
`+H+" "+re})}function vr(c,g,_,w){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+Ss(c,_)+(w?" "+w:"")})}function Vu(c,g){c.info(function(){return"TIMEOUT: "+g})}xn.prototype.info=function(){};function Ss(c,g){if(!c.g)return g;if(!g)return null;try{var _=JSON.parse(g);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var w=_[c];if(!(2>w.length)){var L=w[1];if(Array.isArray(L)&&!(1>L.length)){var H=L[0];if(H!="noop"&&H!="stop"&&H!="close")for(var re=1;re<L.length;re++)L[re]=""}}}}return Qn(_)}catch{return g}}var Er={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Vi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ui;function ci(){}K(ci,Ho),ci.prototype.g=function(){return new XMLHttpRequest},ci.prototype.i=function(){return{}},ui=new ci;function rn(c,g,_,w){this.j=c,this.i=g,this.l=_,this.R=w||1,this.U=new Ts(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new gt}function gt(){this.i=null,this.g="",this.h=!1}var Xo={},Ta={};function $n(c,g,_){c.L=1,c.v=Ds(_n(g)),c.m=_,c.P=!0,ki(c,null)}function ki(c,g){c.F=Date.now(),Rs(c),c.A=_n(c.v);var _=c.A,w=c.R;Array.isArray(w)||(w=[String(w)]),nl(_.i,"t",w),c.C=0,_=c.j.J,c.h=new gt,c.g=Wu(c.j,_?g:null,!c.m),0<c.O&&(c.M=new Ef(S(c.Y,c,c.g),c.O)),g=c.U,_=c.g,w=c.ca;var L="readystatechange";Array.isArray(L)||(L&&(ws[0]=L.toString()),L=ws);for(var H=0;H<L.length;H++){var re=Ou(_,L[H],w||g.handleEvent,!1,g.h||g);if(!re)break;g.g[re.key]=re}g=c.H?b(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),_r(),$o(c.i,c.u,c.A,c.l,c.R,c.m)}rn.prototype.ca=function(c){c=c.target;const g=this.M;g&&kn(c)==3?g.j():this.Y(c)},rn.prototype.Y=function(c){try{if(c==this.g)e:{const Nt=kn(this.g);var g=this.g.Ba();const Hi=this.g.Z();if(!(3>Nt)&&(Nt!=3||this.g&&(this.h.h||this.g.oa()||Fu(this.g)))){this.J||Nt!=4||g==7||(g==8||0>=Hi?_r(3):_r(2)),Tr(this);var _=this.g.Z();this.X=_;t:if(ku(this)){var w=Fu(this.g);c="";var L=w.length,H=kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Bt(this),hi(this);var re="";break t}this.h.i=new m.TextDecoder}for(g=0;g<L;g++)this.h.h=!0,c+=this.h.i.decode(w[g],{stream:!(H&&g==L-1)});w.length=0,this.h.g+=c,this.C=0,re=this.h.g}else re=this.g.oa();if(this.o=_==200,Tf(this.i,this.u,this.A,this.l,this.R,Nt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,Ct=this.g;if((ke=Ct.g?Ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ie(ke)){var Le=ke;break t}}Le=null}if(_=Le)vr(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Is(this,_);else{this.o=!1,this.s=3,at(12),Bt(this),hi(this);break e}}if(this.P){_=!0;let qt;for(;!this.J&&this.C<re.length;)if(qt=Lu(this,re),qt==Ta){Nt==4&&(this.s=4,at(14),_=!1),vr(this.i,this.l,null,"[Incomplete Response]");break}else if(qt==Xo){this.s=4,at(15),vr(this.i,this.l,re,"[Invalid Chunk]"),_=!1;break}else vr(this.i,this.l,qt,null),Is(this,qt);if(ku(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Nt!=4||re.length!=0||this.h.h||(this.s=1,at(16),_=!1),this.o=this.o&&_,!_)vr(this.i,this.l,re,"[Invalid Chunked Response]"),Bt(this),hi(this);else if(0<re.length&&!this.W){this.W=!0;var Vt=this.j;Vt.g==this&&Vt.ba&&!Vt.M&&(Vt.j.info("Great, no buffering proxy detected. Bytes received: "+re.length),Us(Vt),Vt.M=!0,at(11))}}else vr(this.i,this.l,re,null),Is(this,re);Nt==4&&Bt(this),this.o&&!this.J&&(Nt==4?Qu(this.j,this):(this.o=!1,Rs(this)))}else Rf(this.g),_==400&&0<re.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),Bt(this),hi(this)}}}catch{}finally{}};function ku(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Lu(c,g){var _=c.C,w=g.indexOf(`
`,_);return w==-1?Ta:(_=Number(g.substring(_,w)),isNaN(_)?Xo:(w+=1,w+_>g.length?Ta:(g=g.slice(w,w+_),c.C=w+_,g)))}rn.prototype.cancel=function(){this.J=!0,Bt(this)};function Rs(c){c.S=Date.now()+c.I,Uu(c,c.I)}function Uu(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=vt(S(c.ba,c),g)}function Tr(c){c.B&&(m.clearTimeout(c.B),c.B=null)}rn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Vu(this.i,this.A),this.L!=2&&(_r(),at(17)),Bt(this),this.s=2,hi(this)):Uu(this,this.S-c)};function hi(c){c.j.G==0||c.J||Qu(c.j,c)}function Bt(c){Tr(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,As(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function Is(c,g){try{var _=c.j;if(_.G!=0&&(_.g==c||Wo(_.h,c))){if(!c.K&&Wo(_.h,c)&&_.G==3){try{var w=_.Da.g.parse(g)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)Pa(_),Oa(_);else break e;ol(_),at(18)}}else _.za=L[1],0<_.za-_.T&&37500>L[2]&&_.F&&_.v==0&&!_.C&&(_.C=vt(S(_.Za,_),6e3));if(1>=Aa(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Fi(_,11)}else if((c.K||_.g==c)&&Pa(_),!ie(g))for(L=_.Da.g.parse(g),g=0;g<L.length;g++){let Le=L[g];if(_.T=Le[0],Le=Le[1],_.G==2)if(Le[0]=="c"){_.K=Le[1],_.ia=Le[2];const Vt=Le[3];Vt!=null&&(_.la=Vt,_.j.info("VER="+_.la));const Nt=Le[4];Nt!=null&&(_.Aa=Nt,_.j.info("SVER="+_.Aa));const Hi=Le[5];Hi!=null&&typeof Hi=="number"&&0<Hi&&(w=1.5*Hi,_.L=w,_.j.info("backChannelRequestTimeoutMs_="+w)),w=_;const qt=c.g;if(qt){const _i=qt.g?qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_i){var H=w.h;H.g||_i.indexOf("spdy")==-1&&_i.indexOf("quic")==-1&&_i.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(ba(H,H.h),H.h=null))}if(w.D){const ul=qt.g?qt.g.getResponseHeader("X-HTTP-Session-Id"):null;ul&&(w.ya=ul,Qe(w.I,w.D,ul))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),w=_;var re=c;if(w.qa=Xu(w,w.J?w.ia:null,w.W),re.K){sn(w.h,re);var ke=re,Ct=w.L;Ct&&(ke.I=Ct),ke.B&&(Tr(ke),Rs(ke)),w.g=re}else Yu(w);0<_.i.length&&xa(_)}else Le[0]!="stop"&&Le[0]!="close"||Fi(_,7);else _.G==3&&(Le[0]=="stop"||Le[0]=="close"?Le[0]=="stop"?Fi(_,7):sl(_):Le[0]!="noop"&&_.l&&_.l.ta(Le),_.v=0)}}_r(4)}catch{}}var ju=class{constructor(c,g){this.g=c,this.map=g}};function Li(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function wa(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Aa(c){return c.h?1:c.g?c.g.size:0}function Wo(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function ba(c,g){c.g?c.g.add(g):c.h=g}function sn(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}Li.prototype.cancel=function(){if(this.i=Zo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Zo(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const _ of c.g.values())g=g.concat(_.D);return g}return ne(c.i)}function wf(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(p(c)){for(var g=[],_=c.length,w=0;w<_;w++)g.push(c[w]);return g}g=[],_=0;for(w in c)g[_++]=c[w];return g}function Sa(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(p(c)||typeof c=="string"){var g=[];c=c.length;for(var _=0;_<c;_++)g.push(_);return g}g=[],_=0;for(const w in c)g[_++]=w;return g}}}function Jo(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(p(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var _=Sa(c),w=wf(c),L=w.length,H=0;H<L;H++)g.call(void 0,w[H],_&&_[H],c)}var Cs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Af(c,g){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var w=c[_].indexOf("="),L=null;if(0<=w){var H=c[_].substring(0,w);L=c[_].substring(w+1)}else H=c[_];g(H,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Et(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Et){this.h=c.h,Ns(this,c.j),this.o=c.o,this.g=c.g,wr(this,c.s),this.l=c.l;var g=c.i,_=new ji;_.i=g.i,g.g&&(_.g=new Map(g.g),_.h=g.h),Ui(this,_),this.m=c.m}else c&&(g=String(c).match(Cs))?(this.h=!1,Ns(this,g[1]||"",!0),this.o=Pn(g[2]||""),this.g=Pn(g[3]||"",!0),wr(this,g[4]),this.l=Pn(g[5]||"",!0),Ui(this,g[6]||"",!0),this.m=Pn(g[7]||"")):(this.h=!1,this.i=new ji(null,this.h))}Et.prototype.toString=function(){var c=[],g=this.j;g&&c.push(Os(g,el,!0),":");var _=this.g;return(_||g=="file")&&(c.push("//"),(g=this.o)&&c.push(Os(g,el,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(Os(_,_.charAt(0)=="/"?bf:tl,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",Os(_,Ra)),c.join("")};function _n(c){return new Et(c)}function Ns(c,g,_){c.j=_?Pn(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function wr(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function Ui(c,g,_){g instanceof ji?(c.i=g,Bu(c.i,c.h)):(_||(g=Os(g,Sf)),c.i=new ji(g,c.h))}function Qe(c,g,_){c.i.set(g,_)}function Ds(c){return Qe(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Pn(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Os(c,g,_){return typeof c=="string"?(c=encodeURI(c).replace(g,zu),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function zu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var el=/[#\/\?@]/g,tl=/[#\?:]/g,bf=/[#\?]/g,Sf=/[#\?@]/g,Ra=/#/g;function ji(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function Mn(c){c.g||(c.g=new Map,c.h=0,c.i&&Af(c.i,function(g,_){c.add(decodeURIComponent(g.replace(/\+/g," ")),_)}))}r=ji.prototype,r.add=function(c,g){Mn(this),this.i=null,c=fi(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(g),this.h+=1,this};function zi(c,g){Mn(c),g=fi(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function Bi(c,g){return Mn(c),g=fi(c,g),c.g.has(g)}r.forEach=function(c,g){Mn(this),this.g.forEach(function(_,w){_.forEach(function(L){c.call(g,L,w,this)},this)},this)},r.na=function(){Mn(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),_=[];for(let w=0;w<g.length;w++){const L=c[w];for(let H=0;H<L.length;H++)_.push(g[w])}return _},r.V=function(c){Mn(this);let g=[];if(typeof c=="string")Bi(this,c)&&(g=g.concat(this.g.get(fi(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)g=g.concat(c[_])}return g},r.set=function(c,g){return Mn(this),this.i=null,c=fi(this,c),Bi(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},r.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function nl(c,g,_){zi(c,g),0<_.length&&(c.i=null,c.g.set(fi(c,g),ne(_)),c.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var _=0;_<g.length;_++){var w=g[_];const H=encodeURIComponent(String(w)),re=this.V(w);for(w=0;w<re.length;w++){var L=H;re[w]!==""&&(L+="="+encodeURIComponent(String(re[w]))),c.push(L)}}return this.i=c.join("&")};function fi(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function Bu(c,g){g&&!c.j&&(Mn(c),c.i=null,c.g.forEach(function(_,w){var L=w.toLowerCase();w!=L&&(zi(this,w),nl(this,L,_))},c)),c.j=g}function xs(c,g){const _=new xn;if(m.Image){const w=new Image;w.onload=B(Vn,_,"TestLoadImage: loaded",!0,g,w),w.onerror=B(Vn,_,"TestLoadImage: error",!1,g,w),w.onabort=B(Vn,_,"TestLoadImage: abort",!1,g,w),w.ontimeout=B(Vn,_,"TestLoadImage: timeout",!1,g,w),m.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=c}else g(!1)}function Xn(c,g){const _=new xn,w=new AbortController,L=setTimeout(()=>{w.abort(),Vn(_,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:w.signal}).then(H=>{clearTimeout(L),H.ok?Vn(_,"TestPingServer: ok",!0,g):Vn(_,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(L),Vn(_,"TestPingServer: error",!1,g)})}function Vn(c,g,_,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(_)}catch{}}function Ps(){this.g=new bs}function di(c,g,_){const w=_||"";try{Jo(c,function(L,H){let re=L;y(L)&&(re=Qn(L)),g.push(w+H+"="+encodeURIComponent(re))})}catch(L){throw g.push(w+"type="+encodeURIComponent("_badmap")),L}}function Ar(c){this.l=c.Ub||null,this.j=c.eb||!1}K(Ar,Ho),Ar.prototype.g=function(){return new qi(this.l,this.j)},Ar.prototype.i=(function(c){return function(){return c}})({});function qi(c,g){ct.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}K(qi,ct),r=qi.prototype,r.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,gi(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||m).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,mi(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,gi(this)),this.g&&(this.readyState=3,gi(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;il(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function il(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?mi(this):gi(this),this.readyState==3&&il(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,mi(this))},r.Qa=function(c){this.g&&(this.response=c,mi(this))},r.ga=function(){this.g&&mi(this)};function mi(c){c.readyState=4,c.l=null,c.j=null,c.v=null,gi(c)}r.setRequestHeader=function(c,g){this.u.append(c,g)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var _=g.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=g.next();return c.join(`\r
`)};function gi(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function rl(c){let g="";return Oe(c,function(_,w){g+=w,g+=":",g+=_,g+=`\r
`}),g}function Mt(c,g,_){e:{for(w in _){var w=!1;break e}w=!0}w||(_=rl(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):Qe(c,g,_))}function Fe(c){ct.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}K(Fe,ct);var Ia=/^https?$/i,Ms=["POST","PUT"];r=Fe.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,g,_,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ui.g(),this.v=this.o?Go(this.o):Go(ui),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(H){qu(this,H);return}if(c=_||"",_=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)_.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const H of w.keys())_.set(H,w.get(H));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(_.keys()).find(H=>H.toLowerCase()=="content-type"),L=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Ms,g,void 0))||w||L||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,re]of _)this.g.setRequestHeader(H,re);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Vs(this),this.u=!0,this.g.send(c),this.u=!1}catch(H){qu(this,H)}};function qu(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,Ca(c),pi(c)}function Ca(c){c.A||(c.A=!0,Ge(c,"complete"),Ge(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ge(this,"complete"),Ge(this,"abort"),pi(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pi(this,!0)),Fe.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Na(this):this.bb())},r.bb=function(){Na(this)};function Na(c){if(c.h&&typeof f<"u"&&(!c.v[1]||kn(c)!=4||c.Z()!=2)){if(c.u&&kn(c)==4)Xt(c.Ea,0,c);else if(Ge(c,"readystatechange"),kn(c)==4){c.h=!1;try{const re=c.Z();e:switch(re){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var _;if(!(_=g)){var w;if(w=re===0){var L=String(c.D).match(Cs)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),w=!Ia.test(L?L.toLowerCase():"")}_=w}if(_)Ge(c,"complete"),Ge(c,"success");else{c.m=6;try{var H=2<kn(c)?c.g.statusText:""}catch{H=""}c.l=H+" ["+c.Z()+"]",Ca(c)}}finally{pi(c)}}}}function pi(c,g){if(c.g){Vs(c);const _=c.g,w=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||Ge(c,"ready");try{_.onreadystatechange=w}catch{}}}function Vs(c){c.I&&(m.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function kn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<kn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),va(g)}};function Fu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Rf(c){const g={};c=(c.g&&2<=kn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<c.length;w++){if(ie(c[w]))continue;var _=x(c[w]);const L=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const H=g[L]||[];g[L]=H,H.push(_)}P(g,function(w){return w.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ks(c,g,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||g}function Da(c){this.Aa=0,this.i=[],this.j=new xn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ks("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ks("baseRetryDelayMs",5e3,c),this.cb=ks("retryDelaySeedMs",1e4,c),this.Wa=ks("forwardChannelMaxRetries",2,c),this.wa=ks("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Li(c&&c.concurrentRequestLimit),this.Da=new Ps,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Da.prototype,r.la=8,r.G=1,r.connect=function(c,g,_,w){at(0),this.W=c,this.H=g||{},_&&w!==void 0&&(this.H.OSID=_,this.H.OAID=w),this.F=this.X,this.I=Xu(this,null,this.W),xa(this)};function sl(c){if(Hu(c),c.G==3){var g=c.U++,_=_n(c.I);if(Qe(_,"SID",c.K),Qe(_,"RID",g),Qe(_,"TYPE","terminate"),Ls(c,_),g=new rn(c,c.j,g),g.L=2,g.v=Ds(_n(_)),_=!1,m.navigator&&m.navigator.sendBeacon)try{_=m.navigator.sendBeacon(g.v.toString(),"")}catch{}!_&&m.Image&&(new Image().src=g.v,_=!0),_||(g.g=Wu(g.j,null),g.g.ea(g.v)),g.F=Date.now(),Rs(g)}$u(c)}function Oa(c){c.g&&(Us(c),c.g.cancel(),c.g=null)}function Hu(c){Oa(c),c.u&&(m.clearTimeout(c.u),c.u=null),Pa(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function xa(c){if(!wa(c.h)&&!c.s){c.s=!0;var g=c.Ga;se||A(),ee||(se(),ee=!0),ue.add(g,c),c.B=0}}function If(c,g){return Aa(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=vt(S(c.Ga,c,g),ll(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const L=new rn(this,this.j,c);let H=this.o;if(this.S&&(H?(H=b(H),O(H,this.S)):H=this.S),this.m!==null||this.O||(L.H=H,H=null),this.P)e:{for(var g=0,_=0;_<this.i.length;_++){t:{var w=this.i[_];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(g+=w,4096<g){g=_;break e}if(g===4096||_===this.i.length-1){g=_+1;break e}}g=1e3}else g=1e3;g=Gu(this,L,g),_=_n(this.I),Qe(_,"RID",c),Qe(_,"CVER",22),this.D&&Qe(_,"X-HTTP-Session-Id",this.D),Ls(this,_),H&&(this.O?g="headers="+encodeURIComponent(String(rl(H)))+"&"+g:this.m&&Mt(_,this.m,H)),ba(this.h,L),this.Ua&&Qe(_,"TYPE","init"),this.P?(Qe(_,"$req",g),Qe(_,"SID","null"),L.T=!0,$n(L,_,null)):$n(L,_,g),this.G=2}}else this.G==3&&(c?al(this,c):this.i.length==0||wa(this.h)||al(this))};function al(c,g){var _;g?_=g.l:_=c.U++;const w=_n(c.I);Qe(w,"SID",c.K),Qe(w,"RID",_),Qe(w,"AID",c.T),Ls(c,w),c.m&&c.o&&Mt(w,c.m,c.o),_=new rn(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),g&&(c.i=g.D.concat(c.i)),g=Gu(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),ba(c.h,_),$n(_,w,g)}function Ls(c,g){c.H&&Oe(c.H,function(_,w){Qe(g,w,_)}),c.l&&Jo({},function(_,w){Qe(g,w,_)})}function Gu(c,g,_){_=Math.min(c.i.length,_);var w=c.l?S(c.l.Na,c.l,c):null;e:{var L=c.i;let H=-1;for(;;){const re=["count="+_];H==-1?0<_?(H=L[0].g,re.push("ofs="+H)):H=0:re.push("ofs="+H);let ke=!0;for(let Ct=0;Ct<_;Ct++){let Le=L[Ct].g;const Vt=L[Ct].map;if(Le-=H,0>Le)H=Math.max(0,L[Ct].g-100),ke=!1;else try{di(Vt,re,"req"+Le+"_")}catch{w&&w(Vt)}}if(ke){w=re.join("&");break e}}}return c=c.i.splice(0,_),g.D=c,w}function Yu(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;se||A(),ee||(se(),ee=!0),ue.add(g,c),c.v=0}}function ol(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=vt(S(c.Fa,c),ll(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,Ku(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=vt(S(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,at(10),Oa(this),Ku(this))};function Us(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function Ku(c){c.g=new rn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=_n(c.qa);Qe(g,"RID","rpc"),Qe(g,"SID",c.K),Qe(g,"AID",c.T),Qe(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&Qe(g,"TO",c.ja),Qe(g,"TYPE","xmlhttp"),Ls(c,g),c.m&&c.o&&Mt(g,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=Ds(_n(g)),_.m=null,_.P=!0,ki(_,c)}r.Za=function(){this.C!=null&&(this.C=null,Oa(this),ol(this),at(19))};function Pa(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function Qu(c,g){var _=null;if(c.g==g){Pa(c),Us(c),c.g=null;var w=2}else if(Wo(c.h,g))_=g.D,sn(c.h,g),w=1;else return;if(c.G!=0){if(g.o)if(w==1){_=g.m?g.m.length:0,g=Date.now()-g.F;var L=c.B;w=yr(),Ge(w,new It(w,_)),xa(c)}else Yu(c);else if(L=g.s,L==3||L==0&&0<g.X||!(w==1&&If(c,g)||w==2&&ol(c)))switch(_&&0<_.length&&(g=c.h,g.i=g.i.concat(_)),L){case 1:Fi(c,5);break;case 4:Fi(c,10);break;case 3:Fi(c,6);break;default:Fi(c,2)}}}function ll(c,g){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*g}function Fi(c,g){if(c.j.info("Error code "+g),g==2){var _=S(c.fb,c),w=c.Xa;const L=!w;w=new Et(w||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Ns(w,"https"),Ds(w),L?xs(w.toString(),_):Xn(w.toString(),_)}else at(2);c.G=0,c.l&&c.l.sa(g),$u(c),Hu(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function $u(c){if(c.G=0,c.ka=[],c.l){const g=Zo(c.h);(g.length!=0||c.i.length!=0)&&(J(c.ka,g),J(c.ka,c.i),c.h.i.length=0,ne(c.i),c.i.length=0),c.l.ra()}}function Xu(c,g,_){var w=_ instanceof Et?_n(_):new Et(_);if(w.g!="")g&&(w.g=g+"."+w.g),wr(w,w.s);else{var L=m.location;w=L.protocol,g=g?g+"."+L.hostname:L.hostname,L=+L.port;var H=new Et(null);w&&Ns(H,w),g&&(H.g=g),L&&wr(H,L),_&&(H.l=_),w=H}return _=c.D,g=c.ya,_&&g&&Qe(w,_,g),Qe(w,"VER",c.la),Ls(c,w),w}function Wu(c,g,_){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new Fe(new Ar({eb:_})):new Fe(c.pa),g.Ha(c.J),g}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zu(){}r=Zu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Ma(){}Ma.prototype.g=function(c,g){return new an(c,g)};function an(c,g){ct.call(this),this.g=new Da(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!ie(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!ie(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new yi(this)}K(an,ct),an.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},an.prototype.close=function(){sl(this.g)},an.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=Qn(c),c=_);g.i.push(new ju(g.Ya++,c)),g.G==3&&xa(g)},an.prototype.N=function(){this.g.l=null,delete this.j,sl(this.g),delete this.g,an.aa.N.call(this)};function Ju(c){Mi.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const _ in g){c=_;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}K(Ju,Mi);function ec(){Ko.call(this),this.status=1}K(ec,Ko);function yi(c){this.g=c}K(yi,Zu),yi.prototype.ua=function(){Ge(this.g,"a")},yi.prototype.ta=function(c){Ge(this.g,new Ju(c))},yi.prototype.sa=function(c){Ge(this.g,new ec)},yi.prototype.ra=function(){Ge(this.g,"b")},Ma.prototype.createWebChannel=Ma.prototype.g,an.prototype.send=an.prototype.o,an.prototype.open=an.prototype.m,an.prototype.close=an.prototype.close,$0=function(){return new Ma},Q0=function(){return yr()},K0=li,Jm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Er.NO_ERROR=0,Er.TIMEOUT=8,Er.HTTP_ERROR=6,fh=Er,Vi.COMPLETE="complete",Y0=Vi,Yo.EventType=Pi,Pi.OPEN="a",Pi.CLOSE="b",Pi.ERROR="c",Pi.MESSAGE="d",ct.prototype.listen=ct.prototype.K,tu=Yo,Fe.prototype.listenOnce=Fe.prototype.L,Fe.prototype.getLastError=Fe.prototype.Ka,Fe.prototype.getLastErrorCode=Fe.prototype.Ba,Fe.prototype.getStatus=Fe.prototype.Z,Fe.prototype.getResponseJson=Fe.prototype.Oa,Fe.prototype.getResponseText=Fe.prototype.oa,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Ha,G0=Fe}).apply(typeof nh<"u"?nh:typeof self<"u"?self:typeof window<"u"?window:{});const DE="@firebase/firestore",OE="4.9.1";/**
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
 */class en{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}en.UNAUTHENTICATED=new en(null),en.GOOGLE_CREDENTIALS=new en("google-credentials-uid"),en.FIRST_PARTY=new en("first-party-uid"),en.MOCK_USER=new en("mock-user");/**
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
 */let Vo="12.2.0";/**
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
 */const ua=new qh("@firebase/firestore");function ho(){return ua.logLevel}function oe(r,...e){if(ua.logLevel<=xe.DEBUG){const n=e.map(Lg);ua.debug(`Firestore (${Vo}): ${r}`,...n)}}function mr(r,...e){if(ua.logLevel<=xe.ERROR){const n=e.map(Lg);ua.error(`Firestore (${Vo}): ${r}`,...n)}}function Ao(r,...e){if(ua.logLevel<=xe.WARN){const n=e.map(Lg);ua.warn(`Firestore (${Vo}): ${r}`,...n)}}function Lg(r){if(typeof r=="string")return r;try{/**
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
*/return(function(n){return JSON.stringify(n)})(r)}catch{return r}}/**
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
 */function ve(r,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,X0(r,s,n)}function X0(r,e,n){let s=`FIRESTORE (${Vo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw mr(s),new Error(s)}function He(r,e,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||X0(e,o,s)}function be(r,e){return r}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends Kn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class hr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class W0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class WC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(en.UNAUTHENTICATED)))}shutdown(){}}class ZC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class JC{constructor(e){this.t=e,this.currentUser=en.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){He(this.o===void 0,42304);let s=this.i;const o=p=>this.i!==s?(s=this.i,n(p)):Promise.resolve();let u=new hr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new hr,e.enqueueRetryable((()=>o(this.currentUser)))};const f=()=>{const p=u;e.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},m=p=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit((p=>m(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new hr)}}),0),f()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(He(typeof s.accessToken=="string",31837,{l:s}),new W0(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return He(e===null||typeof e=="string",2055,{h:e}),new en(e)}}class eN{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=en.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class tN{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new eN(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(en.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class xE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nN{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Rn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){He(this.o===void 0,3512);const s=u=>{u.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,oe("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new xE(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(He(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new xE(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function iN(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Ug{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=iN(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=e.charAt(o[u]%62))}return s}}function Pe(r,e){return r<e?-1:r>e?1:0}function eg(r,e){const n=Math.min(r.length,e.length);for(let s=0;s<n;s++){const o=r.charAt(s),u=e.charAt(s);if(o!==u)return Mm(o)===Mm(u)?Pe(o,u):Mm(o)?1:-1}return Pe(r.length,e.length)}const rN=55296,sN=57343;function Mm(r){const e=r.charCodeAt(0);return e>=rN&&e<=sN}function bo(r,e,n){return r.length===e.length&&r.every(((s,o)=>n(s,e[o])))}/**
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
 */const PE="__name__";class bi{constructor(e,n,s){n===void 0?n=0:n>e.length&&ve(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&ve(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return bi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof bi?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let o=0;o<s;o++){const u=bi.compareSegments(e.get(o),n.get(o));if(u!==0)return u}return Pe(e.length,n.length)}static compareSegments(e,n){const s=bi.isNumericId(e),o=bi.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?bi.extractNumericId(e).compare(bi.extractNumericId(n)):eg(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ts.fromString(e.substring(4,e.length-2))}}class rt extends bi{construct(e,n,s){return new rt(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ae($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((o=>o.length>0)))}return new rt(n)}static emptyPath(){return new rt([])}}const aN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Kt extends bi{construct(e,n,s){return new Kt(e,n,s)}static isValidIdentifier(e){return aN.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Kt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===PE}static keyField(){return new Kt([PE])}static fromServerFormat(e){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ae($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ae($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ae($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new ae($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Kt(n)}static emptyPath(){return new Kt([])}}/**
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
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(rt.fromString(e))}static fromName(e){return new de(rt.fromString(e).popFirst(5))}static empty(){return new de(rt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&rt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return rt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new rt(e.slice()))}}/**
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
 */function Z0(r,e,n){if(!n)throw new ae($.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function oN(r,e,n,s){if(e===!0&&s===!0)throw new ae($.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function ME(r){if(!de.isDocumentKey(r))throw new ae($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function VE(r){if(de.isDocumentKey(r))throw new ae($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function J0(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Kh(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":ve(12329,{type:typeof r})}function Nn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ae($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Kh(r);throw new ae($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Rt(r,e){const n={typeString:r};return e&&(n.value=e),n}function Ru(r,e){if(!J0(r))throw new ae($.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){n=`JSON missing required field: '${s}'`;break}const f=r[s];if(o&&typeof f!==o){n=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&f!==u.value){n=`Expected '${s}' field to equal '${u.value}'`;break}}if(n)throw new ae($.INVALID_ARGUMENT,n);return!0}/**
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
 */const kE=-62135596800,LE=1e6;class st{static now(){return st.fromMillis(Date.now())}static fromDate(e){return st.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*LE);return new st(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ae($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ae($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<kE)throw new ae($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/LE}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:st._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ru(e,st._jsonSchema))return new st(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-kE;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}st._jsonSchemaVersion="firestore/timestamp/1.0",st._jsonSchema={type:Rt("string",st._jsonSchemaVersion),seconds:Rt("number"),nanoseconds:Rt("number")};/**
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
 */class Ae{static fromTimestamp(e){return new Ae(e)}static min(){return new Ae(new st(0,0))}static max(){return new Ae(new st(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const pu=-1;function lN(r,e){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Ae.fromTimestamp(s===1e9?new st(n+1,0):new st(n,s));return new rs(o,de.empty(),e)}function uN(r){return new rs(r.readTime,r.key,pu)}class rs{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new rs(Ae.min(),de.empty(),pu)}static max(){return new rs(Ae.max(),de.empty(),pu)}}function cN(r,e){let n=r.readTime.compareTo(e.readTime);return n!==0?n:(n=de.comparator(r.documentKey,e.documentKey),n!==0?n:Pe(r.largestBatchId,e.largestBatchId))}/**
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
 */const hN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function ko(r){if(r.code!==$.FAILED_PRECONDITION||r.message!==hN)throw r;oe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ve(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new W(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof W?n:W.resolve(n)}catch(n){return W.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):W.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):W.reject(n)}static resolve(e){return new W(((n,s)=>{n(e)}))}static reject(e){return new W(((n,s)=>{s(e)}))}static waitFor(e){return new W(((n,s)=>{let o=0,u=0,f=!1;e.forEach((m=>{++o,m.next((()=>{++u,f&&u===o&&n()}),(p=>s(p)))})),f=!0,u===o&&n()}))}static or(e){let n=W.resolve(!1);for(const s of e)n=n.next((o=>o?W.resolve(o):s()));return n}static forEach(e,n){const s=[];return e.forEach(((o,u)=>{s.push(n.call(this,o,u))})),this.waitFor(s)}static mapArray(e,n){return new W(((s,o)=>{const u=e.length,f=new Array(u);let m=0;for(let p=0;p<u;p++){const y=p;n(e[y]).next((E=>{f[y]=E,++m,m===u&&s(f)}),(E=>o(E)))}}))}static doWhile(e,n){return new W(((s,o)=>{const u=()=>{e()===!0?n().next((()=>{u()}),o):s()};u()}))}}function dN(r){const e=r.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Lo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Qh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Qh.ce=-1;/**
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
 */const jg=-1;function $h(r){return r==null}function Rh(r){return r===0&&1/r==-1/0}function mN(r){return typeof r=="number"&&Number.isInteger(r)&&!Rh(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const ew="";function gN(r){let e="";for(let n=0;n<r.length;n++)e.length>0&&(e=UE(e)),e=pN(r.get(n),e);return UE(e)}function pN(r,e){let n=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case ew:n+="";break;default:n+=u}}return n}function UE(r){return r+ew+""}/**
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
 */function jE(r){let e=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e++;return e}function ms(r,e){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e(n,r[n])}function tw(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class ut{constructor(e,n){this.comparator=e,this.root=n||Yt.EMPTY}insert(e,n){return new ut(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Yt.BLACK,null,null))}remove(e){return new ut(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Yt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,s)=>(e(n,s),!1)))}toString(){const e=[];return this.inorderTraversal(((n,s)=>(e.push(`${n}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ih(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ih(this.root,e,this.comparator,!1)}getReverseIterator(){return new ih(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ih(this.root,e,this.comparator,!0)}}class ih{constructor(e,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=n?s(e.key,n):1,n&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Yt{constructor(e,n,s,o,u){this.key=e,this.value=n,this.color=s??Yt.RED,this.left=o??Yt.EMPTY,this.right=u??Yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,o,u){return new Yt(e??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Yt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return Yt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ve(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ve(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ve(27949);return e+(this.isRed()?0:1)}}Yt.EMPTY=null,Yt.RED=!0,Yt.BLACK=!1;Yt.EMPTY=new class{constructor(){this.size=0}get key(){throw ve(57766)}get value(){throw ve(16141)}get color(){throw ve(16727)}get left(){throw ve(29726)}get right(){throw ve(36894)}copy(e,n,s,o,u){return this}insert(e,n,s){return new Yt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class xt{constructor(e){this.comparator=e,this.data=new ut(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,s)=>(e(n),!1)))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new zE(this.data.getIterator())}getIteratorFrom(e){return new zE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((s=>{n=n.add(s)})),n}isEqual(e){if(!(e instanceof xt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new xt(this.comparator);return n.data=e,n}}class zE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class In{constructor(e){this.fields=e,e.sort(Kt.comparator)}static empty(){return new In([])}unionWith(e){let n=new xt(Kt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new In(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return bo(this.fields,e.fields,((n,s)=>n.isEqual(s)))}}/**
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
 */class nw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Qt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new nw("Invalid base64 string: "+u):u}})(e);return new Qt(n)}static fromUint8Array(e){const n=(function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u})(e);return new Qt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qt.EMPTY_BYTE_STRING=new Qt("");const yN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ss(r){if(He(!!r,39018),typeof r=="string"){let e=0;const n=yN.exec(r);if(He(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:_t(r.seconds),nanos:_t(r.nanos)}}function _t(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function as(r){return typeof r=="string"?Qt.fromBase64String(r):Qt.fromUint8Array(r)}/**
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
 */const iw="server_timestamp",rw="__type__",sw="__previous_value__",aw="__local_write_time__";function zg(r){return(r?.mapValue?.fields||{})[rw]?.stringValue===iw}function Xh(r){const e=r.mapValue.fields[sw];return zg(e)?Xh(e):e}function yu(r){const e=ss(r.mapValue.fields[aw].timestampValue);return new st(e.seconds,e.nanos)}/**
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
 */class _N{constructor(e,n,s,o,u,f,m,p,y,E){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=y,this.isUsingEmulator=E}}const Ih="(default)";class _u{constructor(e,n){this.projectId=e,this.database=n||Ih}static empty(){return new _u("","")}get isDefaultDatabase(){return this.database===Ih}isEqual(e){return e instanceof _u&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ow="__type__",vN="__max__",rh={mapValue:{}},lw="__vector__",Ch="value";function os(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?zg(r)?4:TN(r)?9007199254740991:EN(r)?10:11:ve(28295,{value:r})}function Oi(r,e){if(r===e)return!0;const n=os(r);if(n!==os(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return yu(r).isEqual(yu(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=ss(o.timestampValue),m=ss(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,u){return as(o.bytesValue).isEqual(as(u.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,u){return _t(o.geoPointValue.latitude)===_t(u.geoPointValue.latitude)&&_t(o.geoPointValue.longitude)===_t(u.geoPointValue.longitude)})(r,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return _t(o.integerValue)===_t(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=_t(o.doubleValue),m=_t(u.doubleValue);return f===m?Rh(f)===Rh(m):isNaN(f)&&isNaN(m)}return!1})(r,e);case 9:return bo(r.arrayValue.values||[],e.arrayValue.values||[],Oi);case 10:case 11:return(function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(jE(f)!==jE(m))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(m[p]===void 0||!Oi(f[p],m[p])))return!1;return!0})(r,e);default:return ve(52216,{left:r})}}function vu(r,e){return(r.values||[]).find((n=>Oi(n,e)))!==void 0}function So(r,e){if(r===e)return 0;const n=os(r),s=os(e);if(n!==s)return Pe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Pe(r.booleanValue,e.booleanValue);case 2:return(function(u,f){const m=_t(u.integerValue||u.doubleValue),p=_t(f.integerValue||f.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1})(r,e);case 3:return BE(r.timestampValue,e.timestampValue);case 4:return BE(yu(r),yu(e));case 5:return eg(r.stringValue,e.stringValue);case 6:return(function(u,f){const m=as(u),p=as(f);return m.compareTo(p)})(r.bytesValue,e.bytesValue);case 7:return(function(u,f){const m=u.split("/"),p=f.split("/");for(let y=0;y<m.length&&y<p.length;y++){const E=Pe(m[y],p[y]);if(E!==0)return E}return Pe(m.length,p.length)})(r.referenceValue,e.referenceValue);case 8:return(function(u,f){const m=Pe(_t(u.latitude),_t(f.latitude));return m!==0?m:Pe(_t(u.longitude),_t(f.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return qE(r.arrayValue,e.arrayValue);case 10:return(function(u,f){const m=u.fields||{},p=f.fields||{},y=m[Ch]?.arrayValue,E=p[Ch]?.arrayValue,R=Pe(y?.values?.length||0,E?.values?.length||0);return R!==0?R:qE(y,E)})(r.mapValue,e.mapValue);case 11:return(function(u,f){if(u===rh.mapValue&&f===rh.mapValue)return 0;if(u===rh.mapValue)return 1;if(f===rh.mapValue)return-1;const m=u.fields||{},p=Object.keys(m),y=f.fields||{},E=Object.keys(y);p.sort(),E.sort();for(let R=0;R<p.length&&R<E.length;++R){const S=eg(p[R],E[R]);if(S!==0)return S;const B=So(m[p[R]],y[E[R]]);if(B!==0)return B}return Pe(p.length,E.length)})(r.mapValue,e.mapValue);default:throw ve(23264,{he:n})}}function BE(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Pe(r,e);const n=ss(r),s=ss(e),o=Pe(n.seconds,s.seconds);return o!==0?o:Pe(n.nanos,s.nanos)}function qE(r,e){const n=r.values||[],s=e.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=So(n[o],s[o]);if(u)return u}return Pe(n.length,s.length)}function Ro(r){return tg(r)}function tg(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(n){const s=ss(n);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(n){return as(n).toBase64()})(r.bytesValue):"referenceValue"in r?(function(n){return de.fromName(n).toString()})(r.referenceValue):"geoPointValue"in r?(function(n){return`geo(${n.latitude},${n.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=tg(u);return s+"]"})(r.arrayValue):"mapValue"in r?(function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${tg(n.fields[f])}`;return o+"}"})(r.mapValue):ve(61005,{value:r})}function dh(r){switch(os(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Xh(r);return e?16+dh(e):16;case 5:return 2*r.stringValue.length;case 6:return as(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+dh(u)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return ms(s.fields,((u,f)=>{o+=u.length+dh(f)})),o})(r.mapValue);default:throw ve(13486,{value:r})}}function FE(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function ng(r){return!!r&&"integerValue"in r}function Bg(r){return!!r&&"arrayValue"in r}function HE(r){return!!r&&"nullValue"in r}function GE(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function mh(r){return!!r&&"mapValue"in r}function EN(r){return(r?.mapValue?.fields||{})[ow]?.stringValue===lw}function uu(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return ms(r.mapValue.fields,((n,s)=>e.mapValue.fields[n]=uu(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=uu(r.arrayValue.values[n]);return e}return{...r}}function TN(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===vN}/**
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
 */class dn{constructor(e){this.value=e}static empty(){return new dn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!mh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=uu(n)}setAll(e){let n=Kt.emptyPath(),s={},o=[];e.forEach(((f,m)=>{if(!n.isImmediateParentOf(m)){const p=this.getFieldsMap(n);this.applyChanges(p,s,o),s={},o=[],n=m.popLast()}f?s[m.lastSegment()]=uu(f):o.push(m.lastSegment())}));const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(e){const n=this.field(e.popLast());mh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Oi(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=n.mapValue.fields[e.get(s)];mh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,s){ms(n,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new dn(uu(this.value))}}function uw(r){const e=[];return ms(r.fields,((n,s)=>{const o=new Kt([n]);if(mh(s)){const u=uw(s.mapValue).fields;if(u.length===0)e.push(o);else for(const f of u)e.push(o.child(f))}else e.push(o)})),new In(e)}/**
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
 */class tn{constructor(e,n,s,o,u,f,m){this.key=e,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(e){return new tn(e,0,Ae.min(),Ae.min(),Ae.min(),dn.empty(),0)}static newFoundDocument(e,n,s,o){return new tn(e,1,n,Ae.min(),s,o,0)}static newNoDocument(e,n){return new tn(e,2,n,Ae.min(),Ae.min(),dn.empty(),0)}static newUnknownDocument(e,n){return new tn(e,3,n,Ae.min(),Ae.min(),dn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Nh{constructor(e,n){this.position=e,this.inclusive=n}}function YE(r,e,n){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],f=r.position[o];if(u.field.isKeyField()?s=de.comparator(de.fromName(f.referenceValue),n.key):s=So(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function KE(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!Oi(r.position[n],e.position[n]))return!1;return!0}/**
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
 */class Eu{constructor(e,n="asc"){this.field=e,this.dir=n}}function wN(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class cw{}class St extends cw{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new bN(e,n,s):n==="array-contains"?new IN(e,s):n==="in"?new CN(e,s):n==="not-in"?new NN(e,s):n==="array-contains-any"?new DN(e,s):new St(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new SN(e,s):new RN(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(So(n,this.value)):n!==null&&os(this.value)===os(n)&&this.matchesComparison(So(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class si extends cw{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new si(e,n)}matches(e){return hw(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function hw(r){return r.op==="and"}function fw(r){return AN(r)&&hw(r)}function AN(r){for(const e of r.filters)if(e instanceof si)return!1;return!0}function ig(r){if(r instanceof St)return r.field.canonicalString()+r.op.toString()+Ro(r.value);if(fw(r))return r.filters.map((e=>ig(e))).join(",");{const e=r.filters.map((n=>ig(n))).join(",");return`${r.op}(${e})`}}function dw(r,e){return r instanceof St?(function(s,o){return o instanceof St&&s.op===o.op&&s.field.isEqual(o.field)&&Oi(s.value,o.value)})(r,e):r instanceof si?(function(s,o){return o instanceof si&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,f,m)=>u&&dw(f,o.filters[m])),!0):!1})(r,e):void ve(19439)}function mw(r){return r instanceof St?(function(n){return`${n.field.canonicalString()} ${n.op} ${Ro(n.value)}`})(r):r instanceof si?(function(n){return n.op.toString()+" {"+n.getFilters().map(mw).join(" ,")+"}"})(r):"Filter"}class bN extends St{constructor(e,n,s){super(e,n,s),this.key=de.fromName(s.referenceValue)}matches(e){const n=de.comparator(e.key,this.key);return this.matchesComparison(n)}}class SN extends St{constructor(e,n){super(e,"in",n),this.keys=gw("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class RN extends St{constructor(e,n){super(e,"not-in",n),this.keys=gw("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function gw(r,e){return(e.arrayValue?.values||[]).map((n=>de.fromName(n.referenceValue)))}class IN extends St{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Bg(n)&&vu(n.arrayValue,this.value)}}class CN extends St{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&vu(this.value.arrayValue,n)}}class NN extends St{constructor(e,n){super(e,"not-in",n)}matches(e){if(vu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!vu(this.value.arrayValue,n)}}class DN extends St{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Bg(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>vu(this.value.arrayValue,s)))}}/**
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
 */class ON{constructor(e,n=null,s=[],o=[],u=null,f=null,m=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.Te=null}}function QE(r,e=null,n=[],s=[],o=null,u=null,f=null){return new ON(r,e,n,s,o,u,f)}function qg(r){const e=be(r);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((s=>ig(s))).join(","),n+="|ob:",n+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),$h(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>Ro(s))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>Ro(s))).join(",")),e.Te=n}return e.Te}function Fg(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!wN(r.orderBy[n],e.orderBy[n]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!dw(r.filters[n],e.filters[n]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!KE(r.startAt,e.startAt)&&KE(r.endAt,e.endAt)}function rg(r){return de.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Uo{constructor(e,n=null,s=[],o=[],u=null,f="F",m=null,p=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function xN(r,e,n,s,o,u,f,m){return new Uo(r,e,n,s,o,u,f,m)}function Wh(r){return new Uo(r)}function $E(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function pw(r){return r.collectionGroup!==null}function cu(r){const e=be(r);if(e.Ie===null){e.Ie=[];const n=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),n.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new xt(Kt.comparator);return f.filters.forEach((p=>{p.getFlattenedFilters().forEach((y=>{y.isInequality()&&(m=m.add(y.field))}))})),m})(e).forEach((u=>{n.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new Eu(u,s))})),n.has(Kt.keyField().canonicalString())||e.Ie.push(new Eu(Kt.keyField(),s))}return e.Ie}function Ri(r){const e=be(r);return e.Ee||(e.Ee=PN(e,cu(r))),e.Ee}function PN(r,e){if(r.limitType==="F")return QE(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Eu(o.field,u)}));const n=r.endAt?new Nh(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Nh(r.startAt.position,r.startAt.inclusive):null;return QE(r.path,r.collectionGroup,e,r.filters,r.limit,n,s)}}function sg(r,e){const n=r.filters.concat([e]);return new Uo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),n,r.limit,r.limitType,r.startAt,r.endAt)}function ag(r,e,n){return new Uo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,n,r.startAt,r.endAt)}function Zh(r,e){return Fg(Ri(r),Ri(e))&&r.limitType===e.limitType}function yw(r){return`${qg(Ri(r))}|lt:${r.limitType}`}function fo(r){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((o=>mw(o))).join(", ")}]`),$h(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((o=>(function(f){return`${f.field.canonicalString()} (${f.dir})`})(o))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((o=>Ro(o))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((o=>Ro(o))).join(",")),`Target(${s})`})(Ri(r))}; limitType=${r.limitType})`}function Jh(r,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):de.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(r,e)&&(function(s,o){for(const u of cu(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(f,m,p){const y=YE(f,m,p);return f.inclusive?y<=0:y<0})(s.startAt,cu(s),o)||s.endAt&&!(function(f,m,p){const y=YE(f,m,p);return f.inclusive?y>=0:y>0})(s.endAt,cu(s),o))})(r,e)}function MN(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function _w(r){return(e,n)=>{let s=!1;for(const o of cu(r)){const u=VN(o,e,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function VN(r,e,n){const s=r.field.isKeyField()?de.comparator(e.key,n.key):(function(u,f,m){const p=f.data.field(u),y=m.data.field(u);return p!==null&&y!==null?So(p,y):ve(42886)})(r.field,e,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return ve(19790,{direction:r.dir})}}/**
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
 */class ma{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ms(this.inner,((n,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return tw(this.inner)}size(){return this.innerSize}}/**
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
 */const kN=new ut(de.comparator);function gr(){return kN}const vw=new ut(de.comparator);function nu(...r){let e=vw;for(const n of r)e=e.insert(n.key,n);return e}function Ew(r){let e=vw;return r.forEach(((n,s)=>e=e.insert(n,s.overlayedDocument))),e}function na(){return hu()}function Tw(){return hu()}function hu(){return new ma((r=>r.toString()),((r,e)=>r.isEqual(e)))}const LN=new ut(de.comparator),UN=new xt(de.comparator);function Me(...r){let e=UN;for(const n of r)e=e.add(n);return e}const jN=new xt(Pe);function zN(){return jN}/**
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
 */function Hg(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rh(e)?"-0":e}}function ww(r){return{integerValue:""+r}}function BN(r,e){return mN(e)?ww(e):Hg(r,e)}/**
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
 */class ef{constructor(){this._=void 0}}function qN(r,e,n){return r instanceof Tu?(function(o,u){const f={fields:{[rw]:{stringValue:iw},[aw]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&zg(u)&&(u=Xh(u)),u&&(f.fields[sw]=u),{mapValue:f}})(n,e):r instanceof Io?bw(r,e):r instanceof Co?Sw(r,e):(function(o,u){const f=Aw(o,u),m=XE(f)+XE(o.Ae);return ng(f)&&ng(o.Ae)?ww(m):Hg(o.serializer,m)})(r,e)}function FN(r,e,n){return r instanceof Io?bw(r,e):r instanceof Co?Sw(r,e):n}function Aw(r,e){return r instanceof Dh?(function(s){return ng(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Tu extends ef{}class Io extends ef{constructor(e){super(),this.elements=e}}function bw(r,e){const n=Rw(e);for(const s of r.elements)n.some((o=>Oi(o,s)))||n.push(s);return{arrayValue:{values:n}}}class Co extends ef{constructor(e){super(),this.elements=e}}function Sw(r,e){let n=Rw(e);for(const s of r.elements)n=n.filter((o=>!Oi(o,s)));return{arrayValue:{values:n}}}class Dh extends ef{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function XE(r){return _t(r.integerValue||r.doubleValue)}function Rw(r){return Bg(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class Gg{constructor(e,n){this.field=e,this.transform=n}}function HN(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof Io&&o instanceof Io||s instanceof Co&&o instanceof Co?bo(s.elements,o.elements,Oi):s instanceof Dh&&o instanceof Dh?Oi(s.Ae,o.Ae):s instanceof Tu&&o instanceof Tu})(r.transform,e.transform)}class GN{constructor(e,n){this.version=e,this.transformResults=n}}class ii{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ii}static exists(e){return new ii(void 0,e)}static updateTime(e){return new ii(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function gh(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class tf{}function Iw(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Nw(r.key,ii.none()):new Iu(r.key,r.data,ii.none());{const n=r.data,s=dn.empty();let o=new xt(Kt.comparator);for(let u of e.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new gs(r.key,s,new In(o.toArray()),ii.none())}}function YN(r,e,n){r instanceof Iu?(function(o,u,f){const m=o.value.clone(),p=ZE(o.fieldTransforms,u,f.transformResults);m.setAll(p),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()})(r,e,n):r instanceof gs?(function(o,u,f){if(!gh(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=ZE(o.fieldTransforms,u,f.transformResults),p=u.data;p.setAll(Cw(o)),p.setAll(m),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()})(r,e,n):(function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()})(0,e,n)}function fu(r,e,n,s){return r instanceof Iu?(function(u,f,m,p){if(!gh(u.precondition,f))return m;const y=u.value.clone(),E=JE(u.fieldTransforms,p,f);return y.setAll(E),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null})(r,e,n,s):r instanceof gs?(function(u,f,m,p){if(!gh(u.precondition,f))return m;const y=JE(u.fieldTransforms,p,f),E=f.data;return E.setAll(Cw(u)),E.setAll(y),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((R=>R.field)))})(r,e,n,s):(function(u,f,m){return gh(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m})(r,e,n)}function KN(r,e){let n=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=Aw(s.transform,o||null);u!=null&&(n===null&&(n=dn.empty()),n.set(s.field,u))}return n||null}function WE(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&bo(s,o,((u,f)=>HN(u,f)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Iu extends tf{constructor(e,n,s,o=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class gs extends tf{constructor(e,n,s,o,u=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Cw(r){const e=new Map;return r.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=r.data.field(n);e.set(n,s)}})),e}function ZE(r,e,n){const s=new Map;He(r.length===n.length,32656,{Re:n.length,Ve:r.length});for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,m=e.data.field(u.field);s.set(u.field,FN(f,m,n[o]))}return s}function JE(r,e,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,qN(u,f,e))}return s}class Nw extends tf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class QN extends tf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class $N{constructor(e,n,s,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&YN(u,e,s[o])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=fu(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=fu(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Tw();return this.mutations.forEach((o=>{const u=e.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=n.has(o.key)?null:m;const p=Iw(f,m);p!==null&&s.set(o.key,p),f.isValidDocument()||f.convertToNoDocument(Ae.min())})),s}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Me())}isEqual(e){return this.batchId===e.batchId&&bo(this.mutations,e.mutations,((n,s)=>WE(n,s)))&&bo(this.baseMutations,e.baseMutations,((n,s)=>WE(n,s)))}}class Yg{constructor(e,n,s,o){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(e,n,s){He(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return LN})();const u=e.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,s[f].version);return new Yg(e,n,s,o)}}/**
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
 */class XN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class WN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var At,je;function ZN(r){switch(r){case $.OK:return ve(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return ve(15467,{code:r})}}function Dw(r){if(r===void 0)return mr("GRPC error has no .code"),$.UNKNOWN;switch(r){case At.OK:return $.OK;case At.CANCELLED:return $.CANCELLED;case At.UNKNOWN:return $.UNKNOWN;case At.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case At.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case At.INTERNAL:return $.INTERNAL;case At.UNAVAILABLE:return $.UNAVAILABLE;case At.UNAUTHENTICATED:return $.UNAUTHENTICATED;case At.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case At.NOT_FOUND:return $.NOT_FOUND;case At.ALREADY_EXISTS:return $.ALREADY_EXISTS;case At.PERMISSION_DENIED:return $.PERMISSION_DENIED;case At.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case At.ABORTED:return $.ABORTED;case At.OUT_OF_RANGE:return $.OUT_OF_RANGE;case At.UNIMPLEMENTED:return $.UNIMPLEMENTED;case At.DATA_LOSS:return $.DATA_LOSS;default:return ve(39323,{code:r})}}(je=At||(At={}))[je.OK=0]="OK",je[je.CANCELLED=1]="CANCELLED",je[je.UNKNOWN=2]="UNKNOWN",je[je.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",je[je.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",je[je.NOT_FOUND=5]="NOT_FOUND",je[je.ALREADY_EXISTS=6]="ALREADY_EXISTS",je[je.PERMISSION_DENIED=7]="PERMISSION_DENIED",je[je.UNAUTHENTICATED=16]="UNAUTHENTICATED",je[je.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",je[je.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",je[je.ABORTED=10]="ABORTED",je[je.OUT_OF_RANGE=11]="OUT_OF_RANGE",je[je.UNIMPLEMENTED=12]="UNIMPLEMENTED",je[je.INTERNAL=13]="INTERNAL",je[je.UNAVAILABLE=14]="UNAVAILABLE",je[je.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function JN(){return new TextEncoder}/**
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
 */const e2=new ts([4294967295,4294967295],0);function eT(r){const e=JN().encode(r),n=new H0;return n.update(e),new Uint8Array(n.digest())}function tT(r){const e=new DataView(r.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new ts([n,s],0),new ts([o,u],0)]}class Kg{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new iu(`Invalid padding: ${n}`);if(s<0)throw new iu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new iu(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new iu(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ts.fromNumber(this.ge)}ye(e,n,s){let o=e.add(n.multiply(ts.fromNumber(s)));return o.compare(e2)===1&&(o=new ts([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=eT(e),[s,o]=tT(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);if(!this.we(f))return!1}return!0}static create(e,n,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),f=new Kg(u,o,n);return s.forEach((m=>f.insert(m))),f}insert(e){if(this.ge===0)return;const n=eT(e),[s,o]=tT(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);this.Se(f)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class iu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class nf{constructor(e,n,s,o,u){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const o=new Map;return o.set(e,Cu.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new nf(Ae.min(),o,new ut(Pe),gr(),Me())}}class Cu{constructor(e,n,s,o,u){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Cu(s,n,Me(),Me(),Me())}}/**
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
 */class ph{constructor(e,n,s,o){this.be=e,this.removedTargetIds=n,this.key=s,this.De=o}}class Ow{constructor(e,n){this.targetId=e,this.Ce=n}}class xw{constructor(e,n,s=Qt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=o}}class nT{constructor(){this.ve=0,this.Fe=iT(),this.Me=Qt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Me(),n=Me(),s=Me();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:ve(38017,{changeType:u})}})),new Cu(this.Me,this.xe,e,n,s)}qe(){this.Oe=!1,this.Fe=iT()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,He(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class t2{constructor(e){this.Ge=e,this.ze=new Map,this.je=gr(),this.Je=sh(),this.He=sh(),this.Ye=new ut(Pe)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:ve(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((s,o)=>{this.rt(o)&&n(o)}))}st(e){const n=e.targetId,s=e.Ce.count,o=this.ot(n);if(o){const u=o.target;if(rg(u))if(s===0){const f=new de(u.path);this.et(n,f,tn.newNoDocument(f,Ae.min()))}else He(s===1,20013,{expectedCount:s});else{const f=this._t(n);if(f!==s){const m=this.ut(e),p=m?this.ct(m,e,f):1;if(p!==0){this.it(n);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,y)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,m;try{f=as(s).toUint8Array()}catch(p){if(p instanceof nw)return Ao("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new Kg(f,o,u)}catch(p){return Ao(p instanceof iu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.ge===0?null:m}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let o=0;return s.forEach((u=>{const f=this.Ge.ht(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(n,u,null),o++)})),o}Tt(e){const n=new Map;this.ze.forEach(((u,f)=>{const m=this.ot(f);if(m){if(u.current&&rg(m.target)){const p=new de(m.target.path);this.It(p).has(f)||this.Et(f,p)||this.et(f,p,tn.newNoDocument(p,e))}u.Be&&(n.set(f,u.ke()),u.qe())}}));let s=Me();this.He.forEach(((u,f)=>{let m=!0;f.forEachWhile((p=>{const y=this.ot(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,f)=>f.setReadTime(e)));const o=new nf(e,n,this.Ye,this.je,s);return this.je=gr(),this.Je=sh(),this.He=sh(),this.Ye=new ut(Pe),o}Xe(e,n){if(!this.rt(e))return;const s=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,n)?o.Qe(n,1):o.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new nT,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new xt(Pe),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new xt(Pe),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||oe("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new nT),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function sh(){return new ut(de.comparator)}function iT(){return new ut(de.comparator)}const n2={asc:"ASCENDING",desc:"DESCENDING"},i2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},r2={and:"AND",or:"OR"};class s2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function og(r,e){return r.useProto3Json||$h(e)?e:{value:e}}function Oh(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Pw(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function a2(r,e){return Oh(r,e.toTimestamp())}function Ii(r){return He(!!r,49232),Ae.fromTimestamp((function(n){const s=ss(n);return new st(s.seconds,s.nanos)})(r))}function Qg(r,e){return lg(r,e).canonicalString()}function lg(r,e){const n=(function(o){return new rt(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?n:n.child(e)}function Mw(r){const e=rt.fromString(r);return He(jw(e),10190,{key:e.toString()}),e}function ug(r,e){return Qg(r.databaseId,e.path)}function Vm(r,e){const n=Mw(e);if(n.get(1)!==r.databaseId.projectId)throw new ae($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new ae($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new de(kw(n))}function Vw(r,e){return Qg(r.databaseId,e)}function o2(r){const e=Mw(r);return e.length===4?rt.emptyPath():kw(e)}function cg(r){return new rt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function kw(r){return He(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function rT(r,e,n){return{name:ug(r,e),fields:n.value.mapValue.fields}}function l2(r,e){let n;if("targetChange"in e){e.targetChange;const s=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:ve(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(y,E){return y.useProto3Json?(He(E===void 0||typeof E=="string",58123),Qt.fromBase64String(E||"")):(He(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Qt.fromUint8Array(E||new Uint8Array))})(r,e.targetChange.resumeToken),f=e.targetChange.cause,m=f&&(function(y){const E=y.code===void 0?$.UNKNOWN:Dw(y.code);return new ae(E,y.message||"")})(f);n=new xw(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Vm(r,s.document.name),u=Ii(s.document.updateTime),f=s.document.createTime?Ii(s.document.createTime):Ae.min(),m=new dn({mapValue:{fields:s.document.fields}}),p=tn.newFoundDocument(o,u,f,m),y=s.targetIds||[],E=s.removedTargetIds||[];n=new ph(y,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Vm(r,s.document),u=s.readTime?Ii(s.readTime):Ae.min(),f=tn.newNoDocument(o,u),m=s.removedTargetIds||[];n=new ph([],m,f.key,f)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Vm(r,s.document),u=s.removedTargetIds||[];n=new ph([],u,o,null)}else{if(!("filter"in e))return ve(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new WN(o,u),m=s.targetId;n=new Ow(m,f)}}return n}function u2(r,e){let n;if(e instanceof Iu)n={update:rT(r,e.key,e.value)};else if(e instanceof Nw)n={delete:ug(r,e.key)};else if(e instanceof gs)n={update:rT(r,e.key,e.data),updateMask:_2(e.fieldMask)};else{if(!(e instanceof QN))return ve(16599,{Vt:e.type});n={verify:ug(r,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((s=>(function(u,f){const m=f.transform;if(m instanceof Tu)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Io)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Co)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Dh)return{fieldPath:f.field.canonicalString(),increment:m.Ae};throw ve(20930,{transform:f.transform})})(0,s)))),e.precondition.isNone||(n.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:a2(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:ve(27497)})(r,e.precondition)),n}function c2(r,e){return r&&r.length>0?(He(e!==void 0,14353),r.map((n=>(function(o,u){let f=o.updateTime?Ii(o.updateTime):Ii(u);return f.isEqual(Ae.min())&&(f=Ii(u)),new GN(f,o.transformResults||[])})(n,e)))):[]}function h2(r,e){return{documents:[Vw(r,e.path)]}}function f2(r,e){const n={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=Vw(r,o);const u=(function(y){if(y.length!==0)return Uw(si.create(y,"and"))})(e.filters);u&&(n.structuredQuery.where=u);const f=(function(y){if(y.length!==0)return y.map((E=>(function(S){return{field:mo(S.field),direction:g2(S.dir)}})(E)))})(e.orderBy);f&&(n.structuredQuery.orderBy=f);const m=og(r,e.limit);return m!==null&&(n.structuredQuery.limit=m),e.startAt&&(n.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ft:n,parent:o}}function d2(r){let e=o2(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){He(s===1,65062);const E=n.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];n.where&&(u=(function(R){const S=Lw(R);return S instanceof si&&fw(S)?S.getFilters():[S]})(n.where));let f=[];n.orderBy&&(f=(function(R){return R.map((S=>(function(K){return new Eu(go(K.field),(function(J){switch(J){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(K.direction))})(S)))})(n.orderBy));let m=null;n.limit&&(m=(function(R){let S;return S=typeof R=="object"?R.value:R,$h(S)?null:S})(n.limit));let p=null;n.startAt&&(p=(function(R){const S=!!R.before,B=R.values||[];return new Nh(B,S)})(n.startAt));let y=null;return n.endAt&&(y=(function(R){const S=!R.before,B=R.values||[];return new Nh(B,S)})(n.endAt)),xN(e,o,f,u,m,"F",p,y)}function m2(r,e){const n=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve(28987,{purpose:o})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Lw(r){return r.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=go(n.unaryFilter.field);return St.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=go(n.unaryFilter.field);return St.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=go(n.unaryFilter.field);return St.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=go(n.unaryFilter.field);return St.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ve(61313);default:return ve(60726)}})(r):r.fieldFilter!==void 0?(function(n){return St.create(go(n.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ve(58110);default:return ve(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(n){return si.create(n.compositeFilter.filters.map((s=>Lw(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ve(1026)}})(n.compositeFilter.op))})(r):ve(30097,{filter:r})}function g2(r){return n2[r]}function p2(r){return i2[r]}function y2(r){return r2[r]}function mo(r){return{fieldPath:r.canonicalString()}}function go(r){return Kt.fromServerFormat(r.fieldPath)}function Uw(r){return r instanceof St?(function(n){if(n.op==="=="){if(GE(n.value))return{unaryFilter:{field:mo(n.field),op:"IS_NAN"}};if(HE(n.value))return{unaryFilter:{field:mo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(GE(n.value))return{unaryFilter:{field:mo(n.field),op:"IS_NOT_NAN"}};if(HE(n.value))return{unaryFilter:{field:mo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mo(n.field),op:p2(n.op),value:n.value}}})(r):r instanceof si?(function(n){const s=n.getFilters().map((o=>Uw(o)));return s.length===1?s[0]:{compositeFilter:{op:y2(n.op),filters:s}}})(r):ve(54877,{filter:r})}function _2(r){const e=[];return r.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function jw(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Wr{constructor(e,n,s,o,u=Ae.min(),f=Ae.min(),m=Qt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(e){return new Wr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class v2{constructor(e){this.yt=e}}function E2(r){const e=d2({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ag(e,e.limit,"L"):e}/**
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
 */class T2{constructor(){this.Cn=new w2}addToCollectionParentIndex(e,n){return this.Cn.add(n),W.resolve()}getCollectionParents(e,n){return W.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return W.resolve()}deleteFieldIndex(e,n){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,n){return W.resolve()}getDocumentsMatchingTarget(e,n){return W.resolve(null)}getIndexType(e,n){return W.resolve(0)}getFieldIndexes(e,n){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,n){return W.resolve(rs.min())}getMinOffsetFromCollectionGroup(e,n){return W.resolve(rs.min())}updateCollectionGroup(e,n,s){return W.resolve()}updateIndexEntries(e,n){return W.resolve()}}class w2{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n]||new xt(rt.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(e){return(this.index[e]||new xt(rt.comparator)).toArray()}}/**
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
 */const sT={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},zw=41943040;class fn{static withCacheSize(e){return new fn(e,fn.DEFAULT_COLLECTION_PERCENTILE,fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */fn.DEFAULT_COLLECTION_PERCENTILE=10,fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,fn.DEFAULT=new fn(zw,fn.DEFAULT_COLLECTION_PERCENTILE,fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),fn.DISABLED=new fn(-1,0,0);/**
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
 */class No{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new No(0)}static cr(){return new No(-1)}}/**
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
 */const aT="LruGarbageCollector",A2=1048576;function oT([r,e],[n,s]){const o=Pe(r,n);return o===0?Pe(e,s):o}class b2{constructor(e){this.Ir=e,this.buffer=new xt(oT),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();oT(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class S2{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){oe(aT,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Lo(n)?oe(aT,"Ignoring IndexedDB error during garbage collection: ",n):await ko(n)}await this.Vr(3e5)}))}}class R2{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(e,n){if(n===0)return W.resolve(Qh.ce);const s=new b2(n);return this.mr.forEachTarget(e,(o=>s.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>s.Ar(o))))).next((()=>s.maxValue))}removeTargets(e,n,s){return this.mr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(oe("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(sT)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(oe("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sT):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let s,o,u,f,m,p,y;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((R=>(R>this.params.maximumSequenceNumbersToCollect?(oe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${R}`),o=this.params.maximumSequenceNumbersToCollect):o=R,f=Date.now(),this.nthSequenceNumber(e,o)))).next((R=>(s=R,m=Date.now(),this.removeTargets(e,s,n)))).next((R=>(u=R,p=Date.now(),this.removeOrphanedDocuments(e,s)))).next((R=>(y=Date.now(),ho()<=xe.DEBUG&&oe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-E}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(p-m)+`ms
	Removed ${R} documents in `+(y-p)+`ms
Total Duration: ${y-E}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:R}))))}}function I2(r,e){return new R2(r,e)}/**
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
 */class C2{constructor(){this.changes=new ma((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?W.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class N2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class D2{constructor(e,n,s,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,n)))).next((o=>(s!==null&&fu(s.mutation,o,In.empty(),st.now()),o)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.getLocalViewOfDocuments(e,s,Me()).next((()=>s))))}getLocalViewOfDocuments(e,n,s=Me()){const o=na();return this.populateOverlays(e,o,n).next((()=>this.computeViews(e,n,o,s).next((u=>{let f=nu();return u.forEach(((m,p)=>{f=f.insert(m,p.overlayedDocument)})),f}))))}getOverlayedDocuments(e,n){const s=na();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,Me())))}populateOverlays(e,n,s){const o=[];return s.forEach((u=>{n.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((f,m)=>{n.set(f,m)}))}))}computeViews(e,n,s,o){let u=gr();const f=hu(),m=(function(){return hu()})();return n.forEach(((p,y)=>{const E=s.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof gs)?u=u.insert(y.key,y):E!==void 0?(f.set(y.key,E.mutation.getFieldMask()),fu(E.mutation,y,E.mutation.getFieldMask(),st.now())):f.set(y.key,In.empty())})),this.recalculateAndSaveOverlays(e,u).next((p=>(p.forEach(((y,E)=>f.set(y,E))),n.forEach(((y,E)=>m.set(y,new N2(E,f.get(y)??null)))),m)))}recalculateAndSaveOverlays(e,n){const s=hu();let o=new ut(((f,m)=>f-m)),u=Me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((f=>{for(const m of f)m.keys().forEach((p=>{const y=n.get(p);if(y===null)return;let E=s.get(p)||In.empty();E=m.applyToLocalView(y,E),s.set(p,E);const R=(o.get(m.batchId)||Me()).add(p);o=o.insert(m.batchId,R)}))})).next((()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),y=p.key,E=p.value,R=Tw();E.forEach((S=>{if(!u.has(S)){const B=Iw(n.get(S),s.get(S));B!==null&&R.set(S,B),u=u.add(S)}})),f.push(this.documentOverlayCache.saveOverlays(e,y,R))}return W.waitFor(f)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,n,s,o){return(function(f){return de.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):pw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,o):this.getDocumentsMatchingCollectionQuery(e,n,s,o)}getNextDocuments(e,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,o).next((u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,o-u.size):W.resolve(na());let m=pu,p=u;return f.next((y=>W.forEach(y,((E,R)=>(m<R.largestBatchId&&(m=R.largestBatchId),u.get(E)?W.resolve():this.remoteDocumentCache.getEntry(e,E).next((S=>{p=p.insert(E,S)}))))).next((()=>this.populateOverlays(e,y,u))).next((()=>this.computeViews(e,p,y,Me()))).next((E=>({batchId:m,changes:Ew(E)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new de(n)).next((s=>{let o=nu();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,n,s,o){const u=n.collectionGroup;let f=nu();return this.indexManager.getCollectionParents(e,u).next((m=>W.forEach(m,(p=>{const y=(function(R,S){return new Uo(S,null,R.explicitOrderBy.slice(),R.filters.slice(),R.limit,R.limitType,R.startAt,R.endAt)})(n,p.child(u));return this.getDocumentsMatchingCollectionQuery(e,y,s,o).next((E=>{E.forEach(((R,S)=>{f=f.insert(R,S)}))}))})).next((()=>f))))}getDocumentsMatchingCollectionQuery(e,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next((f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,u,o)))).next((f=>{u.forEach(((p,y)=>{const E=y.getKey();f.get(E)===null&&(f=f.insert(E,tn.newInvalidDocument(E)))}));let m=nu();return f.forEach(((p,y)=>{const E=u.get(p);E!==void 0&&fu(E.mutation,y,In.empty(),st.now()),Jh(n,y)&&(m=m.insert(p,y))})),m}))}}/**
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
 */class O2{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return W.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(o){return{id:o.id,version:o.version,createTime:Ii(o.createTime)}})(n)),W.resolve()}getNamedQuery(e,n){return W.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(o){return{name:o.name,query:E2(o.bundledQuery),readTime:Ii(o.readTime)}})(n)),W.resolve()}}/**
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
 */class x2{constructor(){this.overlays=new ut(de.comparator),this.qr=new Map}getOverlay(e,n){return W.resolve(this.overlays.get(n))}getOverlays(e,n){const s=na();return W.forEach(n,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,n,s){return s.forEach(((o,u)=>{this.St(e,n,u)})),W.resolve()}removeOverlaysForBatchId(e,n,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(s)),W.resolve()}getOverlaysForCollection(e,n,s){const o=na(),u=n.length+1,f=new de(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const p=m.getNext().value,y=p.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===u&&p.largestBatchId>s&&o.set(p.getKey(),p)}return W.resolve(o)}getOverlaysForCollectionGroup(e,n,s,o){let u=new ut(((y,E)=>y-E));const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let E=u.get(y.largestBatchId);E===null&&(E=na(),u=u.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const m=na(),p=u.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((y,E)=>m.set(y,E))),!(m.size()>=o)););return W.resolve(m)}St(e,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new XN(n,s));let u=this.qr.get(n);u===void 0&&(u=Me(),this.qr.set(n,u)),this.qr.set(n,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class P2{constructor(){this.sessionToken=Qt.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,W.resolve()}}/**
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
 */class $g{constructor(){this.Qr=new xt(jt.$r),this.Ur=new xt(jt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const s=new jt(e,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,n){e.forEach((s=>this.addReference(s,n)))}removeReference(e,n){this.Gr(new jt(e,n))}zr(e,n){e.forEach((s=>this.removeReference(s,n)))}jr(e){const n=new de(new rt([])),s=new jt(n,e),o=new jt(n,e+1),u=[];return this.Ur.forEachInRange([s,o],(f=>{this.Gr(f),u.push(f.key)})),u}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new de(new rt([])),s=new jt(n,e),o=new jt(n,e+1);let u=Me();return this.Ur.forEachInRange([s,o],(f=>{u=u.add(f.key)})),u}containsKey(e){const n=new jt(e,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class jt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return de.comparator(e.key,n.key)||Pe(e.Yr,n.Yr)}static Kr(e,n){return Pe(e.Yr,n.Yr)||de.comparator(e.key,n.key)}}/**
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
 */class M2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new xt(jt.$r)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new $N(u,n,s,o);this.mutationQueue.push(f);for(const m of o)this.Zr=this.Zr.add(new jt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return W.resolve(f)}lookupMutationBatch(e,n){return W.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,o=this.ei(s),u=o<0?0:o;return W.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?jg:this.tr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new jt(n,0),o=new jt(n,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],(f=>{const m=this.Xr(f.Yr);u.push(m)})),W.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new xt(Pe);return n.forEach((o=>{const u=new jt(o,0),f=new jt(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,f],(m=>{s=s.add(m.Yr)}))})),W.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,o=s.length+1;let u=s;de.isDocumentKey(u)||(u=u.child(""));const f=new jt(new de(u),0);let m=new xt(Pe);return this.Zr.forEachWhile((p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(m=m.add(p.Yr)),!0)}),f),W.resolve(this.ti(m))}ti(e){const n=[];return e.forEach((s=>{const o=this.Xr(s);o!==null&&n.push(o)})),n}removeMutationBatch(e,n){He(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return W.forEach(n.mutations,(o=>{const u=new jt(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,n){const s=new jt(n,0),o=this.Zr.firstAfterOrEqual(s);return W.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class V2{constructor(e){this.ri=e,this.docs=(function(){return new ut(de.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return W.resolve(s?s.document.mutableCopy():tn.newInvalidDocument(n))}getEntries(e,n){let s=gr();return n.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():tn.newInvalidDocument(o))})),W.resolve(s)}getDocumentsMatchingQuery(e,n,s,o){let u=gr();const f=n.path,m=new de(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:y,value:{document:E}}=p.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||cN(uN(E),s)<=0||(o.has(E.key)||Jh(n,E))&&(u=u.insert(E.key,E.mutableCopy()))}return W.resolve(u)}getAllFromCollectionGroup(e,n,s,o){ve(9500)}ii(e,n){return W.forEach(this.docs,(s=>n(s)))}newChangeBuffer(e){return new k2(this)}getSize(e){return W.resolve(this.size)}}class k2 extends C2{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?n.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)})),W.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class L2{constructor(e){this.persistence=e,this.si=new ma((n=>qg(n)),Fg),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.oi=0,this._i=new $g,this.targetCount=0,this.ai=No.ur()}forEachTarget(e,n){return this.si.forEach(((s,o)=>n(o))),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),W.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new No(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,W.resolve()}updateTargetData(e,n){return this.Pr(n),W.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,n,s){let o=0;const u=[];return this.si.forEach(((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.si.delete(f),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),W.waitFor(u).next((()=>o))}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,n){const s=this.si.get(n)||null;return W.resolve(s)}addMatchingKeys(e,n,s){return this._i.Wr(n,s),W.resolve()}removeMatchingKeys(e,n,s){this._i.zr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach((f=>{u.push(o.markPotentiallyOrphaned(e,f))})),W.waitFor(u)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),W.resolve()}getMatchingKeysForTargetId(e,n){const s=this._i.Hr(n);return W.resolve(s)}containsKey(e,n){return W.resolve(this._i.containsKey(n))}}/**
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
 */class Bw{constructor(e,n){this.ui={},this.overlays={},this.ci=new Qh(0),this.li=!1,this.li=!0,this.hi=new P2,this.referenceDelegate=e(this),this.Pi=new L2(this),this.indexManager=new T2,this.remoteDocumentCache=(function(o){return new V2(o)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new v2(n),this.Ii=new O2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new x2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ui[e.toKey()];return s||(s=new M2(n,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,s){oe("MemoryPersistence","Starting transaction:",e);const o=new U2(this.ci.next());return this.referenceDelegate.Ei(),s(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(e,n){return W.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,n))))}}class U2 extends fN{constructor(e){super(),this.currentSequenceNumber=e}}class Xg{constructor(e){this.persistence=e,this.Ri=new $g,this.Vi=null}static mi(e){return new Xg(e)}get fi(){if(this.Vi)return this.Vi;throw ve(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),W.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),W.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),W.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((o=>this.fi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>s.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.fi,(s=>{const o=de.fromPath(s);return this.gi(e,o).next((u=>{u||n.removeEntry(o,Ae.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return W.or([()=>W.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class xh{constructor(e,n){this.persistence=e,this.pi=new ma((s=>gN(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=I2(this,n)}static mi(e,n){return new xh(e,n)}Ei(){}di(e){return W.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>n.next((o=>s+o))))}wr(e){let n=0;return this.pr(e,(s=>{n++})).next((()=>n))}pr(e,n){return W.forEach(this.pi,((s,o)=>this.br(e,s,o).next((u=>u?W.resolve():n(o)))))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,(f=>this.br(e,f,n).next((m=>{m||(s++,u.removeEntry(f,Ae.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),W.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),W.resolve()}removeReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),W.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=dh(e.data.value)),n}br(e,n,s){return W.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const o=this.pi.get(n);return W.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Wg{constructor(e,n,s,o){this.targetId=e,this.fromCache=n,this.Es=s,this.ds=o}static As(e,n){let s=Me(),o=Me();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Wg(e,n.fromCache,s,o)}}/**
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
 */class j2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class z2{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return HS()?8:dN(nn())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,o){const u={result:null};return this.ys(e,n).next((f=>{u.result=f})).next((()=>{if(!u.result)return this.ws(e,n,o,s).next((f=>{u.result=f}))})).next((()=>{if(u.result)return;const f=new j2;return this.Ss(e,n,f).next((m=>{if(u.result=m,this.Vs)return this.bs(e,n,f,m.size)}))})).next((()=>u.result))}bs(e,n,s,o){return s.documentReadCount<this.fs?(ho()<=xe.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",fo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),W.resolve()):(ho()<=xe.DEBUG&&oe("QueryEngine","Query:",fo(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(ho()<=xe.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",fo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ri(n))):W.resolve())}ys(e,n){if($E(n))return W.resolve(null);let s=Ri(n);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(n.limit!==null&&o===1&&(n=ag(n,null,"F"),s=Ri(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const f=Me(...u);return this.ps.getDocuments(e,f).next((m=>this.indexManager.getMinOffset(e,s).next((p=>{const y=this.Ds(n,m);return this.Cs(n,y,f,p.readTime)?this.ys(e,ag(n,null,"F")):this.vs(e,y,n,p)}))))})))))}ws(e,n,s,o){return $E(n)||o.isEqual(Ae.min())?W.resolve(null):this.ps.getDocuments(e,s).next((u=>{const f=this.Ds(n,u);return this.Cs(n,f,s,o)?W.resolve(null):(ho()<=xe.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),fo(n)),this.vs(e,f,n,lN(o,pu)).next((m=>m)))}))}Ds(e,n){let s=new xt(_w(e));return n.forEach(((o,u)=>{Jh(e,u)&&(s=s.add(u))})),s}Cs(e,n,s,o){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const u=e.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,n,s){return ho()<=xe.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",fo(n)),this.ps.getDocumentsMatchingQuery(e,n,rs.min(),s)}vs(e,n,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next((u=>(n.forEach((f=>{u=u.insert(f.key,f)})),u)))}}/**
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
 */const Zg="LocalStore",B2=3e8;class q2{constructor(e,n,s,o){this.persistence=e,this.Fs=n,this.serializer=o,this.Ms=new ut(Pe),this.xs=new ma((u=>qg(u)),Fg),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new D2(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function F2(r,e,n,s){return new q2(r,e,n,s)}async function qw(r,e){const n=be(r);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,n.Bs(e),n.mutationQueue.getAllMutationBatches(s)))).next((u=>{const f=[],m=[];let p=Me();for(const y of o){f.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}for(const y of u){m.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}return n.localDocuments.getDocuments(s,p).next((y=>({Ls:y,removedBatchIds:f,addedBatchIds:m})))}))}))}function H2(r,e){const n=be(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(m,p,y,E){const R=y.batch,S=R.keys();let B=W.resolve();return S.forEach((K=>{B=B.next((()=>E.getEntry(p,K))).next((ne=>{const J=y.docVersions.get(K);He(J!==null,48541),ne.version.compareTo(J)<0&&(R.applyToRemoteDocument(ne,y),ne.isValidDocument()&&(ne.setReadTime(y.commitVersion),E.addEntry(ne)))}))})),B.next((()=>m.mutationQueue.removeMutationBatch(p,R)))})(n,s,e,u).next((()=>u.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let p=Me();for(let y=0;y<m.mutationResults.length;++y)m.mutationResults[y].transformResults.length>0&&(p=p.add(m.batch.mutations[y].key));return p})(e)))).next((()=>n.localDocuments.getDocuments(s,o)))}))}function Fw(r){const e=be(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function G2(r,e){const n=be(r),s=e.snapshotVersion;let o=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const f=n.Ns.newChangeBuffer({trackRemovals:!0});o=n.Ms;const m=[];e.targetChanges.forEach(((E,R)=>{const S=o.get(R);if(!S)return;m.push(n.Pi.removeMatchingKeys(u,E.removedDocuments,R).next((()=>n.Pi.addMatchingKeys(u,E.addedDocuments,R))));let B=S.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(R)!==null?B=B.withResumeToken(Qt.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):E.resumeToken.approximateByteSize()>0&&(B=B.withResumeToken(E.resumeToken,s)),o=o.insert(R,B),(function(ne,J,ye){return ne.resumeToken.approximateByteSize()===0||J.snapshotVersion.toMicroseconds()-ne.snapshotVersion.toMicroseconds()>=B2?!0:ye.addedDocuments.size+ye.modifiedDocuments.size+ye.removedDocuments.size>0})(S,B,E)&&m.push(n.Pi.updateTargetData(u,B))}));let p=gr(),y=Me();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(u,E))})),m.push(Y2(u,f,e.documentUpdates).next((E=>{p=E.ks,y=E.qs}))),!s.isEqual(Ae.min())){const E=n.Pi.getLastRemoteSnapshotVersion(u).next((R=>n.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(E)}return W.waitFor(m).next((()=>f.apply(u))).next((()=>n.localDocuments.getLocalViewOfDocuments(u,p,y))).next((()=>p))})).then((u=>(n.Ms=o,u)))}function Y2(r,e,n){let s=Me(),o=Me();return n.forEach((u=>s=s.add(u))),e.getEntries(r,s).next((u=>{let f=gr();return n.forEach(((m,p)=>{const y=u.get(m);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(m)),p.isNoDocument()&&p.version.isEqual(Ae.min())?(e.removeEntry(m,p.readTime),f=f.insert(m,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),f=f.insert(m,p)):oe(Zg,"Ignoring outdated watch update for ",m,". Current version:",y.version," Watch version:",p.version)})),{ks:f,qs:o}}))}function K2(r,e){const n=be(r);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=jg),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function Q2(r,e){const n=be(r);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return n.Pi.getTargetData(s,e).next((u=>u?(o=u,W.resolve(o)):n.Pi.allocateTargetId(s).next((f=>(o=new Wr(e,f,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=n.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(e,s.targetId)),s}))}async function hg(r,e,n){const s=be(r),o=s.Ms.get(e),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,(f=>s.persistence.referenceDelegate.removeTarget(f,o)))}catch(f){if(!Lo(f))throw f;oe(Zg,`Failed to update sequence numbers for target ${e}: ${f}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function lT(r,e,n){const s=be(r);let o=Ae.min(),u=Me();return s.persistence.runTransaction("Execute query","readwrite",(f=>(function(p,y,E){const R=be(p),S=R.xs.get(E);return S!==void 0?W.resolve(R.Ms.get(S)):R.Pi.getTargetData(y,E)})(s,f,Ri(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(f,m.targetId).next((p=>{u=p}))})).next((()=>s.Fs.getDocumentsMatchingQuery(f,e,n?o:Ae.min(),n?u:Me()))).next((m=>($2(s,MN(e),m),{documents:m,Qs:u})))))}function $2(r,e,n){let s=r.Os.get(e)||Ae.min();n.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),r.Os.set(e,s)}class uT{constructor(){this.activeTargetIds=zN()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class X2{constructor(){this.Mo=new uT,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,s){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new uT,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class W2{Oo(e){}shutdown(){}}/**
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
 */const cT="ConnectivityMonitor";class hT{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){oe(cT,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){oe(cT,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ah=null;function fg(){return ah===null?ah=(function(){return 268435456+Math.round(2147483648*Math.random())})():ah++,"0x"+ah.toString(16)}/**
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
 */const km="RestConnection",Z2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class J2{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===Ih?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,n,s,o,u){const f=fg(),m=this.zo(e,n.toUriEncodedString());oe(km,`Sending RPC '${e}' ${f}:`,m,s);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,o,u);const{host:y}=new URL(m),E=hs(y);return this.Jo(e,m,p,s,E).then((R=>(oe(km,`Received RPC '${e}' ${f}: `,R),R)),(R=>{throw Ao(km,`RPC '${e}' ${f} failed with error: `,R,"url: ",m,"request:",s),R}))}Ho(e,n,s,o,u,f){return this.Go(e,n,s,o,u)}jo(e,n,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Vo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}zo(e,n){const s=Z2[e];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
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
 */class eD{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Jt="WebChannelConnection";class tD extends J2{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,s,o,u){const f=fg();return new Promise(((m,p)=>{const y=new G0;y.setWithCredentials(!0),y.listenOnce(Y0.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case fh.NO_ERROR:const R=y.getResponseJson();oe(Jt,`XHR for RPC '${e}' ${f} received:`,JSON.stringify(R)),m(R);break;case fh.TIMEOUT:oe(Jt,`RPC '${e}' ${f} timed out`),p(new ae($.DEADLINE_EXCEEDED,"Request time out"));break;case fh.HTTP_ERROR:const S=y.getStatus();if(oe(Jt,`RPC '${e}' ${f} failed with status:`,S,"response text:",y.getResponseText()),S>0){let B=y.getResponseJson();Array.isArray(B)&&(B=B[0]);const K=B?.error;if(K&&K.status&&K.message){const ne=(function(ye){const ie=ye.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(ie)>=0?ie:$.UNKNOWN})(K.status);p(new ae(ne,K.message))}else p(new ae($.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new ae($.UNAVAILABLE,"Connection failed."));break;default:ve(9055,{l_:e,streamId:f,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{oe(Jt,`RPC '${e}' ${f} completed.`)}}));const E=JSON.stringify(o);oe(Jt,`RPC '${e}' ${f} sending request:`,o),y.send(n,"POST",E,s,15)}))}T_(e,n,s){const o=fg(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=$0(),m=Q0(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,n,s),p.encodeInitMessageHeaders=!0;const E=u.join("");oe(Jt,`Creating RPC '${e}' stream ${o}: ${E}`,p);const R=f.createWebChannel(E,p);this.I_(R);let S=!1,B=!1;const K=new eD({Yo:J=>{B?oe(Jt,`Not sending because RPC '${e}' stream ${o} is closed:`,J):(S||(oe(Jt,`Opening RPC '${e}' stream ${o} transport.`),R.open(),S=!0),oe(Jt,`RPC '${e}' stream ${o} sending:`,J),R.send(J))},Zo:()=>R.close()}),ne=(J,ye,ie)=>{J.listen(ye,(he=>{try{ie(he)}catch(Te){setTimeout((()=>{throw Te}),0)}}))};return ne(R,tu.EventType.OPEN,(()=>{B||(oe(Jt,`RPC '${e}' stream ${o} transport opened.`),K.o_())})),ne(R,tu.EventType.CLOSE,(()=>{B||(B=!0,oe(Jt,`RPC '${e}' stream ${o} transport closed`),K.a_(),this.E_(R))})),ne(R,tu.EventType.ERROR,(J=>{B||(B=!0,Ao(Jt,`RPC '${e}' stream ${o} transport errored. Name:`,J.name,"Message:",J.message),K.a_(new ae($.UNAVAILABLE,"The operation could not be completed")))})),ne(R,tu.EventType.MESSAGE,(J=>{if(!B){const ye=J.data[0];He(!!ye,16349);const ie=ye,he=ie?.error||ie[0]?.error;if(he){oe(Jt,`RPC '${e}' stream ${o} received error:`,he);const Te=he.status;let me=(function(b){const C=At[b];if(C!==void 0)return Dw(C)})(Te),Oe=he.message;me===void 0&&(me=$.INTERNAL,Oe="Unknown error status: "+Te+" with message "+he.message),B=!0,K.a_(new ae(me,Oe)),R.close()}else oe(Jt,`RPC '${e}' stream ${o} received:`,ye),K.u_(ye)}})),ne(m,K0.STAT_EVENT,(J=>{J.stat===Jm.PROXY?oe(Jt,`RPC '${e}' stream ${o} detected buffering proxy`):J.stat===Jm.NOPROXY&&oe(Jt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{K.__()}),0),K}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function Lm(){return typeof document<"u"?document:null}/**
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
 */function rf(r){return new s2(r,!0)}/**
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
 */class Hw{constructor(e,n,s=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=n,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-s);o>0&&oe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const fT="PersistentStream";class Gw{constructor(e,n,s,o,u,f,m,p){this.Mi=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Hw(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(mr(n.toString()),mr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===n&&this.G_(s,o)}),(s=>{e((()=>{const o=new ae($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,n){const s=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return oe(fT,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(oe(fT,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class nD extends Gw{constructor(e,n,s,o,u,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=l2(this.serializer,e),s=(function(u){if(!("targetChange"in u))return Ae.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?Ae.min():f.readTime?Ii(f.readTime):Ae.min()})(e);return this.listener.H_(n,s)}Y_(e){const n={};n.database=cg(this.serializer),n.addTarget=(function(u,f){let m;const p=f.target;if(m=rg(p)?{documents:h2(u,p)}:{query:f2(u,p).ft},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=Pw(u,f.resumeToken);const y=og(u,f.expectedCount);y!==null&&(m.expectedCount=y)}else if(f.snapshotVersion.compareTo(Ae.min())>0){m.readTime=Oh(u,f.snapshotVersion.toTimestamp());const y=og(u,f.expectedCount);y!==null&&(m.expectedCount=y)}return m})(this.serializer,e);const s=m2(this.serializer,e);s&&(n.labels=s),this.q_(n)}Z_(e){const n={};n.database=cg(this.serializer),n.removeTarget=e,this.q_(n)}}class iD extends Gw{constructor(e,n,s,o,u,f){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return He(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,He(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){He(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=c2(e.writeResults,e.commitTime),s=Ii(e.commitTime);return this.listener.na(s,n)}ra(){const e={};e.database=cg(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((s=>u2(this.serializer,s)))};this.q_(n)}}/**
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
 */class rD{}class sD extends rD{constructor(e,n,s,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ae($.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,f])=>this.connection.Go(e,lg(n,s),o,u,f))).catch((u=>{throw u.name==="FirebaseError"?(u.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ae($.UNKNOWN,u.toString())}))}Ho(e,n,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([f,m])=>this.connection.Ho(e,lg(n,s),o,f,m,u))).catch((f=>{throw f.name==="FirebaseError"?(f.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new ae($.UNKNOWN,f.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class aD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(mr(n),this.aa=!1):oe("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ca="RemoteStore";class oD{constructor(e,n,s,o,u){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((f=>{s.enqueueAndForget((async()=>{ga(this)&&(oe(ca,"Restarting streams for network reachability change."),await(async function(p){const y=be(p);y.Ea.add(4),await Nu(y),y.Ra.set("Unknown"),y.Ea.delete(4),await sf(y)})(this))}))})),this.Ra=new aD(s,o)}}async function sf(r){if(ga(r))for(const e of r.da)await e(!0)}async function Nu(r){for(const e of r.da)await e(!1)}function Yw(r,e){const n=be(r);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),np(n)?tp(n):jo(n).O_()&&ep(n,e))}function Jg(r,e){const n=be(r),s=jo(n);n.Ia.delete(e),s.O_()&&Kw(n,e),n.Ia.size===0&&(s.O_()?s.L_():ga(n)&&n.Ra.set("Unknown"))}function ep(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}jo(r).Y_(e)}function Kw(r,e){r.Va.Ue(e),jo(r).Z_(e)}function tp(r){r.Va=new t2({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),jo(r).start(),r.Ra.ua()}function np(r){return ga(r)&&!jo(r).x_()&&r.Ia.size>0}function ga(r){return be(r).Ea.size===0}function Qw(r){r.Va=void 0}async function lD(r){r.Ra.set("Online")}async function uD(r){r.Ia.forEach(((e,n)=>{ep(r,e)}))}async function cD(r,e){Qw(r),np(r)?(r.Ra.ha(e),tp(r)):r.Ra.set("Unknown")}async function hD(r,e,n){if(r.Ra.set("Online"),e instanceof xw&&e.state===2&&e.cause)try{await(async function(o,u){const f=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.Ia.delete(m),o.Va.removeTarget(m))})(r,e)}catch(s){oe(ca,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ph(r,s)}else if(e instanceof ph?r.Va.Ze(e):e instanceof Ow?r.Va.st(e):r.Va.tt(e),!n.isEqual(Ae.min()))try{const s=await Fw(r.localStore);n.compareTo(s)>=0&&await(function(u,f){const m=u.Va.Tt(f);return m.targetChanges.forEach(((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const E=u.Ia.get(y);E&&u.Ia.set(y,E.withResumeToken(p.resumeToken,f))}})),m.targetMismatches.forEach(((p,y)=>{const E=u.Ia.get(p);if(!E)return;u.Ia.set(p,E.withResumeToken(Qt.EMPTY_BYTE_STRING,E.snapshotVersion)),Kw(u,p);const R=new Wr(E.target,p,y,E.sequenceNumber);ep(u,R)})),u.remoteSyncer.applyRemoteEvent(m)})(r,n)}catch(s){oe(ca,"Failed to raise snapshot:",s),await Ph(r,s)}}async function Ph(r,e,n){if(!Lo(e))throw e;r.Ea.add(1),await Nu(r),r.Ra.set("Offline"),n||(n=()=>Fw(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{oe(ca,"Retrying IndexedDB access"),await n(),r.Ea.delete(1),await sf(r)}))}function $w(r,e){return e().catch((n=>Ph(r,n,e)))}async function af(r){const e=be(r),n=ls(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:jg;for(;fD(e);)try{const o=await K2(e.localStore,s);if(o===null){e.Ta.length===0&&n.L_();break}s=o.batchId,dD(e,o)}catch(o){await Ph(e,o)}Xw(e)&&Ww(e)}function fD(r){return ga(r)&&r.Ta.length<10}function dD(r,e){r.Ta.push(e);const n=ls(r);n.O_()&&n.X_&&n.ea(e.mutations)}function Xw(r){return ga(r)&&!ls(r).x_()&&r.Ta.length>0}function Ww(r){ls(r).start()}async function mD(r){ls(r).ra()}async function gD(r){const e=ls(r);for(const n of r.Ta)e.ea(n.mutations)}async function pD(r,e,n){const s=r.Ta.shift(),o=Yg.from(s,e,n);await $w(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await af(r)}async function yD(r,e){e&&ls(r).X_&&await(async function(s,o){if((function(f){return ZN(f)&&f!==$.ABORTED})(o.code)){const u=s.Ta.shift();ls(s).B_(),await $w(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await af(s)}})(r,e),Xw(r)&&Ww(r)}async function dT(r,e){const n=be(r);n.asyncQueue.verifyOperationInProgress(),oe(ca,"RemoteStore received new credentials");const s=ga(n);n.Ea.add(3),await Nu(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await sf(n)}async function _D(r,e){const n=be(r);e?(n.Ea.delete(2),await sf(n)):e||(n.Ea.add(2),await Nu(n),n.Ra.set("Unknown"))}function jo(r){return r.ma||(r.ma=(function(n,s,o){const u=be(n);return u.sa(),new nD(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Xo:lD.bind(null,r),t_:uD.bind(null,r),r_:cD.bind(null,r),H_:hD.bind(null,r)}),r.da.push((async e=>{e?(r.ma.B_(),np(r)?tp(r):r.Ra.set("Unknown")):(await r.ma.stop(),Qw(r))}))),r.ma}function ls(r){return r.fa||(r.fa=(function(n,s,o){const u=be(n);return u.sa(),new iD(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:mD.bind(null,r),r_:yD.bind(null,r),ta:gD.bind(null,r),na:pD.bind(null,r)}),r.da.push((async e=>{e?(r.fa.B_(),await af(r)):(await r.fa.stop(),r.Ta.length>0&&(oe(ca,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
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
 */class ip{constructor(e,n,s,o,u){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new hr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((f=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,o,u){const f=Date.now()+s,m=new ip(e,n,f,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rp(r,e){if(mr("AsyncQueue",`${e}: ${r}`),Lo(r))return new ae($.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class wo{static emptySet(e){return new wo(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||de.comparator(n.key,s.key):(n,s)=>de.comparator(n.key,s.key),this.keyedMap=nu(),this.sortedSet=new ut(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,s)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof wo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new wo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class mT{constructor(){this.ga=new ut(de.comparator)}track(e){const n=e.doc.key,s=this.ga.get(n);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(n,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(n):e.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ve(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,s)=>{e.push(s)})),e}}class Do{constructor(e,n,s,o,u,f,m,p,y){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,n,s,o,u){const f=[];return n.forEach((m=>{f.push({type:0,doc:m})})),new Do(e,n,wo.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class vD{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class ED{constructor(){this.queries=gT(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const o=be(n),u=o.queries;o.queries=gT(),u.forEach(((f,m)=>{for(const p of m.Sa)p.onError(s)}))})(this,new ae($.ABORTED,"Firestore shutting down"))}}function gT(){return new ma((r=>yw(r)),Zh)}async function sp(r,e){const n=be(r);let s=3;const o=e.query;let u=n.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new vD,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await n.onListen(o,!0);break;case 1:u.wa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const m=rp(f,`Initialization of query '${fo(e.query)}' failed`);return void e.onError(m)}n.queries.set(o,u),u.Sa.push(e),e.va(n.onlineState),u.wa&&e.Fa(u.wa)&&op(n)}async function ap(r,e){const n=be(r),s=e.query;let o=3;const u=n.queries.get(s);if(u){const f=u.Sa.indexOf(e);f>=0&&(u.Sa.splice(f,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function TD(r,e){const n=be(r);let s=!1;for(const o of e){const u=o.query,f=n.queries.get(u);if(f){for(const m of f.Sa)m.Fa(o)&&(s=!0);f.wa=o}}s&&op(n)}function wD(r,e,n){const s=be(r),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(n);s.queries.delete(e)}function op(r){r.Ca.forEach((e=>{e.next()}))}var dg,pT;(pT=dg||(dg={})).Ma="default",pT.Cache="cache";class lp{constructor(e,n,s){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Do(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Do.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==dg.Cache}}/**
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
 */class Zw{constructor(e){this.key=e}}class Jw{constructor(e){this.key=e}}class AD{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Me(),this.mutatedKeys=Me(),this.eu=_w(e),this.tu=new wo(this.eu)}get nu(){return this.Ya}ru(e,n){const s=n?n.iu:new mT,o=n?n.tu:this.tu;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,m=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,R)=>{const S=o.get(E),B=Jh(this.query,R)?R:null,K=!!S&&this.mutatedKeys.has(S.key),ne=!!B&&(B.hasLocalMutations||this.mutatedKeys.has(B.key)&&B.hasCommittedMutations);let J=!1;S&&B?S.data.isEqual(B.data)?K!==ne&&(s.track({type:3,doc:B}),J=!0):this.su(S,B)||(s.track({type:2,doc:B}),J=!0,(p&&this.eu(B,p)>0||y&&this.eu(B,y)<0)&&(m=!0)):!S&&B?(s.track({type:0,doc:B}),J=!0):S&&!B&&(s.track({type:1,doc:S}),J=!0,(p||y)&&(m=!0)),J&&(B?(f=f.add(B),u=ne?u.add(E):u.delete(E)):(f=f.delete(E),u=u.delete(E)))})),this.query.limit!==null)for(;f.size>this.query.limit;){const E=this.query.limitType==="F"?f.last():f.first();f=f.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{tu:f,iu:s,Cs:m,mutatedKeys:u}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const f=e.iu.ya();f.sort(((E,R)=>(function(B,K){const ne=J=>{switch(J){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve(20277,{Rt:J})}};return ne(B)-ne(K)})(E.type,R.type)||this.eu(E.doc,R.doc))),this.ou(s),o=o??!1;const m=n&&!o?this._u():[],p=this.Xa.size===0&&this.current&&!o?1:0,y=p!==this.Za;return this.Za=p,f.length!==0||y?{snapshot:new Do(this.query,e.tu,u,f,e.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new mT,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Me(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const n=[];return e.forEach((s=>{this.Xa.has(s)||n.push(new Jw(s))})),this.Xa.forEach((s=>{e.has(s)||n.push(new Zw(s))})),n}cu(e){this.Ya=e.Qs,this.Xa=Me();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Do.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const up="SyncEngine";class bD{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class SD{constructor(e){this.key=e,this.hu=!1}}class RD{constructor(e,n,s,o,u,f){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new ma((m=>yw(m)),Zh),this.Iu=new Map,this.Eu=new Set,this.du=new ut(de.comparator),this.Au=new Map,this.Ru=new $g,this.Vu={},this.mu=new Map,this.fu=No.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function ID(r,e,n=!0){const s=sA(r);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await eA(s,e,n,!0),o}async function CD(r,e){const n=sA(r);await eA(n,e,!0,!1)}async function eA(r,e,n,s){const o=await Q2(r.localStore,Ri(e)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let m;return s&&(m=await ND(r,e,u,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&Yw(r.remoteStore,o),m}async function ND(r,e,n,s,o){r.pu=(R,S,B)=>(async function(ne,J,ye,ie){let he=J.view.ru(ye);he.Cs&&(he=await lT(ne.localStore,J.query,!1).then((({documents:P})=>J.view.ru(P,he))));const Te=ie&&ie.targetChanges.get(J.targetId),me=ie&&ie.targetMismatches.get(J.targetId)!=null,Oe=J.view.applyChanges(he,ne.isPrimaryClient,Te,me);return _T(ne,J.targetId,Oe.au),Oe.snapshot})(r,R,S,B);const u=await lT(r.localStore,e,!0),f=new AD(e,u.Qs),m=f.ru(u.documents),p=Cu.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),y=f.applyChanges(m,r.isPrimaryClient,p);_T(r,n,y.au);const E=new bD(e,n,f);return r.Tu.set(e,E),r.Iu.has(n)?r.Iu.get(n).push(e):r.Iu.set(n,[e]),y.snapshot}async function DD(r,e,n){const s=be(r),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter((f=>!Zh(f,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await hg(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),n&&Jg(s.remoteStore,o.targetId),mg(s,o.targetId)})).catch(ko)):(mg(s,o.targetId),await hg(s.localStore,o.targetId,!0))}async function OD(r,e){const n=be(r),s=n.Tu.get(e),o=n.Iu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Jg(n.remoteStore,s.targetId))}async function xD(r,e,n){const s=jD(r);try{const o=await(function(f,m){const p=be(f),y=st.now(),E=m.reduce(((B,K)=>B.add(K.key)),Me());let R,S;return p.persistence.runTransaction("Locally write mutations","readwrite",(B=>{let K=gr(),ne=Me();return p.Ns.getEntries(B,E).next((J=>{K=J,K.forEach(((ye,ie)=>{ie.isValidDocument()||(ne=ne.add(ye))}))})).next((()=>p.localDocuments.getOverlayedDocuments(B,K))).next((J=>{R=J;const ye=[];for(const ie of m){const he=KN(ie,R.get(ie.key).overlayedDocument);he!=null&&ye.push(new gs(ie.key,he,uw(he.value.mapValue),ii.exists(!0)))}return p.mutationQueue.addMutationBatch(B,y,ye,m)})).next((J=>{S=J;const ye=J.applyToLocalDocumentSet(R,ne);return p.documentOverlayCache.saveOverlays(B,J.batchId,ye)}))})).then((()=>({batchId:S.batchId,changes:Ew(R)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(f,m,p){let y=f.Vu[f.currentUser.toKey()];y||(y=new ut(Pe)),y=y.insert(m,p),f.Vu[f.currentUser.toKey()]=y})(s,o.batchId,n),await Du(s,o.changes),await af(s.remoteStore)}catch(o){const u=rp(o,"Failed to persist write");n.reject(u)}}async function tA(r,e){const n=be(r);try{const s=await G2(n.localStore,e);e.targetChanges.forEach(((o,u)=>{const f=n.Au.get(u);f&&(He(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.hu=!0:o.modifiedDocuments.size>0?He(f.hu,14607):o.removedDocuments.size>0&&(He(f.hu,42227),f.hu=!1))})),await Du(n,s,e)}catch(s){await ko(s)}}function yT(r,e,n){const s=be(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.Tu.forEach(((u,f)=>{const m=f.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(f,m){const p=be(f);p.onlineState=m;let y=!1;p.queries.forEach(((E,R)=>{for(const S of R.Sa)S.va(m)&&(y=!0)})),y&&op(p)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function PD(r,e,n){const s=be(r);s.sharedClientState.updateQueryState(e,"rejected",n);const o=s.Au.get(e),u=o&&o.key;if(u){let f=new ut(de.comparator);f=f.insert(u,tn.newNoDocument(u,Ae.min()));const m=Me().add(u),p=new nf(Ae.min(),new Map,new ut(Pe),f,m);await tA(s,p),s.du=s.du.remove(u),s.Au.delete(e),cp(s)}else await hg(s.localStore,e,!1).then((()=>mg(s,e,n))).catch(ko)}async function MD(r,e){const n=be(r),s=e.batch.batchId;try{const o=await H2(n.localStore,e);iA(n,s,null),nA(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Du(n,o)}catch(o){await ko(o)}}async function VD(r,e,n){const s=be(r);try{const o=await(function(f,m){const p=be(f);return p.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let E;return p.mutationQueue.lookupMutationBatch(y,m).next((R=>(He(R!==null,37113),E=R.keys(),p.mutationQueue.removeMutationBatch(y,R)))).next((()=>p.mutationQueue.performConsistencyCheck(y))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(y,E,m))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E))).next((()=>p.localDocuments.getDocuments(y,E)))}))})(s.localStore,e);iA(s,e,n),nA(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Du(s,o)}catch(o){await ko(o)}}function nA(r,e){(r.mu.get(e)||[]).forEach((n=>{n.resolve()})),r.mu.delete(e)}function iA(r,e,n){const s=be(r);let o=s.Vu[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(n?u.reject(n):u.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function mg(r,e,n=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Iu.get(e))r.Tu.delete(s),n&&r.Pu.yu(s,n);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach((s=>{r.Ru.containsKey(s)||rA(r,s)}))}function rA(r,e){r.Eu.delete(e.path.canonicalString());const n=r.du.get(e);n!==null&&(Jg(r.remoteStore,n),r.du=r.du.remove(e),r.Au.delete(n),cp(r))}function _T(r,e,n){for(const s of n)s instanceof Zw?(r.Ru.addReference(s.key,e),kD(r,s)):s instanceof Jw?(oe(up,"Document no longer in limbo: "+s.key),r.Ru.removeReference(s.key,e),r.Ru.containsKey(s.key)||rA(r,s.key)):ve(19791,{wu:s})}function kD(r,e){const n=e.key,s=n.path.canonicalString();r.du.get(n)||r.Eu.has(s)||(oe(up,"New document in limbo: "+n),r.Eu.add(s),cp(r))}function cp(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const n=new de(rt.fromString(e)),s=r.fu.next();r.Au.set(s,new SD(n)),r.du=r.du.insert(n,s),Yw(r.remoteStore,new Wr(Ri(Wh(n.path)),s,"TargetPurposeLimboResolution",Qh.ce))}}async function Du(r,e,n){const s=be(r),o=[],u=[],f=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,p)=>{f.push(s.pu(p,e,n).then((y=>{if((y||n)&&s.isPrimaryClient){const E=y?!y.fromCache:n?.targetChanges.get(p.targetId)?.current;s.sharedClientState.updateQueryState(p.targetId,E?"current":"not-current")}if(y){o.push(y);const E=Wg.As(p.targetId,y);u.push(E)}})))})),await Promise.all(f),s.Pu.H_(o),await(async function(p,y){const E=be(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(R=>W.forEach(y,(S=>W.forEach(S.Es,(B=>E.persistence.referenceDelegate.addReference(R,S.targetId,B))).next((()=>W.forEach(S.ds,(B=>E.persistence.referenceDelegate.removeReference(R,S.targetId,B)))))))))}catch(R){if(!Lo(R))throw R;oe(Zg,"Failed to update sequence numbers: "+R)}for(const R of y){const S=R.targetId;if(!R.fromCache){const B=E.Ms.get(S),K=B.snapshotVersion,ne=B.withLastLimboFreeSnapshotVersion(K);E.Ms=E.Ms.insert(S,ne)}}})(s.localStore,u))}async function LD(r,e){const n=be(r);if(!n.currentUser.isEqual(e)){oe(up,"User change. New user:",e.toKey());const s=await qw(n.localStore,e);n.currentUser=e,(function(u,f){u.mu.forEach((m=>{m.forEach((p=>{p.reject(new ae($.CANCELLED,f))}))})),u.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Du(n,s.Ls)}}function UD(r,e){const n=be(r),s=n.Au.get(e);if(s&&s.hu)return Me().add(s.key);{let o=Me();const u=n.Iu.get(e);if(!u)return o;for(const f of u){const m=n.Tu.get(f);o=o.unionWith(m.view.nu)}return o}}function sA(r){const e=be(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=tA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=UD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=PD.bind(null,e),e.Pu.H_=TD.bind(null,e.eventManager),e.Pu.yu=wD.bind(null,e.eventManager),e}function jD(r){const e=be(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=MD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=VD.bind(null,e),e}class Mh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=rf(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return F2(this.persistence,new z2,e.initialUser,this.serializer)}Cu(e){return new Bw(Xg.mi,this.serializer)}Du(e){return new X2}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Mh.provider={build:()=>new Mh};class zD extends Mh{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){He(this.persistence.referenceDelegate instanceof xh,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new S2(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?fn.withCacheSize(this.cacheSizeBytes):fn.DEFAULT;return new Bw((s=>xh.mi(s,n)),this.serializer)}}class gg{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>yT(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=LD.bind(null,this.syncEngine),await _D(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new ED})()}createDatastore(e){const n=rf(e.databaseInfo.databaseId),s=(function(u){return new tD(u)})(e.databaseInfo);return(function(u,f,m,p){return new sD(u,f,m,p)})(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return(function(s,o,u,f,m){return new oD(s,o,u,f,m)})(this.localStore,this.datastore,e.asyncQueue,(n=>yT(this.syncEngine,n,0)),(function(){return hT.v()?new hT:new W2})())}createSyncEngine(e,n){return(function(o,u,f,m,p,y,E){const R=new RD(o,u,f,m,p,y);return E&&(R.gu=!0),R})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const s=be(n);oe(ca,"RemoteStore shutting down."),s.Ea.add(5),await Nu(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}gg.provider={build:()=>new gg};/**
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
 */class hp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):mr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const us="FirestoreClient";class BD{constructor(e,n,s,o,u){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=en.UNAUTHENTICATED,this.clientId=Ug.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async f=>{oe(us,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f})),this.appCheckCredentials.start(s,(f=>(oe(us,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=rp(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Um(r,e){r.asyncQueue.verifyOperationInProgress(),oe(us,"Initializing OfflineComponentProvider");const n=r.configuration;await e.initialize(n);let s=n.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await qw(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function vT(r,e){r.asyncQueue.verifyOperationInProgress();const n=await qD(r);oe(us,"Initializing OnlineComponentProvider"),await e.initialize(n,r.configuration),r.setCredentialChangeListener((s=>dT(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>dT(e.remoteStore,o))),r._onlineComponents=e}async function qD(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){oe(us,"Using user provided OfflineComponentProvider");try{await Um(r,r._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(o){return o.name==="FirebaseError"?o.code===$.FAILED_PRECONDITION||o.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(n))throw n;Ao("Error using user provided cache. Falling back to memory cache: "+n),await Um(r,new Mh)}}else oe(us,"Using default OfflineComponentProvider"),await Um(r,new zD(void 0));return r._offlineComponents}async function aA(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(oe(us,"Using user provided OnlineComponentProvider"),await vT(r,r._uninitializedComponentsProvider._online)):(oe(us,"Using default OnlineComponentProvider"),await vT(r,new gg))),r._onlineComponents}function FD(r){return aA(r).then((e=>e.syncEngine))}async function Vh(r){const e=await aA(r),n=e.eventManager;return n.onListen=ID.bind(null,e.syncEngine),n.onUnlisten=DD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=CD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=OD.bind(null,e.syncEngine),n}function HD(r,e,n={}){const s=new hr;return r.asyncQueue.enqueueAndForget((async()=>(function(u,f,m,p,y){const E=new hp({next:S=>{E.Nu(),f.enqueueAndForget((()=>ap(u,R)));const B=S.docs.has(m);!B&&S.fromCache?y.reject(new ae($.UNAVAILABLE,"Failed to get document because the client is offline.")):B&&S.fromCache&&p&&p.source==="server"?y.reject(new ae($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(S)},error:S=>y.reject(S)}),R=new lp(Wh(m.path),E,{includeMetadataChanges:!0,qa:!0});return sp(u,R)})(await Vh(r),r.asyncQueue,e,n,s))),s.promise}function GD(r,e,n={}){const s=new hr;return r.asyncQueue.enqueueAndForget((async()=>(function(u,f,m,p,y){const E=new hp({next:S=>{E.Nu(),f.enqueueAndForget((()=>ap(u,R))),S.fromCache&&p.source==="server"?y.reject(new ae($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(S)},error:S=>y.reject(S)}),R=new lp(m,E,{includeMetadataChanges:!0,qa:!0});return sp(u,R)})(await Vh(r),r.asyncQueue,e,n,s))),s.promise}/**
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
 */function oA(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const ET=new Map;/**
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
 */const lA="firestore.googleapis.com",TT=!0;class wT{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ae($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=lA,this.ssl=TT}else this.host=e.host,this.ssl=e.ssl??TT;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=zw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<A2)throw new ae($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oA(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ae($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ae($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ae($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class of{constructor(e,n,s,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wT({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wT(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new WC;switch(s.type){case"firstParty":return new tN(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ae($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=ET.get(n);s&&(oe("ComponentProvider","Removing Datastore"),ET.delete(n),s.terminate())})(this),Promise.resolve()}}function YD(r,e,n,s={}){r=Nn(r,of);const o=hs(e),u=r._getSettings(),f={...u,emulatorOptions:r._getEmulatorOptions()},m=`${e}:${n}`;o&&(Eg(`https://${m}`),Tg("Firestore",!0)),u.host!==lA&&u.host!==m&&Ao("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...u,host:m,ssl:o,emulatorOptions:s};if(!Di(p,f)&&(r._setSettings(p),s.mockUserToken)){let y,E;if(typeof s.mockUserToken=="string")y=s.mockUserToken,E=en.MOCK_USER;else{y=kS(s.mockUserToken,r._app?.options.projectId);const R=s.mockUserToken.sub||s.mockUserToken.user_id;if(!R)throw new ae($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new en(R)}r._authCredentials=new ZC(new W0(y,E))}}/**
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
 */class ps{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ps(this.firestore,e,this._query)}}class dt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ns(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dt(this.firestore,e,this._key)}toJSON(){return{type:dt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(Ru(n,dt._jsonSchema))return new dt(e,s||null,new de(rt.fromString(n.referencePath)))}}dt._jsonSchemaVersion="firestore/documentReference/1.0",dt._jsonSchema={type:Rt("string",dt._jsonSchemaVersion),referencePath:Rt("string")};class ns extends ps{constructor(e,n,s){super(e,n,Wh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dt(this.firestore,null,new de(e))}withConverter(e){return new ns(this.firestore,e,this._path)}}function rr(r,e,...n){if(r=Ze(r),Z0("collection","path",e),r instanceof of){const s=rt.fromString(e,...n);return VE(s),new ns(r,null,s)}{if(!(r instanceof dt||r instanceof ns))throw new ae($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(rt.fromString(e,...n));return VE(s),new ns(r.firestore,null,s)}}function it(r,e,...n){if(r=Ze(r),arguments.length===1&&(e=Ug.newId()),Z0("doc","path",e),r instanceof of){const s=rt.fromString(e,...n);return ME(s),new dt(r,null,new de(s))}{if(!(r instanceof dt||r instanceof ns))throw new ae($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(rt.fromString(e,...n));return ME(s),new dt(r.firestore,r instanceof ns?r.converter:null,new de(s))}}/**
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
 */const AT="AsyncQueue";class bT{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Hw(this,"async_queue_retry"),this._c=()=>{const s=Lm();s&&oe(AT,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=Lm();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Lm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new hr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Lo(e))throw e;oe(AT,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,mr("INTERNAL UNHANDLED ERROR: ",ST(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const o=ip.createAndSchedule(this,e,n,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&ve(47125,{Pc:ST(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function ST(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
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
 */function RT(r){return(function(n,s){if(typeof n!="object"||n===null)return!1;const o=n;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1})(r,["next","error","complete"])}class cs extends of{constructor(e,n,s,o){super(e,n,s,o),this.type="firestore",this._queue=new bT,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new bT(e),this._firestoreClient=void 0,await e}}}function KD(r,e){const n=typeof r=="object"?r:Fh(),s=typeof r=="string"?r:Ih,o=fs(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=QT("firestore");u&&YD(o,...u)}return o}function lf(r){if(r._terminated)throw new ae($.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||QD(r),r._firestoreClient}function QD(r){const e=r._freezeSettings(),n=(function(o,u,f,m){return new _N(o,u,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,oA(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(r._databaseId,r._app?.options.appId||"",r._persistenceKey,e);r._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new BD(r._authCredentials,r._appCheckCredentials,r._queue,n,r._componentsProvider&&(function(o){const u=o?._online.build();return{_offline:o?._offline.build(u),_online:u}})(r._componentsProvider))}/**
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
 */class Hn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hn(Qt.fromBase64String(e))}catch(n){throw new ae($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Hn(Qt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Hn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ru(e,Hn._jsonSchema))return Hn.fromBase64String(e.bytes)}}Hn._jsonSchemaVersion="firestore/bytes/1.0",Hn._jsonSchema={type:Rt("string",Hn._jsonSchemaVersion),bytes:Rt("string")};/**
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
 */class uf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ae($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class zo{constructor(e){this._methodName=e}}/**
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
 */class Ci{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ae($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ae($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ci._jsonSchemaVersion}}static fromJSON(e){if(Ru(e,Ci._jsonSchema))return new Ci(e.latitude,e.longitude)}}Ci._jsonSchemaVersion="firestore/geoPoint/1.0",Ci._jsonSchema={type:Rt("string",Ci._jsonSchemaVersion),latitude:Rt("number"),longitude:Rt("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Ni{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ni._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ru(e,Ni._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Ni(e.vectorValues);throw new ae($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ni._jsonSchemaVersion="firestore/vectorValue/1.0",Ni._jsonSchema={type:Rt("string",Ni._jsonSchemaVersion),vectorValues:Rt("object")};/**
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
 */const $D=/^__.*__$/;class XD{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new gs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Iu(e,this.data,n,this.fieldTransforms)}}class uA{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new gs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function cA(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve(40011,{Ac:r})}}class cf{constructor(e,n,s,o,u,f){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new cf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.gc(e),s}yc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return kh(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(cA(this.Ac)&&$D.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class WD{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||rf(e)}Cc(e,n,s,o=!1){return new cf({Ac:e,methodName:n,Dc:s,path:Kt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hf(r){const e=r._freezeSettings(),n=rf(r._databaseId);return new WD(r._databaseId,!!e.ignoreUndefinedProperties,n)}function hA(r,e,n,s,o,u={}){const f=r.Cc(u.merge||u.mergeFields?2:0,e,n,o);gp("Data must be an object, but it was:",f,s);const m=dA(s,f);let p,y;if(u.merge)p=new In(f.fieldMask),y=f.fieldTransforms;else if(u.mergeFields){const E=[];for(const R of u.mergeFields){const S=pg(e,R,n);if(!f.contains(S))throw new ae($.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);gA(E,S)||E.push(S)}p=new In(E),y=f.fieldTransforms.filter((R=>p.covers(R.field)))}else p=null,y=f.fieldTransforms;return new XD(new dn(m),p,y)}class ff extends zo{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ff}}function fA(r,e,n){return new cf({Ac:3,Dc:e.settings.Dc,methodName:r._methodName,fc:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class fp extends zo{_toFieldTransform(e){return new Gg(e.path,new Tu)}isEqual(e){return e instanceof fp}}class dp extends zo{constructor(e,n){super(e),this.vc=n}_toFieldTransform(e){const n=fA(this,e,!0),s=this.vc.map((u=>pa(u,n))),o=new Io(s);return new Gg(e.path,o)}isEqual(e){return e instanceof dp&&Di(this.vc,e.vc)}}class mp extends zo{constructor(e,n){super(e),this.vc=n}_toFieldTransform(e){const n=fA(this,e,!0),s=this.vc.map((u=>pa(u,n))),o=new Co(s);return new Gg(e.path,o)}isEqual(e){return e instanceof mp&&Di(this.vc,e.vc)}}function ZD(r,e,n,s){const o=r.Cc(1,e,n);gp("Data must be an object, but it was:",o,s);const u=[],f=dn.empty();ms(s,((p,y)=>{const E=pp(e,p,n);y=Ze(y);const R=o.yc(E);if(y instanceof ff)u.push(E);else{const S=pa(y,R);S!=null&&(u.push(E),f.set(E,S))}}));const m=new In(u);return new uA(f,m,o.fieldTransforms)}function JD(r,e,n,s,o,u){const f=r.Cc(1,e,n),m=[pg(e,s,n)],p=[o];if(u.length%2!=0)throw new ae($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<u.length;S+=2)m.push(pg(e,u[S])),p.push(u[S+1]);const y=[],E=dn.empty();for(let S=m.length-1;S>=0;--S)if(!gA(y,m[S])){const B=m[S];let K=p[S];K=Ze(K);const ne=f.yc(B);if(K instanceof ff)y.push(B);else{const J=pa(K,ne);J!=null&&(y.push(B),E.set(B,J))}}const R=new In(y);return new uA(E,R,f.fieldTransforms)}function eO(r,e,n,s=!1){return pa(n,r.Cc(s?4:3,e))}function pa(r,e){if(mA(r=Ze(r)))return gp("Unsupported field value:",e,r),dA(r,e);if(r instanceof zo)return(function(s,o){if(!cA(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,o){const u=[];let f=0;for(const m of s){let p=pa(m,o.wc(f));p==null&&(p={nullValue:"NULL_VALUE"}),u.push(p),f++}return{arrayValue:{values:u}}})(r,e)}return(function(s,o){if((s=Ze(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return BN(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=st.fromDate(s);return{timestampValue:Oh(o.serializer,u)}}if(s instanceof st){const u=new st(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Oh(o.serializer,u)}}if(s instanceof Ci)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Hn)return{bytesValue:Pw(o.serializer,s._byteString)};if(s instanceof dt){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.Sc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Qg(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Ni)return(function(f,m){return{mapValue:{fields:{[ow]:{stringValue:lw},[Ch]:{arrayValue:{values:f.toArray().map((y=>{if(typeof y!="number")throw m.Sc("VectorValues must only contain numeric values.");return Hg(m.serializer,y)}))}}}}}})(s,o);throw o.Sc(`Unsupported field value: ${Kh(s)}`)})(r,e)}function dA(r,e){const n={};return tw(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ms(r,((s,o)=>{const u=pa(o,e.mc(s));u!=null&&(n[s]=u)})),{mapValue:{fields:n}}}function mA(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof st||r instanceof Ci||r instanceof Hn||r instanceof dt||r instanceof zo||r instanceof Ni)}function gp(r,e,n){if(!mA(n)||!J0(n)){const s=Kh(n);throw s==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+s)}}function pg(r,e,n){if((e=Ze(e))instanceof uf)return e._internalPath;if(typeof e=="string")return pp(r,e);throw kh("Field path arguments must be of type string or ",r,!1,void 0,n)}const tO=new RegExp("[~\\*/\\[\\]]");function pp(r,e,n){if(e.search(tO)>=0)throw kh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new uf(...e.split("."))._internalPath}catch{throw kh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function kh(r,e,n,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let m=`Function ${e}() called with invalid data`;n&&(m+=" (via `toFirestore()`)"),m+=". ";let p="";return(u||f)&&(p+=" (found",u&&(p+=` in field ${s}`),f&&(p+=` in document ${o}`),p+=")"),new ae($.INVALID_ARGUMENT,m+r+p)}function gA(r,e){return r.some((n=>n.isEqual(e)))}/**
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
 */class pA{constructor(e,n,s,o,u){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(df("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class nO extends pA{data(){return super.data()}}function df(r,e){return typeof e=="string"?pp(r,e):e instanceof uf?e._internalPath:e._delegate._internalPath}/**
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
 */function yA(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ae($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yp{}class _A extends yp{}function uo(r,e,...n){let s=[];e instanceof yp&&s.push(e),s=s.concat(n),(function(u){const f=u.filter((p=>p instanceof _p)).length,m=u.filter((p=>p instanceof mf)).length;if(f>1||f>0&&m>0)throw new ae($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)r=o._apply(r);return r}class mf extends _A{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new mf(e,n,s)}_apply(e){const n=this._parse(e);return vA(e._query,n),new ps(e.firestore,e.converter,sg(e._query,n))}_parse(e){const n=hf(e.firestore);return(function(u,f,m,p,y,E,R){let S;if(y.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new ae($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){CT(R,E);const K=[];for(const ne of R)K.push(IT(p,u,ne));S={arrayValue:{values:K}}}else S=IT(p,u,R)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||CT(R,E),S=eO(m,f,R,E==="in"||E==="not-in");return St.create(y,E,S)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Yr(r,e,n){const s=e,o=df("where",r);return mf._create(o,s,n)}class _p extends yp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new _p(e,n)}_parse(e){const n=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return n.length===1?n[0]:si.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(o,u){let f=o;const m=u.getFlattenedFilters();for(const p of m)vA(f,p),f=sg(f,p)})(e._query,n),new ps(e.firestore,e.converter,sg(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class vp extends _A{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new vp(e,n)}_apply(e){const n=(function(o,u,f){if(o.startAt!==null)throw new ae($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ae($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Eu(u,f)})(e._query,this._field,this._direction);return new ps(e.firestore,e.converter,(function(o,u){const f=o.explicitOrderBy.concat([u]);return new Uo(o.path,o.collectionGroup,f,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,n))}}function iO(r,e="asc"){const n=e,s=df("orderBy",r);return vp._create(s,n)}function IT(r,e,n){if(typeof(n=Ze(n))=="string"){if(n==="")throw new ae($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!pw(e)&&n.indexOf("/")!==-1)throw new ae($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(rt.fromString(n));if(!de.isDocumentKey(s))throw new ae($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return FE(r,new de(s))}if(n instanceof dt)return FE(r,n._key);throw new ae($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Kh(n)}.`)}function CT(r,e){if(!Array.isArray(r)||r.length===0)throw new ae($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function vA(r,e){const n=(function(o,u){for(const f of o)for(const m of f.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new ae($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ae($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class rO{convertValue(e,n="none"){switch(os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _t(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(as(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ve(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return ms(e,((o,u)=>{s[o]=this.convertValue(u,n)})),s}convertVectorValue(e){const n=e.fields?.[Ch].arrayValue?.values?.map((s=>_t(s.doubleValue)));return new Ni(n)}convertGeoPoint(e){return new Ci(_t(e.latitude),_t(e.longitude))}convertArray(e,n){return(e.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Xh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(yu(e));default:return null}}convertTimestamp(e){const n=ss(e);return new st(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=rt.fromString(e);He(jw(s),9688,{name:e});const o=new _u(s.get(1),s.get(3)),u=new de(s.popFirst(5));return o.isEqual(n)||mr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
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
 */function EA(r,e,n){let s;return s=r?r.toFirestore(e):e,s}class ru{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sa extends pA{constructor(e,n,s,o,u,f){super(e,n,s,o,f),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new yh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(df("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ae($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=sa._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}sa._jsonSchemaVersion="firestore/documentSnapshot/1.0",sa._jsonSchema={type:Rt("string",sa._jsonSchemaVersion),bundleSource:Rt("string","DocumentSnapshot"),bundleName:Rt("string"),bundle:Rt("string")};class yh extends sa{data(e={}){return super.data(e)}}class aa{constructor(e,n,s,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new ru(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new yh(this._firestore,this._userDataWriter,s.key,s,new ru(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ae($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map((m=>{const p=new yh(o._firestore,o._userDataWriter,m.doc.key,m.doc,new ru(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:f++}}))}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const p=new yh(o._firestore,o._userDataWriter,m.doc.key,m.doc,new ru(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return m.type!==0&&(y=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),E=f.indexOf(m.doc.key)),{type:sO(m.type),doc:p,oldIndex:y,newIndex:E}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ae($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=aa._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ug.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(n.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function sO(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve(61501,{type:r})}}/**
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
 */function ta(r){r=Nn(r,dt);const e=Nn(r.firestore,cs);return HD(lf(e),r._key).then((n=>TA(e,r,n)))}aa._jsonSchemaVersion="firestore/querySnapshot/1.0",aa._jsonSchema={type:Rt("string",aa._jsonSchemaVersion),bundleSource:Rt("string","QuerySnapshot"),bundleName:Rt("string"),bundle:Rt("string")};class Ep extends rO{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new dt(this.firestore,null,n)}}function co(r){r=Nn(r,ps);const e=Nn(r.firestore,cs),n=lf(e),s=new Ep(e);return yA(r._query),GD(n,r._query).then((o=>new aa(e,s,r,o)))}function NT(r,e,n){r=Nn(r,dt);const s=Nn(r.firestore,cs),o=EA(r.converter,e);return Tp(s,[hA(hf(s),"setDoc",r._key,o,r.converter!==null,n).toMutation(r._key,ii.none())])}function hn(r,e,n,...s){r=Nn(r,dt);const o=Nn(r.firestore,cs),u=hf(o);let f;return f=typeof(e=Ze(e))=="string"||e instanceof uf?JD(u,"updateDoc",r._key,e,n,s):ZD(u,"updateDoc",r._key,e),Tp(o,[f.toMutation(r._key,ii.exists(!0))])}function jm(r,e){const n=Nn(r.firestore,cs),s=it(r),o=EA(r.converter,e);return Tp(n,[hA(hf(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,ii.exists(!1))]).then((()=>s))}function DT(r,...e){r=Ze(r);let n={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||RT(e[s])||(n=e[s++]);const o={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(RT(e[s])){const p=e[s];e[s]=p.next?.bind(p),e[s+1]=p.error?.bind(p),e[s+2]=p.complete?.bind(p)}let u,f,m;if(r instanceof dt)f=Nn(r.firestore,cs),m=Wh(r._key.path),u={next:p=>{e[s]&&e[s](TA(f,r,p))},error:e[s+1],complete:e[s+2]};else{const p=Nn(r,ps);f=Nn(p.firestore,cs),m=p._query;const y=new Ep(f);u={next:E=>{e[s]&&e[s](new aa(f,y,p,E))},error:e[s+1],complete:e[s+2]},yA(r._query)}return(function(y,E,R,S){const B=new hp(S),K=new lp(E,B,R);return y.asyncQueue.enqueueAndForget((async()=>sp(await Vh(y),K))),()=>{B.Nu(),y.asyncQueue.enqueueAndForget((async()=>ap(await Vh(y),K)))}})(lf(f),m,o,u)}function Tp(r,e){return(function(s,o){const u=new hr;return s.asyncQueue.enqueueAndForget((async()=>xD(await FD(s),o,u))),u.promise})(lf(r),e)}function TA(r,e,n){const s=n.docs.get(e._key),o=new Ep(r);return new sa(r,o,e._key,s,new ru(n.hasPendingWrites,n.fromCache),e.converter)}function ar(){return new fp("serverTimestamp")}function oh(...r){return new dp("arrayUnion",r)}function OT(...r){return new mp("arrayRemove",r)}(function(e,n=!0){(function(o){Vo=o})(Po),ri(new Gn("firestore",((s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new cs(new JC(s.getProvider("auth-internal")),new nN(f,s.getProvider("app-check-internal")),(function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ae($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _u(y.options.projectId,E)})(f,o),f);return u={useFetchStreams:n,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),gn(DE,OE,e),gn(DE,OE,"esm2020")})();/**
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
 */const aO="type.googleapis.com/google.protobuf.Int64Value",oO="type.googleapis.com/google.protobuf.UInt64Value";function wA(r,e){const n={};for(const s in r)r.hasOwnProperty(s)&&(n[s]=e(r[s]));return n}function Lh(r){if(r==null)return null;if(r instanceof Number&&(r=r.valueOf()),typeof r=="number"&&isFinite(r)||r===!0||r===!1||Object.prototype.toString.call(r)==="[object String]")return r;if(r instanceof Date)return r.toISOString();if(Array.isArray(r))return r.map(e=>Lh(e));if(typeof r=="function"||typeof r=="object")return wA(r,e=>Lh(e));throw new Error("Data cannot be encoded in JSON: "+r)}function Oo(r){if(r==null)return r;if(r["@type"])switch(r["@type"]){case aO:case oO:{const e=Number(r.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+r);return e}default:throw new Error("Data cannot be decoded from JSON: "+r)}return Array.isArray(r)?r.map(e=>Oo(e)):typeof r=="function"||typeof r=="object"?wA(r,e=>Oo(e)):r}/**
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
 */const wp="functions";/**
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
 */const xT={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class mn extends Kn{constructor(e,n,s){super(`${wp}/${e}`,n||""),this.details=s,Object.setPrototypeOf(this,mn.prototype)}}function lO(r){if(r>=200&&r<300)return"ok";switch(r){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Uh(r,e){let n=lO(r),s=n,o;try{const u=e&&e.error;if(u){const f=u.status;if(typeof f=="string"){if(!xT[f])return new mn("internal","internal");n=xT[f],s=f}const m=u.message;typeof m=="string"&&(s=m),o=u.details,o!==void 0&&(o=Oo(o))}}catch{}return n==="ok"?null:new mn(n,s,o)}/**
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
 */class uO{constructor(e,n,s,o){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,Rn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=s.getImmediate({optional:!0}),this.auth||n.get().then(u=>this.auth=u,()=>{}),this.messaging||s.get().then(u=>this.messaging=u,()=>{}),this.appCheck||o?.get().then(u=>this.appCheck=u,()=>{})}async getAuthToken(){if(this.auth)try{return(await this.auth.getToken())?.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),s=await this.getMessagingToken(),o=await this.getAppCheckToken(e);return{authToken:n,messagingToken:s,appCheckToken:o}}}/**
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
 */const yg="us-central1",cO=/^data: (.*?)(?:\n|$)/;function hO(r){let e=null;return{promise:new Promise((n,s)=>{e=setTimeout(()=>{s(new mn("deadline-exceeded","deadline-exceeded"))},r)}),cancel:()=>{e&&clearTimeout(e)}}}class fO{constructor(e,n,s,o,u=yg,f=(...m)=>fetch(...m)){this.app=e,this.fetchImpl=f,this.emulatorOrigin=null,this.contextProvider=new uO(e,n,s,o),this.cancelAllRequests=new Promise(m=>{this.deleteService=()=>Promise.resolve(m())});try{const m=new URL(u);this.customDomain=m.origin+(m.pathname==="/"?"":m.pathname),this.region=yg}catch{this.customDomain=null,this.region=u}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function dO(r,e,n){const s=hs(e);r.emulatorOrigin=`http${s?"s":""}://${e}:${n}`,s&&(Eg(r.emulatorOrigin+"/backends"),Tg("Functions",!0))}function mO(r,e,n){const s=o=>pO(r,e,o,{});return s.stream=(o,u)=>_O(r,e,o,u),s}function AA(r){return r.emulatorOrigin&&hs(r.emulatorOrigin)?"include":void 0}async function gO(r,e,n,s,o){n["Content-Type"]="application/json";let u;try{u=await s(r,{method:"POST",body:JSON.stringify(e),headers:n,credentials:AA(o)})}catch{return{status:0,json:null}}let f=null;try{f=await u.json()}catch{}return{status:u.status,json:f}}async function bA(r,e){const n={},s=await r.contextProvider.getContext(e.limitedUseAppCheckTokens);return s.authToken&&(n.Authorization="Bearer "+s.authToken),s.messagingToken&&(n["Firebase-Instance-ID-Token"]=s.messagingToken),s.appCheckToken!==null&&(n["X-Firebase-AppCheck"]=s.appCheckToken),n}function pO(r,e,n,s){const o=r._url(e);return yO(r,o,n,s)}async function yO(r,e,n,s){n=Lh(n);const o={data:n},u=await bA(r,s),f=s.timeout||7e4,m=hO(f),p=await Promise.race([gO(e,o,u,r.fetchImpl,r),m.promise,r.cancelAllRequests]);if(m.cancel(),!p)throw new mn("cancelled","Firebase Functions instance was deleted.");const y=Uh(p.status,p.json);if(y)throw y;if(!p.json)throw new mn("internal","Response is not valid JSON object.");let E=p.json.data;if(typeof E>"u"&&(E=p.json.result),typeof E>"u")throw new mn("internal","Response is missing data field.");return{data:Oo(E)}}function _O(r,e,n,s){const o=r._url(e);return vO(r,o,n,s||{})}async function vO(r,e,n,s){n=Lh(n);const o={data:n},u=await bA(r,s);u["Content-Type"]="application/json",u.Accept="text/event-stream";let f;try{f=await r.fetchImpl(e,{method:"POST",body:JSON.stringify(o),headers:u,signal:s?.signal,credentials:AA(r)})}catch(S){if(S instanceof Error&&S.name==="AbortError"){const K=new mn("cancelled","Request was cancelled.");return{data:Promise.reject(K),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(K)}}}}}}const B=Uh(0,null);return{data:Promise.reject(B),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(B)}}}}}}let m,p;const y=new Promise((S,B)=>{m=S,p=B});s?.signal?.addEventListener("abort",()=>{const S=new mn("cancelled","Request was cancelled.");p(S)});const E=f.body.getReader(),R=EO(E,m,p,s?.signal);return{stream:{[Symbol.asyncIterator](){const S=R.getReader();return{async next(){const{value:B,done:K}=await S.read();return{value:B,done:K}},async return(){return await S.cancel(),{done:!0,value:void 0}}}}},data:y}}function EO(r,e,n,s){const o=(f,m)=>{const p=f.match(cO);if(!p)return;const y=p[1];try{const E=JSON.parse(y);if("result"in E){e(Oo(E.result));return}if("message"in E){m.enqueue(Oo(E.message));return}if("error"in E){const R=Uh(0,E);m.error(R),n(R);return}}catch(E){if(E instanceof mn){m.error(E),n(E);return}}},u=new TextDecoder;return new ReadableStream({start(f){let m="";return p();async function p(){if(s?.aborted){const y=new mn("cancelled","Request was cancelled");return f.error(y),n(y),Promise.resolve()}try{const{value:y,done:E}=await r.read();if(E){m.trim()&&o(m.trim(),f),f.close();return}if(s?.aborted){const S=new mn("cancelled","Request was cancelled");f.error(S),n(S),await r.cancel();return}m+=u.decode(y,{stream:!0});const R=m.split(`
`);m=R.pop()||"";for(const S of R)S.trim()&&o(S.trim(),f);return p()}catch(y){const E=y instanceof mn?y:Uh(0,null);f.error(E),n(E)}}},cancel(){return r.cancel()}})}const PT="@firebase/functions",MT="0.13.1";/**
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
 */const TO="auth-internal",wO="app-check-internal",AO="messaging-internal";function bO(r){const e=(n,{instanceIdentifier:s})=>{const o=n.getProvider("app").getImmediate(),u=n.getProvider(TO),f=n.getProvider(AO),m=n.getProvider(wO);return new fO(o,u,f,m,s)};ri(new Gn(wp,e,"PUBLIC").setMultipleInstances(!0)),gn(PT,MT,r),gn(PT,MT,"esm2020")}/**
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
 */function SO(r=Fh(),e=yg){const s=fs(Ze(r),wp).getImmediate({identifier:e}),o=QT("functions");return o&&RO(s,...o),s}function RO(r,e,n){dO(Ze(r),e,n)}function or(r,e,n){return mO(Ze(r),e)}bO();const SA="@firebase/installations",Ap="0.6.19";/**
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
 */const RA=1e4,IA=`w:${Ap}`,CA="FIS_v2",IO="https://firebaseinstallations.googleapis.com/v1",CO=3600*1e3,NO="installations",DO="Installations";/**
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
 */const OO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ha=new da(NO,DO,OO);function NA(r){return r instanceof Kn&&r.code.includes("request-failed")}/**
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
 */function DA({projectId:r}){return`${IO}/projects/${r}/installations`}function OA(r){return{token:r.token,requestStatus:2,expiresIn:PO(r.expiresIn),creationTime:Date.now()}}async function xA(r,e){const s=(await e.json()).error;return ha.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function PA({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function xO(r,{refreshToken:e}){const n=PA(r);return n.append("Authorization",MO(e)),n}async function MA(r){const e=await r();return e.status>=500&&e.status<600?r():e}function PO(r){return Number(r.replace("s","000"))}function MO(r){return`${CA} ${r}`}/**
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
 */async function VO({appConfig:r,heartbeatServiceProvider:e},{fid:n}){const s=DA(r),o=PA(r),u=e.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={fid:n,authVersion:CA,appId:r.appId,sdkVersion:IA},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await MA(()=>fetch(s,m));if(p.ok){const y=await p.json();return{fid:y.fid||n,registrationStatus:2,refreshToken:y.refreshToken,authToken:OA(y.authToken)}}else throw await xA("Create Installation",p)}/**
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
 */function VA(r){return new Promise(e=>{setTimeout(e,r)})}/**
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
 */function kO(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const LO=/^[cdef][\w-]{21}$/,_g="";function UO(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=jO(r);return LO.test(n)?n:_g}catch{return _g}}function jO(r){return kO(r).substr(0,22)}/**
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
 */function gf(r){return`${r.appName}!${r.appId}`}/**
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
 */const kA=new Map;function LA(r,e){const n=gf(r);UA(n,e),zO(n,e)}function UA(r,e){const n=kA.get(r);if(n)for(const s of n)s(e)}function zO(r,e){const n=BO();n&&n.postMessage({key:r,fid:e}),qO()}let ia=null;function BO(){return!ia&&"BroadcastChannel"in self&&(ia=new BroadcastChannel("[Firebase] FID Change"),ia.onmessage=r=>{UA(r.data.key,r.data.fid)}),ia}function qO(){kA.size===0&&ia&&(ia.close(),ia=null)}/**
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
 */const FO="firebase-installations-database",HO=1,fa="firebase-installations-store";let zm=null;function bp(){return zm||(zm=n0(FO,HO,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(fa)}}})),zm}async function jh(r,e){const n=gf(r),o=(await bp()).transaction(fa,"readwrite"),u=o.objectStore(fa),f=await u.get(n);return await u.put(e,n),await o.done,(!f||f.fid!==e.fid)&&LA(r,e.fid),e}async function jA(r){const e=gf(r),s=(await bp()).transaction(fa,"readwrite");await s.objectStore(fa).delete(e),await s.done}async function pf(r,e){const n=gf(r),o=(await bp()).transaction(fa,"readwrite"),u=o.objectStore(fa),f=await u.get(n),m=e(f);return m===void 0?await u.delete(n):await u.put(m,n),await o.done,m&&(!f||f.fid!==m.fid)&&LA(r,m.fid),m}/**
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
 */async function Sp(r){let e;const n=await pf(r.appConfig,s=>{const o=GO(s),u=YO(r,o);return e=u.registrationPromise,u.installationEntry});return n.fid===_g?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function GO(r){const e=r||{fid:UO(),registrationStatus:0};return zA(e)}function YO(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(ha.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=KO(r,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:QO(r)}:{installationEntry:e}}async function KO(r,e){try{const n=await VO(r,e);return jh(r.appConfig,n)}catch(n){throw NA(n)&&n.customData.serverCode===409?await jA(r.appConfig):await jh(r.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function QO(r){let e=await VT(r.appConfig);for(;e.registrationStatus===1;)await VA(100),e=await VT(r.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Sp(r);return s||n}return e}function VT(r){return pf(r,e=>{if(!e)throw ha.create("installation-not-found");return zA(e)})}function zA(r){return $O(r)?{fid:r.fid,registrationStatus:0}:r}function $O(r){return r.registrationStatus===1&&r.registrationTime+RA<Date.now()}/**
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
 */async function XO({appConfig:r,heartbeatServiceProvider:e},n){const s=WO(r,n),o=xO(r,n),u=e.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={installation:{sdkVersion:IA,appId:r.appId}},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await MA(()=>fetch(s,m));if(p.ok){const y=await p.json();return OA(y)}else throw await xA("Generate Auth Token",p)}function WO(r,{fid:e}){return`${DA(r)}/${e}/authTokens:generate`}/**
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
 */async function Rp(r,e=!1){let n;const s=await pf(r.appConfig,u=>{if(!BA(u))throw ha.create("not-registered");const f=u.authToken;if(!e&&ex(f))return u;if(f.requestStatus===1)return n=ZO(r,e),u;{if(!navigator.onLine)throw ha.create("app-offline");const m=nx(u);return n=JO(r,m),m}});return n?await n:s.authToken}async function ZO(r,e){let n=await kT(r.appConfig);for(;n.authToken.requestStatus===1;)await VA(100),n=await kT(r.appConfig);const s=n.authToken;return s.requestStatus===0?Rp(r,e):s}function kT(r){return pf(r,e=>{if(!BA(e))throw ha.create("not-registered");const n=e.authToken;return ix(n)?{...e,authToken:{requestStatus:0}}:e})}async function JO(r,e){try{const n=await XO(r,e),s={...e,authToken:n};return await jh(r.appConfig,s),n}catch(n){if(NA(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await jA(r.appConfig);else{const s={...e,authToken:{requestStatus:0}};await jh(r.appConfig,s)}throw n}}function BA(r){return r!==void 0&&r.registrationStatus===2}function ex(r){return r.requestStatus===2&&!tx(r)}function tx(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+CO}function nx(r){const e={requestStatus:1,requestTime:Date.now()};return{...r,authToken:e}}function ix(r){return r.requestStatus===1&&r.requestTime+RA<Date.now()}/**
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
 */async function rx(r){const e=r,{installationEntry:n,registrationPromise:s}=await Sp(e);return s?s.catch(console.error):Rp(e).catch(console.error),n.fid}/**
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
 */async function sx(r,e=!1){const n=r;return await ax(n),(await Rp(n,e)).token}async function ax(r){const{registrationPromise:e}=await Sp(r);e&&await e}/**
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
 */function ox(r){if(!r||!r.options)throw Bm("App Configuration");if(!r.name)throw Bm("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!r.options[n])throw Bm(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Bm(r){return ha.create("missing-app-config-values",{valueName:r})}/**
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
 */const qA="installations",lx="installations-internal",ux=r=>{const e=r.getProvider("app").getImmediate(),n=ox(e),s=fs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},cx=r=>{const e=r.getProvider("app").getImmediate(),n=fs(e,qA).getImmediate();return{getId:()=>rx(n),getToken:o=>sx(n,o)}};function hx(){ri(new Gn(qA,ux,"PUBLIC")),ri(new Gn(lx,cx,"PRIVATE"))}hx();gn(SA,Ap);gn(SA,Ap,"esm2020");/**
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
 */const zh="analytics",fx="firebase_id",dx="origin",mx=60*1e3,gx="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ip="https://www.googletagmanager.com/gtag/js";/**
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
 */const pn=new qh("@firebase/analytics");/**
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
 */const px={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Dn=new da("analytics","Analytics",px);/**
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
 */function yx(r){if(!r.startsWith(Ip)){const e=Dn.create("invalid-gtag-resource",{gtagURL:r});return pn.warn(e.message),""}return r}function FA(r){return Promise.all(r.map(e=>e.catch(n=>n)))}function _x(r,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,e)),n}function vx(r,e){const n=_x("firebase-js-sdk-policy",{createScriptURL:yx}),s=document.createElement("script"),o=`${Ip}?l=${r}&id=${e}`;s.src=n?n?.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function Ex(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function Tx(r,e,n,s,o,u){const f=s[o];try{if(f)await e[f];else{const p=(await FA(n)).find(y=>y.measurementId===o);p&&await e[p.appId]}}catch(m){pn.error(m)}r("config",o,u)}async function wx(r,e,n,s,o){try{let u=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const m=await FA(n);for(const p of f){const y=m.find(R=>R.measurementId===p),E=y&&e[y.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),r("event",s,o||{})}catch(u){pn.error(u)}}function Ax(r,e,n,s){async function o(u,...f){try{if(u==="event"){const[m,p]=f;await wx(r,e,n,m,p)}else if(u==="config"){const[m,p]=f;await Tx(r,e,n,s,m,p)}else if(u==="consent"){const[m,p]=f;r("consent",m,p)}else if(u==="get"){const[m,p,y]=f;r("get",m,p,y)}else if(u==="set"){const[m]=f;r("set",m)}else r(u,...f)}catch(m){pn.error(m)}}return o}function bx(r,e,n,s,o){let u=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=Ax(u,r,e,n),{gtagCore:u,wrappedGtag:window[o]}}function Sx(r){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ip)&&n.src.includes(r))return n;return null}/**
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
 */const Rx=30,Ix=1e3;class Cx{constructor(e={},n=Ix){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const HA=new Cx;function Nx(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function Dx(r){const{appId:e,apiKey:n}=r,s={method:"GET",headers:Nx(n)},o=gx.replace("{app-id}",e),u=await fetch(o,s);if(u.status!==200&&u.status!==304){let f="";try{const m=await u.json();m.error?.message&&(f=m.error.message)}catch{}throw Dn.create("config-fetch-failed",{httpStatus:u.status,responseMessage:f})}return u.json()}async function Ox(r,e=HA,n){const{appId:s,apiKey:o,measurementId:u}=r.options;if(!s)throw Dn.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw Dn.create("no-api-key")}const f=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new Mx;return setTimeout(async()=>{m.abort()},mx),GA({appId:s,apiKey:o,measurementId:u},f,m,e)}async function GA(r,{throttleEndTimeMillis:e,backoffCount:n},s,o=HA){const{appId:u,measurementId:f}=r;try{await xx(s,e)}catch(m){if(f)return pn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${m?.message}]`),{appId:u,measurementId:f};throw m}try{const m=await Dx(r);return o.deleteThrottleMetadata(u),m}catch(m){const p=m;if(!Px(p)){if(o.deleteThrottleMetadata(u),f)return pn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${p?.message}]`),{appId:u,measurementId:f};throw m}const y=Number(p?.customData?.httpStatus)===503?Wv(n,o.intervalMillis,Rx):Wv(n,o.intervalMillis),E={throttleEndTimeMillis:Date.now()+y,backoffCount:n+1};return o.setThrottleMetadata(u,E),pn.debug(`Calling attemptFetch again in ${y} millis`),GA(r,E,s,o)}}function xx(r,e){return new Promise((n,s)=>{const o=Math.max(e-Date.now(),0),u=setTimeout(n,o);r.addEventListener(()=>{clearTimeout(u),s(Dn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Px(r){if(!(r instanceof Kn)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class Mx{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Vx(r,e,n,s,o){if(o&&o.global){r("event",n,s);return}else{const u=await e,f={...s,send_to:u};r("event",n,f)}}/**
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
 */async function kx(){if(ZT())try{await JT()}catch(r){return pn.warn(Dn.create("indexeddb-unavailable",{errorInfo:r?.toString()}).message),!1}else return pn.warn(Dn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Lx(r,e,n,s,o,u,f){const m=Ox(r);m.then(S=>{n[S.measurementId]=S.appId,r.options.measurementId&&S.measurementId!==r.options.measurementId&&pn.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${S.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(S=>pn.error(S)),e.push(m);const p=kx().then(S=>{if(S)return s.getId()}),[y,E]=await Promise.all([m,p]);Sx(u)||vx(u,y.measurementId),o("js",new Date);const R=f?.config??{};return R[dx]="firebase",R.update=!0,E!=null&&(R[fx]=E),o("config",y.measurementId,R),y.measurementId}/**
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
 */class Ux{constructor(e){this.app=e}_delete(){return delete du[this.app.options.appId],Promise.resolve()}}let du={},LT=[];const UT={};let qm="dataLayer",jx="gtag",jT,YA,zT=!1;function zx(){const r=[];if(WT()&&r.push("This is a browser extension environment."),GS()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=Dn.create("invalid-analytics-context",{errorInfo:e});pn.warn(n.message)}}function Bx(r,e,n){zx();const s=r.options.appId;if(!s)throw Dn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)pn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Dn.create("no-api-key");if(du[s]!=null)throw Dn.create("already-exists",{id:s});if(!zT){Ex(qm);const{wrappedGtag:u,gtagCore:f}=bx(du,LT,UT,qm,jx);YA=u,jT=f,zT=!0}return du[s]=Lx(r,LT,UT,e,jT,qm,n),new Ux(r)}function qx(r=Fh()){r=Ze(r);const e=fs(r,zh);return e.isInitialized()?e.getImmediate():Fx(r)}function Fx(r,e={}){const n=fs(r,zh);if(n.isInitialized()){const o=n.getImmediate();if(Di(e,n.getOptions()))return o;throw Dn.create("already-initialized")}return n.initialize({options:e})}function Hx(r,e,n,s){r=Ze(r),Vx(YA,du[r.app.options.appId],e,n,s).catch(o=>pn.error(o))}const BT="@firebase/analytics",qT="0.10.18";function Gx(){ri(new Gn(zh,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return Bx(s,o,n)},"PUBLIC")),ri(new Gn("analytics-internal",r,"PRIVATE")),gn(BT,qT),gn(BT,qT,"esm2020");function r(e){try{const n=e.getProvider(zh).getImmediate();return{logEvent:(s,o,u)=>Hx(n,s,o,u)}}catch(n){throw Dn.create("interop-component-reg-failed",{reason:n})}}}Gx();const Yx={apiKey:"",authDomain:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:"",measurementId:""},yf=i0(Yx),sr=KC(yf),ze=KD(yf),lr=SO(yf);typeof window<"u"&&qx(yf);class Kx{currentUser=null;recaptchaVerifier=null;constructor(){Wm(sr,e=>{this.currentUser=e,e&&this.updateLastLogin(e.uid)})}async signUp(e,n,s,o,u){try{const m=(await y1(sr,e,n)).user;await T1(m,{displayName:s}),await v1(m);const p={uid:m.uid,email:m.email,displayName:s,age:o,gender:u,createdAt:ar(),lastLogin:ar(),emailVerified:!1,twoFactorEnabled:!1,activeInnermosts:[],subscriptionStatus:"free"};return await NT(it(ze,"users",m.uid),p),p}catch(f){throw{code:f.code,message:f.message}}}async signIn(e,n){try{const o=(await _1(sr,e,n)).user,u=await ta(it(ze,"users",o.uid));if(!u.exists()){const m={uid:o.uid,email:o.email,displayName:o.displayName||o.email.split("@")[0],createdAt:ar(),lastLogin:ar(),emailVerified:o.emailVerified,twoFactorEnabled:!1,activeInnermosts:[],subscriptionStatus:"free"};return await NT(it(ze,"users",o.uid),m),m}const f=u.data();return f.twoFactorEnabled&&_E(o).enrolledFactors.length>0&&console.log("2FA verification required"),f}catch(s){throw{code:s.code,message:s.message}}}async signOutUser(){try{await b1(sr),this.currentUser=null}catch(e){throw new Error(`Logout failed: ${e.message}`)}}async resetPassword(e){try{await p1(sr,e)}catch(n){throw{code:n.code,message:n.message}}}getCurrentUser(){return this.currentUser}async getUserProfile(e){try{const n=await ta(it(ze,"users",e));return n.exists()?n.data():null}catch(n){return console.error("Error fetching user profile:",n),null}}async updateLastLogin(e){try{await hn(it(ze,"users",e),{lastLogin:ar()})}catch(n){console.error("Error updating last login:",n)}}async setupTwoFactor(e){if(!this.currentUser)throw new Error("No user logged in");try{this.recaptchaVerifier||(this.recaptchaVerifier=new Q1(sr,"recaptcha-container",{size:"invisible"}));const s=await new es(sr).verifyPhoneNumber(e,this.recaptchaVerifier);sessionStorage.setItem("verificationId",s);return}catch(n){throw new Error(`2FA setup failed: ${n.message}`)}}async verifyTwoFactorCode(e){if(!this.currentUser)throw new Error("No user logged in");try{const n=sessionStorage.getItem("verificationId");if(!n)throw new Error("No verification in progress");const s=es.credential(n,e),o=F0.assertion(s);await _E(this.currentUser).enroll(o,"Phone Number"),await hn(it(ze,"users",this.currentUser.uid),{twoFactorEnabled:!0}),sessionStorage.removeItem("verificationId")}catch(n){throw new Error(`2FA verification failed: ${n.message}`)}}isAuthenticated(){return this.currentUser!==null}async waitForAuth(){return new Promise(e=>{const n=Wm(sr,s=>{n(),e(s)})})}}const ei=new Kx;class Qx{async createMutualPairing(e,n,s){try{const o=await ta(it(ze,"users",e)),u=await ta(it(ze,"users",n));if(!o.exists()||!u.exists())throw new Error("One or both users not found");const f=o.data(),m=u.data(),p={partnerA:e,partnerB:n,partnerAEmail:f.email,partnerBEmail:m.email,status:"active",pairingCode:s,createdAt:ar()},y=await jm(rr(ze,"innermosts"),p);return await hn(it(ze,"users",e),{activeInnermosts:oh(y.id)}),await hn(it(ze,"users",n),{activeInnermosts:oh(y.id)}),await this.createWillingBox(y.id,e,n),{...p,id:y.id}}catch(o){throw new Error(`Failed to create mutual pairing: ${o.message}`)}}async breakPartnership(e,n){try{const s=await ta(it(ze,"innermosts",e));if(!s.exists())throw new Error("Partnership not found");const o=s.data();if(o.partnerA!==n&&o.partnerB!==n)throw new Error("You are not part of this partnership");await hn(it(ze,"innermosts",e),{status:"ended",endedAt:ar(),endedBy:n}),await hn(it(ze,"users",o.partnerA),{activeInnermosts:OT(e)}),await hn(it(ze,"users",o.partnerB),{activeInnermosts:OT(e)})}catch(s){throw new Error(`Failed to break partnership: ${s.message}`)}}async findUserByEmail(e){try{const n=uo(rr(ze,"users"),Yr("email","==",e)),s=await co(n);if(s.empty)return null;const o=s.docs[0];return{id:o.id,...o.data()}}catch(n){return console.error("Error finding user:",n),null}}async createInnermost(e,n,s){try{const o=this.generatePairingCode(),u={partnerA:e,partnerB:"",partnerAEmail:s,partnerBEmail:n,status:"pending",pairingCode:o,createdAt:ar()},f=await jm(rr(ze,"innermosts"),u);return await hn(it(ze,"users",e),{activeInnermosts:oh(f.id)}),{...u,id:f.id}}catch(o){throw new Error(`Failed to create Innermost: ${o.message}`)}}async acceptInnermost(e,n){try{const s=uo(rr(ze,"innermosts"),Yr("pairingCode","==",e),Yr("status","==","pending")),o=await co(s);if(o.empty)throw new Error("Invalid or expired pairing code");const u=o.docs[0],f=u.data();return await hn(it(ze,"innermosts",u.id),{partnerB:n,status:"active",pairingCode:null}),await hn(it(ze,"users",n),{activeInnermosts:oh(u.id)}),await this.createWillingBox(u.id,f.partnerA,n),{...f,id:u.id,partnerB:n,status:"active"}}catch(s){throw new Error(`Failed to accept Innermost: ${s.message}`)}}async getUserInnermosts(e){try{const n=uo(rr(ze,"innermosts"),Yr("partnerA","==",e)),s=uo(rr(ze,"innermosts"),Yr("partnerB","==",e)),[o,u]=await Promise.all([co(n),co(s)]),f=[];return o.forEach(m=>{f.push({id:m.id,...m.data()})}),u.forEach(m=>{f.push({id:m.id,...m.data()})}),f}catch(n){throw new Error(`Failed to get innermosts: ${n.message}`)}}async createWillingBox(e,n,s){try{const o={innermostId:e,partnerA:n,partnerB:s,partnerAWishList:[],partnerBWishList:[],partnerAWillingList:[],partnerBWillingList:[],weekNumber:this.getCurrentWeekNumber(),status:"planting_trees",isLocked:!1,createdAt:ar()},u=await jm(rr(ze,"willingBoxes"),o);return{...o,id:u.id}}catch(o){throw new Error(`Failed to create WillingBox: ${o.message}`)}}async getCurrentWillingBox(e){try{const n=this.getCurrentWeekNumber(),s=uo(rr(ze,"willingBoxes"),Yr("innermostId","==",e),Yr("weekNumber","==",n)),o=await co(s);if(o.empty)return null;const u=o.docs[0];return{id:u.id,...u.data()}}catch(n){return console.error("Failed to get WillingBox:",n),null}}async updateWishList(e,n,s,o){try{const u=o?{partnerAWishList:s}:{partnerBWishList:s};await hn(it(ze,"willingBoxes",e),u);const m=(await ta(it(ze,"willingBoxes",e))).data();m.partnerAWishList.length===12&&m.partnerBWishList.length===12&&await hn(it(ze,"willingBoxes",e),{status:"selecting_willing"})}catch(u){throw new Error(`Failed to update WishList: ${u.message}`)}}async updateWillingList(e,n,s,o){try{const u=o?{partnerAWillingList:s}:{partnerBWillingList:s};await hn(it(ze,"willingBoxes",e),u);const m=(await ta(it(ze,"willingBoxes",e))).data();m.partnerAWillingList.length===3&&m.partnerBWillingList.length===3&&await hn(it(ze,"willingBoxes",e),{status:"guessing"})}catch(u){throw new Error(`Failed to update WillingList: ${u.message}`)}}subscribeToWillingBox(e,n){return DT(it(ze,"willingBoxes",e),s=>{s.exists()&&n({id:s.id,...s.data()})})}subscribeToInnermost(e,n){return DT(it(ze,"innermosts",e),s=>{s.exists()&&n({id:s.id,...s.data()})})}generatePairingCode(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";let n="";for(let s=0;s<6;s++)n+=e.charAt(Math.floor(Math.random()*e.length));return n}getCurrentWeekNumber(){const e=new Date,n=new Date(e.getFullYear(),0,1),s=e.getTime()-n.getTime(),o=1e3*60*60*24*7;return Math.floor(s/o)+1}async getInnermostHistory(e){try{const n=uo(rr(ze,"willingBoxes"),Yr("innermostId","==",e),iO("weekNumber","desc")),s=await co(n),o=[];return s.forEach(u=>{o.push({id:u.id,...u.data()})}),o}catch(n){throw new Error(`Failed to get history: ${n.message}`)}}}const ti=new Qx;class $x{async sendPairingInvite(e){try{const n=or(lr,"sendPairingInvite"),s={toEmail:e.toEmail,fromName:e.fromName,pairingCode:e.pairingCode,message:e.message||"",appUrl:window.location.origin};if(!(await n(s)).data.success)throw new Error("Failed to send invitation email")}catch(n){throw console.error("Email send error:",n),new Error(`Failed to send invitation: ${n.message}`)}}async sendWeeklyReminder(e,n){try{await or(lr,"sendWeeklyReminder")({userId:e,partnerName:n,weekNumber:this.getCurrentWeekNumber()})}catch(s){console.error("Reminder send error:",s)}}async sendGuessResults(e,n,s){try{await or(lr,"sendGuessResults")({userId:e,score:n,correctGuesses:s,weekNumber:this.getCurrentWeekNumber()})}catch(o){console.error("Results send error:",o)}}async sendCustomPasswordReset(e){try{await or(lr,"sendCustomPasswordReset")({email:e})}catch(n){throw console.error("Password reset error:",n),new Error(`Failed to send password reset: ${n.message}`)}}async send2FAConfirmation(e){try{await or(lr,"send2FAConfirmation")({userId:e})}catch(n){console.error("2FA confirmation error:",n)}}getCurrentWeekNumber(){const e=new Date,n=new Date(e.getFullYear(),0,1),s=e.getTime()-n.getTime(),o=1e3*60*60*24*7;return Math.floor(s/o)+1}}const Fm=new $x,Xx=({onAuthSuccess:r})=>{const[e,n]=Ve.useState("login"),[s,o]=Ve.useState(""),[u,f]=Ve.useState(""),[m,p]=Ve.useState(""),[y,E]=Ve.useState(""),[R,S]=Ve.useState(""),[B,K]=Ve.useState("male"),[ne,J]=Ve.useState(!1),[ye,ie]=Ve.useState(""),[he,Te]=Ve.useState(""),[me,Oe]=Ve.useState(""),[P,b]=Ve.useState(!1),[C,O]=Ve.useState(""),[x,V]=Ve.useState("");Ve.useEffect(()=>{const ue=new URLSearchParams(window.location.search).get("code");ue&&Oe(ue)},[]),Ve.useEffect(()=>{(async()=>{const ue=await ei.waitForAuth();if(ue){const A=await ei.getUserProfile(ue.uid);A&&r(A)}})()},[r]);const N=async ee=>{if(ee.preventDefault(),u!==m){ie("Passwords do not match");return}if(u.length<6){ie("Password must be at least 6 characters");return}J(!0),ie("");try{const ue=await ei.signUp(s,u,y,parseInt(R),B);if(me)try{await ti.acceptInnermost(me,ue.uid),Te("Account created and pairing accepted! Check your email to verify your account.")}catch{Te("Account created! Check your email to verify your account. Pairing code was invalid.")}else Te("Account created! Check your email to verify your account.");setTimeout(()=>{r(ue)},2e3)}catch(ue){ue.code==="auth/email-already-in-use"||ue.message?.includes("already in use")?(ie("This email is already registered. Please log in instead."),setTimeout(()=>{n("login"),ie(""),Te("Please log in with your existing account.")},2e3)):ue.code==="auth/weak-password"?ie("Password should be at least 6 characters."):ue.code==="auth/invalid-email"?ie("Please enter a valid email address."):ie(ue.message||"Signup failed. Please try again.")}finally{J(!1)}},mt=async ee=>{ee.preventDefault(),J(!0),ie("");try{const ue=await ei.signIn(s,u);if(me&&ue)try{await ti.acceptInnermost(me,ue.uid),Te("Logged in and pairing accepted!")}catch(A){console.log("Could not accept pairing:",A)}r(ue)}catch(ue){ue.message.includes("multi-factor")?(b(!0),ie("Please complete 2FA verification")):ue.code==="auth/user-not-found"||ue.code==="auth/invalid-credential"?ie("Invalid email or password. Please check your credentials."):ue.code==="auth/wrong-password"?ie("Incorrect password. Please try again or reset your password."):ue.code==="auth/too-many-requests"?ie("Too many failed attempts. Please try again later or reset your password."):ue.code==="auth/user-disabled"?ie("This account has been disabled. Please contact support."):ie(ue.message||"Login failed. Please try again.")}finally{J(!1)}},et=async ee=>{ee.preventDefault(),J(!0),ie("");try{await ei.resetPassword(s),Te("Password reset email sent! Check your inbox."),setTimeout(()=>n("login"),3e3)}catch(ue){ie(ue.message||"Password reset failed")}finally{J(!1)}},G=async()=>{if(!C){ie("Please enter your phone number");return}J(!0),ie("");try{await ei.setupTwoFactor(C),Te("Verification code sent to your phone")}catch(ee){ie(ee.message||"2FA setup failed")}finally{J(!1)}},se=async()=>{if(!x){ie("Please enter the verification code");return}J(!0),ie("");try{await ei.verifyTwoFactorCode(x),Te("2FA enabled successfully!"),b(!1);const ee=ei.getCurrentUser();if(ee){const ue=await ei.getUserProfile(ee.uid);ue&&r(ue)}}catch(ee){ie(ee.message||"2FA verification failed")}finally{J(!1)}};return M.jsx("div",{className:"min-h-screen flex items-center justify-center",style:{background:"linear-gradient(135deg, #4a8b4a 0%, #6B5B45 100%)"},children:M.jsxs("div",{className:"bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4",children:[M.jsxs("div",{className:"text-center mb-8",children:[M.jsx("h1",{className:"text-3xl font-bold text-green-800 mb-2",children:"🌳 The Willing Tree"}),M.jsx("p",{className:"text-gray-600",children:"Grow your relationship through caring actions"})]}),me&&M.jsx("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4 mb-6",children:M.jsxs("p",{className:"text-green-800 text-sm",children:[M.jsx("strong",{children:"Pairing Code Detected:"})," ",me,M.jsx("br",{}),e==="signup"?"Sign up to accept the invitation":"Log in to accept the invitation"]})}),ye&&M.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4 mb-6",children:[M.jsx("p",{className:"text-red-800 text-sm font-medium",children:ye}),ye.includes("already registered")&&M.jsx("button",{onClick:()=>{n("login"),ie("")},className:"mt-2 text-red-700 underline text-sm hover:text-red-900",children:"Go to Login →"}),(ye.includes("password")||ye.includes("credentials"))&&e==="login"&&M.jsx("button",{onClick:()=>{n("reset"),ie("")},className:"mt-2 text-red-700 underline text-sm hover:text-red-900",children:"Forgot Password? →"})]}),he&&M.jsx("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4 mb-6",children:M.jsx("p",{className:"text-green-800 text-sm",children:he})}),P?M.jsxs("div",{children:[M.jsx("h2",{className:"text-xl font-semibold text-gray-800 mb-4",children:"Two-Factor Authentication"}),sessionStorage.getItem("verificationId")?M.jsxs("form",{onSubmit:ee=>{ee.preventDefault(),se()},children:[M.jsxs("div",{className:"mb-4",children:[M.jsx("label",{className:"block text-gray-700 text-sm font-medium mb-2",children:"Verification Code"}),M.jsx("input",{type:"text",value:x,onChange:ee=>V(ee.target.value),placeholder:"123456",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",required:!0})]}),M.jsx("button",{type:"submit",disabled:ne,className:"w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors",children:ne?"Verifying...":"Verify Code"})]}):M.jsxs("form",{onSubmit:ee=>{ee.preventDefault(),G()},children:[M.jsxs("div",{className:"mb-4",children:[M.jsx("label",{className:"block text-gray-700 text-sm font-medium mb-2",children:"Phone Number"}),M.jsx("input",{type:"tel",value:C,onChange:ee=>O(ee.target.value),placeholder:"+1234567890",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",required:!0})]}),M.jsx("button",{type:"submit",disabled:ne,className:"w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors",children:ne?"Sending...":"Send Verification Code"})]}),M.jsx("div",{id:"recaptcha-container"})]}):M.jsxs(M.Fragment,{children:[e==="login"&&M.jsxs("form",{onSubmit:mt,children:[M.jsxs("div",{className:"mb-4",children:[M.jsx("label",{className:"block text-gray-700 text-sm font-medium mb-2",children:"Email"}),M.jsx("input",{type:"email",value:s,onChange:ee=>o(ee.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",required:!0})]}),M.jsxs("div",{className:"mb-6",children:[M.jsx("label",{className:"block text-gray-700 text-sm font-medium mb-2",children:"Password"}),M.jsx("input",{type:"password",value:u,onChange:ee=>f(ee.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",required:!0})]}),M.jsx("button",{type:"submit",disabled:ne,className:"w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors",children:ne?"Logging in...":"Log In"}),M.jsxs("div",{className:"mt-4 flex justify-between",children:[M.jsx("button",{type:"button",onClick:()=>n("reset"),className:"text-green-600 hover:text-green-700 text-sm font-medium",children:"Forgot Password?"}),M.jsx("button",{type:"button",onClick:()=>{n("signup"),ie(""),Te("")},className:"text-green-600 hover:text-green-700 text-sm font-medium",children:"Create Account"})]})]}),e==="signup"&&M.jsxs("form",{onSubmit:N,children:[M.jsxs("div",{className:"mb-4",children:[M.jsx("label",{className:"block text-gray-700 text-sm font-medium mb-2",children:"Display Name"}),M.jsx("input",{type:"text",value:y,onChange:ee=>E(ee.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",required:!0})]}),M.jsxs("div",{className:"mb-4",children:[M.jsx("label",{className:"block text-gray-700 text-sm font-medium mb-2",children:"Email"}),M.jsx("input",{type:"email",value:s,onChange:ee=>o(ee.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",required:!0})]}),M.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[M.jsxs("div",{children:[M.jsx("label",{className:"block text-gray-700 text-sm font-medium mb-2",children:"Age"}),M.jsx("input",{type:"number",value:R,onChange:ee=>S(ee.target.value),min:"18",max:"120",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",required:!0})]}),M.jsxs("div",{children:[M.jsx("label",{className:"block text-gray-700 text-sm font-medium mb-2",children:"Gender"}),M.jsxs("select",{value:B,onChange:ee=>K(ee.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",children:[M.jsx("option",{value:"male",children:"Male"}),M.jsx("option",{value:"female",children:"Female"}),M.jsx("option",{value:"other",children:"Other"})]})]})]}),M.jsxs("div",{className:"mb-4",children:[M.jsx("label",{className:"block text-gray-700 text-sm font-medium mb-2",children:"Password"}),M.jsx("input",{type:"password",value:u,onChange:ee=>f(ee.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",required:!0,minLength:6})]}),M.jsxs("div",{className:"mb-6",children:[M.jsx("label",{className:"block text-gray-700 text-sm font-medium mb-2",children:"Confirm Password"}),M.jsx("input",{type:"password",value:m,onChange:ee=>p(ee.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",required:!0})]}),M.jsx("button",{type:"submit",disabled:ne,className:"w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors",children:ne?"Creating Account...":"Sign Up"})]}),e==="reset"&&M.jsxs("form",{onSubmit:et,children:[M.jsxs("div",{className:"mb-6",children:[M.jsx("label",{className:"block text-gray-700 text-sm font-medium mb-2",children:"Email"}),M.jsx("input",{type:"email",value:s,onChange:ee=>o(ee.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",required:!0}),M.jsx("p",{className:"text-sm text-gray-600 mt-2",children:"Enter your email and we'll send you a password reset link."})]}),M.jsx("button",{type:"submit",disabled:ne,className:"w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors",children:ne?"Sending...":"Send Reset Email"})]}),M.jsx("div",{className:"mt-6",children:e==="login"?M.jsxs("div",{className:"text-center border-t pt-6",children:[M.jsx("p",{className:"text-gray-600 mb-3",children:"New to The Willing Tree?"}),M.jsx("button",{onClick:()=>{n("signup"),ie(""),Te("")},className:"w-full bg-gray-100 text-green-700 py-2 px-4 rounded-lg hover:bg-gray-200 font-medium transition-colors",children:"Create Your Account"})]}):e==="signup"?M.jsxs("div",{className:"text-center border-t pt-6",children:[M.jsx("p",{className:"text-gray-600 mb-3",children:"Already have an account?"}),M.jsx("button",{onClick:()=>{n("login"),ie(""),Te("")},className:"w-full bg-gray-100 text-green-700 py-2 px-4 rounded-lg hover:bg-gray-200 font-medium transition-colors",children:"Log In to Your Account"})]}):M.jsx("div",{className:"text-center border-t pt-6",children:M.jsx("button",{onClick:()=>{n("login"),ie(""),Te("")},className:"text-green-600 hover:text-green-700 font-medium",children:"← Back to Login"})})})]})]})})};class Wx{async sendPairingInviteSMS(e){try{const n=or(lr,"sendPairingInviteSMS"),s={toPhone:e.toPhone,fromName:e.fromName,pairingCode:e.pairingCode,message:e.message||"",appUrl:window.location.origin};if(!(await n(s)).data.success)throw new Error("Failed to send SMS invitation")}catch(n){throw console.error("SMS send error:",n),new Error(`Failed to send SMS invitation: ${n.message}`)}}async sendMutualPairingCode(e,n,s){try{await or(lr,"sendMutualPairingCode")({toPhone:e,code:n,partnerName:s})}catch(o){throw console.error("SMS send error:",o),new Error(`Failed to send confirmation code: ${o.message}`)}}async sendWeeklyReminderSMS(e,n,s){try{await or(lr,"sendWeeklyReminderSMS")({toPhone:e,partnerName:n,weekNumber:s})}catch(o){console.error("SMS reminder error:",o)}}async sendGameResultsSMS(e,n,s){try{await or(lr,"sendGameResultsSMS")({toPhone:e,score:n,correctGuesses:s})}catch(o){console.error("SMS results error:",o)}}formatPhoneNumber(e){let n=e.replace(/\D/g,"");return n.length===10&&(n="1"+n),n.startsWith("+")||(n="+"+n),n}isValidPhoneNumber(e){const n=e.replace(/\D/g,"");return n.length===10||n.length===11}}const FT=new Wx;function Zx(){const[r,e]=Ve.useState(null),[n,s]=Ve.useState(null),[o,u]=Ve.useState(!0),[f,m]=Ve.useState([]),[p,y]=Ve.useState(null),[E,R]=Ve.useState(null),[S,B]=Ve.useState("dashboard"),[K,ne]=Ve.useState([]),[J,ye]=Ve.useState([]),[ie,he]=Ve.useState(""),[Te,me]=Ve.useState(""),[Oe,P]=Ve.useState(""),[b,C]=Ve.useState("email"),[O,x]=Ve.useState(""),[V,N]=Ve.useState(!1);Ve.useEffect(()=>{const A=Wm(sr,async F=>{if(e(F),F){const Z=await ei.getUserProfile(F.uid);if(Z){s(Z);try{const te=await ti.getUserInnermosts(F.uid);m(te)}catch(te){console.error("Error loading innermosts:",te)}}}else s(null),m([]);u(!1)});return()=>A()},[]),Ve.useEffect(()=>{if(!p)return;(async()=>{try{let F=await ti.getCurrentWillingBox(p.id);!F&&p.status==="active"&&(F=await ti.createWillingBox(p.id,p.partnerA,p.partnerB)),R(F)}catch(F){console.error("Error loading willing box:",F)}})()},[p]),Ve.useEffect(()=>{if(!E)return;const A=ti.subscribeToWillingBox(E.id,F=>{R(F)});return()=>A()},[E?.id]);const mt=async()=>{try{await ei.signOutUser(),s(null),m([]),y(null),R(null),B("dashboard")}catch(A){console.error("Logout error:",A)}},et=async A=>{if(A.preventDefault(),!(!n||!r))try{const F=await ti.createInnermost(r.uid,b==="email"?ie:Te,n.displayName);if(b==="email")await Fm.sendPairingInvite({toEmail:ie,fromName:n.displayName,pairingCode:F.pairingCode,message:Oe}),alert(`Invitation sent to ${ie}! They'll receive an email with a pairing code.`);else{const Z=FT.formatPhoneNumber(Te);await FT.sendPairingInviteSMS({toPhone:Z,fromName:n.displayName,pairingCode:F.pairingCode,message:Oe}),alert(`Invitation sent to ${Te}! They'll receive a text with a pairing code.`)}m(Z=>[...Z,F]),he(""),me(""),P(""),B("dashboard")}catch(F){alert(`Failed to create pairing: ${F.message}`)}},G=async A=>{if(A.preventDefault(),!(!n||!r))try{const F=await ti.findUserByEmail(ie);if(!F){alert("User not found. They need to create an account first.");return}const Z=Math.floor(1e5+Math.random()*9e5).toString();await Fm.sendMutualPairingCode(ie,Z,n.displayName),await Fm.sendMutualPairingCode(n.email,Z,F.displayName),sessionStorage.setItem("pendingPairing",JSON.stringify({otherUserId:F.id,confirmationCode:Z,timestamp:Date.now()})),x(Z),alert(`Confirmation code sent to both ${n.email} and ${ie}. Both must enter the same code.`)}catch(F){alert(`Failed to initiate pairing: ${F.message}`)}},se=async()=>{if(!(!n||!r||!O))try{const A=sessionStorage.getItem("pendingPairing");if(!A){alert("No pending pairing found. Please start a new pairing.");return}const F=JSON.parse(A);if(F.confirmationCode!==O){alert("Invalid confirmation code");return}if(Date.now()-F.timestamp>300*1e3){alert("Confirmation code expired. Please start a new pairing."),sessionStorage.removeItem("pendingPairing");return}const Z=await ti.createMutualPairing(r.uid,F.otherUserId,O);m(te=>[...te,Z]),sessionStorage.removeItem("pendingPairing"),x(""),N(!1),B("dashboard"),alert("Partnership created successfully!")}catch(A){alert(`Failed to confirm pairing: ${A.message}`)}},ee=async A=>{if(r&&confirm("Are you sure you want to end this partnership? This action cannot be undone."))try{await ti.breakPartnership(A,r.uid),m(F=>F.filter(Z=>Z.id!==A)),p?.id===A&&(y(null),R(null),B("dashboard")),alert("Partnership ended successfully.")}catch(F){alert(`Failed to end partnership: ${F.message}`)}},ue=async()=>{if(!n||!E||!p||!r)return;if(K.length!==12){alert("Please add exactly 12 wishes to your WishList");return}if(K.filter(Z=>Z.isMostWanted).length!==1){alert("Please mark exactly 1 wish as Most Wanted");return}const F=r.uid===p.partnerA;try{await ti.updateWishList(E.id,r.uid,K,F),alert("WishList saved successfully!"),B("innermost-detail")}catch(Z){alert(`Failed to save WishList: ${Z.message}`)}};return o?M.jsx("div",{className:"min-h-screen flex items-center justify-center bg-green-50",children:M.jsxs("div",{className:"text-center",children:[M.jsx("div",{className:"text-4xl mb-4",children:"🌳"}),M.jsx("p",{className:"text-gray-600",children:"Loading The Willing Tree..."})]})}):!r||!n?M.jsx(Xx,{onAuthSuccess:A=>s(A)}):M.jsxs("div",{className:"min-h-screen bg-gray-50",children:[M.jsx("div",{className:"bg-white shadow-sm border-b",children:M.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-3 flex justify-between items-center",children:[M.jsx("h1",{className:"text-xl font-bold text-green-800",children:"🌳 The Willing Tree"}),M.jsxs("div",{className:"flex items-center gap-4",children:[M.jsxs("span",{className:"text-gray-600",children:["Welcome, ",n.displayName]}),M.jsx("button",{onClick:mt,className:"bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700",children:"Logout"})]})]})}),M.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[S==="dashboard"&&M.jsxs("div",{children:[M.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-6",children:"Your Partnerships"}),f.length===0?M.jsxs("div",{className:"bg-white rounded-lg shadow p-8 text-center",children:[M.jsx("div",{className:"text-4xl mb-4",children:"🌱"}),M.jsx("p",{className:"text-gray-600 mb-4",children:"You haven't created any partnerships yet."}),M.jsx("button",{onClick:()=>B("create-pairing"),className:"bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700",children:"Create Your First Partnership"})]}):M.jsxs("div",{className:"grid gap-4",children:[f.map(A=>M.jsxs("div",{className:"bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow",children:[M.jsxs("div",{className:"flex justify-between items-center cursor-pointer",onClick:()=>{y(A),B("innermost-detail")},children:[M.jsxs("div",{children:[M.jsxs("h3",{className:"text-lg font-semibold text-gray-800",children:["Partnership with ",A.partnerBEmail||A.partnerAEmail]}),M.jsxs("p",{className:"text-sm text-gray-600",children:["Status: ",A.status==="active"?"🟢 Active":"🟡 Pending"]}),A.pairingCode&&M.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["Pairing Code: ",A.pairingCode]})]}),M.jsx("div",{className:"text-2xl",children:A.status==="active"?"🌳":"🌱"})]}),A.status==="active"&&M.jsx("div",{className:"mt-4 pt-4 border-t border-gray-200",children:M.jsx("button",{onClick:F=>{F.stopPropagation(),ee(A.id)},className:"text-red-600 hover:text-red-700 text-sm font-medium",children:"End Partnership"})})]},A.id)),M.jsx("button",{onClick:()=>B("create-pairing"),className:"bg-green-100 text-green-700 rounded-lg p-6 hover:bg-green-200 transition-colors text-center",children:"+ Create New Partnership"})]})]}),S==="create-pairing"&&M.jsxs("div",{className:"max-w-md mx-auto",children:[M.jsx("button",{onClick:()=>B("dashboard"),className:"mb-4 text-gray-600 hover:text-gray-800",children:"← Back to Dashboard"}),M.jsxs("div",{className:"bg-white rounded-lg shadow p-6",children:[M.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-4",children:"Create Partnership"}),M.jsx("div",{className:"mb-6",children:M.jsxs("div",{className:"flex gap-2 mb-4",children:[M.jsx("button",{type:"button",onClick:()=>N(!1),className:`flex-1 py-2 px-4 rounded-lg transition-colors ${V?"bg-gray-200 text-gray-700 hover:bg-gray-300":"bg-green-600 text-white"}`,children:"Invite New User"}),M.jsx("button",{type:"button",onClick:()=>N(!0),className:`flex-1 py-2 px-4 rounded-lg transition-colors ${V?"bg-green-600 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:"Pair with Existing User"})]})}),V?M.jsx("div",{children:M.jsxs("div",{className:"mb-6",children:[M.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4",children:[M.jsx("p",{className:"text-sm text-blue-800",children:"To pair with an existing user, both partners must:"}),M.jsxs("ol",{className:"list-decimal list-inside text-sm text-blue-700 mt-2",children:[M.jsx("li",{children:"Enter each other's email"}),M.jsx("li",{children:"Receive a confirmation code"}),M.jsx("li",{children:"Enter the same code to confirm"})]})]}),M.jsxs("div",{className:"mb-4",children:[M.jsx("label",{className:"block text-gray-700 text-sm font-medium mb-2",children:"Partner's Email (must be registered)"}),M.jsx("input",{type:"email",value:ie,onChange:A=>he(A.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500",required:!0})]}),O?M.jsxs("div",{className:"mb-4",children:[M.jsx("label",{className:"block text-gray-700 text-sm font-medium mb-2",children:"Enter Confirmation Code"}),M.jsx("input",{type:"text",value:O,onChange:A=>x(A.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500",placeholder:"Enter 6-digit code",maxLength:6}),M.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Both partners must enter the same code"})]}):null,O?M.jsx("button",{onClick:se,className:"w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700",children:"Confirm Partnership"}):M.jsx("button",{onClick:G,className:"w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700",children:"Send Confirmation Code"})]})}):M.jsxs("form",{onSubmit:et,children:[M.jsxs("div",{className:"mb-4",children:[M.jsx("label",{className:"block text-gray-700 text-sm font-medium mb-2",children:"Invite Method"}),M.jsxs("div",{className:"flex gap-2",children:[M.jsx("button",{type:"button",onClick:()=>C("email"),className:`flex-1 py-2 px-4 rounded-lg transition-colors ${b==="email"?"bg-blue-600 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:"📧 Email"}),M.jsx("button",{type:"button",onClick:()=>C("sms"),className:`flex-1 py-2 px-4 rounded-lg transition-colors ${b==="sms"?"bg-blue-600 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:"📱 SMS/Text"})]})]}),b==="email"?M.jsxs("div",{className:"mb-4",children:[M.jsx("label",{className:"block text-gray-700 text-sm font-medium mb-2",children:"Partner's Email"}),M.jsx("input",{type:"email",value:ie,onChange:A=>he(A.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500",required:!0})]}):M.jsxs("div",{className:"mb-4",children:[M.jsx("label",{className:"block text-gray-700 text-sm font-medium mb-2",children:"Partner's Phone Number"}),M.jsx("input",{type:"tel",value:Te,onChange:A=>me(A.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500",placeholder:"(555) 123-4567",required:!0}),M.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"US phone numbers only"})]}),M.jsxs("div",{className:"mb-6",children:[M.jsx("label",{className:"block text-gray-700 text-sm font-medium mb-2",children:"Personal Message (Optional)"}),M.jsx("textarea",{value:Oe,onChange:A=>P(A.target.value),rows:3,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500",placeholder:"Add a personal note to your invitation..."})]}),M.jsxs("button",{type:"submit",className:"w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700",children:["Send ",b==="email"?"Email":"SMS"," Invitation"]})]})]})]}),S==="innermost-detail"&&p&&M.jsxs("div",{children:[M.jsx("button",{onClick:()=>{y(null),R(null),B("dashboard")},className:"mb-4 text-gray-600 hover:text-gray-800",children:"← Back to Dashboard"}),M.jsxs("div",{className:"bg-white rounded-lg shadow p-6 mb-6",children:[M.jsxs("h2",{className:"text-xl font-bold text-gray-800 mb-4",children:["Partnership with ",p.partnerBEmail||p.partnerAEmail]}),p.status==="pending"?M.jsx("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-4",children:M.jsxs("p",{className:"text-yellow-800",children:["Waiting for partner to accept invitation.",M.jsx("br",{}),"Pairing Code: ",M.jsx("strong",{children:p.pairingCode})]})}):E?M.jsxs("div",{className:"space-y-4",children:[M.jsx("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4",children:M.jsxs("p",{className:"text-green-800",children:["Week ",E.weekNumber," - Status: ",E.status]})}),E.status==="planting_trees"&&M.jsx("button",{onClick:()=>B("create-wishlist"),className:"bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700",children:"Create Your WishList"}),E.status==="selecting_willing"&&M.jsx("button",{onClick:()=>B("select-willing"),className:"bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700",children:"Select Your WillingList"}),E.status==="guessing"&&M.jsx("button",{onClick:()=>B("guessing-game"),className:"bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700",children:"Play Guessing Game"})]}):M.jsx("p",{className:"text-gray-600",children:"Loading willing box..."})]})]}),S==="create-wishlist"&&E&&M.jsxs("div",{children:[M.jsx("button",{onClick:()=>B("innermost-detail"),className:"mb-4 text-gray-600 hover:text-gray-800",children:"← Back"}),M.jsxs("div",{className:"bg-white rounded-lg shadow p-6",children:[M.jsxs("h2",{className:"text-xl font-bold text-gray-800 mb-4",children:["Create Your WishList (",K.length,"/12)"]}),M.jsx("p",{className:"text-gray-600 mb-4",children:"Add 12 wishes and mark 1 as Most Wanted (worth triple points)"}),M.jsx("form",{onSubmit:A=>{A.preventDefault();const Z=new FormData(A.currentTarget).get("wish");if(Z&&K.length<12){const te={id:Date.now().toString(),text:Z,category:"general",isMostWanted:!1,createdAt:new Date};ne([...K,te]),A.currentTarget.reset()}},children:M.jsxs("div",{className:"flex gap-2 mb-4",children:[M.jsx("input",{name:"wish",type:"text",placeholder:"Enter a wish...",className:"flex-1 px-4 py-2 border border-gray-300 rounded-lg",disabled:K.length>=12}),M.jsx("button",{type:"submit",disabled:K.length>=12,className:"bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:bg-gray-400",children:"Add"})]})}),M.jsx("div",{className:"space-y-2 mb-4",children:K.map((A,F)=>M.jsx("div",{className:`p-3 rounded-lg border ${A.isMostWanted?"border-yellow-400 bg-yellow-50":"border-gray-200"}`,children:M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsx("span",{className:"flex-1",children:A.text}),M.jsxs("div",{className:"flex gap-2",children:[M.jsx("button",{onClick:()=>{ne(K.map(Z=>Z.id===A.id?{...Z,isMostWanted:!Z.isMostWanted}:{...Z,isMostWanted:!1}))},className:`px-2 py-1 rounded text-xs ${A.isMostWanted?"bg-yellow-400":"bg-gray-200"}`,children:A.isMostWanted?"⭐ Most Wanted":"☆"}),M.jsx("button",{onClick:()=>ne(K.filter(Z=>Z.id!==A.id)),className:"text-red-600 hover:text-red-800",children:"×"})]})]})},A.id))}),K.length===12&&M.jsx("button",{onClick:ue,className:"w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700",children:"Save WishList"})]})]})]})]})}RS.createRoot(document.getElementById("root")).render(M.jsx(Ve.StrictMode,{children:M.jsx(Zx,{})}));
