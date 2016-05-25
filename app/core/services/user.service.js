/*******************************************************************************
* @ngdoc service
* @name UserService
* @module metricapp
* @requires $http
* @requires REST_SERVICE
*
* @description
* Realizes a user DAO.
*******************************************************************************/

(function() {
    'use strict';

    angular
        .module('metricapp')
        .service('UserService', UserService);

    UserService.$inject = ['$http', 'REST_SERVICE'];

    function UserService($http, REST_SERVICE) {
        var service = this;

        service.getAll = getAll;
        service.getByUsername = getByUsername;
        service.create = create;
        service.remove = remove;

        /***********************************************************************
        * @ngdoc method
        * @name getAll
        * @description
        * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        * eiusmod tempor incididunt ut labore et dolore magna aliqua.
        * @returns {JSON} Insert description here.
        ***********************************************************************/
        function getAll() {
            return $http.get(REST_SERVICE + '/api/users').then(_handleSuccess, _handleError('Error in userService.getAll'));
        }

        /***********************************************************************
        * @ngdoc method
        * @name getByUsername
        * @description
        * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        * eiusmod tempor incididunt ut labore et dolore magna aliqua.
        * @param {String} username Insert description here.
        * @returns {JSON} Insert description here.
        ***********************************************************************/
        function getByUsername(username) {
            return $http.get(REST_SERVICE + '/api/users/query', {params: {username:username}}).then(_handleSuccess, _handleError('Error in userService.getByUsername [username='+username+']'));
        }

        /***********************************************************************
        * @ngdoc method
        * @name create
        * @description
        * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        * eiusmod tempor incididunt ut labore et dolore magna aliqua.
        * @param {User} user Insert description here.
        * @returns {JSON} Insert description here.
        ***********************************************************************/
        function create(user) {
            return $http.post(REST_SERVICE + '/api/users/create', user).then(_handleSuccess, _handleError('Error in userService.create [username='+user.username+']'));
        }

        /***********************************************************************
        * @ngdoc method
        * @name remove
        * @description
        * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        * eiusmod tempor incididunt ut labore et dolore magna aliqua.
        * @param {User} user Insert description here.
        * @returns {JSON} Insert description here.
        ***********************************************************************/
        function remove(user) {
            return $http.post(REST_SERVICE + '/api/users/remove', user).then(_handleSuccess, _handleError('Error in userService.remove[username='+user.username+']'));
        }

        /***********************************************************************
        * @ngdoc method
        * @name _handleSuccess
        * @description
        * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        * eiusmod tempor incididunt ut labore et dolore magna aliqua.
        * @param {Response} response Insert description here.
        * @returns {JSON} Insert description here.
        ***********************************************************************/
        function _handleSuccess(response) {
            return response.data;
        }

        /***********************************************************************
        * @ngdoc method
        * @name _handleError
        * @description
        * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        * eiusmod tempor incididunt ut labore et dolore magna aliqua.
        * @param {String} error Insert description here.
        * @returns {JSON} Insert description here.
        ***********************************************************************/
        function _handleError(error) {
            return function() {
                return { success: false, message: error };
            };
        }
    }

})();
