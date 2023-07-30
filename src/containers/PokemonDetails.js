import React from "react";
import axios from "axios";
import { POKEMON_API_URL } from "../config";
import { ClipLoader } from "react-spinners";
import { useMatch } from "react-router-dom";
import { useState, useEffect } from "react";

const styles = {
  pokedexContainer: {
    height: "80vh",
    backgroundColor: "black",
    color: "white",
    marginTop: 75,
    textAlign: "center",
    borderRadius: 5,
    paddingTop: 30,
  },
  textTitle: {
    textTransform: "uppercase",
    fontFamily: "Fantasy",
  },
  pokemonImage: {
    width: "170px",
    height: "170px",
  },
  pokemonInfoContainer: {
    bottom: 60,
    position: "absolute",
    backgroundColor: "blue",
    width: "100%",
    height: 200,
  },
  seperator: {
    height: "0.01cm",
    width: "95%",
  },
  favourite: {
    height: 50,
    width: 50,
    marginTop: 15,
  },
  text: {
    fontSize: 30,
  },
};

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState("");
  const match = useMatch("/pokemon/:id");
  const id = match.params.id;
  console.log(id);

  useEffect(() => {
    axios
      .get(POKEMON_API_URL + "/" + id)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          setPokemon(response.data);
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log("Error fetching Pokemon details:", error);
      });
  }, []);

  if (!pokemon) {
    return <ClipLoader color="#ffffff" />;
  }

  const { name, sprites, height, weight, types } = pokemon;

  return (
    <div>
      <div style={styles.pokedexContainer}>
        <div style={styles.textTitle} variant="h1">
          {name}
        </div>
        <img className="pokemonImage" src={sprites.front_default} alt={name} />
        <div className="pokemonInfoContainer">
          <h1 style={styles.seperator}></h1>
          <div style={styles.text}>
            <p>
              Name: <br /> {name}
            </p>
            <p>
              Height: <br /> {height}m
            </p>
            <p>
              Weight: <br /> {weight}kg
            </p>
            <p>
              Type: <br />
              {types.map((type) => type.type.name).join(", ")}
            </p>
            {/* Add other details here, such as abilities, stats, etc. */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
