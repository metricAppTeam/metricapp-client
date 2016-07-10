(function() { 'use strict';

/************************************************************************************
* @ngdoc directive
* @name mFallbackSrc
* @module metricapp
* @restrict A
*
* @description
* If necessary, retrieves the specified resource as fallback resource.
*
* @example
*   <img ng-src="path/to/unexistent/image" m-fallback-src="path/to/existent/image" />
*
************************************************************************************/

angular.module('metricapp')

.directive('mFallbackSrc', mFallbackSrc);

function mFallbackSrc() {
	return {
        restrict: 'A',
        link: function(scope, element, attrs) {
    		element.bind('error', function() {
				element.attr('src', attrs.mFallbackSrc);
    		});
        }
    };
}

})();
