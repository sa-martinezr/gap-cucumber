import home from '../../pages/Home';
import assert from 'assert';

export default () => {
  assert(
    home.siteLogo.getAttribute('src') === `${process.env.BASE_URL}/assets/site_title-34b060c1996fa36129429fcfb794655a.png`,
    'The site logo is not the original one'
  );
};
