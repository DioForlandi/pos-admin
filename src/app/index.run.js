(function() {
  'use strict';

  angular
    .module('adminApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($$rootScope) {

    $rootScope.$on('$viewContentLoaded', function(event, next) {
      componentHandler.upgradeAllRegistered();
    });

    var mdlUpgradeDom = false;
    setInterval(function() {
      if (mdlUpgradeDom) {
        componentHandler.upgradeDom();
        mdlUpgradeDom = false;
      }
    }, 200);

    var observer = new MutationObserver(function () {
      mdlUpgradeDom = true;
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

  }

})();
