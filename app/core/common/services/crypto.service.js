(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name CryptoService
* @module metricapp
* @requires $window
*
* @description
* Provides encryption/decryption services.
************************************************************************************/

angular.module('metricapp')

.service('CryptoService', CryptoService);

CryptoService.$inject = ['$window'];

function CryptoService($window) {

    var service = this;

    service.encodeBase64 = encodeBase64;
    service.decodeBase64 = decodeBase64;

    /********************************************************************************
    * @ngdoc method
    * @name encodeBase64
    * @description
    * Encode the specified string to Base64.
    * @param {String} stringClear The string to encode.
    * @returns {String} The encoded string.
    ***************************************************************************/
    function encodeBase64(stringClear) {
        var stringBase64 = $window.btoa(stringClear);
        return stringBase64;
    }

    /********************************************************************************
    * @ngdoc method
    * @name decodeBase64
    * @description
    * Decodes the specified Base64 string.
    * @param {String} stringBase64 The Base64 string
    * @returns {String} The decoded string.
    ********************************************************************************/
    function decodeBase64(stringBase64) {
        var stringClear = $window.atob(stringBase64);
        return stringClear;
    }

}

})();
