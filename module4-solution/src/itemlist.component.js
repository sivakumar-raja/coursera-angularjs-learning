(function () {
'use strict';

angular.module('data')
.component('itemDetail', {
  templateUrl: 'src/templates/itemdetail.template.html',
  bindings: {
    items: '<',
    category: '<'
  }
});

})();
