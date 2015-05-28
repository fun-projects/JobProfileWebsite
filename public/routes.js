angular.module('JobApp').config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: "templates/sample.html",
      controller: "SampleCntrl"
    })
});