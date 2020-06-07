import React, { Component } from 'react'

class Cat extends Component{
    render(){
        const style = {height:'100px',width:"200px"}
        return (
            <div>
                <img src="https://i.imgur.com/0XHcPko.jpg" alt="Cat" style={style}/>
                <h1>Cat</h1>
                <p>Name: {this.props.name}</p>
            </div>
        );
    }
}

export default Cat;