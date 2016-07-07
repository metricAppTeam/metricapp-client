(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name SettingService
* @module metricapp
* @requires $http
* @requires $cookies
* @requires REST_SERVICE
*
* @description
* Provides settings management services.
************************************************************************************/

angular.module('metricapp')

.service('SettingService', SettingService);

SettingService.$inject = ['$http', '$cookies', '$q', 'REST_SERVICE', 'DB_SETTINGS'];

function SettingService($http, $cookies, $q, REST_SERVICE, DB_SETTINGS) {

    var service = this;

    service.getSetting = getSetting;
    service.getAllSettings = getAllSettings;

    /********************************************************************************
    * @ngdoc method
    * @name getSetting
    * @description
    * Retrieves the specified setting.
    * @param {String} settingid The setting id for authuser.
    * @returns {Setting|Error} On success, the setting value; an error message,
    * otherwise.
    ********************************************************************************/
    function getSetting(settingid) {
        var username = $cookies.getObject('globals').user.username;
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var SETTINGS = DB_SETTINGS[username];
                if (SETTINGS) {
                    var SETTING = SETTINGS[settingid];
                    if (SETTING) {
                        resolve({setting: SETTING});
                    } else {
                        reject({errmsg: 'Setting ' + settingid + ' not found for user ' + username});
                    }
                } else {
                    reject({errmsg: 'Settings not found for user ' + username});
                }
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name getAllSettings
    * @description
    * Retrieves the settings for authuser.
    * @returns {Settings|Error} On success, the settings; an error, otherwise.
    ********************************************************************************/
    function getAllSettings() {
        var username = $cookies.getObject('globals').user.username;
        return $q(function(resolve, reject) {
            setTimeout(function() {
                if (DB_SETTINGS[username]) {
                    resolve({settings: DB_SETTINGS[username]});
                } else {
                    reject('Settings not found for user: ' + username);
                }
            }, 500);
    }

}

})();
