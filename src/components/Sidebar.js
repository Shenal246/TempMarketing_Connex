import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Box } from '@mui/material';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AddBoxIcon from '@mui/icons-material/AddBox';
import GroupIcon from '@mui/icons-material/Group';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar-container">
      <Drawer
        variant="permanent"
        className="drawer"
      >
        <div className="logo-box">
          <img src="/logo/ConnexIT.png" alt="Connex Logo" className="logo" />
        </div>
        {/* <Toolbar /> */}
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem button component={Link} to="/add-videos" selected={location.pathname === '/add-videos'}>
              <ListItemIcon><VideoLibraryIcon className="icon" /></ListItemIcon>
              <ListItemText primary="Add Videos" />
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
      <Box component="main" className="main-content">
        <Toolbar />
        <Outlet />
      </Box>
    </div>
  );
};

export default Sidebar;
