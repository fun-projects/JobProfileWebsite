(function() {
    'use-strict';
    angular.module('JobApp').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/timeline');

        $stateProvider
            .state('timeline', {
                url: '/timeline',
                templateUrl: "templates/showTimeLine.html",
                controller: 'showTimeLineCntrl'
            })
            .state('projects', {
                url: '/projects',
                templateUrl: 'templates/showProjects.html',
                controller: 'showProjectsCntrl'
            })
            .state('projects.add', {
                url: '/add',
                templateUrl: 'templates/editProject.html',
                controller: 'addProjectCntrl'
            })
            .state('projects.edit', {
                url: '/projects/edit/{id}',
                templateUrl: 'templates/editProject.html',
                controller: 'editProjectCntrl'
            })
            .state('projects.delete', {
                url: '/projects/delete/{id}',
                template: " ",
                controller: "deleteProjectCntrl"
            })
            .state('projects.view', {
                url: '/projects/view/{id}',
                templateUrl: "templates/viewProject.html",
                controller: "viewProjectCntrl"
            })
            .state('about.add', {
                url: '/about/add',
                templateUrl: "templates/addAbout.html",
                controller: "addAboutCntrl"
            })
            .state('about', {
                url: '/about',
                templateUrl: "templates/ShowAbout.html",
                controller: "showAboutCntrl"
            });


    }]);

})();




