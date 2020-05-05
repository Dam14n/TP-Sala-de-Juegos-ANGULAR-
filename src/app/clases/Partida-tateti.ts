import { FichaTateti } from './FichaTateti';
import { LineaTateti } from './LineaTateti';
import { Partida } from './Partida';

export class PartidaTateti extends Partida {
    private FICHAS: Array<FichaTateti>;
    private LINEAS: Array<LineaTateti>;

    constructor(nombre?: string, gano?: boolean, jugador?: string) {
        super('Elige la opcion correcta', gano, jugador);
        this.iniciarPartida();
    }

    public verificar(): boolean {
        return this.LINEAS.some(linea => linea.gano());
    }

    iniciarPartida() {
        this.inicializarFichas();
        this.inicializarLineas();
    }

    private inicializarLineas() {
        this.LINEAS = [];
        this.inicializarLineasHorizontales();
        this.inicializarLineasVerticales();
        this.inicializarLineasDiagonales();
    }

    private inicializarLineasDiagonales() {
        this.inicializarDiagonales(0, 4, this.FICHAS.length);
        this.inicializarDiagonales(2, 2, this.FICHAS.length - 2);
    }

    private inicializarDiagonales(posicionInicial: number, incremento: number, limite: number) {
        const linea = new LineaTateti();
        for (let y = posicionInicial; y < limite; y += incremento) {
            const ficha = this.FICHAS[y];
            linea.agregarFicha(ficha);
        }
        this.LINEAS.push(linea);
    }

    private inicializarLineasVerticales() {
        this.inicializarRectas(1, 3, 3, () => this.FICHAS.length);
    }

    private inicializarLineasHorizontales() {
        this.inicializarRectas(3, 9, 1, (inicio: number) => inicio + 3);
    }

    private inicializarRectas(incrementox: number, limitex: number, incrementoy: number, limitey: Function) {
        for (let x = 0; x < limitex; x += incrementox) {
            const linea = new LineaTateti();
            for (let y = x; y < limitey(x); y += incrementoy) {
                const ficha = this.FICHAS[y];
                linea.agregarFicha(ficha);
            }
            this.LINEAS.push(linea);
        }
    }

    private inicializarFichas() {
        this.FICHAS = [
            new FichaTateti('-'),
            new FichaTateti('-'),
            new FichaTateti('-'),
            new FichaTateti('-'),
            new FichaTateti('-'),
            new FichaTateti('-'),
            new FichaTateti('-'),
            new FichaTateti('-'),
            new FichaTateti('-'),
        ];
    }

    public getFichas() {
        return this.FICHAS;
    }

    puedeCambiarValorFicha(ficha: FichaTateti) {
        return ficha.puedeCambiarValor();
      }
}
