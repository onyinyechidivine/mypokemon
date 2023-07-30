import React from 'react'
import Pokedex from './containers/pokedex';
import AppNavigator from './components/AppNavigator';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import PokemonDetails from './containers/PokemonDetails';

export default function App(){
  return (
    <Router>
    <AppNavigator/>
    <Routes>
      <Route exact  path="/" element= {<Pokedex />} />
      <Route exact path="/pokemon/:id" element = {<PokemonDetails />} />

    </Routes>
    
  </Router>
   
  );

}
