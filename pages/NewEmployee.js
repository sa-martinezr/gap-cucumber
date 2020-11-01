/* eslint-disable no-undef */
class NewEmployee {
  get url () {
    return '/employees/new';
  }

  get firstNameInput () {
    return $('#employee_first_name');
  }

  get LastNameInput () {
    return $('#employee_last_name');
  }

  get IdentificationInput () {
    return $('#employee_identification');
  }

  get emailInput () {
    return $('#employee_email');
  }

  get LeaderNameInput () {
    return $('#employee_leader_name');
  }

  get startWorkingYearSelect () {
    return $('#employee_start_working_on_1i');
  }

  get startWorkingMonthSelect () {
    return $('#employee_start_working_on_2i');
  }

  get startWorkingDaySelect () {
    return $('#employee_start_working_on_3i');
  }

  get createEmployeeButton () {
    return $('.actions > input:nth-child(1)');
  }

  createEmployee (newEmployee) {
    this.firstNameInput.waitForDisplayed(5000);
    this.firstNameInput.setValue(newEmployee.firstName);
    this.LastNameInput.setValue(newEmployee.lastName);
    this.emailInput.setValue(newEmployee.email);
    this.IdentificationInput.setValue(newEmployee.identification);
    this.LeaderNameInput.setValue(newEmployee.leaderName);
    this.startWorkingYearSelect.selectByVisibleText(newEmployee.startWorkingYear);
    this.startWorkingMonthSelect.selectByAttribute('value', newEmployee.startWorkingMonth);
    this.startWorkingDaySelect.selectByVisibleText(newEmployee.startWorkingDay);
    this.createEmployeeButton.click();
  }
}

module.exports = new NewEmployee();
