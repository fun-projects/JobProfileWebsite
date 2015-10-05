(function() {
"use strict";

angular.module('JobApp').factory('Projects', function($resource){
  return $resource('/project/:id', {id: "@id"}, {
    update: {
      method: "PUT"
    }
  });
});
}());
