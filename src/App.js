import React from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: '',
      inptDesc: '',
      inptAttr1: '',
      inptAttr2: '',
      inptAttr3: '',
      inptImage: '',
      inptRare: '',
      inptTrunfo: '',
    };
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  onSaveButtonClick = (e) => {
    e.preventDefault();
  };

  render() {
    const {
      nameInput,
      inptDesc,
      inptAttr1,
      inptAttr2,
      inptAttr3,
      inptImage,
      inptRare,
      inptTrunfo,
    } = this.state;

    return (
      <main>
        <header>
          <Title title="Adicionar nova carta" />
        </header>
        <Form
          cardName={ nameInput }
          cardDescription={ inptDesc }
          cardAttr1={ inptAttr1 }
          cardAttr2={ inptAttr2 }
          cardAttr3={ inptAttr3 }
          cardImage={ inptImage }
          cardRare={ inptRare }
          cardTrunfo={ inptTrunfo }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ nameInput }
          cardDescription={ inptDesc }
          cardAttr1={ inptAttr1 }
          cardAttr2={ inptAttr2 }
          cardAttr3={ inptAttr3 }
          cardImage={ inptImage }
          cardRare={ inptRare }
          cardTrunfo={ inptTrunfo }
        />
      </main>
    );
  }
}

export default App;
