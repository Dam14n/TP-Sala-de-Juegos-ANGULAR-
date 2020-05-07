export class CartaMemotest {
    seleccionada: boolean;
    bloqueada: boolean;
    DORSO_CARTA = './assets/imagenes/dorsoCarta.jpg';

    constructor(private imagen: string, private nombre: string) {
        this.bloqueada = false;
    }

    getImagen(): string {
        return this.imagen;
    }

    getDorso(): string {
        return this.DORSO_CARTA;
    }

    seleccionar() {
        this.seleccionada = true;
    }

    noSeleccionar() {
        this.seleccionada = false;
    }

    bloquear() {
        this.bloqueada = true;
    }

    desbloquear() {
        this.bloqueada = false;
    }

    estaBloqueada(): boolean {
        return this.bloqueada;
    }

    estaSeleccionada(): boolean {
        return this.seleccionada;
    }

    getNombre(): string {
        return this.nombre;
    }

}
