import React, { Component } from 'react';
import Joke from './Joke'
import './JokeList.css';
import axios from 'axios';

const API_URL = "https://icanhazdadjoke.com/";

class JokesList extends Component{

    static defaultProps = {
        numOfJokesToGet:10,
        sidebarShake:false
    }

    constructor(props){
        super(props);
        this.state = {
            jokes:[]
        }

        this.loadJokes = this.loadJokes.bind(this);
        this.handleImageClick = this.handleImageClick.bind(this);
        this.Upvote = this.Upvote.bind(this);
        this.Downvote = this.Downvote.bind(this);
    }

    handleImageClick(evt){
        this.setState(state => ({
            sidebarShake:true
        }));

        setTimeout(() => {
            this.setState(state => ({
                sidebarShake:false
            }));
        },1000);
    }

    async loadJokes(){
        let i = 0;
        while(i<this.props.numOfJokesToGet){
            const joke = await axios.get(API_URL,{headers:{Accept:"application/json"}});
            this.setState(state => ({
                jokes:[...state.jokes,{
                    ...joke.data,
                    votes:0
                }]
            }));
            i++;
        }
        localStorage.setItem('jokes', JSON.stringify(this.state.jokes));
    }

    async componentDidMount(){
        
        const jokes = JSON.parse(localStorage.getItem('jokes') || "[]");

        if(jokes.length > 0){
            this.setState(state => ({
                jokes
            }));
        }
        else
            this.loadJokes();
    }

    Upvote(idx){
        const jokes = this.state.jokes;
        jokes[idx].votes = jokes[idx].votes + 1;
        this.setState(state => {
            localStorage.setItem('jokes', JSON.stringify(this.state.jokes));
            return {
                jokes:[...jokes]
            };
        });
    }

    Downvote(idx){
        const jokes = this.state.jokes;
        jokes[idx].votes = jokes[idx].votes - 1;
        this.setState(state => {
            localStorage.setItem('jokes', JSON.stringify(this.state.jokes));
            return {
                jokes:[...jokes]
            };
        });
    }

    render() {
        return (
            <div className="JokeList">
                <div className="JokeList-sidebar">
                    <h1>Jokes</h1>
                    <div className={`${this.state.sidebarShake?"shaking":""}`} onClick={this.handleImageClick}>
                        <img src="https://i.imgur.com/nidMjPr.png" alt="Emoji Face"/>
                    </div>
                </div>
                <div className="JokeList-jokes" id="style-3">
                    {this.state.jokes.map((joke,idx) => <Joke key={idx} data={{...joke,idx}} Upvote={this.Upvote} Downvote={this.Downvote}/>)}
                    <button className="JokeList-loadmore" onClick={this.loadJokes}>Load More</button>
                </div>
            </div>
        )
    }
}

export default JokesList;