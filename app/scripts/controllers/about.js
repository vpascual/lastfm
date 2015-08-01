'use strict';

/**
 * @ngdoc function
 * @name lastfmApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lastfmApp
 */
angular.module('lastfmApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
