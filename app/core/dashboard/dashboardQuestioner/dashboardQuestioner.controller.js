(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name DashboardQuestionerController
* @module metricapp
* @requires $rootScope
* @requires $scope
* @requires $location
* @requires AuthService
*
* @description
* Manages the Home dashboard for all the users.
* Realizes the control layer for `home.view`.
************************************************************************************/

angular.module('metricapp')

.controller('DashboardQuestionerController', DashboardQuestionerController);

DashboardQuestionerController.$inject = ['$rootScope', '$scope', '$location', 'AuthService'];

function DashboardQuestionerController($rootScope, $scope, $location, AuthService) {

    var vm = this;

    vm.user = null;
    vm.ROLES = AuthService.ROLES;

    _init();

    /********************************************************************************
    * @ngdoc method
    * @name _init
    * @description
    * Initializes the controller:
    * - retrieving the current user.
    ********************************************************************************/
    function _init() {
        vm.user = AuthService.getUser();
    }
}

})();
