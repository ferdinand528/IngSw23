"use strict";

var suma = require('suma');

test('2 + 5 = 7', function () {
  expect(suma(2, 5)).toBe(7);
});
test('a + 5 = NaN', function () {
  expect(suma('a', 5)).toBe(NaN);
});