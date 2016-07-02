(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name SettingsController
* @module metricapp
* @requires $scope
* @requires $location
*
* @description
* Manages the whole app settings.
* Realizes the control layer for {settings.view}.
************************************************************************************/

angular.module('metricapp')

.controller('SettingsController', SettingsController);

SettingsController.$inject = ['$scope', '$location', 'AuthService'];

function SettingsController($scope, $location, AuthService) {

    var vm = this;

}

})();
