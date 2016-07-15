(function () { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name Metric update
* @module metricapp
* @requires $scope
* @requires $location
* @description
*
* Realizes the control layer for `metric.view`.
************************************************************************************/
angular.module('metricapp')

.controller('MetricPageController', MetricPageController);

MetricPageController.$inject = ['$scope','$filter','$routeParams', '$location','MetricService','AuthService','$window'];

function MetricPageController($scope,$filter,$routeParams, $location, MetricService,AuthService, $window) {
   var vm = this;
   // this is for the scrolling
   $('body').removeClass('modal-open');

   vm.loading = true;
   vm.modifying = false;

   vm.canIUpdateVar = false;
   vm.isExpert= false;
   vm.canIApprove=false;
   vm.canIRequestChange=false;
   vm.canISendForApproval=false;


   vm.listOfSet=[{value:'integers', option:'Integers'},{value:'reals',option:'Reals'}];
   vm.listOfScaleType = [{value:'nominalScale', option:'Nominal Scale'},{value:'ordinalScale',option:'Ordinal Scale'},{value:'intervalScale',option:'Interval Scale'},{value:'ratioScale',option:'Ratio Scale'},{value:'absoluteScale',option:'Absolute Scale'}];

   vm.labelsForState = [
      {state:'OnUpdate',label: "label label-primary label-form"},
      {state:'Pending',label: "label label-default label-form"},
      {state:'Created',label: "label label-default label-form"},
      {state:'Approved',label: "label label-warning label-form"},
      {state:'Rejected',label: "label label-danger label-form"}];




      vm.copyDialogToModel=copyDialogToModel;
      vm.pushIfNotExists=pushIfNotExists;
      vm.submitMetric=submitMetric;
      vm.setLabelState = setLabelState;
      vm.setRights = setRights;
      vm.goToRead = goToRead;
      vm.goToModify = goToModify;
      vm.sendForApproval = sendForApproval;
      vm.changeRequest = changeRequest;
      vm.approve = approve;
      vm.reject = reject;

      _selectMetricToView();



      /********************************************************************************
      * @ngdoc method
      * @name initMetric
      * @description
      * This function triggers other function when a metric is loaded
      ********************************************************************************/
      function initMetric(){
         vm.modifying=false;
         vm.copyDialogToModel();
         vm.setLabelState();
         vm.setRights();
      }

      /********************************************************************************
      * @ngdoc method
      * @name _selectMetricToView
      * @description
      * This function checks that in the url there's param id.
      *If id is specified, the page is loaded with the metric with id specified.
      * Otherwise page is loaded with metric in MetricService
      ********************************************************************************/
      function _selectMetricToView(){
         if (!$routeParams.metricid) {
             $location.path('/metrics');
         }
         vm.currMetricId = {
             id: $routeParams.metricid
         };
            MetricService.getById(vm.currMetricId.id).then(
               function(data){
                  vm.loadedMetric = data.metricsDTO[0];
                  vm.loading=false;

                  initMetric();
               },function(data){
                  vm.error = true;
               }
            );

      }



      function copyDialogToModel(){
         vm.newMetric =angular.copy(vm.loadedMetric);

      }
      /********************************************************************************
      * @ngdoc method
      * @name pushIfNotExists
      * @description
      * This function takes an element el, typically a string.
      * Firstly it checks that el is not null and el is not already in array.
      * Then, if it is not too long or too short it pushes el to array.
      ********************************************************************************/
      function pushIfNotExists(el, array){
         if(array.indexOf(el)==-1 && !angular.isUndefined(el)){
            if(el.length>1 && el.length<31){
               array.push(el);
            }
         }
      }

      function setLabelState(){
         vm.stateLabel = $filter('filter')(vm.labelsForState, function (d) {return d.state == vm.newMetric.metadata.state;})[0].label;
      }





      /********************************************************************************
      * @ngdoc method
      * @name submit
      * @description
      * Check if the metric in vm.dialog has metricatorId field of the logged user
      ********************************************************************************/
      function setRights(){
         vm.canIUpdateVar = false;
         vm.isExpert= false;
         vm.canIApprove=false;
         vm.canIRequestChange=false;
         vm.canISendForApproval=false;
         if(angular.isUndefined(vm.newMetric)){
            return;
         }
         var metric = vm.newMetric;

         if(metric.metricatorId == AuthService.getUser().username && AuthService.getUser().role=='METRICATOR'){
            if(metric.metadata.state=='OnUpdate'){
               vm.canIUpdateVar = true;
               vm.canISendForApproval=true;
            }
            if(metric.metadata.state=='Rejected'){
               vm.canIUpdateVar = true;
            }
            if(metric.metadata.state=='Created'){
               vm.canIUpdateVar = true;
            }
            return;
         }

         if(AuthService.getUser().role=='EXPERT'){
            vm.isExpert = true;
            if(metric.metadata.state=='OnUpdate'){
               vm.canIUpdateVar = true;
               vm.canISendForApproval=true;
            }
            if(metric.metadata.state=='Created'){
               vm.canIUpdateVar = true;
            }
            if(metric.metadata.state=='Pending'){
               vm.canIApprove = true;
            }
            if(metric.metadata.state=='Approved'){
               vm.canIRequestChange = true;
            }
            if(metric.metadata.state=='Rejected'){
               vm.canIUpdateVar = true;
            }
         }
      }

      /********************************************************************************
      * @ngdoc method
      * @name submitMetric
      * @description
      * Submits a Metric
      ********************************************************************************/
      function submitMetric(metric) {
         console.log(metric);
         if(metric.metadata.state=='Rejected' || metric.metadata.state=='Created'){
            metric.metadata.state='OnUpdate';
         }
         MetricService.update(metric).then(
            function(message) {
               alert("Updated!");

               vm.newMetric = undefined;
               _selectMetricToView();

            },
            function(message) {
               alert("Error in updating");
               vm.newMetric = undefined;
               _selectMetricToView();
            }
         );
      }

      function goToRead(){
         console.log("Go to read");
         vm.modifying=false;
         _selectMetricToView();
      }

      function goToModify(){
         console.log("Go to modify");
         vm.modifying=true;
      }

      function sendForApproval(){
         console.log("Send for approval");
         vm.newMetric.metadata.state='Pending';
         MetricService.changeState(vm.newMetric).then(
            function(message) {
               alert("Sended for approval!");
               vm.goToRead();
            },
            function(message) {
               alert("Error in sending");
               vm.goToRead();
            }
         );
      }

      function changeRequest(){
         console.log("Change Request");
         //TODO add release note
         vm.newMetric.metadata.state='OnUpdate';
         MetricService.changeState(vm.newMetric).then(
            function(message) {
               alert("Change Request!");
               vm.goToRead();
            },
            function(message) {
               alert("Error in sending");
               vm.goToRead();
            }
         );
      }

      function approve(){
         console.log("Approve");
         //TODO add release note
         vm.newMetric.metadata.state='Approved';
         MetricService.changeState(vm.newMetric).then(
            function(message) {
               alert("Change Request!");
               vm.goToRead();
            },
            function(message) {
               alert("Error in sending");
               vm.goToRead();
            }
         );
      }

      function reject(){
         console.log("Reject");
         //TODO add release note
         vm.newMetric.metadata.state='Rejected';
         MetricService.changeState(vm.newMetric).then(
            function(message) {
               alert("Change Request!");
               vm.goToRead();
            },
            function(message) {
               alert("Error in sending");
               vm.goToRead();
            }
         );
      }




























      /********************************************************************************
      * @ngdoc method
      * @name getApprovedMetrics
      * @description
      * Get approved metrics.
      ********************************************************************************/
      function getApprovedMetrics(){
         MetricService.getApprovedMetrics().then(
            function(data) {
               console.log('SUCCESS GET APPROVED METRICS');
               console.log(data.metricsDTO);
               vm.externalloadedMetric = data.metricsDTO;

            },
            function(data) {
               alert('Error retriving Metrics');
            }
         );
      }


      function cancelSubmit() {
         $location.path('/measurementgoal');
      }

      function setMeasurementGoalDialog(measurementGoalToAssignId){
         vm.measurementGoalDialog = vm.measurementGoals[measurementGoalToAssignId];

         if(vm.measurementGoalDialog !== null){
            setOrganizationalGoalDialog(vm.measurementGoalDialog.organizatoinalGoalId);
         }
      }


      function goToUpdateMeasurementGoal(){
         MeasurementGoalService.toUpdateMeasurementGoal(vm.measurementGoalDialog);
         $location.path('/measurementgoal');
         console.log($location.path('/measurementgoal'));
      }

      /********************************************************************************
      * @ngdoc method
      * @name addTagToMeasurementGoal
      * @description
      * Add tag to a measurement goal.
      ********************************************************************************/
      function addTagToMeasurementGoal(){
         vm.measurementGoalDialog.metadata.tags.push(vm.newTag);
      }

      /********************************************************************************
      * @ngdoc method
      * @name addTagToMeasurementGoal
      * @description
      * Remove tag from a measurement goal.
      ********************************************************************************/
      function removeTagFromMeasurementGoal(index){
         vm.measurementGoalDialog.metadata.tags.splice(index, 1);
      }





   }

})();
