(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name NavbarController
* @module metricapp
* @requires $scope
* @requires $location
*
* @description
* Manages the navbar for all users.
* Realizes the control layer for {navbar.view}.
************************************************************************************/

angular.module('metricapp')

.controller('NavbarController', NavbarController);

NavbarController.$inject = ['$scope', '$location', 'AuthService'];

function NavbarController($scope, $location, AuthService) {

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

    /********************************************************************************
    * @ngdoc method
    * @name foo
    * @description
    * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    * eiusmod tempor incididunt ut labore et dolore magna aliqua.
    * @param {type} a Insert here param description.
    * @param {type} b Insert here param description.
    * @param {type} c Insert here param description.
    * @returns {type} Insert here return description.
    ********************************************************************************/
    function foo(a, b, c) {

    }

    /********************************************************************************
    * @ngdoc method
    * @name _foo
    * @description
    * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    * eiusmod tempor incididunt ut labore et dolore magna aliqua.
    * @param {type} a Insert here param description.
    * @param {type} b Insert here param description.
    * @param {type} c Insert here param description.
    * @returns {type} Insert here return description.
    ********************************************************************************/
    function _foo(a, b, c) {

    }
}

})();
