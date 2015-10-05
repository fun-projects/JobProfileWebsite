(function() {
"use strict";

angular.module('JobApp').controller('editProjectCntrl',function($scope,$location, $stateParams, moment,TimeLine,Projects){
	Projects.get({id:$stateParams.id}).$promise.then(function(project){
        project.startDate = new Date(project.startDate);
        if( project.endDate)
            project.endDate = new Date(project.endDate);
        $scope.project = project;
    });
	TimeLine.get({id:$stateParams.id}).$promise.then(function(timeline){
        timeline.date = new Date(timeline.date);
        $scope.timeline = timeline;
    });

	$scope.isSubmitting = false;
	$scope.saveProject = function(project,timeline){
    	$scope.isSubmitting = true;
    	Projects.update({id:project._id},project);
    	TimeLine.update({id:timeline._id},timeline);
    	$scope.isSubmitting = false;
    	$location.path('/projects');
  	}
});
}());
