angular.module('JobApp').directive("displayTimeLine", function(){
	return {
		restrict: "E",
		templateUrl: "templates/timeLine.html",
		scope:{
			id:'@',
			title:'@',
			description:'@',
			redirect:'@'
		},
		controller:function($scope){
			$scope.clickTimeLine = function(){
				console.log($scope.id);
			}
		}

	}
});