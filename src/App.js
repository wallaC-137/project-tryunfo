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
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    saveCard: [],
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
      cardRare,
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

    const testRarity = cardRare.length > 0;

    this.setState({
      isSaveButtonDisabled: !(testOne && testTwo && attrResult && testRarity),
    });
  };

  onSaveButtonClick = (param) => {
    param.preventDefault();
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    } = this.state;

    const cardInformation = {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
      hasTrunfo,
    };

    this.setState(({ saveCard }) => ({
      saveCard: [...saveCard, cardInformation],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      hasTrunfo: cardTrunfo,
      cardTrunfo: false,
    }));
  };

  // teste = () => {
    // const { saveCard, hasTrunfo } = this.state;
    // const aa = saveCard.map((a) => a.includes('cardTrunfo: false'));
    // this.setState({
    // hasTrunfo: aa,
    // });
    // const save = saveCard.some(({ cardTrunfo }) => cardTrunfo === true);
    // this.setState({ hasTrunfo: false });
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
      hasTrunfo,
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
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
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
        {/* { console.log(this.teste()) } */}
      </div>
    );
  }
}

export default App;
