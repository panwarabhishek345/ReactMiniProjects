import React, { Component } from 'react'
import Coin from './Coin';
import './App.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            total:0,
            head:0,
            faceHead:true
        }
        this.flipCoin = this.flipCoin.bind(this);
    }

    flipCoin(e){
        const num = Math.floor(Math.random()*2);
        console.log(num);
        const head = num == 0?1:0;
        this.setState(st => {
            return {
                total:st.total+1,
                head: st.head+head,
                faceHead:head == 1
            };
        })
    }


    render(){
        return (
            <div className="App">
               <Coin head={this.state.faceHead}/>
                <h1>You got {this.state.head} heads out of {this.state.total} trials</h1>
                <button onClick={this.flipCoin}>Flip coin</button>
            </div>
        );
    }
}

export default App;