webpackJsonp([13],{549:function(e,t,o){o(14),e.exports=o(550)},550:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),o(551),o(16);var a=v(o(161)),r=v(o(329)),i=v(o(78)),n=v(o(47)),l=v(o(27)),s=v(o(18)),u=v(o(100)),c=v(o(171)),m=v(o(170)),d=v(o(34)),p=v(o(15)),f=v(o(20)),h=v(o(13)),g=v(o(7));function v(e){return e&&e.__esModule?e:{default:e}}var w={};w.module=angular.module("gmfapp",[a.default.module.name,r.default.name,i.default.name,n.default.module.name,l.default.name,s.default.module.name,u.default.module.name,c.default.name,m.default.name]),w.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/themes?version=2&background=background"),w.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/themes?version=2&background=background"),w.module.value("gmfLayersUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/layers/"),w.module.value("gmfExternalOGCServers",[{name:"Swiss Topo WMS",type:"WMS",url:"https://wms.geo.admin.ch/?lang=fr"},{name:"ASIT VD",type:"WMTS",url:"https://ows.asitvd.ch/wmts/1.0.0/WMTSCapabilities.xml"},{name:"Swiss Topo WMTS",type:"WMTS",url:"https://wmts.geo.admin.ch/1.0.0/WMTSCapabilities.xml?lang=fr"}]),w.constant("defaultTheme","Filters"),w.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),w.MainController=function(){function t(o,a,r,i,n){var l=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.scope_=o,r.loadThemes(),this.gmfTreeManager=i,this.map=new p.default({layers:[new h.default({source:new g.default})],view:new f.default({projection:d.default,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:2})}),a.setDatasourceMap(this.map),r.getThemesObject().then(function(e){if(e)for(var t=0,o=e.length;t<o;t++)if(175===e[t].id){l.gmfTreeManager.setFirstLevelGroups(e[t].children);break}}),this.queryActive=!0,e('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})}return t.$inject=["$scope","gmfDataSourcesManager","gmfThemes","gmfTreeManager","ngeoDataSources"],t}(),w.module.controller("MainController",w.MainController),t.default=w}).call(t,o(6))},551:function(e,t){},7:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(0),r=o(22),i=o(23);const n=function(e){const t=e||{},o=void 0!==t.projection?t.projection:"EPSG:3857",a=void 0!==t.tileGrid?t.tileGrid:Object(i.a)({extent:Object(i.b)(o),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});r.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:o,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:a,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(a.inherits)(n,r.a);var l=n;const s='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.';t.ATTRIBUTION=s;const u=function(e){const t=e||{};let o;o=void 0!==t.attributions?t.attributions:[s];const a=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",r=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";l.call(this,{attributions:o,cacheSize:t.cacheSize,crossOrigin:a,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:r,wrapX:t.wrapX})};Object(a.inherits)(u,l);t.default=u}},[549]);
//# sourceMappingURL=importdatasource.09036f4e7290cd2b90f0.js.map