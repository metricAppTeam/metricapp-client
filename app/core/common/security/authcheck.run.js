(function() { 'use strict';

/************************************************************************************
* @ngdoc overview
* @name authcheck
* @module metricapp
* @requires $rootScope
* @requires $location
*
* @description
* Retrieves authentication cookie, if exists.
* Automatically login, if requested.
* Checks authentication during location changes.
************************************************************************************/

angular.module('metricapp')

.run(authcheck);

authcheck.$inject = ['$rootScope', '$cookies', '$http', '$location'];

function authcheck($rootScope, $cookies, $http, $location) {
    var openLocations = ['/login', '/signup', '/401', '/404', '/500'];
    var homeLocation = '/';
    var failoverLocation = '/login';

    $rootScope.globals = $cookies.getObject('globals') || {};
    //$rootScope.globals = $cookies.get('globals') || {};
    if ($rootScope.globals.user) {
        $http.defaults.headers.common.Authorization =
        'Basic ' + $rootScope.globals.user.authdata;
    }

    // INSERT HERE AUTOLOGIN

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        var restrict = $.inArray($location.path(), openLocations) === -1;
        var loggedIn = $rootScope.globals.user;
        if (restrict && !loggedIn) {
            $location.path(failoverLocation);
        }
    });
}

})();
