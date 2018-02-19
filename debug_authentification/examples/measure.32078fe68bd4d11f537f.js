webpackJsonp([7],{109:function(e,t,n){n(110),e.exports="ngSanitize"},110:function(e,t){!function(e,t){"use strict";var n,r,i,o,a,s,l,u,c,d=t.$$minErr("$sanitize");t.module("ngSanitize",[]).provider("$sanitize",function(){var h=!1;this.$get=["$$sanitizeUri",function(e){return h&&r(k,M),function(t){var n=[];return u(t,c(n,function(t,n){return!/^unsafe:/.test(e(t,n))})),n.join("")}}],this.enableSvg=function(e){return o(e)?(h=e,this):h},n=t.bind,r=t.extend,i=t.forEach,o=t.isDefined,a=t.lowercase,s=t.noop,u=function(e,t){null===e||void 0===e?e="":"string"!=typeof e&&(e=""+e);var n=T(e);if(!n)return"";var r=5;do{if(0===r)throw d("uinput","Failed to sanitize html because the input is unstable");r--,e=n.innerHTML,n=T(e)}while(e!==n.innerHTML);for(var i=n.firstChild;i;){switch(i.nodeType){case 1:t.start(i.nodeName.toLowerCase(),z(i.attributes));break;case 3:t.chars(i.textContent)}var o;if(!((o=i.firstChild)||(1===i.nodeType&&t.end(i.nodeName.toLowerCase()),o=D("nextSibling",i))))for(;null==o&&(i=D("parentNode",i))!==n;)o=D("nextSibling",i),1===i.nodeType&&t.end(i.nodeName.toLowerCase());i=o}for(;i=n.firstChild;)n.removeChild(i)},c=function(e,t){var r=!1,o=n(e,e.push);return{start:function(e,n){e=a(e),!r&&x[e]&&(r=e),r||!0!==k[e]||(o("<"),o(e),i(n,function(n,r){var i=a(r),s="img"===e&&"src"===i||"background"===i;!0!==S[i]||!0===C[i]&&!t(n,s)||(o(" "),o(r),o('="'),o(L(n)),o('"'))}),o(">"))},end:function(e){e=a(e),r||!0!==k[e]||!0===f[e]||(o("</"),o(e),o(">")),e==r&&(r=!1)},chars:function(e){r||o(L(e))}}},l=e.Node.prototype.contains||function(e){return!!(16&this.compareDocumentPosition(e))};var m=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,p=/([^#-~ |!])/g,f=A("area,br,col,hr,img,wbr"),g=A("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),v=A("rp,rt"),b=r({},v,g),y=r({},g,A("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),w=r({},v,A("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),M=A("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),x=A("script,style"),k=r({},f,y,w,b),C=A("background,cite,href,longdesc,src,xlink:href,xml:base"),_=A("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),E=A("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",!0),S=r({},C,E,_);function A(e,t){var n,r={},i=e.split(",");for(n=0;n<i.length;n++)r[t?a(i[n]):i[n]]=!0;return r}var T=function(e,t){var n;if(!t||!t.implementation)throw d("noinert","Can't create an inert html document");var r=((n=t.implementation.createHTMLDocument("inert")).documentElement||n.getDocumentElement()).querySelector("body");return r.innerHTML='<svg><g onload="this.parentNode.remove()"></g></svg>',r.querySelector("svg")?(r.innerHTML='<svg><p><style><img src="</style><img src=x onerror=alert(1)//">',r.querySelector("svg img")?function(t){t="<remove></remove>"+t;try{var n=(new e.DOMParser).parseFromString(t,"text/html").body;return n.firstChild.remove(),n}catch(e){return}}:function(e){return r.innerHTML=e,t.documentMode&&j(r),r}):function(t){t="<remove></remove>"+t;try{t=encodeURI(t)}catch(e){return}var n=new e.XMLHttpRequest;n.responseType="document",n.open("GET","data:text/html;charset=utf-8,"+t,!1),n.send(null);var r=n.response.body;return r.firstChild.remove(),r}}(e,e.document);function z(e){for(var t={},n=0,r=e.length;n<r;n++){var i=e[n];t[i.name]=i.value}return t}function L(e){return e.replace(/&/g,"&amp;").replace(m,function(e){return"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";"}).replace(p,function(e){return"&#"+e.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function j(t){for(;t;){if(t.nodeType===e.Node.ELEMENT_NODE)for(var n=t.attributes,r=0,i=n.length;r<i;r++){var o=n[r],a=o.name.toLowerCase();"xmlns:ns1"!==a&&0!==a.lastIndexOf("ns1:",0)||(t.removeAttributeNode(o),r--,i--)}var s=t.firstChild;s&&j(s),t=D("nextSibling",t)}}function D(e,t){var n=t[e];if(n&&l.call(t,n))throw d("elclob","Failed to sanitize html because the element is clobbered: {0}",t.outerHTML||t.outerText);return n}}).info({angularVersion:"1.6.9"}),t.module("ngSanitize").filter("linky",["$sanitize",function(e){var n=/((s?ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,r=/^mailto:/i,i=t.$$minErr("linky"),o=t.isDefined,a=t.isFunction,l=t.isObject,u=t.isString;return function(t,d,h){if(null==t||""===t)return t;if(!u(t))throw i("notstring","Expected string but received: {0}",t);for(var m,p,f,g=a(h)?h:l(h)?function(){return h}:function(){return{}},v=t,b=[];m=v.match(n);)p=m[0],m[2]||m[4]||(p=(m[3]?"http://":"mailto:")+p),f=m.index,y(v.substr(0,f)),w(p,m[0].replace(r,"")),v=v.substring(f+m[0].length);return y(v),e(b.join(""));function y(e){var t,n;e&&b.push((t=e,c(n=[],s).chars(t),n.join("")))}function w(e,t){var n,r=g(e);for(n in b.push("<a "),r)b.push(n+'="'+r[n]+'" ');!o(d)||"target"in r||b.push('target="',d,'" '),b.push('href="',e.replace(/"/g,"&quot;"),'">'),y(t),b.push("</a>")}}}])}(window,window.angular)},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(5);const o=function(e){const t=e||{};let n;n=void 0!==t.attributions?t.attributions:[o.ATTRIBUTION];const r=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",a=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";i.a.call(this,{attributions:n,cacheSize:t.cacheSize,crossOrigin:r,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:a,wrapX:t.wrapX})};Object(r.inherits)(o,i.a),o.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',t.default=o},448:function(e,t,n){n(8),e.exports=n(449)},449:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(450),n(9);var r=y(n(206)),i=y(n(162)),o=y(n(207)),a=y(n(15)),s=y(n(96)),l=y(n(102)),u=y(n(91)),c=y(n(11)),d=y(n(16)),h=y(n(451)),m=y(n(17)),p=y(n(4)),f=y(n(23)),g=y(n(60)),v=y(n(41)),b=y(n(40));function y(e){return e&&e.__esModule?e:{default:e}}n(109);var w={};w.module=angular.module("app",[a.default.name,s.default.name,u.default.name,"ngSanitize"]),w.measuretoolsComponent={bindings:{map:"=appMeasuretoolsMap",lang:"=appMeasuretoolsLang"},controller:"AppMeasuretoolsController",controllerAs:"ctrl",templateUrl:"partials/measuretools.html"},w.module.component("appMeasuretools",w.measuretoolsComponent),w.MeasuretoolsController=function(e,t,n,a){var s=this;this.map,this.lang,this.measureStartMsg=null,this.measureLengthContinueMsg=null,this.measureAreaContinueMsg=null,this.measureAzimutContinueMsg=null;var u={en:n.trustAsHtml("Click to start drawing."),fr:n.trustAsHtml("Cliquer pour commencer à dessiner.")},c={en:n.trustAsHtml("Click to continue drawing.<br>Double-click or click last point to finish."),fr:n.trustAsHtml("Cliquer pour continuer le dessin.<br>Double-cliquer ou cliquer sur dernier point pour finir.")},d={en:n.trustAsHtml("Click to continue drawing.<br>Double-click or click starting point to finish."),fr:n.trustAsHtml("Cliquer pour continuer le dessin.<br>Double-cliquer ou cliquer sur point de départ pour finir.")},h={en:n.trustAsHtml("Click to finish."),fr:n.trustAsHtml("Cliquer pour finir.")},m=angular.element('<span ng-bind-html="ctrl.measureStartMsg"></span>');m=t(m)(e);var p=angular.element('<span ng-bind-html="ctrl.measureLengthContinueMsg"></span>');p=t(p)(e);var y=angular.element('<span ng-bind-html="ctrl.measureAreaContinueMsg"></span>');y=t(y)(e);var w=angular.element('<span ng-bind-html="ctrl.measureAzimutContinueMsg"></span>');w=t(w)(e),e.$watch(function(){return s.lang},function(e){s.measureStartMsg=u[e],s.measureLengthContinueMsg=c[e],s.measureAreaContinueMsg=d[e],s.measureAzimutContinueMsg=h[e]});var M=new f.default({fill:new b.default({color:"rgba(255, 255, 255, 0.2)"}),stroke:new v.default({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new g.default({radius:5,stroke:new v.default({color:"rgba(0, 0, 0, 0.7)"}),fill:new b.default({color:"rgba(255, 255, 255, 0.2)"})})});this.measureLength=new o.default(a("ngeoUnitPrefix"),{sketchStyle:M,startMsg:m[0],continueMsg:p[0]}),this.measureLength.setActive(!1),l.default.interaction(this.measureLength),this.measureArea=new r.default(a("ngeoUnitPrefix"),{sketchStyle:M,startMsg:m[0],continueMsg:y[0]}),this.measureArea.setActive(!1),l.default.interaction(this.measureArea),this.measureAzimut=new i.default(a("ngeoUnitPrefix"),a("ngeoNumber"),{sketchStyle:M,startMsg:m[0],continueMsg:w[0]}),this.measureAzimut.setActive(!1),l.default.interaction(this.measureAzimut),this.measureAzimut.on("measureend",function(e){e.target.getTooltipElement().innerHTML+="<br>Additional info"})},w.MeasuretoolsController.$inject=["$scope","$compile","$sce","$filter"],w.module.controller("AppMeasuretoolsController",w.MeasuretoolsController),w.MeasuretoolsController.prototype.$onInit=function(){this.map.addInteraction(this.measureLength),this.map.addInteraction(this.measureArea),this.map.addInteraction(this.measureAzimut)},w.MainController=function(){this.lang="en",this.map=new c.default({layers:[new m.default({source:new p.default})],view:new d.default({center:[692114.718759744,5743119.914347709],zoom:15})}),this.map.addControl(new h.default)},w.module.controller("MainController",w.MainController),t.default=w},450:function(e,t){},451:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(31),o=n(21),a=n(125),s="degrees",l="imperial",u="nautical",c="metric",d="us",h=n(87),m=n(1),p=n(10),f=n(76);const g=[1,2,5],v=function(e){const t=e||{},n=void 0!==t.className?t.className:"ol-scale-line";this.innerElement_=document.createElement("DIV"),this.innerElement_.className=n+"-inner",this.element_=document.createElement("DIV"),this.element_.className=n+" "+h.e,this.element_.appendChild(this.innerElement_),this.viewState_=null,this.minWidth_=void 0!==t.minWidth?t.minWidth:64,this.renderedVisible_=!1,this.renderedWidth_=void 0,this.renderedHTML_="";const r=t.render?t.render:v.render;a.default.call(this,{element:this.element_,render:r,target:t.target}),Object(m.listen)(this,i.default.getChangeEventType("units"),this.handleUnitsChanged_,this),this.setUnits(t.units||c)};Object(r.inherits)(v,a.default),v.prototype.getUnits=function(){return this.get("units")},v.render=function(e){const t=e.frameState;this.viewState_=t?t.viewState:null,this.updateElement_()},v.prototype.handleUnitsChanged_=function(){this.updateElement_()},v.prototype.setUnits=function(e){this.set("units",e)},v.prototype.updateElement_=function(){const e=this.viewState_;if(!e)return void(this.renderedVisible_&&(this.element_.style.display="none",this.renderedVisible_=!1));const t=e.center,n=e.projection,r=this.getUnits(),i=r==s?f.a.DEGREES:f.a.METERS;let a=Object(p.getPointResolution)(n,e.resolution,t,i);n.getUnits()!=f.a.DEGREES&&r==c&&(a*=n.getMetersPerUnit());let h=this.minWidth_*a,m="";if(r==s){const e=p.METERS_PER_UNIT[f.a.DEGREES];n.getUnits()==f.a.DEGREES?h*=e:a/=e,h<e/60?(m="″",a*=3600):h<e?(m="′",a*=60):m="°"}else r==l?h<.9144?(m="in",a/=.0254):h<1609.344?(m="ft",a/=.3048):(m="mi",a/=1609.344):r==u?(a/=1852,m="nm"):r==c?h<.001?(m="μm",a*=1e6):h<1?(m="mm",a*=1e3):h<1e3?m="m":(m="km",a/=1e3):r==d?h<.9144?(m="in",a*=39.37):h<1609.344?(m="ft",a/=.30480061):(m="mi",a/=1609.3472):Object(o.a)(!1,33);let v,b,y=3*Math.floor(Math.log(this.minWidth_*a)/Math.log(10));for(;;){if(v=g[(y%3+3)%3]*Math.pow(10,Math.floor(y/3)),b=Math.round(v/a),isNaN(b))return this.element_.style.display="none",void(this.renderedVisible_=!1);if(b>=this.minWidth_)break;++y}const w=v+" "+m;this.renderedHTML_!=w&&(this.innerElement_.innerHTML=w,this.renderedHTML_=w),this.renderedWidth_!=b&&(this.innerElement_.style.width=b+"px",this.renderedWidth_=b),this.renderedVisible_||(this.element_.style.display="",this.renderedVisible_=!0)};t.default=v},5:function(e,t,n){"use strict";var r=n(0),i=n(19),o=n(20);const a=function(e){const t=e||{},n=void 0!==t.projection?t.projection:"EPSG:3857",r=void 0!==t.tileGrid?t.tileGrid:Object(o.a)({extent:Object(o.b)(n),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});i.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:n,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:r,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(r.inherits)(a,i.a),t.a=a}},[448]);
//# sourceMappingURL=measure.32078fe68bd4d11f537f.js.map