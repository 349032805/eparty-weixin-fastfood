'use strict';

angular.module('eparty')
  .controller('MainCtrl', function ($scope,$timeout,$rootScope,$state,$animate) {

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
    //小球飞入动画
    $scope.balls = [{isShow:false},{isShow:false},{isShow:false},{isShow:false},{isShow:false}];
    $scope.drop = function (el) {
      var addDom = el.target;
      var count = $scope.balls.length;
      for(var i=0;i<count;i++){
        $scope.balls[i].el=addDom;
      }
      
      while(count--){
        var ball = $scope.balls[count];
        var rect = ball.el.getBoundingClientRect();
        var x = rect.left - 35;
        var y = -(window.innerHeight - rect.top - 35);

        var ballParent = document.getElementsByClassName('ball')[0];

        ballParent.style.display = 'block';
        ballParent.style.webkitTransform = `translate3d(0,${y}px,0)`;
        ballParent.style.transform = `translate3d(0,${y}px,0)`;
        var inner = ballParent.getElementsByClassName('inner')[0];
        inner.style.webkitTransform = `translate3d(${x}px,0,0)`;
        inner.style.transform = `translate3d(${x}px,0,0)`;

        ball.isShow = true;
        $timeout(function() {
          var drop = document.getElementsByClassName('drop')[0];
          drop.style.display = 'block';
          drop.style.webkitTransform = 'translate3d(0,0,0)';
          drop.style.transform = 'translate3d(0,0,0)';
          let inner = drop.getElementsByClassName('inner')[0];
          inner.style.webkitTransform = 'translate3d(0,0,0)';
          inner.style.transform = 'translate3d(0,0,0)';
          $timeout(function() {
              ball.isShow = false;
           },510);

        },10);
      }

    };

  })

