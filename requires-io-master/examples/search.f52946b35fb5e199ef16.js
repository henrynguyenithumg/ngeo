!function(e){function t(t){for(var n,l,i=t[0],c=t[1],u=t[2],p=0,d=[];p<i.length;p++)l=i[p],o[l]&&d.push(o[l][0]),o[l]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(s&&s(t);d.length;)d.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={4:0},a=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},l.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=c;a.push([318,0]),r()}({317:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(500),r(34);var n=f(r(9)),o=f(r(47)),a=f(r(145)),l=f(r(236)),i=f(r(39)),c=f(r(49)),u=f(r(48)),s=f(r(64)),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(8)),d=f(r(60)),h=f(r(53));function f(e){return e&&e.__esModule?e:{default:e}}var v={};v.module=angular.module("app",[o.default.name,l.default.name]),v.searchComponent={bndings:{map:"=appSearchMap"},controller:"AppSearchController",template:'<input type="text" placeholder="search…" ngeo-search="$ctrl.options" ngeo-search-datasets="$ctrl.datasets" ngeo-search-listeners="$ctrl.listeners">'},v.module.component("appSearch",v.searchComponent),v.SearchController=function(e,t,r,n){this.$element=e,this.map,this.vectorLayer_=this.createVectorLayer_();var o=this.createAndInitBloodhound_(n);this.options={highlight:!0,hint:void 0,minLength:void 0},this.datasets=[{source:o.ttAdapter(),display:function(e){return e.get("label")},templates:{header:function(){return'<div class="ngeo-header">Addresses</div>'},suggestion:function(e){var n=e,o=t.$new(!0);o.feature=n,o.click=function(e){window.alert(n.get("label")),e.stopPropagation()};var a="<p>"+n.get("label")+'<button ng-click="click($event)">i</button></p>';return r(a)(o)}}}],this.listeners={select:v.SearchController.select_.bind(this)}},v.SearchController.$inject=["$element","$rootScope","$compile","ngeoSearchCreateGeoJSONBloodhound"],v.SearchController.prototype.$onInit=function(){var e=this.$element.find("input");e.on("focus blur",function(){e.val("")})},v.SearchController.prototype.createVectorLayer_=function(){var e=new s.default({source:new h.default});return e.setMap(this.map),e},v.SearchController.prototype.createAndInitBloodhound_=function(e){var t=e("https://geomapfish-demo.camptocamp.net/2.2/wsgi/fulltextsearch?query=%QUERY",void 0,p.get("EPSG:3857"),a.default);return t.initialize(),t},v.SearchController.select_=function(e,t,r){var o=t,a=o.getGeometry(),l=this.map.getSize();n.default.assert(void 0!==l);var i=this.vectorLayer_.getSource();i.clear(!0),i.addFeature(o),this.map.getView().fit(a,{size:l,maxZoom:16})},v.module.controller("AppSearchController",v.SearchController),v.MainController=function(){this.map=new i.default({layers:[new u.default({source:new d.default})],view:new c.default({center:[0,0],zoom:4})})},v.module.controller("MainController",v.MainController),t.default=v},318:function(e,t,r){r(35),e.exports=r(317)},500:function(e,t){}});
//# sourceMappingURL=search.f52946b35fb5e199ef16.js.map