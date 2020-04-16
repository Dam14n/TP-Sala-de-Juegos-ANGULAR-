import { Partida } from './Partida';

export class PartidaAdivina extends Partida {
  numeroSecreto = 0;
  numeroIngresado = 0;

  constructor(nombre?: string, gano?: boolean, jugador?: string) {
    super('Adivina el número', gano, jugador);
  }

  public verificar() {
    if (this.numeroIngresado == this.numeroSecreto) {
      this.gano = true;
    }
    return this.gano;
  }

  public generarnumero() {
    this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
    console.info('numero Secreto:' + this.numeroSecreto);
    this.gano = false;
  }

  public retornarAyuda = () => this.numeroIngresado < this.numeroSecreto ? 'Falta' : 'Te pasate';

}
