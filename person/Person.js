const { validateCpfOrCnpj, validateContact } = require('../utils');

class Person {
  static list = {
    company: [],
    candidate: [],
  };

  name;
  cpfOrCnpj;
  contact;
  constructor(name, cpfOrCnpj, contact) {
    if (validateCpfOrCnpj(cpfOrCnpj) && validateContact(contact)) {
      this.name = name;
      this.cpfOrCnpj = cpfOrCnpj;
      this.contact = contact;
    } else {
      console.log('CPF or CNPJ no is validate');
    }
  }
}

module.exports = Person;
