import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import sums from './data/august-2020.json';
class App extends Component {
 
  state={
    currdate:new Date(),
    months:["January","February","March","April","May","June","July","August","September","October","November","December"],
    count:1,
    
  }

   todaysums=()=>(
    sums[this.state.count++].map((sum,i)=>{
      return <a href={sum}>problem{i+1}</a>
   },0)
   )


   sumSection = () =>(
   
    [...Array(this.state.currdate.getDate().keys())].map(date=>{
    <div>

      <div className="three columns header-col">
          <h1><span>{this.state.months[this.state.currdate.getMonth()]} {date+1},{this.state.currdate.getFullYear()}</span></h1>
      </div>
      <div className="nine columns main-col">
            <div className="row item">
                <div className="twelve columns">
                 <this.todaysums />
                 {/* sums[date].map((sum,i)=>{
                   return  <a href={sum}>problem{i+1}</a>
                  },0) */}
                </div>
            </div>
      </div>

    </div>
     
    
   })
   )

  render() {
    
    return (
      <div className="App">
         
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Welcome to 30 Days of Code</h2>
            <span>{this.state.months[this.state.currdate.getMonth()]} {this.state.currdate.getDate()},{this.state.currdate.getFullYear()}</span>
        </div>
        <div className="App-intro">
          <this.sumSection />
            
        </div>
      </div>
    );
  }
}

export default App;
