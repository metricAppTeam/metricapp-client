(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name METRICATOR_ACTIONS
* @module metricapp
* @description
* Defines constants related to Metricator's actions.
* - METRICATOR_ACTION_1:
* - METRICATOR_ACTION_2:
* - METRICATOR_ACTION_3:
************************************************************************************/

angular.module('metricapp')

.constant('METRICATOR_ACTIONS', [
    {name: 'Profile', href: '#/profile'},
    {name: 'METRICATOR_ACTION_2', href: '#/metricator_action_2'},
    {name: 'Settings', href: '#/settings'}
]);

})();
