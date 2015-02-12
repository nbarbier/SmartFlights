'use strict';

/**
 * @ngdoc function
 * @name smartFlightsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the smartFlightsApp
 */
angular.module('smartFlightsApp')
  .controller('MainCtrl', function($scope, $http) {
  
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();
  

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };
  
  $scope.format = 'dd-MM-yyyy';

  $scope.selected = undefined;
  // Any function returning a promise object can be used to load values asynchronously
  $scope.getLocation = function(val) {
    return $http.get('http://free.rome2rio.com/api/1.2/json/Autocomplete', {
      params: {
        query: val,
        key: 'VSleJCTL'
      }
    }).then(function(response){
      return response.data.places.map(function(item){
        return item.longName;
        /*$scope.AirportName = item.name;
        $scope.AirportCode = item.code;
        $scope.AirportLocation = item.location;

        return $scope.results={name:item.name, code:item.code, item.location};
        */
      });
    });
  };

  /*$scope.getLocation = function(val) {
    return $http.get('http://airportcode.riobard.com/search', {
      params: {
        q: val,
        fmt: 'JSON'
      }
    }).success(function(response){
      return response.data.map(function(item){
        return item.name + ' (' +item.code + '), ' + item.location;
      });
    });
  };*/

  $scope.getMatch = function() {
    console.log('getMatch function');
    console.log($scope.from1);
    console.log($scope.from2);
    //var 
    return $http.get('http://free.rome2rio.com/api/1.2/json/Search', {
      params: {
        key: 'VSleJCTL',
        oName: $scope.from1,
        dName: $scope.from2,
        flags: '0x000FFFF0'
      }
    }).success(function(response){
      $scope.matchResult=response;
      console.log($scope.matchResult);
      //return matchResponse.data.map(function(matchItem){
        //return matchItem.name + ' (' +item.code + '), ' + item.location;
        /*$scope.AirportName = item.name;
        $scope.AirportCode = item.code;
        $scope.AirportLocation = item.location;

        return $scope.results={name:item.name, code:item.code, item.location};
        */
      });
    //});
  };

});