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

    service.getAll = getAll;
    service.getById = getById;
    service.getInArray = getInArray;

    /********************************************************************************
    * @ngdoc method
    * @name getAll
    * @description
    * Retrieves the settings for authuser.
    * @returns {Settings|Error} On success, the settings for authuser; an error
    * message, otherwise.
    ********************************************************************************/
    function getAll() {
        var username = $cookies.getObject('globals').user.username;
        return $q(function(resolve, reject) {
            setTimeout(function() {
                if (DB_SETTINGS[username]) {
                    resolve({settings: DB_SETTINGS[username]});
                } else {
                    reject({errmsg: 'Settings not found for user: ' + username});
                }
            }, 500);
    }


    /********************************************************************************
    * @ngdoc method
    * @name getById
    * @description
    * Retrieves the specified setting.
    * @param {String} settingid The setting id for authuser.
    * @returns {Setting|Error} On success, the setting for authuser; an error
    * message, otherwise.
    ********************************************************************************/
    function getById(settingid) {
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
    * @name getInArray
    * @description
    * Retrieves the specified settings for authuser.
    * @param {[String]} array The list of setting id for the authuser.
    * @returns {Settings|Error} On success, the settings for authuser; an error
    * message, otherwise.
    ********************************************************************************/
    function getInArray(array) {
        var username = $cookies.getObject('globals').user.username;
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var settings = {};
                var SETTINGS = DB_SETTINGS[username];
                if (SETTINGS) {
                    array.forEach(function(settingid) {
                        var SETTING = SETTINGS[settingid];
                        if (SETTING) {
                            settings[settingid] = angular.copy(SETTING);
                        }
                    });
                    resolve({settings: settings});
                } else {
                    reject({errmsg: 'Settings not found for user: ' + username});
                }
            }, 500);
    }

}

})();
