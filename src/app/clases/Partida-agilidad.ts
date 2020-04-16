import { Division } from './Division';
import { Multiplicacion } from './Multiplicacion';
import { Operador } from './Operador';
import { Partida } from './Partida';
import { Resta } from './Resta';
import { Suma } from './Suma';

export class PartidaAgilidad extends Partida {
    OPERADORES = [new Division(), new Multiplicacion(), new Suma(), new Resta()];
    numeroIngresado = 0;
    primerNumero: number;
    segundoNumero: number;
    operador: Operador;

    constructor(nombre?: string, gano?: boolean, jugador?: string) {
        super('Velocidad y agilidad aritmética', gano, jugador);
    }

    public verificar(): boolean {
        if (this.numeroIngresado == this.operador.calcular(this.primerNumero, this.segundoNumero)) {
            this.gano = true;
        }
        return this.gano;
    }

    public iniciarPartida() {
        this.primerNumero = Math.floor((Math.random() * 100) + 1);
        this.segundoNumero = Math.floor((Math.random() * 100) + 1);
        this.operador = this.OPERADORES[Math.floor((Math.random() * 4))];
    }

}
