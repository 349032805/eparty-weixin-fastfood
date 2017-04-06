  'use strict';
  
angular.module('eparty')
  .directive('weuiheader', function () {
  return {
    restrict: 'E',
  	templateUrl: '/views/header.html',
  	link:function(scope, element, attrs){
  		scope.title = attrs.title;
  	}
  };

});