import React, { Component } from 'react'
import "./Die.css";

class Die extends Component{
    
    render(){
        const rolling = this.props.rolling;
        let classes = `Die fas fa-dice-${this.props.face}`;
        if(rolling)
            classes += " shaking";
        return (
            <i className={classes}></i>
        );
    }
}

export default Die;