function validateCpfOrCnpj(cpfOrCnpj) {
  const regexCPF =
    /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
  const regexcpfAndCnpj =
    /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
  if (!regexcpfAndCnpj.test(cpfOrCnpj)) {
    throw false;
  }
  this.cpfOrCnpj = cpfOrCnpj;
  return true;
}

function validateContact(contact) {
  const regexContact =
    /^\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/;

  if (!regexContact.test(contact)) {
    throw false;
  }

  this.contact = contact;
  return true;
}

module.exports = { validateCpfOrCnpj, validateContact };
