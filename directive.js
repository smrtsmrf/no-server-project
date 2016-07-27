(function() {
	'use strict';

	angular
	  .module('xkcdapp')
	  .directive('comicDirective', comicDirective);

	function comicDirective() {
		return{
			restrict: 'E',
			templateUrl: 'directiveTemplate.html', 
		}
	}
})();