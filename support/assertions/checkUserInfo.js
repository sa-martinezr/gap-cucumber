import home from "../../pages/Home";
import assert from 'assert';

export default userName => {
    assert(
        home.userInfo.getText().includes(userName),
        "The user name is not present on the page"
    );
}
