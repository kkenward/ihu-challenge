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
    expect(scope.data.greetingMessage).toBe('Hello!');
  });

  describe('Directive: myMessage', function () {

    var elem,
      html;

    beforeEach(inject(function ($compile) {
      html = '<my-message></my-message>';
      elem = angular.element(html);
      $compile(elem)(scope);
      scope.$digest();
    }));

    it('should replace myMessage with anchor', function() {
      expect(elem[0].nodeName).toBe('A');
      expect(elem[0].id).toBe('greeting');
      expect(elem[0].className).toContain('message');
      expect(elem[0].href).toContain('/farewell');
    });

    it('should show title of click me', function() {
      expect(elem[0].title).toBe(scope.data.clickme);
    });

    it('should display text hello', function() {
      expect(elem[0].text).toBe(scope.data.greetingMessage);
    });
  });
});

describe('Controller: SecondaryCtrl', function () {

  // load the controller's module
  beforeEach(module('ihuChallengeApp'));

  var SecCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SecCtrl = $controller('SecondaryCtrl', {
      $scope: scope
    });
  }));

  it('should attach data to the scope', function () {
    expect(scope.data.clickme).toBe('');
    expect(scope.data.greetingMessage).toBe('Goodbye!');
  });

  describe('Directive: myMessage', function () {

    var elem,
      html;

    beforeEach(inject(function ($compile) {
      html = '<my-message></my-message>';
      elem = angular.element(html);
      $compile(elem)(scope);
      scope.$digest();
    }));

    it('should replace myMessage with anchor', function() {
      expect(elem[0].nodeName).toBe('A');
      expect(elem[0].id).toBe('greeting');
      expect(elem[0].className).toContain('message');
      expect(elem[0].href).toContain('/farewell');
    });

    it('should show title of click me', function() {
      expect(elem[0].title).toBe(scope.data.clickme);
    });

    it('should display text hello', function() {
      expect(elem[0].text).toBe(scope.data.greetingMessage);
    });
  });
});

describe('Routes', function () {

  // load the controller's module
  beforeEach(module('ihuChallengeApp'));

  it('should map routes to controllers', function() {

    inject(function($route) {

      expect($route.routes['/welcome'].controller).toBe('MainCtrl');
      expect($route.routes['/welcome'].templateUrl).
        toEqual('views/main.html');

      expect($route.routes['/farewell'].templateUrl).
        toEqual('views/main.html');
      expect($route.routes['/farewell'].controller).
        toEqual('SecondaryCtrl');

      // otherwise redirect to
      expect($route.routes[null].redirectTo).toEqual('/welcome')
    });
  });
});
