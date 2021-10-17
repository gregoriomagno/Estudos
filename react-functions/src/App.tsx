import React from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/Formulario";
import { Container, Typography } from "@material-ui/core";
import 'fontsource-roboto';
function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1"> Formulario de cadastro</Typography>
      <FormularioCadastro onSubmit={onSubmitForm} validarCPF={validarCPF}/>
    </Container>
  );
}

function onSubmitForm(dados : {}) : void{
  
  console.log(dados);

}

function validarCPF(cpf: string): {} {
  if (cpf.length !== 11) {
    return { valido: true, mensagem: "CPF deve conter 11 digitos" };
  }else{
    return{valido:false,mensagem:""}
  }
}

export default App;
