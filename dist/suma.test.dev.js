"use strict";

var suma = require('./suma');

test('2 + 5 = 7', function () {
  expect(suma(2, 5)).toBe(7);
});