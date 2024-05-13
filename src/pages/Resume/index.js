import { createWithRemoteLoader } from '@kne/remote-loader';

const Resume = createWithRemoteLoader({
  modules: ['components-talent-platform:Resume@List']
})(({ remoteModules }) => {
  const [ResumeList] = remoteModules;

  return <ResumeList />;
});

export default Resume;
