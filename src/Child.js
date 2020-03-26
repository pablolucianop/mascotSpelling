import React, { useState} from 'react';
import './App.css';
import './App';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.input.current.value);
        this.props.inputSearch(this.input.current.value)
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
          <input type="text" ref={this.input} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

function Child(props) {
    const [Input, changeInput] = useState()
    const [InputComplete, changeInputComplete] = useState()

    function changeInputF(event) {
        changeInput(event.target.value)
    }

    function changeSearchF() {
        changeInputComplete(Input)
        props.inputSearch(InputComplete)
    }
    
    return (
        <div >
            <h6>Search the pokemon name here!</h6>
            <input onChange={changeInputF}></input>           
            <button onClick={changeSearchF}>check it!</button>
            <NameForm/>
            
        </div>
    );
}

export default Child;


