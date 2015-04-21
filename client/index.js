'use strict';

angular.module('poseidon', ['firebase'])


.run(['$rootScope', function($rootScope) {
  $rootScope.balance = 1000;
  $rootScope.name = 'Bob Smith';
  $rootScope.depositHistory = [];
}])

.controller('master',['$rootScope','$scope',function($rootScope, $scope) {




  $scope.deposit = function() {
    $rootScope.balance += $scope.amount;
    $rootScope.depositHistory.push({thisDeposit: $scope.amount, thisDate: new Date()});
  };

  $scope.withdraw = function() {
    if ($rootScope.balance<0) {
      console.log('NO SOUP FOR YOU!');
    } else {
      $rootScope.balance -= $scope.amount;
      belowZero();
    }
  };

  function belowZero() {
    if ($rootScope.balance<0) {
      $rootScope.balance-= 50;
    }
  }

}]);
