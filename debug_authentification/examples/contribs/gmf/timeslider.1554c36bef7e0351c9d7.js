webpackJsonp([22],{562:function(e,l,a){a(15),e.exports=a(563)},563:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),a(564),a(17);var n=t(a(335)),i=t(a(91));function t(e){return e&&e.__esModule?e:{default:e}}var o={};o.module=angular.module("gmfapp",[n.default.name,i.default.module.name]),o.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),o.MainController=function(e,l){this.ngeoWMSTime_=l,this.wmsTimeRangeMode={widget:"slider",maxValue:"2013-12-31T00:00:00Z",minValue:"2006-01-01T00:00:00Z",maxDefValue:null,minDefValue:null,resolution:"day",mode:"range",interval:[0,1,0,0]},this.wmsTimeValueMode={widget:"slider",maxValue:"2015-12-31T00:00:00Z",minValue:"2014-01-01T00:00:00Z",maxDefValue:null,minDefValue:null,resolution:"year",mode:"value",interval:[0,0,1,0]},this.sliderValue,this.sliderRangeValue,this.onDateSelected=function(l){this.sliderValue=this.ngeoWMSTime_.formatWMSTimeParam(this.wmsTimeValueMode,l),e.$digest()},this.onDateRangeSelected=function(l){this.sliderRangeValue=this.ngeoWMSTime_.formatWMSTimeParam(this.wmsTimeRangeMode,l),e.$digest()}},o.MainController.$inject=["$scope","ngeoWMSTime"],o.module.controller("MainController",o.MainController),l.default=o},564:function(e,l){}},[562]);
//# sourceMappingURL=timeslider.1554c36bef7e0351c9d7.js.map