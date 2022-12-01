import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome da carta:
          <input type="text" name="name" id="name" data-testid="name-input" />
        </label>
        <textarea
          name="describe"
          id="describe"
          cols="30"
          rows="10"
          data-testid="description-input"
        />
        <label htmlFor="attribute-one">
          attribute-one
          <input
            type="number"
            name="attribute-one"
            id="attribute-one"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attribute-two">
          attribute-two
          <input
            type="number"
            name="attribute-two"
            id="attribute-two"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attribute-three">
          attribute-three
          <input
            type="number"
            name="attribute-three"
            id="attribute-three"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="image">
          Caminho para a imagem
          <input
            type="text"
            name="image"
            id="image"
            data-testid="image-input"
          />
        </label>
        <select name="rarity" id="rarity" data-testid="rare-input">
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <label htmlFor="super-trunfo">
          Super trunfo
          <input
            type="checkbox"
            name="super-trunfo"
            id="super-trunfo"
            data-testid="trunfo-input"
          />
        </label>
        <input type="submit" value="Salvar" data-testid="save-button" />
      </form>
    );
  }
}

export default Form;
