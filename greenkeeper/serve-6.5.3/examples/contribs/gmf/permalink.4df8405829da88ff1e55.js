!function(e){function n(n){for(var r,u,a=n[0],i=n[1],c=n[2],s=0,d=[];s<a.length;s++)u=a[s],o[u]&&d.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(f&&f(n);d.length;)d.shift()();return l.push.apply(l,c||[]),t()}function t(){for(var e,n=0;n<l.length;n++){for(var t=l[n],r=!0,a=1;a<t.length;a++){var i=t[a];0!==o[i]&&(r=!1)}r&&(l.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={10:0},l=[];function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},u.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},u.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="";var a=window.webpackJsonp=window.webpackJsonp||[],i=a.push.bind(a);a.push=n,a=a.slice();for(var c=0;c<a.length;c++)n(a[c]);var f=i;l.push([393,0]),t()}({392:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t(596);var r=d(t(70)),o=d(t(83)),l=d(t(52)),u=d(t(61)),a=d(t(49)),i=d(t(79)),c=d(t(141)),f=d(t(56)),s=d(t(38));function d(e){return e&&e.__esModule?e:{default:e}}var p={};p.module=angular.module("gmfapp",["gettext",r.default.name]),p.module.constant("defaultTheme","Demo"),p.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),p.module.value("gmfPermalinkOptions",{crosshairStyle:new s.default({image:new c.default({stroke:new f.default({color:"rgba(0, 0, 255, 1)",width:2}),points:4,radius:8,radius2:0,angle:0})})}),p.MainController=function(){this.map=new l.default({layers:[new a.default({source:new i.default})],view:new u.default({projection:o.default,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:3})})},p.module.controller("MainController",p.MainController),n.default=p},393:function(e,n,t){t(54),t(53),e.exports=t(392)},596:function(e,n){}});
//# sourceMappingURL=permalink.4df8405829da88ff1e55.js.map