goog.provide('gmf.datasource.DataSourceBeingFiltered');


/**
 * @type {!angular.Module}
 */
gmf.datasource.DataSourceBeingFiltered.module = angular.module('gmfDataSourceBeingFiltered', []);
// type gmfx.datasource.DataSourceBeingFiltered
gmf.datasource.DataSourceBeingFiltered.module.value('gmfDataSourceBeingFiltered', {
  dataSource: null
});
