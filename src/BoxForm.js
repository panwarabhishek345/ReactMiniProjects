import React, { Component } from 'react'
import "./BoxForm.css";

class BoxForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            width:"",
            height:"",
            color:"",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(evt){
        
        const name = evt.target.name;
        const value = evt.target.value;
    
        this.setState(state => ({
            [name]:value
        }));

    }

    handleSubmit(evt){

        evt.preventDefault();
        
        this.props.addBox(this.state);
        
        this.setState(state => ({
            width:"",
            height:"",
            color:"",
        }));

    }

    render(){
        return (
            <form className="BoxForm" onSubmit={this.handleSubmit}>
                <label htmlFor="height">
                    Height: 
                    <input id="height" type="text" name="height" placeholder="Height" value={this.state.height} onChange={this.handleChange}/>
                </label>
                <label htmlFor="width">
                    Width: 
                    <input id="width" type="text" name="width" placeholder="Width" value={this.state.width} onChange={this.handleChange}/>
                </label>
                <label htmlFor="color">
                    Color: 
                    <input id="color" type="text" name="color" placeholder="Color" value={this.state.color} onChange={this.handleChange}/>
                </label>
                <button>Add box</button>
            </form>
        );
    }
}

export default BoxForm;