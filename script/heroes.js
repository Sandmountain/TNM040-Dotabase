/* use strict */

var app = angular.module('dotabaseApp', []);

app.service("dotaService", function ($http, $q)
{
	var deferred = $q.defer();
	$http.get('json/heroes.json').then(function (data)
	{
		deferred.resolve(data);
	});

	this.getHeroes = function ()
	{
		return deferred.promise;
	}
})

.controller("heroesCtrl", function ($scope, dotaService)
{
	var promise = dotaService.getHeroes();
	promise.then(function (data)
	{
		$scope.heroes = data.data;
	});
})