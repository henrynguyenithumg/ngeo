!function(e){function r(r){for(var n,s,u=r[0],l=r[1],i=r[2],d=0,f=[];d<u.length;d++)s=u[d],a[s]&&f.push(a[s][0]),a[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(c&&c(r);f.length;)f.shift()();return o.push.apply(o,i||[]),t()}function t(){for(var e,r=0;r<o.length;r++){for(var t=o[r],n=!0,u=1;u<t.length;u++){var l=t[u];0!==a[l]&&(n=!1)}n&&(o.splice(r--,1),e=s(s.s=t[0]))}return e}var n={},a={21:0},o=[];function s(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=n,s.d=function(e,r,t){s.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:t})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(r,"a",r),r},s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},s.p="";var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=r,u=u.slice();for(var i=0;i<u.length;i++)r(u[i]);var c=l;o.push([373,0]),t()}({371:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n,a=t(9),o=(n=a)&&n.__esModule?n:{default:n};r.default=function(e,r,t,n,a){var s=n.$watchCollection(function(){return e},function(){var n=void 0,o=void 0,s=void 0;if(t)for(n=e.length-1,s=0;n>=0;--n)a(e[n])&&(r[s++]=e[n]);else for(n=0,o=e.length,s=0;n<o;++n)a(e[n])&&(r[s++]=e[n]);r.length=s}),u=n.$watchCollection(function(){return r},function(){var n=void 0,s=void 0,u=void 0;if(t){for(n=0,s=e.length,u=r.length-1;n<s;++n)a(e[n])&&(e[n]=r[u--]);o.default.assert(-1==u)}else{for(n=0,s=e.length,u=0;n<s;++n)a(e[n])&&(e[n]=r[u++]);o.default.assert(u==r.length)}});return function(){s(),u()}}},372:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t(518),t(34);var n=f(t(47)),a=f(t(258)),o=f(t(371)),s=f(t(207)),u=f(t(146)),l=f(t(39)),i=f(t(49)),c=f(t(48)),d=f(t(180));function f(e){return e&&e.__esModule?e:{default:e}}var p={};p.module=angular.module("app",[n.default.name,a.default.name]),p.MainController=function(e){var r=new c.default({source:new s.default({layer:"asitvd.fond_couleur"})});r.set("name","asitvd");var t=new c.default({source:new d.default({url:"https://wms.geo.admin.ch",params:{LAYERS:"ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill"},serverType:"mapserver"})});t.set("name","Boundaries");var n=new c.default({source:new d.default({url:"https://wms.geo.admin.ch",params:{LAYERS:"ch.swisstopo.geologie-gravimetrischer_atlas"},serverType:"mapserver"})});n.set("name","Water bodies");var a=new c.default({source:new d.default({url:"https://wms.geo.admin.ch",params:{LAYERS:"ch.swisstopo.dreiecksvermaschung"},serverType:"mapserver"})});a.set("name","Cities"),this.map=new l.default({layers:[r,t,n,a],view:new i.default({projection:u.default,resolutions:[1e3,500,200,100,50,20,10,5,2.5,2,1,.5],center:[6e5,2e5],zoom:1})});var f=this.map;this.roads_=new c.default({source:new d.default({url:"https://wms.geo.admin.ch",params:{LAYERS:"ch.bafu.laerm-strassenlaerm_tag"},serverType:"mapserver"})}),this.roads_.set("name","Roads"),this.selectedLayers=[];var p=this.selectedLayers;(0,o.default)(f.getLayers().getArray(),p,!0,e,function(e){return e!==r}),e.$watchCollection(function(){return p},function(){f.render()})},p.MainController.$inject=["$scope"],p.MainController.prototype.toggleRoadsLayer=function(e){if(void 0===e)return this.map.getLayers().getArray().indexOf(this.roads_)>=0;e?this.map.addLayer(this.roads_):this.map.removeLayer(this.roads_)},p.module.controller("MainController",p.MainController),r.default=p},373:function(e,r,t){t(35),e.exports=t(372)},518:function(e,r){}});
//# sourceMappingURL=layerorder.c68a8ce7f381dccb95a5.js.map