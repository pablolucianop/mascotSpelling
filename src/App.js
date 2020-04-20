import React, { useState } from 'react'
import './App.css'
import axios from 'axios'
import Badge from 'react-bootstrap/badge'
import Child from './Child'
import CardPoke from './CardPoke'

import 'bootstrap/dist/css/bootstrap.min.css'

function BadgeConditional(isLoggedIn) {
  const isLoggedIno = isLoggedIn.length > 0
  const howMany = isLoggedIn.length
  if (isLoggedIno) {
    return <Badge variant="info">{howMany}</Badge>
  }
  return null
}

function App() {
  const [pokeInfoOrganized, changePokeInfoOrganized] = useState([])
  const [pokeName, changePokeName] = useState([])
  const [stateSearch, changeStateSearch] = useState([])

  function searchToState(xx) {
    changeStateSearch(xx)
  }

  function getPokemonInfo() {
    if (stateSearch.length > 0) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${stateSearch}/`)
        .then((response) => {
          const image = JSON.stringify(
            response.data.sprites.front_default
          ).substring(
            1,
            JSON.stringify(response.data.sprites.front_default).length - 1
          )
          const name = JSON.stringify(response.data.name).substring(
            1,
            JSON.stringify(response.data.name).length - 1
          )
          const weight = JSON.stringify(response.data.weight)
          const baseExperience = JSON.stringify(response.data.baseExperience)

          const arrayOfSpecs = [image, name, weight, baseExperience]
          changePokeInfoOrganized([...pokeInfoOrganized, arrayOfSpecs])
          changePokeName(name)
        })
        .catch((error) => {
          alert(`${stateSearch} is not a pokemon`)
        })
    }
  }

  React.useEffect(() => {
    getPokemonInfo()
  }, [stateSearch])

  return (
    <div className="text-center">
      <h1>
        How many pokemons can you name?
        <BadgeConditional isLoggedIn={pokeInfoOrganized} />
      </h1>
      <br />
      <Child inputSearch={searchToState} />
      <CardPoke pokeInfoOrganized={pokeInfoOrganized} />
    </div>
  )
}

export default App
