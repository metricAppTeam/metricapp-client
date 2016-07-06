(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name NotificationController
* @module metricapp
* @requires $scope
* @requires $location
* @requires $routeParams
* @requires NotificationService
*
* @description
* Manages the notifications for users.
* Realizes the control layer for:
* - `notification.view`
************************************************************************************/

angular.module('metricapp')

.controller('NotificationController', NotificationController);

NotificationController.$inject = ['$scope', '$location', '$routeParams', 'NotificationService'];

function NotificationController($scope, $location, $routeParams, NotificationService) {

    var vm = this;

    _init();

    function _loadNotification(notificationid) {
        vm.loading = true;
        vm.success = false;
        NotificationService.getNotification(notificationid).then(
            function(response) {
                vm.loading = false;
                vm.success = true;
            }
        );
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        if (!$routeParams.notificationid) {
            $location.path('/notifications');
        }
        vm.currNotification = {
            id: $routeParams.notificationid
        };
        _loadNotification(vm.currNotification.id);
    }

}

})();
