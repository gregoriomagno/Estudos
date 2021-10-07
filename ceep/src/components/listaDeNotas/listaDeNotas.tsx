import React, {useContext} from "react";
import CardNota from "../cardNota";
import NotaContext from "../../store/Context";
import { Ul, Li } from "./style";
const ListaDeNotas: React.FC = () => {
  const {state} = useContext(NotaContext);
  return (
    <Ul>
      {state.map((nota, index) => {
        return (
          <Li key={index}>
            <CardNota titulo={nota.titulo} texto={nota.texto} id={nota.id}/>
          </Li>
        );
      })}
    </Ul>
  );
};
export default ListaDeNotas;