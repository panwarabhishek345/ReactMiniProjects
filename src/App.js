import React, { Component } from 'react'
import NumberItem from './NumberItem';
import './App.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
           nums:[1,2,3,4,5]
        }
        this.remove = this.remove.bind(this);
    }

    remove(num){
        this.setState(st => {
            return {
                nums:st.nums.filter(n => n !== num)
            };
        });
    }

    render(){
        let list;
        if(this.state.nums.length > 0)
            list = this.state.nums.map(n => <NumberItem key={n} value={n} remove={this.remove}/>);
        else
            list = <h3>No items in the list</h3>;
        return (
            <div className="App">
                <h1>Number List</h1>
                <div>
                    {list}
                </div>   
            </div>
        );
    }
}

export default App;