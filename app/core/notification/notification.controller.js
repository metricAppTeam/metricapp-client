(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name NotificationController
* @module metricapp
* @requires $scope
* @requires $location
*
* @description
* Manages the notifications for users.
* Realizes the control layer for:
* - `notifications.view`
* - widgets about notifications.
************************************************************************************/

angular.module('metricapp')

.controller('NotificationController', NotificationController);

NotificationController.$inject = ['$scope', '$location'];

function NotificationController($scope, $location) {

    var vm = this;

    vm.getNumberOfUnreadNotifications = getNumberOfUnreadNotifications;

    _init();

    function getNumberOfUnreadNotifications() {
        return 10;
    }

    function _init() {
        
    }

}

})();
