/*******************************************************************************
* @ngdoc service
* @name CryptoService
* @module metricapp
*
* @description
* Provides cryptography services (i.e., string encription/decription),
* leveraging the crypto-js library.
*******************************************************************************/

(function() {
    'use strict';

    angular
        .module('metricapp')
        .service('CryptoService', CryptoService);

    function CryptoService() {
        /* jshint validthis: true */
        var service = this;

        service.encode = encode;
        service.decode = decode;

        /***********************************************************************
        * @ngdoc method
        * @name encode
        * @description
        * Encodes a string using MD5 encryption.
        * @param {String} string The input string to encode.
        * @returns {String} The encoded string.
        ***********************************************************************/
        function encode(string) {
            return string;
        }

        /***********************************************************************
        * @ngdoc method
        * @name decode
        * @description
        * Decodes a string previously encoded in MD5 encryption.
        * @param {String} string The encoded string to decode.
        * @returns {String} The decoded string.
        ***********************************************************************/
        function decode(string) {
            return string;
        }

    }

})();
