import { Then } from 'cucumber';
import checkSiteLogo from "../../support/assertions/checkSiteLogo";
import checkUserInfo from "../../support/assertions/checkUserInfo";
import checkSuccesfulSignedInMessage from "../../support/assertions/checkSuccesfulSignedInMessage";

Then('the page should contain the site logo', () => {
    checkSiteLogo();
});

Then('the page should contain the {string} of the user signed in', (userName) => {
    checkUserInfo(userName);
});

Then('the page should contain a banner with the message {string}', message => {
    checkSuccesfulSignedInMessage(message);
})