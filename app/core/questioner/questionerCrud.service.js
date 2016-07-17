(function() {'use strict';

/* Services */

/*
 http://docs.angularjs.org/api/ngResource.$resource

 Default ngResources are defined as

 'get':    {method:'GET'},
 'save':   {method:'POST'},
 'query':  {method:'GET', isArray:true},
 'remove': {method:'DELETE'},
 'delete': {method:'DELETE'}

 */

var services = angular.module('metricapp');

services.factory('QuestionsCrudFactory', ['$http', '$window', 'STATES', function($http, $window, STATES){
	var factory = {};
	
	factory.STATES = STATES;

	factory.create = function(question){
		//var questionJSON = JSON.stringify(question);			
		return $http.post("http://localhost:8080/question", question);
	};

	factory.update = function(question){
		return $http.put("http://localhost:8080/question?id=" + question.metadata.id, question);
	};

	factory.delete = function(questionId){
		return $http.delete("http://localhost:8080/question?id=" + questionId);
	};

	factory.getAll = function(){

		var config = {
			params: {
				id: "all"
			}
		};
		return $http.get("http://localhost:8080/question", config);
	};

	factory.getRecent = function(questioner){

		var config = {
			params: {
				questionerId: questioner,
				recent: "true"
			}
		};
		//$window.alert("Getting all questions in repository");
		return $http.get("http://localhost:8080/question", config);
	};

	factory.get = function(keyword, field){ 

		var url = "http://localhost:8080/question?" + field[0] + "=" + keyword[0]; 
		var i = 0;
		for (i=1; i<field.length; i++){
			url += + "&" + field[i] + "=" + keyword[i];
		}
		
		return $http.get(url);
	};

	factory.getInArray = function(questions){
         
         var i;
         var response = [];
         for(i=0; i<questions.length; i++){

         	factory.get([questions[i].metadata.id], ["id"]).then(
         		function(data){
         			response.push(data.data.questionList[0]);
         		},
         		function(data){
         			$window.alert("Error retrieving question " + questions[i].metadata.id);
         		}
     		);

         }

         return response;
    };

	factory.getMetrics = function(id){
		return $http.get("http://localhost:8080/metric?id=" + id);
	};

	factory.count = function(state, questioner){

		var config = {
			params: {
				userid: questioner,
				state: state
			}
		};

		return $http.get("http://localhost:8080/question/count", config);

	};

	factory.countMeasurementGoalsByQuestionerIdAndState = function(questionerId, state){
        var url = "http://localhost:8080/measurementgoal/count?questionerId=" + questionerId + "&state=" + state;
        return $http.get(url);
    }

	return factory;
}]);
})();