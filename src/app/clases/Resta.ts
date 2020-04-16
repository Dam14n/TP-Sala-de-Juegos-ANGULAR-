import { Operador } from './Operador';

export class Resta implements Operador {

    public mostrar(): string {
        return '-';
    }

    public calcular(unNumero: number, otroNumero: number): number {
        return unNumero - otroNumero;
    }

}
