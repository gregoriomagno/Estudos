import React, { useContext } from "react";
import { Categoria } from "../../models/categoria";
import { Nota } from "../../models/nota";
import NotaContext from "../../store/Context";
import { Form, TextArea, Button, Select } from "./style";

const FormularioCadastro: React.FC = () => {
  const { state, setState } = useContext(NotaContext);

  let titulo: string = "";
  let texto: string = "";
  let categoria: string = "";

  const handleMudancaTitulo = (
    evento: React.FormEvent<HTMLInputElement>
  ): void => {
    evento.stopPropagation();
    titulo = evento.currentTarget.value;
    console.log("titulo: " + titulo);
  };

  const handleMudancaTexto = (
    evento: React.FormEvent<HTMLTextAreaElement>
  ): void => {
    evento.stopPropagation();
    texto = evento.currentTarget.value as string;
    console.log("text: " + texto);
  };

  const handleMudancacategoria = (
    evento: React.ChangeEvent<HTMLSelectElement>
  ) => {
    console.log(evento.target.value);
    categoria = evento.target.value;
  };

  const criarNota = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    evento.stopPropagation();
    console.log("Add?");
    console.log("titulo: " + titulo);
    console.log("text: " + texto);
    console.log("categoria: " + categoria);

    const nota = new Nota(titulo, texto, categoria);

    if (state.length === 0) {
      return;
    }

    state.forEach((item, index) => {
      if (item.titulo === nota.categoria) {
        console.log("adicionado");
        let auxArray: Array<Categoria> = [...state];
        auxArray[index].notas = [...item.notas, nota];
        setState(auxArray);
        return;
      }
    });

    console.log(state);
  };

  return (
    <Form onSubmit={criarNota}>
      <Select onChange={handleMudancacategoria}>
        <option> Sem categoria</option>
        {state.map((categoria, index) => {
          return <option key={index}> {categoria.titulo}</option>;
        })}
      </Select>
      <input type="text" placeholder="Titulo" onChange={handleMudancaTitulo} />
      <TextArea
        rows={15}
        placeholder="Escreva sua nota..."
        onChange={handleMudancaTexto}
      />
      <Button>Criar Nota</Button>
    </Form>
  );
};

export default FormularioCadastro;
