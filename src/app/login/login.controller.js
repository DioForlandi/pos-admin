(function(){
	'user strict';

	angular
	.module('adminApp')
	.controller('LoginController', ['$scope','$state', LoginController])

	function LoginController($scope, $state){
		var vm = this;
		vm.username = '';
		vm.password = '';
		vm.url = null;

		//vm.tables = ['table1','table2','table3','table4','table5','table6','table7','table8','table9'];
		
		vm.login = function(){
			if(vm.username=='admin' && vm.password=='admin')
			{
				$state.go('layout.cashier');
			}
			

		}

	}


})();
