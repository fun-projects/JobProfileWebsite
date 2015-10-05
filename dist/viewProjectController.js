(function() {
"use strict";

angular.module('JobApp').controller('viewProjectCntrl',function($scope,$location, $stateParams,Projects){
	$scope.project 	= Projects.get({id:$stateParams.id});
	$scope.deleteProject = function(){
		$location.path('/projects/delete/'+$scope.project._id);
	};
	$scope.editProject = function(){
		$location.path('/projects/edit/'+$scope.project._id);
	};
});
}());
