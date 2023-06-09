import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Button from './components/Button';
import Filter from './components/Filter';
import style from './components/app.module.css';

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
    nameFilter: '',
    selectFilter: 'todas',
    trunfoFilter: false,
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

    this.setState((w) => ({
      saveCard: [...w.saveCard, cardInformation],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      hasTrunfo: w.hasTrunfo || cardTrunfo,
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }));
  };

  removeCard = (name, trunfo) => {
    const { saveCard } = this.state;

    if (trunfo) {
      const newSaveList = saveCard.filter((a) => a.cardTrunfo !== trunfo);
      this.setState({
        saveCard: [...newSaveList],
        hasTrunfo: false,
        cardTrunfo: false,
      });
    } else {
      const newSaveList = saveCard.filter((a) => a.cardName !== name);
      this.setState({
        saveCard: [...newSaveList],
      });
    }
  };

  inputFilter = ({ target }) => {
    const { value, name, type, checked } = target;

    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  render() {
    const {
      saveCard,
      nameFilter,
      selectFilter,
      trunfoFilter,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          { ...this.state }
          onInputChange={ this.onInputChange }
        />
        <Filter
          { ...this.state }
          inputFilter={ this.inputFilter }
        />
        <ul>
          {
            saveCard
              .filter((n) => n.cardName.toLowerCase().includes(nameFilter.toLowerCase()))
              .filter((st) => (trunfoFilter ? st.cardTrunfo === true : st))
              .filter((s) => (selectFilter !== 'todas' ? s.cardRare === selectFilter : s))
              .map((cardSaved) => (
                <li key={ cardSaved.cardName } className={ style.foi }>
                  <Card
                    { ...cardSaved }
                  />
                  <Button
                    { ...cardSaved }
                    removeCard={ this.removeCard }
                  />
                </li>
              ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
