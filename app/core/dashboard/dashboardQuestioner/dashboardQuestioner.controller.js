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

    _init();

    /********************************************************************************
    * @ngdoc method
    * @name _init
    * @description
    * Initializes the controller:
    * - initialization 1.
    * - initialization 2.
    * - initialization 3.
    ********************************************************************************/
    function _init() {

    }
}

})();
