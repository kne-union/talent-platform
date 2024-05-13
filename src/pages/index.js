import loadable from '@loadable/component';
import { Spin } from 'antd';

const loadableWithProps = func =>
  loadable(func, {
    fallback: <Spin style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }} />
  });

const pages = {
  Home: loadableWithProps(() => import('./Home')),
  Position: loadableWithProps(() => import('./Position')),
  PositionDetail: loadableWithProps(() => import('./PositionDetail')),
  Company: loadableWithProps(() => import('./Company')),
  CompanyDetail: loadableWithProps(() => import('./CompanyDetail')),
  Ats: loadableWithProps(() => import('./Ats')),
  Resume: loadableWithProps(() => import('./Resume')),
  Error: loadableWithProps(() => import('./Error')),
  NotFound: loadableWithProps(() => import('./NotFound'))
};

export default pages;
