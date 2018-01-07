'use strict';
// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.dashboard',
  'myApp.water',
    'myApp.training',
    'myApp.note',
    'myApp.food',
    'myApp.health',
    'myApp.settings',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/dashboard'});
}]);



$('.navOverlay').mouseenter(function(){
    $(this).addClass('shine');
});
$('.navOverlay').mouseleave(function(){
    $(this).removeClass('shine');
});
