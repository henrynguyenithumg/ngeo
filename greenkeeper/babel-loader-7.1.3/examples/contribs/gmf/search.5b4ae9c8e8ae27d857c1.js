webpackJsonp([6],{587:function(e,t,o){o(14),e.exports=o(588)},588:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o(589),o(16);var i=v(o(27)),a=v(o(351)),r=v(o(18)),n=v(o(174)),l=v(o(111)),s=v(o(34)),u=v(o(121)),c=v(o(15)),m=v(o(20)),d=v(o(13)),p=v(o(7)),h=v(o(50)),f=v(o(29)),g=v(o(30)),w=v(o(10));function v(e){return e&&e.__esModule?e:{default:e}}var b={};b.module=angular.module("gmfapp",[i.default.name,a.default.name,r.default.module.name,u.default.name,n.default.module.name]),b.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/themes?version=2&background=background"),b.module.value("fulltextsearchUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/fulltextsearch?limit=30&partitionlimit=5&interface=desktop"),b.module.value("gmfLayersUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/layers/"),b.constant("defaultTheme","Demo"),b.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),b.MainController=function(e,t,o){e.loadThemes(),t.init(this.map),this.searchDatasources=[{groupValues:["osm","district"],groupActions:[],labelKey:"label",projection:s.default,bloodhoundOptions:{remote:{rateLimitWait:250}},url:"https://geomapfish-demo.camptocamp.net/2.2/wsgi/fulltextsearch"}];var i=new f.default({color:[255,255,255,.6]}),a=new g.default({color:[255,0,0,1],width:2});this.searchStyles={osm:new w.default({fill:i,image:new h.default({fill:i,radius:5,stroke:a}),stroke:a})},this.searchOptions={minLength:2},this.inputValue="",this.map=new c.default({layers:[new d.default({source:new p.default})],view:new m.default({center:[0,0],zoom:4})}),this.searchIsReady=function(){o.notify({msg:"gmf-search initialized",target:angular.element("#message"),type:l.default.Type.SUCCESS})}},b.MainController.$inject=["gmfThemes","ngeoFeatureOverlayMgr","ngeoNotification"],b.module.controller("MainController",b.MainController),t.default=b},589:function(e,t){},7:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),a=o(22),r=o(23);const n=function(e){const t=e||{},o=void 0!==t.projection?t.projection:"EPSG:3857",i=void 0!==t.tileGrid?t.tileGrid:Object(r.a)({extent:Object(r.b)(o),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});a.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:o,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:i,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(i.inherits)(n,a.a);var l=n;const s=function(e){const t=e||{};let o;o=void 0!==t.attributions?t.attributions:[s.ATTRIBUTION];const i=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",a=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";l.call(this,{attributions:o,cacheSize:t.cacheSize,crossOrigin:i,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:a,wrapX:t.wrapX})};Object(i.inherits)(s,l),s.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.';t.default=s}},[587]);
//# sourceMappingURL=search.5b4ae9c8e8ae27d857c1.js.map