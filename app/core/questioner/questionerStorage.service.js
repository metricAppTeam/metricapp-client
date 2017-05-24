(function() {'use strict';


var services = angular.module('metricapp');


services.factory('QuestionStorageFactory', ['$window', function($window){
	var factory = {};
	var savedQuestion = {};
	var savedQuestioner = {};
	var savedMetric = {};
	var savedMG = {};

	factory.setQuestioner = function(questioner){
		savedQuestioner = questioner;
	};

	factory.getQuestioner = function(){
		return savedQuestioner;
	};

	factory.setQuestion = function(question){
		savedQuestion = question;
	};

	factory.getQuestion = function(){
		return savedQuestion;
	};

	factory.getMeasurementGoal = function(){
		return savedMG;
	};

	factory.setMeasurementGoal = function(MG){
		savedMG = MG;
	};

	factory.setMetric = function(metric){
		savedMetric = metric;
	};

	factory.getMetric = function(metric){
		return savedMetric;
	};

	return factory;

}]);
})();