import { Then } from 'cucumber';
import goToPage from '../../support/actions/goToPage';
import checkSuccessfulCreatedMessage from "../../support/assertions/checkSuccesfulCreatedMessage";
import checkEmployeeCreated from "../../support/assertions/checkEmployeeCreated";

Then('the page should contain the message {string}', message => {
    checkSuccessfulCreatedMessage(message);
});

Then('the new employee information is visible at the {string} page with the following data:', (page, table) => {
    goToPage(page);
    const data = table.hashes();
    const startWorkingDate = data[0]['Start working on'].split('-');
    const newEmployee = {
        'firstName'     : data[0]['First name'],
        'lastName'      : data[0]['Last name'],
        'identification': data[0]['Identification'],
        'leaderName'    : data[0]['Leader name'],
        'startWorkingOn': `${startWorkingDate[1]}/${startWorkingDate[0]}/${startWorkingDate[2]}`
    }

    checkEmployeeCreated(newEmployee);

});
