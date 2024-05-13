import { createWithRemoteLoader } from '@kne/remote-loader';

const Position = createWithRemoteLoader({
  modules: ['components-talent-platform:Position@List']
})(({ remoteModules }) => {
  const [PositionList] = remoteModules;

  return <PositionList />;
});

export default Position;
