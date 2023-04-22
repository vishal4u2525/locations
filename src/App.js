import './App.css';
import React, { useState, useEffect } from 'react';
import Locations from './components/LocationList/Locations';
import locationsData from './hotel.json';
const App = () => {
  return (
    <div className="uk-container">
      <h2 className="location-section-title">EXPLORE OUR RESORTS</h2>

      <Locations data={locationsData} />
    </div>
  );
};
export default App;
