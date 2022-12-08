class Person {
  static list = {
    company: [],
    candidate: [],
  };

  name;
  cpfOrCnpj;
  contact;
  constructor(name, cpfOrCnpj, contact) {
    this.name = name;
    this.cpfOrCnpj = cpfOrCnpj;
    this.contact = contact;
  }
}
module.exports = Person;
