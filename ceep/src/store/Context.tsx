import React, { useState, createContext } from "react";
import { Categoria } from "../models/categoria";




type PropsContext = {
  state: Array<Categoria>;
  setState: React.Dispatch<React.SetStateAction<Array<Categoria>>>;
};

const DEFAULT_VALUE = {
  state: [],
  setState: ()=>{},
};
const NotaContext = createContext<PropsContext>(DEFAULT_VALUE);

const NotaContextProvider: React.FC = ({children}) =>{

    const [state,setState] = useState<Array<Categoria>>(DEFAULT_VALUE.state);

    return(

        <NotaContext.Provider value={{state,setState}}>{children} </NotaContext.Provider>
       
    );
}


export {NotaContextProvider}
export default NotaContext;