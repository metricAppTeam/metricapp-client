(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name SettingsController
* @module metricapp
* @requires $location
* @requires SettingService
*
* @description
* Realizes the control layer for `settings.view`.
************************************************************************************/

angular.module('metricapp')

.controller('SettingsController', SettingsController);

SettingsController.$inject = ['$location', 'SettingService'];

function SettingsController($location, SettingService) {

    var vm = this;

    _init();

    function _loadAll() {
        vm.loading = true;
        vm.success = false;
        SettingService.getAllSettings().then(
            function(resolve) {
                var settings = angular.copy(resolve.settings);
                vm.numsettings = Object.keys(vm.settings).length;
                vm.success = true;
            },
            function(reject) {
                vm.success = false;
            }
        ).finally(function() {
            vm.loading = false;
        });
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.settings = {};
        vm.numsettings = 0;
        _loadAllSettings();
    }

}

})();
