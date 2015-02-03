'use strict';

/**
 * @ngdoc function
 * @name angularjsGruntExampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsGruntExampleApp
 */
angular.module('smartFlightsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
