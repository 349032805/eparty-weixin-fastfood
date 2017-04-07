'use strict';

angular
  .module('eparty', [
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/index");
     $stateProvider
        .state("index", {
            url: "/index",
            templateUrl: "/views/index.html",
            controller: 'IndexCtrl'
        })
        .state("test", {
            url: "/test",
            templateUrl: "/views/test.html",
            controller: 'TestCtrl'
        })
         .state("waiterRanking", {
            url: "/waiterRanking",
            templateUrl: "/views/waiterRanking.html",
            controller: 'WaiterRankingCtrl'
        })
        .state("hasOrder", {
            url: "/hasOrder",
            templateUrl: "/views/hasOrder.html",
            controller: 'HasOrderCtrl'
        })
         .state("updateInfo", {
            url: "/updateInfo",
            templateUrl: "/views/updateInfo.html"
        })

        .state("icons", {
            url: "/icons",
            templateUrl: "/views/icons.html"
        })
        .state("orderConfirm", {
            url: "/orderConfirm",
            templateUrl: "/views/orderConfirm.html"
        })

        .state("myhome", {
            url: "/myhome",
            templateUrl: "/views/myhome.html"
        })
       
        $urlRouterProvider.otherwise("/index");
  });
