(function() {
  'use strict';

  angular
    .module('adminApp')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController($scope) {
    var vm = this;
    $scope.$parent.pageTitle = 'Dashboard';
    
  }
})();
