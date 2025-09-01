(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();var _m={exports:{}},$l={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uv;function pb(){if(Uv)return $l;Uv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return $l.Fragment=e,$l.jsx=n,$l.jsxs=n,$l}var jv;function yb(){return jv||(jv=1,_m.exports=pb()),_m.exports}var P=yb(),vm={exports:{}},be={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv;function _b(){if(zv)return be;zv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),R=Symbol.iterator;function b(A){return A===null||typeof A!="object"?null:(A=R&&A[R]||A["@@iterator"],typeof A=="function"?A:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,ne={};function J(A,F,Z){this.props=A,this.context=F,this.refs=ne,this.updater=Z||B}J.prototype.isReactComponent={},J.prototype.setState=function(A,F){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,F,"setState")},J.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function Ee(){}Ee.prototype=J.prototype;function ae(A,F,Z){this.props=A,this.context=F,this.refs=ne,this.updater=Z||B}var ce=ae.prototype=new Ee;ce.constructor=ae,K(ce,J.prototype),ce.isPureReactComponent=!0;var Se=Array.isArray,me={H:null,A:null,T:null,S:null,V:null},Oe=Object.prototype.hasOwnProperty;function M(A,F,Z,te,ge,Ie){return Z=Ie.ref,{$$typeof:r,type:A,key:F,ref:Z!==void 0?Z:null,props:Ie}}function S(A,F){return M(A.type,F,void 0,void 0,void 0,A.props)}function C(A){return typeof A=="object"&&A!==null&&A.$$typeof===r}function O(A){var F={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(Z){return F[Z]})}var x=/\/+/g;function V(A,F){return typeof A=="object"&&A!==null&&A.key!=null?O(""+A.key):F.toString(36)}function N(){}function mt(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(N,N):(A.status="pending",A.then(function(F){A.status==="pending"&&(A.status="fulfilled",A.value=F)},function(F){A.status==="pending"&&(A.status="rejected",A.reason=F)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function et(A,F,Z,te,ge){var Ie=typeof A;(Ie==="undefined"||Ie==="boolean")&&(A=null);var Te=!1;if(A===null)Te=!0;else switch(Ie){case"bigint":case"string":case"number":Te=!0;break;case"object":switch(A.$$typeof){case r:case e:Te=!0;break;case E:return Te=A._init,et(Te(A._payload),F,Z,te,ge)}}if(Te)return ge=ge(A),Te=te===""?"."+V(A,0):te,Se(ge)?(Z="",Te!=null&&(Z=Te.replace(x,"$&/")+"/"),et(ge,F,Z,"",function(oi){return oi})):ge!=null&&(C(ge)&&(ge=S(ge,Z+(ge.key==null||A&&A.key===ge.key?"":(""+ge.key).replace(x,"$&/")+"/")+Te)),F.push(ge)),1;Te=0;var Mt=te===""?".":te+":";if(Se(A))for(var tt=0;tt<A.length;tt++)te=A[tt],Ie=Mt+V(te,tt),Te+=et(te,F,Z,Ie,ge);else if(tt=b(A),typeof tt=="function")for(A=tt.call(A),tt=0;!(te=A.next()).done;)te=te.value,Ie=Mt+V(te,tt++),Te+=et(te,F,Z,Ie,ge);else if(Ie==="object"){if(typeof A.then=="function")return et(mt(A),F,Z,te,ge);throw F=String(A),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.")}return Te}function G(A,F,Z){if(A==null)return A;var te=[],ge=0;return et(A,te,"","",function(Ie){return F.call(Z,Ie,ge++)}),te}function re(A){if(A._status===-1){var F=A._result;F=F(),F.then(function(Z){(A._status===0||A._status===-1)&&(A._status=1,A._result=Z)},function(Z){(A._status===0||A._status===-1)&&(A._status=2,A._result=Z)}),A._status===-1&&(A._status=0,A._result=F)}if(A._status===1)return A._result.default;throw A._result}var ee=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var F=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(F))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function fe(){}return be.Children={map:G,forEach:function(A,F,Z){G(A,function(){F.apply(this,arguments)},Z)},count:function(A){var F=0;return G(A,function(){F++}),F},toArray:function(A){return G(A,function(F){return F})||[]},only:function(A){if(!C(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},be.Component=J,be.Fragment=n,be.Profiler=o,be.PureComponent=ae,be.StrictMode=s,be.Suspense=p,be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=me,be.__COMPILER_RUNTIME={__proto__:null,c:function(A){return me.H.useMemoCache(A)}},be.cache=function(A){return function(){return A.apply(null,arguments)}},be.cloneElement=function(A,F,Z){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var te=K({},A.props),ge=A.key,Ie=void 0;if(F!=null)for(Te in F.ref!==void 0&&(Ie=void 0),F.key!==void 0&&(ge=""+F.key),F)!Oe.call(F,Te)||Te==="key"||Te==="__self"||Te==="__source"||Te==="ref"&&F.ref===void 0||(te[Te]=F[Te]);var Te=arguments.length-2;if(Te===1)te.children=Z;else if(1<Te){for(var Mt=Array(Te),tt=0;tt<Te;tt++)Mt[tt]=arguments[tt+2];te.children=Mt}return M(A.type,ge,void 0,void 0,Ie,te)},be.createContext=function(A){return A={$$typeof:f,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:u,_context:A},A},be.createElement=function(A,F,Z){var te,ge={},Ie=null;if(F!=null)for(te in F.key!==void 0&&(Ie=""+F.key),F)Oe.call(F,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(ge[te]=F[te]);var Te=arguments.length-2;if(Te===1)ge.children=Z;else if(1<Te){for(var Mt=Array(Te),tt=0;tt<Te;tt++)Mt[tt]=arguments[tt+2];ge.children=Mt}if(A&&A.defaultProps)for(te in Te=A.defaultProps,Te)ge[te]===void 0&&(ge[te]=Te[te]);return M(A,Ie,void 0,void 0,null,ge)},be.createRef=function(){return{current:null}},be.forwardRef=function(A){return{$$typeof:m,render:A}},be.isValidElement=C,be.lazy=function(A){return{$$typeof:E,_payload:{_status:-1,_result:A},_init:re}},be.memo=function(A,F){return{$$typeof:y,type:A,compare:F===void 0?null:F}},be.startTransition=function(A){var F=me.T,Z={};me.T=Z;try{var te=A(),ge=me.S;ge!==null&&ge(Z,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(fe,ee)}catch(Ie){ee(Ie)}finally{me.T=F}},be.unstable_useCacheRefresh=function(){return me.H.useCacheRefresh()},be.use=function(A){return me.H.use(A)},be.useActionState=function(A,F,Z){return me.H.useActionState(A,F,Z)},be.useCallback=function(A,F){return me.H.useCallback(A,F)},be.useContext=function(A){return me.H.useContext(A)},be.useDebugValue=function(){},be.useDeferredValue=function(A,F){return me.H.useDeferredValue(A,F)},be.useEffect=function(A,F,Z){var te=me.H;if(typeof Z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return te.useEffect(A,F)},be.useId=function(){return me.H.useId()},be.useImperativeHandle=function(A,F,Z){return me.H.useImperativeHandle(A,F,Z)},be.useInsertionEffect=function(A,F){return me.H.useInsertionEffect(A,F)},be.useLayoutEffect=function(A,F){return me.H.useLayoutEffect(A,F)},be.useMemo=function(A,F){return me.H.useMemo(A,F)},be.useOptimistic=function(A,F){return me.H.useOptimistic(A,F)},be.useReducer=function(A,F,Z){return me.H.useReducer(A,F,Z)},be.useRef=function(A){return me.H.useRef(A)},be.useState=function(A){return me.H.useState(A)},be.useSyncExternalStore=function(A,F,Z){return me.H.useSyncExternalStore(A,F,Z)},be.useTransition=function(){return me.H.useTransition()},be.version="19.1.1",be}var Bv;function vg(){return Bv||(Bv=1,vm.exports=_b()),vm.exports}var Ve=vg(),Em={exports:{}},Xl={},Tm={exports:{}},wm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv;function vb(){return qv||(qv=1,(function(r){function e(G,re){var ee=G.length;G.push(re);e:for(;0<ee;){var fe=ee-1>>>1,A=G[fe];if(0<o(A,re))G[fe]=re,G[ee]=A,ee=fe;else break e}}function n(G){return G.length===0?null:G[0]}function s(G){if(G.length===0)return null;var re=G[0],ee=G.pop();if(ee!==re){G[0]=ee;e:for(var fe=0,A=G.length,F=A>>>1;fe<F;){var Z=2*(fe+1)-1,te=G[Z],ge=Z+1,Ie=G[ge];if(0>o(te,ee))ge<A&&0>o(Ie,te)?(G[fe]=Ie,G[ge]=ee,fe=ge):(G[fe]=te,G[Z]=ee,fe=Z);else if(ge<A&&0>o(Ie,ee))G[fe]=Ie,G[ge]=ee,fe=ge;else break e}}return re}function o(G,re){var ee=G.sortIndex-re.sortIndex;return ee!==0?ee:G.id-re.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var p=[],y=[],E=1,R=null,b=3,B=!1,K=!1,ne=!1,J=!1,Ee=typeof setTimeout=="function"?setTimeout:null,ae=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate<"u"?setImmediate:null;function Se(G){for(var re=n(y);re!==null;){if(re.callback===null)s(y);else if(re.startTime<=G)s(y),re.sortIndex=re.expirationTime,e(p,re);else break;re=n(y)}}function me(G){if(ne=!1,Se(G),!K)if(n(p)!==null)K=!0,Oe||(Oe=!0,V());else{var re=n(y);re!==null&&et(me,re.startTime-G)}}var Oe=!1,M=-1,S=5,C=-1;function O(){return J?!0:!(r.unstable_now()-C<S)}function x(){if(J=!1,Oe){var G=r.unstable_now();C=G;var re=!0;try{e:{K=!1,ne&&(ne=!1,ae(M),M=-1),B=!0;var ee=b;try{t:{for(Se(G),R=n(p);R!==null&&!(R.expirationTime>G&&O());){var fe=R.callback;if(typeof fe=="function"){R.callback=null,b=R.priorityLevel;var A=fe(R.expirationTime<=G);if(G=r.unstable_now(),typeof A=="function"){R.callback=A,Se(G),re=!0;break t}R===n(p)&&s(p),Se(G)}else s(p);R=n(p)}if(R!==null)re=!0;else{var F=n(y);F!==null&&et(me,F.startTime-G),re=!1}}break e}finally{R=null,b=ee,B=!1}re=void 0}}finally{re?V():Oe=!1}}}var V;if(typeof ce=="function")V=function(){ce(x)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,mt=N.port2;N.port1.onmessage=x,V=function(){mt.postMessage(null)}}else V=function(){Ee(x,0)};function et(G,re){M=Ee(function(){G(r.unstable_now())},re)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(G){G.callback=null},r.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<G?Math.floor(1e3/G):5},r.unstable_getCurrentPriorityLevel=function(){return b},r.unstable_next=function(G){switch(b){case 1:case 2:case 3:var re=3;break;default:re=b}var ee=b;b=re;try{return G()}finally{b=ee}},r.unstable_requestPaint=function(){J=!0},r.unstable_runWithPriority=function(G,re){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var ee=b;b=G;try{return re()}finally{b=ee}},r.unstable_scheduleCallback=function(G,re,ee){var fe=r.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?fe+ee:fe):ee=fe,G){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=ee+A,G={id:E++,callback:re,priorityLevel:G,startTime:ee,expirationTime:A,sortIndex:-1},ee>fe?(G.sortIndex=ee,e(y,G),n(p)===null&&G===n(y)&&(ne?(ae(M),M=-1):ne=!0,et(me,ee-fe))):(G.sortIndex=A,e(p,G),K||B||(K=!0,Oe||(Oe=!0,V()))),G},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(G){var re=b;return function(){var ee=b;b=re;try{return G.apply(this,arguments)}finally{b=ee}}}})(wm)),wm}var Fv;function Eb(){return Fv||(Fv=1,Tm.exports=vb()),Tm.exports}var Am={exports:{}},Zt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hv;function Tb(){if(Hv)return Zt;Hv=1;var r=vg();function e(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)y+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,y,E){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:R==null?null:""+R,children:p,containerInfo:y,implementation:E}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Zt.createPortal=function(p,y){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(e(299));return u(p,y,null,E)},Zt.flushSync=function(p){var y=f.T,E=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=y,s.p=E,s.d.f()}},Zt.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(p,y))},Zt.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Zt.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var E=y.as,R=m(E,y.crossOrigin),b=typeof y.integrity=="string"?y.integrity:void 0,B=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;E==="style"?s.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:R,integrity:b,fetchPriority:B}):E==="script"&&s.d.X(p,{crossOrigin:R,integrity:b,fetchPriority:B,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Zt.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var E=m(y.as,y.crossOrigin);s.d.M(p,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(p)},Zt.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var E=y.as,R=m(E,y.crossOrigin);s.d.L(p,E,{crossOrigin:R,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Zt.preloadModule=function(p,y){if(typeof p=="string")if(y){var E=m(y.as,y.crossOrigin);s.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(p)},Zt.requestFormReset=function(p){s.d.r(p)},Zt.unstable_batchedUpdates=function(p,y){return p(y)},Zt.useFormState=function(p,y,E){return f.H.useFormState(p,y,E)},Zt.useFormStatus=function(){return f.H.useHostTransitionStatus()},Zt.version="19.1.1",Zt}var Gv;function wb(){if(Gv)return Am.exports;Gv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Am.exports=Tb(),Am.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yv;function Ab(){if(Yv)return Xl;Yv=1;var r=Eb(),e=vg(),n=wb();function s(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var i=t.alternate;if(!i){if(i=u(t),i===null)throw Error(s(188));return i!==t?null:t}for(var a=t,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return m(h),t;if(d===l)return m(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,T=h.child;T;){if(T===a){v=!0,a=h,l=d;break}if(T===l){v=!0,l=h,a=d;break}T=T.sibling}if(!v){for(T=d.child;T;){if(T===a){v=!0,a=d,l=h;break}if(T===l){v=!0,l=d,a=h;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:i}function y(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=y(t),i!==null)return i;t=t.sibling}return null}var E=Object.assign,R=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),ne=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),Ee=Symbol.for("react.provider"),ae=Symbol.for("react.consumer"),ce=Symbol.for("react.context"),Se=Symbol.for("react.forward_ref"),me=Symbol.for("react.suspense"),Oe=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),x=Symbol.iterator;function V(t){return t===null||typeof t!="object"?null:(t=x&&t[x]||t["@@iterator"],typeof t=="function"?t:null)}var N=Symbol.for("react.client.reference");function mt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===N?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case K:return"Fragment";case J:return"Profiler";case ne:return"StrictMode";case me:return"Suspense";case Oe:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case B:return"Portal";case ce:return(t.displayName||"Context")+".Provider";case ae:return(t._context.displayName||"Context")+".Consumer";case Se:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case M:return i=t.displayName||null,i!==null?i:mt(t.type)||"Memo";case S:i=t._payload,t=t._init;try{return mt(t(i))}catch{}}return null}var et=Array.isArray,G=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},fe=[],A=-1;function F(t){return{current:t}}function Z(t){0>A||(t.current=fe[A],fe[A]=null,A--)}function te(t,i){A++,fe[A]=t.current,t.current=i}var ge=F(null),Ie=F(null),Te=F(null),Mt=F(null);function tt(t,i){switch(te(Te,i),te(Ie,t),te(ge,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?fv(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=fv(i),t=dv(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Z(ge),te(ge,t)}function oi(){Z(ge),Z(Ie),Z(Te)}function gr(t){t.memoizedState!==null&&te(Mt,t);var i=ge.current,a=dv(i,t.type);i!==a&&(te(Ie,t),te(ge,a))}function xi(t){Ie.current===t&&(Z(ge),Z(Ie)),Mt.current===t&&(Z(Mt),Hl._currentValue=ee)}var ps=Object.prototype.hasOwnProperty,ys=r.unstable_scheduleCallback,_s=r.unstable_cancelCallback,Bo=r.unstable_shouldYield,Ou=r.unstable_requestPaint,On=r.unstable_now,_f=r.unstable_getCurrentPriorityLevel,qo=r.unstable_ImmediatePriority,ya=r.unstable_UserBlockingPriority,vs=r.unstable_NormalPriority,vf=r.unstable_LowPriority,_a=r.unstable_IdlePriority,Fo=r.log,xu=r.unstable_setDisableYieldValue,ct=null,Ge=null;function yn(t){if(typeof Fo=="function"&&xu(t),Ge&&typeof Ge.setStrictMode=="function")try{Ge.setStrictMode(ct,t)}catch{}}var Xt=Math.clz32?Math.clz32:Es,Mu=Math.log,Ef=Math.LN2;function Es(t){return t>>>=0,t===0?32:31-(Mu(t)/Ef|0)|0}var Ts=256,ws=4194304;function Qn(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function va(t,i,a){var l=t.pendingLanes;if(l===0)return 0;var h=0,d=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?h=Qn(l):(v&=T,v!==0?h=Qn(v):a||(a=T&~t,a!==0&&(h=Qn(a))))):(T=l&~d,T!==0?h=Qn(T):v!==0?h=Qn(v):a||(a=l&~t,a!==0&&(h=Qn(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function As(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Ho(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Go(){var t=Ts;return Ts<<=1,(Ts&4194048)===0&&(Ts=256),t}function Yo(){var t=ws;return ws<<=1,(ws&62914560)===0&&(ws=4194304),t}function Mi(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function Pi(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ko(t,i,a,l,h,d){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,I=t.expirationTimes,j=t.hiddenUpdates;for(a=v&~a;0<a;){var Y=31-Xt(a),X=1<<Y;T[Y]=0,I[Y]=-1;var z=j[Y];if(z!==null)for(j[Y]=null,Y=0;Y<z.length;Y++){var q=z[Y];q!==null&&(q.lane&=-536870913)}a&=~X}l!==0&&li(t,l,0),d!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=d&~(v&~i))}function li(t,i,a){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Xt(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194090}function Qo(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-Xt(a),h=1<<l;h&i|t[l]&i&&(t[l]|=i),a&=~h}}function pr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ea(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function yr(){var t=re.p;return t!==0?t:(t=window.event,t===void 0?32:xv(t.type))}function Pu(t,i){var a=re.p;try{return re.p=t,i()}finally{re.p=a}}var at=Math.random().toString(36).slice(2),It="__reactFiber$"+at,vt="__reactProps$"+at,xn="__reactContainer$"+at,$o="__reactEvents$"+at,Tf="__reactListeners$"+at,_r="__reactHandles$"+at,Vu="__reactResources$"+at,Ss="__reactMarker$"+at;function vr(t){delete t[It],delete t[vt],delete t[$o],delete t[Tf],delete t[_r]}function Vi(t){var i=t[It];if(i)return i;for(var a=t.parentNode;a;){if(i=a[xn]||a[It]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=yv(t);t!==null;){if(a=t[It])return a;t=yv(t)}return i}t=a,a=t.parentNode}return null}function ui(t){if(t=t[It]||t[xn]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function ci(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(s(33))}function rn(t){var i=t[Vu];return i||(i=t[Vu]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function gt(t){t[Ss]=!0}var Xo=new Set,Ta={};function $n(t,i){ki(t,i),ki(t+"Capture",i)}function ki(t,i){for(Ta[t]=i,t=0;t<i.length;t++)Xo.add(i[t])}var ku=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Lu={},bs={};function Uu(t){return ps.call(bs,t)?!0:ps.call(Lu,t)?!1:ku.test(t)?bs[t]=!0:(Lu[t]=!0,!1)}function Er(t,i,a){if(Uu(i))if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+a)}}function hi(t,i,a){if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+a)}}function Bt(t,i,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(i,a,""+l)}}var Rs,ju;function Li(t){if(Rs===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Rs=i&&i[1]||"",ju=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Rs+t+ju}var wa=!1;function Aa(t,i){if(!t||wa)return"";wa=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(q){var z=q}Reflect.construct(t,[],X)}else{try{X.call()}catch(q){z=q}t.call(X.prototype)}}else{try{throw Error()}catch(q){z=q}(X=t())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(q){if(q&&z&&typeof q.stack=="string")return[q.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],T=d[1];if(v&&T){var I=v.split(`
`),j=T.split(`
`);for(h=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;h<j.length&&!j[h].includes("DetermineComponentFrameRoot");)h++;if(l===I.length||h===j.length)for(l=I.length-1,h=j.length-1;1<=l&&0<=h&&I[l]!==j[h];)h--;for(;1<=l&&0<=h;l--,h--)if(I[l]!==j[h]){if(l!==1||h!==1)do if(l--,h--,0>h||I[l]!==j[h]){var Y=`
`+I[l].replace(" at new "," at ");return t.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",t.displayName)),Y}while(1<=l&&0<=h);break}}}finally{wa=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Li(a):""}function Wo(t){switch(t.tag){case 26:case 27:case 5:return Li(t.type);case 16:return Li("Lazy");case 13:return Li("Suspense");case 19:return Li("SuspenseList");case 0:case 15:return Aa(t.type,!1);case 11:return Aa(t.type.render,!1);case 1:return Aa(t.type,!0);case 31:return Li("Activity");default:return""}}function Sa(t){try{var i="";do i+=Wo(t),t=t.return;while(t);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function sn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zo(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function wf(t){var i=Zo(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function ba(t){t._valueTracker||(t._valueTracker=wf(t))}function Jo(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=Zo(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function Is(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Af=/[\n"\\]/g;function Et(t){return t.replace(Af,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function _n(t,i,a,l,h,d,v,T){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),i!=null?v==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+sn(i)):t.value!==""+sn(i)&&(t.value=""+sn(i)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),i!=null?Tr(t,v,sn(i)):a!=null?Tr(t,v,sn(a)):l!=null&&t.removeAttribute("value"),h==null&&d!=null&&(t.defaultChecked=!!d),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+sn(T):t.removeAttribute("name")}function Cs(t,i,a,l,h,d,v,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+sn(a):"",i=i!=null?""+sn(i):a,T||i===t.value||(t.value=i),t.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=T?t.checked:!!l,t.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v)}function Tr(t,i,a){i==="number"&&Is(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ui(t,i,a,l){if(t=t.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=i.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&l&&(t[a].defaultSelected=!0)}else{for(a=""+sn(a),i=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function Qe(t,i,a){if(i!=null&&(i=""+sn(i),i!==t.value&&(t.value=i),a==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=a!=null?""+sn(a):""}function Ns(t,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(et(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=sn(i),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function Mn(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Ds=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function zu(t,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,a):typeof a!="number"||a===0||Ds.has(i)?i==="float"?t.cssFloat=a:t[i]=(""+a).trim():t[i]=a+"px"}function el(t,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&zu(t,h,l)}else for(var d in i)i.hasOwnProperty(d)&&zu(t,d,i[d])}function tl(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ra(t){return bf.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var ji=null;function Pn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zi=null,Bi=null;function nl(t){var i=ui(t);if(i&&(t=i.stateNode)){var a=t[vt]||null;e:switch(t=i.stateNode,i.type){case"input":if(_n(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Et(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var h=l[vt]||null;if(!h)throw Error(s(90));_n(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===t.form&&Jo(l)}break e;case"textarea":Qe(t,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&Ui(t,!!a.multiple,i,!1)}}}var fi=!1;function Bu(t,i,a){if(fi)return t(i,a);fi=!0;try{var l=t(i);return l}finally{if(fi=!1,(zi!==null||Bi!==null)&&(Pc(),zi&&(i=zi,t=Bi,Bi=zi=null,nl(i),t)))for(i=0;i<t.length;i++)nl(t[i])}}function Os(t,i){var a=t.stateNode;if(a===null)return null;var l=a[vt]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vn=!1;if(Xn)try{var xs={};Object.defineProperty(xs,"passive",{get:function(){Vn=!0}}),window.addEventListener("test",xs,xs),window.removeEventListener("test",xs,xs)}catch{Vn=!1}var di=null,wr=null,qi=null;function il(){if(qi)return qi;var t,i=wr,a=i.length,l,h="value"in di?di.value:di.textContent,d=h.length;for(t=0;t<a&&i[t]===h[t];t++);var v=a-t;for(l=1;l<=v&&i[a-l]===h[d-l];l++);return qi=h.slice(t,1<l?1-l:void 0)}function mi(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function gi(){return!0}function rl(){return!1}function Pt(t){function i(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?gi:rl,this.isPropagationStopped=rl,this}return E(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=gi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=gi)},persist:function(){},isPersistent:gi}),i}var Fe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ia=Pt(Fe),Ms=E({},Fe,{view:0,detail:0}),qu=Pt(Ms),Ca,Na,pi,Ps=E({},Ms,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ls,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==pi&&(pi&&t.type==="mousemove"?(Ca=t.screenX-pi.screenX,Na=t.screenY-pi.screenY):Na=Ca=0,pi=t),Ca)},movementY:function(t){return"movementY"in t?t.movementY:Na}}),kn=Pt(Ps),Fu=E({},Ps,{dataTransfer:0}),Rf=Pt(Fu),Vs=E({},Ms,{relatedTarget:0}),Da=Pt(Vs),sl=E({},Fe,{animationName:0,elapsedTime:0,pseudoElement:0}),Oa=Pt(sl),Hu=E({},Fe,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xa=Pt(Hu),If=E({},Fe,{data:0}),al=Pt(If),ks={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ol(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Yu[t])?!!i[t]:!1}function Ls(){return ol}var Ku=E({},Ms,{key:function(t){if(t.key){var i=ks[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=mi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Gu[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ls,charCode:function(t){return t.type==="keypress"?mi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?mi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ma=Pt(Ku),Qu=E({},Ps,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ll=Pt(Qu),Fi=E({},Ms,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ls}),$u=Pt(Fi),Xu=E({},Fe,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wu=Pt(Xu),Zu=E({},Ps,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Pa=Pt(Zu),an=E({},Fe,{newState:0,oldState:0}),Ju=Pt(an),ec=[9,13,27,32],yi=Xn&&"CompositionEvent"in window,c=null;Xn&&"documentMode"in document&&(c=document.documentMode);var g=Xn&&"TextEvent"in window&&!c,_=Xn&&(!yi||c&&8<c&&11>=c),w=" ",L=!1;function H(t,i){switch(t){case"keyup":return ec.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ie(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ke=!1;function Ct(t,i){switch(t){case"compositionend":return ie(i);case"keypress":return i.which!==32?null:(L=!0,w);case"textInput":return t=i.data,t===w&&L?null:t;default:return null}}function Le(t,i){if(ke)return t==="compositionend"||!yi&&H(t,i)?(t=il(),qi=wr=di=null,ke=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var Vt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nt(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Vt[t.type]:i==="textarea"}function Hi(t,i,a,l){zi?Bi?Bi.push(l):Bi=[l]:zi=l,i=zc(i,"onChange"),0<i.length&&(a=new Ia("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var qt=null,_i=null;function ul(t){ov(t,0)}function tc(t){var i=ci(t);if(Jo(i))return t}function Cp(t,i){if(t==="change")return i}var Np=!1;if(Xn){var Cf;if(Xn){var Nf="oninput"in document;if(!Nf){var Dp=document.createElement("div");Dp.setAttribute("oninput","return;"),Nf=typeof Dp.oninput=="function"}Cf=Nf}else Cf=!1;Np=Cf&&(!document.documentMode||9<document.documentMode)}function Op(){qt&&(qt.detachEvent("onpropertychange",xp),_i=qt=null)}function xp(t){if(t.propertyName==="value"&&tc(_i)){var i=[];Hi(i,_i,t,Pn(t)),Bu(ul,i)}}function YA(t,i,a){t==="focusin"?(Op(),qt=i,_i=a,qt.attachEvent("onpropertychange",xp)):t==="focusout"&&Op()}function KA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return tc(_i)}function QA(t,i){if(t==="click")return tc(i)}function $A(t,i){if(t==="input"||t==="change")return tc(i)}function XA(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var vn=typeof Object.is=="function"?Object.is:XA;function cl(t,i){if(vn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!ps.call(i,h)||!vn(t[h],i[h]))return!1}return!0}function Mp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pp(t,i){var a=Mp(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Mp(a)}}function Vp(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Vp(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function kp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Is(t.document);i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=Is(t.document)}return i}function Df(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var WA=Xn&&"documentMode"in document&&11>=document.documentMode,Va=null,Of=null,hl=null,xf=!1;function Lp(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xf||Va==null||Va!==Is(l)||(l=Va,"selectionStart"in l&&Df(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),hl&&cl(hl,l)||(hl=l,l=zc(Of,"onSelect"),0<l.length&&(i=new Ia("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=Va)))}function Us(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var ka={animationend:Us("Animation","AnimationEnd"),animationiteration:Us("Animation","AnimationIteration"),animationstart:Us("Animation","AnimationStart"),transitionrun:Us("Transition","TransitionRun"),transitionstart:Us("Transition","TransitionStart"),transitioncancel:Us("Transition","TransitionCancel"),transitionend:Us("Transition","TransitionEnd")},Mf={},Up={};Xn&&(Up=document.createElement("div").style,"AnimationEvent"in window||(delete ka.animationend.animation,delete ka.animationiteration.animation,delete ka.animationstart.animation),"TransitionEvent"in window||delete ka.transitionend.transition);function js(t){if(Mf[t])return Mf[t];if(!ka[t])return t;var i=ka[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Up)return Mf[t]=i[a];return t}var jp=js("animationend"),zp=js("animationiteration"),Bp=js("animationstart"),ZA=js("transitionrun"),JA=js("transitionstart"),eS=js("transitioncancel"),qp=js("transitionend"),Fp=new Map,Pf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pf.push("scrollEnd");function Wn(t,i){Fp.set(t,i),$n(i,[t])}var Hp=new WeakMap;function Ln(t,i){if(typeof t=="object"&&t!==null){var a=Hp.get(t);return a!==void 0?a:(i={value:t,source:i,stack:Sa(i)},Hp.set(t,i),i)}return{value:t,source:i,stack:Sa(i)}}var Un=[],La=0,Vf=0;function nc(){for(var t=La,i=Vf=La=0;i<t;){var a=Un[i];Un[i++]=null;var l=Un[i];Un[i++]=null;var h=Un[i];Un[i++]=null;var d=Un[i];if(Un[i++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&Gp(a,h,d)}}function ic(t,i,a,l){Un[La++]=t,Un[La++]=i,Un[La++]=a,Un[La++]=l,Vf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function kf(t,i,a,l){return ic(t,i,a,l),rc(t)}function Ua(t,i){return ic(t,null,null,i),rc(t)}function Gp(t,i,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=t.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(h=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,h&&i!==null&&(h=31-Xt(a),t=d.hiddenUpdates,l=t[h],l===null?t[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function rc(t){if(50<kl)throw kl=0,qd=null,Error(s(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var ja={};function tS(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(t,i,a,l){return new tS(t,i,a,l)}function Lf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Gi(t,i){var a=t.alternate;return a===null?(a=En(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Yp(t,i){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,i=a.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function sc(t,i,a,l,h,d){var v=0;if(l=t,typeof t=="function")Lf(t)&&(v=1);else if(typeof t=="string")v=ib(t,a,ge.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=En(31,a,i,h),t.elementType=C,t.lanes=d,t;case K:return zs(a.children,h,d,i);case ne:v=8,h|=24;break;case J:return t=En(12,a,i,h|2),t.elementType=J,t.lanes=d,t;case me:return t=En(13,a,i,h),t.elementType=me,t.lanes=d,t;case Oe:return t=En(19,a,i,h),t.elementType=Oe,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ee:case ce:v=10;break e;case ae:v=9;break e;case Se:v=11;break e;case M:v=14;break e;case S:v=16,l=null;break e}v=29,a=Error(s(130,t===null?"null":typeof t,"")),l=null}return i=En(v,a,i,h),i.elementType=t,i.type=l,i.lanes=d,i}function zs(t,i,a,l){return t=En(7,t,l,i),t.lanes=a,t}function Uf(t,i,a){return t=En(6,t,null,i),t.lanes=a,t}function jf(t,i,a){return i=En(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var za=[],Ba=0,ac=null,oc=0,jn=[],zn=0,Bs=null,Yi=1,Ki="";function qs(t,i){za[Ba++]=oc,za[Ba++]=ac,ac=t,oc=i}function Kp(t,i,a){jn[zn++]=Yi,jn[zn++]=Ki,jn[zn++]=Bs,Bs=t;var l=Yi;t=Ki;var h=32-Xt(l)-1;l&=~(1<<h),a+=1;var d=32-Xt(i)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,Yi=1<<32-Xt(i)+h|a<<h|l,Ki=d+t}else Yi=1<<d|a<<h|l,Ki=t}function zf(t){t.return!==null&&(qs(t,1),Kp(t,1,0))}function Bf(t){for(;t===ac;)ac=za[--Ba],za[Ba]=null,oc=za[--Ba],za[Ba]=null;for(;t===Bs;)Bs=jn[--zn],jn[zn]=null,Ki=jn[--zn],jn[zn]=null,Yi=jn[--zn],jn[zn]=null}var on=null,ht=null,qe=!1,Fs=null,vi=!1,qf=Error(s(519));function Hs(t){var i=Error(s(418,""));throw ml(Ln(i,t)),qf}function Qp(t){var i=t.stateNode,a=t.type,l=t.memoizedProps;switch(i[It]=t,i[vt]=l,a){case"dialog":De("cancel",i),De("close",i);break;case"iframe":case"object":case"embed":De("load",i);break;case"video":case"audio":for(a=0;a<Ul.length;a++)De(Ul[a],i);break;case"source":De("error",i);break;case"img":case"image":case"link":De("error",i),De("load",i);break;case"details":De("toggle",i);break;case"input":De("invalid",i),Cs(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),ba(i);break;case"select":De("invalid",i);break;case"textarea":De("invalid",i),Ns(i,l.value,l.defaultValue,l.children),ba(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||hv(i.textContent,a)?(l.popover!=null&&(De("beforetoggle",i),De("toggle",i)),l.onScroll!=null&&De("scroll",i),l.onScrollEnd!=null&&De("scrollend",i),l.onClick!=null&&(i.onclick=Bc),i=!0):i=!1,i||Hs(t)}function $p(t){for(on=t.return;on;)switch(on.tag){case 5:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:on=on.return}}function fl(t){if(t!==on)return!1;if(!qe)return $p(t),qe=!0,!1;var i=t.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||rm(t.type,t.memoizedProps)),a=!a),a&&ht&&Hs(t),$p(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(i===0){ht=Jn(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;t=t.nextSibling}ht=null}}else i===27?(i=ht,Ur(t.type)?(t=lm,lm=null,ht=t):ht=i):ht=on?Jn(t.stateNode.nextSibling):null;return!0}function dl(){ht=on=null,qe=!1}function Xp(){var t=Fs;return t!==null&&(cn===null?cn=t:cn.push.apply(cn,t),Fs=null),t}function ml(t){Fs===null?Fs=[t]:Fs.push(t)}var Ff=F(null),Gs=null,Qi=null;function Ar(t,i,a){te(Ff,i._currentValue),i._currentValue=a}function $i(t){t._currentValue=Ff.current,Z(Ff)}function Hf(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function Gf(t,i,a,l){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=h;for(var I=0;I<i.length;I++)if(T.context===i[I]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),Hf(d.return,a,t),l||(v=null);break e}d=T.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),Hf(v,a,t),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===t){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function gl(t,i,a,l){t=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=h.type;vn(h.pendingProps.value,v.value)||(t!==null?t.push(T):t=[T])}}else if(h===Mt.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(Hl):t=[Hl])}h=h.return}t!==null&&Gf(i,t,a,l),i.flags|=262144}function lc(t){for(t=t.firstContext;t!==null;){if(!vn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ys(t){Gs=t,Qi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Wt(t){return Wp(Gs,t)}function uc(t,i){return Gs===null&&Ys(t),Wp(t,i)}function Wp(t,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Qi===null){if(t===null)throw Error(s(308));Qi=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Qi=Qi.next=i;return a}var nS=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(a){return a()})}},iS=r.unstable_scheduleCallback,rS=r.unstable_NormalPriority,Dt={$$typeof:ce,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yf(){return{controller:new nS,data:new Map,refCount:0}}function pl(t){t.refCount--,t.refCount===0&&iS(rS,function(){t.controller.abort()})}var yl=null,Kf=0,qa=0,Fa=null;function sS(t,i){if(yl===null){var a=yl=[];Kf=0,qa=$d(),Fa={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Kf++,i.then(Zp,Zp),i}function Zp(){if(--Kf===0&&yl!==null){Fa!==null&&(Fa.status="fulfilled");var t=yl;yl=null,qa=0,Fa=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function aS(t,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var Jp=G.S;G.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&sS(t,i),Jp!==null&&Jp(t,i)};var Ks=F(null);function Qf(){var t=Ks.current;return t!==null?t:nt.pooledCache}function cc(t,i){i===null?te(Ks,Ks.current):te(Ks,i.pool)}function ey(){var t=Qf();return t===null?null:{parent:Dt._currentValue,pool:t}}var _l=Error(s(460)),ty=Error(s(474)),hc=Error(s(542)),$f={then:function(){}};function ny(t){return t=t.status,t==="fulfilled"||t==="rejected"}function fc(){}function iy(t,i,a){switch(a=t[a],a===void 0?t.push(i):a!==i&&(i.then(fc,fc),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,sy(t),t;default:if(typeof i.status=="string")i.then(fc,fc);else{if(t=nt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,sy(t),t}throw vl=i,_l}}var vl=null;function ry(){if(vl===null)throw Error(s(459));var t=vl;return vl=null,t}function sy(t){if(t===_l||t===hc)throw Error(s(483))}var Sr=!1;function Xf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function br(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Rr(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ye&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=rc(t),Gp(t,null,a),i}return ic(t,l,i,a),rc(t)}function El(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Qo(t,a)}}function Zf(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}var Jf=!1;function Tl(){if(Jf){var t=Fa;if(t!==null)throw t}}function wl(t,i,a,l){Jf=!1;var h=t.updateQueue;Sr=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var I=T,j=I.next;I.next=null,v===null?d=j:v.next=j,v=I;var Y=t.alternate;Y!==null&&(Y=Y.updateQueue,T=Y.lastBaseUpdate,T!==v&&(T===null?Y.firstBaseUpdate=j:T.next=j,Y.lastBaseUpdate=I))}if(d!==null){var X=h.baseState;v=0,Y=j=I=null,T=d;do{var z=T.lane&-536870913,q=z!==T.lane;if(q?(Ue&z)===z:(l&z)===z){z!==0&&z===qa&&(Jf=!0),Y!==null&&(Y=Y.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var ve=t,pe=T;z=i;var We=a;switch(pe.tag){case 1:if(ve=pe.payload,typeof ve=="function"){X=ve.call(We,X,z);break e}X=ve;break e;case 3:ve.flags=ve.flags&-65537|128;case 0:if(ve=pe.payload,z=typeof ve=="function"?ve.call(We,X,z):ve,z==null)break e;X=E({},X,z);break e;case 2:Sr=!0}}z=T.callback,z!==null&&(t.flags|=64,q&&(t.flags|=8192),q=h.callbacks,q===null?h.callbacks=[z]:q.push(z))}else q={lane:z,tag:T.tag,payload:T.payload,callback:T.callback,next:null},Y===null?(j=Y=q,I=X):Y=Y.next=q,v|=z;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;q=T,T=q.next,q.next=null,h.lastBaseUpdate=q,h.shared.pending=null}}while(!0);Y===null&&(I=X),h.baseState=I,h.firstBaseUpdate=j,h.lastBaseUpdate=Y,d===null&&(h.shared.lanes=0),Pr|=v,t.lanes=v,t.memoizedState=X}}function ay(t,i){if(typeof t!="function")throw Error(s(191,t));t.call(i)}function oy(t,i){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)ay(a[t],i)}var Ha=F(null),dc=F(0);function ly(t,i){t=nr,te(dc,t),te(Ha,i),nr=t|i.baseLanes}function ed(){te(dc,nr),te(Ha,Ha.current)}function td(){nr=dc.current,Z(Ha),Z(dc)}var Ir=0,Re=null,$e=null,Tt=null,mc=!1,Ga=!1,Qs=!1,gc=0,Al=0,Ya=null,oS=0;function pt(){throw Error(s(321))}function nd(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!vn(t[a],i[a]))return!1;return!0}function id(t,i,a,l,h,d){return Ir=d,Re=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,G.H=t===null||t.memoizedState===null?Gy:Yy,Qs=!1,d=a(l,h),Qs=!1,Ga&&(d=cy(i,a,l,h)),uy(t),d}function uy(t){G.H=Tc;var i=$e!==null&&$e.next!==null;if(Ir=0,Tt=$e=Re=null,mc=!1,Al=0,Ya=null,i)throw Error(s(300));t===null||kt||(t=t.dependencies,t!==null&&lc(t)&&(kt=!0))}function cy(t,i,a,l){Re=t;var h=0;do{if(Ga&&(Ya=null),Al=0,Ga=!1,25<=h)throw Error(s(301));if(h+=1,Tt=$e=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}G.H=mS,d=i(a,l)}while(Ga);return d}function lS(){var t=G.H,i=t.useState()[0];return i=typeof i.then=="function"?Sl(i):i,t=t.useState()[0],($e!==null?$e.memoizedState:null)!==t&&(Re.flags|=1024),i}function rd(){var t=gc!==0;return gc=0,t}function sd(t,i,a){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~a}function ad(t){if(mc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}mc=!1}Ir=0,Tt=$e=Re=null,Ga=!1,Al=gc=0,Ya=null}function ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?Re.memoizedState=Tt=t:Tt=Tt.next=t,Tt}function wt(){if($e===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=$e.next;var i=Tt===null?Re.memoizedState:Tt.next;if(i!==null)Tt=i,$e=t;else{if(t===null)throw Re.alternate===null?Error(s(467)):Error(s(310));$e=t,t={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Tt===null?Re.memoizedState=Tt=t:Tt=Tt.next=t}return Tt}function od(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Sl(t){var i=Al;return Al+=1,Ya===null&&(Ya=[]),t=iy(Ya,t,i),i=Re,(Tt===null?i.memoizedState:Tt.next)===null&&(i=i.alternate,G.H=i===null||i.memoizedState===null?Gy:Yy),t}function pc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Sl(t);if(t.$$typeof===ce)return Wt(t)}throw Error(s(438,String(t)))}function ld(t){var i=null,a=Re.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Re.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=od(),Re.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(t),l=0;l<t;l++)a[l]=O;return i.index++,a}function Xi(t,i){return typeof i=="function"?i(t):i}function yc(t){var i=wt();return ud(i,$e,t)}function ud(t,i,a){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=t.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,l.pending=null}if(d=t.baseState,h===null)t.memoizedState=d;else{i=h.next;var T=v=null,I=null,j=i,Y=!1;do{var X=j.lane&-536870913;if(X!==j.lane?(Ue&X)===X:(Ir&X)===X){var z=j.revertLane;if(z===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),X===qa&&(Y=!0);else if((Ir&z)===z){j=j.next,z===qa&&(Y=!0);continue}else X={lane:0,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},I===null?(T=I=X,v=d):I=I.next=X,Re.lanes|=z,Pr|=z;X=j.action,Qs&&a(d,X),d=j.hasEagerState?j.eagerState:a(d,X)}else z={lane:X,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},I===null?(T=I=z,v=d):I=I.next=z,Re.lanes|=X,Pr|=X;j=j.next}while(j!==null&&j!==i);if(I===null?v=d:I.next=T,!vn(d,t.memoizedState)&&(kt=!0,Y&&(a=Fa,a!==null)))throw a;t.memoizedState=d,t.baseState=v,t.baseQueue=I,l.lastRenderedState=d}return h===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function cd(t){var i=wt(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=t(d,v.action),v=v.next;while(v!==h);vn(d,i.memoizedState)||(kt=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function hy(t,i,a){var l=Re,h=wt(),d=qe;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!vn(($e||h).memoizedState,a);v&&(h.memoizedState=a,kt=!0),h=h.queue;var T=my.bind(null,l,h,t);if(bl(2048,8,T,[t]),h.getSnapshot!==i||v||Tt!==null&&Tt.memoizedState.tag&1){if(l.flags|=2048,Ka(9,_c(),dy.bind(null,l,h,a,i),null),nt===null)throw Error(s(349));d||(Ir&124)!==0||fy(l,i,a)}return a}function fy(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Re.updateQueue,i===null?(i=od(),Re.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function dy(t,i,a,l){i.value=a,i.getSnapshot=l,gy(i)&&py(t)}function my(t,i,a){return a(function(){gy(i)&&py(t)})}function gy(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!vn(t,a)}catch{return!0}}function py(t){var i=Ua(t,2);i!==null&&bn(i,t,2)}function hd(t){var i=ln();if(typeof t=="function"){var a=t;if(t=a(),Qs){yn(!0);try{a()}finally{yn(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:t},i}function yy(t,i,a,l){return t.baseState=a,ud(t,$e,typeof l=="function"?l:Xi)}function uS(t,i,a,l,h){if(Ec(t))throw Error(s(485));if(t=i.action,t!==null){var d={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};G.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,_y(i,d)):(d.next=a.next,i.pending=a.next=d)}}function _y(t,i){var a=i.action,l=i.payload,h=t.state;if(i.isTransition){var d=G.T,v={};G.T=v;try{var T=a(h,l),I=G.S;I!==null&&I(v,T),vy(t,i,T)}catch(j){fd(t,i,j)}finally{G.T=d}}else try{d=a(h,l),vy(t,i,d)}catch(j){fd(t,i,j)}}function vy(t,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Ey(t,i,l)},function(l){return fd(t,i,l)}):Ey(t,i,a)}function Ey(t,i,a){i.status="fulfilled",i.value=a,Ty(i),t.state=a,i=t.pending,i!==null&&(a=i.next,a===i?t.pending=null:(a=a.next,i.next=a,_y(t,a)))}function fd(t,i,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,Ty(i),i=i.next;while(i!==l)}t.action=null}function Ty(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function wy(t,i){return i}function Ay(t,i){if(qe){var a=nt.formState;if(a!==null){e:{var l=Re;if(qe){if(ht){t:{for(var h=ht,d=vi;h.nodeType!==8;){if(!d){h=null;break t}if(h=Jn(h.nextSibling),h===null){h=null;break t}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){ht=Jn(h.nextSibling),l=h.data==="F!";break e}}Hs(l)}l=!1}l&&(i=a[0])}}return a=ln(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wy,lastRenderedState:i},a.queue=l,a=qy.bind(null,Re,l),l.dispatch=a,l=hd(!1),d=yd.bind(null,Re,!1,l.queue),l=ln(),h={state:i,dispatch:null,action:t,pending:null},l.queue=h,a=uS.bind(null,Re,h,d,a),h.dispatch=a,l.memoizedState=t,[i,a,!1]}function Sy(t){var i=wt();return by(i,$e,t)}function by(t,i,a){if(i=ud(t,i,wy)[0],t=yc(Xi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Sl(i)}catch(v){throw v===_l?hc:v}else l=i;i=wt();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(Re.flags|=2048,Ka(9,_c(),cS.bind(null,h,a),null)),[l,d,t]}function cS(t,i){t.action=i}function Ry(t){var i=wt(),a=$e;if(a!==null)return by(i,a,t);wt(),i=i.memoizedState,a=wt();var l=a.queue.dispatch;return a.memoizedState=t,[i,l,!1]}function Ka(t,i,a,l){return t={tag:t,create:a,deps:l,inst:i,next:null},i=Re.updateQueue,i===null&&(i=od(),Re.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t),t}function _c(){return{destroy:void 0,resource:void 0}}function Iy(){return wt().memoizedState}function vc(t,i,a,l){var h=ln();l=l===void 0?null:l,Re.flags|=t,h.memoizedState=Ka(1|i,_c(),a,l)}function bl(t,i,a,l){var h=wt();l=l===void 0?null:l;var d=h.memoizedState.inst;$e!==null&&l!==null&&nd(l,$e.memoizedState.deps)?h.memoizedState=Ka(i,d,a,l):(Re.flags|=t,h.memoizedState=Ka(1|i,d,a,l))}function Cy(t,i){vc(8390656,8,t,i)}function Ny(t,i){bl(2048,8,t,i)}function Dy(t,i){return bl(4,2,t,i)}function Oy(t,i){return bl(4,4,t,i)}function xy(t,i){if(typeof i=="function"){t=t();var a=i(t);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function My(t,i,a){a=a!=null?a.concat([t]):null,bl(4,4,xy.bind(null,i,t),a)}function dd(){}function Py(t,i){var a=wt();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&nd(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function Vy(t,i){var a=wt();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&nd(i,l[1]))return l[0];if(l=t(),Qs){yn(!0);try{t()}finally{yn(!1)}}return a.memoizedState=[l,i],l}function md(t,i,a){return a===void 0||(Ir&1073741824)!==0?t.memoizedState=i:(t.memoizedState=a,t=U_(),Re.lanes|=t,Pr|=t,a)}function ky(t,i,a,l){return vn(a,i)?a:Ha.current!==null?(t=md(t,a,l),vn(t,i)||(kt=!0),t):(Ir&42)===0?(kt=!0,t.memoizedState=a):(t=U_(),Re.lanes|=t,Pr|=t,i)}function Ly(t,i,a,l,h){var d=re.p;re.p=d!==0&&8>d?d:8;var v=G.T,T={};G.T=T,yd(t,!1,i,a);try{var I=h(),j=G.S;if(j!==null&&j(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var Y=aS(I,l);Rl(t,i,Y,Sn(t))}else Rl(t,i,l,Sn(t))}catch(X){Rl(t,i,{then:function(){},status:"rejected",reason:X},Sn())}finally{re.p=d,G.T=v}}function hS(){}function gd(t,i,a,l){if(t.tag!==5)throw Error(s(476));var h=Uy(t).queue;Ly(t,h,i,ee,a===null?hS:function(){return jy(t),a(l)})}function Uy(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:ee},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:a},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function jy(t){var i=Uy(t).next.queue;Rl(t,i,{},Sn())}function pd(){return Wt(Hl)}function zy(){return wt().memoizedState}function By(){return wt().memoizedState}function fS(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var a=Sn();t=br(a);var l=Rr(i,t,a);l!==null&&(bn(l,i,a),El(l,i,a)),i={cache:Yf()},t.payload=i;return}i=i.return}}function dS(t,i,a){var l=Sn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ec(t)?Fy(i,a):(a=kf(t,i,a,l),a!==null&&(bn(a,t,l),Hy(a,i,l)))}function qy(t,i,a){var l=Sn();Rl(t,i,a,l)}function Rl(t,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ec(t))Fy(i,h);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,T=d(v,a);if(h.hasEagerState=!0,h.eagerState=T,vn(T,v))return ic(t,i,h,0),nt===null&&nc(),!1}catch{}finally{}if(a=kf(t,i,h,l),a!==null)return bn(a,t,l),Hy(a,i,l),!0}return!1}function yd(t,i,a,l){if(l={lane:2,revertLane:$d(),action:l,hasEagerState:!1,eagerState:null,next:null},Ec(t)){if(i)throw Error(s(479))}else i=kf(t,a,l,2),i!==null&&bn(i,t,2)}function Ec(t){var i=t.alternate;return t===Re||i!==null&&i===Re}function Fy(t,i){Ga=mc=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Hy(t,i,a){if((a&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Qo(t,a)}}var Tc={readContext:Wt,use:pc,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useLayoutEffect:pt,useInsertionEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useSyncExternalStore:pt,useId:pt,useHostTransitionStatus:pt,useFormState:pt,useActionState:pt,useOptimistic:pt,useMemoCache:pt,useCacheRefresh:pt},Gy={readContext:Wt,use:pc,useCallback:function(t,i){return ln().memoizedState=[t,i===void 0?null:i],t},useContext:Wt,useEffect:Cy,useImperativeHandle:function(t,i,a){a=a!=null?a.concat([t]):null,vc(4194308,4,xy.bind(null,i,t),a)},useLayoutEffect:function(t,i){return vc(4194308,4,t,i)},useInsertionEffect:function(t,i){vc(4,2,t,i)},useMemo:function(t,i){var a=ln();i=i===void 0?null:i;var l=t();if(Qs){yn(!0);try{t()}finally{yn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(t,i,a){var l=ln();if(a!==void 0){var h=a(i);if(Qs){yn(!0);try{a(i)}finally{yn(!1)}}}else h=i;return l.memoizedState=l.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},l.queue=t,t=t.dispatch=dS.bind(null,Re,t),[l.memoizedState,t]},useRef:function(t){var i=ln();return t={current:t},i.memoizedState=t},useState:function(t){t=hd(t);var i=t.queue,a=qy.bind(null,Re,i);return i.dispatch=a,[t.memoizedState,a]},useDebugValue:dd,useDeferredValue:function(t,i){var a=ln();return md(a,t,i)},useTransition:function(){var t=hd(!1);return t=Ly.bind(null,Re,t.queue,!0,!1),ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,a){var l=Re,h=ln();if(qe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),nt===null)throw Error(s(349));(Ue&124)!==0||fy(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,Cy(my.bind(null,l,d,t),[t]),l.flags|=2048,Ka(9,_c(),dy.bind(null,l,d,a,i),null),a},useId:function(){var t=ln(),i=nt.identifierPrefix;if(qe){var a=Ki,l=Yi;a=(l&~(1<<32-Xt(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=gc++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=oS++,i="«"+i+"r"+a.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:pd,useFormState:Ay,useActionState:Ay,useOptimistic:function(t){var i=ln();i.memoizedState=i.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=yd.bind(null,Re,!0,a),a.dispatch=i,[t,i]},useMemoCache:ld,useCacheRefresh:function(){return ln().memoizedState=fS.bind(null,Re)}},Yy={readContext:Wt,use:pc,useCallback:Py,useContext:Wt,useEffect:Ny,useImperativeHandle:My,useInsertionEffect:Dy,useLayoutEffect:Oy,useMemo:Vy,useReducer:yc,useRef:Iy,useState:function(){return yc(Xi)},useDebugValue:dd,useDeferredValue:function(t,i){var a=wt();return ky(a,$e.memoizedState,t,i)},useTransition:function(){var t=yc(Xi)[0],i=wt().memoizedState;return[typeof t=="boolean"?t:Sl(t),i]},useSyncExternalStore:hy,useId:zy,useHostTransitionStatus:pd,useFormState:Sy,useActionState:Sy,useOptimistic:function(t,i){var a=wt();return yy(a,$e,t,i)},useMemoCache:ld,useCacheRefresh:By},mS={readContext:Wt,use:pc,useCallback:Py,useContext:Wt,useEffect:Ny,useImperativeHandle:My,useInsertionEffect:Dy,useLayoutEffect:Oy,useMemo:Vy,useReducer:cd,useRef:Iy,useState:function(){return cd(Xi)},useDebugValue:dd,useDeferredValue:function(t,i){var a=wt();return $e===null?md(a,t,i):ky(a,$e.memoizedState,t,i)},useTransition:function(){var t=cd(Xi)[0],i=wt().memoizedState;return[typeof t=="boolean"?t:Sl(t),i]},useSyncExternalStore:hy,useId:zy,useHostTransitionStatus:pd,useFormState:Ry,useActionState:Ry,useOptimistic:function(t,i){var a=wt();return $e!==null?yy(a,$e,t,i):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ld,useCacheRefresh:By},Qa=null,Il=0;function wc(t){var i=Il;return Il+=1,Qa===null&&(Qa=[]),iy(Qa,t,i)}function Cl(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Ac(t,i){throw i.$$typeof===R?Error(s(525)):(t=Object.prototype.toString.call(i),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Ky(t){var i=t._init;return i(t._payload)}function Qy(t){function i(k,D){if(t){var U=k.deletions;U===null?(k.deletions=[D],k.flags|=16):U.push(D)}}function a(k,D){if(!t)return null;for(;D!==null;)i(k,D),D=D.sibling;return null}function l(k){for(var D=new Map;k!==null;)k.key!==null?D.set(k.key,k):D.set(k.index,k),k=k.sibling;return D}function h(k,D){return k=Gi(k,D),k.index=0,k.sibling=null,k}function d(k,D,U){return k.index=U,t?(U=k.alternate,U!==null?(U=U.index,U<D?(k.flags|=67108866,D):U):(k.flags|=67108866,D)):(k.flags|=1048576,D)}function v(k){return t&&k.alternate===null&&(k.flags|=67108866),k}function T(k,D,U,Q){return D===null||D.tag!==6?(D=Uf(U,k.mode,Q),D.return=k,D):(D=h(D,U),D.return=k,D)}function I(k,D,U,Q){var ue=U.type;return ue===K?Y(k,D,U.props.children,Q,U.key):D!==null&&(D.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===S&&Ky(ue)===D.type)?(D=h(D,U.props),Cl(D,U),D.return=k,D):(D=sc(U.type,U.key,U.props,null,k.mode,Q),Cl(D,U),D.return=k,D)}function j(k,D,U,Q){return D===null||D.tag!==4||D.stateNode.containerInfo!==U.containerInfo||D.stateNode.implementation!==U.implementation?(D=jf(U,k.mode,Q),D.return=k,D):(D=h(D,U.children||[]),D.return=k,D)}function Y(k,D,U,Q,ue){return D===null||D.tag!==7?(D=zs(U,k.mode,Q,ue),D.return=k,D):(D=h(D,U),D.return=k,D)}function X(k,D,U){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=Uf(""+D,k.mode,U),D.return=k,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case b:return U=sc(D.type,D.key,D.props,null,k.mode,U),Cl(U,D),U.return=k,U;case B:return D=jf(D,k.mode,U),D.return=k,D;case S:var Q=D._init;return D=Q(D._payload),X(k,D,U)}if(et(D)||V(D))return D=zs(D,k.mode,U,null),D.return=k,D;if(typeof D.then=="function")return X(k,wc(D),U);if(D.$$typeof===ce)return X(k,uc(k,D),U);Ac(k,D)}return null}function z(k,D,U,Q){var ue=D!==null?D.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return ue!==null?null:T(k,D,""+U,Q);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case b:return U.key===ue?I(k,D,U,Q):null;case B:return U.key===ue?j(k,D,U,Q):null;case S:return ue=U._init,U=ue(U._payload),z(k,D,U,Q)}if(et(U)||V(U))return ue!==null?null:Y(k,D,U,Q,null);if(typeof U.then=="function")return z(k,D,wc(U),Q);if(U.$$typeof===ce)return z(k,D,uc(k,U),Q);Ac(k,U)}return null}function q(k,D,U,Q,ue){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return k=k.get(U)||null,T(D,k,""+Q,ue);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case b:return k=k.get(Q.key===null?U:Q.key)||null,I(D,k,Q,ue);case B:return k=k.get(Q.key===null?U:Q.key)||null,j(D,k,Q,ue);case S:var Ce=Q._init;return Q=Ce(Q._payload),q(k,D,U,Q,ue)}if(et(Q)||V(Q))return k=k.get(U)||null,Y(D,k,Q,ue,null);if(typeof Q.then=="function")return q(k,D,U,wc(Q),ue);if(Q.$$typeof===ce)return q(k,D,U,uc(D,Q),ue);Ac(D,Q)}return null}function ve(k,D,U,Q){for(var ue=null,Ce=null,he=D,ye=D=0,Ut=null;he!==null&&ye<U.length;ye++){he.index>ye?(Ut=he,he=null):Ut=he.sibling;var Be=z(k,he,U[ye],Q);if(Be===null){he===null&&(he=Ut);break}t&&he&&Be.alternate===null&&i(k,he),D=d(Be,D,ye),Ce===null?ue=Be:Ce.sibling=Be,Ce=Be,he=Ut}if(ye===U.length)return a(k,he),qe&&qs(k,ye),ue;if(he===null){for(;ye<U.length;ye++)he=X(k,U[ye],Q),he!==null&&(D=d(he,D,ye),Ce===null?ue=he:Ce.sibling=he,Ce=he);return qe&&qs(k,ye),ue}for(he=l(he);ye<U.length;ye++)Ut=q(he,k,ye,U[ye],Q),Ut!==null&&(t&&Ut.alternate!==null&&he.delete(Ut.key===null?ye:Ut.key),D=d(Ut,D,ye),Ce===null?ue=Ut:Ce.sibling=Ut,Ce=Ut);return t&&he.forEach(function(Fr){return i(k,Fr)}),qe&&qs(k,ye),ue}function pe(k,D,U,Q){if(U==null)throw Error(s(151));for(var ue=null,Ce=null,he=D,ye=D=0,Ut=null,Be=U.next();he!==null&&!Be.done;ye++,Be=U.next()){he.index>ye?(Ut=he,he=null):Ut=he.sibling;var Fr=z(k,he,Be.value,Q);if(Fr===null){he===null&&(he=Ut);break}t&&he&&Fr.alternate===null&&i(k,he),D=d(Fr,D,ye),Ce===null?ue=Fr:Ce.sibling=Fr,Ce=Fr,he=Ut}if(Be.done)return a(k,he),qe&&qs(k,ye),ue;if(he===null){for(;!Be.done;ye++,Be=U.next())Be=X(k,Be.value,Q),Be!==null&&(D=d(Be,D,ye),Ce===null?ue=Be:Ce.sibling=Be,Ce=Be);return qe&&qs(k,ye),ue}for(he=l(he);!Be.done;ye++,Be=U.next())Be=q(he,k,ye,Be.value,Q),Be!==null&&(t&&Be.alternate!==null&&he.delete(Be.key===null?ye:Be.key),D=d(Be,D,ye),Ce===null?ue=Be:Ce.sibling=Be,Ce=Be);return t&&he.forEach(function(gb){return i(k,gb)}),qe&&qs(k,ye),ue}function We(k,D,U,Q){if(typeof U=="object"&&U!==null&&U.type===K&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case b:e:{for(var ue=U.key;D!==null;){if(D.key===ue){if(ue=U.type,ue===K){if(D.tag===7){a(k,D.sibling),Q=h(D,U.props.children),Q.return=k,k=Q;break e}}else if(D.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===S&&Ky(ue)===D.type){a(k,D.sibling),Q=h(D,U.props),Cl(Q,U),Q.return=k,k=Q;break e}a(k,D);break}else i(k,D);D=D.sibling}U.type===K?(Q=zs(U.props.children,k.mode,Q,U.key),Q.return=k,k=Q):(Q=sc(U.type,U.key,U.props,null,k.mode,Q),Cl(Q,U),Q.return=k,k=Q)}return v(k);case B:e:{for(ue=U.key;D!==null;){if(D.key===ue)if(D.tag===4&&D.stateNode.containerInfo===U.containerInfo&&D.stateNode.implementation===U.implementation){a(k,D.sibling),Q=h(D,U.children||[]),Q.return=k,k=Q;break e}else{a(k,D);break}else i(k,D);D=D.sibling}Q=jf(U,k.mode,Q),Q.return=k,k=Q}return v(k);case S:return ue=U._init,U=ue(U._payload),We(k,D,U,Q)}if(et(U))return ve(k,D,U,Q);if(V(U)){if(ue=V(U),typeof ue!="function")throw Error(s(150));return U=ue.call(U),pe(k,D,U,Q)}if(typeof U.then=="function")return We(k,D,wc(U),Q);if(U.$$typeof===ce)return We(k,D,uc(k,U),Q);Ac(k,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,D!==null&&D.tag===6?(a(k,D.sibling),Q=h(D,U),Q.return=k,k=Q):(a(k,D),Q=Uf(U,k.mode,Q),Q.return=k,k=Q),v(k)):a(k,D)}return function(k,D,U,Q){try{Il=0;var ue=We(k,D,U,Q);return Qa=null,ue}catch(he){if(he===_l||he===hc)throw he;var Ce=En(29,he,null,k.mode);return Ce.lanes=Q,Ce.return=k,Ce}finally{}}}var $a=Qy(!0),$y=Qy(!1),Bn=F(null),Ei=null;function Cr(t){var i=t.alternate;te(Ot,Ot.current&1),te(Bn,t),Ei===null&&(i===null||Ha.current!==null||i.memoizedState!==null)&&(Ei=t)}function Xy(t){if(t.tag===22){if(te(Ot,Ot.current),te(Bn,t),Ei===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(Ei=t)}}else Nr()}function Nr(){te(Ot,Ot.current),te(Bn,Bn.current)}function Wi(t){Z(Bn),Ei===t&&(Ei=null),Z(Ot)}var Ot=F(0);function Sc(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||om(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function _d(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:E({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var vd={enqueueSetState:function(t,i,a){t=t._reactInternals;var l=Sn(),h=br(l);h.payload=i,a!=null&&(h.callback=a),i=Rr(t,h,l),i!==null&&(bn(i,t,l),El(i,t,l))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=Sn(),h=br(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Rr(t,h,l),i!==null&&(bn(i,t,l),El(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Sn(),l=br(a);l.tag=2,i!=null&&(l.callback=i),i=Rr(t,l,a),i!==null&&(bn(i,t,a),El(i,t,a))}};function Wy(t,i,a,l,h,d,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!cl(a,l)||!cl(h,d):!0}function Zy(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&vd.enqueueReplaceState(i,i.state,null)}function $s(t,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(t=t.defaultProps){a===i&&(a=E({},a));for(var h in t)a[h]===void 0&&(a[h]=t[h])}return a}var bc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Jy(t){bc(t)}function e_(t){console.error(t)}function t_(t){bc(t)}function Rc(t,i){try{var a=t.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function n_(t,i,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Ed(t,i,a){return a=br(a),a.tag=3,a.payload={element:null},a.callback=function(){Rc(t,i)},a}function i_(t){return t=br(t),t.tag=3,t}function r_(t,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;t.payload=function(){return h(d)},t.callback=function(){n_(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){n_(i,a,l),typeof h!="function"&&(Vr===null?Vr=new Set([this]):Vr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function gS(t,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&gl(i,a,h,!0),a=Bn.current,a!==null){switch(a.tag){case 13:return Ei===null?Hd():a.alternate===null&&ft===0&&(ft=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===$f?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),Yd(t,l,h)),!1;case 22:return a.flags|=65536,l===$f?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),Yd(t,l,h)),!1}throw Error(s(435,a.tag))}return Yd(t,l,h),Hd(),!1}if(qe)return i=Bn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==qf&&(t=Error(s(422),{cause:l}),ml(Ln(t,a)))):(l!==qf&&(i=Error(s(423),{cause:l}),ml(Ln(i,a))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,l=Ln(l,a),h=Ed(t.stateNode,l,h),Zf(t,h),ft!==4&&(ft=2)),!1;var d=Error(s(520),{cause:l});if(d=Ln(d,a),Vl===null?Vl=[d]:Vl.push(d),ft!==4&&(ft=2),i===null)return!0;l=Ln(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,t=h&-h,a.lanes|=t,t=Ed(a.stateNode,l,t),Zf(a,t),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Vr===null||!Vr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=i_(h),r_(h,t,a,l),Zf(a,h),!1}a=a.return}while(a!==null);return!1}var s_=Error(s(461)),kt=!1;function Ft(t,i,a,l){i.child=t===null?$y(i,null,a,l):$a(i,t.child,a,l)}function a_(t,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var v={};for(var T in l)T!=="ref"&&(v[T]=l[T])}else v=l;return Ys(i),l=id(t,i,a,v,d,h),T=rd(),t!==null&&!kt?(sd(t,i,h),Zi(t,i,h)):(qe&&T&&zf(i),i.flags|=1,Ft(t,i,l,h),i.child)}function o_(t,i,a,l,h){if(t===null){var d=a.type;return typeof d=="function"&&!Lf(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,l_(t,i,d,l,h)):(t=sc(a.type,null,l,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!Cd(t,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:cl,a(v,l)&&t.ref===i.ref)return Zi(t,i,h)}return i.flags|=1,t=Gi(d,l),t.ref=i.ref,t.return=i,i.child=t}function l_(t,i,a,l,h){if(t!==null){var d=t.memoizedProps;if(cl(d,l)&&t.ref===i.ref)if(kt=!1,i.pendingProps=l=d,Cd(t,h))(t.flags&131072)!==0&&(kt=!0);else return i.lanes=t.lanes,Zi(t,i,h)}return Td(t,i,a,l,h)}function u_(t,i,a){var l=i.pendingProps,h=l.children,d=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,t!==null){for(h=i.child=t.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return c_(t,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&cc(i,d!==null?d.cachePool:null),d!==null?ly(i,d):ed(),Xy(i);else return i.lanes=i.childLanes=536870912,c_(t,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(cc(i,d.cachePool),ly(i,d),Nr(),i.memoizedState=null):(t!==null&&cc(i,null),ed(),Nr());return Ft(t,i,h,a),i.child}function c_(t,i,a,l){var h=Qf();return h=h===null?null:{parent:Dt._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},t!==null&&cc(i,null),ed(),Xy(i),t!==null&&gl(t,i,l,!0),null}function Ic(t,i){var a=i.ref;if(a===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(i.flags|=4194816)}}function Td(t,i,a,l,h){return Ys(i),a=id(t,i,a,l,void 0,h),l=rd(),t!==null&&!kt?(sd(t,i,h),Zi(t,i,h)):(qe&&l&&zf(i),i.flags|=1,Ft(t,i,a,h),i.child)}function h_(t,i,a,l,h,d){return Ys(i),i.updateQueue=null,a=cy(i,l,a,h),uy(t),l=rd(),t!==null&&!kt?(sd(t,i,d),Zi(t,i,d)):(qe&&l&&zf(i),i.flags|=1,Ft(t,i,a,d),i.child)}function f_(t,i,a,l,h){if(Ys(i),i.stateNode===null){var d=ja,v=a.contextType;typeof v=="object"&&v!==null&&(d=Wt(v)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=vd,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Xf(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?Wt(v):ja,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(_d(i,a,v,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&vd.enqueueReplaceState(d,d.state,null),wl(i,l,d,h),Tl(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var T=i.memoizedProps,I=$s(a,T);d.props=I;var j=d.context,Y=a.contextType;v=ja,typeof Y=="object"&&Y!==null&&(v=Wt(Y));var X=a.getDerivedStateFromProps;Y=typeof X=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,Y||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||j!==v)&&Zy(i,d,l,v),Sr=!1;var z=i.memoizedState;d.state=z,wl(i,l,d,h),Tl(),j=i.memoizedState,T||z!==j||Sr?(typeof X=="function"&&(_d(i,a,X,l),j=i.memoizedState),(I=Sr||Wy(i,a,I,l,z,j,v))?(Y||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=j),d.props=l,d.state=j,d.context=v,l=I):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Wf(t,i),v=i.memoizedProps,Y=$s(a,v),d.props=Y,X=i.pendingProps,z=d.context,j=a.contextType,I=ja,typeof j=="object"&&j!==null&&(I=Wt(j)),T=a.getDerivedStateFromProps,(j=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==X||z!==I)&&Zy(i,d,l,I),Sr=!1,z=i.memoizedState,d.state=z,wl(i,l,d,h),Tl();var q=i.memoizedState;v!==X||z!==q||Sr||t!==null&&t.dependencies!==null&&lc(t.dependencies)?(typeof T=="function"&&(_d(i,a,T,l),q=i.memoizedState),(Y=Sr||Wy(i,a,Y,l,z,q,I)||t!==null&&t.dependencies!==null&&lc(t.dependencies))?(j||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,q,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,q,I)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&z===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&z===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=q),d.props=l,d.state=q,d.context=I,l=Y):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&z===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&z===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,Ic(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=$a(i,t.child,null,h),i.child=$a(i,null,a,h)):Ft(t,i,a,h),i.memoizedState=d.state,t=i.child):t=Zi(t,i,h),t}function d_(t,i,a,l){return dl(),i.flags|=256,Ft(t,i,a,l),i.child}var wd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ad(t){return{baseLanes:t,cachePool:ey()}}function Sd(t,i,a){return t=t!==null?t.childLanes&~a:0,i&&(t|=qn),t}function m_(t,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=t!==null&&t.memoizedState===null?!1:(Ot.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,t===null){if(qe){if(h?Cr(i):Nr(),qe){var T=ht,I;if(I=T){e:{for(I=T,T=vi;I.nodeType!==8;){if(!T){T=null;break e}if(I=Jn(I.nextSibling),I===null){T=null;break e}}T=I}T!==null?(i.memoizedState={dehydrated:T,treeContext:Bs!==null?{id:Yi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},I=En(18,null,null,0),I.stateNode=T,I.return=i,i.child=I,on=i,ht=null,I=!0):I=!1}I||Hs(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return om(T)?i.lanes=32:i.lanes=536870912,null;Wi(i)}return T=l.children,l=l.fallback,h?(Nr(),h=i.mode,T=Cc({mode:"hidden",children:T},h),l=zs(l,h,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,h=i.child,h.memoizedState=Ad(a),h.childLanes=Sd(t,v,a),i.memoizedState=wd,l):(Cr(i),bd(i,T))}if(I=t.memoizedState,I!==null&&(T=I.dehydrated,T!==null)){if(d)i.flags&256?(Cr(i),i.flags&=-257,i=Rd(t,i,a)):i.memoizedState!==null?(Nr(),i.child=t.child,i.flags|=128,i=null):(Nr(),h=l.fallback,T=i.mode,l=Cc({mode:"visible",children:l.children},T),h=zs(h,T,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,$a(i,t.child,null,a),l=i.child,l.memoizedState=Ad(a),l.childLanes=Sd(t,v,a),i.memoizedState=wd,i=h);else if(Cr(i),om(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var j=v.dgst;v=j,l=Error(s(419)),l.stack="",l.digest=v,ml({value:l,source:null,stack:null}),i=Rd(t,i,a)}else if(kt||gl(t,i,a,!1),v=(a&t.childLanes)!==0,kt||v){if(v=nt,v!==null&&(l=a&-a,l=(l&42)!==0?1:pr(l),l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==I.retryLane))throw I.retryLane=l,Ua(t,l),bn(v,t,l),s_;T.data==="$?"||Hd(),i=Rd(t,i,a)}else T.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=I.treeContext,ht=Jn(T.nextSibling),on=i,qe=!0,Fs=null,vi=!1,t!==null&&(jn[zn++]=Yi,jn[zn++]=Ki,jn[zn++]=Bs,Yi=t.id,Ki=t.overflow,Bs=i),i=bd(i,l.children),i.flags|=4096);return i}return h?(Nr(),h=l.fallback,T=i.mode,I=t.child,j=I.sibling,l=Gi(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&65011712,j!==null?h=Gi(j,h):(h=zs(h,T,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,T=t.child.memoizedState,T===null?T=Ad(a):(I=T.cachePool,I!==null?(j=Dt._currentValue,I=I.parent!==j?{parent:j,pool:j}:I):I=ey(),T={baseLanes:T.baseLanes|a,cachePool:I}),h.memoizedState=T,h.childLanes=Sd(t,v,a),i.memoizedState=wd,l):(Cr(i),a=t.child,t=a.sibling,a=Gi(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,t!==null&&(v=i.deletions,v===null?(i.deletions=[t],i.flags|=16):v.push(t)),i.child=a,i.memoizedState=null,a)}function bd(t,i){return i=Cc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Cc(t,i){return t=En(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Rd(t,i,a){return $a(i,t.child,null,a),t=bd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function g_(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Hf(t.return,i,a)}function Id(t,i,a,l,h){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function p_(t,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(Ft(t,i,l.children,a),l=Ot.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&g_(t,a,i);else if(t.tag===19)g_(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(te(Ot,l),h){case"forwards":for(a=i.child,h=null;a!==null;)t=a.alternate,t!==null&&Sc(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Id(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&Sc(t)===null){i.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}Id(i,!0,a,null,d);break;case"together":Id(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Zi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Pr|=i.lanes,(a&i.childLanes)===0)if(t!==null){if(gl(t,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(s(153));if(i.child!==null){for(t=i.child,a=Gi(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Gi(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function Cd(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&lc(t)))}function pS(t,i,a){switch(i.tag){case 3:tt(i,i.stateNode.containerInfo),Ar(i,Dt,t.memoizedState.cache),dl();break;case 27:case 5:gr(i);break;case 4:tt(i,i.stateNode.containerInfo);break;case 10:Ar(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Cr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?m_(t,i,a):(Cr(i),t=Zi(t,i,a),t!==null?t.sibling:null);Cr(i);break;case 19:var h=(t.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(gl(t,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return p_(t,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),te(Ot,Ot.current),l)break;return null;case 22:case 23:return i.lanes=0,u_(t,i,a);case 24:Ar(i,Dt,t.memoizedState.cache)}return Zi(t,i,a)}function y_(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps)kt=!0;else{if(!Cd(t,a)&&(i.flags&128)===0)return kt=!1,pS(t,i,a);kt=(t.flags&131072)!==0}else kt=!1,qe&&(i.flags&1048576)!==0&&Kp(i,oc,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")Lf(l)?(t=$s(l,t),i.tag=1,i=f_(null,i,l,t,a)):(i.tag=0,i=Td(null,i,l,t,a));else{if(l!=null){if(h=l.$$typeof,h===Se){i.tag=11,i=a_(null,i,l,t,a);break e}else if(h===M){i.tag=14,i=o_(null,i,l,t,a);break e}}throw i=mt(l)||l,Error(s(306,i,""))}}return i;case 0:return Td(t,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=$s(l,i.pendingProps),f_(t,i,l,h,a);case 3:e:{if(tt(i,i.stateNode.containerInfo),t===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,Wf(t,i),wl(i,l,null,a);var v=i.memoizedState;if(l=v.cache,Ar(i,Dt,l),l!==d.cache&&Gf(i,[Dt],a,!0),Tl(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=d_(t,i,l,a);break e}else if(l!==h){h=Ln(Error(s(424)),i),ml(h),i=d_(t,i,l,a);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ht=Jn(t.firstChild),on=i,qe=!0,Fs=null,vi=!0,a=$y(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(dl(),l===h){i=Zi(t,i,a);break e}Ft(t,i,l,a)}i=i.child}return i;case 26:return Ic(t,i),t===null?(a=Tv(i.type,null,i.pendingProps,null))?i.memoizedState=a:qe||(a=i.type,t=i.pendingProps,l=qc(Te.current).createElement(a),l[It]=i,l[vt]=t,Gt(l,a,t),gt(l),i.stateNode=l):i.memoizedState=Tv(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return gr(i),t===null&&qe&&(l=i.stateNode=_v(i.type,i.pendingProps,Te.current),on=i,vi=!0,h=ht,Ur(i.type)?(lm=h,ht=Jn(l.firstChild)):ht=h),Ft(t,i,i.pendingProps.children,a),Ic(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&qe&&((h=l=ht)&&(l=HS(l,i.type,i.pendingProps,vi),l!==null?(i.stateNode=l,on=i,ht=Jn(l.firstChild),vi=!1,h=!0):h=!1),h||Hs(i)),gr(i),h=i.type,d=i.pendingProps,v=t!==null?t.memoizedProps:null,l=d.children,rm(h,d)?l=null:v!==null&&rm(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=id(t,i,lS,null,null,a),Hl._currentValue=h),Ic(t,i),Ft(t,i,l,a),i.child;case 6:return t===null&&qe&&((t=a=ht)&&(a=GS(a,i.pendingProps,vi),a!==null?(i.stateNode=a,on=i,ht=null,t=!0):t=!1),t||Hs(i)),null;case 13:return m_(t,i,a);case 4:return tt(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=$a(i,null,l,a):Ft(t,i,l,a),i.child;case 11:return a_(t,i,i.type,i.pendingProps,a);case 7:return Ft(t,i,i.pendingProps,a),i.child;case 8:return Ft(t,i,i.pendingProps.children,a),i.child;case 12:return Ft(t,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,Ar(i,i.type,l.value),Ft(t,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Ys(i),h=Wt(h),l=l(h),i.flags|=1,Ft(t,i,l,a),i.child;case 14:return o_(t,i,i.type,i.pendingProps,a);case 15:return l_(t,i,i.type,i.pendingProps,a);case 19:return p_(t,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},t===null?(a=Cc(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Gi(t.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return u_(t,i,a);case 24:return Ys(i),l=Wt(Dt),t===null?(h=Qf(),h===null&&(h=nt,d=Yf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},Xf(i),Ar(i,Dt,h)):((t.lanes&a)!==0&&(Wf(t,i),wl(i,null,null,a),Tl()),h=t.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Ar(i,Dt,l)):(l=d.cache,Ar(i,Dt,l),l!==h.cache&&Gf(i,[Dt],a,!0))),Ft(t,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Ji(t){t.flags|=4}function __(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Rv(i)){if(i=Bn.current,i!==null&&((Ue&4194048)===Ue?Ei!==null:(Ue&62914560)!==Ue&&(Ue&536870912)===0||i!==Ei))throw vl=$f,ty;t.flags|=8192}}function Nc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Yo():536870912,t.lanes|=i,Ja|=i)}function Nl(t,i){if(!qe)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function lt(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function yS(t,i,a){var l=i.pendingProps;switch(Bf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(i),null;case 1:return lt(i),null;case 3:return a=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),$i(Dt),oi(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(fl(i)?Ji(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Xp())),lt(i),null;case 26:return a=i.memoizedState,t===null?(Ji(i),a!==null?(lt(i),__(i,a)):(lt(i),i.flags&=-16777217)):a?a!==t.memoizedState?(Ji(i),lt(i),__(i,a)):(lt(i),i.flags&=-16777217):(t.memoizedProps!==l&&Ji(i),lt(i),i.flags&=-16777217),null;case 27:xi(i),a=Te.current;var h=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Ji(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return lt(i),null}t=ge.current,fl(i)?Qp(i):(t=_v(h,l,a),i.stateNode=t,Ji(i))}return lt(i),null;case 5:if(xi(i),a=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Ji(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return lt(i),null}if(t=ge.current,fl(i))Qp(i);else{switch(h=qc(Te.current),t){case 1:t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=h.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}t[It]=i,t[vt]=l;e:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)t.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break e;for(;h.sibling===null;){if(h.return===null||h.return===i)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=t;e:switch(Gt(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Ji(i)}}return lt(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Ji(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(t=Te.current,fl(i)){if(t=i.stateNode,a=i.memoizedProps,l=null,h=on,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}t[It]=i,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||hv(t.nodeValue,a)),t||Hs(i)}else t=qc(t).createTextNode(l),t[It]=i,i.stateNode=t}return lt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=fl(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[It]=i}else dl(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;lt(i),h=!1}else h=Xp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Wi(i),i):(Wi(i),null)}if(Wi(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==t&&a&&(i.child.flags|=8192),Nc(i,i.updateQueue),lt(i),null;case 4:return oi(),t===null&&Jd(i.stateNode.containerInfo),lt(i),null;case 10:return $i(i.type),lt(i),null;case 19:if(Z(Ot),h=i.memoizedState,h===null)return lt(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)Nl(h,!1);else{if(ft!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=Sc(t),d!==null){for(i.flags|=128,Nl(h,!1),t=d.updateQueue,i.updateQueue=t,Nc(i,t),i.subtreeFlags=0,t=a,a=i.child;a!==null;)Yp(a,t),a=a.sibling;return te(Ot,Ot.current&1|2),i.child}t=t.sibling}h.tail!==null&&On()>xc&&(i.flags|=128,l=!0,Nl(h,!1),i.lanes=4194304)}else{if(!l)if(t=Sc(d),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,Nc(i,t),Nl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!qe)return lt(i),null}else 2*On()-h.renderingStartTime>xc&&a!==536870912&&(i.flags|=128,l=!0,Nl(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(t=h.last,t!==null?t.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=On(),i.sibling=null,t=Ot.current,te(Ot,l?t&1|2:t&1),i):(lt(i),null);case 22:case 23:return Wi(i),td(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(lt(i),i.subtreeFlags&6&&(i.flags|=8192)):lt(i),a=i.updateQueue,a!==null&&Nc(i,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),t!==null&&Z(Ks),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),$i(Dt),lt(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function _S(t,i){switch(Bf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return $i(Dt),oi(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return xi(i),null;case 13:if(Wi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(s(340));dl()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Z(Ot),null;case 4:return oi(),null;case 10:return $i(i.type),null;case 22:case 23:return Wi(i),td(),t!==null&&Z(Ks),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return $i(Dt),null;case 25:return null;default:return null}}function v_(t,i){switch(Bf(i),i.tag){case 3:$i(Dt),oi();break;case 26:case 27:case 5:xi(i);break;case 4:oi();break;case 13:Wi(i);break;case 19:Z(Ot);break;case 10:$i(i.type);break;case 22:case 23:Wi(i),td(),t!==null&&Z(Ks);break;case 24:$i(Dt)}}function Dl(t,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&t)===t){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(T){Je(i,i.return,T)}}function Dr(t,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&t)===t){var v=l.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,h=i;var I=a,j=T;try{j()}catch(Y){Je(h,I,Y)}}}l=l.next}while(l!==d)}}catch(Y){Je(i,i.return,Y)}}function E_(t){var i=t.updateQueue;if(i!==null){var a=t.stateNode;try{oy(i,a)}catch(l){Je(t,t.return,l)}}}function T_(t,i,a){a.props=$s(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){Je(t,i,l)}}function Ol(t,i){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(h){Je(t,i,h)}}function Ti(t,i){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Je(t,i,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Je(t,i,h)}else a.current=null}function w_(t){var i=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Je(t,t.return,h)}}function Nd(t,i,a){try{var l=t.stateNode;jS(l,t.type,a,i),l[vt]=i}catch(h){Je(t,t.return,h)}}function A_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ur(t.type)||t.tag===4}function Dd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||A_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ur(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Od(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(t),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Bc));else if(l!==4&&(l===27&&Ur(t.type)&&(a=t.stateNode,i=null),t=t.child,t!==null))for(Od(t,i,a),t=t.sibling;t!==null;)Od(t,i,a),t=t.sibling}function Dc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(l===27&&Ur(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Dc(t,i,a),t=t.sibling;t!==null;)Dc(t,i,a),t=t.sibling}function S_(t){var i=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Gt(i,l,a),i[It]=t,i[vt]=a}catch(d){Je(t,t.return,d)}}var er=!1,yt=!1,xd=!1,b_=typeof WeakSet=="function"?WeakSet:Set,Lt=null;function vS(t,i){if(t=t.containerInfo,nm=Qc,t=kp(t),Df(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var v=0,T=-1,I=-1,j=0,Y=0,X=t,z=null;t:for(;;){for(var q;X!==a||h!==0&&X.nodeType!==3||(T=v+h),X!==d||l!==0&&X.nodeType!==3||(I=v+l),X.nodeType===3&&(v+=X.nodeValue.length),(q=X.firstChild)!==null;)z=X,X=q;for(;;){if(X===t)break t;if(z===a&&++j===h&&(T=v),z===d&&++Y===l&&(I=v),(q=X.nextSibling)!==null)break;X=z,z=X.parentNode}X=q}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(im={focusedElem:t,selectionRange:a},Qc=!1,Lt=i;Lt!==null;)if(i=Lt,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,Lt=t;else for(;Lt!==null;){switch(i=Lt,d=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var ve=$s(a.type,h,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(ve,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(pe){Je(a,a.return,pe)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,a=t.nodeType,a===9)am(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":am(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=i.sibling,t!==null){t.return=i.return,Lt=t;break}Lt=i.return}}function R_(t,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Or(t,a),l&4&&Dl(5,a);break;case 1:if(Or(t,a),l&4)if(t=a.stateNode,i===null)try{t.componentDidMount()}catch(v){Je(a,a.return,v)}else{var h=$s(a.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(h,i,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Je(a,a.return,v)}}l&64&&E_(a),l&512&&Ol(a,a.return);break;case 3:if(Or(t,a),l&64&&(t=a.updateQueue,t!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{oy(t,i)}catch(v){Je(a,a.return,v)}}break;case 27:i===null&&l&4&&S_(a);case 26:case 5:Or(t,a),i===null&&l&4&&w_(a),l&512&&Ol(a,a.return);break;case 12:Or(t,a);break;case 13:Or(t,a),l&4&&N_(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=CS.bind(null,a),YS(t,a))));break;case 22:if(l=a.memoizedState!==null||er,!l){i=i!==null&&i.memoizedState!==null||yt,h=er;var d=yt;er=l,(yt=i)&&!d?xr(t,a,(a.subtreeFlags&8772)!==0):Or(t,a),er=h,yt=d}break;case 30:break;default:Or(t,a)}}function I_(t){var i=t.alternate;i!==null&&(t.alternate=null,I_(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&vr(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ot=null,un=!1;function tr(t,i,a){for(a=a.child;a!==null;)C_(t,i,a),a=a.sibling}function C_(t,i,a){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(ct,a)}catch{}switch(a.tag){case 26:yt||Ti(a,i),tr(t,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:yt||Ti(a,i);var l=ot,h=un;Ur(a.type)&&(ot=a.stateNode,un=!1),tr(t,i,a),zl(a.stateNode),ot=l,un=h;break;case 5:yt||Ti(a,i);case 6:if(l=ot,h=un,ot=null,tr(t,i,a),ot=l,un=h,ot!==null)if(un)try{(ot.nodeType===9?ot.body:ot.nodeName==="HTML"?ot.ownerDocument.body:ot).removeChild(a.stateNode)}catch(d){Je(a,i,d)}else try{ot.removeChild(a.stateNode)}catch(d){Je(a,i,d)}break;case 18:ot!==null&&(un?(t=ot,pv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ql(t)):pv(ot,a.stateNode));break;case 4:l=ot,h=un,ot=a.stateNode.containerInfo,un=!0,tr(t,i,a),ot=l,un=h;break;case 0:case 11:case 14:case 15:yt||Dr(2,a,i),yt||Dr(4,a,i),tr(t,i,a);break;case 1:yt||(Ti(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&T_(a,i,l)),tr(t,i,a);break;case 21:tr(t,i,a);break;case 22:yt=(l=yt)||a.memoizedState!==null,tr(t,i,a),yt=l;break;default:tr(t,i,a)}}function N_(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ql(t)}catch(a){Je(i,i.return,a)}}function ES(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new b_),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new b_),i;default:throw Error(s(435,t.tag))}}function Md(t,i){var a=ES(t);i.forEach(function(l){var h=NS.bind(null,t,l);a.has(l)||(a.add(l),l.then(h,h))})}function Tn(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=t,v=i,T=v;e:for(;T!==null;){switch(T.tag){case 27:if(Ur(T.type)){ot=T.stateNode,un=!1;break e}break;case 5:ot=T.stateNode,un=!1;break e;case 3:case 4:ot=T.stateNode.containerInfo,un=!0;break e}T=T.return}if(ot===null)throw Error(s(160));C_(d,v,h),ot=null,un=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)D_(i,t),i=i.sibling}var Zn=null;function D_(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Tn(i,t),wn(t),l&4&&(Dr(3,t,t.return),Dl(3,t),Dr(5,t,t.return));break;case 1:Tn(i,t),wn(t),l&512&&(yt||a===null||Ti(a,a.return)),l&64&&er&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=Zn;if(Tn(i,t),wn(t),l&512&&(yt||a===null||Ti(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[Ss]||d[It]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Gt(d,l,a),d[It]=t,gt(d),l=d;break e;case"link":var v=Sv("link","href",h).get(l+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(d=v[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break t}}d=h.createElement(l),Gt(d,l,a),h.head.appendChild(d);break;case"meta":if(v=Sv("meta","content",h).get(l+(a.content||""))){for(T=0;T<v.length;T++)if(d=v[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break t}}d=h.createElement(l),Gt(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[It]=t,gt(d),l=d}t.stateNode=l}else bv(h,t.type,t.stateNode);else t.stateNode=Av(h,l,t.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?bv(h,t.type,t.stateNode):Av(h,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Nd(t,t.memoizedProps,a.memoizedProps)}break;case 27:Tn(i,t),wn(t),l&512&&(yt||a===null||Ti(a,a.return)),a!==null&&l&4&&Nd(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Tn(i,t),wn(t),l&512&&(yt||a===null||Ti(a,a.return)),t.flags&32){h=t.stateNode;try{Mn(h,"")}catch(q){Je(t,t.return,q)}}l&4&&t.stateNode!=null&&(h=t.memoizedProps,Nd(t,h,a!==null?a.memoizedProps:h)),l&1024&&(xd=!0);break;case 6:if(Tn(i,t),wn(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(q){Je(t,t.return,q)}}break;case 3:if(Gc=null,h=Zn,Zn=Fc(i.containerInfo),Tn(i,t),Zn=h,wn(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Ql(i.containerInfo)}catch(q){Je(t,t.return,q)}xd&&(xd=!1,O_(t));break;case 4:l=Zn,Zn=Fc(t.stateNode.containerInfo),Tn(i,t),wn(t),Zn=l;break;case 12:Tn(i,t),wn(t);break;case 13:Tn(i,t),wn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(jd=On()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Md(t,l)));break;case 22:h=t.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,j=er,Y=yt;if(er=j||h,yt=Y||I,Tn(i,t),yt=Y,er=j,wn(t),l&8192)e:for(i=t.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||I||er||yt||Xs(t)),a=null,i=t;;){if(i.tag===5||i.tag===26){if(a===null){I=a=i;try{if(d=I.stateNode,h)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=I.stateNode;var X=I.memoizedProps.style,z=X!=null&&X.hasOwnProperty("display")?X.display:null;T.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(q){Je(I,I.return,q)}}}else if(i.tag===6){if(a===null){I=i;try{I.stateNode.nodeValue=h?"":I.memoizedProps}catch(q){Je(I,I.return,q)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Md(t,a))));break;case 19:Tn(i,t),wn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Md(t,l)));break;case 30:break;case 21:break;default:Tn(i,t),wn(t)}}function wn(t){var i=t.flags;if(i&2){try{for(var a,l=t.return;l!==null;){if(A_(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Dd(t);Dc(t,d,h);break;case 5:var v=a.stateNode;a.flags&32&&(Mn(v,""),a.flags&=-33);var T=Dd(t);Dc(t,T,v);break;case 3:case 4:var I=a.stateNode.containerInfo,j=Dd(t);Od(t,j,I);break;default:throw Error(s(161))}}catch(Y){Je(t,t.return,Y)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function O_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;O_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Or(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)R_(t,i.alternate,i),i=i.sibling}function Xs(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Dr(4,i,i.return),Xs(i);break;case 1:Ti(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&T_(i,i.return,a),Xs(i);break;case 27:zl(i.stateNode);case 26:case 5:Ti(i,i.return),Xs(i);break;case 22:i.memoizedState===null&&Xs(i);break;case 30:Xs(i);break;default:Xs(i)}t=t.sibling}}function xr(t,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=t,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:xr(h,d,a),Dl(4,d);break;case 1:if(xr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(j){Je(l,l.return,j)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var I=h.shared.hiddenCallbacks;if(I!==null)for(h.shared.hiddenCallbacks=null,h=0;h<I.length;h++)ay(I[h],T)}catch(j){Je(l,l.return,j)}}a&&v&64&&E_(d),Ol(d,d.return);break;case 27:S_(d);case 26:case 5:xr(h,d,a),a&&l===null&&v&4&&w_(d),Ol(d,d.return);break;case 12:xr(h,d,a);break;case 13:xr(h,d,a),a&&v&4&&N_(h,d);break;case 22:d.memoizedState===null&&xr(h,d,a),Ol(d,d.return);break;case 30:break;default:xr(h,d,a)}i=i.sibling}}function Pd(t,i){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&pl(a))}function Vd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&pl(t))}function wi(t,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)x_(t,i,a,l),i=i.sibling}function x_(t,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:wi(t,i,a,l),h&2048&&Dl(9,i);break;case 1:wi(t,i,a,l);break;case 3:wi(t,i,a,l),h&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&pl(t)));break;case 12:if(h&2048){wi(t,i,a,l),t=i.stateNode;try{var d=i.memoizedProps,v=d.id,T=d.onPostCommit;typeof T=="function"&&T(v,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Je(i,i.return,I)}}else wi(t,i,a,l);break;case 13:wi(t,i,a,l);break;case 23:break;case 22:d=i.stateNode,v=i.alternate,i.memoizedState!==null?d._visibility&2?wi(t,i,a,l):xl(t,i):d._visibility&2?wi(t,i,a,l):(d._visibility|=2,Xa(t,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&Pd(v,i);break;case 24:wi(t,i,a,l),h&2048&&Vd(i.alternate,i);break;default:wi(t,i,a,l)}}function Xa(t,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=t,v=i,T=a,I=l,j=v.flags;switch(v.tag){case 0:case 11:case 15:Xa(d,v,T,I,h),Dl(8,v);break;case 23:break;case 22:var Y=v.stateNode;v.memoizedState!==null?Y._visibility&2?Xa(d,v,T,I,h):xl(d,v):(Y._visibility|=2,Xa(d,v,T,I,h)),h&&j&2048&&Pd(v.alternate,v);break;case 24:Xa(d,v,T,I,h),h&&j&2048&&Vd(v.alternate,v);break;default:Xa(d,v,T,I,h)}i=i.sibling}}function xl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=t,l=i,h=l.flags;switch(l.tag){case 22:xl(a,l),h&2048&&Pd(l.alternate,l);break;case 24:xl(a,l),h&2048&&Vd(l.alternate,l);break;default:xl(a,l)}i=i.sibling}}var Ml=8192;function Wa(t){if(t.subtreeFlags&Ml)for(t=t.child;t!==null;)M_(t),t=t.sibling}function M_(t){switch(t.tag){case 26:Wa(t),t.flags&Ml&&t.memoizedState!==null&&sb(Zn,t.memoizedState,t.memoizedProps);break;case 5:Wa(t);break;case 3:case 4:var i=Zn;Zn=Fc(t.stateNode.containerInfo),Wa(t),Zn=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Ml,Ml=16777216,Wa(t),Ml=i):Wa(t));break;default:Wa(t)}}function P_(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Pl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Lt=l,k_(l,t)}P_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)V_(t),t=t.sibling}function V_(t){switch(t.tag){case 0:case 11:case 15:Pl(t),t.flags&2048&&Dr(9,t,t.return);break;case 3:Pl(t);break;case 12:Pl(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Oc(t)):Pl(t);break;default:Pl(t)}}function Oc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Lt=l,k_(l,t)}P_(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Dr(8,i,i.return),Oc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,Oc(i));break;default:Oc(i)}t=t.sibling}}function k_(t,i){for(;Lt!==null;){var a=Lt;switch(a.tag){case 0:case 11:case 15:Dr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:pl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Lt=l;else e:for(a=t;Lt!==null;){l=Lt;var h=l.sibling,d=l.return;if(I_(l),l===a){Lt=null;break e}if(h!==null){h.return=d,Lt=h;break e}Lt=d}}}var TS={getCacheForType:function(t){var i=Wt(Dt),a=i.data.get(t);return a===void 0&&(a=t(),i.data.set(t,a)),a}},wS=typeof WeakMap=="function"?WeakMap:Map,Ye=0,nt=null,Ne=null,Ue=0,Ke=0,An=null,Mr=!1,Za=!1,kd=!1,nr=0,ft=0,Pr=0,Ws=0,Ld=0,qn=0,Ja=0,Vl=null,cn=null,Ud=!1,jd=0,xc=1/0,Mc=null,Vr=null,Ht=0,kr=null,eo=null,to=0,zd=0,Bd=null,L_=null,kl=0,qd=null;function Sn(){if((Ye&2)!==0&&Ue!==0)return Ue&-Ue;if(G.T!==null){var t=qa;return t!==0?t:$d()}return yr()}function U_(){qn===0&&(qn=(Ue&536870912)===0||qe?Go():536870912);var t=Bn.current;return t!==null&&(t.flags|=32),qn}function bn(t,i,a){(t===nt&&(Ke===2||Ke===9)||t.cancelPendingCommit!==null)&&(no(t,0),Lr(t,Ue,qn,!1)),Pi(t,a),((Ye&2)===0||t!==nt)&&(t===nt&&((Ye&2)===0&&(Ws|=a),ft===4&&Lr(t,Ue,qn,!1)),Ai(t))}function j_(t,i,a){if((Ye&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&t.expiredLanes)===0||As(t,i),h=l?bS(t,i):Gd(t,i,!0),d=l;do{if(h===0){Za&&!l&&Lr(t,i,0,!1);break}else{if(a=t.current.alternate,d&&!AS(a)){h=Gd(t,i,!1),d=!1;continue}if(h===2){if(d=i,t.errorRecoveryDisabledLanes&d)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;e:{var T=t;h=Vl;var I=T.current.memoizedState.isDehydrated;if(I&&(no(T,v).flags|=256),v=Gd(T,v,!1),v!==2){if(kd&&!I){T.errorRecoveryDisabledLanes|=d,Ws|=d,h=4;break e}d=cn,cn=h,d!==null&&(cn===null?cn=d:cn.push.apply(cn,d))}h=v}if(d=!1,h!==2)continue}}if(h===1){no(t,0),Lr(t,i,0,!0);break}e:{switch(l=t,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Lr(l,i,qn,!Mr);break e;case 2:cn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=jd+300-On(),10<h)){if(Lr(l,i,qn,!Mr),va(l,0,!0)!==0)break e;l.timeoutHandle=mv(z_.bind(null,l,a,cn,Mc,Ud,i,qn,Ws,Ja,Mr,d,2,-0,0),h);break e}z_(l,a,cn,Mc,Ud,i,qn,Ws,Ja,Mr,d,0,-0,0)}}break}while(!0);Ai(t)}function z_(t,i,a,l,h,d,v,T,I,j,Y,X,z,q){if(t.timeoutHandle=-1,X=i.subtreeFlags,(X&8192||(X&16785408)===16785408)&&(Fl={stylesheets:null,count:0,unsuspend:rb},M_(i),X=ab(),X!==null)){t.cancelPendingCommit=X(K_.bind(null,t,i,d,a,l,h,v,T,I,Y,1,z,q)),Lr(t,d,v,!j);return}K_(t,i,d,a,l,h,v,T,I)}function AS(t){for(var i=t;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!vn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Lr(t,i,a,l){i&=~Ld,i&=~Ws,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var h=i;0<h;){var d=31-Xt(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&li(t,a,i)}function Pc(){return(Ye&6)===0?(Ll(0),!1):!0}function Fd(){if(Ne!==null){if(Ke===0)var t=Ne.return;else t=Ne,Qi=Gs=null,ad(t),Qa=null,Il=0,t=Ne;for(;t!==null;)v_(t.alternate,t),t=t.return;Ne=null}}function no(t,i){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,BS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Fd(),nt=t,Ne=a=Gi(t.current,null),Ue=i,Ke=0,An=null,Mr=!1,Za=As(t,i),kd=!1,Ja=qn=Ld=Ws=Pr=ft=0,cn=Vl=null,Ud=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var h=31-Xt(l),d=1<<h;i|=t[h],l&=~d}return nr=i,nc(),a}function B_(t,i){Re=null,G.H=Tc,i===_l||i===hc?(i=ry(),Ke=3):i===ty?(i=ry(),Ke=4):Ke=i===s_?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,An=i,Ne===null&&(ft=1,Rc(t,Ln(i,t.current)))}function q_(){var t=G.H;return G.H=Tc,t===null?Tc:t}function F_(){var t=G.A;return G.A=TS,t}function Hd(){ft=4,Mr||(Ue&4194048)!==Ue&&Bn.current!==null||(Za=!0),(Pr&134217727)===0&&(Ws&134217727)===0||nt===null||Lr(nt,Ue,qn,!1)}function Gd(t,i,a){var l=Ye;Ye|=2;var h=q_(),d=F_();(nt!==t||Ue!==i)&&(Mc=null,no(t,i)),i=!1;var v=ft;e:do try{if(Ke!==0&&Ne!==null){var T=Ne,I=An;switch(Ke){case 8:Fd(),v=6;break e;case 3:case 2:case 9:case 6:Bn.current===null&&(i=!0);var j=Ke;if(Ke=0,An=null,io(t,T,I,j),a&&Za){v=0;break e}break;default:j=Ke,Ke=0,An=null,io(t,T,I,j)}}SS(),v=ft;break}catch(Y){B_(t,Y)}while(!0);return i&&t.shellSuspendCounter++,Qi=Gs=null,Ye=l,G.H=h,G.A=d,Ne===null&&(nt=null,Ue=0,nc()),v}function SS(){for(;Ne!==null;)H_(Ne)}function bS(t,i){var a=Ye;Ye|=2;var l=q_(),h=F_();nt!==t||Ue!==i?(Mc=null,xc=On()+500,no(t,i)):Za=As(t,i);e:do try{if(Ke!==0&&Ne!==null){i=Ne;var d=An;t:switch(Ke){case 1:Ke=0,An=null,io(t,i,d,1);break;case 2:case 9:if(ny(d)){Ke=0,An=null,G_(i);break}i=function(){Ke!==2&&Ke!==9||nt!==t||(Ke=7),Ai(t)},d.then(i,i);break e;case 3:Ke=7;break e;case 4:Ke=5;break e;case 7:ny(d)?(Ke=0,An=null,G_(i)):(Ke=0,An=null,io(t,i,d,7));break;case 5:var v=null;switch(Ne.tag){case 26:v=Ne.memoizedState;case 5:case 27:var T=Ne;if(!v||Rv(v)){Ke=0,An=null;var I=T.sibling;if(I!==null)Ne=I;else{var j=T.return;j!==null?(Ne=j,Vc(j)):Ne=null}break t}}Ke=0,An=null,io(t,i,d,5);break;case 6:Ke=0,An=null,io(t,i,d,6);break;case 8:Fd(),ft=6;break e;default:throw Error(s(462))}}RS();break}catch(Y){B_(t,Y)}while(!0);return Qi=Gs=null,G.H=l,G.A=h,Ye=a,Ne!==null?0:(nt=null,Ue=0,nc(),ft)}function RS(){for(;Ne!==null&&!Bo();)H_(Ne)}function H_(t){var i=y_(t.alternate,t,nr);t.memoizedProps=t.pendingProps,i===null?Vc(t):Ne=i}function G_(t){var i=t,a=i.alternate;switch(i.tag){case 15:case 0:i=h_(a,i,i.pendingProps,i.type,void 0,Ue);break;case 11:i=h_(a,i,i.pendingProps,i.type.render,i.ref,Ue);break;case 5:ad(i);default:v_(a,i),i=Ne=Yp(i,nr),i=y_(a,i,nr)}t.memoizedProps=t.pendingProps,i===null?Vc(t):Ne=i}function io(t,i,a,l){Qi=Gs=null,ad(i),Qa=null,Il=0;var h=i.return;try{if(gS(t,h,i,a,Ue)){ft=1,Rc(t,Ln(a,t.current)),Ne=null;return}}catch(d){if(h!==null)throw Ne=h,d;ft=1,Rc(t,Ln(a,t.current)),Ne=null;return}i.flags&32768?(qe||l===1?t=!0:Za||(Ue&536870912)!==0?t=!1:(Mr=t=!0,(l===2||l===9||l===3||l===6)&&(l=Bn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Y_(i,t)):Vc(i)}function Vc(t){var i=t;do{if((i.flags&32768)!==0){Y_(i,Mr);return}t=i.return;var a=yS(i.alternate,i,nr);if(a!==null){Ne=a;return}if(i=i.sibling,i!==null){Ne=i;return}Ne=i=t}while(i!==null);ft===0&&(ft=5)}function Y_(t,i){do{var a=_S(t.alternate,t);if(a!==null){a.flags&=32767,Ne=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(t=t.sibling,t!==null)){Ne=t;return}Ne=t=a}while(t!==null);ft=6,Ne=null}function K_(t,i,a,l,h,d,v,T,I){t.cancelPendingCommit=null;do kc();while(Ht!==0);if((Ye&6)!==0)throw Error(s(327));if(i!==null){if(i===t.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Vf,Ko(t,a,d,v,T,I),t===nt&&(Ne=nt=null,Ue=0),eo=i,kr=t,to=a,zd=d,Bd=h,L_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,DS(vs,function(){return Z_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=G.T,G.T=null,h=re.p,re.p=2,v=Ye,Ye|=4;try{vS(t,i,a)}finally{Ye=v,re.p=h,G.T=l}}Ht=1,Q_(),$_(),X_()}}function Q_(){if(Ht===1){Ht=0;var t=kr,i=eo,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=G.T,G.T=null;var l=re.p;re.p=2;var h=Ye;Ye|=4;try{D_(i,t);var d=im,v=kp(t.containerInfo),T=d.focusedElem,I=d.selectionRange;if(v!==T&&T&&T.ownerDocument&&Vp(T.ownerDocument.documentElement,T)){if(I!==null&&Df(T)){var j=I.start,Y=I.end;if(Y===void 0&&(Y=j),"selectionStart"in T)T.selectionStart=j,T.selectionEnd=Math.min(Y,T.value.length);else{var X=T.ownerDocument||document,z=X&&X.defaultView||window;if(z.getSelection){var q=z.getSelection(),ve=T.textContent.length,pe=Math.min(I.start,ve),We=I.end===void 0?pe:Math.min(I.end,ve);!q.extend&&pe>We&&(v=We,We=pe,pe=v);var k=Pp(T,pe),D=Pp(T,We);if(k&&D&&(q.rangeCount!==1||q.anchorNode!==k.node||q.anchorOffset!==k.offset||q.focusNode!==D.node||q.focusOffset!==D.offset)){var U=X.createRange();U.setStart(k.node,k.offset),q.removeAllRanges(),pe>We?(q.addRange(U),q.extend(D.node,D.offset)):(U.setEnd(D.node,D.offset),q.addRange(U))}}}}for(X=[],q=T;q=q.parentNode;)q.nodeType===1&&X.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<X.length;T++){var Q=X[T];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}Qc=!!nm,im=nm=null}finally{Ye=h,re.p=l,G.T=a}}t.current=i,Ht=2}}function $_(){if(Ht===2){Ht=0;var t=kr,i=eo,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=G.T,G.T=null;var l=re.p;re.p=2;var h=Ye;Ye|=4;try{R_(t,i.alternate,i)}finally{Ye=h,re.p=l,G.T=a}}Ht=3}}function X_(){if(Ht===4||Ht===3){Ht=0,Ou();var t=kr,i=eo,a=to,l=L_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Ht=5:(Ht=0,eo=kr=null,W_(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(Vr=null),Ea(a),i=i.stateNode,Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(ct,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=G.T,h=re.p,re.p=2,G.T=null;try{for(var d=t.onRecoverableError,v=0;v<l.length;v++){var T=l[v];d(T.value,{componentStack:T.stack})}}finally{G.T=i,re.p=h}}(to&3)!==0&&kc(),Ai(t),h=t.pendingLanes,(a&4194090)!==0&&(h&42)!==0?t===qd?kl++:(kl=0,qd=t):kl=0,Ll(0)}}function W_(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,pl(i)))}function kc(t){return Q_(),$_(),X_(),Z_()}function Z_(){if(Ht!==5)return!1;var t=kr,i=zd;zd=0;var a=Ea(to),l=G.T,h=re.p;try{re.p=32>a?32:a,G.T=null,a=Bd,Bd=null;var d=kr,v=to;if(Ht=0,eo=kr=null,to=0,(Ye&6)!==0)throw Error(s(331));var T=Ye;if(Ye|=4,V_(d.current),x_(d,d.current,v,a),Ye=T,Ll(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(ct,d)}catch{}return!0}finally{re.p=h,G.T=l,W_(t,i)}}function J_(t,i,a){i=Ln(a,i),i=Ed(t.stateNode,i,2),t=Rr(t,i,2),t!==null&&(Pi(t,2),Ai(t))}function Je(t,i,a){if(t.tag===3)J_(t,t,a);else for(;i!==null;){if(i.tag===3){J_(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Vr===null||!Vr.has(l))){t=Ln(a,t),a=i_(2),l=Rr(i,a,2),l!==null&&(r_(a,l,i,t),Pi(l,2),Ai(l));break}}i=i.return}}function Yd(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new wS;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(kd=!0,h.add(a),t=IS.bind(null,t,i,a),i.then(t,t))}function IS(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,nt===t&&(Ue&a)===a&&(ft===4||ft===3&&(Ue&62914560)===Ue&&300>On()-jd?(Ye&2)===0&&no(t,0):Ld|=a,Ja===Ue&&(Ja=0)),Ai(t)}function ev(t,i){i===0&&(i=Yo()),t=Ua(t,i),t!==null&&(Pi(t,i),Ai(t))}function CS(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),ev(t,a)}function NS(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),ev(t,a)}function DS(t,i){return ys(t,i)}var Lc=null,ro=null,Kd=!1,Uc=!1,Qd=!1,Zs=0;function Ai(t){t!==ro&&t.next===null&&(ro===null?Lc=ro=t:ro=ro.next=t),Uc=!0,Kd||(Kd=!0,xS())}function Ll(t,i){if(!Qd&&Uc){Qd=!0;do for(var a=!1,l=Lc;l!==null;){if(t!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-Xt(42|t)+1)-1,d&=h&~(v&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,rv(l,d))}else d=Ue,d=va(l,l===nt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||As(l,d)||(a=!0,rv(l,d));l=l.next}while(a);Qd=!1}}function OS(){tv()}function tv(){Uc=Kd=!1;var t=0;Zs!==0&&(zS()&&(t=Zs),Zs=0);for(var i=On(),a=null,l=Lc;l!==null;){var h=l.next,d=nv(l,i);d===0?(l.next=null,a===null?Lc=h:a.next=h,h===null&&(ro=a)):(a=l,(t!==0||(d&3)!==0)&&(Uc=!0)),l=h}Ll(t)}function nv(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var v=31-Xt(d),T=1<<v,I=h[v];I===-1?((T&a)===0||(T&l)!==0)&&(h[v]=Ho(T,i)):I<=i&&(t.expiredLanes|=T),d&=~T}if(i=nt,a=Ue,a=va(t,t===i?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===i&&(Ke===2||Ke===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&_s(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||As(t,a)){if(i=a&-a,i===t.callbackPriority)return i;switch(l!==null&&_s(l),Ea(a)){case 2:case 8:a=ya;break;case 32:a=vs;break;case 268435456:a=_a;break;default:a=vs}return l=iv.bind(null,t),a=ys(a,l),t.callbackPriority=i,t.callbackNode=a,i}return l!==null&&l!==null&&_s(l),t.callbackPriority=2,t.callbackNode=null,2}function iv(t,i){if(Ht!==0&&Ht!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(kc()&&t.callbackNode!==a)return null;var l=Ue;return l=va(t,t===nt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(j_(t,l,i),nv(t,On()),t.callbackNode!=null&&t.callbackNode===a?iv.bind(null,t):null)}function rv(t,i){if(kc())return null;j_(t,i,!0)}function xS(){qS(function(){(Ye&6)!==0?ys(qo,OS):tv()})}function $d(){return Zs===0&&(Zs=Go()),Zs}function sv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ra(""+t)}function av(t,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,t.id&&a.setAttribute("form",t.id),i.parentNode.insertBefore(a,i),t=new FormData(t),a.parentNode.removeChild(a),t}function MS(t,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=sv((h[vt]||null).action),v=l.submitter;v&&(i=(i=v[vt]||null)?sv(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var T=new Ia("action","action",null,l,h);t.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Zs!==0){var I=v?av(h,v):new FormData(h);gd(a,{pending:!0,data:I,method:h.method,action:d},null,I)}}else typeof d=="function"&&(T.preventDefault(),I=v?av(h,v):new FormData(h),gd(a,{pending:!0,data:I,method:h.method,action:d},d,I))},currentTarget:h}]})}}for(var Xd=0;Xd<Pf.length;Xd++){var Wd=Pf[Xd],PS=Wd.toLowerCase(),VS=Wd[0].toUpperCase()+Wd.slice(1);Wn(PS,"on"+VS)}Wn(jp,"onAnimationEnd"),Wn(zp,"onAnimationIteration"),Wn(Bp,"onAnimationStart"),Wn("dblclick","onDoubleClick"),Wn("focusin","onFocus"),Wn("focusout","onBlur"),Wn(ZA,"onTransitionRun"),Wn(JA,"onTransitionStart"),Wn(eS,"onTransitionCancel"),Wn(qp,"onTransitionEnd"),ki("onMouseEnter",["mouseout","mouseover"]),ki("onMouseLeave",["mouseout","mouseover"]),ki("onPointerEnter",["pointerout","pointerover"]),ki("onPointerLeave",["pointerout","pointerover"]),$n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$n("onBeforeInput",["compositionend","keypress","textInput","paste"]),$n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ul));function ov(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],h=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var T=l[v],I=T.instance,j=T.currentTarget;if(T=T.listener,I!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=j;try{d(h)}catch(Y){bc(Y)}h.currentTarget=null,d=I}else for(v=0;v<l.length;v++){if(T=l[v],I=T.instance,j=T.currentTarget,T=T.listener,I!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=j;try{d(h)}catch(Y){bc(Y)}h.currentTarget=null,d=I}}}}function De(t,i){var a=i[$o];a===void 0&&(a=i[$o]=new Set);var l=t+"__bubble";a.has(l)||(lv(i,t,2,!1),a.add(l))}function Zd(t,i,a){var l=0;i&&(l|=4),lv(a,t,l,i)}var jc="_reactListening"+Math.random().toString(36).slice(2);function Jd(t){if(!t[jc]){t[jc]=!0,Xo.forEach(function(a){a!=="selectionchange"&&(kS.has(a)||Zd(a,!1,t),Zd(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[jc]||(i[jc]=!0,Zd("selectionchange",!1,i))}}function lv(t,i,a,l){switch(xv(i)){case 2:var h=ub;break;case 8:h=cb;break;default:h=dm}a=h.bind(null,i,a,t),h=void 0,!Vn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(i,a,{capture:!0,passive:h}):t.addEventListener(i,a,!0):h!==void 0?t.addEventListener(i,a,{passive:h}):t.addEventListener(i,a,!1)}function em(t,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var T=l.stateNode.containerInfo;if(T===h)break;if(v===4)for(v=l.return;v!==null;){var I=v.tag;if((I===3||I===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;T!==null;){if(v=Vi(T),v===null)return;if(I=v.tag,I===5||I===6||I===26||I===27){l=d=v;continue e}T=T.parentNode}}l=l.return}Bu(function(){var j=d,Y=Pn(a),X=[];e:{var z=Fp.get(t);if(z!==void 0){var q=Ia,ve=t;switch(t){case"keypress":if(mi(a)===0)break e;case"keydown":case"keyup":q=Ma;break;case"focusin":ve="focus",q=Da;break;case"focusout":ve="blur",q=Da;break;case"beforeblur":case"afterblur":q=Da;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=kn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=Rf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=$u;break;case jp:case zp:case Bp:q=Oa;break;case qp:q=Wu;break;case"scroll":case"scrollend":q=qu;break;case"wheel":q=Pa;break;case"copy":case"cut":case"paste":q=xa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=ll;break;case"toggle":case"beforetoggle":q=Ju}var pe=(i&4)!==0,We=!pe&&(t==="scroll"||t==="scrollend"),k=pe?z!==null?z+"Capture":null:z;pe=[];for(var D=j,U;D!==null;){var Q=D;if(U=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||U===null||k===null||(Q=Os(D,k),Q!=null&&pe.push(jl(D,Q,U))),We)break;D=D.return}0<pe.length&&(z=new q(z,ve,null,a,Y),X.push({event:z,listeners:pe}))}}if((i&7)===0){e:{if(z=t==="mouseover"||t==="pointerover",q=t==="mouseout"||t==="pointerout",z&&a!==ji&&(ve=a.relatedTarget||a.fromElement)&&(Vi(ve)||ve[xn]))break e;if((q||z)&&(z=Y.window===Y?Y:(z=Y.ownerDocument)?z.defaultView||z.parentWindow:window,q?(ve=a.relatedTarget||a.toElement,q=j,ve=ve?Vi(ve):null,ve!==null&&(We=u(ve),pe=ve.tag,ve!==We||pe!==5&&pe!==27&&pe!==6)&&(ve=null)):(q=null,ve=j),q!==ve)){if(pe=kn,Q="onMouseLeave",k="onMouseEnter",D="mouse",(t==="pointerout"||t==="pointerover")&&(pe=ll,Q="onPointerLeave",k="onPointerEnter",D="pointer"),We=q==null?z:ci(q),U=ve==null?z:ci(ve),z=new pe(Q,D+"leave",q,a,Y),z.target=We,z.relatedTarget=U,Q=null,Vi(Y)===j&&(pe=new pe(k,D+"enter",ve,a,Y),pe.target=U,pe.relatedTarget=We,Q=pe),We=Q,q&&ve)t:{for(pe=q,k=ve,D=0,U=pe;U;U=so(U))D++;for(U=0,Q=k;Q;Q=so(Q))U++;for(;0<D-U;)pe=so(pe),D--;for(;0<U-D;)k=so(k),U--;for(;D--;){if(pe===k||k!==null&&pe===k.alternate)break t;pe=so(pe),k=so(k)}pe=null}else pe=null;q!==null&&uv(X,z,q,pe,!1),ve!==null&&We!==null&&uv(X,We,ve,pe,!0)}}e:{if(z=j?ci(j):window,q=z.nodeName&&z.nodeName.toLowerCase(),q==="select"||q==="input"&&z.type==="file")var ue=Cp;else if(Nt(z))if(Np)ue=$A;else{ue=KA;var Ce=YA}else q=z.nodeName,!q||q.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?j&&tl(j.elementType)&&(ue=Cp):ue=QA;if(ue&&(ue=ue(t,j))){Hi(X,ue,a,Y);break e}Ce&&Ce(t,z,j),t==="focusout"&&j&&z.type==="number"&&j.memoizedProps.value!=null&&Tr(z,"number",z.value)}switch(Ce=j?ci(j):window,t){case"focusin":(Nt(Ce)||Ce.contentEditable==="true")&&(Va=Ce,Of=j,hl=null);break;case"focusout":hl=Of=Va=null;break;case"mousedown":xf=!0;break;case"contextmenu":case"mouseup":case"dragend":xf=!1,Lp(X,a,Y);break;case"selectionchange":if(WA)break;case"keydown":case"keyup":Lp(X,a,Y)}var he;if(yi)e:{switch(t){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else ke?H(t,a)&&(ye="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(_&&a.locale!=="ko"&&(ke||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&ke&&(he=il()):(di=Y,wr="value"in di?di.value:di.textContent,ke=!0)),Ce=zc(j,ye),0<Ce.length&&(ye=new al(ye,t,null,a,Y),X.push({event:ye,listeners:Ce}),he?ye.data=he:(he=ie(a),he!==null&&(ye.data=he)))),(he=g?Ct(t,a):Le(t,a))&&(ye=zc(j,"onBeforeInput"),0<ye.length&&(Ce=new al("onBeforeInput","beforeinput",null,a,Y),X.push({event:Ce,listeners:ye}),Ce.data=he)),MS(X,t,j,a,Y)}ov(X,i)})}function jl(t,i,a){return{instance:t,listener:i,currentTarget:a}}function zc(t,i){for(var a=i+"Capture",l=[];t!==null;){var h=t,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=Os(t,a),h!=null&&l.unshift(jl(t,h,d)),h=Os(t,i),h!=null&&l.push(jl(t,h,d))),t.tag===3)return l;t=t.return}return[]}function so(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function uv(t,i,a,l,h){for(var d=i._reactName,v=[];a!==null&&a!==l;){var T=a,I=T.alternate,j=T.stateNode;if(T=T.tag,I!==null&&I===l)break;T!==5&&T!==26&&T!==27||j===null||(I=j,h?(j=Os(a,d),j!=null&&v.unshift(jl(a,j,I))):h||(j=Os(a,d),j!=null&&v.push(jl(a,j,I)))),a=a.return}v.length!==0&&t.push({event:i,listeners:v})}var LS=/\r\n?/g,US=/\u0000|\uFFFD/g;function cv(t){return(typeof t=="string"?t:""+t).replace(LS,`
`).replace(US,"")}function hv(t,i){return i=cv(i),cv(t)===i}function Bc(){}function Xe(t,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Mn(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Mn(t,""+l);break;case"className":hi(t,"class",l);break;case"tabIndex":hi(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":hi(t,a,l);break;case"style":el(t,l,d);break;case"data":if(i!=="object"){hi(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Ra(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Xe(t,i,"name",h.name,h,null),Xe(t,i,"formEncType",h.formEncType,h,null),Xe(t,i,"formMethod",h.formMethod,h,null),Xe(t,i,"formTarget",h.formTarget,h,null)):(Xe(t,i,"encType",h.encType,h,null),Xe(t,i,"method",h.method,h,null),Xe(t,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Ra(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=Bc);break;case"onScroll":l!=null&&De("scroll",t);break;case"onScrollEnd":l!=null&&De("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=Ra(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":De("beforetoggle",t),De("toggle",t),Er(t,"popover",l);break;case"xlinkActuate":Bt(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Bt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Bt(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Bt(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Bt(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Bt(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Bt(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Bt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Bt(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Er(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Sf.get(a)||a,Er(t,a,l))}}function tm(t,i,a,l,h,d){switch(a){case"style":el(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof l=="string"?Mn(t,l):(typeof l=="number"||typeof l=="bigint")&&Mn(t,""+l);break;case"onScroll":l!=null&&De("scroll",t);break;case"onScrollEnd":l!=null&&De("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Bc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ta.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=t[vt]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(i,l,h);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):Er(t,a,l)}}}function Gt(t,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":De("error",t),De("load",t);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xe(t,i,d,v,a,null)}}h&&Xe(t,i,"srcSet",a.srcSet,a,null),l&&Xe(t,i,"src",a.src,a,null);return;case"input":De("invalid",t);var T=d=v=h=null,I=null,j=null;for(l in a)if(a.hasOwnProperty(l)){var Y=a[l];if(Y!=null)switch(l){case"name":h=Y;break;case"type":v=Y;break;case"checked":I=Y;break;case"defaultChecked":j=Y;break;case"value":d=Y;break;case"defaultValue":T=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,i));break;default:Xe(t,i,l,Y,a,null)}}Cs(t,d,T,I,j,v,h,!1),ba(t);return;case"select":De("invalid",t),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":v=T;break;case"multiple":l=T;default:Xe(t,i,h,T,a,null)}i=d,a=v,t.multiple=!!l,i!=null?Ui(t,!!l,i,!1):a!=null&&Ui(t,!!l,a,!0);return;case"textarea":De("invalid",t),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Xe(t,i,v,T,a,null)}Ns(t,l,h,d),ba(t);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(l=a[I],l!=null))switch(I){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Xe(t,i,I,l,a,null)}return;case"dialog":De("beforetoggle",t),De("toggle",t),De("cancel",t),De("close",t);break;case"iframe":case"object":De("load",t);break;case"video":case"audio":for(l=0;l<Ul.length;l++)De(Ul[l],t);break;case"image":De("error",t),De("load",t);break;case"details":De("toggle",t);break;case"embed":case"source":case"link":De("error",t),De("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(l=a[j],l!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xe(t,i,j,l,a,null)}return;default:if(tl(i)){for(Y in a)a.hasOwnProperty(Y)&&(l=a[Y],l!==void 0&&tm(t,i,Y,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&Xe(t,i,T,l,a,null))}function jS(t,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,T=null,I=null,j=null,Y=null;for(q in a){var X=a[q];if(a.hasOwnProperty(q)&&X!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":I=X;default:l.hasOwnProperty(q)||Xe(t,i,q,null,l,X)}}for(var z in l){var q=l[z];if(X=a[z],l.hasOwnProperty(z)&&(q!=null||X!=null))switch(z){case"type":d=q;break;case"name":h=q;break;case"checked":j=q;break;case"defaultChecked":Y=q;break;case"value":v=q;break;case"defaultValue":T=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,i));break;default:q!==X&&Xe(t,i,z,q,l,X)}}_n(t,v,T,I,j,Y,d,h);return;case"select":q=v=T=z=null;for(d in a)if(I=a[d],a.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":q=I;default:l.hasOwnProperty(d)||Xe(t,i,d,null,l,I)}for(h in l)if(d=l[h],I=a[h],l.hasOwnProperty(h)&&(d!=null||I!=null))switch(h){case"value":z=d;break;case"defaultValue":T=d;break;case"multiple":v=d;default:d!==I&&Xe(t,i,h,d,l,I)}i=T,a=v,l=q,z!=null?Ui(t,!!a,z,!1):!!l!=!!a&&(i!=null?Ui(t,!!a,i,!0):Ui(t,!!a,a?[]:"",!1));return;case"textarea":q=z=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Xe(t,i,T,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":z=h;break;case"defaultValue":q=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Xe(t,i,v,h,l,d)}Qe(t,z,q);return;case"option":for(var ve in a)if(z=a[ve],a.hasOwnProperty(ve)&&z!=null&&!l.hasOwnProperty(ve))switch(ve){case"selected":t.selected=!1;break;default:Xe(t,i,ve,null,l,z)}for(I in l)if(z=l[I],q=a[I],l.hasOwnProperty(I)&&z!==q&&(z!=null||q!=null))switch(I){case"selected":t.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Xe(t,i,I,z,l,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pe in a)z=a[pe],a.hasOwnProperty(pe)&&z!=null&&!l.hasOwnProperty(pe)&&Xe(t,i,pe,null,l,z);for(j in l)if(z=l[j],q=a[j],l.hasOwnProperty(j)&&z!==q&&(z!=null||q!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:Xe(t,i,j,z,l,q)}return;default:if(tl(i)){for(var We in a)z=a[We],a.hasOwnProperty(We)&&z!==void 0&&!l.hasOwnProperty(We)&&tm(t,i,We,void 0,l,z);for(Y in l)z=l[Y],q=a[Y],!l.hasOwnProperty(Y)||z===q||z===void 0&&q===void 0||tm(t,i,Y,z,l,q);return}}for(var k in a)z=a[k],a.hasOwnProperty(k)&&z!=null&&!l.hasOwnProperty(k)&&Xe(t,i,k,null,l,z);for(X in l)z=l[X],q=a[X],!l.hasOwnProperty(X)||z===q||z==null&&q==null||Xe(t,i,X,z,l,q)}var nm=null,im=null;function qc(t){return t.nodeType===9?t:t.ownerDocument}function fv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dv(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function rm(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var sm=null;function zS(){var t=window.event;return t&&t.type==="popstate"?t===sm?!1:(sm=t,!0):(sm=null,!1)}var mv=typeof setTimeout=="function"?setTimeout:void 0,BS=typeof clearTimeout=="function"?clearTimeout:void 0,gv=typeof Promise=="function"?Promise:void 0,qS=typeof queueMicrotask=="function"?queueMicrotask:typeof gv<"u"?function(t){return gv.resolve(null).then(t).catch(FS)}:mv;function FS(t){setTimeout(function(){throw t})}function Ur(t){return t==="head"}function pv(t,i){var a=i,l=0,h=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var v=t.ownerDocument;if(a&1&&zl(v.documentElement),a&2&&zl(v.body),a&4)for(a=v.head,zl(a),v=a.firstChild;v;){var T=v.nextSibling,I=v.nodeName;v[Ss]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=T}}if(h===0){t.removeChild(d),Ql(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);Ql(i)}function am(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":am(a),vr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function HS(t,i,a,l){for(;t.nodeType===1;){var h=a;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Ss])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Jn(t.nextSibling),t===null)break}return null}function GS(t,i,a){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Jn(t.nextSibling),t===null))return null;return t}function om(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function YS(t,i){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Jn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var lm=null;function yv(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}function _v(t,i,a){switch(i=qc(a),t){case"html":if(t=i.documentElement,!t)throw Error(s(452));return t;case"head":if(t=i.head,!t)throw Error(s(453));return t;case"body":if(t=i.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function zl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);vr(t)}var Fn=new Map,vv=new Set;function Fc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ir=re.d;re.d={f:KS,r:QS,D:$S,C:XS,L:WS,m:ZS,X:eb,S:JS,M:tb};function KS(){var t=ir.f(),i=Pc();return t||i}function QS(t){var i=ui(t);i!==null&&i.tag===5&&i.type==="form"?jy(i):ir.r(t)}var ao=typeof document>"u"?null:document;function Ev(t,i,a){var l=ao;if(l&&typeof i=="string"&&i){var h=Et(i);h='link[rel="'+t+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),vv.has(h)||(vv.add(h),t={rel:t,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Gt(i,"link",t),gt(i),l.head.appendChild(i)))}}function $S(t){ir.D(t),Ev("dns-prefetch",t,null)}function XS(t,i){ir.C(t,i),Ev("preconnect",t,i)}function WS(t,i,a){ir.L(t,i,a);var l=ao;if(l&&t&&i){var h='link[rel="preload"][as="'+Et(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+Et(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+Et(a.imageSizes)+'"]')):h+='[href="'+Et(t)+'"]';var d=h;switch(i){case"style":d=oo(t);break;case"script":d=lo(t)}Fn.has(d)||(t=E({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:t,as:i},a),Fn.set(d,t),l.querySelector(h)!==null||i==="style"&&l.querySelector(Bl(d))||i==="script"&&l.querySelector(ql(d))||(i=l.createElement("link"),Gt(i,"link",t),gt(i),l.head.appendChild(i)))}}function ZS(t,i){ir.m(t,i);var a=ao;if(a&&t){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+Et(l)+'"][href="'+Et(t)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=lo(t)}if(!Fn.has(d)&&(t=E({rel:"modulepreload",href:t},i),Fn.set(d,t),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ql(d)))return}l=a.createElement("link"),Gt(l,"link",t),gt(l),a.head.appendChild(l)}}}function JS(t,i,a){ir.S(t,i,a);var l=ao;if(l&&t){var h=rn(l).hoistableStyles,d=oo(t);i=i||"default";var v=h.get(d);if(!v){var T={loading:0,preload:null};if(v=l.querySelector(Bl(d)))T.loading=5;else{t=E({rel:"stylesheet",href:t,"data-precedence":i},a),(a=Fn.get(d))&&um(t,a);var I=v=l.createElement("link");gt(I),Gt(I,"link",t),I._p=new Promise(function(j,Y){I.onload=j,I.onerror=Y}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Hc(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:T},h.set(d,v)}}}function eb(t,i){ir.X(t,i);var a=ao;if(a&&t){var l=rn(a).hoistableScripts,h=lo(t),d=l.get(h);d||(d=a.querySelector(ql(h)),d||(t=E({src:t,async:!0},i),(i=Fn.get(h))&&cm(t,i),d=a.createElement("script"),gt(d),Gt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function tb(t,i){ir.M(t,i);var a=ao;if(a&&t){var l=rn(a).hoistableScripts,h=lo(t),d=l.get(h);d||(d=a.querySelector(ql(h)),d||(t=E({src:t,async:!0,type:"module"},i),(i=Fn.get(h))&&cm(t,i),d=a.createElement("script"),gt(d),Gt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function Tv(t,i,a,l){var h=(h=Te.current)?Fc(h):null;if(!h)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=oo(a.href),a=rn(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=oo(a.href);var d=rn(h).hoistableStyles,v=d.get(t);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,v),(d=h.querySelector(Bl(t)))&&!d._p&&(v.instance=d,v.state.loading=5),Fn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Fn.set(t,a),d||nb(h,t,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=lo(a),a=rn(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function oo(t){return'href="'+Et(t)+'"'}function Bl(t){return'link[rel="stylesheet"]['+t+"]"}function wv(t){return E({},t,{"data-precedence":t.precedence,precedence:null})}function nb(t,i,a,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Gt(i,"link",a),gt(i),t.head.appendChild(i))}function lo(t){return'[src="'+Et(t)+'"]'}function ql(t){return"script[async]"+t}function Av(t,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+Et(a.href)+'"]');if(l)return i.instance=l,gt(l),l;var h=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),gt(l),Gt(l,"style",h),Hc(l,a.precedence,t),i.instance=l;case"stylesheet":h=oo(a.href);var d=t.querySelector(Bl(h));if(d)return i.state.loading|=4,i.instance=d,gt(d),d;l=wv(a),(h=Fn.get(h))&&um(l,h),d=(t.ownerDocument||t).createElement("link"),gt(d);var v=d;return v._p=new Promise(function(T,I){v.onload=T,v.onerror=I}),Gt(d,"link",l),i.state.loading|=4,Hc(d,a.precedence,t),i.instance=d;case"script":return d=lo(a.src),(h=t.querySelector(ql(d)))?(i.instance=h,gt(h),h):(l=a,(h=Fn.get(d))&&(l=E({},a),cm(l,h)),t=t.ownerDocument||t,h=t.createElement("script"),gt(h),Gt(h,"link",l),t.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Hc(l,a.precedence,t));return i.instance}function Hc(t,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var T=l[v];if(T.dataset.precedence===i)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(t,i.firstChild))}function um(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function cm(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Gc=null;function Sv(t,i,a){if(Gc===null){var l=new Map,h=Gc=new Map;h.set(a,l)}else h=Gc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),h=0;h<a.length;h++){var d=a[h];if(!(d[Ss]||d[It]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=t+v;var T=l.get(v);T?T.push(d):l.set(v,[d])}}return l}function bv(t,i,a){t=t.ownerDocument||t,t.head.insertBefore(a,i==="title"?t.querySelector("head > title"):null)}function ib(t,i,a){if(a===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Rv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Fl=null;function rb(){}function sb(t,i,a){if(Fl===null)throw Error(s(475));var l=Fl;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=oo(a.href),d=t.querySelector(Bl(h));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Yc.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=d,gt(d);return}d=t.ownerDocument||t,a=wv(a),(h=Fn.get(h))&&um(a,h),d=d.createElement("link"),gt(d);var v=d;v._p=new Promise(function(T,I){v.onload=T,v.onerror=I}),Gt(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Yc.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function ab(){if(Fl===null)throw Error(s(475));var t=Fl;return t.stylesheets&&t.count===0&&hm(t,t.stylesheets),0<t.count?function(i){var a=setTimeout(function(){if(t.stylesheets&&hm(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Yc(){if(this.count--,this.count===0){if(this.stylesheets)hm(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Kc=null;function hm(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Kc=new Map,i.forEach(ob,t),Kc=null,Yc.call(t))}function ob(t,i){if(!(i.state.loading&4)){var a=Kc.get(t);if(a)var l=a.get(null);else{a=new Map,Kc.set(t,a);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=Yc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),i.state.loading|=4}}var Hl={$$typeof:ce,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function lb(t,i,a,l,h,d,v,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Mi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mi(0),this.hiddenUpdates=Mi(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Iv(t,i,a,l,h,d,v,T,I,j,Y,X){return t=new lb(t,i,a,v,T,I,j,X),i=1,d===!0&&(i|=24),d=En(3,null,null,i),t.current=d,d.stateNode=t,i=Yf(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},Xf(d),t}function Cv(t){return t?(t=ja,t):ja}function Nv(t,i,a,l,h,d){h=Cv(h),l.context===null?l.context=h:l.pendingContext=h,l=br(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Rr(t,l,i),a!==null&&(bn(a,t,i),El(a,t,i))}function Dv(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function fm(t,i){Dv(t,i),(t=t.alternate)&&Dv(t,i)}function Ov(t){if(t.tag===13){var i=Ua(t,67108864);i!==null&&bn(i,t,67108864),fm(t,67108864)}}var Qc=!0;function ub(t,i,a,l){var h=G.T;G.T=null;var d=re.p;try{re.p=2,dm(t,i,a,l)}finally{re.p=d,G.T=h}}function cb(t,i,a,l){var h=G.T;G.T=null;var d=re.p;try{re.p=8,dm(t,i,a,l)}finally{re.p=d,G.T=h}}function dm(t,i,a,l){if(Qc){var h=mm(l);if(h===null)em(t,i,l,$c,a),Mv(t,l);else if(fb(h,t,i,a,l))l.stopPropagation();else if(Mv(t,l),i&4&&-1<hb.indexOf(t)){for(;h!==null;){var d=ui(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Qn(d.pendingLanes);if(v!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var I=1<<31-Xt(v);T.entanglements[1]|=I,v&=~I}Ai(d),(Ye&6)===0&&(xc=On()+500,Ll(0))}}break;case 13:T=Ua(d,2),T!==null&&bn(T,d,2),Pc(),fm(d,2)}if(d=mm(l),d===null&&em(t,i,l,$c,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else em(t,i,l,null,a)}}function mm(t){return t=Pn(t),gm(t)}var $c=null;function gm(t){if($c=null,t=Vi(t),t!==null){var i=u(t);if(i===null)t=null;else{var a=i.tag;if(a===13){if(t=f(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return $c=t,null}function xv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_f()){case qo:return 2;case ya:return 8;case vs:case vf:return 32;case _a:return 268435456;default:return 32}default:return 32}}var pm=!1,jr=null,zr=null,Br=null,Gl=new Map,Yl=new Map,qr=[],hb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Mv(t,i){switch(t){case"focusin":case"focusout":jr=null;break;case"dragenter":case"dragleave":zr=null;break;case"mouseover":case"mouseout":Br=null;break;case"pointerover":case"pointerout":Gl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yl.delete(i.pointerId)}}function Kl(t,i,a,l,h,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=ui(i),i!==null&&Ov(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function fb(t,i,a,l,h){switch(i){case"focusin":return jr=Kl(jr,t,i,a,l,h),!0;case"dragenter":return zr=Kl(zr,t,i,a,l,h),!0;case"mouseover":return Br=Kl(Br,t,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return Gl.set(d,Kl(Gl.get(d)||null,t,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,Yl.set(d,Kl(Yl.get(d)||null,t,i,a,l,h)),!0}return!1}function Pv(t){var i=Vi(t.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){t.blockedOn=i,Pu(t.priority,function(){if(a.tag===13){var l=Sn();l=pr(l);var h=Ua(a,l);h!==null&&bn(h,a,l),fm(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=mm(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);ji=l,a.target.dispatchEvent(l),ji=null}else return i=ui(a),i!==null&&Ov(i),t.blockedOn=a,!1;i.shift()}return!0}function Vv(t,i,a){Xc(t)&&a.delete(i)}function db(){pm=!1,jr!==null&&Xc(jr)&&(jr=null),zr!==null&&Xc(zr)&&(zr=null),Br!==null&&Xc(Br)&&(Br=null),Gl.forEach(Vv),Yl.forEach(Vv)}function Wc(t,i){t.blockedOn===i&&(t.blockedOn=null,pm||(pm=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,db)))}var Zc=null;function kv(t){Zc!==t&&(Zc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Zc===t&&(Zc=null);for(var i=0;i<t.length;i+=3){var a=t[i],l=t[i+1],h=t[i+2];if(typeof l!="function"){if(gm(l||a)===null)continue;break}var d=ui(a);d!==null&&(t.splice(i,3),i-=3,gd(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function Ql(t){function i(I){return Wc(I,t)}jr!==null&&Wc(jr,t),zr!==null&&Wc(zr,t),Br!==null&&Wc(Br,t),Gl.forEach(i),Yl.forEach(i);for(var a=0;a<qr.length;a++){var l=qr[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<qr.length&&(a=qr[0],a.blockedOn===null);)Pv(a),a.blockedOn===null&&qr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[vt]||null;if(typeof d=="function")v||kv(a);else if(v){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[vt]||null)T=v.formAction;else if(gm(h)!==null)continue}else T=v.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),kv(a)}}}function ym(t){this._internalRoot=t}Jc.prototype.render=ym.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=Sn();Nv(a,l,t,i,null,null)},Jc.prototype.unmount=ym.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Nv(t.current,2,null,t,null,null),Pc(),i[xn]=null}};function Jc(t){this._internalRoot=t}Jc.prototype.unstable_scheduleHydration=function(t){if(t){var i=yr();t={blockedOn:null,target:t,priority:i};for(var a=0;a<qr.length&&i!==0&&i<qr[a].priority;a++);qr.splice(a,0,t),a===0&&Pv(t)}};var Lv=e.version;if(Lv!=="19.1.1")throw Error(s(527,Lv,"19.1.1"));re.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(i),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var mb={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var eh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!eh.isDisabled&&eh.supportsFiber)try{ct=eh.inject(mb),Ge=eh}catch{}}return Xl.createRoot=function(t,i){if(!o(t))throw Error(s(299));var a=!1,l="",h=Jy,d=e_,v=t_,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=Iv(t,1,!1,null,null,a,l,h,d,v,T,null),t[xn]=i.current,Jd(t),new ym(i)},Xl.hydrateRoot=function(t,i,a){if(!o(t))throw Error(s(299));var l=!1,h="",d=Jy,v=e_,T=t_,I=null,j=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(I=a.unstable_transitionCallbacks),a.formState!==void 0&&(j=a.formState)),i=Iv(t,1,!0,i,a??null,l,h,d,v,T,I,j),i.context=Cv(null),a=i.current,l=Sn(),l=pr(l),h=br(l),h.callback=null,Rr(a,h,l),a=l,i.current.lanes=a,Pi(i,a),Ai(i),t[xn]=i.current,Jd(t),new Jc(i)},Xl.version="19.1.1",Xl}var Kv;function Sb(){if(Kv)return Em.exports;Kv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Em.exports=Ab(),Em.exports}var bb=Sb();const Rb=()=>{};var Qv={};/**
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
 */const FT=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},Ib=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],m=r[n++],p=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=r[n++],f=r[n++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return e.join("")},HT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,m=f?r[o+1]:0,p=o+2<r.length,y=p?r[o+2]:0,E=u>>2,R=(u&3)<<4|m>>4;let b=(m&15)<<2|y>>6,B=y&63;p||(B=64,f||(b=64)),s.push(n[E],n[R],n[b],n[B])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(FT(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Ib(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],m=o<r.length?n[r.charAt(o)]:0;++o;const y=o<r.length?n[r.charAt(o)]:64;++o;const R=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||m==null||y==null||R==null)throw new Cb;const b=u<<2|m>>4;if(s.push(b),y!==64){const B=m<<4&240|y>>2;if(s.push(B),R!==64){const K=y<<6&192|R;s.push(K)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Cb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Nb=function(r){const e=FT(r);return HT.encodeByteArray(e,!0)},_h=function(r){return Nb(r).replace(/\./g,"")},GT=function(r){try{return HT.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Db(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ob=()=>Db().__FIREBASE_DEFAULTS__,xb=()=>{if(typeof process>"u"||typeof Qv>"u")return;const r=Qv.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Mb=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&GT(r[1]);return e&&JSON.parse(e)},Bh=()=>{try{return Rb()||Ob()||xb()||Mb()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},YT=r=>Bh()?.emulatorHosts?.[r],KT=r=>{const e=YT(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},QT=()=>Bh()?.config,$T=r=>Bh()?.[`_${r}`];/**
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
 */class Pb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function cs(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Eg(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function Vb(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[_h(JSON.stringify(n)),_h(JSON.stringify(f)),""].join(".")}const su={};function kb(){const r={prod:[],emulator:[]};for(const e of Object.keys(su))su[e]?r.emulator.push(e):r.prod.push(e);return r}function Lb(r){let e=document.getElementById(r),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),n=!0),{created:n,element:e}}let $v=!1;function Tg(r,e){if(typeof window>"u"||typeof document>"u"||!cs(window.location.host)||su[r]===e||su[r]||$v)return;su[r]=e;function n(b){return`__firebase__banner__${b}`}const s="__firebase__banner",u=kb().prod.length>0;function f(){const b=document.getElementById(s);b&&b.remove()}function m(b){b.style.display="flex",b.style.background="#7faaf0",b.style.position="fixed",b.style.bottom="5px",b.style.left="5px",b.style.padding=".5em",b.style.borderRadius="5px",b.style.alignItems="center"}function p(b,B){b.setAttribute("width","24"),b.setAttribute("id",B),b.setAttribute("height","24"),b.setAttribute("viewBox","0 0 24 24"),b.setAttribute("fill","none"),b.style.marginLeft="-6px"}function y(){const b=document.createElement("span");return b.style.cursor="pointer",b.style.marginLeft="16px",b.style.fontSize="24px",b.innerHTML=" &times;",b.onclick=()=>{$v=!0,f()},b}function E(b,B){b.setAttribute("id",B),b.innerText="Learn more",b.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",b.setAttribute("target","__blank"),b.style.paddingLeft="5px",b.style.textDecoration="underline"}function R(){const b=Lb(s),B=n("text"),K=document.getElementById(B)||document.createElement("span"),ne=n("learnmore"),J=document.getElementById(ne)||document.createElement("a"),Ee=n("preprendIcon"),ae=document.getElementById(Ee)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(b.created){const ce=b.element;m(ce),E(J,ne);const Se=y();p(ae,Ee),ce.append(ae,K,J,Se),document.body.appendChild(ce)}u?(K.innerText="Preview backend disconnected.",ae.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ae.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
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
 */function nn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ub(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nn())}function jb(){const r=Bh()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function XT(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Bb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qb(){const r=nn();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Fb(){return!jb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function WT(){try{return typeof indexedDB=="object"}catch{return!1}}function ZT(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(n){e(n)}})}function Hb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Gb="FirebaseError";class Kn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Gb,Object.setPrototypeOf(this,Kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,da.prototype.create)}}class da{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,u=this.errors[e],f=u?Yb(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new Kn(o,m,s)}}function Yb(r,e){return r.replace(Kb,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const Kb=/\{\$([^}]+)}/g;function Qb(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Di(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=e[o];if(Xv(u)&&Xv(f)){if(!Di(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function Xv(r){return r!==null&&typeof r=="object"}/**
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
 */function xo(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Zl(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Jl(r){const e=r.indexOf("?");if(!e)return"";const n=r.indexOf("#",e);return r.substring(e,n>0?n:void 0)}function $b(r,e){const n=new Xb(r,e);return n.subscribe.bind(n)}class Xb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Wb(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=Sm),o.error===void 0&&(o.error=Sm),o.complete===void 0&&(o.complete=Sm);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Wb(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function Sm(){}/**
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
 */const Zb=1e3,Jb=2,eR=14400*1e3,tR=.5;function Wv(r,e=Zb,n=Jb){const s=e*Math.pow(n,r),o=Math.round(tR*s*(Math.random()-.5)*2);return Math.min(eR,s+o)}/**
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
 */const Js="[DEFAULT]";/**
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
 */class nR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Pb;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rR(e))try{this.getOrInitializeService({instanceIdentifier:Js})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Js){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Js){return this.instances.has(e)}getOptions(e=Js){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:iR(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Js){return this.component?this.component.multipleInstances?e:Js:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iR(r){return r===Js?void 0:r}function rR(r){return r.instantiationMode==="EAGER"}/**
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
 */class sR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var xe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(xe||(xe={}));const aR={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},oR=xe.INFO,lR={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},uR=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=lR[e];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qh{constructor(e){this.name=e,this._logLevel=oR,this._logHandler=uR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?aR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}const cR=(r,e)=>e.some(n=>r instanceof n);let Zv,Jv;function hR(){return Zv||(Zv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fR(){return Jv||(Jv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const JT=new WeakMap,Hm=new WeakMap,e0=new WeakMap,bm=new WeakMap,wg=new WeakMap;function dR(r){const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(Wr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return e.then(n=>{n instanceof IDBCursor&&JT.set(n,r)}).catch(()=>{}),wg.set(e,r),e}function mR(r){if(Hm.has(r))return;const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});Hm.set(r,e)}let Gm={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return Hm.get(r);if(e==="objectStoreNames")return r.objectStoreNames||e0.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wr(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function gR(r){Gm=r(Gm)}function pR(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(Rm(this),e,...n);return e0.set(s,e.sort?e.sort():[e]),Wr(s)}:fR().includes(r)?function(...e){return r.apply(Rm(this),e),Wr(JT.get(this))}:function(...e){return Wr(r.apply(Rm(this),e))}}function yR(r){return typeof r=="function"?pR(r):(r instanceof IDBTransaction&&mR(r),cR(r,hR())?new Proxy(r,Gm):r)}function Wr(r){if(r instanceof IDBRequest)return dR(r);if(bm.has(r))return bm.get(r);const e=yR(r);return e!==r&&(bm.set(r,e),wg.set(e,r)),e}const Rm=r=>wg.get(r);function t0(r,e,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,e),m=Wr(f);return s&&f.addEventListener("upgradeneeded",p=>{s(Wr(f.result),p.oldVersion,p.newVersion,Wr(f.transaction),p)}),n&&f.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),m.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const _R=["get","getKey","getAll","getAllKeys","count"],vR=["put","add","delete","clear"],Im=new Map;function eE(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Im.get(e))return Im.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=vR.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||_R.includes(n)))return;const u=async function(f,...m){const p=this.transaction(f,o?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(m.shift())),(await Promise.all([y[n](...m),o&&p.done]))[0]};return Im.set(e,u),u}gR(r=>({...r,get:(e,n,s)=>eE(e,n)||r.get(e,n,s),has:(e,n)=>!!eE(e,n)||r.has(e,n)}));/**
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
 */class ER{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(TR(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function TR(r){return r.getComponent()?.type==="VERSION"}const Ym="@firebase/app",tE="0.14.2";/**
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
 */const hr=new qh("@firebase/app"),wR="@firebase/app-compat",AR="@firebase/analytics-compat",SR="@firebase/analytics",bR="@firebase/app-check-compat",RR="@firebase/app-check",IR="@firebase/auth",CR="@firebase/auth-compat",NR="@firebase/database",DR="@firebase/data-connect",OR="@firebase/database-compat",xR="@firebase/functions",MR="@firebase/functions-compat",PR="@firebase/installations",VR="@firebase/installations-compat",kR="@firebase/messaging",LR="@firebase/messaging-compat",UR="@firebase/performance",jR="@firebase/performance-compat",zR="@firebase/remote-config",BR="@firebase/remote-config-compat",qR="@firebase/storage",FR="@firebase/storage-compat",HR="@firebase/firestore",GR="@firebase/ai",YR="@firebase/firestore-compat",KR="firebase",QR="12.2.0";/**
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
 */const Km="[DEFAULT]",$R={[Ym]:"fire-core",[wR]:"fire-core-compat",[SR]:"fire-analytics",[AR]:"fire-analytics-compat",[RR]:"fire-app-check",[bR]:"fire-app-check-compat",[IR]:"fire-auth",[CR]:"fire-auth-compat",[NR]:"fire-rtdb",[DR]:"fire-data-connect",[OR]:"fire-rtdb-compat",[xR]:"fire-fn",[MR]:"fire-fn-compat",[PR]:"fire-iid",[VR]:"fire-iid-compat",[kR]:"fire-fcm",[LR]:"fire-fcm-compat",[UR]:"fire-perf",[jR]:"fire-perf-compat",[zR]:"fire-rc",[BR]:"fire-rc-compat",[qR]:"fire-gcs",[FR]:"fire-gcs-compat",[HR]:"fire-fst",[YR]:"fire-fst-compat",[GR]:"fire-vertex","fire-js":"fire-js",[KR]:"fire-js-all"};/**
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
 */const vh=new Map,XR=new Map,Qm=new Map;function nE(r,e){try{r.container.addComponent(e)}catch(n){hr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function ri(r){const e=r.name;if(Qm.has(e))return hr.debug(`There were multiple attempts to register component ${e}.`),!1;Qm.set(e,r);for(const n of vh.values())nE(n,r);for(const n of XR.values())nE(n,r);return!0}function hs(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function Rn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const WR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zr=new da("app","Firebase",WR);/**
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
 */class ZR{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zr.create("app-deleted",{appName:this._name})}}/**
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
 */const Mo=QR;function n0(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s={name:Km,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw Zr.create("bad-app-name",{appName:String(o)});if(n||(n=QT()),!n)throw Zr.create("no-options");const u=vh.get(o);if(u){if(Di(n,u.options)&&Di(s,u.config))return u;throw Zr.create("duplicate-app",{appName:o})}const f=new sR(o);for(const p of Qm.values())f.addComponent(p);const m=new ZR(n,s,f);return vh.set(o,m),m}function Fh(r=Km){const e=vh.get(r);if(!e&&r===Km&&QT())return n0();if(!e)throw Zr.create("no-app",{appName:r});return e}function gn(r,e,n){let s=$R[r]??r;n&&(s+=`-${n}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const f=[`Unable to register library "${s}" with version "${e}":`];o&&f.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&f.push("and"),u&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hr.warn(f.join(" "));return}ri(new Gn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const JR="firebase-heartbeat-database",eI=1,mu="firebase-heartbeat-store";let Cm=null;function i0(){return Cm||(Cm=t0(JR,eI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(mu)}catch(n){console.warn(n)}}}}).catch(r=>{throw Zr.create("idb-open",{originalErrorMessage:r.message})})),Cm}async function tI(r){try{const n=(await i0()).transaction(mu),s=await n.objectStore(mu).get(r0(r));return await n.done,s}catch(e){if(e instanceof Kn)hr.warn(e.message);else{const n=Zr.create("idb-get",{originalErrorMessage:e?.message});hr.warn(n.message)}}}async function iE(r,e){try{const s=(await i0()).transaction(mu,"readwrite");await s.objectStore(mu).put(e,r0(r)),await s.done}catch(n){if(n instanceof Kn)hr.warn(n.message);else{const s=Zr.create("idb-set",{originalErrorMessage:n?.message});hr.warn(s.message)}}}function r0(r){return`${r.name}!${r.options.appId}`}/**
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
 */const nI=1024,iI=30;class rI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new aI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=rE();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>iI){const o=oI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){hr.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=rE(),{heartbeatsToSend:n,unsentEntries:s}=sI(this._heartbeatsCache.heartbeats),o=_h(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return hr.warn(e),""}}}function rE(){return new Date().toISOString().substring(0,10)}function sI(r,e=nI){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),sE(n)>e){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),sE(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class aI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return WT()?ZT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await tI(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return iE(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return iE(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function sE(r){return _h(JSON.stringify({version:2,heartbeats:r})).length}function oI(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
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
 */function lI(r){ri(new Gn("platform-logger",e=>new ER(e),"PRIVATE")),ri(new Gn("heartbeat",e=>new rI(e),"PRIVATE")),gn(Ym,tE,r),gn(Ym,tE,"esm2020"),gn("fire-js","")}lI("");function s0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uI=s0,a0=new da("auth","Firebase",s0());/**
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
 */const Eh=new qh("@firebase/auth");function cI(r,...e){Eh.logLevel<=xe.WARN&&Eh.warn(`Auth (${Mo}): ${r}`,...e)}function lh(r,...e){Eh.logLevel<=xe.ERROR&&Eh.error(`Auth (${Mo}): ${r}`,...e)}/**
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
 */function Yn(r,...e){throw Ag(r,...e)}function Cn(r,...e){return Ag(r,...e)}function o0(r,e,n){const s={...uI(),[e]:n};return new da("auth","Firebase",s).create(e,{appName:r.name})}function ur(r){return o0(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ag(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return a0.create(r,...e)}function le(r,e,...n){if(!r)throw Ag(e,...n)}function bi(r){const e="INTERNAL ASSERTION FAILED: "+r;throw lh(e),new Error(e)}function fr(r,e){r||bi(e)}/**
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
 */function $m(){return typeof self<"u"&&self.location?.href||""}function l0(){return aE()==="http:"||aE()==="https:"}function aE(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function hI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(l0()||XT()||"connection"in navigator)?navigator.onLine:!0}function fI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class wu{constructor(e,n){this.shortDelay=e,this.longDelay=n,fr(n>e,"Short delay should be less than long delay!"),this.isMobile=Ub()||Bb()}get(){return hI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Sg(r,e){fr(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class u0{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const dI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const mI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],gI=new wu(3e4,6e4);function zt(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function $t(r,e,n,s,o={}){return c0(r,o,async()=>{let u={},f={};s&&(e==="GET"?f=s:u={body:JSON.stringify(s)});const m=xo({key:r.config.apiKey,...f}).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const y={method:e,headers:p,...u};return zb()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&cs(r.emulatorConfig.host)&&(y.credentials="include"),u0.fetch()(await h0(r,r.config.apiHost,n,m),y)})}async function c0(r,e,n){r._canInitEmulator=!1;const s={...dI,...e};try{const o=new yI(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw eu(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[p,y]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw eu(r,"credential-already-in-use",f);if(p==="EMAIL_EXISTS")throw eu(r,"email-already-in-use",f);if(p==="USER_DISABLED")throw eu(r,"user-disabled",f);const E=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw o0(r,E,y);Yn(r,E)}}catch(o){if(o instanceof Kn)throw o;Yn(r,"network-request-failed",{message:String(o)})}}async function fs(r,e,n,s,o={}){const u=await $t(r,e,n,s,o);return"mfaPendingCredential"in u&&Yn(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function h0(r,e,n,s){const o=`${e}${n}?${s}`,u=r,f=u.config.emulator?Sg(r.config,o):`${r.config.apiScheme}://${o}`;return mI.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function pI(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Cn(this.auth,"network-request-failed")),gI.get())})}}function eu(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=Cn(r,e,s);return o.customData._tokenResponse=n,o}/**
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
 */function oE(r){return r!==void 0&&r.getResponse!==void 0}function lE(r){return r!==void 0&&r.enterprise!==void 0}class f0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return pI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function _I(r){return(await $t(r,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function d0(r,e){return $t(r,"GET","/v2/recaptchaConfig",zt(r,e))}/**
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
 */async function vI(r,e){return $t(r,"POST","/v1/accounts:delete",e)}async function Th(r,e){return $t(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function au(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function EI(r,e=!1){const n=Ze(r),s=await n.getIdToken(e),o=bg(s);le(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u?.sign_in_provider;return{claims:o,token:s,authTime:au(Nm(o.auth_time)),issuedAtTime:au(Nm(o.iat)),expirationTime:au(Nm(o.exp)),signInProvider:f||null,signInSecondFactor:u?.sign_in_second_factor||null}}function Nm(r){return Number(r)*1e3}function bg(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return lh("JWT malformed, contained fewer than 3 sections"),null;try{const o=GT(n);return o?JSON.parse(o):(lh("Failed to decode base64 JWT payload"),null)}catch(o){return lh("Caught error parsing JWT payload as JSON",o?.toString()),null}}function uE(r){const e=bg(r);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ns(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Kn&&TI(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function TI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class wI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */async function wh(r){const e=r.auth,n=await r.getIdToken(),s=await ns(r,Th(e,{idToken:n}));le(s?.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const u=o.providerUserInfo?.length?m0(o.providerUserInfo):[],f=SI(r.providerData,u),m=r.isAnonymous,p=!(r.email&&o.passwordHash)&&!f?.length,y=m?p:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new Xm(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(r,E)}async function AI(r){const e=Ze(r);await wh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function SI(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function m0(r){return r.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function bI(r,e){const n=await c0(r,{},async()=>{const s=xo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=await h0(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:m,body:s};return r.emulatorConfig&&cs(r.emulatorConfig.host)&&(p.credentials="include"),u0.fetch()(f,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function RI(r,e){return $t(r,"POST","/v2/accounts:revokeToken",zt(r,e))}/**
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
 */class _o{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){le(e.length!==0,"internal-error");const n=uE(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await bI(e,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new _o;return s&&(le(typeof s=="string","internal-error",{appName:e}),f.refreshToken=s),o&&(le(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),u&&(le(typeof u=="number","internal-error",{appName:e}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _o,this.toJSON())}_performRefresh(){return bi("not implemented")}}/**
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
 */function Hr(r,e){le(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class ni{constructor({uid:e,auth:n,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new wI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Xm(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await ns(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return EI(this,e)}reload(){return AI(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ni({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await wh(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rn(this.auth.app))return Promise.reject(ur(this.auth));const e=await this.getIdToken();return await ns(this,vI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,o=n.email??void 0,u=n.phoneNumber??void 0,f=n.photoURL??void 0,m=n.tenantId??void 0,p=n._redirectEventId??void 0,y=n.createdAt??void 0,E=n.lastLoginAt??void 0,{uid:R,emailVerified:b,isAnonymous:B,providerData:K,stsTokenManager:ne}=n;le(R&&ne,e,"internal-error");const J=_o.fromJSON(this.name,ne);le(typeof R=="string",e,"internal-error"),Hr(s,e.name),Hr(o,e.name),le(typeof b=="boolean",e,"internal-error"),le(typeof B=="boolean",e,"internal-error"),Hr(u,e.name),Hr(f,e.name),Hr(m,e.name),Hr(p,e.name),Hr(y,e.name),Hr(E,e.name);const Ee=new ni({uid:R,auth:e,email:o,emailVerified:b,displayName:s,isAnonymous:B,photoURL:f,phoneNumber:u,tenantId:m,stsTokenManager:J,createdAt:y,lastLoginAt:E});return K&&Array.isArray(K)&&(Ee.providerData=K.map(ae=>({...ae}))),p&&(Ee._redirectEventId=p),Ee}static async _fromIdTokenResponse(e,n,s=!1){const o=new _o;o.updateFromServerResponse(n);const u=new ni({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await wh(u),u}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];le(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?m0(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!u?.length,m=new _o;m.updateFromIdToken(s);const p=new ni({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Xm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!u?.length};return Object.assign(p,y),p}}/**
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
 */const cE=new Map;function lr(r){fr(r instanceof Function,"Expected a class definition");let e=cE.get(r);return e?(fr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,cE.set(r,e),e)}/**
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
 */class g0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}g0.type="NONE";const hE=g0;/**
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
 */function uh(r,e,n){return`firebase:${r}:${e}:${n}`}class vo{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=uh(this.userKey,o.apiKey,u),this.fullPersistenceKey=uh("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Th(this.auth,{idToken:e}).catch(()=>{});return n?ni._fromGetAccountInfoResponse(this.auth,n,e):null}return ni._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new vo(lr(hE),e,s);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||lr(hE);const f=uh(s,e.config.apiKey,e.name);let m=null;for(const y of n)try{const E=await y._get(f);if(E){let R;if(typeof E=="string"){const b=await Th(e,{idToken:E}).catch(()=>{});if(!b)break;R=await ni._fromGetAccountInfoResponse(e,b,E)}else R=ni._fromJSON(e,E);y!==u&&(m=R),u=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new vo(u,e,s):(u=p[0],m&&await u._set(f,m.toJSON()),await Promise.all(n.map(async y=>{if(y!==u)try{await y._remove(f)}catch{}})),new vo(u,e,s))}}/**
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
 */function fE(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(v0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(p0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(T0(e))return"Blackberry";if(w0(e))return"Webos";if(y0(e))return"Safari";if((e.includes("chrome/")||_0(e))&&!e.includes("edge/"))return"Chrome";if(E0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if(s?.length===2)return s[1]}return"Other"}function p0(r=nn()){return/firefox\//i.test(r)}function y0(r=nn()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _0(r=nn()){return/crios\//i.test(r)}function v0(r=nn()){return/iemobile/i.test(r)}function E0(r=nn()){return/android/i.test(r)}function T0(r=nn()){return/blackberry/i.test(r)}function w0(r=nn()){return/webos/i.test(r)}function Rg(r=nn()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function II(r=nn()){return Rg(r)&&!!window.navigator?.standalone}function CI(){return qb()&&document.documentMode===10}function A0(r=nn()){return Rg(r)||E0(r)||w0(r)||T0(r)||/windows phone/i.test(r)||v0(r)}/**
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
 */function S0(r,e=[]){let n;switch(r){case"Browser":n=fE(nn());break;case"Worker":n=`${fE(nn())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mo}/${s}`}/**
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
 */class NI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((f,m)=>{try{const p=e(u);f(p)}catch(p){m(p)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function DI(r,e={}){return $t(r,"GET","/v2/passwordPolicy",zt(r,e))}/**
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
 */const OI=6;class xI{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??OI,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class MI{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dE(this),this.idTokenSubscription=new dE(this),this.beforeStateQueue=new NI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=a0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=lr(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await vo.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Th(this,{idToken:e}),s=await ni._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Rn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(f,f))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=this.redirectUser?._redirectEventId,f=s?._redirectEventId,m=await this.tryRedirectSignIn(e);(!u||u===f)&&m?.user&&(s=m.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wh(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Rn(this.app))return Promise.reject(ur(this));const n=e?Ze(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Rn(this.app)?Promise.reject(ur(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Rn(this.app)?Promise.reject(ur(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(lr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await DI(this),n=new xI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new da("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await RI(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&lr(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await vo.create(this,[lr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,o);return()=>{f=!0,p()}}else{const p=e.addObserver(n);return()=>{f=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=S0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(Rn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&cI(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ai(r){return Ze(r)}class dE{constructor(e){this.auth=e,this.observer=null,this.addObserver=$b(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Au={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function PI(r){Au=r}function Ig(r){return Au.loadJS(r)}function VI(){return Au.recaptchaV2Script}function kI(){return Au.recaptchaEnterpriseScript}function LI(){return Au.gapiScript}function b0(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */const UI=500,jI=6e4,th=1e12;class zI{constructor(e){this.auth=e,this.counter=th,this._widgets=new Map}render(e,n){const s=this.counter;return this._widgets.set(s,new FI(e,this.auth.name,n||{})),this.counter++,s}reset(e){const n=e||th;this._widgets.get(n)?.delete(),this._widgets.delete(n)}getResponse(e){const n=e||th;return this._widgets.get(n)?.getResponse()||""}async execute(e){const n=e||th;return this._widgets.get(n)?.execute(),""}}class BI{constructor(){this.enterprise=new qI}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class qI{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class FI{constructor(e,n,s){this.params=s,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const o=typeof e=="string"?document.getElementById(e):e;le(o,"argument-error",{appName:n}),this.container=o,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=HI(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},jI)},UI))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function HI(r){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let s=0;s<r;s++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const GI="recaptcha-enterprise",ou="NO_RECAPTCHA";class R0{constructor(e){this.type=GI,this.auth=ai(e)}async verify(e="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,m)=>{d0(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const y=new f0(p);return u.tenantId==null?u._agentRecaptchaConfig=y:u._tenantRecaptchaConfigs[u.tenantId]=y,f(y.siteKey)}}).catch(p=>{m(p)})})}function o(u,f,m){const p=window.grecaptcha;lE(p)?p.enterprise.ready(()=>{p.enterprise.execute(u,{action:e}).then(y=>{f(y)}).catch(()=>{f(ou)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new BI().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(m=>{if(!n&&lE(window.grecaptcha))o(m,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let p=kI();p.length!==0&&(p+=m),Ig(p).then(()=>{o(m,u,f)}).catch(y=>{f(y)})}}).catch(m=>{f(m)})})}}async function Wl(r,e,n,s=!1,o=!1){const u=new R0(r);let f;if(o)f=ou;else try{f=await u.verify(n)}catch{f=await u.verify(n,!0)}const m={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const p=m.phoneEnrollmentInfo.phoneNumber,y=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const p=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:f}):Object.assign(m,{captchaResponse:f}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function ra(r,e,n,s,o){if(o==="EMAIL_PASSWORD_PROVIDER")if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await Wl(r,e,n,n==="getOobCode");return s(r,u)}else return s(r,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Wl(r,e,n,n==="getOobCode");return s(r,f)}else return Promise.reject(u)});else if(o==="PHONE_PROVIDER")if(r._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const u=await Wl(r,e,n);return s(r,u).catch(async f=>{if(r._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")==="AUDIT"&&(f.code==="auth/missing-recaptcha-token"||f.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const m=await Wl(r,e,n,!1,!0);return s(r,m)}return Promise.reject(f)})}else{const u=await Wl(r,e,n,!1,!0);return s(r,u)}else return Promise.reject(o+" provider is not supported.")}async function YI(r){const e=ai(r),n=await d0(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),s=new f0(n);e.tenantId==null?e._agentRecaptchaConfig=s:e._tenantRecaptchaConfigs[e.tenantId]=s,s.isAnyProviderEnabled()&&new R0(e).verify()}/**
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
 */function KI(r,e){const n=hs(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(Di(u,e??{}))return o;Yn(o,"already-initialized")}return n.initialize({options:e})}function QI(r,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(lr);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e?.popupRedirectResolver)}function $I(r,e,n){const s=ai(r);le(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=I0(e),{host:f,port:m}=XI(e),p=m===null?"":`:${m}`,y={url:`${u}//${f}${p}/`},E=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){le(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),le(Di(y,s.config.emulator)&&Di(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,cs(f)?(Eg(`${u}//${f}${p}`),Tg("Auth",!0)):WI()}function I0(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function XI(r){const e=I0(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:mE(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:mE(f)}}}function mE(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function WI(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Hh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bi("not implemented")}_getIdTokenResponse(e){return bi("not implemented")}_linkToIdToken(e,n){return bi("not implemented")}_getReauthenticationResolver(e){return bi("not implemented")}}async function ZI(r,e){return $t(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function JI(r,e){return fs(r,"POST","/v1/accounts:signInWithPassword",zt(r,e))}async function C0(r,e){return $t(r,"POST","/v1/accounts:sendOobCode",zt(r,e))}async function e1(r,e){return C0(r,e)}async function t1(r,e){return C0(r,e)}/**
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
 */async function n1(r,e){return fs(r,"POST","/v1/accounts:signInWithEmailLink",zt(r,e))}async function i1(r,e){return fs(r,"POST","/v1/accounts:signInWithEmailLink",zt(r,e))}/**
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
 */class gu extends Hh{constructor(e,n,s,o=null){super("password",s),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new gu(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new gu(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ra(e,n,"signInWithPassword",JI,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return n1(e,{email:this._email,oobCode:this._password});default:Yn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ra(e,s,"signUpPassword",ZI,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return i1(e,{idToken:n,email:this._email,oobCode:this._password});default:Yn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Eo(r,e){return fs(r,"POST","/v1/accounts:signInWithIdp",zt(r,e))}/**
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
 */const r1="http://localhost";class oa extends Hh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new oa(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=n;if(!s||!o)return null;const f=new oa(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(e){const n=this.buildRequest();return Eo(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Eo(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Eo(e,n)}buildRequest(){const e={requestUri:r1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xo(n)}return e}}/**
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
 */async function gE(r,e){return $t(r,"POST","/v1/accounts:sendVerificationCode",zt(r,e))}async function s1(r,e){return fs(r,"POST","/v1/accounts:signInWithPhoneNumber",zt(r,e))}async function a1(r,e){const n=await fs(r,"POST","/v1/accounts:signInWithPhoneNumber",zt(r,e));if(n.temporaryProof)throw eu(r,"account-exists-with-different-credential",n);return n}const o1={USER_NOT_FOUND:"user-not-found"};async function l1(r,e){const n={...e,operation:"REAUTH"};return fs(r,"POST","/v1/accounts:signInWithPhoneNumber",zt(r,n),o1)}/**
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
 */class To extends Hh{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new To({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new To({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return s1(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return a1(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return l1(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:s,verificationCode:o}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:s,code:o}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:s,phoneNumber:o,temporaryProof:u}=e;return!s&&!n&&!o&&!u?null:new To({verificationId:n,verificationCode:s,phoneNumber:o,temporaryProof:u})}}/**
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
 */function u1(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function c1(r){const e=Zl(Jl(r)).link,n=e?Zl(Jl(e)).deep_link_id:null,s=Zl(Jl(r)).deep_link_id;return(s?Zl(Jl(s)).link:null)||s||n||e||r}class Cg{constructor(e){const n=Zl(Jl(e)),s=n.apiKey??null,o=n.oobCode??null,u=u1(n.mode??null);le(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=c1(e);try{return new Cg(n)}catch{return null}}}/**
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
 */class Po{constructor(){this.providerId=Po.PROVIDER_ID}static credential(e,n){return gu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Cg.parseLink(n);return le(s,"argument-error"),gu._fromEmailAndCode(e,s.code,s.tenantId)}}Po.PROVIDER_ID="password";Po.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Po.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class N0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Su extends N0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yr extends Su{constructor(){super("facebook.com")}static credential(e){return oa._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yr.credential(e.oauthAccessToken)}catch{return null}}}Yr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yr.PROVIDER_ID="facebook.com";/**
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
 */class Kr extends Su{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return oa._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Kr.credential(n,s)}catch{return null}}}Kr.GOOGLE_SIGN_IN_METHOD="google.com";Kr.PROVIDER_ID="google.com";/**
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
 */class Qr extends Su{constructor(){super("github.com")}static credential(e){return oa._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qr.credential(e.oauthAccessToken)}catch{return null}}}Qr.GITHUB_SIGN_IN_METHOD="github.com";Qr.PROVIDER_ID="github.com";/**
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
 */class $r extends Su{constructor(){super("twitter.com")}static credential(e,n){return oa._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return $r.credential(n,s)}catch{return null}}}$r.TWITTER_SIGN_IN_METHOD="twitter.com";$r.PROVIDER_ID="twitter.com";/**
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
 */async function h1(r,e){return fs(r,"POST","/v1/accounts:signUp",zt(r,e))}/**
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
 */class Ah extends Kn{constructor(e,n,s,o){super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Ah.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new Ah(e,n,s,o)}}function D0(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Ah._fromErrorAndOperation(r,u,e,s):u})}async function f1(r,e,n=!1){const s=await ns(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return la._forOperation(r,"link",s)}/**
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
 */async function d1(r,e,n=!1){const{auth:s}=r;if(Rn(s.app))return Promise.reject(ur(s));const o="reauthenticate";try{const u=await ns(r,D0(s,o,e,r),n);le(u.idToken,s,"internal-error");const f=bg(u.idToken);le(f,s,"internal-error");const{sub:m}=f;return le(r.uid===m,s,"user-mismatch"),la._forOperation(r,o,u)}catch(u){throw u?.code==="auth/user-not-found"&&Yn(s,"user-mismatch"),u}}/**
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
 */async function O0(r,e,n=!1){if(Rn(r.app))return Promise.reject(ur(r));const s="signIn",o=await D0(r,s,e),u=await la._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}async function m1(r,e){return O0(ai(r),e)}/**
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
 */async function x0(r){const e=ai(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function g1(r,e,n){const s=ai(r);await ra(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",t1,"EMAIL_PASSWORD_PROVIDER")}async function p1(r,e,n){if(Rn(r.app))return Promise.reject(ur(r));const s=ai(r),f=await ra(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",h1,"EMAIL_PASSWORD_PROVIDER").catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&x0(r),p}),m=await la._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(m.user),m}function y1(r,e,n){return Rn(r.app)?Promise.reject(ur(r)):m1(Ze(r),Po.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&x0(r),s})}async function _1(r,e){const n=Ze(r),o={requestType:"VERIFY_EMAIL",idToken:await r.getIdToken()},{email:u}=await e1(n.auth,o);u!==r.email&&await r.reload()}/**
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
 */async function v1(r,e){return $t(r,"POST","/v1/accounts:update",e)}/**
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
 */async function E1(r,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=Ze(r),u={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},f=await ns(s,v1(s.auth,u));s.displayName=f.displayName||null,s.photoURL=f.photoUrl||null;const m=s.providerData.find(({providerId:p})=>p==="password");m&&(m.displayName=s.displayName,m.photoURL=s.photoURL),await s._updateTokensIfNecessary(f)}function T1(r,e,n,s){return Ze(r).onIdTokenChanged(e,n,s)}function w1(r,e,n){return Ze(r).beforeAuthStateChanged(e,n)}function Wm(r,e,n,s){return Ze(r).onAuthStateChanged(e,n,s)}function A1(r){return Ze(r).signOut()}/**
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
 */function yE(r,e){return $t(r,"POST","/v2/accounts/mfaEnrollment:start",zt(r,e))}function S1(r,e){return $t(r,"POST","/v2/accounts/mfaEnrollment:finalize",zt(r,e))}function b1(r,e){return $t(r,"POST","/v2/accounts/mfaEnrollment:withdraw",zt(r,e))}class xg{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(s=>Ng._fromServerResponse(e.auth,s)))})}static _fromUser(e){return new xg(e)}async getSession(){return po._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const s=e,o=await this.getSession(),u=await ns(this.user,s._process(this.user.auth,o,n));return await this.user._updateTokensIfNecessary(u),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,s=await this.user.getIdToken();try{const o=await ns(this.user,b1(this.user.auth,{idToken:s,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:u})=>u!==n),await this.user._updateTokensIfNecessary(o),await this.user.reload()}catch(o){throw o}}}const Dm=new WeakMap;function _E(r){const e=Ze(r);return Dm.has(e)||Dm.set(e,xg._fromUser(e)),Dm.get(e)}const Sh="__sak";/**
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
 */class M0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sh,"1"),this.storage.removeItem(Sh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const R1=1e3,I1=10;class P0 extends M0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=A0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((f,m,p)=>{this.notifyListeners(f,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);CI()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,I1):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},R1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}P0.type="LOCAL";const C1=P0;/**
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
 */class V0 extends M0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}V0.type="SESSION";const k0=V0;/**
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
 */function N1(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Gh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new Gh(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!f?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async y=>y(n.origin,u)),p=await N1(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gh.receivers=[];/**
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
 */function Mg(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class D1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,p)=>{const y=Mg("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(R){const b=R;if(b.data.eventId===y)switch(b.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(b.data.response);break;default:clearTimeout(E),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:y,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function St(){return window}function O1(r){St().location.href=r}/**
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
 */function Pg(){return typeof St().WorkerGlobalScope<"u"&&typeof St().importScripts=="function"}async function x1(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function M1(){return navigator?.serviceWorker?.controller||null}function P1(){return Pg()?self:null}/**
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
 */const L0="firebaseLocalStorageDb",V1=1,bh="firebaseLocalStorage",U0="fbase_key";class bu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yh(r,e){return r.transaction([bh],e?"readwrite":"readonly").objectStore(bh)}function k1(){const r=indexedDB.deleteDatabase(L0);return new bu(r).toPromise()}function Zm(){const r=indexedDB.open(L0,V1);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(bh,{keyPath:U0})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(bh)?e(s):(s.close(),await k1(),e(await Zm()))})})}async function vE(r,e,n){const s=Yh(r,!0).put({[U0]:e,value:n});return new bu(s).toPromise()}async function L1(r,e){const n=Yh(r,!1).get(e),s=await new bu(n).toPromise();return s===void 0?null:s.value}function EE(r,e){const n=Yh(r,!0).delete(e);return new bu(n).toPromise()}const U1=800,j1=3;class j0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>j1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gh._getInstance(P1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await x1(),!this.activeServiceWorker)return;this.sender=new D1(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||M1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zm();return await vE(e,Sh,"1"),await EE(e,Sh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>vE(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>L1(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>EE(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Yh(o,!1).getAll();return new bu(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),U1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}j0.type="LOCAL";const z1=j0;/**
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
 */function TE(r,e){return $t(r,"POST","/v2/accounts/mfaSignIn:start",zt(r,e))}function B1(r,e){return $t(r,"POST","/v2/accounts/mfaSignIn:finalize",zt(r,e))}/**
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
 */const Om=b0("rcb"),q1=new wu(3e4,6e4);class F1{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!St().grecaptcha?.render}load(e,n=""){return le(H1(n),e,"argument-error"),this.shouldResolveImmediately(n)&&oE(St().grecaptcha)?Promise.resolve(St().grecaptcha):new Promise((s,o)=>{const u=St().setTimeout(()=>{o(Cn(e,"network-request-failed"))},q1.get());St()[Om]=()=>{St().clearTimeout(u),delete St()[Om];const m=St().grecaptcha;if(!m||!oE(m)){o(Cn(e,"internal-error"));return}const p=m.render;m.render=(y,E)=>{const R=p(y,E);return this.counter++,R},this.hostLanguage=n,s(m)};const f=`${VI()}?${xo({onload:Om,render:"explicit",hl:n})}`;Ig(f).catch(()=>{clearTimeout(u),o(Cn(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!St().grecaptcha?.render&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function H1(r){return r.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(r)}class G1{async load(e){return new zI(e)}clearedOneInstance(){}}/**
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
 */const lu="recaptcha",Y1={theme:"light",type:"image"};class K1{constructor(e,n,s={...Y1}){this.parameters=s,this.type=lu,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ai(e),this.isInvisible=this.parameters.size==="invisible",le(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const o=typeof n=="string"?document.getElementById(n):n;le(o,this.auth,"argument-error"),this.container=o,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new G1:new F1,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),s=n.getResponse(e);return s||new Promise(o=>{const u=f=>{f&&(this.tokenChangeListeners.delete(u),o(f))};this.tokenChangeListeners.add(u),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){le(!this.parameters.sitekey,this.auth,"argument-error"),le(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),le(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(s=>s(n)),typeof e=="function")e(n);else if(typeof e=="string"){const s=St()[e];typeof s=="function"&&s(n)}}}assertNotDestroyed(){le(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){le(l0()&&!Pg(),this.auth,"internal-error"),await Q1(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await _I(this.auth);le(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return le(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Q1(){let r=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}r=()=>e(),window.addEventListener("load",r)}).catch(e=>{throw r&&window.removeEventListener("load",r),e})}async function $1(r,e,n){if(!r._getRecaptchaConfig())try{await YI(r)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s){le(o.type==="enroll",r,"internal-error");const u={idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await ra(r,u,"mfaSmsEnrollment",async(y,E)=>{if(E.phoneEnrollmentInfo.captchaResponse===ou){le(n?.type===lu,y,"argument-error");const R=await xm(y,E,n);return yE(y,R)}return yE(y,E)},"PHONE_PROVIDER").catch(y=>Promise.reject(y))).phoneSessionInfo.sessionInfo}else{le(o.type==="signin",r,"internal-error");const u=s.multiFactorHint?.uid||s.multiFactorUid;le(u,r,"missing-multi-factor-info");const f={mfaPendingCredential:o.credential,mfaEnrollmentId:u,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await ra(r,f,"mfaSmsSignIn",async(E,R)=>{if(R.phoneSignInInfo.captchaResponse===ou){le(n?.type===lu,E,"argument-error");const b=await xm(E,R,n);return TE(E,b)}return TE(E,R)},"PHONE_PROVIDER").catch(E=>Promise.reject(E))).phoneResponseInfo.sessionInfo}}else{const o={phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await ra(r,o,"sendVerificationCode",async(p,y)=>{if(y.captchaResponse===ou){le(n?.type===lu,p,"argument-error");const E=await xm(p,y,n);return gE(p,E)}return gE(p,y)},"PHONE_PROVIDER").catch(p=>Promise.reject(p))).sessionInfo}}finally{n?._reset()}}async function xm(r,e,n){le(n.type===lu,r,"argument-error");const s=await n.verify();le(typeof s=="string",r,"argument-error");const o={...e};if("phoneEnrollmentInfo"in o){const u=o.phoneEnrollmentInfo.phoneNumber,f=o.phoneEnrollmentInfo.captchaResponse,m=o.phoneEnrollmentInfo.clientType,p=o.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:s,captchaResponse:f,clientType:m,recaptchaVersion:p}}),o}else if("phoneSignInInfo"in o){const u=o.phoneSignInInfo.captchaResponse,f=o.phoneSignInInfo.clientType,m=o.phoneSignInInfo.recaptchaVersion;return Object.assign(o,{phoneSignInInfo:{recaptchaToken:s,captchaResponse:u,clientType:f,recaptchaVersion:m}}),o}else return Object.assign(o,{recaptchaToken:s}),o}/**
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
 */class Jr{constructor(e){this.providerId=Jr.PROVIDER_ID,this.auth=ai(e)}verifyPhoneNumber(e,n){return $1(this.auth,e,Ze(n))}static credential(e,n){return To._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Jr.credentialFromTaggedObject(n)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:s}=e;return n&&s?To._fromTokenResponse(n,s):null}}Jr.PROVIDER_ID="phone";Jr.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function X1(r,e){return e?lr(e):(le(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Vg extends Hh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Eo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Eo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Eo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function W1(r){return O0(r.auth,new Vg(r),r.bypassAuthState)}function Z1(r){const{auth:e,user:n}=r;return le(n,e,"internal-error"),d1(n,new Vg(r),r.bypassAuthState)}async function J1(r){const{auth:e,user:n}=r;return le(n,e,"internal-error"),f1(n,new Vg(r),r.bypassAuthState)}/**
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
 */class z0{constructor(e,n,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=e;if(f){this.reject(f);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return W1;case"linkViaPopup":case"linkViaRedirect":return J1;case"reauthViaPopup":case"reauthViaRedirect":return Z1;default:Yn(this.auth,"internal-error")}}resolve(e){fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const eC=new wu(2e3,1e4);class yo extends z0{constructor(e,n,s,o,u){super(e,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,yo.currentPopupAction&&yo.currentPopupAction.cancel(),yo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){fr(this.filter.length===1,"Popup operations only handle one event");const e=Mg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yo.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,eC.get())};e()}}yo.currentPopupAction=null;/**
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
 */const tC="pendingRedirect",ch=new Map;class nC extends z0{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ch.get(this.auth._key());if(!e){try{const s=await iC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ch.set(this.auth._key(),e)}return this.bypassAuthState||ch.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iC(r,e){const n=aC(e),s=sC(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function rC(r,e){ch.set(r._key(),e)}function sC(r){return lr(r._redirectPersistence)}function aC(r){return uh(tC,r.config.apiKey,r.name)}async function oC(r,e,n=!1){if(Rn(r.app))return Promise.reject(ur(r));const s=ai(r),o=X1(s,e),f=await new nC(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,e)),f}/**
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
 */const lC=600*1e3;class uC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!B0(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(Cn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lC&&this.cachedEventUids.clear(),this.cachedEventUids.has(wE(e))}saveEventToCache(e){this.cachedEventUids.add(wE(e)),this.lastProcessedEventTime=Date.now()}}function wE(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function B0({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function cC(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return B0(r);default:return!1}}/**
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
 */async function hC(r,e={}){return $t(r,"GET","/v1/projects",e)}/**
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
 */const fC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dC=/^https?/;async function mC(r){if(r.config.emulator)return;const{authorizedDomains:e}=await hC(r);for(const n of e)try{if(gC(n))return}catch{}Yn(r,"unauthorized-domain")}function gC(r){const e=$m(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!dC.test(n))return!1;if(fC.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const pC=new wu(3e4,6e4);function AE(){const r=St().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function yC(r){return new Promise((e,n)=>{function s(){AE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{AE(),n(Cn(r,"network-request-failed"))},timeout:pC.get()})}if(St().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(St().gapi?.load)s();else{const o=b0("iframefcb");return St()[o]=()=>{gapi.load?s():n(Cn(r,"network-request-failed"))},Ig(`${LI()}?onload=${o}`).catch(u=>n(u))}}).catch(e=>{throw hh=null,e})}let hh=null;function _C(r){return hh=hh||yC(r),hh}/**
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
 */const vC=new wu(5e3,15e3),EC="__/auth/iframe",TC="emulator/auth/iframe",wC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},AC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function SC(r){const e=r.config;le(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?Sg(e,TC):`https://${r.config.authDomain}/${EC}`,s={apiKey:e.apiKey,appName:r.name,v:Mo},o=AC.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${xo(s).slice(1)}`}async function bC(r){const e=await _C(r),n=St().gapi;return le(n,r,"internal-error"),e.open({where:document.body,url:SC(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wC,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=Cn(r,"network-request-failed"),m=St().setTimeout(()=>{u(f)},vC.get());function p(){St().clearTimeout(m),o(s)}s.ping(p).then(p,()=>{u(f)})}))}/**
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
 */const RC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},IC=500,CC=600,NC="_blank",DC="http://localhost";class SE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function OC(r,e,n,s=IC,o=CC){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const p={...RC,width:s.toString(),height:o.toString(),top:u,left:f},y=nn().toLowerCase();n&&(m=_0(y)?NC:n),p0(y)&&(e=e||DC,p.scrollbars="yes");const E=Object.entries(p).reduce((b,[B,K])=>`${b}${B}=${K},`,"");if(II(y)&&m!=="_self")return xC(e||"",m),new SE(null);const R=window.open(e||"",m,E);le(R,r,"popup-blocked");try{R.focus()}catch{}return new SE(R)}function xC(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const MC="__/auth/handler",PC="emulator/auth/handler",VC=encodeURIComponent("fac");async function bE(r,e,n,s,o,u){le(r.config.authDomain,r,"auth-domain-config-required"),le(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Mo,eventId:o};if(e instanceof N0){e.setDefaultLanguage(r.languageCode),f.providerId=e.providerId||"",Qb(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,R]of Object.entries({}))f[E]=R}if(e instanceof Su){const E=e.getScopes().filter(R=>R!=="");E.length>0&&(f.scopes=E.join(","))}r.tenantId&&(f.tid=r.tenantId);const m=f;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const p=await r._getAppCheckToken(),y=p?`#${VC}=${encodeURIComponent(p)}`:"";return`${kC(r)}?${xo(m).slice(1)}${y}`}function kC({config:r}){return r.emulator?Sg(r,PC):`https://${r.authDomain}/${MC}`}/**
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
 */const Mm="webStorageSupport";class LC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=k0,this._completeRedirectFn=oC,this._overrideRedirectResult=rC}async _openPopup(e,n,s,o){fr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const u=await bE(e,n,s,$m(),o);return OC(e,u,Mg())}async _openRedirect(e,n,s,o){await this._originValidation(e);const u=await bE(e,n,s,$m(),o);return O1(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(fr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await bC(e),s=new uC(e);return n.register("authEvent",o=>(le(o?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Mm,{type:Mm},o=>{const u=o?.[0]?.[Mm];u!==void 0&&n(!!u),Yn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return A0()||y0()||Rg()}}const UC=LC;class jC{constructor(e){this.factorId=e}_process(e,n,s){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,s);case"signin":return this._finalizeSignIn(e,n.credential);default:return bi("unexpected MultiFactorSessionType")}}}class kg extends jC{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new kg(e)}_finalizeEnroll(e,n,s){return S1(e,{idToken:n,displayName:s,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return B1(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class q0{constructor(){}static assertion(e){return kg._fromCredential(e)}}q0.FACTOR_ID="phone";var RE="@firebase/auth",IE="1.11.0";/**
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
 */class zC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function BC(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qC(r){ri(new Gn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;le(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:f,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:S0(r)},y=new MI(s,o,u,p);return QI(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ri(new Gn("auth-internal",e=>{const n=ai(e.getProvider("auth").getImmediate());return(s=>new zC(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(RE,IE,BC(r)),gn(RE,IE,"esm2020")}/**
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
 */const FC=300,HC=$T("authIdTokenMaxAge")||FC;let CE=null;const GC=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>HC)return;const o=n?.token;CE!==o&&(CE=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function YC(r=Fh()){const e=hs(r,"auth");if(e.isInitialized())return e.getImmediate();const n=KI(r,{popupRedirectResolver:UC,persistence:[z1,C1,k0]}),s=$T("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=GC(u.toString());w1(n,f,()=>f(n.currentUser)),T1(n,m=>f(m))}}const o=YT("auth");return o&&$I(n,`http://${o}`),n}function KC(){return document.getElementsByTagName("head")?.[0]??document}PI({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=Cn("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",KC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qC("Browser");var QC="firebase",$C="12.2.1";/**
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
 */gn(QC,$C,"app");var NE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var es,F0;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(M,S){function C(){}C.prototype=S.prototype,M.D=S.prototype,M.prototype=new C,M.prototype.constructor=M,M.C=function(O,x,V){for(var N=Array(arguments.length-2),mt=2;mt<arguments.length;mt++)N[mt-2]=arguments[mt];return S.prototype[x].apply(O,N)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(M,S,C){C||(C=0);var O=Array(16);if(typeof S=="string")for(var x=0;16>x;++x)O[x]=S.charCodeAt(C++)|S.charCodeAt(C++)<<8|S.charCodeAt(C++)<<16|S.charCodeAt(C++)<<24;else for(x=0;16>x;++x)O[x]=S[C++]|S[C++]<<8|S[C++]<<16|S[C++]<<24;S=M.g[0],C=M.g[1],x=M.g[2];var V=M.g[3],N=S+(V^C&(x^V))+O[0]+3614090360&4294967295;S=C+(N<<7&4294967295|N>>>25),N=V+(x^S&(C^x))+O[1]+3905402710&4294967295,V=S+(N<<12&4294967295|N>>>20),N=x+(C^V&(S^C))+O[2]+606105819&4294967295,x=V+(N<<17&4294967295|N>>>15),N=C+(S^x&(V^S))+O[3]+3250441966&4294967295,C=x+(N<<22&4294967295|N>>>10),N=S+(V^C&(x^V))+O[4]+4118548399&4294967295,S=C+(N<<7&4294967295|N>>>25),N=V+(x^S&(C^x))+O[5]+1200080426&4294967295,V=S+(N<<12&4294967295|N>>>20),N=x+(C^V&(S^C))+O[6]+2821735955&4294967295,x=V+(N<<17&4294967295|N>>>15),N=C+(S^x&(V^S))+O[7]+4249261313&4294967295,C=x+(N<<22&4294967295|N>>>10),N=S+(V^C&(x^V))+O[8]+1770035416&4294967295,S=C+(N<<7&4294967295|N>>>25),N=V+(x^S&(C^x))+O[9]+2336552879&4294967295,V=S+(N<<12&4294967295|N>>>20),N=x+(C^V&(S^C))+O[10]+4294925233&4294967295,x=V+(N<<17&4294967295|N>>>15),N=C+(S^x&(V^S))+O[11]+2304563134&4294967295,C=x+(N<<22&4294967295|N>>>10),N=S+(V^C&(x^V))+O[12]+1804603682&4294967295,S=C+(N<<7&4294967295|N>>>25),N=V+(x^S&(C^x))+O[13]+4254626195&4294967295,V=S+(N<<12&4294967295|N>>>20),N=x+(C^V&(S^C))+O[14]+2792965006&4294967295,x=V+(N<<17&4294967295|N>>>15),N=C+(S^x&(V^S))+O[15]+1236535329&4294967295,C=x+(N<<22&4294967295|N>>>10),N=S+(x^V&(C^x))+O[1]+4129170786&4294967295,S=C+(N<<5&4294967295|N>>>27),N=V+(C^x&(S^C))+O[6]+3225465664&4294967295,V=S+(N<<9&4294967295|N>>>23),N=x+(S^C&(V^S))+O[11]+643717713&4294967295,x=V+(N<<14&4294967295|N>>>18),N=C+(V^S&(x^V))+O[0]+3921069994&4294967295,C=x+(N<<20&4294967295|N>>>12),N=S+(x^V&(C^x))+O[5]+3593408605&4294967295,S=C+(N<<5&4294967295|N>>>27),N=V+(C^x&(S^C))+O[10]+38016083&4294967295,V=S+(N<<9&4294967295|N>>>23),N=x+(S^C&(V^S))+O[15]+3634488961&4294967295,x=V+(N<<14&4294967295|N>>>18),N=C+(V^S&(x^V))+O[4]+3889429448&4294967295,C=x+(N<<20&4294967295|N>>>12),N=S+(x^V&(C^x))+O[9]+568446438&4294967295,S=C+(N<<5&4294967295|N>>>27),N=V+(C^x&(S^C))+O[14]+3275163606&4294967295,V=S+(N<<9&4294967295|N>>>23),N=x+(S^C&(V^S))+O[3]+4107603335&4294967295,x=V+(N<<14&4294967295|N>>>18),N=C+(V^S&(x^V))+O[8]+1163531501&4294967295,C=x+(N<<20&4294967295|N>>>12),N=S+(x^V&(C^x))+O[13]+2850285829&4294967295,S=C+(N<<5&4294967295|N>>>27),N=V+(C^x&(S^C))+O[2]+4243563512&4294967295,V=S+(N<<9&4294967295|N>>>23),N=x+(S^C&(V^S))+O[7]+1735328473&4294967295,x=V+(N<<14&4294967295|N>>>18),N=C+(V^S&(x^V))+O[12]+2368359562&4294967295,C=x+(N<<20&4294967295|N>>>12),N=S+(C^x^V)+O[5]+4294588738&4294967295,S=C+(N<<4&4294967295|N>>>28),N=V+(S^C^x)+O[8]+2272392833&4294967295,V=S+(N<<11&4294967295|N>>>21),N=x+(V^S^C)+O[11]+1839030562&4294967295,x=V+(N<<16&4294967295|N>>>16),N=C+(x^V^S)+O[14]+4259657740&4294967295,C=x+(N<<23&4294967295|N>>>9),N=S+(C^x^V)+O[1]+2763975236&4294967295,S=C+(N<<4&4294967295|N>>>28),N=V+(S^C^x)+O[4]+1272893353&4294967295,V=S+(N<<11&4294967295|N>>>21),N=x+(V^S^C)+O[7]+4139469664&4294967295,x=V+(N<<16&4294967295|N>>>16),N=C+(x^V^S)+O[10]+3200236656&4294967295,C=x+(N<<23&4294967295|N>>>9),N=S+(C^x^V)+O[13]+681279174&4294967295,S=C+(N<<4&4294967295|N>>>28),N=V+(S^C^x)+O[0]+3936430074&4294967295,V=S+(N<<11&4294967295|N>>>21),N=x+(V^S^C)+O[3]+3572445317&4294967295,x=V+(N<<16&4294967295|N>>>16),N=C+(x^V^S)+O[6]+76029189&4294967295,C=x+(N<<23&4294967295|N>>>9),N=S+(C^x^V)+O[9]+3654602809&4294967295,S=C+(N<<4&4294967295|N>>>28),N=V+(S^C^x)+O[12]+3873151461&4294967295,V=S+(N<<11&4294967295|N>>>21),N=x+(V^S^C)+O[15]+530742520&4294967295,x=V+(N<<16&4294967295|N>>>16),N=C+(x^V^S)+O[2]+3299628645&4294967295,C=x+(N<<23&4294967295|N>>>9),N=S+(x^(C|~V))+O[0]+4096336452&4294967295,S=C+(N<<6&4294967295|N>>>26),N=V+(C^(S|~x))+O[7]+1126891415&4294967295,V=S+(N<<10&4294967295|N>>>22),N=x+(S^(V|~C))+O[14]+2878612391&4294967295,x=V+(N<<15&4294967295|N>>>17),N=C+(V^(x|~S))+O[5]+4237533241&4294967295,C=x+(N<<21&4294967295|N>>>11),N=S+(x^(C|~V))+O[12]+1700485571&4294967295,S=C+(N<<6&4294967295|N>>>26),N=V+(C^(S|~x))+O[3]+2399980690&4294967295,V=S+(N<<10&4294967295|N>>>22),N=x+(S^(V|~C))+O[10]+4293915773&4294967295,x=V+(N<<15&4294967295|N>>>17),N=C+(V^(x|~S))+O[1]+2240044497&4294967295,C=x+(N<<21&4294967295|N>>>11),N=S+(x^(C|~V))+O[8]+1873313359&4294967295,S=C+(N<<6&4294967295|N>>>26),N=V+(C^(S|~x))+O[15]+4264355552&4294967295,V=S+(N<<10&4294967295|N>>>22),N=x+(S^(V|~C))+O[6]+2734768916&4294967295,x=V+(N<<15&4294967295|N>>>17),N=C+(V^(x|~S))+O[13]+1309151649&4294967295,C=x+(N<<21&4294967295|N>>>11),N=S+(x^(C|~V))+O[4]+4149444226&4294967295,S=C+(N<<6&4294967295|N>>>26),N=V+(C^(S|~x))+O[11]+3174756917&4294967295,V=S+(N<<10&4294967295|N>>>22),N=x+(S^(V|~C))+O[2]+718787259&4294967295,x=V+(N<<15&4294967295|N>>>17),N=C+(V^(x|~S))+O[9]+3951481745&4294967295,M.g[0]=M.g[0]+S&4294967295,M.g[1]=M.g[1]+(x+(N<<21&4294967295|N>>>11))&4294967295,M.g[2]=M.g[2]+x&4294967295,M.g[3]=M.g[3]+V&4294967295}s.prototype.u=function(M,S){S===void 0&&(S=M.length);for(var C=S-this.blockSize,O=this.B,x=this.h,V=0;V<S;){if(x==0)for(;V<=C;)o(this,M,V),V+=this.blockSize;if(typeof M=="string"){for(;V<S;)if(O[x++]=M.charCodeAt(V++),x==this.blockSize){o(this,O),x=0;break}}else for(;V<S;)if(O[x++]=M[V++],x==this.blockSize){o(this,O),x=0;break}}this.h=x,this.o+=S},s.prototype.v=function(){var M=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);M[0]=128;for(var S=1;S<M.length-8;++S)M[S]=0;var C=8*this.o;for(S=M.length-8;S<M.length;++S)M[S]=C&255,C/=256;for(this.u(M),M=Array(16),S=C=0;4>S;++S)for(var O=0;32>O;O+=8)M[C++]=this.g[S]>>>O&255;return M};function u(M,S){var C=m;return Object.prototype.hasOwnProperty.call(C,M)?C[M]:C[M]=S(M)}function f(M,S){this.h=S;for(var C=[],O=!0,x=M.length-1;0<=x;x--){var V=M[x]|0;O&&V==S||(C[x]=V,O=!1)}this.g=C}var m={};function p(M){return-128<=M&&128>M?u(M,function(S){return new f([S|0],0>S?-1:0)}):new f([M|0],0>M?-1:0)}function y(M){if(isNaN(M)||!isFinite(M))return R;if(0>M)return J(y(-M));for(var S=[],C=1,O=0;M>=C;O++)S[O]=M/C|0,C*=4294967296;return new f(S,0)}function E(M,S){if(M.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(M.charAt(0)=="-")return J(E(M.substring(1),S));if(0<=M.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=y(Math.pow(S,8)),O=R,x=0;x<M.length;x+=8){var V=Math.min(8,M.length-x),N=parseInt(M.substring(x,x+V),S);8>V?(V=y(Math.pow(S,V)),O=O.j(V).add(y(N))):(O=O.j(C),O=O.add(y(N)))}return O}var R=p(0),b=p(1),B=p(16777216);r=f.prototype,r.m=function(){if(ne(this))return-J(this).m();for(var M=0,S=1,C=0;C<this.g.length;C++){var O=this.i(C);M+=(0<=O?O:4294967296+O)*S,S*=4294967296}return M},r.toString=function(M){if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if(K(this))return"0";if(ne(this))return"-"+J(this).toString(M);for(var S=y(Math.pow(M,6)),C=this,O="";;){var x=Se(C,S).g;C=Ee(C,x.j(S));var V=((0<C.g.length?C.g[0]:C.h)>>>0).toString(M);if(C=x,K(C))return V+O;for(;6>V.length;)V="0"+V;O=V+O}},r.i=function(M){return 0>M?0:M<this.g.length?this.g[M]:this.h};function K(M){if(M.h!=0)return!1;for(var S=0;S<M.g.length;S++)if(M.g[S]!=0)return!1;return!0}function ne(M){return M.h==-1}r.l=function(M){return M=Ee(this,M),ne(M)?-1:K(M)?0:1};function J(M){for(var S=M.g.length,C=[],O=0;O<S;O++)C[O]=~M.g[O];return new f(C,~M.h).add(b)}r.abs=function(){return ne(this)?J(this):this},r.add=function(M){for(var S=Math.max(this.g.length,M.g.length),C=[],O=0,x=0;x<=S;x++){var V=O+(this.i(x)&65535)+(M.i(x)&65535),N=(V>>>16)+(this.i(x)>>>16)+(M.i(x)>>>16);O=N>>>16,V&=65535,N&=65535,C[x]=N<<16|V}return new f(C,C[C.length-1]&-2147483648?-1:0)};function Ee(M,S){return M.add(J(S))}r.j=function(M){if(K(this)||K(M))return R;if(ne(this))return ne(M)?J(this).j(J(M)):J(J(this).j(M));if(ne(M))return J(this.j(J(M)));if(0>this.l(B)&&0>M.l(B))return y(this.m()*M.m());for(var S=this.g.length+M.g.length,C=[],O=0;O<2*S;O++)C[O]=0;for(O=0;O<this.g.length;O++)for(var x=0;x<M.g.length;x++){var V=this.i(O)>>>16,N=this.i(O)&65535,mt=M.i(x)>>>16,et=M.i(x)&65535;C[2*O+2*x]+=N*et,ae(C,2*O+2*x),C[2*O+2*x+1]+=V*et,ae(C,2*O+2*x+1),C[2*O+2*x+1]+=N*mt,ae(C,2*O+2*x+1),C[2*O+2*x+2]+=V*mt,ae(C,2*O+2*x+2)}for(O=0;O<S;O++)C[O]=C[2*O+1]<<16|C[2*O];for(O=S;O<2*S;O++)C[O]=0;return new f(C,0)};function ae(M,S){for(;(M[S]&65535)!=M[S];)M[S+1]+=M[S]>>>16,M[S]&=65535,S++}function ce(M,S){this.g=M,this.h=S}function Se(M,S){if(K(S))throw Error("division by zero");if(K(M))return new ce(R,R);if(ne(M))return S=Se(J(M),S),new ce(J(S.g),J(S.h));if(ne(S))return S=Se(M,J(S)),new ce(J(S.g),S.h);if(30<M.g.length){if(ne(M)||ne(S))throw Error("slowDivide_ only works with positive integers.");for(var C=b,O=S;0>=O.l(M);)C=me(C),O=me(O);var x=Oe(C,1),V=Oe(O,1);for(O=Oe(O,2),C=Oe(C,2);!K(O);){var N=V.add(O);0>=N.l(M)&&(x=x.add(C),V=N),O=Oe(O,1),C=Oe(C,1)}return S=Ee(M,x.j(S)),new ce(x,S)}for(x=R;0<=M.l(S);){for(C=Math.max(1,Math.floor(M.m()/S.m())),O=Math.ceil(Math.log(C)/Math.LN2),O=48>=O?1:Math.pow(2,O-48),V=y(C),N=V.j(S);ne(N)||0<N.l(M);)C-=O,V=y(C),N=V.j(S);K(V)&&(V=b),x=x.add(V),M=Ee(M,N)}return new ce(x,M)}r.A=function(M){return Se(this,M).h},r.and=function(M){for(var S=Math.max(this.g.length,M.g.length),C=[],O=0;O<S;O++)C[O]=this.i(O)&M.i(O);return new f(C,this.h&M.h)},r.or=function(M){for(var S=Math.max(this.g.length,M.g.length),C=[],O=0;O<S;O++)C[O]=this.i(O)|M.i(O);return new f(C,this.h|M.h)},r.xor=function(M){for(var S=Math.max(this.g.length,M.g.length),C=[],O=0;O<S;O++)C[O]=this.i(O)^M.i(O);return new f(C,this.h^M.h)};function me(M){for(var S=M.g.length+1,C=[],O=0;O<S;O++)C[O]=M.i(O)<<1|M.i(O-1)>>>31;return new f(C,M.h)}function Oe(M,S){var C=S>>5;S%=32;for(var O=M.g.length-C,x=[],V=0;V<O;V++)x[V]=0<S?M.i(V+C)>>>S|M.i(V+C+1)<<32-S:M.i(V+C);return new f(x,M.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,F0=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=E,es=f}).apply(typeof NE<"u"?NE:typeof self<"u"?self:typeof window<"u"?window:{});var nh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var H0,tu,G0,fh,Jm,Y0,K0,Q0;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,_){return c==Array.prototype||c==Object.prototype||(c[g]=_.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof nh=="object"&&nh];for(var g=0;g<c.length;++g){var _=c[g];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(c,g){if(g)e:{var _=s;c=c.split(".");for(var w=0;w<c.length-1;w++){var L=c[w];if(!(L in _))break e;_=_[L]}c=c[c.length-1],w=_[c],g=g(w),g!=w&&g!=null&&e(_,c,{configurable:!0,writable:!0,value:g})}}function u(c,g){c instanceof String&&(c+="");var _=0,w=!1,L={next:function(){if(!w&&_<c.length){var H=_++;return{value:g(H,c[H]),done:!1}}return w=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(c){return c||function(){return u(this,function(g,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function p(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function y(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function E(c,g,_){return c.call.apply(c.bind,arguments)}function R(c,g,_){if(!c)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,w),c.apply(g,L)}}return function(){return c.apply(g,arguments)}}function b(c,g,_){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:R,b.apply(null,arguments)}function B(c,g){var _=Array.prototype.slice.call(arguments,1);return function(){var w=_.slice();return w.push.apply(w,arguments),c.apply(this,w)}}function K(c,g){function _(){}_.prototype=g.prototype,c.aa=g.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(w,L,H){for(var ie=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)ie[ke-2]=arguments[ke];return g.prototype[L].apply(w,ie)}}function ne(c){const g=c.length;if(0<g){const _=Array(g);for(let w=0;w<g;w++)_[w]=c[w];return _}return[]}function J(c,g){for(let _=1;_<arguments.length;_++){const w=arguments[_];if(p(w)){const L=c.length||0,H=w.length||0;c.length=L+H;for(let ie=0;ie<H;ie++)c[L+ie]=w[ie]}else c.push(w)}}class Ee{constructor(g,_){this.i=g,this.j=_,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function ae(c){return/^[\s\xa0]*$/.test(c)}function ce(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function Se(c){return Se[" "](c),c}Se[" "]=function(){};var me=ce().indexOf("Gecko")!=-1&&!(ce().toLowerCase().indexOf("webkit")!=-1&&ce().indexOf("Edge")==-1)&&!(ce().indexOf("Trident")!=-1||ce().indexOf("MSIE")!=-1)&&ce().indexOf("Edge")==-1;function Oe(c,g,_){for(const w in c)g.call(_,c[w],w,c)}function M(c,g){for(const _ in c)g.call(void 0,c[_],_,c)}function S(c){const g={};for(const _ in c)g[_]=c[_];return g}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(c,g){let _,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(_ in w)c[_]=w[_];for(let H=0;H<C.length;H++)_=C[H],Object.prototype.hasOwnProperty.call(w,_)&&(c[_]=w[_])}}function x(c){var g=1;c=c.split(":");const _=[];for(;0<g&&c.length;)_.push(c.shift()),g--;return c.length&&_.push(c.join(":")),_}function V(c){m.setTimeout(()=>{throw c},0)}function N(){var c=fe;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class mt{constructor(){this.h=this.g=null}add(g,_){const w=et.get();w.set(g,_),this.h?this.h.next=w:this.g=w,this.h=w}}var et=new Ee(()=>new G,c=>c.reset());class G{constructor(){this.next=this.g=this.h=null}set(g,_){this.h=g,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let re,ee=!1,fe=new mt,A=()=>{const c=m.Promise.resolve(void 0);re=()=>{c.then(F)}};var F=()=>{for(var c;c=N();){try{c.h.call(c.g)}catch(_){V(_)}var g=et;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}ee=!1};function Z(){this.s=this.s,this.C=this.C}Z.prototype.s=!1,Z.prototype.ma=function(){this.s||(this.s=!0,this.N())},Z.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function te(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}te.prototype.h=function(){this.defaultPrevented=!0};var ge=(function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};m.addEventListener("test",_,g),m.removeEventListener("test",_,g)}catch{}return c})();function Ie(c,g){if(te.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,w=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(me){e:{try{Se(g.nodeName);var L=!0;break e}catch{}L=!1}L||(g=null)}}else _=="mouseover"?g=c.fromElement:_=="mouseout"&&(g=c.toElement);this.relatedTarget=g,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Te[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ie.aa.h.call(this)}}K(Ie,te);var Te={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Mt="closure_listenable_"+(1e6*Math.random()|0),tt=0;function oi(c,g,_,w,L){this.listener=c,this.proxy=null,this.src=g,this.type=_,this.capture=!!w,this.ha=L,this.key=++tt,this.da=this.fa=!1}function gr(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function xi(c){this.src=c,this.g={},this.h=0}xi.prototype.add=function(c,g,_,w,L){var H=c.toString();c=this.g[H],c||(c=this.g[H]=[],this.h++);var ie=ys(c,g,w,L);return-1<ie?(g=c[ie],_||(g.fa=!1)):(g=new oi(g,this.src,H,!!w,L),g.fa=_,c.push(g)),g};function ps(c,g){var _=g.type;if(_ in c.g){var w=c.g[_],L=Array.prototype.indexOf.call(w,g,void 0),H;(H=0<=L)&&Array.prototype.splice.call(w,L,1),H&&(gr(g),c.g[_].length==0&&(delete c.g[_],c.h--))}}function ys(c,g,_,w){for(var L=0;L<c.length;++L){var H=c[L];if(!H.da&&H.listener==g&&H.capture==!!_&&H.ha==w)return L}return-1}var _s="closure_lm_"+(1e6*Math.random()|0),Bo={};function Ou(c,g,_,w,L){if(Array.isArray(g)){for(var H=0;H<g.length;H++)Ou(c,g[H],_,w,L);return null}return _=xu(_),c&&c[Mt]?c.K(g,_,y(w)?!!w.capture:!1,L):On(c,g,_,!1,w,L)}function On(c,g,_,w,L,H){if(!g)throw Error("Invalid event type");var ie=y(L)?!!L.capture:!!L,ke=_a(c);if(ke||(c[_s]=ke=new xi(c)),_=ke.add(g,_,w,ie,H),_.proxy)return _;if(w=_f(),_.proxy=w,w.src=c,w.listener=_,c.addEventListener)ge||(L=ie),L===void 0&&(L=!1),c.addEventListener(g.toString(),w,L);else if(c.attachEvent)c.attachEvent(vs(g.toString()),w);else if(c.addListener&&c.removeListener)c.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return _}function _f(){function c(_){return g.call(c.src,c.listener,_)}const g=vf;return c}function qo(c,g,_,w,L){if(Array.isArray(g))for(var H=0;H<g.length;H++)qo(c,g[H],_,w,L);else w=y(w)?!!w.capture:!!w,_=xu(_),c&&c[Mt]?(c=c.i,g=String(g).toString(),g in c.g&&(H=c.g[g],_=ys(H,_,w,L),-1<_&&(gr(H[_]),Array.prototype.splice.call(H,_,1),H.length==0&&(delete c.g[g],c.h--)))):c&&(c=_a(c))&&(g=c.g[g.toString()],c=-1,g&&(c=ys(g,_,w,L)),(_=-1<c?g[c]:null)&&ya(_))}function ya(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[Mt])ps(g.i,c);else{var _=c.type,w=c.proxy;g.removeEventListener?g.removeEventListener(_,w,c.capture):g.detachEvent?g.detachEvent(vs(_),w):g.addListener&&g.removeListener&&g.removeListener(w),(_=_a(g))?(ps(_,c),_.h==0&&(_.src=null,g[_s]=null)):gr(c)}}}function vs(c){return c in Bo?Bo[c]:Bo[c]="on"+c}function vf(c,g){if(c.da)c=!0;else{g=new Ie(g,this);var _=c.listener,w=c.ha||c.src;c.fa&&ya(c),c=_.call(w,g)}return c}function _a(c){return c=c[_s],c instanceof xi?c:null}var Fo="__closure_events_fn_"+(1e9*Math.random()>>>0);function xu(c){return typeof c=="function"?c:(c[Fo]||(c[Fo]=function(g){return c.handleEvent(g)}),c[Fo])}function ct(){Z.call(this),this.i=new xi(this),this.M=this,this.F=null}K(ct,Z),ct.prototype[Mt]=!0,ct.prototype.removeEventListener=function(c,g,_,w){qo(this,c,g,_,w)};function Ge(c,g){var _,w=c.F;if(w)for(_=[];w;w=w.F)_.push(w);if(c=c.M,w=g.type||g,typeof g=="string")g=new te(g,c);else if(g instanceof te)g.target=g.target||c;else{var L=g;g=new te(w,c),O(g,L)}if(L=!0,_)for(var H=_.length-1;0<=H;H--){var ie=g.g=_[H];L=yn(ie,w,!0,g)&&L}if(ie=g.g=c,L=yn(ie,w,!0,g)&&L,L=yn(ie,w,!1,g)&&L,_)for(H=0;H<_.length;H++)ie=g.g=_[H],L=yn(ie,w,!1,g)&&L}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var _=c.g[g],w=0;w<_.length;w++)gr(_[w]);delete c.g[g],c.h--}}this.F=null},ct.prototype.K=function(c,g,_,w){return this.i.add(String(c),g,!1,_,w)},ct.prototype.L=function(c,g,_,w){return this.i.add(String(c),g,!0,_,w)};function yn(c,g,_,w){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var L=!0,H=0;H<g.length;++H){var ie=g[H];if(ie&&!ie.da&&ie.capture==_){var ke=ie.listener,Ct=ie.ha||ie.src;ie.fa&&ps(c.i,ie),L=ke.call(Ct,w)!==!1&&L}}return L&&!w.defaultPrevented}function Xt(c,g,_){if(typeof c=="function")_&&(c=b(c,_));else if(c&&typeof c.handleEvent=="function")c=b(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:m.setTimeout(c,g||0)}function Mu(c){c.g=Xt(()=>{c.g=null,c.i&&(c.i=!1,Mu(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class Ef extends Z{constructor(g,_){super(),this.m=g,this.l=_,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:Mu(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Es(c){Z.call(this),this.h=c,this.g={}}K(Es,Z);var Ts=[];function ws(c){Oe(c.g,function(g,_){this.g.hasOwnProperty(_)&&ya(g)},c),c.g={}}Es.prototype.N=function(){Es.aa.N.call(this),ws(this)},Es.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qn=m.JSON.stringify,va=m.JSON.parse,As=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function Ho(){}Ho.prototype.h=null;function Go(c){return c.h||(c.h=c.i())}function Yo(){}var Mi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Pi(){te.call(this,"d")}K(Pi,te);function Ko(){te.call(this,"c")}K(Ko,te);var li={},Qo=null;function pr(){return Qo=Qo||new ct}li.La="serverreachability";function Ea(c){te.call(this,li.La,c)}K(Ea,te);function yr(c){const g=pr();Ge(g,new Ea(g))}li.STAT_EVENT="statevent";function Pu(c,g){te.call(this,li.STAT_EVENT,c),this.stat=g}K(Pu,te);function at(c){const g=pr();Ge(g,new Pu(g,c))}li.Ma="timingevent";function It(c,g){te.call(this,li.Ma,c),this.size=g}K(It,te);function vt(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},g)}function xn(){this.g=!0}xn.prototype.xa=function(){this.g=!1};function $o(c,g,_,w,L,H){c.info(function(){if(c.g)if(H)for(var ie="",ke=H.split("&"),Ct=0;Ct<ke.length;Ct++){var Le=ke[Ct].split("=");if(1<Le.length){var Vt=Le[0];Le=Le[1];var Nt=Vt.split("_");ie=2<=Nt.length&&Nt[1]=="type"?ie+(Vt+"="+Le+"&"):ie+(Vt+"=redacted&")}}else ie=null;else ie=H;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+g+`
`+_+`
`+ie})}function Tf(c,g,_,w,L,H,ie){c.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+g+`
`+_+`
`+H+" "+ie})}function _r(c,g,_,w){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+Ss(c,_)+(w?" "+w:"")})}function Vu(c,g){c.info(function(){return"TIMEOUT: "+g})}xn.prototype.info=function(){};function Ss(c,g){if(!c.g)return g;if(!g)return null;try{var _=JSON.parse(g);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var w=_[c];if(!(2>w.length)){var L=w[1];if(Array.isArray(L)&&!(1>L.length)){var H=L[0];if(H!="noop"&&H!="stop"&&H!="close")for(var ie=1;ie<L.length;ie++)L[ie]=""}}}}return Qn(_)}catch{return g}}var vr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Vi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ui;function ci(){}K(ci,Ho),ci.prototype.g=function(){return new XMLHttpRequest},ci.prototype.i=function(){return{}},ui=new ci;function rn(c,g,_,w){this.j=c,this.i=g,this.l=_,this.R=w||1,this.U=new Es(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new gt}function gt(){this.i=null,this.g="",this.h=!1}var Xo={},Ta={};function $n(c,g,_){c.L=1,c.v=Ns(_n(g)),c.m=_,c.P=!0,ki(c,null)}function ki(c,g){c.F=Date.now(),bs(c),c.A=_n(c.v);var _=c.A,w=c.R;Array.isArray(w)||(w=[String(w)]),nl(_.i,"t",w),c.C=0,_=c.j.J,c.h=new gt,c.g=Wu(c.j,_?g:null,!c.m),0<c.O&&(c.M=new Ef(b(c.Y,c,c.g),c.O)),g=c.U,_=c.g,w=c.ca;var L="readystatechange";Array.isArray(L)||(L&&(Ts[0]=L.toString()),L=Ts);for(var H=0;H<L.length;H++){var ie=Ou(_,L[H],w||g.handleEvent,!1,g.h||g);if(!ie)break;g.g[ie.key]=ie}g=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),yr(),$o(c.i,c.u,c.A,c.l,c.R,c.m)}rn.prototype.ca=function(c){c=c.target;const g=this.M;g&&kn(c)==3?g.j():this.Y(c)},rn.prototype.Y=function(c){try{if(c==this.g)e:{const Nt=kn(this.g);var g=this.g.Ba();const Hi=this.g.Z();if(!(3>Nt)&&(Nt!=3||this.g&&(this.h.h||this.g.oa()||Fu(this.g)))){this.J||Nt!=4||g==7||(g==8||0>=Hi?yr(3):yr(2)),Er(this);var _=this.g.Z();this.X=_;t:if(ku(this)){var w=Fu(this.g);c="";var L=w.length,H=kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Bt(this),hi(this);var ie="";break t}this.h.i=new m.TextDecoder}for(g=0;g<L;g++)this.h.h=!0,c+=this.h.i.decode(w[g],{stream:!(H&&g==L-1)});w.length=0,this.h.g+=c,this.C=0,ie=this.h.g}else ie=this.g.oa();if(this.o=_==200,Tf(this.i,this.u,this.A,this.l,this.R,Nt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,Ct=this.g;if((ke=Ct.g?Ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ae(ke)){var Le=ke;break t}}Le=null}if(_=Le)_r(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Rs(this,_);else{this.o=!1,this.s=3,at(12),Bt(this),hi(this);break e}}if(this.P){_=!0;let qt;for(;!this.J&&this.C<ie.length;)if(qt=Lu(this,ie),qt==Ta){Nt==4&&(this.s=4,at(14),_=!1),_r(this.i,this.l,null,"[Incomplete Response]");break}else if(qt==Xo){this.s=4,at(15),_r(this.i,this.l,ie,"[Invalid Chunk]"),_=!1;break}else _r(this.i,this.l,qt,null),Rs(this,qt);if(ku(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Nt!=4||ie.length!=0||this.h.h||(this.s=1,at(16),_=!1),this.o=this.o&&_,!_)_r(this.i,this.l,ie,"[Invalid Chunked Response]"),Bt(this),hi(this);else if(0<ie.length&&!this.W){this.W=!0;var Vt=this.j;Vt.g==this&&Vt.ba&&!Vt.M&&(Vt.j.info("Great, no buffering proxy detected. Bytes received: "+ie.length),Ls(Vt),Vt.M=!0,at(11))}}else _r(this.i,this.l,ie,null),Rs(this,ie);Nt==4&&Bt(this),this.o&&!this.J&&(Nt==4?Qu(this.j,this):(this.o=!1,bs(this)))}else Rf(this.g),_==400&&0<ie.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),Bt(this),hi(this)}}}catch{}finally{}};function ku(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Lu(c,g){var _=c.C,w=g.indexOf(`
`,_);return w==-1?Ta:(_=Number(g.substring(_,w)),isNaN(_)?Xo:(w+=1,w+_>g.length?Ta:(g=g.slice(w,w+_),c.C=w+_,g)))}rn.prototype.cancel=function(){this.J=!0,Bt(this)};function bs(c){c.S=Date.now()+c.I,Uu(c,c.I)}function Uu(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=vt(b(c.ba,c),g)}function Er(c){c.B&&(m.clearTimeout(c.B),c.B=null)}rn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Vu(this.i,this.A),this.L!=2&&(yr(),at(17)),Bt(this),this.s=2,hi(this)):Uu(this,this.S-c)};function hi(c){c.j.G==0||c.J||Qu(c.j,c)}function Bt(c){Er(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,ws(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function Rs(c,g){try{var _=c.j;if(_.G!=0&&(_.g==c||Wo(_.h,c))){if(!c.K&&Wo(_.h,c)&&_.G==3){try{var w=_.Da.g.parse(g)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)Ma(_),Oa(_);else break e;ol(_),at(18)}}else _.za=L[1],0<_.za-_.T&&37500>L[2]&&_.F&&_.v==0&&!_.C&&(_.C=vt(b(_.Za,_),6e3));if(1>=Aa(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Fi(_,11)}else if((c.K||_.g==c)&&Ma(_),!ae(g))for(L=_.Da.g.parse(g),g=0;g<L.length;g++){let Le=L[g];if(_.T=Le[0],Le=Le[1],_.G==2)if(Le[0]=="c"){_.K=Le[1],_.ia=Le[2];const Vt=Le[3];Vt!=null&&(_.la=Vt,_.j.info("VER="+_.la));const Nt=Le[4];Nt!=null&&(_.Aa=Nt,_.j.info("SVER="+_.Aa));const Hi=Le[5];Hi!=null&&typeof Hi=="number"&&0<Hi&&(w=1.5*Hi,_.L=w,_.j.info("backChannelRequestTimeoutMs_="+w)),w=_;const qt=c.g;if(qt){const _i=qt.g?qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_i){var H=w.h;H.g||_i.indexOf("spdy")==-1&&_i.indexOf("quic")==-1&&_i.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(Sa(H,H.h),H.h=null))}if(w.D){const ul=qt.g?qt.g.getResponseHeader("X-HTTP-Session-Id"):null;ul&&(w.ya=ul,Qe(w.I,w.D,ul))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),w=_;var ie=c;if(w.qa=Xu(w,w.J?w.ia:null,w.W),ie.K){sn(w.h,ie);var ke=ie,Ct=w.L;Ct&&(ke.I=Ct),ke.B&&(Er(ke),bs(ke)),w.g=ie}else Yu(w);0<_.i.length&&xa(_)}else Le[0]!="stop"&&Le[0]!="close"||Fi(_,7);else _.G==3&&(Le[0]=="stop"||Le[0]=="close"?Le[0]=="stop"?Fi(_,7):sl(_):Le[0]!="noop"&&_.l&&_.l.ta(Le),_.v=0)}}yr(4)}catch{}}var ju=class{constructor(c,g){this.g=c,this.map=g}};function Li(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function wa(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Aa(c){return c.h?1:c.g?c.g.size:0}function Wo(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function Sa(c,g){c.g?c.g.add(g):c.h=g}function sn(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}Li.prototype.cancel=function(){if(this.i=Zo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Zo(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const _ of c.g.values())g=g.concat(_.D);return g}return ne(c.i)}function wf(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(p(c)){for(var g=[],_=c.length,w=0;w<_;w++)g.push(c[w]);return g}g=[],_=0;for(w in c)g[_++]=c[w];return g}function ba(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(p(c)||typeof c=="string"){var g=[];c=c.length;for(var _=0;_<c;_++)g.push(_);return g}g=[],_=0;for(const w in c)g[_++]=w;return g}}}function Jo(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(p(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var _=ba(c),w=wf(c),L=w.length,H=0;H<L;H++)g.call(void 0,w[H],_&&_[H],c)}var Is=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Af(c,g){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var w=c[_].indexOf("="),L=null;if(0<=w){var H=c[_].substring(0,w);L=c[_].substring(w+1)}else H=c[_];g(H,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Et(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Et){this.h=c.h,Cs(this,c.j),this.o=c.o,this.g=c.g,Tr(this,c.s),this.l=c.l;var g=c.i,_=new ji;_.i=g.i,g.g&&(_.g=new Map(g.g),_.h=g.h),Ui(this,_),this.m=c.m}else c&&(g=String(c).match(Is))?(this.h=!1,Cs(this,g[1]||"",!0),this.o=Mn(g[2]||""),this.g=Mn(g[3]||"",!0),Tr(this,g[4]),this.l=Mn(g[5]||"",!0),Ui(this,g[6]||"",!0),this.m=Mn(g[7]||"")):(this.h=!1,this.i=new ji(null,this.h))}Et.prototype.toString=function(){var c=[],g=this.j;g&&c.push(Ds(g,el,!0),":");var _=this.g;return(_||g=="file")&&(c.push("//"),(g=this.o)&&c.push(Ds(g,el,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(Ds(_,_.charAt(0)=="/"?Sf:tl,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",Ds(_,Ra)),c.join("")};function _n(c){return new Et(c)}function Cs(c,g,_){c.j=_?Mn(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function Tr(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function Ui(c,g,_){g instanceof ji?(c.i=g,Bu(c.i,c.h)):(_||(g=Ds(g,bf)),c.i=new ji(g,c.h))}function Qe(c,g,_){c.i.set(g,_)}function Ns(c){return Qe(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Mn(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Ds(c,g,_){return typeof c=="string"?(c=encodeURI(c).replace(g,zu),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function zu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var el=/[#\/\?@]/g,tl=/[#\?:]/g,Sf=/[#\?]/g,bf=/[#\?@]/g,Ra=/#/g;function ji(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function Pn(c){c.g||(c.g=new Map,c.h=0,c.i&&Af(c.i,function(g,_){c.add(decodeURIComponent(g.replace(/\+/g," ")),_)}))}r=ji.prototype,r.add=function(c,g){Pn(this),this.i=null,c=fi(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(g),this.h+=1,this};function zi(c,g){Pn(c),g=fi(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function Bi(c,g){return Pn(c),g=fi(c,g),c.g.has(g)}r.forEach=function(c,g){Pn(this),this.g.forEach(function(_,w){_.forEach(function(L){c.call(g,L,w,this)},this)},this)},r.na=function(){Pn(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),_=[];for(let w=0;w<g.length;w++){const L=c[w];for(let H=0;H<L.length;H++)_.push(g[w])}return _},r.V=function(c){Pn(this);let g=[];if(typeof c=="string")Bi(this,c)&&(g=g.concat(this.g.get(fi(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)g=g.concat(c[_])}return g},r.set=function(c,g){return Pn(this),this.i=null,c=fi(this,c),Bi(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},r.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function nl(c,g,_){zi(c,g),0<_.length&&(c.i=null,c.g.set(fi(c,g),ne(_)),c.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var _=0;_<g.length;_++){var w=g[_];const H=encodeURIComponent(String(w)),ie=this.V(w);for(w=0;w<ie.length;w++){var L=H;ie[w]!==""&&(L+="="+encodeURIComponent(String(ie[w]))),c.push(L)}}return this.i=c.join("&")};function fi(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function Bu(c,g){g&&!c.j&&(Pn(c),c.i=null,c.g.forEach(function(_,w){var L=w.toLowerCase();w!=L&&(zi(this,w),nl(this,L,_))},c)),c.j=g}function Os(c,g){const _=new xn;if(m.Image){const w=new Image;w.onload=B(Vn,_,"TestLoadImage: loaded",!0,g,w),w.onerror=B(Vn,_,"TestLoadImage: error",!1,g,w),w.onabort=B(Vn,_,"TestLoadImage: abort",!1,g,w),w.ontimeout=B(Vn,_,"TestLoadImage: timeout",!1,g,w),m.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=c}else g(!1)}function Xn(c,g){const _=new xn,w=new AbortController,L=setTimeout(()=>{w.abort(),Vn(_,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:w.signal}).then(H=>{clearTimeout(L),H.ok?Vn(_,"TestPingServer: ok",!0,g):Vn(_,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(L),Vn(_,"TestPingServer: error",!1,g)})}function Vn(c,g,_,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(_)}catch{}}function xs(){this.g=new As}function di(c,g,_){const w=_||"";try{Jo(c,function(L,H){let ie=L;y(L)&&(ie=Qn(L)),g.push(w+H+"="+encodeURIComponent(ie))})}catch(L){throw g.push(w+"type="+encodeURIComponent("_badmap")),L}}function wr(c){this.l=c.Ub||null,this.j=c.eb||!1}K(wr,Ho),wr.prototype.g=function(){return new qi(this.l,this.j)},wr.prototype.i=(function(c){return function(){return c}})({});function qi(c,g){ct.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}K(qi,ct),r=qi.prototype,r.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,gi(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||m).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,mi(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,gi(this)),this.g&&(this.readyState=3,gi(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;il(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function il(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?mi(this):gi(this),this.readyState==3&&il(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,mi(this))},r.Qa=function(c){this.g&&(this.response=c,mi(this))},r.ga=function(){this.g&&mi(this)};function mi(c){c.readyState=4,c.l=null,c.j=null,c.v=null,gi(c)}r.setRequestHeader=function(c,g){this.u.append(c,g)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var _=g.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=g.next();return c.join(`\r
`)};function gi(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function rl(c){let g="";return Oe(c,function(_,w){g+=w,g+=":",g+=_,g+=`\r
`}),g}function Pt(c,g,_){e:{for(w in _){var w=!1;break e}w=!0}w||(_=rl(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):Qe(c,g,_))}function Fe(c){ct.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}K(Fe,ct);var Ia=/^https?$/i,Ms=["POST","PUT"];r=Fe.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,g,_,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ui.g(),this.v=this.o?Go(this.o):Go(ui),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(H){qu(this,H);return}if(c=_||"",_=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)_.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const H of w.keys())_.set(H,w.get(H));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(_.keys()).find(H=>H.toLowerCase()=="content-type"),L=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Ms,g,void 0))||w||L||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,ie]of _)this.g.setRequestHeader(H,ie);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ps(this),this.u=!0,this.g.send(c),this.u=!1}catch(H){qu(this,H)}};function qu(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,Ca(c),pi(c)}function Ca(c){c.A||(c.A=!0,Ge(c,"complete"),Ge(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ge(this,"complete"),Ge(this,"abort"),pi(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pi(this,!0)),Fe.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Na(this):this.bb())},r.bb=function(){Na(this)};function Na(c){if(c.h&&typeof f<"u"&&(!c.v[1]||kn(c)!=4||c.Z()!=2)){if(c.u&&kn(c)==4)Xt(c.Ea,0,c);else if(Ge(c,"readystatechange"),kn(c)==4){c.h=!1;try{const ie=c.Z();e:switch(ie){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var _;if(!(_=g)){var w;if(w=ie===0){var L=String(c.D).match(Is)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),w=!Ia.test(L?L.toLowerCase():"")}_=w}if(_)Ge(c,"complete"),Ge(c,"success");else{c.m=6;try{var H=2<kn(c)?c.g.statusText:""}catch{H=""}c.l=H+" ["+c.Z()+"]",Ca(c)}}finally{pi(c)}}}}function pi(c,g){if(c.g){Ps(c);const _=c.g,w=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||Ge(c,"ready");try{_.onreadystatechange=w}catch{}}}function Ps(c){c.I&&(m.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function kn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<kn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),va(g)}};function Fu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Rf(c){const g={};c=(c.g&&2<=kn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<c.length;w++){if(ae(c[w]))continue;var _=x(c[w]);const L=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const H=g[L]||[];g[L]=H,H.push(_)}M(g,function(w){return w.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vs(c,g,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||g}function Da(c){this.Aa=0,this.i=[],this.j=new xn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Vs("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Vs("baseRetryDelayMs",5e3,c),this.cb=Vs("retryDelaySeedMs",1e4,c),this.Wa=Vs("forwardChannelMaxRetries",2,c),this.wa=Vs("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Li(c&&c.concurrentRequestLimit),this.Da=new xs,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Da.prototype,r.la=8,r.G=1,r.connect=function(c,g,_,w){at(0),this.W=c,this.H=g||{},_&&w!==void 0&&(this.H.OSID=_,this.H.OAID=w),this.F=this.X,this.I=Xu(this,null,this.W),xa(this)};function sl(c){if(Hu(c),c.G==3){var g=c.U++,_=_n(c.I);if(Qe(_,"SID",c.K),Qe(_,"RID",g),Qe(_,"TYPE","terminate"),ks(c,_),g=new rn(c,c.j,g),g.L=2,g.v=Ns(_n(_)),_=!1,m.navigator&&m.navigator.sendBeacon)try{_=m.navigator.sendBeacon(g.v.toString(),"")}catch{}!_&&m.Image&&(new Image().src=g.v,_=!0),_||(g.g=Wu(g.j,null),g.g.ea(g.v)),g.F=Date.now(),bs(g)}$u(c)}function Oa(c){c.g&&(Ls(c),c.g.cancel(),c.g=null)}function Hu(c){Oa(c),c.u&&(m.clearTimeout(c.u),c.u=null),Ma(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function xa(c){if(!wa(c.h)&&!c.s){c.s=!0;var g=c.Ga;re||A(),ee||(re(),ee=!0),fe.add(g,c),c.B=0}}function If(c,g){return Aa(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=vt(b(c.Ga,c,g),ll(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const L=new rn(this,this.j,c);let H=this.o;if(this.S&&(H?(H=S(H),O(H,this.S)):H=this.S),this.m!==null||this.O||(L.H=H,H=null),this.P)e:{for(var g=0,_=0;_<this.i.length;_++){t:{var w=this.i[_];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(g+=w,4096<g){g=_;break e}if(g===4096||_===this.i.length-1){g=_+1;break e}}g=1e3}else g=1e3;g=Gu(this,L,g),_=_n(this.I),Qe(_,"RID",c),Qe(_,"CVER",22),this.D&&Qe(_,"X-HTTP-Session-Id",this.D),ks(this,_),H&&(this.O?g="headers="+encodeURIComponent(String(rl(H)))+"&"+g:this.m&&Pt(_,this.m,H)),Sa(this.h,L),this.Ua&&Qe(_,"TYPE","init"),this.P?(Qe(_,"$req",g),Qe(_,"SID","null"),L.T=!0,$n(L,_,null)):$n(L,_,g),this.G=2}}else this.G==3&&(c?al(this,c):this.i.length==0||wa(this.h)||al(this))};function al(c,g){var _;g?_=g.l:_=c.U++;const w=_n(c.I);Qe(w,"SID",c.K),Qe(w,"RID",_),Qe(w,"AID",c.T),ks(c,w),c.m&&c.o&&Pt(w,c.m,c.o),_=new rn(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),g&&(c.i=g.D.concat(c.i)),g=Gu(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Sa(c.h,_),$n(_,w,g)}function ks(c,g){c.H&&Oe(c.H,function(_,w){Qe(g,w,_)}),c.l&&Jo({},function(_,w){Qe(g,w,_)})}function Gu(c,g,_){_=Math.min(c.i.length,_);var w=c.l?b(c.l.Na,c.l,c):null;e:{var L=c.i;let H=-1;for(;;){const ie=["count="+_];H==-1?0<_?(H=L[0].g,ie.push("ofs="+H)):H=0:ie.push("ofs="+H);let ke=!0;for(let Ct=0;Ct<_;Ct++){let Le=L[Ct].g;const Vt=L[Ct].map;if(Le-=H,0>Le)H=Math.max(0,L[Ct].g-100),ke=!1;else try{di(Vt,ie,"req"+Le+"_")}catch{w&&w(Vt)}}if(ke){w=ie.join("&");break e}}}return c=c.i.splice(0,_),g.D=c,w}function Yu(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;re||A(),ee||(re(),ee=!0),fe.add(g,c),c.v=0}}function ol(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=vt(b(c.Fa,c),ll(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,Ku(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=vt(b(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,at(10),Oa(this),Ku(this))};function Ls(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function Ku(c){c.g=new rn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=_n(c.qa);Qe(g,"RID","rpc"),Qe(g,"SID",c.K),Qe(g,"AID",c.T),Qe(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&Qe(g,"TO",c.ja),Qe(g,"TYPE","xmlhttp"),ks(c,g),c.m&&c.o&&Pt(g,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=Ns(_n(g)),_.m=null,_.P=!0,ki(_,c)}r.Za=function(){this.C!=null&&(this.C=null,Oa(this),ol(this),at(19))};function Ma(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function Qu(c,g){var _=null;if(c.g==g){Ma(c),Ls(c),c.g=null;var w=2}else if(Wo(c.h,g))_=g.D,sn(c.h,g),w=1;else return;if(c.G!=0){if(g.o)if(w==1){_=g.m?g.m.length:0,g=Date.now()-g.F;var L=c.B;w=pr(),Ge(w,new It(w,_)),xa(c)}else Yu(c);else if(L=g.s,L==3||L==0&&0<g.X||!(w==1&&If(c,g)||w==2&&ol(c)))switch(_&&0<_.length&&(g=c.h,g.i=g.i.concat(_)),L){case 1:Fi(c,5);break;case 4:Fi(c,10);break;case 3:Fi(c,6);break;default:Fi(c,2)}}}function ll(c,g){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*g}function Fi(c,g){if(c.j.info("Error code "+g),g==2){var _=b(c.fb,c),w=c.Xa;const L=!w;w=new Et(w||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Cs(w,"https"),Ns(w),L?Os(w.toString(),_):Xn(w.toString(),_)}else at(2);c.G=0,c.l&&c.l.sa(g),$u(c),Hu(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function $u(c){if(c.G=0,c.ka=[],c.l){const g=Zo(c.h);(g.length!=0||c.i.length!=0)&&(J(c.ka,g),J(c.ka,c.i),c.h.i.length=0,ne(c.i),c.i.length=0),c.l.ra()}}function Xu(c,g,_){var w=_ instanceof Et?_n(_):new Et(_);if(w.g!="")g&&(w.g=g+"."+w.g),Tr(w,w.s);else{var L=m.location;w=L.protocol,g=g?g+"."+L.hostname:L.hostname,L=+L.port;var H=new Et(null);w&&Cs(H,w),g&&(H.g=g),L&&Tr(H,L),_&&(H.l=_),w=H}return _=c.D,g=c.ya,_&&g&&Qe(w,_,g),Qe(w,"VER",c.la),ks(c,w),w}function Wu(c,g,_){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new Fe(new wr({eb:_})):new Fe(c.pa),g.Ha(c.J),g}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zu(){}r=Zu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Pa(){}Pa.prototype.g=function(c,g){return new an(c,g)};function an(c,g){ct.call(this),this.g=new Da(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!ae(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!ae(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new yi(this)}K(an,ct),an.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},an.prototype.close=function(){sl(this.g)},an.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=Qn(c),c=_);g.i.push(new ju(g.Ya++,c)),g.G==3&&xa(g)},an.prototype.N=function(){this.g.l=null,delete this.j,sl(this.g),delete this.g,an.aa.N.call(this)};function Ju(c){Pi.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const _ in g){c=_;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}K(Ju,Pi);function ec(){Ko.call(this),this.status=1}K(ec,Ko);function yi(c){this.g=c}K(yi,Zu),yi.prototype.ua=function(){Ge(this.g,"a")},yi.prototype.ta=function(c){Ge(this.g,new Ju(c))},yi.prototype.sa=function(c){Ge(this.g,new ec)},yi.prototype.ra=function(){Ge(this.g,"b")},Pa.prototype.createWebChannel=Pa.prototype.g,an.prototype.send=an.prototype.o,an.prototype.open=an.prototype.m,an.prototype.close=an.prototype.close,Q0=function(){return new Pa},K0=function(){return pr()},Y0=li,Jm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},vr.NO_ERROR=0,vr.TIMEOUT=8,vr.HTTP_ERROR=6,fh=vr,Vi.COMPLETE="complete",G0=Vi,Yo.EventType=Mi,Mi.OPEN="a",Mi.CLOSE="b",Mi.ERROR="c",Mi.MESSAGE="d",ct.prototype.listen=ct.prototype.K,tu=Yo,Fe.prototype.listenOnce=Fe.prototype.L,Fe.prototype.getLastError=Fe.prototype.Ka,Fe.prototype.getLastErrorCode=Fe.prototype.Ba,Fe.prototype.getStatus=Fe.prototype.Z,Fe.prototype.getResponseJson=Fe.prototype.Oa,Fe.prototype.getResponseText=Fe.prototype.oa,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Ha,H0=Fe}).apply(typeof nh<"u"?nh:typeof self<"u"?self:typeof window<"u"?window:{});const DE="@firebase/firestore",OE="4.9.1";/**
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
 */const ua=new qh("@firebase/firestore");function ho(){return ua.logLevel}function oe(r,...e){if(ua.logLevel<=xe.DEBUG){const n=e.map(Lg);ua.debug(`Firestore (${Vo}): ${r}`,...n)}}function dr(r,...e){if(ua.logLevel<=xe.ERROR){const n=e.map(Lg);ua.error(`Firestore (${Vo}): ${r}`,...n)}}function Ao(r,...e){if(ua.logLevel<=xe.WARN){const n=e.map(Lg);ua.warn(`Firestore (${Vo}): ${r}`,...n)}}function Lg(r){if(typeof r=="string")return r;try{/**
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
 */function _e(r,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,$0(r,s,n)}function $0(r,e,n){let s=`FIRESTORE (${Vo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw dr(s),new Error(s)}function He(r,e,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||$0(e,o,s)}function Ae(r,e){return r}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends Kn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class cr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class X0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class XC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(en.UNAUTHENTICATED)))}shutdown(){}}class WC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class ZC{constructor(e){this.t=e,this.currentUser=en.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){He(this.o===void 0,42304);let s=this.i;const o=p=>this.i!==s?(s=this.i,n(p)):Promise.resolve();let u=new cr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new cr,e.enqueueRetryable((()=>o(this.currentUser)))};const f=()=>{const p=u;e.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},m=p=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit((p=>m(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new cr)}}),0),f()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(He(typeof s.accessToken=="string",31837,{l:s}),new X0(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return He(e===null||typeof e=="string",2055,{h:e}),new en(e)}}class JC{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=en.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class eN{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new JC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(en.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class xE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tN{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Rn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){He(this.o===void 0,3512);const s=u=>{u.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,oe("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new xE(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(He(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new xE(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function nN(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Ug{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=nN(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=e.charAt(o[u]%62))}return s}}function Me(r,e){return r<e?-1:r>e?1:0}function eg(r,e){const n=Math.min(r.length,e.length);for(let s=0;s<n;s++){const o=r.charAt(s),u=e.charAt(s);if(o!==u)return Pm(o)===Pm(u)?Me(o,u):Pm(o)?1:-1}return Me(r.length,e.length)}const iN=55296,rN=57343;function Pm(r){const e=r.charCodeAt(0);return e>=iN&&e<=rN}function So(r,e,n){return r.length===e.length&&r.every(((s,o)=>n(s,e[o])))}/**
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
 */const ME="__name__";class Si{constructor(e,n,s){n===void 0?n=0:n>e.length&&_e(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&_e(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Si.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Si?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let o=0;o<s;o++){const u=Si.compareSegments(e.get(o),n.get(o));if(u!==0)return u}return Me(e.length,n.length)}static compareSegments(e,n){const s=Si.isNumericId(e),o=Si.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?Si.extractNumericId(e).compare(Si.extractNumericId(n)):eg(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return es.fromString(e.substring(4,e.length-2))}}class it extends Si{construct(e,n,s){return new it(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new se($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((o=>o.length>0)))}return new it(n)}static emptyPath(){return new it([])}}const sN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Kt extends Si{construct(e,n,s){return new Kt(e,n,s)}static isValidIdentifier(e){return sN.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Kt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ME}static keyField(){return new Kt([ME])}static fromServerFormat(e){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new se($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new se($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new se($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new se($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Kt(n)}static emptyPath(){return new Kt([])}}/**
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
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(it.fromString(e))}static fromName(e){return new de(it.fromString(e).popFirst(5))}static empty(){return new de(it.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&it.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return it.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new it(e.slice()))}}/**
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
 */function W0(r,e,n){if(!n)throw new se($.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function aN(r,e,n,s){if(e===!0&&s===!0)throw new se($.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function PE(r){if(!de.isDocumentKey(r))throw new se($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function VE(r){if(de.isDocumentKey(r))throw new se($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Z0(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Kh(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":_e(12329,{type:typeof r})}function Nn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new se($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Kh(r);throw new se($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return r}/**
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
 */function Rt(r,e){const n={typeString:r};return e&&(n.value=e),n}function Ru(r,e){if(!Z0(r))throw new se($.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){n=`JSON missing required field: '${s}'`;break}const f=r[s];if(o&&typeof f!==o){n=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&f!==u.value){n=`Expected '${s}' field to equal '${u.value}'`;break}}if(n)throw new se($.INVALID_ARGUMENT,n);return!0}/**
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
 */const kE=-62135596800,LE=1e6;class st{static now(){return st.fromMillis(Date.now())}static fromDate(e){return st.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*LE);return new st(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new se($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new se($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<kE)throw new se($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/LE}_compareTo(e){return this.seconds===e.seconds?Me(this.nanoseconds,e.nanoseconds):Me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:st._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ru(e,st._jsonSchema))return new st(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-kE;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}st._jsonSchemaVersion="firestore/timestamp/1.0",st._jsonSchema={type:Rt("string",st._jsonSchemaVersion),seconds:Rt("number"),nanoseconds:Rt("number")};/**
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
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new st(0,0))}static max(){return new we(new st(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const pu=-1;function oN(r,e){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=we.fromTimestamp(s===1e9?new st(n+1,0):new st(n,s));return new is(o,de.empty(),e)}function lN(r){return new is(r.readTime,r.key,pu)}class is{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new is(we.min(),de.empty(),pu)}static max(){return new is(we.max(),de.empty(),pu)}}function uN(r,e){let n=r.readTime.compareTo(e.readTime);return n!==0?n:(n=de.comparator(r.documentKey,e.documentKey),n!==0?n:Me(r.largestBatchId,e.largestBatchId))}/**
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
 */const cN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function ko(r){if(r.code!==$.FAILED_PRECONDITION||r.message!==cN)throw r;oe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new W(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof W?n:W.resolve(n)}catch(n){return W.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):W.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):W.reject(n)}static resolve(e){return new W(((n,s)=>{n(e)}))}static reject(e){return new W(((n,s)=>{s(e)}))}static waitFor(e){return new W(((n,s)=>{let o=0,u=0,f=!1;e.forEach((m=>{++o,m.next((()=>{++u,f&&u===o&&n()}),(p=>s(p)))})),f=!0,u===o&&n()}))}static or(e){let n=W.resolve(!1);for(const s of e)n=n.next((o=>o?W.resolve(o):s()));return n}static forEach(e,n){const s=[];return e.forEach(((o,u)=>{s.push(n.call(this,o,u))})),this.waitFor(s)}static mapArray(e,n){return new W(((s,o)=>{const u=e.length,f=new Array(u);let m=0;for(let p=0;p<u;p++){const y=p;n(e[y]).next((E=>{f[y]=E,++m,m===u&&s(f)}),(E=>o(E)))}}))}static doWhile(e,n){return new W(((s,o)=>{const u=()=>{e()===!0?n().next((()=>{u()}),o):s()};u()}))}}function fN(r){const e=r.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Lo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */const jg=-1;function $h(r){return r==null}function Rh(r){return r===0&&1/r==-1/0}function dN(r){return typeof r=="number"&&Number.isInteger(r)&&!Rh(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const J0="";function mN(r){let e="";for(let n=0;n<r.length;n++)e.length>0&&(e=UE(e)),e=gN(r.get(n),e);return UE(e)}function gN(r,e){let n=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case J0:n+="";break;default:n+=u}}return n}function UE(r){return r+J0+""}/**
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
 */function jE(r){let e=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e++;return e}function ds(r,e){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e(n,r[n])}function ew(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class ut{constructor(e,n){this.comparator=e,this.root=n||Yt.EMPTY}insert(e,n){return new ut(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Yt.BLACK,null,null))}remove(e){return new ut(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Yt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,s)=>(e(n,s),!1)))}toString(){const e=[];return this.inorderTraversal(((n,s)=>(e.push(`${n}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ih(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ih(this.root,e,this.comparator,!1)}getReverseIterator(){return new ih(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ih(this.root,e,this.comparator,!0)}}class ih{constructor(e,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=n?s(e.key,n):1,n&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Yt{constructor(e,n,s,o,u){this.key=e,this.value=n,this.color=s??Yt.RED,this.left=o??Yt.EMPTY,this.right=u??Yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,o,u){return new Yt(e??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Yt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return Yt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}Yt.EMPTY=null,Yt.RED=!0,Yt.BLACK=!1;Yt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,n,s,o,u){return this}insert(e,n,s){return new Yt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class In{constructor(e){this.fields=e,e.sort(Kt.comparator)}static empty(){return new In([])}unionWith(e){let n=new xt(Kt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new In(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return So(this.fields,e.fields,((n,s)=>n.isEqual(s)))}}/**
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
 */class tw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Qt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new tw("Invalid base64 string: "+u):u}})(e);return new Qt(n)}static fromUint8Array(e){const n=(function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u})(e);return new Qt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qt.EMPTY_BYTE_STRING=new Qt("");const pN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rs(r){if(He(!!r,39018),typeof r=="string"){let e=0;const n=pN.exec(r);if(He(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:_t(r.seconds),nanos:_t(r.nanos)}}function _t(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ss(r){return typeof r=="string"?Qt.fromBase64String(r):Qt.fromUint8Array(r)}/**
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
 */const nw="server_timestamp",iw="__type__",rw="__previous_value__",sw="__local_write_time__";function zg(r){return(r?.mapValue?.fields||{})[iw]?.stringValue===nw}function Xh(r){const e=r.mapValue.fields[rw];return zg(e)?Xh(e):e}function yu(r){const e=rs(r.mapValue.fields[sw].timestampValue);return new st(e.seconds,e.nanos)}/**
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
 */class yN{constructor(e,n,s,o,u,f,m,p,y,E){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=y,this.isUsingEmulator=E}}const Ih="(default)";class _u{constructor(e,n){this.projectId=e,this.database=n||Ih}static empty(){return new _u("","")}get isDefaultDatabase(){return this.database===Ih}isEqual(e){return e instanceof _u&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const aw="__type__",_N="__max__",rh={mapValue:{}},ow="__vector__",Ch="value";function as(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?zg(r)?4:EN(r)?9007199254740991:vN(r)?10:11:_e(28295,{value:r})}function Oi(r,e){if(r===e)return!0;const n=as(r);if(n!==as(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return yu(r).isEqual(yu(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=rs(o.timestampValue),m=rs(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,u){return ss(o.bytesValue).isEqual(ss(u.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,u){return _t(o.geoPointValue.latitude)===_t(u.geoPointValue.latitude)&&_t(o.geoPointValue.longitude)===_t(u.geoPointValue.longitude)})(r,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return _t(o.integerValue)===_t(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=_t(o.doubleValue),m=_t(u.doubleValue);return f===m?Rh(f)===Rh(m):isNaN(f)&&isNaN(m)}return!1})(r,e);case 9:return So(r.arrayValue.values||[],e.arrayValue.values||[],Oi);case 10:case 11:return(function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(jE(f)!==jE(m))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(m[p]===void 0||!Oi(f[p],m[p])))return!1;return!0})(r,e);default:return _e(52216,{left:r})}}function vu(r,e){return(r.values||[]).find((n=>Oi(n,e)))!==void 0}function bo(r,e){if(r===e)return 0;const n=as(r),s=as(e);if(n!==s)return Me(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Me(r.booleanValue,e.booleanValue);case 2:return(function(u,f){const m=_t(u.integerValue||u.doubleValue),p=_t(f.integerValue||f.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1})(r,e);case 3:return BE(r.timestampValue,e.timestampValue);case 4:return BE(yu(r),yu(e));case 5:return eg(r.stringValue,e.stringValue);case 6:return(function(u,f){const m=ss(u),p=ss(f);return m.compareTo(p)})(r.bytesValue,e.bytesValue);case 7:return(function(u,f){const m=u.split("/"),p=f.split("/");for(let y=0;y<m.length&&y<p.length;y++){const E=Me(m[y],p[y]);if(E!==0)return E}return Me(m.length,p.length)})(r.referenceValue,e.referenceValue);case 8:return(function(u,f){const m=Me(_t(u.latitude),_t(f.latitude));return m!==0?m:Me(_t(u.longitude),_t(f.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return qE(r.arrayValue,e.arrayValue);case 10:return(function(u,f){const m=u.fields||{},p=f.fields||{},y=m[Ch]?.arrayValue,E=p[Ch]?.arrayValue,R=Me(y?.values?.length||0,E?.values?.length||0);return R!==0?R:qE(y,E)})(r.mapValue,e.mapValue);case 11:return(function(u,f){if(u===rh.mapValue&&f===rh.mapValue)return 0;if(u===rh.mapValue)return 1;if(f===rh.mapValue)return-1;const m=u.fields||{},p=Object.keys(m),y=f.fields||{},E=Object.keys(y);p.sort(),E.sort();for(let R=0;R<p.length&&R<E.length;++R){const b=eg(p[R],E[R]);if(b!==0)return b;const B=bo(m[p[R]],y[E[R]]);if(B!==0)return B}return Me(p.length,E.length)})(r.mapValue,e.mapValue);default:throw _e(23264,{he:n})}}function BE(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Me(r,e);const n=rs(r),s=rs(e),o=Me(n.seconds,s.seconds);return o!==0?o:Me(n.nanos,s.nanos)}function qE(r,e){const n=r.values||[],s=e.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=bo(n[o],s[o]);if(u)return u}return Me(n.length,s.length)}function Ro(r){return tg(r)}function tg(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(n){const s=rs(n);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(n){return ss(n).toBase64()})(r.bytesValue):"referenceValue"in r?(function(n){return de.fromName(n).toString()})(r.referenceValue):"geoPointValue"in r?(function(n){return`geo(${n.latitude},${n.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=tg(u);return s+"]"})(r.arrayValue):"mapValue"in r?(function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${tg(n.fields[f])}`;return o+"}"})(r.mapValue):_e(61005,{value:r})}function dh(r){switch(as(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Xh(r);return e?16+dh(e):16;case 5:return 2*r.stringValue.length;case 6:return ss(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+dh(u)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return ds(s.fields,((u,f)=>{o+=u.length+dh(f)})),o})(r.mapValue);default:throw _e(13486,{value:r})}}function FE(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function ng(r){return!!r&&"integerValue"in r}function Bg(r){return!!r&&"arrayValue"in r}function HE(r){return!!r&&"nullValue"in r}function GE(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function mh(r){return!!r&&"mapValue"in r}function vN(r){return(r?.mapValue?.fields||{})[aw]?.stringValue===ow}function uu(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return ds(r.mapValue.fields,((n,s)=>e.mapValue.fields[n]=uu(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=uu(r.arrayValue.values[n]);return e}return{...r}}function EN(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===_N}/**
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
 */class dn{constructor(e){this.value=e}static empty(){return new dn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!mh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=uu(n)}setAll(e){let n=Kt.emptyPath(),s={},o=[];e.forEach(((f,m)=>{if(!n.isImmediateParentOf(m)){const p=this.getFieldsMap(n);this.applyChanges(p,s,o),s={},o=[],n=m.popLast()}f?s[m.lastSegment()]=uu(f):o.push(m.lastSegment())}));const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(e){const n=this.field(e.popLast());mh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Oi(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=n.mapValue.fields[e.get(s)];mh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,s){ds(n,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new dn(uu(this.value))}}function lw(r){const e=[];return ds(r.fields,((n,s)=>{const o=new Kt([n]);if(mh(s)){const u=lw(s.mapValue).fields;if(u.length===0)e.push(o);else for(const f of u)e.push(o.child(f))}else e.push(o)})),new In(e)}/**
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
 */class tn{constructor(e,n,s,o,u,f,m){this.key=e,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(e){return new tn(e,0,we.min(),we.min(),we.min(),dn.empty(),0)}static newFoundDocument(e,n,s,o){return new tn(e,1,n,we.min(),s,o,0)}static newNoDocument(e,n){return new tn(e,2,n,we.min(),we.min(),dn.empty(),0)}static newUnknownDocument(e,n){return new tn(e,3,n,we.min(),we.min(),dn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Nh{constructor(e,n){this.position=e,this.inclusive=n}}function YE(r,e,n){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],f=r.position[o];if(u.field.isKeyField()?s=de.comparator(de.fromName(f.referenceValue),n.key):s=bo(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function KE(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!Oi(r.position[n],e.position[n]))return!1;return!0}/**
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
 */class Eu{constructor(e,n="asc"){this.field=e,this.dir=n}}function TN(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class uw{}class bt extends uw{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new AN(e,n,s):n==="array-contains"?new RN(e,s):n==="in"?new IN(e,s):n==="not-in"?new CN(e,s):n==="array-contains-any"?new NN(e,s):new bt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new SN(e,s):new bN(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(bo(n,this.value)):n!==null&&as(this.value)===as(n)&&this.matchesComparison(bo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class si extends uw{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new si(e,n)}matches(e){return cw(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function cw(r){return r.op==="and"}function hw(r){return wN(r)&&cw(r)}function wN(r){for(const e of r.filters)if(e instanceof si)return!1;return!0}function ig(r){if(r instanceof bt)return r.field.canonicalString()+r.op.toString()+Ro(r.value);if(hw(r))return r.filters.map((e=>ig(e))).join(",");{const e=r.filters.map((n=>ig(n))).join(",");return`${r.op}(${e})`}}function fw(r,e){return r instanceof bt?(function(s,o){return o instanceof bt&&s.op===o.op&&s.field.isEqual(o.field)&&Oi(s.value,o.value)})(r,e):r instanceof si?(function(s,o){return o instanceof si&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,f,m)=>u&&fw(f,o.filters[m])),!0):!1})(r,e):void _e(19439)}function dw(r){return r instanceof bt?(function(n){return`${n.field.canonicalString()} ${n.op} ${Ro(n.value)}`})(r):r instanceof si?(function(n){return n.op.toString()+" {"+n.getFilters().map(dw).join(" ,")+"}"})(r):"Filter"}class AN extends bt{constructor(e,n,s){super(e,n,s),this.key=de.fromName(s.referenceValue)}matches(e){const n=de.comparator(e.key,this.key);return this.matchesComparison(n)}}class SN extends bt{constructor(e,n){super(e,"in",n),this.keys=mw("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class bN extends bt{constructor(e,n){super(e,"not-in",n),this.keys=mw("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function mw(r,e){return(e.arrayValue?.values||[]).map((n=>de.fromName(n.referenceValue)))}class RN extends bt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Bg(n)&&vu(n.arrayValue,this.value)}}class IN extends bt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&vu(this.value.arrayValue,n)}}class CN extends bt{constructor(e,n){super(e,"not-in",n)}matches(e){if(vu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!vu(this.value.arrayValue,n)}}class NN extends bt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Bg(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>vu(this.value.arrayValue,s)))}}/**
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
 */class DN{constructor(e,n=null,s=[],o=[],u=null,f=null,m=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.Te=null}}function QE(r,e=null,n=[],s=[],o=null,u=null,f=null){return new DN(r,e,n,s,o,u,f)}function qg(r){const e=Ae(r);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((s=>ig(s))).join(","),n+="|ob:",n+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),$h(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>Ro(s))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>Ro(s))).join(",")),e.Te=n}return e.Te}function Fg(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!TN(r.orderBy[n],e.orderBy[n]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!fw(r.filters[n],e.filters[n]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!KE(r.startAt,e.startAt)&&KE(r.endAt,e.endAt)}function rg(r){return de.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Uo{constructor(e,n=null,s=[],o=[],u=null,f="F",m=null,p=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function ON(r,e,n,s,o,u,f,m){return new Uo(r,e,n,s,o,u,f,m)}function Wh(r){return new Uo(r)}function $E(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function gw(r){return r.collectionGroup!==null}function cu(r){const e=Ae(r);if(e.Ie===null){e.Ie=[];const n=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),n.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new xt(Kt.comparator);return f.filters.forEach((p=>{p.getFlattenedFilters().forEach((y=>{y.isInequality()&&(m=m.add(y.field))}))})),m})(e).forEach((u=>{n.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new Eu(u,s))})),n.has(Kt.keyField().canonicalString())||e.Ie.push(new Eu(Kt.keyField(),s))}return e.Ie}function Ri(r){const e=Ae(r);return e.Ee||(e.Ee=xN(e,cu(r))),e.Ee}function xN(r,e){if(r.limitType==="F")return QE(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Eu(o.field,u)}));const n=r.endAt?new Nh(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Nh(r.startAt.position,r.startAt.inclusive):null;return QE(r.path,r.collectionGroup,e,r.filters,r.limit,n,s)}}function sg(r,e){const n=r.filters.concat([e]);return new Uo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),n,r.limit,r.limitType,r.startAt,r.endAt)}function ag(r,e,n){return new Uo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,n,r.startAt,r.endAt)}function Zh(r,e){return Fg(Ri(r),Ri(e))&&r.limitType===e.limitType}function pw(r){return`${qg(Ri(r))}|lt:${r.limitType}`}function fo(r){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((o=>dw(o))).join(", ")}]`),$h(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((o=>(function(f){return`${f.field.canonicalString()} (${f.dir})`})(o))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((o=>Ro(o))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((o=>Ro(o))).join(",")),`Target(${s})`})(Ri(r))}; limitType=${r.limitType})`}function Jh(r,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):de.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(r,e)&&(function(s,o){for(const u of cu(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(f,m,p){const y=YE(f,m,p);return f.inclusive?y<=0:y<0})(s.startAt,cu(s),o)||s.endAt&&!(function(f,m,p){const y=YE(f,m,p);return f.inclusive?y>=0:y>0})(s.endAt,cu(s),o))})(r,e)}function MN(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function yw(r){return(e,n)=>{let s=!1;for(const o of cu(r)){const u=PN(o,e,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function PN(r,e,n){const s=r.field.isKeyField()?de.comparator(e.key,n.key):(function(u,f,m){const p=f.data.field(u),y=m.data.field(u);return p!==null&&y!==null?bo(p,y):_e(42886)})(r.field,e,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return _e(19790,{direction:r.dir})}}/**
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
 */class ma{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ds(this.inner,((n,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return ew(this.inner)}size(){return this.innerSize}}/**
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
 */const VN=new ut(de.comparator);function mr(){return VN}const _w=new ut(de.comparator);function nu(...r){let e=_w;for(const n of r)e=e.insert(n.key,n);return e}function vw(r){let e=_w;return r.forEach(((n,s)=>e=e.insert(n,s.overlayedDocument))),e}function ta(){return hu()}function Ew(){return hu()}function hu(){return new ma((r=>r.toString()),((r,e)=>r.isEqual(e)))}const kN=new ut(de.comparator),LN=new xt(de.comparator);function Pe(...r){let e=LN;for(const n of r)e=e.add(n);return e}const UN=new xt(Me);function jN(){return UN}/**
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
 */function Hg(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rh(e)?"-0":e}}function Tw(r){return{integerValue:""+r}}function zN(r,e){return dN(e)?Tw(e):Hg(r,e)}/**
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
 */class ef{constructor(){this._=void 0}}function BN(r,e,n){return r instanceof Tu?(function(o,u){const f={fields:{[iw]:{stringValue:nw},[sw]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&zg(u)&&(u=Xh(u)),u&&(f.fields[rw]=u),{mapValue:f}})(n,e):r instanceof Io?Aw(r,e):r instanceof Co?Sw(r,e):(function(o,u){const f=ww(o,u),m=XE(f)+XE(o.Ae);return ng(f)&&ng(o.Ae)?Tw(m):Hg(o.serializer,m)})(r,e)}function qN(r,e,n){return r instanceof Io?Aw(r,e):r instanceof Co?Sw(r,e):n}function ww(r,e){return r instanceof Dh?(function(s){return ng(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Tu extends ef{}class Io extends ef{constructor(e){super(),this.elements=e}}function Aw(r,e){const n=bw(e);for(const s of r.elements)n.some((o=>Oi(o,s)))||n.push(s);return{arrayValue:{values:n}}}class Co extends ef{constructor(e){super(),this.elements=e}}function Sw(r,e){let n=bw(e);for(const s of r.elements)n=n.filter((o=>!Oi(o,s)));return{arrayValue:{values:n}}}class Dh extends ef{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function XE(r){return _t(r.integerValue||r.doubleValue)}function bw(r){return Bg(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class Gg{constructor(e,n){this.field=e,this.transform=n}}function FN(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof Io&&o instanceof Io||s instanceof Co&&o instanceof Co?So(s.elements,o.elements,Oi):s instanceof Dh&&o instanceof Dh?Oi(s.Ae,o.Ae):s instanceof Tu&&o instanceof Tu})(r.transform,e.transform)}class HN{constructor(e,n){this.version=e,this.transformResults=n}}class ii{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ii}static exists(e){return new ii(void 0,e)}static updateTime(e){return new ii(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function gh(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class tf{}function Rw(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Cw(r.key,ii.none()):new Iu(r.key,r.data,ii.none());{const n=r.data,s=dn.empty();let o=new xt(Kt.comparator);for(let u of e.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new ms(r.key,s,new In(o.toArray()),ii.none())}}function GN(r,e,n){r instanceof Iu?(function(o,u,f){const m=o.value.clone(),p=ZE(o.fieldTransforms,u,f.transformResults);m.setAll(p),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()})(r,e,n):r instanceof ms?(function(o,u,f){if(!gh(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=ZE(o.fieldTransforms,u,f.transformResults),p=u.data;p.setAll(Iw(o)),p.setAll(m),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()})(r,e,n):(function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()})(0,e,n)}function fu(r,e,n,s){return r instanceof Iu?(function(u,f,m,p){if(!gh(u.precondition,f))return m;const y=u.value.clone(),E=JE(u.fieldTransforms,p,f);return y.setAll(E),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null})(r,e,n,s):r instanceof ms?(function(u,f,m,p){if(!gh(u.precondition,f))return m;const y=JE(u.fieldTransforms,p,f),E=f.data;return E.setAll(Iw(u)),E.setAll(y),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((R=>R.field)))})(r,e,n,s):(function(u,f,m){return gh(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m})(r,e,n)}function YN(r,e){let n=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=ww(s.transform,o||null);u!=null&&(n===null&&(n=dn.empty()),n.set(s.field,u))}return n||null}function WE(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&So(s,o,((u,f)=>FN(u,f)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Iu extends tf{constructor(e,n,s,o=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ms extends tf{constructor(e,n,s,o,u=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Iw(r){const e=new Map;return r.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=r.data.field(n);e.set(n,s)}})),e}function ZE(r,e,n){const s=new Map;He(r.length===n.length,32656,{Re:n.length,Ve:r.length});for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,m=e.data.field(u.field);s.set(u.field,qN(f,m,n[o]))}return s}function JE(r,e,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,BN(u,f,e))}return s}class Cw extends tf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class KN extends tf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class QN{constructor(e,n,s,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&GN(u,e,s[o])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=fu(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=fu(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Ew();return this.mutations.forEach((o=>{const u=e.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=n.has(o.key)?null:m;const p=Rw(f,m);p!==null&&s.set(o.key,p),f.isValidDocument()||f.convertToNoDocument(we.min())})),s}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Pe())}isEqual(e){return this.batchId===e.batchId&&So(this.mutations,e.mutations,((n,s)=>WE(n,s)))&&So(this.baseMutations,e.baseMutations,((n,s)=>WE(n,s)))}}class Yg{constructor(e,n,s,o){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(e,n,s){He(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return kN})();const u=e.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,s[f].version);return new Yg(e,n,s,o)}}/**
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
 */class $N{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class XN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var At,je;function WN(r){switch(r){case $.OK:return _e(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return _e(15467,{code:r})}}function Nw(r){if(r===void 0)return dr("GRPC error has no .code"),$.UNKNOWN;switch(r){case At.OK:return $.OK;case At.CANCELLED:return $.CANCELLED;case At.UNKNOWN:return $.UNKNOWN;case At.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case At.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case At.INTERNAL:return $.INTERNAL;case At.UNAVAILABLE:return $.UNAVAILABLE;case At.UNAUTHENTICATED:return $.UNAUTHENTICATED;case At.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case At.NOT_FOUND:return $.NOT_FOUND;case At.ALREADY_EXISTS:return $.ALREADY_EXISTS;case At.PERMISSION_DENIED:return $.PERMISSION_DENIED;case At.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case At.ABORTED:return $.ABORTED;case At.OUT_OF_RANGE:return $.OUT_OF_RANGE;case At.UNIMPLEMENTED:return $.UNIMPLEMENTED;case At.DATA_LOSS:return $.DATA_LOSS;default:return _e(39323,{code:r})}}(je=At||(At={}))[je.OK=0]="OK",je[je.CANCELLED=1]="CANCELLED",je[je.UNKNOWN=2]="UNKNOWN",je[je.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",je[je.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",je[je.NOT_FOUND=5]="NOT_FOUND",je[je.ALREADY_EXISTS=6]="ALREADY_EXISTS",je[je.PERMISSION_DENIED=7]="PERMISSION_DENIED",je[je.UNAUTHENTICATED=16]="UNAUTHENTICATED",je[je.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",je[je.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",je[je.ABORTED=10]="ABORTED",je[je.OUT_OF_RANGE=11]="OUT_OF_RANGE",je[je.UNIMPLEMENTED=12]="UNIMPLEMENTED",je[je.INTERNAL=13]="INTERNAL",je[je.UNAVAILABLE=14]="UNAVAILABLE",je[je.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function ZN(){return new TextEncoder}/**
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
 */const JN=new es([4294967295,4294967295],0);function eT(r){const e=ZN().encode(r),n=new F0;return n.update(e),new Uint8Array(n.digest())}function tT(r){const e=new DataView(r.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new es([n,s],0),new es([o,u],0)]}class Kg{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new iu(`Invalid padding: ${n}`);if(s<0)throw new iu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new iu(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new iu(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=es.fromNumber(this.ge)}ye(e,n,s){let o=e.add(n.multiply(es.fromNumber(s)));return o.compare(JN)===1&&(o=new es([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=eT(e),[s,o]=tT(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);if(!this.we(f))return!1}return!0}static create(e,n,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),f=new Kg(u,o,n);return s.forEach((m=>f.insert(m))),f}insert(e){if(this.ge===0)return;const n=eT(e),[s,o]=tT(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);this.Se(f)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class iu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class nf{constructor(e,n,s,o,u){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const o=new Map;return o.set(e,Cu.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new nf(we.min(),o,new ut(Me),mr(),Pe())}}class Cu{constructor(e,n,s,o,u){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Cu(s,n,Pe(),Pe(),Pe())}}/**
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
 */class ph{constructor(e,n,s,o){this.be=e,this.removedTargetIds=n,this.key=s,this.De=o}}class Dw{constructor(e,n){this.targetId=e,this.Ce=n}}class Ow{constructor(e,n,s=Qt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=o}}class nT{constructor(){this.ve=0,this.Fe=iT(),this.Me=Qt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Pe(),n=Pe(),s=Pe();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:_e(38017,{changeType:u})}})),new Cu(this.Me,this.xe,e,n,s)}qe(){this.Oe=!1,this.Fe=iT()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,He(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class e2{constructor(e){this.Ge=e,this.ze=new Map,this.je=mr(),this.Je=sh(),this.He=sh(),this.Ye=new ut(Me)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((s,o)=>{this.rt(o)&&n(o)}))}st(e){const n=e.targetId,s=e.Ce.count,o=this.ot(n);if(o){const u=o.target;if(rg(u))if(s===0){const f=new de(u.path);this.et(n,f,tn.newNoDocument(f,we.min()))}else He(s===1,20013,{expectedCount:s});else{const f=this._t(n);if(f!==s){const m=this.ut(e),p=m?this.ct(m,e,f):1;if(p!==0){this.it(n);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,y)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,m;try{f=ss(s).toUint8Array()}catch(p){if(p instanceof tw)return Ao("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new Kg(f,o,u)}catch(p){return Ao(p instanceof iu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.ge===0?null:m}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let o=0;return s.forEach((u=>{const f=this.Ge.ht(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(n,u,null),o++)})),o}Tt(e){const n=new Map;this.ze.forEach(((u,f)=>{const m=this.ot(f);if(m){if(u.current&&rg(m.target)){const p=new de(m.target.path);this.It(p).has(f)||this.Et(f,p)||this.et(f,p,tn.newNoDocument(p,e))}u.Be&&(n.set(f,u.ke()),u.qe())}}));let s=Pe();this.He.forEach(((u,f)=>{let m=!0;f.forEachWhile((p=>{const y=this.ot(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,f)=>f.setReadTime(e)));const o=new nf(e,n,this.Ye,this.je,s);return this.je=mr(),this.Je=sh(),this.He=sh(),this.Ye=new ut(Me),o}Xe(e,n){if(!this.rt(e))return;const s=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,n)?o.Qe(n,1):o.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new nT,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new xt(Me),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new xt(Me),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||oe("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new nT),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function sh(){return new ut(de.comparator)}function iT(){return new ut(de.comparator)}const t2={asc:"ASCENDING",desc:"DESCENDING"},n2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},i2={and:"AND",or:"OR"};class r2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function og(r,e){return r.useProto3Json||$h(e)?e:{value:e}}function Oh(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xw(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function s2(r,e){return Oh(r,e.toTimestamp())}function Ii(r){return He(!!r,49232),we.fromTimestamp((function(n){const s=rs(n);return new st(s.seconds,s.nanos)})(r))}function Qg(r,e){return lg(r,e).canonicalString()}function lg(r,e){const n=(function(o){return new it(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?n:n.child(e)}function Mw(r){const e=it.fromString(r);return He(Uw(e),10190,{key:e.toString()}),e}function ug(r,e){return Qg(r.databaseId,e.path)}function Vm(r,e){const n=Mw(e);if(n.get(1)!==r.databaseId.projectId)throw new se($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new se($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new de(Vw(n))}function Pw(r,e){return Qg(r.databaseId,e)}function a2(r){const e=Mw(r);return e.length===4?it.emptyPath():Vw(e)}function cg(r){return new it(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Vw(r){return He(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function rT(r,e,n){return{name:ug(r,e),fields:n.value.mapValue.fields}}function o2(r,e){let n;if("targetChange"in e){e.targetChange;const s=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:_e(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(y,E){return y.useProto3Json?(He(E===void 0||typeof E=="string",58123),Qt.fromBase64String(E||"")):(He(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Qt.fromUint8Array(E||new Uint8Array))})(r,e.targetChange.resumeToken),f=e.targetChange.cause,m=f&&(function(y){const E=y.code===void 0?$.UNKNOWN:Nw(y.code);return new se(E,y.message||"")})(f);n=new Ow(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Vm(r,s.document.name),u=Ii(s.document.updateTime),f=s.document.createTime?Ii(s.document.createTime):we.min(),m=new dn({mapValue:{fields:s.document.fields}}),p=tn.newFoundDocument(o,u,f,m),y=s.targetIds||[],E=s.removedTargetIds||[];n=new ph(y,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Vm(r,s.document),u=s.readTime?Ii(s.readTime):we.min(),f=tn.newNoDocument(o,u),m=s.removedTargetIds||[];n=new ph([],m,f.key,f)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Vm(r,s.document),u=s.removedTargetIds||[];n=new ph([],u,o,null)}else{if(!("filter"in e))return _e(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new XN(o,u),m=s.targetId;n=new Dw(m,f)}}return n}function l2(r,e){let n;if(e instanceof Iu)n={update:rT(r,e.key,e.value)};else if(e instanceof Cw)n={delete:ug(r,e.key)};else if(e instanceof ms)n={update:rT(r,e.key,e.data),updateMask:y2(e.fieldMask)};else{if(!(e instanceof KN))return _e(16599,{Vt:e.type});n={verify:ug(r,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((s=>(function(u,f){const m=f.transform;if(m instanceof Tu)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Io)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Co)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Dh)return{fieldPath:f.field.canonicalString(),increment:m.Ae};throw _e(20930,{transform:f.transform})})(0,s)))),e.precondition.isNone||(n.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:s2(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:_e(27497)})(r,e.precondition)),n}function u2(r,e){return r&&r.length>0?(He(e!==void 0,14353),r.map((n=>(function(o,u){let f=o.updateTime?Ii(o.updateTime):Ii(u);return f.isEqual(we.min())&&(f=Ii(u)),new HN(f,o.transformResults||[])})(n,e)))):[]}function c2(r,e){return{documents:[Pw(r,e.path)]}}function h2(r,e){const n={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=Pw(r,o);const u=(function(y){if(y.length!==0)return Lw(si.create(y,"and"))})(e.filters);u&&(n.structuredQuery.where=u);const f=(function(y){if(y.length!==0)return y.map((E=>(function(b){return{field:mo(b.field),direction:m2(b.dir)}})(E)))})(e.orderBy);f&&(n.structuredQuery.orderBy=f);const m=og(r,e.limit);return m!==null&&(n.structuredQuery.limit=m),e.startAt&&(n.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ft:n,parent:o}}function f2(r){let e=a2(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){He(s===1,65062);const E=n.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];n.where&&(u=(function(R){const b=kw(R);return b instanceof si&&hw(b)?b.getFilters():[b]})(n.where));let f=[];n.orderBy&&(f=(function(R){return R.map((b=>(function(K){return new Eu(go(K.field),(function(J){switch(J){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(K.direction))})(b)))})(n.orderBy));let m=null;n.limit&&(m=(function(R){let b;return b=typeof R=="object"?R.value:R,$h(b)?null:b})(n.limit));let p=null;n.startAt&&(p=(function(R){const b=!!R.before,B=R.values||[];return new Nh(B,b)})(n.startAt));let y=null;return n.endAt&&(y=(function(R){const b=!R.before,B=R.values||[];return new Nh(B,b)})(n.endAt)),ON(e,o,f,u,m,"F",p,y)}function d2(r,e){const n=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:o})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function kw(r){return r.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=go(n.unaryFilter.field);return bt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=go(n.unaryFilter.field);return bt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=go(n.unaryFilter.field);return bt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=go(n.unaryFilter.field);return bt.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(r):r.fieldFilter!==void 0?(function(n){return bt.create(go(n.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(n){return si.create(n.compositeFilter.filters.map((s=>kw(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(n.compositeFilter.op))})(r):_e(30097,{filter:r})}function m2(r){return t2[r]}function g2(r){return n2[r]}function p2(r){return i2[r]}function mo(r){return{fieldPath:r.canonicalString()}}function go(r){return Kt.fromServerFormat(r.fieldPath)}function Lw(r){return r instanceof bt?(function(n){if(n.op==="=="){if(GE(n.value))return{unaryFilter:{field:mo(n.field),op:"IS_NAN"}};if(HE(n.value))return{unaryFilter:{field:mo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(GE(n.value))return{unaryFilter:{field:mo(n.field),op:"IS_NOT_NAN"}};if(HE(n.value))return{unaryFilter:{field:mo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mo(n.field),op:g2(n.op),value:n.value}}})(r):r instanceof si?(function(n){const s=n.getFilters().map((o=>Lw(o)));return s.length===1?s[0]:{compositeFilter:{op:p2(n.op),filters:s}}})(r):_e(54877,{filter:r})}function y2(r){const e=[];return r.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function Uw(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Xr{constructor(e,n,s,o,u=we.min(),f=we.min(),m=Qt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(e){return new Xr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Xr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class _2{constructor(e){this.yt=e}}function v2(r){const e=f2({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ag(e,e.limit,"L"):e}/**
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
 */class E2{constructor(){this.Cn=new T2}addToCollectionParentIndex(e,n){return this.Cn.add(n),W.resolve()}getCollectionParents(e,n){return W.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return W.resolve()}deleteFieldIndex(e,n){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,n){return W.resolve()}getDocumentsMatchingTarget(e,n){return W.resolve(null)}getIndexType(e,n){return W.resolve(0)}getFieldIndexes(e,n){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,n){return W.resolve(is.min())}getMinOffsetFromCollectionGroup(e,n){return W.resolve(is.min())}updateCollectionGroup(e,n,s){return W.resolve()}updateIndexEntries(e,n){return W.resolve()}}class T2{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n]||new xt(it.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(e){return(this.index[e]||new xt(it.comparator)).toArray()}}/**
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
 */const sT={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},jw=41943040;class fn{static withCacheSize(e){return new fn(e,fn.DEFAULT_COLLECTION_PERCENTILE,fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */fn.DEFAULT_COLLECTION_PERCENTILE=10,fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,fn.DEFAULT=new fn(jw,fn.DEFAULT_COLLECTION_PERCENTILE,fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),fn.DISABLED=new fn(-1,0,0);/**
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
 */const aT="LruGarbageCollector",w2=1048576;function oT([r,e],[n,s]){const o=Me(r,n);return o===0?Me(e,s):o}class A2{constructor(e){this.Ir=e,this.buffer=new xt(oT),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();oT(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class S2{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){oe(aT,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Lo(n)?oe(aT,"Ignoring IndexedDB error during garbage collection: ",n):await ko(n)}await this.Vr(3e5)}))}}class b2{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(e,n){if(n===0)return W.resolve(Qh.ce);const s=new A2(n);return this.mr.forEachTarget(e,(o=>s.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>s.Ar(o))))).next((()=>s.maxValue))}removeTargets(e,n,s){return this.mr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(oe("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(sT)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(oe("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sT):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let s,o,u,f,m,p,y;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((R=>(R>this.params.maximumSequenceNumbersToCollect?(oe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${R}`),o=this.params.maximumSequenceNumbersToCollect):o=R,f=Date.now(),this.nthSequenceNumber(e,o)))).next((R=>(s=R,m=Date.now(),this.removeTargets(e,s,n)))).next((R=>(u=R,p=Date.now(),this.removeOrphanedDocuments(e,s)))).next((R=>(y=Date.now(),ho()<=xe.DEBUG&&oe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-E}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(p-m)+`ms
	Removed ${R} documents in `+(y-p)+`ms
Total Duration: ${y-E}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:R}))))}}function R2(r,e){return new b2(r,e)}/**
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
 */class I2{constructor(){this.changes=new ma((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?W.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class C2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class N2{constructor(e,n,s,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,n)))).next((o=>(s!==null&&fu(s.mutation,o,In.empty(),st.now()),o)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.getLocalViewOfDocuments(e,s,Pe()).next((()=>s))))}getLocalViewOfDocuments(e,n,s=Pe()){const o=ta();return this.populateOverlays(e,o,n).next((()=>this.computeViews(e,n,o,s).next((u=>{let f=nu();return u.forEach(((m,p)=>{f=f.insert(m,p.overlayedDocument)})),f}))))}getOverlayedDocuments(e,n){const s=ta();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,Pe())))}populateOverlays(e,n,s){const o=[];return s.forEach((u=>{n.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((f,m)=>{n.set(f,m)}))}))}computeViews(e,n,s,o){let u=mr();const f=hu(),m=(function(){return hu()})();return n.forEach(((p,y)=>{const E=s.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof ms)?u=u.insert(y.key,y):E!==void 0?(f.set(y.key,E.mutation.getFieldMask()),fu(E.mutation,y,E.mutation.getFieldMask(),st.now())):f.set(y.key,In.empty())})),this.recalculateAndSaveOverlays(e,u).next((p=>(p.forEach(((y,E)=>f.set(y,E))),n.forEach(((y,E)=>m.set(y,new C2(E,f.get(y)??null)))),m)))}recalculateAndSaveOverlays(e,n){const s=hu();let o=new ut(((f,m)=>f-m)),u=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((f=>{for(const m of f)m.keys().forEach((p=>{const y=n.get(p);if(y===null)return;let E=s.get(p)||In.empty();E=m.applyToLocalView(y,E),s.set(p,E);const R=(o.get(m.batchId)||Pe()).add(p);o=o.insert(m.batchId,R)}))})).next((()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),y=p.key,E=p.value,R=Ew();E.forEach((b=>{if(!u.has(b)){const B=Rw(n.get(b),s.get(b));B!==null&&R.set(b,B),u=u.add(b)}})),f.push(this.documentOverlayCache.saveOverlays(e,y,R))}return W.waitFor(f)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,n,s,o){return(function(f){return de.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):gw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,o):this.getDocumentsMatchingCollectionQuery(e,n,s,o)}getNextDocuments(e,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,o).next((u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,o-u.size):W.resolve(ta());let m=pu,p=u;return f.next((y=>W.forEach(y,((E,R)=>(m<R.largestBatchId&&(m=R.largestBatchId),u.get(E)?W.resolve():this.remoteDocumentCache.getEntry(e,E).next((b=>{p=p.insert(E,b)}))))).next((()=>this.populateOverlays(e,y,u))).next((()=>this.computeViews(e,p,y,Pe()))).next((E=>({batchId:m,changes:vw(E)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new de(n)).next((s=>{let o=nu();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,n,s,o){const u=n.collectionGroup;let f=nu();return this.indexManager.getCollectionParents(e,u).next((m=>W.forEach(m,(p=>{const y=(function(R,b){return new Uo(b,null,R.explicitOrderBy.slice(),R.filters.slice(),R.limit,R.limitType,R.startAt,R.endAt)})(n,p.child(u));return this.getDocumentsMatchingCollectionQuery(e,y,s,o).next((E=>{E.forEach(((R,b)=>{f=f.insert(R,b)}))}))})).next((()=>f))))}getDocumentsMatchingCollectionQuery(e,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next((f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,u,o)))).next((f=>{u.forEach(((p,y)=>{const E=y.getKey();f.get(E)===null&&(f=f.insert(E,tn.newInvalidDocument(E)))}));let m=nu();return f.forEach(((p,y)=>{const E=u.get(p);E!==void 0&&fu(E.mutation,y,In.empty(),st.now()),Jh(n,y)&&(m=m.insert(p,y))})),m}))}}/**
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
 */class D2{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return W.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(o){return{id:o.id,version:o.version,createTime:Ii(o.createTime)}})(n)),W.resolve()}getNamedQuery(e,n){return W.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(o){return{name:o.name,query:v2(o.bundledQuery),readTime:Ii(o.readTime)}})(n)),W.resolve()}}/**
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
 */class O2{constructor(){this.overlays=new ut(de.comparator),this.qr=new Map}getOverlay(e,n){return W.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ta();return W.forEach(n,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,n,s){return s.forEach(((o,u)=>{this.St(e,n,u)})),W.resolve()}removeOverlaysForBatchId(e,n,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(s)),W.resolve()}getOverlaysForCollection(e,n,s){const o=ta(),u=n.length+1,f=new de(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const p=m.getNext().value,y=p.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===u&&p.largestBatchId>s&&o.set(p.getKey(),p)}return W.resolve(o)}getOverlaysForCollectionGroup(e,n,s,o){let u=new ut(((y,E)=>y-E));const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let E=u.get(y.largestBatchId);E===null&&(E=ta(),u=u.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const m=ta(),p=u.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((y,E)=>m.set(y,E))),!(m.size()>=o)););return W.resolve(m)}St(e,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new $N(n,s));let u=this.qr.get(n);u===void 0&&(u=Pe(),this.qr.set(n,u)),this.qr.set(n,u.add(s.key))}}/**
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
 */class x2{constructor(){this.sessionToken=Qt.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,W.resolve()}}/**
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
 */class $g{constructor(){this.Qr=new xt(jt.$r),this.Ur=new xt(jt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const s=new jt(e,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,n){e.forEach((s=>this.addReference(s,n)))}removeReference(e,n){this.Gr(new jt(e,n))}zr(e,n){e.forEach((s=>this.removeReference(s,n)))}jr(e){const n=new de(new it([])),s=new jt(n,e),o=new jt(n,e+1),u=[];return this.Ur.forEachInRange([s,o],(f=>{this.Gr(f),u.push(f.key)})),u}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new de(new it([])),s=new jt(n,e),o=new jt(n,e+1);let u=Pe();return this.Ur.forEachInRange([s,o],(f=>{u=u.add(f.key)})),u}containsKey(e){const n=new jt(e,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class jt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return de.comparator(e.key,n.key)||Me(e.Yr,n.Yr)}static Kr(e,n){return Me(e.Yr,n.Yr)||de.comparator(e.key,n.key)}}/**
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
 */class M2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new xt(jt.$r)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new QN(u,n,s,o);this.mutationQueue.push(f);for(const m of o)this.Zr=this.Zr.add(new jt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return W.resolve(f)}lookupMutationBatch(e,n){return W.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,o=this.ei(s),u=o<0?0:o;return W.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?jg:this.tr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new jt(n,0),o=new jt(n,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],(f=>{const m=this.Xr(f.Yr);u.push(m)})),W.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new xt(Me);return n.forEach((o=>{const u=new jt(o,0),f=new jt(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,f],(m=>{s=s.add(m.Yr)}))})),W.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,o=s.length+1;let u=s;de.isDocumentKey(u)||(u=u.child(""));const f=new jt(new de(u),0);let m=new xt(Me);return this.Zr.forEachWhile((p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(m=m.add(p.Yr)),!0)}),f),W.resolve(this.ti(m))}ti(e){const n=[];return e.forEach((s=>{const o=this.Xr(s);o!==null&&n.push(o)})),n}removeMutationBatch(e,n){He(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return W.forEach(n.mutations,(o=>{const u=new jt(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,n){const s=new jt(n,0),o=this.Zr.firstAfterOrEqual(s);return W.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class P2{constructor(e){this.ri=e,this.docs=(function(){return new ut(de.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return W.resolve(s?s.document.mutableCopy():tn.newInvalidDocument(n))}getEntries(e,n){let s=mr();return n.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():tn.newInvalidDocument(o))})),W.resolve(s)}getDocumentsMatchingQuery(e,n,s,o){let u=mr();const f=n.path,m=new de(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:y,value:{document:E}}=p.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||uN(lN(E),s)<=0||(o.has(E.key)||Jh(n,E))&&(u=u.insert(E.key,E.mutableCopy()))}return W.resolve(u)}getAllFromCollectionGroup(e,n,s,o){_e(9500)}ii(e,n){return W.forEach(this.docs,(s=>n(s)))}newChangeBuffer(e){return new V2(this)}getSize(e){return W.resolve(this.size)}}class V2 extends I2{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?n.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)})),W.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class k2{constructor(e){this.persistence=e,this.si=new ma((n=>qg(n)),Fg),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.oi=0,this._i=new $g,this.targetCount=0,this.ai=No.ur()}forEachTarget(e,n){return this.si.forEach(((s,o)=>n(o))),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),W.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new No(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,W.resolve()}updateTargetData(e,n){return this.Pr(n),W.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,n,s){let o=0;const u=[];return this.si.forEach(((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.si.delete(f),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),W.waitFor(u).next((()=>o))}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,n){const s=this.si.get(n)||null;return W.resolve(s)}addMatchingKeys(e,n,s){return this._i.Wr(n,s),W.resolve()}removeMatchingKeys(e,n,s){this._i.zr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach((f=>{u.push(o.markPotentiallyOrphaned(e,f))})),W.waitFor(u)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),W.resolve()}getMatchingKeysForTargetId(e,n){const s=this._i.Hr(n);return W.resolve(s)}containsKey(e,n){return W.resolve(this._i.containsKey(n))}}/**
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
 */class zw{constructor(e,n){this.ui={},this.overlays={},this.ci=new Qh(0),this.li=!1,this.li=!0,this.hi=new x2,this.referenceDelegate=e(this),this.Pi=new k2(this),this.indexManager=new E2,this.remoteDocumentCache=(function(o){return new P2(o)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new _2(n),this.Ii=new D2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new O2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ui[e.toKey()];return s||(s=new M2(n,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,s){oe("MemoryPersistence","Starting transaction:",e);const o=new L2(this.ci.next());return this.referenceDelegate.Ei(),s(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(e,n){return W.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,n))))}}class L2 extends hN{constructor(e){super(),this.currentSequenceNumber=e}}class Xg{constructor(e){this.persistence=e,this.Ri=new $g,this.Vi=null}static mi(e){return new Xg(e)}get fi(){if(this.Vi)return this.Vi;throw _e(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),W.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),W.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),W.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((o=>this.fi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>s.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.fi,(s=>{const o=de.fromPath(s);return this.gi(e,o).next((u=>{u||n.removeEntry(o,we.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return W.or([()=>W.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class xh{constructor(e,n){this.persistence=e,this.pi=new ma((s=>mN(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=R2(this,n)}static mi(e,n){return new xh(e,n)}Ei(){}di(e){return W.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>n.next((o=>s+o))))}wr(e){let n=0;return this.pr(e,(s=>{n++})).next((()=>n))}pr(e,n){return W.forEach(this.pi,((s,o)=>this.br(e,s,o).next((u=>u?W.resolve():n(o)))))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,(f=>this.br(e,f,n).next((m=>{m||(s++,u.removeEntry(f,we.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),W.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),W.resolve()}removeReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),W.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=dh(e.data.value)),n}br(e,n,s){return W.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const o=this.pi.get(n);return W.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Wg{constructor(e,n,s,o){this.targetId=e,this.fromCache=n,this.Es=s,this.ds=o}static As(e,n){let s=Pe(),o=Pe();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Wg(e,n.fromCache,s,o)}}/**
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
 */class U2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class j2{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Fb()?8:fN(nn())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,o){const u={result:null};return this.ys(e,n).next((f=>{u.result=f})).next((()=>{if(!u.result)return this.ws(e,n,o,s).next((f=>{u.result=f}))})).next((()=>{if(u.result)return;const f=new U2;return this.Ss(e,n,f).next((m=>{if(u.result=m,this.Vs)return this.bs(e,n,f,m.size)}))})).next((()=>u.result))}bs(e,n,s,o){return s.documentReadCount<this.fs?(ho()<=xe.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",fo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),W.resolve()):(ho()<=xe.DEBUG&&oe("QueryEngine","Query:",fo(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(ho()<=xe.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",fo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ri(n))):W.resolve())}ys(e,n){if($E(n))return W.resolve(null);let s=Ri(n);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(n.limit!==null&&o===1&&(n=ag(n,null,"F"),s=Ri(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const f=Pe(...u);return this.ps.getDocuments(e,f).next((m=>this.indexManager.getMinOffset(e,s).next((p=>{const y=this.Ds(n,m);return this.Cs(n,y,f,p.readTime)?this.ys(e,ag(n,null,"F")):this.vs(e,y,n,p)}))))})))))}ws(e,n,s,o){return $E(n)||o.isEqual(we.min())?W.resolve(null):this.ps.getDocuments(e,s).next((u=>{const f=this.Ds(n,u);return this.Cs(n,f,s,o)?W.resolve(null):(ho()<=xe.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),fo(n)),this.vs(e,f,n,oN(o,pu)).next((m=>m)))}))}Ds(e,n){let s=new xt(yw(e));return n.forEach(((o,u)=>{Jh(e,u)&&(s=s.add(u))})),s}Cs(e,n,s,o){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const u=e.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,n,s){return ho()<=xe.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",fo(n)),this.ps.getDocumentsMatchingQuery(e,n,is.min(),s)}vs(e,n,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next((u=>(n.forEach((f=>{u=u.insert(f.key,f)})),u)))}}/**
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
 */const Zg="LocalStore",z2=3e8;class B2{constructor(e,n,s,o){this.persistence=e,this.Fs=n,this.serializer=o,this.Ms=new ut(Me),this.xs=new ma((u=>qg(u)),Fg),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new N2(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function q2(r,e,n,s){return new B2(r,e,n,s)}async function Bw(r,e){const n=Ae(r);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,n.Bs(e),n.mutationQueue.getAllMutationBatches(s)))).next((u=>{const f=[],m=[];let p=Pe();for(const y of o){f.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}for(const y of u){m.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}return n.localDocuments.getDocuments(s,p).next((y=>({Ls:y,removedBatchIds:f,addedBatchIds:m})))}))}))}function F2(r,e){const n=Ae(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(m,p,y,E){const R=y.batch,b=R.keys();let B=W.resolve();return b.forEach((K=>{B=B.next((()=>E.getEntry(p,K))).next((ne=>{const J=y.docVersions.get(K);He(J!==null,48541),ne.version.compareTo(J)<0&&(R.applyToRemoteDocument(ne,y),ne.isValidDocument()&&(ne.setReadTime(y.commitVersion),E.addEntry(ne)))}))})),B.next((()=>m.mutationQueue.removeMutationBatch(p,R)))})(n,s,e,u).next((()=>u.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let p=Pe();for(let y=0;y<m.mutationResults.length;++y)m.mutationResults[y].transformResults.length>0&&(p=p.add(m.batch.mutations[y].key));return p})(e)))).next((()=>n.localDocuments.getDocuments(s,o)))}))}function qw(r){const e=Ae(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function H2(r,e){const n=Ae(r),s=e.snapshotVersion;let o=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const f=n.Ns.newChangeBuffer({trackRemovals:!0});o=n.Ms;const m=[];e.targetChanges.forEach(((E,R)=>{const b=o.get(R);if(!b)return;m.push(n.Pi.removeMatchingKeys(u,E.removedDocuments,R).next((()=>n.Pi.addMatchingKeys(u,E.addedDocuments,R))));let B=b.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(R)!==null?B=B.withResumeToken(Qt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):E.resumeToken.approximateByteSize()>0&&(B=B.withResumeToken(E.resumeToken,s)),o=o.insert(R,B),(function(ne,J,Ee){return ne.resumeToken.approximateByteSize()===0||J.snapshotVersion.toMicroseconds()-ne.snapshotVersion.toMicroseconds()>=z2?!0:Ee.addedDocuments.size+Ee.modifiedDocuments.size+Ee.removedDocuments.size>0})(b,B,E)&&m.push(n.Pi.updateTargetData(u,B))}));let p=mr(),y=Pe();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(u,E))})),m.push(G2(u,f,e.documentUpdates).next((E=>{p=E.ks,y=E.qs}))),!s.isEqual(we.min())){const E=n.Pi.getLastRemoteSnapshotVersion(u).next((R=>n.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(E)}return W.waitFor(m).next((()=>f.apply(u))).next((()=>n.localDocuments.getLocalViewOfDocuments(u,p,y))).next((()=>p))})).then((u=>(n.Ms=o,u)))}function G2(r,e,n){let s=Pe(),o=Pe();return n.forEach((u=>s=s.add(u))),e.getEntries(r,s).next((u=>{let f=mr();return n.forEach(((m,p)=>{const y=u.get(m);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(m)),p.isNoDocument()&&p.version.isEqual(we.min())?(e.removeEntry(m,p.readTime),f=f.insert(m,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),f=f.insert(m,p)):oe(Zg,"Ignoring outdated watch update for ",m,". Current version:",y.version," Watch version:",p.version)})),{ks:f,qs:o}}))}function Y2(r,e){const n=Ae(r);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=jg),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function K2(r,e){const n=Ae(r);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return n.Pi.getTargetData(s,e).next((u=>u?(o=u,W.resolve(o)):n.Pi.allocateTargetId(s).next((f=>(o=new Xr(e,f,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=n.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(e,s.targetId)),s}))}async function hg(r,e,n){const s=Ae(r),o=s.Ms.get(e),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,(f=>s.persistence.referenceDelegate.removeTarget(f,o)))}catch(f){if(!Lo(f))throw f;oe(Zg,`Failed to update sequence numbers for target ${e}: ${f}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function lT(r,e,n){const s=Ae(r);let o=we.min(),u=Pe();return s.persistence.runTransaction("Execute query","readwrite",(f=>(function(p,y,E){const R=Ae(p),b=R.xs.get(E);return b!==void 0?W.resolve(R.Ms.get(b)):R.Pi.getTargetData(y,E)})(s,f,Ri(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(f,m.targetId).next((p=>{u=p}))})).next((()=>s.Fs.getDocumentsMatchingQuery(f,e,n?o:we.min(),n?u:Pe()))).next((m=>(Q2(s,MN(e),m),{documents:m,Qs:u})))))}function Q2(r,e,n){let s=r.Os.get(e)||we.min();n.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),r.Os.set(e,s)}class uT{constructor(){this.activeTargetIds=jN()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $2{constructor(){this.Mo=new uT,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,s){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new uT,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class X2{Oo(e){}shutdown(){}}/**
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
 */const km="RestConnection",W2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Z2{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===Ih?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,n,s,o,u){const f=fg(),m=this.zo(e,n.toUriEncodedString());oe(km,`Sending RPC '${e}' ${f}:`,m,s);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,o,u);const{host:y}=new URL(m),E=cs(y);return this.Jo(e,m,p,s,E).then((R=>(oe(km,`Received RPC '${e}' ${f}: `,R),R)),(R=>{throw Ao(km,`RPC '${e}' ${f} failed with error: `,R,"url: ",m,"request:",s),R}))}Ho(e,n,s,o,u,f){return this.Go(e,n,s,o,u)}jo(e,n,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Vo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}zo(e,n){const s=W2[e];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
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
 */class J2{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Jt="WebChannelConnection";class eD extends Z2{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,s,o,u){const f=fg();return new Promise(((m,p)=>{const y=new H0;y.setWithCredentials(!0),y.listenOnce(G0.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case fh.NO_ERROR:const R=y.getResponseJson();oe(Jt,`XHR for RPC '${e}' ${f} received:`,JSON.stringify(R)),m(R);break;case fh.TIMEOUT:oe(Jt,`RPC '${e}' ${f} timed out`),p(new se($.DEADLINE_EXCEEDED,"Request time out"));break;case fh.HTTP_ERROR:const b=y.getStatus();if(oe(Jt,`RPC '${e}' ${f} failed with status:`,b,"response text:",y.getResponseText()),b>0){let B=y.getResponseJson();Array.isArray(B)&&(B=B[0]);const K=B?.error;if(K&&K.status&&K.message){const ne=(function(Ee){const ae=Ee.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(ae)>=0?ae:$.UNKNOWN})(K.status);p(new se(ne,K.message))}else p(new se($.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new se($.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{l_:e,streamId:f,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{oe(Jt,`RPC '${e}' ${f} completed.`)}}));const E=JSON.stringify(o);oe(Jt,`RPC '${e}' ${f} sending request:`,o),y.send(n,"POST",E,s,15)}))}T_(e,n,s){const o=fg(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=Q0(),m=K0(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,n,s),p.encodeInitMessageHeaders=!0;const E=u.join("");oe(Jt,`Creating RPC '${e}' stream ${o}: ${E}`,p);const R=f.createWebChannel(E,p);this.I_(R);let b=!1,B=!1;const K=new J2({Yo:J=>{B?oe(Jt,`Not sending because RPC '${e}' stream ${o} is closed:`,J):(b||(oe(Jt,`Opening RPC '${e}' stream ${o} transport.`),R.open(),b=!0),oe(Jt,`RPC '${e}' stream ${o} sending:`,J),R.send(J))},Zo:()=>R.close()}),ne=(J,Ee,ae)=>{J.listen(Ee,(ce=>{try{ae(ce)}catch(Se){setTimeout((()=>{throw Se}),0)}}))};return ne(R,tu.EventType.OPEN,(()=>{B||(oe(Jt,`RPC '${e}' stream ${o} transport opened.`),K.o_())})),ne(R,tu.EventType.CLOSE,(()=>{B||(B=!0,oe(Jt,`RPC '${e}' stream ${o} transport closed`),K.a_(),this.E_(R))})),ne(R,tu.EventType.ERROR,(J=>{B||(B=!0,Ao(Jt,`RPC '${e}' stream ${o} transport errored. Name:`,J.name,"Message:",J.message),K.a_(new se($.UNAVAILABLE,"The operation could not be completed")))})),ne(R,tu.EventType.MESSAGE,(J=>{if(!B){const Ee=J.data[0];He(!!Ee,16349);const ae=Ee,ce=ae?.error||ae[0]?.error;if(ce){oe(Jt,`RPC '${e}' stream ${o} received error:`,ce);const Se=ce.status;let me=(function(S){const C=At[S];if(C!==void 0)return Nw(C)})(Se),Oe=ce.message;me===void 0&&(me=$.INTERNAL,Oe="Unknown error status: "+Se+" with message "+ce.message),B=!0,K.a_(new se(me,Oe)),R.close()}else oe(Jt,`RPC '${e}' stream ${o} received:`,Ee),K.u_(Ee)}})),ne(m,Y0.STAT_EVENT,(J=>{J.stat===Jm.PROXY?oe(Jt,`RPC '${e}' stream ${o} detected buffering proxy`):J.stat===Jm.NOPROXY&&oe(Jt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{K.__()}),0),K}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function Lm(){return typeof document<"u"?document:null}/**
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
 */function rf(r){return new r2(r,!0)}/**
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
 */class Fw{constructor(e,n,s=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=n,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-s);o>0&&oe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const fT="PersistentStream";class Hw{constructor(e,n,s,o,u,f,m,p){this.Mi=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Fw(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(dr(n.toString()),dr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===n&&this.G_(s,o)}),(s=>{e((()=>{const o=new se($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,n){const s=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return oe(fT,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(oe(fT,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class tD extends Hw{constructor(e,n,s,o,u,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=o2(this.serializer,e),s=(function(u){if(!("targetChange"in u))return we.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?we.min():f.readTime?Ii(f.readTime):we.min()})(e);return this.listener.H_(n,s)}Y_(e){const n={};n.database=cg(this.serializer),n.addTarget=(function(u,f){let m;const p=f.target;if(m=rg(p)?{documents:c2(u,p)}:{query:h2(u,p).ft},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=xw(u,f.resumeToken);const y=og(u,f.expectedCount);y!==null&&(m.expectedCount=y)}else if(f.snapshotVersion.compareTo(we.min())>0){m.readTime=Oh(u,f.snapshotVersion.toTimestamp());const y=og(u,f.expectedCount);y!==null&&(m.expectedCount=y)}return m})(this.serializer,e);const s=d2(this.serializer,e);s&&(n.labels=s),this.q_(n)}Z_(e){const n={};n.database=cg(this.serializer),n.removeTarget=e,this.q_(n)}}class nD extends Hw{constructor(e,n,s,o,u,f){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return He(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,He(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){He(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=u2(e.writeResults,e.commitTime),s=Ii(e.commitTime);return this.listener.na(s,n)}ra(){const e={};e.database=cg(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((s=>l2(this.serializer,s)))};this.q_(n)}}/**
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
 */class iD{}class rD extends iD{constructor(e,n,s,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new se($.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,f])=>this.connection.Go(e,lg(n,s),o,u,f))).catch((u=>{throw u.name==="FirebaseError"?(u.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new se($.UNKNOWN,u.toString())}))}Ho(e,n,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([f,m])=>this.connection.Ho(e,lg(n,s),o,f,m,u))).catch((f=>{throw f.name==="FirebaseError"?(f.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new se($.UNKNOWN,f.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class sD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(dr(n),this.aa=!1):oe("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ca="RemoteStore";class aD{constructor(e,n,s,o,u){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((f=>{s.enqueueAndForget((async()=>{ga(this)&&(oe(ca,"Restarting streams for network reachability change."),await(async function(p){const y=Ae(p);y.Ea.add(4),await Nu(y),y.Ra.set("Unknown"),y.Ea.delete(4),await sf(y)})(this))}))})),this.Ra=new sD(s,o)}}async function sf(r){if(ga(r))for(const e of r.da)await e(!0)}async function Nu(r){for(const e of r.da)await e(!1)}function Gw(r,e){const n=Ae(r);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),np(n)?tp(n):jo(n).O_()&&ep(n,e))}function Jg(r,e){const n=Ae(r),s=jo(n);n.Ia.delete(e),s.O_()&&Yw(n,e),n.Ia.size===0&&(s.O_()?s.L_():ga(n)&&n.Ra.set("Unknown"))}function ep(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}jo(r).Y_(e)}function Yw(r,e){r.Va.Ue(e),jo(r).Z_(e)}function tp(r){r.Va=new e2({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),jo(r).start(),r.Ra.ua()}function np(r){return ga(r)&&!jo(r).x_()&&r.Ia.size>0}function ga(r){return Ae(r).Ea.size===0}function Kw(r){r.Va=void 0}async function oD(r){r.Ra.set("Online")}async function lD(r){r.Ia.forEach(((e,n)=>{ep(r,e)}))}async function uD(r,e){Kw(r),np(r)?(r.Ra.ha(e),tp(r)):r.Ra.set("Unknown")}async function cD(r,e,n){if(r.Ra.set("Online"),e instanceof Ow&&e.state===2&&e.cause)try{await(async function(o,u){const f=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.Ia.delete(m),o.Va.removeTarget(m))})(r,e)}catch(s){oe(ca,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Mh(r,s)}else if(e instanceof ph?r.Va.Ze(e):e instanceof Dw?r.Va.st(e):r.Va.tt(e),!n.isEqual(we.min()))try{const s=await qw(r.localStore);n.compareTo(s)>=0&&await(function(u,f){const m=u.Va.Tt(f);return m.targetChanges.forEach(((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const E=u.Ia.get(y);E&&u.Ia.set(y,E.withResumeToken(p.resumeToken,f))}})),m.targetMismatches.forEach(((p,y)=>{const E=u.Ia.get(p);if(!E)return;u.Ia.set(p,E.withResumeToken(Qt.EMPTY_BYTE_STRING,E.snapshotVersion)),Yw(u,p);const R=new Xr(E.target,p,y,E.sequenceNumber);ep(u,R)})),u.remoteSyncer.applyRemoteEvent(m)})(r,n)}catch(s){oe(ca,"Failed to raise snapshot:",s),await Mh(r,s)}}async function Mh(r,e,n){if(!Lo(e))throw e;r.Ea.add(1),await Nu(r),r.Ra.set("Offline"),n||(n=()=>qw(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{oe(ca,"Retrying IndexedDB access"),await n(),r.Ea.delete(1),await sf(r)}))}function Qw(r,e){return e().catch((n=>Mh(r,n,e)))}async function af(r){const e=Ae(r),n=os(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:jg;for(;hD(e);)try{const o=await Y2(e.localStore,s);if(o===null){e.Ta.length===0&&n.L_();break}s=o.batchId,fD(e,o)}catch(o){await Mh(e,o)}$w(e)&&Xw(e)}function hD(r){return ga(r)&&r.Ta.length<10}function fD(r,e){r.Ta.push(e);const n=os(r);n.O_()&&n.X_&&n.ea(e.mutations)}function $w(r){return ga(r)&&!os(r).x_()&&r.Ta.length>0}function Xw(r){os(r).start()}async function dD(r){os(r).ra()}async function mD(r){const e=os(r);for(const n of r.Ta)e.ea(n.mutations)}async function gD(r,e,n){const s=r.Ta.shift(),o=Yg.from(s,e,n);await Qw(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await af(r)}async function pD(r,e){e&&os(r).X_&&await(async function(s,o){if((function(f){return WN(f)&&f!==$.ABORTED})(o.code)){const u=s.Ta.shift();os(s).B_(),await Qw(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await af(s)}})(r,e),$w(r)&&Xw(r)}async function dT(r,e){const n=Ae(r);n.asyncQueue.verifyOperationInProgress(),oe(ca,"RemoteStore received new credentials");const s=ga(n);n.Ea.add(3),await Nu(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await sf(n)}async function yD(r,e){const n=Ae(r);e?(n.Ea.delete(2),await sf(n)):e||(n.Ea.add(2),await Nu(n),n.Ra.set("Unknown"))}function jo(r){return r.ma||(r.ma=(function(n,s,o){const u=Ae(n);return u.sa(),new tD(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Xo:oD.bind(null,r),t_:lD.bind(null,r),r_:uD.bind(null,r),H_:cD.bind(null,r)}),r.da.push((async e=>{e?(r.ma.B_(),np(r)?tp(r):r.Ra.set("Unknown")):(await r.ma.stop(),Kw(r))}))),r.ma}function os(r){return r.fa||(r.fa=(function(n,s,o){const u=Ae(n);return u.sa(),new nD(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:dD.bind(null,r),r_:pD.bind(null,r),ta:mD.bind(null,r),na:gD.bind(null,r)}),r.da.push((async e=>{e?(r.fa.B_(),await af(r)):(await r.fa.stop(),r.Ta.length>0&&(oe(ca,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
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
 */class ip{constructor(e,n,s,o,u){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new cr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((f=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,o,u){const f=Date.now()+s,m=new ip(e,n,f,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rp(r,e){if(dr("AsyncQueue",`${e}: ${r}`),Lo(r))return new se($.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class mT{constructor(){this.ga=new ut(de.comparator)}track(e){const n=e.doc.key,s=this.ga.get(n);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(n,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(n):e.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):_e(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,s)=>{e.push(s)})),e}}class Do{constructor(e,n,s,o,u,f,m,p,y){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,n,s,o,u){const f=[];return n.forEach((m=>{f.push({type:0,doc:m})})),new Do(e,n,wo.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class _D{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class vD{constructor(){this.queries=gT(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const o=Ae(n),u=o.queries;o.queries=gT(),u.forEach(((f,m)=>{for(const p of m.Sa)p.onError(s)}))})(this,new se($.ABORTED,"Firestore shutting down"))}}function gT(){return new ma((r=>pw(r)),Zh)}async function sp(r,e){const n=Ae(r);let s=3;const o=e.query;let u=n.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new _D,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await n.onListen(o,!0);break;case 1:u.wa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const m=rp(f,`Initialization of query '${fo(e.query)}' failed`);return void e.onError(m)}n.queries.set(o,u),u.Sa.push(e),e.va(n.onlineState),u.wa&&e.Fa(u.wa)&&op(n)}async function ap(r,e){const n=Ae(r),s=e.query;let o=3;const u=n.queries.get(s);if(u){const f=u.Sa.indexOf(e);f>=0&&(u.Sa.splice(f,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function ED(r,e){const n=Ae(r);let s=!1;for(const o of e){const u=o.query,f=n.queries.get(u);if(f){for(const m of f.Sa)m.Fa(o)&&(s=!0);f.wa=o}}s&&op(n)}function TD(r,e,n){const s=Ae(r),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(n);s.queries.delete(e)}function op(r){r.Ca.forEach((e=>{e.next()}))}var dg,pT;(pT=dg||(dg={})).Ma="default",pT.Cache="cache";class lp{constructor(e,n,s){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Do(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Do.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==dg.Cache}}/**
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
 */class Ww{constructor(e){this.key=e}}class Zw{constructor(e){this.key=e}}class wD{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Pe(),this.mutatedKeys=Pe(),this.eu=yw(e),this.tu=new wo(this.eu)}get nu(){return this.Ya}ru(e,n){const s=n?n.iu:new mT,o=n?n.tu:this.tu;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,m=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,R)=>{const b=o.get(E),B=Jh(this.query,R)?R:null,K=!!b&&this.mutatedKeys.has(b.key),ne=!!B&&(B.hasLocalMutations||this.mutatedKeys.has(B.key)&&B.hasCommittedMutations);let J=!1;b&&B?b.data.isEqual(B.data)?K!==ne&&(s.track({type:3,doc:B}),J=!0):this.su(b,B)||(s.track({type:2,doc:B}),J=!0,(p&&this.eu(B,p)>0||y&&this.eu(B,y)<0)&&(m=!0)):!b&&B?(s.track({type:0,doc:B}),J=!0):b&&!B&&(s.track({type:1,doc:b}),J=!0,(p||y)&&(m=!0)),J&&(B?(f=f.add(B),u=ne?u.add(E):u.delete(E)):(f=f.delete(E),u=u.delete(E)))})),this.query.limit!==null)for(;f.size>this.query.limit;){const E=this.query.limitType==="F"?f.last():f.first();f=f.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{tu:f,iu:s,Cs:m,mutatedKeys:u}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const f=e.iu.ya();f.sort(((E,R)=>(function(B,K){const ne=J=>{switch(J){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{Rt:J})}};return ne(B)-ne(K)})(E.type,R.type)||this.eu(E.doc,R.doc))),this.ou(s),o=o??!1;const m=n&&!o?this._u():[],p=this.Xa.size===0&&this.current&&!o?1:0,y=p!==this.Za;return this.Za=p,f.length!==0||y?{snapshot:new Do(this.query,e.tu,u,f,e.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new mT,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Pe(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const n=[];return e.forEach((s=>{this.Xa.has(s)||n.push(new Zw(s))})),this.Xa.forEach((s=>{e.has(s)||n.push(new Ww(s))})),n}cu(e){this.Ya=e.Qs,this.Xa=Pe();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Do.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const up="SyncEngine";class AD{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class SD{constructor(e){this.key=e,this.hu=!1}}class bD{constructor(e,n,s,o,u,f){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new ma((m=>pw(m)),Zh),this.Iu=new Map,this.Eu=new Set,this.du=new ut(de.comparator),this.Au=new Map,this.Ru=new $g,this.Vu={},this.mu=new Map,this.fu=No.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function RD(r,e,n=!0){const s=rA(r);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await Jw(s,e,n,!0),o}async function ID(r,e){const n=rA(r);await Jw(n,e,!0,!1)}async function Jw(r,e,n,s){const o=await K2(r.localStore,Ri(e)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let m;return s&&(m=await CD(r,e,u,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&Gw(r.remoteStore,o),m}async function CD(r,e,n,s,o){r.pu=(R,b,B)=>(async function(ne,J,Ee,ae){let ce=J.view.ru(Ee);ce.Cs&&(ce=await lT(ne.localStore,J.query,!1).then((({documents:M})=>J.view.ru(M,ce))));const Se=ae&&ae.targetChanges.get(J.targetId),me=ae&&ae.targetMismatches.get(J.targetId)!=null,Oe=J.view.applyChanges(ce,ne.isPrimaryClient,Se,me);return _T(ne,J.targetId,Oe.au),Oe.snapshot})(r,R,b,B);const u=await lT(r.localStore,e,!0),f=new wD(e,u.Qs),m=f.ru(u.documents),p=Cu.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),y=f.applyChanges(m,r.isPrimaryClient,p);_T(r,n,y.au);const E=new AD(e,n,f);return r.Tu.set(e,E),r.Iu.has(n)?r.Iu.get(n).push(e):r.Iu.set(n,[e]),y.snapshot}async function ND(r,e,n){const s=Ae(r),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter((f=>!Zh(f,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await hg(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),n&&Jg(s.remoteStore,o.targetId),mg(s,o.targetId)})).catch(ko)):(mg(s,o.targetId),await hg(s.localStore,o.targetId,!0))}async function DD(r,e){const n=Ae(r),s=n.Tu.get(e),o=n.Iu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Jg(n.remoteStore,s.targetId))}async function OD(r,e,n){const s=UD(r);try{const o=await(function(f,m){const p=Ae(f),y=st.now(),E=m.reduce(((B,K)=>B.add(K.key)),Pe());let R,b;return p.persistence.runTransaction("Locally write mutations","readwrite",(B=>{let K=mr(),ne=Pe();return p.Ns.getEntries(B,E).next((J=>{K=J,K.forEach(((Ee,ae)=>{ae.isValidDocument()||(ne=ne.add(Ee))}))})).next((()=>p.localDocuments.getOverlayedDocuments(B,K))).next((J=>{R=J;const Ee=[];for(const ae of m){const ce=YN(ae,R.get(ae.key).overlayedDocument);ce!=null&&Ee.push(new ms(ae.key,ce,lw(ce.value.mapValue),ii.exists(!0)))}return p.mutationQueue.addMutationBatch(B,y,Ee,m)})).next((J=>{b=J;const Ee=J.applyToLocalDocumentSet(R,ne);return p.documentOverlayCache.saveOverlays(B,J.batchId,Ee)}))})).then((()=>({batchId:b.batchId,changes:vw(R)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(f,m,p){let y=f.Vu[f.currentUser.toKey()];y||(y=new ut(Me)),y=y.insert(m,p),f.Vu[f.currentUser.toKey()]=y})(s,o.batchId,n),await Du(s,o.changes),await af(s.remoteStore)}catch(o){const u=rp(o,"Failed to persist write");n.reject(u)}}async function eA(r,e){const n=Ae(r);try{const s=await H2(n.localStore,e);e.targetChanges.forEach(((o,u)=>{const f=n.Au.get(u);f&&(He(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.hu=!0:o.modifiedDocuments.size>0?He(f.hu,14607):o.removedDocuments.size>0&&(He(f.hu,42227),f.hu=!1))})),await Du(n,s,e)}catch(s){await ko(s)}}function yT(r,e,n){const s=Ae(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.Tu.forEach(((u,f)=>{const m=f.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(f,m){const p=Ae(f);p.onlineState=m;let y=!1;p.queries.forEach(((E,R)=>{for(const b of R.Sa)b.va(m)&&(y=!0)})),y&&op(p)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function xD(r,e,n){const s=Ae(r);s.sharedClientState.updateQueryState(e,"rejected",n);const o=s.Au.get(e),u=o&&o.key;if(u){let f=new ut(de.comparator);f=f.insert(u,tn.newNoDocument(u,we.min()));const m=Pe().add(u),p=new nf(we.min(),new Map,new ut(Me),f,m);await eA(s,p),s.du=s.du.remove(u),s.Au.delete(e),cp(s)}else await hg(s.localStore,e,!1).then((()=>mg(s,e,n))).catch(ko)}async function MD(r,e){const n=Ae(r),s=e.batch.batchId;try{const o=await F2(n.localStore,e);nA(n,s,null),tA(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Du(n,o)}catch(o){await ko(o)}}async function PD(r,e,n){const s=Ae(r);try{const o=await(function(f,m){const p=Ae(f);return p.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let E;return p.mutationQueue.lookupMutationBatch(y,m).next((R=>(He(R!==null,37113),E=R.keys(),p.mutationQueue.removeMutationBatch(y,R)))).next((()=>p.mutationQueue.performConsistencyCheck(y))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(y,E,m))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E))).next((()=>p.localDocuments.getDocuments(y,E)))}))})(s.localStore,e);nA(s,e,n),tA(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Du(s,o)}catch(o){await ko(o)}}function tA(r,e){(r.mu.get(e)||[]).forEach((n=>{n.resolve()})),r.mu.delete(e)}function nA(r,e,n){const s=Ae(r);let o=s.Vu[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(n?u.reject(n):u.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function mg(r,e,n=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Iu.get(e))r.Tu.delete(s),n&&r.Pu.yu(s,n);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach((s=>{r.Ru.containsKey(s)||iA(r,s)}))}function iA(r,e){r.Eu.delete(e.path.canonicalString());const n=r.du.get(e);n!==null&&(Jg(r.remoteStore,n),r.du=r.du.remove(e),r.Au.delete(n),cp(r))}function _T(r,e,n){for(const s of n)s instanceof Ww?(r.Ru.addReference(s.key,e),VD(r,s)):s instanceof Zw?(oe(up,"Document no longer in limbo: "+s.key),r.Ru.removeReference(s.key,e),r.Ru.containsKey(s.key)||iA(r,s.key)):_e(19791,{wu:s})}function VD(r,e){const n=e.key,s=n.path.canonicalString();r.du.get(n)||r.Eu.has(s)||(oe(up,"New document in limbo: "+n),r.Eu.add(s),cp(r))}function cp(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const n=new de(it.fromString(e)),s=r.fu.next();r.Au.set(s,new SD(n)),r.du=r.du.insert(n,s),Gw(r.remoteStore,new Xr(Ri(Wh(n.path)),s,"TargetPurposeLimboResolution",Qh.ce))}}async function Du(r,e,n){const s=Ae(r),o=[],u=[],f=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,p)=>{f.push(s.pu(p,e,n).then((y=>{if((y||n)&&s.isPrimaryClient){const E=y?!y.fromCache:n?.targetChanges.get(p.targetId)?.current;s.sharedClientState.updateQueryState(p.targetId,E?"current":"not-current")}if(y){o.push(y);const E=Wg.As(p.targetId,y);u.push(E)}})))})),await Promise.all(f),s.Pu.H_(o),await(async function(p,y){const E=Ae(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(R=>W.forEach(y,(b=>W.forEach(b.Es,(B=>E.persistence.referenceDelegate.addReference(R,b.targetId,B))).next((()=>W.forEach(b.ds,(B=>E.persistence.referenceDelegate.removeReference(R,b.targetId,B)))))))))}catch(R){if(!Lo(R))throw R;oe(Zg,"Failed to update sequence numbers: "+R)}for(const R of y){const b=R.targetId;if(!R.fromCache){const B=E.Ms.get(b),K=B.snapshotVersion,ne=B.withLastLimboFreeSnapshotVersion(K);E.Ms=E.Ms.insert(b,ne)}}})(s.localStore,u))}async function kD(r,e){const n=Ae(r);if(!n.currentUser.isEqual(e)){oe(up,"User change. New user:",e.toKey());const s=await Bw(n.localStore,e);n.currentUser=e,(function(u,f){u.mu.forEach((m=>{m.forEach((p=>{p.reject(new se($.CANCELLED,f))}))})),u.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Du(n,s.Ls)}}function LD(r,e){const n=Ae(r),s=n.Au.get(e);if(s&&s.hu)return Pe().add(s.key);{let o=Pe();const u=n.Iu.get(e);if(!u)return o;for(const f of u){const m=n.Tu.get(f);o=o.unionWith(m.view.nu)}return o}}function rA(r){const e=Ae(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=eA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=LD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xD.bind(null,e),e.Pu.H_=ED.bind(null,e.eventManager),e.Pu.yu=TD.bind(null,e.eventManager),e}function UD(r){const e=Ae(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=MD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=PD.bind(null,e),e}class Ph{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=rf(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return q2(this.persistence,new j2,e.initialUser,this.serializer)}Cu(e){return new zw(Xg.mi,this.serializer)}Du(e){return new $2}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ph.provider={build:()=>new Ph};class jD extends Ph{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){He(this.persistence.referenceDelegate instanceof xh,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new S2(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?fn.withCacheSize(this.cacheSizeBytes):fn.DEFAULT;return new zw((s=>xh.mi(s,n)),this.serializer)}}class gg{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>yT(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=kD.bind(null,this.syncEngine),await yD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new vD})()}createDatastore(e){const n=rf(e.databaseInfo.databaseId),s=(function(u){return new eD(u)})(e.databaseInfo);return(function(u,f,m,p){return new rD(u,f,m,p)})(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return(function(s,o,u,f,m){return new aD(s,o,u,f,m)})(this.localStore,this.datastore,e.asyncQueue,(n=>yT(this.syncEngine,n,0)),(function(){return hT.v()?new hT:new X2})())}createSyncEngine(e,n){return(function(o,u,f,m,p,y,E){const R=new bD(o,u,f,m,p,y);return E&&(R.gu=!0),R})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const s=Ae(n);oe(ca,"RemoteStore shutting down."),s.Ea.add(5),await Nu(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}gg.provider={build:()=>new gg};/**
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
 */class hp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):dr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const ls="FirestoreClient";class zD{constructor(e,n,s,o,u){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=en.UNAUTHENTICATED,this.clientId=Ug.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async f=>{oe(ls,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f})),this.appCheckCredentials.start(s,(f=>(oe(ls,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new cr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=rp(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Um(r,e){r.asyncQueue.verifyOperationInProgress(),oe(ls,"Initializing OfflineComponentProvider");const n=r.configuration;await e.initialize(n);let s=n.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await Bw(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function vT(r,e){r.asyncQueue.verifyOperationInProgress();const n=await BD(r);oe(ls,"Initializing OnlineComponentProvider"),await e.initialize(n,r.configuration),r.setCredentialChangeListener((s=>dT(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>dT(e.remoteStore,o))),r._onlineComponents=e}async function BD(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){oe(ls,"Using user provided OfflineComponentProvider");try{await Um(r,r._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(o){return o.name==="FirebaseError"?o.code===$.FAILED_PRECONDITION||o.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(n))throw n;Ao("Error using user provided cache. Falling back to memory cache: "+n),await Um(r,new Ph)}}else oe(ls,"Using default OfflineComponentProvider"),await Um(r,new jD(void 0));return r._offlineComponents}async function sA(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(oe(ls,"Using user provided OnlineComponentProvider"),await vT(r,r._uninitializedComponentsProvider._online)):(oe(ls,"Using default OnlineComponentProvider"),await vT(r,new gg))),r._onlineComponents}function qD(r){return sA(r).then((e=>e.syncEngine))}async function Vh(r){const e=await sA(r),n=e.eventManager;return n.onListen=RD.bind(null,e.syncEngine),n.onUnlisten=ND.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=ID.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=DD.bind(null,e.syncEngine),n}function FD(r,e,n={}){const s=new cr;return r.asyncQueue.enqueueAndForget((async()=>(function(u,f,m,p,y){const E=new hp({next:b=>{E.Nu(),f.enqueueAndForget((()=>ap(u,R)));const B=b.docs.has(m);!B&&b.fromCache?y.reject(new se($.UNAVAILABLE,"Failed to get document because the client is offline.")):B&&b.fromCache&&p&&p.source==="server"?y.reject(new se($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(b)},error:b=>y.reject(b)}),R=new lp(Wh(m.path),E,{includeMetadataChanges:!0,qa:!0});return sp(u,R)})(await Vh(r),r.asyncQueue,e,n,s))),s.promise}function HD(r,e,n={}){const s=new cr;return r.asyncQueue.enqueueAndForget((async()=>(function(u,f,m,p,y){const E=new hp({next:b=>{E.Nu(),f.enqueueAndForget((()=>ap(u,R))),b.fromCache&&p.source==="server"?y.reject(new se($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(b)},error:b=>y.reject(b)}),R=new lp(m,E,{includeMetadataChanges:!0,qa:!0});return sp(u,R)})(await Vh(r),r.asyncQueue,e,n,s))),s.promise}/**
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
 */function aA(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const oA="firestore.googleapis.com",TT=!0;class wT{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new se($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=oA,this.ssl=TT}else this.host=e.host,this.ssl=e.ssl??TT;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=jw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<w2)throw new se($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}aN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=aA(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new se($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new se($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new se($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class of{constructor(e,n,s,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wT({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wT(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new XC;switch(s.type){case"firstParty":return new eN(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new se($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=ET.get(n);s&&(oe("ComponentProvider","Removing Datastore"),ET.delete(n),s.terminate())})(this),Promise.resolve()}}function GD(r,e,n,s={}){r=Nn(r,of);const o=cs(e),u=r._getSettings(),f={...u,emulatorOptions:r._getEmulatorOptions()},m=`${e}:${n}`;o&&(Eg(`https://${m}`),Tg("Firestore",!0)),u.host!==oA&&u.host!==m&&Ao("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...u,host:m,ssl:o,emulatorOptions:s};if(!Di(p,f)&&(r._setSettings(p),s.mockUserToken)){let y,E;if(typeof s.mockUserToken=="string")y=s.mockUserToken,E=en.MOCK_USER;else{y=Vb(s.mockUserToken,r._app?.options.projectId);const R=s.mockUserToken.sub||s.mockUserToken.user_id;if(!R)throw new se($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new en(R)}r._authCredentials=new WC(new X0(y,E))}}/**
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
 */class gs{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new gs(this.firestore,e,this._query)}}class dt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ts(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dt(this.firestore,e,this._key)}toJSON(){return{type:dt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(Ru(n,dt._jsonSchema))return new dt(e,s||null,new de(it.fromString(n.referencePath)))}}dt._jsonSchemaVersion="firestore/documentReference/1.0",dt._jsonSchema={type:Rt("string",dt._jsonSchemaVersion),referencePath:Rt("string")};class ts extends gs{constructor(e,n,s){super(e,n,Wh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dt(this.firestore,null,new de(e))}withConverter(e){return new ts(this.firestore,e,this._path)}}function rr(r,e,...n){if(r=Ze(r),W0("collection","path",e),r instanceof of){const s=it.fromString(e,...n);return VE(s),new ts(r,null,s)}{if(!(r instanceof dt||r instanceof ts))throw new se($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(it.fromString(e,...n));return VE(s),new ts(r.firestore,null,s)}}function rt(r,e,...n){if(r=Ze(r),arguments.length===1&&(e=Ug.newId()),W0("doc","path",e),r instanceof of){const s=it.fromString(e,...n);return PE(s),new dt(r,null,new de(s))}{if(!(r instanceof dt||r instanceof ts))throw new se($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(it.fromString(e,...n));return PE(s),new dt(r.firestore,r instanceof ts?r.converter:null,new de(s))}}/**
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
 */const AT="AsyncQueue";class ST{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Fw(this,"async_queue_retry"),this._c=()=>{const s=Lm();s&&oe(AT,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=Lm();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Lm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new cr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Lo(e))throw e;oe(AT,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,dr("INTERNAL UNHANDLED ERROR: ",bT(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const o=ip.createAndSchedule(this,e,n,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&_e(47125,{Pc:bT(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function bT(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
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
 */function RT(r){return(function(n,s){if(typeof n!="object"||n===null)return!1;const o=n;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1})(r,["next","error","complete"])}class us extends of{constructor(e,n,s,o){super(e,n,s,o),this.type="firestore",this._queue=new ST,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ST(e),this._firestoreClient=void 0,await e}}}function YD(r,e){const n=typeof r=="object"?r:Fh(),s=typeof r=="string"?r:Ih,o=hs(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=KT("firestore");u&&GD(o,...u)}return o}function lf(r){if(r._terminated)throw new se($.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||KD(r),r._firestoreClient}function KD(r){const e=r._freezeSettings(),n=(function(o,u,f,m){return new yN(o,u,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,aA(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(r._databaseId,r._app?.options.appId||"",r._persistenceKey,e);r._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new zD(r._authCredentials,r._appCheckCredentials,r._queue,n,r._componentsProvider&&(function(o){const u=o?._online.build();return{_offline:o?._offline.build(u),_online:u}})(r._componentsProvider))}/**
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
 */class Hn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hn(Qt.fromBase64String(e))}catch(n){throw new se($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Hn(Qt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Hn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ru(e,Hn._jsonSchema))return Hn.fromBase64String(e.bytes)}}Hn._jsonSchemaVersion="firestore/bytes/1.0",Hn._jsonSchema={type:Rt("string",Hn._jsonSchemaVersion),bytes:Rt("string")};/**
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
 */class uf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new se($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ci{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new se($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new se($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Me(this._lat,e._lat)||Me(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ci._jsonSchemaVersion}}static fromJSON(e){if(Ru(e,Ci._jsonSchema))return new Ci(e.latitude,e.longitude)}}Ci._jsonSchemaVersion="firestore/geoPoint/1.0",Ci._jsonSchema={type:Rt("string",Ci._jsonSchemaVersion),latitude:Rt("number"),longitude:Rt("number")};/**
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
 */class Ni{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ni._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ru(e,Ni._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Ni(e.vectorValues);throw new se($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ni._jsonSchemaVersion="firestore/vectorValue/1.0",Ni._jsonSchema={type:Rt("string",Ni._jsonSchemaVersion),vectorValues:Rt("object")};/**
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
 */const QD=/^__.*__$/;class $D{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ms(e,this.data,this.fieldMask,n,this.fieldTransforms):new Iu(e,this.data,n,this.fieldTransforms)}}class lA{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new ms(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function uA(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{Ac:r})}}class cf{constructor(e,n,s,o,u,f){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new cf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.gc(e),s}yc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return kh(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(uA(this.Ac)&&QD.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class XD{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||rf(e)}Cc(e,n,s,o=!1){return new cf({Ac:e,methodName:n,Dc:s,path:Kt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hf(r){const e=r._freezeSettings(),n=rf(r._databaseId);return new XD(r._databaseId,!!e.ignoreUndefinedProperties,n)}function cA(r,e,n,s,o,u={}){const f=r.Cc(u.merge||u.mergeFields?2:0,e,n,o);gp("Data must be an object, but it was:",f,s);const m=fA(s,f);let p,y;if(u.merge)p=new In(f.fieldMask),y=f.fieldTransforms;else if(u.mergeFields){const E=[];for(const R of u.mergeFields){const b=pg(e,R,n);if(!f.contains(b))throw new se($.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);mA(E,b)||E.push(b)}p=new In(E),y=f.fieldTransforms.filter((R=>p.covers(R.field)))}else p=null,y=f.fieldTransforms;return new $D(new dn(m),p,y)}class ff extends zo{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ff}}function hA(r,e,n){return new cf({Ac:3,Dc:e.settings.Dc,methodName:r._methodName,fc:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class fp extends zo{_toFieldTransform(e){return new Gg(e.path,new Tu)}isEqual(e){return e instanceof fp}}class dp extends zo{constructor(e,n){super(e),this.vc=n}_toFieldTransform(e){const n=hA(this,e,!0),s=this.vc.map((u=>pa(u,n))),o=new Io(s);return new Gg(e.path,o)}isEqual(e){return e instanceof dp&&Di(this.vc,e.vc)}}class mp extends zo{constructor(e,n){super(e),this.vc=n}_toFieldTransform(e){const n=hA(this,e,!0),s=this.vc.map((u=>pa(u,n))),o=new Co(s);return new Gg(e.path,o)}isEqual(e){return e instanceof mp&&Di(this.vc,e.vc)}}function WD(r,e,n,s){const o=r.Cc(1,e,n);gp("Data must be an object, but it was:",o,s);const u=[],f=dn.empty();ds(s,((p,y)=>{const E=pp(e,p,n);y=Ze(y);const R=o.yc(E);if(y instanceof ff)u.push(E);else{const b=pa(y,R);b!=null&&(u.push(E),f.set(E,b))}}));const m=new In(u);return new lA(f,m,o.fieldTransforms)}function ZD(r,e,n,s,o,u){const f=r.Cc(1,e,n),m=[pg(e,s,n)],p=[o];if(u.length%2!=0)throw new se($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<u.length;b+=2)m.push(pg(e,u[b])),p.push(u[b+1]);const y=[],E=dn.empty();for(let b=m.length-1;b>=0;--b)if(!mA(y,m[b])){const B=m[b];let K=p[b];K=Ze(K);const ne=f.yc(B);if(K instanceof ff)y.push(B);else{const J=pa(K,ne);J!=null&&(y.push(B),E.set(B,J))}}const R=new In(y);return new lA(E,R,f.fieldTransforms)}function JD(r,e,n,s=!1){return pa(n,r.Cc(s?4:3,e))}function pa(r,e){if(dA(r=Ze(r)))return gp("Unsupported field value:",e,r),fA(r,e);if(r instanceof zo)return(function(s,o){if(!uA(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,o){const u=[];let f=0;for(const m of s){let p=pa(m,o.wc(f));p==null&&(p={nullValue:"NULL_VALUE"}),u.push(p),f++}return{arrayValue:{values:u}}})(r,e)}return(function(s,o){if((s=Ze(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return zN(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=st.fromDate(s);return{timestampValue:Oh(o.serializer,u)}}if(s instanceof st){const u=new st(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Oh(o.serializer,u)}}if(s instanceof Ci)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Hn)return{bytesValue:xw(o.serializer,s._byteString)};if(s instanceof dt){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.Sc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Qg(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Ni)return(function(f,m){return{mapValue:{fields:{[aw]:{stringValue:ow},[Ch]:{arrayValue:{values:f.toArray().map((y=>{if(typeof y!="number")throw m.Sc("VectorValues must only contain numeric values.");return Hg(m.serializer,y)}))}}}}}})(s,o);throw o.Sc(`Unsupported field value: ${Kh(s)}`)})(r,e)}function fA(r,e){const n={};return ew(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ds(r,((s,o)=>{const u=pa(o,e.mc(s));u!=null&&(n[s]=u)})),{mapValue:{fields:n}}}function dA(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof st||r instanceof Ci||r instanceof Hn||r instanceof dt||r instanceof zo||r instanceof Ni)}function gp(r,e,n){if(!dA(n)||!Z0(n)){const s=Kh(n);throw s==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+s)}}function pg(r,e,n){if((e=Ze(e))instanceof uf)return e._internalPath;if(typeof e=="string")return pp(r,e);throw kh("Field path arguments must be of type string or ",r,!1,void 0,n)}const eO=new RegExp("[~\\*/\\[\\]]");function pp(r,e,n){if(e.search(eO)>=0)throw kh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new uf(...e.split("."))._internalPath}catch{throw kh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function kh(r,e,n,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let m=`Function ${e}() called with invalid data`;n&&(m+=" (via `toFirestore()`)"),m+=". ";let p="";return(u||f)&&(p+=" (found",u&&(p+=` in field ${s}`),f&&(p+=` in document ${o}`),p+=")"),new se($.INVALID_ARGUMENT,m+r+p)}function mA(r,e){return r.some((n=>n.isEqual(e)))}/**
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
 */class gA{constructor(e,n,s,o,u){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(df("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class tO extends gA{data(){return super.data()}}function df(r,e){return typeof e=="string"?pp(r,e):e instanceof uf?e._internalPath:e._delegate._internalPath}/**
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
 */function pA(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new se($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yp{}class yA extends yp{}function uo(r,e,...n){let s=[];e instanceof yp&&s.push(e),s=s.concat(n),(function(u){const f=u.filter((p=>p instanceof _p)).length,m=u.filter((p=>p instanceof mf)).length;if(f>1||f>0&&m>0)throw new se($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)r=o._apply(r);return r}class mf extends yA{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new mf(e,n,s)}_apply(e){const n=this._parse(e);return _A(e._query,n),new gs(e.firestore,e.converter,sg(e._query,n))}_parse(e){const n=hf(e.firestore);return(function(u,f,m,p,y,E,R){let b;if(y.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new se($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){CT(R,E);const K=[];for(const ne of R)K.push(IT(p,u,ne));b={arrayValue:{values:K}}}else b=IT(p,u,R)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||CT(R,E),b=JD(m,f,R,E==="in"||E==="not-in");return bt.create(y,E,b)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Gr(r,e,n){const s=e,o=df("where",r);return mf._create(o,s,n)}class _p extends yp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new _p(e,n)}_parse(e){const n=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return n.length===1?n[0]:si.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(o,u){let f=o;const m=u.getFlattenedFilters();for(const p of m)_A(f,p),f=sg(f,p)})(e._query,n),new gs(e.firestore,e.converter,sg(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class vp extends yA{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new vp(e,n)}_apply(e){const n=(function(o,u,f){if(o.startAt!==null)throw new se($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new se($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Eu(u,f)})(e._query,this._field,this._direction);return new gs(e.firestore,e.converter,(function(o,u){const f=o.explicitOrderBy.concat([u]);return new Uo(o.path,o.collectionGroup,f,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,n))}}function nO(r,e="asc"){const n=e,s=df("orderBy",r);return vp._create(s,n)}function IT(r,e,n){if(typeof(n=Ze(n))=="string"){if(n==="")throw new se($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gw(e)&&n.indexOf("/")!==-1)throw new se($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(it.fromString(n));if(!de.isDocumentKey(s))throw new se($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return FE(r,new de(s))}if(n instanceof dt)return FE(r,n._key);throw new se($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Kh(n)}.`)}function CT(r,e){if(!Array.isArray(r)||r.length===0)throw new se($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function _A(r,e){const n=(function(o,u){for(const f of o)for(const m of f.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new se($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new se($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class iO{convertValue(e,n="none"){switch(as(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _t(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ss(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return ds(e,((o,u)=>{s[o]=this.convertValue(u,n)})),s}convertVectorValue(e){const n=e.fields?.[Ch].arrayValue?.values?.map((s=>_t(s.doubleValue)));return new Ni(n)}convertGeoPoint(e){return new Ci(_t(e.latitude),_t(e.longitude))}convertArray(e,n){return(e.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Xh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(yu(e));default:return null}}convertTimestamp(e){const n=rs(e);return new st(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=it.fromString(e);He(Uw(s),9688,{name:e});const o=new _u(s.get(1),s.get(3)),u=new de(s.popFirst(5));return o.isEqual(n)||dr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
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
 */function vA(r,e,n){let s;return s=r?r.toFirestore(e):e,s}class ru{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sa extends gA{constructor(e,n,s,o,u,f){super(e,n,s,o,f),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new yh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(df("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new se($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=sa._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}sa._jsonSchemaVersion="firestore/documentSnapshot/1.0",sa._jsonSchema={type:Rt("string",sa._jsonSchemaVersion),bundleSource:Rt("string","DocumentSnapshot"),bundleName:Rt("string"),bundle:Rt("string")};class yh extends sa{data(e={}){return super.data(e)}}class aa{constructor(e,n,s,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new ru(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new yh(this._firestore,this._userDataWriter,s.key,s,new ru(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new se($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map((m=>{const p=new yh(o._firestore,o._userDataWriter,m.doc.key,m.doc,new ru(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:f++}}))}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const p=new yh(o._firestore,o._userDataWriter,m.doc.key,m.doc,new ru(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return m.type!==0&&(y=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),E=f.indexOf(m.doc.key)),{type:rO(m.type),doc:p,oldIndex:y,newIndex:E}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new se($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=aa._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ug.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(n.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function rO(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:r})}}/**
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
 */function ea(r){r=Nn(r,dt);const e=Nn(r.firestore,us);return FD(lf(e),r._key).then((n=>EA(e,r,n)))}aa._jsonSchemaVersion="firestore/querySnapshot/1.0",aa._jsonSchema={type:Rt("string",aa._jsonSchemaVersion),bundleSource:Rt("string","QuerySnapshot"),bundleName:Rt("string"),bundle:Rt("string")};class Ep extends iO{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new dt(this.firestore,null,n)}}function co(r){r=Nn(r,gs);const e=Nn(r.firestore,us),n=lf(e),s=new Ep(e);return pA(r._query),HD(n,r._query).then((o=>new aa(e,s,r,o)))}function sO(r,e,n){r=Nn(r,dt);const s=Nn(r.firestore,us),o=vA(r.converter,e);return Tp(s,[cA(hf(s),"setDoc",r._key,o,r.converter!==null,n).toMutation(r._key,ii.none())])}function hn(r,e,n,...s){r=Nn(r,dt);const o=Nn(r.firestore,us),u=hf(o);let f;return f=typeof(e=Ze(e))=="string"||e instanceof uf?ZD(u,"updateDoc",r._key,e,n,s):WD(u,"updateDoc",r._key,e),Tp(o,[f.toMutation(r._key,ii.exists(!0))])}function jm(r,e){const n=Nn(r.firestore,us),s=rt(r),o=vA(r.converter,e);return Tp(n,[cA(hf(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,ii.exists(!1))]).then((()=>s))}function NT(r,...e){r=Ze(r);let n={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||RT(e[s])||(n=e[s++]);const o={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(RT(e[s])){const p=e[s];e[s]=p.next?.bind(p),e[s+1]=p.error?.bind(p),e[s+2]=p.complete?.bind(p)}let u,f,m;if(r instanceof dt)f=Nn(r.firestore,us),m=Wh(r._key.path),u={next:p=>{e[s]&&e[s](EA(f,r,p))},error:e[s+1],complete:e[s+2]};else{const p=Nn(r,gs);f=Nn(p.firestore,us),m=p._query;const y=new Ep(f);u={next:E=>{e[s]&&e[s](new aa(f,y,p,E))},error:e[s+1],complete:e[s+2]},pA(r._query)}return(function(y,E,R,b){const B=new hp(b),K=new lp(E,B,R);return y.asyncQueue.enqueueAndForget((async()=>sp(await Vh(y),K))),()=>{B.Nu(),y.asyncQueue.enqueueAndForget((async()=>ap(await Vh(y),K)))}})(lf(f),m,o,u)}function Tp(r,e){return(function(s,o){const u=new cr;return s.asyncQueue.enqueueAndForget((async()=>OD(await qD(s),o,u))),u.promise})(lf(r),e)}function EA(r,e,n){const s=n.docs.get(e._key),o=new Ep(r);return new sa(r,o,e._key,s,new ru(n.hasPendingWrites,n.fromCache),e.converter)}function na(){return new fp("serverTimestamp")}function oh(...r){return new dp("arrayUnion",r)}function DT(...r){return new mp("arrayRemove",r)}(function(e,n=!0){(function(o){Vo=o})(Mo),ri(new Gn("firestore",((s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new us(new ZC(s.getProvider("auth-internal")),new tN(f,s.getProvider("app-check-internal")),(function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new se($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _u(y.options.projectId,E)})(f,o),f);return u={useFetchStreams:n,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),gn(DE,OE,e),gn(DE,OE,"esm2020")})();/**
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
 */const aO="type.googleapis.com/google.protobuf.Int64Value",oO="type.googleapis.com/google.protobuf.UInt64Value";function TA(r,e){const n={};for(const s in r)r.hasOwnProperty(s)&&(n[s]=e(r[s]));return n}function Lh(r){if(r==null)return null;if(r instanceof Number&&(r=r.valueOf()),typeof r=="number"&&isFinite(r)||r===!0||r===!1||Object.prototype.toString.call(r)==="[object String]")return r;if(r instanceof Date)return r.toISOString();if(Array.isArray(r))return r.map(e=>Lh(e));if(typeof r=="function"||typeof r=="object")return TA(r,e=>Lh(e));throw new Error("Data cannot be encoded in JSON: "+r)}function Oo(r){if(r==null)return r;if(r["@type"])switch(r["@type"]){case aO:case oO:{const e=Number(r.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+r);return e}default:throw new Error("Data cannot be decoded from JSON: "+r)}return Array.isArray(r)?r.map(e=>Oo(e)):typeof r=="function"||typeof r=="object"?TA(r,e=>Oo(e)):r}/**
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
 */const OT={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class mn extends Kn{constructor(e,n,s){super(`${wp}/${e}`,n||""),this.details=s,Object.setPrototypeOf(this,mn.prototype)}}function lO(r){if(r>=200&&r<300)return"ok";switch(r){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Uh(r,e){let n=lO(r),s=n,o;try{const u=e&&e.error;if(u){const f=u.status;if(typeof f=="string"){if(!OT[f])return new mn("internal","internal");n=OT[f],s=f}const m=u.message;typeof m=="string"&&(s=m),o=u.details,o!==void 0&&(o=Oo(o))}}catch{}return n==="ok"?null:new mn(n,s,o)}/**
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
 */const yg="us-central1",cO=/^data: (.*?)(?:\n|$)/;function hO(r){let e=null;return{promise:new Promise((n,s)=>{e=setTimeout(()=>{s(new mn("deadline-exceeded","deadline-exceeded"))},r)}),cancel:()=>{e&&clearTimeout(e)}}}class fO{constructor(e,n,s,o,u=yg,f=(...m)=>fetch(...m)){this.app=e,this.fetchImpl=f,this.emulatorOrigin=null,this.contextProvider=new uO(e,n,s,o),this.cancelAllRequests=new Promise(m=>{this.deleteService=()=>Promise.resolve(m())});try{const m=new URL(u);this.customDomain=m.origin+(m.pathname==="/"?"":m.pathname),this.region=yg}catch{this.customDomain=null,this.region=u}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function dO(r,e,n){const s=cs(e);r.emulatorOrigin=`http${s?"s":""}://${e}:${n}`,s&&(Eg(r.emulatorOrigin+"/backends"),Tg("Functions",!0))}function mO(r,e,n){const s=o=>pO(r,e,o,{});return s.stream=(o,u)=>_O(r,e,o,u),s}function wA(r){return r.emulatorOrigin&&cs(r.emulatorOrigin)?"include":void 0}async function gO(r,e,n,s,o){n["Content-Type"]="application/json";let u;try{u=await s(r,{method:"POST",body:JSON.stringify(e),headers:n,credentials:wA(o)})}catch{return{status:0,json:null}}let f=null;try{f=await u.json()}catch{}return{status:u.status,json:f}}async function AA(r,e){const n={},s=await r.contextProvider.getContext(e.limitedUseAppCheckTokens);return s.authToken&&(n.Authorization="Bearer "+s.authToken),s.messagingToken&&(n["Firebase-Instance-ID-Token"]=s.messagingToken),s.appCheckToken!==null&&(n["X-Firebase-AppCheck"]=s.appCheckToken),n}function pO(r,e,n,s){const o=r._url(e);return yO(r,o,n,s)}async function yO(r,e,n,s){n=Lh(n);const o={data:n},u=await AA(r,s),f=s.timeout||7e4,m=hO(f),p=await Promise.race([gO(e,o,u,r.fetchImpl,r),m.promise,r.cancelAllRequests]);if(m.cancel(),!p)throw new mn("cancelled","Firebase Functions instance was deleted.");const y=Uh(p.status,p.json);if(y)throw y;if(!p.json)throw new mn("internal","Response is not valid JSON object.");let E=p.json.data;if(typeof E>"u"&&(E=p.json.result),typeof E>"u")throw new mn("internal","Response is missing data field.");return{data:Oo(E)}}function _O(r,e,n,s){const o=r._url(e);return vO(r,o,n,s||{})}async function vO(r,e,n,s){n=Lh(n);const o={data:n},u=await AA(r,s);u["Content-Type"]="application/json",u.Accept="text/event-stream";let f;try{f=await r.fetchImpl(e,{method:"POST",body:JSON.stringify(o),headers:u,signal:s?.signal,credentials:wA(r)})}catch(b){if(b instanceof Error&&b.name==="AbortError"){const K=new mn("cancelled","Request was cancelled.");return{data:Promise.reject(K),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(K)}}}}}}const B=Uh(0,null);return{data:Promise.reject(B),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(B)}}}}}}let m,p;const y=new Promise((b,B)=>{m=b,p=B});s?.signal?.addEventListener("abort",()=>{const b=new mn("cancelled","Request was cancelled.");p(b)});const E=f.body.getReader(),R=EO(E,m,p,s?.signal);return{stream:{[Symbol.asyncIterator](){const b=R.getReader();return{async next(){const{value:B,done:K}=await b.read();return{value:B,done:K}},async return(){return await b.cancel(),{done:!0,value:void 0}}}}},data:y}}function EO(r,e,n,s){const o=(f,m)=>{const p=f.match(cO);if(!p)return;const y=p[1];try{const E=JSON.parse(y);if("result"in E){e(Oo(E.result));return}if("message"in E){m.enqueue(Oo(E.message));return}if("error"in E){const R=Uh(0,E);m.error(R),n(R);return}}catch(E){if(E instanceof mn){m.error(E),n(E);return}}},u=new TextDecoder;return new ReadableStream({start(f){let m="";return p();async function p(){if(s?.aborted){const y=new mn("cancelled","Request was cancelled");return f.error(y),n(y),Promise.resolve()}try{const{value:y,done:E}=await r.read();if(E){m.trim()&&o(m.trim(),f),f.close();return}if(s?.aborted){const b=new mn("cancelled","Request was cancelled");f.error(b),n(b),await r.cancel();return}m+=u.decode(y,{stream:!0});const R=m.split(`
`);m=R.pop()||"";for(const b of R)b.trim()&&o(b.trim(),f);return p()}catch(y){const E=y instanceof mn?y:Uh(0,null);f.error(E),n(E)}}},cancel(){return r.cancel()}})}const xT="@firebase/functions",MT="0.13.1";/**
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
 */const TO="auth-internal",wO="app-check-internal",AO="messaging-internal";function SO(r){const e=(n,{instanceIdentifier:s})=>{const o=n.getProvider("app").getImmediate(),u=n.getProvider(TO),f=n.getProvider(AO),m=n.getProvider(wO);return new fO(o,u,f,m,s)};ri(new Gn(wp,e,"PUBLIC").setMultipleInstances(!0)),gn(xT,MT,r),gn(xT,MT,"esm2020")}/**
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
 */function bO(r=Fh(),e=yg){const s=hs(Ze(r),wp).getImmediate({identifier:e}),o=KT("functions");return o&&RO(s,...o),s}function RO(r,e,n){dO(Ze(r),e,n)}function ar(r,e,n){return mO(Ze(r),e)}SO();const SA="@firebase/installations",Ap="0.6.19";/**
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
 */const bA=1e4,RA=`w:${Ap}`,IA="FIS_v2",IO="https://firebaseinstallations.googleapis.com/v1",CO=3600*1e3,NO="installations",DO="Installations";/**
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
 */const OO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ha=new da(NO,DO,OO);function CA(r){return r instanceof Kn&&r.code.includes("request-failed")}/**
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
 */function NA({projectId:r}){return`${IO}/projects/${r}/installations`}function DA(r){return{token:r.token,requestStatus:2,expiresIn:MO(r.expiresIn),creationTime:Date.now()}}async function OA(r,e){const s=(await e.json()).error;return ha.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function xA({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function xO(r,{refreshToken:e}){const n=xA(r);return n.append("Authorization",PO(e)),n}async function MA(r){const e=await r();return e.status>=500&&e.status<600?r():e}function MO(r){return Number(r.replace("s","000"))}function PO(r){return`${IA} ${r}`}/**
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
 */async function VO({appConfig:r,heartbeatServiceProvider:e},{fid:n}){const s=NA(r),o=xA(r),u=e.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={fid:n,authVersion:IA,appId:r.appId,sdkVersion:RA},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await MA(()=>fetch(s,m));if(p.ok){const y=await p.json();return{fid:y.fid||n,registrationStatus:2,refreshToken:y.refreshToken,authToken:DA(y.authToken)}}else throw await OA("Create Installation",p)}/**
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
 */function PA(r){return new Promise(e=>{setTimeout(e,r)})}/**
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
 */const VA=new Map;function kA(r,e){const n=gf(r);LA(n,e),zO(n,e)}function LA(r,e){const n=VA.get(r);if(n)for(const s of n)s(e)}function zO(r,e){const n=BO();n&&n.postMessage({key:r,fid:e}),qO()}let ia=null;function BO(){return!ia&&"BroadcastChannel"in self&&(ia=new BroadcastChannel("[Firebase] FID Change"),ia.onmessage=r=>{LA(r.data.key,r.data.fid)}),ia}function qO(){VA.size===0&&ia&&(ia.close(),ia=null)}/**
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
 */const FO="firebase-installations-database",HO=1,fa="firebase-installations-store";let zm=null;function Sp(){return zm||(zm=t0(FO,HO,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(fa)}}})),zm}async function jh(r,e){const n=gf(r),o=(await Sp()).transaction(fa,"readwrite"),u=o.objectStore(fa),f=await u.get(n);return await u.put(e,n),await o.done,(!f||f.fid!==e.fid)&&kA(r,e.fid),e}async function UA(r){const e=gf(r),s=(await Sp()).transaction(fa,"readwrite");await s.objectStore(fa).delete(e),await s.done}async function pf(r,e){const n=gf(r),o=(await Sp()).transaction(fa,"readwrite"),u=o.objectStore(fa),f=await u.get(n),m=e(f);return m===void 0?await u.delete(n):await u.put(m,n),await o.done,m&&(!f||f.fid!==m.fid)&&kA(r,m.fid),m}/**
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
 */async function bp(r){let e;const n=await pf(r.appConfig,s=>{const o=GO(s),u=YO(r,o);return e=u.registrationPromise,u.installationEntry});return n.fid===_g?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function GO(r){const e=r||{fid:UO(),registrationStatus:0};return jA(e)}function YO(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(ha.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=KO(r,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:QO(r)}:{installationEntry:e}}async function KO(r,e){try{const n=await VO(r,e);return jh(r.appConfig,n)}catch(n){throw CA(n)&&n.customData.serverCode===409?await UA(r.appConfig):await jh(r.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function QO(r){let e=await PT(r.appConfig);for(;e.registrationStatus===1;)await PA(100),e=await PT(r.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await bp(r);return s||n}return e}function PT(r){return pf(r,e=>{if(!e)throw ha.create("installation-not-found");return jA(e)})}function jA(r){return $O(r)?{fid:r.fid,registrationStatus:0}:r}function $O(r){return r.registrationStatus===1&&r.registrationTime+bA<Date.now()}/**
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
 */async function XO({appConfig:r,heartbeatServiceProvider:e},n){const s=WO(r,n),o=xO(r,n),u=e.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={installation:{sdkVersion:RA,appId:r.appId}},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await MA(()=>fetch(s,m));if(p.ok){const y=await p.json();return DA(y)}else throw await OA("Generate Auth Token",p)}function WO(r,{fid:e}){return`${NA(r)}/${e}/authTokens:generate`}/**
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
 */async function Rp(r,e=!1){let n;const s=await pf(r.appConfig,u=>{if(!zA(u))throw ha.create("not-registered");const f=u.authToken;if(!e&&ex(f))return u;if(f.requestStatus===1)return n=ZO(r,e),u;{if(!navigator.onLine)throw ha.create("app-offline");const m=nx(u);return n=JO(r,m),m}});return n?await n:s.authToken}async function ZO(r,e){let n=await VT(r.appConfig);for(;n.authToken.requestStatus===1;)await PA(100),n=await VT(r.appConfig);const s=n.authToken;return s.requestStatus===0?Rp(r,e):s}function VT(r){return pf(r,e=>{if(!zA(e))throw ha.create("not-registered");const n=e.authToken;return ix(n)?{...e,authToken:{requestStatus:0}}:e})}async function JO(r,e){try{const n=await XO(r,e),s={...e,authToken:n};return await jh(r.appConfig,s),n}catch(n){if(CA(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await UA(r.appConfig);else{const s={...e,authToken:{requestStatus:0}};await jh(r.appConfig,s)}throw n}}function zA(r){return r!==void 0&&r.registrationStatus===2}function ex(r){return r.requestStatus===2&&!tx(r)}function tx(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+CO}function nx(r){const e={requestStatus:1,requestTime:Date.now()};return{...r,authToken:e}}function ix(r){return r.requestStatus===1&&r.requestTime+bA<Date.now()}/**
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
 */async function rx(r){const e=r,{installationEntry:n,registrationPromise:s}=await bp(e);return s?s.catch(console.error):Rp(e).catch(console.error),n.fid}/**
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
 */async function sx(r,e=!1){const n=r;return await ax(n),(await Rp(n,e)).token}async function ax(r){const{registrationPromise:e}=await bp(r);e&&await e}/**
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
 */const BA="installations",lx="installations-internal",ux=r=>{const e=r.getProvider("app").getImmediate(),n=ox(e),s=hs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},cx=r=>{const e=r.getProvider("app").getImmediate(),n=hs(e,BA).getImmediate();return{getId:()=>rx(n),getToken:o=>sx(n,o)}};function hx(){ri(new Gn(BA,ux,"PUBLIC")),ri(new Gn(lx,cx,"PRIVATE"))}hx();gn(SA,Ap);gn(SA,Ap,"esm2020");/**
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
 */function yx(r){if(!r.startsWith(Ip)){const e=Dn.create("invalid-gtag-resource",{gtagURL:r});return pn.warn(e.message),""}return r}function qA(r){return Promise.all(r.map(e=>e.catch(n=>n)))}function _x(r,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,e)),n}function vx(r,e){const n=_x("firebase-js-sdk-policy",{createScriptURL:yx}),s=document.createElement("script"),o=`${Ip}?l=${r}&id=${e}`;s.src=n?n?.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function Ex(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function Tx(r,e,n,s,o,u){const f=s[o];try{if(f)await e[f];else{const p=(await qA(n)).find(y=>y.measurementId===o);p&&await e[p.appId]}}catch(m){pn.error(m)}r("config",o,u)}async function wx(r,e,n,s,o){try{let u=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const m=await qA(n);for(const p of f){const y=m.find(R=>R.measurementId===p),E=y&&e[y.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),r("event",s,o||{})}catch(u){pn.error(u)}}function Ax(r,e,n,s){async function o(u,...f){try{if(u==="event"){const[m,p]=f;await wx(r,e,n,m,p)}else if(u==="config"){const[m,p]=f;await Tx(r,e,n,s,m,p)}else if(u==="consent"){const[m,p]=f;r("consent",m,p)}else if(u==="get"){const[m,p,y]=f;r("get",m,p,y)}else if(u==="set"){const[m]=f;r("set",m)}else r(u,...f)}catch(m){pn.error(m)}}return o}function Sx(r,e,n,s,o){let u=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=Ax(u,r,e,n),{gtagCore:u,wrappedGtag:window[o]}}function bx(r){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ip)&&n.src.includes(r))return n;return null}/**
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
 */const Rx=30,Ix=1e3;class Cx{constructor(e={},n=Ix){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const FA=new Cx;function Nx(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function Dx(r){const{appId:e,apiKey:n}=r,s={method:"GET",headers:Nx(n)},o=gx.replace("{app-id}",e),u=await fetch(o,s);if(u.status!==200&&u.status!==304){let f="";try{const m=await u.json();m.error?.message&&(f=m.error.message)}catch{}throw Dn.create("config-fetch-failed",{httpStatus:u.status,responseMessage:f})}return u.json()}async function Ox(r,e=FA,n){const{appId:s,apiKey:o,measurementId:u}=r.options;if(!s)throw Dn.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw Dn.create("no-api-key")}const f=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new Px;return setTimeout(async()=>{m.abort()},mx),HA({appId:s,apiKey:o,measurementId:u},f,m,e)}async function HA(r,{throttleEndTimeMillis:e,backoffCount:n},s,o=FA){const{appId:u,measurementId:f}=r;try{await xx(s,e)}catch(m){if(f)return pn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${m?.message}]`),{appId:u,measurementId:f};throw m}try{const m=await Dx(r);return o.deleteThrottleMetadata(u),m}catch(m){const p=m;if(!Mx(p)){if(o.deleteThrottleMetadata(u),f)return pn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${p?.message}]`),{appId:u,measurementId:f};throw m}const y=Number(p?.customData?.httpStatus)===503?Wv(n,o.intervalMillis,Rx):Wv(n,o.intervalMillis),E={throttleEndTimeMillis:Date.now()+y,backoffCount:n+1};return o.setThrottleMetadata(u,E),pn.debug(`Calling attemptFetch again in ${y} millis`),HA(r,E,s,o)}}function xx(r,e){return new Promise((n,s)=>{const o=Math.max(e-Date.now(),0),u=setTimeout(n,o);r.addEventListener(()=>{clearTimeout(u),s(Dn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Mx(r){if(!(r instanceof Kn)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class Px{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Vx(r,e,n,s,o){if(o&&o.global){r("event",n,s);return}else{const u=await e,f={...s,send_to:u};r("event",n,f)}}/**
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
 */async function kx(){if(WT())try{await ZT()}catch(r){return pn.warn(Dn.create("indexeddb-unavailable",{errorInfo:r?.toString()}).message),!1}else return pn.warn(Dn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Lx(r,e,n,s,o,u,f){const m=Ox(r);m.then(b=>{n[b.measurementId]=b.appId,r.options.measurementId&&b.measurementId!==r.options.measurementId&&pn.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${b.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(b=>pn.error(b)),e.push(m);const p=kx().then(b=>{if(b)return s.getId()}),[y,E]=await Promise.all([m,p]);bx(u)||vx(u,y.measurementId),o("js",new Date);const R=f?.config??{};return R[dx]="firebase",R.update=!0,E!=null&&(R[fx]=E),o("config",y.measurementId,R),y.measurementId}/**
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
 */class Ux{constructor(e){this.app=e}_delete(){return delete du[this.app.options.appId],Promise.resolve()}}let du={},kT=[];const LT={};let qm="dataLayer",jx="gtag",UT,GA,jT=!1;function zx(){const r=[];if(XT()&&r.push("This is a browser extension environment."),Hb()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=Dn.create("invalid-analytics-context",{errorInfo:e});pn.warn(n.message)}}function Bx(r,e,n){zx();const s=r.options.appId;if(!s)throw Dn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)pn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Dn.create("no-api-key");if(du[s]!=null)throw Dn.create("already-exists",{id:s});if(!jT){Ex(qm);const{wrappedGtag:u,gtagCore:f}=Sx(du,kT,LT,qm,jx);GA=u,UT=f,jT=!0}return du[s]=Lx(r,kT,LT,e,UT,qm,n),new Ux(r)}function qx(r=Fh()){r=Ze(r);const e=hs(r,zh);return e.isInitialized()?e.getImmediate():Fx(r)}function Fx(r,e={}){const n=hs(r,zh);if(n.isInitialized()){const o=n.getImmediate();if(Di(e,n.getOptions()))return o;throw Dn.create("already-initialized")}return n.initialize({options:e})}function Hx(r,e,n,s){r=Ze(r),Vx(GA,du[r.app.options.appId],e,n,s).catch(o=>pn.error(o))}const zT="@firebase/analytics",BT="0.10.18";function Gx(){ri(new Gn(zh,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return Bx(s,o,n)},"PUBLIC")),ri(new Gn("analytics-internal",r,"PRIVATE")),gn(zT,BT),gn(zT,BT,"esm2020");function r(e){try{const n=e.getProvider(zh).getImmediate();return{logEvent:(s,o,u)=>Hx(n,s,o,u)}}catch(n){throw Dn.create("interop-component-reg-failed",{reason:n})}}}Gx();const Yx={apiKey:"",authDomain:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:"",measurementId:""},yf=n0(Yx),sr=YC(yf),ze=YD(yf),or=bO(yf);typeof window<"u"&&qx(yf);class Kx{currentUser=null;recaptchaVerifier=null;constructor(){Wm(sr,e=>{this.currentUser=e,e&&this.updateLastLogin(e.uid)})}async signUp(e,n,s,o,u){try{const m=(await p1(sr,e,n)).user;await E1(m,{displayName:s}),await _1(m);const p={uid:m.uid,email:m.email,displayName:s,age:o,gender:u,createdAt:na(),lastLogin:na(),emailVerified:!1,twoFactorEnabled:!1,activeInnermosts:[],subscriptionStatus:"free"};return await sO(rt(ze,"users",m.uid),p),p}catch(f){throw new Error(`Signup failed: ${f.message}`)}}async signIn(e,n){try{const o=(await y1(sr,e,n)).user,u=await ea(rt(ze,"users",o.uid));if(!u.exists())throw new Error("User profile not found");const f=u.data();return f.twoFactorEnabled&&_E(o).enrolledFactors.length>0&&console.log("2FA verification required"),f}catch(s){throw new Error(`Login failed: ${s.message}`)}}async signOutUser(){try{await A1(sr),this.currentUser=null}catch(e){throw new Error(`Logout failed: ${e.message}`)}}async resetPassword(e){try{await g1(sr,e)}catch(n){throw new Error(`Password reset failed: ${n.message}`)}}getCurrentUser(){return this.currentUser}async getUserProfile(e){try{const n=await ea(rt(ze,"users",e));return n.exists()?n.data():null}catch(n){return console.error("Error fetching user profile:",n),null}}async updateLastLogin(e){try{await hn(rt(ze,"users",e),{lastLogin:na()})}catch(n){console.error("Error updating last login:",n)}}async setupTwoFactor(e){if(!this.currentUser)throw new Error("No user logged in");try{this.recaptchaVerifier||(this.recaptchaVerifier=new K1(sr,"recaptcha-container",{size:"invisible"}));const s=await new Jr(sr).verifyPhoneNumber(e,this.recaptchaVerifier);sessionStorage.setItem("verificationId",s);return}catch(n){throw new Error(`2FA setup failed: ${n.message}`)}}async verifyTwoFactorCode(e){if(!this.currentUser)throw new Error("No user logged in");try{const n=sessionStorage.getItem("verificationId");if(!n)throw new Error("No verification in progress");const s=Jr.credential(n,e),o=q0.assertion(s);await _E(this.currentUser).enroll(o,"Phone Number"),await hn(rt(ze,"users",this.currentUser.uid),{twoFactorEnabled:!0}),sessionStorage.removeItem("verificationId")}catch(n){throw new Error(`2FA verification failed: ${n.message}`)}}isAuthenticated(){return this.currentUser!==null}async waitForAuth(){return new Promise(e=>{const n=Wm(sr,s=>{n(),e(s)})})}}const ei=new Kx;class Qx{async createMutualPairing(e,n,s){try{const o=await ea(rt(ze,"users",e)),u=await ea(rt(ze,"users",n));if(!o.exists()||!u.exists())throw new Error("One or both users not found");const f=o.data(),m=u.data(),p={partnerA:e,partnerB:n,partnerAEmail:f.email,partnerBEmail:m.email,status:"active",pairingCode:s,createdAt:na()},y=await jm(rr(ze,"innermosts"),p);return await hn(rt(ze,"users",e),{activeInnermosts:oh(y.id)}),await hn(rt(ze,"users",n),{activeInnermosts:oh(y.id)}),await this.createWillingBox(y.id,e,n),{...p,id:y.id}}catch(o){throw new Error(`Failed to create mutual pairing: ${o.message}`)}}async breakPartnership(e,n){try{const s=await ea(rt(ze,"innermosts",e));if(!s.exists())throw new Error("Partnership not found");const o=s.data();if(o.partnerA!==n&&o.partnerB!==n)throw new Error("You are not part of this partnership");await hn(rt(ze,"innermosts",e),{status:"ended",endedAt:na(),endedBy:n}),await hn(rt(ze,"users",o.partnerA),{activeInnermosts:DT(e)}),await hn(rt(ze,"users",o.partnerB),{activeInnermosts:DT(e)})}catch(s){throw new Error(`Failed to break partnership: ${s.message}`)}}async findUserByEmail(e){try{const n=uo(rr(ze,"users"),Gr("email","==",e)),s=await co(n);if(s.empty)return null;const o=s.docs[0];return{id:o.id,...o.data()}}catch(n){return console.error("Error finding user:",n),null}}async createInnermost(e,n,s){try{const o=this.generatePairingCode(),u={partnerA:e,partnerB:"",partnerAEmail:s,partnerBEmail:n,status:"pending",pairingCode:o,createdAt:na()},f=await jm(rr(ze,"innermosts"),u);return await hn(rt(ze,"users",e),{activeInnermosts:oh(f.id)}),{...u,id:f.id}}catch(o){throw new Error(`Failed to create Innermost: ${o.message}`)}}async acceptInnermost(e,n){try{const s=uo(rr(ze,"innermosts"),Gr("pairingCode","==",e),Gr("status","==","pending")),o=await co(s);if(o.empty)throw new Error("Invalid or expired pairing code");const u=o.docs[0],f=u.data();return await hn(rt(ze,"innermosts",u.id),{partnerB:n,status:"active",pairingCode:null}),await hn(rt(ze,"users",n),{activeInnermosts:oh(u.id)}),await this.createWillingBox(u.id,f.partnerA,n),{...f,id:u.id,partnerB:n,status:"active"}}catch(s){throw new Error(`Failed to accept Innermost: ${s.message}`)}}async getUserInnermosts(e){try{const n=uo(rr(ze,"innermosts"),Gr("partnerA","==",e)),s=uo(rr(ze,"innermosts"),Gr("partnerB","==",e)),[o,u]=await Promise.all([co(n),co(s)]),f=[];return o.forEach(m=>{f.push({id:m.id,...m.data()})}),u.forEach(m=>{f.push({id:m.id,...m.data()})}),f}catch(n){throw new Error(`Failed to get innermosts: ${n.message}`)}}async createWillingBox(e,n,s){try{const o={innermostId:e,partnerA:n,partnerB:s,partnerAWishList:[],partnerBWishList:[],partnerAWillingList:[],partnerBWillingList:[],weekNumber:this.getCurrentWeekNumber(),status:"planting_trees",isLocked:!1,createdAt:na()},u=await jm(rr(ze,"willingBoxes"),o);return{...o,id:u.id}}catch(o){throw new Error(`Failed to create WillingBox: ${o.message}`)}}async getCurrentWillingBox(e){try{const n=this.getCurrentWeekNumber(),s=uo(rr(ze,"willingBoxes"),Gr("innermostId","==",e),Gr("weekNumber","==",n)),o=await co(s);if(o.empty)return null;const u=o.docs[0];return{id:u.id,...u.data()}}catch(n){return console.error("Failed to get WillingBox:",n),null}}async updateWishList(e,n,s,o){try{const u=o?{partnerAWishList:s}:{partnerBWishList:s};await hn(rt(ze,"willingBoxes",e),u);const m=(await ea(rt(ze,"willingBoxes",e))).data();m.partnerAWishList.length===12&&m.partnerBWishList.length===12&&await hn(rt(ze,"willingBoxes",e),{status:"selecting_willing"})}catch(u){throw new Error(`Failed to update WishList: ${u.message}`)}}async updateWillingList(e,n,s,o){try{const u=o?{partnerAWillingList:s}:{partnerBWillingList:s};await hn(rt(ze,"willingBoxes",e),u);const m=(await ea(rt(ze,"willingBoxes",e))).data();m.partnerAWillingList.length===3&&m.partnerBWillingList.length===3&&await hn(rt(ze,"willingBoxes",e),{status:"guessing"})}catch(u){throw new Error(`Failed to update WillingList: ${u.message}`)}}subscribeToWillingBox(e,n){return NT(rt(ze,"willingBoxes",e),s=>{s.exists()&&n({id:s.id,...s.data()})})}subscribeToInnermost(e,n){return NT(rt(ze,"innermosts",e),s=>{s.exists()&&n({id:s.id,...s.data()})})}generatePairingCode(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";let n="";for(let s=0;s<6;s++)n+=e.charAt(Math.floor(Math.random()*e.length));return n}getCurrentWeekNumber(){const e=new Date,n=new Date(e.getFullYear(),0,1),s=e.getTime()-n.getTime(),o=1e3*60*60*24*7;return Math.floor(s/o)+1}async getInnermostHistory(e){try{const n=uo(rr(ze,"willingBoxes"),Gr("innermostId","==",e),nO("weekNumber","desc")),s=await co(n),o=[];return s.forEach(u=>{o.push({id:u.id,...u.data()})}),o}catch(n){throw new Error(`Failed to get history: ${n.message}`)}}}const ti=new Qx;class $x{async sendPairingInvite(e){try{const n=ar(or,"sendPairingInvite"),s={toEmail:e.toEmail,fromName:e.fromName,pairingCode:e.pairingCode,message:e.message||"",appUrl:window.location.origin};if(!(await n(s)).data.success)throw new Error("Failed to send invitation email")}catch(n){throw console.error("Email send error:",n),new Error(`Failed to send invitation: ${n.message}`)}}async sendWeeklyReminder(e,n){try{await ar(or,"sendWeeklyReminder")({userId:e,partnerName:n,weekNumber:this.getCurrentWeekNumber()})}catch(s){console.error("Reminder send error:",s)}}async sendGuessResults(e,n,s){try{await ar(or,"sendGuessResults")({userId:e,score:n,correctGuesses:s,weekNumber:this.getCurrentWeekNumber()})}catch(o){console.error("Results send error:",o)}}async sendCustomPasswordReset(e){try{await ar(or,"sendCustomPasswordReset")({email:e})}catch(n){throw console.error("Password reset error:",n),new Error(`Failed to send password reset: ${n.message}`)}}async send2FAConfirmation(e){try{await ar(or,"send2FAConfirmation")({userId:e})}catch(n){console.error("2FA confirmation error:",n)}}getCurrentWeekNumber(){const e=new Date,n=new Date(e.getFullYear(),0,1),s=e.getTime()-n.getTime(),o=1e3*60*60*24*7;return Math.floor(s/o)+1}}const Fm=new $x,Xx=({onAuthSuccess:r})=>{const[e,n]=Ve.useState("login"),[s,o]=Ve.useState(""),[u,f]=Ve.useState(""),[m,p]=Ve.useState(""),[y,E]=Ve.useState(""),[R,b]=Ve.useState(""),[B,K]=Ve.useState("male"),[ne,J]=Ve.useState(!1),[Ee,ae]=Ve.useState(""),[ce,Se]=Ve.useState(""),[me,Oe]=Ve.useState(""),[M,S]=Ve.useState(!1),[C,O]=Ve.useState(""),[x,V]=Ve.useState("");Ve.useEffect(()=>{const fe=new URLSearchParams(window.location.search).get("code");fe&&Oe(fe)},[]),Ve.useEffect(()=>{(async()=>{const fe=await ei.waitForAuth();if(fe){const A=await ei.getUserProfile(fe.uid);A&&r(A)}})()},[r]);const N=async ee=>{if(ee.preventDefault(),u!==m){ae("Passwords do not match");return}if(u.length<6){ae("Password must be at least 6 characters");return}J(!0),ae("");try{const fe=await ei.signUp(s,u,y,parseInt(R),B);if(me)try{await ti.acceptInnermost(me,fe.uid),Se("Account created and pairing accepted! Check your email to verify your account.")}catch{Se("Account created! Check your email to verify your account. Pairing code was invalid.")}else Se("Account created! Check your email to verify your account.");setTimeout(()=>{r(fe)},2e3)}catch(fe){ae(fe.message||"Signup failed")}finally{J(!1)}},mt=async ee=>{ee.preventDefault(),J(!0),ae("");try{const fe=await ei.signIn(s,u);if(me&&fe)try{await ti.acceptInnermost(me,fe.uid),Se("Logged in and pairing accepted!")}catch(A){console.log("Could not accept pairing:",A)}r(fe)}catch(fe){fe.message.includes("multi-factor")?(S(!0),ae("Please complete 2FA verification")):ae(fe.message||"Login failed")}finally{J(!1)}},et=async ee=>{ee.preventDefault(),J(!0),ae("");try{await ei.resetPassword(s),Se("Password reset email sent! Check your inbox."),setTimeout(()=>n("login"),3e3)}catch(fe){ae(fe.message||"Password reset failed")}finally{J(!1)}},G=async()=>{if(!C){ae("Please enter your phone number");return}J(!0),ae("");try{await ei.setupTwoFactor(C),Se("Verification code sent to your phone")}catch(ee){ae(ee.message||"2FA setup failed")}finally{J(!1)}},re=async()=>{if(!x){ae("Please enter the verification code");return}J(!0),ae("");try{await ei.verifyTwoFactorCode(x),Se("2FA enabled successfully!"),S(!1);const ee=ei.getCurrentUser();if(ee){const fe=await ei.getUserProfile(ee.uid);fe&&r(fe)}}catch(ee){ae(ee.message||"2FA verification failed")}finally{J(!1)}};return P.jsx("div",{className:"min-h-screen flex items-center justify-center",style:{background:"linear-gradient(135deg, #4a8b4a 0%, #6B5B45 100%)"},children:P.jsxs("div",{className:"bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4",children:[P.jsxs("div",{className:"text-center mb-8",children:[P.jsx("h1",{className:"text-3xl font-bold text-green-800 mb-2",children:"🌳 The Willing Tree"}),P.jsx("p",{className:"text-gray-600",children:"Grow your relationship through caring actions"})]}),me&&P.jsx("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4 mb-6",children:P.jsxs("p",{className:"text-green-800 text-sm",children:[P.jsx("strong",{children:"Pairing Code Detected:"})," ",me,P.jsx("br",{}),e==="signup"?"Sign up to accept the invitation":"Log in to accept the invitation"]})}),Ee&&P.jsx("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4 mb-6",children:P.jsx("p",{className:"text-red-800 text-sm",children:Ee})}),ce&&P.jsx("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4 mb-6",children:P.jsx("p",{className:"text-green-800 text-sm",children:ce})}),M?P.jsxs("div",{children:[P.jsx("h2",{className:"text-xl font-semibold text-gray-800 mb-4",children:"Two-Factor Authentication"}),sessionStorage.getItem("verificationId")?P.jsxs("form",{onSubmit:ee=>{ee.preventDefault(),re()},children:[P.jsxs("div",{className:"mb-4",children:[P.jsx("label",{className:"block text-gray-700 text-sm font-medium mb-2",children:"Verification Code"}),P.jsx("input",{type:"text",value:x,onChange:ee=>V(ee.target.value),placeholder:"123456",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",required:!0})]}),P.jsx("button",{type:"submit",disabled:ne,className:"w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors",children:ne?"Verifying...":"Verify Code"})]}):P.jsxs("form",{onSubmit:ee=>{ee.preventDefault(),G()},children:[P.jsxs("div",{className:"mb-4",children:[P.jsx("label",{className:"block text-gray-700 text-sm font-medium mb-2",children:"Phone Number"}),P.jsx("input",{type:"tel",value:C,onChange:ee=>O(ee.target.value),placeholder:"+1234567890",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",required:!0})]}),P.jsx("button",{type:"submit",disabled:ne,className:"w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors",children:ne?"Sending...":"Send Verification Code"})]}),P.jsx("div",{id:"recaptcha-container"})]}):P.jsxs(P.Fragment,{children:[e==="login"&&P.jsxs("form",{onSubmit:mt,children:[P.jsxs("div",{className:"mb-4",children:[P.jsx("label",{className:"block text-gray-700 text-sm font-medium mb-2",children:"Email"}),P.jsx("input",{type:"email",value:s,onChange:ee=>o(ee.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",required:!0})]}),P.jsxs("div",{className:"mb-6",children:[P.jsx("label",{className:"block text-gray-700 text-sm font-medium mb-2",children:"Password"}),P.jsx("input",{type:"password",value:u,onChange:ee=>f(ee.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",required:!0})]}),P.jsx("button",{type:"submit",disabled:ne,className:"w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors",children:ne?"Logging in...":"Log In"}),P.jsx("div",{className:"mt-4 text-center",children:P.jsx("button",{type:"button",onClick:()=>n("reset"),className:"text-green-600 hover:text-green-700 text-sm",children:"Forgot Password?"})})]}),e==="signup"&&P.jsxs("form",{onSubmit:N,children:[P.jsxs("div",{className:"mb-4",children:[P.jsx("label",{className:"block text-gray-700 text-sm font-medium mb-2",children:"Display Name"}),P.jsx("input",{type:"text",value:y,onChange:ee=>E(ee.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",required:!0})]}),P.jsxs("div",{className:"mb-4",children:[P.jsx("label",{className:"block text-gray-700 text-sm font-medium mb-2",children:"Email"}),P.jsx("input",{type:"email",value:s,onChange:ee=>o(ee.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",required:!0})]}),P.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[P.jsxs("div",{children:[P.jsx("label",{className:"block text-gray-700 text-sm font-medium mb-2",children:"Age"}),P.jsx("input",{type:"number",value:R,onChange:ee=>b(ee.target.value),min:"18",max:"120",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",required:!0})]}),P.jsxs("div",{children:[P.jsx("label",{className:"block text-gray-700 text-sm font-medium mb-2",children:"Gender"}),P.jsxs("select",{value:B,onChange:ee=>K(ee.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",children:[P.jsx("option",{value:"male",children:"Male"}),P.jsx("option",{value:"female",children:"Female"}),P.jsx("option",{value:"other",children:"Other"})]})]})]}),P.jsxs("div",{className:"mb-4",children:[P.jsx("label",{className:"block text-gray-700 text-sm font-medium mb-2",children:"Password"}),P.jsx("input",{type:"password",value:u,onChange:ee=>f(ee.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",required:!0,minLength:6})]}),P.jsxs("div",{className:"mb-6",children:[P.jsx("label",{className:"block text-gray-700 text-sm font-medium mb-2",children:"Confirm Password"}),P.jsx("input",{type:"password",value:m,onChange:ee=>p(ee.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",required:!0})]}),P.jsx("button",{type:"submit",disabled:ne,className:"w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors",children:ne?"Creating Account...":"Sign Up"})]}),e==="reset"&&P.jsxs("form",{onSubmit:et,children:[P.jsxs("div",{className:"mb-6",children:[P.jsx("label",{className:"block text-gray-700 text-sm font-medium mb-2",children:"Email"}),P.jsx("input",{type:"email",value:s,onChange:ee=>o(ee.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",required:!0}),P.jsx("p",{className:"text-sm text-gray-600 mt-2",children:"Enter your email and we'll send you a password reset link."})]}),P.jsx("button",{type:"submit",disabled:ne,className:"w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors",children:ne?"Sending...":"Send Reset Email"})]}),P.jsx("div",{className:"mt-6 text-center",children:e==="login"?P.jsxs("p",{className:"text-gray-600",children:["Don't have an account?"," ",P.jsx("button",{onClick:()=>n("signup"),className:"text-green-600 hover:text-green-700 font-medium",children:"Sign Up"})]}):e==="signup"?P.jsxs("p",{className:"text-gray-600",children:["Already have an account?"," ",P.jsx("button",{onClick:()=>n("login"),className:"text-green-600 hover:text-green-700 font-medium",children:"Log In"})]}):P.jsx("button",{onClick:()=>n("login"),className:"text-green-600 hover:text-green-700 font-medium",children:"Back to Login"})})]})]})})};class Wx{async sendPairingInviteSMS(e){try{const n=ar(or,"sendPairingInviteSMS"),s={toPhone:e.toPhone,fromName:e.fromName,pairingCode:e.pairingCode,message:e.message||"",appUrl:window.location.origin};if(!(await n(s)).data.success)throw new Error("Failed to send SMS invitation")}catch(n){throw console.error("SMS send error:",n),new Error(`Failed to send SMS invitation: ${n.message}`)}}async sendMutualPairingCode(e,n,s){try{await ar(or,"sendMutualPairingCode")({toPhone:e,code:n,partnerName:s})}catch(o){throw console.error("SMS send error:",o),new Error(`Failed to send confirmation code: ${o.message}`)}}async sendWeeklyReminderSMS(e,n,s){try{await ar(or,"sendWeeklyReminderSMS")({toPhone:e,partnerName:n,weekNumber:s})}catch(o){console.error("SMS reminder error:",o)}}async sendGameResultsSMS(e,n,s){try{await ar(or,"sendGameResultsSMS")({toPhone:e,score:n,correctGuesses:s})}catch(o){console.error("SMS results error:",o)}}formatPhoneNumber(e){let n=e.replace(/\D/g,"");return n.length===10&&(n="1"+n),n.startsWith("+")||(n="+"+n),n}isValidPhoneNumber(e){const n=e.replace(/\D/g,"");return n.length===10||n.length===11}}const qT=new Wx;function Zx(){const[r,e]=Ve.useState(null),[n,s]=Ve.useState(null),[o,u]=Ve.useState(!0),[f,m]=Ve.useState([]),[p,y]=Ve.useState(null),[E,R]=Ve.useState(null),[b,B]=Ve.useState("dashboard"),[K,ne]=Ve.useState([]),[J,Ee]=Ve.useState([]),[ae,ce]=Ve.useState(""),[Se,me]=Ve.useState(""),[Oe,M]=Ve.useState(""),[S,C]=Ve.useState("email"),[O,x]=Ve.useState(""),[V,N]=Ve.useState(!1);Ve.useEffect(()=>{const A=Wm(sr,async F=>{if(e(F),F){const Z=await ei.getUserProfile(F.uid);if(Z){s(Z);try{const te=await ti.getUserInnermosts(F.uid);m(te)}catch(te){console.error("Error loading innermosts:",te)}}}else s(null),m([]);u(!1)});return()=>A()},[]),Ve.useEffect(()=>{if(!p)return;(async()=>{try{let F=await ti.getCurrentWillingBox(p.id);!F&&p.status==="active"&&(F=await ti.createWillingBox(p.id,p.partnerA,p.partnerB)),R(F)}catch(F){console.error("Error loading willing box:",F)}})()},[p]),Ve.useEffect(()=>{if(!E)return;const A=ti.subscribeToWillingBox(E.id,F=>{R(F)});return()=>A()},[E?.id]);const mt=async()=>{try{await ei.signOutUser(),s(null),m([]),y(null),R(null),B("dashboard")}catch(A){console.error("Logout error:",A)}},et=async A=>{if(A.preventDefault(),!(!n||!r))try{const F=await ti.createInnermost(r.uid,S==="email"?ae:Se,n.displayName);if(S==="email")await Fm.sendPairingInvite({toEmail:ae,fromName:n.displayName,pairingCode:F.pairingCode,message:Oe}),alert(`Invitation sent to ${ae}! They'll receive an email with a pairing code.`);else{const Z=qT.formatPhoneNumber(Se);await qT.sendPairingInviteSMS({toPhone:Z,fromName:n.displayName,pairingCode:F.pairingCode,message:Oe}),alert(`Invitation sent to ${Se}! They'll receive a text with a pairing code.`)}m(Z=>[...Z,F]),ce(""),me(""),M(""),B("dashboard")}catch(F){alert(`Failed to create pairing: ${F.message}`)}},G=async A=>{if(A.preventDefault(),!(!n||!r))try{const F=await ti.findUserByEmail(ae);if(!F){alert("User not found. They need to create an account first.");return}const Z=Math.floor(1e5+Math.random()*9e5).toString();await Fm.sendMutualPairingCode(ae,Z,n.displayName),await Fm.sendMutualPairingCode(n.email,Z,F.displayName),sessionStorage.setItem("pendingPairing",JSON.stringify({otherUserId:F.id,confirmationCode:Z,timestamp:Date.now()})),x(Z),alert(`Confirmation code sent to both ${n.email} and ${ae}. Both must enter the same code.`)}catch(F){alert(`Failed to initiate pairing: ${F.message}`)}},re=async()=>{if(!(!n||!r||!O))try{const A=sessionStorage.getItem("pendingPairing");if(!A){alert("No pending pairing found. Please start a new pairing.");return}const F=JSON.parse(A);if(F.confirmationCode!==O){alert("Invalid confirmation code");return}if(Date.now()-F.timestamp>300*1e3){alert("Confirmation code expired. Please start a new pairing."),sessionStorage.removeItem("pendingPairing");return}const Z=await ti.createMutualPairing(r.uid,F.otherUserId,O);m(te=>[...te,Z]),sessionStorage.removeItem("pendingPairing"),x(""),N(!1),B("dashboard"),alert("Partnership created successfully!")}catch(A){alert(`Failed to confirm pairing: ${A.message}`)}},ee=async A=>{if(r&&confirm("Are you sure you want to end this partnership? This action cannot be undone."))try{await ti.breakPartnership(A,r.uid),m(F=>F.filter(Z=>Z.id!==A)),p?.id===A&&(y(null),R(null),B("dashboard")),alert("Partnership ended successfully.")}catch(F){alert(`Failed to end partnership: ${F.message}`)}},fe=async()=>{if(!n||!E||!p||!r)return;if(K.length!==12){alert("Please add exactly 12 wishes to your WishList");return}if(K.filter(Z=>Z.isMostWanted).length!==1){alert("Please mark exactly 1 wish as Most Wanted");return}const F=r.uid===p.partnerA;try{await ti.updateWishList(E.id,r.uid,K,F),alert("WishList saved successfully!"),B("innermost-detail")}catch(Z){alert(`Failed to save WishList: ${Z.message}`)}};return o?P.jsx("div",{className:"min-h-screen flex items-center justify-center bg-green-50",children:P.jsxs("div",{className:"text-center",children:[P.jsx("div",{className:"text-4xl mb-4",children:"🌳"}),P.jsx("p",{className:"text-gray-600",children:"Loading The Willing Tree..."})]})}):!r||!n?P.jsx(Xx,{onAuthSuccess:A=>s(A)}):P.jsxs("div",{className:"min-h-screen bg-gray-50",children:[P.jsx("div",{className:"bg-white shadow-sm border-b",children:P.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-3 flex justify-between items-center",children:[P.jsx("h1",{className:"text-xl font-bold text-green-800",children:"🌳 The Willing Tree"}),P.jsxs("div",{className:"flex items-center gap-4",children:[P.jsxs("span",{className:"text-gray-600",children:["Welcome, ",n.displayName]}),P.jsx("button",{onClick:mt,className:"bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700",children:"Logout"})]})]})}),P.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[b==="dashboard"&&P.jsxs("div",{children:[P.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-6",children:"Your Partnerships"}),f.length===0?P.jsxs("div",{className:"bg-white rounded-lg shadow p-8 text-center",children:[P.jsx("div",{className:"text-4xl mb-4",children:"🌱"}),P.jsx("p",{className:"text-gray-600 mb-4",children:"You haven't created any partnerships yet."}),P.jsx("button",{onClick:()=>B("create-pairing"),className:"bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700",children:"Create Your First Partnership"})]}):P.jsxs("div",{className:"grid gap-4",children:[f.map(A=>P.jsxs("div",{className:"bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow",children:[P.jsxs("div",{className:"flex justify-between items-center cursor-pointer",onClick:()=>{y(A),B("innermost-detail")},children:[P.jsxs("div",{children:[P.jsxs("h3",{className:"text-lg font-semibold text-gray-800",children:["Partnership with ",A.partnerBEmail||A.partnerAEmail]}),P.jsxs("p",{className:"text-sm text-gray-600",children:["Status: ",A.status==="active"?"🟢 Active":"🟡 Pending"]}),A.pairingCode&&P.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["Pairing Code: ",A.pairingCode]})]}),P.jsx("div",{className:"text-2xl",children:A.status==="active"?"🌳":"🌱"})]}),A.status==="active"&&P.jsx("div",{className:"mt-4 pt-4 border-t border-gray-200",children:P.jsx("button",{onClick:F=>{F.stopPropagation(),ee(A.id)},className:"text-red-600 hover:text-red-700 text-sm font-medium",children:"End Partnership"})})]},A.id)),P.jsx("button",{onClick:()=>B("create-pairing"),className:"bg-green-100 text-green-700 rounded-lg p-6 hover:bg-green-200 transition-colors text-center",children:"+ Create New Partnership"})]})]}),b==="create-pairing"&&P.jsxs("div",{className:"max-w-md mx-auto",children:[P.jsx("button",{onClick:()=>B("dashboard"),className:"mb-4 text-gray-600 hover:text-gray-800",children:"← Back to Dashboard"}),P.jsxs("div",{className:"bg-white rounded-lg shadow p-6",children:[P.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-4",children:"Create Partnership"}),P.jsx("div",{className:"mb-6",children:P.jsxs("div",{className:"flex gap-2 mb-4",children:[P.jsx("button",{type:"button",onClick:()=>N(!1),className:`flex-1 py-2 px-4 rounded-lg transition-colors ${V?"bg-gray-200 text-gray-700 hover:bg-gray-300":"bg-green-600 text-white"}`,children:"Invite New User"}),P.jsx("button",{type:"button",onClick:()=>N(!0),className:`flex-1 py-2 px-4 rounded-lg transition-colors ${V?"bg-green-600 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:"Pair with Existing User"})]})}),V?P.jsx("div",{children:P.jsxs("div",{className:"mb-6",children:[P.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4",children:[P.jsx("p",{className:"text-sm text-blue-800",children:"To pair with an existing user, both partners must:"}),P.jsxs("ol",{className:"list-decimal list-inside text-sm text-blue-700 mt-2",children:[P.jsx("li",{children:"Enter each other's email"}),P.jsx("li",{children:"Receive a confirmation code"}),P.jsx("li",{children:"Enter the same code to confirm"})]})]}),P.jsxs("div",{className:"mb-4",children:[P.jsx("label",{className:"block text-gray-700 text-sm font-medium mb-2",children:"Partner's Email (must be registered)"}),P.jsx("input",{type:"email",value:ae,onChange:A=>ce(A.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500",required:!0})]}),O?P.jsxs("div",{className:"mb-4",children:[P.jsx("label",{className:"block text-gray-700 text-sm font-medium mb-2",children:"Enter Confirmation Code"}),P.jsx("input",{type:"text",value:O,onChange:A=>x(A.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500",placeholder:"Enter 6-digit code",maxLength:6}),P.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Both partners must enter the same code"})]}):null,O?P.jsx("button",{onClick:re,className:"w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700",children:"Confirm Partnership"}):P.jsx("button",{onClick:G,className:"w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700",children:"Send Confirmation Code"})]})}):P.jsxs("form",{onSubmit:et,children:[P.jsxs("div",{className:"mb-4",children:[P.jsx("label",{className:"block text-gray-700 text-sm font-medium mb-2",children:"Invite Method"}),P.jsxs("div",{className:"flex gap-2",children:[P.jsx("button",{type:"button",onClick:()=>C("email"),className:`flex-1 py-2 px-4 rounded-lg transition-colors ${S==="email"?"bg-blue-600 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:"📧 Email"}),P.jsx("button",{type:"button",onClick:()=>C("sms"),className:`flex-1 py-2 px-4 rounded-lg transition-colors ${S==="sms"?"bg-blue-600 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:"📱 SMS/Text"})]})]}),S==="email"?P.jsxs("div",{className:"mb-4",children:[P.jsx("label",{className:"block text-gray-700 text-sm font-medium mb-2",children:"Partner's Email"}),P.jsx("input",{type:"email",value:ae,onChange:A=>ce(A.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500",required:!0})]}):P.jsxs("div",{className:"mb-4",children:[P.jsx("label",{className:"block text-gray-700 text-sm font-medium mb-2",children:"Partner's Phone Number"}),P.jsx("input",{type:"tel",value:Se,onChange:A=>me(A.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500",placeholder:"(555) 123-4567",required:!0}),P.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"US phone numbers only"})]}),P.jsxs("div",{className:"mb-6",children:[P.jsx("label",{className:"block text-gray-700 text-sm font-medium mb-2",children:"Personal Message (Optional)"}),P.jsx("textarea",{value:Oe,onChange:A=>M(A.target.value),rows:3,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500",placeholder:"Add a personal note to your invitation..."})]}),P.jsxs("button",{type:"submit",className:"w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700",children:["Send ",S==="email"?"Email":"SMS"," Invitation"]})]})]})]}),b==="innermost-detail"&&p&&P.jsxs("div",{children:[P.jsx("button",{onClick:()=>{y(null),R(null),B("dashboard")},className:"mb-4 text-gray-600 hover:text-gray-800",children:"← Back to Dashboard"}),P.jsxs("div",{className:"bg-white rounded-lg shadow p-6 mb-6",children:[P.jsxs("h2",{className:"text-xl font-bold text-gray-800 mb-4",children:["Partnership with ",p.partnerBEmail||p.partnerAEmail]}),p.status==="pending"?P.jsx("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-4",children:P.jsxs("p",{className:"text-yellow-800",children:["Waiting for partner to accept invitation.",P.jsx("br",{}),"Pairing Code: ",P.jsx("strong",{children:p.pairingCode})]})}):E?P.jsxs("div",{className:"space-y-4",children:[P.jsx("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4",children:P.jsxs("p",{className:"text-green-800",children:["Week ",E.weekNumber," - Status: ",E.status]})}),E.status==="planting_trees"&&P.jsx("button",{onClick:()=>B("create-wishlist"),className:"bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700",children:"Create Your WishList"}),E.status==="selecting_willing"&&P.jsx("button",{onClick:()=>B("select-willing"),className:"bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700",children:"Select Your WillingList"}),E.status==="guessing"&&P.jsx("button",{onClick:()=>B("guessing-game"),className:"bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700",children:"Play Guessing Game"})]}):P.jsx("p",{className:"text-gray-600",children:"Loading willing box..."})]})]}),b==="create-wishlist"&&E&&P.jsxs("div",{children:[P.jsx("button",{onClick:()=>B("innermost-detail"),className:"mb-4 text-gray-600 hover:text-gray-800",children:"← Back"}),P.jsxs("div",{className:"bg-white rounded-lg shadow p-6",children:[P.jsxs("h2",{className:"text-xl font-bold text-gray-800 mb-4",children:["Create Your WishList (",K.length,"/12)"]}),P.jsx("p",{className:"text-gray-600 mb-4",children:"Add 12 wishes and mark 1 as Most Wanted (worth triple points)"}),P.jsx("form",{onSubmit:A=>{A.preventDefault();const Z=new FormData(A.currentTarget).get("wish");if(Z&&K.length<12){const te={id:Date.now().toString(),text:Z,category:"general",isMostWanted:!1,createdAt:new Date};ne([...K,te]),A.currentTarget.reset()}},children:P.jsxs("div",{className:"flex gap-2 mb-4",children:[P.jsx("input",{name:"wish",type:"text",placeholder:"Enter a wish...",className:"flex-1 px-4 py-2 border border-gray-300 rounded-lg",disabled:K.length>=12}),P.jsx("button",{type:"submit",disabled:K.length>=12,className:"bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:bg-gray-400",children:"Add"})]})}),P.jsx("div",{className:"space-y-2 mb-4",children:K.map((A,F)=>P.jsx("div",{className:`p-3 rounded-lg border ${A.isMostWanted?"border-yellow-400 bg-yellow-50":"border-gray-200"}`,children:P.jsxs("div",{className:"flex items-center justify-between",children:[P.jsx("span",{className:"flex-1",children:A.text}),P.jsxs("div",{className:"flex gap-2",children:[P.jsx("button",{onClick:()=>{ne(K.map(Z=>Z.id===A.id?{...Z,isMostWanted:!Z.isMostWanted}:{...Z,isMostWanted:!1}))},className:`px-2 py-1 rounded text-xs ${A.isMostWanted?"bg-yellow-400":"bg-gray-200"}`,children:A.isMostWanted?"⭐ Most Wanted":"☆"}),P.jsx("button",{onClick:()=>ne(K.filter(Z=>Z.id!==A.id)),className:"text-red-600 hover:text-red-800",children:"×"})]})]})},A.id))}),K.length===12&&P.jsx("button",{onClick:fe,className:"w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700",children:"Save WishList"})]})]})]})]})}bb.createRoot(document.getElementById("root")).render(P.jsx(Ve.StrictMode,{children:P.jsx(Zx,{})}));
