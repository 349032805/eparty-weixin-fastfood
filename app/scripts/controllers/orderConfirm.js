'use strict';

angular.module('eparty')
  .controller('OrderConfirmCtrl', function ($scope) {
  		//清空购物车
  		$scope.cleanShopCart = function () {
       		alert(111);
    	}

    	//选择味道
    	$scope.isSoySauce = false; //酱油
    	$scope.isSalt = false; //盐
    	$scope.isVinegar = false; //醋
    	$scope.isCoriander = false; //香菜
    	$scope.isOnion = false; //洋葱

    	$scope.selectTaste = function(option) {
    		if(option == 'soySauce'){
    			$scope.isSoySauce = !$scope.isSoySauce;
    		}

    		if(option == 'salt'){
    			$scope.isSalt = !$scope.isSalt;
    		}

    		if(option == 'vinegar'){
    			$scope.isVinegar = !$scope.isVinegar;
    		}

    		if(option == 'coriander'){
    			$scope.isCoriander = !$scope.isCoriander;
    		}

    		if(option == 'onion'){
    			$scope.isOnion = !$scope.isOnion;
    		}
    	}

    	//是否需要辣
		$scope.selectHot = function (option) {
       		$scope.hot = option;
    	}


  });