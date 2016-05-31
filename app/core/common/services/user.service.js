(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name UserService
* @module metricapp
* @requires $http
* @requires REST_SERVICE
*
* @description
* Realizes a user DAO.
************************************************************************************/

angular.module('metricapp')

.service('UserService', UserService);

UserService.$inject = ['$http', 'REST_SERVICE'];

function UserService($http, REST_SERVICE) {

    var service = this;

    service.getAll = getAll;
    service.getByUsername = getByUsername;
    service.create = create;
    service.remove = remove;

    /********************************************************************************
    * @ngdoc method
    * @name getAll
    * @description
    * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    * eiusmod tempor incididunt ut labore et dolore magna aliqua.
    * @returns {JSON} Insert description here.
    ********************************************************************************/
    function getAll() {
        return $http.get(REST_SERVICE + '/api/users').then(
            function(response) {
                return response.data;
            },
            function(error) {
                return { success: false, message: error };
            }
        );
    }

    /********************************************************************************
    * @ngdoc method
    * @name getByUsername
    * @description
    * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    * eiusmod tempor incididunt ut labore et dolore magna aliqua.
    * @param {String} username Insert description here.
    * @returns {JSON} Insert description here.
    ********************************************************************************/
    function getByUsername(username) {
        var query = { filter: 'username', value: username };
        return $http.get(REST_SERVICE + '/api/users', query).then(
            function(response) {
                return response.data;
            },
            function(error) {
                return { success: false, message: error };
            }
        );
    }

    /********************************************************************************
    * @ngdoc method
    * @name create
    * @description
    * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    * eiusmod tempor incididunt ut labore et dolore magna aliqua.
    * @param {User} user Insert description here.
    * @returns {JSON} Insert description here.
    ********************************************************************************/
    function create(user) {
        return $http.post(REST_SERVICE + '/api/users/create', user).then(
            function(response) {
                return response.data;
            },
            function(error) {
                return { success: false, message: error };
            }
        );
    }

    /********************************************************************************
    * @ngdoc method
    * @name remove
    * @description
    * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    * eiusmod tempor incididunt ut labore et dolore magna aliqua.
    * @param {User} user Insert description here.
    * @returns {JSON} Insert description here.
    ********************************************************************************/
    function remove(user) {
        return $http.post(REST_SERVICE + '/api/users/remove', user).then(
            function(response) {
                return response.data;
            },
            function(error) {
                return { success: false, message: error };
            }
        );
    }

}

})();
