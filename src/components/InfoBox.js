import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './InfoBox.css';

const InfoBox = ({ title, cases, category }) => {
    return (
        <Card className="infobox">
            <CardContent className="Card-Content" style={{backgroundColor: `${category}`}}>
                <Typography
                    className="infoBox_title"
                    color="textSecondary">
                    <strong>{title} </strong>
                </Typography>
                <h2 className="infoBox_cases">{cases}</h2>
            </CardContent>
        </Card>
    )
}

export default InfoBox;