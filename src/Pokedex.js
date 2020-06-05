import React, { Component } from 'react'
import Pokecard from './Pokecard';
import "./Pokedex.css";

class Pokedex extends Component{
    render(){
        const {pokemons,exp,isWinner} = this.props;
        let title;
        if(isWinner){
            title = <h1 className="Pokedex-winner">Winner</h1>;
        }
        else{
            title = <h1 className="Pokedex-loser">Loser</h1>;
        }

        return (
            <div className="Pokedex">
                {title}
                <h4>Total Experience: {exp}</h4>
                <div className="Pokedex-cards">
                    {pokemons.map(
                        poke => 
                        <Pokecard 
                            id={poke.id} 
                            name={poke.name} 
                            type={poke.type} 
                            exp={poke.base_experience}
                        />
                    )}
                </div>
            </div>
        );
    }
}

export default Pokedex;