import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../servicios/auth-service.service';
import { PartidaService } from '../../servicios/partida.service';
import { CartaMemotest } from './../../clases/CartaMemotest';
import { Dificultad } from './../../clases/Dificultad';
import { ParDeCartas } from './../../clases/ParDeCartas';
import { PartidaMemotest } from './../../clases/partida-memotest';

@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css']
})
export class MemotestComponent implements OnInit {
  partida: PartidaMemotest;
  elegirDificultad = true;
  mostrarTimer = false;
  cartas: Array<CartaMemotest>;
  duracionEnSegundos = 1;
  unParDeCartas: ParDeCartas;
  paresDeCartas: Array<ParDeCartas>;

  constructor(private snackBar: MatSnackBar, private router: Router, private usuarioService: AuthService, private partidaService: PartidaService,private route: ActivatedRoute) {
    this.partida = new PartidaMemotest(undefined, undefined, this.usuarioService.obtenerUsuarioActual().usuario);
    this.cartas = new Array<CartaMemotest>();
  }

  ngOnInit(): void {
  }

  iniciarPartida(dificultad: Dificultad) {
    this.paresDeCartas = new Array<ParDeCartas>();
    this.unParDeCartas = new ParDeCartas();
    this.paresDeCartas.push(this.unParDeCartas);
    this.elegirDificultad = false;
    this.partida = new PartidaMemotest(undefined, undefined, this.usuarioService.obtenerUsuarioActual().usuario);
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
    return this.partida.verificar();
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

  onPerder = () => {
    const mensajePerdedor = this.mostrarMensajePerdedor()
      .afterDismissed()
      .subscribe(value => {
        mensajePerdedor.unsubscribe();
        this.reiniciarPartida();
      });
  }

  actualizarVista() {
    this.navegarA();
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

  mostrarMensajePerdedor(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('Se te acabo el tiempo, PERDISTE JAJAJAJA!!!!', '', {
      duration: 3 * 1000
    });
  }

  reiniciarPartida() {
    if (!this.elegirDificultad) {
      this.partidaService.guardarPartida(this.partida);
      this.elegirDificultad = true;
      this.mostrarTimer = false;
      this.cartas = [];
      // TODO view is not being refreshed
      this.actualizarVista();
    }
  }

  navegarA() {
    this.router.navigate([this.router.url]);
  }

}
