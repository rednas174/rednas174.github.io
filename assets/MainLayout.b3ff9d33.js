import{u as Bt,a as Et,Q as Je}from"./QBtn.42dced69.js";import{c as W,a as m,h as S,r as T,i as vt,s as Ke,g as A,P as $t,p as pe,n as De,b as Z,w as C,o as Xe,d as ee,e as be,l as we,f as J,j as xe,T as Mt,k as Ue,m as V,q as _e,Q as Fe,t as zt,u as mt,v as Pt,x as He,y as We,z as ht,A as gt,B as Ht,C as Wt,D as he,E as Ot,F as Qt,G as ke,H as Ve,I as E,J as L,K as Rt,L as oe,M as Ze,N as At,O as Dt,R as Ft,S as re,U as Vt,V as It,W as Nt,X as jt,Y as Kt}from"./index.37369600.js";import{h as j,a as bt,b as et,c as Xt}from"./render.f18f3cc9.js";import{u as ue,a as se,b as yt}from"./use-timeout.a7b75649.js";import{p as tt,g as ye,u as pt,a as Ut,s as wt,b as xt,c as Yt,d as Gt,e as kt,f as Jt,h as Zt,r as en,i as nt,j as qt,k as tn,l as nn,m as an,n as ln,o as on,q as rn,t as un}from"./use-prevent-scroll.6501f1cd.js";import{c as sn}from"./dom.32713778.js";import{Q as cn}from"./QPage.f64ef0cf.js";import{Q as dn}from"./Ripple.b5cc9d81.js";import"./vm.abdbfba7.js";var fn=W({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:n}){const a=m(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>S("div",{class:a.value},j(n.default))}}),qe=W({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:n}){const a=m(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>S("div",{class:a.value},j(n.default))}}),Ie=W({name:"QItem",props:{...ue,...Bt,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:n,emit:a}){const{proxy:{$q:i}}=A(),t=se(e,i),{hasLink:l,linkAttrs:r,linkClass:v,linkTag:d,navigateOnClick:s}=Et(),o=T(null),p=T(null),y=m(()=>e.clickable===!0||l.value===!0||e.tag==="label"),u=m(()=>e.disable!==!0&&y.value===!0),f=m(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(l.value===!0&&e.active===null?v.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(u.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),$=m(()=>{if(e.insetLevel===void 0)return null;const h=i.lang.rtl===!0?"Right":"Left";return{["padding"+h]:16+e.insetLevel*56+"px"}});function _(h){u.value===!0&&(p.value!==null&&(h.qKeyEvent!==!0&&document.activeElement===o.value?p.value.focus():document.activeElement===p.value&&o.value.focus()),s(h))}function k(h){if(u.value===!0&&vt(h,[13,32])===!0){Ke(h),h.qKeyEvent=!0;const b=new MouseEvent("click",h);b.qKeyEvent=!0,o.value.dispatchEvent(b)}a("keyup",h)}function g(){const h=bt(n.default,[]);return u.value===!0&&h.unshift(S("div",{class:"q-focus-helper",tabindex:-1,ref:p})),h}return()=>{const h={ref:o,class:f.value,style:$.value,role:"listitem",onClick:_,onKeyup:k};return u.value===!0?(h.tabindex=e.tabindex||"0",Object.assign(h,r.value)):y.value===!0&&(h["aria-disabled"]="true"),S(d.value,h,g())}}});const vn={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},Oe={xs:2,sm:4,md:8,lg:16,xl:24};var mn=W({name:"QSeparator",props:{...ue,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const n=A(),a=se(e,n.proxy.$q),i=m(()=>e.vertical===!0?"vertical":"horizontal"),t=m(()=>` q-separator--${i.value}`),l=m(()=>e.inset!==!1?`${t.value}-${vn[e.inset]}`:""),r=m(()=>`q-separator${t.value}${l.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(a.value===!0?" q-separator--dark":"")),v=m(()=>{const d={};if(e.size!==void 0&&(d[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const s=e.spaced===!0?`${Oe.md}px`:e.spaced in Oe?`${Oe[e.spaced]}px`:e.spaced,o=e.vertical===!0?["Left","Right"]:["Top","Bottom"];d[`margin${o[0]}`]=d[`margin${o[1]}`]=s}return d});return()=>S("hr",{class:r.value,style:v.value,"aria-orientation":i.value})}});function Ct(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),$t.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const hn={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},gn={...hn,contextMenu:Boolean};function bn({showing:e,avoidEmit:n,configureAnchorEl:a}){const{props:i,proxy:t,emit:l}=A(),r=T(null);let v=null;function d(u){return r.value===null?!1:u===void 0||u.touches===void 0||u.touches.length<=1}const s={};a===void 0&&(Object.assign(s,{hide(u){t.hide(u)},toggle(u){t.toggle(u),u.qAnchorHandled=!0},toggleKey(u){vt(u,13)===!0&&s.toggle(u)},contextClick(u){t.hide(u),pe(u),De(()=>{t.show(u),u.qAnchorHandled=!0})},prevent:pe,mobileTouch(u){if(s.mobileCleanup(u),d(u)!==!0)return;t.hide(u),r.value.classList.add("non-selectable");const f=u.target;Z(s,"anchor",[[f,"touchmove","mobileCleanup","passive"],[f,"touchend","mobileCleanup","passive"],[f,"touchcancel","mobileCleanup","passive"],[r.value,"contextmenu","prevent","notPassive"]]),v=setTimeout(()=>{v=null,t.show(u),u.qAnchorHandled=!0},300)},mobileCleanup(u){r.value.classList.remove("non-selectable"),v!==null&&(clearTimeout(v),v=null),e.value===!0&&u!==void 0&&Ct()}}),a=function(u=i.contextMenu){if(i.noParentEvent===!0||r.value===null)return;let f;u===!0?t.$q.platform.is.mobile===!0?f=[[r.value,"touchstart","mobileTouch","passive"]]:f=[[r.value,"mousedown","hide","passive"],[r.value,"contextmenu","contextClick","notPassive"]]:f=[[r.value,"click","toggle","passive"],[r.value,"keyup","toggleKey","passive"]],Z(s,"anchor",f)});function o(){be(s,"anchor")}function p(u){for(r.value=u;r.value.classList.contains("q-anchor--skip");)r.value=r.value.parentNode;a()}function y(){if(i.target===!1||i.target===""||t.$el.parentNode===null)r.value=null;else if(i.target===!0)p(t.$el.parentNode);else{let u=i.target;if(typeof i.target=="string")try{u=document.querySelector(i.target)}catch{u=void 0}u!=null?(r.value=u.$el||u,a()):(r.value=null,console.error(`Anchor: target "${i.target}" not found`))}}return C(()=>i.contextMenu,u=>{r.value!==null&&(o(),a(u))}),C(()=>i.target,()=>{r.value!==null&&o(),y()}),C(()=>i.noParentEvent,u=>{r.value!==null&&(u===!0?o():a())}),Xe(()=>{y(),n!==!0&&i.modelValue===!0&&r.value===null&&l("update:modelValue",!1)}),ee(()=>{v!==null&&clearTimeout(v),o()}),{anchorEl:r,canShow:d,anchorEvents:s}}function yn(e,n){const a=T(null);let i;function t(v,d){const s=`${d!==void 0?"add":"remove"}EventListener`,o=d!==void 0?d:i;v!==window&&v[s]("scroll",o,we.passive),window[s]("scroll",o,we.passive),i=d}function l(){a.value!==null&&(t(a.value),a.value=null)}const r=C(()=>e.noParentEvent,()=>{a.value!==null&&(l(),n())});return ee(r),{localScrollTarget:a,unconfigureScrollTarget:l,changeScrollEvent:t}}const{notPassiveCapture:Ce}=we,X=[];function Se(e){const n=e.target;if(n===void 0||n.nodeType===8||n.classList.contains("no-pointer-events")===!0)return;let a=tt.length-1;for(;a>=0;){const i=tt[a].$;if(i.type.name==="QTooltip"){a--;continue}if(i.type.name!=="QDialog")break;if(i.props.seamless!==!0)return;a--}for(let i=X.length-1;i>=0;i--){const t=X[i];if((t.anchorEl.value===null||t.anchorEl.value.contains(n)===!1)&&(n===document.body||t.innerRef.value!==null&&t.innerRef.value.contains(n)===!1))e.qClickOutside=!0,t.onClickOutside(e);else return}}function pn(e){X.push(e),X.length===1&&(document.addEventListener("mousedown",Se,Ce),document.addEventListener("touchstart",Se,Ce))}function at(e){const n=X.findIndex(a=>a===e);n!==-1&&(X.splice(n,1),X.length===0&&(document.removeEventListener("mousedown",Se,Ce),document.removeEventListener("touchstart",Se,Ce)))}let lt,it;function ot(e){const n=e.split(" ");return n.length!==2?!1:["top","center","bottom"].includes(n[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(n[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function wn(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const Ne={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{Ne[`${e}#ltr`]=e,Ne[`${e}#rtl`]=e});function rt(e,n){const a=e.split(" ");return{vertical:a[0],horizontal:Ne[`${a[1]}#${n===!0?"rtl":"ltr"}`]}}function xn(e,n){let{top:a,left:i,right:t,bottom:l,width:r,height:v}=e.getBoundingClientRect();return n!==void 0&&(a-=n[1],i-=n[0],l+=n[1],t+=n[0],r+=n[0],v+=n[1]),{top:a,bottom:l,height:v,left:i,right:t,width:r,middle:i+(t-i)/2,center:a+(l-a)/2}}function kn(e,n,a){let{top:i,left:t}=e.getBoundingClientRect();return i+=n.top,t+=n.left,a!==void 0&&(i+=a[1],t+=a[0]),{top:i,bottom:i+1,height:1,left:t,right:t+1,width:1,middle:t,center:i}}function qn(e,n){return{top:0,center:n/2,bottom:n,left:0,middle:e/2,right:e}}function ut(e,n,a,i){return{top:e[a.vertical]-n[i.vertical],left:e[a.horizontal]-n[i.horizontal]}}function St(e,n=0){if(e.targetEl===null||e.anchorEl===null||n>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{St(e,n+1)},10);return}const{targetEl:a,offset:i,anchorEl:t,anchorOrigin:l,selfOrigin:r,absoluteOffset:v,fit:d,cover:s,maxHeight:o,maxWidth:p}=e;if(J.is.ios===!0&&window.visualViewport!==void 0){const B=document.body.style,{offsetLeft:M,offsetTop:P}=window.visualViewport;M!==lt&&(B.setProperty("--q-pe-left",M+"px"),lt=M),P!==it&&(B.setProperty("--q-pe-top",P+"px"),it=P)}const{scrollLeft:y,scrollTop:u}=a,f=v===void 0?xn(t,s===!0?[0,0]:i):kn(t,v,i);Object.assign(a.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:p||"100vw",maxHeight:o||"100vh",visibility:"visible"});const{offsetWidth:$,offsetHeight:_}=a,{elWidth:k,elHeight:g}=d===!0||s===!0?{elWidth:Math.max(f.width,$),elHeight:s===!0?Math.max(f.height,_):_}:{elWidth:$,elHeight:_};let h={maxWidth:p,maxHeight:o};(d===!0||s===!0)&&(h.minWidth=f.width+"px",s===!0&&(h.minHeight=f.height+"px")),Object.assign(a.style,h);const b=qn(k,g);let w=ut(f,b,l,r);if(v===void 0||i===void 0)Qe(w,f,b,l,r);else{const{top:B,left:M}=w;Qe(w,f,b,l,r);let P=!1;if(w.top!==B){P=!0;const z=2*i[1];f.center=f.top-=z,f.bottom-=z+2}if(w.left!==M){P=!0;const z=2*i[0];f.middle=f.left-=z,f.right-=z+2}P===!0&&(w=ut(f,b,l,r),Qe(w,f,b,l,r))}h={top:w.top+"px",left:w.left+"px"},w.maxHeight!==void 0&&(h.maxHeight=w.maxHeight+"px",f.height>w.maxHeight&&(h.minHeight=h.maxHeight)),w.maxWidth!==void 0&&(h.maxWidth=w.maxWidth+"px",f.width>w.maxWidth&&(h.minWidth=h.maxWidth)),Object.assign(a.style,h),a.scrollTop!==u&&(a.scrollTop=u),a.scrollLeft!==y&&(a.scrollLeft=y)}function Qe(e,n,a,i,t){const l=a.bottom,r=a.right,v=ye(),d=window.innerHeight-v,s=document.body.clientWidth;if(e.top<0||e.top+l>d)if(t.vertical==="center")e.top=n[i.vertical]>d/2?Math.max(0,d-l):0,e.maxHeight=Math.min(l,d);else if(n[i.vertical]>d/2){const o=Math.min(d,i.vertical==="center"?n.center:i.vertical===t.vertical?n.bottom:n.top);e.maxHeight=Math.min(l,o),e.top=Math.max(0,o-l)}else e.top=Math.max(0,i.vertical==="center"?n.center:i.vertical===t.vertical?n.top:n.bottom),e.maxHeight=Math.min(l,d-e.top);if(e.left<0||e.left+r>s)if(e.maxWidth=Math.min(r,s),t.horizontal==="middle")e.left=n[i.horizontal]>s/2?Math.max(0,s-r):0;else if(n[i.horizontal]>s/2){const o=Math.min(s,i.horizontal==="middle"?n.middle:i.horizontal===t.horizontal?n.right:n.left);e.maxWidth=Math.min(r,o),e.left=Math.max(0,o-e.maxWidth)}else e.left=Math.max(0,i.horizontal==="middle"?n.middle:i.horizontal===t.horizontal?n.left:n.right),e.maxWidth=Math.min(r,s-e.left)}var Cn=W({name:"QMenu",inheritAttrs:!1,props:{...gn,...pt,...ue,...Ut,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:ot},self:{type:String,validator:ot},offset:{type:Array,validator:wn},scrollTarget:wt,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...xt,"click","escapeKey"],setup(e,{slots:n,emit:a,attrs:i}){let t=null,l,r,v;const d=A(),{proxy:s}=d,{$q:o}=s,p=T(null),y=T(!1),u=m(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),f=se(e,o),{registerTick:$,removeTick:_}=Yt(),{registerTimeout:k}=yt(),{transitionProps:g,transitionStyle:h}=Gt(e),{localScrollTarget:b,changeScrollEvent:w,unconfigureScrollTarget:B}=yn(e,ne),{anchorEl:M,canShow:P}=bn({showing:y}),{hide:z}=kt({showing:y,canShow:P,handleShow:Le,handleHide:Te,hideOnRouteChange:u,processOnMount:!0}),{showPortal:O,hidePortal:D,renderPortal:ce}=Jt(d,p,Ee,"menu"),R={anchorEl:M,innerRef:p,onClickOutside(x){if(e.persistent!==!0&&y.value===!0)return z(x),(x.type==="touchstart"||x.target.classList.contains("q-dialog__backdrop"))&&Ke(x),!0}},U=m(()=>rt(e.anchor||(e.cover===!0?"center middle":"bottom start"),o.lang.rtl)),de=m(()=>e.cover===!0?U.value:rt(e.self||"top start",o.lang.rtl)),Y=m(()=>(e.square===!0?" q-menu--square":"")+(f.value===!0?" q-menu--dark q-dark":"")),te=m(()=>e.autoClose===!0?{onClick:Be}:{}),G=m(()=>y.value===!0&&e.persistent!==!0);C(G,x=>{x===!0?(nn(ae),pn(R)):(nt(ae),at(R))});function F(){tn(()=>{let x=p.value;x&&x.contains(document.activeElement)!==!0&&(x=x.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||x.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||x.querySelector("[autofocus], [data-autofocus]")||x,x.focus({preventScroll:!0}))})}function Le(x){if(t=e.noRefocus===!1?document.activeElement:null,Zt(ve),O(),ne(),l=void 0,x!==void 0&&(e.touchPosition||e.contextMenu)){const le=xe(x);if(le.left!==void 0){const{top:$e,left:ie}=M.value.getBoundingClientRect();l={left:le.left-ie,top:le.top-$e}}}r===void 0&&(r=C(()=>o.screen.width+"|"+o.screen.height+"|"+e.self+"|"+e.anchor+"|"+o.lang.rtl,K)),e.noFocus!==!0&&document.activeElement.blur(),$(()=>{K(),e.noFocus!==!0&&F()}),k(()=>{o.platform.is.ios===!0&&(v=e.autoClose,p.value.click()),K(),O(!0),a("show",x)},e.transitionDuration)}function Te(x){_(),D(),fe(!0),t!==null&&(x===void 0||x.qClickOutside!==!0)&&(((x&&x.type.indexOf("key")===0?t.closest('[tabindex]:not([tabindex^="-"])'):void 0)||t).focus(),t=null),k(()=>{D(!0),a("hide",x)},e.transitionDuration)}function fe(x){l=void 0,r!==void 0&&(r(),r=void 0),(x===!0||y.value===!0)&&(en(ve),B(),at(R),nt(ae)),x!==!0&&(t=null)}function ne(){(M.value!==null||e.scrollTarget!==void 0)&&(b.value=qt(M.value,e.scrollTarget),w(b.value,K))}function Be(x){v!==!0?(an(s,x),a("click",x)):v=!1}function ve(x){G.value===!0&&e.noFocus!==!0&&sn(p.value,x.target)!==!0&&F()}function ae(x){a("escapeKey"),z(x)}function K(){St({targetEl:p.value,offset:e.offset,anchorEl:M.value,anchorOrigin:U.value,selfOrigin:de.value,absoluteOffset:l,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Ee(){return S(Mt,g.value,()=>y.value===!0?S("div",{role:"menu",...i,ref:p,tabindex:-1,class:["q-menu q-position-engine scroll"+Y.value,i.class],style:[i.style,h.value],...te.value},j(n.default)):null)}return ee(fe),Object.assign(s,{focus:F,updatePosition:K}),ce}}),Sn=W({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:n}){const a=m(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>S("div",{class:a.value,role:"toolbar"},j(n.default))}}),_n=W({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:n,emit:a}){const{proxy:{$q:i}}=A(),t=Ue(_e,V);if(t===V)return console.error("QHeader needs to be child of QLayout"),V;const l=T(parseInt(e.heightHint,10)),r=T(!0),v=m(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||i.platform.is.ios&&t.isContainer.value===!0),d=m(()=>{if(e.modelValue!==!0)return 0;if(v.value===!0)return r.value===!0?l.value:0;const g=l.value-t.scroll.value.position;return g>0?g:0}),s=m(()=>e.modelValue!==!0||v.value===!0&&r.value!==!0),o=m(()=>e.modelValue===!0&&s.value===!0&&e.reveal===!0),p=m(()=>"q-header q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(s.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),y=m(()=>{const g=t.rows.value.top,h={};return g[0]==="l"&&t.left.space===!0&&(h[i.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),g[2]==="r"&&t.right.space===!0&&(h[i.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),h});function u(g,h){t.update("header",g,h)}function f(g,h){g.value!==h&&(g.value=h)}function $({height:g}){f(l,g),u("size",g)}function _(g){o.value===!0&&f(r,!0),a("focusin",g)}C(()=>e.modelValue,g=>{u("space",g),f(r,!0),t.animate()}),C(d,g=>{u("offset",g)}),C(()=>e.reveal,g=>{g===!1&&f(r,e.modelValue)}),C(r,g=>{t.animate(),a("reveal",g)}),C(t.scroll,g=>{e.reveal===!0&&f(r,g.direction==="up"||g.position<=e.revealOffset||g.position-g.inflectionPoint<100)});const k={};return t.instances.header=k,e.modelValue===!0&&u("size",l.value),u("space",e.modelValue),u("offset",d.value),ee(()=>{t.instances.header===k&&(t.instances.header=void 0,u("size",0),u("offset",0),u("space",!1))}),()=>{const g=bt(n.default,[]);return e.elevated===!0&&g.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),g.push(S(Fe,{debounce:0,onResize:$})),S("header",{class:p.value,style:y.value,onFocusin:_},g)}}}),je=W({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:n}){const a=m(()=>parseInt(e.lines,10)),i=m(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(a.value===1?" ellipsis":"")),t=m(()=>e.lines!==void 0&&a.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":a.value}:null);return()=>S("div",{style:t.value,class:i.value},j(n.default))}}),Ln=W({name:"QList",props:{...ue,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:n}){const a=A(),i=se(e,a.proxy.$q),t=m(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>S(e.tag,{class:t.value},j(n.default))}});const Ye={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Tn=Object.keys(Ye);Ye.all=!0;function st(e){const n={};for(const a of Tn)e[a]===!0&&(n[a]=!0);return Object.keys(n).length===0?Ye:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}const Bn=["INPUT","TEXTAREA"];function ct(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&Bn.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function Re(e,n,a){const i=xe(e);let t,l=i.left-n.event.x,r=i.top-n.event.y,v=Math.abs(l),d=Math.abs(r);const s=n.direction;s.horizontal===!0&&s.vertical!==!0?t=l<0?"left":"right":s.horizontal!==!0&&s.vertical===!0?t=r<0?"up":"down":s.up===!0&&r<0?(t="up",v>d&&(s.left===!0&&l<0?t="left":s.right===!0&&l>0&&(t="right"))):s.down===!0&&r>0?(t="down",v>d&&(s.left===!0&&l<0?t="left":s.right===!0&&l>0&&(t="right"))):s.left===!0&&l<0?(t="left",v<d&&(s.up===!0&&r<0?t="up":s.down===!0&&r>0&&(t="down"))):s.right===!0&&l>0&&(t="right",v<d&&(s.up===!0&&r<0?t="up":s.down===!0&&r>0&&(t="down")));let o=!1;if(t===void 0&&a===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};t=n.event.lastDir,o=!0,t==="left"||t==="right"?(i.left-=l,v=0,l=0):(i.top-=r,d=0,r=0)}return{synthetic:o,payload:{evt:e,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:i,direction:t,isFirst:n.event.isFirst,isFinal:a===!0,duration:Date.now()-n.event.time,distance:{x:v,y:d},offset:{x:l,y:r},delta:{x:i.left-n.event.lastX,y:i.top-n.event.lastY}}}}let En=0;var Ae=zt({name:"touch-pan",beforeMount(e,{value:n,modifiers:a}){if(a.mouse!==!0&&J.has.touch!==!0)return;function i(l,r){a.mouse===!0&&r===!0?Ke(l):(a.stop===!0&&We(l),a.prevent===!0&&pe(l))}const t={uid:"qvtp_"+En++,handler:n,modifiers:a,direction:st(a),noop:mt,mouseStart(l){ct(l,t)&&Pt(l)&&(Z(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(l,!0))},touchStart(l){if(ct(l,t)){const r=l.target;Z(t,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","passiveCapture"],[r,"touchend","end","passiveCapture"]]),t.start(l)}},start(l,r){if(J.is.firefox===!0&&He(e,!0),t.lastEvt=l,r===!0||a.stop===!0){if(t.direction.all!==!0&&(r!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const s=l.type.indexOf("mouse")!==-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&pe(s),l.cancelBubble===!0&&We(s),Object.assign(s,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[t.uid]:l.qClonedBy.concat(t.uid)}),t.initialEvent={target:l.target,event:s}}We(l)}const{left:v,top:d}=xe(l);t.event={x:v,y:d,time:Date.now(),mouse:r===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:v,lastY:d}},move(l){if(t.event===void 0)return;const r=xe(l),v=r.left-t.event.x,d=r.top-t.event.y;if(v===0&&d===0)return;t.lastEvt=l;const s=t.event.mouse===!0,o=()=>{i(l,s);let u;a.preserveCursor!==!0&&a.preservecursor!==!0&&(u=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),s===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ct(),t.styleCleanup=f=>{if(t.styleCleanup=void 0,u!==void 0&&(document.documentElement.style.cursor=u),document.body.classList.remove("non-selectable"),s===!0){const $=()=>{document.body.classList.remove("no-pointer-events--children")};f!==void 0?setTimeout(()=>{$(),f()},50):$()}else f!==void 0&&f()}};if(t.event.detected===!0){t.event.isFirst!==!0&&i(l,t.event.mouse);const{payload:u,synthetic:f}=Re(l,t,!1);u!==void 0&&(t.handler(u)===!1?t.end(l):(t.styleCleanup===void 0&&t.event.isFirst===!0&&o(),t.event.lastX=u.position.left,t.event.lastY=u.position.top,t.event.lastDir=f===!0?void 0:u.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||s===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){o(),t.event.detected=!0,t.move(l);return}const p=Math.abs(v),y=Math.abs(d);p!==y&&(t.direction.horizontal===!0&&p>y||t.direction.vertical===!0&&p<y||t.direction.up===!0&&p<y&&d<0||t.direction.down===!0&&p<y&&d>0||t.direction.left===!0&&p>y&&v<0||t.direction.right===!0&&p>y&&v>0?(t.event.detected=!0,t.move(l)):t.end(l,!0))},end(l,r){if(t.event!==void 0){if(be(t,"temp"),J.is.firefox===!0&&He(e,!1),r===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Re(l===void 0?t.lastEvt:l,t).payload);const{payload:v}=Re(l===void 0?t.lastEvt:l,t,!0),d=()=>{t.handler(v)};t.styleCleanup!==void 0?t.styleCleanup(d):d()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,a.mouse===!0){const l=a.mouseCapture===!0||a.mousecapture===!0?"Capture":"";Z(t,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}J.has.touch===!0&&Z(t,"main",[[e,"touchstart","touchStart",`passive${a.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const a=e.__qtouchpan;a!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&a.end(),a.handler=n.value),a.direction=st(n.modifiers))},beforeUnmount(e){const n=e.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),be(n,"main"),be(n,"temp"),J.is.firefox===!0&&He(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchpan)}});function ge(e,n,a){return a<=n?n:Math.min(a,Math.max(n,e))}const dt=150;var $n=W({name:"QDrawer",inheritAttrs:!1,props:{...pt,...ue,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...xt,"onLayout","miniState"],setup(e,{slots:n,emit:a,attrs:i}){const t=A(),{proxy:{$q:l}}=t,r=se(e,l),{preventBodyScroll:v}=on(),{registerTimeout:d,removeTimeout:s}=yt(),o=Ue(_e,V);if(o===V)return console.error("QDrawer needs to be child of QLayout"),V;let p,y=null,u;const f=T(e.behavior==="mobile"||e.behavior!=="desktop"&&o.totalWidth.value<=e.breakpoint),$=m(()=>e.mini===!0&&f.value!==!0),_=m(()=>$.value===!0?e.miniWidth:e.width),k=T(e.showIfAbove===!0&&f.value===!1?!0:e.modelValue===!0),g=m(()=>e.persistent!==!0&&(f.value===!0||Le.value===!0));function h(c,q){if(M(),c!==!1&&o.animate(),Q(0),f.value===!0){const H=o.instances[Y.value];H!==void 0&&H.belowBreakpoint===!0&&H.hide(!1),I(1),o.isContainer.value!==!0&&v(!0)}else I(0),c!==!1&&Me(!1);d(()=>{c!==!1&&Me(!0),q!==!0&&a("show",c)},dt)}function b(c,q){P(),c!==!1&&o.animate(),I(0),Q(D.value*_.value),ze(),q!==!0?d(()=>{a("hide",c)},dt):s()}const{show:w,hide:B}=kt({showing:k,hideOnRouteChange:g,handleShow:h,handleHide:b}),{addToHistory:M,removeFromHistory:P}=ln(k,B,g),z={belowBreakpoint:f,hide:B},O=m(()=>e.side==="right"),D=m(()=>(l.lang.rtl===!0?-1:1)*(O.value===!0?1:-1)),ce=T(0),R=T(!1),U=T(!1),de=T(_.value*D.value),Y=m(()=>O.value===!0?"left":"right"),te=m(()=>k.value===!0&&f.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:_.value:0),G=m(()=>e.overlay===!0||e.miniToOverlay===!0||o.view.value.indexOf(O.value?"R":"L")!==-1||l.platform.is.ios===!0&&o.isContainer.value===!0),F=m(()=>e.overlay===!1&&k.value===!0&&f.value===!1),Le=m(()=>e.overlay===!0&&k.value===!0&&f.value===!1),Te=m(()=>"fullscreen q-drawer__backdrop"+(k.value===!1&&R.value===!1?" hidden":"")),fe=m(()=>({backgroundColor:`rgba(0,0,0,${ce.value*.4})`})),ne=m(()=>O.value===!0?o.rows.value.top[2]==="r":o.rows.value.top[0]==="l"),Be=m(()=>O.value===!0?o.rows.value.bottom[2]==="r":o.rows.value.bottom[0]==="l"),ve=m(()=>{const c={};return o.header.space===!0&&ne.value===!1&&(G.value===!0?c.top=`${o.header.offset}px`:o.header.space===!0&&(c.top=`${o.header.size}px`)),o.footer.space===!0&&Be.value===!1&&(G.value===!0?c.bottom=`${o.footer.offset}px`:o.footer.space===!0&&(c.bottom=`${o.footer.size}px`)),c}),ae=m(()=>{const c={width:`${_.value}px`,transform:`translateX(${de.value}px)`};return f.value===!0?c:Object.assign(c,ve.value)}),K=m(()=>"q-drawer__content fit "+(o.isContainer.value!==!0?"scroll":"overflow-auto")),Ee=m(()=>`q-drawer q-drawer--${e.side}`+(U.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(r.value===!0?" q-drawer--dark q-dark":"")+(R.value===!0?" no-transition":k.value===!0?"":" q-layout--prevent-focus")+(f.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${$.value===!0?"mini":"standard"}`+(G.value===!0||F.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ne.value===!0?" q-drawer--top-padding":""))),x=m(()=>{const c=l.lang.rtl===!0?e.side:Y.value;return[[Ae,Lt,void 0,{[c]:!0,mouse:!0}]]}),le=m(()=>{const c=l.lang.rtl===!0?Y.value:e.side;return[[Ae,Ge,void 0,{[c]:!0,mouse:!0}]]}),$e=m(()=>{const c=l.lang.rtl===!0?Y.value:e.side;return[[Ae,Ge,void 0,{[c]:!0,mouse:!0,mouseAllDir:!0}]]});function ie(){Tt(f,e.behavior==="mobile"||e.behavior!=="desktop"&&o.totalWidth.value<=e.breakpoint)}C(f,c=>{c===!0?(p=k.value,k.value===!0&&B(!1)):e.overlay===!1&&e.behavior!=="mobile"&&p!==!1&&(k.value===!0?(Q(0),I(0),ze()):w(!1))}),C(()=>e.side,(c,q)=>{o.instances[q]===z&&(o.instances[q]=void 0,o[q].space=!1,o[q].offset=0),o.instances[c]=z,o[c].size=_.value,o[c].space=F.value,o[c].offset=te.value}),C(o.totalWidth,()=>{(o.isContainer.value===!0||document.qScrollPrevented!==!0)&&ie()}),C(()=>e.behavior+e.breakpoint,ie),C(o.isContainer,c=>{k.value===!0&&v(c!==!0),c===!0&&ie()}),C(o.scrollbarWidth,()=>{Q(k.value===!0?0:void 0)}),C(te,c=>{N("offset",c)}),C(F,c=>{a("onLayout",c),N("space",c)}),C(O,()=>{Q()}),C(_,c=>{Q(),Pe(e.miniToOverlay,c)}),C(()=>e.miniToOverlay,c=>{Pe(c,_.value)}),C(()=>l.lang.rtl,()=>{Q()}),C(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(_t(),o.animate())}),C($,c=>{a("miniState",c)});function Q(c){c===void 0?De(()=>{c=k.value===!0?0:_.value,Q(D.value*c)}):(o.isContainer.value===!0&&O.value===!0&&(f.value===!0||Math.abs(c)===_.value)&&(c+=D.value*o.scrollbarWidth.value),de.value=c)}function I(c){ce.value=c}function Me(c){const q=c===!0?"remove":o.isContainer.value!==!0?"add":"";q!==""&&document.body.classList[q]("q-body--drawer-toggle")}function _t(){y!==null&&clearTimeout(y),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),U.value=!0,y=setTimeout(()=>{y=null,U.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Lt(c){if(k.value!==!1)return;const q=_.value,H=ge(c.distance.x,0,q);if(c.isFinal===!0){H>=Math.min(75,q)===!0?w():(o.animate(),I(0),Q(D.value*q)),R.value=!1;return}Q((l.lang.rtl===!0?O.value!==!0:O.value)?Math.max(q-H,0):Math.min(0,H-q)),I(ge(H/q,0,1)),c.isFirst===!0&&(R.value=!0)}function Ge(c){if(k.value!==!0)return;const q=_.value,H=c.direction===e.side,me=(l.lang.rtl===!0?H!==!0:H)?ge(c.distance.x,0,q):0;if(c.isFinal===!0){Math.abs(me)<Math.min(75,q)===!0?(o.animate(),I(1),Q(0)):B(),R.value=!1;return}Q(D.value*me),I(ge(1-me/q,0,1)),c.isFirst===!0&&(R.value=!0)}function ze(){v(!1),Me(!0)}function N(c,q){o.update(e.side,c,q)}function Tt(c,q){c.value!==q&&(c.value=q)}function Pe(c,q){N("size",c===!0?e.miniWidth:q)}return o.instances[e.side]=z,Pe(e.miniToOverlay,_.value),N("space",F.value),N("offset",te.value),e.showIfAbove===!0&&e.modelValue!==!0&&k.value===!0&&e["onUpdate:modelValue"]!==void 0&&a("update:modelValue",!0),Xe(()=>{a("onLayout",F.value),a("miniState",$.value),p=e.showIfAbove===!0;const c=()=>{(k.value===!0?h:b)(!1,!0)};if(o.totalWidth.value!==0){De(c);return}u=C(o.totalWidth,()=>{u(),u=void 0,k.value===!1&&e.showIfAbove===!0&&f.value===!1?w(!1):c()})}),ee(()=>{u!==void 0&&u(),y!==null&&(clearTimeout(y),y=null),k.value===!0&&ze(),o.instances[e.side]===z&&(o.instances[e.side]=void 0,N("size",0),N("offset",0),N("space",!1))}),()=>{const c=[];f.value===!0&&(e.noSwipeOpen===!1&&c.push(ht(S("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),x.value)),c.push(et("div",{ref:"backdrop",class:Te.value,style:fe.value,"aria-hidden":"true",onClick:B},void 0,"backdrop",e.noSwipeBackdrop!==!0&&k.value===!0,()=>$e.value)));const q=$.value===!0&&n.mini!==void 0,H=[S("div",{...i,key:""+q,class:[K.value,i.class]},q===!0?n.mini():j(n.default))];return e.elevated===!0&&k.value===!0&&H.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),c.push(et("aside",{ref:"content",class:Ee.value,style:ae.value},H,"contentclose",e.noSwipeClose!==!0&&f.value===!0,()=>le.value)),S("div",{class:"q-drawer-container"},c)}}}),Mn=W({name:"QPageContainer",setup(e,{slots:n}){const{proxy:{$q:a}}=A(),i=Ue(_e,V);if(i===V)return console.error("QPageContainer needs to be child of QLayout"),V;gt(Ht,!0);const t=m(()=>{const l={};return i.header.space===!0&&(l.paddingTop=`${i.header.size}px`),i.right.space===!0&&(l[`padding${a.lang.rtl===!0?"Left":"Right"}`]=`${i.right.size}px`),i.footer.space===!0&&(l.paddingBottom=`${i.footer.size}px`),i.left.space===!0&&(l[`padding${a.lang.rtl===!0?"Right":"Left"}`]=`${i.left.size}px`),l});return()=>S("div",{class:"q-page-container",style:t.value},j(n.default))}});const{passive:ft}=we,zn=["both","horizontal","vertical"];var Pn=W({name:"QScrollObserver",props:{axis:{type:String,validator:e=>zn.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:wt},emits:["scroll"],setup(e,{emit:n}){const a={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i=null,t,l;C(()=>e.scrollTarget,()=>{d(),v()});function r(){i!==null&&i();const p=Math.max(0,rn(t)),y=un(t),u={top:p-a.position.top,left:y-a.position.left};if(e.axis==="vertical"&&u.top===0||e.axis==="horizontal"&&u.left===0)return;const f=Math.abs(u.top)>=Math.abs(u.left)?u.top<0?"up":"down":u.left<0?"left":"right";a.position={top:p,left:y},a.directionChanged=a.direction!==f,a.delta=u,a.directionChanged===!0&&(a.direction=f,a.inflectionPoint=a.position),n("scroll",{...a})}function v(){t=qt(l,e.scrollTarget),t.addEventListener("scroll",s,ft),s(!0)}function d(){t!==void 0&&(t.removeEventListener("scroll",s,ft),t=void 0)}function s(p){if(p===!0||e.debounce===0||e.debounce==="0")r();else if(i===null){const[y,u]=e.debounce?[setTimeout(r,e.debounce),clearTimeout]:[requestAnimationFrame(r),cancelAnimationFrame];i=()=>{u(y),i=null}}}const{proxy:o}=A();return C(()=>o.$q.lang.rtl,r),Xe(()=>{l=o.$el.parentNode,v()}),ee(()=>{i!==null&&i(),d()}),Object.assign(o,{trigger:s,getPosition:()=>a}),mt}}),Hn=W({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:n,emit:a}){const{proxy:{$q:i}}=A(),t=T(null),l=T(i.screen.height),r=T(e.container===!0?0:i.screen.width),v=T({position:0,direction:"down",inflectionPoint:0}),d=T(0),s=T(Wt.value===!0?0:ye()),o=m(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),p=m(()=>e.container===!1?{minHeight:i.screen.height+"px"}:null),y=m(()=>s.value!==0?{[i.lang.rtl===!0?"left":"right"]:`${s.value}px`}:null),u=m(()=>s.value!==0?{[i.lang.rtl===!0?"right":"left"]:0,[i.lang.rtl===!0?"left":"right"]:`-${s.value}px`,width:`calc(100% + ${s.value}px)`}:null);function f(b){if(e.container===!0||document.qScrollPrevented!==!0){const w={position:b.position.top,direction:b.direction,directionChanged:b.directionChanged,inflectionPoint:b.inflectionPoint.top,delta:b.delta.top};v.value=w,e.onScroll!==void 0&&a("scroll",w)}}function $(b){const{height:w,width:B}=b;let M=!1;l.value!==w&&(M=!0,l.value=w,e.onScrollHeight!==void 0&&a("scrollHeight",w),k()),r.value!==B&&(M=!0,r.value=B),M===!0&&e.onResize!==void 0&&a("resize",b)}function _({height:b}){d.value!==b&&(d.value=b,k())}function k(){if(e.container===!0){const b=l.value>d.value?ye():0;s.value!==b&&(s.value=b)}}let g=null;const h={instances:{},view:m(()=>e.view),isContainer:m(()=>e.container),rootRef:t,height:l,containerHeight:d,scrollbarWidth:s,totalWidth:m(()=>r.value+s.value),rows:m(()=>{const b=e.view.toLowerCase().split(" ");return{top:b[0].split(""),middle:b[1].split(""),bottom:b[2].split("")}}),header:he({size:0,offset:0,space:!1}),right:he({size:300,offset:0,space:!1}),footer:he({size:0,offset:0,space:!1}),left:he({size:300,offset:0,space:!1}),scroll:v,animate(){g!==null?clearTimeout(g):document.body.classList.add("q-body--layout-animate"),g=setTimeout(()=>{g=null,document.body.classList.remove("q-body--layout-animate")},155)},update(b,w,B){h[b][w]=B}};if(gt(_e,h),ye()>0){let B=function(){b=null,w.classList.remove("hide-scrollbar")},M=function(){if(b===null){if(w.scrollHeight>i.screen.height)return;w.classList.add("hide-scrollbar")}else clearTimeout(b);b=setTimeout(B,300)},P=function(z){b!==null&&z==="remove"&&(clearTimeout(b),B()),window[`${z}EventListener`]("resize",M)},b=null;const w=document.body;C(()=>e.container!==!0?"add":"remove",P),e.container!==!0&&P("add"),Ot(()=>{P("remove")})}return()=>{const b=Xt(n.default,[S(Pn,{onScroll:f}),S(Fe,{onResize:$})]),w=S("div",{class:o.value,style:p.value,ref:e.container===!0?void 0:t,tabindex:-1},b);return e.container===!0?S("div",{class:"q-layout-container overflow-hidden",ref:t},[S(Fe,{onResize:_}),S("div",{class:"absolute-full",style:y.value},[S("div",{class:"scroll",style:u.value},[w])])]):w}}});const Wn=Object.assign({name:"EssentialLink"},{__name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:""},icon:{type:String,default:""},localLink:{type:String,default:""}},setup(e){const n=Qt(),a=e;function i(t){a.localLink.length>0&&n.push(a.localLink)}return(t,l)=>(ke(),Ve(Ie,{clickable:"",tag:"a",target:"_blank",href:a.link.length>0?a.link:void 0,onClick:l[0]||(l[0]=r=>i(a.localLink))},{default:E(()=>[a.icon?(ke(),Ve(qe,{key:0,avatar:""},{default:E(()=>[L(dn,{name:a.icon},null,8,["name"])]),_:1})):Rt("",!0),L(qe,null,{default:E(()=>[L(je,null,{default:E(()=>[oe(Ze(a.title),1)]),_:1}),L(je,{caption:""},{default:E(()=>[oe(Ze(a.caption),1)]),_:1})]),_:1})]),_:1},8,["href"]))}});const On=re("span",null," Dark mode ",-1),Qn={class:"checkbox-wrapper-54"},Rn={class:"switch"},An=re("span",{class:"slider"},null,-1),Gn=Object.assign({name:"MainLayout"},{__name:"MainLayout",setup(e){const n=At(),a=Dt(),i=T(n.isDarkMode),t=T(!1),l=[{title:"Home",caption:"Go to the home page",icon:"home",localLink:"/"},{title:"LinkedIn",caption:"My social LinkedIn profile",icon:"school",link:"https://www.linkedin.com/in/sander-rooiman-913a8514b"},{title:"Github",caption:"github.com/rednas174",icon:"code",link:"https://github.com/rednas174"},{title:"Professional experience",caption:"Working experience and schooling",icon:"dvr",localLink:"/work_experience"},{title:"Personal experience",caption:"Experience from my own projects",icon:"developer_board",localLink:"/personal_experience"},{title:"Personal",caption:"Who am I?",icon:"person",localLink:"/personal"},{title:"Ichi",caption:"Objectively the best kitten that exists in the world",icon:"pets",localLink:"/ichi"}];C(i,async(v,d)=>{n.setDarkMode(v),a.dark.set(v),a.localStorage.set("darkMode",v)});function r(){t.value=!t.value}return(v,d)=>{const s=Ft("router-view");return ke(),Ve(Hn,{view:"lHh Lpr lFf"},{default:E(()=>[L(_n,null,{default:E(()=>[L(Sn,null,{default:E(()=>[L(Je,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:r}),L(fn,null,{default:E(()=>[oe(" Sander Rooiman ")]),_:1}),L(Je,{flat:"",dense:"",round:"",icon:"settings","aria-label":"Menu"},{default:E(()=>[L(Cn,null,{default:E(()=>[L(Ie,null,{default:E(()=>[L(qe,{class:"menu-title"},{default:E(()=>[oe(" Settings ")]),_:1})]),_:1}),L(mn),L(Ie,null,{default:E(()=>[L(qe,{avatar:""},{default:E(()=>[On,re("span",Qn,[re("label",Rn,[ht(re("input",{type:"checkbox","onUpdate:modelValue":d[0]||(d[0]=o=>i.value=o)},null,512),[[Vt,i.value]]),An])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),L($n,{modelValue:t.value,"onUpdate:modelValue":d[1]||(d[1]=o=>t.value=o),"show-if-above":"",bordered:""},{default:E(()=>[L(Ln,null,{default:E(()=>[L(je,{header:""},{default:E(()=>[oe(" Essential Links ")]),_:1}),(ke(),It(Kt,null,Nt(l,o=>L(Wn,jt({key:o.title,ref_for:!0},o),null,16)),64))]),_:1})]),_:1},8,["modelValue"]),L(Mn,null,{default:E(()=>[L(cn,null,{default:E(()=>[L(s,{style:{height:"calc(100vh - 50px)"}})]),_:1})]),_:1})]),_:1})}}});export{Gn as default};
