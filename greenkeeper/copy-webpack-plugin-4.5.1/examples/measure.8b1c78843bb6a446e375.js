!function(e){function t(t){for(var r,u,s=t[0],l=t[1],i=t[2],m=0,p=[];m<s.length;m++)u=s[m],a[u]&&p.push(a[u][0]),a[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(c&&c(t);p.length;)p.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={16:0},o=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},u.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var c=l;o.push([363,0]),n()}({361:function(e,t){e.exports='<div ngeo-btn-group class=btn-group> <a ngeo-btn class="btn btn-default" ng-model=$ctrl.measureLength.active>Length</a> <a ngeo-btn class="btn btn-default" ng-model=$ctrl.measureArea.active>Area</a> <a ngeo-btn class="btn btn-default" ng-model=$ctrl.measureAzimut.active>Azimut</a> </div> '},362:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(516);var r=A(n(244)),a=A(n(214)),o=A(n(243)),u=A(n(47)),s=A(n(153)),l=A(n(165)),i=A(n(154)),c=A(n(39)),m=A(n(49)),p=A(n(305)),f=A(n(48)),d=A(n(60)),g=A(n(50)),h=A(n(114)),b=A(n(71)),M=A(n(74));function A(e){return e&&e.__esModule?e:{default:e}}n(257);var v={};v.module=angular.module("app",["gettext",u.default.name,s.default.name,i.default.name,"ngSanitize"]),v.measuretoolsComponent={bindings:{map:"=appMeasuretoolsMap",lang:"=appMeasuretoolsLang"},controller:"AppMeasuretoolsController",template:n(361)},v.module.component("appMeasuretools",v.measuretoolsComponent),v.MeasuretoolsController=function(e,t,n,u){var s=this;this.map,this.lang,this.measureStartMsg=null,this.measureLengthContinueMsg=null,this.measureAreaContinueMsg=null,this.measureAzimutContinueMsg=null;var i={en:n.trustAsHtml("Click to start drawing."),fr:n.trustAsHtml("Cliquer pour commencer à dessiner.")},c={en:n.trustAsHtml("Click to continue drawing.<br>Double-click or click last point to finish."),fr:n.trustAsHtml("Cliquer pour continuer le dessin.<br>Double-cliquer ou cliquer sur dernier point pour finir.")},m={en:n.trustAsHtml("Click to continue drawing.<br>Double-click or click starting point to finish."),fr:n.trustAsHtml("Cliquer pour continuer le dessin.<br>Double-cliquer ou cliquer sur point de départ pour finir.")},p={en:n.trustAsHtml("Click to finish."),fr:n.trustAsHtml("Cliquer pour finir.")},f=angular.element('<span ng-bind-html="ctrl.measureStartMsg"></span>');f=t(f)(e);var d=angular.element('<span ng-bind-html="ctrl.measureLengthContinueMsg"></span>');d=t(d)(e);var A=angular.element('<span ng-bind-html="ctrl.measureAreaContinueMsg"></span>');A=t(A)(e);var v=angular.element('<span ng-bind-html="ctrl.measureAzimutContinueMsg"></span>');v=t(v)(e),e.$watch(function(){return s.lang},function(e){s.measureStartMsg=i[e],s.measureLengthContinueMsg=c[e],s.measureAreaContinueMsg=m[e],s.measureAzimutContinueMsg=p[e]});var C=new g.default({fill:new M.default({color:"rgba(255, 255, 255, 0.2)"}),stroke:new b.default({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new h.default({radius:5,stroke:new b.default({color:"rgba(0, 0, 0, 0.7)"}),fill:new M.default({color:"rgba(255, 255, 255, 0.2)"})})});this.measureLength=new o.default(u("ngeoUnitPrefix"),{sketchStyle:C,startMsg:f[0],continueMsg:d[0]}),this.measureLength.setActive(!1),l.default.interaction(this.measureLength),this.measureArea=new r.default(u("ngeoUnitPrefix"),{sketchStyle:C,startMsg:f[0],continueMsg:A[0]}),this.measureArea.setActive(!1),l.default.interaction(this.measureArea),this.measureAzimut=new a.default(u("ngeoUnitPrefix"),u("ngeoNumber"),{sketchStyle:C,startMsg:f[0],continueMsg:v[0]}),this.measureAzimut.setActive(!1),l.default.interaction(this.measureAzimut),this.measureAzimut.on("measureend",function(e){e.target.getTooltipElement().innerHTML+="<br>Additional info"})},v.MeasuretoolsController.$inject=["$scope","$compile","$sce","$filter"],v.module.controller("AppMeasuretoolsController",v.MeasuretoolsController),v.MeasuretoolsController.prototype.$onInit=function(){this.map.addInteraction(this.measureLength),this.map.addInteraction(this.measureArea),this.map.addInteraction(this.measureAzimut)},v.MainController=function(){this.lang="en",this.map=new c.default({layers:[new f.default({source:new d.default})],view:new m.default({center:[692114.718759744,5743119.914347709],zoom:15})}),this.map.addControl(new p.default)},v.module.controller("MainController",v.MainController),t.default=v},363:function(e,t,n){n(36),n(34),e.exports=n(362)},516:function(e,t){}});
//# sourceMappingURL=measure.8b1c78843bb6a446e375.js.map