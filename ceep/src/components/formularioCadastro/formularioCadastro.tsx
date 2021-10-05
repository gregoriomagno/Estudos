
import React from "react";
import "./estilo.css"



const FormularioCadastro = () => {

    let titulo: string = "";
    let texto: string = "";   


    const handleMudancaTitulo = (evento: React.FormEvent<HTMLInputElement>) => {
        titulo = evento.currentTarget.value;
        console.log("titulo: " + titulo);

    }

    const handleMudancaTexto = (evento: React.FormEvent<HTMLTextAreaElement>) => {
        texto = evento.currentTarget.value as string ;
        console.log("text: " + texto);
       

    }


    return (
        <form className="form-cadastro" onSubmit={}>

            <input
                type="text"
                placeholder="Titulo"
                onChange={handleMudancaTitulo}
            />
            <textarea
                rows={15}
                placeholder="Escreva sua nota..."
                className="form-cadastro_input"
                onChange={  handleMudancaTexto}
            />
            <button className="form-cadastro_input form-cadastro_submit">Criar Nota</button>

        </form>
    );
}


export default FormularioCadastro;

