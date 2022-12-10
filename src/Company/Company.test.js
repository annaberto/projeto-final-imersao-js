const Company = require('./Company');

describe('Test Company class', () => {
  test('Check that the instance of the Company class is being made correctly', () => {
    const company1 = new Company('Lojas Poney', 80327841000147, 21989898989, 1);
    expect(company1 instanceof Company).toBe(true);
  });
});
