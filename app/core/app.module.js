(function() { 'use strict';

/************************************************************************************
* @ngdoc overview
* @name metricapp
* @requires ngRoute
* @requires ngCookies
* @requires ngMessage
* @requires ngFlash
*
* @description
* Defines the app module, giving all its dependencies.
************************************************************************************/

angular.module('metricapp',[
    'ngRoute',
    'ngCookies',
    'ngMessages',
    'ngFlash',
    'smart-table',
    'ui.ace',
    'as.sortable',
    'nvd3',
    'angular.morris-chart',
    'angular-svg-round-progress',
    'angular-bubbletree',
    'angularChart',
    'ngCytoscape',
    'ui.bootstrap'
]);

})();
