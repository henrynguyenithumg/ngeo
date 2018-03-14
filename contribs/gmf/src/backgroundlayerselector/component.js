/**
 * @module gmf.backgroundlayerselector.component
 */
import googAsserts from 'goog/asserts.js';
import gmfThemeThemes from 'gmf/theme/Themes.js';
import ngeoMapBackgroundLayerMgr from 'ngeo/map/BackgroundLayerMgr.js';
import * as olEvents from 'ol/events.js';

/**
 * @type {!angular.Module}
 */
const exports = angular.module('gmfBackgroundlayerselector', [
  gmfThemeThemes.module.name,
  ngeoMapBackgroundLayerMgr.module.name,
]);


exports.value('gmfBackgroundlayerselectorTemplateUrl',
  /**
   * @param {!angular.JQLite} $element Element.
   * @param {!angular.Attributes} $attrs Attributes.
   * @return {string} Template URL.
   */
  ($element, $attrs) => {
    const templateUrl = $attrs['gmfBackgroundlayerselectorTemplateurl'];
    return templateUrl !== undefined ? templateUrl :
      'gmf/backgroundlayerselector';
  }
);


exports.run(/* @ngInject */ ($templateCache) => {
  $templateCache.put('gmf/backgroundlayerselector', require('./component.html'));
});


/**
 * @param {!angular.JQLite} $element Element.
 * @param {!angular.Attributes} $attrs Attributes.
 * @param {!function(!angular.JQLite, !angular.Attributes): string} gmfBackgroundlayerselectorTemplateUrl Template function.
 * @return {string} Template URL.
 * @ngInject
 */
function gmfBackgroundlayerselectorTemplateUrl($element, $attrs, gmfBackgroundlayerselectorTemplateUrl) {
  return gmfBackgroundlayerselectorTemplateUrl($element, $attrs);
}


/**
 * Provide a "background layer selector" component.
 *
 * Example:
 *
 *      <gmf-backgroundlayerselector
 *        gmf-backgroundlayerselector-dimensions="::ctrl.dimensions"
 *        gmf-backgroundlayerselector-map="::ctrl.map"
 *        gmf-backgroundlayerselector-select="onBackgroundSelected()">
 *      </gmf-backgroundlayerselector>
 *
 * Used UI metadata:
 *
 *  * thumbnail: The URL used for the icon.
 *
 * @htmlAttribute {Object.<string, string>} gmf-backgroundlayerselector-dimensions
 *     The dimensions.
 * @htmlAttribute {ol.Map=} gmf-backgroundlayerselector-map The map.
 * @htmlAttribute {Function} gmf-backgroundlayerselector-select Function called
 *     when a layer was selected by the user.
 *
 * @ngdoc component
 * @ngname gmfBackgroundlayerselector
 */
exports.component_ = {
  controller: 'GmfBackgroundlayerselectorController as ctrl',
  bindings: {
    'dimensions': '=gmfBackgroundlayerselectorDimensions',
    'map': '=gmfBackgroundlayerselectorMap',
    'select': '&?gmfBackgroundlayerselectorSelect'
  },
  templateUrl: gmfBackgroundlayerselectorTemplateUrl
};


exports.component('gmfBackgroundlayerselector',
  exports.component_);


/**
 * @constructor
 * @private
 * @struct
 * @param {!angular.Scope} $scope Angular scope.
 * @param {!ngeo.map.BackgroundLayerMgr} ngeoBackgroundLayerMgr Background layer manager.
 * @param {!gmf.theme.Themes} gmfThemes Themes service.
 * @ngInject
 * @ngdoc controller
 * @ngname GmfBackgroundlayerselectorController
 */
exports.Controller_ = function($scope, ngeoBackgroundLayerMgr, gmfThemes) {

  /**
   * @type {!Object.<string, string>}
   * @export
   */
  this.dimensions;

  /**
   * @type {?ol.Map}
   * @export
   */
  this.map;

  /**
   * Function called when a layer was selected by the user.
   * @type {?Function}
   * @export
   */
  this.select;

  /**
   * @type {?ol.layer.Base}
   * @export
   */
  this.bgLayer;

  /**
   * @type {?Array.<!ol.layer.Base>}
   * @export
   */
  this.bgLayers;

  /**
   * @type {!gmf.theme.Themes}
   * @private
   */
  this.gmfThemes_ = gmfThemes;

  /**
   * @type {!Array.<!ol.EventsKey>}
   * @private
   */
  this.listenerKeys_ = [];

  this.listenerKeys_.push(olEvents.listen(gmfThemes, 'change', this.handleThemesChange_, this));

  /**
   * @type {!ngeo.map.BackgroundLayerMgr}
   * @private
   */
  this.backgroundLayerMgr_ = ngeoBackgroundLayerMgr;

  this.listenerKeys_.push(olEvents.listen(this.backgroundLayerMgr_, 'change',
    /**
     * @param {!ngeox.BackgroundEvent} event Event.
     */
    (event) => {
      this.bgLayer = event.detail.current;
    }));

  $scope.$on('$destroy', this.handleDestroy_.bind(this));
};


/**
 * Initialise the controller.
 */
exports.Controller_.prototype.$onInit = function() {
  googAsserts.assert(this.dimensions, 'The dimensions object is required');
  this.handleThemesChange_();
};


/**
 * Called when the themes changes. Set (or reset) the backround layers.
 * @private
 */
exports.Controller_.prototype.handleThemesChange_ = function() {
  this.gmfThemes_.getBgLayers().then((layers) => {
    this.bgLayers = layers;
  });
};


/**
 * @param {ol.layer.Base} layer Layer.
 * @param {boolean=} opt_silent Do not notify listeners.
 * @export
 */
exports.Controller_.prototype.setLayer = function(layer, opt_silent) {
  this.bgLayer = layer;
  this.backgroundLayerMgr_.set(this.map, layer);
  if (!opt_silent && this.select) {
    this.select();
  }
};


/**
 * @private
 */
exports.Controller_.prototype.handleDestroy_ = function() {
  this.listenerKeys_.forEach(olEvents.unlistenByKey);
  this.listenerKeys_.length = 0;
};


exports.controller('GmfBackgroundlayerselectorController',
  exports.Controller_);


export default exports;
