webpackJsonp([13],{514:function(e,t,o){o(15),e.exports=o(515)},515:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),o(516),o(17);var a=v(o(163)),r=v(o(329)),i=v(o(81)),n=v(o(48)),l=v(o(28)),s=v(o(19)),u=v(o(103)),c=v(o(173)),m=v(o(172)),d=v(o(35)),p=v(o(16)),f=v(o(21)),h=v(o(14)),g=v(o(7));function v(e){return e&&e.__esModule?e:{default:e}}var T={};T.module=angular.module("gmfapp",[a.default.module.name,r.default.name,i.default.name,n.default.module.name,l.default.name,s.default.module.name,u.default.module.name,c.default.name,m.default.name]),T.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/themes?version=2&background=background"),T.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/themes?version=2&background=background"),T.module.value("gmfLayersUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/layers/"),T.module.value("gmfExternalOGCServers",[{name:"Swiss Topo WMS",type:"WMS",url:"https://wms.geo.admin.ch/?lang=fr"},{name:"ASIT VD",type:"WMTS",url:"https://ows.asitvd.ch/wmts/1.0.0/WMTSCapabilities.xml"},{name:"Swiss Topo WMTS",type:"WMTS",url:"https://wmts.geo.admin.ch/1.0.0/WMTSCapabilities.xml?lang=fr"}]),T.constant("defaultTheme","Filters"),T.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),T.MainController=function(){function t(o,a,r,i,n){var l=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.scope_=o,r.loadThemes(),this.gmfTreeManager=i,this.map=new p.default({layers:[new h.default({source:new g.default})],view:new f.default({projection:d.default,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:2})}),a.setDatasourceMap(this.map),r.getThemesObject().then(function(e){if(e)for(var t=0,o=e.length;t<o;t++)if(175===e[t].id){l.gmfTreeManager.setFirstLevelGroups(e[t].children);break}}),this.queryActive=!0,e('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})}return t.$inject=["$scope","gmfDataSourcesManager","gmfThemes","gmfTreeManager","ngeoDataSources"],t}(),T.module.controller("MainController",T.MainController),t.default=T}).call(t,o(6))},516:function(e,t){},7:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(0),r=o(23),i=o(24);const n=function(e){const t=e||{},o=void 0!==t.projection?t.projection:"EPSG:3857",a=void 0!==t.tileGrid?t.tileGrid:Object(i.a)({extent:Object(i.b)(o),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});r.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:o,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:a,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(a.inherits)(n,r.a);var l=n;const s=function(e){const t=e||{};let o;o=void 0!==t.attributions?t.attributions:[s.ATTRIBUTION];const a=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",r=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";l.call(this,{attributions:o,cacheSize:t.cacheSize,crossOrigin:a,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:r,wrapX:t.wrapX})};Object(a.inherits)(s,l),s.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.';t.default=s}},[514]);
//# sourceMappingURL=importdatasource.ffd0dabb9cdcdf88c3b5.js.map