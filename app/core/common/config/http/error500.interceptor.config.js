(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name interceptors.error500
* @module metricapp
* @requires $httpProvider
*
* @description
* Defines the HTTP interceptor to handle error 500.
************************************************************************************/

angular.module('metricapp')

.factory('Error500Interceptor', Error500Interceptor);

Error500Interceptor.$inject = ['$q', '$location'];

function Error500Interceptor($q, $location) {
    return {
        'responseError': function(rejection) {
            if (rejection.status === 500) {
                console.log('status===500');
                $location.path('/500');
                return $q.reject(rejection);
            }
            return $q.reject(rejection);
        }
    };
};

})();
