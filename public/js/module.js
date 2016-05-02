'use strict';

var app = angular.module('orgApp', ['ui.router', 'oitozero.ngSweetAlert']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/html/home.html',
      controller: 'homeCtrl'
    })
    .state('product', {
      url: '/',
      templateUrl: '/html/product.html',
      controller: 'productCtrl'
    })
    .state('newTransaction', {
     url: '/newTransaction',
     templateUrl: '/html/newTransaction.html',
     controller: 'newTransactionCtrl'
    })
    $urlRouterProvider.otherwise('/');

});
