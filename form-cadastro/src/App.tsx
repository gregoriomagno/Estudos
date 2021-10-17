import React from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Searchbar } from "maida-ui";
function App() {
  return (
    <>
      <Searchbar />
      <FormularioCadastro />
    </>
  );
}

export default App;
