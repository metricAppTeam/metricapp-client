/*******************************************************************************
* @ngdoc overview
* @name security
* @module metricapp
* @requires $http
* @requires $rootScope
* @requires $location
* @requires $cookies
*
* @description
* Defines the security configuration for the whole application.
*******************************************************************************/

(function() {
    'use strict';

    angular
        .module('metricapp')
        .run(security);

    security.$inject = ['$http', '$rootScope', '$location', '$cookies'];

    function security($http, $rootScope, $location, $cookies) {
        $rootScope.globals = $cookies.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common.Authorization = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            var restrict = $.inArray($location.path(), ['/login', '/registration']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrict && !loggedIn) {
                $location.path('/login');
            }
        });
    }

})();
