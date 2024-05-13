import { createWithRemoteLoader } from '@kne/remote-loader';

const Company = createWithRemoteLoader({
  modules: ['components-talent-platform:Company@List']
})(({ remoteModules }) => {
  const [CompanyList] = remoteModules;

  return <CompanyList />;
});

export default Company;
