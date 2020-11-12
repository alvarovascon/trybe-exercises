import React from 'react';
import './App.css';
import NameInput from './NameInput';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: '' };
  }

  handleChange = (event) => 
    this.setState({
    [event.target.name]: event.target.value})

  handleNameChange = (event) => this.setState({
    [event.target.name]: event.target.value.toUpperCase()})
  render() {
    return (
      <div>
        <header></header>
        <form>
        <fieldset>
          <NameInput name={this.state.name} handleNameChange={this.handleNameChange} />
        </fieldset>
      </form>
        
      </div>
    );
  }
}

export default App;
