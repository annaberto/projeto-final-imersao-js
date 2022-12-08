const Person = require("./Person.js");

describe("Testa a classe", () => {
  test("verifica se a instância da classe Person está sendo feita corretamente", () => {
    const Person1 = new Person();
    expect(Person1 instanceof Person).toBe(true);
  });
});
