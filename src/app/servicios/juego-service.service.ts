import { Injectable } from '@angular/core';
import { Juego } from './../clases/Juego';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  constructor() { }

  public obtenerJuegos = (): Array<Juego> => {
    const miArray: Array<Juego> = new Array<Juego>();
    miArray.push(new Juego('./assets/imagenes/cerebro.jpg', 'Velocidad y agilidad aritmética', 'Juego de agilidad mental', 'Agilidad'));
    miArray.push(new Juego('./assets/imagenes/ppt.jpg', 'Piedra Papel o Tijera', 'Juega contra la máquina', 'PPT'));
    miArray.push(new Juego('./assets/imagenes/adivina.png', 'Adivina el número secreto', 'Juega de estrategia', 'Adivina'));
    return miArray;
  }
}
