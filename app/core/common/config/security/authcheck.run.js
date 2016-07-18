(function() { 'use strict';

/************************************************************************************
* @ngdoc overview
* @name authcheck
* @module metricapp
* @requires $rootScope
* @requires $cookies
* @requires $http
* @requires $location
* @requires CryptoService
*
* @description
* Retrieves authentication cookie, if exists.
* If cookies exists, adds to the HTTP header the `Authorization` field according to
* the Basic Auth.
* Checks authentication during location changes.
************************************************************************************/

angular.module('metricapp')

.run(authcheck);

authcheck.$inject = ['$rootScope', '$cookies', '$http', '$location', 'CryptoService'];

function authcheck($rootScope, $cookies, $http, $location, CryptoService) {
    var openLocations = ['/login', '/signup', '/401', '/404', '/500', '/test'];
    var homeLocation = '/';
    var failLocation = '/login';

    $rootScope.globals = $cookies.getObject('globals') || {};

    // BASIC AUTH
    if ($rootScope.globals.user) {
        if (!$rootScope.globals.user.authdataB64) {
            var username = $rootScope.globals.user.username;
            var password = $rootScope.globals.user.password;
            var authdata = username + ':' + password;
            var authdataB64 = CryptoService.encodeBase64(authdata);
            $rootScope.globals.user.authdataB64 = authdataB64;
        }

        $http.defaults.headers.common.Authorization =
        'Basic ' + $rootScope.globals.user.authdataB64;
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        var restrict = $.inArray($location.path(), openLocations) === -1;
        var loggedIn = $rootScope.globals.user;
        if (restrict && !loggedIn) {
            $location.path(failLocation);
        }
    });
}

})();
