export class FichaTateti {

    constructor(private valor: string) { }

    public cambiarValor(nuevoValor: string) {
        if (nuevoValor !== 'X' && nuevoValor !== 'O') {
            throw new Error(`La ficha solo puede tener valor 'X' o 'O'!!!!`);
        }
        this.valor = nuevoValor;
    }

    public getValor() {
        return this.valor;
    }

    puedeCambiarValor() {
        return this.valor === '-';
    }
}
