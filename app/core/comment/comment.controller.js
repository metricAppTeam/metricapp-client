(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name CommentController
* @module metricapp
* @requires $scope
* @requires $location
*
* @description
* Manages the comment-based conversation between users.
* Realizes the control layer for `comment.view`.
************************************************************************************/

angular.module('metricapp')

.controller('CommentController', CommentController);

CommentController.$inject = ['$scope', '$location'];

function CommentController($scope, $location) {

    var vm = this;

    vm.foo = foo;

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
