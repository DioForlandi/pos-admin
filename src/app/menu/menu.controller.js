(function(){
	'user strict';

	angular
	.module('adminApp')
	.controller('MenuController',['$scope','$log','$state','menuService','Upload','$stateParams','$timeout',MenuController])

	function MenuController($scope,$log,$state,menuService,Upload,$stateParams,$timeout){
		var vm = this;
		$scope.$parent.pageTitle = 'Menu';

		vm.menu = {parentId: null,menuName: null,price: 0,description:null,categoryId:null};
		vm.categories = [];
		vm.menus = [];
		vm.parentMenus = [];
		vm.parentMenuId = null;
		vm.imageFile = null;
		vm.category = null;

		vm.loadMenus = function(){
			menuService.getMenus().then(function successCallback(response){
				vm.menus = response.data;
				$log.info(response);
			},
			function errorCallback(response){
				$log.error(response);
			});
		}

		vm.loadParentMenus = function(){
			menuService.getParentMenus().then(function successCallback(response){
				vm.parentMenus = response.data;
				$log.info(response);
			},
			function errorCallback(response){
				$log.error(response);
			});
		}

		vm.loadCategories = function(){
			menuService.getCategories().then(function successCallback(response){
				vm.categories = response.data;
				vm.category = vm.menu.category;
				$log.info(response);
			},
			function errorCallback(response){
				$log.error(response);
			});
		}

		vm.save = function(){
			vm.menu.categoryId = vm.category.id;
			if(vm.parentMenuId == 'none'){
				vm.parentMenuId = null;
			}
			vm.menu.parentId = vm.parentMenuId;
			$log.info('REQUEST: '+angular.toJson(vm.menu));

			menuService.save(vm.imageFile,vm.menu).then(function successCallback(response){
				$log.info(response);
				$state.go('layout.menu');
			},
			function errorCallback(response){
				$log.info(response);
			});
		}

		vm.uploadFiles = function(file, errFiles) {
			vm.imageFile = file;
			$scope.errFile = errFiles && errFiles[0];
		}

		// vm.updatePage = function(){
		// 	$log.info($stateParams.menu);
		// 	vm.menu = $stateParams.menu;
		// 	vm.category = vm.menu.category;
		// 	vm.parentMenuId = vm.parentId;
		// }
		
		vm.updatePrice = function(id,price){
			$log.info(id+" "+price);
			menuService.updatePrice(id,price).then(function successCallback(response){
				$log.info(response);
				$timeout(function(){
					vm.loadMenus();
					
				},500);
				vm.menus = [];
			},
			function errorCallback(response){
				$log.info(response);
				alert('update failed');
			});
		}
	}


})();
