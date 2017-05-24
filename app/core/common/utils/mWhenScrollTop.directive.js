(function() { 'use strict';

/************************************************************************************
* @ngdoc directive
* @name mWhenScrollTop
* @module metricapp
* @restrict A
*
* @description
* Executes the specified callback when a scrollable element reaches its bottom.
*
* @example
*   <div style="width:400px;heigth:100px;overflow-y:scroll;"
*   m-when-scroll-top="vm.callback()">
*   <!-- your elements -->
*   </div>
*
************************************************************************************/

angular.module('metricapp')

.directive('mWhenScrollTop', mWhenScrollTop);

function mWhenScrollTop() {
    return {
      restrict: 'A',
      link: function(scope, elem, attrs) {
        var scroller = elem[0];
        var func = attrs.mWhenScrollTop;
        $(scroller).bind('scroll', function() {
          if (scroller.scrollTop + scroller.offsetHeight >= scroller.scrollHeight) {
            scope.$apply(func);
          }
        });
      }
    };
}

})();
