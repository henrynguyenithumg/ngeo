webpackJsonp([21],{458:function(e,t,o){o(10),e.exports=o(459)},459:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o(460),o(11);m(o(1));var i=m(o(17)),r=m(o(98)),n=m(o(104)),a=m(o(30)),l=m(o(13)),c=m(o(18)),u=m(o(69)),s=m(o(15)),d=m(o(5)),f=m(o(60)),p=m(o(42)),w=m(o(43)),h=m(o(23));function m(e){return e&&e.__esModule?e:{default:e}}var v={};v.module=angular.module("app",[i.default.name,r.default.name]),v.MainController=function(e){var t=new a.default,o=e.getFeatureOverlay();o.setFeatures(t),o.setStyle(new h.default({fill:new p.default({color:"rgba(255, 255, 255, 0.2)"}),stroke:new w.default({color:"#ffcc33",width:2}),image:new f.default({radius:7,fill:new p.default({color:"#ffcc33"})})})),this.map=new l.default({layers:[new s.default({source:new d.default})],view:new c.default({center:[-10997148,4569099],zoom:4})});var i=this.map;e.init(i),this.drawPolygon=new u.default({type:"Polygon",features:t});var r=this.drawPolygon;r.setActive(!1),n.default.interaction(r),i.addInteraction(r),this.drawPoint=new u.default({type:"Point",features:t});var m=this.drawPoint;m.setActive(!1),n.default.interaction(m),i.addInteraction(m),this.drawLine=new u.default({type:"LineString",features:t});var v=this.drawLine;v.setActive(!1),n.default.interaction(v),i.addInteraction(v)},v.MainController.$inject=["ngeoFeatureOverlayMgr"],v.module.controller("MainController",v.MainController),t.default=v},460:function(e,t){},5:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),r=o(6);const n=function(e){const t=e||{};let o;o=void 0!==t.attributions?t.attributions:[n.ATTRIBUTION];const i=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",a=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";r.a.call(this,{attributions:o,cacheSize:t.cacheSize,crossOrigin:i,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:a,wrapX:t.wrapX})};Object(i.inherits)(n,r.a),n.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',t.default=n},6:function(e,t,o){"use strict";var i=o(0),r=o(20),n=o(19);const a=function(e){const t=e||{},o=void 0!==t.projection?t.projection:"EPSG:3857",i=void 0!==t.tileGrid?t.tileGrid:n.a.createXYZ({extent:n.a.extentFromProjection(o),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});r.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:o,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:i,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(i.inherits)(a,r.a),t.a=a}},[458]);
//# sourceMappingURL=interactionbtngroup.e2e2f464a766310b27eb.js.map