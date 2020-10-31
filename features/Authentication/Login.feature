Feature: Login

    As a user, I want to be able to sign in to my account to view account details
    Scenario Outline: Attempting to sign in with valid credentials
      Given the browser is at the "Login" page
      When the user tries to use valid credentials "<email>" to sign in
      Then the page should contain the site logo
      And the page should contain the name of the user signed in which is "<name>"
      And the page should contain a banner with the message "Signed in successfully."

    Examples:
        | email                               | name |
        | gap-automation-test@mailinator.com  | gap  |