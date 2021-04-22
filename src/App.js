import React from 'react';
import { ScrollTo, ScrollArea } from "react-scroll-to";
import './App.css';
import Sumlinks from './components/Sumlinks';
import Team from './components/Team/Team';
import TodaySums from './components/TodaySums';

function App() {
  if(window.location.pathname==='/team'){
    return <Team/>
  }
  return (
    <div className="App">
      <TodaySums/>
      <Sumlinks />

      <ScrollTo>
            {
              (scroll) => (
                      <ScrollArea style={{ height: 50 }}>
                        <button onClick={() => 
                          window.scrollTo(0, 0)}>
                          Scroll within this container
                        </button>
                      </ScrollArea>
                  )
                }
        </ScrollTo>
    </div>
    
  );
}

export default App;