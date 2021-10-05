import React, { Component } from "react";
import CardNota from "../cardNota/cardNota";
import "./listaDeNotas.css";
export default class ListaDeNotas extends Component {
    render() {
        return (
            <ul className="lista-notas">
                {
                    Array.of("TRABALHO", "ESTUDOS", "TRABALHO").map((categoria,index) => {
                        return (
                            <li key={index} className="lsita-notas_item">
                                <CardNota />
                            </li>
                        );
                       
                    })
                }

            </ul>
        );
    }
}