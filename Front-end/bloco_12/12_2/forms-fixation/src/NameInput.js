import React from 'react';

class NameInput extends React.Component {
  render() {
    return (
      <div>
        <label>Nome: </label>
        <input type="text" name="name"
        value={this.props.name} onChange={this.props.handleChange} ></input>
      </div>
    );
  }
}

export default NameInput;