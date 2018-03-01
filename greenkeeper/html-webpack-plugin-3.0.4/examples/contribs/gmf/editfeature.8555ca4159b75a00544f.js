webpackJsonp([6],{541:function(t,e,i){i(15),i(16),t.exports=i(542)},542:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),i(543),i(95);var o=g(i(35)),n=g(i(145)),l=g(i(170)),s=g(i(28)),r=g(i(12)),a=g(i(17)),h=g(i(21)),p=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}(i(3)),u=g(i(20)),d=g(i(14)),c=g(i(100)),f=g(i(7)),m=g(i(101));function g(t){return t&&t.__esModule?t:{default:t}}var v={};v.module=angular.module("gmfapp",["gettext",n.default.name,l.default.module.name,s.default.name]),v.module.value("authenticationBaseUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi"),v.module.value("gmfLayersUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/layers/"),v.module.constant("defaultTheme","Demo"),v.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),v.MainController=function(e,i,n){this.scope_=e,this.editFeature_=i,this.gmfUser=n,this.wmsSource_=new m.default({url:"https://geomapfish-demo.camptocamp.net/2.2/wsgi/mapserv_proxy",params:{LAYERS:"point"}}),this.wmsLayer_=new c.default({source:this.wmsSource_}),this.pixelBuffer_=10,this.layerId_=113,this.feature=null,this.pending=!1,this.map=new a.default({layers:[new d.default({source:new f.default}),this.wmsLayer_],view:new h.default({projection:o.default,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:2})}),this.map.on("singleclick",this.handleMapSingleClick_,this),t('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})},v.MainController.$inject=["$scope","gmfEditFeature","gmfUser"],v.MainController.prototype.handleMapSingleClick_=function(t){var e=t.coordinate,i=this.map.getView().getResolution()*this.pixelBuffer_,o=p.buffer([e[0],e[1],e[0],e[1]],i);this.editFeature_.getFeaturesInExtent([this.layerId_],o).then(this.handleGetFeatures_.bind(this)),this.feature=null,this.pending=!0,this.scope_.$apply()},v.MainController.prototype.handleGetFeatures_=function(t){this.pending=!1,t.length&&(this.feature=t[0])},v.MainController.prototype.insertFeature=function(){this.pending=!0;var t=this.map,e=t.getView(),i=-50*e.getResolution(),o=t.getSize(),n=p.buffer(e.calculateExtent(o),i),l=p.getBottomLeft(n),s=p.getTopRight(n),a=l[0],h=l[1],d=s[0],c=d-a,f=s[1]-h,m=[a+Math.random()*c,d+Math.random()*f],g=new r.default({geometry:new u.default(m),name:"New point"});this.editFeature_.insertFeatures(this.layerId_,[g]).then(this.handleEditFeature_.bind(this))},v.MainController.prototype.updateFeature=function(){console.assert(this.feature),this.pending=!0,this.feature.set("name","Updated name"),this.editFeature_.updateFeature(this.layerId_,this.feature).then(this.handleEditFeature_.bind(this)),this.feature=null},v.MainController.prototype.deleteFeature=function(){console.assert(this.feature),this.editFeature_.deleteFeature(this.layerId_,this.feature).then(this.handleEditFeature_.bind(this)),this.feature=null},v.MainController.prototype.handleEditFeature_=function(t){this.pending=!1,this.refreshWMSLayer_()},v.MainController.prototype.refreshWMSLayer_=function(){this.wmsSource_.updateParams({random:Math.random()})},v.module.controller("MainController",v.MainController),e.default=v}).call(e,i(4))},543:function(t,e){},7:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(0),n=i(23),l=i(24);const s=function(t){const e=t||{},i=void 0!==e.projection?e.projection:"EPSG:3857",o=void 0!==e.tileGrid?e.tileGrid:Object(l.a)({extent:Object(l.b)(i),maxZoom:e.maxZoom,minZoom:e.minZoom,tileSize:e.tileSize});n.a.call(this,{attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,opaque:e.opaque,projection:i,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileGrid:o,tileLoadFunction:e.tileLoadFunction,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:void 0===e.wrapX||e.wrapX,transition:e.transition})};Object(o.inherits)(s,n.a);var r=s;const a=function(t){const e=t||{};let i;i=void 0!==e.attributions?e.attributions:[a.ATTRIBUTION];const o=void 0!==e.crossOrigin?e.crossOrigin:"anonymous",n=void 0!==e.url?e.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";r.call(this,{attributions:i,cacheSize:e.cacheSize,crossOrigin:o,opaque:void 0===e.opaque||e.opaque,maxZoom:void 0!==e.maxZoom?e.maxZoom:19,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileLoadFunction:e.tileLoadFunction,url:n,wrapX:e.wrapX})};Object(o.inherits)(a,r),a.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.';e.default=a},95:function(t,e,i){var o,n,l,s;s=function(t){return t.widget("ui.tooltip",{version:"1.12.1",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,track:!1,close:null,open:null},_addDescribedBy:function(e,i){var o=(e.attr("aria-describedby")||"").split(/\s+/);o.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(o.join(" ")))},_removeDescribedBy:function(e){var i=e.data("ui-tooltip-id"),o=(e.attr("aria-describedby")||"").split(/\s+/),n=t.inArray(i,o);-1!==n&&o.splice(n,1),e.removeData("ui-tooltip-id"),(o=t.trim(o.join(" ")))?e.attr("aria-describedby",o):e.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.liveRegion=t("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this.disabledTitles=t([])},_setOption:function(e,i){var o=this;this._super(e,i),"content"===e&&t.each(this.tooltips,function(t,e){o._updateContent(e.element)})},_setOptionDisabled:function(t){this[t?"_disable":"_enable"]()},_disable:function(){var e=this;t.each(this.tooltips,function(i,o){var n=t.Event("blur");n.target=n.currentTarget=o.element[0],e.close(n,!0)}),this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function(){var e=t(this);if(e.is("[title]"))return e.data("ui-tooltip-title",e.attr("title")).removeAttr("title")}))},_enable:function(){this.disabledTitles.each(function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))}),this.disabledTitles=t([])},open:function(e){var i=this,o=t(e?e.target:this.element).closest(this.options.items);o.length&&!o.data("ui-tooltip-id")&&(o.attr("title")&&o.data("ui-tooltip-title",o.attr("title")),o.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&o.parents().each(function(){var e,o=t(this);o.data("ui-tooltip-open")&&((e=t.Event("blur")).target=e.currentTarget=this,i.close(e,!0)),o.attr("title")&&(o.uniqueId(),i.parents[this.id]={element:this,title:o.attr("title")},o.attr("title",""))}),this._registerCloseHandlers(e,o),this._updateContent(o,e))},_updateContent:function(t,e){var i,o=this.options.content,n=this,l=e?e.type:null;if("string"==typeof o||o.nodeType||o.jquery)return this._open(e,t,o);(i=o.call(t[0],function(i){n._delay(function(){t.data("ui-tooltip-open")&&(e&&(e.type=l),this._open(e,t,i))})}))&&this._open(e,t,i)},_open:function(e,i,o){var n,l,s,r,a=t.extend({},this.options.position);function h(t){a.of=t,l.is(":hidden")||l.position(a)}o&&((n=this._find(i))?n.tooltip.find(".ui-tooltip-content").html(o):(i.is("[title]")&&(e&&"mouseover"===e.type?i.attr("title",""):i.removeAttr("title")),n=this._tooltip(i),l=n.tooltip,this._addDescribedBy(i,l.attr("id")),l.find(".ui-tooltip-content").html(o),this.liveRegion.children().hide(),(r=t("<div>").html(l.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"),r.removeAttr("id").find("[id]").removeAttr("id"),r.appendTo(this.liveRegion),this.options.track&&e&&/^mouse/.test(e.type)?(this._on(this.document,{mousemove:h}),h(e)):l.position(t.extend({of:i},this.options.position)),l.hide(),this._show(l,this.options.show),this.options.track&&this.options.show&&this.options.show.delay&&(s=this.delayedShow=setInterval(function(){l.is(":visible")&&(h(a.of),clearInterval(s))},t.fx.interval)),this._trigger("open",e,{tooltip:l})))},_registerCloseHandlers:function(e,i){var o={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var o=t.Event(e);o.currentTarget=i[0],this.close(o,!0)}}};i[0]!==this.element[0]&&(o.remove=function(){this._removeTooltip(this._find(i).tooltip)}),e&&"mouseover"!==e.type||(o.mouseleave="close"),e&&"focusin"!==e.type||(o.focusout="close"),this._on(!0,i,o)},close:function(e){var i,o=this,n=t(e?e.currentTarget:this.element),l=this._find(n);l?(i=l.tooltip,l.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&!n.attr("title")&&n.attr("title",n.data("ui-tooltip-title")),this._removeDescribedBy(n),l.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,function(){o._removeTooltip(t(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,function(e,i){t(i.element).attr("title",i.title),delete o.parents[e]}),l.closing=!0,this._trigger("close",e,{tooltip:i}),l.hiding||(l.closing=!1))):n.removeData("ui-tooltip-open")},_tooltip:function(e){var i=t("<div>").attr("role","tooltip"),o=t("<div>").appendTo(i),n=i.uniqueId().attr("id");return this._addClass(o,"ui-tooltip-content"),this._addClass(i,"ui-tooltip","ui-widget ui-widget-content"),i.appendTo(this._appendTo(e)),this.tooltips[n]={element:e,tooltip:i}},_find:function(t){var e=t.data("ui-tooltip-id");return e?this.tooltips[e]:null},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_appendTo:function(t){var e=t.closest(".ui-front, dialog");return e.length||(e=this.document[0].body),e},_destroy:function(){var e=this;t.each(this.tooltips,function(i,o){var n=t.Event("blur"),l=o.element;n.target=n.currentTarget=l[0],e.close(n,!0),t("#"+i).remove(),l.data("ui-tooltip-title")&&(l.attr("title")||l.attr("title",l.data("ui-tooltip-title")),l.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}}),!1!==t.uiBackCompat&&t.widget("ui.tooltip",t.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){var t=this._superApply(arguments);return this.options.tooltipClass&&t.tooltip.addClass(this.options.tooltipClass),t}}),t.ui.tooltip},n=[i(4),i(125),i(96),i(97),i(13),i(71)],void 0===(l="function"==typeof(o=s)?o.apply(e,n):o)||(t.exports=l)},96:function(t,e,i){var o,n,l,s;s=function(t){return function(){var e,i=Math.max,o=Math.abs,n=/left|center|right/,l=/top|center|bottom/,s=/[\+\-]\d+(\.[\d]+)?%?/,r=/^\w+/,a=/%$/,h=t.fn.position;function p(t,e,i){return[parseFloat(t[0])*(a.test(t[0])?e/100:1),parseFloat(t[1])*(a.test(t[1])?i/100:1)]}function u(e,i){return parseInt(t.css(e,i),10)||0}t.position={scrollbarWidth:function(){if(void 0!==e)return e;var i,o,n=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),l=n.children()[0];return t("body").append(n),i=l.offsetWidth,n.css("overflow","scroll"),i===(o=l.offsetWidth)&&(o=n[0].clientWidth),n.remove(),e=i-o},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),o=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth;return{width:"scroll"===o||"auto"===o&&e.height<e.element[0].scrollHeight?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),o=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:o,isDocument:n,offset:!o&&!n?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return h.apply(this,arguments);e=t.extend({},e);var a,d,c,f,m,g,v,y,_=t(e.of),w=t.position.getWithinInfo(e.within),b=t.position.getScrollInfo(w),T=(e.collision||"flip").split(" "),x={};return g=9===(y=(v=_)[0]).nodeType?{width:v.width(),height:v.height(),offset:{top:0,left:0}}:t.isWindow(y)?{width:v.width(),height:v.height(),offset:{top:v.scrollTop(),left:v.scrollLeft()}}:y.preventDefault?{width:0,height:0,offset:{top:y.pageY,left:y.pageX}}:{width:v.outerWidth(),height:v.outerHeight(),offset:v.offset()},_[0].preventDefault&&(e.at="left top"),d=g.width,c=g.height,f=g.offset,m=t.extend({},f),t.each(["my","at"],function(){var t,i,o=(e[this]||"").split(" ");1===o.length&&(o=n.test(o[0])?o.concat(["center"]):l.test(o[0])?["center"].concat(o):["center","center"]),o[0]=n.test(o[0])?o[0]:"center",o[1]=l.test(o[1])?o[1]:"center",t=s.exec(o[0]),i=s.exec(o[1]),x[this]=[t?t[0]:0,i?i[0]:0],e[this]=[r.exec(o[0])[0],r.exec(o[1])[0]]}),1===T.length&&(T[1]=T[0]),"right"===e.at[0]?m.left+=d:"center"===e.at[0]&&(m.left+=d/2),"bottom"===e.at[1]?m.top+=c:"center"===e.at[1]&&(m.top+=c/2),a=p(x.at,d,c),m.left+=a[0],m.top+=a[1],this.each(function(){var n,l,s=t(this),r=s.outerWidth(),h=s.outerHeight(),g=u(this,"marginLeft"),v=u(this,"marginTop"),y=r+g+u(this,"marginRight")+b.width,W=h+v+u(this,"marginBottom")+b.height,C=t.extend({},m),F=p(x.my,s.outerWidth(),s.outerHeight());"right"===e.my[0]?C.left-=r:"center"===e.my[0]&&(C.left-=r/2),"bottom"===e.my[1]?C.top-=h:"center"===e.my[1]&&(C.top-=h/2),C.left+=F[0],C.top+=F[1],n={marginLeft:g,marginTop:v},t.each(["left","top"],function(i,o){t.ui.position[T[i]]&&t.ui.position[T[i]][o](C,{targetWidth:d,targetHeight:c,elemWidth:r,elemHeight:h,collisionPosition:n,collisionWidth:y,collisionHeight:W,offset:[a[0]+F[0],a[1]+F[1]],my:e.my,at:e.at,within:w,elem:s})}),e.using&&(l=function(t){var n=f.left-C.left,l=n+d-r,a=f.top-C.top,p=a+c-h,u={target:{element:_,left:f.left,top:f.top,width:d,height:c},element:{element:s,left:C.left,top:C.top,width:r,height:h},horizontal:l<0?"left":n>0?"right":"center",vertical:p<0?"top":a>0?"bottom":"middle"};d<r&&o(n+l)<d&&(u.horizontal="center"),c<h&&o(a+p)<c&&(u.vertical="middle"),i(o(n),o(l))>i(o(a),o(p))?u.important="horizontal":u.important="vertical",e.using.call(this,t,u)}),s.offset(t.extend(C,{using:l}))})},t.ui.position={fit:{left:function(t,e){var o,n=e.within,l=n.isWindow?n.scrollLeft:n.offset.left,s=n.width,r=t.left-e.collisionPosition.marginLeft,a=l-r,h=r+e.collisionWidth-s-l;e.collisionWidth>s?a>0&&h<=0?(o=t.left+a+e.collisionWidth-s-l,t.left+=a-o):t.left=h>0&&a<=0?l:a>h?l+s-e.collisionWidth:l:a>0?t.left+=a:h>0?t.left-=h:t.left=i(t.left-r,t.left)},top:function(t,e){var o,n=e.within,l=n.isWindow?n.scrollTop:n.offset.top,s=e.within.height,r=t.top-e.collisionPosition.marginTop,a=l-r,h=r+e.collisionHeight-s-l;e.collisionHeight>s?a>0&&h<=0?(o=t.top+a+e.collisionHeight-s-l,t.top+=a-o):t.top=h>0&&a<=0?l:a>h?l+s-e.collisionHeight:l:a>0?t.top+=a:h>0?t.top-=h:t.top=i(t.top-r,t.top)}},flip:{left:function(t,e){var i,n,l=e.within,s=l.offset.left+l.scrollLeft,r=l.width,a=l.isWindow?l.scrollLeft:l.offset.left,h=t.left-e.collisionPosition.marginLeft,p=h-a,u=h+e.collisionWidth-r-a,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,c="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];p<0?((i=t.left+d+c+f+e.collisionWidth-r-s)<0||i<o(p))&&(t.left+=d+c+f):u>0&&((n=t.left-e.collisionPosition.marginLeft+d+c+f-a)>0||o(n)<u)&&(t.left+=d+c+f)},top:function(t,e){var i,n,l=e.within,s=l.offset.top+l.scrollTop,r=l.height,a=l.isWindow?l.scrollTop:l.offset.top,h=t.top-e.collisionPosition.marginTop,p=h-a,u=h+e.collisionHeight-r-a,d="top"===e.my[1]?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,c="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,f=-2*e.offset[1];p<0?((n=t.top+d+c+f+e.collisionHeight-r-s)<0||n<o(p))&&(t.top+=d+c+f):u>0&&((i=t.top-e.collisionPosition.marginTop+d+c+f-a)>0||o(i)<u)&&(t.top+=d+c+f)}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position},n=[i(4),i(13)],void 0===(l="function"==typeof(o=s)?o.apply(e,n):o)||(t.exports=l)},97:function(t,e,i){var o,n,l,s;s=function(t){return t.fn.extend({uniqueId:(e=0,function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}});var e},n=[i(4),i(13)],void 0===(l="function"==typeof(o=s)?o.apply(e,n):o)||(t.exports=l)}},[541]);
//# sourceMappingURL=editfeature.8555ca4159b75a00544f.js.map