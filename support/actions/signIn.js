import login from '../../pages/Login';
import credentials from '../../data/credentials';

export default email => {
  const password = credentials.find(creds => creds.email === email).password;
  login.signIn(email, password);
};
