'use strict';

angular.module('myApp.food', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/food', {
    templateUrl: 'food/food.html',
    controller: 'FoodCtrl'
  });
}])

.controller('FoodCtrl', [function() {

}]);