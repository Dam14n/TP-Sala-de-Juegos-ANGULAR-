import { CartaMemotest } from './CartaMemotest';
import { Dificultad } from './Dificultad';
import { Partida } from './Partida';

export class PartidaMemotest extends Partida {
    ALL_CARDS: Array<CartaMemotest>;
    INITIAL_CARDS: Array<CartaMemotest>;
    IN_GAME_CARDS: Array<CartaMemotest>;

    constructor(nombre?: string, gano?: boolean, jugador?: string) {
        super('Elige la opcion correcta', gano, jugador);
        this.ALL_CARDS = Array<CartaMemotest>();
        this.INITIAL_CARDS = Array<CartaMemotest>();
        this.IN_GAME_CARDS = Array<CartaMemotest>();
        this.inicializarTodasLasCartas();
    }

    public verificar(): boolean {
        return this.IN_GAME_CARDS.every(carta => carta.estaSeleccionada() && carta.estaBloqueada());
    }

    public iniciarPartida(dificultad: Dificultad) {
        switch (dificultad) {
            case Dificultad.FACIL:
                this.setCantidadDeCartas(2);
                break;
            case Dificultad.MEDIO:
                this.setCantidadDeCartas(4);
                break;
            case Dificultad.DIFICIL:
                this.setCantidadDeCartas(10);
                break;
            default:
                throw new Error('No se puede iniciar una partida de Memotest sin elegir dificultad!!!');
        }
    }

    public obtenerCartasParaJugar(): Array<CartaMemotest> {
        return this.mezclar(this.IN_GAME_CARDS);
    }

    private setCantidadDeCartas(cantidadDeCartas: number) {
        this.INITIAL_CARDS.push(...this.ALL_CARDS);
        for (let index = 0; index < cantidadDeCartas; index++) {
            const carta = this.INITIAL_CARDS[Math.floor((Math.random() * this.INITIAL_CARDS.length))];
            this.IN_GAME_CARDS.push(carta);
            this.IN_GAME_CARDS.push(this.duplicarCarta(carta));
            this.eliminarDeListado(this.INITIAL_CARDS, carta);
        }
    }

    private duplicarCarta(carta: CartaMemotest): CartaMemotest {
        return new CartaMemotest(carta.getImagen(), carta.getNombre());
    }

    private eliminarDeListado(listado: Array<CartaMemotest>, carta: CartaMemotest) {
        const index = listado.indexOf(carta, 0);
        if (index > -1) {
            listado.splice(index, 1);
        }
    }

    private inicializarTodasLasCartas() {
        this.ALL_CARDS.push(new CartaMemotest('./assets/imagenes/carta1.jpg', 'IRON MAN'));
        this.ALL_CARDS.push(new CartaMemotest('./assets/imagenes/carta2.jpg', 'CAPITAN AMERICA'));
        this.ALL_CARDS.push(new CartaMemotest('./assets/imagenes/carta3.jpg', 'THOR'));
        this.ALL_CARDS.push(new CartaMemotest('./assets/imagenes/carta4.jpg', 'HULK'));
        this.ALL_CARDS.push(new CartaMemotest('./assets/imagenes/carta5.jpg', 'VIUDA NEGRA'));
        this.ALL_CARDS.push(new CartaMemotest('./assets/imagenes/carta6.jpg', 'VISION'));
        this.ALL_CARDS.push(new CartaMemotest('./assets/imagenes/carta7.jpg', 'DR STRANGE'));
        this.ALL_CARDS.push(new CartaMemotest('./assets/imagenes/carta8.jpg', 'PANTERA NEGRA'));
        this.ALL_CARDS.push(new CartaMemotest('./assets/imagenes/carta9.jpg', 'ANT MAN'));
        this.ALL_CARDS.push(new CartaMemotest('./assets/imagenes/carta10.jpg', 'SPIDER MAN'));
        this.ALL_CARDS.push(new CartaMemotest('./assets/imagenes/carta11.jpg', 'GAMORA'));
    }

    // Code from https://javascript.info/task/shuffle
    private mezclar(array: Array<any>) {
        return array.sort(() => Math.random() - 0.5);
    }

}
