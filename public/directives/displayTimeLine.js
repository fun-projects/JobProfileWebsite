angular.module('JobApp').directive("displayTimeLine", function(){
	return {
		restrict: "E",
		templateUrl: "templates/timeLine.html",
		controller:function($scope,$location){
			$scope.clickTimeLine = function(){
				switch($scope.timeline.type){
					case "project":
						$location.path("/projects/view/"+$scope.timeline._id);

				}
			}
		}

	}
});