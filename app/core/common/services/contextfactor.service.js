/*
* @Author: alessandro.fazio
* @Date:   2016-06-14 16:21:06
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-16 00:14:57
*/
(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name ContextFactorService
* @module metricapp
* @requires $http
* @requires $rootScope
* @requires $cookies
*
* @description
* Service for ContextFactor.
************************************************************************************/

angular.module('metricapp')

.service('ContextFactorService', ContextFactorService);

ContextFactorService.$inject = [
    '$http', '$rootScope', '$cookies', '$window', 'AuthService'];

function ContextFactorService($http, $rootScope, $cookies, $window, AuthService) {

    var service = this;

    service.contextFactorDialog = {};
    service.storeContextFactor = storeContextFactor;
    service.getContextFactorDialog = getContextFactorDialog;
    service.getExternalContextFactorDialog = getExternalContextFactorDialog;
    service.storeExternalContextFactor = storeExternalContextFactor;

    /********************************************************************************
    * @ngdoc method
    * @name storeContextFactor
    * @description
    * Store a ContextFactor
    * @param {ContextFactor} to store.
    ********************************************************************************/
    function storeContextFactor(toUpdate){
        service.contextFactorDialog = toUpdate;
    }

    /********************************************************************************
    * @ngdoc method
    * @name storeExternalContextFactor
    * @description
    * Store external ContextFactor
    * @param {ContextFactor} to store.
    ********************************************************************************/
    function storeExternalContextFactor(toUpdate){
        service.externalContextFactorDialog = toUpdate;
    }

    /********************************************************************************
    * @ngdoc method
    * @name getContextFactorDialog
    * @description
    * Get ContextFactor Dialog
    ********************************************************************************/
    function getContextFactorDialog(){
        return service.contextFactorDialog;
    }

    /********************************************************************************
    * @ngdoc method
    * @name getExternalContextFactorDialog
    * @description
    * Get ExternalContextFactor Dialog
    ********************************************************************************/
    function getExternalContextFactorDialog(){
        return service.externalContextFactorDialog;
    }

}

})();