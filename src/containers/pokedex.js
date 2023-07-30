import React, { useEffect, useState} from 'react'
import './Pokedex.css';
import axios from 'axios';
import { POKEMON_API_URL, IMAGE_API_URL} from '../config'
import { ClipLoader } from 'react-spinners';
import PokemonCard from '../components/PokemonCard';

export default function Pokedex(){
    const [pokemonData, setPokemonData] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(POKEMON_API_URL + '?limit=20').then((response) => {
            if(response.status >= 200 && response.status < 300) {

                    const { results } = response.data;
                    let newpokemonData = [];
                    results.forEach((pokemon, index) => {
                        index++
                        let pokemonObject = { 
                            id: index,
                            url: IMAGE_API_URL + index + '.png',
                             name: pokemon.name,
                        };
                        newpokemonData.push(pokemonObject);
                  });
                  setPokemonData(newpokemonData);
                  setLoading(false);
            }
            
        });
 
    }, []);
    return (
      <div className="pokedex">
        {loading ? (
          <div style={{ marginTop: '100px' }}>
            <ClipLoader color="#ffffff" /> Use the ClipLoader component as an alternative loading indicator
          </div>
        ) : (
          <div className="grid">
            {pokemonData.map((pokemon) => {
              return (
                <PokemonCard pokemon={pokemon} image={pokemon.url} key= {pokemon.id}></PokemonCard>
              )
            })}
          </div>
        )}
      </div>
    );
  }