import { Then } from 'cucumber';
import goToPage from '../../support/actions/goToPage';
import transformDataTableToOjbect from "../../support/actions/transformDataTableToObject";
import checkSuccessfulCreatedMessage from "../../support/assertions/checkSuccesfulCreatedMessage";
import checkEmployeeExists from "../../support/assertions/checkEmployeeExists";
import checkEmployeeNotExists from "../../support/assertions/checkEmployeeNotExists";


Then('the page should contain the message {string}', message => {
    checkSuccessfulCreatedMessage(message);
});

Then('the new employee information is visible at the {string} page with the following data:', (page, table) => {
    goToPage(page);    
    checkEmployeeExists(transformDataTableToOjbect(table.hashes(),false,false));
});

Then('the employee information is not present on the page', table => {
    checkEmployeeNotExists(transformDataTableToOjbect(table.hashes(),false,false));
});
