import React from "react";
// import "./PokemonCard.css"
import { Link    } from "react-router-dom";

export  default function PokemonCard(props){
  const { pokemon, image } = props;
  const { id, name} = pokemon;
  return (
    
    <div>
      <Link to= {`/pokemon/${id}`} className="card-link">
    
      <div className="PokemonCard">
        <div className="cardimage">
          <img src={image} alt={name} key={id} />
        </div>
        <div className="cardcontent">
          <p>{name}</p>
        </div>
      </div>
    </Link>
    </div>
  );
}