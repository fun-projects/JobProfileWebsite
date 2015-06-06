angular.module('JobApp').directive("displayTimeLine", function(){
	return {
		restrict: "EAC",
		templateUrl: "templates/timeLine.html",
		transclude: true,
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