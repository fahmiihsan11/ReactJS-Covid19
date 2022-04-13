import './App.css';
import NavApp from './components/NavApp';
import { FormControl, MenuItem, Select, Button, InputLabel, Card, CardContent} from '@mui/material';
import React, { useState, useEffect } from 'react';
import InfoBox from './components/InfoBox';
import Map from './components/Map';
import Table from './components/Table'

function App() {
  const [ countries, setCountries ] = useState([]);
  const [ country, setCountry ] = useState('worldwide');
  const [ countryInfo, setCountryInfo ] = useState({});
  const [ tableData, setTableData ] = useState([]);
  
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
           setTableData(data)
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
    const url = e.target.value === 'worldwide' ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${e.target.value}`
    
    await fetch(url)
      .then(response => response.json())
      .then(data => {
        setCountry(e.target.value)
        setCountryInfo(data)
      })
  }

  return (
    <div>
      <NavApp />
    <div className="App">
      <div className="app_left">   
        <div className="app_header">
          <h2>COVID-19 Statistic</h2>
          <FormControl fullwidth>
            <InputLabel id="label"></InputLabel>
              <Select color="primary" variant="outlined" value={country} onChange={onCountryChange}>
                <MenuItem value="worldwide">Country</MenuItem>
                {countries.map(country => <MenuItem value={country.value}>{country.name}</MenuItem>)}
              </Select>          
          </FormControl>
        </div>
        <div className="app_stats">
          <InfoBox title="Total Cases" cases={countryInfo.todayCases} total={countryInfo.cases}/>
          <InfoBox title="Total Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered}/>
          <InfoBox title="Total Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths}/>
        </div>
        <Map />
      </div>
      <Card className="app_right">
        <CardContent>         
          <h3>Live Cases by Country</h3>
          <Table countries={tableData}/>
          <h3>World wide new cases</h3>    
        </CardContent>
      </Card> 
    </div>
    </div>
  );
}

export default App;
