import { CartaMemotest } from './../../clases/CartaMemotest';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Dificultad } from './../../clases/Dificultad';
import { PartidaMemotest } from './../../clases/partida-memotest';

@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css']
})
export class MemotestComponent implements OnInit {
  @Output() enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  partida: PartidaMemotest;
  elegirDificultad = true;
  mostrarCartas = false;
  mostrarTimer = false;
  cartas = [];
  ultimaCarta: CartaMemotest;

  constructor() {
    this.partida = new PartidaMemotest();
  }

  ngOnInit(): void {
  }

  iniciarPartida(dificultad: Dificultad) {
    this.elegirDificultad = false;
    this.partida = new PartidaMemotest();
    this.partida.iniciarPartida(dificultad);
    this.mostrarCartas = true;
    if (dificultad === Dificultad.DIFICIL) {
      this.mostrarTimer = true;
    }
    this.obtenerCartas();
  }

  obtenerCartas() {
    this.cartas = this.partida.obtenerCartasParaJugar();
  }

  cartaSeleccionada(carta: CartaMemotest) {
    carta.seleccionar();
    if (!this.ultimaCarta) {
      this.ultimaCarta = carta;
      return;
    }
    if (this.esIgualALaUltimaCartaElegida(carta)) {
      if (this.verificarSiGano()) {

      }
      this.ultimaCarta.bloquear();
      carta.bloquear();
    } else {
      this.ultimaCarta.noSeleccionar();
      carta.noSeleccionar();
    }
    this.ultimaCarta = undefined;
  }

  verificarSiGano() {
    return true;
  }

  esIgualALaUltimaCartaElegida(carta: CartaMemotest) {
    return this.ultimaCarta.getNombre() === carta.getNombre();
  }

}
