(function(){
	'user strict';

	angular
	.module('adminApp')
	.controller('MenuController',['$scope','$log','$state','menuService',MenuController])

	function MenuController($scope,$log,$state,menuService){
		var vm = this;
		$scope.$parent.pageTitle = 'Menu';

		vm.menu = {parentId: null,menuName: null,imageUrl:'',price: null,description:null,categoryId:null};
		vm.categories = [];
		vm.menus = [];

		vm.loadMenus = function(){
			menuService.getMenus().then(function successCallback(response){
				vm.menus = response.data;
				$log.info(response);
			},
			function errorCallback(response){
				$log.error(response);
			});
		}

		vm.loadCategories = function(){
			menuService.getCategories().then(function successCallback(response){
				vm.categories = response.data;
				$log.info(response);
			},
			function errorCallback(response){
				$log.error(response);
			});
		}

		vm.save = function(){
			menuService.save(vm.menu).then(function successCallback(response){
				$log.info(response);
			},
			function errorCallback(response){
				$log.info(response);
			});
		}
		
	}


})();
