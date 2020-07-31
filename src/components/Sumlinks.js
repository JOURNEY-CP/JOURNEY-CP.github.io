import React, { Component } from 'react';
import sums from '../data/august-2020.json';
import '../CSS/layout.css'

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
            return  <a className="problems-list-link" href={sum}>problem{i+1}</a>
        })
   )

    sumSection = () =>(
        [...Array(this.state.currdate.getDate()).keys()].reverse().map(date=>(
            <div className="problems-list-single-day">
                <div className="problems-list-date">
                    {this.state.months[this.state.currdate.getMonth()]} {date+1},{this.state.currdate.getFullYear()}    
                </div>
                <div className="problems-list-links">
                    <this.singleDaySums date={date+1} />
                </div>
            </div>
        ))
    )
  
    render(){
        return(
            <div className="problems-list-main">
                <this.sumSection/>
            </div>      
        )
    }
}