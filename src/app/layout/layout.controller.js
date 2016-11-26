(function(){
	'user strict';

	angular
	.module('adminApp')
	.controller('LayoutController',['$cookies','$state','$scope','$log',LayoutController])

	function LayoutController($cookies,$state,$scope,$log){
		$scope.pageTitle = '';
		$scope.userActive = angular.fromJson($cookies.get('userActive'));
		

		$scope.logout = function(){
			$log.info('entering logout');
			$cookies.remove('userActive');
			$state.go('login');
		}
		
	}


})();
