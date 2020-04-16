import { ManoVisitor } from './ManoVisitor';
import { Papel } from './Papel';
import { Resultado } from './Resultado';
import { Tijera } from './Tijera';
import { Mano } from './Mano';

export class Piedra extends Mano implements ManoVisitor {

    constructor() {
        super('./assets/imagenes/piedra.png');
    }

    resultadoContra(otraMano: ManoVisitor): Resultado {
        return otraMano.resultadoContraPiedra(this);
    }

    resultadoContraPiedra(otraMano: Piedra): Resultado {
        return Resultado.EMPATA;
    }

    resultadoContraPapel(otraMano: Papel): Resultado {
        return Resultado.PIERDE;
    }

    resultadoContraTijera(otraMano: Tijera): Resultado {
        return Resultado.GANA;
    }
}
