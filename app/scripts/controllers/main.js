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
    $scope.drop = function (el) {
      var dom = el.target;
      var rect = el.target.getBoundingClientRect();
      var x = rect.left - 35;
      var y = -(window.innerHeight - rect.top - 35);
      console.log(x);
      console.log(y);

      var ball = document.getElementsByClassName('ball')[0];
      
      ball.style.display = 'block';
      ball.style.webkitTransform = `translate3d(0,${y}px,0)`;
      ball.style.transform = `translate3d(0,${y}px,0)`;
      let inner = ball.getElementsByClassName('inner')[0];
      inner.style.webkitTransform = `translate3d(${x}px,0,0)`;
      inner.style.transform = `translate3d(${x}px,0,0)`;

      $scope.isDrop = true;
      $timeout(function() {
        var drop = document.getElementsByClassName('drop')[0];
        drop.style.display = 'block';
        drop.style.webkitTransform = 'translate3d(0,0,0)';
        drop.style.transform = 'translate3d(0,0,0)';
        let inner = drop.getElementsByClassName('inner')[0];
        inner.style.webkitTransform = 'translate3d(0,0,0)';
        inner.style.transform = 'translate3d(0,0,0)';
      },10);

    }
    
  });
