webpackJsonp([17],{502:function(e,t,o){o(15),e.exports=o(503)},503:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),o(504),o(17);var r=b(o(141)),a=b(o(322)),i=b(o(81)),n=b(o(48)),l=b(o(28)),s=b(o(19)),u=b(o(45)),c=b(o(95)),d=b(o(80)),m=b(o(35)),p=b(o(18)),f=b(o(16)),h=b(o(21)),g=b(o(14)),v=b(o(44)),w=b(o(7)),T=b(o(40));function b(e){return e&&e.__esModule?e:{default:e}}var j={};j.module=angular.module("gmfapp",[r.default.name,a.default.name,i.default.name,n.default.module.name,l.default.name,s.default.module.name,u.default.module.name,d.default.module.name]),j.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/themes?version=2&background=background"),j.module.value("authenticationBaseUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi"),j.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/themes?version=2&background=background"),j.module.value("gmfLayersUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/layers/"),j.constant("defaultTheme","Edit"),j.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),j.MainController=function(t,o,r,a,i,n){var l=this;this.scope_=t,this.gmfUser=a,this.featureHelper_=i,o.loadThemes(),this.gmfTreeManager=r,this.vectorLayer=new v.default({source:new T.default({wrapX:!1,features:new p.default}),style:function(e,t){return i.createEditingStyles(e)}}),this.map=new f.default({layers:[new g.default({source:new w.default})],view:new h.default({projection:m.default,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:2})}),o.getThemesObject().then(function(e){if(e){for(var t=0,o=e.length;t<o;t++)if(73===e[t].id){l.gmfTreeManager.setFirstLevelGroups(e[t].children);break}l.map.addLayer(l.vectorLayer)}}),this.editFeatureSelectorActive=!0;var s=new c.default(this,"editFeatureSelectorActive");n.registerTool("mapTools",s,!0),this.dummyActive=!1;var u=new c.default(this,"dummyActive");n.registerTool("mapTools",u,!1),e('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})},j.MainController.$inject=["$scope","gmfThemes","gmfTreeManager","gmfUser","ngeoFeatureHelper","ngeoToolActivateMgr"],j.module.controller("MainController",j.MainController),t.default=j}).call(t,o(6))},504:function(e,t){},7:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),a=o(23),i=o(24);const n=function(e){const t=e||{},o=void 0!==t.projection?t.projection:"EPSG:3857",r=void 0!==t.tileGrid?t.tileGrid:Object(i.a)({extent:Object(i.b)(o),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});a.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:o,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:r,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(r.inherits)(n,a.a);var l=n;const s=function(e){const t=e||{};let o;o=void 0!==t.attributions?t.attributions:[s.ATTRIBUTION];const r=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",a=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";l.call(this,{attributions:o,cacheSize:t.cacheSize,crossOrigin:r,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:a,wrapX:t.wrapX})};Object(r.inherits)(s,l),s.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.';t.default=s}},[502]);
//# sourceMappingURL=editfeatureselector.f56c0f91f8cc467ec0b9.js.map