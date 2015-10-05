(function() {
"use strict";

/**
 * Created by LAKI on 9/19/2015.
 */
angular.module('JobApp').controller('deleteAboutCntrl',function($scope,$location, $routeParams,TimeLine,About){
    About.delete({id:$routeParams.id});
    TimeLine.delete({id:$routeParams.id});
    $location.path('/about');
});
}());
