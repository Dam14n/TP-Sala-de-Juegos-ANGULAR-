export class Game {

  constructor(private _imagen: string, private _nombre: string, private _descripcion: string, private _routing: string) {
  }

  public get imagen(): string {
    return this._imagen;
  }

  public get routing(): string {
    return this._routing;
  }

  public get descripcion(): string {
    return this._descripcion;
  }

  public get nombre(): string {
    return this._nombre;
  }

}
