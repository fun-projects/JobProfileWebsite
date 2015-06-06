angular.module('JobApp').controller('showTimeLineCntrl',function($scope,$location,TimeLine){
	$scope.ti = "timeline-inverted";
	var timelineobjs = TimeLine.query(function(){
		$scope.timelineobjs = timelineobjs;
	});
});