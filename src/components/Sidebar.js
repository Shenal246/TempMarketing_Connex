import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Box } from '@mui/material';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AddBoxIcon from '@mui/icons-material/AddBox';
import GroupIcon from '@mui/icons-material/Group';
import '../styles/Sidebar.css';
import ConnexLogo from '../images/logo/ConnexIT.png';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar-container">
      <Drawer
        variant="permanent"
        className="drawer"
      >
        <div className="logo-box">
          <img src={ConnexLogo} alt="Connex Logo" className="logo" />
        </div>
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem button component={Link} to="/video-management" selected={location.pathname.startsWith('/video-management')}>
              <ListItemIcon><VideoLibraryIcon className="icon" /></ListItemIcon>
              <ListItemText primary="Video Management" />
            </ListItem>
            <ListItem button component={Link} to="/add-products" selected={location.pathname === '/add-products'}>
              <ListItemIcon><AddBoxIcon className="icon" /></ListItemIcon>
              <ListItemText primary="Add Products" />
            </ListItem>
            <ListItem button component={Link} to="/manage-partners" selected={location.pathname === '/manage-partners'}>
              <ListItemIcon><GroupIcon className="icon" /></ListItemIcon>
              <ListItemText primary="Manage Partners" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <main className="content">
        <Toolbar />
        <Outlet />
      </main>
    </div>
  );
};

export default Sidebar;
