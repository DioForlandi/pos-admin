(function(){
	'user strict';

	angular
	.module('adminApp')
	.controller('MenuController',['$scope','$log','$state','menuService','Upload',MenuController])

	function MenuController($scope,$log,$state,menuService,Upload){
		var vm = this;
		$scope.$parent.pageTitle = 'Menu';

		vm.menu = {parentId: null,menuName: null,price: null,description:null,categoryId:null};
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
				$log.info(response);
			},
			function errorCallback(response){
				$log.error(response);
			});
		}

		vm.save = function(){
			vm.menu.categoryId = vm.category.id;
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
		
	}


})();
