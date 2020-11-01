class EmployeeList {

    get url() {
        return "/employees";
    }

    get employees() {
        return $$('#content > table:nth-child(3) > tbody > tr:not(:first-child)');
    }

    findDeleteButton(employeeIndex) {
      //Add +2 due the table starts from 1 but the index is given from 0, and the first row is the header
        return $(`#content > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(${employeeIndex+2}) > td:nth-child(9) > a:nth-child(1)`)
    }

    findEmployee(employeeToFind) {
        const employeeToFindArray = Object.values(employeeToFind);
        return this.employees.findIndex(employee => employeeToFindArray.every(columnValue => employee.getText().includes(columnValue)));
    }

    deleteEmployee(employeeToDelete) {
        const employeeIndex = this.findEmployee(employeeToDelete);
        const deleteButton = this.findDeleteButton(employeeIndex);
        deleteButton.click();
        browser.acceptAlert();
    }

}

module.exports = new EmployeeList();
