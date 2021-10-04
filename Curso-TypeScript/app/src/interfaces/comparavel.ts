import { Negociacoes } from "../models/negociacoes";

export interface Comparavel<T>{
    ehIgual(objeto : T ) : boolean;
}