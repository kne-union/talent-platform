import { createWithRemoteLoader } from '@kne/remote-loader';

const Position = createWithRemoteLoader({
  modules: ['components-talent-platform:Position@PositionList']
})(({ remoteModules }) => {
  const [PositionList] = remoteModules;

  return <PositionList />;
});

export default Position;
