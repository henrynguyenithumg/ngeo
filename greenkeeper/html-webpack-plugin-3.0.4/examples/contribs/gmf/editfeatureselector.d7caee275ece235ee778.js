webpackJsonp([5],{544:function(t,e,i){i(15),i(16),t.exports=i(545)},545:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),i(546),i(95);var o=b(i(145)),n=b(i(328)),l=b(i(79)),s=b(i(47)),r=b(i(28)),a=b(i(19)),p=b(i(44)),h=b(i(93)),c=b(i(78)),d=b(i(35)),u=b(i(18)),f=b(i(17)),m=b(i(21)),g=b(i(14)),v=b(i(43)),y=b(i(7)),w=b(i(39));function b(t){return t&&t.__esModule?t:{default:t}}var _={};_.module=angular.module("gmfapp",["gettext",o.default.name,n.default.name,l.default.name,s.default.module.name,r.default.name,a.default.module.name,p.default.module.name,c.default.module.name]),_.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/themes?version=2&background=background"),_.module.value("authenticationBaseUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi"),_.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/themes?version=2&background=background"),_.module.value("gmfLayersUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/layers/"),_.module.constant("defaultTheme","Edit"),_.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),_.MainController=function(e,i,o,n,l,s){var r=this;this.scope_=e,this.gmfUser=n,this.featureHelper_=l,i.loadThemes(),this.gmfTreeManager=o,this.vectorLayer=new v.default({source:new w.default({wrapX:!1,features:new u.default}),style:function(t,e){return l.createEditingStyles(t)}}),this.map=new f.default({layers:[new g.default({source:new y.default})],view:new m.default({projection:d.default,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:2})}),i.getThemesObject().then(function(t){if(t){for(var e=0,i=t.length;e<i;e++)if(73===t[e].id){r.gmfTreeManager.setFirstLevelGroups(t[e].children);break}r.map.addLayer(r.vectorLayer)}}),this.editFeatureSelectorActive=!0;var a=new h.default(this,"editFeatureSelectorActive");s.registerTool("mapTools",a,!0),this.dummyActive=!1;var p=new h.default(this,"dummyActive");s.registerTool("mapTools",p,!1),t('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})},_.MainController.$inject=["$scope","gmfThemes","gmfTreeManager","gmfUser","ngeoFeatureHelper","ngeoToolActivateMgr"],_.module.controller("MainController",_.MainController),e.default=_}).call(e,i(4))},546:function(t,e){},7:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(0),n=i(23),l=i(24);const s=function(t){const e=t||{},i=void 0!==e.projection?e.projection:"EPSG:3857",o=void 0!==e.tileGrid?e.tileGrid:Object(l.a)({extent:Object(l.b)(i),maxZoom:e.maxZoom,minZoom:e.minZoom,tileSize:e.tileSize});n.a.call(this,{attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,opaque:e.opaque,projection:i,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileGrid:o,tileLoadFunction:e.tileLoadFunction,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:void 0===e.wrapX||e.wrapX,transition:e.transition})};Object(o.inherits)(s,n.a);var r=s;const a=function(t){const e=t||{};let i;i=void 0!==e.attributions?e.attributions:[a.ATTRIBUTION];const o=void 0!==e.crossOrigin?e.crossOrigin:"anonymous",n=void 0!==e.url?e.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";r.call(this,{attributions:i,cacheSize:e.cacheSize,crossOrigin:o,opaque:void 0===e.opaque||e.opaque,maxZoom:void 0!==e.maxZoom?e.maxZoom:19,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileLoadFunction:e.tileLoadFunction,url:n,wrapX:e.wrapX})};Object(o.inherits)(a,r),a.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.';e.default=a},95:function(t,e,i){var o,n,l,s;s=function(t){return t.widget("ui.tooltip",{version:"1.12.1",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,track:!1,close:null,open:null},_addDescribedBy:function(e,i){var o=(e.attr("aria-describedby")||"").split(/\s+/);o.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(o.join(" ")))},_removeDescribedBy:function(e){var i=e.data("ui-tooltip-id"),o=(e.attr("aria-describedby")||"").split(/\s+/),n=t.inArray(i,o);-1!==n&&o.splice(n,1),e.removeData("ui-tooltip-id"),(o=t.trim(o.join(" ")))?e.attr("aria-describedby",o):e.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.liveRegion=t("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this.disabledTitles=t([])},_setOption:function(e,i){var o=this;this._super(e,i),"content"===e&&t.each(this.tooltips,function(t,e){o._updateContent(e.element)})},_setOptionDisabled:function(t){this[t?"_disable":"_enable"]()},_disable:function(){var e=this;t.each(this.tooltips,function(i,o){var n=t.Event("blur");n.target=n.currentTarget=o.element[0],e.close(n,!0)}),this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function(){var e=t(this);if(e.is("[title]"))return e.data("ui-tooltip-title",e.attr("title")).removeAttr("title")}))},_enable:function(){this.disabledTitles.each(function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))}),this.disabledTitles=t([])},open:function(e){var i=this,o=t(e?e.target:this.element).closest(this.options.items);o.length&&!o.data("ui-tooltip-id")&&(o.attr("title")&&o.data("ui-tooltip-title",o.attr("title")),o.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&o.parents().each(function(){var e,o=t(this);o.data("ui-tooltip-open")&&((e=t.Event("blur")).target=e.currentTarget=this,i.close(e,!0)),o.attr("title")&&(o.uniqueId(),i.parents[this.id]={element:this,title:o.attr("title")},o.attr("title",""))}),this._registerCloseHandlers(e,o),this._updateContent(o,e))},_updateContent:function(t,e){var i,o=this.options.content,n=this,l=e?e.type:null;if("string"==typeof o||o.nodeType||o.jquery)return this._open(e,t,o);(i=o.call(t[0],function(i){n._delay(function(){t.data("ui-tooltip-open")&&(e&&(e.type=l),this._open(e,t,i))})}))&&this._open(e,t,i)},_open:function(e,i,o){var n,l,s,r,a=t.extend({},this.options.position);function p(t){a.of=t,l.is(":hidden")||l.position(a)}o&&((n=this._find(i))?n.tooltip.find(".ui-tooltip-content").html(o):(i.is("[title]")&&(e&&"mouseover"===e.type?i.attr("title",""):i.removeAttr("title")),n=this._tooltip(i),l=n.tooltip,this._addDescribedBy(i,l.attr("id")),l.find(".ui-tooltip-content").html(o),this.liveRegion.children().hide(),(r=t("<div>").html(l.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"),r.removeAttr("id").find("[id]").removeAttr("id"),r.appendTo(this.liveRegion),this.options.track&&e&&/^mouse/.test(e.type)?(this._on(this.document,{mousemove:p}),p(e)):l.position(t.extend({of:i},this.options.position)),l.hide(),this._show(l,this.options.show),this.options.track&&this.options.show&&this.options.show.delay&&(s=this.delayedShow=setInterval(function(){l.is(":visible")&&(p(a.of),clearInterval(s))},t.fx.interval)),this._trigger("open",e,{tooltip:l})))},_registerCloseHandlers:function(e,i){var o={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var o=t.Event(e);o.currentTarget=i[0],this.close(o,!0)}}};i[0]!==this.element[0]&&(o.remove=function(){this._removeTooltip(this._find(i).tooltip)}),e&&"mouseover"!==e.type||(o.mouseleave="close"),e&&"focusin"!==e.type||(o.focusout="close"),this._on(!0,i,o)},close:function(e){var i,o=this,n=t(e?e.currentTarget:this.element),l=this._find(n);l?(i=l.tooltip,l.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&!n.attr("title")&&n.attr("title",n.data("ui-tooltip-title")),this._removeDescribedBy(n),l.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,function(){o._removeTooltip(t(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,function(e,i){t(i.element).attr("title",i.title),delete o.parents[e]}),l.closing=!0,this._trigger("close",e,{tooltip:i}),l.hiding||(l.closing=!1))):n.removeData("ui-tooltip-open")},_tooltip:function(e){var i=t("<div>").attr("role","tooltip"),o=t("<div>").appendTo(i),n=i.uniqueId().attr("id");return this._addClass(o,"ui-tooltip-content"),this._addClass(i,"ui-tooltip","ui-widget ui-widget-content"),i.appendTo(this._appendTo(e)),this.tooltips[n]={element:e,tooltip:i}},_find:function(t){var e=t.data("ui-tooltip-id");return e?this.tooltips[e]:null},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_appendTo:function(t){var e=t.closest(".ui-front, dialog");return e.length||(e=this.document[0].body),e},_destroy:function(){var e=this;t.each(this.tooltips,function(i,o){var n=t.Event("blur"),l=o.element;n.target=n.currentTarget=l[0],e.close(n,!0),t("#"+i).remove(),l.data("ui-tooltip-title")&&(l.attr("title")||l.attr("title",l.data("ui-tooltip-title")),l.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}}),!1!==t.uiBackCompat&&t.widget("ui.tooltip",t.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){var t=this._superApply(arguments);return this.options.tooltipClass&&t.tooltip.addClass(this.options.tooltipClass),t}}),t.ui.tooltip},n=[i(4),i(125),i(96),i(97),i(13),i(71)],void 0===(l="function"==typeof(o=s)?o.apply(e,n):o)||(t.exports=l)},96:function(t,e,i){var o,n,l,s;s=function(t){return function(){var e,i=Math.max,o=Math.abs,n=/left|center|right/,l=/top|center|bottom/,s=/[\+\-]\d+(\.[\d]+)?%?/,r=/^\w+/,a=/%$/,p=t.fn.position;function h(t,e,i){return[parseFloat(t[0])*(a.test(t[0])?e/100:1),parseFloat(t[1])*(a.test(t[1])?i/100:1)]}function c(e,i){return parseInt(t.css(e,i),10)||0}t.position={scrollbarWidth:function(){if(void 0!==e)return e;var i,o,n=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),l=n.children()[0];return t("body").append(n),i=l.offsetWidth,n.css("overflow","scroll"),i===(o=l.offsetWidth)&&(o=n[0].clientWidth),n.remove(),e=i-o},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),o=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth;return{width:"scroll"===o||"auto"===o&&e.height<e.element[0].scrollHeight?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),o=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:o,isDocument:n,offset:!o&&!n?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return p.apply(this,arguments);e=t.extend({},e);var a,d,u,f,m,g,v,y,w=t(e.of),b=t.position.getWithinInfo(e.within),_=t.position.getScrollInfo(b),T=(e.collision||"flip").split(" "),W={};return g=9===(y=(v=w)[0]).nodeType?{width:v.width(),height:v.height(),offset:{top:0,left:0}}:t.isWindow(y)?{width:v.width(),height:v.height(),offset:{top:v.scrollTop(),left:v.scrollLeft()}}:y.preventDefault?{width:0,height:0,offset:{top:y.pageY,left:y.pageX}}:{width:v.outerWidth(),height:v.outerHeight(),offset:v.offset()},w[0].preventDefault&&(e.at="left top"),d=g.width,u=g.height,f=g.offset,m=t.extend({},f),t.each(["my","at"],function(){var t,i,o=(e[this]||"").split(" ");1===o.length&&(o=n.test(o[0])?o.concat(["center"]):l.test(o[0])?["center"].concat(o):["center","center"]),o[0]=n.test(o[0])?o[0]:"center",o[1]=l.test(o[1])?o[1]:"center",t=s.exec(o[0]),i=s.exec(o[1]),W[this]=[t?t[0]:0,i?i[0]:0],e[this]=[r.exec(o[0])[0],r.exec(o[1])[0]]}),1===T.length&&(T[1]=T[0]),"right"===e.at[0]?m.left+=d:"center"===e.at[0]&&(m.left+=d/2),"bottom"===e.at[1]?m.top+=u:"center"===e.at[1]&&(m.top+=u/2),a=h(W.at,d,u),m.left+=a[0],m.top+=a[1],this.each(function(){var n,l,s=t(this),r=s.outerWidth(),p=s.outerHeight(),g=c(this,"marginLeft"),v=c(this,"marginTop"),y=r+g+c(this,"marginRight")+_.width,x=p+v+c(this,"marginBottom")+_.height,H=t.extend({},m),L=h(W.my,s.outerWidth(),s.outerHeight());"right"===e.my[0]?H.left-=r:"center"===e.my[0]&&(H.left-=r/2),"bottom"===e.my[1]?H.top-=p:"center"===e.my[1]&&(H.top-=p/2),H.left+=L[0],H.top+=L[1],n={marginLeft:g,marginTop:v},t.each(["left","top"],function(i,o){t.ui.position[T[i]]&&t.ui.position[T[i]][o](H,{targetWidth:d,targetHeight:u,elemWidth:r,elemHeight:p,collisionPosition:n,collisionWidth:y,collisionHeight:x,offset:[a[0]+L[0],a[1]+L[1]],my:e.my,at:e.at,within:b,elem:s})}),e.using&&(l=function(t){var n=f.left-H.left,l=n+d-r,a=f.top-H.top,h=a+u-p,c={target:{element:w,left:f.left,top:f.top,width:d,height:u},element:{element:s,left:H.left,top:H.top,width:r,height:p},horizontal:l<0?"left":n>0?"right":"center",vertical:h<0?"top":a>0?"bottom":"middle"};d<r&&o(n+l)<d&&(c.horizontal="center"),u<p&&o(a+h)<u&&(c.vertical="middle"),i(o(n),o(l))>i(o(a),o(h))?c.important="horizontal":c.important="vertical",e.using.call(this,t,c)}),s.offset(t.extend(H,{using:l}))})},t.ui.position={fit:{left:function(t,e){var o,n=e.within,l=n.isWindow?n.scrollLeft:n.offset.left,s=n.width,r=t.left-e.collisionPosition.marginLeft,a=l-r,p=r+e.collisionWidth-s-l;e.collisionWidth>s?a>0&&p<=0?(o=t.left+a+e.collisionWidth-s-l,t.left+=a-o):t.left=p>0&&a<=0?l:a>p?l+s-e.collisionWidth:l:a>0?t.left+=a:p>0?t.left-=p:t.left=i(t.left-r,t.left)},top:function(t,e){var o,n=e.within,l=n.isWindow?n.scrollTop:n.offset.top,s=e.within.height,r=t.top-e.collisionPosition.marginTop,a=l-r,p=r+e.collisionHeight-s-l;e.collisionHeight>s?a>0&&p<=0?(o=t.top+a+e.collisionHeight-s-l,t.top+=a-o):t.top=p>0&&a<=0?l:a>p?l+s-e.collisionHeight:l:a>0?t.top+=a:p>0?t.top-=p:t.top=i(t.top-r,t.top)}},flip:{left:function(t,e){var i,n,l=e.within,s=l.offset.left+l.scrollLeft,r=l.width,a=l.isWindow?l.scrollLeft:l.offset.left,p=t.left-e.collisionPosition.marginLeft,h=p-a,c=p+e.collisionWidth-r-a,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,u="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];h<0?((i=t.left+d+u+f+e.collisionWidth-r-s)<0||i<o(h))&&(t.left+=d+u+f):c>0&&((n=t.left-e.collisionPosition.marginLeft+d+u+f-a)>0||o(n)<c)&&(t.left+=d+u+f)},top:function(t,e){var i,n,l=e.within,s=l.offset.top+l.scrollTop,r=l.height,a=l.isWindow?l.scrollTop:l.offset.top,p=t.top-e.collisionPosition.marginTop,h=p-a,c=p+e.collisionHeight-r-a,d="top"===e.my[1]?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,u="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,f=-2*e.offset[1];h<0?((n=t.top+d+u+f+e.collisionHeight-r-s)<0||n<o(h))&&(t.top+=d+u+f):c>0&&((i=t.top-e.collisionPosition.marginTop+d+u+f-a)>0||o(i)<c)&&(t.top+=d+u+f)}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position},n=[i(4),i(13)],void 0===(l="function"==typeof(o=s)?o.apply(e,n):o)||(t.exports=l)},97:function(t,e,i){var o,n,l,s;s=function(t){return t.fn.extend({uniqueId:(e=0,function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}});var e},n=[i(4),i(13)],void 0===(l="function"==typeof(o=s)?o.apply(e,n):o)||(t.exports=l)}},[544]);
//# sourceMappingURL=editfeatureselector.d7caee275ece235ee778.js.map