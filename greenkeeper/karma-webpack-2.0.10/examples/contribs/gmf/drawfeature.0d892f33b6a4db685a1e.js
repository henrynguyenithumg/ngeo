webpackJsonp([19],{531:function(e,t,o){o(14),e.exports=o(532)},532:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),o(533),o(16);var r=f(o(27)),i=f(o(311)),n=f(o(1)),a=f(o(76)),l=f(o(121)),u=f(o(44)),c=f(o(92)),s=f(o(77)),p=f(o(15)),d=f(o(20)),m=f(o(13)),v=f(o(7));function f(e){return e&&e.__esModule?e:{default:e}}var h={};h.module=angular.module("gmfapp",[i.default.name,r.default.name,l.default.name,u.default.module.name,s.default.module.name]),h.module.value("ngeoExportFeatureFormats",[u.default.FormatType.KML,u.default.FormatType.GPX]),h.constant("defaultTheme","Demo"),h.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),h.MainController=function(t,o,r,i,a){var l=this;this.scope_=t;var u=new d.default({center:[0,0],zoom:3});o.setProjection(n.default.assert(u.getProjection())),a.getFeatureOverlay().setFeatures(r),this.map=new p.default({layers:[new m.default({source:new v.default})],view:u}),this.drawFeatureActive=!0;var s=new c.default(this,"drawFeatureActive");i.registerTool("mapTools",s,!0),this.pointerMoveActive=!1;var f=new c.default(this,"pointerMoveActive");i.registerTool("mapTools",f,!1),t.$watch(function(){return l.pointerMoveActive},function(t){t?l.map.on("pointermove",l.handleMapPointerMove_,l):(l.map.un("pointermove",l.handleMapPointerMove_,l),e("#pointermove-feature").html(""))}),e('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})},h.MainController.$inject=["$scope","ngeoFeatureHelper","ngeoFeatures","ngeoToolActivateMgr","ngeoFeatureOverlayMgr"],h.MainController.prototype.handleMapPointerMove_=function(t){var o=t.pixel,r=this.map.forEachFeatureAtPixel(o,function(e){return e});e("#pointermove-feature").html(r?r.get(a.default.NAME):"None"),this.scope_.$apply()},h.module.controller("MainController",h.MainController),t.default=h}).call(t,o(6))},533:function(e,t){},7:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=o(22),n=o(23);const a=function(e){const t=e||{},o=void 0!==t.projection?t.projection:"EPSG:3857",r=void 0!==t.tileGrid?t.tileGrid:Object(n.a)({extent:Object(n.b)(o),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});i.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:o,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:r,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(r.inherits)(a,i.a);var l=a;const u='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.';t.ATTRIBUTION=u;const c=function(e){const t=e||{};let o;o=void 0!==t.attributions?t.attributions:[u];const r=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",i=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";l.call(this,{attributions:o,cacheSize:t.cacheSize,crossOrigin:r,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:i,wrapX:t.wrapX})};Object(r.inherits)(c,l);t.default=c}},[531]);
//# sourceMappingURL=drawfeature.0d892f33b6a4db685a1e.js.map