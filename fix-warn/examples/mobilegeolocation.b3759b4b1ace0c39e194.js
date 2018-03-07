!function(e){function t(t){for(var i,r,l=t[0],s=t[1],c=t[2],h=0,f=[];h<l.length;h++)r=l[h],n[r]&&f.push(n[r][0]),n[r]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);for(u&&u(t);f.length;)f.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],i=!0,l=1;l<o.length;l++){var s=o[l];0!==n[s]&&(i=!1)}i&&(a.splice(t--,1),e=r(r.s=o[0]))}return e}var i={},n={15:0},a=[];function r(t){if(i[t])return i[t].exports;var o=i[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=i,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;a.push([358,0]),o()}({356:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=d(o(9)),n=d(o(209)),a=d(o(235)),r=f(o(70)),l=f(o(4)),s=d(o(30)),c=d(o(252)),u=d(o(39)),h=d(o(41));function f(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function d(e){return e&&e.__esModule?e:{default:e}}var g=angular.module("ngeoMobileGeolocation",[n.default.module.name,a.default.module.name]);g.GeolocationEventType={ERROR:"mobile-geolocation-error"},g.directive_=function(){return{restrict:"A",scope:{getMobileMapFn:"&ngeoMobileGeolocationMap",getMobileGeolocationOptionsFn:"&ngeoMobileGeolocationOptions"},controller:"ngeoGeolocationMobileController"}},g.directive("ngeoMobileGeolocation",g.directive_),g.Controller_=function(e,t,o,n,a){var r=this;t.on("click",this.toggleTracking.bind(this));var h=e.getMobileMapFn();i.default.assertInstanceof(h,u.default),this.$scope_=e,this.map_=h;var f=e.getMobileGeolocationOptionsFn()||{};i.default.assertObject(f),this.notification_=a,this.featureOverlay_=n.getFeatureOverlay(),this.geolocation_=new c.default({projection:h.getView().getProjection(),trackingOptions:{enableHighAccuracy:!0}}),f.autorotate&&this.autorotateListener(),this.geolocation_.on("error",function(t){this.untrack_();var i=void 0;switch(t.code){case 1:i=o.getString("User denied the request for Geolocation.");break;case 2:i=o.getString("Location information is unavailable.");break;case 3:i=o.getString("The request to get user location timed out.");break;default:i=o.getString("Geolocation: An unknown error occurred.")}this.notification_.error(i),e.$emit(g.GeolocationEventType.ERROR,t)},this),this.positionFeature_=new s.default,f.positionFeatureStyle&&this.positionFeature_.setStyle(f.positionFeatureStyle),this.accuracyFeature_=new s.default,f.accuracyFeatureStyle&&this.accuracyFeature_.setStyle(f.accuracyFeatureStyle),this.zoom_=f.zoom,this.follow_=!1,this.viewChangedByMe_=!1,l.listen(this.geolocation_,"change:accuracyGeometry",function(){r.accuracyFeature_.setGeometry(r.geolocation_.getAccuracyGeometry()),r.setPosition_()}),l.listen(this.geolocation_,"change:position",function(){r.setPosition_()});var d=h.getView();l.listen(d,"change:center",this.handleViewChange_,this),l.listen(d,"change:resolution",this.handleViewChange_,this)},g.Controller_.$inject=["$scope","$element","gettextCatalog","ngeoFeatureOverlayMgr","ngeoNotification"],g.Controller_.prototype.toggleTracking=function(){if(this.geolocation_.getTracking()){var e=this.geolocation_.getPosition();if(void 0===e)return this.untrack_(),void this.$scope_.$emit(g.GeolocationEventType.ERROR,null);i.default.assert(void 0!==e);var t=this.map_.getView().getCenter();Math.abs(e[0]-t[0])+Math.abs(e[1]-t[1])<2?this.untrack_():(this.untrack_(),this.track_())}else this.track_()},g.Controller_.prototype.track_=function(){this.featureOverlay_.addFeature(this.positionFeature_),this.featureOverlay_.addFeature(this.accuracyFeature_),this.follow_=!0,this.geolocation_.setTracking(!0)},g.Controller_.prototype.untrack_=function(){this.featureOverlay_.clear(),this.follow_=!1,this.geolocation_.setTracking(!1),this.notification_.clear()},g.Controller_.prototype.setPosition_=function(){var e=this.geolocation_.getPosition(),t=new h.default(e);this.positionFeature_.setGeometry(t);var o=this.accuracyFeature_.getGeometry();if(this.follow_){if(this.viewChangedByMe_=!0,void 0!==this.zoom_)this.map_.getView().setCenter(e),this.map_.getView().setZoom(this.zoom_);else if(o){var i=this.map_.getSize();this.map_.getView().fit(o,i)}this.viewChangedByMe_=!1}},g.Controller_.prototype.handleViewChange_=function(e){this.follow_&&!this.viewChangedByMe_&&(this.follow_=!1)},g.Controller_.prototype.autorotateListener=function(){var e=this,t=0;window.hasOwnProperty("ondeviceorientationabsolute")?window.addEventListener("deviceorientationabsolute",function(o){t=e.handleRotate_(o.alpha,t)},!0):window.hasOwnProperty("ondeviceorientation")?window.addEventListener("deviceorientation",function(o){t=o.webkitCompassHeading?e.handleRotate_(-o.webkitCompassHeading,t):e.handleRotate_(o.alpha-270,t)},!0):console.error("Orientation is not supported on this device")},g.Controller_.prototype.handleRotate_=function(e,t){if(this.geolocation_.getTracking()&&Math.abs(e-t)>.2){var o=(t=e)*Math.PI/180;this.map_.getView().animate({rotation:o,duration:350,easing:r.linear})}return t},g.controller("ngeoGeolocationMobileController",g.Controller_),t.default=g},357:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o(512),o(34);var i=d(o(39)),n=d(o(49)),a=d(o(48)),r=d(o(60)),l=d(o(114)),s=d(o(50)),c=d(o(74)),u=d(o(71)),h=d(o(47)),f=d(o(356));function d(e){return e&&e.__esModule?e:{default:e}}var g={},_=angular.module("app",[f.default.name,h.default.name]);g.MainController=function(e,t){var o=new s.default({image:new l.default({radius:6,fill:new c.default({color:"rgba(230, 100, 100, 1)"}),stroke:new u.default({color:"rgba(230, 40, 40, 1)",width:2})})}),h=new s.default({fill:new c.default({color:"rgba(100, 100, 230, 0.3)"}),stroke:new u.default({color:"rgba(40, 40, 230, 1)",width:2})});this.mobileGeolocationOptions={positionFeatureStyle:o,accuracyFeatureStyle:h,zoom:17,autorotate:!0},this.map=new i.default({layers:[new a.default({source:new r.default})],view:new n.default({center:[0,0],zoom:4})}),t.init(this.map)},g.MainController.$inject=["$scope","ngeoFeatureOverlayMgr"],_.controller("MainController",g.MainController),t.default=g},358:function(e,t,o){o(35),e.exports=o(357)},512:function(e,t){}});
//# sourceMappingURL=mobilegeolocation.b3759b4b1ace0c39e194.js.map