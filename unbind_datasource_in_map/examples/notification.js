(function(){'use strict';var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ba="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function ea(a,b){if(b){var c=ba;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];f in c||(c[f]={});c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}
ea("Math.cosh",function(a){if(a)return a;var b=Math.exp;return function(a){a=Number(a);return(b(a)+b(-a))/2}});ea("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});var fa=this;function q(a,b){a=a.split(".");var c=fa;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b};function r(a,b){a.prototype=Object.create(b.prototype);a.prototype.constructor=a}function ha(){}var ia=0;function u(a){this.message="Assertion failed. See https://openlayers.org/en/latest/doc/errors/#"+a+" for details.";this.code=a;this.name="AssertionError"}r(u,Error);function ja(a){for(var b in a)delete a[b]};function ka(a){function b(b){var c=a.listener,f=a.bindTo||a.target;if(a.ca&&a&&a.target){a.target.removeEventListener(a.type,a.ba);var e=la(a.target,a.type);if(e){var g="deleteIndex"in a?a.deleteIndex:e.indexOf(a);-1!==g&&e.splice(g,1);if(0===e.length){e=a.target;g=a.type;var l=la(e,g);if(l){for(var n=0,t=l.length;n<t;++n)e.removeEventListener(g,l[n].ba),ja(l[n]);l.length=0;if(l=e.I)delete l[g],0===Object.keys(l).length&&delete e.I}}}ja(a)}return c.call(f,b)}return a.ba=b}
function la(a,b){return(a=a.I)?a[b]:void 0}function v(a,b,c,d,f){var e=a.I;e||(e=a.I={});var g=e;(e=g[b])||(e=g[b]=[]);a:{g=e;for(var l,n=0,t=g.length;n<t;++n)if(l=g[n],l.listener===c&&l.bindTo===d){g=l;break a}g=void 0}g?f||(g.ca=!1):(g={bindTo:d,ca:!!f,listener:c,target:a,type:b},a.addEventListener(b,ka(g)),e.push(g));return g};function ma(){};function w(a){this.type=a;this.target=null}w.prototype.preventDefault=w.prototype.stopPropagation=function(){this.ua=!0};function x(){this.F={};this.v={};this.D={}}r(x,ma);x.prototype.addEventListener=function(a,b){var c=this.D[a];c||(c=this.D[a]=[]);-1===c.indexOf(b)&&c.push(b)};function y(a,b){var c="string"===typeof b?new w(b):b;b=c.type;c.target=a;var d=a.D[b];if(d){b in a.v||(a.v[b]=0,a.F[b]=0);++a.v[b];for(var f=0,e=d.length;f<e&&!1!==d[f].call(a,c)&&!c.ua;++f);--a.v[b];if(0===a.v[b]){c=a.F[b];for(delete a.F[b];c--;)a.removeEventListener(b,ha);delete a.v[b]}}}
x.prototype.removeEventListener=function(a,b){var c=this.D[a];c&&(b=c.indexOf(b),a in this.F?(c[b]=ha,++this.F[a]):(c.splice(b,1),0===c.length&&delete this.D[a]))};function z(){x.call(this)}r(z,x);z.prototype.once=function(a,b,c){if(Array.isArray(a)){for(var d=a.length,f=Array(d),e=0;e<d;++e)f[e]=v(this,a[e],b,c,!0);return f}return v(this,a,b,c,!0)};var na=function(){var a;"cosh"in Math?a=Math.cosh:a=function(a){a=Math.exp(a);return(a+1/a)/2};return a}();/*

 Latitude/longitude spherical geodesy formulae taken from
 http://www.movable-type.co.uk/scripts/latlong.html
 Licensed under CC-BY-3.0.
*/
function A(a){a=this.a=a.code;var b=window.proj4;"function"==typeof b&&b.defs(a)};function B(a){A.call(this,{code:a,units:"m",extent:oa,global:!0,wa:pa,Ga:function(a,c){return a/na(c[1]/6378137)}})}r(B,A);var C=6378137*Math.PI,oa=[-C,-C,C,C],pa=[-180,-85,180,85],qa=[new B("EPSG:3857"),new B("EPSG:102100"),new B("EPSG:102113"),new B("EPSG:900913"),new B("urn:ogc:def:crs:EPSG:6.18:3:3857"),new B("urn:ogc:def:crs:EPSG::3857"),new B("http://www.opengis.net/gml/srs/epsg.xml#3857")];
function ra(a,b,c){var d=a.length;c=1<c?c:2;void 0===b&&(2<c?b=a.slice():b=Array(d));for(var f=0;f<d;f+=c){b[f]=C*a[f]/180;var e=6378137*Math.log(Math.tan(Math.PI*(a[f+1]+90)/360));e>C?e=C:e<-C&&(e=-C);b[f+1]=e}return b}function sa(a,b,c){var d=a.length;c=1<c?c:2;void 0===b&&(2<c?b=a.slice():b=Array(d));for(var f=0;f<d;f+=c)b[f]=180*a[f]/C,b[f+1]=360*Math.atan(Math.exp(a[f+1]/6378137))/Math.PI-90;return b};function D(a,b){A.call(this,{code:a,units:"degrees",extent:ta,Fa:b,global:!0,Ia:ua,wa:ta})}r(D,A);var ta=[-180,-90,180,90],ua=6378137*Math.PI/180,va=[new D("CRS:84"),new D("EPSG:4326","neu"),new D("urn:ogc:def:crs:EPSG::4326","neu"),new D("urn:ogc:def:crs:EPSG:6.6:4326","neu"),new D("urn:ogc:def:crs:OGC:1.3:CRS84"),new D("urn:ogc:def:crs:OGC:2:84"),new D("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new D("urn:x-ogc:def:crs:EPSG:4326","neu")];var wa={};function E(a,b,c){a=a.a;b=b.a;a in wa||(wa[a]={});wa[a][b]=c};function za(a){a.forEach(Aa);a.forEach(function(b){a.forEach(function(a){b!==a&&E(b,a,Ba)})})}function Aa(a){E(a,a,Ba)}function Ba(a,b){if(void 0!==b){for(var c=0,d=a.length;c<d;++c)b[c]=a[c];a=b}else a=a.slice();return a}za(qa);za(va);va.forEach(function(a){qa.forEach(function(b){E(a,b,ra);E(b,a,sa)})});function Ca(){return document.createElement("CANVAS").getContext("2d")};var F="undefined"!==typeof navigator?navigator.userAgent.toLowerCase():"";F.indexOf("firefox");-1!==F.indexOf("safari")&&F.indexOf("chrom");-1!==F.indexOf("webkit")&&F.indexOf("edge");F.indexOf("macintosh");(function(){if(!("HTMLCanvasElement"in window))return!1;try{return document.createElement("CANVAS").getContext("2d")?!0:!1}catch(a){return!1}})();function I(a){x.call(this);this.highWaterMark=void 0!==a?a:2048;this.j={};this.a=this.b=null}r(I,x);I.prototype.clear=function(){this.j={};this.a=this.b=null;y(this,"clear")};I.prototype.forEach=function(a,b){for(var c=this.b;c;)a.call(b,c.J,c.da,this),c=c.o};I.prototype.get=function(a){a=this.j[a];if(void 0===a)throw new u(15);if(a===this.a)return a.J;a===this.b?(this.b=this.b.o,this.b.B=null):(a.o.B=a.B,a.B.o=a.o);a.o=null;a.B=this.a;this.a=this.a.o=a;return a.J};
I.prototype.pop=function(){var a=this.b;delete this.j[a.da];a.o&&(a.o.B=null);this.b=a.o;this.b||(this.a=null);return a.J};I.prototype.set=function(a,b){if(a in this.j)throw new u(16);b={da:a,o:null,B:this.a,J:b};this.a?this.a.o=b:this.b=b;this.a=b;this.j[a]=b};var Da=new I;var J={R:{}};J.R.S=function(){};
(function(a){function b(a,b,c){if(g)return new ImageData(a,b,c);b=l.createImageData(b,c);b.data.set(a);return b}function c(a){var b=!0;try{new ImageData(10,10)}catch(ca){b=!1}return function(c){var d=c.buffers,e=c.meta,f=c.width,n=c.height,g=d.length,t=d[0].byteLength;if(c.imageOps){t=Array(g);for(c=0;c<g;++c){var h=c;var k=new Uint8ClampedArray(d[c]);var m=f,p=n;k=b?new ImageData(k,m,p):{data:k,width:m,height:p};t[h]=k}f=a(t,e).data}else{f=new Uint8ClampedArray(t);n=Array(g);h=Array(g);for(c=0;c<
g;++c)n[c]=new Uint8ClampedArray(d[c]),h[c]=[0,0,0,0];for(d=0;d<t;d+=4){for(c=0;c<g;++c)k=n[c],h[c][0]=k[d],h[c][1]=k[d+1],h[c][2]=k[d+2],h[c][3]=k[d+3];c=a(h,e);f[d]=c[0];f[d+1]=c[1];f[d+2]=c[2];f[d+3]=c[3]}}return f.buffer}}function d(a,b){var d=Object.keys(a.oa||{}).map(function(b){return"var "+b+" = "+a.oa[b].toString()+";"}).concat(["var __minion__ = ("+c.toString()+")(",a.ta.toString(),");",'self.addEventListener("message", function(event) {',"  var buffer = __minion__(event.data);","  self.postMessage({buffer: buffer, meta: event.data.meta}, [buffer]);",
"});"]);d=URL.createObjectURL(new Blob(d,{type:"text/javascript"}));d=new Worker(d);d.addEventListener("message",b);return d}function f(a,b){var d=c(a.ta);return{postMessage:function(a){setTimeout(function(){b({data:{buffer:d(a),meta:a.meta}})},0)}}}function e(a){this.K=!!a.Ha;var b;0===a.va?b=0:this.K?b=1:b=a.va||1;var c=[];if(b)for(var e=0;e<b;++e)c[e]=d(a,this.Y.bind(this,e));else c[0]=f(a,this.Y.bind(this,0));this.H=c;this.Z=[];this.G=0;this.A={};this.L=null}var g=!0;try{new ImageData(10,10)}catch(n){g=
!1}var l=document.createElement("canvas").getContext("2d");e.prototype.ia=function(){if(0===this.G&&0<this.Z.length){var a=this.L=this.Z.shift(),b=a.inputs[0].width,c=a.inputs[0].height,d=a.inputs.map(function(a){return a.data.buffer}),e=this.H.length;this.G=e;if(1===e)this.H[0].postMessage({buffers:d,meta:a.pa,imageOps:this.K,width:b,height:c},d);else for(var f=4*Math.ceil(a.inputs[0].data.length/4/e),g=0;g<e;++g){for(var l=g*f,H=[],h=0,k=d.length;h<k;++h)H.push(d[g].slice(l,l+f));this.H[g].postMessage({buffers:H,
meta:a.pa,imageOps:this.K,width:b,height:c},H)}}};e.prototype.Y=function(a,b){this.Ea||(this.A[a]=b.data,--this.G,0===this.G&&this.ka())};e.prototype.ka=function(){var a=this.L,c=this.H.length;if(1===c){var d=new Uint8ClampedArray(this.A[0].buffer);var e=this.A[0].meta}else{var f=a.inputs[0].data.length;d=new Uint8ClampedArray(f);e=Array(f);f=4*Math.ceil(f/4/c);for(var g=0;g<c;++g){var l=g*f;d.set(new Uint8ClampedArray(this.A[g].buffer),l);e[g]=this.A[g].meta}}this.L=null;this.A={};a.callback(null,
b(d,a.inputs[0].width,a.inputs[0].height),e);this.ia()};a["default"]={S:e};a.S=e})(J.R=J.R||{});var Ea=[],Fa=[];function Ga(a,b){switch(a){case "MAP_RENDERER":a=Ea;a.push(b);break;case "LAYER_RENDERER":a=Fa;a.push(b);break;default:throw Error("Unsupported plugin type: "+a);}};function L(a){x.call(this);this.a=a}r(L,z);L.prototype.b=function(a){2===a.target.getState()&&(a=this.a,a.a()&&"ready"==a.na()&&y(this,"change"))};L.prototype.loadImage=function(a){var b=a.getState();2!=b&&3!=b&&v(a,"change",this.b,this);0==b&&(a.load(),b=a.getState());return 2==b};function Ha(a){L.call(this,a)}r(Ha,L);function Ia(a){L.call(this,a)}r(Ia,Ha);function M(a){L.call(this,a)}r(M,Ia);M.handles=function(a,b){return"canvas"===a&&("IMAGE"===b.getType()||"VECTOR"===b.getType()&&"image"===b.j())};M.create=function(a,b){var c=new M(b);if("VECTOR"===b.getType())for(var d=0,f=Fa.length;d<f;++d){var e=Fa[d];e!==M&&e.handles("canvas",b)&&e.create(a,b)}return c};function N(a){L.call(this,a);this.context=null===this.context?null:Ca()}r(N,Ia);N.handles=function(a,b){return"canvas"===a&&"TILE"===b.getType()};N.create=function(a,b){return new N(b)};try{new MouseEvent("click",{buttons:1})}catch(a){};function Ja(){}r(Ja,ma);function O(a){this.b=Ca();this.a=this.b.canvas;this.a.style.width="100%";this.a.style.height="100%";this.a.style.display="block";this.a.className="ol-unselectable";a.insertBefore(this.a,a.childNodes[0]||null)}r(O,Ja);O.handles=function(a){return"canvas"===a};O.create=function(a,b){return new O(a,b)};O.prototype.getType=function(){return"canvas"};J.C=function(){};
(function(a){function b(a,b,d,p,e){c(a,b,d||0,p||a.length-1,e||f)}function c(a,b,m,e,f){for(;e>m;){if(600<e-m){var h=e-m+1,k=b-m+1,p=Math.log(h),g=.5*Math.exp(2*p/3);p=.5*Math.sqrt(p*g*(h-g)/h)*(0>k-h/2?-1:1);c(a,b,Math.max(m,Math.floor(b-k*g/h+p)),Math.min(e,Math.floor(b+(h-k)*g/h+p)),f)}h=a[b];k=m;g=e;d(a,m,b);for(0<f(a[e],h)&&d(a,m,e);k<g;){d(a,k,g);k++;for(g--;0>f(a[k],h);)k++;for(;0<f(a[g],h);)g--}0===f(a[m],h)?d(a,m,g):(g++,d(a,g,e));g<=b&&(m=g+1);b<=g&&(e=g-1)}}function d(a,b,c){var h=a[b];
a[b]=a[c];a[c]=h}function f(a,b){return a<b?-1:a>b?1:0}function e(a,b){if(!(this instanceof e))return new e(a,b);this.N=Math.max(4,a||9);this.X=Math.max(2,Math.ceil(.4*this.N));b&&this.ja(b);this.clear()}function g(a,b){l(a,0,a.children.length,b,a)}function l(a,b,c,d,e){e||(e=G(null));e.c=Infinity;e.f=Infinity;e.g=-Infinity;e.i=-Infinity;for(var h;b<c;b++)h=a.children[b],n(e,a.l?d(h):h);return e}function n(a,b){a.c=Math.min(a.c,b.c);a.f=Math.min(a.f,b.f);a.g=Math.max(a.g,b.g);a.i=Math.max(a.i,b.i);
return a}function t(a,b){return a.c-b.c}function ca(a,b){return a.f-b.f}function da(a){return(a.g-a.c)*(a.i-a.f)}function U(a){return a.g-a.c+(a.i-a.f)}function xa(a,b){return b.c<=a.g&&b.f<=a.i&&b.g>=a.c&&b.i>=a.f}function G(a){return{children:a,height:1,l:!0,c:Infinity,f:Infinity,g:-Infinity,i:-Infinity}}function ya(a,b,c,d,e){for(var h=[b,c],k;h.length;)c=h.pop(),b=h.pop(),c-b<=d||(k=b+Math.ceil((c-b)/d/2)*d,H(a,k,b,c,e),h.push(b,k,k,c))}var H=b;H.default=b;e.prototype={all:function(){return this.T(this.data,
[])},search:function(a){var b=this.data,c=[],h=this.u;if(!xa(a,b))return c;for(var d=[],e,f,g,K;b;){e=0;for(f=b.children.length;e<f;e++)g=b.children[e],K=b.l?h(g):g,xa(a,K)&&(b.l?c.push(g):a.c<=K.c&&a.f<=K.f&&K.g<=a.g&&K.i<=a.i?this.T(g,c):d.push(g));b=d.pop()}return c},load:function(a){if(!a||!a.length)return this;if(a.length<this.X){for(var b=0,c=a.length;b<c;b++)this.insert(a[b]);return this}a=this.V(a.slice(),0,a.length-1,0);this.data.children.length?this.data.height===a.height?this.aa(this.data,
a):(this.data.height<a.height&&(b=this.data,this.data=a,a=b),this.W(a,this.data.height-a.height-1,!0)):this.data=a;return this},insert:function(a){a&&this.W(a,this.data.height-1);return this},clear:function(){this.data=G([]);return this},u:function(a){return a},O:t,P:ca,toJSON:function(){return this.data},T:function(a,b){for(var c=[];a;)a.l?b.push.apply(b,a.children):c.push.apply(c,a.children),a=c.pop();return b},V:function(a,b,c,d){var e=c-b+1,h=this.N;if(e<=h){var f=G(a.slice(b,c+1));g(f,this.u);
return f}d||(d=Math.ceil(Math.log(e)/Math.log(h)),h=Math.ceil(e/Math.pow(h,d-1)));f=G([]);f.l=!1;f.height=d;e=Math.ceil(e/h);h=e*Math.ceil(Math.sqrt(h));var k;for(ya(a,b,c,h,this.O);b<=c;b+=h){var p=Math.min(b+h-1,c);ya(a,b,p,e,this.P);for(k=b;k<=p;k+=e){var m=Math.min(k+e-1,p);f.children.push(this.V(a,k,m,d-1))}}g(f,this.u);return f},ha:function(a,b,c,d){for(var e,f,h,g,k,p,m,l;;){d.push(b);if(b.l||d.length-1===c)break;m=l=Infinity;e=0;for(f=b.children.length;e<f;e++)h=b.children[e],k=da(h),p=(Math.max(h.g,
a.g)-Math.min(h.c,a.c))*(Math.max(h.i,a.i)-Math.min(h.f,a.f))-k,p<l?(l=p,m=k<m?k:m,g=h):p===l&&k<m&&(m=k,g=h);b=g||b.children[0]}return b},W:function(a,b,c){var d=this.u;c=c?a:d(a);d=[];var e=this.ha(c,this.data,b,d);e.children.push(a);for(n(e,c);0<=b;)if(d[b].children.length>this.N)this.la(d,b),b--;else break;this.ea(c,d,b)},la:function(a,b){var c=a[b],d=c.children.length,e=this.X;this.fa(c,e,d);d=this.ga(c,e,d);d=G(c.children.splice(d,c.children.length-d));d.height=c.height;d.l=c.l;g(c,this.u);
g(d,this.u);b?a[b-1].children.push(d):this.aa(c,d)},aa:function(a,b){this.data=G([a,b]);this.data.height=a.height+1;this.data.l=!1;g(this.data,this.u)},ga:function(a,b,c){var d,e;var f=e=Infinity;for(d=b;d<=c-b;d++){var g=l(a,0,d,this.u);var h=l(a,d,c,this.u);var k=Math.max(0,Math.min(g.g,h.g)-Math.max(g.c,h.c))*Math.max(0,Math.min(g.i,h.i)-Math.max(g.f,h.f));g=da(g)+da(h);if(k<f){f=k;var m=d;e=g<e?g:e}else k===f&&g<e&&(e=g,m=d)}return m},fa:function(a,b,c){var d=a.l?this.O:t,e=a.l?this.P:ca,f=this.U(a,
b,c,d);b=this.U(a,b,c,e);f<b&&a.children.sort(d)},U:function(a,b,c,d){a.children.sort(d);d=this.u;var e=l(a,0,b,d),f=l(a,c-b,c,d),g=U(e)+U(f),h;for(h=b;h<c-b;h++){var k=a.children[h];n(e,a.l?d(k):k);g+=U(e)}for(h=c-b-1;h>=b;h--)k=a.children[h],n(f,a.l?d(k):k),g+=U(f);return g},ea:function(a,b,c){for(;0<=c;c--)n(b[c],a)},ja:function(a){var b=["return a"," - b",";"];this.O=new Function("a","b",b.join(a[0]));this.P=new Function("a","b",b.join(a[1]));this.u=new Function("a","return {minX: a"+a[0]+", minY: a"+
a[1]+", maxX: a"+a[2]+", maxY: a"+a[3]+"};")}};a["default"]=e})(J.C=J.C||{});J.C=J.C.default;function P(a){L.call(this,a);a.b()&&J.C(9);this.context=Ca();v(Da,"clear",this.j,this)}r(P,Ha);P.handles=function(a,b){return"canvas"===a&&"VECTOR"===b.getType()};P.create=function(a,b){return new P(b)};P.prototype.j=function(){this.a.a()};function Q(a){this.context=null;N.call(this,a);a.b()&&J.C(9);a.j();v(Da,"clear",this.j,this)}r(Q,N);Q.handles=function(a,b){return"canvas"===a&&"VECTOR_TILE"===b.getType()};Q.create=function(a,b){return new Q(b)};Q.prototype.j=function(){var a=this.a;a.a()&&void 0!==this.na&&y(a,"change")};Ga("MAP_RENDERER",O);for(var Ka=[M,N,P,Q],La=0,Ma=Ka.length;La<Ma;++La)Ga("LAYER_RENDERER",Ka[La]);var Na=angular.module("ngeo",["gettext","ui.date","floatThead"]);q("ngeo.AttributeType",{xa:"boolean",ya:"date",za:"datetime",Da:"time",Aa:"geometry",Ba:"number",Ca:"select",TEXT:"text"});q("ngeo.FeatureProperties",{ANGLE:"a",COLOR:"c",IS_CIRCLE:"l",IS_RECTANGLE:"r",IS_TEXT:"t",NAME:"n",SHOW_LABEL:"b",OPACITY:"o",AZIMUT:"z",SHOW_MEASURE:"m",SIZE:"s",STROKE:"k"});q("ngeo.FilterCondition",{AND:"&&",NOT:"!",OR:"||"});
q("ngeo.GeometryType",{CIRCLE:"Circle",LINE_STRING:"LineString",MULTI_LINE_STRING:"MultiLineString",MULTI_POINT:"MultiPoint",MULTI_POLYGON:"MultiPolygon",POINT:"Point",POLYGON:"Polygon",RECTANGLE:"Rectangle",TEXT:"Text"});q("ngeo.NumberType",{FLOAT:"float",INTEGER:"integer"});(function(){function a(a){a.put("ngeo/editing/attributescomponent.html",'<fieldset ng-disabled="attrCtrl.disabled"><div class="form-group" ng-repeat="attribute in ::attrCtrl.attributes"><div ng-if="attribute.type !== \'geometry\'"><label ng-if="::attribute.type !== \'boolean\'" class="control-label">{{ ::attribute.name | translate }} <span class="text-muted">{{::attribute.required ? "*" : ""}}</span></label><div ng-switch="::attribute.type"><div ng-switch-when="boolean" class="checkbox"><label><input name="{{::attribute.name}}" ng-model="attrCtrl.properties[attribute.name]" ng-change="attrCtrl.handleInputChange(attribute.name);" type="checkbox"><span> {{ ::attribute.name | translate }} <span class="text-muted">{{::attribute.required ? "*" : ""}}</span></span></label></div><select name="{{::attribute.name}}" ng-required="attribute.required" ng-switch-when="select" ng-model="attrCtrl.properties[attribute.name]" ng-change="attrCtrl.handleInputChange(attribute.name);" class="form-control" type="text"><option ng-repeat="attribute in ::attribute.choices" value="{{ ::attribute }}"> {{ ::attribute }} </option></select><input name="{{::attribute.name}}" ng-required="attribute.required" ng-switch-when="date" ng-model="attrCtrl.properties[attribute.name]" ng-change="attrCtrl.handleInputChange(attribute.name);" ngeo-datetimepicker ngeo-datetimepicker-options="\'{&#34;timepicker&#34;: false, &#34;format&#34;: &#34;\' + attribute.format + \'&#34;, &#34;allowBlank&#34;: true, &#34;todayButton&#34;: false, &#34;mask&#34;: &#34;\' + attribute.mask + \'&#34;}\'" class="form-control" type="text"><input name="{{::attribute.name}}" id="time" ng-required="attribute.required" ng-switch-when="time" ng-model="attrCtrl.properties[attribute.name]" ng-change="attrCtrl.handleInputChange(attribute.name);" ngeo-datetimepicker ngeo-datetimepicker-options="\'{&#34;datepicker&#34;: false, &#34;format&#34;: &#34;\' + attribute.format + \'&#34;, &#34;todayButton&#34;: false, &#34;mask&#34;: &#34;\' + attribute.mask + \'&#34;, &#34;defaultTime&#34;: &#34;00:00&#34;}\'" class="form-control" type="text"><input name="{{::attribute.name}}" ng-required="attribute.required" ng-switch-when="datetime" ng-model="attrCtrl.properties[attribute.name]" ng-change="attrCtrl.handleInputChange(attribute.name);" ngeo-datetimepicker ngeo-datetimepicker-options="\'{&#34;scrollTime&#34;: false, &#34;format&#34;: &#34;\' + attribute.format + \'&#34;, &#34;allowBlank&#34;: true, &#34;todayButton&#34;: false, &#34;mask&#34;: &#34;\' + attribute.mask + \'&#34;, &#34;defaultTime&#34;: &#34;00:00&#34;}\'" class="form-control" type="text"><div ng-switch-when="number" ng-switch="::attribute.numType"><input name="{{::attribute.name}}" ng-required="attribute.required" ng-switch-when="integer" ng-model="attrCtrl.properties[attribute.name]" ng-change="attrCtrl.handleInputChange(attribute.name);" class="form-control" step="1" type="number"><input name="{{::attribute.name}}" ng-required="attribute.required" ng-switch-default ng-model="attrCtrl.properties[attribute.name]" ng-change="attrCtrl.handleInputChange(attribute.name);" class="form-control" type="number"></div><input name="{{::attribute.name}}" ng-required="attribute.required" ng-switch-default ng-model="attrCtrl.properties[attribute.name]" ng-change="attrCtrl.handleInputChange(attribute.name);" ng-maxlength="attribute.maxLength" class="form-control" type="text"><div ng-show="attrCtrl.form.$submitted || attrCtrl.form[attribute.name].$touched"><p class="text-danger" ng-show="attrCtrl.form[attribute.name].$error.required"> {{\'This field is required\' | translate}} </p></div></div></div></div></fieldset>');
a.put("ngeo/map/scaleselector.html",'<div class="btn-group btn-block" ng-class="::{\'dropup\': scaleselectorCtrl.options.dropup}"><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span ng-bind-html="scaleselectorCtrl.currentScale | ngeoScalify | ngeoTrustHtml"></span>&nbsp;<i class="caret"></i></button><ul class="dropdown-menu btn-block" role="menu"><li ng-repeat="zoomLevel in ::scaleselectorCtrl.zoomLevels"><a href ng-click="scaleselectorCtrl.changeZoom(zoomLevel)" ng-bind-html="scaleselectorCtrl.getScale(zoomLevel) | ngeoScalify | ngeoTrustHtml"></a></li></ul></div>');
a.put("ngeo/googlestreetview/component.html",'<div class="ngeo-googlestreetview-instructions" ng-if="$ctrl.location === null" translate> Click on a road on the map to start StreetView. </div><div class="ngeo-googlestreetview-nodata" ng-if="$ctrl.noDataAtLocation" translate> Street View data not found for this location. </div>');a.put("ngeo/message/displaywindowComponent.html",'<div class="ngeo-displaywindow" ng-show="$ctrl.open" ng-style="$ctrl.style"><div class="container"><button type="button" class="btn fa-close close" ng-click="$ctrl.close()"></button><div class="animation-container"><div class="slide-animation "><div class="header" ng-if="$ctrl.title !== null"><p class="title">{{ $ctrl.title }}</p></div><div class="details" ng-if="$ctrl.content !== null" ng-bind-html="$ctrl.content"></div><div class="details" ng-if="$ctrl.url !== null"><iframe frameborder="0" type="text/html" ng-src="{{ $ctrl.urlTrusted }}"></iframe></div></div></div></div></div>');
a.put("ngeo/grid/component.html",'<div class="ngeo-grid-table-container"><table float-thead="ctrl.floatTheadConfig" ng-model="ctrl.configuration.data" class="table table-bordered table-striped table-hover"><thead class="table-header"><tr><th ng-repeat="columnDefs in ctrl.configuration.columnDefs" ng-click="ctrl.sort(columnDefs.name)" ng-bind-html="columnDefs.name | ngeoTrustHtml | translate"><i ng-show="ctrl.sortedBy !== columnDefs.name" class="fa fa-fw"></i><i ng-show="ctrl.sortedBy === columnDefs.name && ctrl.sortAscending === true" class="fa fa-caret-up"></i><i ng-show="ctrl.sortedBy === columnDefs.name && ctrl.sortAscending === false" class="fa fa-caret-down"></i></th></tr></thead><tbody><tr ng-repeat="attributes in ctrl.configuration.data" ng-class="[\'row-\' + ctrl.configuration.getRowUid(attributes), ctrl.configuration.isRowSelected(attributes) ? \'ngeo-grid-active\': \'\']" ng-click="ctrl.clickRow(attributes, $event)" ng-mousedown="ctrl.preventTextSelection($event)"><td ng-repeat="columnDefs in ctrl.configuration.columnDefs" ng-bind-html="attributes[columnDefs.name] | ngeoTrustHtml"></td></tr></tbody></table></div>');
a.put("ngeo/misc/colorpickerComponent.html",'<table class="ngeo-colorpicker-palette"><tr ng-repeat="colors in ::ctrl.colors"><td ng-repeat="color in ::colors" ng-click="ctrl.setColor(color)" ng-class="{\'ngeo-colorpicker-selected\': color == ctrl.color}"><div ng-style="::{\'background-color\': color}"></div></td></tr></table>');a.put("ngeo/message/popupcomponent.html",'<h4 class="popover-title ngeo-popup-title"><span ng-bind-html="title"></span><button type="button" class="close" ng-click="open = false"> &times;</button></h4><div class="popover-content" ng-bind-html="content"></div>');
a.put("ngeo/filter/rulecomponent.html",'<div class="dropdown" ng-class="{open: $ctrl.rule.active}"><a class="btn btn-default btn-sm dropdown-toggle" type="button" ng-click="$ctrl.toggle()"><span>{{ ::$ctrl.clone.name | translate }}</span><span class="caret"></span></a><div class="dropdown-menu form-group"><select class="form-control input-sm ngeo-rule-operators-list" ng-disabled="$ctrl.drawActive" ng-if="::$ctrl.clone.operators" ng-model="$ctrl.clone.operator" ng-options="$ctrl.operators[operator] | translate for operator in ::$ctrl.clone.operators track by operator"></select><div ng-switch="::$ctrl.clone.type"><div class="ngeo-rule-type-date form-group" ng-if="$ctrl.rule.active" ng-switch-when="date|datetime" ng-switch-when-separator="|"><div ng-switch="$ctrl.clone.operator"><div ng-switch-when=".."><ngeo-date-picker time="$ctrl.timeRangeMode" on-date-selected="$ctrl.onDateRangeSelected(time)"></ngeo-date-picker></div><div ng-switch-default><ngeo-date-picker time="$ctrl.timeValueMode" on-date-selected="$ctrl.onDateSelected(time)"></ngeo-date-picker></div></div></div><div class="ngeo-rule-type-geometry form-group" ng-switch-when="geometry"><div ng-switch="$ctrl.geomType"><span class="gmf-icon gmf-icon-point" ng-switch-when="Point"></span><span class="gmf-icon gmf-icon-line" ng-switch-when="LineString"></span><span class="gmf-icon gmf-icon-polygon" ng-switch-when="Polygon"></span><span class="gmf-icon gmf-icon-circle" ng-switch-when="Circle"></span><span class="gmf-icon gmf-icon-rectangle" ng-switch-when="Rectangle"></span></div><ngeo-drawfeature ngeo-drawfeature-active="$ctrl.drawActive" ngeo-drawfeature-features="$ctrl.drawnFeatures" ngeo-drawfeature-map="$ctrl.map"><div ngeo-btn-group class="btn-group"><a data-toggle="tooltip" title="{{\'Draw a point on the map\' | translate}}" href ngeo-btn ngeo-drawpoint class="btn btn-sm btn-default ngeo-drawfeature-point" ng-show="[\'intersects\', \'within\'].indexOf($ctrl.clone.operator) !== -1" ng-class="{active: dfCtrl.drawPoint.active}" ng-model="dfCtrl.drawPoint.active"><span class="gmf-icon gmf-icon-point"></span></a><a data-toggle="tooltip" title="{{\'Draw a line on the map\' | translate}}" href ngeo-btn ngeo-measurelength class="btn btn-sm btn-default ngeo-drawfeature-linestring" ng-show="[\'intersects\', \'within\'].indexOf($ctrl.clone.operator) !== -1" ng-class="{active: dfCtrl.measureLength.active}" ng-model="dfCtrl.measureLength.active"><span class="gmf-icon gmf-icon-line"></span></a><a data-toggle="tooltip" title="{{\'Draw a polygon on the map\' | translate}}" href ngeo-btn ngeo-measurearea class="btn btn-sm btn-default ngeo-drawfeature-polygon" ng-class="{active: dfCtrl.measureArea.active}" ng-model="dfCtrl.measureArea.active"><span class="gmf-icon gmf-icon-polygon"></span></a><a data-toggle="tooltip" title="{{\'Draw a circle on the map\' | translate}}" href ngeo-btn ngeo-measureazimut class="btn btn-sm btn-default ngeo-drawfeature-circle" ng-class="{active: dfCtrl.measureAzimut.active}" ng-model="dfCtrl.measureAzimut.active"><span class="gmf-icon gmf-icon-circle"></span></a><a data-toggle="tooltip" title="{{\'Draw a rectangle on the map\' | translate}}" href ngeo-btn ngeo-drawrectangle class="btn btn-sm btn-default ngeo-drawfeature-rectangle" ng-class="{active: dfCtrl.drawRectangle.active}" ng-model="dfCtrl.drawRectangle.active"><span class="gmf-icon gmf-icon-rectangle"></span></a></div><div class="ngeo-rule-type-geometry-instructions" ng-if="$ctrl.drawActive"><span ng-if="dfCtrl.drawPoint.active"> {{ \'Draw a point on the map.\' | translate }} </span><span ng-if="dfCtrl.measureLength.active"> {{ \'Draw a line string on the map.\' | translate }} </span><span ng-if="dfCtrl.measureArea.active"> {{ \'Draw a polygon on the map.\' | translate }} </span><span ng-if="dfCtrl.measureAzimut.active"> {{ \'Draw a circle on the map.\' | translate }} </span><span ng-if="dfCtrl.drawRectangle.active"> {{ \'Draw a rectangle on the map.\' | translate }} </span></div></ngeo-drawfeature></div><div class="checkbox ngeo-rule-type-select" ng-switch-when="select"><a ng-click="$ctrl.selectAllChoices()" href>{{ All | translate}} </a><label class="form-group ol-unselectable" ng-repeat="choice in ::$ctrl.clone.choices"><input ng-checked="$ctrl.clone.getExpression() && $ctrl.clone.getExpression().split(\',\').indexOf(choice) > -1" ng-click="$ctrl.toggleChoiceSelection(choice)" type="checkbox" value="choice"><span>{{ choice | translate }}</span></label></div><div class="form-group ngeo-rule-type-text" ng-switch-default><div ng-switch="$ctrl.clone.operator"><div ng-switch-when=".."><input type="number" class="form-control input-sm" ng-model="$ctrl.clone.lowerBoundary"><input type="number" class="form-control input-sm" ng-model="$ctrl.clone.upperBoundary"></div><div ng-switch-default><input type="number" class="form-control input-sm" ng-if="$ctrl.clone.type === \'number\'" ng-model="$ctrl.clone.expression"><input type="text" class="form-control input-sm" ng-if="$ctrl.clone.type !== \'number\'" ng-model="$ctrl.clone.expression"></div></div></div><div class="ngeo-rule-btns"><button class="btn btn-xs btn-default" ng-click="$ctrl.apply()" type="button">{{\'Apply\' | translate}}</button><button class="btn btn-xs btn-default" ng-click="$ctrl.cancel()" type="button">{{\'Cancel\' | translate}}</button></div></div></div></div><div class="ngeo-rule-value" ng-if="$ctrl.rule.value !== null"><a class="btn btn-xs btn-link" ng-click="!$ctrl.rule.active && $ctrl.reset()" ng-disabled="$ctrl.rule.active" href><span class="fa fa-remove"></span></a><div ng-switch="::$ctrl.rule.type"><div ng-switch-when="date|datetime" ng-switch-when-separator="|"><div ng-switch="$ctrl.rule.operator"><div ng-switch-when=".."><span translate>From </span><span>{{ $ctrl.timeToDate($ctrl.rule.lowerBoundary) }}</span><span translate> to </span><span>{{ $ctrl.timeToDate($ctrl.rule.upperBoundary) }}</span></div><div ng-switch-default><span>{{ $ctrl.rule.operator }}</span><span>{{ $ctrl.timeToDate($ctrl.rule.getExpression()) }}</span></div></div></div><div ng-switch-when="geometry"><span>{{ $ctrl.operators[$ctrl.rule.operator] }}</span><span ng-switch="$ctrl.getRuleGeometryType()"><span class="gmf-icon gmf-icon-point" ng-switch-when="Point"></span><span class="gmf-icon gmf-icon-line" ng-switch-when="LineString"></span><span class="gmf-icon gmf-icon-polygon" ng-switch-when="Polygon"></span><span class="gmf-icon gmf-icon-circle" ng-switch-when="Circle"></span><span class="gmf-icon gmf-icon-rectangle" ng-switch-when="Rectangle"></span></span></div><div ng-switch-when="select"><span ng-repeat="choice in $ctrl.rule.getExpression().split(\',\')"> {{ choice | translate }}{{ $last ? \'\' : \', \' }} </span></div><div ng-switch-default><div ng-switch="$ctrl.rule.operator"><div ng-switch-when=".."><span translate>Between </span><span>{{ $ctrl.rule.lowerBoundary }}</span><span translate> and </span><span>{{ $ctrl.rule.upperBoundary }}</span></div><div ng-switch-default><span>{{ $ctrl.rule.operator }}</span><span>{{ $ctrl.rule.getExpression() }}</span></div></div></div></div></div>');
a.put("ngeo/olcs/controls3d.html",'<div class="ngeo-tools"><div class="ngeo-angle"><div class="ngeo-angle3d"></div></div><button class="ngeo-left ngeo-tilt-left" ng-click="$ctrl.tilt(5)"></button><button class="ngeo-right ngeo-tilt-right" ng-click="$ctrl.tilt(-5)"></button></div><div class="ngeo-zoom"><button class="ol-zoom-in" ng-click="$ctrl.zoom(1)"></button><button class="ol-zoom-out" ng-click="$ctrl.zoom(-1)"></button></div><div class="ngeo-tools"><div class="ngeo-rotation"><div class="ngeo-rotation3d"></div></div><button class="ngeo-left" ng-click="$ctrl.rotate(-15)"></button><button class="ngeo-right" ng-click="$ctrl.rotate(15)"></button></div>');
a.put("ngeo/misc/datepickerComponent.html",'<div class="ngeo-datepicker"><form name="dateForm" class="ngeo-datepicker-form" novalidate><div ng-if="::datepickerCtrl.time.widget === \'datepicker\'"><div class="ngeo-datepicker-start-date"><span ng-if="::datepickerCtrl.time.mode === \'range\'" translate>From:</span><span ng-if="::datepickerCtrl.time.mode !== \'range\'" translate>Date:</span><input name="sdate" ui-date="datepickerCtrl.sdateOptions" ng-model="datepickerCtrl.sdate" required></div><div class="ngeo-datepicker-end-date" ng-if="::datepickerCtrl.time.mode === \'range\'"><span translate>To:</span><input name="edate" ui-date="datepickerCtrl.edateOptions" ng-model="datepickerCtrl.edate" required></div></div></form></div>');
a.put("ngeo/layertree/component.html",'<span ng-if="::!layertreeCtrl.isRoot">{{::layertreeCtrl.node.name}}</span><input type="checkbox" ng-if="::layertreeCtrl.node && !layertreeCtrl.node.children" ng-model="layertreeCtrl.getSetActive" ng-model-options="{getterSetter: true}"><ul ng-if="::layertreeCtrl.node.children"><li ng-repeat="node in ::layertreeCtrl.node.children" ngeo-layertree="::node" ngeo-layertree-notroot ngeo-layertree-map="layertreeCtrl.map" ngeo-layertree-nodelayerexpr="layertreeCtrl.nodelayerExpr" ngeo-layertree-listenersexpr="layertreeCtrl.listenersExpr"></li></ul>');
a.put("ngeo/filter/component.html",'<div class="dropdown"><a class="btn btn-link dropdown-toggle ngeo-filter-condition-button" ng-class="{disabled: $ctrl.aRuleIsActive}" type="button" data-toggle="dropdown" ng-disabled="$ctrl.aRuleIsActive"><span class="fa fa-cog"></span><span class="caret"></span></a><ul class="dropdown-menu"><li class="ngeo-filter-condition-criteria-header" translate>Criteria taken into account</li><li ng-repeat="condition in ::$ctrl.conditions"><a href ng-click="$ctrl.setCondition(condition)"><span ng-class="{\'ngeo-filter-condition-criteria-active\': condition.value == $ctrl.datasource.filterCondition}" class="fa fa-check ngeo-filter-condition-criteria"></span><span>{{::condition.text | translate}}</span></a></li></ul></div><ngeo-rule ng-repeat="rule in $ctrl.directedRules" feature-overlay="::$ctrl.featureOverlay" class="ngeo-filter-rule-directed" map="$ctrl.map" rule="rule" tool-group="$ctrl.toolGroup"></ngeo-rule><hr class="ngeo-filter-separator-rules"><div ng-repeat="rule in $ctrl.customRules"><a class="btn btn-xs btn-link ngeo-filter-rule-custom-rm-btn" ng-click="!$ctrl.aRuleIsActive && $ctrl.removeCustomRule(rule)" ng-disabled="$ctrl.aRuleIsActive" href><span class="fa fa-remove"></span></a><ngeo-rule feature-overlay="::$ctrl.featureOverlay" class="ngeo-filter-rule-custom" map="$ctrl.map" rule="rule" tool-group="$ctrl.toolGroup"></ngeo-rule></div><div class="dropdown"><a class="btn btn-link dropdown-toggle" ng-class="{disabled: $ctrl.aRuleIsActive}" type="button" data-toggle="dropdown" ng-disabled="$ctrl.aRuleIsActive"><span translate>+ Add a new criteria</span><span class="caret"></span></a><ul class="dropdown-menu"><li ng-repeat="attribute in ::$ctrl.geometryAttributes"><a href ng-click="$ctrl.createAndAddCustomRule(attribute)"><span translate>Spatial filter</span></a></li><li role="presentation" class="divider"></li><li ng-repeat="attribute in ::$ctrl.otherAttributes"><a href ng-click="$ctrl.createAndAddCustomRule(attribute)"><span>{{::attribute.name | translate}}</span></a></li></ul></div><hr class="ngeo-filter-separator-criteria"><a class="btn btn-link" type="button" ng-click="!$ctrl.aRuleIsActive && $ctrl.apply()" ng-disabled="$ctrl.aRuleIsActive"><span class="fa fa-check"></span><span translate>Apply filter</span></a><a class="btn btn-link" type="button" ng-click="!$ctrl.aRuleIsActive && $ctrl.getData()" ng-disabled="$ctrl.aRuleIsActive"><span class="fa fa-chevron-right"></span><span translate>Get data</span></a>')}
a.$inject=["$templateCache"];Na.run(a)})();function R(){}R.prototype.show=function(a){S(this,a).forEach(this.j,this)};R.prototype.show=R.prototype.show;R.prototype.error=function(a){this.show(S(this,a,T))};R.prototype.error=R.prototype.error;R.prototype.info=function(a){this.show(S(this,a,V))};R.prototype.info=R.prototype.info;R.prototype.success=function(a){this.show(S(this,a,W))};R.prototype.success=R.prototype.success;R.prototype.warn=function(a){this.show(S(this,a,X))};R.prototype.warn=R.prototype.warn;
function S(a,b,c){var d=[],f=null,e=V;"string"===typeof b?d.push({msg:b,type:void 0!==c?c:e}):Array.isArray(b)?b.forEach(function(a){"string"===typeof b?f={msg:a,type:void 0!==c?c:e}:(f=a,void 0!==c&&(f.type=c));d.push(f)},a):(f=b,void 0!==c&&(f.type=c),void 0===f.type&&(f.type=e),d.push(f));return d}var T="error",V="information",W="success",X="warning";q("ngeo.message.Message.Type",{ERROR:T,INFORMATION:V,SUCCESS:W,WARNING:X});function Y(a){this.b=a;a=angular.element('<div class="ngeo-notification"></div>');angular.element(document.body).append(a);this.v=a;this.a={}}r(Y,R);Y.$inject=["$timeout"];Y.prototype.notify=function(a){this.show(a)};Y.prototype.notify=Y.prototype.notify;Y.prototype.clear=function(){for(var a in this.a){var b=this.a[parseInt(a,10)],c=b.ma;b=b.promise;var d=c.a||(c.a=++ia);c.alert("close");this.b.cancel(b);delete this.a[d]}};Y.prototype.clear=Y.prototype.clear;
Y.prototype.j=function(a){var b=this,c=["alert","fade"];switch(a.type){case T:c.push("alert-danger");break;case V:c.push("alert-info");break;case W:c.push("alert-success");break;case X:c.push("alert-warning")}var d=angular.element('<div class="'+c.join(" ")+'"></div>'),f;a.target?f=angular.element(a.target):f=this.v;f.append(d);d.html(a.msg).addClass("in");a=void 0!==a.delay?a.delay:7E3;c={ma:d};var e=d.a||(d.a=++ia);c.promise=this.b(function(){d.alert("close");delete b.a[e]},a);this.a[e]=c};
var Oa=angular.module("ngeoNotification",[]);Oa.service("ngeoNotification",Y);Na.requires.push(Oa.name);var Pa=angular.module("app",[Na.name,Oa.name]);function Z(a){this.notification=a;this.a=1;$('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})}Z.$inject=["ngeoNotification"];Z.prototype.qa=function(){this.notification.notify([{msg:["Error #",this.a++].join(""),type:T},{msg:["Warning #",this.a++].join(""),type:X},{msg:["Information #",this.a++].join(""),type:V},{msg:["Success #",this.a++].join(""),type:W}])};Z.prototype.notifyMulti=Z.prototype.qa;
Z.prototype.sa=function(){this.notification.notify({msg:"Error in an other target",target:angular.element("#my-messages"),type:T})};Z.prototype.notifyTarget=Z.prototype.sa;Z.prototype.ra=function(){this.notification.notify({delay:1E3,msg:"Lasts one second",type:W})};Z.prototype.notifyQuick=Z.prototype.ra;Pa.controller("MainController",Z);}).call(window);
//# sourceMappingURL=notification.js.map