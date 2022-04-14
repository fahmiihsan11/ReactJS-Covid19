import './App.css';
import NavApp from './components/NavApp';
import { FormControl, MenuItem, Select, InputLabel, Card, CardContent} from '@mui/material';
import React, { useState, useEffect } from 'react';
import InfoBox from './components/InfoBox';
import Table from './components/Table'
import numeral from 'numeral';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from  './pages/About'
import Home from './pages/Home'

function App() {
  return ( 
    <Router>
      <NavApp />   
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
