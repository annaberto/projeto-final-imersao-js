const Person = require('./Person.js');
const Person1 = new Person('Anna', 12332342134, 21909898989);

describe('Testa a classe', () => {
  test('Check that the instance of the Candidate class is being made correctly', () => {
    expect(Person1 instanceof Person).toBe(true);
  });
  test('Check that the instance of the Candidate class is being made correctly', () => {
    expect(Person1 instanceof Person).toBe(true);
  });
});
