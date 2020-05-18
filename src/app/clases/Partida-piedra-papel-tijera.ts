import { ManoVisitor } from './ManoVisitor';
import { Papel } from './Papel';
import { Partida } from './Partida';
import { Piedra } from './Piedra';
import { Resultado } from './Resultado';
import { Tijera } from './Tijera';

export class PartidaPiedraPapelTijera extends Partida {
    MANOS: Array<ManoVisitor> = [new Piedra(), new Papel(), new Tijera()];
    manoElegida: ManoVisitor;
    manoIA: ManoVisitor;

    constructor(nombre?: string, gano?: boolean, jugador?: string) {
        super('Piedra Papel o Tijera', gano, jugador);
    }

    public verificar(): boolean {
        const resultado = this.manoIA.resultadoContra(this.manoElegida);
        console.info(Resultado[resultado]);
        if (resultado === Resultado.GANA) {
            this.gano = true;
        }
        return this.gano;
    }

    iniciarPartida() {
        this.manoIA = this.MANOS[Math.floor((Math.random() * this.MANOS.length))];
    }

}
