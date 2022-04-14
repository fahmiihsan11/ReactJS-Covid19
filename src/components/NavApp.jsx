import React from 'react';
import { AppBar, Typography } from '@mui/material';
import './NavApp.css';

const NavApp = () => {
    return (
        <AppBar position="static" style={{background: '#32a852'}}>
            <div className="nav-content">
                <Typography > 
                    <h2>Home</h2>
                </Typography>
            </div> 
        </AppBar>
  
    )
}

export default NavApp;