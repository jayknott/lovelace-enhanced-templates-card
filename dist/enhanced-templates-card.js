/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function e(e,t,i,s){var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},s=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${s}--\x3e`,r=new RegExp(`${s}|${n}`);class o{constructor(e,t){this.parts=[],this.element=t;const i=[],n=[],o=document.createTreeWalker(t.content,133,null,!1);let d=0,h=-1,u=0;const{strings:p,values:{length:_}}=e;for(;u<_;){const e=o.nextNode();if(null!==e){if(h++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let s=0;for(let e=0;e<i;e++)a(t[e].name,"$lit$")&&s++;for(;s-- >0;){const t=p[u],i=c.exec(t)[2],s=i.toLowerCase()+"$lit$",n=e.getAttribute(s);e.removeAttribute(s);const o=n.split(r);this.parts.push({type:"attribute",index:h,name:i,strings:o}),u+=o.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),o.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(s)>=0){const s=e.parentNode,n=t.split(r),o=n.length-1;for(let t=0;t<o;t++){let i,r=n[t];if(""===r)i=l();else{const e=c.exec(r);null!==e&&a(e[2],"$lit$")&&(r=r.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),i=document.createTextNode(r)}s.insertBefore(i,e),this.parts.push({type:"node",index:++h})}""===n[o]?(s.insertBefore(l(),e),i.push(e)):e.data=n[o],u+=o}}else if(8===e.nodeType)if(e.data===s){const t=e.parentNode;null!==e.previousSibling&&h!==d||(h++,t.insertBefore(l(),e)),d=h,this.parts.push({type:"node",index:h}),null===e.nextSibling?e.data="":(i.push(e),h--),u++}else{let t=-1;for(;-1!==(t=e.data.indexOf(s,t+1));)this.parts.push({type:"node",index:-1}),u++}}else o.currentNode=n.pop()}for(const e of i)e.parentNode.removeChild(e)}}const a=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},d=e=>-1!==e.index,l=()=>document.createComment(""),c=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(e,t){const{element:{content:i},parts:s}=e,n=document.createTreeWalker(i,133,null,!1);let r=p(s),o=s[r],a=-1,d=0;const l=[];let c=null;for(;n.nextNode();){a++;const e=n.currentNode;for(e.previousSibling===c&&(c=null),t.has(e)&&(l.push(e),null===c&&(c=e)),null!==c&&d++;void 0!==o&&o.index===a;)o.index=null!==c?-1:o.index-d,r=p(s,r),o=s[r]}l.forEach(e=>e.parentNode.removeChild(e))}const u=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},p=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(d(t))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const _=new WeakMap,m=e=>"function"==typeof e&&_.has(e),g={},y={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class v{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],s=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let r,o=0,a=0,l=n.nextNode();for(;o<s.length;)if(r=s[o],d(r)){for(;a<r.index;)a++,"TEMPLATE"===l.nodeName&&(i.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=i.pop(),l=n.nextNode());if("node"===r.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,r.name,r.strings,this.options));o++}else this.__parts.push(void 0),o++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const f=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),w=` ${s} `;class b{constructor(e,t,i,s){this.strings=e,this.values=t,this.type=i,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let r=0;r<e;r++){const e=this.strings[r],o=e.lastIndexOf("\x3c!--");i=(o>-1||i)&&-1===e.indexOf("--\x3e",o+1);const a=c.exec(e);t+=null===a?e+(i?w:n):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+s}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==f&&(t=f.createHTML(t)),e.innerHTML=t,e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const S=e=>null===e||!("object"==typeof e||"function"==typeof e),x=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class E{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new C(this)}_getValue(){const e=this.strings,t=e.length-1,i=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=i[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!x(e))return e}let s="";for(let n=0;n<t;n++){s+=e[n];const t=i[n];if(void 0!==t){const e=t.value;if(S(e)||!x(e))s+="string"==typeof e?e:String(e);else for(const t of e)s+="string"==typeof t?t:String(t)}}return s+=e[t],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===g||S(e)&&e===this.value||(this.value=e,m(e)||(this.committer.dirty=!0))}commit(){for(;m(this.value);){const e=this.value;this.value=g,e(this)}this.value!==g&&this.committer.commit()}}class P{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(l()),this.endNode=e.appendChild(l())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=l()),e.__insert(this.endNode=l())}insertAfterPart(e){e.__insert(this.startNode=l()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}const e=this.__pendingValue;e!==g&&(S(e)?e!==this.value&&this.__commitText(e):e instanceof b?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):x(e)?this.__commitIterable(e):e===y?(this.value=y,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof v&&this.value.template===t)this.value.update(e.values);else{const i=new v(t,e.processor,this.options),s=i._clone();i.update(e.values),this.__commitNode(s),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,s=0;for(const n of e)i=t[s],void 0===i&&(i=new P(this.options),t.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(t[s-1])),i.setValue(n),i.commit(),s++;s<t.length&&(t.length=s,this.clear(i&&i.endNode))}clear(e=this.startNode){i(this.startNode.parentNode,e.nextSibling,this.endNode)}}class ${constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}if(this.__pendingValue===g)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=g}}class N extends E{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new A(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class A extends C{}let M=!1;(()=>{try{const e={get capture(){return M=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class T{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}if(this.__pendingValue===g)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=k(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=g}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const k=e=>e&&(M?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function O(e){let t=D.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},D.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const n=e.strings.join(s);return i=t.keyString.get(n),void 0===i&&(i=new o(e,e.getTemplateElement()),t.keyString.set(n,i)),t.stringsArray.set(e.strings,i),i}const D=new Map,V=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const U=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,i,s){const n=t[0];if("."===n){return new N(e,t.slice(1),i).parts}if("@"===n)return[new T(e,t.slice(1),s.eventContext)];if("?"===n)return[new $(e,t.slice(1),i)];return new E(e,t,i).parts}handleTextExpression(e){return new P(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const R=(e,...t)=>new b(e,t,"html",U)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,Y=(e,t)=>`${e}--${t}`;let H=!0;void 0===window.ShadyCSS?H=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),H=!1);const z=e=>t=>{const i=Y(t.type,e);let n=D.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},D.set(i,n));let r=n.stringsArray.get(t.strings);if(void 0!==r)return r;const a=t.strings.join(s);if(r=n.keyString.get(a),void 0===r){const i=t.getTemplateElement();H&&window.ShadyCSS.prepareTemplateDom(i,e),r=new o(t,i),n.keyString.set(a,r)}return n.stringsArray.set(t.strings,r),r},j=["html","svg"],q=new Set,L=(e,t,i)=>{q.add(e);const s=i?i.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:r}=n;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(s,e);const o=document.createElement("style");for(let e=0;e<r;e++){const t=n[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{j.forEach(t=>{const i=D.get(Y(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),h(e,i)})})})(e);const a=s.content;i?function(e,t,i=null){const{element:{content:s},parts:n}=e;if(null==i)return void s.appendChild(t);const r=document.createTreeWalker(s,133,null,!1);let o=p(n),a=0,d=-1;for(;r.nextNode();){d++;for(r.currentNode===i&&(a=u(t),i.parentNode.insertBefore(t,i));-1!==o&&n[o].index===d;){if(a>0){for(;-1!==o;)n[o].index+=a,o=p(n,o);return}o=p(n,o)}}}(i,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,e);const d=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==d)t.insertBefore(d.cloneNode(!0),t.firstChild);else if(i){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),h(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const I={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},F=(e,t)=>t!==e&&(t==t||e==e),W={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:F};class B extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const s=this._attributeNameForProperty(i,t);void 0!==s&&(this._attributeToPropertyMap.set(s,i),e.push(s))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=W){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);void 0!==s&&Object.defineProperty(this.prototype,e,s)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const n=this[e];this[t]=s,this.requestUpdateInternal(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||W}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=F){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,s=t.converter||I,n="function"==typeof s?s:s.fromAttribute;return n?n(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,s=t.converter;return(s&&s.toAttribute||I.toAttribute)(e,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=W){const s=this.constructor,n=s._attributeNameForProperty(e,i);if(void 0!==n){const e=s._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(e);if(void 0!==s){const e=i.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,i){let s=!0;if(void 0!==e){const n=this.constructor;i=i||n.getPropertyOptions(e),n._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}B.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const J=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:s}=t;return{kind:i,elements:s,finisher(t){window.customElements.define(e,t)}}})(e,t),Z=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function G(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):Z(e,t)}function K(e){return G({attribute:!1,hasChanged:null==e?void 0:e.hasChanged})}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Q=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol();class ee{constructor(e,t){if(t!==X)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Q?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const te=(e,...t)=>{const i=t.reduce((t,i,s)=>t+(e=>{if(e instanceof ee)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[s+1],e[0]);return new ee(i,X)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const ie={};class se extends B{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,i)=>e.reduceRight((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e),i),i=t(e,new Set),s=[];i.forEach(e=>s.unshift(e)),this._styles=s}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!Q){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new ee(String(t),X)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Q?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==ie&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return ie}}se.finalized=!0,se.render=(e,t,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const n=s.scopeName,r=V.has(t),o=H&&11===t.nodeType&&!!t.host,a=o&&!q.has(n),d=a?document.createDocumentFragment():t;if(((e,t,s)=>{let n=V.get(t);void 0===n&&(i(t,t.firstChild),V.set(t,n=new P(Object.assign({templateFactory:O},s))),n.appendInto(t)),n.setValue(e),n.commit()})(e,d,Object.assign({templateFactory:z(n)},s)),a){const e=V.get(d);V.delete(d);const s=e.value instanceof v?e.value.template:void 0;L(n,d,s),i(t,t.firstChild),t.appendChild(d),V.set(t,e)}!r&&o&&window.ShadyCSS.styleElement(t.host)};var ne=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,re="[^\\s]+",oe=/\[([^]*?)\]/gm;function ae(e,t){for(var i=[],s=0,n=e.length;s<n;s++)i.push(e[s].substr(0,t));return i}var de=function(e){return function(t,i){var s=i[e].map((function(e){return e.toLowerCase()})).indexOf(t.toLowerCase());return s>-1?s:null}};function le(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];for(var s=0,n=t;s<n.length;s++){var r=n[s];for(var o in r)e[o]=r[o]}return e}var ce=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],he=["January","February","March","April","May","June","July","August","September","October","November","December"],ue=ae(he,3),pe={dayNamesShort:ae(ce,3),dayNames:ce,monthNamesShort:ue,monthNames:he,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10?1:0)*e%10]}},_e=le({},pe),me=function(e,t){for(void 0===t&&(t=2),e=String(e);e.length<t;)e="0"+e;return e},ge={D:function(e){return String(e.getDate())},DD:function(e){return me(e.getDate())},Do:function(e,t){return t.DoFn(e.getDate())},d:function(e){return String(e.getDay())},dd:function(e){return me(e.getDay())},ddd:function(e,t){return t.dayNamesShort[e.getDay()]},dddd:function(e,t){return t.dayNames[e.getDay()]},M:function(e){return String(e.getMonth()+1)},MM:function(e){return me(e.getMonth()+1)},MMM:function(e,t){return t.monthNamesShort[e.getMonth()]},MMMM:function(e,t){return t.monthNames[e.getMonth()]},YY:function(e){return me(String(e.getFullYear()),4).substr(2)},YYYY:function(e){return me(e.getFullYear(),4)},h:function(e){return String(e.getHours()%12||12)},hh:function(e){return me(e.getHours()%12||12)},H:function(e){return String(e.getHours())},HH:function(e){return me(e.getHours())},m:function(e){return String(e.getMinutes())},mm:function(e){return me(e.getMinutes())},s:function(e){return String(e.getSeconds())},ss:function(e){return me(e.getSeconds())},S:function(e){return String(Math.round(e.getMilliseconds()/100))},SS:function(e){return me(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return me(e.getMilliseconds(),3)},a:function(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A:function(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+me(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)},Z:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+me(Math.floor(Math.abs(t)/60),2)+":"+me(Math.abs(t)%60,2)}},ye=function(e){return+e-1},ve=[null,"[1-9]\\d?"],fe=[null,re],we=["isPm",re,function(e,t){var i=e.toLowerCase();return i===t.amPm[0]?0:i===t.amPm[1]?1:null}],be=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(e){var t=(e+"").match(/([+-]|\d\d)/gi);if(t){var i=60*+t[1]+parseInt(t[2],10);return"+"===t[0]?i:-i}return 0}],Se=(de("monthNamesShort"),de("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var xe=function(e,t,i){if(void 0===t&&(t=Se.default),void 0===i&&(i={}),"number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date pass to format");var s=[];t=(t=Se[t]||t).replace(oe,(function(e,t){return s.push(t),"@@@"}));var n=le(le({},_e),i);return(t=t.replace(ne,(function(t){return ge[t](e,n)}))).replace(/@@@/g,(function(){return s.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}})(),function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}}();var Ee={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",show_error:"Show Error"},Ce={registry:"Registry"},Pe={one:"Area",other:"Areas"},$e={one:"Entity",other:"Entities"},Ne={area:"Update settings for rooms (areas). After updating, you may need to rebuild the counters from the settings menu to see your changes.",entity:"Update settings for devices (entities). After updating, you may need to rebuild the counters from the settings menu to see your changes."},Ae={entity_type:"Entity Type",sort_order:"Sort Order",visible:"Visible",visible_area_description:"Areas that are not visible will not be displayed automatically in dashboards."},Me={area:"Area Settings",entity:"Entity Settings"},Te={common:Ee,config:Ce,area:Pe,entity:$e,intro:Ne,settings:Ae,title:Me};const ke={en:Object.freeze({__proto__:null,common:Ee,config:Ce,area:Pe,entity:$e,intro:Ne,settings:Ae,title:Me,default:Te})};function Oe(e,t="",i=""){const s=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let n;try{n=e.split(".").reduce((e,t)=>e[t],ke[s])}catch(t){n=e.split(".").reduce((e,t)=>e[t],ke.en)}return void 0===n&&(n=e.split(".").reduce((e,t)=>e[t],ke.en)),""!==t&&""!==i&&(n=n.replace(t,i)),n}let De=class extends se{constructor(){super(...arguments),this._initialized=!1}setConfig(e){this._config=e,this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}get _registry(){var e;return(null===(e=this._config)||void 0===e?void 0:e.registry)||"area"}render(){return this.hass&&this._helpers?(this._helpers.importMoreInfoControl("climate"),R`
      <div class="card-config">
        <div class="values">
          <paper-dropdown-menu
            label="${Oe("config.registry")}"
            @value-changed=${this._valueChanged}
            .configValue=${"registry"}
          >
            <paper-listbox slot="dropdown-content" .selected=${"area"===this._registry?0:1}>
              <paper-item value="area">${Oe("area.one")}</paper-item>
              <paper-item value="entity">${Oe("entity.one")}</paper-item>
            </paper-listbox>
          </paper-dropdown-menu>
        </div>
      </div>
    `):R``}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_valueChanged(e){if(!this._config||!this.hass)return;const t=e.target;this["_"+t.configValue]!==t.value&&(t.configValue&&(""===t.value?delete this._config[t.configValue]:this._config=Object.assign(Object.assign({},this._config),{[t.configValue]:void 0!==t.checked?t.checked:t.value})),function(e,t,i,s){s=s||{},i=null==i?{}:i;var n=new Event(t,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});n.detail=i,e.dispatchEvent(n)}(this,"config-changed",{config:this._config}))}static get styles(){return te`
      .row {
        display: flex;
        margin-bottom: -14px;
        pointer-events: none;
      }
      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }
      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }
      .values {
        padding-left: 16px;
        background: var(--secondary-background-color);
        display: grid;
      }
      ha-formfield {
        padding-bottom: 8px;
      }
    `}};e([G({attribute:!1})],De.prototype,"hass",void 0),e([K()],De.prototype,"_config",void 0),e([K()],De.prototype,"_helpers",void 0),De=e([J("enhanced-templates-card-editor")],De);console.info(`%c  ENHANCED-TEMPLATES-CARD  \n%c  ${Oe("common.version")} 0.1.0            `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"enhanced-templates-card",name:"Enhanced Templates Settings Card",description:"Update areas or entities with custom settings."});let Ve=class extends se{constructor(){super(...arguments),this._entity_types=[]}static async getConfigElement(){return document.createElement("enhanced-templates-card-editor")}static getStubConfig(){return{}}async setConfig(e){if(!e)throw new Error(Oe("common.invalid_configuration"));e.test_gui&&function(){var e=document.querySelector("home-assistant");if(e=(e=(e=(e=(e=(e=(e=(e=e&&e.shadowRoot)&&e.querySelector("home-assistant-main"))&&e.shadowRoot)&&e.querySelector("app-drawer-layout partial-panel-resolver"))&&e.shadowRoot||e)&&e.querySelector("ha-panel-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-root")){var t=e.lovelace;return t.current_view=e.___curView,t}return null}().setEditMode(!0),this.config=e,await(async()=>{if(customElements.get("ha-entity-picker"))return;await customElements.whenDefined("partial-panel-resolver");const e=document.createElement("partial-panel-resolver");e.hass={panels:[{url_path:"tmp",component_name:"developer-tools"}]},e._updateRoutes(),await e.routerOptions.routes.tmp.load(),await customElements.whenDefined("developer-tools-router");const t=document.createElement("developer-tools-router");await t.routerOptions.routes.state.load()})(),await(async()=>{if(customElements.get("ha-area-picker"))return;await customElements.whenDefined("partial-panel-resolver");const e=document.createElement("partial-panel-resolver");e.hass={panels:[{url_path:"tmp",component_name:"config"}]},e._updateRoutes(),await e.routerOptions.routes.tmp.load(),await customElements.whenDefined("ha-panel-config");const t=document.createElement("ha-panel-config");await t.routerOptions.routes.devices.load(),await customElements.whenDefined("ha-config-device-page");document.createElement("ha-config-device-page").firstUpdated({}),await t.routerOptions.routes.entities.load(),await customElements.whenDefined("ha-config-entities");document.createElement("ha-config-entities").firstUpdated({})})(),await this._load_entity_types()}async _load_entity_types(){this._entity_types=await this.hass.callWS({type:"enhanced_templates_entity_types"})}shouldUpdate(e){return!!this.config&&function(e,t,i){if(t.has("config")||i)return!0;if(e.config.entity){var s=t.get("hass");return!s||s.states[e.config.entity]!==e.hass.states[e.config.entity]}return!1}(this,e,!1)}render(){return this.config.show_warning?this._showWarning(Oe("common.show_warning")):this.config.show_error?this._showError(Oe("common.show_error")):"area"===this.config.registry?this._areaSettings():this._entitySettings()}_disabled(){return!!this._submitting||("area"===this.config.registry?!this._selectedArea||""===this._selectedArea.id:!this._selectedEntity||""===this._selectedEntity.entity_id)}_areaSettings(){var e,t;return R`
      <ha-card .header=${Oe("title.area")}>
        <div class="card-content">
          <p>${Oe("intro.area")}</p>
          <div>
            <ha-area-picker
              .hass=${this.hass}
              .value=${null===(e=this._selectedArea)||void 0===e?void 0:e.id}
              @value-changed=${this._areaPicked}
            />
            </ha-area-picker>
          </div>
          <div>
            <ha-icon-input
              .value=${this._icon}
              @value-changed=${this._iconChanged}
              .label=${this.hass.localize("ui.dialogs.entity_registry.editor.icon")}
              .placeholder=${"mdi:square-rounded-outline"}
              .disabled=${this._disabled()}
              .errorMessage=${this.hass.localize("ui.dialogs.entity_registry.editor.icon_error")}
            >
            </ha-icon-input>
          </div>
          <paper-input
            .value=${this._name}
            @value-changed=${this._nameChanged}
            .label=${this.hass.localize("ui.dialogs.entity_registry.editor.name")}
            .placeholder=${null===(t=this._selectedArea)||void 0===t?void 0:t.original_name}
            .disabled=${this._disabled()}
          >
          </paper-input>
          <paper-input
            .value=${this._sortOrder}
            @value-changed=${this._sortOrderChanged}
            pattern="[0-9]+([\.][0-9]+)?"
            type="number"
            .label=${Oe("settings.sort_order")}
            .placeholder=${5e5}
            .disabled=${this._disabled()}
          >
          </paper-input>
          <div class="row">
            <ha-switch
              style="--mdc-theme-secondary:var(--switch-checked-color);"
              .checked=${this._visible}
              @change=${this._visibleChanged}
              .disabled=${this._disabled()}
            >
            </ha-switch>
            <div>
              <div class=${this._disabled()?"disabled":void 0}>${Oe("settings.visible")}</div>
              <div class=${this._disabled()?"disabled":"secondary"}>${Oe("settings.visible_area_description")}</div>
            </div>
          </div>
        </div>
        <div class="buttons">
              <mwc-button
                @click=${this._updateAreaSettings}
                .disabled=${this._disabled()}
              >
                Update
              </mwc-button>
          </div>
      </ha-card>
    `}_entitySettings(){var e,t,i,s,n,r,o,a;return R`
      <ha-card .header=${Oe("title.entity")}>
        <div class="card-content">
          <p>${Oe("intro.entity")}</p>
          <div>
            <ha-entity-picker
              .hass=${this.hass}
              .value=${null===(e=this._selectedEntity)||void 0===e?void 0:e.entity_id}
              @value-changed=${this._entityPicked}
            />
            </ha-entity-picker>
          </div>
          <div>
            <ha-area-picker
              .hass=${this.hass}
              .value=${null===(t=this._selectedEntity)||void 0===t?void 0:t.area_id}
              @value-changed=${this._entityAreaPicked}
              .placeholder=${null===(i=this._selectedEntity)||void 0===i?void 0:i.original_area_id}
              .disabled=${this._disabled()}
            />
            </ha-area-picker>
          </div>
          ${0==(null===(s=this._entity_types)||void 0===s?void 0:s.length)?void 0:R`
              <paper-dropdown-menu
                class="full-width"
                label-float
                dynamic-align
                .label=${Oe("settings.entity_type")}
                .disabled=${this._disabled()||0==(null===(n=this._entity_types)||void 0===n?void 0:n.length)}
                .placeholder=${null===(r=this._selectedEntity)||void 0===r?void 0:r.original_entity_type}
              >
                <paper-listbox
                  slot="dropdown-content"
                  attr-for-selected="item-name"
                  .selected=${(null===(o=this._selectedEntity)||void 0===o?void 0:o.entity_type)||""}
                  @selected-changed=${this._entityTypePicked}
                >
                  <paper-item item-name="">None</paper-item>
                  ${null===(a=this._entity_types)||void 0===a?void 0:a.map(e=>R`
                    <paper-item item-name=${e}>
                      ${e}
                    </paper-item>
                  `)}
                </paper-listbox>
              </paper-dropdown-menu>
            `}
          <paper-input
            .value=${this._sortOrder}
            @value-changed=${this._sortOrderChanged}
            pattern="[0-9]+([\.][0-9]+)?"
            type="number"
            .label=${Oe("settings.sort_order")}
            .placeholder=${5e5}
            .disabled=${this._disabled()}
          >
          </paper-input>
          <div class="row">
            <ha-switch
              style="--mdc-theme-secondary:var(--switch-checked-color);"
              .checked=${this._visible}
              @change=${this._visibleChanged}
              .disabled=${this._disabled()}
            >
            </ha-switch>
            <div>
              <div class=${this._disabled()?"disabled":void 0} >${Oe("settings.visible")}</div>
              <div class=${this._disabled()?"disabled":"secondary"}>${Oe("settings.visible_area_description")}</div>
            </div>
          </div>
        </div>
        <div class="buttons">
              <mwc-button
                @click=${this._updateEntitySettings}
                .disabled=${this._disabled()}
              >
                Update
              </mwc-button>
          </div>
      </ha-card>
    `}async _areaPicked(e){var t,i,s,n,r,o,a,d;""===e.detail.value?this._selectedArea={id:e.detail.value}:this._selectedArea=await this.hass.callWS({type:"enhanced_templates_area_settings",area_id:e.detail.value}),this._icon="mdi:square-rounded-outline"===(null===(t=this._selectedArea)||void 0===t?void 0:t.icon)||null===(i=this._selectedArea)||void 0===i?void 0:i.icon,this._name=(null===(s=this._selectedArea)||void 0===s?void 0:s.name)===(null===(n=this._selectedArea)||void 0===n?void 0:n.original_name)||null===(r=this._selectedArea)||void 0===r?void 0:r.name,this._sortOrder=5e5===(null===(o=this._selectedArea)||void 0===o?void 0:o.sort_order)||null===(a=this._selectedArea)||void 0===a?void 0:a.sort_order,this._visible=null===(d=this._selectedArea)||void 0===d?void 0:d.visible}async _entityPicked(e){var t,i,s,n,r,o,a,d,l;""===e.detail.value?this._selectedEntity={entity_id:e.detail.value}:this._selectedEntity=await this.hass.callWS({type:"enhanced_templates_entity_settings",entity_id:e.detail.value}),console.log(this._selectedEntity),this._area_id=(null===(t=this._selectedEntity)||void 0===t?void 0:t.area_id)===(null===(i=this._selectedEntity)||void 0===i?void 0:i.original_area_id)||null===(s=this._selectedEntity)||void 0===s?void 0:s.area_id,this._entity_type=(null===(n=this._selectedEntity)||void 0===n?void 0:n.entity_type)===(null===(r=this._selectedEntity)||void 0===r?void 0:r.original_entity_type)||null===(o=this._selectedEntity)||void 0===o?void 0:o.entity_type,this._sortOrder=5e5===(null===(a=this._selectedEntity)||void 0===a?void 0:a.sort_order)||null===(d=this._selectedEntity)||void 0===d?void 0:d.sort_order,this._visible=null===(l=this._selectedEntity)||void 0===l?void 0:l.visible}_entityAreaPicked(e){this._area_id=e.detail.value}_entityTypePicked(e){this._entity_type=e.detail.value}_iconChanged(e){this._icon=e.detail.value}_nameChanged(e){this._name=e.detail.value}_sortOrderChanged(e){this._sortOrder=e.detail.value}_visibleChanged(e){this._visible=e.target.checked}_updateAreaSettings(){var e;this.hass.callService("enhanced_templates","set_area",{area_id:null===(e=this._selectedArea)||void 0===e?void 0:e.id,icon:this._icon,name:this._name,sort_order:this._sortOrder,visible:this._visible})}_updateEntitySettings(){var e;this.hass.callService("enhanced_templates","set_entity",{entity_id:null===(e=this._selectedEntity)||void 0===e?void 0:e.entity_id,area_id:this._area_id,entity_type:this._entity_type,sort_order:this._sortOrder,visible:this._visible})}_showWarning(e){return R`
      <hui-warning>${e}</hui-warning>
    `}_showError(e){const t=document.createElement("hui-error-card");return t.setConfig({type:"error",error:e,origConfig:this.config}),R`
      ${t}
    `}static get styles(){return te`
      .row {
        margin-top: 8px;
        color: var(--primary-text-color);
        display: flex;
        align-items: center;
      }

      .secondary {
        color: var(--secondary-text-color);
      }

      .disabled {
        color: var(--disabled-text-color);
      }

      .full-width {
        width: 100%;
      }

      .buttons {
        width: 100%;
        box-sizing: border-box;
        border-top: 1px solid var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12));
        display: flex;
        justify-content: space-between;
        flex-direction: row-reverse;
        padding-top: 8px;
        padding-right: 8px;
        padding-left: 8px;
        padding-bottom: max(env(safe-area-inset-bottom), 8px);
      }

      ha-switch {
        margin-right: 16px
      }
    `}getCardSize(){return 3}};e([G({attribute:!1})],Ve.prototype,"hass",void 0),e([K()],Ve.prototype,"config",void 0),e([K()],Ve.prototype,"_area_id",void 0),e([K()],Ve.prototype,"_entity_type",void 0),e([K()],Ve.prototype,"_entity_types",void 0),e([K()],Ve.prototype,"_icon",void 0),e([K()],Ve.prototype,"_name",void 0),e([K()],Ve.prototype,"_selectedArea",void 0),e([K()],Ve.prototype,"_selectedEntity",void 0),e([K()],Ve.prototype,"_sortOrder",void 0),e([K()],Ve.prototype,"_submitting",void 0),e([K()],Ve.prototype,"_visible",void 0),Ve=e([J("enhanced-templates-card")],Ve);export{Ve as EnhancedTemplateCard};
