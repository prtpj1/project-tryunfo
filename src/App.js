import React from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <main>
        <header>
          <Title title="Adicionar nova carta" />
        </header>
        <Form />
        <Card />
      </main>
    );
  }
}

export default App;
