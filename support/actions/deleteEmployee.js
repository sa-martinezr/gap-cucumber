import employeeList from "../../pages/EmployeeList";

export default employeeToDelete => {
    employeeList.deleteEmployee(employeeToDelete);
}