import React, { Component } from 'react'
import "./Deck.css";
import Card from './Card';
import axios from 'axios';

const API_BASE_URL = "https://deckofcardsapi.com/api/deck";

class Deck extends Component{

    constructor(props){
        super(props);
        this.state = {
            deck:null,
            drawn:[]
        }

        this.getCard = this.getCard.bind(this);
    }

    async componentDidMount(){
        const deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
        this.setState(state => ({
            deck:deck.data
        }));
    }

    async getCard(){
        try{
            const deck_id = this.state.deck.deck_id;
            const cardRes = await axios.get(`${API_BASE_URL}/${deck_id}/draw/`);
            if(!cardRes.data.success){
                throw new Error("No remaining cards!");
            }
            const card = cardRes.data.cards[0];
            this.setState(state => ({
                drawn:[...state.drawn,{
                    id:card.code,
                    image:card.image,
                    name:`${card.value} of ${card.suit}`
                }]
            }));
        }
        catch(err){
            alert(err);
        }
    }

    render(){
        return (
            <div className="Deck">
                <h1>Deck Of Cards</h1>
                <button onClick={this.getCard}>Get a card</button>
                <div className="Deck-cards">
                    {this.state.drawn.map(card => {
                        return <Card key={card.id} name={card.name} image={card.image}/>
                    })}
                </div>
            </div>
        );
    }
}

export default Deck;
