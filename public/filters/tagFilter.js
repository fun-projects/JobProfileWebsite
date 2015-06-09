angular.module("JobApp").filter('tagFilter', function(){
  return function(collection, tag){
    var newCollection = [];
    if(tag){
      for(var i=0, l=collection.length; i < l; i++){
        if(collection[i].tags.join().search(tag) != -1){
          newCollection.push(collection[i]);
        }
      }
      return newCollection;
    }
    return collection;
  }
});