(function() { 'use strict';

/************************************************************************************
* @ngdoc directive
* @name mWhenScroll
* @module metricapp
* @restrict A
*
* @description
* Executes the specified callback when a scrollable element reaches its bottom.-
*
* @example
*   <div style="width:400px;heigth:100px;overflow-y:scroll;"
*   m-when-scroll="vm.callback()">
*   <!-- your elements -->
*   </div>
*
************************************************************************************/

angular.module('metricapp')

.directive('mWhenScroll', mWhenScroll);

function mWhenScroll() {
    return {
      restrict: 'A',
      link: function(scope, elem, attrs) {
        var scroller = elem[0];
        var func = attrs.mWhenScroll;
        console.log('func = ' + func);
        $(scroller).bind('scroll', function() {
          if (scroller.scrollTop + scroller.offsetHeight >= scroller.scrollHeight) {
            scope.$apply(func);
          }
        });
      }
    };
}

})();
