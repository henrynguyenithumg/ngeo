webpackJsonp([3],{245:function(e,t){e.exports='<h3>Total: {{ $ctrl.result.total }}</h3> <ul class="nav nav-tabs" role=tablist> <li ng-repeat="source in $ctrl.result.sources" role=presentation ng-if=source.features.length> <a href="#{{ ::source.id }}" aria-controls="{{ ::source.id }}" role=tab data-toggle=tab> <span>{{ ::source.label }}</span> <span>({{ ::source.features.length }})</span> </a> </li> </ul> <div class=tab-content> <div ng-repeat="source in $ctrl.result.sources" role=tabpanel class=tab-pane ng-if=source.features.length id="{{ ::source.id }}"> <div ng-repeat="feature in ::source.features"> <h3>{{ ::feature.get(\'display_name\') }}</h3> <div ng-repeat="(key, value) in ::feature.getProperties()" ng-init="value = value !== undefined ? value : \'\'"> <span ng-if="::(key !== feature.getGeometryName() && key !== \'ngeo_feature_type_\')"> <span ng-bind=::key></span>: <span ng-bind=::value></span> </span> </div> </div> </div> </div> '},523:function(e,t,r){r(14),e.exports=r(524)},524:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(525),r(16);var o=C(r(161)),n=C(r(78)),i=C(r(27)),a=C(r(526)),l=C(r(18)),s=C(r(360)),u=C(r(121)),c=C(r(108)),d=C(r(34)),g=C(r(171)),p=C(r(170)),f=C(r(15)),h=C(r(20)),m=C(r(13)),v=C(r(7)),y=C(r(50)),_=C(r(29)),b=C(r(30)),S=C(r(10));function C(e){return e&&e.__esModule?e:{default:e}}var F={};F.module=angular.module("gmfapp",[o.default.module.name,n.default.name,i.default.name,a.default.name,l.default.module.name,s.default.name,u.default.name,c.default.name,g.default.name,p.default.name]),F.module.constant("ngeoQueryOptions",{limit:20,queryCountFirst:!0}),F.module.constant("gmfTreeUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/themes?version=2&background=background"),F.constant("defaultTheme","Demo"),F.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),F.queryresultComponent={controller:"gmfappQueryresultController",template:r(245)},F.module.component("gmfappQueryresult",F.queryresultComponent),F.QueryresultController=function(e){this.result=e},F.QueryresultController.$inject=["ngeoQueryResult"],F.module.controller("gmfappQueryresultController",F.QueryresultController),F.MainController=function(e,t,r){var o=this;e.loadThemes();var n=new _.default({color:[255,170,0,.6]}),i=new b.default({color:[255,170,0,1],width:2});this.featureStyle=new S.default({fill:n,image:new y.default({fill:n,radius:5,stroke:i}),stroke:i}),this.map=new f.default({layers:[new m.default({source:new v.default})],view:new h.default({projection:d.default,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:3})}),t.setDatasourceMap(this.map),this.themes=void 0,this.treeSource=void 0,this.queryActive=!0,this.queryGridActive=!0,e.getThemesObject().then(function(e){e&&(o.themes=e,o.treeSource=e[3])}),r.init(this.map)},F.MainController.$inject=["gmfThemes","gmfDataSourcesManager","ngeoFeatureOverlayMgr"],F.module.controller("MainController",F.MainController),t.default=F},525:function(e,t){},526:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=v(r(1)),n=v(r(243)),i=v(r(190)),a=v(r(361)),l=v(r(362)),s=v(r(69)),u=v(r(109)),c=v(r(17)),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(3)),g=v(r(15)),p=v(r(50)),f=v(r(29)),h=v(r(30)),m=v(r(10));function v(e){return e&&e.__esModule?e:{default:e}}var y=angular.module("gmfQueryGridComponent",[n.default.module.name,i.default.name,a.default.name,l.default.module.name,s.default.module.name,u.default.module.name]);function _(e,t,r){return r(e,t)}y.value("gmfDisplayquerygridTemplateUrl",function(e,t){var r=t.gmfDisplayquerygridTemplateurl;return void 0!==r?r:"gmf/query/gridComponent"}),y.run(["$templateCache",function(e){e.put("gmf/query/gridComponent",r(527))}]),_.$inject=["$element","$attrs","gmfDisplayquerygridTemplateUrl"],y.component_={controller:"GmfDisplayquerygridController as ctrl",bindings:{active:"=?gmfDisplayquerygridActive",featuresStyleFn:"&gmfDisplayquerygridFeaturesstyle",selectedFeatureStyleFn:"&gmfDisplayquerygridSelectedfeaturestyle",getMapFn:"&gmfDisplayquerygridMap",removeEmptyColumnsFn:"&?gmfDisplayquerygridRemoveemptycolumns",maxResultsFn:"&?gmfDisplayquerygridMaxresults",maxRecenterZoomFn:"&?gmfDisplayquerygridMaxrecenterzoom",mergeTabs:"<?gmfDisplayquerygridMergetabs"},templateUrl:_},y.component("gmfDisplayquerygrid",y.component_),y.Controller_=function(e,t,r,o,n,i,a,l){var s=this,u=e.has("ngeoQueryOptions")?e.get("ngeoQueryOptions"):{};this.$scope_=t,this.$timeout_=i,this.ngeoQueryResult=r,this.ngeoMapQuerent_=o,this.ngeoCsvDownload_=a,this.$element_=l,this.maxResults=void 0!==u.limit?u.limit:50,this.active=!1,this.pending=!1,this.gridSources={},this.loadedGridSources=[],this.selectedTab=null,this.removeEmptyColumns_=!1,this.maxRecenterZoom,this.mergeTabs={},this.featuresForSources_={},this.features_=new c.default,this.ngeoFeatureOverlayMgr_=n,this.highlightFeatures_=new c.default,this.filename_=e.has("gmfCsvFilename")?e.get("gmfCsvFilename"):"query-results.csv",this.map_=null,this.$scope_.$watchCollection(function(){return r},function(e,t){e!==t&&s.updateData_()}),this.unregisterSelectWatcher_=null},y.Controller_.$inject=["$injector","$scope","ngeoQueryResult","ngeoMapQuerent","ngeoFeatureOverlayMgr","$timeout","ngeoCsvDownload","$element"],y.Controller_.prototype.$onInit=function(){this.removeEmptyColumns_=!!this.removeEmptyColumnsFn&&!0===this.removeEmptyColumnsFn(),this.maxRecenterZoom=this.maxRecenterZoomFn?this.maxRecenterZoomFn():void 0;var e=this.ngeoFeatureOverlayMgr_.getFeatureOverlay();e.setFeatures(this.features_);var t=this.featuresStyleFn();void 0!==t&&(o.default.assertInstanceof(t,m.default),e.setStyle(t));var r=this.ngeoFeatureOverlayMgr_.getFeatureOverlay();r.setFeatures(this.highlightFeatures_);var n=this.selectedFeatureStyleFn();if(void 0!==n)o.default.assertInstanceof(n,m.default);else{var i=new f.default({color:[255,0,0,.6]}),a=new h.default({color:[255,0,0,1],width:2});n=new m.default({fill:i,image:new p.default({fill:i,radius:5,stroke:a}),stroke:a,zIndex:10})}r.setStyle(n);var l=this.getMapFn;if(l){var s=l();o.default.assertInstanceof(s,g.default),this.map_=s}},y.Controller_.prototype.getGridSources=function(){var e=this;return this.loadedGridSources.map(function(t){return e.gridSources[t]})},y.Controller_.prototype.updateData_=function(){var e=this;if(0===this.ngeoQueryResult.total&&!this.hasOneWithTooManyResults_()){var t=this.active;return this.clear(),void(t&&(this.active=this.ngeoQueryResult.pending,this.pending=this.ngeoQueryResult.pending))}this.active=!0,this.pending=!1;var r=this.ngeoQueryResult.sources;Object.keys(this.mergeTabs).length>0&&(r=this.getMergedSources_(r)),r.forEach(function(t){t.tooManyResults?e.makeGrid_(null,t):(t.id=e.escapeValue_(t.id),t.features.length>0&&e.collectData_(t))}),0!==this.loadedGridSources.length?null!==this.selectedTab&&""+this.selectedTab in this.gridSources||this.$timeout_(function(){var t=e.loadedGridSources[0];e.selectTab(e.gridSources[t])},0):this.active=!1},y.Controller_.prototype.hasOneWithTooManyResults_=function(){return this.ngeoQueryResult.sources.some(function(e){return e.tooManyResults})},y.Controller_.prototype.escapeValue_=function(e){if(Number.isInteger(e))return e;var t=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\ |]/g;return null!==e.match(t)?e.replace(t,"_"):e},y.Controller_.prototype.isSelected=function(e){return this.selectedTab===e.source.label},y.Controller_.prototype.getMergedSources_=function(e){var t=this,r=[],o={};for(var n in e.forEach(function(e){null===t.getMergedSource_(e,o)&&r.push(e)}),o)r.push(o[n]);return r},y.Controller_.prototype.getMergedSource_=function(e,t){var r=null;for(var o in this.mergeTabs){if(this.mergeTabs[o].some(function(t){return t==e.label})){r=o;break}}if(null===r)return null;var n=void 0;return r in t?n=t[r]:(n={features:[],id:r,label:r,limit:this.maxResults,pending:!1,queried:!0,tooManyResults:!1,totalFeatureCount:void 0},t[r]=n),e.features.forEach(function(e){n.features.push(e)}),n.tooManyResults=n.tooManyResults||e.tooManyResults,n.tooManyResults&&(n.totalFeatureCount=void 0!==n.totalFeatureCount?n.totalFeatureCount+n.features.length:n.features.length,n.features=[]),void 0!==e.totalFeatureCount&&(n.totalFeatureCount=void 0!==n.totalFeatureCount?n.totalFeatureCount+e.totalFeatureCount:e.totalFeatureCount),n},y.Controller_.prototype.collectData_=function(e){var t=[],r=[],o={},n=void 0,i=void 0;(e.features.forEach(function(e){void 0!==(n=e.getProperties())&&(i=e.getGeometryName(),-1===r.indexOf(i)&&r.push(i),t.push(n),o[l.default.getRowUid(n)]=e)}),this.cleanProperties_(t,r),t.length>0)&&(this.makeGrid_(t,e)&&(this.featuresForSources_[""+e.label]=o))},y.Controller_.prototype.cleanProperties_=function(e,t){e.forEach(function(e){t.forEach(function(t){delete e[t]}),delete e.boundedBy,delete e.ngeo_feature_type_}),!0===this.removeEmptyColumns_&&this.removeEmptyColumnsFn_(e)},y.Controller_.prototype.removeEmptyColumnsFn_=function(e){var t=[],r=void 0,o=void 0;for(o in e[0])for(r=0;r<e.length;r++)if(void 0!==e[r][o]){t.push(o);break}var n=void 0;e.forEach(function(e){for(o in n=[],e)-1===t.indexOf(o)&&n.push(o);n.forEach(function(t){delete e[t]})})},y.Controller_.prototype.makeGrid_=function(e,t){var r=""+t.label,o=null;return(null===e||null!==(o=this.getGridConfiguration_(e)))&&(-1==this.loadedGridSources.indexOf(r)&&this.loadedGridSources.push(r),this.gridSources[r]={configuration:o,source:t},!0)},y.Controller_.prototype.getGridConfiguration_=function(e){o.default.assert(e.length>0);var t={};Object.assign(t,e[0]),delete t.ol_uid;var r=[];return Object.keys(t).forEach(function(e){r.push({name:e})}),r.length>0?new l.default(e,r):null},y.Controller_.prototype.clear=function(){this.active=!1,this.pending=!1,this.gridSources={},this.loadedGridSources=[],this.selectedTab=null,this.tooManyResults=!1,this.features_.clear(),this.highlightFeatures_.clear(),this.ngeoMapQuerent_.clear(),this.featuresForSources_={},this.unregisterSelectWatcher_&&this.unregisterSelectWatcher_()},y.Controller_.prototype.selectTab=function(e){var t=this,r=e.source;this.selectedTab=r.label,this.unregisterSelectWatcher_&&(this.unregisterSelectWatcher_(),this.unregisterSelectWatcher_=null),null!==e.configuration&&(this.unregisterSelectWatcher_=this.$scope_.$watchCollection(function(){return e.configuration.selectedRows},function(e,r){Object.keys(e)!==Object.keys(r)&&t.onSelectionChanged_()})),this.updateFeatures_(e),this.reflowGrid_(r.id)},y.Controller_.prototype.reflowGrid_=function(e){var t=this.$element_.find("div.tab-pane#"+e);t.removeClass("active").addClass("active"),this.$timeout_(function(){t.find("div.ngeo-grid-table-container table").trigger("reflow")})},y.Controller_.prototype.onSelectionChanged_=function(){if(null!==this.selectedTab){var e=this.gridSources[""+this.selectedTab];this.updateFeatures_(e)}},y.Controller_.prototype.updateFeatures_=function(e){if(this.features_.clear(),this.highlightFeatures_.clear(),null!==e.configuration){var t=""+e.source.label,r=this.featuresForSources_[t],o=e.configuration.selectedRows;for(var n in r){var i=r[n];n in o?this.highlightFeatures_.push(i):this.features_.push(i)}}},y.Controller_.prototype.getActiveGridSource=function(){return null===this.selectedTab?null:this.gridSources[""+this.selectedTab]},y.Controller_.prototype.isOneSelected=function(){var e=this.getActiveGridSource();return null!==e&&null!==e.configuration&&e.configuration.getSelectedCount()>0},y.Controller_.prototype.getSelectedRowCount=function(){var e=this.getActiveGridSource();return null===e||null===e.configuration?0:e.configuration.getSelectedCount()},y.Controller_.prototype.selectAll=function(){var e=this.getActiveGridSource();null!==e&&e.configuration.selectAll()},y.Controller_.prototype.unselectAll=function(){var e=this.getActiveGridSource();null!==e&&e.configuration.unselectAll()},y.Controller_.prototype.invertSelection=function(){var e=this.getActiveGridSource();null!==e&&e.configuration.invertSelection()},y.Controller_.prototype.zoomToSelection=function(){if(null!==this.getActiveGridSource()){var e=d.createEmpty();this.highlightFeatures_.forEach(function(t){d.extend(e,t.getGeometry().getExtent())});var t=this.map_.getSize();o.default.assert(void 0!==t);var r=this.maxRecenterZoom;this.map_.getView().fit(e,{size:t,maxZoom:r})}},y.Controller_.prototype.downloadCsv=function(){var e=this.getActiveGridSource();if(null!==e){var t=e.configuration.columnDefs;o.default.assert(void 0!==t);var r=e.configuration.getSelectedRows();this.ngeoCsvDownload_.startDownload(r,t,this.filename_)}},y.controller("GmfDisplayquerygridController",y.Controller_),t.default=y},527:function(e,t){e.exports='<div class="gmf-displayquerygrid panel" ng-show=ctrl.active> <div class=close ng-click=ctrl.clear()> &times; </div> <ul class="nav nav-pills small" role=tablist> <li ng-repeat="gridSource in ctrl.getGridSources() track by gridSource.source.id" role=presentation ng-class="{\'active\' : ctrl.isSelected(gridSource)}" ng-click=ctrl.selectTab(gridSource)> <a href=#{{gridSource.source.id}} data-target=#{{gridSource.source.id}} aria-controls={{gridSource.source.id}} role=tab data-toggle=tab> <span ng-if="gridSource.source.tooManyResults !== true"> {{gridSource.source.label | translate}} ({{gridSource.source.features.length}}) </span> <span ng-if="gridSource.source.tooManyResults === true"> {{gridSource.source.label | translate}} ({{gridSource.source.totalFeatureCount}}*) </span> </a> </li> </ul> <div class=tab-content> <div ng-repeat="gridSource in ctrl.getGridSources() track by gridSource.source.id" role=tabpanel class=tab-pane ng-class="{\'active\' : ctrl.isSelected(gridSource)}" id={{gridSource.source.id}}> <ngeo-grid ngeo-grid-configuration=gridSource.configuration ng-if="gridSource.source.tooManyResults !== true"> </ngeo-grid> <div ng-if="gridSource.source.tooManyResults === true"> <div class="gmf-displayquerygrid-message alert alert-warning"> <p><span translate>The results can not be displayed because the maximum number has been reached</span> ({{gridSource.source.limit}}).</p> <p translate>Please refine your query.</p> </div> </div> </div> </div> <div class=navbar ng-show="!ctrl.pending && ctrl.getActiveGridSource() && ctrl.getActiveGridSource().configuration !== null"> <ul class="nav navbar-nav navbar-right"> <li class="small ng-hide" ng-show=ctrl.isOneSelected()> <p class="navbar-text ng-binding"> {{ctrl.getSelectedRowCount()}} <span translate>selected element(s)</span> </p> </li> <li ng-show=ctrl.isOneSelected() class=ng-hide> <button class="btn btn-link btn-xs" title="{{\'Zoom to selection\' | translate}}" ng-click=ctrl.zoomToSelection()> <i class="fa fa-search-plus"></i> <span translate>Zoom to</span> </button> </li> <li ng-show=ctrl.isOneSelected() class=ng-hide> <button class="btn btn-link btn-xs" title="{{\'Export selection as CSV\' | translate}}" ng-click=ctrl.downloadCsv()> <i class="fa fa-download"></i> <span translate>Export as CSV</span> </button> </li> <li class="dropdown navbar-link dropup"> <button type=button class="dropup btn btn-default btn-xs" data-toggle=dropdown aria-haspopup=true aria-expanded=false> <span translate>Select</span> <span class=caret></span> </button> <ul class=dropdown-menu aria-labelledby=dLabel> <li> <a href="" ng-click=ctrl.selectAll() translate>All</a> </li> <li> <a href="" ng-click=ctrl.unselectAll() translate>None</a> </li> <li> <a href="" ng-click=ctrl.invertSelection() translate>Reverse selection</a> </li> </ul> </li> </ul> </div> <div ng-show=ctrl.pending class=gmf-displayquerygrid-pending> <span class="fa fa-spinner fa-spin"></span> </div> </div> '},7:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),n=r(22),i=r(23);const a=function(e){const t=e||{},r=void 0!==t.projection?t.projection:"EPSG:3857",o=void 0!==t.tileGrid?t.tileGrid:Object(i.a)({extent:Object(i.b)(r),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});n.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,opaque:t.opaque,projection:r,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:o,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};Object(o.inherits)(a,n.a);var l=a;const s=function(e){const t=e||{};let r;r=void 0!==t.attributions?t.attributions:[s.ATTRIBUTION];const o=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",n=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";l.call(this,{attributions:r,cacheSize:t.cacheSize,crossOrigin:o,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:n,wrapX:t.wrapX})};Object(o.inherits)(s,l),s.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.';t.default=s}},[523]);
//# sourceMappingURL=displayquerygrid.5a1ed4589d435bafbf73.js.map