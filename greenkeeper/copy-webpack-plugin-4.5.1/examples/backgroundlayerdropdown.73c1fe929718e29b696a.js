!function(e){function r(r){for(var t,l,u=r[0],c=r[1],p=r[2],i=0,d=[];i<u.length;i++)l=u[i],o[l]&&d.push(o[l][0]),o[l]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);for(s&&s(r);d.length;)d.shift()();return a.push.apply(a,p||[]),n()}function n(){for(var e,r=0;r<a.length;r++){for(var n=a[r],t=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(t=!1)}t&&(a.splice(r--,1),e=l(l.s=n[0]))}return e}var t={},o={36:0},a=[];function l(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=t,l.d=function(e,r,n){l.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},l.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},l.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(r,"a",r),r},l.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},l.p="";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=r,u=u.slice();for(var p=0;p<u.length;p++)r(u[p]);var s=c;a.push([416,0]),n()}({414:function(e,r){e.exports='<div class=dropdown> <button type=button class="btn btn-primary" data-toggle=dropdown> {{$ctrl.currentBgLayer.name}} <span class=caret></span> </button> <ul class=dropdown-menu role=menu> <li ng-repeat="layer in ::$ctrl.bgLayers"> <a href ng-click=$ctrl.setLayer(layer)>{{::layer.name}}</a> </li> </ul> </div> '},415:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),n(537);var t=i(n(208)),o=i(n(146)),a=i(n(39)),l=i(n(49)),u=i(n(121)),c=i(n(48)),p=i(n(120)),s=i(n(47));function i(e){return e&&e.__esModule?e:{default:e}}var d={};d.module=angular.module("app",["gettext",s.default.name]),d.backgroundlayerComponent={bindings:{map:"=appBackgroundlayerMap"},template:n(414),controller:"AppBackgroundlayerController"},d.module.component("appBackgroundlayer",d.backgroundlayerComponent),d.BackgroundlayerController=function(e,r){var n=this;e.get("data/backgroundlayers.json").then(function(e){var r=e.data;n.bgLayers=r,n.setLayer(r[0])}),this.backgroundLayerMgr_=r},d.BackgroundlayerController.$inject=["$http","ngeoBackgroundLayerMgr"],d.BackgroundlayerController.prototype.setLayer=function(e){this.currentBgLayer=e;var r=this.createLayer_(e.name);this.backgroundLayerMgr_.set(this.map,r)},d.BackgroundlayerController.prototype.createLayer_=function(e){if("blank"===e)return new c.default;var r=new t.default({layer:e});return new c.default({source:r})},d.module.controller("AppBackgroundlayerController",d.BackgroundlayerController),d.MainController=function(e){var r=new a.default({view:new l.default({projection:o.default,resolutions:[1e3,500,200,100,50,20,10,5,2.5,2,1,.5],center:[6e5,2e5],zoom:1})});this.map=r;var n=new u.default({source:new p.default({url:"https://wms.geo.admin.ch",params:{LAYERS:"ch.swisstopo.dreiecksvermaschung"},serverType:"mapserver"})});r.addLayer(n)},d.MainController.$inject=["$scope"],d.module.controller("MainController",d.MainController),r.default=d},416:function(e,r,n){n(36),n(34),e.exports=n(415)},537:function(e,r){}});
//# sourceMappingURL=backgroundlayerdropdown.73c1fe929718e29b696a.js.map