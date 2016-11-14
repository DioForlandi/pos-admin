(function() {
  'use strict';

  angular
  .module('adminApp')
  .service('waitinglistService',['$http','BASE_URL',function ($http,BASE_URL){

   this.get = function(){
    return $http.get(BASE_URL+'/waitingList/get');
  }

  this.save = function(jsonData)
  {
    return $http.post(BASE_URL+'/waitingList/save',jsonData);

  }
  

  this.remove = function(id)
  {
      return $http.post(BASE_URL+'/waitingList/delete?id='+id)
  }

}]);

})();