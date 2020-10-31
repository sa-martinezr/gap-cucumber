import { Given } from 'cucumber';
import signIn from "../../support/actions/signIn";
import goToPage from "../../support/actions/goToPage";

Given('the user {string} signed in', email => {
    goToPage("Login");
    signIn(email);
});

