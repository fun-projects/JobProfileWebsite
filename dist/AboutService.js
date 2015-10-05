(function() {
"use strict";

/**
 * Created by LAKI on 9/19/2015.
 */
(function() {


// Wrapping the service in IIFE
    angular.module('JobApp').factory('About', function ($resource) {
        return $resource('/about',  {
        get: {
                method: "GET", isArray:true
            }
        });
    });
})();
}());
