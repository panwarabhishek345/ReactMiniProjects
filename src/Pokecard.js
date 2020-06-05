import React,{Component} from 'react';
import "./Pokecard.css";

// const POKE_API = "https://raw.githubusercontent.com/PokeAPI/pokeapi/master/data/Pokemon_XY_Sprites/"
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (id) => `00${id}`.slice(-3);

class Pokecard extends Component{
    render(){
        let props = this.props;
        const imgsrc = `${POKE_API}${padToThree(props.id)}.png`;
        return (
            <div className="Pokecard">
                <h3>{props.name}</h3>
                <img className="Pokecard-img" src={imgsrc} alt={props.name}/>
                <p>Type: {props.type}</p>
                <p>Exp: {props.exp}</p>
            </div>
        );
    }
}

export default Pokecard;