import home from '../../pages/Home';
import assert from 'assert';

export default message => {
  assert(
    home.successfulSignedInMessage.getText() === message,
    `The message "${message}" is not present in the page`
  );
};
