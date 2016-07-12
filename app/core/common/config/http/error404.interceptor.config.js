(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name Error404Interceptor
* @module metricapp
* @requires $q
* @requires $location
*
* @description
* Defines the HTTP interceptor to handle error 404.
************************************************************************************/

angular.module('metricapp')

.factory('Error404Interceptor', Error404Interceptor);

Error404Interceptor.$inject = ['$q', '$location'];

function Error404Interceptor($q, $location) {
    return {
        response: function(response) {
                return response;
        },

        responseError: function(response) {            
            if (response.status === 404) {
            	if (response.measurementGoals !== null || response.metrics !==null) {
	                return response;
            	}
            	else {
            		console.log('Error404Interceptor.responseError');
	                $location.path('/404');
	                return $q.reject(response);
            	}
            }
            return $q.reject(response);
        }
    };
}

})();
