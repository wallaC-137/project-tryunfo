import React, { Component } from 'react';
import propTypes from 'prop-types';

class Button extends Component {
  render() {
    const { removeCard, cardName, cardTrunfo } = this.props;
    return (
      <button
        type="button"
        data-testid="delete-button"
        onClick={ () => removeCard(cardName, cardTrunfo) }
      >
        Excluir
      </button>
    );
  }
}

Button.propTypes = {
  removeCard: propTypes.func.isRequired,
  cardName: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
};

export default Button;
