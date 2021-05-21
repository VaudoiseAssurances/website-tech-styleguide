/*! va.cms.legacy.bundle.js v2.46.0 by Vaudoise Assurances © 21.05.2021 09:28:35 - hash:32f5b642dd93d7de1bc1 */!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=243)}([,,function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r={isHidden:"is-hidden",isHiddenSm:"is-hidden-sm",validationMessage:"form-group__message",isActive:"is-active",isOpen:"is-open",isSticky:"is-sticky",hasError:"has-error",isStickyBottom:"is-sticky-bottom",displayNone:"d-none",formGroup:"form-group"}},function(t,n){t.exports=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,n){function e(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t},t.exports.default=t.exports,t.exports.__esModule=!0},,function(t,n,e){"use strict";var r;e.d(n,"a",(function(){return r})),function(t){t.ContentViews="Content views",t.AgentSearch="Agent search",t.ContentCtaClicks="Content CTA clicks",t.CostCalculator="Cost calculator",t.FooterLinkClicks="Footer link clicks",t.PageCategorySelection="Page category selection",t.PageSubcategorySelection="Page subcategory selection",t.Logo="Vaudoise logo clicks",t.LanguageSelection="Language selection",t.ProductSelection="Product selection",t.ContactForm="Contact form submissions",t.AddressChange="Address change",t.DamageClaims="Damage claims",t.LeadCreation="Lead creation",t.OfferRequests="Offer requests",t.ECommerce="ecommerce",t.DocumentDownload="Document Download",t.AppDownload="App download clicks",t.NavigationCtaClicks="Navigation CTA clicks"}(r||(r={}))},function(t,n,e){"use strict";var r;e.d(n,"a",(function(){return r})),function(t){t.ContentEngagement="Content engagement",t.ClientEnquiries="Client enquiries",t.Navigation="Navigation",t.Leads="Leads"}(r||(r={}))},function(t,n,e){"use strict";e.d(n,"b",(function(){return s})),e.d(n,"a",(function(){return f}));var r=e(3),o=e.n(r),i=e(4),c=e.n(i),a=e(7),u=e(6),s="-",f=function(){function t(){o()(this,t)}return c()(t,[{key:"gtmVariables",get:function(){return(window.VA||{}).GtmVariables||{}}},{key:"pushEvent",value:function(t,n,e,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(t&&n&&e&&r){var i={event:t,category:n,action:e,label:r};o&&this.configureGtmCallback(i,o),window.dataLayer.push(i)}}},{key:"pushContentViewsEvent",value:function(t,n){this.pushEvent(u.a.ContentViews,a.a.ContentEngagement,"Content views: ".concat(t),n)}},{key:"pushAgentSearch",value:function(t){this.pushEvent(u.a.AgentSearch,a.a.ClientEnquiries,"Agent search",t)}},{key:"pushContentCta",value:function(t,n){this.pushEvent(u.a.ContentCtaClicks,a.a.ContentEngagement,"CTA clicks: ".concat(t),n)}},{key:"pushLeadsCheckoutEvent",value:function(t){this.pushEvent(u.a.LeadCreation,a.a.Leads,"Step: ".concat(t),this.gtmVariables.product)}},{key:"pushLeadsCheckoutCompleteEvent",value:function(){this.pushLeadsCheckoutEvent("Complete")}},{key:"pushLeadsRequestOfferEvent",value:function(t){this.pushEvent(u.a.OfferRequests,a.a.Leads,"Offer request",this.gtmVariables.product,t)}},{key:"pushECommerceEvent",value:function(t,n){t.event=t.event||u.a.ECommerce,t.currencyCode=t.currencyCode||"CH",t.transactionAffiliation=t.transactionAffiliation||"Vaudoise.ch",t.transactionProducts=t.transactionProducts||[],this.configureGtmCallback(t,n),window.dataLayer.push(t)}},{key:"configureGtmCallback",value:function(t,n){n&&(t.eventCallback=n,t.eventTimeout=2e3)}}],[{key:"getInstance",value:function(){return t.instance||(t.instance=new t),t.instance}}]),t}()},,,function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,e(70))},function(t,n,e){var r=e(11),o=e(45).f,i=e(23),c=e(30),a=e(71),u=e(98),s=e(92);t.exports=function(t,n){var e,f,l,v,p,d=t.target,g=t.global,y=t.stat;if(e=g?r:y?r[d]||a(d,{}):(r[d]||{}).prototype)for(f in n){if(v=n[f],l=t.noTargetGet?(p=o(e,f))&&p.value:e[f],!s(g?f:d+(y?".":"#")+f,t.forced)&&void 0!==l){if(typeof v==typeof l)continue;u(v,l)}(t.sham||l&&l.sham)&&i(v,"sham",!0),c(e,f,v,t)}}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(11),o=e(73),i=e(19),c=e(74),a=e(76),u=e(101),s=o("wks"),f=r.Symbol,l=u?f:f&&f.withoutSetter||c;t.exports=function(t){return i(s,t)&&(a||"string"==typeof s[t])||(a&&i(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},function(t,n,e){var r=e(11),o=e(104),i=e(119),c=e(23);for(var a in o){var u=r[a],s=u&&u.prototype;if(s&&s.forEach!==i)try{c(s,"forEach",i)}catch(t){s.forEach=i}}},,function(t,n,e){var r=e(18);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(22),o=e(97),i=e(17),c=e(53),a=Object.defineProperty;n.f=r?a:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return a(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(78),o=e(30),i=e(131);r||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,n,e){var r=e(13);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n,e){var r=e(22),o=e(20),i=e(46);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},,,function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return o}));e(85),e(42),e(41),e(44),e(21),e(35),e(34);function r(t,n){return Array.from(t.childNodes).filter((function(t){return t.classList&&t.classList.contains(n)}))}function o(t,n){var e=r(t,n);return e&&e.length>0?e[0]:null}},function(t,n,e){"use strict";var r;e.d(n,"a",(function(){return r})),function(t){t[t.xs=0]="xs",t[t.sm=576]="sm",t[t.md=768]="md",t[t.lg=992]="lg",t[t.xl=1200]="xl"}(r||(r={}))},function(t,n,e){var r=e(66),o=e(37);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(49),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(11),o=e(23),i=e(19),c=e(71),a=e(88),u=e(47),s=u.get,f=u.enforce,l=String(String).split("String");(t.exports=function(t,n,e,a){var u,s=!!a&&!!a.unsafe,v=!!a&&!!a.enumerable,p=!!a&&!!a.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),(u=f(e)).source||(u.source=l.join("string"==typeof n?n:""))),t!==r?(s?!p&&t[n]&&(v=!0):delete t[n],v?t[n]=e:o(t,n,e)):v?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||a(this)}))},function(t,n,e){var r=e(37);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(89),o=e(19),i=e(103),c=e(20).f;t.exports=function(t){var n=r.Symbol||(r.Symbol={});o(n,t)||c(n,t,{value:i.f(t)})}},,function(t,n,e){"use strict";var r=e(12),o=e(13),i=e(61),c=e(18),a=e(31),u=e(29),s=e(62),f=e(93),l=e(64),v=e(14),p=e(63),d=v("isConcatSpreadable"),g=p>=51||!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),y=l("concat"),m=function(t){if(!c(t))return!1;var n=t[d];return void 0!==n?!!n:i(t)};r({target:"Array",proto:!0,forced:!g||!y},{concat:function(t){var n,e,r,o,i,c=a(this),l=f(c,0),v=0;for(n=-1,r=arguments.length;n<r;n++)if(m(i=-1===n?c:arguments[n])){if(v+(o=u(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(e=0;e<o;e++,v++)e in i&&s(l,v,i[e])}else{if(v>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(l,v++,i)}return l.length=v,l}})},function(t,n,e){"use strict";var r=e(30),o=e(17),i=e(13),c=e(110),a=RegExp.prototype,u=a.toString,s=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),f="toString"!=u.name;(s||f)&&r(RegExp.prototype,"toString",(function(){var t=o(this),n=String(t.source),e=t.flags;return"/"+n+"/"+String(void 0===e&&t instanceof RegExp&&!("flags"in a)?c.call(t):e)}),{unsafe:!0})},,function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},,function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(89),o=e(11),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){"use strict";var r=e(124).charAt,o=e(47),i=e(105),c=o.set,a=o.getterFor("String Iterator");i(String,"String",(function(t){c(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,n=a(this),e=n.string,o=n.index;return o>=e.length?{value:void 0,done:!0}:(t=r(e,o),n.index+=t.length,{value:t,done:!1})}))},function(t,n,e){var r=e(12),o=e(140);r({target:"Array",stat:!0,forced:!e(123)((function(t){Array.from(t)}))},{from:o})},function(t,n,e){"use strict";var r=e(12),o=e(18),i=e(61),c=e(90),a=e(29),u=e(28),s=e(62),f=e(14),l=e(64)("slice"),v=f("species"),p=[].slice,d=Math.max;r({target:"Array",proto:!0,forced:!l},{slice:function(t,n){var e,r,f,l=u(this),g=a(l.length),y=c(t,g),m=c(void 0===n?g:n,g);if(i(l)&&("function"!=typeof(e=l.constructor)||e!==Array&&!i(e.prototype)?o(e)&&null===(e=e[v])&&(e=void 0):e=void 0,e===Array||void 0===e))return p.call(l,y,m);for(r=new(void 0===e?Array:e)(d(m-y,0)),f=0;y<m;y++,f++)y in l&&s(r,f,l[y]);return r.length=f,r}})},function(t,n,e){var r=e(22),o=e(20).f,i=Function.prototype,c=i.toString,a=/^\s*function ([^ (]*)/;r&&!("name"in i)&&o(i,"name",{configurable:!0,get:function(){try{return c.call(this).match(a)[1]}catch(t){return""}}})},function(t,n,e){var r=e(22),o=e(86),i=e(46),c=e(28),a=e(53),u=e(19),s=e(97),f=Object.getOwnPropertyDescriptor;n.f=r?f:function(t,n){if(t=c(t),n=a(n,!0),s)try{return f(t,n)}catch(t){}if(u(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r,o,i,c=e(130),a=e(11),u=e(18),s=e(23),f=e(19),l=e(72),v=e(58),p=e(59),d=a.WeakMap;if(c){var g=l.state||(l.state=new d),y=g.get,m=g.has,h=g.set;r=function(t,n){return n.facade=t,h.call(g,t,n),n},o=function(t){return y.call(g,t)||{}},i=function(t){return m.call(g,t)}}else{var b=v("state");p[b]=!0,r=function(t,n){return n.facade=t,s(t,b,n),n},o=function(t){return f(t,b)?t[b]:{}},i=function(t){return f(t,b)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!u(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n){t.exports=!1},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(20).f,o=e(19),i=e(14)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n){t.exports={}},,function(t,n,e){var r=e(18);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(81),o=e(66),i=e(31),c=e(29),a=e(93),u=[].push,s=function(t){var n=1==t,e=2==t,s=3==t,f=4==t,l=6==t,v=7==t,p=5==t||l;return function(d,g,y,m){for(var h,b,S=i(d),x=o(S),O=r(g,y,3),w=c(x.length),L=0,E=m||a,_=n?E(d,w):e||v?E(d,0):void 0;w>L;L++)if((p||L in x)&&(b=O(h=x[L],L,S),t))if(n)_[L]=b;else if(b)switch(t){case 3:return!0;case 5:return h;case 6:return L;case 2:u.call(_,h)}else switch(t){case 4:return!1;case 7:u.call(_,h)}return l?-1:s||f?f:_}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){"use strict";var r=e(28),o=e(108),i=e(51),c=e(47),a=e(105),u=c.set,s=c.getterFor("Array Iterator");t.exports=a(Array,"Array",(function(t,n){u(this,{type:"Array Iterator",target:r(t),index:0,kind:n})}),(function(){var t=s(this),n=t.target,e=t.kind,r=t.index++;return!n||r>=n.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==e?{value:r,done:!1}:"values"==e?{value:n[r],done:!1}:{value:[r,n[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},,function(t,n,e){var r=e(73),o=e(74),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports={}},function(t,n,e){var r=e(99),o=e(75).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(39);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){"use strict";var r=e(53),o=e(20),i=e(46);t.exports=function(t,n,e){var c=r(n);c in t?o.f(t,c,i(0,e)):t[c]=e}},function(t,n,e){var r,o,i=e(11),c=e(94),a=i.process,u=a&&a.versions,s=u&&u.v8;s?o=(r=s.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,n,e){var r=e(13),o=e(14),i=e(63),c=o("species");t.exports=function(t){return i>=51||!r((function(){var n=[];return(n.constructor={})[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,e){var r,o=e(17),i=e(132),c=e(75),a=e(59),u=e(118),s=e(87),f=e(58),l=f("IE_PROTO"),v=function(){},p=function(t){return"<script>"+t+"<\/script>"},d=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;d=r?function(t){t.write(p("")),t.close();var n=t.parentWindow.Object;return t=null,n}(r):((n=s("iframe")).style.display="none",u.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(p("document.F=Object")),t.close(),t.F);for(var e=c.length;e--;)delete d.prototype[c[e]];return d()};a[l]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(v.prototype=o(t),e=new v,v.prototype=null,e[l]=t):e=d(),void 0===n?e:i(e,n)}},function(t,n,e){var r=e(13),o=e(39),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,e){"use strict";var r=e(13);t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},function(t,n,e){var r=e(11),o=e(104),i=e(56),c=e(23),a=e(14),u=a("iterator"),s=a("toStringTag"),f=i.values;for(var l in o){var v=r[l],p=v&&v.prototype;if(p){if(p[u]!==f)try{c(p,u,f)}catch(t){p[u]=f}if(p[s]||c(p,s,l),o[l])for(var d in i)if(p[d]!==i[d])try{c(p,d,i[d])}catch(t){p[d]=i[d]}}}},,function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){var r=e(11),o=e(23);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(11),o=e(71),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(48),o=e(72);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.9.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,e){var r=e(77),o=e(63),i=e(13);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){return!Symbol.sham&&(r?38===o:o>37&&o<41)}))},function(t,n,e){var r=e(39),o=e(11);t.exports="process"==r(o.process)},function(t,n,e){var r={};r[e(14)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(t,n,e){"use strict";var r=e(12),o=e(11),i=e(40),c=e(48),a=e(22),u=e(76),s=e(101),f=e(13),l=e(19),v=e(61),p=e(18),d=e(17),g=e(31),y=e(28),m=e(53),h=e(46),b=e(65),S=e(80),x=e(60),O=e(133),w=e(91),L=e(45),E=e(20),_=e(86),A=e(23),j=e(30),k=e(73),C=e(58),P=e(59),T=e(74),I=e(14),q=e(103),M=e(32),N=e(50),F=e(47),D=e(54).forEach,R=C("hidden"),V=I("toPrimitive"),G=F.set,H=F.getterFor("Symbol"),B=Object.prototype,W=o.Symbol,z=i("JSON","stringify"),U=L.f,Y=E.f,$=O.f,J=_.f,K=k("symbols"),Q=k("op-symbols"),X=k("string-to-symbol-registry"),Z=k("symbol-to-string-registry"),tt=k("wks"),nt=o.QObject,et=!nt||!nt.prototype||!nt.prototype.findChild,rt=a&&f((function(){return 7!=b(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(t,n,e){var r=U(B,n);r&&delete B[n],Y(t,n,e),r&&t!==B&&Y(B,n,r)}:Y,ot=function(t,n){var e=K[t]=b(W.prototype);return G(e,{type:"Symbol",tag:t,description:n}),a||(e.description=n),e},it=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof W},ct=function(t,n,e){t===B&&ct(Q,n,e),d(t);var r=m(n,!0);return d(e),l(K,r)?(e.enumerable?(l(t,R)&&t[R][r]&&(t[R][r]=!1),e=b(e,{enumerable:h(0,!1)})):(l(t,R)||Y(t,R,h(1,{})),t[R][r]=!0),rt(t,r,e)):Y(t,r,e)},at=function(t,n){d(t);var e=y(n),r=S(e).concat(lt(e));return D(r,(function(n){a&&!ut.call(e,n)||ct(t,n,e[n])})),t},ut=function(t){var n=m(t,!0),e=J.call(this,n);return!(this===B&&l(K,n)&&!l(Q,n))&&(!(e||!l(this,n)||!l(K,n)||l(this,R)&&this[R][n])||e)},st=function(t,n){var e=y(t),r=m(n,!0);if(e!==B||!l(K,r)||l(Q,r)){var o=U(e,r);return!o||!l(K,r)||l(e,R)&&e[R][r]||(o.enumerable=!0),o}},ft=function(t){var n=$(y(t)),e=[];return D(n,(function(t){l(K,t)||l(P,t)||e.push(t)})),e},lt=function(t){var n=t===B,e=$(n?Q:y(t)),r=[];return D(e,(function(t){!l(K,t)||n&&!l(B,t)||r.push(K[t])})),r};(u||(j((W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,n=T(t),e=function(t){this===B&&e.call(Q,t),l(this,R)&&l(this[R],n)&&(this[R][n]=!1),rt(this,n,h(1,t))};return a&&et&&rt(B,n,{configurable:!0,set:e}),ot(n,t)}).prototype,"toString",(function(){return H(this).tag})),j(W,"withoutSetter",(function(t){return ot(T(t),t)})),_.f=ut,E.f=ct,L.f=st,x.f=O.f=ft,w.f=lt,q.f=function(t){return ot(I(t),t)},a&&(Y(W.prototype,"description",{configurable:!0,get:function(){return H(this).description}}),c||j(B,"propertyIsEnumerable",ut,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:W}),D(S(tt),(function(t){M(t)})),r({target:"Symbol",stat:!0,forced:!u},{for:function(t){var n=String(t);if(l(X,n))return X[n];var e=W(n);return X[n]=e,Z[e]=n,e},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(l(Z,t))return Z[t]},useSetter:function(){et=!0},useSimple:function(){et=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!a},{create:function(t,n){return void 0===n?b(t):at(b(t),n)},defineProperty:ct,defineProperties:at,getOwnPropertyDescriptor:st}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:ft,getOwnPropertySymbols:lt}),r({target:"Object",stat:!0,forced:f((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(g(t))}}),z)&&r({target:"JSON",stat:!0,forced:!u||f((function(){var t=W();return"[null]"!=z([t])||"{}"!=z({a:t})||"{}"!=z(Object(t))}))},{stringify:function(t,n,e){for(var r,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=n,(p(n)||void 0!==t)&&!it(t))return v(n)||(n=function(t,n){if("function"==typeof r&&(n=r.call(this,t,n)),!it(n))return n}),o[1]=n,z.apply(null,o)}});W.prototype[V]||A(W.prototype,V,W.prototype.valueOf),N(W,"Symbol"),P[R]=!0},function(t,n,e){var r=e(99),o=e(75);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(55);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){"use strict";var r=e(12),o=e(22),i=e(11),c=e(19),a=e(18),u=e(20).f,s=e(98),f=i.Symbol;if(o&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},v=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof v?new f(t):void 0===t?f():f(t);return""===t&&(l[n]=!0),n};s(v,f);var p=v.prototype=f.prototype;p.constructor=v;var d=p.toString,g="Symbol(test)"==String(f("test")),y=/^Symbol\((.*)\)[^)]+$/;u(p,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,n=d.call(t);if(c(l,t))return"";var e=g?n.slice(7,-1):n.replace(y,"$1");return""===e?void 0:e}}),r({global:!0,forced:!0},{Symbol:v})}},function(t,n,e){e(32)("iterator")},,function(t,n,e){"use strict";var r=e(12),o=e(54).filter;r({target:"Array",proto:!0,forced:!e(64)("filter")},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(11),o=e(18),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n,e){var r=e(72),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n,e){var r=e(11);t.exports=r},function(t,n,e){var r=e(49),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(13),o=/#|\.prototype\./,i=function(t,n){var e=a[c(t)];return e==s||e!=u&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},u=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},function(t,n,e){var r=e(18),o=e(61),i=e(14)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},function(t,n,e){var r=e(40);t.exports=r("navigator","userAgent")||""},,,function(t,n,e){var r=e(22),o=e(13),i=e(87);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(19),o=e(117),i=e(45),c=e(20);t.exports=function(t,n){for(var e=o(n),a=c.f,u=i.f,s=0;s<e.length;s++){var f=e[s];r(t,f)||a(t,f,u(n,f))}}},function(t,n,e){var r=e(19),o=e(28),i=e(100).indexOf,c=e(59);t.exports=function(t,n){var e,a=o(t),u=0,s=[];for(e in a)!r(c,e)&&r(a,e)&&s.push(e);for(;n.length>u;)r(a,e=n[u++])&&(~i(s,e)||s.push(e));return s}},function(t,n,e){var r=e(28),o=e(29),i=e(90),c=function(t){return function(n,e,c){var a,u=r(n),s=o(u.length),f=i(c,s);if(t&&e!=e){for(;s>f;)if((a=u[f++])!=a)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n,e){var r=e(76);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){var r=e(78),o=e(39),i=e(14)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?e:c?o(n):"Object"==(r=o(n))&&"function"==typeof n.callee?"Arguments":r}},function(t,n,e){var r=e(14);n.f=r},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,e){"use strict";var r=e(12),o=e(137),i=e(107),c=e(125),a=e(50),u=e(23),s=e(30),f=e(14),l=e(48),v=e(51),p=e(106),d=p.IteratorPrototype,g=p.BUGGY_SAFARI_ITERATORS,y=f("iterator"),m=function(){return this};t.exports=function(t,n,e,f,p,h,b){o(e,n,f);var S,x,O,w=function(t){if(t===p&&j)return j;if(!g&&t in _)return _[t];switch(t){case"keys":case"values":case"entries":return function(){return new e(this,t)}}return function(){return new e(this)}},L=n+" Iterator",E=!1,_=t.prototype,A=_[y]||_["@@iterator"]||p&&_[p],j=!g&&A||w(p),k="Array"==n&&_.entries||A;if(k&&(S=i(k.call(new t)),d!==Object.prototype&&S.next&&(l||i(S)===d||(c?c(S,d):"function"!=typeof S[y]&&u(S,y,m)),a(S,L,!0,!0),l&&(v[L]=m))),"values"==p&&A&&"values"!==A.name&&(E=!0,j=function(){return A.call(this)}),l&&!b||_[y]===j||u(_,y,j),v[n]=j,p)if(x={values:w("values"),keys:h?j:w("keys"),entries:w("entries")},b)for(O in x)(g||E||!(O in _))&&s(_,O,x[O]);else r({target:n,proto:!0,forced:g||E},x);return x}},function(t,n,e){"use strict";var r,o,i,c=e(13),a=e(107),u=e(23),s=e(19),f=e(14),l=e(48),v=f("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=a(a(i)))!==Object.prototype&&(r=o):p=!0);var d=null==r||c((function(){var t={};return r[v].call(t)!==t}));d&&(r={}),l&&!d||s(r,v)||u(r,v,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},function(t,n,e){var r=e(19),o=e(31),i=e(58),c=e(138),a=i("IE_PROTO"),u=Object.prototype;t.exports=c?Object.getPrototypeOf:function(t){return t=o(t),r(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){var r=e(14),o=e(65),i=e(20),c=r("unscopables"),a=Array.prototype;null==a[c]&&i.f(a,c,{configurable:!0,value:o(null)}),t.exports=function(t){a[c][t]=!0}},,function(t,n,e){"use strict";var r=e(17);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},,function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));e(15);var r=e(26),o=e(2),i=e(27),c=".".concat("main-nav");function a(){var t,n;document.addEventListener("scroll",p,{passive:!0}),null===(t=document.getElementById("main-nav"))||void 0===t||t.addEventListener("click",s),null===(n=document.querySelector(".".concat("cms-header__trigger")))||void 0===n||n.addEventListener("click",d,!1),window.addEventListener("resize",v)}function u(t){t.querySelectorAll(".".concat(o.a.isHiddenSm)).forEach((function(t){return t.classList.remove(o.a.isHiddenSm)}))}function s(t){var n=t.target;if(n.classList.contains("main-nav__link")||(n=n.closest(".".concat("main-nav__link"))),n&&n.classList.contains("main-nav__link")&&n.nextElementSibling){var e=n.closest(".".concat("main-nav__item"));if(e){var c=e.closest(".".concat("main-nav"));if(c){var a=t.currentTarget;if(u(a),!e.classList.contains("js-nav-menu"))!function t(n,e,i){Object(r.a)(n,"main-nav__item").forEach((function(t){e!==t&&Object(r.b)(t,"main-nav__link").classList.toggle(o.a.isHiddenSm,i)}));var c=e.closest(".".concat("main-nav")).closest(".".concat("main-nav__item"));if(c){var a=Object(r.b)(c,"main-nav__link");if(a){var u=a.classList.toggle(o.a.isHiddenSm,i);t(c.closest(".".concat("main-nav")),c,!a.classList.contains("main-nav__link--desktop-only")||u)}}}(c,e,e!==Object(r.b)(c,o.a.isOpen));!function(t,n){var e;t.querySelectorAll(".".concat("main-nav__item")).forEach((function(t){var e;n!==t&&(t.classList.remove(o.a.isOpen),null===(e=t.querySelector(".".concat("main-nav__submenu")))||void 0===e||e.classList.remove(o.a.isOpen))}));var r=n.querySelector(".".concat("js-header-active-root-node"));if(r){var i;r.classList.toggle(o.a.isOpen),null===(i=r.querySelector(".".concat("main-nav__submenu")))||void 0===i||i.classList.toggle(o.a.isOpen)}n.classList.toggle(o.a.isOpen),null===(e=n.querySelector(".".concat("main-nav__submenu")))||void 0===e||e.classList.toggle(o.a.isOpen)}(c,e),function(t){var n=t.querySelectorAll(".".concat(o.a.isOpen)).length>0;!n&&window.innerWidth<i.a.md&&t.classList.contains(o.a.isOpen)&&(y(t),n=!0);t.classList.toggle(o.a.isOpen,n),document.querySelector(".".concat("cms-header__trigger")).classList.toggle(o.a.isActive,n)}(a),l(a),"#"===n.getAttribute("href")&&t.preventDefault(),document.removeEventListener("click",f),a.classList.contains(o.a.isOpen)&&document.addEventListener("click",f)}}}}function f(t){var n,e,r=t.target,i=r.closest(c);i||r.classList.contains("cms-header__trigger")||null!==(i=document.querySelector(c))&&(g(i),u(i),null===(n=document.querySelector(".".concat("cms-header__trigger")))||void 0===n||null===(e=n.classList)||void 0===e||e.remove(o.a.isActive),document.removeEventListener("click",f))}function l(t){if(t){var n=t.querySelector(".".concat("main-nav__submenu--category-container",".").concat(o.a.isOpen));if(n&&(n.style.height="auto",window.innerWidth>=i.a.md)){var e=n.querySelectorAll(".".concat("main-nav__submenu",".").concat(o.a.isOpen));if(e.length>0){for(var r=-1,c=0;c<e.length;++c){var a=e[c];a.clientHeight>r&&(r=a.clientHeight)}var u=window.getComputedStyle(n);r=r+(parseInt(u.paddingTop,10)||0)+(parseInt(u.paddingBottom,10)||0),n.clientHeight<r&&(n.style.height="".concat(r,"px"))}}}}function v(){l(document.getElementById("main-nav"))}function p(){var t=window.scrollY,n=document.querySelector(".cms-header");if(n){var e=document.querySelector(".cms-header__top-nav").clientHeight;n.classList.toggle(o.a.isSticky,t>e)}}function d(t){t.preventDefault();var n=t.target;n.classList.toggle(o.a.isActive);var e=document.getElementById("main-nav");e.classList.toggle(o.a.isOpen),document.removeEventListener("click",f),n.classList.contains(o.a.isActive)?(y(e),document.addEventListener("click",f)):(g(e),u(e))}function g(t){t.querySelectorAll(".".concat(o.a.isOpen)).forEach((function(t){t.classList.remove(o.a.isOpen)})),t.classList.remove(o.a.isOpen)}function y(t){var n=t.getElementsByClassName("js-nav-menu");if(n&&1===n.length){var e=n[0];e.classList.add(o.a.isOpen),Object(r.b)(e,"main-nav__submenu").classList.add(o.a.isOpen)}}},function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));e(43),e(21),e(44),e(42),e(41),e(79),e(82),e(83),e(56),e(68);function r(t,n){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,u=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return a=t.done,t},e:function(t){u=!0,c=t},f:function(){try{a||null==e.return||e.return()}finally{if(u)throw c}}}}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function i(){var t=[];document.addEventListener("click",(function(n){var e=function(t){for(var n=void 0,e=t.target;e&&e!==this;e=e.parentNode){var r;if(null!==(r=e.classList)&&void 0!==r&&r.contains("js-dropdown-toggle")){var o=e.getAttribute("aria-controls");if(o){n=document.getElementById(o);break}}}return n}(n),o=null==e?void 0:e.classList.contains("is-shown");!function(t){var n,e=r(t);try{for(e.s();!(n=e.n()).done;){var o=n.value;o&&o.classList.remove("is-shown")}}catch(t){e.e(t)}finally{e.f()}t.length=0}(t),e&&!o&&(e.classList.add("is-shown"),t.push(e))}),!1)}},function(t,n,e){"use strict";e.d(n,"b",(function(){return c})),e.d(n,"a",(function(){return a}));e(15);var r=e(8),o=e(7),i=e(6);function c(){var t=document.querySelector(".top-nav__item--language");t&&t.querySelectorAll("[".concat("data-lang","]")).forEach((function(t){t.addEventListener("click",(function(){var n=t.getAttribute("data-lang");n&&r.a.getInstance().pushEvent(i.a.LanguageSelection,o.a.Navigation,"Select language",n)}))}))}function a(){var t;(t=document.querySelector(".cms-header__logo"))&&t.addEventListener("click",(function(){r.a.getInstance().pushEvent(i.a.Logo,o.a.Navigation,"Logo clicks","-")})),c()}},function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));e(15);var r=e(8),o=e(7),i=e(6);function c(){document.querySelectorAll(".js-gtm-navigation").forEach((function(t){return t.addEventListener("click",(function(t){var n=t.currentTarget,e=n.dataset.gtmLabel||n.innerText;r.a.getInstance().pushEvent(i.a.PageCategorySelection,o.a.Navigation,"Select category",e)}))})),document.querySelectorAll('.main-nav__item[data-level="1"] > .main-nav__link').forEach((function(t){return t.addEventListener("click",(function(t){var n=t.currentTarget,e=n.dataset.gtmLabel||n.innerText;r.a.getInstance().pushEvent(i.a.PageSubcategorySelection,o.a.Navigation,"Select subcategory",e)}))}))}},function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));e(15),e(42),e(41);var r=e(26),o="".concat("search-bar","__btn"),i="".concat("search-bar","__input"),c="".concat("search-bar","--toggleable");function a(){Array.from(document.getElementsByClassName(c)).forEach((function(t){var n=Object(r.b)(t,o),e=Object(r.b)(n,i);e.addEventListener("focus",(function(){return n.classList.add("submit")})),e.addEventListener("blur",(function(){return n.classList.remove("submit")}))}))}},function(t,n,e){var r=e(40),o=e(60),i=e(91),c=e(17);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(40);t.exports=r("document","documentElement")},function(t,n,e){"use strict";var r=e(54).forEach,o=e(67)("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,n,e){var r=e(14),o=e(51),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,n,e){var r=e(102),o=e(51),i=e(14)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,n,e){var r=e(17);t.exports=function(t){var n=t.return;if(void 0!==n)return r(n.call(t)).value}},function(t,n,e){var r=e(14)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i={};i[r]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},function(t,n,e){var r=e(49),o=e(37),i=function(t){return function(n,e){var i,c,a=String(o(n)),u=r(e),s=a.length;return u<0||u>=s?t?"":void 0:(i=a.charCodeAt(u))<55296||i>56319||u+1===s||(c=a.charCodeAt(u+1))<56320||c>57343?t?a.charAt(u):i:t?a.slice(u,u+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,n,e){var r=e(17),o=e(139);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,e={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),n=e instanceof Array}catch(t){}return function(e,i){return r(e),o(i),n?t.call(e,i):e.__proto__=i,e}}():void 0)},,,,,function(t,n,e){var r=e(11),o=e(88),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,e){"use strict";var r=e(78),o=e(102);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,n,e){var r=e(22),o=e(20),i=e(17),c=e(80);t.exports=r?Object.defineProperties:function(t,n){i(t);for(var e,r=c(n),a=r.length,u=0;a>u;)o.f(t,e=r[u++],n[e]);return t}},function(t,n,e){var r=e(28),o=e(60).f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return c.slice()}}(t):o(r(t))}},,,,function(t,n,e){"use strict";var r=e(106).IteratorPrototype,o=e(65),i=e(46),c=e(50),a=e(51),u=function(){return this};t.exports=function(t,n,e){var s=n+" Iterator";return t.prototype=o(r,{next:i(1,e)}),c(t,s,!1,!0),a[s]=u,t}},function(t,n,e){var r=e(13);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,n,e){var r=e(18);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,n,e){"use strict";var r=e(81),o=e(31),i=e(141),c=e(120),a=e(29),u=e(62),s=e(121);t.exports=function(t){var n,e,f,l,v,p,d=o(t),g="function"==typeof this?this:Array,y=arguments.length,m=y>1?arguments[1]:void 0,h=void 0!==m,b=s(d),S=0;if(h&&(m=r(m,y>2?arguments[2]:void 0,2)),null==b||g==Array&&c(b))for(e=new g(n=a(d.length));n>S;S++)p=h?m(d[S],S):d[S],u(e,S,p);else for(v=(l=b.call(d)).next,e=new g;!(f=v.call(l)).done;S++)p=h?i(l,m,[f.value,S],!0):f.value,u(e,S,p);return e.length=S,e}},function(t,n,e){var r=e(17),o=e(122);t.exports=function(t,n,e,i){try{return i?n(r(e)[0],e[1]):n(e)}catch(n){throw o(t),n}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){t.exports=e(244)},function(t,n,e){"use strict";e.r(n);var r=e(112),o=e(113),i=e(116),c=e(114),a=e(115);Object(r.a)(),Object(o.a)(),Object(i.a)(),Object(c.b)(),Object(a.a)()}]);
//# sourceMappingURL=va.cms.legacy.bundle.js.map