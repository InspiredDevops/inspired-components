/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),i=new WeakMap;let r=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const n=this.t;if(t&&void 0===e){const t=void 0!==n&&1===n.length;t&&(e=i.get(n)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&i.set(n,e))}return e}toString(){return this.cssText}};const s=e=>new r("string"==typeof e?e:e+"",void 0,n),o=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return s(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:a,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:c,getOwnPropertySymbols:h,getPrototypeOf:p}=Object,m=globalThis,u=m.trustedTypes,g=u?u.emptyScript:"",v=m.reactiveElementPolyfillSupport,b=(e,t)=>e,f={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},y=(e,t)=>!a(e,t),$={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class S extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=$){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(e,n,t);void 0!==i&&l(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){const{get:i,set:r}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){const s=i?.call(this);r.call(this,t),this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??$}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const e=p(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const e=this.properties,t=[...c(e),...h(e)];for(const n of t)this.createProperty(n,e[n])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const n=this._$Eu(e,t);void 0!==n&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(o(e))}else void 0!==e&&t.push(o(e));return t}static _$Eu(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const n=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((n,i)=>{if(t)n.adoptedStyleSheets=i.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const t of i){const i=document.createElement("style"),r=e.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=t.cssText,n.appendChild(i)}})(n,this.constructor.elementStyles),n}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EC(e,t){const n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(void 0!==i&&!0===n.reflect){const r=(void 0!==n.converter?.toAttribute?n.converter:f).toAttribute(t,n.type);this._$Em=e,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){const n=this.constructor,i=n._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=n.getPropertyOptions(i),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:f;this._$Em=i,this[i]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,n){if(void 0!==e){if(n??=this.constructor.getPropertyOptions(e),!(n.hasChanged??y)(this[e],t))return;this.P(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,n]of e)!0!==n.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],n)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[b("elementProperties")]=new Map,S[b("finalized")]=new Map,v?.({ReactiveElement:S}),(m.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,w=x.trustedTypes,k=w?w.createPolicy("lit-html",{createHTML:e=>e}):void 0,_="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,A="?"+E,C=`<${A}>`,I=document,D=()=>I.createComment(""),P=e=>null===e||"object"!=typeof e&&"function"!=typeof e,z=Array.isArray,T="[ \t\n\f\r]",F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,q=/>/g,B=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),O=/'/g,U=/"/g,M=/^(?:script|style|textarea|title)$/i,N=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),H=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),L=new WeakMap,W=I.createTreeWalker(I,129);function G(e,t){if(!z(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(t):t}const V=(e,t)=>{const n=e.length-1,i=[];let r,s=2===t?"<svg>":3===t?"<math>":"",o=F;for(let t=0;t<n;t++){const n=e[t];let a,l,d=-1,c=0;for(;c<n.length&&(o.lastIndex=c,l=o.exec(n),null!==l);)c=o.lastIndex,o===F?"!--"===l[1]?o=j:void 0!==l[1]?o=q:void 0!==l[2]?(M.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=B):void 0!==l[3]&&(o=B):o===B?">"===l[0]?(o=r??F,d=-1):void 0===l[1]?d=-2:(d=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?B:'"'===l[3]?U:O):o===U||o===O?o=B:o===j||o===q?o=F:(o=B,r=void 0);const h=o===B&&e[t+1].startsWith("/>")?" ":"";s+=o===F?n+C:d>=0?(i.push(a),n.slice(0,d)+_+n.slice(d)+E+h):n+E+(-2===d?t:h)}return[G(e,s+(e[n]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class Y{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let r=0,s=0;const o=e.length-1,a=this.parts,[l,d]=V(e,t);if(this.el=Y.createElement(l,n),W.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=W.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(_)){const t=d[s++],n=i.getAttribute(e).split(E),o=/([.?@])?(.*)/.exec(t);a.push({type:1,index:r,name:o[2],strings:n,ctor:"."===o[1]?X:"?"===o[1]?ee:"@"===o[1]?te:Q}),i.removeAttribute(e)}else e.startsWith(E)&&(a.push({type:6,index:r}),i.removeAttribute(e));if(M.test(i.tagName)){const e=i.textContent.split(E),t=e.length-1;if(t>0){i.textContent=w?w.emptyScript:"";for(let n=0;n<t;n++)i.append(e[n],D()),W.nextNode(),a.push({type:2,index:++r});i.append(e[t],D())}}}else if(8===i.nodeType)if(i.data===A)a.push({type:2,index:r});else{let e=-1;for(;-1!==(e=i.data.indexOf(E,e+1));)a.push({type:7,index:r}),e+=E.length-1}r++}}static createElement(e,t){const n=I.createElement("template");return n.innerHTML=e,n}}function K(e,t,n=e,i){if(t===H)return t;let r=void 0!==i?n._$Co?.[i]:n._$Cl;const s=P(t)?void 0:t._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),void 0===s?r=void 0:(r=new s(e),r._$AT(e,n,i)),void 0!==i?(n._$Co??=[])[i]=r:n._$Cl=r),void 0!==r&&(t=K(e,r._$AS(e,t.values),r,i)),t}class J{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,i=(e?.creationScope??I).importNode(t,!0);W.currentNode=i;let r=W.nextNode(),s=0,o=0,a=n[0];for(;void 0!==a;){if(s===a.index){let t;2===a.type?t=new Z(r,r.nextSibling,this,e):1===a.type?t=new a.ctor(r,a.name,a.strings,this,e):6===a.type&&(t=new ne(r,this,e)),this._$AV.push(t),a=n[++o]}s!==a?.index&&(r=W.nextNode(),s++)}return W.currentNode=I,i}p(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class Z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=K(this,e,t),P(e)?e===R||null==e||""===e?(this._$AH!==R&&this._$AR(),this._$AH=R):e!==this._$AH&&e!==H&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>z(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==R&&P(this._$AH)?this._$AA.nextSibling.data=e:this.T(I.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:n}=e,i="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=Y.createElement(G(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new J(i,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=L.get(e.strings);return void 0===t&&L.set(e.strings,t=new Y(e)),t}k(e){z(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,i=0;for(const r of e)i===t.length?t.push(n=new Z(this.O(D()),this.O(D()),this,this.options)):n=t[i],n._$AI(r),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,r){this.type=1,this._$AH=R,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=R}_$AI(e,t=this,n,i){const r=this.strings;let s=!1;if(void 0===r)e=K(this,e,t,0),s=!P(e)||e!==this._$AH&&e!==H,s&&(this._$AH=e);else{const i=e;let o,a;for(e=r[0],o=0;o<r.length-1;o++)a=K(this,i[n+o],t,o),a===H&&(a=this._$AH[o]),s||=!P(a)||a!==this._$AH[o],a===R?e=R:e!==R&&(e+=(a??"")+r[o+1]),this._$AH[o]=a}s&&!i&&this.j(e)}j(e){e===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class X extends Q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===R?void 0:e}}class ee extends Q{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==R)}}class te extends Q{constructor(e,t,n,i,r){super(e,t,n,i,r),this.type=5}_$AI(e,t=this){if((e=K(this,e,t,0)??R)===H)return;const n=this._$AH,i=e===R&&n!==R||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==R&&(n===R||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ne{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}}const ie=x.litHtmlPolyfillSupport;ie?.(Y,Z),(x.litHtmlVersions??=[]).push("3.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class re extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,n)=>{const i=n?.renderBefore??t;let r=i._$litPart$;if(void 0===r){const e=n?.renderBefore??null;i._$litPart$=r=new Z(t.insertBefore(D(),e),e,void 0,n??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return H}}re._$litElement$=!0,re.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:re});const se=globalThis.litElementPolyfillSupport;se?.({LitElement:re}),(globalThis.litElementVersions??=[]).push("4.1.1");var oe,ae="basil",le="https://js.stripe.com",de="".concat(le,"/").concat(ae,"/stripe.js"),ce=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,he=/^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/,pe=function(e){var t=document.createElement("script");t.src="".concat(de).concat("");var n=document.head||document.body;if(!n)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return n.appendChild(t),t},me=null,ue=null,ge=null,ve=function(e){return null!==me?me:(me=new Promise((function(t,n){if("undefined"!=typeof window&&"undefined"!=typeof document)if(window.Stripe)t(window.Stripe);else try{var i=function(){for(var e,t=document.querySelectorAll('script[src^="'.concat(le,'"]')),n=0;n<t.length;n++){var i=t[n];if(e=i.src,ce.test(e)||he.test(e))return i}return null}();if(i&&e);else if(i){if(i&&null!==ge&&null!==ue){var r;i.removeEventListener("load",ge),i.removeEventListener("error",ue),null===(r=i.parentNode)||void 0===r||r.removeChild(i),i=pe()}}else i=pe();ge=function(e,t){return function(){window.Stripe?e(window.Stripe):t(new Error("Stripe.js not available"))}}(t,n),ue=function(e){return function(t){e(new Error("Failed to load Stripe.js",{cause:t}))}}(n),i.addEventListener("load",ge),i.addEventListener("error",ue)}catch(e){return void n(e)}else t(null)})),me.catch((function(e){return me=null,Promise.reject(e)})))},be=!1,fe=function(){return oe||(oe=ve(null).catch((function(e){return oe=null,Promise.reject(e)})))};Promise.resolve().then((function(){return fe()})).catch((function(e){be||console.warn(e)}));var ye=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];be=!0;var i=Date.now();return fe().then((function(e){return function(e,t,n){if(null===e)return null;var i=t[0].match(/^pk_test/),r=function(e){return 3===e?"v3":e}(e.version),s=ae;i&&r!==s&&console.warn("Stripe.js@".concat(r," was loaded on the page, but @stripe/stripe-js@").concat("7.3.1"," expected Stripe.js@").concat(s,". This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning"));var o=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"7.3.1",startTime:t})}(o,n),o}(e,t,i)}))};class $e extends re{couponCode="";couponStatus=null;discountPercent=0;discountedTotal=null;static properties={widgetId:{type:String},color:{type:String},loading:{type:Boolean},stripeConfig:{type:Object},services:{type:Object},globalAdditionalServices:{type:Array},squareFootagePricing:{type:Array},selectedService:{type:Object},selectedExtras:{type:Array},selectedSquareFootage:{type:Object},currentStep:{type:Number},showServiceDetails:{type:Boolean},paymentProcessing:{type:Boolean},paymentError:{type:String},bookingData:{type:Object},cardData:{type:Object},businessHours:{type:Object},formError:{type:String},invalidFields:{type:Object}};constructor(){super(),this.widgetId="",this.color="#6366f1",this.loading=!1,this.stripeConfig=null,this.services=new Map,this.globalAdditionalServices=[],this.squareFootagePricing=[],this.selectedService=null,this.selectedExtras=[],this.selectedSquareFootage=null,this.currentStep=1,this.showServiceDetails=!1,this.paymentProcessing=!1,this.paymentError="",this.bookingData={serviceInfo:null,schedule:{date:"",time:"",frequency:"one-time",notes:""},generalInfo:{name:"",email:"",phone:"",address:"",postalCode:"",state:""},payment:{method:"card"},additionalData:[]},this.cardData={cardNumber:"",cardName:"",expiryDate:"",cvv:""},this.bathroomOptions=[{label:"Full bathroom (sink + toilet + shower and/or tub)",value:"full_bathroom"},{label:"Powder room (sink + toilet)",value:"powder_room"},{label:"Master bath (usually larger, often with double sink)",value:"master_bath"},{label:"Guest bath",value:"guest_bath"},{label:"En suite bath (connected to bedroom)",value:"en_suite_bath"},{label:"Staff bath",value:"staff_bath"},{label:"Pool bath (next to pool or outdoor area)",value:"pool_bath"}],this.selectedBathrooms=[],this.selectedBathroom="",this.apiSecret="booking-d9e180f3-d77d-4c25-a163-4605c8ddfb48",this.businessHours={start:7,end:17},this.formError="",this.invalidFields={}}handleBathroomRadio(e){const{value:t}=e.target;this.selectedBathroom=t;const n=this.bathroomOptions.find((e=>e.value===t)),i=n?n.label:t;this.bookingData={...this.bookingData,additionalData:i},console.log("🛁 [BathroomType Selected]",{selectedBathroom:t,additionalData:this.bookingData.additionalData}),this.requestUpdate()}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setupGlobalStyles(),this.fetchBookingSettings().then((()=>this.initializeStripe()))}setupGlobalStyles(){if(!document.getElementById("booking-widget-global-styles")){const e=document.createElement("style");e.id="booking-widget-global-styles",e.textContent='\n        :root {\n          --primary-color: #6366f1;\n          --primary-light: #a5b4fc;\n          --primary-dark: #4f46e5;\n          --text-color: #1e293b;\n          --light-gray: #f8fafc;\n          --medium-gray: #e2e8f0;\n          --dark-gray: #94a3b8;\n          --success-color: rgb(2, 148, 46);\n          --error-color: #ef4444;\n          --border-radius: 12px;\n          --box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),\n                        0 4px 6px -2px rgba(0, 0, 0, 0.05);\n          --transition: all 0.3s ease;\n        }\n        \n        /* Todos tus otros estilos CSS aquí */\n        .container {\n          max-width: 1200px;\n          margin: 0 auto;\n          padding: 2rem 1rem;\n          color: var(--text-color);\n        }\n        \n        * {\n      box-sizing: border-box;\n      margin: 0;\n      padding: 0;\n    }\n\n    html {\n      scroll-behavior: smooth;\n    }\n\n    .container {\n      max-width: 1200px;\n      margin: 0 auto;\n      padding: 2rem 1rem;\n      color: var(--text-color);\n    }\n\n    h1,\n    h2,\n    h3,\n    h4 {\n      text-align: center;\n      margin-bottom: 1.5rem;\n      font-weight: 600;\n      color: var(--primary-dark);\n    }\n\n    h3 {\n      font-size: 1.5rem;\n      margin-bottom: 2rem;\n    }\n\n    /* Step Indicator */\n    .step-indicator {\n      display: flex;\n      justify-content: center;\n      margin-bottom: 3rem;\n      position: relative;\n    }\n\n    .step-progress {\n      position: absolute;\n      top: 15px;\n      left: 0;\n      right: 0;\n      height: 4px;\n      background: var(--medium-gray);\n      z-index: 1;\n    }\n\n    .step-progress-bar {\n      height: 100%;\n      background: var(--primary-color);\n      transition: width 0.3s ease;\n    }\n\n    .steps-container {\n      display: flex;\n      justify-content: space-between;\n      width: 100%;\n      position: relative;\n      z-index: 2;\n    }\n\n    .step {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n\n    .step-number {\n      width: 32px;\n      height: 32px;\n      border-radius: 50%;\n      background-color: var(--medium-gray);\n      color: var(--text-color);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin-bottom: 0.5rem;\n      font-weight: 500;\n      border: 3px solid white;\n    }\n\n    .step.active .step-number {\n      background-color: var(--primary-color);\n      color: white;\n    }\n\n    .step.completed .step-number {\n      background-color: var(--success-color);\n      color: white;\n    }\n\n    .step-label {\n      font-size: 0.875rem;\n      font-weight: 500;\n      color: var(--dark-gray);\n      text-align: center;\n      max-width: 80px;\n    }\n\n    .step.active .step-label,\n    .step.completed .step-label {\n      color: var(--text-color);\n      font-weight: 600;\n    }\n\n    /* Service Cards */\n    .selection-grid {\n      display: grid;\n      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n      gap: 1.5rem;\n      margin: 2rem 0;\n    }\n\n    .service-card {\n      border: 1px solid var(--medium-gray);\n      border-radius: var(--border-radius);\n      padding: 1rem;\n      cursor: pointer;\n      transition: var(--transition);\n    }\n\n    .service-card.selected {\n      /* Estilos para la tarjeta seleccionada */\n      border-color: #1976d2; /* ejemplo: azul primario */\n      background: #e3f2fd; /* ejemplo: azul muy claro de fondo */\n      /* Puedes ajustar colores/borde según tu diseño, o usar variables CSS compartidas */\n    }\n\n    .service-card:hover {\n      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),\n        0 10px 10px -5px rgba(0, 0, 0, 0.04);\n    }\n\n    .service-card.selected::before {\n      content: "";\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      height: 4px;\n      background: var(--primary-color);\n    }\n\n    .card-header {\n      padding: 1.5rem;\n      text-align: center;\n      border-bottom: 1px solid var(--medium-gray);\n    }\n\n    .card-title {\n      font-size: 1.25rem;\n      font-weight: 600;\n      margin-bottom: 0.5rem;\n      color: var(--primary-dark);\n    }\n\n    .card-price {\n      font-size: 1.75rem;\n      font-weight: 700;\n      color: var(--primary-color);\n      margin: 1rem 0;\n    }\n\n    .card-body {\n      padding: 1.5rem;\n    }\n\n    .benefits-list {\n      list-style: none;\n      padding: 0;\n      margin: 0;\n    }\n\n    .benefits-list li {\n      position: relative;\n      padding-left: 1.75rem;\n      margin-bottom: 0.75rem;\n      line-height: 1.5;\n    }\n\n    .benefits-list li::before {\n      content: "✓";\n      position: absolute;\n      left: 0;\n      color: var(--success-color);\n      font-weight: bold;\n    }\n\n    .size-selection select {\n      width: 100%;\n      padding: 0.75rem;\n      border: 1px solid var(--medium-gray);\n      border-radius: var(--border-radius);\n      font-size: 1rem;\n      transition: var(--transition);\n    }\n    .size-selection select:focus {\n      border-color: var(--primary-color);\n      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);\n    }\n    .card-content {\n      padding: 1rem;\n    }\n    .extra-item img {\n      flex-shrink: 0;\n    }\n    .service-card {\n      position: relative;\n    }\n\n    .img-services {\n      width: 100%;\n      height: 150px;\n      object-fit: cover;\n      border-radius: var(--border-radius);\n    }\n    .img-extras {\n      width: 64px;\n      height: 64px;\n      object-fit: contain;\n      display: block;\n      margin: 0 auto;\n      border-radius: var(--border-radius);\n    }\n\n    /* Service Details */\n    .service-details-container {\n      background: white;\n      border-radius: var(--border-radius);\n      padding: 2rem;\n      margin-top: 2rem;\n      box-shadow: var(--box-shadow);\n    }\n\n    .details-header {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-bottom: 2rem;\n    }\n\n    .details-header h3 {\n      margin: 0;\n      text-align: left;\n    }\n\n    .back-button {\n      background: none;\n      border: none;\n      color: var(--primary-color);\n      font-weight: 600;\n      cursor: pointer;\n      display: flex;\n      align-items: center;\n      gap: 0.5rem;\n    }\n\n    /* Size Selection */\n    .size-selection {\n      margin-bottom: 2rem;\n    }\n\n    .size-options {\n      display: grid;\n      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n      gap: 1rem;\n      margin-top: 1rem;\n    }\n\n    .size-option {\n      border: 1px solid var(--medium-gray);\n      border-radius: var(--border-radius);\n      padding: 1rem;\n      cursor: pointer;\n      transition: var(--transition);\n    }\n\n    .size-option:hover {\n      border-color: var(--primary-light);\n    }\n\n    .size-option.selected {\n      border: 2px solid var(--primary-color);\n      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);\n      background-color: rgba(99, 102, 241, 0.05);\n    }\n\n    .size-range {\n      font-weight: 600;\n      margin-bottom: 0.5rem;\n    }\n\n    .size-price {\n      color: var(--primary-color);\n      font-weight: 700;\n      font-size: 1.25rem;\n    }\n\n    .size-time {\n      color: var(--dark-gray);\n      font-size: 0.875rem;\n    }\n\n    /* Extras Section */\n    .extras-section {\n      margin-bottom: 2rem;\n    }\n\n    .extras-grid {\n      display: grid;\n      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n      gap: 1rem;\n      margin-top: 1rem;\n    }\n\n    .extra-item {\n      border: 1px solid var(--medium-gray);\n      border-radius: var(--border-radius);\n      padding: 1rem;\n      display: flex;\n      align-items: center;\n      gap: 1rem;\n      cursor: pointer;\n      transition: var(--transition);\n    }\n\n    .extra-item:hover {\n      border-color: var(--primary-light);\n    }\n\n    .extra-item.selected {\n      border-color: var(--primary-color);\n      background-color: rgba(99, 102, 241, 0.05);\n    }\n\n    .extra-item input {\n      accent-color: var(--primary-color);\n    }\n\n    .extra-price {\n      margin-left: auto;\n      font-weight: 600;\n      color: var(--primary-color);\n    }\n\n    .extra-time {\n      color: var(--dark-gray);\n      font-size: 0.875rem;\n    }\n\n    /* Summary Card */\n    .summary-card {\n      background: white;\n      border-radius: var(--border-radius);\n      padding: 1.5rem;\n      margin-top: 2rem;\n      box-shadow: var(--box-shadow);\n      border-top: 4px solid var(--primary-color);\n    }\n\n    .summary-title {\n      font-size: 1.25rem;\n      font-weight: 600;\n      margin-bottom: 1rem;\n      color: var(--primary-dark);\n      text-align: center;\n    }\n\n    .summary-item {\n      display: flex;\n      justify-content: space-between;\n      margin-bottom: 0.75rem;\n      padding-bottom: 0.75rem;\n      border-bottom: 1px solid var(--medium-gray);\n    }\n\n    .summary-total {\n      font-weight: 700;\n      font-size: 1.25rem;\n      color: var(--primary-dark);\n      margin-top: 1rem;\n      padding-top: 0.75rem;\n      border-top: 1px solid var(--medium-gray);\n    }\n\n    /* Buttons */\n    .confirm-button {\n      width: 100%;\n      padding: 1rem;\n      background-color: var(--primary-color);\n      color: white;\n      border: none;\n      border-radius: var(--border-radius);\n      font-weight: 600;\n      font-size: 1rem;\n      cursor: pointer;\n      transition: var(--transition);\n      margin-top: 2rem;\n    }\n\n    .confirm-button:hover {\n      background-color: var(--primary-dark);\n      transform: translateY(-2px);\n    }\n\n    /* Form Styles */\n    .form-container {\n      background: white;\n      border-radius: var(--border-radius);\n      padding: 2rem;\n      box-shadow: var(--box-shadow);\n      max-width: 600px;\n      margin: 0 auto;\n    }\n\n    .form-group {\n      margin-bottom: 1.5rem;\n    }\n\n    label {\n      display: block;\n      margin-bottom: 0.5rem;\n      font-weight: 500;\n      color: var(--text-color);\n    }\n\n    input,\n    select,\n    textarea {\n      width: 100%;\n      padding: 0.75rem 1rem;\n      border: 1px solid var(--medium-gray);\n      border-radius: var(--border-radius);\n      font-size: 1rem;\n      transition: var(--transition);\n    }\n\n    input:focus,\n    select:focus,\n    textarea:focus {\n      outline: none;\n      border-color: var(--primary-color);\n      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);\n    }\n\n    .input-error {\n      border-color: var(--error-color) !important;\n      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);\n    }\n\n    /* Navigation Buttons */\n    .navigation-buttons {\n      display: flex;\n      justify-content: space-between;\n      margin-top: 2rem;\n    }\n\n    button {\n      padding: 0.75rem 1.5rem;\n      background-color: var(--primary-color);\n      color: white;\n      border: none;\n      border-radius: var(--border-radius);\n      cursor: pointer;\n      font-weight: 500;\n      transition: var(--transition);\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 1rem;\n    }\n\n    button:hover {\n      background-color: var(--primary-dark);\n      transform: translateY(-2px);\n    }\n\n    button:disabled {\n      background-color: var(--dark-gray);\n      cursor: not-allowed;\n      transform: none;\n      opacity: 0.7;\n    }\n\n    button.secondary {\n      background-color: white;\n      color: var(--primary-color);\n      border: 1px solid var(--primary-color);\n    }\n\n    button.secondary:hover {\n      background-color: var(--light-gray);\n    }\n\n    /* Confirmation */\n    .confirmation-container {\n      background: white;\n      border-radius: var(--border-radius);\n      padding: 3rem;\n      text-align: center;\n      box-shadow: var(--box-shadow);\n      max-width: 600px;\n      margin: 0 auto;\n    }\n\n    .confirmation-icon {\n      font-size: 4rem;\n      color: var(--success-color);\n      margin-bottom: 1.5rem;\n    }\n\n    .confirmation-title {\n      font-size: 1.75rem;\n      font-weight: 700;\n      margin-bottom: 1rem;\n      color: var(--primary-dark);\n    }\n\n    .confirmation-message {\n      font-size: 1.1rem;\n      margin-bottom: 2rem;\n      line-height: 1.6;\n      color: var(--text-color);\n    }\n\n    .error-message {\n      color: var(--error-color);\n      font-weight: 500;\n      font-size: 1.2rem;\n      margin-top: 2rem;\n      margin-bottom: 2rem;\n      text-align: center;\n      \n    }\n\n    /* Payment Section Styles */\n    .payment-section {\n      background: white;\n      border-radius: var(--border-radius);\n      padding: 1.5rem;\n      margin-bottom: 1.5rem;\n      box-shadow: var(--box-shadow);\n      border: 1px solid var(--medium-gray);\n    }\n\n    .payment-section-header {\n      display: flex;\n      align-items: center;\n      margin-bottom: 1.5rem;\n    }\n\n    .payment-icon {\n      width: 40px;\n      height: 40px;\n      background-color: var(--primary-light);\n      border-radius: 50%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin-right: 1rem;\n      color: var(--primary-dark);\n      font-size: 1.25rem;\n    }\n\n    .payment-title {\n      font-size: 1.25rem;\n      font-weight: 600;\n      color: var(--primary-dark);\n    }\n\n    .payment-methods {\n      margin-top: 1.5rem;\n    }\n\n    .payment-method {\n      display: flex;\n      align-items: center;\n      padding: 0.75rem;\n      border: 1px solid var(--medium-gray);\n      border-radius: var(--border-radius);\n      margin-bottom: 0.75rem;\n      cursor: pointer;\n      transition: var(--transition);\n    }\n\n    .payment-method:hover {\n      border-color: var(--primary-color);\n    }\n\n    .payment-method.selected {\n      border: 2px solid var(--primary-color);\n      background-color: rgba(99, 102, 241, 0.05);\n    }\n\n    .payment-method-icon {\n      width: 30px;\n      height: 30px;\n      margin-right: 1rem;\n      color: var(--primary-color);\n    }\n\n    .payment-method-info {\n      flex-grow: 1;\n    }\n\n    .payment-method-title {\n      font-weight: 600;\n      margin-bottom: 0.25rem;\n    }\n\n    .payment-method-description {\n      font-size: 0.875rem;\n      color: var(--dark-gray);\n    }\n\n    /* Stripe Element Styles */\n    #card-element-container {\n      margin: 1.5rem 0;\n    }\n\n    #card-element {\n      border: 1px solid var(--medium-gray);\n      border-radius: var(--border-radius);\n      padding: 12px;\n      background: white;\n      transition: var(--transition);\n    }\n\n    #card-element.StripeElement--focus {\n      border-color: var(--primary-color);\n      box-shadow: 0 0 0 1px var(--primary-color);\n    }\n\n    #card-element.StripeElement--invalid {\n      border-color: var(--error-color);\n    }\n\n    #card-element.StripeElement--complete {\n      border-color: var(--success-color);\n    }\n\n    .card-hint {\n      font-size: 0.875rem;\n      color: var(--dark-gray);\n      margin-top: 0.5rem;\n      text-align: center;\n    }\n\n    /* Loading State */\n    .loading {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: 200px;\n    }\n\n    .spinner {\n      width: 40px;\n      height: 40px;\n      border: 4px solid var(--primary-light);\n      border-top: 4px solid var(--primary-color);\n      border-radius: 50%;\n      animation: spin 1s linear infinite;\n    }\n\n    @keyframes spin {\n      0% {\n        transform: rotate(0deg);\n      }\n      100% {\n        transform: rotate(360deg);\n      }\n    }\n\n    /* Responsive */\n    @media (max-width: 768px) {\n      .selection-grid,\n      .size-options,\n      .extras-grid {\n        grid-template-columns: 1fr;\n      }\n\n      .details-header {\n        flex-direction: column;\n        align-items: flex-start;\n        gap: 1rem;\n      }\n\n      .step-label {\n        display: none;\n      }\n      ',document.head.appendChild(e)}}updateGlobalStyles(){const e=document.getElementById("booking-widget-global-styles");if(e){const t=e.textContent.replace(/--primary-color:.*?;/g,`--primary-color: ${this.color};`).replace(/--primary-light:.*?;/g,`--primary-light: ${this.adjustColor(this.color,20)};`).replace(/--primary-dark:.*?;/g,`--primary-dark: ${this.adjustColor(this.color,-20)};`);e.textContent=t}}async initializeStripe(){if(!this.stripeConfig?.publicKey)return console.error("Stripe public key is not provided"),void(this.paymentError="Stripe public key is missing.");try{if(this.stripe=await ye(this.stripeConfig.publicKey,{locale:"en"}),!this.stripe)throw new Error("Failed to initialize Stripe.");console.log("Stripe has been successfully initialized.")}catch(e){console.error("Error loading Stripe:",e),this.paymentError="Failed to initialize Stripe. Please try again later."}}async setupStripeElement(){if(4!==this.currentStep||this.cardElement)return;await this.updateComplete;const e=this.renderRoot?.querySelector("#card-element");if(!e)return void setTimeout((()=>this.setupStripeElement()),100);const t=this.stripe.elements();this.cardElement=t.create("card",{style:{base:{color:"#32325d",fontFamily:'"Inter", sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}}),this.cardElement.mount(e),this.cardElement.on("change",(e=>{this.paymentError=e.error?.message||"",this.requestUpdate()}))}updated(e){super.updated(e),e.has("currentStep")&&(4===this.currentStep?this.setupStripeElement():this.cardElement&&(this.cardElement.unmount(),this.cardElement=null))}async firstUpdated(){this.applyDynamicColor(),setTimeout((()=>{this.setupStripeElement()}),100)}async fetchBookingSettings(){this.loading=!0;try{const e=await fetch(`https://horizondesk-api-0a74dafcd4fb.herokuapp.com/api/booking/settings/byAppId?appId=${this.widgetId}`,{headers:{"x-api-secret":this.apiSecret}});if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const t=await e.json();this.stripeConfig=t.stripe||{},this.stripeConfig.publicKey||(console.error("Stripe public key is missing in the response data."),this.paymentError="Stripe public key is missing."),this.color=t.color||"#6366f1",this.applyDynamicColor(),this.updateGlobalStyles(),this.services=new Map(Object.entries(t.services||{}).map((([e,t])=>[e,{id:e,...t}]))),this.globalAdditionalServices=t.globalAdditionalServices||[],this.squareFootagePricing=t.squareFootagePricing||[]}catch(e){console.error("Failed to load booking settings:",e)}finally{this.loading=!1}}handleServiceSelect(e){const t=this.services.get(e);this.selectedService={id:e,...t},this.selectedExtras=[],this.selectedSquareFootage=null,this.showServiceDetails=!0,setTimeout((()=>{const e=document.getElementById("size-selection");e&&e.scrollIntoView({behavior:"smooth",block:"start"})}),100)}toggleExtra(e){const t=this.selectedExtras.some((t=>t.name===e.name));this.selectedExtras=t?this.selectedExtras.filter((t=>t.name!==e.name)):[...this.selectedExtras,e]}selectSquareFootage(e){this.selectedSquareFootage=e}confirmServiceSelection(){this.bookingData.serviceInfo={service:this.selectedService,extras:this.selectedExtras,squareFootage:this.selectedSquareFootage,subtotal:this.subtotal,total:this.total};const e=this.bathroomOptions.find((e=>e.value===this.selectedBathroom)),t=e?e.label:this.selectedBathroom;this.bookingData.additionalData=t,this.showServiceDetails=!1,this.nextStep()}formatMinutesToHours(e){const t=Math.floor(e/60),n=e%60;return t>0?`${t}h ${n}m`:`${n}m`}get subtotal(){return(this.selectedService?.price||0)+(this.selectedSquareFootage?.price||0)+this.selectedExtras.reduce(((e,t)=>e+(t.price||0)),0)}get total(){return this.subtotal}getFieldLabel(e){return{"schedule.date":"Date","schedule.time":"Time","schedule.frequency":"Frequency","generalInfo.name":"Full Name","generalInfo.email":"Email","generalInfo.phone":"Phone Number","generalInfo.address":"Address","generalInfo.postalCode":"Postal Code","generalInfo.state":"State"}[e]||e}isFieldInvalid(e){return Boolean(this.invalidFields[e])}clearInvalidField(e){if(!this.invalidFields[e])return;const t={...this.invalidFields};delete t[e],this.invalidFields=t}setRequiredFieldsError(e){this.invalidFields=e.reduce(((e,t)=>(e[t]=!0,e)),{});const t=e.map((e=>this.getFieldLabel(e)));this.formError=`Missing required fields: ${t.join(", ")}`}async nextStep(){if(this.formError="",this.invalidFields={},2===this.currentStep){const{date:e,time:t,frequency:n}=this.bookingData.schedule,i=[];if(e||i.push("schedule.date"),t||i.push("schedule.time"),n||i.push("schedule.frequency"),i.length>0)return void this.setRequiredFieldsError(i)}if(3===this.currentStep){const e=this.bookingData.generalInfo,t=["name","email","phone","address","postalCode","state"].filter((t=>!e[t]?.trim())).map((e=>`generalInfo.${e}`));if(t.length>0)return void this.setRequiredFieldsError(t)}this.currentStep<5&&(this.currentStep++,await this.updateComplete,this.scrollToStepTop(),4===this.currentStep&&(this.couponCode="",this.couponStatus=null,this.discountPercent=0,this.discountedTotal=null))}handleCouponInput(e){this.couponCode=e.target.value,this.couponStatus=null}async validateCoupon(){if(this.couponStatus=null,!this.couponCode||!this.bookingData?.serviceInfo?.total)return this.couponStatus={valid:!1,message:"Enter a coupon code."},void await this.requestUpdate();try{const e=encodeURIComponent(this.couponCode.trim()),t=this.bookingData.serviceInfo.total,n=`https://horizondesk-api-0a74dafcd4fb.herokuapp.com/api/coupons/validate/${e}?amount=${t}&clientId=${this.widgetId}`,i=await fetch(n,{headers:{"x-api-secret":this.apiSecret}});let r=null;try{r=await i.json()}catch(e){r={}}if(!i.ok||!r.valid)return this.couponStatus={valid:!1,message:r&&r.error?r.error:404===i.status?"Coupon not found for this client":"Invalid coupon."},this.discountPercent=0,this.discountedTotal=null,void await this.requestUpdate();this.discountPercent=r.discountPercent;const s=this.bookingData.serviceInfo.total,o=s*this.discountPercent/100;this.discountedTotal=Math.max(0,s-o),this.couponStatus={valid:!0,message:`Coupon applied! ${this.discountPercent}% off.`}}catch(e){this.couponStatus={valid:!1,message:"Error validating coupon."},this.discountPercent=0,this.discountedTotal=null}await this.requestUpdate()}async prevStep(){this.currentStep>1&&(this.currentStep--,await this.updateComplete,this.scrollToStepTop())}async scrollToStepTop(){try{await this.updateComplete;const e=`step-${this.currentStep}`,t=document.getElementById(e);if(!t)return void console.warn(`No se encontró el elemento con ID: ${e}`);t.scrollIntoView({behavior:"smooth",block:"start"}),await new Promise((e=>setTimeout(e,100)));const n=100,i=t.getBoundingClientRect().top;if(i>n+10||i<n-10){const e=window.scrollY+i-n,t=document.documentElement.style,r=t.scrollBehavior;t.scrollBehavior="auto",window.scrollTo(0,e),setTimeout((()=>{t.scrollBehavior=r}),50)}}catch(e){console.error("Error en scrollToStepTop:",e)}}handleScheduleChange(e){const{name:t,value:n}=e.target;this.clearInvalidField(`schedule.${t}`),this.bookingData.schedule={...this.bookingData.schedule,[t]:n}}handleGeneralInfoChange(e){const{name:t,value:n}=e.target;this.clearInvalidField(`generalInfo.${t}`),this.bookingData.generalInfo={...this.bookingData.generalInfo,[t]:n}}handleCardChange(e){const{name:t,value:n}=e.target;this.cardData={...this.cardData,[t]:n}}async completeBooking(){if(this.paymentProcessing=!0,this.paymentError="",!this.stripe)return this.paymentError="Stripe is not initialized.",void(this.paymentProcessing=!1);if(!this.cardElement||this.cardElement._empty)return this.paymentError="Please provide a valid card number.",void(this.paymentProcessing=!1);try{const{paymentMethod:e,error:t}=await this.stripe.createPaymentMethod({type:"card",card:this.cardElement,billing_details:{name:this.cardData.cardName,email:this.bookingData.generalInfo.email,address:{line1:this.bookingData.generalInfo.address,state:this.bookingData.generalInfo.state,postal_code:this.bookingData.generalInfo.postalCode}}});if(t)throw this.paymentError=t.message,new Error(t.message);const n=null!==this.discountedTotal?this.discountedTotal:this.bookingData.serviceInfo.total,i={bookingData:{appId:this.widgetId,services:{[this.bookingData.serviceInfo.service.id]:{name:this.bookingData.serviceInfo.service.name,price:this.bookingData.serviceInfo.service.price,additionalServices:this.bookingData.serviceInfo.extras,squareFootage:this.bookingData.serviceInfo.squareFootage}},subtotal:this.bookingData.serviceInfo.subtotal,total:n,clientInfo:this.bookingData.generalInfo,schedule:this.bookingData.schedule},paymentData:{paymentMethodId:e.id,currency:"usd",returnUrl:`${window.location.origin}/confirmation`}},r=await fetch("https://horizondesk-api-0a74dafcd4fb.herokuapp.com/api/booking/create-and-pay",{method:"POST",headers:{"Content-Type":"application/json","x-api-secret":this.apiSecret},body:JSON.stringify(i)}),s=await r.json();if(!r.ok)throw new Error(s.error||"Error processing the payment");if("succeeded"!==s.payment.status&&"requires_capture"!==s.payment.status)throw new Error("Payment failed.");this.bookingData.confirmation={bookingId:s.booking._id,paymentId:s.payment.paymentIntentId},this.nextStep()}catch(e){console.error("Error in completeBooking:",e),this.paymentError=e.message||"Error processing payment"}finally{this.paymentProcessing=!1}}resetBooking(){this.currentStep=1,this.selectedService=null,this.selectedExtras=[],this.selectedSquareFootage=null,this.selectedBathrooms=[],this.selectedBathroom="",this.showServiceDetails=!1,this.cardData={cardNumber:"",cardName:"",expiryDate:"",cvv:""},this.bookingData={serviceInfo:null,schedule:{date:"",time:"",frequency:"one-time",notes:""},generalInfo:{name:"",email:"",phone:"",address:"",postalCode:"",state:""},payment:{method:"card"},additionalData:[]},this.invalidFields={},this.formError=""}formatCardNumber(e){let t=e.target.value.replace(/\D/g,"");t=t.replace(/(\d{4})/g,"$1 ").trim(),e.target.value=t,this.cardData.cardNumber=t}formatExpiryDate(e){let t=e.target.value.replace(/\D/g,"");t.length>2&&(t=t.substring(0,2)+"/"+t.substring(2,4)),e.target.value=t,this.cardData.expiryDate=t}adjustColor(e,t){if(!e||"#"!==e[0])return e;3===(e=e.replace("#","")).length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);let n=parseInt(e.substr(0,2),16),i=parseInt(e.substr(2,2),16),r=parseInt(e.substr(4,2),16);n=Math.max(0,Math.min(255,n+t)),i=Math.max(0,Math.min(255,i+t)),r=Math.max(0,Math.min(255,r+t));return`#${n.toString(16).padStart(2,"0")}${i.toString(16).padStart(2,"0")}${r.toString(16).padStart(2,"0")}`}updated(e){e.has("color")&&this.applyDynamicColor()}applyDynamicColor(){this.style.setProperty("--primary-color",this.color),this.style.setProperty("--primary-light",this.adjustColor(this.color,20)),this.style.setProperty("--primary-dark",this.adjustColor(this.color,-20))}render(){return N`
      <style>
        :host {
          --primary-color: ${s(this.color)};
          --primary-light: ${s(this.adjustColor(this.color,20))};
          --primary-dark: ${s(this.adjustColor(this.color,-20))};
        }

        .step-progress-bar {
          width: ${25*(this.currentStep-1)}%;
        }
      </style>

      <div class="container">
        <style>
          .step-progress-bar {
            width: ${25*(this.currentStep-1)}%;
            background-color: var(--primary-color);
          }
        </style>
        <div class="step-indicator">
          <div class="step-progress">
            <div class="step-progress-bar"></div>
          </div>
          <div class="steps-container">
            <div
              class="step ${this.currentStep>=1?this.currentStep>1?"completed":"active":""}"
            >
              <div class="step-number">1</div>
              <div class="step-label">Service</div>
            </div>
            <div
              class="step ${this.currentStep>=2?this.currentStep>2?"completed":"active":""}"
            >
              <div class="step-number">2</div>
              <div class="step-label">Schedule</div>
            </div>
            <div
              class="step ${this.currentStep>=3?this.currentStep>3?"completed":"active":""}"
            >
              <div class="step-number">3</div>
              <div class="step-label">Details</div>
            </div>
            <div
              class="step ${this.currentStep>=4?this.currentStep>4?"completed":"active":""}"
            >
              <div class="step-number">4</div>
              <div class="step-label">Payment</div>
            </div>
          </div>
        </div>

        ${1===this.currentStep?this.renderStep1():""}
        ${2===this.currentStep?this.renderStep2():""}
        ${3===this.currentStep?this.renderStep3():""}
        ${4===this.currentStep?this.renderStep4():""}
        ${5===this.currentStep?this.renderStep5():""}
      </div>
    `}renderStep1(){return N`
      <div class="step-content" id="step-1">
        <h3>Choose Your Service</h3>
        ${this.loading?N` <div class="loading"><div class="spinner"></div></div> `:N`
              <div class="size-options">
                ${Array.from(this.services.entries()).map((([e,t])=>N`
                    <div
                      class="service-card ${this.selectedService?.id===t.id?"selected":""}"
                      @click=${()=>this.handleServiceSelect(e)}
                    >
                      ${t.image?N`<img
                            src=${t.image}
                            alt=${t.name}
                            class="img-services"
                          />`:""}
                      <div class="size-range">${t.name}</div>
                      <div class="size-price">$${t.price}</div>
                      ${t.time?N`<div class="size-time">
                            ${this.formatMinutesToHours(t.time)}
                          </div>`:""}
                      ${this.selectedService?.id===e?N`<div class="selected-indicator">✓</div>`:""}
                    </div>
                  `))}
              </div>
            `}
        ${this.showServiceDetails&&this.selectedService?N`
              <div class="service-details-container">
                <div class="details-header">
                  <h3>${this.selectedService.name}</h3>
                  <button
                    @click=${()=>this.showServiceDetails=!1}
                    class="back-button"
                  >
                    &larr; Back to services
                  </button>
                </div>

                ${this.squareFootagePricing.length>0?N`
                      <div class="size-selection" id="size-selection">
                        <h3>Select Property Size</h3>
                        <select
                          @change=${e=>this.selectSquareFootage(this.squareFootagePricing.find((t=>t.range===e.target.value)))}
                        >
                          <option value="">-- Select size --</option>
                          ${this.squareFootagePricing.map((e=>N`
                              <option
                                value=${e.range}
                                ?selected=${this.selectedSquareFootage?.range===e.range}
                              >
                                ${e.range} — $${e.price} —
                                ${this.formatMinutesToHours(e.time)}
                              </option>
                            `))}
                        </select>
                      </div>
                    `:""}

                <!-- Radiobuttons para tipos de baño -->
                <div class="bathroom-radios" style="margin: 1.5rem 0;">
                  <h4 style="margin-bottom:0.5rem; text-align: center;">
                    Select bathroom type
                  </h4>
                  <div
                    style="display: flex; flex-wrap: wrap; justify-content: center;"
                  >
                    ${this.bathroomOptions.map((e=>N`
                        <label
                          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
            font-size: 0.95rem;
            width: 150px;
            margin: 0.5rem;
            text-align: center;
          "
                        >
                          <input
                            type="radio"
                            name="bathroomType"
                            value="${e.value}"
                            .checked=${this.selectedBathroom===e.value}
                            @change=${this.handleBathroomRadio.bind(this)}
                            style="accent-color: var(--primary-color); margin-bottom: 0.3rem;"
                          />
                          <span style="line-height: 1.2;">${e.label}</span>
                        </label>
                      `))}
                  </div>
                </div>

                ${this.selectedService.additionalServices?.length>0||this.globalAdditionalServices.length>0?N`
                      <div class="extras-section">
                        <h3>Select Add-ons</h3>
                        <div class="size-options">
                          ${[...this.selectedService.additionalServices||[],...this.globalAdditionalServices].map((e=>N`
                              <div
                                class="size-option ${this.selectedExtras.some((t=>t.name===e.name))?"selected":""}"
                                @click=${()=>this.toggleExtra(e)}
                              >
                                ${e.image?N`<img
                                      src=${e.image}
                                      alt=${e.name}
                                      class="img-extras"
                                    />`:""}

                                <div class="size-range">${e.name}</div>
                                <div class="size-price">+$${e.price}</div>
                                <div class="size-time">
                                  ${this.formatMinutesToHours(e.time)}
                                </div>
                              </div>
                            `))}
                        </div>
                      </div>
                    `:""}

                <div class="summary-card">
                  <div class="summary-title">Order Summary</div>
                  <div class="summary-item">
                    <span>Base Service:</span>
                    <span>$${this.selectedService.price}</span>
                  </div>
                  ${this.bookingData.additionalData?N`
                        <div class="summary-item">
                          <span>Bathroom type:</span>
                          <span>${this.bookingData.additionalData}</span>
                        </div>
                      `:""}
                  ${this.selectedSquareFootage?N`
                        <div class="summary-item">
                          <span
                            >Size (${this.selectedSquareFootage.range}):</span
                          >
                          <span>+$${this.selectedSquareFootage.price}</span>
                        </div>
                      `:""}
                  ${this.selectedExtras.map((e=>N`
                      <div class="summary-item">
                        <span>${e.name}:</span>
                        <span>+$${e.price}</span>
                      </div>
                    `))}
                  <div class="summary-item summary-total">
                    <span>Total:</span>
                    <span>$${this.total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  @click=${this.confirmServiceSelection}
                  class="confirm-button"
                >
                  Confirm Selection & Continue
                </button>
              </div>
            `:""}
      </div>
    `}renderStep2(){const e=[];for(let t=this.businessHours.start;t<=this.businessHours.end;t++)for(let n=0;n<60;n+=15){const i=`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`;e.push(i)}const t=new Date;t.setHours(0,0,0,0);const n=t.toISOString().split("T")[0];return N`
      <div class="step-content" id="step-2">
        <div class="form-container">
          <h3>Schedule Your Service</h3>
          ${this.formError?N`<div class="error-message" style="margin-bottom: 1rem;">
                ${this.formError}
              </div>`:""}

          <div class="form-group">
            <label for="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              .value=${this.bookingData.schedule.date}
              @change=${this.handleScheduleChange}
              class=${this.isFieldInvalid("schedule.date")?"input-error":""}
              min=${n}
            />
          </div>
          <div class="form-group">
            <label for="time">Time</label>
            <select
              id="time"
              name="time"
              .value=${this.bookingData.schedule?.time||""}
              @change=${this.handleScheduleChange}
              class=${this.isFieldInvalid("schedule.time")?"input-error":""}
            >
              <option value="">Select a time</option>
              ${e.map((e=>N` <option value=${e}>${e}</option> `))}
            </select>
          </div>
          <div class="form-group">
            <label for="frequency">Frequency</label>
            <select
              id="frequency"
              name="frequency"
              .value=${this.bookingData.schedule.frequency}
              @change=${this.handleScheduleChange}
              class=${this.isFieldInvalid("schedule.frequency")?"input-error":""}
            >
              <option value="one-time">One Time</option>
              <option value="weekly">Weekly</option>
              <option value="bi-weekly">Bi-Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <div class="form-group">
            <label for="notes"
              >Additional information to help us provide an exceptional
              service</label
            >
            <textarea
              id="notes"
              name="notes"
              rows="3"
              placeholder="Add any details, instructions, or special requests to help us serve you better..."
              .value=${this.bookingData.schedule.notes||""}
              @input=${this.handleScheduleChange}
              style="resize:vertical;width:100%;border-radius:10px;padding:0.7rem 1rem;border:1.5px solid var(--medium-gray);font-size:1rem;background:#f9fafb;"
            ></textarea>
          </div>
          <div class="navigation-buttons">
            <button class="secondary" @click=${this.prevStep}>Back</button>
            <button @click=${this.nextStep}>Continue</button>
          </div>
        </div>
      </div>
    `}renderStep3(){return N`
      <div class="step-content">
        <div class="form-container">
          <h3>Your Information</h3>
          ${this.formError?N`<div class="error-message" style="margin-bottom: 1rem;">
                ${this.formError}
              </div>`:""}

          <div class="form-group">
            <label for="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              .value=${this.bookingData.generalInfo.name}
              @change=${this.handleGeneralInfoChange}
              class=${this.isFieldInvalid("generalInfo.name")?"input-error":""}
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              .value=${this.bookingData.generalInfo.email}
              @change=${this.handleGeneralInfoChange}
              class=${this.isFieldInvalid("generalInfo.email")?"input-error":""}
            />
          </div>
          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              .value=${this.bookingData.generalInfo.phone}
              @change=${this.handleGeneralInfoChange}
              class=${this.isFieldInvalid("generalInfo.phone")?"input-error":""}
            />
          </div>
          <div class="form-group">
            <label for="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              .value=${this.bookingData.generalInfo.address}
              @change=${this.handleGeneralInfoChange}
              class=${this.isFieldInvalid("generalInfo.address")?"input-error":""}
            />
          </div>
          <div class="form-group">
            <label for="postalCode">Postal Code</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              .value=${this.bookingData.generalInfo.postalCode}
              @change=${this.handleGeneralInfoChange}
              class=${this.isFieldInvalid("generalInfo.postalCode")?"input-error":""}
            />
          </div>
          <div class="form-group">
            <label for="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              .value=${this.bookingData.generalInfo.state}
              @change=${this.handleGeneralInfoChange}
              class=${this.isFieldInvalid("generalInfo.state")?"input-error":""}
            />
          </div>
          <div class="navigation-buttons">
            <button class="secondary" @click=${this.prevStep}>Back</button>
            <button @click=${this.nextStep}>Continue</button>
          </div>
        </div>
      </div>
    `}renderStep4(){setTimeout((()=>{4===this.currentStep&&this.setupStripeElement()}),100);const e=this.couponStatus&&"string"==typeof this.couponStatus.message&&this.couponStatus.message.startsWith("Coupon applied!");return N`
      <div class="step-content" id="step-4">
        <div class="form-container">
          <h3>Payment Information</h3>
          <!-- Sección de cupón -->
          <div class="form-group" style="margin-bottom:1.5rem;">
            <label for="coupon">Coupon Code</label>
            <div style="display:flex;gap:0.5rem;align-items:center;">
              <input
                type="text"
                id="coupon"
                name="coupon"
                .value=${this.couponCode}
                @input=${this.handleCouponInput.bind(this)}
                style="flex:1;"
                placeholder="Enter coupon code"
                autocomplete="off"
              />
              <button type="button" @click=${this.validateCoupon.bind(this)} style="min-width:100px;">
                Validate
              </button>
            </div>
            ${this.couponStatus&&void 0!==this.couponStatus.message?N`<div class="${e?"success-message":"error-message"}" style="margin-top:0.5rem;">
                  ${this.couponStatus.message}
                </div>`:""}
          </div>

          <div class="payment-section">
            <div class="payment-section-header">
              <div class="payment-icon">💳</div>
              <h4 class="payment-title">Credit/Debit Card</h4>
            </div>

            <div class="payment-methods">
              <div class="payment-method selected">
                <div class="payment-method-icon">🟦</div>
                <div class="payment-method-info">
                  <div class="payment-method-title">Card Payment</div>
                  <div class="payment-method-description">
                    Pay securely with your credit or debit card
                  </div>
                </div>
              </div>
            </div>

            <div id="card-element-container">
              <div id="card-element"></div>
              <p class="card-hint">
                We use Stripe for secure payments. Your card details are
                encrypted.
              </p>
            </div>
          </div>

          <div class="summary-card">
            <div class="summary-title">Order Summary</div>
            <div class="summary-item">
              <span>Service:</span>
              <span>${this.bookingData.serviceInfo?.service?.name}</span>
            </div>
            ${this.bookingData.additionalData?N`
                  <div class="summary-item">
                    <span>Bathroom type:</span>
                    <span>${this.bookingData.additionalData}</span>
                  </div>
                `:""}
            ${this.bookingData.serviceInfo?.squareFootage?N`
                  <div class="summary-item">
                    <span>Size (${this.bookingData.serviceInfo.squareFootage.range}):</span>
                    <span>$${this.bookingData.serviceInfo.squareFootage.price}</span>
                  </div>
                `:""}
            ${this.bookingData.serviceInfo?.extras?.length>0?this.bookingData.serviceInfo.extras.map((e=>N`
                    <div class="summary-item">
                      <span>${e.name}:</span>
                      <span>+$${e.price}</span>
                    </div>
                  `)):""}
            <div class="summary-item">
              <span>Subtotal:</span>
              <span>$${this.bookingData.serviceInfo?.total?.toFixed(2)}</span>
            </div>
            ${this.discountPercent>0&&null!==this.discountedTotal?N`
                  <div class="summary-item success-message">
                    <span>Coupon (${this.discountPercent}% off):</span>
                    <span>-$${(this.bookingData.serviceInfo.total-this.discountedTotal).toFixed(2)}</span>
                  </div>
                  <div class="summary-item summary-total">
                    <span>Total Amount:</span>
                    <span>$${this.discountedTotal.toFixed(2)}</span>
                  </div>
                `:N`
                  <div class="summary-item summary-total">
                    <span>Total Amount:</span>
                    <span>$${this.bookingData.serviceInfo?.total?.toFixed(2)}</span>
                  </div>
                `}
          </div>

          ${this.paymentError?N`<div class="error-message">${this.paymentError}</div>`:""}

          <div class="navigation-buttons">
            <button class="secondary" @click=${this.prevStep}>Back</button>
            <button
              @click=${this.completeBooking}
              ?disabled=${this.paymentProcessing}
            >
              ${this.paymentProcessing?"Processing...":"Complete Booking"}
            </button>
          </div>
        </div>
      </div>
    `}updated(e){super.updated(e),e.has("currentStep")&&4===this.currentStep&&this.setupStripeElement()}renderStep5(){return N`
      <div class="step-content">
        <div class="confirmation-container">
          <div class="confirmation-icon">✓</div>
          <h3 class="confirmation-title">Booking Confirmed!</h3>
          <p class="confirmation-message">
            Thank you for your Booking. We've sent a confirmation to
            ${this.bookingData.generalInfo.email}. Your service is scheduled for
            ${this.bookingData.schedule.date} at
            ${this.bookingData.schedule.time}.
          </p>

          <div class="confirmation-details">
            <div class="summary-item">
              <span>Service:</span>
              <span>${this.bookingData.serviceInfo?.service?.name}</span>
            </div>

            ${this.bookingData.serviceInfo?.squareFootage?N`
                  <div class="summary-item">
                    <span
                      >Size
                      (${this.bookingData.serviceInfo.squareFootage.range}):</span
                    >
                    <span
                      >$${this.bookingData.serviceInfo.squareFootage.price}</span
                    >
                  </div>
                `:""}
            ${this.bookingData.serviceInfo?.extras?.length>0?N`
                  ${this.bookingData.serviceInfo.extras.map((e=>N`
                      <div class="summary-item">
                        <span>${e.name}:</span>
                        <span>+$${e.price}</span>
                      </div>
                    `))}
                `:""}

            <div class="summary-total">
              <span>Total Charged:</span>
              <span>$${this.bookingData.serviceInfo?.total?.toFixed(2)}</span>
            </div>

            ${this.bookingData.confirmation?N`
                  <div class="summary-item">
                    <span>Booking ID:</span>
                    <span>${this.bookingData.confirmation.bookingId}</span>
                  </div>
                  <div class="summary-item">
                    <span>Transaction ID:</span>
                    <span>${this.bookingData.confirmation.paymentId}</span>
                  </div>
                `:""}
          </div>

          <button @click=${this.resetBooking} class="confirm-button">
            Book Another Service
          </button>
        </div>
      </div>
    `}}customElements.get("booking-widget")||customElements.define("booking-widget",$e),customElements.define("booking-widget",$e);
//# sourceMappingURL=index.js.map
