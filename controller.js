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


angular.module('xkcdapp').controller('mainCtrl', ['$scope', 'service', '$state', function ($scope, service, $state) {

	

}])