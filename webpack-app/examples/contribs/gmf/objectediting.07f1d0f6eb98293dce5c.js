webpackJsonp([10],{568:function(e,t,o){o(18),e.exports=o(569)},569:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o(570),o(19);j(o(4));var r=j(o(84)),i=(j(o(50)),j(o(31))),a=j(o(366)),n=j(o(258)),c=j(o(21)),l=j(o(82)),s=j(o(83)),u=(j(o(37)),function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}(o(10))),d=j(o(17)),m=j(o(16)),p=j(o(25)),h=j(o(15)),f=j(o(42)),g=j(o(9)),v=j(o(39));function j(e){return e&&e.__esModule?e:{default:e}}var w={};w.module=angular.module("gmfapp",[r.default.name,i.default.name,a.default.name,n.default.module.name,c.default.module.name,s.default.module.name]),w.constant("defaultTheme","ObjectEditing"),w.constant("gmfLayersUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/layers/"),w.constant("gmfTreeUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/themes?version=2&background=background"),w.constant("gmfObjectEditingToolsOptions",{regularPolygonRadius:150}),w.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),w.MainController=function(e,t,o,r){var i=this;this.gmfTreeManager_=o,t.loadThemes(),u.get("EPSG:21781").setExtent([485869.5728,76443.1884,837076.5648,299941.7864]),this.vectorSource_=new v.default({wrapX:!1}),this.vectorLayer_=new f.default({source:this.vectorSource_}),this.sketchFeatures=new d.default,this.sketchLayer_=new f.default({source:new v.default({features:this.sketchFeatures,wrapX:!1})}),this.map=new m.default({layers:[new h.default({source:new g.default})],view:new p.default({projection:"EPSG:21781",resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:2})}),t.getThemesObject().then(function(e){e&&(i.map.addLayer(i.vectorLayer_),i.map.addLayer(i.sketchLayer_))}),this.objectEditingGeomType=e.getGeomType(),this.objectEditingLayerNodeId=e.getLayerNodeId(),this.objectEditingActive=!0;var a=new l.default(this,"objectEditingActive");r.registerTool("mapTools",a,!0),this.dummyActive=!1;var n=new l.default(this,"dummyActive");r.registerTool("mapTools",n,!1),this.objectEditingFeature=null,e.getFeature().then(function(e){i.objectEditingFeature=e,e&&i.vectorSource_.addFeature(e)})},w.MainController.$inject=["gmfObjectEditingManager","gmfThemes","gmfTreeManager","ngeoToolActivateMgr"],w.module.controller("MainController",w.MainController),t.default=w},570:function(e,t){},9:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=o(27),a=o(24);const n=function(e){const t=e||{},o=void 0!==t.projection?t.projection:"EPSG:3857",r=void 0!==t.tileGrid?t.tileGrid:a.a.createXYZ({extent:a.a.extentFromProjection(o),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});i.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:o,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:r,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(r.inherits)(n,i.a);var c=n;const l=function(e){const t=e||{};let o;o=void 0!==t.attributions?t.attributions:[l.ATTRIBUTION];const r=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",i=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";c.call(this,{attributions:o,cacheSize:t.cacheSize,crossOrigin:r,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:i,wrapX:t.wrapX})};Object(r.inherits)(l,c),l.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.';t.default=l}},[568]);
//# sourceMappingURL=objectediting.07f1d0f6eb98293dce5c.js.map