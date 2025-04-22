/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),r=new WeakMap;let i=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=r.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&r.set(s,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,s,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[r+1]),t[0]);return new i(r,t,s)},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new i("string"==typeof t?t:t+"",void 0,s))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:n,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:c,getOwnPropertySymbols:h,getPrototypeOf:p}=Object,u=globalThis,m=u.trustedTypes,f=m?m.emptyScript:"",g=u.reactiveElementPolyfillSupport,v=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},$=(t,e)=>!n(t,e),y={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;class _ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(t,s,e);void 0!==r&&l(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){const{get:r,set:i}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return r?.call(this)},set(e){const o=r?.call(this);i.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...c(t),...h(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const s=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((s,r)=>{if(e)s.adoptedStyleSheets=r.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of r){const r=document.createElement("style"),i=t.litNonce;void 0!==i&&r.setAttribute("nonce",i),r.textContent=e.cssText,s.appendChild(r)}})(s,this.constructor.elementStyles),s}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){const s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(void 0!==r&&!0===s.reflect){const i=(void 0!==s.converter?.toAttribute?s.converter:b).toAttribute(e,s.type);this._$Em=t,null==i?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(t,e){const s=this.constructor,r=s._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=s.getPropertyOptions(r),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=r,this[r]=i.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??$)(this[t],e))return;this.P(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[v("elementProperties")]=new Map,_[v("finalized")]=new Map,g?.({ReactiveElement:_}),(u.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,A=x.trustedTypes,S=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,w="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+E,k=`<${C}>`,D=document,P=()=>D.createComment(""),I=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,M="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,T=/>/g,H=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,R=/"/g,q=/^(?:script|style|textarea|title)$/i,j=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),B=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),W=new WeakMap,Y=D.createTreeWalker(D,129);function F(t,e){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const V=(t,e)=>{const s=t.length-1,r=[];let i,o=2===e?"<svg>":3===e?"<math>":"",a=O;for(let e=0;e<s;e++){const s=t[e];let n,l,d=-1,c=0;for(;c<s.length&&(a.lastIndex=c,l=a.exec(s),null!==l);)c=a.lastIndex,a===O?"!--"===l[1]?a=N:void 0!==l[1]?a=T:void 0!==l[2]?(q.test(l[2])&&(i=RegExp("</"+l[2],"g")),a=H):void 0!==l[3]&&(a=H):a===H?">"===l[0]?(a=i??O,d=-1):void 0===l[1]?d=-2:(d=a.lastIndex-l[2].length,n=l[1],a=void 0===l[3]?H:'"'===l[3]?R:z):a===R||a===z?a=H:a===N||a===T?a=O:(a=H,i=void 0);const h=a===H&&t[e+1].startsWith("/>")?" ":"";o+=a===O?s+k:d>=0?(r.push(n),s.slice(0,d)+w+s.slice(d)+E+h):s+E+(-2===d?e:h)}return[F(t,o+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class J{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let i=0,o=0;const a=t.length-1,n=this.parts,[l,d]=V(t,e);if(this.el=J.createElement(l,s),Y.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=Y.nextNode())&&n.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(w)){const e=d[o++],s=r.getAttribute(t).split(E),a=/([.?@])?(.*)/.exec(e);n.push({type:1,index:i,name:a[2],strings:s,ctor:"."===a[1]?Q:"?"===a[1]?tt:"@"===a[1]?et:X}),r.removeAttribute(t)}else t.startsWith(E)&&(n.push({type:6,index:i}),r.removeAttribute(t));if(q.test(r.tagName)){const t=r.textContent.split(E),e=t.length-1;if(e>0){r.textContent=A?A.emptyScript:"";for(let s=0;s<e;s++)r.append(t[s],P()),Y.nextNode(),n.push({type:2,index:++i});r.append(t[e],P())}}}else if(8===r.nodeType)if(r.data===C)n.push({type:2,index:i});else{let t=-1;for(;-1!==(t=r.data.indexOf(E,t+1));)n.push({type:7,index:i}),t+=E.length-1}i++}}static createElement(t,e){const s=D.createElement("template");return s.innerHTML=t,s}}function K(t,e,s=t,r){if(e===B)return e;let i=void 0!==r?s._$Co?.[r]:s._$Cl;const o=I(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),void 0===o?i=void 0:(i=new o(t),i._$AT(t,s,r)),void 0!==r?(s._$Co??=[])[r]=i:s._$Cl=i),void 0!==i&&(e=K(t,i._$AS(t,e.values),i,r)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,r=(t?.creationScope??D).importNode(e,!0);Y.currentNode=r;let i=Y.nextNode(),o=0,a=0,n=s[0];for(;void 0!==n;){if(o===n.index){let e;2===n.type?e=new G(i,i.nextSibling,this,t):1===n.type?e=new n.ctor(i,n.name,n.strings,this,t):6===n.type&&(e=new st(i,this,t)),this._$AV.push(e),n=s[++a]}o!==n?.index&&(i=Y.nextNode(),o++)}return Y.currentNode=D,r}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class G{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),I(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==L&&I(this._$AH)?this._$AA.nextSibling.data=t:this.T(D.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=J.createElement(F(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new Z(r,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new J(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,r=0;for(const i of t)r===e.length?e.push(s=new G(this.O(P()),this.O(P()),this,this.options)):s=e[r],s._$AI(i),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,i){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=L}_$AI(t,e=this,s,r){const i=this.strings;let o=!1;if(void 0===i)t=K(this,t,e,0),o=!I(t)||t!==this._$AH&&t!==B,o&&(this._$AH=t);else{const r=t;let a,n;for(t=i[0],a=0;a<i.length-1;a++)n=K(this,r[s+a],e,a),n===B&&(n=this._$AH[a]),o||=!I(n)||n!==this._$AH[a],n===L?t=L:t!==L&&(t+=(n??"")+i[a+1]),this._$AH[a]=n}o&&!r&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Q extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}class tt extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==L)}}class et extends X{constructor(t,e,s,r,i){super(t,e,s,r,i),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??L)===B)return;const s=this._$AH,r=t===L&&s!==L||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==L&&(s===L||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const rt=x.litHtmlPolyfillSupport;rt?.(J,G),(x.litHtmlVersions??=[]).push("3.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class it extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const r=s?.renderBefore??e;let i=r._$litPart$;if(void 0===i){const t=s?.renderBefore??null;r._$litPart$=i=new G(e.insertBefore(P(),t),t,void 0,s??{})}return i._$AI(t),i})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}it._$litElement$=!0,it.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:it});const ot=globalThis.litElementPolyfillSupport;ot?.({LitElement:it}),(globalThis.litElementVersions??=[]).push("4.1.1");class at extends it{static styles=o`
    :host {
      display: block;
      font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", sans-serif;
      line-height: 1.5;
      color: #1a202c;
      width: 100%;
      --primary-color: #6366f1;
      --primary-hover: #4f46e5;
      --secondary-color: #e0e7ff;
      --success-color: #10b981;
      --error-color: #ef4444;
      --text-color: #1a202c;
      --light-gray: #f8fafc;
      --medium-gray: #e2e8f0;
      --dark-gray: #64748b;
      --border-radius: 12px;
      --transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    .container {
      padding: 2rem;
      background: white;
      border-radius: var(--border-radius);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
      transition: var(--transition);
      border: 1px solid var(--medium-gray);
      width: 100%;
      max-width: 100%;
    }

    .title {
      font-size: 1.75rem;
      font-weight: 700;
      color: var(--primary-color);
      margin: 0 0 2rem 0;
      text-align: center;
      position: relative;
      padding-bottom: 1rem;
    }

    .title::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: var(--primary-color);
      border-radius: 2px;
    }

    .form-group {
      margin-bottom: 1.5rem;
      animation: fadeIn 0.4s ease-out;
    }

    .form-label {
      display: block;
      font-size: 0.9375rem;
      font-weight: 600;
      color: var(--text-color);
      margin-bottom: 0.5rem;
    }

    .form-label.required::after {
      content: " *";
      color: var(--error-color);
    }

    .form-input,
    .form-textarea,
    .form-select,
    .form-date,
    .form-time {
      width: 100%;
      padding: 0.875rem 1rem;
      border: 2px solid var(--medium-gray);
      border-radius: var(--border-radius);
      font-size: 1rem;
      transition: var(--transition);
      background-color: white;
    }

    .form-textarea {
      min-height: 120px;
      resize: vertical;
    }

    .form-input:focus,
    .form-textarea:focus,
    .form-select:focus,
    .form-date:focus,
    .form-time:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
      background-color: white;
    }

    /* Enhanced Date Picker Styling */
    .form-date {
      padding-right: 2.5rem;
      cursor: pointer;
    }

    .form-date:focus {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='var(--primary-color)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
    }

    /* Enhanced Time Picker Styling */
    .form-time {
      padding-right: 2.5rem;
      cursor: pointer;
    }

    .form-time:focus {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='var(--primary-color)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");
    }

    .button {
      width: 100%;
      padding: 1rem;
      background-color: var(--primary-color);
      color: white;
      font-weight: 600;
      border: none;
      border-radius: var(--border-radius);
      cursor: pointer;
      transition: var(--transition);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 6px rgba(99, 102, 241, 0.1);
    }

    .button:hover {
      background-color: var(--primary-hover);
      transform: translateY(-2px);
      box-shadow: 0 6px 8px rgba(99, 102, 241, 0.15);
    }

    .button:active {
      transform: translateY(0);
    }

    .button:disabled {
      opacity: 0.7;
      cursor: not-allowed;
      transform: none !important;
    }

    .button.secondary {
      background-color: white;
      color: var(--primary-color);
      border: 2px solid var(--primary-color);
      box-shadow: none;
    }

    .button.secondary:hover {
      background-color: var(--secondary-color);
    }

    .spinner {
      width: 20px;
      height: 20px;
      border: 3px solid rgba(255, 255, 255, 0.3);
      border-top-color: white;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin-right: 12px;
      display: inline-block;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes pulse {
      0%,
      100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
    }

    .alert {
      padding: 1rem;
      border-radius: var(--border-radius);
      margin-bottom: 1.5rem;
      font-size: 0.9375rem;
      animation: fadeIn 0.3s ease;
      display: flex;
      align-items: center;
    }

    .alert-error {
      background-color: #fef2f2;
      color: var(--error-color);
      border-left: 4px solid var(--error-color);
    }

    .alert-success {
      background-color: #f0fdf4;
      color: var(--success-color);
      border-left: 4px solid var(--success-color);
    }

    .alert-icon {
      margin-right: 0.75rem;
      font-size: 1.25rem;
    }

    .date-time-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }

    .address-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }

    .progress-container {
      display: flex;
      justify-content: space-between;
      position: relative;
      margin-bottom: 2.5rem;
      counter-reset: step;
    }

    .progress-bar {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      height: 6px;
      background-color: var(--medium-gray);
      border-radius: 3px;
      transform: translateY(-50%);
      z-index: 1;
    }

    .progress {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      background-color: var(--primary-color);
      border-radius: 3px;
      transition: width 0.4s ease;
      z-index: 2;
    }

    .step {
      position: relative;
      z-index: 3;
      text-align: center;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .step-circle {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: white;
      border: 3px solid var(--medium-gray);
      color: var(--dark-gray);
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 0.5rem;
      transition: var(--transition);
    }

    .step.active .step-circle {
      border-color: var(--primary-color);
      color: var(--primary-color);
      background-color: var(--secondary-color);
    }

    .step.completed .step-circle {
      border-color: var(--primary-color);
      background-color: var(--primary-color);
      color: white;
    }

    .step-label {
      font-size: 0.8125rem;
      font-weight: 600;
      color: var(--dark-gray);
      transition: var(--transition);
      white-space: nowrap;
    }

    .step.active .step-label,
    .step.completed .step-label {
      color: var(--primary-color);
    }

    .step-buttons {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
    }

    .step-buttons .button {
      flex: 1;
    }

    .confirmation {
      text-align: center;
      padding: 2rem;
      animation: fadeIn 0.5s ease;
    }

    .confirmation-icon {
      width: 80px;
      height: 80px;
      background-color: var(--success-color);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;
      font-size: 2.5rem;
      animation: pulse 1.5s infinite;
    }

    .confirmation-message {
      font-size: 1.375rem;
      font-weight: 700;
      color: var(--text-color);
      margin-bottom: 1rem;
    }

    .confirmation-details {
      color: var(--dark-gray);
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    .confirmation-highlight {
      color: var(--primary-color);
      font-weight: 600;
    }

    /* Phone input container */
    .phone-input-container {
      position: relative;
    }

    .phone-prefix {
      position: absolute;
      left: 1rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--dark-gray);
      pointer-events: none;
    }

    .phone-input {
      padding-left: 2.5rem !important;
    }

    /* Service select styling */
    .form-select {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2364758b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 1rem center;
      background-size: 20px;
      padding-right: 2.5rem;
      cursor: pointer;
    }

    .form-select:focus {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='var(--primary-color)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    }

    /* Loading state for services */
    .loading-services {
      color: var(--dark-gray);
      font-size: 0.875rem;
      text-align: center;
      padding: 1rem;
    }

    @media (max-width: 768px) {
      .container {
        padding: 1.5rem;
      }

      .date-time-container,
      .address-container {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .progress-container {
        margin-bottom: 2rem;
      }
    }

    @media (max-width: 480px) {
      .step-label {
        font-size: 0.75rem;
      }

      .step-buttons {
        flex-direction: column;
      }
    }
  `;static properties={currentStep:{type:Number},formData:{type:Object},loading:{type:Boolean},errorMessage:{type:String},successMessage:{type:String},submitted:{type:Boolean},widgetId:{type:String},services:{type:Array},loadingServices:{type:Boolean},config:{type:Object}};constructor(){super(),this.currentStep=1,this.formData={appId:"",userId:"",nombreUsuario:"",servicio:"",email:"",phone:"+1",address:{street:"",apartment:"",city:"",state:"",postalCode:"",country:"US",additionalInfo:""},date:"",time:"",notes:"",status:"pending"},this.loading=!1,this.errorMessage="",this.successMessage="",this.submitted=!1,this.widgetId="",this.services=[],this.loadingServices=!0,this.config={},this.apiSecret="d9e180f3-d77d-4c25-a163-4605c8ddfb48",this.apiEndpoint="https://horizondesk-api-0a74dafcd4fb.herokuapp.com/api/appointments/new-appointment"}connectedCallback(){super.connectedCallback(),this.formData.appId=this.widgetId,this.fetchServices()}async fetchServices(){try{this.loadingServices=!0;const t=await fetch(`https://horizondesk-api-0a74dafcd4fb.herokuapp.com/api/appointments/config/${this.widgetId}`,{headers:{"x-api-secret":this.apiSecret}});if(!t.ok)throw new Error("Failed to fetch services");const e=await t.json();if(console.log("API Response Data:",e),e){if(this.config=e,e.color){this.style.setProperty("--primary-color",e.color);const t=this.darkenColor(e.color,20);this.style.setProperty("--primary-hover",t);const s=this.lightenColor(e.color,90);this.style.setProperty("--secondary-color",s)}e.services?(this.services=Object.values(e.services).map((t=>t.name)),console.log("Services extracted:",this.services)):(this.services=[],console.warn("No services found in response"))}}catch(t){console.error("Error fetching services:",t),this.errorMessage="Failed to load services. Please try again later.",this.services=[]}finally{this.loadingServices=!1}}darkenColor(t,e){const s=parseInt(t.replace("#","")),r=Math.round(2.55*e),i=(s>>16)-r,o=(s>>8&255)-r,a=(255&s)-r;return"#"+(16777216+65536*(i<255?i<1?0:i:255)+256*(o<255?o<1?0:o:255)+(a<255?a<1?0:a:255)).toString(16).slice(1)}lightenColor(t,e){const s=parseInt(t.replace("#","")),r=Math.round(2.55*e),i=(s>>16)+r,o=(s>>8&255)+r,a=(255&s)+r;return"#"+(16777216+65536*(i>255?255:i)+256*(o>255?255:o)+(a>255?255:a)).toString(16).slice(1)}handleInputChange(t){const e=t.target,s=e.value,r=e.name;if(r.startsWith("address.")){const t=r.split(".")[1];this.formData={...this.formData,address:{...this.formData.address,[t]:s}}}else if("phone"===r){let t="+1"+s.replace(/\D/g,"").substring(0,10);this.formData={...this.formData,phone:t},requestAnimationFrame((()=>{e&&(e.value=t.substring(2))}))}else this.formData={...this.formData,[r]:s}}nextStep(){this.validateCurrentStep()&&this.currentStep++}prevStep(){this.currentStep--}validateCurrentStep(){if(1===this.currentStep){if(!this.formData.nombreUsuario||!this.formData.email||!this.formData.phone)return this.errorMessage="Please fill in all required fields",!1;if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email))return this.errorMessage="Please enter a valid email address",!1;if(!/^\+1\d{10}$/.test(this.formData.phone))return this.errorMessage="Please enter a valid US phone number (10 digits after +1)",!1}else if(2===this.currentStep){if(!(this.formData.address.street&&this.formData.address.city&&this.formData.address.state&&this.formData.address.postalCode))return this.errorMessage="Please fill in all required address fields",!1}else if(3===this.currentStep){if(!this.formData.servicio||!this.formData.date||!this.formData.time)return this.errorMessage="Please fill in all required fields",!1;const t=new Date(this.formData.date),e=new Date;if(e.setHours(0,0,0,0),t<e)return this.errorMessage="Please select a date in the future",!1}return this.errorMessage="",!0}async submitAppointment(){this.loading=!0,this.errorMessage="";try{this.formData.userId||(this.formData.userId=`user_${Date.now()}`);const t=await fetch(this.apiEndpoint,{method:"POST",headers:{"Content-Type":"application/json","x-api-secret":this.apiSecret},body:JSON.stringify(this.formData)}),e=await t.json();if(!t.ok)throw new Error(e.error||"Error creating appointment");this.submitted=!0,this.successMessage="Appointment successfully scheduled!"}catch(t){this.errorMessage=t.message||"Failed to submit appointment"}finally{this.loading=!1}}renderStep1(){return j`
      <div class="form-group">
        <label class="form-label required">Full Name</label>
        <input
          type="text"
          name="nombreUsuario"
          .value=${this.formData.nombreUsuario}
          @input=${this.handleInputChange}
          required
          class="form-input"
          ?disabled=${this.loading}
          placeholder="John Doe"
        />
      </div>

      <div class="form-group">
        <label class="form-label required">Email</label>
        <input
          type="email"
          name="email"
          .value=${this.formData.email}
          @input=${this.handleInputChange}
          required
          class="form-input"
          ?disabled=${this.loading}
          placeholder="john@example.com"
        />
      </div>

      <div class="form-group">
        <label class="form-label required">Phone</label>
        <div class="phone-input-container">
          <span class="phone-prefix">+1</span>
          <input
            type="tel"
            name="phone"
            .value=${this.formData.phone.substring(2)}
            @input=${this.handleInputChange}
            required
            class="form-input phone-input"
            ?disabled=${this.loading}
            placeholder="5551234567"
            maxlength="10"
            pattern="[0-9]*"
            inputmode="numeric"
          />
        </div>
      </div>
    `}renderStep2(){return j`
      <h3 class="form-subtitle">Address Information</h3>

      <div class="form-group">
        <label class="form-label required">Street Address</label>
        <input
          type="text"
          name="address.street"
          .value=${this.formData.address.street}
          @input=${this.handleInputChange}
          required
          class="form-input"
          ?disabled=${this.loading}
          placeholder="123 Main St"
        />
      </div>

      <div class="form-group">
        <label class="form-label">Apartment/Suite (Optional)</label>
        <input
          type="text"
          name="address.apartment"
          .value=${this.formData.address.apartment}
          @input=${this.handleInputChange}
          class="form-input"
          ?disabled=${this.loading}
          placeholder="Apt 4B"
        />
      </div>

      <div class="address-container">
        <div class="form-group">
          <label class="form-label required">City</label>
          <input
            type="text"
            name="address.city"
            .value=${this.formData.address.city}
            @input=${this.handleInputChange}
            required
            class="form-input"
            ?disabled=${this.loading}
            placeholder="New York"
          />
        </div>

        <div class="form-group">
          <label class="form-label required">State</label>
          <input
            type="text"
            name="address.state"
            .value=${this.formData.address.state}
            @input=${this.handleInputChange}
            required
            class="form-input"
            ?disabled=${this.loading}
            placeholder="NY"
          />
        </div>
      </div>

      <div class="form-group">
        <label class="form-label required">Postal Code</label>
        <input
          type="text"
          name="address.postalCode"
          .value=${this.formData.address.postalCode}
          @input=${this.handleInputChange}
          required
          class="form-input"
          ?disabled=${this.loading}
          placeholder="10001"
        />
      </div>

      <div class="form-group">
        <label class="form-label">Additional Instructions</label>
        <textarea
          name="address.additionalInfo"
          .value=${this.formData.address.additionalInfo}
          @input=${this.handleInputChange}
          class="form-textarea"
          ?disabled=${this.loading}
          placeholder="Gate code, landmarks, etc."
        ></textarea>
      </div>
    `}renderStep3(){return j`
      <div class="form-group">
        <label class="form-label required">Service</label>
        ${this.loadingServices?j`
              <div class="loading-services">Loading available services...</div>
            `:j`
              <select
                name="servicio"
                .value=${this.formData.servicio}
                @input=${this.handleInputChange}
                required
                class="form-select"
                ?disabled=${this.loading||this.loadingServices}
              >
                <option value="" disabled selected>Select a service</option>
                ${this.services.map((t=>j`
                    <option value=${t}>${t}</option>
                  `))}
              </select>
            `}
      </div>

      <div class="date-time-container">
        <div class="form-group">
          <label class="form-label required">Date</label>
          <input
            type="date"
            name="date"
            .value=${this.formData.date}
            @input=${this.handleInputChange}
            required
            class="form-date"
            ?disabled=${this.loading}
            min=${(new Date).toISOString().split("T")[0]}
          />
        </div>

        <div class="form-group">
          <label class="form-label required">Time</label>
          <input
            type="time"
            name="time"
            .value=${this.formData.time}
            @input=${this.handleInputChange}
            required
            class="form-time"
            ?disabled=${this.loading}
            min="08:00"
            max="18:00"
            step="900"
          />
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Additional Notes</label>
        <textarea
          name="notes"
          .value=${this.formData.notes}
          @input=${this.handleInputChange}
          class="form-textarea"
          ?disabled=${this.loading}
          placeholder="Any special requirements or notes..."
        ></textarea>
      </div>
    `}renderStep4(){return j`
      <div class="confirmation">
        <div class="confirmation-icon">✓</div>
        <div class="confirmation-message">
          Your appointment has been scheduled successfully!
        </div>
        <div class="confirmation-details">
          <p>
            We've scheduled your appointment for
            <span class="confirmation-highlight"
              >${this.formatDate(this.formData.date)}</span
            >
            at
            <span class="confirmation-highlight"
              >${this.formatTime(this.formData.time)}</span
            >.
          </p>
          <p>
            Service:
            <span class="confirmation-highlight"
              >${this.formData.servicio}</span
            >
          </p>
          <p>
            Address:
            <span class="confirmation-highlight">
              ${this.formData.address.street}${this.formData.address.apartment?`, ${this.formData.address.apartment}`:""},
              ${this.formData.address.city}, ${this.formData.address.state}
              ${this.formData.address.postalCode}
            </span>
          </p>
          <p>
            We'll call you at
            <span class="confirmation-highlight"
              >${this.formatPhoneNumber(this.formData.phone)}</span
            >
            to confirm the details.
          </p>
        </div>
        <button
          class="button"
          @click=${()=>{this.currentStep=1,this.submitted=!1,this.formData={appId:this.widgetId,userId:"",nombreUsuario:"",servicio:"",email:"",phone:"+1",address:{street:"",apartment:"",city:"",state:"",postalCode:"",country:"US",additionalInfo:""},date:"",time:"",notes:"",status:"pending"}}}
          ?disabled=${this.loading}
        >
          Schedule Another Appointment
        </button>
      </div>
    `}formatDate(t){if(!t)return"";return new Date(t).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}formatTime(t){if(!t)return"";const[e,s]=t.split(":"),r=parseInt(e);return`${r%12||12}:${s} ${r>=12?"PM":"AM"}`}formatPhoneNumber(t){if(!t)return"";const e=t.substring(2).match(/^(\d{3})(\d{3})(\d{4})$/);return e?`(${e[1]}) ${e[2]}-${e[3]}`:t}renderProgressSteps(){return j`
      <div class="progress-container">
        <div class="progress-bar">
          <div
            class="progress"
            style="width: ${this.currentStep/3*100}%"
          ></div>
        </div>

        ${[1,2,3].map((t=>j`
            <div
              class="step ${this.currentStep>t?"completed":""} ${this.currentStep===t?"active":""}"
            >
              <div class="step-circle">
                ${this.currentStep>t?"✓":t}
              </div>
              <div class="step-label">
                ${1===t?"Your Info":2===t?"Address":"Appointment"}
              </div>
            </div>
          `))}
      </div>
    `}render(){return j`
      <div class="container">
        <h2 class="title">Schedule an Appointment</h2>

        ${this.errorMessage?j`
              <div class="alert alert-error">
                <span class="alert-icon">!</span>
                ${this.errorMessage}
              </div>
            `:""}
        ${this.successMessage?j`
              <div class="alert alert-success">
                <span class="alert-icon">✓</span>
                ${this.successMessage}
              </div>
            `:""}
        ${this.submitted?this.renderStep4():j`
              ${this.renderProgressSteps()}
              ${1===this.currentStep?this.renderStep1():""}
              ${2===this.currentStep?this.renderStep2():""}
              ${3===this.currentStep?this.renderStep3():""}

              <div class="step-buttons">
                ${this.currentStep>1?j`
                      <button
                        type="button"
                        class="button secondary"
                        @click=${this.prevStep}
                        ?disabled=${this.loading}
                      >
                        Back
                      </button>
                    `:j`<div></div>`}
                ${this.currentStep<3?j`
                      <button
                        type="button"
                        class="button"
                        @click=${this.nextStep}
                        ?disabled=${this.loading}
                      >
                        Next
                      </button>
                    `:j`
                      <button
                        type="button"
                        class="button"
                        @click=${this.submitAppointment}
                        ?disabled=${this.loading||this.loadingServices||!this.formData.servicio}
                      >
                        ${this.loading?j`<span class="spinner"></span>`:""}
                        ${this.loading?"Scheduling...":"Confirm Appointment"}
                      </button>
                    `}
              </div>
            `}
      </div>
    `}}customElements.define("appointment-widget",at),customElements.define("review-widget",at);
//# sourceMappingURL=index.js.map
