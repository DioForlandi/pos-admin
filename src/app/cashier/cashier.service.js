(function() {
  'use strict';

  angular
    .module('adminApp')
    .service('cashierService',['$http','BASE_URL',function ($http,BASE_URL){

    	this.getByTable = function (tableNumber){
    		 return $http.get(BASE_URL+"/salesOrder/getByTable?tableNumber="+tableNumber);
    	}

    	this.update = function(data){
    		return $http.post(BASE_URL+"/salesOrder/update",data,{ responseType: 'arraybuffer' });
    	}

        this.getActiveTable = function(){
            return $http.get(BASE_URL+"/salesOrder/tableActive");
        }

    }]);

})();