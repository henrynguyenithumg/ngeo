webpackJsonp([13],{4:function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(0),r=e(5);const n='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.';t.ATTRIBUTION=n;const a=function(o){const t=o||{};let e;e=void 0!==t.attributions?t.attributions:[n];const i=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",a=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";r.a.call(this,{attributions:e,cacheSize:t.cacheSize,crossOrigin:i,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:a,wrapX:t.wrapX})};Object(i.inherits)(a,r.a),t.default=a},5:function(o,t,e){"use strict";var i=e(0),r=e(19),n=e(20);const a=function(o){const t=o||{},e=void 0!==t.projection?t.projection:"EPSG:3857",i=void 0!==t.tileGrid?t.tileGrid:Object(n.a)({extent:Object(n.b)(e),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});r.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:e,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:i,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(i.inherits)(a,r.a),t.a=a},516:function(o,t,e){e(8),o.exports=e(517)},517:function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),e(518),e(9);var i=l(e(11)),r=l(e(16)),n=l(e(17)),a=l(e(4)),c=l(e(15));function l(o){return o&&o.__esModule?o:{default:o}}var u={};u.module=angular.module("app",[c.default.name]),u.MainController=function(){this.map=new i.default({layers:[new n.default({source:new a.default})],view:new r.default({center:[0,0],zoom:4})})},u.module.controller("MainController",u.MainController),t.default=u},518:function(o,t){}},[516]);
//# sourceMappingURL=simple.24c75b6727fb1a1a1c80.js.map