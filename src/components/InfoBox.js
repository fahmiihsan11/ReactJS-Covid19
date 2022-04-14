import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './InfoBox.css';
const InfoBox = ({ title, cases, total }) => {
    return (
        <Card className="infobox" color="primary">
            <CardContent className="Card-Content">
                <Typography
                    className="infoBox_title"
                    color="textSecondary">
                    <strong>{title} </strong>
                </Typography>
                <h2 className="infoBox_cases">{cases}</h2>
                <Typography
                    className="infoBox_total"
                    color="secondary">
                    
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox;