(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name SettingsController
* @module metricapp
* @requires $scope
* @requires $location
* @requires SettingService
*
* @description
* Realizes the control layer for `settings.view`.
************************************************************************************/

angular.module('metricapp')

.controller('SettingsController', SettingsController);

SettingsController.$inject = ['$scope', '$location', 'SettingService'];

function SettingsController($scope, $location, SettingService) {

    var vm = this;

    _init();

    function _loadSettings() {
        vm.loading = true;
        vm.success = false;
        SettingService.getSettings().then(
            function(response) {
                vm.loading = false;
                vm.success = true;
            }
        );
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.settings = {};
        vm.numsettings = 0;
        _loadSettings();
    }

}

})();
