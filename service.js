(function() {
	'use strict';

	angular
	  .module('xkcdapp')
	  .service('service', service);

	service.$inject = ['$http'];

	function service($http) {
		this.getComic = function (num) {
			// var url = 'http://xkcd.com/info.0.json';
			var proxy = 'https://crossorigin.me/';
			var pre = 'http://xkcd.com/';
			var num = num ? num : ''
			var suf = '/info.0.json';
			return $http.get(proxy + pre + num + suf)
			.then(function (response) {
			
				return response.data;
			})
		}
	}
})();


// link function