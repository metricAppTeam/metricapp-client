(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name SettingService
* @module metricapp
* @requires $http
* @requires REST_SERVICE
*
* @description
* Provides settings management services.
************************************************************************************/

angular.module('metricapp')

.service('SettingService', SettingService);

SettingService.$inject = ['$http', 'REST_SERVICE'];

function SettingService($http, REST_SERVICE) {

    var service = this;

    service.getSetting = getSetting;
    service.getSettings = getSettings;

    /********************************************************************************
    * @ngdoc method
    * @name getSetting
    * @description
    * Retrieves the specified setting.
    * @param {Int} settingid The setting id for authuser.
    * @returns {Setting|Error} On success, the setting value; an error, otherwise.
    ********************************************************************************/
    function getSetting(settingid) {

    }

    /********************************************************************************
    * @ngdoc method
    * @name getSettings
    * @description
    * Retrieves the settings for authuser.
    * @returns {Setting|Error} On success, the settings; an error, otherwise.
    ********************************************************************************/
    function getSettings() {

    }

}

})();
