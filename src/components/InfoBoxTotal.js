import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import './InfoBox.css';

const InfoBoxTotal = ({ title,  total, category }) => {
    return (
        <Box container>
            <Card className="infobox" >
                <CardContent className="Card-Content" style={{backgroundColor: `${category}`}}>
                    <Typography
                        className="infoBox_title"
                        color="textSecondary">
                        <strong>{title} </strong>
                    </Typography>
                    <h2 className="infoBox_cases">{total}</h2>
                </CardContent>
            </Card>
        </Box>
    )
}

export default InfoBoxTotal;