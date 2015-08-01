'use strict';

/**
 * @ngdoc function
 * @name lastfmApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lastfmApp
 */
angular.module('lastfmApp')
  .controller('MainCtrl', function ($scope, lastfmService, datamodel) {
    console.log("soc al main");

    datamodel.getTopArtists().then(function(data) {
      console.log(data);
      $scope.topartists = data.data.topartists.artist;
    }, function(error) {
      throw error;
    });

    var now = new Date();
    var amonthago = new Date().setMonth(now.getMonth() - 1);
    console.log(amonthago)
    datamodel.getWeeklyArtistChart("hola", amonthago, now.getTime()).then(function(data) {
      console.log(data);
    }, function(error) {
      throw error;
    });

  });
