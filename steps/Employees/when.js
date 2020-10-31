import { When } from 'cucumber';
import createEmployee from "../../support/actions/createEmployee";

When('the employee is created with following data:', table => {
    
    const data = table.hashes();
    const startWorkingDate = data[0]['Start working on'].split('-');
    const startWorkingDay = startWorkingDate[0];
    const startWorkingMonth = parseInt(startWorkingDate[1],10);
    const startWorkingYear = startWorkingDate[2] ;
    const newEmployee = {
        'firstName'         : data[0]['First name'],
        'lastName'          : data[0]['Last name'],
        'email'             : data[0]['Email'],
        'identification'    : data[0]['Identification'],
        'leaderName'        : data[0]['Leader name'],
        'startWorkingYear'  : startWorkingYear,
        'startWorkingMonth' : startWorkingMonth,
        'startWorkingDay'   : startWorkingDay,
    };

    createEmployee(newEmployee);
});