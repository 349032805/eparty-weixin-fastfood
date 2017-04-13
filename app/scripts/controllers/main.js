'use strict';

angular.module('eparty')
  .controller('MainCtrl', function ($scope,$timeout,$rootScope,$state) {

    //开场动画
  	if(!$rootScope.hasShowed){
  	 	$timeout(function() {
         $rootScope.hasShowed = true;
        }, 2000);
  	}

  	//显示大图
  	$scope.showBigImg = function () {
       $scope.showBig = true;
    }

    //下一步
    $scope.nextStep = function () {
       $state.go('orderConfirm');
    }

    //

    
  });
