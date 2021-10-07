import { Section, Header, H3, P } from "./style";
import { ReactComponent as DeleteSVG } from "../../assets/img/delete.svg";
import { useContext } from "react";
import NotaContext from "../../store/Context";
import { Categoria } from "../../models/categoria";
function CardNota(props: {
  titulo: string;
  texto: string;
  id: number;
  categoria: string;
}) {
  const { state, setState } = useContext(NotaContext);

  const deleteNota = (evento: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    state.forEach((categoria, index) => {
      if (categoria.titulo === props.categoria) {
        let auxArray: Array<Categoria> = [...state];
        auxArray[index].notas = [
          ...auxArray[index].notas.filter((element) => {
            return element.id !== props.id;
          }),
        ];

        setState(auxArray);
        console.log("delete");
      }
    });
  };

  return (
    <Section>
      <Header>
        <H3>{props.titulo}</H3>
        <DeleteSVG onClick={deleteNota} />
      </Header>
      <P>{props.texto}</P>
    </Section>
  );
}

export default CardNota;
