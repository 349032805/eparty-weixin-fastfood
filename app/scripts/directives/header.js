  'use strict';

angular.module('eparty')
  .directive('weuiheader', function () {
  return {
    restrict: 'E',
  	templateUrl: '/views/header.html',
  	link:postLink
  };

    function postLink(scope, element, attrs) {
      scope.title = attrs.title;
    }

});