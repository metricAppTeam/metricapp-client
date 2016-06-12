(function() { 'use strict';

/************************************************************************************
* @ngdoc overview
* @name config.interceptors
* @module metricapp
* @requires $httpProvider
*
* @description
* Defines the HTTP interceptors for the whole application.
************************************************************************************/

angular.module('metricapp')

.factory('Error404Interceptor', ['$q', '$location', function($q, $location) {
    return {
        'responseError': function(rejection) {
            if (rejection.status == 404) {
                console.log('status==404');
                //$location.path('/404');
                $window.location.href='/404';
                return $q.reject(rejection);
            }
            return $q.reject(rejection);
        }
    };
}]);

angular.module('metricapp')

.config(interceptors);

interceptors.$inject = ['$httpProvider'];

function interceptors($httpProvider) {

    $httpProvider.interceptors.push('Error404Interceptor');
}

})();
