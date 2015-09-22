angular.module('JobApp').directive("displayTimeLine", function(){
	return {
		restrict: "EAC",
		templateUrl: "templates/timeLine.html",
		transclude: true,
		scope: true,
		controller:function($scope,$location,$state){
			$scope.clickTimeLine = function(){
				conosle.log("inside clicktimeline funcion");
				switch($scope.timeline.type){
					case "project":
						//$location.path("/projects/view/"+$scope.timeline._id);
						$state.go('projects.view',{id: $scope.timeline._id});

				}
			}
		}

	}
});
