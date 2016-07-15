(function() { 'use strict';

/************************************************************************************
* @ngdoc filter
* @name textFallback
* @module metricapp
*
* @description
* Realizes string fallback for null content.
************************************************************************************/

angular.module('metricapp')

.filter('textFallback', textFallback);

function textFallback() {
    return function(obj, fallbackString) {
        if (!obj) {
            return fallbackString;
        } else {
            return obj;
        }
    };
}

})();
