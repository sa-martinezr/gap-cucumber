/* eslint-disable no-undef */
class ShowEmployee {
  get successfulCreatedMessage () {
    return $('#notice');
  }
}

module.exports = new ShowEmployee();
