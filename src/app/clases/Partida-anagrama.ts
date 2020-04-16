import { Partida } from './Partida';

export class PartidaAnagrama extends Partida {
    PALABRAS: Array<string> = ['TEST', 'JUEGO', 'JUGADOR', 'ARGENTINA', 'DAMIAN', 'OCTAVIO'];
    palabraDesordenada: string;
    palabra: string;
    palabraIngresada: string;

    constructor(nombre?: string, gano?: boolean, jugador?: string) {
        super('Adivina la palabra', gano, jugador);
    }

    public verificar(): boolean {
        if (this.palabraIngresada.toLowerCase() === this.palabra.toLowerCase()) {
            this.gano = true;
        }
        return this.gano;
    }

    iniciarPartida() {
        this.palabra = this.PALABRAS[Math.floor((Math.random() * this.PALABRAS.length))];
        this.palabraDesordenada = this.mezclar(this.palabra);
    }

    mezclar(palabra: string): string {
        const arr = palabra.split('');
        arr.sort(() => 0.5 - Math.random());
        const nuevaPalabra = arr.join('');
        return nuevaPalabra === palabra ? this.mezclar(palabra) : nuevaPalabra;
    }

}
