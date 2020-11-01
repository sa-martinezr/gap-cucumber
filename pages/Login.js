/* eslint-disable no-undef */
class Login {
  get url () {
    return '/users/sign_in';
  }

  get emailInput () {
    return $('#user_email');
  }

  get passwordInput () {
    return $('#user_password');
  }

  get signInButton () {
    return $('.submit');
  }

  signIn (email, password) {
    this.emailInput.waitForDisplayed(5000);
    this.emailInput.setValue(email);
    this.passwordInput.setValue(password);
    this.signInButton.click();
  }
}

module.exports = new Login();
