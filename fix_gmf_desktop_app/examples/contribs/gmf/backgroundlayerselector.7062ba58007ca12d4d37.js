webpackJsonp([27],{502:function(e,o,n){n(17),e.exports=n(503)},503:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),n(504),n(18);var l=i(n(262)),a=i(n(30)),t=i(n(19)),r=(i(n(36)),i(n(16))),u=i(n(24));function i(e){return e&&e.__esModule?e:{default:e}}var m={};m.module=angular.module("gmfapp",[l.default.name,a.default.name,t.default.module.name]),m.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/themes?version=2&background=background"),m.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),m.MainController=function(e){e.loadThemes(),this.dimensions={},this.map=new r.default({layers:[],view:new u.default({center:[632464,185457],projection:"EPSG:21781",minZoom:3,zoom:3})})},m.MainController.$inject=["gmfThemes"],m.module.controller("MainController",m.MainController),o.default=m},504:function(e,o){}},[502]);
//# sourceMappingURL=backgroundlayerselector.7062ba58007ca12d4d37.js.map