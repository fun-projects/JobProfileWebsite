(function() {
"use strict";

angular.module('JobApp').directive("displayProject", function(){
	return {
		restrict: "E",
		templateUrl: "templates/project.html",
		controller:function($scope,$location,Projects,TimeLine){
			$scope.deleteProject = function(){
				$location.path('/projects/delete/'+$scope.project._id);
			};
			$scope.editProject = function(){
				$location.path('/projects/edit/'+$scope.project._id);
			};
		}
	}
});
}());
