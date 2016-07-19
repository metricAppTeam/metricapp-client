(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name ActionService
* @module metricapp
* @requires USER_ACTIONS
* @requires EXPERT_ACTIONS
* @requires METRICATOR_ACTIONS
* @requires QUESTIONER_ACTIONS
*
* @description
* Provides actions reference according to user roles.
************************************************************************************/

angular.module('metricapp')

.service('ActionService', ActionService);

ActionService.$inject = ['USER_ACTIONS', 'EXPERT_ACTIONS', 'METRICATOR_ACTIONS', 'QUESTIONER_ACTIONS'];

function ActionService(USER_ACTIONS, EXPERT_ACTIONS, METRICATOR_ACTIONS, QUESTIONER_ACTIONS) {

    var service = this;

    service.ACTIONS = {
        USER: USER_ACTIONS,
        GQMExpert: EXPERT_ACTIONS,
        Metricator: METRICATOR_ACTIONS,
        Questioner: QUESTIONER_ACTIONS
    };

    service.getActionsForRole = getActionsForRole;

    function getActionsForRole(role) {
        var userActions = service.ACTIONS.USER;
        var roleActions = service.ACTIONS[role];
        var actions = userActions.concat(roleActions);
        return actions;
    }

}

})();
