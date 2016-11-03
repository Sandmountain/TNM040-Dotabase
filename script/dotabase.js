'use strict';

angular.module('dotabase', [
  'ngRoute',
  'dotabase.dataService',
  'dotabase.heroes',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: ''});
}]);