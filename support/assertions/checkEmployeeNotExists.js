/* eslint-disable no-undef */
import employeeList from '../../pages/EmployeeList';
import assert from 'assert';

export default employee => {
  browser.pause(1000);
  assert(employeeList.findEmployee(employee) < 0,
    'The employee is present on the page'
  );
};
