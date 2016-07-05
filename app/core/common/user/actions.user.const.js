(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name USER_ACTIONS
* @module metricapp
* @description
* Defines constants related to Expert's actions.
* - Home:
* - Profile:
* - Settings:
************************************************************************************/

angular.module('metricapp')

.constant('USER_ACTIONS', [
    {name: 'Home',          href: '#/home',         icon: 'desktop'},
    {name: 'Profile',       href: '#/profile',      icon: 'user'},
    {name: 'Organization',  href: '#/organization', icon: 'sitemap'},
    {name: 'Messages',      href: '#/messages',     icon: 'comments'},
    {name: 'Settings',      href: '#/settings',     icon: 'cog'}
]);

})();
