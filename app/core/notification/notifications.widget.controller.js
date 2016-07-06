(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name NotificationController
* @module metricapp
* @requires $scope
* @requires $location
* @requires NotificationService
*
* @description
* Manages the notifications for users.
* Realizes the control layer for:
* - widgets about notifications.
************************************************************************************/

angular.module('metricapp')

.controller('NotificationsWidgetController', NotificationsWidgetController);

NotificationsWidgetController.$inject = ['$scope', '$location', 'NotificationService'];

function NotificationsWidgetController($scope, $location, NotificationService) {

    var vm = this;

    _init();

    function _loadNotifications(ntfStart, ntfN) {
        vm.loading = true;
        vm.success = false;
        NotificationService.getNotifications(ntfStart, ntfN).then(
            function(response) {
                vm.loading = false;
                vm.success = true;
            }
        );
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.notifications = [];
        vm.toread = 0;
        _loadNotifications(0, 20);
    }
    
}

})();
