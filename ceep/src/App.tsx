import React from "react";
import FormularioCadastro from "./components/formularioCadastro/";
import ListaDeNotas from "./components/listaDeNotas";
import { Section, Main } from "./style";
import { NotaContextProvider } from "./store/Context";
import ListaDeCategorias from "./components/ListaDeCategorias/";
import {Button} from "maida-ui";

const App: React.FC = () => (
  <NotaContextProvider>
    <Section>
      <Button>Teste</Button>
      <FormularioCadastro />
      <Main>
        <ListaDeCategorias />
        <ListaDeNotas />
      </Main>
    </Section>
  </NotaContextProvider>
);
export default App;
