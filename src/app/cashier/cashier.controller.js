(function(){
	'user strict';

	angular
	.module('adminApp')
	.controller('CashierController',['$scope','$log','cashierService',CashierController])

	function CashierController($scope,$log,cashierService){
		var vm = this;
		$scope.$parent.pageTitle = 'Cashier';
		vm.message = 'test cashier';
		vm.salesOrder = null;
		vm.discount = '';
		vm.grandTotal = '';
		vm.payment = '';
		vm.change = '';
		vm.tables = ['1','2','3','4','5','6','7','8','9'];
		vm.getOrders = function(table){
			cashierService.getByTable(table).then(function successCalback(response){
				$log.info(response);
				vm.salesOrder = response.data;
			},
			function errorCallback(response){
				$log.info(response);
			});
		};
		vm.updateTable = function(table){
			cashierService.update(table).then(function successCalback(response){
				$log.info(response);
			},
			function errorCallback(response){
				$log.info(response);
			});
		};
		
	}


})();
