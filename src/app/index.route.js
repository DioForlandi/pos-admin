(function() {
  'use strict';

  angular
    .module('adminApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('layout',{
        abstract: true,
        templateUrl: 'app/layout/layout.html'
      })

      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('layout.dashboard',{
        url: '/dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'vm'
      })

      .state('layout.cashier',{
        url: '/cashier',
        templateUrl: 'app/cashier/cashier.html',
        controller: 'CashierController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
