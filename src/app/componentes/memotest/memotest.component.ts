import { Router } from '@angular/router';
import { CartaMemotest } from './../../clases/CartaMemotest';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  duracionEnSegundos = 2;

  constructor(private snackBar: MatSnackBar, private router: Router) {
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
    if (!this.ultimaCarta) {
      this.ultimaCarta = carta;
      return;
    }
    if (this.esIgualALaUltimaCartaElegida(carta)) {
      this.ultimaCarta.bloquear();
      carta.bloquear();
      if (this.partida.verificar()) {
        const observableSnackbar = this.mostrarMensajeGanador()
          .afterDismissed()
          .subscribe(value => {
            this.reiniciarPartida();
            observableSnackbar.unsubscribe();
          });
      }
      this.ultimaCarta = undefined;
    } else {
      const mensajeCartasDistintas = this.mostrarMensajeCartaDistinta()
        .afterDismissed()
        .subscribe(value => {
          this.ultimaCarta.noSeleccionar();
          carta.noSeleccionar();
          this.ultimaCarta = undefined;
          mensajeCartasDistintas.unsubscribe();
          this.ngOnInit();
        });
    }
  }

  mostrarMensajeCartaDistinta(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('Ups!! No es la misma carta, volve a intentarlo!!!', 'OK', {
      duration: this.duracionEnSegundos * 1000
    });
  }

  mostrarMensajeGanador(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('Tenemos un ganador felicidades!!!!', '', {
      duration: this.duracionEnSegundos * 1000,
    });
  }

  reiniciarPartida() {
    this.elegirDificultad = true;
    this.mostrarTimer = false;
    this.cartas = [];
    // TODO view is not being refreshed
    this.navegarA('Juegos/Memotest');
  }

  esIgualALaUltimaCartaElegida(carta: CartaMemotest) {
    return this.ultimaCarta.getNombre() === carta.getNombre();
  }

  navegarA(link: string) {
    this.router.navigate([link]);
  }

}
