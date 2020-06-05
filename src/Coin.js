import React, { Component } from 'react'

const HEAD_URL = "https://i.imgur.com/ZoBBsEy.jpg";
const TAIL_URL = "https://i.imgur.com/jxalw1A.jpg";

class Coin extends Component{
    render(){
        const img_url = (this.props.head) ? HEAD_URL : TAIL_URL;
        return <img src={img_url}/>;
    }
}

export default Coin;