import { Injectable } from '@angular/core';
import { Game } from '../clases/Game';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  constructor() { }

  public obtenerJuegos = (): Array<Game> => {
    const miArray: Array<Game> = new Array<Game>();
    miArray.push(new Game('./assets/imagenes/cerebro.jpg', 'Velocidad y agilidad aritmética', 'Juego de agilidad mental', 'Agilidad'));
    miArray.push(new Game('./assets/imagenes/ppt.jpg', 'Piedra Papel o Tijera', 'Juega contra la máquina', 'PPT'));
    miArray.push(new Game('./assets/imagenes/adivina.png', 'Adivina el número secreto', 'Juego de estrategia', 'Adivina'));
    return miArray;
  }
}
