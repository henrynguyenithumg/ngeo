webpackJsonp([34],{458:function(t,e,r){r(9),t.exports=r(459)},459:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),r(460),r(10);var n=h(r(81)),o=h(r(286)),i=h(r(287)),a=h(r(12)),s=h(r(16)),l=h(r(171)),_=h(r(71)),p=h(r(29)),u=h(r(66)),c=h(r(25)),d=h(r(15));function h(t){return t&&t.__esModule?t:{default:t}}var S={},f=angular.module("app",[d.default.name,o.default.module.name,i.default.modle.name]);S.WMS_URL_="https://geomapfish-demo.camptocamp.net/2.2/wsgi/mapserv_proxy",S.PRINT_URL_="https://geomapfish-demo.camptocamp.net/2.2/wsgi/printproxy",S.PRINT_SCALES_=[100,250,500,2500,5e3,1e4,25e3,5e4,1e5,5e5],S.PRINT_FORMAT_="pdf",S.PRINT_LAYOUT_="A4 portrait",S.PRINT_DPI_=72,S.PRINT_PAPER_SIZE_=[555,675],S.MainController=function(t,e,r){this.map=new a.default({layers:[new _.default({source:new u.default({url:S.WMS_URL_,params:{LAYERS:"osm"},serverType:"mapserver"})}),new p.default({source:new c.default({url:"data/polygon-swizerland.json",format:new l.default({defaultDataProjection:n.default})})})],view:new s.default({projection:n.default,resolutions:[200,100,50,20,10,5,2.5,2,1],center:[537635,152640],zoom:3})}),this.printState="",this.$timeout_=t,this.print_=e(S.PRINT_URL_),this.printUtils_=r;var o=r.createPrintMaskPostcompose(function(){return S.PRINT_PAPER_SIZE_},function(t){var e=t.size,n=t.viewState.resolution;return void 0!==e&&void 0!==n?r.getOptimalScale(e,n,S.PRINT_PAPER_SIZE_,S.PRINT_SCALES_):S.PRINT_SCALES_[0]});this.map.on("postcompose",o)},S.MainController.$inject=["$timeout","ngeoCreatePrint","ngeoPrintUtils"],S.MainController.prototype.print=function(){var t=this.map,e=t.getSize(),r=t.getView().getResolution(),n=void 0!==e&&void 0!==r?this.printUtils_.getOptimalScale(e,r,S.PRINT_PAPER_SIZE_,S.PRINT_SCALES_):S.PRINT_SCALES_[0],o=S.PRINT_DPI_,i=S.PRINT_FORMAT_,a=S.PRINT_LAYOUT_;this.printState="Printing...";var s=this.print_.createSpec(t,n,o,a,i,{datasource:[],debug:0,comments:"My comments",title:"My print"});this.print_.createReport(s).then(this.handleCreateReportSuccess_.bind(this),this.handleCreateReportError_.bind(this))},S.MainController.prototype.handleCreateReportSuccess_=function(t){var e=t.data;this.getStatus_(e.ref)},S.MainController.prototype.getStatus_=function(t){this.print_.getStatus(t).then(this.handleGetStatusSuccess_.bind(this,t),this.handleGetStatusError_.bind(this))},S.MainController.prototype.handleCreateReportError_=function(t){this.printState="Print error"},S.MainController.prototype.handleGetStatusSuccess_=function(t,e){if(e.data.done)this.printState="",window.location.href=this.print_.getReportUrl(t);else{var r=this;this.$timeout_(function(){r.getStatus_(t)},1e3,!1)}},S.MainController.prototype.handleGetStatusError_=function(t){this.printState="Print error"},f.controller("MainController",S.MainController),e.default=S},460:function(t,e){}},[458]);
//# sourceMappingURL=mapfishprint.1a78ee7b07ebe67cfe53.js.map