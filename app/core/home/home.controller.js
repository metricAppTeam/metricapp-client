/*******************************************************************************
* @ngdoc controller
* @name HomeController
* @module metricapp
* @requires $scope
* @requires $location
*
* @description
* Manages the Home dashboard for all the users. Realizes the control layer for:
* - home.view
*******************************************************************************/

(function() {
    'use strict';

    angular
        .module('metricapp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$location'];

    function HomeController($scope, $location) {
        /* jshint validthis: true */
        var vm = this;

        vm.foo = foo;

        /***********************************************************************
        * @ngdoc method
        * @name foo
        * @description
        * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        * eiusmod tempor incididunt ut labore et dolore magna aliqua.
        * @param {type} a Insert here param description.
        * @param {type} b Insert here param description.
        * @param {type} c Insert here param description.
        * @returns {type} Insert here return description.
        ***********************************************************************/
        function foo(a, b, c) {

        }

        /***********************************************************************
        * @ngdoc method
        * @name _foo
        * @description
        * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        * eiusmod tempor incididunt ut labore et dolore magna aliqua.
        * @param {type} a Insert here param description.
        * @param {type} b Insert here param description.
        * @param {type} c Insert here param description.
        * @returns {type} Insert here return description.
        ***********************************************************************/
        function _foo(a, b, c) {

        }

    }

})();
