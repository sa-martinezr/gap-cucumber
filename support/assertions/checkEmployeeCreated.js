import employeeList from "../../pages/EmployeeList";
import assert from 'assert';

export default employee => {
        assert(
            employeeList.employees.getText().includes(employee.firstName),
            "The first name is not present"
        );

        assert(
            employeeList.employees.getText().includes(employee.lastName),
            "The last name is not present"
        );

        assert(
            employeeList.employees.getText().includes(employee.identification),
            "The identification is not present"
        );

        assert(
            employeeList.employees.getText().includes(employee.leaderName),
            "The leader name is not present"
        );

        assert(
            employeeList.employees.getText().includes(employee.startWorkingOn),
            "The start working on date is not present"
        );        

} 
