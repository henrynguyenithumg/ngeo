webpackJsonp([7],{147:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(o(2)),n=a(o(82)),r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}(o(0));function a(t){return t&&t.__esModule?t:{default:t}}var s=function(t){n.default.call(this),this.timeout_=t;var e=angular.element('<div class="ngeo-notification"></div>');angular.element(document.body).append(e),this.container_=e,this.cache_={}};s.$inject=["$timeout"],s.$inject=["$timeout"],r.inherits(s,n.default),s.DEFAULT_DELAY_=7e3,s.prototype.notify=function(t){this.show(t)},s.prototype.clear=function(){for(var t in this.cache_)this.clearMessageByCacheItem_(this.cache_[parseInt(t,10)])},s.prototype.showMessage=function(t){var e=this,o=t.type;i.default.assertString(o,"Type should be set.");var a=["alert","fade"];switch(o){case n.default.Type.ERROR:a.push("alert-danger");break;case n.default.Type.INFORMATION:a.push("alert-info");break;case n.default.Type.SUCCESS:a.push("alert-success");break;case n.default.Type.WARNING:a.push("alert-warning")}var c=angular.element('<div class="'+a.join(" ")+'"></div>');(t.target?angular.element(t.target):this.container_).append(c),c.html(t.msg).addClass("in");var l=void 0!==t.delay?t.delay:s.DEFAULT_DELAY_,u={el:c},p=r.getUid(c);u.promise=this.timeout_(function(){c.alert("close"),delete e.cache_[p]},l),this.cache_[p]=u},s.prototype.clearMessageByCacheItem_=function(t){var e=t.el,o=t.promise,i=r.getUid(e);e.alert("close"),this.timeout_.cancel(o),delete this.cache_[i]},(s.module=angular.module("ngeoNotification",[])).service("ngeoNotification",s),e.default=s},219:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(0),n="accuracy",r="accuracyGeometry",a="altitude",s="altitudeAccuracy",c="heading",l="position",u="projection",p="speed",h="tracking",d="trackingOptions",g=o(32),f=o(1),y=o(13),_=o(22),v=o(40),m=o(14),O=o(11);o.d(e,"GeolocationOptions",function(){});const w=function(t){g.default.call(this);const e=t||{};this.position_=null,this.transform_=O.identityTransform,this.watchId_=void 0,Object(f.listen)(this,g.default.getChangeEventType(u),this.handleProjectionChanged_,this),Object(f.listen)(this,g.default.getChangeEventType(h),this.handleTrackingChanged_,this),void 0!==e.projection&&this.setProjection(e.projection),void 0!==e.trackingOptions&&this.setTrackingOptions(e.trackingOptions),this.setTracking(void 0!==e.tracking&&e.tracking)};Object(i.inherits)(w,g.default),w.prototype.disposeInternal=function(){this.setTracking(!1),g.default.prototype.disposeInternal.call(this)},w.prototype.handleProjectionChanged_=function(){const t=this.getProjection();t&&(this.transform_=Object(O.getTransformFromProjections)(Object(O.get)("EPSG:4326"),t),this.position_&&this.set(l,this.transform_(this.position_)))},w.prototype.handleTrackingChanged_=function(){if(v.GEOLOCATION){const t=this.getTracking();t&&void 0===this.watchId_?this.watchId_=navigator.geolocation.watchPosition(this.positionChange_.bind(this),this.positionError_.bind(this),this.getTrackingOptions()):t||void 0===this.watchId_||(navigator.geolocation.clearWatch(this.watchId_),this.watchId_=void 0)}},w.prototype.positionChange_=function(t){const e=t.coords;this.set(n,e.accuracy),this.set(a,null===e.altitude?void 0:e.altitude),this.set(s,null===e.altitudeAccuracy?void 0:e.altitudeAccuracy),this.set(c,null===e.heading?void 0:Object(m.toRadians)(e.heading)),this.position_?(this.position_[0]=e.longitude,this.position_[1]=e.latitude):this.position_=[e.longitude,e.latitude];const o=this.transform_(this.position_);this.set(l,o),this.set(p,null===e.speed?void 0:e.speed);const i=Object(_.circular)(this.position_,e.accuracy);i.applyTransform(this.transform_),this.set(r,i),this.changed()},w.prototype.positionError_=function(t){t.type=y.a.ERROR,this.setTracking(!1),this.dispatchEvent(t)},w.prototype.getAccuracy=function(){return this.get(n)},w.prototype.getAccuracyGeometry=function(){return this.get(r)||null},w.prototype.getAltitude=function(){return this.get(a)},w.prototype.getAltitudeAccuracy=function(){return this.get(s)},w.prototype.getHeading=function(){return this.get(c)},w.prototype.getPosition=function(){return this.get(l)},w.prototype.getProjection=function(){return this.get(u)},w.prototype.getSpeed=function(){return this.get(p)},w.prototype.getTracking=function(){return this.get(h)},w.prototype.getTrackingOptions=function(){return this.get(d)},w.prototype.setProjection=function(t){this.set(u,Object(O.get)(t))},w.prototype.setTracking=function(t){this.set(h,t)},w.prototype.setTrackingOptions=function(t){this.set(d,t)};e.default=w},4:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(0),n=o(5);const r=function(t){const e=t||{};let o;o=void 0!==e.attributions?e.attributions:[r.ATTRIBUTION];const i=void 0!==e.crossOrigin?e.crossOrigin:"anonymous",a=void 0!==e.url?e.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";n.a.call(this,{attributions:o,cacheSize:e.cacheSize,crossOrigin:i,opaque:void 0===e.opaque||e.opaque,maxZoom:void 0!==e.maxZoom?e.maxZoom:19,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileLoadFunction:e.tileLoadFunction,url:a,wrapX:e.wrapX})};Object(i.inherits)(r,n.a),r.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',e.default=r},420:function(t,e,o){o(9),t.exports=o(421)},421:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),o(422),o(10);var i=d(o(12)),n=d(o(16)),r=d(o(17)),a=d(o(4)),s=d(o(59)),c=d(o(23)),l=d(o(41)),u=d(o(42)),p=d(o(15)),h=d(o(423));function d(t){return t&&t.__esModule?t:{default:t}}var g={};g.module=angular.module("app",[h.default.name,p.default.name]),g.MainController=function(t,e){var o=new c.default({image:new s.default({radius:6,fill:new l.default({color:"rgba(230, 100, 100, 1)"}),stroke:new u.default({color:"rgba(230, 40, 40, 1)",width:2})})}),p=new c.default({fill:new l.default({color:"rgba(100, 100, 230, 0.3)"}),stroke:new u.default({color:"rgba(40, 40, 230, 1)",width:2})});this.desktopGeolocationOptions={positionFeatureStyle:o,accuracyFeatureStyle:p,zoom:17},this.map=new i.default({layers:[new r.default({source:new a.default})],view:new n.default({center:[0,0],zoom:4})}),e.init(this.map)},g.MainController.$inject=["$scope","ngeoFeatureOverlayMgr"],g.module.controller("MainController",g.MainController),e.default=g},422:function(t,e){},423:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=p(o(2)),n=p(o(177)),r=p(o(147)),a=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}(o(1)),s=p(o(18)),c=p(o(219)),l=p(o(12)),u=p(o(24));function p(t){return t&&t.__esModule?t:{default:t}}var h=angular.module("ngeoDesktopGeolocation",[n.default.module.name,r.default.module.name]);h.GeolocationEventType={ERROR:"desktop-geolocation-error"},h.directive_=function(){return{restrict:"A",scope:{getDesktopMapFn:"&ngeoDesktopGeolocationMap",getDesktopGeolocationOptionsFn:"&ngeoDesktopGeolocationOptions"},controller:"ngeoGeolocationDesktopController"}},h.directive("ngeoDesktopGeolocation",h.directive_),h.Controller_=function(t,e,o,n){var r=this;e.on("click",this.toggle.bind(this));var u=t.getDesktopMapFn();i.default.assertInstanceof(u,l.default),this.map_=u;var p=t.getDesktopGeolocationOptionsFn()||{};i.default.assertObject(p),this.$scope_=t,this.notification_=n,this.featureOverlay_=o.getFeatureOverlay(),this.geolocation_=new c.default({projection:u.getView().getProjection()}),this.geolocation_.on("error",function(e){this.deactivate_(),this.notification_.error(e.message),t.$emit(h.GeolocationEventType.ERROR,e)},this),this.positionFeature_=new s.default,p.positionFeatureStyle&&this.positionFeature_.setStyle(p.positionFeatureStyle),this.accuracyFeature_=new s.default,p.accuracyFeatureStyle&&this.accuracyFeature_.setStyle(p.accuracyFeatureStyle),this.zoom_=p.zoom,this.active_=!1,a.listen(this.geolocation_,"change:accuracyGeometry",function(){r.accuracyFeature_.setGeometry(r.geolocation_.getAccuracyGeometry())}),a.listen(this.geolocation_,"change:position",function(t){r.setPosition_(t)})},h.Controller_.$inject=["$scope","$element","ngeoFeatureOverlayMgr","ngeoNotification"],h.Controller_.prototype.toggle=function(){this.active_?this.deactivate_():this.activate_()},h.Controller_.prototype.activate_=function(){this.featureOverlay_.addFeature(this.positionFeature_),this.featureOverlay_.addFeature(this.accuracyFeature_),this.geolocation_.setTracking(!0),this.active_=!0},h.Controller_.prototype.deactivate_=function(){this.featureOverlay_.clear(),this.active_=!1,this.notification_.clear()},h.Controller_.prototype.setPosition_=function(t){var e=this.geolocation_.getPosition(),o=new u.default(e);this.positionFeature_.setGeometry(o),this.map_.getView().setCenter(e),void 0!==this.zoom_&&this.map_.getView().setZoom(this.zoom_),this.geolocation_.setTracking(!1)},h.controller("ngeoGeolocationDesktopController",h.Controller_),e.default=h},5:function(t,e,o){"use strict";var i=o(0),n=o(19),r=o(20);const a=function(t){const e=t||{},o=void 0!==e.projection?e.projection:"EPSG:3857",i=void 0!==e.tileGrid?e.tileGrid:Object(r.a)({extent:Object(r.b)(o),maxZoom:e.maxZoom,minZoom:e.minZoom,tileSize:e.tileSize});n.a.call(this,{attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,opaque:e.opaque,projection:o,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileGrid:i,tileLoadFunction:e.tileLoadFunction,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:void 0===e.wrapX||e.wrapX,transition:e.transition})};Object(i.inherits)(a,n.a),e.a=a},82:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){};i.prototype.showMessage=function(t){},i.prototype.show=function(t){this.getMessageObjects(t).forEach(this.showMessage,this)},i.prototype.error=function(t){this.show(this.getMessageObjects(t,i.Type.ERROR))},i.prototype.info=function(t){this.show(this.getMessageObjects(t,i.Type.INFORMATION))},i.prototype.success=function(t){this.show(this.getMessageObjects(t,i.Type.SUCCESS))},i.prototype.warn=function(t){this.show(this.getMessageObjects(t,i.Type.WARNING))},i.prototype.getMessageObjects=function(t,e){var o=[],n=null,r=i.Type.INFORMATION;return"string"==typeof t?o.push({msg:t,type:void 0!==e?e:r}):Array.isArray(t)?t.forEach(function(i){"string"==typeof t?n={msg:i,type:void 0!==e?e:r}:(n=i,void 0!==e&&(n.type=e)),o.push(n)},this):(n=t,void 0!==e&&(n.type=e),void 0===n.type&&(n.type=r),o.push(n)),o},i.Type={ERROR:"error",INFORMATION:"information",SUCCESS:"success",WARNING:"warning"},e.default=i}},[420]);
//# sourceMappingURL=desktopgeolocation.a075c9db4bf0b06c823d.js.map