import React from 'react';
import { AppBar, Typography } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// import { Link } from 'react-router-dom';

const NavApp = () => {
    return (
        <AppBar position="static" color="primary">
            <Typography style={{flexGrow: 1}} > 
                <h2>Home</h2>
            </Typography>
        </AppBar>
    )
}

export default NavApp;