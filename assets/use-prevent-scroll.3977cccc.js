import{a as F,w as Q,o as le,g as W,n as M,_ as U,c as ie,r as X,E as re,$ as se,h as Y,a0 as ae,a1 as Z,d as D,i as ue,f as c,a2 as K,l as f,s as de,a3 as ce}from"./index.91126b0b.js";import{v as fe,g as k,d as ee,e as pe,b as z}from"./vm.b50b17a3.js";const Fe={dark:{type:Boolean,default:null}};function Me(e,t){return F(()=>e.dark===null?t.dark.isActive:e.dark)}const We={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},De=["beforeShow","show","beforeHide","hide"];function Ae({showing:e,canShow:t,hideOnRouteChange:o,handleShow:n,handleHide:l,processOnMount:a}){const r=W(),{props:s,emit:u,proxy:L}=r;let d;function g(i){e.value===!0?$(i):y(i)}function y(i){if(s.disable===!0||i!==void 0&&i.qAnchorHandled===!0||t!==void 0&&t(i)!==!0)return;const w=s["onUpdate:modelValue"]!==void 0;w===!0&&(u("update:modelValue",!0),d=i,M(()=>{d===i&&(d=void 0)})),(s.modelValue===null||w===!1)&&A(i)}function A(i){e.value!==!0&&(e.value=!0,u("beforeShow",i),n!==void 0?n(i):u("show",i))}function $(i){if(s.disable===!0)return;const w=s["onUpdate:modelValue"]!==void 0;w===!0&&(u("update:modelValue",!1),d=i,M(()=>{d===i&&(d=void 0)})),(s.modelValue===null||w===!1)&&N(i)}function N(i){e.value!==!1&&(e.value=!1,u("beforeHide",i),l!==void 0?l(i):u("hide",i))}function O(i){s.disable===!0&&i===!0?s["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!1):i===!0!==e.value&&(i===!0?A:N)(d)}Q(()=>s.modelValue,O),o!==void 0&&fe(r)===!0&&Q(()=>L.$route.fullPath,()=>{o.value===!0&&e.value===!0&&$()}),a===!0&&le(()=>{O(s.modelValue)});const _={show:y,hide:$,toggle:g};return Object.assign(L,_),_}let T=[],P=[];function te(e){P=P.filter(t=>t!==e)}function ve(e){te(e),P.push(e)}function B(e){te(e),P.length===0&&T.length!==0&&(T[T.length-1](),T=[])}function Ne(e){P.length===0?e():T.push(e)}let me=1,we=document.body;function he(e,t){const o=document.createElement("div");if(o.id=t!==void 0?`q-portal--${t}--${me++}`:e,U.globalNodes!==void 0){const n=U.globalNodes.class;n!==void 0&&(o.className=n)}return we.appendChild(o),o}function ge(e){e.remove()}const q=[];function Oe(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return k(e)}else if(e.__qPortal===!0){const o=k(e);return o!==void 0&&o.$options.name==="QPopupProxy"?(e.hide(t),o):e}e=k(e)}while(e!=null)}const ye=ie({name:"QPortal",setup(e,{slots:t}){return()=>t.default()}});function be(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function _e(e,t,o,n){const l=X(!1),a=X(!1);let r=null;const s={},u=n==="dialog"&&be(e);function L(g){if(g===!0){B(s),a.value=!0;return}a.value=!1,l.value===!1&&(u===!1&&r===null&&(r=he(!1,n)),l.value=!0,q.push(e.proxy),ve(s))}function d(g){if(a.value=!1,g!==!0)return;B(s),l.value=!1;const y=q.indexOf(e.proxy);y!==-1&&q.splice(y,1),r!==null&&(ge(r),r=null)}return re(()=>{d(!0)}),e.proxy.__qPortal=!0,se(e.proxy,"contentEl",()=>t.value),{showPortal:L,hidePortal:d,portalIsActive:l,portalIsAccessible:a,renderPortal:()=>u===!0?o():l.value===!0?[Y(ae,{to:r},Y(ye,o))]:void 0}}const Qe={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Ue(e,t=()=>{},o=()=>{}){return{transitionProps:F(()=>{const n=`q-transition--${e.transitionShow||t()}`,l=`q-transition--${e.transitionHide||o()}`;return{appear:!0,enterFromClass:`${n}-enter-from`,enterActiveClass:`${n}-enter-active`,enterToClass:`${n}-enter-to`,leaveFromClass:`${l}-leave-from`,leaveActiveClass:`${l}-leave-active`,leaveToClass:`${l}-leave-to`}}),transitionStyle:F(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Xe(){let e;const t=W();function o(){e=void 0}return Z(o),D(o),{removeTick:o,registerTick(n){e=n,M(()=>{e===n&&(ee(t)===!1&&e(),e=void 0)})}}}function Ye(){let e=null;const t=W();function o(){e!==null&&(clearTimeout(e),e=null)}return Z(o),D(o),{removeTimeout:o,registerTimeout(n,l){o(),ee(t)===!1&&(e=setTimeout(()=>{e=null,n()},l))}}}const Ke=[Element,String],Te=[null,document,document.body,document.scrollingElement,document.documentElement];function ze(e,t){let o=pe(t);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return Te.includes(o)?window:o}function Ee(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function Pe(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let S;function Be(){if(S!==void 0)return S;const e=document.createElement("p"),t=document.createElement("div");z(e,{width:"100%",height:"200px"}),z(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const o=e.offsetWidth;t.style.overflow="scroll";let n=e.offsetWidth;return o===n&&(n=t.clientWidth),t.remove(),S=o-n,S}function Le(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}const v=[];let h;function Se(e){h=e.keyCode===27}function Ce(){h===!0&&(h=!1)}function $e(e){h===!0&&(h=!1,ue(e,27)===!0&&v[v.length-1](e))}function oe(e){window[e]("keydown",Se),window[e]("blur",Ce),window[e]("keyup",$e),h=!1}function Ge(e){c.is.desktop===!0&&(v.push(e),v.length===1&&oe("addEventListener"))}function Ie(e){const t=v.indexOf(e);t!==-1&&(v.splice(t,1),v.length===0&&oe("removeEventListener"))}const m=[];function ne(e){m[m.length-1](e)}function je(e){c.is.desktop===!0&&(m.push(e),m.length===1&&document.body.addEventListener("focusin",ne))}function Re(e){const t=m.indexOf(e);t!==-1&&(m.splice(t,1),m.length===0&&document.body.removeEventListener("focusin",ne))}function Je(e,t,o){let n;function l(){n!==void 0&&(K.remove(n),n=void 0)}return D(()=>{e.value===!0&&l()}),{removeFromHistory:l,addToHistory(){n={condition:()=>o.value===!0,handler:t},K.add(n)}}}let b=0,x,H,E,V=!1,G,I,j,p=null;function ke(e){qe(e)&&de(e)}function qe(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=ce(e),o=e.shiftKey&&!e.deltaX,n=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),l=o||n?e.deltaY:e.deltaX;for(let a=0;a<t.length;a++){const r=t[a];if(Le(r,n))return n?l<0&&r.scrollTop===0?!0:l>0&&r.scrollTop+r.clientHeight===r.scrollHeight:l<0&&r.scrollLeft===0?!0:l>0&&r.scrollLeft+r.clientWidth===r.scrollWidth}return!0}function R(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function C(e){V!==!0&&(V=!0,requestAnimationFrame(()=>{V=!1;const{height:t}=e.target,{clientHeight:o,scrollTop:n}=document.scrollingElement;(E===void 0||t!==window.innerHeight)&&(E=o-t,document.scrollingElement.scrollTop=n),n>E&&(document.scrollingElement.scrollTop-=Math.ceil((n-E)/8))}))}function J(e){const t=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:n,overflowX:l}=window.getComputedStyle(t);x=Pe(window),H=Ee(window),G=t.style.left,I=t.style.top,j=window.location.href,t.style.left=`-${x}px`,t.style.top=`-${H}px`,l!=="hidden"&&(l==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),n!=="hidden"&&(n==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,c.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",C,f.passiveCapture),window.visualViewport.addEventListener("scroll",C,f.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",R,f.passiveCapture))}c.is.desktop===!0&&c.is.mac===!0&&window[`${e}EventListener`]("wheel",ke,f.notPassive),e==="remove"&&(c.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",C,f.passiveCapture),window.visualViewport.removeEventListener("scroll",C,f.passiveCapture)):window.removeEventListener("scroll",R,f.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=G,t.style.top=I,window.location.href===j&&window.scrollTo(x,H),E=void 0)}function xe(e){let t="add";if(e===!0){if(b++,p!==null){clearTimeout(p),p=null;return}if(b>1)return}else{if(b===0||(b--,b>0))return;if(t="remove",c.is.ios===!0&&c.is.nativeMobile===!0){p!==null&&clearTimeout(p),p=setTimeout(()=>{J(t),p=null},100);return}}J(t)}function Ze(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,xe(t))}}}export{Me as a,We as b,Qe as c,De as d,Xe as e,Ye as f,Be as g,Ue as h,Ae as i,_e as j,je as k,Ie as l,ze as m,Ne as n,Ge as o,q as p,Oe as q,Re as r,Ke as s,Je as t,Fe as u,Ze as v,Ee as w,Pe as x};
