import React, { useState, useEffect} from 'react';
import './App.css';
import Child from './Child';
import CardPoke from './CardPoke';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/badge';



function BadgeConditional(props) {
  const isLoggedIn = props.isLoggedIn.length > 0;
  const howMany = props.isLoggedIn.length
  if (isLoggedIn) {
    return <Badge variant="info">{howMany}  </Badge>;
  }
  return null;
}




function App() {
 

  const [pokeInfoOrganized, changePokeInfoOrganized] = useState([])
  const [stateSearch, changeStateSearch] = useState([]);
  

  function searchToState(xx) {
    
    
    changeStateSearch(xx)

    console.log(xx, ' xx')

    console.log(stateSearch, ' esta es state search')
  }

  React.useEffect(() => { getPokemonInfo() }, [stateSearch]);

  function getPokemonInfo() {

    if (stateSearch.length>0){
    
    axios.get(`https://pokeapi.co/api/v2/pokemon/${stateSearch}/`)
      .then(function (response) {
        let image = JSON.stringify(response.data.sprites.front_default).substring(1, JSON.stringify(response.data.sprites.front_default).length - 1)
        let name = JSON.stringify(response.data.name).substring(1, JSON.stringify(response.data.name).length - 1)
        let weight = JSON.stringify(response.data.weight)
        let base_experience = JSON.stringify(response.data.base_experience)

        let arrayOfSpecs = [image, name, weight, base_experience]
        changePokeInfoOrganized([...pokeInfoOrganized, arrayOfSpecs])
      }).catch(error => { alert(stateSearch + ' is not a pokemon') })
  }
}
  return (
    <div className="text-center">
      <h1 >How many pokemons can you name? <BadgeConditional isLoggedIn={(pokeInfoOrganized)} /></h1>
      <br />
      <Child inputSearch={searchToState}/>
      <CardPoke pokeInfoOrganized={pokeInfoOrganized} />   
    </div>
  );
}

export default App;





