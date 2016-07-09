(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name NotificationController
* @module metricapp
* @requires $location
* @requires $routeParams
* @requires NotificationService
* @requires UserService
*
* @description
* Realizes the control layer for `notification.view`.
************************************************************************************/

angular.module('metricapp')

.controller('NotificationController', NotificationController);

NotificationController.$inject = ['$location', '$routeParams', 'NotificationService', 'UserService'];

function NotificationController($location, $routeParams, NotificationService, UserService) {

    var vm = this;

    _init();

    function _loadNotification(notificationid) {
        vm.loading = true;
        vm.success = false;
        NotificationService.getById(notificationid).then(
            function(resolve) {
                vm.currNotification = angular.copy(resolve.notification);
                return UserService.getById(vm.currNotification.author).then(
                    function(resolve) {
                        vm.currNotification.author = angular.copy(resolve.user);
                        vm.success = true;
                    },
                    function(reject) {
                        vm.errmsg = reject.errmsg;
                        vm.success = false;
                    }
                );
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                vm.success = false;
            }
        ).finally(function() {
            vm.loading = false;
        });
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.errmsg = null;
        vm.currNotification = {
            id: $routeParams.notificationid,
        };
        _loadNotification(vm.currNotification.id);
    }

}

})();
