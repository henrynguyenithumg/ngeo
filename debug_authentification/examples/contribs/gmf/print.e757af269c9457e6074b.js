webpackJsonp([8],{544:function(e,t,o){o(15),e.exports=o(545)},545:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o(546),o(17);var i=p(o(81)),r=p(o(28)),a=p(o(345)),n=p(o(19)),l=p(o(123)),s=p(o(35)),u=p(o(16)),c=p(o(21)),m=p(o(14)),d=p(o(7));function p(e){return e&&e.__esModule?e:{default:e}}var h={};h.module=angular.module("gmfapp",[i.default.name,r.default.name,a.default.name,n.default.module.name,l.default.name]),h.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/themes?version=2&background=background"),h.module.value("gmfPrintUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/printproxy"),h.module.value("authenticationBaseUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi"),h.module.value("gmfLayersUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/layers/"),h.constant("defaultTheme","Demo"),h.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),h.MainController=function(e,t){var o=this;e.loadThemes(),this.map=new u.default({layers:[new m.default({source:new d.default})],view:new c.default({projection:s.default,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:3})}),this.defaulPrintFieldstValues={comments:"Default comments example",legend:!0},this.themes=void 0,this.treeSource=void 0,e.getThemesObject().then(function(e){e&&(o.themes=e,o.treeSource=e[3])}),t.init(this.map)},h.MainController.$inject=["gmfThemes","ngeoFeatureOverlayMgr"],h.module.controller("MainController",h.MainController),t.default=h},546:function(e,t){},7:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),r=o(23),a=o(24);const n=function(e){const t=e||{},o=void 0!==t.projection?t.projection:"EPSG:3857",i=void 0!==t.tileGrid?t.tileGrid:Object(a.a)({extent:Object(a.b)(o),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});r.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:o,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:i,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(i.inherits)(n,r.a);var l=n;const s=function(e){const t=e||{};let o;o=void 0!==t.attributions?t.attributions:[s.ATTRIBUTION];const i=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",r=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";l.call(this,{attributions:o,cacheSize:t.cacheSize,crossOrigin:i,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:r,wrapX:t.wrapX})};Object(i.inherits)(s,l),s.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.';t.default=s}},[544]);
//# sourceMappingURL=print.e757af269c9457e6074b.js.map