import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CoronavirusTwoToneIcon from '@mui/icons-material/CoronavirusTwoTone';
import './NavApp.css';
import { Link } from "react-router-dom";

const NavApp = () => {
    
    return (
        <AppBar position="static" style={{background: '#32a852'}}>
          <Toolbar>
            <CoronavirusTwoToneIcon sx={{ fontSize: 50, flexGrow: 0.0125 }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link className="textAbout" to="home">Covid-19</Link>
            </Typography>
            <Typography component="div"  >
               <Link className="textAbout" to="about">About</Link>
            </Typography> 
            
          </Toolbar>
        </AppBar>
    )
}

export default NavApp;
