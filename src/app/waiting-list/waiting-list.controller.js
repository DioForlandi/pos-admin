(function(){
	'user strict';

	angular
	.module('adminApp')
	.controller('WaitingListController', ['$scope','$state','waitinglistService','$log',WaitingListController])

	function WaitingListController($scope,$state,waitinglistService,$log){
		var vm = this;
		$scope.$parent.pageTitle = 'Waiting List';
		vm.guestName = '';
		vm.guestCount = '';
		vm.waitingList = {guestName: null,guestCount: null};
		vm.waitingLists = [];
				//vm.user = {id: null, fullName: null, username: null, password: null};
		//vm.tables = ['table1','table2','table3','table4','table5','table6','table7','table8','table9'];
		
		vm.save = function()
		{
			$log.info('REQUEST: '+angular.toJson(vm.waitingList));

			waitinglistService.save(vm.waitingList).then(function successCallback(response){
				$log.info(response);
				vm.load();
			},
			function errorCallback(response){
				$log.info(response);
			});
		}

		vm.load = function(){
			waitinglistService.get().then(function successCallback(response){
				vm.waitingLists = response.data;
				$log.info(response);
			},
			function errorCallback(response){
				$log.error(response);
			});
		}

		vm.remove = function(index,id)
		{
			waitinglistService.remove(id).then(function successCallback(response){
				$log.info(response);
				vm.waitingLists.splice(index,1);
				// vm.load();
			},
			function errorCallback(response){
				$log.error(response);

			});
		}
	}


})();
