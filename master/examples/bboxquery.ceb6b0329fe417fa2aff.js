webpackJsonp([12],{219:function(e,t){e.exports='<h3>Total: {{ $ctrl.result.total }}</h3> <ul class="nav nav-tabs" role=tablist> <li ng-repeat="source in $ctrl.result.sources" role=presentation ng-class="::{active: $index == 0}"> <a href="#{{ ::source.label }}" aria-controls="{{ ::source.label }}" role=tab data-toggle=tab> <span>{{ ::source.label }}</span> <span ng-switch=source.pending> <span ng-switch-when=true>(...)</span> <span ng-switch-default="">({{ ::source.features.length }})</span> </span> </a> </li> </ul> <div class=tab-content> <div ng-repeat="source in $ctrl.result.sources" role=tabpanel class=tab-pane ng-class="::{active: $index == 0}" id="{{ ::source.label }}"> <div ng-switch=source.features.length> <div ng-switch-when=0> <span ng-switch=source.pending> <h3 ng-switch-when=true>Pending...</h3> <h3 ng-switch-default="">No result</h3> </span> </div> <div ng-switch-default=""> <div ng-repeat="feature in ::source.features"> <h3>{{ ::feature.get(\'display_name\') }}</h3> <div ng-repeat="(key, value) in ::feature.getProperties()" ng-init="value = value !== undefined ? value : \'\'"> <span ng-if="::(key !== feature.getGeometryName() && key !== \'ngeo_feature_type_\')"> <span ng-bind=::key></span>: <span ng-bind=::value></span> </span> </div> </div> </div> </div> </div> </div> '},400:function(e,t,o){o(9),e.exports=o(401)},401:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o(402),o(10);var r=f(o(81)),n=f(o(128)),a=f(o(185)),i=f(o(15)),s=f(o(95)),l=f(o(289)),u=f(o(12)),c=f(o(16)),p=f(o(71)),d=f(o(17)),m=f(o(66)),h=f(o(5));function f(e){return e&&e.__esModule?e:{default:e}}var g={};g.module=angular.module("app",[n.default.module.name,i.default.name,s.default.name,l.default.name]),g.module.value("ngeoQueryOptions",{limit:20}),g.queryresultComponent={controller:"AppQueryresultController",template:o(219)},g.module.component("appQueryresult",g.queryresultComponent),g.QueryresultController=function(e){this.result=e},g.QueryresultController.$inject=["ngeoQueryResult"],g.module.controller("AppQueryresultController",g.QueryresultController),g.MainController=function(e,t){this.queryActive=!0;var o=new p.default({source:new m.default({url:"https://geomapfish-demo.camptocamp.net/2.2/wsgi/mapserv_proxy",params:{LAYERS:"information"}})}),n=new p.default({source:new m.default({url:"https://geomapfish-demo.camptocamp.net/2.2/wsgi/mapserv_proxy",params:{LAYERS:"bus_stop"}})});this.map=new u.default({layers:[new d.default({source:new h.default}),o,n],view:new c.default({projection:r.default,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:0})}),t.map=this.map,t.collection.push(new a.default({id:1,name:"bus_stop",visible:!0,wfsUrl:"https://geomapfish-demo.camptocamp.net/2.2/wsgi/mapserv_proxy",ogcLayers:[{name:"bus_stop",queryable:!0}]})),t.collection.push(new a.default({id:2,name:"information",visible:!0,wfsUrl:"https://geomapfish-demo.camptocamp.net/2.2/wsgi/mapserv_proxy",ogcLayers:[{name:"information",queryable:!0}]}))},g.MainController.$inject=["$scope","ngeoDataSources"],g.module.controller("MainController",g.MainController),t.default=g},402:function(e,t){},5:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),n=o(6);const a=function(e){const t=e||{};let o;o=void 0!==t.attributions?t.attributions:[a.ATTRIBUTION];const r=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",i=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";n.a.call(this,{attributions:o,cacheSize:t.cacheSize,crossOrigin:r,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:i,wrapX:t.wrapX})};Object(r.inherits)(a,n.a),a.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',t.default=a},6:function(e,t,o){"use strict";var r=o(0),n=o(19),a=o(20);const i=function(e){const t=e||{},o=void 0!==t.projection?t.projection:"EPSG:3857",r=void 0!==t.tileGrid?t.tileGrid:Object(a.a)({extent:Object(a.b)(o),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});n.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:o,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:r,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(r.inherits)(i,n.a),t.a=i}},[400]);
//# sourceMappingURL=bboxquery.ceb6b0329fe417fa2aff.js.map