(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name TopbarController
* @module metricapp
* @requires $scope
* @requires $location
* @requires AUTH_EVENTS
*
* @description
* Manages the topbar for all users.
* Realizes the control layer for {topbar.directive}.
************************************************************************************/

angular.module('metricapp')

.controller('TopbarController', TopbarController);

TopbarController.$inject = ['$scope', '$location', 'AuthService', 'AUTH_EVENTS'];

function TopbarController($scope, $location, AuthService, AUTH_EVENTS) {

    var vm = this;

    function _render() {
        if ($rootScope.globals && $rootScope.globals.user) {
            //
        } else {
            //
        }
    }

    function _init() {
        _render();

        /****************************************************************************
        * WATCHERS
        ****************************************************************************/

        /****************************************************************************
        * LISTENERS
        ****************************************************************************/

        $scope.$on(AUTH_EVENTS.LOGIN_SUCCESS, _render);
        $scope.$on(AUTH_EVENTS.LOGOUT_SUCCESS, _render);

        /****************************************************************************
        * BRODCASTERS
        ****************************************************************************/
    }

}

})();
