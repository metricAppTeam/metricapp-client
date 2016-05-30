(function() { 'use strict';

/************************************************************************************
* @ngdoc overview
* @name ROLES
* @module metricapp
* @description
* Defines constants related to user roles.
* - ALL:
* - NONE:
* - EXPERT:
* - QUESTIONER:
* - METRICATOR:
************************************************************************************/

angular.module('metricapp')

.constant('ROLES', ROLES);

var ROLES = {
    ALL:        '*',
    NONE:       'NONE',
    EXPERT:     'EXPERT',
    QUESTIONER: 'QUESTIONER',
    METRICATOR: 'METRICATOR'
};

})();
