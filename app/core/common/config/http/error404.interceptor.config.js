(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name interceptors.error404
* @module metricapp
* @requires $httpProvider
*
* @description
* Defines the HTTP interceptor to handle error 404.
************************************************************************************/

angular.module('metricapp')

.factory('Error404Interceptor', Error404Interceptor);

Error404Interceptor.$inject = ['$q', '$location'];

function Error404Interceptor($q, $location) {
    return {
        'responseError': function(rejection) {
            if (rejection.status === 404) {
                console.log('status===404');
                $location.path('/404');
                return $q.reject(rejection);
            }
            return $q.reject(rejection);
        }
    };
};

})();
