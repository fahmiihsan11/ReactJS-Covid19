import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const InfoBox = ({ title, cases, total }) => {
    return (
        <Card className="infobox">
            <CardContent>
                <Typography
                    className="infoBox_title"
                    color="textSecondary">
                    {title} typography (1)
                </Typography>
                <h2 className="infoBox_cases">{cases} (h2)</h2>
                <Typography
                    className="infoBox_total"
                    color="secondary">
                    {total} typography (2)
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox;