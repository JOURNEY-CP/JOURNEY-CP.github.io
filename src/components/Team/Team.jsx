import React, { Component } from 'react'
import teams from '../../data/team.json';
import './team.css';

export default class Team extends Component {
    render() {
        return (
            <div className="team">
            {teams.map(user=>(
                <div key={user}
                    className="badge-base LI-profile-badge team-user" 
                    data-locale="en_US" 
                    data-size="medium" 
                    data-theme="dark" 
                    data-type="VERTICAL" 
                    data-vanity={user} 
                    data-version="v1"
                    />
            ))}
            </div>
        )
    }
}
