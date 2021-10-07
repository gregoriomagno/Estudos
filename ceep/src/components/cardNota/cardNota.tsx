import { Section, Header, H3, P } from "./style";
import { ReactComponent as DeleteSVG } from "../../assets/img/delete.svg";
import { useContext } from "react";
import NotaContext from "../../store/Context";
import { Nota } from "../../models/nota";
function CardNota(props: { titulo: string; texto: string; id: number }) {
  const { state, setState } = useContext(NotaContext);

  const deleteNota = (evento: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    let auxArray: Array<Nota> = [...state];

    setState([
      ...auxArray.filter((element) => {
        return element.id !== props.id;
      }),
    ]);
    console.log("delete");
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
