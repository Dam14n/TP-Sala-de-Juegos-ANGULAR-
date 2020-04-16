import { Mano } from './Mano';
import { ManoVisitor } from './ManoVisitor';
import { Papel } from './Papel';
import { Piedra } from './Piedra';
import { Resultado } from './Resultado';

export class Tijera extends Mano implements ManoVisitor {

    constructor() {
        super('./assets/imagenes/tijera.png');
    }

    resultadoContra(otraMano: ManoVisitor): Resultado {
        return otraMano.resultadoContraTijera(this);
    }

    resultadoContraPiedra(otraMano: Piedra): Resultado {
        return Resultado.PIERDE;
    }

    resultadoContraPapel(otraMano: Papel): Resultado {
        return Resultado.GANA;
    }

    resultadoContraTijera(otraMano: Tijera): Resultado {
        return Resultado.EMPATA;
    }

}
