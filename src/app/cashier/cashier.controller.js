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
		//vm.tables = ['table1','table2','table3','table4','table5','table6','table7','table8','table9'];
		vm.tableNumber = '';
		vm.getOrders = function(){
			cashierService.getByTable(vm.tableNumber).then(function successCalback(response){
				$log.info(response);
				vm.salesOrder = response.data;
			},
			function errorCallback(response){
				$log.info(response);
			});
		};
		
	}


})();
