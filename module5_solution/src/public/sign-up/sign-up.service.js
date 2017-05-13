(function () {
"use strict";

angular.module('public')
.service('SignUpService', SignUpService);

SignUpService.$inject = ['$http', 'ApiCustomPath'];
function SignUpService($http, ApiCustomPath) {
  var service = this;
  var userInfo = null;

  service.getMenuDetail = function (menuShortName) {
    return $http.get(ApiCustomPath + '/menu_items/'+menuShortName+'.json');
  };

  service.setUserInfo = function (userInformation) {
    userInfo = userInformation;
  };

  service.getUserInfo = function () {
    return userInfo;
  };
}



})();
