import login from "../../pages/Login";
import newEmployee from "../../pages/NewEmployee";

export default page => {
    switch(page) {
        case "Login":
            browser.url(login.url);
            break;
        case "New Employee":
            browser.url(newEmployee.url);
        default:
            console.log(`Invalid page ${page}`);
    }
};