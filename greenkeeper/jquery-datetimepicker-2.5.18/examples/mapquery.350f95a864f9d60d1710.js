webpackJsonp([18],{4:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=o(5);const n=function(e){const t=e||{};let o;o=void 0!==t.attributions?t.attributions:[n.ATTRIBUTION];const r=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",a=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";i.a.call(this,{attributions:o,cacheSize:t.cacheSize,crossOrigin:r,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:a,wrapX:t.wrapX})};Object(r.inherits)(n,i.a),n.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',t.default=n},445:function(e,t,o){o(8),e.exports=o(446)},446:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o(447),o(9);var r=y(o(83)),i=y(o(127)),n=y(o(179)),a=y(o(15)),l=y(o(96)),u=y(o(123)),s=y(o(106)),c=y(o(283)),p=y(o(11)),m=y(o(16)),d=y(o(73)),f=y(o(17)),h=y(o(67)),v=y(o(4));function y(e){return e&&e.__esModule?e:{default:e}}var g={};g.module=angular.module("app",[i.default.module.name,a.default.name,l.default.name,s.default.module.name,c.default.name]),g.module.value("ngeoQueryOptions",{limit:20}),g.queryresultComponent={controller:"AppQueryresultController",controllerAs:"qrCtrl",templateUrl:"partials/queryresult.html"},g.module.component("appQueryresult",g.queryresultComponent),g.QueryresultController=function(e){this.result=e},g.QueryresultController.$inject=["ngeoQueryResult"],g.module.controller("AppQueryresultController",g.QueryresultController),g.MainController=function(e,t,o){this.dummyActive=!1,this.queryActive=!0;var i=new d.default({source:new h.default({url:"https://geomapfish-demo.camptocamp.net/2.2/wsgi/mapserv_proxy",params:{LAYERS:"bus_stop"}})}),a=new d.default({source:new h.default({url:"https://geomapfish-demo.camptocamp.net/2.2/wsgi/mapserv_proxy",params:{LAYERS:"information"}})});this.map=new p.default({layers:[new f.default({source:new v.default}),a,i],view:new m.default({projection:r.default,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:0})}),t.map=this.map,t.collection.push(new n.default({id:1,name:"bus_stop",visible:!0,wmsUrl:"https://geomapfish-demo.camptocamp.net/2.2/wsgi/mapserv_proxy",ogcLayers:[{name:"bus_stop",queryable:!0}]})),t.collection.push(new n.default({id:2,name:"information",visible:!0,wmsUrl:"https://geomapfish-demo.camptocamp.net/2.2/wsgi/mapserv_proxy",ogcLayers:[{name:"information",queryable:!0}]}));var l=new u.default(this,"queryActive");o.registerTool("mapTools",l,!0);var s=new u.default(this,"dummyActive");o.registerTool("mapTools",s)},g.MainController.$inject=["$scope","ngeoDataSources","ngeoToolActivateMgr"],g.MainController.prototype.getSetDummyActive=function(e){if(void 0===e)return this.dummyActive;this.dummyActive=e},g.module.controller("MainController",g.MainController),t.default=g},447:function(e,t){},5:function(e,t,o){"use strict";var r=o(0),i=o(19),n=o(20);const a=function(e){const t=e||{},o=void 0!==t.projection?t.projection:"EPSG:3857",r=void 0!==t.tileGrid?t.tileGrid:Object(n.a)({extent:Object(n.b)(o),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});i.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:o,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:r,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(r.inherits)(a,i.a),t.a=a}},[445]);
//# sourceMappingURL=mapquery.350f95a864f9d60d1710.js.map