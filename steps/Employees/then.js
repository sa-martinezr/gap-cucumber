import { Then } from 'cucumber';
import checkSuccessfulCreatedMessage from "../../support/assertions/checkSuccesfulCreatedMessage";

Then('the page should contain the message {string}', message => {
    checkSuccessfulCreatedMessage(message);
});
