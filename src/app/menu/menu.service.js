(function() {
  'use strict';

  angular
    .module('adminApp')
    .service('menuService',['$http','BASE_URL',function ($http,BASE_URL){

    	this.getMenus = function(){
    		return $http.get(BASE_URL+'/menu/getAll');
    	}

        this.getParentMenus = function(){
            return $http.get(BASE_URL+'/menu/getAllParentMenu');
        }

    	this.save = function (imageFile,requestData){
    		// return $http.post(BASE_URL+"/menu/save",formData,{
      //           headers: {'Content-Type': undefined },
      //           transformRequest: angular.identity});
            return $http({
                url: BASE_URL+"/menu/save",
                params: {data: requestData},
                transformRequest: function(){
                    var formData = new FormData();
                    formData.append('imageFile',imageFile);
                    return formData;
                },
                method: "POST",
                headers: {'Content-type': undefined}
            });
    	}

    	this.getCategories = function(){
    		return $http.get(BASE_URL+'/category/getAll');
    	}

    }]);

})();