const Person = require('../person/Person');

class Company extends Person {
  amount = 0;
  companyId;
  receivedCashback = 0;

  constructor(name, cpfOrCnpj, contact, companyId) {
    super(name, cpfOrCnpj, contact);
    this.companyId = companyId;
    Person.list.company.push(this);
    console.log('Company created successfully!');
  }
}

module.exports = Company;
