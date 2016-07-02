(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name TeamController
* @module metricapp
* @requires $scope
* @requires $location
*
* @description
* Manages the team.
* Realizes the control layer for {team.view}.
************************************************************************************/

angular.module('metricapp')

.controller('TeamController', TeamController);

TeamController.$inject = ['$scope', '$location', 'AuthService'];

function TeamController($scope, $location, AuthService) {

    var vm = this;

}

})();
