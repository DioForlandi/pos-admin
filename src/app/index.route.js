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

      // .state('home', {
      //   url: '/',
      //   templateUrl: 'app/main/layout.html',
      //   controller: 'MainController',
      //   controllerAs: 'main'
      // })

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
      })

      .state('layout.menu',{
        url: '/menu',
        templateUrl: 'app/menu/menu.html',
        controller: 'MenuController',
        controllerAs: 'vm'
      })

      .state('layout.menuform',{
        url: '/menu/form',
        templateUrl: 'app/menu/menu-form.html',
        controller: 'MenuController',
        controllerAs: 'vm'
      })

      .state('layout.employee',{
        url: '/employee',
        templateUrl: 'app/employee/employee.html',
        controller: 'EmployeeController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/cashier');
  }

})();
