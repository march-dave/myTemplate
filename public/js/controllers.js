'use strict';

var app = angular.module('orgApp');

app.controller('homeCtrl', function($q, $http) {
  console.log('homeCtrl111111');
});

app.controller('productCtrl', function($scope, $state) {

  var product = [{
    "name": "Name",
    "description": "Description",
    "price": "11",
    "category": "category",
    "image": "Image"
  },
   {
    "name": "Name1",
    "description": "Description1",
    "price": "12",
    "category": "category1",
    "image": "Image1"
  }, {
    "name": "Name2",
    "description": "Description2",
    "price": "13",
    "category": "category2",
    "image": "Image2"
  }];

  var products = [];
  products = product;

  $scope.products = products;

  $scope.sortBy  = function(order) {
    if($scope.sortOrder === order) {
      $scope.sortOrder = `-${order}`;
    } else if ($scope.sortOrder === `-${order}`) {
      $scope.sortOrder = '';
    } else {
      $scope.sortOrder = order;
    }
  };

});

app.controller('newTransactionCtrl', function($scope, $state) {
  $scope.addTransaction = function() {

    $scope.products  = $scope.newTransaction;
  }

});

app.controller('listCtrl', function($scope, $state, starDex) {
  console.log('listCtrl1111', starDex);
  $scope.starDex = starDex;
});

app.controller('detailCtrl', function($scope, $interval, starwars) {
  $scope.starwars = starwars;

})
