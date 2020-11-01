/* eslint-disable no-undef */
import login from '../../pages/Login';
import newEmployee from '../../pages/NewEmployee';
import employeeLlist from '../../pages/EmployeeList';

export default page => {
  switch (page) {
    case 'Login':
      browser.url(login.url);
      break;
    case 'New Employee':
      browser.url(newEmployee.url);
      break;
    case 'Listing Employees':
      browser.url(employeeLlist.url);
      break;
    default:
      console.log(`Invalid page ${page}`);
  }
};
