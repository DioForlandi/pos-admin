(function() {
	'use strict';

	angular
	.module('adminApp')
	.service('loginService',['$http','BASE_URL',function ($http,BASE_URL){

		this.login = function(username, password){
			return $http.get(BASE_URL+"/User/login?username="+username+"&&password="+password);
		}

		this.get = function(){
			return $http.get(BASE_URL+'/User/getAll');
		}

	}]);

})();

