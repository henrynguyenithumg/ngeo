webpackJsonp([14],{545:function(e,t,o){o(18),e.exports=o(546)},546:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),o(547),o(19);g(o(4));var r=g(o(145)),i=g(o(165)),a=g(o(351)),n=g(o(84)),l=(g(o(50)),g(o(31))),s=g(o(21)),c=g(o(111)),u=(g(o(175)),g(o(174)),g(o(82))),m=g(o(83)),d=(g(o(37)),g(o(16))),p=g(o(25)),f=g(o(15)),h=g(o(9));function g(e){return e&&e.__esModule?e:{default:e}}var v={};v.module=angular.module("gmfapp",[r.default.name,i.default.module.name,n.default.name,a.default.name,l.default.name,s.default.module.name,c.default.module.name,m.default.module.name]),v.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/themes?version=2&background=background"),v.module.value("authenticationBaseUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi"),v.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/themes?version=2&background=background"),v.module.value("gmfLayersUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/layers/"),v.constant("defaultTheme","Filters"),v.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),v.MainController=function(){function t(o,r,i,a,n,l){var s=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.scope_=o,i.loadThemes(),this.gmfTreeManager=a,this.map=new d.default({layers:[new f.default({source:new h.default})],view:new p.default({projection:"EPSG:21781",resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:2})}),r.setDatasourceMap(this.map),i.getThemesObject().then(function(e){if(e)for(var t=0,o=e.length;t<o;t++)if(175===e[t].id){s.gmfTreeManager.setFirstLevelGroups(e[t].children);break}}),this.toolGroup="mapTools",this.filterSelectorActive=!0;var c=new u.default(this,"filterSelectorActive");l.registerTool("dummyTools",c,!0),this.dummyActive=!1;var m=new u.default(this,"dummyActive");l.registerTool("dummyTools",m,!1),this.queryActive=!0;var g=new u.default(this,"queryActive");l.registerTool(this.toolGroup,g,!0),e('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})}return t.$inject=["$scope","gmfDataSourcesManager","gmfThemes","gmfTreeManager","ngeoDataSources","ngeoToolActivateMgr"],t}(),v.module.controller("MainController",v.MainController),t.default=v}).call(t,o(8))},547:function(e,t){},9:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=o(27),a=o(24);const n=function(e){const t=e||{},o=void 0!==t.projection?t.projection:"EPSG:3857",r=void 0!==t.tileGrid?t.tileGrid:a.a.createXYZ({extent:a.a.extentFromProjection(o),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});i.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:o,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:r,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(r.inherits)(n,i.a);var l=n;const s=function(e){const t=e||{};let o;o=void 0!==t.attributions?t.attributions:[s.ATTRIBUTION];const r=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",i=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";l.call(this,{attributions:o,cacheSize:t.cacheSize,crossOrigin:r,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:i,wrapX:t.wrapX})};Object(r.inherits)(s,l),s.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.';t.default=s}},[545]);
//# sourceMappingURL=filterselector.3156968c9e522f1f2734.js.map