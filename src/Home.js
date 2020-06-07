import React, { Component } from 'react';
import Message from './Message';
import './Home.css'

class Home extends Component{
    render() {
        return (
            <div className="Home">
                <Message><h1>This is a Vending Machine</h1></Message>
                <img src="https://i.imgur.com/Xm4qsxF.jpg" alt="Vending Machine"/>
            </div>
        );
    }
}

export default Home;