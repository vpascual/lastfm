'use strict';

/**
 * @ngdoc service
 * @name lastfmApp.lastfmService
 * @description
 * # lastfmService
 * Factory in the lastfmApp.
 */
angular.module('lastfmApp')
  .factory('lastfmService', ['$resource', '$http', function($resource, $http) { 
    var API_KEY = '6da6e8302f7f8752d026b8680961b404'; 
    var USER = 'vpascual';
    var BASE_URL = 'http://ws.audioscrobbler.com/2.0/?api_key='+ API_KEY + ' &format=json&user=' + USER;  

    function getTopArtists() { 
      return $http.get(BASE_URL + '&method=user.gettopartists'); 
    }  

    function getWeeklyArtistChart(artist, from, to) {
      // http://ws.audioscrobbler.com/2.0/?method=user.getweeklyartistchart&user=rj&api_key=6da6e8302f7f8752d026b8680961b404&format=json
      return $http.get(BASE_URL + '&method=user.getweeklyartistchart&from=' + from + '&to=' + to);
    }

    return {
      getTopArtists: getTopArtists ,
      getWeeklyArtistChart : getWeeklyArtistChart
    }
  }]);
