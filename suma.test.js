const suma = require('./suma');

test('2 + 6 = 7', () =>{
    expect(suma(2,6)).toBe(7);
})