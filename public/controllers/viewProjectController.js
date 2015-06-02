angular.module('JobApp').controller('viewProjectCntrl',function($scope,$location, $routeParams,Projects){
	$scope.project 	= Projects.get({id:$routeParams.id});
	$scope.deleteProject = function(){
		$location.path('/projects/delete/'+$scope.project._id);
	};
	$scope.editProject = function(){
		$location.path('/projects/edit/'+$scope.project._id);
	};
});