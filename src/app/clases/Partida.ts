export abstract class Partida {
  public nombre: string;
  public jugador: string;
  public gano = false;

  constructor(nombre: string = 'Sin Nombre', gano: boolean = false, jugador: string = 'natalia natalia') {
    this.nombre = nombre;
    this.gano = gano;
    this.jugador = jugador;
  }

  public abstract verificar(): boolean;

  public retornarAyuda = () => 'NO hay Ayuda definida';

}
