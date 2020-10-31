class Home {
    get url() {
        return "/";
    }

    get siteLogo() {
        return $('#logo_text > h1:nth-child(1) > a:nth-child(1) > img:nth-child(1)');
    }

    get userInfo() {
        return $('#user_information > span:nth-child(1)');
    }
}

module.exports = new Home();
