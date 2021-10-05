import React, { Component } from 'react';
import  FormularioCadastro from './components/formularioCadastro';
import  ListaDeNotas  from './components/listaDeNotas/listaDeNotas';



class App extends Component {
  render() {
    return (
      <section>

        <FormularioCadastro/>

        <ListaDeNotas />

      </section>
    );
  }

}

export default App;
