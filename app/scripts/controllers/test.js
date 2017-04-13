'use strict';

angular.module('eparty')
  .animation('.fade', function(){
  	 return {
         enter: function (element, done) {
             element.css('display', 'none');
             $(element).fadeIn(1000, function () {
                 done();
             });
         },
         leave: function (element, done) {
             $(element).fadeOut(1000, function () {
                 done();
             });
         },
         move: function (element, done) {
             element.css('display', 'none');
             $(element).slideDown(500, function () {
                 done();
             });
         }
     }
  })
  .controller('TestCtrl', function ($scope,$animate) {
  	console.log($animate);

  	var dom = document.getElementsByClassName("input");
  	console.log(dom);
  	$animate.move(dom,body,null,function(){
  		
  	})
        $scope.items = [
           { value: "AAAAA" },
           { value: "BBBBB" },
           { value: "CCCCC" },
           { value: "DDDDD" },
           { value: "EEEEE" }
        ];
        $scope.addItem = function () {
            $scope.items.push($scope.item);
            $scope.item = {};
        };
        $scope.removeItem = function (index) {
            $scope.items.splice(index, 1);
        };
        $scope.bottomToTop = function () {
            $scope.items.unshift($scope.items.pop());
        };

  });


