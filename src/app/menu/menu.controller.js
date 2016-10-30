(function(){
	'user strict';

	angular
	.module('adminApp')
	.controller('MenuController', MenuController)

	function MenuController($scope){
		var vm = this;
		$scope.$parent.pageTitle = 'Menu';
		vm.message = 'test cashier';

		//vm.tables = ['table1','table2','table3','table4','table5','table6','table7','table8','table9'];
		
	}


})();
