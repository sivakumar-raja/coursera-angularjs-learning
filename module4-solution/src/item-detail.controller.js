(function () {
'use strict';

angular.module('data')
.controller('ItemController', ItemController);


ItemController.$inject = ['items'];
function ItemController(items) {
  var itemList = this;
  itemList.menu_items = items.data.menu_items;
  itemList.category = items.data.category.name;
}

})();
