import { Component, OnInit } from '@angular/core';
import { FichaTateti } from './../../clases/FichaTateti';
import { PartidaTateti } from './../../clases/Partida-tateti';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {
  fichas: FichaTateti[];
  partida: PartidaTateti;
  valorFichaJugador: string;
  ganador: string;
  fichasUsadas = 0;

  constructor() {
    this.valorFichaJugador = 'X';
  }

  ngOnInit(): void {
    this.iniciarPartida();
  }

  iniciarPartida() {
    this.partida = new PartidaTateti();
    this.partida.iniciarPartida();
    this.fichas = this.partida.getFichas();
  }

  insertarFicha(ficha: FichaTateti) {
    if (this.partida.puedeCambiarValorFicha(ficha) && !this.ganador) {
      ficha.cambiarValor(this.valorFichaJugador);
      if (this.partida.verificar()) {
        console.log('gano');
        this.ganador = this.valorFichaJugador;
      } else {
        this.cambiarValorFichaJugador();
      }
    }
  }

  cambiarValorFichaJugador() {
    this.valorFichaJugador = this.valorFichaJugador === 'X' ? 'O' : 'X';
  }

  terminoPartida(): boolean {
    return this.fichasUsadas === 9 || this.ganador !== undefined;
  }

  reiniciarPartida() {
    this.fichasUsadas = 0;
    this.valorFichaJugador = 'X';
    this.ganador = undefined;
    this.iniciarPartida();
  }

  obtenerImagenGanador(): string {
    return this.valorFichaJugador === 'X' ? './assets/imagenes/X.png' : './assets/imagenes/O.png';
  }

}
