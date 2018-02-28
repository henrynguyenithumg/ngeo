webpackJsonp([5],{147:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=l(i(2)),n=l(i(82)),s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}(i(0));function l(t){return t&&t.__esModule?t:{default:t}}var r=function(t){n.default.call(this),this.timeout_=t;var e=angular.element('<div class="ngeo-notification"></div>');angular.element(document.body).append(e),this.container_=e,this.cache_={}};r.$inject=["$timeout"],r.$inject=["$timeout"],s.inherits(r,n.default),r.DEFAULT_DELAY_=7e3,r.prototype.notify=function(t){this.show(t)},r.prototype.clear=function(){for(var t in this.cache_)this.clearMessageByCacheItem_(this.cache_[parseInt(t,10)])},r.prototype.showMessage=function(t){var e=this,i=t.type;o.default.assertString(i,"Type should be set.");var l=["alert","fade"];switch(i){case n.default.Type.ERROR:l.push("alert-danger");break;case n.default.Type.INFORMATION:l.push("alert-info");break;case n.default.Type.SUCCESS:l.push("alert-success");break;case n.default.Type.WARNING:l.push("alert-warning")}var a=angular.element('<div class="'+l.join(" ")+'"></div>');(t.target?angular.element(t.target):this.container_).append(a),a.html(t.msg).addClass("in");var h=void 0!==t.delay?t.delay:r.DEFAULT_DELAY_,c={el:a},u=s.getUid(a);c.promise=this.timeout_(function(){a.alert("close"),delete e.cache_[u]},h),this.cache_[u]=c},r.prototype.clearMessageByCacheItem_=function(t){var e=t.el,i=t.promise,o=s.getUid(e);e.alert("close"),this.timeout_.cancel(i),delete this.cache_[o]},(r.module=angular.module("ngeoNotification",[])).service("ngeoNotification",r),e.default=r},148:function(t,e,i){var o,n,s,l;l=function(t){return t.widget("ui.tooltip",{version:"1.12.1",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,track:!1,close:null,open:null},_addDescribedBy:function(e,i){var o=(e.attr("aria-describedby")||"").split(/\s+/);o.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(o.join(" ")))},_removeDescribedBy:function(e){var i=e.data("ui-tooltip-id"),o=(e.attr("aria-describedby")||"").split(/\s+/),n=t.inArray(i,o);-1!==n&&o.splice(n,1),e.removeData("ui-tooltip-id"),(o=t.trim(o.join(" ")))?e.attr("aria-describedby",o):e.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.liveRegion=t("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this.disabledTitles=t([])},_setOption:function(e,i){var o=this;this._super(e,i),"content"===e&&t.each(this.tooltips,function(t,e){o._updateContent(e.element)})},_setOptionDisabled:function(t){this[t?"_disable":"_enable"]()},_disable:function(){var e=this;t.each(this.tooltips,function(i,o){var n=t.Event("blur");n.target=n.currentTarget=o.element[0],e.close(n,!0)}),this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function(){var e=t(this);if(e.is("[title]"))return e.data("ui-tooltip-title",e.attr("title")).removeAttr("title")}))},_enable:function(){this.disabledTitles.each(function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))}),this.disabledTitles=t([])},open:function(e){var i=this,o=t(e?e.target:this.element).closest(this.options.items);o.length&&!o.data("ui-tooltip-id")&&(o.attr("title")&&o.data("ui-tooltip-title",o.attr("title")),o.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&o.parents().each(function(){var e,o=t(this);o.data("ui-tooltip-open")&&((e=t.Event("blur")).target=e.currentTarget=this,i.close(e,!0)),o.attr("title")&&(o.uniqueId(),i.parents[this.id]={element:this,title:o.attr("title")},o.attr("title",""))}),this._registerCloseHandlers(e,o),this._updateContent(o,e))},_updateContent:function(t,e){var i,o=this.options.content,n=this,s=e?e.type:null;if("string"==typeof o||o.nodeType||o.jquery)return this._open(e,t,o);(i=o.call(t[0],function(i){n._delay(function(){t.data("ui-tooltip-open")&&(e&&(e.type=s),this._open(e,t,i))})}))&&this._open(e,t,i)},_open:function(e,i,o){var n,s,l,r,a=t.extend({},this.options.position);function h(t){a.of=t,s.is(":hidden")||s.position(a)}o&&((n=this._find(i))?n.tooltip.find(".ui-tooltip-content").html(o):(i.is("[title]")&&(e&&"mouseover"===e.type?i.attr("title",""):i.removeAttr("title")),n=this._tooltip(i),s=n.tooltip,this._addDescribedBy(i,s.attr("id")),s.find(".ui-tooltip-content").html(o),this.liveRegion.children().hide(),(r=t("<div>").html(s.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"),r.removeAttr("id").find("[id]").removeAttr("id"),r.appendTo(this.liveRegion),this.options.track&&e&&/^mouse/.test(e.type)?(this._on(this.document,{mousemove:h}),h(e)):s.position(t.extend({of:i},this.options.position)),s.hide(),this._show(s,this.options.show),this.options.track&&this.options.show&&this.options.show.delay&&(l=this.delayedShow=setInterval(function(){s.is(":visible")&&(h(a.of),clearInterval(l))},t.fx.interval)),this._trigger("open",e,{tooltip:s})))},_registerCloseHandlers:function(e,i){var o={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var o=t.Event(e);o.currentTarget=i[0],this.close(o,!0)}}};i[0]!==this.element[0]&&(o.remove=function(){this._removeTooltip(this._find(i).tooltip)}),e&&"mouseover"!==e.type||(o.mouseleave="close"),e&&"focusin"!==e.type||(o.focusout="close"),this._on(!0,i,o)},close:function(e){var i,o=this,n=t(e?e.currentTarget:this.element),s=this._find(n);s?(i=s.tooltip,s.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&!n.attr("title")&&n.attr("title",n.data("ui-tooltip-title")),this._removeDescribedBy(n),s.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,function(){o._removeTooltip(t(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,function(e,i){t(i.element).attr("title",i.title),delete o.parents[e]}),s.closing=!0,this._trigger("close",e,{tooltip:i}),s.hiding||(s.closing=!1))):n.removeData("ui-tooltip-open")},_tooltip:function(e){var i=t("<div>").attr("role","tooltip"),o=t("<div>").appendTo(i),n=i.uniqueId().attr("id");return this._addClass(o,"ui-tooltip-content"),this._addClass(i,"ui-tooltip","ui-widget ui-widget-content"),i.appendTo(this._appendTo(e)),this.tooltips[n]={element:e,tooltip:i}},_find:function(t){var e=t.data("ui-tooltip-id");return e?this.tooltips[e]:null},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_appendTo:function(t){var e=t.closest(".ui-front, dialog");return e.length||(e=this.document[0].body),e},_destroy:function(){var e=this;t.each(this.tooltips,function(i,o){var n=t.Event("blur"),s=o.element;n.target=n.currentTarget=s[0],e.close(n,!0),t("#"+i).remove(),s.data("ui-tooltip-title")&&(s.attr("title")||s.attr("title",s.data("ui-tooltip-title")),s.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}}),!1!==t.uiBackCompat&&t.widget("ui.tooltip",t.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){var t=this._superApply(arguments);return this.options.tooltipClass&&t.tooltip.addClass(this.options.tooltipClass),t}}),t.ui.tooltip},n=[i(8),i(176),i(149),i(150),i(26),i(97)],void 0===(s="function"==typeof(o=l)?o.apply(e,n):o)||(t.exports=s)},149:function(t,e,i){var o,n,s,l;l=function(t){return function(){var e,i=Math.max,o=Math.abs,n=/left|center|right/,s=/top|center|bottom/,l=/[\+\-]\d+(\.[\d]+)?%?/,r=/^\w+/,a=/%$/,h=t.fn.position;function c(t,e,i){return[parseFloat(t[0])*(a.test(t[0])?e/100:1),parseFloat(t[1])*(a.test(t[1])?i/100:1)]}function u(e,i){return parseInt(t.css(e,i),10)||0}t.position={scrollbarWidth:function(){if(void 0!==e)return e;var i,o,n=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),s=n.children()[0];return t("body").append(n),i=s.offsetWidth,n.css("overflow","scroll"),i===(o=s.offsetWidth)&&(o=n[0].clientWidth),n.remove(),e=i-o},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),o=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth;return{width:"scroll"===o||"auto"===o&&e.height<e.element[0].scrollHeight?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),o=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:o,isDocument:n,offset:!o&&!n?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return h.apply(this,arguments);e=t.extend({},e);var a,p,d,f,g,m,v,y,_=t(e.of),w=t.position.getWithinInfo(e.within),b=t.position.getScrollInfo(w),C=(e.collision||"flip").split(" "),T={};return m=9===(y=(v=_)[0]).nodeType?{width:v.width(),height:v.height(),offset:{top:0,left:0}}:t.isWindow(y)?{width:v.width(),height:v.height(),offset:{top:v.scrollTop(),left:v.scrollLeft()}}:y.preventDefault?{width:0,height:0,offset:{top:y.pageY,left:y.pageX}}:{width:v.outerWidth(),height:v.outerHeight(),offset:v.offset()},_[0].preventDefault&&(e.at="left top"),p=m.width,d=m.height,f=m.offset,g=t.extend({},f),t.each(["my","at"],function(){var t,i,o=(e[this]||"").split(" ");1===o.length&&(o=n.test(o[0])?o.concat(["center"]):s.test(o[0])?["center"].concat(o):["center","center"]),o[0]=n.test(o[0])?o[0]:"center",o[1]=s.test(o[1])?o[1]:"center",t=l.exec(o[0]),i=l.exec(o[1]),T[this]=[t?t[0]:0,i?i[0]:0],e[this]=[r.exec(o[0])[0],r.exec(o[1])[0]]}),1===C.length&&(C[1]=C[0]),"right"===e.at[0]?g.left+=p:"center"===e.at[0]&&(g.left+=p/2),"bottom"===e.at[1]?g.top+=d:"center"===e.at[1]&&(g.top+=d/2),a=c(T.at,p,d),g.left+=a[0],g.top+=a[1],this.each(function(){var n,s,l=t(this),r=l.outerWidth(),h=l.outerHeight(),m=u(this,"marginLeft"),v=u(this,"marginTop"),y=r+m+u(this,"marginRight")+b.width,W=h+v+u(this,"marginBottom")+b.height,O=t.extend({},g),x=c(T.my,l.outerWidth(),l.outerHeight());"right"===e.my[0]?O.left-=r:"center"===e.my[0]&&(O.left-=r/2),"bottom"===e.my[1]?O.top-=h:"center"===e.my[1]&&(O.top-=h/2),O.left+=x[0],O.top+=x[1],n={marginLeft:m,marginTop:v},t.each(["left","top"],function(i,o){t.ui.position[C[i]]&&t.ui.position[C[i]][o](O,{targetWidth:p,targetHeight:d,elemWidth:r,elemHeight:h,collisionPosition:n,collisionWidth:y,collisionHeight:W,offset:[a[0]+x[0],a[1]+x[1]],my:e.my,at:e.at,within:w,elem:l})}),e.using&&(s=function(t){var n=f.left-O.left,s=n+p-r,a=f.top-O.top,c=a+d-h,u={target:{element:_,left:f.left,top:f.top,width:p,height:d},element:{element:l,left:O.left,top:O.top,width:r,height:h},horizontal:s<0?"left":n>0?"right":"center",vertical:c<0?"top":a>0?"bottom":"middle"};p<r&&o(n+s)<p&&(u.horizontal="center"),d<h&&o(a+c)<d&&(u.vertical="middle"),i(o(n),o(s))>i(o(a),o(c))?u.important="horizontal":u.important="vertical",e.using.call(this,t,u)}),l.offset(t.extend(O,{using:s}))})},t.ui.position={fit:{left:function(t,e){var o,n=e.within,s=n.isWindow?n.scrollLeft:n.offset.left,l=n.width,r=t.left-e.collisionPosition.marginLeft,a=s-r,h=r+e.collisionWidth-l-s;e.collisionWidth>l?a>0&&h<=0?(o=t.left+a+e.collisionWidth-l-s,t.left+=a-o):t.left=h>0&&a<=0?s:a>h?s+l-e.collisionWidth:s:a>0?t.left+=a:h>0?t.left-=h:t.left=i(t.left-r,t.left)},top:function(t,e){var o,n=e.within,s=n.isWindow?n.scrollTop:n.offset.top,l=e.within.height,r=t.top-e.collisionPosition.marginTop,a=s-r,h=r+e.collisionHeight-l-s;e.collisionHeight>l?a>0&&h<=0?(o=t.top+a+e.collisionHeight-l-s,t.top+=a-o):t.top=h>0&&a<=0?s:a>h?s+l-e.collisionHeight:s:a>0?t.top+=a:h>0?t.top-=h:t.top=i(t.top-r,t.top)}},flip:{left:function(t,e){var i,n,s=e.within,l=s.offset.left+s.scrollLeft,r=s.width,a=s.isWindow?s.scrollLeft:s.offset.left,h=t.left-e.collisionPosition.marginLeft,c=h-a,u=h+e.collisionWidth-r-a,p="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,d="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];c<0?((i=t.left+p+d+f+e.collisionWidth-r-l)<0||i<o(c))&&(t.left+=p+d+f):u>0&&((n=t.left-e.collisionPosition.marginLeft+p+d+f-a)>0||o(n)<u)&&(t.left+=p+d+f)},top:function(t,e){var i,n,s=e.within,l=s.offset.top+s.scrollTop,r=s.height,a=s.isWindow?s.scrollTop:s.offset.top,h=t.top-e.collisionPosition.marginTop,c=h-a,u=h+e.collisionHeight-r-a,p="top"===e.my[1]?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,d="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,f=-2*e.offset[1];c<0?((n=t.top+p+d+f+e.collisionHeight-r-l)<0||n<o(c))&&(t.top+=p+d+f):u>0&&((i=t.top-e.collisionPosition.marginTop+p+d+f-a)>0||o(i)<u)&&(t.top+=p+d+f)}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position},n=[i(8),i(26)],void 0===(s="function"==typeof(o=l)?o.apply(e,n):o)||(t.exports=s)},150:function(t,e,i){var o,n,s,l;l=function(t){return t.fn.extend({uniqueId:(e=0,function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}});var e},n=[i(8),i(26)],void 0===(s="function"==typeof(o=l)?o.apply(e,n):o)||(t.exports=s)},491:function(t,e,i){i(9),t.exports=i(492)},492:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),i(493),i(10),i(148);var o=s(i(82)),n=s(i(147));function s(t){return t&&t.__esModule?t:{default:t}}var l={};l.module=angular.module("app",[n.default.module.name]),l.MainController=function(e){this.notification=e,this.i_=1,t('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})},l.MainController.$inject=["ngeoNotification"],l.MainController.prototype.notifyMulti=function(){this.notification.notify([{msg:["Error #",this.i_++].join(""),type:o.default.Type.ERROR},{msg:["Warning #",this.i_++].join(""),type:o.default.Type.WARNING},{msg:["Information #",this.i_++].join(""),type:o.default.Type.INFORMATION},{msg:["Success #",this.i_++].join(""),type:o.default.Type.SUCCESS}])},l.MainController.prototype.notifyTarget=function(){this.notification.notify({msg:"Error in an other target",target:angular.element("#my-messages"),type:o.default.Type.ERROR})},l.MainController.prototype.notifyQuick=function(){this.notification.notify({delay:1e3,msg:"Lasts one second",type:o.default.Type.SUCCESS})},l.module.controller("MainController",l.MainController),e.default=l}).call(e,i(8))},493:function(t,e){},82:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){};o.prototype.showMessage=function(t){},o.prototype.show=function(t){this.getMessageObjects(t).forEach(this.showMessage,this)},o.prototype.error=function(t){this.show(this.getMessageObjects(t,o.Type.ERROR))},o.prototype.info=function(t){this.show(this.getMessageObjects(t,o.Type.INFORMATION))},o.prototype.success=function(t){this.show(this.getMessageObjects(t,o.Type.SUCCESS))},o.prototype.warn=function(t){this.show(this.getMessageObjects(t,o.Type.WARNING))},o.prototype.getMessageObjects=function(t,e){var i=[],n=null,s=o.Type.INFORMATION;return"string"==typeof t?i.push({msg:t,type:void 0!==e?e:s}):Array.isArray(t)?t.forEach(function(o){"string"==typeof t?n={msg:o,type:void 0!==e?e:s}:(n=o,void 0!==e&&(n.type=e)),i.push(n)},this):(n=t,void 0!==e&&(n.type=e),void 0===n.type&&(n.type=s),i.push(n)),i},o.Type={ERROR:"error",INFORMATION:"information",SUCCESS:"success",WARNING:"warning"},e.default=o},97:function(t,e,i){var o,n,s,l;l=function(t){var e,i=0,o=Array.prototype.slice;return t.cleanData=(e=t.cleanData,function(i){var o,n,s;for(s=0;null!=(n=i[s]);s++)try{(o=t._data(n,"events"))&&o.remove&&t(n).triggerHandler("remove")}catch(t){}e(i)}),t.widget=function(e,i,o){var n,s,l,r={},a=e.split(".")[0],h=a+"-"+(e=e.split(".")[1]);return o||(o=i,i=t.Widget),t.isArray(o)&&(o=t.extend.apply(null,[{}].concat(o))),t.expr[":"][h.toLowerCase()]=function(e){return!!t.data(e,h)},t[a]=t[a]||{},n=t[a][e],s=t[a][e]=function(t,e){if(!this._createWidget)return new s(t,e);arguments.length&&this._createWidget(t,e)},t.extend(s,n,{version:o.version,_proto:t.extend({},o),_childConstructors:[]}),(l=new i).options=t.widget.extend({},l.options),t.each(o,function(e,o){t.isFunction(o)?r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,s=this._superApply;return this._super=t,this._superApply=n,e=o.apply(this,arguments),this._super=i,this._superApply=s,e}}():r[e]=o}),s.prototype=t.widget.extend(l,{widgetEventPrefix:n&&l.widgetEventPrefix||e},r,{constructor:s,namespace:a,widgetName:e,widgetFullName:h}),n?(t.each(n._childConstructors,function(e,i){var o=i.prototype;t.widget(o.namespace+"."+o.widgetName,s,i._proto)}),delete n._childConstructors):i._childConstructors.push(s),t.widget.bridge(e,s),s},t.widget.extend=function(e){for(var i,n,s=o.call(arguments,1),l=0,r=s.length;l<r;l++)for(i in s[l])n=s[l][i],s[l].hasOwnProperty(i)&&void 0!==n&&(t.isPlainObject(n)?e[i]=t.isPlainObject(e[i])?t.widget.extend({},e[i],n):t.widget.extend({},n):e[i]=n);return e},t.widget.bridge=function(e,i){var n=i.prototype.widgetFullName||e;t.fn[e]=function(s){var l="string"==typeof s,r=o.call(arguments,1),a=this;return l?this.length||"instance"!==s?this.each(function(){var i,o=t.data(this,n);return"instance"===s?(a=o,!1):o?t.isFunction(o[s])&&"_"!==s.charAt(0)?(i=o[s].apply(o,r))!==o&&void 0!==i?(a=i&&i.jquery?a.pushStack(i.get()):i,!1):void 0:t.error("no such method '"+s+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+s+"'")}):a=void 0:(r.length&&(s=t.widget.extend.apply(null,[s].concat(r))),this.each(function(){var e=t.data(this,n);e?(e.option(s||{}),e._init&&e._init()):t.data(this,n,new i(s,this))})),a}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,o){o=t(o||this.defaultElement||this)[0],this.element=t(o),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},o!==this&&(t.data(o,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===o&&this.destroy()}}),this.document=t(o.style?o.ownerDocument:o.document||o),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var o,n,s,l=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(l={},e=(o=e.split(".")).shift(),o.length){for(n=l[e]=t.widget.extend({},this.options[e]),s=0;s<o.length-1;s++)n[o[s]]=n[o[s]]||{},n=n[o[s]];if(e=o.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];l[e]=i}return this._setOptions(l),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,o,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(o=t(n.get()),this._removeClass(n,i),o.addClass(this._classes({element:o,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){var i=[],o=this;function n(n,s){var l,r;for(r=0;r<n.length;r++)l=o.classesElementLookup[n[r]]||t(),l=e.add?t(t.unique(l.get().concat(e.element.get()))):t(l.not(e.element).get()),o.classesElementLookup[n[r]]=l,i.push(n[r]),s&&e.classes[n[r]]&&i.push(e.classes[n[r]])}return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&n(e.keys.match(/\S+/g)||[],!0),e.extra&&n(e.extra.match(/\S+/g)||[]),i.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,function(o,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[o]=t(n.not(e.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,o){o="boolean"==typeof o?o:i;var n="string"==typeof t||null===t,s={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:o};return s.element.toggleClass(this._classes(s),o),this},_on:function(e,i,o){var n,s=this;"boolean"!=typeof e&&(o=i,i=e,e=!1),o?(i=n=t(i),this.bindings=this.bindings.add(i)):(o=i,i=this.element,n=this.widget()),t.each(o,function(o,l){function r(){if(e||!0!==s.options.disabled&&!t(this).hasClass("ui-state-disabled"))return("string"==typeof l?s[l]:l).apply(s,arguments)}"string"!=typeof l&&(r.guid=l.guid=l.guid||r.guid||t.guid++);var a=o.match(/^([\w:-]*)\s*(.*)$/),h=a[1]+s.eventNamespace,c=a[2];c?n.on(h,c,r):i.on(h,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){var i=this;return setTimeout(function(){return("string"==typeof t?i[t]:t).apply(i,arguments)},e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,o){var n,s,l=this.options[e];if(o=o||{},(i=t.Event(i)).type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],s=i.originalEvent)for(n in s)n in i||(i[n]=s[n]);return this.element.trigger(i,o),!(t.isFunction(l)&&!1===l.apply(this.element[0],[i].concat(o))||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(o,n,s){var l;"string"==typeof n&&(n={effect:n});var r=n?!0===n||"number"==typeof n?i:n.effect||i:e;"number"==typeof(n=n||{})&&(n={duration:n}),l=!t.isEmptyObject(n),n.complete=s,n.delay&&o.delay(n.delay),l&&t.effects&&t.effects.effect[r]?o[e](n):r!==e&&o[r]?o[r](n.duration,n.easing,s):o.queue(function(i){t(this)[e](),s&&s.call(o[0]),i()})}}),t.widget},n=[i(8),i(26)],void 0===(s="function"==typeof(o=l)?o.apply(e,n):o)||(t.exports=s)}},[491]);
//# sourceMappingURL=notification.e3e8e640d6e05bc0c108.js.map