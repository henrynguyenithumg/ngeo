webpackJsonp([26],{294:function(o,t,e){e(8),o.exports=e(375)},375:function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),e(376),e(9);var i=c(e(11)),n=c(e(16)),r=c(e(17)),a=c(e(4)),l=c(e(15));function c(o){return o&&o.__esModule?o:{default:o}}var s={};s.module=angular.module("app",[l.default.name]),s.mapComponent={bindings:{map:"=appMap",class:"=appMapClass"},template:'<div ngeo-map="$ctrl.map"></div>'},s.module.component("appMap",s.mapComponent),s.MainController=function(o){this.map=new i.default({layers:[new r.default({source:new a.default})],view:new n.default({center:[0,0],zoom:4})}),this.open=!1;var t=this;o(function(){t.open=!0},0)},s.MainController.$inject=["$timeout"],s.module.controller("MainController",s.MainController),t.default=s},376:function(o,t){},4:function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(0),n=e(5);const r='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.';t.ATTRIBUTION=r;const a=function(o){const t=o||{};let e;e=void 0!==t.attributions?t.attributions:[r];const i=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",a=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";n.a.call(this,{attributions:e,cacheSize:t.cacheSize,crossOrigin:i,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:a,wrapX:t.wrapX})};Object(i.inherits)(a,n.a),t.default=a},5:function(o,t,e){"use strict";var i=e(0),n=e(19),r=e(20);const a=function(o){const t=o||{},e=void 0!==t.projection?t.projection:"EPSG:3857",i=void 0!==t.tileGrid?t.tileGrid:Object(r.a)({extent:Object(r.b)(e),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});n.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:e,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:i,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(i.inherits)(a,n.a),t.a=a}},[294]);
//# sourceMappingURL=animation.a7c8f7887d25911399fc.js.map