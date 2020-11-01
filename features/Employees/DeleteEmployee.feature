Feature: Delete Employee

    As a user, I want to be able to delete an employee and don't see their information on the employees page
    Scenario Outline: Delete an employee
        Given the user "<email>" signed in
        And the browser is at the "Listing Employees" page
        When the user click the delete button on the record of the existing employee with the following data:
          |First name | Last name | Email                | Identification | Leader name     | Start working on |
          |James      | Smith     | jamessmith2@gap.com   | 1234567890     | Sergio Martínez | 20-01-2015       |
        Then the employee information is not present on the page
          |First name | Last name | Email                | Identification | Leader name     | Start working on |
          |James      | Smith     | jamessmith2@gap.com   | 1234567890     | Sergio Martínez | 20-01-2015       |
Examples:
  | email                               |
  | gap-automation-test@mailinator.com  |
