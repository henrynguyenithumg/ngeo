!function(e){function t(t){for(var r,u,i=t[0],l=t[1],s=t[2],c=0,d=[];c<i.length;c++)u=i[c],o[u]&&d.push(o[u][0]),o[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(f&&f(t);d.length;)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={15:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},u.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var f=l;a.push([410,0]),n()}({409:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(601);var r=g(n(279)),o=g(n(136)),a=g(n(105)),u=g(n(70)),i=g(n(57)),l=g(n(208)),s=g(n(83)),f=g(n(212)),c=g(n(52)),d=g(n(61)),h=g(n(49)),m=g(n(79));function g(e){return e&&e.__esModule?e:{default:e}}var p={};p.module=angular.module("gmfapp",["gettext",o.default.name,a.default.module.name,u.default.name,l.default.module.name,i.default.module.name,f.default.module.name,r.default.name]),p.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/themes?version=2&background=background&interface=desktop"),p.module.constant("defaultTheme","Demo"),p.module.constant("gmfTreeManagerModeFlush",!1),p.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),p.MainController=function(e,t,n,r){var o=this;t.loadThemes(),this.map=new c.default({layers:[new h.default({source:new m.default})],view:new d.default({projection:s.default,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:3})});var a=r.getParam("modal");this.modal="true"===a,this.gmfTreeManager=e,this.gmfThemeManager=n,this.themes=[],this.groups=[],this.layers=[],this.getSetTheme=function(e){return e&&this.gmfThemeManager.addTheme(e),this.themes},this.getSetGroup=function(e){return void 0!==e&&this.gmfTreeManager.addFirstLevelGroups([e]),this.groups},this.getSetLayers=function(e){return void 0!==e&&this.gmfTreeManager.addGroupByLayerName(e.name),this.layers},this.getSetRemoveTree=function(e){return void 0!==e&&this.gmfTreeManager.removeGroup(e),this.gmfTreeManager.root.children},t.getThemesObject().then(function(e){if(e){o.themes=e;var t=[];o.themes.forEach(function(e){e.children.forEach(function(e){o.groups.push(e),o.getDistinctFlatNodes_(e,t)})}),t.forEach(function(e){void 0===e.children&&o.layers.push(e)})}}),this.getDistinctFlatNodes_=function(e,t){var n=void 0,r=e.children;if(void 0!==r)for(n=0;n<r.length;n++)this.getDistinctFlatNodes_(r[n],t);var o=!1;t.some(function(t){if(t.id===e.id)return o=!0}),o||t.push(e)}},p.MainController.$inject=["gmfTreeManager","gmfThemes","gmfThemeManager","ngeoLocation"],p.module.controller("MainController",p.MainController),t.default=p},410:function(e,t,n){n(54),n(53),e.exports=n(409)},601:function(e,t){}});
//# sourceMappingURL=layertreeadd.0942a69eb5b8eaee274f.js.map