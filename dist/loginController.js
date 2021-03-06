(function() {
"use strict";

/**
 * Created by LAKI on 9/27/2015.
 */

angular.module('JobApp').controller('LoginCtrl', function ($scope, $rootScope, $http, $location)
{
    // This object will be filled by the form
    $scope.user = {};

    // Register the login() function
    $scope.login = function () {
        $http.post('/login', {
            username: $scope.user.username,
            password: $scope.user.password,
        })
            .success(function (user) {
                // No error: authentication OK
                $rootScope.message = 'Authentication successful!';
                $location.url('/admin');
            })
            .error(function () {
                // Error: authentication failed
                $rootScope.message = 'Authentication failed.';
                $location.url('/login');
            });
    };
});
}());
