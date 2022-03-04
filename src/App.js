import React from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      deck: [],
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(
      {
        [name]: value,
      },
      this.formValidation,
    );
    // console.log(cardTrunfo);
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
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
    } = this.state;

    const storedCards = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };
    this.setState((newCard) => ({
      deck: [...newCard.deck, storedCards],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }));
    // console.log(deck.cardName);
  };

  formValidation = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    } = this.state;

    const fields = [cardName, cardDescription, cardImage];
    const emptyFields = fields.some((field) => field === '');

    const sumLimit = 210;
    const attrLimit = 90;
    const attr1 = Number(cardAttr1);
    const attr2 = Number(cardAttr2);
    const attr3 = Number(cardAttr3);
    const attrSum = attr1 + attr2 + attr3;

    const isAbove210 = attrSum > sumLimit;
    const isAbove90 = attr1 > attrLimit || attr2 > attrLimit || attr3 > attrLimit;
    const isBellowZero = attr1 < 0 || attr2 < 0 || attr3 < 0;

    const hasTrunfo = cardTrunfo
      ? this.setState({ hasTrunfo: true })
      : this.setState({ hasTrunfo: false });

    const isValid = emptyFields || isAbove210 || isAbove90 || isBellowZero || hasTrunfo;
    if (isValid) {
      this.setState({ isSaveButtonDisabled: true });
    } else {
      this.setState({ isSaveButtonDisabled: false });
    }
    // console.log(cardTrunfo);
  };

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
      deck,
    } = this.state;

    return (
      <main>
        <header>
          <Title title="Tryunfo Game" />
        </header>
        <section className="form">
          <div>
            <h3>Nova Carta</h3>
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              hasTrunfo={ hasTrunfo }
              cardTrunfo={ cardTrunfo }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
              isSaveButtonDisabled={ isSaveButtonDisabled }
            />
          </div>
          <div>
            <h3>Pré-Visualização</h3>
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </div>
        </section>
        <div>
          <h4>Meu Baralho</h4>
          {deck.map((card) => (
            <Card
              key={ card.cardName }
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
