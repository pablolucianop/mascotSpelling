import React, { useState, Component } from 'react'
import './App.css'

class Child extends Component {
  handleSubmitClick2 = () => {
    const [stateSearch, changeStateSearch] = useState([])

    const name = this.nameVal.value
    // do something with `name`
    changeStateSearch(name)
    const { props: imp } = this
    imp.inputSearch(stateSearch)
  }

  handleSubmitClick = () => {
    const name = this.nameVal.value
    // do something with `name`
    const { props: imp } = this
    imp.inputSearch(name.toLowerCase())
  }

  render() {
    return (
      <div>
        <input type="text" ref={(input) => (this.nameVal = input)} />
        <button type="button" onClick={this.handleSubmitClick}>
          check it!
        </button>
      </div>
    )
  }
}

export default Child
