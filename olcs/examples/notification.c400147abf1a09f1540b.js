webpackJsonp([15],{144:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(o(3)),n=r(o(1)),a=r(o(83)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}(o(0));function r(e){return e&&e.__esModule?e:{default:e}}var l=function(e){a.default.call(this),this.timeout_=e;var t=angular.element('<div class="ngeo-notification"></div>');angular.element(document.body).append(t),this.container_=t,this.cache_={}};l.$inject=["$timeout"],l.$inject=["$timeout"],s.inherits(l,a.default),l.DEFAULT_DELAY_=7e3,l.prototype.notify=function(e){this.show(e)},l.prototype.clear=function(){for(var e in this.cache_)this.clearMessageByCacheItem_(this.cache_[parseInt(e,10)])},l.prototype.showMessage=function(e){var t=this,o=e.type;i.default.assertString(o,"Type should be set.");var n=["alert","fade"];switch(o){case a.default.Type.ERROR:n.push("alert-danger");break;case a.default.Type.INFORMATION:n.push("alert-info");break;case a.default.Type.SUCCESS:n.push("alert-success");break;case a.default.Type.WARNING:n.push("alert-warning")}var r=angular.element('<div class="'+n.join(" ")+'"></div>');(e.target?angular.element(e.target):this.container_).append(r),r.html(e.msg).addClass("in");var u=void 0!==e.delay?e.delay:l.DEFAULT_DELAY_,c={el:r},p=s.getUid(r);c.promise=this.timeout_(function(){r.alert("close"),delete t.cache_[p]},u),this.cache_[p]=c},l.prototype.clearMessageByCacheItem_=function(e){var t=e.el,o=e.promise,i=s.getUid(t);t.alert("close"),this.timeout_.cancel(o),delete this.cache_[i]},(l.module=angular.module("ngeoNotification",[])).service("ngeoNotification",l),n.default.module.requires.push(l.module.name),t.default=l},495:function(e,t,o){o(10),e.exports=o(496)},496:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),o(497),o(11);var i=s(o(1)),n=s(o(83)),a=s(o(144));function s(e){return e&&e.__esModule?e:{default:e}}var r={};r.module=angular.module("app",[i.default.module.name,a.default.module.name]),r.MainController=function(t){this.notification=t,this.i_=1,e('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})},r.MainController.$inject=["ngeoNotification"],r.MainController.prototype.notifyMulti=function(){this.notification.notify([{msg:["Error #",this.i_++].join(""),type:n.default.Type.ERROR},{msg:["Warning #",this.i_++].join(""),type:n.default.Type.WARNING},{msg:["Information #",this.i_++].join(""),type:n.default.Type.INFORMATION},{msg:["Success #",this.i_++].join(""),type:n.default.Type.SUCCESS}])},r.MainController.prototype.notifyTarget=function(){this.notification.notify({msg:"Error in an other target",target:angular.element("#my-messages"),type:n.default.Type.ERROR})},r.MainController.prototype.notifyQuick=function(){this.notification.notify({delay:1e3,msg:"Lasts one second",type:n.default.Type.SUCCESS})},r.module.controller("MainController",r.MainController),t.default=r}).call(t,o(29))},497:function(e,t){},83:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){};i.prototype.showMessage=function(e){},i.prototype.show=function(e){this.getMessageObjects(e).forEach(this.showMessage,this)},i.prototype.error=function(e){this.show(this.getMessageObjects(e,i.Type.ERROR))},i.prototype.info=function(e){this.show(this.getMessageObjects(e,i.Type.INFORMATION))},i.prototype.success=function(e){this.show(this.getMessageObjects(e,i.Type.SUCCESS))},i.prototype.warn=function(e){this.show(this.getMessageObjects(e,i.Type.WARNING))},i.prototype.getMessageObjects=function(e,t){var o=[],n=null,a=i.Type.INFORMATION;return"string"==typeof e?o.push({msg:e,type:void 0!==t?t:a}):Array.isArray(e)?e.forEach(function(i){"string"==typeof e?n={msg:i,type:void 0!==t?t:a}:(n=i,void 0!==t&&(n.type=t)),o.push(n)},this):(n=e,void 0!==t&&(n.type=t),void 0===n.type&&(n.type=a),o.push(n)),o},i.Type={ERROR:"error",INFORMATION:"information",SUCCESS:"success",WARNING:"warning"},t.default=i}},[495]);
//# sourceMappingURL=notification.c400147abf1a09f1540b.js.map