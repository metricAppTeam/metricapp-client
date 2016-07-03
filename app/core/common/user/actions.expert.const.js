(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name EXPERT_ACTIONS
* @module metricapp
* @description
* Defines constants related to Expert's actions.
* - EXPERT_ACTION_1:
* - EXPERT_ACTION_2:
* - EXPERT_ACTION_3:
************************************************************************************/

angular.module('metricapp')

.constant('EXPERT_ACTIONS', [
    {name: 'Profile',   href: '#/profile',   icon: 'user'},
    {name: 'Messages',  href: '#/messages',  icon: 'comments'},
    {name: 'Grid',      href: '#/grid',      icon: 'codepen'},
    {name: 'Team',      href: '#/team',      icon: 'users'},
    {name: 'Settings',  href: '#/settings',  icon: 'cog'}
]);

})();
