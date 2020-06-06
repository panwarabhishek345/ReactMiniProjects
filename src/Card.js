import React, { Component } from 'react';
import "./Card.css";

class Card extends Component{

    constructor(props){
        super(props);
        const xpos = Math.floor(Math.random()*40)+20;
        const ypos = Math.floor(Math.random()*40)+20;
        const deg = Math.floor(Math.random()*40)+20;
        this._transform = `translate(${xpos}px,${ypos}px) rotate(${deg}deg)`;
    }
    render(){
        
        return (
            <img  className="Card" style={{transform:this._transform}} src={this.props.image} alt={this.props.name}/>
        );
    }
}

export default Card;