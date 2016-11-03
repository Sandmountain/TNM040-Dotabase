'use strict';

// Register 'forecastDetails' directive, along with its associated template
angular.module('dotabase.heroDetails', []);
angular.module('dotabase.heroDetails').directive('heroDetails', function(){
	return {
		restrict: "E",
		scope:{
			forecast: '='
		},
		replace: true,
		templateUrl: "Index/hero-details/hero-details.html"
	};
});
