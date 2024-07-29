import React from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Typography, Box, Card } from '@mui/material';
import '../styles/LoginPage.css';
import ConnexLogo from '../images/logo/ConnexIT.png';

const LoginPage = () => {
  return (
    <Box className="login-page">
      <Card className="login-form-container">
      <div className="logo-boxLogin">
          <img src={ConnexLogo} alt="Connex Logo" className="logo" />
        </div>
        <Typography variant="h4" className="welcome-text">
          Connex Marketing
        </Typography>
        <form className="login-form">
          <TextField
            id="email"
            label="Email address"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <FormControlLabel
            control={<Checkbox name="rememberMe" color="primary" />}
            label="Remember me"
          />
          <Box className="buttons">
            <Button variant="contained" color="primary" className="login-button">
              Login
            </Button>
           
          </Box>
          <Typography variant="body2" className="forgot-password">
            Forgot password?
          </Typography>
        </form>
        <Box className="social-media">
          <Typography variant="body2">FOLLOW</Typography>
          <Box className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </Box>
        </Box>
      </Card>
      <Box className="background-image"></Box>
    </Box>
  );
};

export default LoginPage;
