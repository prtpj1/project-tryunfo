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
      inptName,
      inptDesc,
      inptImage,
      inptAttr1,
      inptAttr2,
      inptAttr3,
    } = this.state;

    const fields = [inptName, inptDesc, inptImage];
    const emptyFields = fields.some((field) => field === '');

    const sumLimit = 210;
    const attrLimit = 90;
    const attr1 = Number(inptAttr1);
    const attr2 = Number(inptAttr2);
    const attr3 = Number(inptAttr3);
    const attrSum = (attr1 + attr2 + attr3);

    const isAbove210 = attrSum > sumLimit;
    const isAbove90 = (attr1 > attrLimit)
    || (attr2 > attrLimit)
    || (attr3 > attrLimit);
    const isBellowZero = (attr1 < 0)
    || (attr2 < 0)
    || (attr3 < 0);

    const isValid = (emptyFields || isAbove210 || isAbove90 || isBellowZero);
    if (isValid) {
      this.setState({ isSaveButtonDisabled: true });
    } else {
      this.setState({ isSaveButtonDisabled: false });
    }
    console.log(isValid);
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
        {/* <div>{console.log(inptName)}</div> */}
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
