!function(t){function e(e){for(var n,u,a=e[0],l=e[1],s=e[2],c=0,p=[];c<a.length;c++)u=a[c],o[u]&&p.push(o[u][0]),o[u]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);for(f&&f(e);p.length;)p.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,a=1;a<r.length;a++){var l=r[a];0!==o[l]&&(n=!1)}n&&(i.splice(e--,1),t=u(u.s=r[0]))}return t}var n={},o={1:0},i=[];function u(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=t,u.c=n,u.d=function(t,e,r){u.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},u.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},u.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var f=l;i.push([375,0]),r()}({374:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),r(587);var n=l(r(57)),o=l(r(236)),i=l(r(269)),u=l(r(235)),a=l(r(33));function l(t){return t&&t.__esModule?t:{default:t}}var s={};s.module=angular.module("gmfapp",["gettext",o.default.module.name,n.default.module.name,i.default.name]),s.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/themes?version=2&background=background"),s.module.value("gmfLayersUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/layers/"),s.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),s.MainController=function(t,e,r){var n=this;this.timeout_=t,this.xsdAttributes_=r,this.attributes=null,this.feature=null,this.layers=[];var o=["line","point","polygon"];e.loadThemes(),e.getThemesObject().then(function(t){if(t){var e=[];t.forEach(function(t){t.children.forEach(function(t){n.getDistinctFlatNodes_(t,e)})}),e.forEach(function(t){void 0===t.children&&-1!==o.indexOf(t.name)&&n.layers.push(t)})}})},s.MainController.$inject=["$timeout","gmfThemes","gmfXSDAttributes"],s.MainController.prototype.getSetLayers=function(t){return void 0!==t&&this.xsdAttributes_.getAttributes(t.id).then(this.setAttributes_.bind(this)),this.layers},s.MainController.prototype.setAttributes_=function(t){var e=this;this.feature=null,this.attributes=null,this.timeout_(function(){e.feature=new a.default,e.attributes=t},0)},s.MainController.prototype.getGeomType=function(){var t="N/A";if(this.attributes){var e=u.default.getGeometryAttribute(this.attributes);e&&e.geomType&&(t=e.geomType)}return t},s.MainController.prototype.getDistinctFlatNodes_=function(t,e){var r=void 0,n=t.children;if(void 0!==n)for(r=0;r<n.length;r++)this.getDistinctFlatNodes_(n[r],e);var o=!1;e.some(function(e){if(e.id===t.id)return o=!0}),o||e.push(t)},s.module.controller("MainController",s.MainController),e.default=s},375:function(t,e,r){r(54),r(53),t.exports=r(374)},587:function(t,e){}});
//# sourceMappingURL=xsdattributes.4fde62ca5bc1b14a16e1.js.map