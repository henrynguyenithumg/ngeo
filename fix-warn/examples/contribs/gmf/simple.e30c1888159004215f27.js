!function(e){function n(n){for(var r,l,a=n[0],c=n[1],f=n[2],p=0,s=[];p<a.length;p++)l=a[p],o[l]&&s.push(o[l][0]),o[l]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(i&&i(n);s.length;)s.shift()();return u.push.apply(u,f||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,a=1;a<t.length;a++){var c=t[a];0!==o[c]&&(r=!1)}r&&(u.splice(n--,1),e=l(l.s=t[0]))}return e}var r={},o={5:0},u=[];function l(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=r,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},l.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},l.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=n,a=a.slice();for(var f=0;f<a.length;f++)n(a[f]);var i=c;u.push([379,0]),t()}({378:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t(588);var r=c(t(70)),o=c(t(52)),u=c(t(61)),l=c(t(49)),a=c(t(79));function c(e){return e&&e.__esModule?e:{default:e}}var f={};f.module=angular.module("gmfapp",["gettext",r.default.name]),f.module.constant("defaultTheme","Demo"),f.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),f.MainController=function(){this.map=new o.default({layers:[new l.default({source:new a.default})],view:new u.default({center:[0,0],zoom:4})})},f.module.controller("MainController",f.MainController),n.default=f},379:function(e,n,t){t(54),t(53),e.exports=t(378)},588:function(e,n){}});
//# sourceMappingURL=simple.e30c1888159004215f27.js.map