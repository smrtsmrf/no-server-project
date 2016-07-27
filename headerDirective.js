(function() {
	'use strict';

	angular
	  .module('xkcdapp')
	  .directive('headerDirective', headerDirective);

	function headerDirective() {
		return{
			restrict: 'E',
			templateUrl: 'headerDirectiveTemplate.html',
			link: function (scope, elem, attrs) {
				$('.links').hover(function () {
					 $(this).addClass('active')
				}, function () {
					 $(this).removeClass('active')
				})
			}
		};
	}
})();