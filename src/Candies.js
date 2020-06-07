import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Message from './Message';
import './Candies.css';

class Candies extends Component{
    render() {
        return (
            <div className="Candies">
                <NavLink exact to="/">Go back</NavLink> 
                <Message><h1>Candies</h1></Message>
                <img src="https://i.imgur.com/jjwNVpc.jpg" alt="Candies"/>
            </div>
        );
    }
}

export default Candies;