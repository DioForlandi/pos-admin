(function(){
	'user strict';

	angular
	.module('adminApp')
	.controller('LoginController', ['$scope','$state','userService','$cookies', LoginController])

	function LoginController($scope, $state,userService,$cookies){
		var vm = this;
		vm.username = '';
		vm.password = '';
		vm.url = null;

		//vm.tables = ['table1','table2','table3','table4','table5','table6','table7','table8','table9'];
		
		vm.login = function(){
			userService.login(vm.username,vm.password).then(function successCallback(response){
				if(response.data.result == 'FAILED'){
					alert('Wrong username/password !');
				}else{
					$cookies.put('userActive',angular.toJson(response.data.result));
					if(response.data.result.role == 'ADMIN'){
						$state.go('layout.cashier');	 
					}else{
						$state.go('layout.waitinglist');
					}
				}
			},
			function errorCallback(response){

			});
		}

	}


})();
