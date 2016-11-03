'use strict';
// Define the `myApp.weatherService` module
var dataService = angular.module('dotabase.dataService', []);

app.service("dotaService", function ($http, $q)
{
	var deferred = $q.defer();
	$http.get('resources/json/heroes.json').then(function (data)
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
	var promise = ravensService.getHeroes();
	promise.then(function (data)
	{
		$scope.heroes = data.data;
	});
})