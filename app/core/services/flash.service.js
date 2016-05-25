/*******************************************************************************
* @ngdoc service
* @name FlashService
* @requires $rootScope
*
* @description
* Manages flash messages.
* A flash message is defined as a tuple (type,message,pinned), where:
* - type is the type of message (i.e., success, info, warning, error);
* - message is the content of the flash message;
* - pinned states if the flash message pesists over location changes.
*******************************************************************************/

(function() {
    'use strict';

    angular
        .module('metricapp')
        .service('FlashService', FlashService);

    FlashService.$inject = ['$rootScope'];

    function FlashService($rootScope) {
        /* jshint validthis: true */
        var service = this;

        service.success = success;
        service.info = info;
        service.warning = warning;
        service.error = error;

        _init();

        /***********************************************************************
        * @ngdoc method
        * @name success
        * @description
        * Makes available in the rootScope a success flash message.
        * @param {String} message The content of the message.
        * @param {Boolean} pinned True, if the flash message persists over
        * location changes; False, otherwise.
        ***********************************************************************/
        function success(message, pinned) {
            $rootScope.flash = {
                type: 'success',
                message: message,
                pinned: pinned
            };
        }

        /***********************************************************************
        * @ngdoc method
        * @name info
        * @description
        * Makes available in the rootScope a info flash message.
        * @param {String} message The content of the message.
        * @param {Boolean} pinned True, if the flash message persists over
        * location changes; False, otherwise.
        ***********************************************************************/
        function info(message, pinned) {
            $rootScope.flash = {
                type: 'info',
                message: message,
                pinned: pinned
            };
        }

        /***********************************************************************
        * @ngdoc method
        * @name warning
        * @description
        * Makes available in the rootScope a warning flash message.
        * @param {String} message The content of the message.
        * @param {Boolean} pinned True, if the flash message persists over
        * location changes; False, otherwise.
        ***********************************************************************/
        function warning(message, pinned) {
            $rootScope.flash = {
                type: 'warning',
                message: message,
                pinned: pinned
            };
        }

        /***********************************************************************
        * @ngdoc method
        * @name error
        * @description
        * Makes available in the rootScope a error flash message.
        * @param {String} message The content of the message.
        * @param {Boolean} pinned True, if the flash message persists over
        * location changes; False, otherwise.
        ***********************************************************************/
        function error(message, pinned) {
            $rootScope.flash = {
                type: 'error',
                message: message,
                pinned: pinned
            };
        }

        /***********************************************************************
        * @ngdoc method
        * @name _init
        * @description
        * Initializes the service.
        ***********************************************************************/
        function _init() {
            $rootScope.$on('$locationChangeStart', _clearFlashMessage);
        }

        /***********************************************************************
        * @ngdoc method
        * @name _clearFlashMessage
        * @description
        * Removes all unpinned flash messages from the rootScope. Unpins all
        * pinned flash messages fro the rootScope.
        ***********************************************************************/
        function _clearFlashMessage() {
            var flash = $rootScope.flash;
            if (flash) {
                if (!flash.pinned) {
                    delete $rootScope.flash;
                } else {
                    flash.pinned = false;
                }
            }
        }
    }

})();
