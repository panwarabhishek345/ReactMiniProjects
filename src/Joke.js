import React, { Component } from 'react';
import './Joke.css';

class Joke extends Component{

    static defaultProps = {
        emojis:["😡","😣","😔","😩","😕","😀","😄","😁","😂","😆","😍"],
        colors:["#ff0000","#ff2a00","#ff5900","#ff8000","#ffaa00","#ffea00","#d9ff00","#b7ff00","#9dff00","#6fff00","#00ff4c"]
    }

    constructor(props){
        super(props);
        this.getEmoji = this.getEmoji.bind(this);
        this.getColor = this.getColor.bind(this);
        this.handleUpvote = this.handleUpvote.bind(this);
        this.handleDownvote = this.handleDownvote.bind(this);
    }

    getEmoji(){
        const idx = Math.min(Math.max(-5,this.props.data.votes),5);
        return this.props.emojis[5+idx];
    }

    getColor(){
        const idx = Math.min(Math.max(-5,this.props.data.votes),5);
        return this.props.colors[5+idx];
    }

    handleUpvote(evt){
        this.props.Upvote(this.props.data.idx);
    }

    handleDownvote(evt){
        this.props.Downvote(this.props.data.idx);
    }

    render() {
        return (
            <div className="Joke">
                <div className="Joke-vote-container">
                    <i className="fa fa-arrow-up" onClick={this.handleUpvote}></i>
                    <div className="Joke-vote-circle" style={{border:`${this.getColor()} solid 1px`}}>
                        <div className="Joke-vote-count">{this.props.data.votes}</div>
                    </div>
                    <i className="fa fa-arrow-down" onClick={this.handleDownvote}></i>
                </div>
                <div className="Joke-text">{this.props.data.joke}</div>
                <div className="Joke-emoji">{this.getEmoji()}</div>
            </div>
        )
    }
}

export default Joke;