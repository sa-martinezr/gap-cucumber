import { Then } from 'cucumber';
import checkSiteLogo from "../../support/assertions/checkSiteLogo";

Then('the page should contain the site logo', () => {
    checkSiteLogo();
});