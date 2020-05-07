import { Router } from '@angular/router';
import { CartaMemotest } from './../../clases/CartaMemotest';
import { Component, EventEmitter, OnInit, Output, NgZone } from '@angular/core';
import { Dificultad } from './../../clases/Dificultad';
import { PartidaMemotest } from './../../clases/partida-memotest';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';

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
  cartas = [];
  ultimaCarta: CartaMemotest;
  duracionEnSegundos = 1;

  constructor(private snackBar: MatSnackBar, private router: Router, private ngZone: NgZone) {
    this.partida = new PartidaMemotest();
  }

  ngOnInit(): void {
  }

  iniciarPartida(dificultad: Dificultad) {
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
    if (!this.ultimaCarta) {
      this.ultimaCarta = carta;
      return;
    }
    if (this.esIgualALaUltimaCartaElegida(carta)) {
      this.ultimaCarta.bloquear();
      if (this.partida.verificar()) {
        const observableSnackbar = this.mostrarMensajeGanador()
          .afterDismissed()
          .subscribe(value => {
            observableSnackbar.unsubscribe();
            this.reiniciarPartida();
          });
      } else {
        this.mostrarMensajeCartaIgual();
      }
      this.ultimaCarta = undefined;
    } else {
      const mensajeCartasDistintas = this.mostrarMensajeCartaDistinta()
        .afterDismissed()
        .subscribe(value => {
          mensajeCartasDistintas.unsubscribe();
          this.ultimaCarta.desbloquear();
          this.ultimaCarta.noSeleccionar();
          carta.desbloquear();
          carta.noSeleccionar();
          this.ultimaCarta = undefined;
          this.actualizarVista();
        });
    }
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
      duration: this.duracionEnSegundos * 1000
    });
  }

  reiniciarPartida() {
    this.elegirDificultad = true;
    this.mostrarTimer = false;
    this.cartas = [];
    this.ultimaCarta = undefined;
    // TODO view is not being refreshed
    this.actualizarVista();
  }

  esIgualALaUltimaCartaElegida(carta: CartaMemotest) {
    return this.ultimaCarta.getNombre() === carta.getNombre();
  }

  navegarA(link: string) {
    this.router.navigate([link]);
  }

}
