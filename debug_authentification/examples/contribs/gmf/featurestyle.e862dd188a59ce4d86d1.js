webpackJsonp([15],{508:function(e,t,a){a(15),e.exports=a(509)},509:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a(510),a(17);var l=w(a(230)),o=w(a(28)),r=w(a(1)),i=w(a(79)),u=w(a(45)),n=w(a(13)),d=w(a(16)),s=w(a(21)),c=w(a(156)),f=w(a(32)),p=w(a(20)),h=w(a(26)),m=w(a(14)),O=w(a(44)),C=w(a(7)),g=w(a(40));function w(e){return e&&e.__esModule?e:{default:e}}var E={};E.module=angular.module("gmfapp",[l.default.name,o.default.name,u.default.module.name]),E.module.value("ngeoMeasureDecimals",2),E.constant("defaultTheme","Demo"),E.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),E.MainController=function(e,t){this.scope_=e,this.featureHelper_=t;var a=[],l={geometry:new p.default([-8458215,6672646])};l[i.default.COLOR]="#009D57",l[i.default.NAME]="Point1",l[i.default.SIZE]="6",a.push(new n.default(l));var o={geometry:new p.default([-8007848,6209744])};o[i.default.ANGLE]="0",o[i.default.COLOR]="#000000",o[i.default.IS_TEXT]=!0,o[i.default.NAME]="Text 1",o[i.default.SIZE]="16",o[i.default.STROKE]="2",a.push(new n.default(o));var u={geometry:new f.default([[-8321240,6523441],[-8103547,6726458],[-8091318,6408480],[-7973910,6631065]])};u[i.default.COLOR]="#0BA9CC",u[i.default.NAME]="LineString 1",u[i.default.STROKE]="4",a.push(new n.default(u));var w={geometry:new h.default([[[-8512027,6359560],[-8531595,6080718],[-8267428,6031798],[-8238077,6247045],[-8512027,6359560]]])};w[i.default.COLOR]="#4186F0",w[i.default.NAME]="Polygon 1",w[i.default.OPACITY]="0.5",w[i.default.SHOW_MEASURE]=!0,w[i.default.STROKE]="1",a.push(new n.default(w));var E={geometry:new h.default([[[-7952508,6096617],[-8051570,5959642],[-7848554,5926621],[-7754383,6025683],[-7952508,6096617]]])};E[i.default.COLOR]="#CCCCCC",E[i.default.NAME]="Polygon 2",E[i.default.OPACITY]="1",E[i.default.STROKE]="3",a.push(new n.default(E));var S={geometry:h.default.fromExtent([-7874848,6496535,-7730535,6384020])};S[i.default.COLOR]="#000000",S[i.default.IS_RECTANGLE]=!0,S[i.default.NAME]="Rectangle 1",S[i.default.OPACITY]="0.5",S[i.default.STROKE]="2",a.push(new n.default(S));var v={geometry:h.default.fromCircle(new c.default([-7691093,6166327],35e3),64)};v[i.default.COLOR]="#000000",v[i.default.IS_CIRCLE]=!0,v[i.default.NAME]="Circle 1",v[i.default.OPACITY]="0.5",v[i.default.STROKE]="2",a.push(new n.default(v));var T=new s.default({center:[-8174482,6288627],zoom:6});t.setProjection(r.default.assert(T.getProjection())),a.forEach(function(e){t.setStyle(e)},this),this.map=new d.default({layers:[new m.default({source:new C.default}),new O.default({source:new g.default({wrapX:!1,features:a})})],view:T}),this.selectedFeature=null,this.map.on("singleclick",this.handleMapSingleClick_,this)},E.MainController.$inject=["$scope","ngeoFeatureHelper"],E.MainController.prototype.handleMapSingleClick_=function(e){var t=e.pixel,a=this.map.forEachFeatureAtPixel(t,function(e){return e});this.selectedFeature&&this.featureHelper_.setStyle(this.selectedFeature),a?this.selectedFeature!==a&&(this.selectedFeature=a,this.featureHelper_.setStyle(a,!0)):this.selectedFeature=null,this.scope_.$apply()},E.module.controller("MainController",E.MainController),t.default=E},510:function(e,t){},7:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(0),o=a(23),r=a(24);const i=function(e){const t=e||{},a=void 0!==t.projection?t.projection:"EPSG:3857",l=void 0!==t.tileGrid?t.tileGrid:Object(r.a)({extent:Object(r.b)(a),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});o.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:a,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:l,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(l.inherits)(i,o.a);var u=i;const n=function(e){const t=e||{};let a;a=void 0!==t.attributions?t.attributions:[n.ATTRIBUTION];const l=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",o=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";u.call(this,{attributions:a,cacheSize:t.cacheSize,crossOrigin:l,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:o,wrapX:t.wrapX})};Object(l.inherits)(n,u),n.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.';t.default=n}},[508]);
//# sourceMappingURL=featurestyle.e862dd188a59ce4d86d1.js.map