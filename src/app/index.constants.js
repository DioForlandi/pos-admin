/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('adminApp')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('BASE_URL','http://localhost:8080')

})();
