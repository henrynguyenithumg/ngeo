webpackJsonp([22],{4:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(0),i=o(5);const n=function(t){const e=t||{};let o;o=void 0!==e.attributions?e.attributions:[n.ATTRIBUTION];const r=void 0!==e.crossOrigin?e.crossOrigin:"anonymous",a=void 0!==e.url?e.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";i.a.call(this,{attributions:o,cacheSize:e.cacheSize,crossOrigin:r,opaque:void 0===e.opaque||e.opaque,maxZoom:void 0!==e.maxZoom?e.maxZoom:19,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileLoadFunction:e.tileLoadFunction,url:a,wrapX:e.wrapX})};Object(r.inherits)(n,i.a),n.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',e.default=n},437:function(t,e,o){o(8),t.exports=o(438)},438:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),o(439),o(9);var r=f(o(15)),i=f(o(291)),n=f(o(11)),a=f(o(16)),l=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}(o(3)),u=f(o(234)),c=f(o(17)),s=f(o(28)),d=f(o(4)),p=f(o(25));function f(t){return t&&t.__esModule?t:{default:t}}var h={};h.module=angular.module("app",[r.default.name,i.default.name]),h.MainController=function(t){var e=this;this.kmlFormat_=new u.default,this.vectorSource_=new p.default,this.map=new n.default({layers:[new c.default({source:new d.default}),new s.default({source:this.vectorSource_})],view:new a.default({center:[0,0],zoom:2})}),this.fileReaderSupported=void 0,this.fileContent="",t.$watch(function(){return e.fileContent},this.importKml_.bind(this))},h.MainController.$inject=["$scope"],h.MainController.prototype.importKml_=function(t){var e=this.map,o=this.vectorSource_,r=this.kmlFormat_.readFeatures(t,{featureProjection:"EPSG:3857"});o.clear(!0),o.addFeatures(r);var i=o.getExtent(),n=e.getSize();n&&!l.isEmpty(i)&&e.getView().fit(i,n)},h.module.controller("MainController",h.MainController),e.default=h},439:function(t,e){},5:function(t,e,o){"use strict";var r=o(0),i=o(19),n=o(20);const a=function(t){const e=t||{},o=void 0!==e.projection?e.projection:"EPSG:3857",r=void 0!==e.tileGrid?e.tileGrid:Object(n.a)({extent:Object(n.b)(o),maxZoom:e.maxZoom,minZoom:e.minZoom,tileSize:e.tileSize});i.a.call(this,{attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,opaque:e.opaque,projection:o,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileGrid:r,tileLoadFunction:e.tileLoadFunction,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:void 0===e.wrapX||e.wrapX,transition:e.transition})};Object(r.inherits)(a,i.a),e.a=a}},[437]);
//# sourceMappingURL=importfeatures.e1390797bdd5f5fde65b.js.map