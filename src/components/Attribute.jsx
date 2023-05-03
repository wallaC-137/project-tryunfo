import React, { Component } from 'react';

class Attribute extends Component {
  render() {
    // const { name, id, } = this.props;

    return (
      <label htmlFor="attribute-one">
        tittle-attribute=
        <input
          type="number"
          // name={ name }
          id={ id }
          // data-testid={ this.props.data-testid }
        />
      </label>
    );
  }
}

export default Attribute;
