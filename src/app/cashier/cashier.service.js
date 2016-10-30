(function() {
  'use strict';

  angular
    .module('adminApp')
    .service('cashierService',['$http',function ($http,BASE_URL){

    	this.getAll = function (itemsPerPage,pageNumber){
    		 return $http.get(BASE_URL+"/salesorder?itemsPerPage="+itemsPerPage+"&pageNumber="+pageNumber);
    	}

    	this.save = function(salesorder){
    		return  $http.put(BASE_URL+"/salesorder",salesorder);
    	}

    	this.remove = function(id){
    		return $http.post(BASE_URL+"/salesorder?id="+id);
    	}

    }]);

})();