webpackJsonp([18],{499:function(e,t,i){i(15),e.exports=i(500)},500:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),i(501),i(17);var o=g(i(35)),r=g(i(141)),n=g(i(167)),a=g(i(28)),l=g(i(13)),s=g(i(16)),u=g(i(21)),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}(i(3)),h=g(i(20)),d=g(i(14)),p=g(i(99)),f=g(i(7)),m=g(i(100));function g(e){return e&&e.__esModule?e:{default:e}}var _={};_.module=angular.module("gmfapp",[r.default.name,n.default.module.name,a.default.name]),_.module.value("authenticationBaseUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi"),_.module.value("gmfLayersUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/layers/"),_.constant("defaultTheme","Demo"),_.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),_.MainController=function(t,i,r){this.scope_=t,this.editFeature_=i,this.gmfUser=r,this.wmsSource_=new m.default({url:"https://geomapfish-demo.camptocamp.net/2.2/wsgi/mapserv_proxy",params:{LAYERS:"point"}}),this.wmsLayer_=new p.default({source:this.wmsSource_}),this.pixelBuffer_=10,this.layerId_=113,this.feature=null,this.pending=!1,this.map=new s.default({layers:[new d.default({source:new f.default}),this.wmsLayer_],view:new u.default({projection:o.default,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:2})}),this.map.on("singleclick",this.handleMapSingleClick_,this),e('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})},_.MainController.$inject=["$scope","gmfEditFeature","gmfUser"],_.MainController.prototype.handleMapSingleClick_=function(e){var t=e.coordinate,i=this.map.getView().getResolution()*this.pixelBuffer_,o=c.buffer([t[0],t[1],t[0],t[1]],i);this.editFeature_.getFeaturesInExtent([this.layerId_],o).then(this.handleGetFeatures_.bind(this)),this.feature=null,this.pending=!0,this.scope_.$apply()},_.MainController.prototype.handleGetFeatures_=function(e){this.pending=!1,e.length&&(this.feature=e[0])},_.MainController.prototype.insertFeature=function(){this.pending=!0;var e=this.map,t=e.getView(),i=-50*t.getResolution(),o=e.getSize(),r=c.buffer(t.calculateExtent(o),i),n=c.getBottomLeft(r),a=c.getTopRight(r),s=n[0],u=n[1],d=a[0],p=d-s,f=a[1]-u,m=[s+Math.random()*p,d+Math.random()*f],g=new l.default({geometry:new h.default(m),name:"New point"});this.editFeature_.insertFeatures(this.layerId_,[g]).then(this.handleEditFeature_.bind(this))},_.MainController.prototype.updateFeature=function(){console.assert(this.feature),this.pending=!0,this.feature.set("name","Updated name"),this.editFeature_.updateFeature(this.layerId_,this.feature).then(this.handleEditFeature_.bind(this)),this.feature=null},_.MainController.prototype.deleteFeature=function(){console.assert(this.feature),this.editFeature_.deleteFeature(this.layerId_,this.feature).then(this.handleEditFeature_.bind(this)),this.feature=null},_.MainController.prototype.handleEditFeature_=function(e){this.pending=!1,this.refreshWMSLayer_()},_.MainController.prototype.refreshWMSLayer_=function(){this.wmsSource_.updateParams({random:Math.random()})},_.module.controller("MainController",_.MainController),t.default=_}).call(t,i(6))},501:function(e,t){},7:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(0),r=i(23),n=i(24);const a=function(e){const t=e||{},i=void 0!==t.projection?t.projection:"EPSG:3857",o=void 0!==t.tileGrid?t.tileGrid:Object(n.a)({extent:Object(n.b)(i),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});r.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:i,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:o,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(o.inherits)(a,r.a);var l=a;const s=function(e){const t=e||{};let i;i=void 0!==t.attributions?t.attributions:[s.ATTRIBUTION];const o=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",r=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";l.call(this,{attributions:i,cacheSize:t.cacheSize,crossOrigin:o,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:r,wrapX:t.wrapX})};Object(o.inherits)(s,l),s.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.';t.default=s}},[499]);
//# sourceMappingURL=editfeature.2eb579dddd64c1c31a16.js.map