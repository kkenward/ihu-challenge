'use strict';

angular.module('ihuChallengeApp.main', [])
  .controller('MainCtrl', function($scope) {
    $scope.layout = 'welcome';
    $scope.greetingMessage = "HELLO!";

    $scope.setMessage = function() {
        $scope.greetingMessage = "GOODBYE!";
        return 'farewell';
    };
  })
  .directive("themessage", function () {
  	return {
  		restrict: "E",
  		template: "<div>{{greetingMessage}}</div>"
  	};
  });
