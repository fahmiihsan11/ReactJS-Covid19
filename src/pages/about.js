import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Box, Typography, Grid } from '@mui/material/'
import '../App.css'
import { ClassNames } from '@emotion/react';

const About = () => {
    return(
       <Box sx={{ width: 'auto'}} style={{maxwidth: 100}}>     
               <Grid justify="center" spacing={1}>
                    <Grid item>
                        <Card style={{maxwidth: 200, margin: 15}}>
                            <CardActionArea>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItem: "center",
                                        justifyContent: "center"
                                    }}
                                >
                                    <CardMedia
                                        style={{
                                            width: "auto",
                                            maxxHeight: "200px"
                                        }}
                                        component="img"
                                        image={require('../photo/avatar.jpg')}
                                  />
                                  <CardContent>
                                    <Typography gutterBottom variant="headline" component="h2">

                                    </Typography>
                                  </CardContent>
                                </div>
                            </CardActionArea>
                        </Card>
                    </Grid>
               </Grid>
           
       </Box>
    )
}

export default About;