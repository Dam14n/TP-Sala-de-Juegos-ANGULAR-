import { Partida } from './Partida';

export class PartidaAgilidad extends Partida {
    numeroSecreto: number = 0;
    private _numeroIngresado: number = 0;

    constructor(nombre?: string, gano?: boolean, jugador?: string) {
        super('Velocidad y agilidad aritmética', gano, jugador);
    }

    public verificar(): boolean {
        throw new Error('Method not implemented.');
    }


    public get numeroIngresado(): number {
        return this._numeroIngresado;
    }

    public set numeroIngresado(nuevoNumero: number) {
        this._numeroIngresado = nuevoNumero;
    }


}
