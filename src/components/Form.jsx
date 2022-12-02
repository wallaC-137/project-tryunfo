import React, { Component } from 'react';
import PropType from 'prop-types';

class Form extends Component {
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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <label htmlFor="name">
          Nome da carta:
          <input
            type="text"
            name="cardName"
            id="name"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <textarea
          name="cardDescription"
          id="describe"
          cols="30"
          rows="10"
          data-testid="description-input"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <label htmlFor="attribute-one">
          attribute-one
          <input
            type="number"
            name="cardAttr1"
            id="attribute-one"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attribute-two">
          attribute-two
          <input
            type="number"
            name="cardAttr2"
            id="attribute-two"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attribute-three">
          attribute-three
          <input
            type="number"
            name="cardAttr3"
            id="attribute-three"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image">
          Caminho para a imagem
          <input
            type="text"
            name="cardImage"
            id="image"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <select
          name="cardRare"
          id="rarity"
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <label htmlFor="super-trunfo">
          Super trunfo
          <input
            type="checkbox"
            name="cardTrunfo"
            id="super-trunfo"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <input
          type="submit"
          value="Salvar"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        />
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.string.isRequired,
  cardAttr2: PropType.string.isRequired,
  cardAttr3: PropType.string.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.bool.isRequired,
  // hasTrunfo: PropType.bool.isRequired,
  isSaveButtonDisabled: PropType.bool.isRequired,
  onInputChange: PropType.func.isRequired,
  onSaveButtonClick: PropType.func.isRequired,
};

export default Form;
