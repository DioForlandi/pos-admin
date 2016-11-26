(function() {
  'use strict';

  angular
  .module('adminApp')
  .service('userService',['$http','BASE_URL',function ($http,BASE_URL){

   this.get = function(){
    return $http.get(BASE_URL+'/User/getAll');
  }

  this.save = function(jsonData)
  {
    return $http.post(BASE_URL+'/User/save',jsonData);

  }

  this.remove = function(id)
  {
      return $http.post(BASE_URL+'/User/delete?id='+id)
  }

}]);

})();