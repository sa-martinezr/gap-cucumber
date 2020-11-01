import { When } from 'cucumber';
import createEmployee from "../../support/actions/createEmployee";
import deleteEmployee from "../../support/actions/deleteEmployee";
import transformDataTableToObject from "../../support/actions/transformDataTableToObject";
import goToPage from "../../support/actions/goToPage";

When('the employee is created with following data:', table => {
    createEmployee(transformDataTableToObject(table.hashes()));
});

When('the user click the delete button on the record of the existing employee with the following data:', table => {

    //Create the user to delete in order to delete the user correctly
    goToPage("New Employee");
    createEmployee(transformDataTableToObject(table.hashes()));
    goToPage("Listing Employees");

    deleteEmployee(transformDataTableToObject(table.hashes(),false,false));
});
