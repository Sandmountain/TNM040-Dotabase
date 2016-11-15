/* use strict */

var app2 = angular.module('dotabaseApp2', []);

app.service("abilitiesService", function ($http, $q)
{
	var deferred2 = $q.defer();
	$http.get('json/abilities.json').then(function (data)
	{
		deferred2.resolve(data);
	});

	this.getAbilities = function ()
	{
		return deferred2.promise;
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