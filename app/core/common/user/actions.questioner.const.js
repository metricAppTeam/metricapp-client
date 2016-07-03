(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name QUESTIONER_ACTIONS
* @module metricapp
* @description
* Defines constants related to Questioner's actions.
* - QUESTIONER_ACTION_1:
* - QUESTIONER_ACTION_2:
* - QUESTIONER_ACTION_3:
************************************************************************************/

angular.module('metricapp')

.constant('QUESTIONER_ACTIONS', [
    {name: 'Profile',   href: '#/profile',   icon: 'user'},
    {name: 'Inbox',     href: '#/messages',   icon: 'inbox'},
    {name: 'Action',    href: '#/questioner_action', icon: 'cog'},
    {name: 'Settings',  href: '#/settings',  icon: 'cog'}
]);

})();
