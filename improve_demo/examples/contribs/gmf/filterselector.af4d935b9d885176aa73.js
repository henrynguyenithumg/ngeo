!function(e){function t(t){for(var a,l,u=t[0],i=t[1],s=t[2],f=0,m=[];f<u.length;f++)l=u[f],r[l]&&m.push(r[l][0]),r[l]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(c&&c(t);m.length;)m.shift()();return n.push.apply(n,s||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],a=!0,u=1;u<o.length;u++){var i=o[u];0!==r[i]&&(a=!1)}a&&(n.splice(t--,1),e=l(l.s=o[0]))}return e}var a={},r={18:0},n=[];function l(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=a,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},l.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var c=i;n.push([411,0]),o()}({410:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),o(605),o(203);var a=b(o(220)),r=b(o(213)),n=b(o(329)),l=b(o(136)),u=b(o(105)),i=b(o(70)),s=b(o(57)),c=b(o(165)),f=b(o(204)),m=b(o(205)),d=b(o(151)),p=b(o(138)),g=b(o(83)),h=b(o(52)),v=b(o(61)),w=b(o(49)),y=b(o(79));function b(e){return e&&e.__esModule?e:{default:e}}var T={};T.module=angular.module("gmfapp",["gettext",a.default.name,r.default.module.name,l.default.name,u.default.module.name,n.default.name,i.default.name,s.default.module.name,c.default.module.name,p.default.module.name,f.default.name,m.default.name]),T.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/themes?version=2&background=background"),T.module.value("authenticationBaseUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi"),T.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/themes?version=2&background=background"),T.module.value("gmfLayersUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/layers/"),T.module.constant("defaultTheme","Filters"),T.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),T.MainController=function(){function t(o,a,r,n,l,u){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.scope_=o,r.loadThemes(),this.gmfTreeManager=n,this.map=new h.default({layers:[new w.default({source:new y.default})],view:new v.default({projection:g.default,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:2})}),a.setDatasourceMap(this.map),r.getThemesObject().then(function(e){if(e)for(var t=0,o=e.length;t<o;t++)if(175===e[t].id){i.gmfTreeManager.setFirstLevelGroups(e[t].children);break}}),this.toolGroup="mapTools",this.filterSelectorActive=!0;var s=new d.default(this,"filterSelectorActive");u.registerTool("dummyTools",s,!0),this.dummyActive=!1;var c=new d.default(this,"dummyActive");u.registerTool("dummyTools",c,!1),this.queryActive=!0;var f=new d.default(this,"queryActive");u.registerTool(this.toolGroup,f,!0),e('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})}return t.$inject=["$scope","gmfDataSourcesManager","gmfThemes","gmfTreeManager","ngeoDataSources","ngeoToolActivateMgr"],t}(),T.module.controller("MainController",T.MainController),t.default=T}).call(this,o(24))},411:function(e,t,o){o(54),o(53),e.exports=o(410)},605:function(e,t){}});
//# sourceMappingURL=filterselector.af4d935b9d885176aa73.js.map