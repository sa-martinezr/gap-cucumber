import employeeList from "../../pages/EmployeeList";
import assert from 'assert';

export default employee => {

    assert(employeeList.findEmployee(employee) >= 0,
           "The employee is not present on the page"
    );
    
};
