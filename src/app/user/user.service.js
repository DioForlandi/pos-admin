(function() {
  'use strict';

  angular
  .module('adminApp')
  .service('userService',['$http','BASE_URL',function ($http,BASE_URL){

   this.get = function(){
    return $http.get(BASE_URL+'/user/getAll');
  }

  this.save = function(jsonData)
  {
    return $http.post(BASE_URL+'/user/save',jsonData);

  }

  this.remove = function(id)
  {
      return $http.post(BASE_URL+'/user/delete?id='+id)
  }

  this.login = function(username,password){
    return $http.get(BASE_URL+'/user/login?username='+username+'&password='+password);
  }

}]);

})();