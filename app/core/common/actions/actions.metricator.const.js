(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name METRICATOR_ACTIONS
* @module metricapp
* @description
* Defines constants related to Metricator's actions.
* - METRICATOR_ACTION_1:
************************************************************************************/

angular.module('metricapp')

.constant('METRICATOR_ACTIONS', [


    {name: 'Profile', 				href: '#/profile',				icon: 'user'   },
    {name: 'Dashboard', 			href: '#/metricator'						         },
    {name: 'Metrics', 				href: '#/metricDashboard'							         },
    {name: 'Search MG', 			href: '#/measurementgoalsearch'			     	}

]);

})();
