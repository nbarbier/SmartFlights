'use strict';

/**
 * @ngdoc function
 * @name angularjsGruntExampleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularjsGruntExampleApp
 */
angular.module('angularjsGruntExampleApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
