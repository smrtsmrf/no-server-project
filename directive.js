(function() {
	'use strict';

	angular
	  .module('xkcdapp')
	  .directive('comicDirective', comicDirective);

	function comicDirective() {
		return{
			controller: 'mainCtrl',
			restrict: 'E',
			scope: {
				comic: '=', 
				num: '&', 
				random: '&'
			},
			templateUrl: 'directiveTemplate.html', 
			// controller: function ($scope, service) {
			// 	var num = $scope.num ? $scope.num.slice(1) : '';
			// 	service.getComic(num).then(function (response) {
			// 		$scope.comic = response
			// 	})
			// }, 

			// controller: function ($scope, service) {
			// 	var num = $scope.num;


			// 	$scope.doThis = function (num) {
			// 		console.log('num', num);
			// 		 service.getComic(num).then(function (response) {
			// 			$scope.comic = response;
			// 		})
			// 	}

			// 	// $scope.doThis();

			// 	$scope.randomNum = function() {
			// 		var min = 1; var max = 1711;
			// 		$scope.num = (Math.floor(Math.random() * (max - min + 1)) + min);
			// 		console.log(Math.floor(Math.random() * (max - min + 1)) + min);
			// 		$scope.doThis();
			//  	 return Math.floor(Math.random() * (max - min + 1)) + min;
			// 	}

			// 	$scope.clear = function () {
			// 		delete $scope.comic;

			// 	}
			// }
		}
	}
})();