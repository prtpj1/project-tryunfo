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
      inptTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      data: [],
    };
  }

  onInputChange = ({ target }) => {
    const { name, value, type } = target;
    this.setState({
      [name]: value,
      [name]: (type === 'checkbox' ? target.checked : ''),
    }, this.formValidation);
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { data } = this.state;

    this.setState({
      inptName: '',
      inptDesc: '',
      inptAttr1: '0',
      inptAttr2: '0',
      inptAttr3: '0',
      inptImage: '',
      inptRare: 'normal',
      inptTrunfo: false,
      data: [...data, event],
    });
    console.log(data);
  };

  formValidation = () => {
    const {
      inptName,
      inptDesc,
      inptImage,
      inptAttr1,
      inptAttr2,
      inptAttr3,
      inptTrunfo,
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

    const hasTrunfo = inptTrunfo
      ? this.setState({ hasTrunfo: true })
      : this.setState({ hasTrunfo: false });

    const isValid = (emptyFields
      || isAbove210
      || isAbove90
      || isBellowZero
      || hasTrunfo);
    if (isValid) {
      this.setState({ isSaveButtonDisabled: true });
    } else {
      this.setState({ isSaveButtonDisabled: false });
    }
    // console.log(inptTrunfo);
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
      hasTrunfo,
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
          hasTrunfo={ hasTrunfo }
          cardTrunfo={ inptTrunfo }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
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
