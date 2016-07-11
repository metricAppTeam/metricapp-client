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

    //list of teams
    vm.teams = [
        {name: "Team 1",progress: 30, description:"Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"},
        {name: "Team 2",progress: 40, description:"Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"},
        {name: "Team 3",progress: 90, description:"Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"},
        {name: "Team 4",progress: 10, description:"Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}
    ];

}

})();
