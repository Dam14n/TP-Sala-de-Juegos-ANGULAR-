import { FichaTateti } from './FichaTateti';

export class LineaTateti {
    private fichas: Array<FichaTateti>;

    constructor() {
        this.fichas = new Array<FichaTateti>();
    }

    public agregarFicha(ficha: FichaTateti) {
        if (this.fichas.length >= 3) {
            throw new Error('El maximo de fichas por linea es 3!!!');
        }
        this.fichas.push(ficha);
    }

    public gano(): boolean {
        const primerFicha = this.fichas[0];
        return this.fichas.every(ficha => ficha.getValor() !== '-' && ficha.getValor() === primerFicha.getValor());
    }

}
