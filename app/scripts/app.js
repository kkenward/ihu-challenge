'use strict';

angular.module('ihuChallengeApp', [
  'ngRoute',
  'ihuChallengeApp.main'
])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/welcome', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/farewell', {
        templateUrl: 'views/main.html',
        controller: 'SecondaryCtrl'
      })
      .otherwise({
        redirectTo: '/welcome'
      });
  }]);
