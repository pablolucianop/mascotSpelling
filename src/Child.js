import React, { useState, Component } from 'react';

import './App.css';
import './App';



class Child extends Component {

    handleSubmitClick2 = () => {
        const [stateSearch, changeStateSearch] = useState([])

        const name = this._name.value;
        // do something with `name`
        changeStateSearch(name)
        this.props.inputSearch(stateSearch)
    }
    
    handleSubmitClick = () => {
        
        const name = this._name.value;
        // do something with `name`

        this.props.inputSearch(name.toLowerCase())
    }

    render() {
        return (
            <div>
                <input type="text" ref={input => this._name = input} />
                <button onClick={this.handleSubmitClick}>check it!</button>
            </div>
        );
    }
}

export default Child;