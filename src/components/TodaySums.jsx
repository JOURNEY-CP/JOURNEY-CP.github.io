import React from 'react';
import sums from '../data/august-2020.json';
import './today-sums.css';

export default class TodaySums extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            currDate:new Date(),
            months:["January","February","March","April","May","June","July","August","September","October","November","December"]         
          }
    }
    getCurrentMonth=()=>{
        return this.state.months[this.state.currDate.getMonth()];
    }

    singleDaySums=props=>(
        sums[props.date].map((sum,i)=>{
            return <a href={sum}>problem{i+1}</a>
        },0)
    )

    render(){
        const date=this.state.currDate.getDate();
        return(
            <div className="today-sums-main">
                <div className="today-sums-head">
                    <div className="today-sums-head-item">
                        <div className="today-sums-date-month">
                            {date}  {this.getCurrentMonth()}
                        </div>
                        <div className="today-sums-year">
                            {this.state.currDate.getFullYear()}
                        </div>
                    </div> 
                </div>
                <div className="today-sums-links">
                    { 
                        sums[date].map((sum,i)=>{
                            return <a className="today-sums-link" href={sum}>problem{i+1}</a>
                        },0)
                    }
                </div>
            </div>
        )
    }
}