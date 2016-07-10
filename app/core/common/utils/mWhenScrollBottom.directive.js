(function() { 'use strict';

/************************************************************************************
* @ngdoc directive
* @name mWhenScrollBottom
* @module metricapp
* @restrict A
*
* @description
* Executes the specified callback when a scrollable element reaches its bottom.
*
* @example
*   <div style="width:400px;heigth:100px;overflow-y:scroll;"
*   m-when-scroll-bottom="vm.callback()">
*   <!-- your elements -->
*   </div>
*
************************************************************************************/

angular.module('metricapp')

.directive('mWhenScrollBottom', mWhenScrollBottom);

function mWhenScrollBottom() {
    return {
      restrict: 'A',
      link: function(scope, elem, attrs) {
        var scroller = elem[0];
        var func = attrs.mWhenScrollBottom;
        $(scroller).bind('scroll', function() {
          if (scroller.scrollTop + scroller.offsetHeight >= scroller.scrollHeight) {
            scope.$apply(func);
          }
        });
      }
    };
}

})();
