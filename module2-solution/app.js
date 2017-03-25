(function() {
  'use strict';

  angular.module('app', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject=['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyCtl = this;
    toBuyCtl.items = ShoppingListCheckOffService.getShoppingCart();
    toBuyCtl.markItemAsBought = function(index) {
      return ShoppingListCheckOffService.markItemAsBought(index);
    };
  }

  AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var purchasedCtl = this;
    purchasedCtl.items = ShoppingListCheckOffService.getPurchasedItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;
    var shoppingCart = [
        {
          name: 'cookies',
          quantity: '6'
        },
        {
          name: 'bathsoaps',
          quantity: '2'
        },
        {
          name: 'balls',
          quantity: '2'
        },
        {
          name: 'pencils',
          quantity: '4'
        },
        {
          name: 'oranges',
          quantity: '8'
        }
      ];

    var purchasedItems = [];

    service.getShoppingCart = function () {
      return shoppingCart;
    };

    service.markItemAsBought = function(index) {
      purchasedItems.push(shoppingCart[index]);
      shoppingCart.splice(index, 1);
    };

    service.getPurchasedItems = function() {
      return purchasedItems;
    };

  }

})();
