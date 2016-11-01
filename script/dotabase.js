'use strict';

angular.module('dotabase', [
  'ngRoute',
  'dotabase.dataService',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/index'});
}]);