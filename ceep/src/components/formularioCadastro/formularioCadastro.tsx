import React, {useContext} from "react";
import { Nota } from "../../models/nota";
import NotaContext from "../../store/Context";
import { Form, TextArea, Button } from "./style";

const FormularioCadastro: React.FC = () => {
  
const {state,setState} = useContext(NotaContext);

  let titulo: string = "";
  let texto: string = "";

  const handleMudancaTitulo = (evento: React.FormEvent<HTMLInputElement>):void => {
    evento.stopPropagation();
    titulo = evento.currentTarget.value;
    console.log("titulo: " + titulo);
  };

  const handleMudancaTexto = (evento: React.FormEvent<HTMLTextAreaElement>): void => {
    evento.stopPropagation();
    texto = evento.currentTarget.value as string;
    console.log("text: " + texto);
  };

  const criarNota=(evento: React.FormEvent<HTMLFormElement>)=>{
    evento.preventDefault();
    evento.stopPropagation();

    const nota = new Nota(titulo,texto);
    setState([...state,nota]);
    console.log("uma nota nota "+titulo+": "+texto );


  }

  return (
    <Form onSubmit={criarNota}>
      <input type="text" placeholder="Titulo" onChange={handleMudancaTitulo} />
      <TextArea
        rows={15}
        placeholder="Escreva sua nota..."
        onChange={handleMudancaTexto}
      />
      <Button>
        Criar Nota
      </Button>
    </Form>
  );
}

export default FormularioCadastro;
