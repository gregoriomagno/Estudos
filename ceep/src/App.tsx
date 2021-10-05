import React, { Component } from 'react';
import  FormularioCadastro from './components/formularioCadastro/';
import  ListaDeNotas  from './components/listaDeNotas/';
import './assets/index.css';
import './assets/app.css';

class App extends Component {
  render() {
    return (
      <section className="conteudo">

        <FormularioCadastro/>

        <ListaDeNotas />

      </section>
    );
  }

}

export default App;
