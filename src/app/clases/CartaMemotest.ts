export class CartaMemotest {
    seleccionada: boolean;
    bloqueada: boolean;
    DEFAULT_IMAGE = './assets/imagenes/dorsoCarta.jpg';

    constructor(private imagen: string, private nombre: string) {
        this.bloqueada = false;
    }

    getImagenReal() {
        return this.imagen;
    }

    getImagen(): string {
        return this.bloqueada ? this.imagen : this.seleccionada ? this.imagen : this.DEFAULT_IMAGE;
    }

    seleccionar() {
        this.seleccionada = true;
    }

    noSeleccionar() {
        this.seleccionada = false;
    }

    bloquear() {
        this.seleccionada = false;
        this.bloqueada = true;
    }

    estaBloqueada(): boolean {
        return this.bloqueada;
    }

    estaSeleccioanda(): boolean {
        return this.seleccionada;
    }

    getNombre(): string {
        return this.nombre;
    }

}
