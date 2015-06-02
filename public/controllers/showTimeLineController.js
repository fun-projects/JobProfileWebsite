angular.module('JobApp').controller('showTimeLineCntrl',function($scope,$location,TimeLine){
	var timelineobjs = TimeLine.query(function(){
		$scope.timelineobjs = timelineobjs;
	});
});