import React from 'react';
import { Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import '../App.css'

const About = () => {
    return(
        <Box class="myinfo">
            <Box class="photo"></Box>
            <IconButton size="large" style={{marginBottom: '5px', marginTop: '40px'}} href="https://github.com/fahmiihsan11">
                <GitHubIcon fontSize='large' />
            </IconButton>
            <Typography variant='h6'style={{marginBottom: '10px'}} >
                Development Tools : 
            </Typography>
            <Typography variant="h7" >
                ReactJS & Material UI
            </Typography>
        </Box>     
    )
}

export default About;
