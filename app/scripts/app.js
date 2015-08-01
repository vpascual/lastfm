'use strict';

/**
 * @ngdoc overview
 * @name lastfmApp
 * @description
 * # lastfmApp
 *
 * Main module of the application.
 */
angular
  .module('lastfmApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
