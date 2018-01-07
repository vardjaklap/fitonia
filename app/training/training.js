'use strict';

angular.module('myApp.training', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/training', {
    templateUrl: 'training/training.html',
    controller: 'TrainingCtrl'
  });
}])

.controller('TrainingCtrl', [function() {

}]);