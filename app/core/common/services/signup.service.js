(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name SignupService
* @module metricapp
* @requires $http
* @requires $rootScope
* @requires $cookies
* @requires UserService
* @requires REST_SERVICE
* @requires ROLES
*
* @description
* Provides authentication and registration services.
************************************************************************************/

angular.module('metricapp')

.service('SignupService', SignupService);

SignupService.$inject = [
    '$http', '$rootScope', '$cookies',
    'UserService', 'REST_SERVICE', 'ROLES'];

function SignupService($http, $rootScope, $cookies, UserService, REST_SERVICE, ROLES) {

    var service = this;

    service.ROLES = ROLES;

    service.signup = signup;

    /********************************************************************************
    * @ngdoc method
    * @name signup
    * @description
    * Registers a new user with the specified profile.
    * @param {User} user The user to register.
    * @param {Profile} profile The user profile.
    ********************************************************************************/
    function signup(user, profile) {
        console.log('SIGN-UP user WITH ' +
        'username=' + user.username + ' & ' +
        'password=' + user.password + ' & ' +
        'role=' + user.role + ' & ' +
        'firstname=' + profile.firstname + ' & ' +
        'lastname=' + profile.lastname + ' & ' +
        'gender=' + profile.gender + ' & ' +
        'birthday=' + profile.birthday + ' & ' +
        'email=' + profile.email + ' & ' +
        'picture=' + profile.picture);
        var registration = {user: user, profile: profile};
        return $http.post(REST_SERVICE.URL + '/api/signup', registration).then(
            function(response) {
                var message = response.data;
                console.log('SUCCESS SIGN-UP user WITH ' +
                'username=' + user.username + ' & ' +
                'password=' + user.password + ' & ' +
                'role=' + user.role);
                return message;
            },
            function(response) {
                var message = response.data;
                console.log('FAILURE SIGN-UP user WITH ' +
                'username=' + credentials.username + ' & ' +
                'password=' + credential.username);
                return message;
            }
        );

    }

}

})();
