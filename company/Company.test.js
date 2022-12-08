const Company = require('./Company');

describe('Test Company class', () => {
  test('Check that the instance of the Company class is being made correctly', () => {
    const company1 = new Company('Lojas Poney', '7373838', '838383', 1);
    expect(company1 instanceof Company).toBe(true);
  });
});
