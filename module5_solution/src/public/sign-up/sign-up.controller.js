(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController)

SignUpController.$inject = ['SignUpService'];
function SignUpController(SignUpService) {
  var $ctrl = this;
  $ctrl.user = {};

  $ctrl.submit = function() {
      var response = SignUpService.getMenuDetail($ctrl.user.favouriteMenu);
      response.success(function(data){
        $ctrl.user.menuDetail = data;
      });
      response.error(function(data){
        $ctrl.user.menuDetail = null;
      });
      SignUpService.setUserInfo($ctrl.user);
    }
}

})();
