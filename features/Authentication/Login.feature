Feature: Login

    As a user, I want to be able to login to my account to view account details
    Scenario Outline: Attempting to login with valid credentials
      Given the browser is at the "Login" page
      When the user tries to use valid credentials "<email>" to login
      Then the page should contain the site logo
      And the page should contain the information of the user logged in
      And the page should contain a banner with the message "Signed in successfully."

    Examples:
        | email                               |
        | gap-automation-test@mailinator.com  |