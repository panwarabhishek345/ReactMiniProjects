import React, { Component } from 'react'

class Dog extends Component{
    render(){

        const style = {height:'100px',width:"200px"}
        return (
            <div>
                <img src="https://i.imgur.com/qsRbF.png"  alt="Dog" style={style}/>
                <h1>Dog</h1>
                <p>Name: {this.props.name}</p>
            </div>
        );
    }
}

export default Dog;