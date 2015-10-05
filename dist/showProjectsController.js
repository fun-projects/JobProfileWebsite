(function() {
"use strict";

angular.module('JobApp').controller('showProjectsCntrl',function($scope,$location,Projects){
	var projects = Projects.query(function(){
		$scope.projects = projects;
	});
});
}());
