/*******************************************************************************
* @ngdoc controller
* @name MetricController
* @module metricapp
* @requires $scope
* @requires $location
*
* @description
* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
* incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
* nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
*******************************************************************************/

(function() {
    'use strict';

    angular
        .module('metricapp')
        .controller('MetricController', MetricController);

    MetricController.$inject = ['$scope', '$location'];

    function MetricController($scope, $location) {
        /* jshint validthis: true */
        var vm = this;

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
