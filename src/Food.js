import React, { Component } from 'react'
import './Food.css';

const BASE_URL = "https://source.unsplash.com/1600x900/?";
class Food extends Component{
    render() {
        const name = this.props.match.params.name;
        return (
            <div className="Food">
                <h1>{name}</h1>
                <img src={`${BASE_URL}${name}`} alt={`${name}`}/>
            </div>
        )
    }
}

export default Food;