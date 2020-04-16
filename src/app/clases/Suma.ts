import { Operador } from './Operador';

export class Suma implements Operador {

    public mostrar(): string {
        return '+';
    }

    public calcular(unNumero: number, otroNumero: number): number {
        return unNumero + otroNumero;
    }

}
