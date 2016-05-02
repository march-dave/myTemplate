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
    .state('list', {
      url: '/list/:id',
      templateUrl: '/html/list.html',
      controller: 'listCtrl'
      // ,
      // resolve: {
      //   starDex: function(StarWars, $stateParams) {
      //     var id = $stateParams.id;
      //     return StarWars.getStarDex(id);
      //   }
      // }
    })
    .state('detail', {
      url: '/detail/:id',
      templateUrl: '/html/detail.html',
      controller: 'detailCtrl'
      // ,
      // resolve: {
      //   starwars: function(StarWars, $stateParams) {
      //     var id = $stateParams.id;
      //     return StarWars.getById(id);
      //   }
      // }

    })

    $urlRouterProvider.otherwise('/');

});
