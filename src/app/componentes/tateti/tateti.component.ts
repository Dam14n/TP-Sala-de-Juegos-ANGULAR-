import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth-service.service';
import { PartidaService } from '../../servicios/partida.service';
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
  partidaEstaGuardada = false;

  constructor(private usuarioService: AuthService, private partidaService: PartidaService) {
    this.valorFichaJugador = 'X';
  }

  ngOnInit(): void {
    this.iniciarPartida();
  }

  iniciarPartida() {
    this.partida = new PartidaTateti(undefined, undefined, this.usuarioService.obtenerUsuarioActual().usuario);
    this.partida.iniciarPartida();
    this.fichas = this.partida.getFichas();
  }

  insertarFicha(ficha: FichaTateti) {
    if (this.partida.puedeCambiarValorFicha(ficha) && !this.ganador) {
      this.fichasUsadas++;
      ficha.cambiarValor(this.valorFichaJugador);
      if (this.partida.verificar()) {
        console.log('gano');
        this.partidaEstaGuardada = true;
        this.ganador = this.valorFichaJugador;
        this.partidaService.guardarPartida(this.partida);
      } else {
        this.cambiarValorFichaJugador();
      }
    }
  }

  cambiarValorFichaJugador() {
    this.valorFichaJugador = this.valorFichaJugador === 'X' ? 'O' : 'X';
  }

  terminoPartida(): boolean {
    const terminoPartida = this.fichasUsadas === 9 || this.ganador !== undefined;
    if (terminoPartida && !this.partidaEstaGuardada) {
      this.partidaEstaGuardada = true;
      this.partidaService.guardarPartida(this.partida);
    }
    return terminoPartida;
  }

  reiniciarPartida() {
    this.fichasUsadas = 0;
    this.valorFichaJugador = 'X';
    this.ganador = undefined;
    this.partidaEstaGuardada = false;
    this.iniciarPartida();
  }

  obtenerImagenGanador(): string {
    return this.valorFichaJugador === 'X' ? './assets/imagenes/X.png' : './assets/imagenes/O.png';
  }

}
