/**
 * Created by LAKI on 9/20/2015.
 */
angular.module('JobApp').controller('showAboutCntrl',function($scope,$location,About){
    var aboutdata = About.query(function(){
        $scope.aboutdata = aboutdata;
        console.log(aboutdata);
    });
});