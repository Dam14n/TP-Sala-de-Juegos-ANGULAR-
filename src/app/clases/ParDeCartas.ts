import { CartaMemotest } from './CartaMemotest';

export class ParDeCartas {
    private cartas: Array<CartaMemotest>;
    private cartasYaVerificadas = false;

    constructor() {
        this.cartas = new Array<CartaMemotest>();
    }

    agregar(carta: CartaMemotest, onError: Function) {
        if (this.cartas.length >= 2) {
            console.log('un par de cartas solo puede tener 2 cartas!!!');
            return onError();
        }
        this.cartas.push(carta);
    }

    verificar(onCartasIguales: Function, onCartasDistintas: Function): boolean {
        if (this.cartasYaVerificadas) {
            return true;
        }
        if (this.cartas.length !== 2) {
            return false;
        }
        this.cartasYaVerificadas = true;
        return this.sonIguales() ? onCartasIguales() : onCartasDistintas(this);
    }

    private sonIguales(): boolean {
        const unaCarta = this.cartas[0];
        const otraCarta = this.cartas[1];
        return unaCarta.getNombre() === otraCarta.getNombre();
    }

    ocultarCartasDistintas() {
        const unaCarta = this.cartas[0];
        const otraCarta = this.cartas[1];
        otraCarta.desbloquear();
        otraCarta.noSeleccionar();
        unaCarta.desbloquear();
        unaCarta.noSeleccionar();
    }

}
