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

    {name: 'Profile', 				href: '#/profile',				icon: 'user'   },
    {name: 'Dashboard', 			href: '#/metricator'						         },
    {name: 'Metrics', 				href: '#/metricDashboard'							         },
    {name: 'Search MG', 			href: '#/measurementgoalsearch'			     	},
    {name: 'Settings', 				href: '#/settings', 			    icon: 'cog'  	}

]);

})();
