'use strict';

var elem = 'a#greeting.message.ng-binding';
var alignment, size, greeting;

describe('appearance of hello', function() {
  beforeEach(function () {
    browser().navigateTo('/app/index.html');
    alignment = 'center';
    size = '26px';
    greeting = 'Hello!'
  });

  it('should have text hello', function() {
  	expect(element(elem).text()).toEqual(greeting);
  });

  it('should be centered', function() {
    expect(element(elem).css('textAlign')).toEqual(alignment);
  });

  it('should be 26px font', function() {
    expect(element(elem).css('fontSize')).toEqual(size);
  });

  it('should not be underlined', function() {
  	expect(element(elem).css('textDecoration')).toMatch('none');
  });
});

describe('appearance of goodbye', function() {
  beforeEach(function () {
    browser().navigateTo('/app/index.html#/farewell');
    alignment = 'center';
    size = '26px';
    greeting = 'Goodbye!'
  });

  it('should have text goodbye', function() {
  	expect(element(elem).text()).toEqual(greeting);
  });

  it('should be centered', function() {
    expect(element(elem).css('textAlign')).toEqual(alignment);
  });

  it('should be 26px font', function() {
    expect(element(elem).css('fontSize')).toEqual(size);
  });

  it('should not be underlined', function() {
  	expect(element(elem).css('textDecoration')).toMatch('none');
  });
});