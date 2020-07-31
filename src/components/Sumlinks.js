import React, { Component } from 'react';
import sums from '../data/august-2020.json';

export default class Sumlinks extends Component{
    constructor(props) {
        super(props);
        this.state={
            currdate:new Date(),
            months:["January","February","March","April","May","June","July","August","September","October","November","December"]
            
            
          }

    }
   singleDaySums=props=>(
    sums[props.date].map((sum,i)=>{
      return <a href={sum}>problem{i+1}</a>
   },0)
   )


   sumSection = () =>(
   
    [...Array(this.state.currdate.getDate()).keys()].map(date=>{

    return <div>
      <div className="three columns header-col">
          <h1><span>{this.state.months[this.state.currdate.getMonth()]} {date+1},{this.state.currdate.getFullYear()}</span></h1>
      </div>
      <div className="nine columns main-col">
            <div className="row item">
                <div className="twelve columns">
                 <this.singleDaySums date={this.state.currdate.getDate()} />
                 {/* sums[date].map((sum,i)=>{
                   return  <a href={sum}>problem{i+1}</a>
                  },0) */}
                </div>
            </div>
      </div>

    </div>
     
    
   })
   )
      
    
    render(){
        return(
            <div className="links">
                <this.sumSection />
            </div>
        )
    }



}