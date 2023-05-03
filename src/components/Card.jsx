import React, { Component } from 'react';
import PropType from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div>
        <p data-testid="name-card">
          { cardName }
        </p>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">
          { cardDescription }
        </p>
        <p data-testid="attr1-card">
          { cardAttr1 }
        </p>
        <p data-testid="attr2-card">
          { cardAttr2 }
        </p>
        <p data-testid="attr3-card">
          { cardAttr3 }
        </p>
        <p data-testid="rare-card">
          { cardRare }
        </p>
        {
          cardTrunfo && <p data-testid="trunfo-card"> Super Trunfo </p>
        }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.string.isRequired,
  cardAttr2: PropType.string.isRequired,
  cardAttr3: PropType.string.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.bool.isRequired,
};

export default Card;
