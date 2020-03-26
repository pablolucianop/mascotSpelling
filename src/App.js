import React, { useState} from 'react';
import './App.css';
import Child from './Child';
import CardPoke from './CardPoke';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/badge';


function App() {
   const [stateSearch, changeStateSearch] = useState([])
   const [pokeInfoOrganized, changePokeInfoOrganized] = useState([])



  function BadgeConditional(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <Badge variant="info">{pokeInfoOrganized.length}  </Badge>;
    }
    return null;
  }


   
  function getPokemonInfo(){
    axios.get(`https://pokeapi.co/api/v2/pokemon/${stateSearch}/`)
      .then(function (response) {
        let image = JSON.stringify(response.data.sprites.front_default).substring(1, JSON.stringify(response.data.sprites.front_default).length - 1)
        let name = JSON.stringify(response.data.name).substring(1, JSON.stringify(response.data.name).length - 1)
        let weight = JSON.stringify(response.data.weight)
        let base_experience = JSON.stringify(response.data.base_experience)

        let arrayOfSpecs = [image, name, weight, base_experience]
        changePokeInfoOrganized([...pokeInfoOrganized, arrayOfSpecs])
      }).catch(error => { alert(stateSearch +' is not a pokemon') })
      
  }

  function searchToState(xx) {
    changeStateSearch(xx)
    getPokemonInfo()
  }

  return (
    <div class="text-center">
 
      <h1 >How many pokemons can you name? <BadgeConditional isLoggedIn={(pokeInfoOrganized.length>0)} /></h1>
      <br />
 
      <Child inputSearch={searchToState}/>
      <CardPoke pokeInfoOrganized={pokeInfoOrganized} />   



    </div>
  );
}

export default App;





