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
			// controller: 'mainCtrl',
			controller: function ($scope, service) {
				$scope.doThis = function (num) {
					console.log('num', num);
					 service.getComic(num).then(function (response) {
						$scope.comic = response;
					})
				}
				$scope.doThis();
			}
		})

		.state('specific', {
			url: '/specific', 
			templateUrl: 'specific.html', 
			// controller: 'mainCtrl',
			controller: function ($scope, service) {

				$scope.doThis = function (num) {
					console.log('num', num);
					 service.getComic(num).then(function (response) {
						$scope.comic = response;
					})
				}
			}
		})

		.state('random', {
			url: '/random',
			templateUrl: '/random.html',
			// controller: 'mainCtrl', 
			controller: function ($scope) {
				$scope.randomNum = function() {
					var min = 1; var max = 1711;
					$scope.num = (Math.floor(Math.random() * (max - min + 1)) + min);
					console.log(Math.floor(Math.random() * (max - min + 1)) + min);
					$scope.doThis();
			 	 return Math.floor(Math.random() * (max - min + 1)) + min;
				}

				$scope.doThis = function (num) {
					console.log('num', num);
					 service.getComic(num).then(function (response) {
						$scope.comic = response;
					})
				}
			}
			
		})

		$urlRouterProvider.otherwise('/')
	}
})();