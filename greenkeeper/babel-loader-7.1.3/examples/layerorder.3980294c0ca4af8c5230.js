webpackJsonp([29],{107:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(106));function o(e){return e&&e.__esModule?e:{default:e}}var a=[4e3,3750,3500,3250,3e3,2750,2500,2250,2e3,1750,1500,1250,1e3,750,650,500,250,100,50,20,10,5,2.5,2,1.5,1,.5],s=new(o(r(123)).default)({extent:[42e4,3e4,9e5,35e4],resolutions:a,matrixIds:a.map(function(e,t){return""+t})}),i=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{attributions:"géodonnées &copy; Etat de Vaud & &copy; contributeurs OpenStreetMap",url:"https://ows{1-4}.asitvd.ch/wmts/1.0.0/{Layer}/default/default/0/21781/{TileMatrix}/{TileRow}/{TileCol}.png",projection:"EPSG:21781",requestEncoding:"REST",layer:e.layer,style:"default",matrixSet:"21781",format:"image/png",tileGrid:s}))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default),t}();t.default=i},443:function(e,t,r){r(8),e.exports=r(444)},444:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(445),r(9);var n=d(r(15)),o=d(r(292)),a=d(r(446)),s=d(r(107)),i=d(r(81)),u=d(r(11)),l=d(r(16)),c=d(r(17)),f=d(r(145));function d(e){return e&&e.__esModule?e:{default:e}}var p={};p.module=angular.module("app",[n.default.name,o.default.name]),p.MainController=function(e){var t=new c.default({source:new s.default({layer:"asitvd.fond_couleur"})});t.set("name","asitvd");var r=new c.default({source:new f.default({url:"https://wms.geo.admin.ch",params:{LAYERS:"ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill"},serverType:"mapserver"})});r.set("name","Boundaries");var n=new c.default({source:new f.default({url:"https://wms.geo.admin.ch",params:{LAYERS:"ch.swisstopo.geologie-gravimetrischer_atlas"},serverType:"mapserver"})});n.set("name","Water bodies");var o=new c.default({source:new f.default({url:"https://wms.geo.admin.ch",params:{LAYERS:"ch.swisstopo.dreiecksvermaschung"},serverType:"mapserver"})});o.set("name","Cities"),this.map=new u.default({layers:[t,r,n,o],view:new l.default({projection:i.default,resolutions:[1e3,500,200,100,50,20,10,5,2.5,2,1,.5],center:[6e5,2e5],zoom:1})});var d=this.map;this.roads_=new c.default({source:new f.default({url:"https://wms.geo.admin.ch",params:{LAYERS:"ch.bafu.laerm-strassenlaerm_tag"},serverType:"mapserver"})}),this.roads_.set("name","Roads"),this.selectedLayers=[];var p=this.selectedLayers;(0,a.default)(d.getLayers().getArray(),p,!0,e,function(e){return e!==t}),e.$watchCollection(function(){return p},function(){d.render()})},p.MainController.$inject=["$scope"],p.MainController.prototype.toggleRoadsLayer=function(e){if(void 0===e)return this.map.getLayers().getArray().indexOf(this.roads_)>=0;e?this.map.addLayer(this.roads_):this.map.removeLayer(this.roads_)},p.module.controller("MainController",p.MainController),t.default=p},445:function(e,t){},446:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(2),a=(n=o)&&n.__esModule?n:{default:n};t.default=function(e,t,r,n,o){var s=n.$watchCollection(function(){return e},function(){var n=void 0,a=void 0,s=void 0;if(r)for(n=e.length-1,s=0;n>=0;--n)o(e[n])&&(t[s++]=e[n]);else for(n=0,a=e.length,s=0;n<a;++n)o(e[n])&&(t[s++]=e[n]);t.length=s}),i=n.$watchCollection(function(){return t},function(){var n=void 0,s=void 0,i=void 0;if(r){for(n=0,s=e.length,i=t.length-1;n<s;++n)o(e[n])&&(e[n]=t[i--]);a.default.assert(-1==i)}else{for(n=0,s=e.length,i=0;n<s;++n)o(e[n])&&(e[n]=t[i++]);a.default.assert(i==t.length)}});return function(){s(),i()}}}},[443]);
//# sourceMappingURL=layerorder.3980294c0ca4af8c5230.js.map