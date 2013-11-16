'use strict';

angular.module('ihuChallengeApp.main', [])
  .controller('MainCtrl', function($scope) {
    $scope.greetingMessage = "HELLO!";

    $scope.setMessage = function() {
        $scope.greetingMessage = "GOODBYE!";
    };
  })
  .directive("themessage", function () {
  	return {
  		restrict: "E",
  		template: "<div>{{greetingMessage}}</div>"
  	};
  });
