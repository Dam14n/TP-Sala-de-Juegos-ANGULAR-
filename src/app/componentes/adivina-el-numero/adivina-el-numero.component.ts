
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PartidaAdivina } from '../../clases/Partida-adivina';

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {
  @Output() enviarJuego: EventEmitter<any> = new EventEmitter<any>();

  partida: PartidaAdivina;
  Mensajes: string;
  contador: number;
  ocultarVerificar: boolean;

  constructor() {
    this.partida = new PartidaAdivina();
    console.info('numero Secreto:', this.partida.numeroSecreto);
    this.ocultarVerificar = false;
  }
  generarnumero() {
    this.partida = new PartidaAdivina();
    this.partida.generarnumero();
    this.contador = 0;
  }

  verificar() {
    this.contador++;
    this.ocultarVerificar = true;
    console.info('numero Secreto:', this.partida.gano);
    if (this.partida.verificar()) {
      this.enviarJuego.emit(this.partida);
      this.mostarMensaje('Sos un Genio!!!', true);
      this.partida.numeroSecreto = 0;
    } else {
      let mensaje: string;
      switch (this.contador) {
        case 1:
          mensaje = 'No, intento fallido, animo';
          break;
        case 2:
          mensaje = 'No,Te estaras Acercando???';
          break;
        case 3:
          mensaje = 'No es, Yo crei que la tercera era la vencida.';
          break;
        case 4:
          mensaje = 'No era el  ' + this.partida.numeroIngresado;
          break;
        case 5:
          mensaje = ' intentos y nada.';
          break;
        case 6:
          mensaje = 'Afortunado en el amor';
          break;
        default:
          mensaje = 'Ya le erraste ' + this.contador + ' veces';
          break;
      }
      this.mostarMensaje('#' + this.contador + ' ' + mensaje + ' ayuda :' + this.partida.retornarAyuda());
    }
    console.info('numero Secreto:', this.partida.gano);
  }

  mostarMensaje(mensaje: string = 'este es el mensaje', ganador: boolean = false) {
    this.Mensajes = mensaje;
    const x = document.getElementById('snackbar');
    x.className = ganador ? 'show Ganador' : 'show Perdedor';
    const modelo = this;
    setTimeout(function () {
      x.className = x.className.replace('show', '');
      modelo.ocultarVerificar = false;
    }, 3000);
    console.info('objeto', x);
  }
  ngOnInit() {
  }

}
