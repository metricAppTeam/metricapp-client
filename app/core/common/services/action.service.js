(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name ActionService
* @module metricapp
* @requires EXPERT_ACTIONS
* @requires METRICATOR_ACTIONS
* @requires QUESTIONER_ACTIONS
*
* @description
* Provides actions reference according to user roles.
************************************************************************************/

angular.module('metricapp')

.service('ActionService', ActionService);

ActionService.$inject = [
    'EXPERT_ACTIONS',
    'METRICATOR_ACTIONS',
    'QUESTIONER_ACTIONS'
];

function ActionService(EXPERT_ACTIONS, METRICATOR_ACTIONS, QUESTIONER_ACTIONS) {

    var service = this;

    service.DASHBOARDS = {
        EXPERT: '/dashboardExpert',
        METRICATOR: '/dashboardMetricator',
        QUESTIONER: '/dashboardQuestioner'
    };

    service.ACTIONS = {
        EXPERT: EXPERT_ACTIONS,
        METRICATOR: METRICATOR_ACTIONS,
        QUESTIONER: QUESTIONER_ACTIONS
    };

}

})();
