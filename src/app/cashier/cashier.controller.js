(function(){
	'user strict';

	angular
	.module('adminApp')
	.controller('CashierController',['$scope','$log','cashierService','FileSaver',CashierController])

	function CashierController($scope,$log,cashierService,FileSaver){
		var vm = this;
		$scope.$parent.pageTitle = 'Cashier';
		vm.message = 'test cashier';
		vm.salesOrder = null;
		vm.discount = 0;
		vm.grandTotal = 0;
		vm.payment = 0;
		vm.change = 0;
		vm.paymentMethod = '';
		vm.btnClass = '';

		vm.tables = ['1','2','3','4','5','6','7','8','9'];

		vm.tableActive = null;

		vm.loadActiveTable = function(){
			cashierService.getActiveTable().then(function successCalback(response){
				$log.info(response);
				vm.tableActive = response.data;
			},
			function errorCallback(response){
				$log.info(response);
			});
		}

		vm.loadTable = function(table){
			var btnTable = '';
			var keepGoing = true;

			angular.forEach(vm.tableActive,function(tableNumber){
				if(keepGoing) {
					if(table == tableNumber.table_no){
						btnTable =  'mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--primary mdl-button--raised';
						keepGoing = false;
					}else{
						btnTable = 'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button-colored';
					}
				}
				
			});

			return btnTable;
		}

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

				var date = new Date();
				var minutes = date.getMinutes();
				var hour = date.getHours();
				var filename = 'STRUCT_'+date.getFullYear()+'_'+('0' + (date.getMonth() + 1)).slice(-2)+'_'+('0' + date.getDate()).slice(-2)+'_'+hour+'_'+minutes;
				var blob = new Blob([response.data], {
					type: 'application/pdf'
				});
				FileSaver.saveAs(blob, filename+".pdf");

				vm.salesOrder = null;
				vm.discount = 0;
				vm.grandTotal = 0;
				vm.payment = 0;
				vm.change = 0;
			},
			function errorCallback(response){
				$log.info(response);
			});
		};
		
	}


})();
