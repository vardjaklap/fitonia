'use strict';

angular.module('myApp.health', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/health', {
    templateUrl: 'health/health.html',
    controller: 'HealthCtrl'
  });
}])

.controller('HealthCtrl', [function() {

}]);