import React, { useState } from "react";
import { FunctionComponent } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

interface FormularioCadastroProps {
  onSubmit: (event: {}) => void;
  validarCPF: (cpf: string) => any;
}

const FormularioCadastro: FunctionComponent<FormularioCadastroProps> = ({
  onSubmit,validarCPF
}) => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({ valido: false, mensagem: "" });
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ nome, sobrenome, cpf, novidades, promocoes });
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="Nome"
        variant="outlined"
        label="Nome"
        margin="normal"
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="Sobrenome"
        variant="outlined"
        label="Sobrenome"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={(event) => {
          const ehValido = validarCPF(event.target.value);
          setErros( ehValido);
        }}
        error={erros.valido}
        helperText={erros.valido && erros.mensagem}
        id="CPF"
        variant="outlined"
        label="CPF"
        margin="normal"
        fullWidth
      />
      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            id="Promoções"
            name="Promoções"
            color="primary"
            checked={promocoes}
          />
        }
      />

      <FormControlLabel
        label="Novidade"
        control={
          <Switch
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            id="Novidade"
            name="Novidade"
            color="primary"
            checked={novidades}
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        cadastrar
      </Button>
    </form>
  );
};

export default FormularioCadastro;
