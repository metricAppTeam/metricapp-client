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


    {name: 'MeasurementGoals', 			href: '#/metricator',     icon:'fa fa-tasks'          },
    {name: 'Metrics', 				href: '#/metrics',             icon:'fa fa-tasks'         },
    {name: 'Search MG', 			href: '#/measurementgoalsearch', icon:'fa fa-tasks'       }

]);

})();
