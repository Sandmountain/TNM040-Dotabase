'use strict';

angular.module('dotabase.heroes', ['ngRoute'])

.config(['routeProvider', function($routeProvider) {
	$routeProvider.when('/heroes', {
		templateUrl: 'Index/heroes.html', 
		ccontroller: 'HeroesCtrl'
	});
}])
.controller('HeroesCtrl', ["$scope", "HeroChoice",function($scope, HeroChoice) {
	$scope.showHero = function(heroesList){
		$scope.currentHero = heroesList;
	};
}]);