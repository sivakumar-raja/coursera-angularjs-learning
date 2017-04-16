(function () {
'use strict';

angular.module('data')
.component('categoryList', {
  templateUrl: 'src/templates/categorylist.template.html',
  bindings: {
    items: '<'
  }
});

})();
