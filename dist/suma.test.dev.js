"use strict";

var suma = require('./suma');

test('2 + 6 = 7', function () {
  expect(suma(2, 6)).toBe(7);
});