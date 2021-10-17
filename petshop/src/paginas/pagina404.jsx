import React from 'react';
import imagem from '../assets/img/doguito404.svg';
import "../assets/css/404.css"
function Pagina404() {
    return ( 
        <main className="container flex flex--centro flex--coluna">
            <img src={imagem} alt="ilustração doguito" className="doguito-imagem"/>
            <p className="naoencontrado-texto">
                Ops, Essa pagina não existe !
            </p>
        </main>
     );
}

export default Pagina404;