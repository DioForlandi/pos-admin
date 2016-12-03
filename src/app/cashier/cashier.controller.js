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
		vm.discount = 0;
		vm.grandTotal = 0;
		vm.payment = 0;
		vm.change = 0;
		vm.paymentMethod = '';

		vm.tables = ['1','2','3','4','5','6','7','8','9'];

		vm.getOrders = function(table){
			cashierService.getByTable(table).then(function successCalback(response){
				$log.info(response);
				vm.salesOrder = response.data;
				vm.grandTotal = vm.salesOrder.totalGross;
			},
			function errorCallback(response){
				$log.info(response);
			});
		};

		vm.paid = function(){
			vm.salesOrder.totalNett = vm.salesOrder.totalGross-((vm.discount/100)*vm.salesOrder.totalGross);
			vm.salesOrder.discount = vm.discount;
			vm.salesOrder.paymentMethod = vm.paymentMethod;
			vm.salesOrder.status = 'PAID';
			cashierService.update(vm.salesOrder).then(function successCalback(response){
				$log.info(response);
			},
			function errorCallback(response){
				$log.info(response);
			});
		};
		
	}


})();
