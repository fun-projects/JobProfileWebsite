angular.module('JobApp').config(function($routeProvider){
  $routeProvider
    .when('/', {
    	redirectTo:'/timeline'
    })
    .when('/timeline',{
    	templateUrl: "templates/showTimeLine.html",
    	controller:"showTimeLineCntrl"
    })
    .when('/projects',{
        templateUrl: "templates/showProjects.html",
        controller:"showProjectsCntrl"
    })
    .when('/projects/add',{
        templateUrl:"templates/addProject.html",
        controller:"addProjectCntrl"
    })
    .when('/projects/edit/:id',{
    	templateUrl:"templates/editProject.html",
    	controller:"editProjectCntrl"
    })
});