import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Sidebar from './components/Sidebar';
import AddVideos from './pages/AddVideos';
import AddProducts from './pages/AddProducts';
import ManagePartners from './pages/ManagePartners';
import Login from './pages/Login';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' }, // Blue
    secondary: { main: '#4caf50' }, // Green
    background: { default: '#f5f5f5' }, // Light background color
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Sidebar />}>
          <Route path="add-videos" element={<AddVideos />} />
          <Route path="add-products" element={<AddProducts />} />
          <Route path="manage-partners" element={<ManagePartners />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
