webpackJsonp([2],{368:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=m(i(1)),r=g(i(0)),a=g(i(2)),s=m(i(12)),o=g(i(27)),l=m(i(32)),u=m(i(20)),c=m(i(58)),h=m(i(66)),d=m(i(54)),f=m(i(43)),p=m(i(39));function g(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}function m(t){return t&&t.__esModule?t:{default:t}}var _=function(t){d.default.call(this,{handleEvent:o.TRUE}),this.changeEventKey_=null,this.type_=t.type,this.minPoints_=t.minPoints?t.minPoints:"Polygon"===this.type_?3:2,this.sketchFeature_=null,this.sketchPoints_=[],this.sketchPoint_=null,this.overlay_=new f.default({source:new p.default({useSpatialIndex:!1,wrapX:!!t.wrapX&&t.wrapX}),style:t.style?t.style:h.default.getDefaultStyleFunction(),updateWhileAnimating:!0,updateWhileInteracting:!0}),a.listen(this,"change:active",this.updateState_,this),this.set("dirty",!1),this.set("drawing",!1),this.set("valid",!1)};r.inherits(_,d.default),_.prototype.setMap=function(t){this.getMap()&&this.changeEventKey_&&a.unlistenByKey(this.changeEventKey_),d.default.prototype.setMap.call(this,t),t&&(this.changeEventKey_=a.listen(t.getView(),"change:center",this.handleViewCenterChange_,this)),this.updateState_()},_.prototype.getDirty=function(){return this.get("dirty")},_.prototype.getDrawing=function(){return this.get("drawing")},_.prototype.getValid=function(){return this.get("valid")},_.prototype.getFeature=function(){return this.sketchFeature_},_.prototype.addToDrawing=function(){var t=this.getActive(),e=this.getDrawing();if(t&&e){var i=void 0,r=this.getSketchPointGeometry_().getCoordinates(),a=void 0;if("Point"===this.type_)return this.sketchFeature_||(this.sketchFeature_=new s.default(new u.default(r)),this.dispatchEvent(new h.default.Event("drawstart",this.sketchFeature_))),i=this.sketchFeature_.getGeometry(),n.default.assertInstanceof(i,c.default),void i.setCoordinates(r);"LineString"===this.type_&&(this.sketchPoints_.push(this.sketchPoint_),this.sketchFeature_?(i=this.sketchFeature_.getGeometry(),n.default.assertInstanceof(i,c.default),(a=i.getCoordinates()).push(r.slice()),i.setCoordinates(a)):(a=[r.slice(),r.slice()],this.sketchFeature_=new s.default(new l.default(a)),this.dispatchEvent(new h.default.Event("drawstart",this.sketchFeature_)))),this.getDirty()&&this.set("dirty",!1);var o=this.getValid();"LineString"===this.type_&&(a.length>=this.minPoints_?o||this.set("valid",!0):o&&this.set("valid",!1)),this.sketchPoint_=null,this.updateSketchFeatures_()}},_.prototype.clearDrawing=function(){this.setActive(!1),this.setActive(!0)},_.prototype.finishDrawing=function(){var t=this.getActive(),e=this.getDrawing();t&&e&&(this.sketchPoint_&&this.addToDrawing(),this.set("drawing",!1),this.dispatchEvent(new h.default.Event("drawend",this.sketchFeature_)))},_.prototype.startDrawing_=function(){this.set("drawing",!0),this.createOrUpdateSketchPoint_(),this.updateSketchFeatures_(),"Point"===this.type_&&this.addToDrawing()},_.prototype.modifyDrawing_=function(){if(this.sketchFeature_){var t=this.getCenter_();if("LineString"===this.type_){var e=this.sketchFeature_.getGeometry();n.default.assertInstanceof(e,c.default);var i=e.getCoordinates();i.pop(),i.push(t),e.setCoordinates(i)}this.getDirty()||this.set("dirty",!0)}},_.prototype.abortDrawing_=function(){var t=this.sketchFeature_;return(t||this.sketchPoints_.length>0)&&(this.sketchFeature_=null,this.sketchPoint_=null,this.overlay_.getSource().clear(!0)),this.sketchPoints_=[],this.set("dirty",!1),this.set("drawing",!1),this.set("valid",!1),t},_.prototype.updateState_=function(){var t=this.getMap(),e=this.getActive();t&&e?this.startDrawing_():this.abortDrawing_(),this.overlay_.setMap(e?t:null)},_.prototype.handleViewCenterChange_=function(t){var e=this.getActive(),i=this.getDrawing();e&&i&&(this.createOrUpdateSketchPoint_(),"Point"===this.type_?this.addToDrawing():(this.modifyDrawing_(),this.updateSketchFeatures_()))},_.prototype.createOrUpdateSketchPoint_=function(){var t=this.getCenter_();this.sketchPoint_?this.getSketchPointGeometry_().setCoordinates(t):this.sketchPoint_=new s.default(new u.default(t))},_.prototype.updateSketchFeatures_=function(){var t=[];this.sketchFeature_&&t.push(this.sketchFeature_),this.sketchPoint_&&t.push(this.sketchPoint_);var e=this.overlay_.getSource();e.clear(!0),e.addFeatures(t),e.addFeatures(this.sketchPoints_)},_.prototype.getSketchPointGeometry_=function(){n.default.assert(this.sketchPoint_,"sketch point should be thruty");var t=this.sketchPoint_.getGeometry();return n.default.assertInstanceof(t,u.default),t},_.prototype.getCenter_=function(){var t=this.getMap().getView().getCenter();return n.default.assertArray(t),t},e.default=_},565:function(t,e,i){i(15),i(16),t.exports=i(566)},566:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i(567);var n=p(i(28)),r=p(i(171)),a=p(i(568)),s=p(i(571)),o=p(i(112)),l=p(i(35)),u=p(i(17)),c=p(i(21)),h=p(i(574)),d=p(i(14)),f=p(i(7));function p(t){return t&&t.__esModule?t:{default:t}}var g={};g.module=angular.module("gmfapp",["gettext",n.default.name,r.default.module.name,a.default.name,s.default.name,o.default.name]),g.module.value("gmfRasterUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/raster"),g.module.constant("defaultTheme","Demo"),g.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),g.MainController=function(t){var e=t.getMapCenter()||[537635,152640],i=t.getMapZoom()||3;this.map=new u.default({layers:[new d.default({source:new f.default})],view:new c.default({projection:l.default,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:e,zoom:i})}),this.map.addControl(new h.default),this.measureLengthActive=!1,this.measurePointLayersConfig={aster:{unit:"m",decimals:2},srtm:{unit:"m"}},this.measurePointActive=!1},g.MainController.$inject=["gmfPermalink"],g.module.controller("MainController",g.MainController),e.default=g},567:function(t,e){},568:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=d(i(87)),r=d(i(569)),a=d(i(92)),s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}(i(2)),o=d(i(34)),l=d(i(30)),u=d(i(108)),c=d(i(31)),h=d(i(10));function d(t){return t&&t.__esModule?t:{default:t}}var f=angular.module("gmfMobileMeasureLength",[n.default.name]);f.value("gmfMobileMeasureLengthTemplateUrl",function(t,e){var i=e.gmfMobileMeasureLengthTemplateurl;return void 0!==i?i:"gmf/measure/lengthComponent"}),f.run(["$templateCache",function(t){t.put("gmf/measure/lengthComponent",i(570))}]),f.component_=function(t){return{restrict:"A",scope:{active:"=gmfMobileMeasurelengthActive",precision:"<?gmfMobileMeasurelengthPrecision",map:"=gmfMobileMeasurelengthMap",sketchStyle:"=?gmfMobileMeasurelengthSketchstyle"},controller:"GmfMobileMeasureLengthController as ctrl",bindToController:!0,templateUrl:t,link:function(t,e,i,n){n.init()}}},f.component_.$inject=["gmfMobileMeasureLengthTemplateUrl"],f.directive("gmfMobileMeasurelength",f.component_),f.Controller_=function(t,e){var i=this;this.scope_=t,this.filter_=e,this.map,this.active,this.scope_.$watch(function(){return i.active},function(t){i.measure.setActive(t)}),this.precision,this.sketchStyle=new h.default({fill:new l.default({color:"rgba(255, 255, 255, 0.2)"}),stroke:new c.default({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new u.default({stroke:new c.default({color:"rgba(0, 0, 0, 0.7)",width:2}),points:4,radius:8,radius2:0,angle:0})}),this.measure,this.drawInteraction,this.dirty=!1,this.drawing=!1,this.valid=!1},f.Controller_.$inject=["$scope","$filter"],f.Controller_.prototype.init=function(){this.measure=new r.default(this.filter_("ngeoUnitPrefix"),{precision:this.precision,sketchStyle:this.sketchStyle}),this.measure.setActive(this.active),a.default.interaction(this.measure),this.drawInteraction=this.measure.getDrawInteraction();var t=this.drawInteraction;a.default.interaction(t),Object.defineProperty(this,"hasPoints",{get:function(){return null!==this.drawInteraction.getFeature()}}),s.listen(t,o.default.getChangeEventType("dirty"),function(){this.dirty=t.getDirty(),this.dirty&&this.scope_.$apply()},this),s.listen(t,o.default.getChangeEventType("drawing"),function(){this.drawing=t.getDrawing()},this),s.listen(t,o.default.getChangeEventType("valid"),function(){this.valid=t.getValid()},this),this.map.addInteraction(this.measure)},f.Controller_.prototype.addPoint=function(){this.drawInteraction.addToDrawing()},f.Controller_.prototype.clear=function(){this.drawInteraction.clearDrawing()},f.Controller_.prototype.finish=function(){this.drawInteraction.finishDrawing()},f.Controller_.prototype.deactivate=function(){this.active=!1},f.controller("GmfMobileMeasureLengthController",f.Controller_),e.default=f},569:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(i(237)),r=s(i(368)),a=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}(i(0));function s(t){return t&&t.__esModule?t:{default:t}}var o=function(t,e){var i=void 0!==e?e:{};a.obj.assign(i,{displayHelpTooltip:!1}),n.default.call(this,t,i)};a.inherits(o,n.default),o.prototype.createDrawInteraction=function(t,e){return new r.default({type:"LineString",style:t,source:e})},e.default=o},570:function(t,e){t.exports='<a class="btn btn-default" ng-if="ctrl.drawing && (!ctrl.valid)" ng-click=ctrl.addPoint()> <span class="fa fa-check"></span> {{\'Set as starting point\' | translate}} </a> <a class="btn btn-default" ng-if=ctrl.dirty ng-click=ctrl.addPoint()> <span class="fa fa-plus"></span> {{\'Add new point\' | translate}} </a> <a class="btn btn-default" ng-if="ctrl.drawing && ctrl.valid && !ctrl.dirty" ng-click=ctrl.finish()> <span class="fa fa-check"></span> {{\'Terminate\' | translate}} </a> <a class="btn btn-default" ng-if=ctrl.valid ng-click=ctrl.clear()> <span class="fa fa-repeat"></span> {{\'Clear\' | translate}} </a> <a class="btn btn-default" ng-if=ctrl.active ng-click=ctrl.deactivate()> <span class="fa fa-times"></span> {{\'Close\' | translate}} </a> '},571:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=f(i(185)),r=f(i(1)),a=f(i(572)),s=f(i(173)),o=f(i(92)),l=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}(i(2)),u=f(i(30)),c=f(i(108)),h=f(i(31)),d=f(i(10));function f(t){return t&&t.__esModule?t:{default:t}}var p=angular.module("gmfMobileMeasurePoint",[n.default.module.name,s.default.name]);p.value("gmfMobileMeasurePointTemplateUrl",function(t,e){var i=e.gmfMobileMeasurePointTemplateurl;return void 0!==i?i:"gmf/measure/pointComponent"}),p.run(["$templateCache",function(t){t.put("gmf/measure/pointComponent",i(573))}]),p.component_=function(t){return{restrict:"A",scope:{active:"=gmfMobileMeasurepointActive",getCoordinateDecimalsFn:"&?gmfMobileMeasurepointCoordinatedecimals",getLayersConfigFn:"&gmfMobileMeasurepointLayersconfig",map:"=gmfMobileMeasurepointMap",sketchStyle:"=?gmfMobileMeasurepointSketchstyle",format:"<gmfMobileMeasurepointFormat"},controller:"GmfMobileMeasurePointController as ctrl",bindToController:!0,templateUrl:t,link:function(t,e,i,n){n.init()}}},p.component_.$inject=["gmfMobileMeasurePointTemplateUrl"],p.directive("gmfMobileMeasurepoint",p.component_),p.Controller_=function(t,e,i,n,r){var a=this;this.gmfRaster_=n,this.ngeoDebounce_=r,this.gettextCatalog_=t,this.$filter_=i,this.map,this.active,e.$watch(function(){return a.active},function(t){a.measure.setActive(t),a.handleMeasureActiveChange_()});var s=this.getCoordinateDecimalsFn;this.coordinateDecimals=s?s():0,this.layersConfig,this.sketchStyle,void 0===this.sketchStyle&&(this.sketchStyle=new d.default({fill:new u.default({color:"rgba(255, 255, 255, 0.2)"}),stroke:new h.default({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new c.default({stroke:new h.default({color:"rgba(0, 0, 0, 0.7)",width:2}),points:4,radius:8,radius2:0,angle:0})})),this.format,this.measure,this.drawInteraction,this.mapViewPropertyChangeEventKey_=null},p.Controller_.$inject=["gettextCatalog","$scope","$filter","gmfRaster","ngeoDebounce"],p.Controller_.prototype.init=function(){this.measure=new a.default(this.$filter_("ngeoNumberCoordinates"),this.format||"{x}, {y}",{decimals:this.coordinateDecimals,sketchStyle:this.sketchStyle}),this.measure.setActive(this.active),o.default.interaction(this.measure),this.drawInteraction=this.measure.getDrawInteraction(),o.default.interaction(this.drawInteraction);var t=this.getLayersConfigFn();r.default.assert(Array.isArray(t)),this.layersConfig=t,this.map.addInteraction(this.measure)},p.Controller_.prototype.deactivate=function(){this.active=!1},p.Controller_.prototype.translate=function(t){return this.gettextCatalog_.getString(t)},p.Controller_.prototype.handleMeasureActiveChange_=function(){if(this.measure.getActive()){var t=this.map.getView();this.mapViewPropertyChangeEventKey_=l.listen(t,"propertychange",this.ngeoDebounce_(this.getMeasure_.bind(this),300,!0),this),this.getMeasure_()}else this.mapViewPropertyChangeEventKey_&&(l.unlistenByKey(this.mapViewPropertyChangeEventKey_),this.mapViewPropertyChangeEventKey_=null)},p.Controller_.prototype.getMeasure_=function(){var t=this,e=this.map.getView().getCenter();r.default.assertArray(e);var i={layers:this.layersConfig.map(function(t){return t.name}).join(",")};this.gmfRaster_.getRaster(e,i).then(function(e){var i=t.measure.getTooltipElement(),n=document.createElement("div");n.className="gmf-mobile-measure-point";var r=!0,a=!1,s=void 0;try{for(var o,l=t.layersConfig[Symbol.iterator]();!(r=(o=l.next()).done);r=!0){var u=o.value,c=u.name;if(c in e){var h=e[c],d=document.createElement("div");d.className="gmf-mobile-measure-point-"+c;var f=u.unit||"",p=u.decimals&&u.decimals>0||0;h=t.$filter_("number")(h,p),d.innerHTML=[t.translate(c),": ",h," ",f].join(""),n.appendChild(d)}}}catch(t){a=!0,s=t}finally{try{!r&&l.return&&l.return()}finally{if(a)throw s}}var g=i.getElementsByClassName("gmf-mobile-measure-point");g[0]&&g[0].remove(),i.appendChild(n)})},p.controller("GmfMobileMeasurePointController",p.Controller_),p.LayerConfig,e.default=p},572:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=c(i(1)),r=c(i(158)),a=c(i(368)),s=u(i(0)),o=u(i(5)),l=c(i(20));function u(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}function c(t){return t&&t.__esModule?t:{default:t}}var h=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};o.assign(i,{displayHelpTooltip:!1}),r.default.call(this,i),this.format_=t,this.coordFormat_=e};s.inherits(h,r.default),h.prototype.createDrawInteraction=function(t,e){return new a.default({type:"Point",style:t,source:e})},h.prototype.handleMeasure=function(t){var e=n.default.assertInstanceof(this.sketchFeature.getGeometry(),l.default),i=this.decimals;t(r.default.getFormattedPoint(e,i,this.format_,this.coordFormat_),e.getLastCoordinate())},e.default=h},573:function(t,e){t.exports='<a class="btn btn-default" ng-if=ctrl.active ng-click=ctrl.deactivate()> <span class="fa fa-times"></span> {{\'Close\' | translate}} </a> '},574:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),r=i(34),a=i(22),s=i(143),o="degrees",l="imperial",u="nautical",c="metric",h="us",d=i(103),f=i(2),p=i(8),g=i(83);e.render=v;const m=[1,2,5],_=function(t){const e=t||{},i=void 0!==e.className?e.className:"ol-scale-line";this.innerElement_=document.createElement("DIV"),this.innerElement_.className=i+"-inner",this.element_=document.createElement("DIV"),this.element_.className=i+" "+d.e,this.element_.appendChild(this.innerElement_),this.viewState_=null,this.minWidth_=void 0!==e.minWidth?e.minWidth:64,this.renderedVisible_=!1,this.renderedWidth_=void 0,this.renderedHTML_="",s.default.call(this,{element:this.element_,render:e.render||v,target:e.target}),Object(f.listen)(this,r.default.getChangeEventType("units"),this.handleUnitsChanged_,this),this.setUnits(e.units||c)};function v(t){const e=t.frameState;this.viewState_=e?e.viewState:null,this.updateElement_()}Object(n.inherits)(_,s.default),_.prototype.getUnits=function(){return this.get("units")},_.prototype.handleUnitsChanged_=function(){this.updateElement_()},_.prototype.setUnits=function(t){this.set("units",t)},_.prototype.updateElement_=function(){const t=this.viewState_;if(!t)return void(this.renderedVisible_&&(this.element_.style.display="none",this.renderedVisible_=!1));const e=t.center,i=t.projection,n=this.getUnits(),r=n==o?g.a.DEGREES:g.a.METERS;let s=Object(p.getPointResolution)(i,t.resolution,e,r);i.getUnits()!=g.a.DEGREES&&n==c&&(s*=i.getMetersPerUnit());let d=this.minWidth_*s,f="";if(n==o){const t=p.METERS_PER_UNIT[g.a.DEGREES];i.getUnits()==g.a.DEGREES?d*=t:s/=t,d<t/60?(f="″",s*=3600):d<t?(f="′",s*=60):f="°"}else n==l?d<.9144?(f="in",s/=.0254):d<1609.344?(f="ft",s/=.3048):(f="mi",s/=1609.344):n==u?(s/=1852,f="nm"):n==c?d<.001?(f="μm",s*=1e6):d<1?(f="mm",s*=1e3):d<1e3?f="m":(f="km",s/=1e3):n==h?d<.9144?(f="in",s*=39.37):d<1609.344?(f="ft",s/=.30480061):(f="mi",s/=1609.3472):Object(a.a)(!1,33);let _,v,y=3*Math.floor(Math.log(this.minWidth_*s)/Math.log(10));for(;;){if(_=m[(y%3+3)%3]*Math.pow(10,Math.floor(y/3)),v=Math.round(_/s),isNaN(v))return this.element_.style.display="none",void(this.renderedVisible_=!1);if(v>=this.minWidth_)break;++y}const w=_+" "+f;this.renderedHTML_!=w&&(this.innerElement_.innerHTML=w,this.renderedHTML_=w),this.renderedWidth_!=v&&(this.innerElement_.style.width=v+"px",this.renderedWidth_=v),this.renderedVisible_||(this.element_.style.display="",this.renderedVisible_=!0)};e.default=_},7:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),r=i(23),a=i(24);const s=function(t){const e=t||{},i=void 0!==e.projection?e.projection:"EPSG:3857",n=void 0!==e.tileGrid?e.tileGrid:Object(a.a)({extent:Object(a.b)(i),maxZoom:e.maxZoom,minZoom:e.minZoom,tileSize:e.tileSize});r.a.call(this,{attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,opaque:e.opaque,projection:i,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileGrid:n,tileLoadFunction:e.tileLoadFunction,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:void 0===e.wrapX||e.wrapX,transition:e.transition})};Object(n.inherits)(s,r.a);var o=s;const l=function(t){const e=t||{};let i;i=void 0!==e.attributions?e.attributions:[l.ATTRIBUTION];const n=void 0!==e.crossOrigin?e.crossOrigin:"anonymous",r=void 0!==e.url?e.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";o.call(this,{attributions:i,cacheSize:e.cacheSize,crossOrigin:n,opaque:void 0===e.opaque||e.opaque,maxZoom:void 0!==e.maxZoom?e.maxZoom:19,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileLoadFunction:e.tileLoadFunction,url:r,wrapX:e.wrapX})};Object(n.inherits)(l,o),l.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.';e.default=l}},[565]);
//# sourceMappingURL=mobilemeasure.57f3afb93cb9190f8b2a.js.map