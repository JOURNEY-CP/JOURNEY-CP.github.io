import React from 'react';
import './App.css';
import Sumlinks from './components/Sumlinks';
import TodaySums from './components/TodaySums';
function App() {
  return (
    <div className="App">
      <TodaySums/>
      <Sumlinks />
    </div>
  );
}

export default App;