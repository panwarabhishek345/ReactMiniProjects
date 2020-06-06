import React, { Component } from 'react';
import './App.css';
import BoxForm from './BoxForm';
import BoxList from "./BoxList";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
       boxes:[
         {
           height:"100",
           width:"100",
           color:"black"
         },
         {
          height:"150",
          width:"80",
          color:"pink"
        },
        {
          height:"150",
          width:"200",
          color:"teal"
        }
       ]
    }
    this.addBox = this.addBox.bind(this);
  }

  addBox(box){
    this.setState(state => ({
      boxes:[...state.boxes,box]
    }));
  }
  
  render(){
    return (
      <div className="App">
        <BoxForm addBox={this.addBox}/>
        <BoxList boxes={this.state.boxes}/>
      </div>
    );
  }
}

export default App;
