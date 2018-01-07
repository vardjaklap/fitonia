'use strict';

angular.module('myApp.water', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/water', {
            templateUrl: 'water/water.html',
            controller: 'WaterCtrl'
        });
    }])

    .controller('WaterCtrl', [function() {

    }]);