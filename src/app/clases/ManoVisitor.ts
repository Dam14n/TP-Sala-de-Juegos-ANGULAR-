import { Papel } from './Papel';
import { Piedra } from './Piedra';
import { Resultado } from './Resultado';
import { Tijera } from './Tijera';

export interface ManoVisitor {

    resultadoContra(otraMano: ManoVisitor): Resultado;
    resultadoContraPiedra(otraMano: Piedra): Resultado;
    resultadoContraPapel(otraMano: Papel): Resultado;
    resultadoContraTijera(otraMano: Tijera): Resultado;

}
