import * as React from "react";
import Button from "@material-ui/core/Button";
import { FunctionComponent } from "react";

interface FormularioCadastroProps {}

const FormularioCadastro: FunctionComponent<FormularioCadastroProps> = () => {
  return (
    <form>
      <label> Nome </label>
      <input type="text" />
      <label> Sobrenome </label>
      <input type="text" />
      <label> CPF </label>
      <input type="text" />
      <label> Promoções </label>
      <input type="checkbox" />
      <label> Novidades </label>
      <input type="checkbox" />
      <Button type="submit" variant="contained" color="primary">
        {" "}
        Cadastrar
      </Button>
    </form>
  );
};

export default FormularioCadastro;
