'use strict';

angular.module('eparty')
  .controller('MainCtrl', function ($scope,$timeout,$rootScope) {
  	$scope.showBig = false;

  	if(!$rootScope.hasShowed){
  	 	$timeout(function() {
         $rootScope.hasShowed = true;
        }, 2000);
  	}

  	//显示大图
  	$scope.showBigImg = function () {
       $scope.showBig = true;
    }

    


    
  });
