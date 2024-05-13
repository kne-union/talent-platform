import { Routes, Route, Navigate } from 'react-router-dom';
import pages from './pages';
import MainLayout from './MainLayout';
import './index.scss';

const { Home, Position, PositionDetail, Company, CompanyDetail, Ats, Resume, Error, NotFound } = pages;

const App = ({ globalPreset }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout
            preset={globalPreset}
            themeToken={globalPreset.themeToken}
            paths={[
              { title: '公司', key: 'company', path: '/company' },
              { title: '职位', key: 'position', path: '/position' },
              { title: '招聘流程', key: 'ats', path: '/ats' },
              { title: '人才库', key: 'resume', path: '/resume' }
            ]}
          />
        }
      >
        <Route index element={<Home />} />
        <Route path="company" element={<Company />} />
        <Route path="company/:id" element={<CompanyDetail />} />
        <Route path="position" element={<Position />} />
        <Route path="position/:id" element={<PositionDetail />} />
        <Route path="ats" element={<Ats />} />
        <Route path="resume" element={<Resume />} />
        <Route path="error" element={<Error />} />
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="404" />} />
      </Route>
    </Routes>
  );
};

export default App;
