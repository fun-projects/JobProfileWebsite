angular.module('JobApp').controller('addProjectCntrl',function($scope,$location,Projects,TimeLine){
  $scope.timeline = new TimeLine();
  $scope.project = new Projects();

  $scope.save = function(project,timeline){
    timeline.type = "project";
    timeline.$save(function(t){
      project._id = t._id;
      project.$save(function(p){
       $location.path('/projects');
      });
    });
  }
});