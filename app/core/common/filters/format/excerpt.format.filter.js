(function() { 'use strict';

/************************************************************************************
* @ngdoc filter
* @name excerptFormat
* @module metricapp
*
* @description
* Realizes string excerpt.
************************************************************************************/

angular.module('metricapp')

.filter('excerptFormat', excerptFormat);

function excerptFormat(){
  return function(string, condition, lenTrue, lenFalse, fallbackString){
    if(!string){
      return fallbackString;
    }
    if (condition) {
      return string.toString().substring(0, lenTrue) + '...';
    } else {
      return string.toString().substring(0, lenFalse) + '...';
    }
  };
}

})();
