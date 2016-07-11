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
    {name: 'Personal Profile',         href: '#/personalprofile',   	      icon: 'user'},
    {name: 'User Profile',             href: '#/userprofile',   	      icon: 'user'},
    {name: 'Grids',      	  		   href: '#/grids',      	  icon: 'codepen'},
    {name: 'Profile Pop-Up',  		   href: '#/profile_pop_up',   icon: 'user'},
    {name: 'Team',      	  		   href: '#/team',             icon: 'users'},
    {name: 'Settings',  	  		   href: '#/settings',         icon: 'cog'}
]);

})();
