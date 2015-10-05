(function() {
"use strict";

angular.module('JobApp').factory('TimeLine', function($resource){
  return $resource('/timeline/:id', {id: "@id"}, {
    update: {
      method: "PUT"
    }
  });
});
}());
