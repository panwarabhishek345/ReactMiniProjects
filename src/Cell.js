import React, { Component } from 'react';
import "./Cell.css";

class Cell extends Component{
    
    constructor(props){
        super(props);
        this.handleToggleCell = this.handleToggleCell.bind(this);
    }

    handleToggleCell(evt){
        this.props.toggleCell(this.props.row,this.props.column);
    }

    render(){
        const isLit = this.props.isLit;
        return <div className={`Cell Cell-${isLit?"light":"dark"}`} onClick={this.handleToggleCell}></div>;
    }
}

export default Cell;