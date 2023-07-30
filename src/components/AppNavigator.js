import React from "react";
import "./AppNavigator.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AppNavigator() {
  let navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);

  const inputHandler = (event) => {
      setQuery(event.target.value)
  }

  const printQuery = () => {
      try {
          navigate(`/pokemon/${query}`)
      }
      catch (error) {
          setError(error.message);
      }
     
  }
    return (


      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Pokedex</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
 
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" onChange={inputHandler} type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" onClick={printQuery} type="submit">Search</button>
    </form>
  </div>
</nav>

        
    )
}


export default AppNavigator;
