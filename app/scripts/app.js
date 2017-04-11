'use strict';

angular
  .module('eparty', [
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/main");
     $stateProvider
        .state("main", {
            url: "/main",
            templateUrl: "/views/main.html",
            controller: "MainCtrl"
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
        .state("template", {
            url: "/template",
            templateUrl: "/views/template.html"
        })
        .state("orderConfirm", {
            url: "/orderConfirm",
            templateUrl: "/views/orderConfirm.html"
        })
        .state("myhome", {
            url: "/myhome",
            templateUrl: "/views/myhome.html"
        })
        .state("orderDetail", {
            url: "/orderDetail",
            templateUrl: "/views/orderDetail.html"
        })
        .state("evaluate", {
            url: "/evaluate",
            templateUrl: "/views/evaluate.html"
        });
       
        $urlRouterProvider.otherwise("/main");
  });
