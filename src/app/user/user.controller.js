(function(){
	'user strict';

	angular
	.module('adminApp')
	.controller('UserController', ['$scope','$state','userService','$log',UserController])

	function UserController($scope,$state,userService,$log){
		var vm = this;
		$scope.$parent.pageTitle = 'User';
		vm.user = {username: null,password: null, role: null};
		vm.users = [];
		//vm.user = {id: null, fullName: null, username: null, password: null};
		//vm.tables = ['table1','table2','table3','table4','table5','table6','table7','table8','table9'];
		
		vm.save = function()
		{
			$log.info('REQUEST: '+angular.toJson(vm.user));

			userService.save(vm.user).then(function successCallback(response){
				$log.info(response);
				vm.load();
			},
			function errorCallback(response){
				$log.info(response);
			});
		}

		vm.load = function(){
			userService.get().then(function successCallback(response){
				vm.users = response.data;
				$log.info(response);
			},
			function errorCallback(response){
				$log.error(response);
			});
		}

		vm.remove = function(index,id)
		{
			userService.remove(id).then(function successCallback(response){
				$log.info(response);
				vm.users.splice(index,1);
				// vm.load();
			},
			function errorCallback(response){
				$log.error(response);

			});
		}
	}


})();
