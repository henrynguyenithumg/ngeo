webpackJsonp([23],{599:function(e,n,a){a(15),e.exports=a(600)},600:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),a(601),a(17);var o=l(a(362)),t=l(a(47));function l(e){return e&&e.__esModule?e:{default:e}}var r={};r.module=angular.module("gmfapp",[t.default.module.name,o.default.name]),r.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/themes?version=2&background=background"),r.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),r.MainController=function(e,n,a){this.filter=function(e){return"Enseignement"!==e.name},this.manager=a,n.loadThemes()},r.MainController.$inject=["$http","gmfThemes","gmfThemeManager"],r.module.controller("MainController",r.MainController),n.default=r},601:function(e,n){}},[599]);
//# sourceMappingURL=themeselector.edb2dc1f37ea89fb8798.js.map