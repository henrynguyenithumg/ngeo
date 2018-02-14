webpackJsonp([7],{112:function(e,t,r){r(113),e.exports="ngSanitize"},113:function(e,t){!function(e,t){"use strict";var r,n,i,o,a,s,l,u,c,d=t.$$minErr("$sanitize");t.module("ngSanitize",[]).provider("$sanitize",function(){var m=!1;this.$get=["$$sanitizeUri",function(e){return m&&n(M,x),function(t){var r=[];return u(t,c(r,function(t,r){return!/^unsafe:/.test(e(t,r))})),r.join("")}}],this.enableSvg=function(e){return o(e)?(m=e,this):m},r=t.bind,n=t.extend,i=t.forEach,o=t.isDefined,a=t.lowercase,s=t.noop,u=function(e,t){null===e||void 0===e?e="":"string"!=typeof e&&(e=""+e);var r=T(e);if(!r)return"";var n=5;do{if(0===n)throw d("uinput","Failed to sanitize html because the input is unstable");n--,e=r.innerHTML,r=T(e)}while(e!==r.innerHTML);for(var i=r.firstChild;i;){switch(i.nodeType){case 1:t.start(i.nodeName.toLowerCase(),q(i.attributes));break;case 3:t.chars(i.textContent)}var o;if(!((o=i.firstChild)||(1===i.nodeType&&t.end(i.nodeName.toLowerCase()),o=H("nextSibling",i))))for(;null==o&&(i=H("parentNode",i))!==r;)o=H("nextSibling",i),1===i.nodeType&&t.end(i.nodeName.toLowerCase());i=o}for(;i=r.firstChild;)r.removeChild(i)},c=function(e,t){var n=!1,o=r(e,e.push);return{start:function(e,r){e=a(e),!n&&k[e]&&(n=e),n||!0!==M[e]||(o("<"),o(e),i(r,function(r,n){var i=a(n),s="img"===e&&"src"===i||"background"===i;!0!==S[i]||!0===C[i]&&!t(r,s)||(o(" "),o(n),o('="'),o(j(r)),o('"'))}),o(">"))},end:function(e){e=a(e),n||!0!==M[e]||!0===f[e]||(o("</"),o(e),o(">")),e==n&&(n=!1)},chars:function(e){n||o(j(e))}}},l=e.Node.prototype.contains||function(e){return!!(16&this.compareDocumentPosition(e))};var p=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,h=/([^#-~ |!])/g,f=L("area,br,col,hr,img,wbr"),g=L("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),v=L("rp,rt"),b=n({},v,g),y=n({},g,L("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),w=n({},v,L("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),x=L("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),k=L("script,style"),M=n({},f,y,w,b),C=L("background,cite,href,longdesc,src,xlink:href,xml:base"),A=L("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),z=L("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",!0),S=n({},C,z,A);function L(e,t){var r,n={},i=e.split(",");for(r=0;r<i.length;r++)n[t?a(i[r]):i[r]]=!0;return n}var T=function(e,t){var r;if(!t||!t.implementation)throw d("noinert","Can't create an inert html document");var n=((r=t.implementation.createHTMLDocument("inert")).documentElement||r.getDocumentElement()).querySelector("body");return n.innerHTML='<svg><g onload="this.parentNode.remove()"></g></svg>',n.querySelector("svg")?(n.innerHTML='<svg><p><style><img src="</style><img src=x onerror=alert(1)//">',n.querySelector("svg img")?function(t){t="<remove></remove>"+t;try{var r=(new e.DOMParser).parseFromString(t,"text/html").body;return r.firstChild.remove(),r}catch(e){return}}:function(e){return n.innerHTML=e,t.documentMode&&E(n),n}):function(t){t="<remove></remove>"+t;try{t=encodeURI(t)}catch(e){return}var r=new e.XMLHttpRequest;r.responseType="document",r.open("GET","data:text/html;charset=utf-8,"+t,!1),r.send(null);var n=r.response.body;return n.firstChild.remove(),n}}(e,e.document);function q(e){for(var t={},r=0,n=e.length;r<n;r++){var i=e[r];t[i.name]=i.value}return t}function j(e){return e.replace(/&/g,"&amp;").replace(p,function(e){return"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";"}).replace(h,function(e){return"&#"+e.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function E(t){for(;t;){if(t.nodeType===e.Node.ELEMENT_NODE)for(var r=t.attributes,n=0,i=r.length;n<i;n++){var o=r[n],a=o.name.toLowerCase();"xmlns:ns1"!==a&&0!==a.lastIndexOf("ns1:",0)||(t.removeAttributeNode(o),n--,i--)}var s=t.firstChild;s&&E(s),t=H("nextSibling",t)}}function H(e,t){var r=t[e];if(r&&l.call(t,r))throw d("elclob","Failed to sanitize html because the element is clobbered: {0}",t.outerHTML||t.outerText);return r}}).info({angularVersion:"1.6.9"}),t.module("ngSanitize").filter("linky",["$sanitize",function(e){var r=/((s?ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,n=/^mailto:/i,i=t.$$minErr("linky"),o=t.isDefined,a=t.isFunction,l=t.isObject,u=t.isString;return function(t,d,m){if(null==t||""===t)return t;if(!u(t))throw i("notstring","Expected string but received: {0}",t);for(var p,h,f,g=a(m)?m:l(m)?function(){return m}:function(){return{}},v=t,b=[];p=v.match(r);)h=p[0],p[2]||p[4]||(h=(p[3]?"http://":"mailto:")+h),f=p.index,y(v.substr(0,f)),w(h,p[0].replace(n,"")),v=v.substring(f+p[0].length);return y(v),e(b.join(""));function y(e){var t,r;e&&b.push((t=e,c(r=[],s).chars(t),r.join("")))}function w(e,t){var r,n=g(e);for(r in b.push("<a "),n)b.push(r+'="'+n[r]+'" ');!o(d)||"target"in n||b.push('target="',d,'" '),b.push('href="',e.replace(/"/g,"&quot;"),'">'),y(t),b.push("</a>")}}}])}(window,window.angular)},483:function(e,t,r){r(10),e.exports=r(484)},484:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(485),r(11);var n=y(r(217)),i=y(r(173)),o=y(r(218)),a=(y(r(1)),y(r(18))),s=y(r(101)),l=y(r(108)),u=y(r(97)),c=y(r(13)),d=y(r(19)),m=y(r(251)),p=y(r(15)),h=y(r(5)),f=y(r(24)),g=y(r(60)),v=y(r(43)),b=y(r(42));function y(e){return e&&e.__esModule?e:{default:e}}r(112);var w={};w.module=angular.module("app",[a.default.name,s.default.name,u.default.name,"ngSanitize"]),w.measuretoolsComponent={bindings:{map:"=appMeasuretoolsMap",lang:"=appMeasuretoolsLang"},controller:"AppMeasuretoolsController",controllerAs:"ctrl",templateUrl:"partials/measuretools.html"},w.module.component("appMeasuretools",w.measuretoolsComponent),w.MeasuretoolsController=function(e,t,r,a){var s=this;this.map,this.lang,this.measureStartMsg=null,this.measureLengthContinueMsg=null,this.measureAreaContinueMsg=null,this.measureAzimutContinueMsg=null;var u={en:r.trustAsHtml("Click to start drawing."),fr:r.trustAsHtml("Cliquer pour commencer à dessiner.")},c={en:r.trustAsHtml("Click to continue drawing.<br>Double-click or click last point to finish."),fr:r.trustAsHtml("Cliquer pour continuer le dessin.<br>Double-cliquer ou cliquer sur dernier point pour finir.")},d={en:r.trustAsHtml("Click to continue drawing.<br>Double-click or click starting point to finish."),fr:r.trustAsHtml("Cliquer pour continuer le dessin.<br>Double-cliquer ou cliquer sur point de départ pour finir.")},m={en:r.trustAsHtml("Click to finish."),fr:r.trustAsHtml("Cliquer pour finir.")},p=angular.element('<span ng-bind-html="ctrl.measureStartMsg"></span>');p=t(p)(e);var h=angular.element('<span ng-bind-html="ctrl.measureLengthContinueMsg"></span>');h=t(h)(e);var y=angular.element('<span ng-bind-html="ctrl.measureAreaContinueMsg"></span>');y=t(y)(e);var w=angular.element('<span ng-bind-html="ctrl.measureAzimutContinueMsg"></span>');w=t(w)(e),e.$watch(function(){return s.lang},function(e){s.measureStartMsg=u[e],s.measureLengthContinueMsg=c[e],s.measureAreaContinueMsg=d[e],s.measureAzimutContinueMsg=m[e]});var x=new f.default({fill:new b.default({color:"rgba(255, 255, 255, 0.2)"}),stroke:new v.default({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new g.default({radius:5,stroke:new v.default({color:"rgba(0, 0, 0, 0.7)"}),fill:new b.default({color:"rgba(255, 255, 255, 0.2)"})})});this.measureLength=new o.default(a("ngeoUnitPrefix"),{sketchStyle:x,startMsg:p[0],continueMsg:h[0]}),this.measureLength.setActive(!1),l.default.interaction(this.measureLength),this.measureArea=new n.default(a("ngeoUnitPrefix"),{sketchStyle:x,startMsg:p[0],continueMsg:y[0]}),this.measureArea.setActive(!1),l.default.interaction(this.measureArea),this.measureAzimut=new i.default(a("ngeoUnitPrefix"),a("ngeoNumber"),{sketchStyle:x,startMsg:p[0],continueMsg:w[0]}),this.measureAzimut.setActive(!1),l.default.interaction(this.measureAzimut),this.measureAzimut.on("measureend",function(e){e.target.getTooltipElement().innerHTML+="<br>Additional info"})},w.MeasuretoolsController.$inject=["$scope","$compile","$sce","$filter"],w.module.controller("AppMeasuretoolsController",w.MeasuretoolsController),w.MeasuretoolsController.prototype.$onInit=function(){this.map.addInteraction(this.measureLength),this.map.addInteraction(this.measureArea),this.map.addInteraction(this.measureAzimut)},w.MainController=function(){this.lang="en",this.map=new c.default({layers:[new p.default({source:new h.default})],view:new d.default({center:[692114.718759744,5743119.914347709],zoom:15})}),this.map.addControl(new m.default)},w.module.controller("MainController",w.MainController),t.default=w},485:function(e,t){},5:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),i=r(6);const o=function(e){const t=e||{};let r;r=void 0!==t.attributions?t.attributions:[o.ATTRIBUTION];const n=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",a=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";i.a.call(this,{attributions:r,cacheSize:t.cacheSize,crossOrigin:n,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:a,wrapX:t.wrapX})};Object(n.inherits)(o,i.a),o.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',t.default=o},6:function(e,t,r){"use strict";var n=r(0),i=r(21),o=r(20);const a=function(e){const t=e||{},r=void 0!==t.projection?t.projection:"EPSG:3857",n=void 0!==t.tileGrid?t.tileGrid:o.a.createXYZ({extent:o.a.extentFromProjection(r),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});i.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:r,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:n,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(n.inherits)(a,i.a),t.a=a}},[483]);
//# sourceMappingURL=measure.d94fd3b80a7160850d39.js.map