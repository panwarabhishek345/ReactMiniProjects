import React, { Component } from 'react'
import "./NumberItem.css";

class NumberItem extends Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(evt){
        this.props.remove(this.props.value);
    }

    render() {
        return (
            <div className="NumberItem">
                <h2>{this.props.value}</h2>
                <button onClick={this.handleClick}>X</button>
            </div>
        );
    }
}

export default NumberItem;