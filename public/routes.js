angular.module('JobApp').config(function($routeProvider){
  $routeProvider
    .when('/', {
    	redirectTo:'/jobapp'
    })
    .when('/jobapp',{
    	templateUrl: "templates/showTimeLine.html",
    	controller:"timeLineCntrl"
    })
});