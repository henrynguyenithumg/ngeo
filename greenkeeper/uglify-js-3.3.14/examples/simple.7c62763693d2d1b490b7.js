!function(e){function n(n){for(var t,l,a=n[0],f=n[1],i=n[2],p=0,s=[];p<a.length;p++)l=a[p],o[l]&&s.push(o[l][0]),o[l]=0;for(t in f)Object.prototype.hasOwnProperty.call(f,t)&&(e[t]=f[t]);for(c&&c(n);s.length;)s.shift()();return u.push.apply(u,i||[]),r()}function r(){for(var e,n=0;n<u.length;n++){for(var r=u[n],t=!0,a=1;a<r.length;a++){var f=r[a];0!==o[f]&&(t=!1)}t&&(u.splice(n--,1),e=l(l.s=r[0]))}return e}var t={},o={3:0},u=[];function l(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=t,l.d=function(e,n,r){l.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},l.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},l.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="";var a=window.webpackJsonp=window.webpackJsonp||[],f=a.push.bind(a);a.push=n,a=a.slice();for(var i=0;i<a.length;i++)n(a[i]);var c=f;u.push([323,0]),r()}({322:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),r(503);var t=f(r(39)),o=f(r(49)),u=f(r(48)),l=f(r(60)),a=f(r(47));function f(e){return e&&e.__esModule?e:{default:e}}var i={};i.module=angular.module("app",["gettext",a.default.name]),i.MainController=function(){this.map=new t.default({layers:[new u.default({source:new l.default})],view:new o.default({center:[0,0],zoom:4})})},i.module.controller("MainController",i.MainController),n.default=i},323:function(e,n,r){r(36),r(34),e.exports=r(322)},503:function(e,n){}});
//# sourceMappingURL=simple.7c62763693d2d1b490b7.js.map