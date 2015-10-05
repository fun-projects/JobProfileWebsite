(function() {
"use strict";

(function () {
    'use strict';

    angular.module('JobApp').controller('viewAboutCntrl',function($scope,$location, $routeParams,About){

        $scope.about 	= About.get({id:$routeParams.id});
        $scope.deleteAbout = function(){
            $location.path('/about/delete/'+$scope.about._id);
        };
        $scope.editAbout = function(){
            $location.path('/about/edit/'+$scope.about._id);
        };

    });
})();
}());
