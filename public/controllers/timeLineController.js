angular.module('JobApp').controller('timeLineCntrl',function($scope,$location,TimeLine){
	$scope.timelineobjs = TimeLine.query();
});