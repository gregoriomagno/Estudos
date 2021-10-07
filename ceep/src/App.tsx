import React from "react";
import FormularioCadastro from "./components/formularioCadastro/";
import ListaDeNotas from "./components/listaDeNotas";
import { Section, Main } from "./style";
import { NotaContextProvider } from "./store/Context";
import ListaDeCategorias from "./components/ListaDeCategorias/";

const App: React.FC = () => (
  <NotaContextProvider>
    <Section>
      <FormularioCadastro />
      <Main>
        <ListaDeCategorias />
        <ListaDeNotas />
      </Main>
    </Section>
  </NotaContextProvider>
);
export default App;
