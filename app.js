(function() {
	'use strict';

	angular
  .module('xkcdapp', [
	      'ui.router'
	  ]);
})();

(function() {
	'use strict';

	angular
	  .module('xkcdapp')
	  .config(NameConfiguration);

	NameConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];

	function NameConfiguration($stateProvider, $urlRouterProvider) {
		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'home.html',
			controller: function ($scope, service) {
				$scope.loading = true;

				$scope.doThis = function (num) {
					 service.getComic(num).then(function (response) {
					 	$scope.loading = false;
						$scope.comic = response;
						$scope.comic.date = $scope.comic.month + '/' + $scope.comic.day + '/' + $scope.comic.year;
					})
				}
				$scope.doThis();
			}
		})

		.state('specific', {
			url: '/specific', 
			templateUrl: 'specific.html', 
	
			controller: function ($scope, service) {
				$scope.loading = false;
			
				$scope.doThis = function (num) {
					$scope.loading = true;
					if (num > 1712 || num < 1) num ='';
				 	service.getComic(num).then(function (response) {
				 		$scope.loading = false;
						$scope.comic = response;
						$scope.comic.date = $scope.comic.month + '/' + $scope.comic.day + '/' + $scope.comic.year;
					})
				}
			}
		})

		.state('random', {
			url: '/random',
			templateUrl: '/random.html',
			controller: function ($scope, service) {
				$scope.loading = true;

				$scope.doThis = function (num) {
					$scope.loading = true;
					service.getComic(num).then(function (response) {
						$scope.loading = false;
						$scope.comic = response;
						$scope.comic.date = $scope.comic.month + '/' + $scope.comic.day + '/' + $scope.comic.year;
					})
				}

				$scope.randomNum = function() {
					var min = 1; var max = 1712;
					$scope.num = (Math.floor(Math.random() * (max - min + 1)) + min);
					$scope.doThis($scope.num);
				}

				$scope.randomNum();
				// $scope.randomNum();
			}
			
		})

		$urlRouterProvider.otherwise('/')
	}
})();


