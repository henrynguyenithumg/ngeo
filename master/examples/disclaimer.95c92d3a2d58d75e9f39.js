webpackJsonp([1],{107:function(e,t,i){i(108),e.exports="ngSanitize"},108:function(e,t){!function(e,t){"use strict";var i,o,n,r,s,a,l,c,u,p=t.$$minErr("$sanitize");t.module("ngSanitize",[]).provider("$sanitize",function(){var d=!1;this.$get=["$$sanitizeUri",function(e){return d&&o(x,_),function(t){var i=[];return c(t,u(i,function(t,i){return!/^unsafe:/.test(e(t,i))})),i.join("")}}],this.enableSvg=function(e){return r(e)?(d=e,this):d},i=t.bind,o=t.extend,n=t.forEach,r=t.isDefined,s=t.lowercase,a=t.noop,c=function(e,t){null==e?e="":"string"!=typeof e&&(e=""+e);var i=j(e);if(!i)return"";var o=5;do{if(0===o)throw p("uinput","Failed to sanitize html because the input is unstable");o--,e=i.innerHTML,i=j(e)}while(e!==i.innerHTML);for(var n=i.firstChild;n;){switch(n.nodeType){case 1:t.start(n.nodeName.toLowerCase(),N(n.attributes));break;case 3:t.chars(n.textContent)}var r;if(!((r=n.firstChild)||(1===n.nodeType&&t.end(n.nodeName.toLowerCase()),r=R("nextSibling",n))))for(;null==r&&(n=R("parentNode",n))!==i;)r=R("nextSibling",n),1===n.nodeType&&t.end(n.nodeName.toLowerCase());n=r}for(;n=i.firstChild;)i.removeChild(n)},u=function(e,t){var o=!1,r=i(e,e.push);return{start:function(e,i){e=s(e),!o&&M[e]&&(o=e),o||!0!==x[e]||(r("<"),r(e),n(i,function(i,o){var n=s(o),a="img"===e&&"src"===n||"background"===n;!0!==O[n]||!0===C[n]&&!t(i,a)||(r(" "),r(o),r('="'),r(A(i)),r('"'))}),r(">"))},end:function(e){e=s(e),o||!0!==x[e]||!0===g[e]||(r("</"),r(e),r(">")),e==o&&(o=!1)},chars:function(e){o||r(A(e))}}},l=e.Node.prototype.contains||function(e){return!!(16&this.compareDocumentPosition(e))};var h=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,f=/([^#-~ |!])/g,g=S("area,br,col,hr,img,wbr"),m=S("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),y=S("rp,rt"),v=o({},y,m),b=o({},m,S("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),w=o({},y,S("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),_=S("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),M=S("script,style"),x=o({},g,b,w,v),C=S("background,cite,href,longdesc,src,xlink:href,xml:base"),T=S("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),k=S("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",!0),O=o({},C,k,T);function S(e,t){var i,o={},n=e.split(",");for(i=0;i<n.length;i++)o[t?s(n[i]):n[i]]=!0;return o}var j=function(e,t){var i;if(!t||!t.implementation)throw p("noinert","Can't create an inert html document");var o=((i=t.implementation.createHTMLDocument("inert")).documentElement||i.getDocumentElement()).querySelector("body");return o.innerHTML='<svg><g onload="this.parentNode.remove()"></g></svg>',o.querySelector("svg")?(o.innerHTML='<svg><p><style><img src="</style><img src=x onerror=alert(1)//">',o.querySelector("svg img")?function(t){t="<remove></remove>"+t;try{var i=(new e.DOMParser).parseFromString(t,"text/html").body;return i.firstChild.remove(),i}catch(e){return}}:function(e){return o.innerHTML=e,t.documentMode&&E(o),o}):function(t){t="<remove></remove>"+t;try{t=encodeURI(t)}catch(e){return}var i=new e.XMLHttpRequest;i.responseType="document",i.open("GET","data:text/html;charset=utf-8,"+t,!1),i.send(null);var o=i.response.body;return o.firstChild.remove(),o}}(e,e.document);function N(e){for(var t={},i=0,o=e.length;i<o;i++){var n=e[i];t[n.name]=n.value}return t}function A(e){return e.replace(/&/g,"&amp;").replace(h,function(e){return"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";"}).replace(f,function(e){return"&#"+e.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function E(t){for(;t;){if(t.nodeType===e.Node.ELEMENT_NODE)for(var i=t.attributes,o=0,n=i.length;o<n;o++){var r=i[o],s=r.name.toLowerCase();"xmlns:ns1"!==s&&0!==s.lastIndexOf("ns1:",0)||(t.removeAttributeNode(r),o--,n--)}var a=t.firstChild;a&&E(a),t=R("nextSibling",t)}}function R(e,t){var i=t[e];if(i&&l.call(t,i))throw p("elclob","Failed to sanitize html because the element is clobbered: {0}",t.outerHTML||t.outerText);return i}}).info({angularVersion:"1.6.9"}),t.module("ngSanitize").filter("linky",["$sanitize",function(e){var i=/((s?ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,o=/^mailto:/i,n=t.$$minErr("linky"),r=t.isDefined,s=t.isFunction,l=t.isObject,c=t.isString;return function(t,p,d){if(null==t||""===t)return t;if(!c(t))throw n("notstring","Expected string but received: {0}",t);for(var h,f,g,m=s(d)?d:l(d)?function(){return d}:function(){return{}},y=t,v=[];h=y.match(i);)f=h[0],h[2]||h[4]||(f=(h[3]?"http://":"mailto:")+f),g=h.index,b(y.substr(0,g)),w(f,h[0].replace(o,"")),y=y.substring(g+h[0].length);return b(y),e(v.join(""));function b(e){var t,i;e&&v.push((t=e,u(i=[],a).chars(t),i.join("")))}function w(e,t){var i,o=m(e);for(i in v.push("<a "),o)v.push(i+'="'+o[i]+'" ');!r(p)||"target"in o||v.push('target="',p,'" '),v.push('href="',e.replace(/"/g,"&quot;"),'">'),b(t),v.push("</a>")}}}])}(window,window.angular)},145:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s(i(3)),n=s(i(1)),r=s(i(146));function s(e){return e&&e.__esModule?e:{default:e}}var a=function(e,t,i,o){var n=this;this.scope=t.$new(!0),this.scope.$watch(function(){return n.scope.open},function(e){!e&&n.autoDestroy_&&n.timeout_(function(){n.destroy()})}),this.sce_=i,this.timeout_=o,this.element_=angular.element("<div ngeo-popup></div>"),this.autoDestroy_=!1,e(this.element_)(this.scope),angular.element(document.body).append(this.element_)};a.prototype.getOpen=function(){return this.scope.open},a.prototype.setOpen=function(e){this.scope.open=e},a.prototype.destroy=function(){this.scope.$destroy(),this.element_.remove()},a.prototype.setTitle=function(e){var t=this.sce_.trustAsHtml(e);this.scope.title=t},a.prototype.setContent=function(e,t){this.scope.content=t?this.sce_.trustAsHtml(e):e},a.prototype.setUrl=function(e){var t=this.sce_.trustAsHtml('<iframe src="'+e+'" width="100%" height="100%"></iframe>');this.setContent(t)},a.prototype.setWidth=function(e){this.element_.width(e)},a.prototype.setHeight=function(e){this.element_.height(e)},a.prototype.setSize=function(e,t){this.setWidth(e),this.setHeight(t)},a.prototype.setAutoDestroy=function(e){this.autoDestroy_=e},a.prototype.addClass=function(e){this.element_.addClass(e)},a.prototype.open=function(e){e.url?this.setUrl(e.url):e.content?this.setContent(e.content):o.default.fail('ngeo.message.Popup options requirest "url" or "content".'),void 0!==e.autoDestroy&&this.setAutoDestroy(e.autoDestroy),void 0!==e.cls&&this.addClass(e.cls),void 0!==e.height&&this.setHeight(e.height),void 0!==e.title&&this.setTitle(e.title),void 0!==e.width&&this.setWidth(e.width),this.setOpen(!0)},(a.Factory=function(e,t,i,o){return function(){return new a(e,t,i,o)}}).$inject=["$compile","$rootScope","$sce","$timeout"],(a.module=angular.module("ngeoCreatePopup",[r.default.name])).factory("ngeoCreatePopup",a.Factory),n.default.module.requires.push(a.module.name),t.default=a},146:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,n=i(1),r=(o=n)&&o.__esModule?o:{default:o};i(107);var s=angular.module("ngeoPopup",["ngSanitize"]);r.default.module.requires.push(s.name),s.value("ngeoPopupTemplateUrl",function(e,t){var i=t.ngeoPopupTemplateurl;return void 0!==i?i:r.default.baseModuleTemplateUrl+"/message/popupcomponent.html"}),s.directive_=function(e){return{restrict:"A",templateUrl:e,link:function(e,t,i){t.addClass("popover"),e.close=function(e){e&&(e.stopPropagation(),e.preventDefault()),t.addClass("hidden")},e.$watch("open",function(e,i){t.css("display",e?"block":"none")})}}},s.directive_.$inject=["ngeoPopupTemplateUrl"],s.directive("ngeoPopup",s.directive_),t.default=s},439:function(e,t,i){i(10),e.exports=i(440)},440:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),i(441),i(11);var o=p(i(442)),n=p(i(83)),r=p(i(13)),s=p(i(18)),a=p(i(15)),l=p(i(5)),c=p(i(1)),u=p(i(17));function p(e){return e&&e.__esModule?e:{default:e}}var d={};d.module=angular.module("app",[c.default.module.name,u.default.name,o.default.module.name]),d.MainController=function(t){this.disclaimer=t,this.map=new r.default({layers:[new a.default({source:new l.default})],view:new s.default({center:[0,0],zoom:4})}),this.successMsg_="Disclaimer with success style",this.infoMsg_="Disclaimer with info style",this.warningMsg_="Disclaimer with warning style",this.errorMsg_="Disclaimer with error style",this.inMapMsgs_=["Disclaimer inside the map","An other message ","Map contributors","This is a long message inside a map"],e('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})},d.MainController.$inject=["ngeoDisclaimer"],d.MainController.prototype.success=function(){this.disclaimer.success(this.successMsg_)},d.MainController.prototype.info=function(){this.disclaimer.info(this.infoMsg_)},d.MainController.prototype.warn=function(){this.disclaimer.warn(this.warningMsg_)},d.MainController.prototype.error=function(){this.disclaimer.error(this.errorMsg_)},d.MainController.prototype.inMap=function(){this.inMapMsgs_.forEach(function(e){this.disclaimer.alert({msg:e,target:angular.element("#disclaimers-in-map"),type:n.default.Type.WARNING})},this)},d.MainController.prototype.closeAll=function(){this.disclaimer.close({msg:this.successMsg_,type:n.default.Type.SUCCESS}),this.disclaimer.close({msg:this.infoMsg_,type:n.default.Type.INFORMATION}),this.disclaimer.close({msg:this.warningMsg_,type:n.default.Type.WARNING}),this.disclaimer.close({msg:this.errorMsg_,type:n.default.Type.ERROR}),this.inMapMsgs_.forEach(function(e){this.disclaimer.close({msg:e,type:n.default.Type.WARNING})},this)},d.module.controller("MainController",d.MainController),t.default=d}).call(t,i(29))},441:function(e,t){},442:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=l(i(3)),n=l(i(1)),r=l(i(145)),s=l(i(83)),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}(i(0));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e,t,i){this.sce_=e,this.gettextCatalog_=t,this.createPopup_=i,s.default.call(this);var o=angular.element('<div class="ngeo-disclaimer"></div>');angular.element(document.body).append(o),this.container_=o,this.messages_={}};c.$inject=["$sce","gettextCatalog","ngeoCreatePopup"],c.$inject=["$sce","gettextCatalog","ngeoCreatePopup"],a.inherits(c,s.default),c.prototype.alert=function(e){this.show(e)},c.prototype.close=function(e){this.getMessageObjects(e).forEach(this.closeMessage_,this)},c.prototype.showMessage=function(e){var t=this,i=this.gettextCatalog_,n=e.type;o.default.assertString(n,"Type should be set.");var r=this.getMessageUid_(e);if(void 0===this.messages_[r])if(!0===e.popup){var a=this.createPopup_(),l=this.sce_.trustAsHtml(e.msg);a.open({autoDestroy:!0,content:l,title:"&nbsp;"}),a.scope.$watch("open",function(i,o){i||t.closeMessage_(e)}),this.messages_[r]=a}else{var c=["alert","fade","alert-dismissible"];switch(n){case s.default.Type.ERROR:c.push("alert-danger");break;case s.default.Type.INFORMATION:c.push("alert-info");break;case s.default.Type.SUCCESS:c.push("alert-success");break;case s.default.Type.WARNING:c.push("alert-warning")}var u=angular.element('<div role="alert" class="'+c.join(" ")+'"></div>'),p=angular.element('<button type="button" class="close" data-dismiss="alert" aria-label="'+i.getString("Close")+'"><span aria-hidden="true" class="fa fa-times"></span></button>'),d=angular.element("<span />").html(e.msg);u.append(p).append(d);(e.target?angular.element(e.target):this.container_).append(u),u.addClass("in"),u.on("closed.bs.alert",function(){t.closeMessage_(e)}),this.messages_[r]=u}},c.prototype.getMessageUid_=function(e){return e.msg+"-"+e.type},c.prototype.closeMessage_=function(e){var t=this.getMessageUid_(e),i=this.messages_[t];void 0!==i&&(i instanceof r.default?i.getOpen()&&i.setOpen(!1):i.hasClass("in")&&i.alert("close"),delete this.messages_[t])},(c.module=angular.module("ngeoDisclaimer",[r.default.module.name])).service("ngeoDisclaimer",c),n.default.module.requires.push(c.module.name),t.default=c},5:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(0),n=i(6);const r=function(e){const t=e||{};let i;i=void 0!==t.attributions?t.attributions:[r.ATTRIBUTION];const o=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",s=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";n.a.call(this,{attributions:i,cacheSize:t.cacheSize,crossOrigin:o,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:s,wrapX:t.wrapX})};Object(o.inherits)(r,n.a),r.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',t.default=r},6:function(e,t,i){"use strict";var o=i(0),n=i(20),r=i(19);const s=function(e){const t=e||{},i=void 0!==t.projection?t.projection:"EPSG:3857",o=void 0!==t.tileGrid?t.tileGrid:r.a.createXYZ({extent:r.a.extentFromProjection(i),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});n.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:i,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:o,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(o.inherits)(s,n.a),t.a=s},83:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){};o.prototype.showMessage=function(e){},o.prototype.show=function(e){this.getMessageObjects(e).forEach(this.showMessage,this)},o.prototype.error=function(e){this.show(this.getMessageObjects(e,o.Type.ERROR))},o.prototype.info=function(e){this.show(this.getMessageObjects(e,o.Type.INFORMATION))},o.prototype.success=function(e){this.show(this.getMessageObjects(e,o.Type.SUCCESS))},o.prototype.warn=function(e){this.show(this.getMessageObjects(e,o.Type.WARNING))},o.prototype.getMessageObjects=function(e,t){var i=[],n=null,r=o.Type.INFORMATION;return"string"==typeof e?i.push({msg:e,type:void 0!==t?t:r}):Array.isArray(e)?e.forEach(function(o){"string"==typeof e?n={msg:o,type:void 0!==t?t:r}:(n=o,void 0!==t&&(n.type=t)),i.push(n)},this):(n=e,void 0!==t&&(n.type=t),void 0===n.type&&(n.type=r),i.push(n)),i},o.Type={ERROR:"error",INFORMATION:"information",SUCCESS:"success",WARNING:"warning"},t.default=o}},[439]);
//# sourceMappingURL=disclaimer.95c92d3a2d58d75e9f39.js.map