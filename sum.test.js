const sum = require('./sum');

test('si sumo 2 y 2 debe ser 4', () => {
  expect(sum(2, 2)).toBe(4);
});


test('si sumo 0 y 3 debe ser 3', () => {
    expect(sum(0, 3)).toBe(3);
  });

test('si sumo 5 y 9 debe ser 14', () => {
    expect(sum(5, 9)).toBe(14);
  });

test('si sumo 8 y 7 debe ser 15', () => {
    expect(sum(8, 7)).toBe(15);
  });

  


 