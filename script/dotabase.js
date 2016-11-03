'use strict';

angular.module('dotabase', [
  'ngRoute',
  'dotabase.dataService',
  'dotabase.heroes',
  'RavensApp',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: ''});
}]);