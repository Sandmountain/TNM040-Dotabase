/* use strict */

var app = angular.module('dotabaseApp', []);

app.service("abilitiesService", function ($http, $q)
{
	var deferred = $q.defer();
	$http.get('json/abilities.json').then(function (data)
	{
		deferred.resolve(data);
	});

	this.getAbilities = function ()
	{
		return deferred.promise;
	}
})

.controller("abilitiesCtrl", function ($scope, abilitiesService)
{
	var promise = abilitiesService.getAbilities();
	promise.then(function (data)
	{
		$scope.abilities = data.data;
		console.log($scope)
	});
})