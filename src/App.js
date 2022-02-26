import React from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inptName: '',
      inptDesc: '',
      inptAttr1: '',
      inptAttr2: '',
      inptAttr3: '',
      inptImage: '',
      inptRare: '',
      inptTrunfo: '',
      isSaveButtonDisabled: true,
    };
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, this.formValidation);
  };

  onSaveButtonClick = (e) => {
    e.preventDefault();
  };

  formValidation = () => {
    const {
      // inptName,
      // inptDesc,
      // inptImage,
      // inptRare,
      inptAttr1,
      inptAttr2,
      inptAttr3,
    } = this.state;

    const sumLimit = 210;
    const attrSum = (Number(inptAttr1) + Number(inptAttr2) + Number(inptAttr3));
    console.log(typeof inptAttr1);

    if ((attrSum) <= sumLimit) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  render() {
    const {
      inptName,
      inptDesc,
      inptAttr1,
      inptAttr2,
      inptAttr3,
      inptImage,
      inptRare,
      inptTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <main>
        <header>
          <Title title="Adicionar nova carta" />
        </header>
        <Form
          cardName={ inptName }
          cardDescription={ inptDesc }
          cardAttr1={ inptAttr1 }
          cardAttr2={ inptAttr2 }
          cardAttr3={ inptAttr3 }
          cardImage={ inptImage }
          cardRare={ inptRare }
          cardTrunfo={ inptTrunfo }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        <div>{console.log(inptName)}</div>
        <Card
          cardName={ inptName }
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
