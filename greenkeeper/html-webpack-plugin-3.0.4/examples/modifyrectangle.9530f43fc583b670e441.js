webpackJsonp([20],{489:function(e,t,o){o(9),e.exports=o(490)},490:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o(491),o(10);var i=g(o(276)),r=g(o(12)),n=g(o(16)),a=g(o(17)),l=g(o(29)),u=g(o(5)),s=g(o(25)),c=g(o(22)),d=g(o(33)),f=g(o(18)),p=g(o(23)),w=g(o(59)),h=g(o(41)),m=g(o(42)),v=g(o(15));function g(e){return e&&e.__esModule?e:{default:e}}var b={},y=angular.module("app",[v.default.name]);b.MainController=function(){this.map=new r.default({layers:[new a.default({source:new u.default})],view:new n.default({center:[-10997148,4569099],zoom:4})});var e=this.map,t=new c.default([[[-9e6,4e6],[-11e6,4e6],[-11e6,6e6],[-9e6,6e6]]]);this.features=new d.default,this.features.push(new f.default({geometry:t,isRectangle:!0}));var o,v=((o={}).Polygon=[new p.default({fill:new h.default({color:[255,255,255,.5]})}),new p.default({stroke:new m.default({color:[255,255,255,1],width:5})}),new p.default({stroke:new m.default({color:[0,153,255,1],width:3})})],o.Point=[new p.default({image:new w.default({radius:7,fill:new h.default({color:[0,153,255,1]}),stroke:new m.default({color:[255,255,255,.75],width:1.5})}),zIndex:1e5})],o.GeometryCollection=o.Polygon.concat(o.Point),function(e,t){return o[e.getGeometry().getType()]}),g=new s.default({features:this.features});new l.default({source:g}).setMap(e),this.interaction=new i.default({features:this.features,style:v});var b=this.interaction;e.addInteraction(b),b.setActive(!0)},y.controller("MainController",b.MainController),t.default=b},491:function(e,t){},5:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),r=o(6);const n=function(e){const t=e||{};let o;o=void 0!==t.attributions?t.attributions:[n.ATTRIBUTION];const i=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",a=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";r.a.call(this,{attributions:o,cacheSize:t.cacheSize,crossOrigin:i,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:a,wrapX:t.wrapX})};Object(i.inherits)(n,r.a),n.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',t.default=n},6:function(e,t,o){"use strict";var i=o(0),r=o(19),n=o(20);const a=function(e){const t=e||{},o=void 0!==t.projection?t.projection:"EPSG:3857",i=void 0!==t.tileGrid?t.tileGrid:Object(n.a)({extent:Object(n.b)(o),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});r.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:o,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:i,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(i.inherits)(a,r.a),t.a=a}},[489]);
//# sourceMappingURL=modifyrectangle.9530f43fc583b670e441.js.map