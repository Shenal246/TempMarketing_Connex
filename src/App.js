import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Sidebar from './components/Sidebar';
import VideoManagement from './pages/VideoManagement';
import ManageProducts from './pages/ManageProducts';
import ManagePartners from './pages/ManagePartners';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/*"
          element={<Sidebar />}
        >
          <Route path="video-management/*" element={<VideoManagement />} />
          <Route path="add-products" element={<ManageProducts />} />
          <Route path="manage-partners" element={<ManagePartners />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
