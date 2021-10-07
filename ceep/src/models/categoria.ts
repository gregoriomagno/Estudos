import { Nota } from "./nota";

export class Categoria{
    private _titulo : string;
    private _notas : Array<Nota> ;

    constructor(titulo: string, notas : Array<Nota>){
        this._titulo = titulo;
        this._notas = notas;
    }


    get titulo (): string {
        return this._titulo;
    }

    get notas (): Array<Nota> {
        let auxArray = [...this._notas];
        return auxArray;
    }
    set notas (arrayNotas: Array<Nota>){
        this._notas = [...arrayNotas];
    }

}