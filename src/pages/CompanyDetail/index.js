import { createWithRemoteLoader } from '@kne/remote-loader';

const CompanyDetail = createWithRemoteLoader({
  modules: ['components-talent-platform:Company@Detail']
})(({ remoteModules }) => {
  const [Detail] = remoteModules;

  return <Detail />;
});

export default CompanyDetail;
