
// Define the `myApp.weatherService` module
var dataService = angular.module('dotabase.dataService', ['ngResource']);

dataService.factory('heroes', ['$resource',
    function($resource) {
      return $resource('../json/heroes.json', {}, {
          query: {
            method: 'GET',
            isArray: true
          }
      });
    }
  ]);