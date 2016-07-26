// (function() {
// 	'use strict';

// 	angular
// 	  .module('xkcdapp')
// 	  .controller('mainCtrl', mainCtrl);

// 	mainCtrl.$inject = ['$scope', 'service'];

// 	function mainCtrl($scope, service) {
// 		var num = $scope.num ? $scope.num : '';
// 		service.getComic(num).then(function (response) {
// 			$scope.comic = response;
// 		})

// 		function doThis(stuff) {
// 		console.log('hi');
// 		return;
// 		}
// 	}


// })();


angular.module('xkcdapp').controller('mainCtrl', ['$scope', 'service', function ($scope, service) {
	// var num = $scope.num ? $scope.num : '';
	var num = $scope.num;


	$scope.doThis = function (num) {
		console.log('num', num);
		 service.getComic(num).then(function (response) {
			$scope.comic = response;
		})
	}


	$scope.randomNum = function() {
		var min = 1; var max = 1711;
		$scope.num = (Math.floor(Math.random() * (max - min + 1)) + min);
		console.log(Math.floor(Math.random() * (max - min + 1)) + min);
		$scope.doThis($scope.num);
 	 return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	

}])