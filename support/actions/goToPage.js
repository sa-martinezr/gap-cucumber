import login from "../../pages/Login";

export default page => {
    switch(page) {
        case "Login":
            browser.url(login.url);
            break;
        default:
            console.log(`Invalid page ${page}`);
    }
};