import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Message from './Message';
import './Soda.css';

class Soda extends Component{
    render() {
        return (
            <div className="Soda">
                <NavLink exact to="/">Go back</NavLink> 
                <Message><h1>Soda</h1></Message>
                <img src="https://i.imgur.com/e4JEuCe.jpg" alt="Soda"/>
            </div>
        );
    }
}

export default Soda;