import React, { Component } from 'react'

class Panda extends Component{
    render(){
        const style = {height:'100px',width:"200px"}
        return (
            <div>
                <img src="https://i.imgur.com/Lz2m84C.jpg" alt="Panda" style={style}/>
                <h1>Panda</h1>
                <p>Name: {this.props.name}</p>
            </div>
        );
    }
}

export default Panda;