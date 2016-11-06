(function() {
  'use strict';

  angular
    .module('adminApp')
    .service('menuService',['$http','BASE_URL',function ($http,BASE_URL){

    	this.getMenus = function(){
    		return $http.get(BASE_URL+'/menu/getAll');
    	}

    	this.save = function (requestData){
    		 return $http.post(BASE_URL+"/menu/save",requestData);
    	}

    	this.getCategories = function(){
    		return $http.get(BASE_URL+'/category/getAll');
    	}

    }]);

})();