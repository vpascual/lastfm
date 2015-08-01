'use strict';

/**
 * @ngdoc function
 * @name lastfmApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lastfmApp
 */
angular.module('lastfmApp')
  .controller('MainCtrl', function ($scope, LastfmService) {
    console.log("soc al main");

    LastfmService.getTopArtists().then(function(data) {
      console.log(data);
      $scope.topartists = data.data.topartists.artist;
    }, function(error) {
      throw error;
    })

  });
