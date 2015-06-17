angular.module('JobApp').controller('addAboutCntrl',function($scope,$location,About){
   $scope.save = function(about){
      
      $location.path('/about');
      });
    });
  }
});