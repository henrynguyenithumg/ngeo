!function(e){function n(n){for(var o,u,l=n[0],p=n[1],i=n[2],f=0,s=[];f<l.length;f++)u=l[f],r[u]&&s.push(r[u][0]),r[u]=0;for(o in p)Object.prototype.hasOwnProperty.call(p,o)&&(e[o]=p[o]);for(c&&c(n);s.length;)s.shift()();return a.push.apply(a,i||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],o=!0,l=1;l<t.length;l++){var p=t[l];0!==r[p]&&(o=!1)}o&&(a.splice(n--,1),e=u(u.s=t[0]))}return e}var o={},r={40:0},a=[];function u(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=o,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},u.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},u.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="";var l=window.webpackJsonp=window.webpackJsonp||[],p=l.push.bind(l);l.push=n,l=l.slice();for(var i=0;i<l.length;i++)n(l[i]);var c=p;a.push([500,0]),t()}({425:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t(540);var o=p(t(39)),r=p(t(49)),a=p(t(48)),u=p(t(60)),l=p(t(47));function p(e){return e&&e.__esModule?e:{default:e}}var i={};i.module=angular.module("app",["gettext",l.default.name]),i.mapComponent={bindings:{map:"=appMap",class:"=appMapClass"},template:'<div ngeo-map="$ctrl.map"></div>'},i.module.component("appMap",i.mapComponent),i.MainController=function(e){this.map=new o.default({layers:[new a.default({source:new u.default})],view:new r.default({center:[0,0],zoom:4})}),this.open=!1;var n=this;e(function(){n.open=!0},0)},i.MainController.$inject=["$timeout"],i.module.controller("MainController",i.MainController),n.default=i},500:function(e,n,t){t(36),t(34),e.exports=t(425)},540:function(e,n){}});
//# sourceMappingURL=animation.d435fd5a43f17aa95b1f.js.map