webpackJsonp([6],{583:function(e,t,o){o(18),e.exports=o(584)},584:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o(585),o(19);g(o(4));var i=g(o(31)),a=g(o(378)),r=g(o(21)),n=(g(o(191)),g(o(122))),l=(g(o(37)),g(o(126))),s=g(o(16)),c=g(o(25)),u=g(o(15)),m=g(o(9)),d=g(o(52)),p=g(o(32)),h=g(o(33)),f=g(o(13));function g(e){return e&&e.__esModule?e:{default:e}}var w={};w.module=angular.module("gmfapp",[i.default.name,a.default.name,r.default.module.name,l.default.name]),w.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/themes?version=2&background=background"),w.module.value("fulltextsearchUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/fulltextsearch?limit=30&partitionlimit=5&interface=desktop"),w.module.value("gmfLayersUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/layers/"),w.constant("defaultTheme","Demo"),w.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),w.MainController=function(e,t,o){e.loadThemes(),t.init(this.map),this.searchDatasources=[{groupValues:["osm","district"],groupActions:[],labelKey:"label",projection:"EPSG:21781",bloodhoundOptions:{remote:{rateLimitWait:250}},url:"https://geomapfish-demo.camptocamp.net/2.2/wsgi/fulltextsearch"}];var i=new p.default({color:[255,255,255,.6]}),a=new h.default({color:[255,0,0,1],width:2});this.searchStyles={osm:new f.default({fill:i,image:new d.default({fill:i,radius:5,stroke:a}),stroke:a})},this.searchOptions={minLength:2},this.inputValue="",this.map=new s.default({layers:[new u.default({source:new m.default})],view:new c.default({center:[0,0],zoom:4})}),this.searchIsReady=function(){o.notify({msg:"gmf-search initialized",target:angular.element("#message"),type:n.default.Type.SUCCESS})}},w.MainController.$inject=["gmfThemes","ngeoFeatureOverlayMgr","ngeoNotification"],w.module.controller("MainController",w.MainController),t.default=w},585:function(e,t){},9:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),a=o(27),r=o(24);const n=function(e){const t=e||{},o=void 0!==t.projection?t.projection:"EPSG:3857",i=void 0!==t.tileGrid?t.tileGrid:r.a.createXYZ({extent:r.a.extentFromProjection(o),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});a.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:o,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:i,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(i.inherits)(n,a.a);var l=n;const s=function(e){const t=e||{};let o;o=void 0!==t.attributions?t.attributions:[s.ATTRIBUTION];const i=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",a=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";l.call(this,{attributions:o,cacheSize:t.cacheSize,crossOrigin:i,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:a,wrapX:t.wrapX})};Object(i.inherits)(s,l),s.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.';t.default=s}},[583]);
//# sourceMappingURL=search.4b98b40dc276b826c3ad.js.map