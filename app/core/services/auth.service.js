/*******************************************************************************
* @ngdoc service
* @name AuthService
* @module metricapp
* @requires $http
* @requires $rootScope
* @requires $cookies
* @requires CryptoService
* @requires UserService
* @requires REST_SERVICE
*
* @description
* Provides authentication services.
*******************************************************************************/

(function() {
    'use strict';

    angular
        .module('metricapp')
        .service('AuthService', AuthService);

    AuthService.$inject = ['$http', '$rootScope', '$cookies', 'CryptoService', 'UserService', 'REST_SERVICE'];

    function AuthService($http, $rootScope, $cookies, CryptoService, UserService, REST_SERVICE) {
        /* jshint validthis: true */
        var service = this;

        this.signin = signin;
        this.signout = signout;

        /***********************************************************************
        * @ngdoc method
        * @name signup
        * @description
        * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        * eiusmod tempor incididunt ut labore et dolore magna aliqua.
        * @param {User} user Insert description here.
        * @returns {String} Insert description here.
        ***********************************************************************/
        function signin(username, password) {
            return $http.post(REST_SERVICE + '/api/signin', {username: username, password: password});
        }

        /***********************************************************************
        * @ngdoc method
        * @name signup
        * @description
        * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        * eiusmod tempor incididunt ut labore et dolore magna aliqua.
        * @param {User} user Insert description here.
        * @returns {String} Insert description here.
        ***********************************************************************/
        function signout() {
            var user = getCurrentUser();
            var username = user.username;

            return $http.post(REST_SERVICE + '/api/signout', {username: username});
        }

        /***********************************************************************
        * @ngdoc method
        * @name setCurrentUser
        * @description
        * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        * eiusmod tempor incididunt ut labore et dolore magna aliqua.
        * @param {User} user Insert description here.
        * @returns {String} Insert description here.
        ***********************************************************************/
        function setCurrentUser(user) {
            var username = user.username;
            var password = user.password;

            var authdata = CryptoService.encode(username + ':' + password);

            $rootScope.globals = {
                currentUser: {
                    username: username,
                    authdata: authdata
                }
            };

            $http.defaults.headers.common.Authorization = 'Basic ' + authdata; // jshint ignore:line
            $cookies.put('globals', $rootScope.globals);
        }

        /***********************************************************************
        * @ngdoc method
        * @name getCurrentUser
        * @description
        * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        * eiusmod tempor incididunt ut labore et dolore magna aliqua.
        * @returns {User} Insert description here.
        ***********************************************************************/
        function getCurrentUser() {
            var currentUser = $cookies.get('globals').currentUser;
            var authdata = CryptoService.decode(currentUser.authdata);
            var username = currentUser.username;
            var password = authdata.split(':')[1];
            return {username: username, password: password};
        }

        /***********************************************************************
        * @ngdoc method
        * @name clearCurrentUser
        * @description
        * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        * eiusmod tempor incididunt ut labore et dolore magna aliqua.
        ***********************************************************************/
        function clearCurrentUser() {
            $rootScope.globals = {};
            $cookies.remove('globals');
            $http.defaults.headers.common.Authorization = 'Basic';
        }

    }

})();
