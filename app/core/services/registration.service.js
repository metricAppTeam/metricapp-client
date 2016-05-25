/*******************************************************************************
* @ngdoc service
* @name RegistrationService
* @module metricapp
* @requires $http
* @requires $location
* @requires UserService
*
* @description
* Provides user registration services.
*******************************************************************************/

(function() {
    'use strict';

    angular
        .module('metricapp')
        .service('RegistrationService', RegistrationService);

    RegistrationService.$inject = ['$http', 'UserService'];

    function RegistrationService($http, UserService) {
        /* jshint validthis: true */
        var service = this;

        service.signup = signup;

        /***********************************************************************
        * @ngdoc method
        * @name signup
        * @description
        * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        * eiusmod tempor incididunt ut labore et dolore magna aliqua.
        * @param {User} user Insert description here.
        * @returns {String} Insert description here.
        ***********************************************************************/
        function signup(user) {

        }

    }

})();
