import{w as A,R as O,h as oe,m as ie,i as se,k as R,r as le}from"./index.c3c628d1.js";function fe(r,e){const a=[];for(let t=r;t<=e;t++)a.push(t);return a}const g="adm-skeleton",D=r=>A(r,O.createElement("div",{className:oe(g,{[`${g}-animated`]:r.animated})})),ue=r=>A(r,O.createElement(D,{animated:r.animated,className:`${g}-title`})),ce={lineCount:3},de=r=>{const e=ie(ce,r),a=fe(1,e.lineCount),t=O.createElement("div",{className:`${g}-paragraph`},a.map(n=>O.createElement(D,{key:n,animated:e.animated,className:`${g}-paragraph-line`})));return A(e,t)};var je=se(D,{Title:ue,Paragraph:de});const Ae=()=>R.get("/videoslist"),De=()=>R.get("/videoslist"),Me=()=>R.get("/bannerslist"),Ve=()=>R.get("/goodslist");var M={exports:{}},ve="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",pe=ve,he=pe;function Y(){}function J(){}J.resetWarningCache=Y;var me=function(){function r(t,n,o,i,l,f){if(f!==he){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}r.isRequired=r;function e(){return r}var a={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:e,element:r,elementType:r,instanceOf:e,node:r,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:J,resetWarningCache:Y};return a.PropTypes=a,a};M.exports=me();var We=M.exports,m={},k={};Object.defineProperty(k,"__esModule",{value:!0});k.on=ye;k.off=be;function ye(r,e,a,t){t=t||!1,r.addEventListener?r.addEventListener(e,a,t):r.attachEvent&&r.attachEvent("on"+e,function(n){a.call(r,n||window.event)})}function be(r,e,a,t){t=t||!1,r.removeEventListener?r.removeEventListener(e,a,t):r.detachEvent&&r.detachEvent("on"+e,a)}var V={};Object.defineProperty(V,"__esModule",{value:!0});V.default=function(r){if(!(r instanceof HTMLElement))return document.documentElement;for(var e=r.style.position==="absolute",a=/(scroll|auto)/,t=r;t;){if(!t.parentNode)return r.ownerDocument||document.documentElement;var n=window.getComputedStyle(t),o=n.position,i=n.overflow,l=n["overflow-x"],f=n["overflow-y"];if(o==="static"&&e){t=t.parentNode;continue}if(a.test(i)&&a.test(l)&&a.test(f))return t;t=t.parentNode}return r.ownerDocument||r.documentElement||document.documentElement};var W={};Object.defineProperty(W,"__esModule",{value:!0});W.default=ge;function ge(r,e,a){var t=void 0,n=void 0,o=void 0,i=void 0,l=void 0,f=function c(){var p=+new Date-i;p<e&&p>=0?t=setTimeout(c,e-p):(t=null,a||(l=r.apply(o,n),t||(o=null,n=null)))};return function(){o=this,n=arguments,i=+new Date;var p=a&&!t;return t||(t=setTimeout(f,e)),p&&(l=r.apply(o,n),o=null,n=null),l}}var U={};Object.defineProperty(U,"__esModule",{value:!0});U.default=we;function we(r,e,a){e||(e=250);var t,n;return function(){var o=a||this,i=+new Date,l=arguments;t&&i<t+e?(clearTimeout(n),n=setTimeout(function(){t=i,r.apply(o,l)},e)):(t=i,r.apply(o,l))}}Object.defineProperty(m,"__esModule",{value:!0});m.forceVisible=m.forceCheck=m.lazyload=void 0;var K=function(){function r(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,a,t){return a&&r(e.prototype,a),t&&r(e,t),e}}(),q=le.exports,L=w(q),_e=M.exports,s=w(_e),y=k,Te=V,I=w(Te),Ee=W,Pe=w(Ee),Oe=U,Le=w(Oe);function w(r){return r&&r.__esModule?r:{default:r}}function Q(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function X(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:r}function Z(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):r.__proto__=e)}var v={top:0,right:0,bottom:0,left:0,width:0,height:0},b="data-lazyload-listened",d=[],j=[],B=!1;try{var Re=Object.defineProperty({},"passive",{get:function(){B=!0}});window.addEventListener("test",null,Re)}catch{}var h=B?{capture:!1,passive:!0}:!1,ke=function(e,a){var t=e.ref,n=void 0,o=void 0,i=void 0,l=void 0;try{var f=a.getBoundingClientRect();n=f.top,o=f.left,i=f.height,l=f.width}catch{n=v.top,o=v.left,i=v.height,l=v.width}var c=window.innerHeight||document.documentElement.clientHeight,p=window.innerWidth||document.documentElement.clientWidth,F=Math.max(n,0),C=Math.max(o,0),re=Math.min(c,n+i)-F,ae=Math.min(p,o+l)-C,x=void 0,S=void 0,z=void 0,H=void 0;try{var _=t.getBoundingClientRect();x=_.top,S=_.left,z=_.height,H=_.width}catch{x=v.top,S=v.left,z=v.height,H=v.width}var G=x-F,$=S-C,T=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return G-T[0]<=re&&G+z+T[1]>=0&&$-T[0]<=ae&&$+H+T[1]>=0},Ne=function(e){var a=e.ref;if(!(a.offsetWidth||a.offsetHeight||a.getClientRects().length))return!1;var t=void 0,n=void 0;try{var o=a.getBoundingClientRect();t=o.top,n=o.height}catch{t=v.top,n=v.height}var i=window.innerHeight||document.documentElement.clientHeight,l=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return t-l[0]<=i&&t+n+l[1]>=0},ee=function(e){var a=e.ref;if(a instanceof HTMLElement){var t=(0,I.default)(a),n=e.props.overflow&&t!==a.ownerDocument&&t!==document&&t!==document.documentElement,o=n?ke(e,t):Ne(e);o?e.visible||(e.props.once&&j.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},te=function(){j.forEach(function(e){var a=d.indexOf(e);a!==-1&&d.splice(a,1)}),j=[]},P=function(){for(var e=0;e<d.length;++e){var a=d[e];ee(a)}te()},xe=function(){for(var e=0;e<d.length;++e){var a=d[e];a.visible=!0,a.forceUpdate()}te()},E=void 0,u=null,Se=function(e){return typeof e=="string"},N=function(r){Z(e,r);function e(a){Q(this,e);var t=X(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,a));return t.visible=!1,t.setRef=t.setRef.bind(t),t}return K(e,[{key:"componentDidMount",value:function(){var t=window,n=this.props.scrollContainer;n&&Se(n)&&(t=t.document.querySelector(n));var o=this.props.debounce!==void 0&&E==="throttle"||E==="debounce"&&this.props.debounce===void 0;if(o&&((0,y.off)(t,"scroll",u,h),(0,y.off)(window,"resize",u,h),u=null),u||(this.props.debounce!==void 0?(u=(0,Pe.default)(P,typeof this.props.debounce=="number"?this.props.debounce:300),E="debounce"):this.props.throttle!==void 0?(u=(0,Le.default)(P,typeof this.props.throttle=="number"?this.props.throttle:300),E="throttle"):u=P),this.props.overflow){var i=(0,I.default)(this.ref);if(i&&typeof i.getAttribute=="function"){var l=1+ +i.getAttribute(b);l===1&&i.addEventListener("scroll",u,h),i.setAttribute(b,l)}}else if(d.length===0||o){var f=this.props,c=f.scroll,p=f.resize;c&&(0,y.on)(t,"scroll",u,h),p&&(0,y.on)(window,"resize",u,h)}d.push(this),ee(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var t=(0,I.default)(this.ref);if(t&&typeof t.getAttribute=="function"){var n=+t.getAttribute(b)-1;n===0?(t.removeEventListener("scroll",u,h),t.removeAttribute(b)):t.setAttribute(b,n)}}var o=d.indexOf(this);o!==-1&&d.splice(o,1),d.length===0&&typeof window!="undefined"&&((0,y.off)(window,"resize",u,h),(0,y.off)(window,"scroll",u,h))}},{key:"setRef",value:function(t){t&&(this.ref=t)}},{key:"render",value:function(){var t=this.props,n=t.height,o=t.children,i=t.placeholder,l=t.className,f=t.classNamePrefix,c=t.style;return L.default.createElement("div",{className:f+"-wrapper "+l,ref:this.setRef,style:c},this.visible?o:i||L.default.createElement("div",{style:{height:n},className:f+"-placeholder"}))}}]),e}(q.Component);N.propTypes={className:s.default.string,classNamePrefix:s.default.string,once:s.default.bool,height:s.default.oneOfType([s.default.number,s.default.string]),offset:s.default.oneOfType([s.default.number,s.default.arrayOf(s.default.number)]),overflow:s.default.bool,resize:s.default.bool,scroll:s.default.bool,children:s.default.node,throttle:s.default.oneOfType([s.default.number,s.default.bool]),debounce:s.default.oneOfType([s.default.number,s.default.bool]),placeholder:s.default.node,scrollContainer:s.default.oneOfType([s.default.string,s.default.object]),unmountIfInvisible:s.default.bool,style:s.default.object};N.defaultProps={className:"",classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var ze=function(e){return e.displayName||e.name||"Component"},He=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return function(t){return function(n){Z(o,n);function o(){Q(this,o);var i=X(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return i.displayName="LazyLoad"+ze(t),i}return K(o,[{key:"render",value:function(){return L.default.createElement(N,e,L.default.createElement(t,this.props))}}]),o}(q.Component)}};m.lazyload=He;var Ue=m.default=N;m.forceCheck=P;m.forceVisible=xe;var qe="./assets/bilibili.9eef3f00.jpeg";export{je as S,Ue as _,Ve as a,qe as b,Ae as c,De as d,Me as g,We as p};