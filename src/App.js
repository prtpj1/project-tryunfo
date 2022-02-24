import React from 'react';
import Title from './components/Title';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <main>
        <header>
          <Title title="Adicionar nova carta" />
        </header>
        <Form />
      </main>
    );
  }
}

export default App;
