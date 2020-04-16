import { ManoVisitor } from './ManoVisitor';
import { Piedra } from './Piedra';
import { Resultado } from './Resultado';
import { Tijera } from './Tijera';
import { Mano } from './Mano';

export class Papel extends Mano implements ManoVisitor {

    constructor() {
        super('./assets/imagenes/papel.png');
    }

    resultadoContra(otraMano: ManoVisitor): Resultado {
        return otraMano.resultadoContraPapel(this);
    }

    resultadoContraPiedra(otraMano: Piedra): Resultado {
        return Resultado.GANA;
    }

    resultadoContraPapel(otraMano: Papel): Resultado {
        return Resultado.EMPATA;
    }

    resultadoContraTijera(otraMano: Tijera): Resultado {
        return Resultado.PIERDE;
    }

}
