class EmployeeList {

    get url() {
        return "/employees";
    }

    get employees() {
        return $('#content > table:nth-child(3) > tbody');
    }

}

module.exports = new EmployeeList();