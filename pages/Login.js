class Login {
    get url() {
        return "/users/sign_in";
    }

    getEmailInput() {
        return $('#user_email');
    }

    getPasswordInput() {
        return $('#user_password');
    }

    getSignInButton() {
        return $('.submit');
    }

    signIn(email, password) {
        this.getEmailInput.waitForDisplayed(5000);
        this.getEmailInput.setValue(email);
        this.getPasswordInput.setValue(password);
        this.getSignInButton.click();
    }
}

module.exports = new Login();