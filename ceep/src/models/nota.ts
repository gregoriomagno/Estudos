export class Nota {
  private _id: number;
  private _titulo : string;
  private _texto : string;
  private static _numeroNotasCriadas = 0;

  constructor(titulo: string, texto: string) {
    this._titulo = titulo;
    this._texto = texto;
    this._id = Nota._numeroNotasCriadas;
    Nota._numeroNotasCriadas++;
  }
  get id(): number {
    return this._id;
  }
  get titulo(): string {
    return this._titulo;
  }
  get texto(): string {
    return this._texto;
  }

  set titulo(titulo: string) {
    this._titulo = titulo;
  }

  set texto(texto: string) {
    this._texto = texto;
  }
}
