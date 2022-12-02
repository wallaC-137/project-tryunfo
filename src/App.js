import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
  }

  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
  };

  onInputChange({ target }) {
    const { name, value, type, checked } = target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    }, this.btnDisabled);
  }

  btnDisabled = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const testOne = cardName.length > 0
    && cardDescription.length > 0
    && cardImage.length > 0;

    const equal = 210;
    const testTwo = Number(cardAttr1)
      + Number(cardAttr2)
      + Number(cardAttr3) <= equal;

    const smaller = 90;
    const attr1 = Number(cardAttr1) <= smaller && Number(cardAttr1) >= 0;
    const attr2 = Number(cardAttr2) <= smaller && Number(cardAttr2) >= 0;
    const attr3 = Number(cardAttr3) <= smaller && Number(cardAttr3) >= 0;
    const attrResult = attr1 && attr2 && attr3;
    this.setState({
      isSaveButtonDisabled: !(testOne && testTwo && attrResult),
    });
  };

  // onSaveButtonClick = (param) => {
  //   param.preventDefault();
  //   const { cardName, cardImage, cardDescription,
  //   cardAttr1, cardAttr2, cardAttr3, cardRare, cardTrunfo } = this.state;
  // };

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
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          // onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
        />
      </div>
    );
  }
}

export default App;
