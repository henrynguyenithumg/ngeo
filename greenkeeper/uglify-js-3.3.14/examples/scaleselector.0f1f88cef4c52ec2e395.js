!function(e){function n(n){for(var r,l,a=n[0],i=n[1],c=n[2],p=0,s=[];p<a.length;p++)l=a[p],o[l]&&s.push(o[l][0]),o[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(f&&f(n);s.length;)s.shift()();return u.push.apply(u,c||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,a=1;a<t.length;a++){var i=t[a];0!==o[i]&&(r=!1)}r&&(u.splice(n--,1),e=l(l.s=t[0]))}return e}var r={},o={5:0},u=[];function l(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=r,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},l.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},l.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="";var a=window.webpackJsonp=window.webpackJsonp||[],i=a.push.bind(a);a.push=n,a=a.slice();for(var c=0;c<a.length;c++)n(a[c]);var f=i;u.push([327,0]),t()}({326:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t(505);var r=c(t(154)),o=c(t(39)),u=c(t(49)),l=c(t(48)),a=c(t(60)),i=c(t(47));function c(e){return e&&e.__esModule?e:{default:e}}var f={};f.module=angular.module("app",["gettext",i.default.name,r.default.name]),f.MainController=function(e){this.map=new o.default({layers:[new l.default({source:new a.default})],view:new u.default({center:[-10635142.37,4813698.29],zoom:1,maxZoom:4})}),this.scales=[2e8,1e8,5e7,25e6,12e6],this.options={dropup:!0}},f.MainController.$inject=["$scope"],f.module.controller("MainController",f.MainController),n.default=f},327:function(e,n,t){t(36),t(34),e.exports=t(326)},505:function(e,n){}});
//# sourceMappingURL=scaleselector.0f1f88cef4c52ec2e395.js.map