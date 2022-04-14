import React from 'react';
import { FormControl, MenuItem, Select, InputLabel, Card, CardContent, Box, Typography, Grid} from '@mui/material';
import { useState, useEffect } from 'react';
import InfoBox from '../components/InfoBox';
import InfoBoxTotal from '../components/InfoBoxTotal';
import Table from '../components/Table'
import numeral from 'numeral';

const Home = () => {
    const [ countries, setCountries ] = useState([]);
    const [ country, setCountry ] = useState('worldwide');
    const [ countryInfo, setCountryInfo ] = useState({});
    const [ tableData, setTableData ] = useState([]);
  
  
    const sortData = data => {
      const sortedData = [...data]
      return sortedData.sort((high, low) => high.cases > low.cases ? -1 : 1)
    }
    
    useEffect(() => {
      const getData = async () =>  {
        await fetch("https://disease.sh/v3/covid-19/countries")
          .then(response => response.json())
          .then(data => {
            const countries = data.map(item => (
               {
                 name: item.country,
                 value: item.countryInfo.iso2
               }
             ))
             const sortedData = sortData(data)
             setTableData(sortedData)
             setCountries(countries)
          })
      }
      getData()
    }, [])
  
    useEffect(() => {
      fetch('https://disease.sh/v3/covid-19/all')
        .then(response => response.json())
        .then(data => setCountryInfo(data))
    }, [])
  
  
    const onCountryChange = async e => {
        const url = e.target.value === 'worldwide' ? 
        'https://disease.sh/v3/covid-19/all' : 
        `https://disease.sh/v3/covid-19/countries/${e.target.value}`
      await fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
          setCountry(e.target.value)
          setCountryInfo(data)
        })
    }
    return(
            <Box className="App">
                <Box className="mainSection">   
                    <Box className="mainHeader">
                        <h2>COVID-19 Statistic</h2>
                        <FormControl fullwidth style={{backgroundColor: 'seaShell', borderRadius: '5px'}}>
                            <InputLabel id="label"></InputLabel>
                            <Select variant="outlined" value={country} onChange={onCountryChange}>
                                <MenuItem value="worldwide">All Countries</MenuItem>
                                {countries.map(country => <MenuItem value={country.value}>{country.name}</MenuItem>)}
                            </Select>          
                        </FormControl>
                    </Box>
                    <Box className='box-width'>
                        <Box className='card-info'>
                            <Typography variant="h6"  >Today's Data : </Typography>
                        </Box>
                        <Box className="app_stats">
                            <InfoBox           
                                title="Cases" 
                                cases={countryInfo.todayCases} 
                                category="orange"
                            />
                            <InfoBox    
                                title="Recovered"   
                                cases={countryInfo.todayRecovered}  
                                category="limeGreen"    
                            />
                            <InfoBox 
                                title="Deaths"      
                                cases={countryInfo.todayDeaths}
                                category="red"     
                            />
                        </Box>
                    </Box>
                    <Box className='box-width'>
                        <Box className='card-info'>
                            <Typography variant="h6"  >Overall Data: </Typography>
                        </Box>
                        <Box className="app_statsTotal">
                            <InfoBoxTotal        
                                title="Total Cases"    
                                total={numeral(countryInfo.cases).format("0,0")}
                                category="orange"
                            />
                            <InfoBoxTotal   
                                title="Total Recovered"   
                                total={numeral(countryInfo.recovered).format("0,0")}
                                category="limeGreen"
                            />
                            <InfoBoxTotal
                                title="Total Deaths"      
                                total={numeral(countryInfo.deaths).format("0,0")}
                                category="red"
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className="mainList">
                    <Card style={{backgroundColor: 'antiquewhite'}}>
                    <CardContent>        
                        <Typography varian="h1" sx={{ flexGrow: 1 }} style={{fontWeight: 'bold'}}>
                            List of Total Cases by Country:
                        </Typography>        
                        <Table countries={tableData}/>
                    </CardContent>
                    </Card>
                </Box>
            </Box>
    )
}

export default Home;