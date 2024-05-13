import { createWithRemoteLoader } from '@kne/remote-loader';

const PositionDetail = createWithRemoteLoader({
  modules: ['components-talent-platform:Position@Detail']
})(({ remoteModules }) => {
  const [Detail] = remoteModules;

  return <Detail />;
});

export default PositionDetail;
