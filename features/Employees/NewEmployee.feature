Feature: New Employee

    As a user, I want to be able to create an employee and see their information on the employees page

    Scenario Outline: Create a valid employee
        Given the user "<email>" signed in
        And the browser is at the "New Employee" page
        When the employee is created with following data:
          | First name | Last name | Email                | Identification | Leader name     | Start working on |
          | James      | Smith     | jamessmith@gap.com   | 1234567890     | Sergio Martínez | 21-01-2015       |
        Then the page should contain the message "Employee was successfully created."
        And the new employee information is visible at the "Listing Employees" page with the following data:
          | First name | Last name | Email                | Identification | Leader name     | Start working on |
          | James      | Smith     | jamessmith@gap.com   | 1234567890     | Sergio Martínez | 21-01-2015       |

Examples:
  | email                               |
  | gap-automation-test@mailinator.com  |
