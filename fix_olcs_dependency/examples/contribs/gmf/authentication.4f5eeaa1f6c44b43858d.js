!function(e){function t(t){for(var r,l,u=t[0],i=t[1],s=t[2],p=0,d=[];p<u.length;p++)l=u[p],o[l]&&d.push(o[l][0]),o[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(c&&c(t);d.length;)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={29:0},a=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},l.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var c=i;a.push([583,0]),n()}({445:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(616);var r,o=n(220),a=(r=o)&&r.__esModule?r:{default:r};var l={};l.module=angular.module("gmfapp",["gettext",a.default.name]),l.module.value("authenticationBaseUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi"),l.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),l.MainController=function(e){this.passwordValidator={isPasswordValid:function(e){return e.length>8&&/\d/.test(e)&&/[a-z]/.test(e)&&/[A-Z]/.test(e)&&/\W/.test(e)},notValidMessage:e.getString("The new password must have at least 8 characters,including capital letter, small letter, digit and special character.")}},l.MainController.$inject=["gettextCatalog"],l.module.controller("MainController",l.MainController),t.default=l},583:function(e,t,n){n(54),n(53),e.exports=n(445)},616:function(e,t){}});
//# sourceMappingURL=authentication.4f5eeaa1f6c44b43858d.js.map