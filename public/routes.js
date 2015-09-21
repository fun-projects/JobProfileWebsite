(function() {
    'use-strict';
    angular.module('JobApp').config(['$stateProvider', '$urlRouterProvider','$httpProvider', function ($stateProvider, $urlRouterProvider,$httpProvider) {

        // Check if the user is connected

        var checkLoggedin = function($q, $timeout, $http, $location, $rootScope){
            // Initialize a new promise
            var deferred = $q.defer();

            // Make an AJAX call to check if the user is logged in
            $http.get('/loggedin').success(function(user){
                // Authenticated
                if (user !== '0')

                    deferred.resolve();

                // Not Authenticated
                else {
                    $rootScope.message = 'You need to log in.';

                    deferred.reject();
                    $location.url('/login');
                }
            });

            return deferred.promise;
        };

        // Add an interceptor for AJAX errors
        $httpProvider.interceptors.push(function($q, $location) {
            return {
                response: function(response) {
                    // do something on success
                    return response;
                },
                responseError: function(response) {
                    if (response.status === 401)
                        $location.url('/login');
                    return $q.reject(response);
                }
            };
        });


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
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            })
            .state('admin', {
                url: '/admin',
                templateUrl: 'templates/admin.html',
                controller: 'AdminCtrl',
                resolve: {
                    loggedin: checkLoggedin
                }

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
            })



    }]);

})();




