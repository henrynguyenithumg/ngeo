!function(e){function t(t){for(var r,l,u=t[0],f=t[1],c=t[2],s=0,p=[];s<u.length;s++)l=u[s],o[l]&&p.push(o[l][0]),o[l]=0;for(r in f)Object.prototype.hasOwnProperty.call(f,r)&&(e[r]=f[r]);for(i&&i(t);p.length;)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var f=n[u];0!==o[f]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={27:0},a=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},l.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var u=window.webpackJsonp=window.webpackJsonp||[],f=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var i=f;a.push([442,0]),n()}({441:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(614);var r=s(n(356)),o=s(n(70)),a=s(n(155)),l=s(n(83)),u=s(n(52)),f=s(n(61)),c=s(n(49)),i=s(n(79));function s(e){return e&&e.__esModule?e:{default:e}}var p={};p.module=angular.module("gmfapp",["gettext",r.default.name,o.default.name,a.default.name]),p.module.value("gmfRasterUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/raster"),p.module.value("gmfContextualdatacontentTemplateUrl","partials/contextualdata.html"),p.module.constant("defaultTheme","Demo"),p.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),p.MainController=function(){this.map=new u.default({layers:[new c.default({source:new i.default})],view:new f.default({projection:l.default,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[6e5,2e5],zoom:3})})},p.MainController.prototype.onRasterData=function(e,t){return{elelvation_diff:t.srtm-t.aster}},p.module.controller("MainController",p.MainController),t.default=p},442:function(e,t,n){n(54),n(53),e.exports=n(441)},614:function(e,t){}});
//# sourceMappingURL=contextualdata.065824adf4d8d28502bc.js.map