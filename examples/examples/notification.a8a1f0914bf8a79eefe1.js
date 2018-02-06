webpackJsonp([35],{133:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){};r.prototype.showMessage=function(e){},r.prototype.show=function(e){this.getMessageObjects(e).forEach(this.showMessage,this)},r.prototype.error=function(e){this.show(this.getMessageObjects(e,r.Type.ERROR))},r.prototype.info=function(e){this.show(this.getMessageObjects(e,r.Type.INFORMATION))},r.prototype.success=function(e){this.show(this.getMessageObjects(e,r.Type.SUCCESS))},r.prototype.warn=function(e){this.show(this.getMessageObjects(e,r.Type.WARNING))},r.prototype.getMessageObjects=function(e,t){var o=[],n=null,s=r.Type.INFORMATION;return"string"==typeof e?o.push({msg:e,type:void 0!==t?t:s}):Array.isArray(e)?e.forEach(function(r){"string"==typeof e?n={msg:r,type:void 0!==t?t:s}:(n=r,void 0!==t&&(n.type=t)),o.push(n)},this):(n=e,void 0!==t&&(n.type=t),void 0===n.type&&(n.type=s),o.push(n)),o},r.Type={ERROR:"error",INFORMATION:"information",SUCCESS:"success",WARNING:"warning"},t.default=r},176:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(o(3)),n=a(o(1)),s=a(o(133)),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}(o(0));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(e){s.default.call(this),this.timeout_=e;var t=angular.element('<div class="ngeo-notification"></div>');angular.element(document.body).append(t),this.container_=t,this.cache_={}};l.$inject=["$timeout"],l.$inject=["$timeout"],i.inherits(l,s.default),l.DEFAULT_DELAY_=7e3,l.prototype.notify=function(e){this.show(e)},l.prototype.clear=function(){for(var e in this.cache_)this.clearMessageByCacheItem_(this.cache_[parseInt(e,10)])},l.prototype.showMessage=function(e){var t=this,o=e.type;r.default.assertString(o,"Type should be set.");var n=["alert","fade"];switch(o){case s.default.Type.ERROR:n.push("alert-danger");break;case s.default.Type.INFORMATION:n.push("alert-info");break;case s.default.Type.SUCCESS:n.push("alert-success");break;case s.default.Type.WARNING:n.push("alert-warning")}var a=angular.element('<div class="'+n.join(" ")+'"></div>');(e.target?angular.element(e.target):this.container_).append(a),a.html(e.msg).addClass("in");var u=void 0!==e.delay?e.delay:l.DEFAULT_DELAY_,c={el:a},p=i.getUid(a);c.promise=this.timeout_(function(){a.alert("close"),delete t.cache_[p]},u),this.cache_[p]=c},l.prototype.clearMessageByCacheItem_=function(e){var t=e.el,o=e.promise,r=i.getUid(t);t.alert("close"),this.timeout_.cancel(o),delete this.cache_[r]},(l.module=angular.module("ngeoNotification",[])).service("ngeoNotification",l),n.default.module.requires.push(l.module.name),t.default=l},3:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n={doAssertFailure_:function(e,t,o,r){var s="Assertion failed",i=void 0;o?(s+=": "+o,i=r):e&&(s+=": "+e,i=t);var a=new n.AssertionError(""+s,i||[]);n.errorHandler_(a)},setErrorHandler:function(e){n.ENABLE_ASSERTS&&(n.errorHandler_=e)},assert:function(e,t,o){return n.ENABLE_ASSERTS&&!e&&n.doAssertFailure_("",null,t,Array.prototype.slice.call(arguments,2)),e},fail:function(e,t){n.ENABLE_ASSERTS&&n.errorHandler_(new n.AssertionError("Failure"+(e?": "+e:""),Array.prototype.slice.call(arguments,1)))},assertNumber:function(e,t,o){return n.ENABLE_ASSERTS&&!goog.isNumber(e)&&n.doAssertFailure_("Expected number but got %s: %s.",[goog.typeOf(e),e],t,Array.prototype.slice.call(arguments,2)),e},assertString:function(e,t,o){return n.ENABLE_ASSERTS&&!goog.isString(e)&&n.doAssertFailure_("Expected string but got %s: %s.",[goog.typeOf(e),e],t,Array.prototype.slice.call(arguments,2)),e},assertFunction:function(e,t,o){return n.ENABLE_ASSERTS&&!goog.isFunction(e)&&n.doAssertFailure_("Expected function but got %s: %s.",[goog.typeOf(e),e],t,Array.prototype.slice.call(arguments,2)),e},assertObject:function(e,t,o){return n.ENABLE_ASSERTS&&!goog.isObject(e)&&n.doAssertFailure_("Expected object but got %s: %s.",[goog.typeOf(e),e],t,Array.prototype.slice.call(arguments,2)),e},assertArray:function(e,t,o){return n.ENABLE_ASSERTS&&!goog.isArray(e)&&n.doAssertFailure_("Expected array but got %s: %s.",[goog.typeOf(e),e],t,Array.prototype.slice.call(arguments,2)),e},assertBoolean:function(e,t,o){return n.ENABLE_ASSERTS&&!goog.isBoolean(e)&&n.doAssertFailure_("Expected boolean but got %s: %s.",[goog.typeOf(e),e],t,Array.prototype.slice.call(arguments,2)),e},assertElement:function(e,t,o){return!n.ENABLE_ASSERTS||goog.isObject(e)&&e.nodeType==goog.dom.NodeType.ELEMENT||n.doAssertFailure_("Expected Element but got %s: %s.",[goog.typeOf(e),e],t,Array.prototype.slice.call(arguments,2)),e},assertInstanceof:function(e,t,o,r){return!n.ENABLE_ASSERTS||e instanceof t||n.doAssertFailure_("Expected instanceof %s but got %s.",[n.getType_(t),n.getType_(e)],o,Array.prototype.slice.call(arguments,3)),e},assertObjectPrototypeIsIntact:function(){for(var e in Object.prototype)n.fail(e+" should not be enumerable in Object.prototype.")},getType_:function(e){return e instanceof Function?e.displayName||e.name||"unknown type name":e instanceof Object?e.constructor.displayName||e.constructor.name||Object.prototype.toString.call(e):null===e?"null":void 0===e?"undefined":r(e)}};t.default=n},375:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o(376),o(59);var r=s(o(133)),n=s(o(176));function s(e){return e&&e.__esModule?e:{default:e}}var i={};i.module=angular.module("app",[ngeo.module.name,n.default.module.name]),i.MainController=function(e){this.notification=e,this.i_=1,$('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})},i.MainController.prototype.notifyMulti=function(){this.notification.notify([{msg:["Error #",this.i_++].join(""),type:r.default.Type.ERROR},{msg:["Warning #",this.i_++].join(""),type:r.default.Type.WARNING},{msg:["Information #",this.i_++].join(""),type:r.default.Type.INFORMATION},{msg:["Success #",this.i_++].join(""),type:r.default.Type.SUCCESS}])},i.MainController.prototype.notifyTarget=function(){this.notification.notify({msg:"Error in an other target",target:angular.element("#my-messages"),type:r.default.Type.ERROR})},i.MainController.prototype.notifyQuick=function(){this.notification.notify({delay:1e3,msg:"Lasts one second",type:r.default.Type.SUCCESS})},i.module.controller("MainController",i.MainController),t.default=i},376:function(e,t){}},[375]);
//# sourceMappingURL=notification.a8a1f0914bf8a79eefe1.js.map