(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['userInfo', 'ApiCustomPath'];
function MyInfoController(userInfo, ApiCustomPath) {
  var $ctrl = this;
  $ctrl.userInfo = userInfo;
  $ctrl.apiCustomPath = ApiCustomPath;
}

})();
