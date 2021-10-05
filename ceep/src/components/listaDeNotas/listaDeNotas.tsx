import React, { Component } from "react";
import CardNota from "../cardNota";
import "./listaDeNotas.css";
export default class ListaDeNotas extends Component {
    render() {
        return (
            <ul className="lista-notas">
                {
                    Array.of("TRABALHO", "ESTUDOS", "TRABALHO",).map((categoria,index) => {
                        return (
                            <li key={index} className="lista-notas_item">
                                <CardNota />
                            </li>
                        );
                       
                    })
                }

            </ul>
        );
    }
}