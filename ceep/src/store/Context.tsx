import React, { useState, createContext } from "react";
import { Nota } from "../models/nota";




type PropsNotaContext = {
  state: Array<Nota>;
  setState: React.Dispatch<React.SetStateAction<Array<Nota>>>;
};

const DEFAULT_VALUE = {
  state: [],
  setState: ()=>{},
};
const NotaContext = createContext<PropsNotaContext>(DEFAULT_VALUE);

const NotaContextProvider: React.FC = ({children}) =>{

    const [state,setState] = useState<Array<Nota>>(DEFAULT_VALUE.state);

    return(

        <NotaContext.Provider value={{state,setState}}>{children} </NotaContext.Provider>
       
    );
}


export {NotaContextProvider}
export default NotaContext;