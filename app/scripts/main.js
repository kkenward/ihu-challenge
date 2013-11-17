'use strict';

angular.module('ihuChallengeApp.main', [])
  .controller('MainCtrl', function($scope) {
    $scope.data = {clickme: 'Click Me!', greetingMessage: "HELLO!"};
  })
  .controller('SecondaryCtrl', function($scope) {
    $scope.data = {clickme: '', greetingMessage: "GOODBYE!"};
  })
  .directive("myMessage", function () {
  	return {
  		restrict: "E",
      replace: true,
      template: '<a id="greeting" class="message" href="index.html#/farewell">{{data.greetingMessage}}</a>'
  	};
  });
