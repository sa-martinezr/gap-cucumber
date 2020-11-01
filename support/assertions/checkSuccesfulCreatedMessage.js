import showEmployee from '../../pages/ShowEmployee';
import assert from 'assert';

export default message => {
  assert(
    showEmployee.successfulCreatedMessage.getText() === message,
    `The message "${message}" is not present in the page`
  );
};
