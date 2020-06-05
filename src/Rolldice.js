import React, { Component } from 'react'
import Die from './Die';
import "./Rolldice.css";

class Rolldice extends Component{
    
    static defaultProps = {
        faces : ["one","two","three","four","five","six"]
    }
    
    constructor(props){
        super(props);
        this.state = {
            die1:"one",
            die2:"one",
            rolling:false
        }
        this.rollDice = this.rollDice.bind(this);
    }

    rollDice(e){
        const faces = this.props.faces;
        const die1 = faces[Math.floor(Math.random()*this.props.faces.length)];
        const die2 = faces[Math.floor(Math.random()*this.props.faces.length)];
        this.setState(st => {
            return {die1,die2,rolling:true};
        });
        setTimeout(() => {
            this.setState({rolling:false})
        },1000);
    }

    render(){
        const rolling = this.state.rolling;
        return (
            <div className="Rolldice">
                <div className="Rolldice-dice-container">
                    <Die face={this.state.die1} rolling={rolling}/>
                    <Die face={this.state.die2} rolling={rolling}/>
                </div>
                <button onClick={this.rollDice} disabled={rolling}>{rolling?"Rolling":"Roll Dice"}</button>
            </div>
        );
    }
}

export default Rolldice;