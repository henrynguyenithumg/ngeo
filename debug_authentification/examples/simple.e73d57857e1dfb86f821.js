webpackJsonp([11],{4:function(o,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t(0),r=t(5);const n=function(o){const e=o||{};let t;t=void 0!==e.attributions?e.attributions:[n.ATTRIBUTION];const i=void 0!==e.crossOrigin?e.crossOrigin:"anonymous",a=void 0!==e.url?e.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";r.a.call(this,{attributions:t,cacheSize:e.cacheSize,crossOrigin:i,opaque:void 0===e.opaque||e.opaque,maxZoom:void 0!==e.maxZoom?e.maxZoom:19,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileLoadFunction:e.tileLoadFunction,url:a,wrapX:e.wrapX})};Object(i.inherits)(n,r.a),n.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',e.default=n},5:function(o,e,t){"use strict";var i=t(0),r=t(19),n=t(20);const a=function(o){const e=o||{},t=void 0!==e.projection?e.projection:"EPSG:3857",i=void 0!==e.tileGrid?e.tileGrid:Object(n.a)({extent:Object(n.b)(t),maxZoom:e.maxZoom,minZoom:e.minZoom,tileSize:e.tileSize});r.a.call(this,{attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,opaque:e.opaque,projection:t,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileGrid:i,tileLoadFunction:e.tileLoadFunction,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:void 0===e.wrapX||e.wrapX,transition:e.transition})};Object(i.inherits)(a,r.a),e.a=a},503:function(o,e,t){t(8),o.exports=t(504)},504:function(o,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),t(505),t(9);var i=c(t(11)),r=c(t(16)),n=c(t(17)),a=c(t(4)),l=c(t(15));function c(o){return o&&o.__esModule?o:{default:o}}var u={};u.module=angular.module("app",[l.default.name]),u.MainController=function(){this.map=new i.default({layers:[new n.default({source:new a.default})],view:new r.default({center:[0,0],zoom:4})})},u.module.controller("MainController",u.MainController),e.default=u},505:function(o,e){}},[503]);
//# sourceMappingURL=simple.e73d57857e1dfb86f821.js.map