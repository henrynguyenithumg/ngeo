webpackJsonp([5],{577:function(o,e,t){t(18),o.exports=t(578)},578:function(o,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),t(579),t(19);c(t(4));var r=c(t(31)),i=c(t(16)),n=c(t(25)),a=c(t(15)),l=c(t(8));function c(o){return o&&o.__esModule?o:{default:o}}var u={};u.module=angular.module("gmfapp",[r.default.name]),u.constant("defaultTheme","Demo"),u.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),u.MainController=function(){this.map=new i.default({layers:[new a.default({source:new l.default})],view:new n.default({center:[0,0],zoom:4})})},u.module.controller("MainController",u.MainController),e.default=u},579:function(o,e){},8:function(o,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(0),i=t(27),n=t(24);const a=function(o){const e=o||{},t=void 0!==e.projection?e.projection:"EPSG:3857",r=void 0!==e.tileGrid?e.tileGrid:n.a.createXYZ({extent:n.a.extentFromProjection(t),maxZoom:e.maxZoom,minZoom:e.minZoom,tileSize:e.tileSize});i.a.call(this,{attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,opaque:e.opaque,projection:t,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileGrid:r,tileLoadFunction:e.tileLoadFunction,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:void 0===e.wrapX||e.wrapX,transition:e.transition})};Object(r.inherits)(a,i.a);var l=a;const c=function(o){const e=o||{};let t;t=void 0!==e.attributions?e.attributions:[c.ATTRIBUTION];const r=void 0!==e.crossOrigin?e.crossOrigin:"anonymous",i=void 0!==e.url?e.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";l.call(this,{attributions:t,cacheSize:e.cacheSize,crossOrigin:r,opaque:void 0===e.opaque||e.opaque,maxZoom:void 0!==e.maxZoom?e.maxZoom:19,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileLoadFunction:e.tileLoadFunction,url:i,wrapX:e.wrapX})};Object(r.inherits)(c,l),c.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.';e.default=c}},[577]);
//# sourceMappingURL=simple.f407790944590b9f30c2.js.map