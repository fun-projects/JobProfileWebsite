angular.module('JobApp').controller('editProjectCntrl',function($scope,$location, $routeParams,TimeLine,Projects){
	$scope.project 	= Projects.get({id:$routeParams.id});
	$scope.timeline = TimeLine.get({id:$routeParams.id});
	$scope.isSubmitting = false;
	$scope.saveProject = function(project,timeline){
    	$scope.isSubmitting = true;
    	Projects.update({id:project._id},project);
    	TimeLine.update({id:timeline._id},timeline);
    	$scope.isSubmitting = false;
    	$location.path('/projects');
  	}
});