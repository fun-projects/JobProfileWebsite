(function() {
"use strict";

/**
 * Created by LAKI on 9/18/2015.
 */
(function(){

    angular.module('Jobapp').controller('authCntrl',['$scope','auth','$state'],function($scope,auth,$state){

        $scope.user = {};

        $scope.register = function(){
            auth.register($scope.user).error(function(error){
                $scope.error = error;
            }).then(function(){
                $state.go('home');
            });
        };

        $scope.logIn = function(){
            auth.logIn($scope.user).error(function(error){
                $scope.error = error;
            }).then(function(){
                $state.go('home');
            });
        };
    });
})();
}());
