goog.provide('gmf.import.wmtsCapabilityLayertreeComponent');

goog.require('gmf'); // nowebpack
/** @suppress {extraRequire} */
goog.require('gmf.datasource.ExternalDataSourcesManager');
/** @suppress {extraRequire} */
goog.require('ngeo.message.Popup');
goog.require('ol');


gmf.import.wmtsCapabilityLayertreeComponent = angular.module('gmfWmtscapabilitylayertree', [
  gmf.datasource.ExternalDataSourcesManager.module.name,
  ngeo.message.Popup.module.name,
]);


// webpack: exports.run(/* @ngInject */ ($templateCache) => {
// webpack:   $templateCache.put('ngeo/import/wmtsCapabilityLayertreeComponent', require('./wmtsCapabilityLayertreeComponent.html'));
// webpack: });


gmf.import.wmtsCapabilityLayertreeComponent.value('gmfWmtscapabilitylayertreTemplateUrl',
  /**
   * @param {!angular.Attributes} $attrs Attributes.
   * @return {string} The template url.
   */
  ($attrs) => {
    const templateUrl = $attrs['gmfWmtscapabilitylayertreTemplateUrl'];
    return templateUrl !== undefined ? templateUrl :
      `${gmf.baseModuleTemplateUrl}/import/wmtsCapabilityLayertreeComponent.html`; // nowebpack
    // webpack: 'ngeo/import/wmtsCapabilityLayertreeComponent';
  });


/**
 * @param {!angular.Attributes} $attrs Attributes.
 * @param {!function(!angular.Attributes): string} gmfWmtscapabilitylayertreTemplateUrl Template function.
 * @return {string} Template URL.
 * @ngInject
 */
function gmfWmtscapabilitylayertreTemplateUrl($attrs, gmfWmtscapabilitylayertreTemplateUrl) {
  return gmfWmtscapabilitylayertreTemplateUrl($attrs);
}


/**
 * @private
 */
gmf.import.wmtsCapabilityLayertreeComponent.Controller_ = class {

  /**
   * @param {!gmf.datasource.ExternalDataSourcesManager}
   *     gmfExternalDataSourcesManager GMF service responsible of managing
   *     external data sources.
   * @private
   * @struct
   * @ngInject
   * @ngdoc controller
   * @ngname GmfWmtscapabilitylayertreeController
   */
  constructor(gmfExternalDataSourcesManager) {

    // Binding properties

    /**
     * WMS Capabilities definition
     * @type {!Object}
     * @export
     */
    this.capabilities;

    /**
     * List of WMTS Capability Layer objects.
     * @type {!Array.<!Object>}
     * @export
     */
    this.layers;

    /**
     * The original WMTS GetCapabilities url that was used to fetch the
     * capability layers.
     * @type {string}
     * @export
     */
    this.url;


    // Injected properties

    /**
     * @type {!gmf.datasource.ExternalDataSourcesManager}
     * @private
     */
    this.gmfExternalDataSourcesManager_ = gmfExternalDataSourcesManager;
  }

  /**
   * @param {!Object} layer WMTS Capability Layer object
   * @export
   */
  createAndAddDataSource(layer) {
    const manager = this.gmfExternalDataSourcesManager_;
    manager.createAndAddDataSourceFromWMTSCapability(
      layer,
      this.capabilities,
      this.url
    );
  }

  /**
   * @param {!Object} layer WMTS Capability Layer object
   * @return {number} Unique id for the Capability Layer.
   * @export
   */
  getUid(layer) {
    return ol.getUid(layer);
  }
};


gmf.import.wmtsCapabilityLayertreeComponent.component('gmfWmtscapabilitylayertree', {
  bindings: {
    'capabilities': '<',
    'layers': '<',
    'url': '<'
  },
  controller: gmf.import.wmtsCapabilityLayertreeComponent.Controller_,
  templateUrl: gmfWmtscapabilitylayertreTemplateUrl
});
