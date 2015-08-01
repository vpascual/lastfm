'use strict';

/**
 * @ngdoc service
 * @name lastfmApp.datamodel
 * @description
 * # datamodel
 * Service in the lastfmApp.
 */
angular.module('lastfmApp')
  .service('datamodel', ['lastfmService', '$q', function (lastfmService, $q) {
    var topArtists;

    function getTopArtists() {
      if (!topArtists) {
        topArtists = lastfmService.getTopArtists();
      } else {
        var deferred = $q.defer();
        deferred.resolve(topArtists);
        // return topArtists;
      }

      return topArtists;
    }

    function getWeeklyArtistChart(name, from, to) {
      return lastfmService.getWeeklyArtistChart(name, from, to);
    }

    return {
      getTopArtists : getTopArtists,
      getWeeklyArtistChart : getWeeklyArtistChart
    }
  }]);
