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
    {name: 'Profile',   href: '#/profile',   icon: 'user'},
    {name: 'Messages',  href: '#/messages',  icon: 'comments'},
    {name: 'Action',    href: '#/metricator_action', icon: 'cog'},
    {name: 'Settings',  href: '#/settings',  icon: 'cog'}
]);

})();
