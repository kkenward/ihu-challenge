'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('ihuChallengeApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach data to the scope', function () {
    expect(scope.data.clickme).toBe('Click Me!');
    expect(scope.data.greetingMessage).toBe('HELLO!');
  });
});
