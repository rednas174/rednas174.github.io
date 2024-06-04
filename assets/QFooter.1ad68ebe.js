import{c as J,a as d,h as y,k as ye,m as O,a4 as we,r as C,d as oe,o as Ee,z as De,s as be,i as He,a5 as We,g as le,a6 as je,w as B,A as Oe,a1 as Ke,a7 as Ne,Q as Te,q as Ue,C as Ge}from"./index.91126b0b.js";import{h as Ce,c as qe}from"./render.6d35d8b0.js";import{R as Xe,Q as Z}from"./Ripple.8ee49309.js";import{e as ae,f as ge}from"./use-prevent-scroll.3977cccc.js";var ut=J({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:b}){const v=d(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>y(e.tag,{class:v.value},Ce(b.default))}});let ne,X=0;const m=new Array(256);for(let e=0;e<256;e++)m[e]=(e+256).toString(16).substring(1);const Ze=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return b=>{const v=new Uint8Array(b);return e.getRandomValues(v),v}}return b=>{const v=[];for(let c=b;c>0;c--)v.push(Math.floor(Math.random()*256));return v}})(),me=4096;function Je(){(ne===void 0||X+16>me)&&(X=0,ne=Ze(me));const e=Array.prototype.slice.call(ne,X,X+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,m[e[0]]+m[e[1]]+m[e[2]]+m[e[3]]+"-"+m[e[4]]+m[e[5]]+"-"+m[e[6]]+m[e[7]]+"-"+m[e[8]]+m[e[9]]+"-"+m[e[10]]+m[e[11]]+m[e[12]]+m[e[13]]+m[e[14]]+m[e[15]]}let Ye=0;const pe=["click","keydown"],et={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Ye++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function tt(e,b,v,c){const a=ye(we,O);if(a===O)return console.error("QTab/QRouteTab component needs to be child of QTabs"),O;const{proxy:L}=le(),_=C(null),z=C(null),P=C(null),E=d(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),I=d(()=>a.currentModel.value===e.name),D=d(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(I.value===!0?" q-tab--active"+(a.tabProps.value.activeClass?" "+a.tabProps.value.activeClass:"")+(a.tabProps.value.activeColor?` text-${a.tabProps.value.activeColor}`:"")+(a.tabProps.value.activeBgColor?` bg-${a.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&a.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||a.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(c!==void 0?c.linkClass.value:"")),A=d(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(a.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),q=d(()=>e.disable===!0||a.hasFocus.value===!0||I.value===!1&&a.hasActiveTab.value===!0?-1:e.tabindex||0);function S(r,w){if(w!==!0&&_.value!==null&&_.value.focus(),e.disable===!0){c!==void 0&&c.hasRouterLink.value===!0&&be(r);return}if(c===void 0){a.updateModel({name:e.name}),v("click",r);return}if(c.hasRouterLink.value===!0){const o=(u={})=>{let R;const k=u.to===void 0||je(u.to,e.to)===!0?a.avoidRouteWatcher=Je():null;return c.navigateToRouterLink(r,{...u,returnRouterError:!0}).catch(Q=>{R=Q}).then(Q=>{if(k===a.avoidRouteWatcher&&(a.avoidRouteWatcher=!1,R===void 0&&(Q===void 0||Q.message!==void 0&&Q.message.startsWith("Avoided redundant navigation")===!0)&&a.updateModel({name:e.name})),u.returnRouterError===!0)return R!==void 0?Promise.reject(R):Q})};v("click",r,o),r.defaultPrevented!==!0&&o();return}v("click",r)}function g(r){He(r,[13,32])?S(r,!0):We(r)!==!0&&r.keyCode>=35&&r.keyCode<=40&&r.altKey!==!0&&r.metaKey!==!0&&a.onKbdNavigate(r.keyCode,L.$el)===!0&&be(r),v("keydown",r)}function x(){const r=a.tabProps.value.narrowIndicator,w=[],o=y("div",{ref:P,class:["q-tab__indicator",a.tabProps.value.indicatorClass]});e.icon!==void 0&&w.push(y(Z,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&w.push(y("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&w.push(e.alertIcon!==void 0?y(Z,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):y("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),r===!0&&w.push(o);const u=[y("div",{class:"q-focus-helper",tabindex:-1,ref:_}),y("div",{class:A.value},qe(b.default,w))];return r===!1&&u.push(o),u}const M={name:d(()=>e.name),rootRef:z,tabIndicatorRef:P,routeData:c};oe(()=>{a.unregisterTab(M)}),Ee(()=>{a.registerTab(M)});function H(r,w){const o={ref:z,class:D.value,tabindex:q.value,role:"tab","aria-selected":I.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:S,onKeydown:g,...w};return De(y(r,o,x()),[[Xe,E.value]])}return{renderTab:H,$tabs:a}}var st=J({name:"QTab",props:et,emits:pe,setup(e,{slots:b,emit:v}){const{renderTab:c}=tt(e,b,v);return()=>c("div")}});let _e=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const b=document.createElement("div");Object.assign(b.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(b),e.scrollLeft=-1e3,_e=e.scrollLeft>=0,e.remove()}function at(e,b,v){const c=v===!0?["left","right"]:["top","bottom"];return`absolute-${b===!0?c[0]:c[1]}${e?` text-${e}`:""}`}const nt=["left","center","right","justify"];var ct=J({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>nt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:b,emit:v}){const{proxy:c}=le(),{$q:a}=c,{registerTick:L}=ae(),{registerTick:_}=ae(),{registerTick:z}=ae(),{registerTimeout:P,removeTimeout:E}=ge(),{registerTimeout:I,removeTimeout:D}=ge(),A=C(null),q=C(null),S=C(e.modelValue),g=C(!1),x=C(!0),M=C(!1),H=C(!1),r=[],w=C(0),o=C(!1);let u=null,R=null,k;const Q=d(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:at(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),Re=d(()=>{const t=w.value,n=S.value;for(let l=0;l<t;l++)if(r[l].name.value===n)return!0;return!1}),Se=d(()=>`q-tabs__content--align-${g.value===!0?"left":H.value===!0?"justify":e.align}`),xe=d(()=>`q-tabs row no-wrap items-center q-tabs--${g.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Le=d(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+Se.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),K=d(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),N=d(()=>e.vertical!==!0&&a.lang.rtl===!0),Y=d(()=>_e===!1&&N.value===!0);B(N,j),B(()=>e.modelValue,t=>{p({name:t,setCurrent:!0,skipEmit:!0})}),B(()=>e.outsideArrows,U);function p({name:t,setCurrent:n,skipEmit:l}){S.value!==t&&(l!==!0&&e["onUpdate:modelValue"]!==void 0&&v("update:modelValue",t),(n===!0||e["onUpdate:modelValue"]===void 0)&&(ke(S.value,t),S.value=t))}function U(){L(()=>{re({width:A.value.offsetWidth,height:A.value.offsetHeight})})}function re(t){if(K.value===void 0||q.value===null)return;const n=t[K.value.container],l=Math.min(q.value[K.value.scroll],Array.prototype.reduce.call(q.value.children,(h,s)=>h+(s[K.value.content]||0),0)),f=n>0&&l>n;g.value=f,f===!0&&_(j),H.value=n<parseInt(e.breakpoint,10)}function ke(t,n){const l=t!=null&&t!==""?r.find(h=>h.name.value===t):null,f=n!=null&&n!==""?r.find(h=>h.name.value===n):null;if(l&&f){const h=l.tabIndicatorRef.value,s=f.tabIndicatorRef.value;u!==null&&(clearTimeout(u),u=null),h.style.transition="none",h.style.transform="none",s.style.transition="none",s.style.transform="none";const i=h.getBoundingClientRect(),T=s.getBoundingClientRect();s.style.transform=e.vertical===!0?`translate3d(0,${i.top-T.top}px,0) scale3d(1,${T.height?i.height/T.height:1},1)`:`translate3d(${i.left-T.left}px,0,0) scale3d(${T.width?i.width/T.width:1},1,1)`,z(()=>{u=setTimeout(()=>{u=null,s.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",s.style.transform="none"},70)})}f&&g.value===!0&&W(f.rootRef.value)}function W(t){const{left:n,width:l,top:f,height:h}=q.value.getBoundingClientRect(),s=t.getBoundingClientRect();let i=e.vertical===!0?s.top-f:s.left-n;if(i<0){q.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(i),j();return}i+=e.vertical===!0?s.height-h:s.width-l,i>0&&(q.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(i),j())}function j(){const t=q.value;if(t===null)return;const n=t.getBoundingClientRect(),l=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);N.value===!0?(x.value=Math.ceil(l+n.width)<t.scrollWidth-1,M.value=l>0):(x.value=l>0,M.value=e.vertical===!0?Math.ceil(l+n.height)<t.scrollHeight:Math.ceil(l+n.width)<t.scrollWidth)}function ie(t){R!==null&&clearInterval(R),R=setInterval(()=>{Ie(t)===!0&&F()},5)}function ue(){ie(Y.value===!0?Number.MAX_SAFE_INTEGER:0)}function se(){ie(Y.value===!0?0:Number.MAX_SAFE_INTEGER)}function F(){R!==null&&(clearInterval(R),R=null)}function Be(t,n){const l=Array.prototype.filter.call(q.value.children,T=>T===n||T.matches&&T.matches(".q-tab.q-focusable")===!0),f=l.length;if(f===0)return;if(t===36)return W(l[0]),l[0].focus(),!0;if(t===35)return W(l[f-1]),l[f-1].focus(),!0;const h=t===(e.vertical===!0?38:37),s=t===(e.vertical===!0?40:39),i=h===!0?-1:s===!0?1:void 0;if(i!==void 0){const T=N.value===!0?-1:1,$=l.indexOf(n)+i*T;return $>=0&&$<f&&(W(l[$]),l[$].focus({preventScroll:!0})),!0}}const Pe=d(()=>Y.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,n)=>{t.scrollLeft=-n}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,n)=>{t.scrollTop=n}}:{get:t=>t.scrollLeft,set:(t,n)=>{t.scrollLeft=n}});function Ie(t){const n=q.value,{get:l,set:f}=Pe.value;let h=!1,s=l(n);const i=t<s?-1:1;return s+=i*5,s<0?(h=!0,s=0):(i===-1&&s<=t||i===1&&s>=t)&&(h=!0,s=t),f(n,s),j(),h}function ce(t,n){for(const l in t)if(t[l]!==n[l])return!1;return!0}function Ae(){let t=null,n={matchedLen:0,queryDiff:9999,hrefLen:0};const l=r.filter(i=>i.routeData!==void 0&&i.routeData.hasRouterLink.value===!0),{hash:f,query:h}=c.$route,s=Object.keys(h).length;for(const i of l){const T=i.routeData.exact.value===!0;if(i.routeData[T===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:$,query:ee,matched:Ve,href:ze}=i.routeData.resolvedLink.value,te=Object.keys(ee).length;if(T===!0){if($!==f||te!==s||ce(h,ee)===!1)continue;t=i.name.value;break}if($!==""&&$!==f||te!==0&&ce(ee,h)===!1)continue;const V={matchedLen:Ve.length,queryDiff:s-te,hrefLen:ze.length-$.length};if(V.matchedLen>n.matchedLen){t=i.name.value,n=V;continue}else if(V.matchedLen!==n.matchedLen)continue;if(V.queryDiff<n.queryDiff)t=i.name.value,n=V;else if(V.queryDiff!==n.queryDiff)continue;V.hrefLen>n.hrefLen&&(t=i.name.value,n=V)}t===null&&r.some(i=>i.routeData===void 0&&i.name.value===S.value)===!0||p({name:t,setCurrent:!0})}function $e(t){if(E(),o.value!==!0&&A.value!==null&&t.target&&typeof t.target.closest=="function"){const n=t.target.closest(".q-tab");n&&A.value.contains(n)===!0&&(o.value=!0,g.value===!0&&W(n))}}function Me(){P(()=>{o.value=!1},30)}function G(){ve.avoidRouteWatcher===!1?I(Ae):D()}function de(){if(k===void 0){const t=B(()=>c.$route.fullPath,G);k=()=>{t(),k=void 0}}}function Qe(t){r.push(t),w.value++,U(),t.routeData===void 0||c.$route===void 0?I(()=>{if(g.value===!0){const n=S.value,l=n!=null&&n!==""?r.find(f=>f.name.value===n):null;l&&W(l.rootRef.value)}}):(de(),t.routeData.hasRouterLink.value===!0&&G())}function Fe(t){r.splice(r.indexOf(t),1),w.value--,U(),k!==void 0&&t.routeData!==void 0&&(r.every(n=>n.routeData===void 0)===!0&&k(),G())}const ve={currentModel:S,tabProps:Q,hasFocus:o,hasActiveTab:Re,registerTab:Qe,unregisterTab:Fe,verifyRouteModel:G,updateModel:p,onKbdNavigate:Be,avoidRouteWatcher:!1};Oe(we,ve);function fe(){u!==null&&clearTimeout(u),F(),k!==void 0&&k()}let he;return oe(fe),Ke(()=>{he=k!==void 0,fe()}),Ne(()=>{he===!0&&de(),U()}),()=>y("div",{ref:A,class:xe.value,role:"tablist",onFocusin:$e,onFocusout:Me},[y(Te,{onResize:re}),y("div",{ref:q,class:Le.value,onScroll:j},Ce(b.default)),y(Z,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(x.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||a.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:ue,onTouchstartPassive:ue,onMouseupPassive:F,onMouseleavePassive:F,onTouchendPassive:F}),y(Z,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(M.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||a.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:se,onTouchstartPassive:se,onMouseupPassive:F,onMouseleavePassive:F,onTouchendPassive:F})])}}),dt=J({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:b,emit:v}){const{proxy:{$q:c}}=le(),a=ye(Ue,O);if(a===O)return console.error("QFooter needs to be child of QLayout"),O;const L=C(parseInt(e.heightHint,10)),_=C(!0),z=C(Ge.value===!0||a.isContainer.value===!0?0:window.innerHeight),P=d(()=>e.reveal===!0||a.view.value.indexOf("F")!==-1||c.platform.is.ios&&a.isContainer.value===!0),E=d(()=>a.isContainer.value===!0?a.containerHeight.value:z.value),I=d(()=>{if(e.modelValue!==!0)return 0;if(P.value===!0)return _.value===!0?L.value:0;const o=a.scroll.value.position+E.value+L.value-a.height.value;return o>0?o:0}),D=d(()=>e.modelValue!==!0||P.value===!0&&_.value!==!0),A=d(()=>e.modelValue===!0&&D.value===!0&&e.reveal===!0),q=d(()=>"q-footer q-layout__section--marginal "+(P.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(D.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(P.value!==!0?" hidden":""):"")),S=d(()=>{const o=a.rows.value.bottom,u={};return o[0]==="l"&&a.left.space===!0&&(u[c.lang.rtl===!0?"right":"left"]=`${a.left.size}px`),o[2]==="r"&&a.right.space===!0&&(u[c.lang.rtl===!0?"left":"right"]=`${a.right.size}px`),u});function g(o,u){a.update("footer",o,u)}function x(o,u){o.value!==u&&(o.value=u)}function M({height:o}){x(L,o),g("size",o)}function H(){if(e.reveal!==!0)return;const{direction:o,position:u,inflectionPoint:R}=a.scroll.value;x(_,o==="up"||u-R<100||a.height.value-E.value-u-L.value<300)}function r(o){A.value===!0&&x(_,!0),v("focusin",o)}B(()=>e.modelValue,o=>{g("space",o),x(_,!0),a.animate()}),B(I,o=>{g("offset",o)}),B(()=>e.reveal,o=>{o===!1&&x(_,e.modelValue)}),B(_,o=>{a.animate(),v("reveal",o)}),B([L,a.scroll,a.height],H),B(()=>c.screen.height,o=>{a.isContainer.value!==!0&&x(z,o)});const w={};return a.instances.footer=w,e.modelValue===!0&&g("size",L.value),g("space",e.modelValue),g("offset",I.value),oe(()=>{a.instances.footer===w&&(a.instances.footer=void 0,g("size",0),g("offset",0),g("space",!1))}),()=>{const o=qe(b.default,[y(Te,{debounce:0,onResize:M})]);return e.elevated===!0&&o.push(y("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),y("footer",{class:q.value,style:S.value,onFocusin:r},o)}}});export{dt as Q,ut as a,ct as b,st as c};
