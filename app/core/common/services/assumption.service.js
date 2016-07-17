/*
* @Author: alessandro.fazio
* @Date:   2016-06-14 16:21:06
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-16 00:29:30
*/
(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name AssumptionService
* @module metricapp
* @requires $http
* @requires $rootScope
* @requires $cookies
*
* @description
* Service for Assumption.
************************************************************************************/

angular.module('metricapp')

.service('AssumptionService', AssumptionService);

AssumptionService.$inject = [
    '$http', '$rootScope', '$cookies', '$window', 'AuthService'];

function AssumptionService($http, $rootScope, $cookies, $window, AuthService) {

    var service = this;

    service.assumptionDialog = {};
    service.storeAssumption = storeAssumption;
    service.storeExternalAssumption = storeExternalAssumption;
    service.getAssumptionDialog = getAssumptionDialog;
    service.getExternalAssumptionDialog = getExternalAssumptionDialog;

    /********************************************************************************
    * @ngdoc method
    * @name storeAssumption
    * @description
    * Store Assumption
    * @param {Assumption} to store.
    ********************************************************************************/
    function storeAssumption(toUpdate){
        service.assumptionDialog = toUpdate;
    }

    /********************************************************************************
    * @ngdoc method
    * @name storeExternalAssumption
    * @description
    * Store external Assumption
    * @param {Assumption} to store.
    ********************************************************************************/
    function storeExternalAssumption(toUpdate){
        service.externalAssumptionDialog = toUpdate;
    }

    /********************************************************************************
    * @ngdoc method
    * @name getAssumption
    * @description
    * Get Assumption
    ********************************************************************************/
    function getAssumptionDialog(){
        return service.assumptionDialog;
    }

    /********************************************************************************
    * @ngdoc method
    * @name getExternalAssumptionDialog
    * @description
    * Get ExternalAssumption Dialog
    ********************************************************************************/
    function getExternalAssumptionDialog(){
        return service.externalAssumptionDialog;
    }

}

})();