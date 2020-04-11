export abstract class Partida {
  public nombre: string;
  public jugador: string;
  public gano = false;

  constructor(nombre?: string, gano?: boolean, jugador?: string) {
    this.nombre = nombre ? nombre : 'Sin Nombre';
    this.gano = gano === true;
    this.jugador = jugador ? jugador : 'natalia natalia';
  }

  public abstract verificar(): boolean;

  public retornarAyuda = () => 'NO hay Ayuda definida';

}
