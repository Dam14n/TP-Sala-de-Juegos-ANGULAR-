import { ParDeCartas } from './../../clases/ParDeCartas';
import { Router } from '@angular/router';
import { CartaMemotest } from './../../clases/CartaMemotest';
import { Component, EventEmitter, OnInit, Output, NgZone } from '@angular/core';
import { Dificultad } from './../../clases/Dificultad';
import { PartidaMemotest } from './../../clases/partida-memotest';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css']
})
export class MemotestComponent implements OnInit {
  @Output() enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  partida: PartidaMemotest;
  elegirDificultad = true;
  mostrarTimer = false;
  cartas: Array<CartaMemotest>;
  duracionEnSegundos = 1;
  unParDeCartas: ParDeCartas;
  paresDeCartas: Array<ParDeCartas>;

  constructor(private snackBar: MatSnackBar, private router: Router, private ngZone: NgZone) {
    this.partida = new PartidaMemotest();
    this.cartas = new Array<CartaMemotest>();
  }

  ngOnInit(): void {
  }

  iniciarPartida(dificultad: Dificultad) {
    this.paresDeCartas = new Array<ParDeCartas>();
    this.unParDeCartas = new ParDeCartas();
    this.paresDeCartas.push(this.unParDeCartas);
    this.elegirDificultad = false;
    this.partida = new PartidaMemotest();
    this.partida.iniciarPartida(dificultad);
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
    carta.bloquear();
    this.unParDeCartas.agregar(carta, () => {
      this.unParDeCartas = new ParDeCartas();
      this.paresDeCartas.push(this.unParDeCartas);
      this.unParDeCartas.agregar(carta, () => { });
    });
    this.paresDeCartas.forEach(par => par.verificar(this.onCartasIguales, this.onCartasDistintas));
    if (this.gano()) {
      this.onGanar();
    }
  }

  gano(): boolean {
    return this.cartas.every(carta => carta.estaBloqueada());
  }

  onCartasIguales = () => {
    const mensajeCartasIguales = this.mostrarMensajeCartaIgual()
      .afterDismissed()
      .subscribe(value => {
        mensajeCartasIguales.unsubscribe();
        this.actualizarVista();
      });
  }

  onCartasDistintas = (parDeCartas: ParDeCartas) => {
    const mensajeCartasDistintas = this.mostrarMensajeCartaDistinta()
      .afterDismissed()
      .subscribe(value => {
        mensajeCartasDistintas.unsubscribe();
        parDeCartas.ocultarCartasDistintas();
        this.actualizarVista();
      });
  }

  onGanar = () => {
    const mensajeGanador = this.mostrarMensajeGanador()
      .afterDismissed()
      .subscribe(value => {
        mensajeGanador.unsubscribe();
        this.reiniciarPartida();
      });
  }


  actualizarVista() {
    this.navegarA('Juegos/Memotest');
  }

  mostrarMensajeCartaIgual(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('Excelente!!! sigue jugando hasta ganar!!!', 'OK', {
      duration: this.duracionEnSegundos * 1000
    });
  }

  mostrarMensajeCartaDistinta(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('Ups!! No es la misma carta, volve a intentarlo!!!', 'OK', {
      duration: this.duracionEnSegundos * 1000
    });
  }

  mostrarMensajeGanador(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('Tenemos un ganador felicidades!!!!', '', {
      duration: 5 * 1000
    });
  }

  reiniciarPartida() {
    this.elegirDificultad = true;
    this.mostrarTimer = false;
    this.cartas = [];
    // TODO view is not being refreshed
    this.actualizarVista();
  }

  navegarA(link: string) {
    this.router.navigate([link]);
  }

}
