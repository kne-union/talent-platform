import * as position from './position';
import * as ats from './ats';
import * as company from './company';
import * as resume from './resume';

const apis = {
  position,
  ats,
  company,
  resume,
  oss: {
    loader: () => {
      return new Promise(resolve => {
        resolve('');
      });
    }
  }
};

export default apis;
