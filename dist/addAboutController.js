(function() {
"use strict";

(function () {
    'use strict';
    angular.module('JobApp').controller('addAboutCntrl',function($scope,$location,About){

        $scope.about = new About();

        $scope.save = function(about){

            about.$save(function(){

                console.log("Saved successfully about");
                $location.path('/about/add');
            })


        };
    });

})();
}());
