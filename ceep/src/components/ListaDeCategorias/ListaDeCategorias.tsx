import  React from "react";
import { FunctionComponent, useContext } from "react";
import { Categoria } from "../../models/categoria";
import NotaContext from "../../store/Context";
import { Input, Li, Section, Ul } from "./style";

interface ListaDeCategoriasProps {}

const ListaDeCategorias: FunctionComponent<ListaDeCategoriasProps> = () => {

  const {state,setState} = useContext(NotaContext);

  const _handleEventoInput = (evento:React.KeyboardEvent<HTMLInputElement>)=> {
 
      if(evento.key === "Enter"){
        let novaCategoria = new Categoria(evento.currentTarget.value,[]);

        setState([...state,novaCategoria]);
      }
  }


  return (
    <Section>
      <Ul>
        {state.map((categoria,index) =>{
          return  <Li key={index}>{categoria.titulo}</Li>;
        })}
       
      </Ul>
      <Input type="text" placeholder="Adicionar categoria" onKeyUp={_handleEventoInput}/>
    </Section>
  );
};

export default ListaDeCategorias;
