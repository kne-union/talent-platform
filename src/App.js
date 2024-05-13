import { Routes, Route, Navigate } from 'react-router-dom';
import pages from './pages';
import MainLayout from './MainLayout';
import './index.scss';

const { Home, Position, Error, NotFound } = pages;
const App = ({ globalPreset }) => {
  return (<Routes>
      <Route
        path="/"
        element={<MainLayout
          preset={globalPreset}
          themeToken={globalPreset.themeToken}
          paths={[{
            title: '职位', key: 'position', path: '/position'
          }]}
        />}
      >
        <Route index element={<Home />} />
        <Route path="position" element={<Position />} />
        <Route path="error" element={<Error />} />
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="404" />} />
      </Route>
    </Routes>);
};

export default App;
