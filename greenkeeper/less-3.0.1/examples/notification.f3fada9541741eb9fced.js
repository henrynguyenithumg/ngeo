!function(t){function e(e){for(var o,a,l=e[0],u=e[1],f=e[2],s=0,c=[];s<l.length;s++)a=l[s],r[a]&&c.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);for(p&&p(e);c.length;)c.shift()();return i.push.apply(i,f||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,l=1;l<n.length;l++){var u=n[l];0!==r[u]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={11:0},i=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},a.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var p=u;i.push([338,0]),n()}({337:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),n(507),n(34),n(233);var o=i(n(205)),r=i(n(234));function i(t){return t&&t.__esModule?t:{default:t}}var a={};a.module=angular.module("app",[r.default.module.name]),a.MainController=function(e){this.notification=e,this.i_=1,t('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})},a.MainController.$inject=["ngeoNotification"],a.MainController.prototype.notifyMulti=function(){this.notification.notify([{msg:["Error #",this.i_++].join(""),type:o.default.Type.ERROR},{msg:["Warning #",this.i_++].join(""),type:o.default.Type.WARNING},{msg:["Information #",this.i_++].join(""),type:o.default.Type.INFORMATION},{msg:["Success #",this.i_++].join(""),type:o.default.Type.SUCCESS}])},a.MainController.prototype.notifyTarget=function(){this.notification.notify({msg:"Error in an other target",target:angular.element("#my-messages"),type:o.default.Type.ERROR})},a.MainController.prototype.notifyQuick=function(){this.notification.notify({delay:1e3,msg:"Lasts one second",type:o.default.Type.SUCCESS})},a.module.controller("MainController",a.MainController),e.default=a}).call(this,n(36))},338:function(t,e,n){n(35),t.exports=n(337)},507:function(t,e){}});
//# sourceMappingURL=notification.f3fada9541741eb9fced.js.map