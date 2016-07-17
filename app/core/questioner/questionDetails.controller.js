(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name PageController
* @module metricapp
* @requires $scope
* @requires $location
*
* @description
* Manages the navbar for all users.
* Realizes the control layer for {navbar.view}.
************************************************************************************/

angular.module('metricapp')

.controller('QuestionDetailsCtrl', QuestionDetailsCtrl);

QuestionDetailsCtrl.$inject = ['$location', '$window', 'QuestionStorageFactory', 'QuestionsCrudFactory', '$routeParams'];

function QuestionDetailsCtrl($location, $window, QuestionStorageFactory, QuestionsCrudFactory, $routeParams) {

        var ctrl = this;
        ctrl.questionDialog = {};

        QuestionsCrudFactory.get([$routeParams.questionId], ["id"]).then(
        		function(data){
        			console.log(data);
        			ctrl.questionDialog = data.data.questionList[0];
        		},

        		function(data){
        			$window.alert("Error retrieving question");
        		}
        	);
            
    }

})();
