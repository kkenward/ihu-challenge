'use strict';

angular.module('ihuChallengeApp.main', [])
  .controller('MainCtrl', function($scope) {
    $scope.data = {clickme: 'Click Me!', greetingMessage: 'Hello!'};
  })
  .controller('SecondaryCtrl', function($scope) {
    $scope.data = {clickme: '', greetingMessage: 'Goodbye!'};
  })
  .directive('myMessage', function () {
    return {
      restrict: 'E',
      replace: true,
      template: '<a id="greeting" class="message" title="{{data.clickme}}" href="index.html#/farewell">{{data.greetingMessage}}</a>'
    };
  });
