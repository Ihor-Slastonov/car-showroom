import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import SharedLayout from '../SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const VehiclePage = lazy(() => import('../../pages/VehiclePage/VehiclePage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="vehicles/:vehicleId" element={<VehiclePage />} />
      </Route>
    </Routes>
  );
}

export default App;
