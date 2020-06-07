import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Message from './Message';
import './Chips.css';

class Chips extends Component{
    render() {
        return (
            <div className="Chips"> 
                <NavLink exact to="/">Go back</NavLink> 
                <Message><h1>Chips</h1></Message>
                <img src="https://i.imgur.com/82KeE0v.png" alt="Chips"/>
            </div>
        );
    }
}

export default Chips;