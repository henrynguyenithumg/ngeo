webpackJsonp([4],{147:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(o(2)),n=a(o(84)),r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}(o(0));function a(t){return t&&t.__esModule?t:{default:t}}var s=function(t){n.default.call(this),this.timeout_=t;var e=angular.element('<div class="ngeo-notification"></div>');angular.element(document.body).append(e),this.container_=e,this.cache_={}};s.$inject=["$timeout"],s.$inject=["$timeout"],r.inherits(s,n.default),s.DEFAULT_DELAY_=7e3,s.prototype.notify=function(t){this.show(t)},s.prototype.clear=function(){for(var t in this.cache_)this.clearMessageByCacheItem_(this.cache_[parseInt(t,10)])},s.prototype.showMessage=function(t){var e=this,o=t.type;i.default.assertString(o,"Type should be set.");var a=["alert","fade"];switch(o){case n.default.Type.ERROR:a.push("alert-danger");break;case n.default.Type.INFORMATION:a.push("alert-info");break;case n.default.Type.SUCCESS:a.push("alert-success");break;case n.default.Type.WARNING:a.push("alert-warning")}var c=angular.element('<div class="'+a.join(" ")+'"></div>');(t.target?angular.element(t.target):this.container_).append(c),c.html(t.msg).addClass("in");var l=void 0!==t.delay?t.delay:s.DEFAULT_DELAY_,u={el:c},h=r.getUid(c);u.promise=this.timeout_(function(){c.alert("close"),delete e.cache_[h]},l),this.cache_[h]=u},s.prototype.clearMessageByCacheItem_=function(t){var e=t.el,o=t.promise,i=r.getUid(e);e.alert("close"),this.timeout_.cancel(o),delete this.cache_[i]},(s.module=angular.module("ngeoNotification",[])).service("ngeoNotification",s),e.default=s},213:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(0),n="accuracy",r="accuracyGeometry",a="altitude",s="altitudeAccuracy",c="heading",l="position",u="projection",h="speed",p="tracking",d="trackingOptions",g=o(31),f=o(1),_=o(12),y=o(22),v=o(39),m=o(13),w=o(10);o.d(e,"GeolocationOptions",function(){});const O=function(t){g.default.call(this);const e=t||{};this.position_=null,this.transform_=w.identityTransform,this.watchId_=void 0,Object(f.listen)(this,g.default.getChangeEventType(u),this.handleProjectionChanged_,this),Object(f.listen)(this,g.default.getChangeEventType(p),this.handleTrackingChanged_,this),void 0!==e.projection&&this.setProjection(e.projection),void 0!==e.trackingOptions&&this.setTrackingOptions(e.trackingOptions),this.setTracking(void 0!==e.tracking&&e.tracking)};Object(i.inherits)(O,g.default),O.prototype.disposeInternal=function(){this.setTracking(!1),g.default.prototype.disposeInternal.call(this)},O.prototype.handleProjectionChanged_=function(){const t=this.getProjection();t&&(this.transform_=Object(w.getTransformFromProjections)(Object(w.get)("EPSG:4326"),t),this.position_&&this.set(l,this.transform_(this.position_)))},O.prototype.handleTrackingChanged_=function(){if(v.GEOLOCATION){const t=this.getTracking();t&&void 0===this.watchId_?this.watchId_=navigator.geolocation.watchPosition(this.positionChange_.bind(this),this.positionError_.bind(this),this.getTrackingOptions()):t||void 0===this.watchId_||(navigator.geolocation.clearWatch(this.watchId_),this.watchId_=void 0)}},O.prototype.positionChange_=function(t){const e=t.coords;this.set(n,e.accuracy),this.set(a,null===e.altitude?void 0:e.altitude),this.set(s,null===e.altitudeAccuracy?void 0:e.altitudeAccuracy),this.set(c,null===e.heading?void 0:Object(m.toRadians)(e.heading)),this.position_?(this.position_[0]=e.longitude,this.position_[1]=e.latitude):this.position_=[e.longitude,e.latitude];const o=this.transform_(this.position_);this.set(l,o),this.set(h,null===e.speed?void 0:e.speed);const i=Object(y.circular)(this.position_,e.accuracy);i.applyTransform(this.transform_),this.set(r,i),this.changed()},O.prototype.positionError_=function(t){t.type=_.a.ERROR,this.setTracking(!1),this.dispatchEvent(t)},O.prototype.getAccuracy=function(){return this.get(n)},O.prototype.getAccuracyGeometry=function(){return this.get(r)||null},O.prototype.getAltitude=function(){return this.get(a)},O.prototype.getAltitudeAccuracy=function(){return this.get(s)},O.prototype.getHeading=function(){return this.get(c)},O.prototype.getPosition=function(){return this.get(l)},O.prototype.getProjection=function(){return this.get(u)},O.prototype.getSpeed=function(){return this.get(h)},O.prototype.getTracking=function(){return this.get(p)},O.prototype.getTrackingOptions=function(){return this.get(d)},O.prototype.setProjection=function(t){this.set(u,Object(w.get)(t))},O.prototype.setTracking=function(t){this.set(p,t)},O.prototype.setTrackingOptions=function(t){this.set(d,t)};e.default=O},4:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(0),n=o(5);const r=function(t){const e=t||{};let o;o=void 0!==e.attributions?e.attributions:[r.ATTRIBUTION];const i=void 0!==e.crossOrigin?e.crossOrigin:"anonymous",a=void 0!==e.url?e.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";n.a.call(this,{attributions:o,cacheSize:e.cacheSize,crossOrigin:i,opaque:void 0===e.opaque||e.opaque,maxZoom:void 0!==e.maxZoom?e.maxZoom:19,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileLoadFunction:e.tileLoadFunction,url:a,wrapX:e.wrapX})};Object(i.inherits)(r,n.a),r.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',e.default=r},452:function(t,e,o){o(8),t.exports=o(453)},453:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),o(454),o(9);var i=d(o(11)),n=d(o(16)),r=d(o(17)),a=d(o(4)),s=d(o(60)),c=d(o(23)),l=d(o(40)),u=d(o(41)),h=d(o(15)),p=d(o(455));function d(t){return t&&t.__esModule?t:{default:t}}var g={},f=angular.module("app",[p.default.name,h.default.name]);g.MainController=function(t,e){var o=new c.default({image:new s.default({radius:6,fill:new l.default({color:"rgba(230, 100, 100, 1)"}),stroke:new u.default({color:"rgba(230, 40, 40, 1)",width:2})})}),h=new c.default({fill:new l.default({color:"rgba(100, 100, 230, 0.3)"}),stroke:new u.default({color:"rgba(40, 40, 230, 1)",width:2})});this.mobileGeolocationOptions={positionFeatureStyle:o,accuracyFeatureStyle:h,zoom:17,autorotate:!0},this.map=new i.default({layers:[new r.default({source:new a.default})],view:new n.default({center:[0,0],zoom:4})}),e.init(this.map)},g.MainController.$inject=["$scope","ngeoFeatureOverlayMgr"],f.controller("MainController",g.MainController),e.default=g},454:function(t,e){},455:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=d(o(2)),n=d(o(172)),r=d(o(147)),a=p(o(57)),s=p(o(1)),c=d(o(18)),l=d(o(213)),u=d(o(11)),h=d(o(24));function p(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}function d(t){return t&&t.__esModule?t:{default:t}}var g=angular.module("ngeoMobileGeolocation",[n.default.module.name,r.default.module.name]);g.GeolocationEventType={ERROR:"mobile-geolocation-error"},g.directive_=function(){return{restrict:"A",scope:{getMobileMapFn:"&ngeoMobileGeolocationMap",getMobileGeolocationOptionsFn:"&ngeoMobileGeolocationOptions"},controller:"ngeoGeolocationMobileController"}},g.directive("ngeoMobileGeolocation",g.directive_),g.Controller_=function(t,e,o,n,r){var a=this;e.on("click",this.toggleTracking.bind(this));var h=t.getMobileMapFn();i.default.assertInstanceof(h,u.default),this.$scope_=t,this.map_=h;var p=t.getMobileGeolocationOptionsFn()||{};i.default.assertObject(p),this.notification_=r,this.featureOverlay_=n.getFeatureOverlay(),this.geolocation_=new l.default({projection:h.getView().getProjection(),trackingOptions:{enableHighAccuracy:!0}}),p.autorotate&&this.autorotateListener(),this.geolocation_.on("error",function(e){this.untrack_();var i=void 0;switch(e.code){case 1:i=o.getString("User denied the request for Geolocation.");break;case 2:i=o.getString("Location information is unavailable.");break;case 3:i=o.getString("The request to get user location timed out.");break;default:i=o.getString("Geolocation: An unknown error occurred.")}this.notification_.error(i),t.$emit(g.GeolocationEventType.ERROR,e)},this),this.positionFeature_=new c.default,p.positionFeatureStyle&&this.positionFeature_.setStyle(p.positionFeatureStyle),this.accuracyFeature_=new c.default,p.accuracyFeatureStyle&&this.accuracyFeature_.setStyle(p.accuracyFeatureStyle),this.zoom_=p.zoom,this.follow_=!1,this.viewChangedByMe_=!1,s.listen(this.geolocation_,"change:accuracyGeometry",function(){a.accuracyFeature_.setGeometry(a.geolocation_.getAccuracyGeometry()),a.setPosition_()}),s.listen(this.geolocation_,"change:position",function(){a.setPosition_()});var d=h.getView();s.listen(d,"change:center",this.handleViewChange_,this),s.listen(d,"change:resolution",this.handleViewChange_,this)},g.Controller_.$inject=["$scope","$element","gettextCatalog","ngeoFeatureOverlayMgr","ngeoNotification"],g.Controller_.prototype.toggleTracking=function(){if(this.geolocation_.getTracking()){var t=this.geolocation_.getPosition();if(void 0===t)return this.untrack_(),void this.$scope_.$emit(g.GeolocationEventType.ERROR,null);i.default.assert(void 0!==t);var e=this.map_.getView().getCenter();Math.abs(t[0]-e[0])+Math.abs(t[1]-e[1])<2?this.untrack_():(this.untrack_(),this.track_())}else this.track_()},g.Controller_.prototype.track_=function(){this.featureOverlay_.addFeature(this.positionFeature_),this.featureOverlay_.addFeature(this.accuracyFeature_),this.follow_=!0,this.geolocation_.setTracking(!0)},g.Controller_.prototype.untrack_=function(){this.featureOverlay_.clear(),this.follow_=!1,this.geolocation_.setTracking(!1),this.notification_.clear()},g.Controller_.prototype.setPosition_=function(){var t=this.geolocation_.getPosition(),e=new h.default(t);this.positionFeature_.setGeometry(e);var o=this.accuracyFeature_.getGeometry();if(this.follow_){if(this.viewChangedByMe_=!0,void 0!==this.zoom_)this.map_.getView().setCenter(t),this.map_.getView().setZoom(this.zoom_);else if(o){var i=this.map_.getSize();this.map_.getView().fit(o,i)}this.viewChangedByMe_=!1}},g.Controller_.prototype.handleViewChange_=function(t){this.follow_&&!this.viewChangedByMe_&&(this.follow_=!1)},g.Controller_.prototype.autorotateListener=function(){var t=this,e=0;window.hasOwnProperty("ondeviceorientationabsolute")?window.addEventListener("deviceorientationabsolute",function(o){e=t.handleRotate_(o.alpha,e)},!0):window.hasOwnProperty("ondeviceorientation")?window.addEventListener("deviceorientation",function(o){e=o.webkitCompassHeading?t.handleRotate_(-o.webkitCompassHeading,e):t.handleRotate_(o.alpha-270,e)},!0):console.error("Orientation is not supported on this device")},g.Controller_.prototype.handleRotate_=function(t,e){if(this.geolocation_.getTracking()&&Math.abs(t-e)>.2){var o=(e=t)*Math.PI/180;this.map_.getView().animate({rotation:o,duration:350,easing:a.linear})}return e},g.controller("ngeoGeolocationMobileController",g.Controller_),e.default=g},5:function(t,e,o){"use strict";var i=o(0),n=o(19),r=o(20);const a=function(t){const e=t||{},o=void 0!==e.projection?e.projection:"EPSG:3857",i=void 0!==e.tileGrid?e.tileGrid:Object(r.a)({extent:Object(r.b)(o),maxZoom:e.maxZoom,minZoom:e.minZoom,tileSize:e.tileSize});n.a.call(this,{attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,opaque:e.opaque,projection:o,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileGrid:i,tileLoadFunction:e.tileLoadFunction,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:void 0===e.wrapX||e.wrapX,transition:e.transition})};Object(i.inherits)(a,n.a),e.a=a},84:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){};i.prototype.showMessage=function(t){},i.prototype.show=function(t){this.getMessageObjects(t).forEach(this.showMessage,this)},i.prototype.error=function(t){this.show(this.getMessageObjects(t,i.Type.ERROR))},i.prototype.info=function(t){this.show(this.getMessageObjects(t,i.Type.INFORMATION))},i.prototype.success=function(t){this.show(this.getMessageObjects(t,i.Type.SUCCESS))},i.prototype.warn=function(t){this.show(this.getMessageObjects(t,i.Type.WARNING))},i.prototype.getMessageObjects=function(t,e){var o=[],n=null,r=i.Type.INFORMATION;return"string"==typeof t?o.push({msg:t,type:void 0!==e?e:r}):Array.isArray(t)?t.forEach(function(i){"string"==typeof t?n={msg:i,type:void 0!==e?e:r}:(n=i,void 0!==e&&(n.type=e)),o.push(n)},this):(n=t,void 0!==e&&(n.type=e),void 0===n.type&&(n.type=r),o.push(n)),o},i.Type={ERROR:"error",INFORMATION:"information",SUCCESS:"success",WARNING:"warning"},e.default=i}},[452]);
//# sourceMappingURL=mobilegeolocation.a3f659833bed600f4afe.js.map