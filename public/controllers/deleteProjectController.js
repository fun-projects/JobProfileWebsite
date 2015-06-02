angular.module('JobApp').controller('deleteProjectCntrl',function($scope,$location, $routeParams,TimeLine,Projects){
    Projects.delete({id:$routeParams.id});
    TimeLine.delete({id:$routeParams.id});
    $location.path('/projects');
});