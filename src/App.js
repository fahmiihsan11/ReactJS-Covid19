import './App.css';
import NavApp from './components/NavApp';
import { FormControl, MenuItem, Select, InputLabel, Card, CardContent} from '@mui/material';
import React, { useState, useEffect } from 'react';
import InfoBox from './components/InfoBox';
import Table from './components/Table'
import "leaflet/dist/leaflet.css";
import numeral from 'numeral';


function App() {
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
              <Select variant="outlined" value={country} onChange={onCountryChange}>
                <MenuItem value="worldwide">Country</MenuItem>
                {countries.map(country => <MenuItem value={country.value}>{country.name}</MenuItem>)}
              </Select>          
          </FormControl>
        </div>
        <div className="app_stats">
          <InfoBox           
            title="Cases" 
            cases={countryInfo.todayCases} 
            total={numeral(countryInfo.cases).format("0,0")}
          />
          <InfoBox    
            title="Recovered"   
            cases={countryInfo.todayRecovered} 
            total={countryInfo.recovered}
          />
          <InfoBox 
            title="Deaths"      
            cases={countryInfo.todayDeaths} 
            total={countryInfo.deaths}
          />
        </div>
      </div>
      <div className="app_right">
        <Card>
          <CardContent>         
            <h3>Total Cases by Country</h3>
            <Table countries={tableData}/>
          </CardContent>
        </Card>
      </div>
    </div>
    </div>
  );
}

export default App;
