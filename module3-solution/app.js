(function() {
  'use strict';

  angular.module('app', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/")
  .directive('foundItems', foundItemsListDirective);

  function foundItemsListDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        onRemove: '&'
      },
      controller: foundItemsListDirectiveController,
      controllerAs: 'list',
      bindToController: true
    };

    return ddo;
  }

  function foundItemsListDirectiveController() {
    var list = this;
  }

  NarrowItDownController.$inject=['MenuSearchService'];
  MenuSearchService.$inject = ['$http', 'ApiBasePath'];;

  function NarrowItDownController(MenuSearchService) {
    var narrowItDownCtl = this;
    narrowItDownCtl.searchTerm = "";
    narrowItDownCtl.found = [];
    narrowItDownCtl.isEmpty = false;

    narrowItDownCtl.validate = function () {
      if(narrowItDownCtl.searchTerm.length == 0) {
         narrowItDownCtl.isEmpty = true;
         narrowItDownCtl.found = [];
         return;
       } else {
         narrowItDownCtl.isEmpty = false;
       }

      var promise = MenuSearchService.getMatchedMenuItems(narrowItDownCtl.searchTerm);

      promise.then(function (response) {

        if(response.length == 0) {
           narrowItDownCtl.isEmpty = true;
           narrowItDownCtl.found = [];
         } else {
        narrowItDownCtl.found = response;
      }
      }).catch(function (error) {
        console.log("Something went wrong.");
      });
    };

    narrowItDownCtl.removeItem = function(index) {
      MenuSearchService.removeItem(narrowItDownCtl.found, index);
    };

  }

  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {

      return $http({
        method: "GET",
        url: (ApiBasePath + "menu_items.json")
      }).then(function(response) {
        return validateMenuItems(searchTerm, response);
      });

    };

    service.removeItem = function(foundItems, index) {
      foundItems.splice(index, 1);
    };

    var validateMenuItems = function(searchTerm, response) {
      var foundItems = [];
      var items = response.data.menu_items;
      for (var i = 0; i < items.length; i++) {
          if(items[i].description.indexOf(searchTerm) >= 0) {
             foundItems.push(items[i]);
           }
      }
      return foundItems;
    };
  }

})();
