(function() {
  'use strict';

  angular.module('app', [])
  .controller('module', handler);

  handler.$inject = ['$scope']

  function handler($scope) {
      $scope.menuContent = "";

      $scope.validate = function() {
        var content = $scope.menuContent;
        if(content.length == 0) {
          $scope.message = "Please enter data first";
          $scope.colorClass = "red";
          return;
        }
        var items = content.split(",");
        $scope.message = getMessage(eliminateEmptyString(items));
        $scope.colorClass = "green";
      }

      function eliminateEmptyString(items) {
        var nonEmptyItems = [];
        for(var idx=0; items.length > idx; idx++) {
           if(items[idx].length > 0)
              nonEmptyItems.push(items[idx]);
        }
        return nonEmptyItems;
      }

      function getMessage(items) {
        if(items.length <= 3)
          return "Enjoy!"
        else
          return "Too much!";
      }
  };

})();
