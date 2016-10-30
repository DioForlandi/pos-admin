(function(){
	'user strict';

	angular
	.module('adminApp')
	.controller('LayoutController', LayoutController)

	function LayoutController($scope){
		var vm = this;
		$scope.pageTitle = '';
		vm.message = 'test cashier';

		//vm.tables = ['table1','table2','table3','table4','table5','table6','table7','table8','table9'];
		
	}


})();
