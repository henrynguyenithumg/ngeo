webpackJsonp([32],{107:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(89));function n(e){return e&&e.__esModule?e:{default:e}}var a=[4e3,3750,3500,3250,3e3,2750,2500,2250,2e3,1750,1500,1250,1e3,750,650,500,250,100,50,20,10,5,2.5,2,1.5,1,.5],l=new(n(r(114)).default)({extent:[42e4,3e4,9e5,35e4],resolutions:a,matrixIds:a.map(function(e,t){return""+t})}),u=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{attributions:"géodonnées &copy; Etat de Vaud & &copy; contributeurs OpenStreetMap",url:"https://ows{1-4}.asitvd.ch/wmts/1.0.0/{Layer}/default/default/0/21781/{TileMatrix}/{TileRow}/{TileCol}.png",projection:"EPSG:21781",requestEncoding:"REST",layer:e.layer,style:"default",matrixSet:"21781",format:"image/png",tileGrid:l}))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),t}();t.default=u},410:function(e,t,r){r(10),e.exports=r(411)},411:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(412),r(11);var o=s(r(107)),n=(s(r(82)),s(r(13))),a=s(r(18)),l=s(r(53)),u=s(r(15)),i=s(r(59)),c=(s(r(1)),s(r(17)));function s(e){return e&&e.__esModule?e:{default:e}}var p={};p.module=angular.module("app",[c.default.name]),p.backgroundlayerComponent={bindings:{map:"=appBackgroundlayerMap"},templateUrl:"partials/backgroundlayer.html",controller:"AppBackgroundlayerController",controllerAs:"ctrl"},p.module.component("appBackgroundlayer",p.backgroundlayerComponent),p.BackgroundlayerController=function(e,t){var r=this;this.map,this.bgLayers=void 0,this.bgLayer=null,e.get("data/backgroundlayers.json").then(function(e){r.bgLayers=e.data,r.bgLayer=r.bgLayers[0]}),this.backgroundLayerMgr_=t},p.BackgroundlayerController.$inject=["$http","ngeoBackgroundLayerMgr"],p.BackgroundlayerController.prototype.change=function(){var e=this.bgLayer,t=this.getLayer_(e.name);this.backgroundLayerMgr_.set(this.map,t)},p.BackgroundlayerController.prototype.getLayer_=function(e){if("blank"===e)return new u.default;var t=new o.default({layer:e});return new u.default({source:t})},p.module.controller("AppBackgroundlayerController",p.BackgroundlayerController),p.MainController=function(e){this.map=new n.default({view:new a.default({projection:"EPSG:21781",resolutions:[1e3,500,200,100,50,20,10,5,2.5,2,1,.5],center:[6e5,2e5],zoom:1})});var t=new l.default({source:new i.default({url:"https://wms.geo.admin.ch",params:{LAYERS:"ch.swisstopo.dreiecksvermaschung"},serverType:"mapserver"})});this.map.addLayer(t)},p.MainController.$inject=["$scope"],p.module.controller("MainController",p.MainController),t.default=p},412:function(e,t){}},[410]);
//# sourceMappingURL=backgroundlayer.873316af864b9ba0f8fa.js.map