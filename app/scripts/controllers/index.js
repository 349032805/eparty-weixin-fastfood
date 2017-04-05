'use strict';

angular.module('eparty')
  .controller('IndexCtrl', function ($scope,$timeout,$rootScope) {

  	 if(!$rootScope.hasShowed){
  	 	$timeout(function() {
         $rootScope.hasShowed = true;
        }, 2000);
  	}
    
  });
