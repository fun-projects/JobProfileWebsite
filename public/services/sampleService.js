angular.module('JobApp').factory('GetProfile', function($resource){
  return $resource('getProfile');
});