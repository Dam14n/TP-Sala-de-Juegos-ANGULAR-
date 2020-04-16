import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PartidaAgilidad } from '../../clases/Partida-agilidad';

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
  @Output() enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  partida: PartidaAgilidad;
  ocultarVerificar: boolean;
  tiempo: number;
  repetidor: any;
  private readonly DEFAULT_TIME = 10;

  ngOnInit() {
    this.partida.iniciarPartida();
  }

  constructor() {
    this.ocultarVerificar = true;
    this.tiempo = this.DEFAULT_TIME;
    this.partida = new PartidaAgilidad();
    console.info('Inicio agilidad');
  }

  iniciarPartida() {
    this.partida = new PartidaAgilidad();
    this.partida.iniciarPartida();
    console.log('Respuesta cuenta: ' + this.partida.operador.calcular(this.partida.primerNumero, this.partida.segundoNumero));
    this.ocultarVerificar = false;
    this.repetidor = setInterval(() => {
      this.tiempo--;
      console.log('llego', this.tiempo);
      if (this.tiempo === 0) {
        this.finalizarPartida();
      }
    }, 900);

  }
  verificar() {
    if (this.partida.verificar()) {
      this.finalizarPartida();
    }
  }

  private finalizarPartida() {
    clearInterval(this.repetidor);
    this.ocultarVerificar = true;
    this.tiempo = this.DEFAULT_TIME;
    this.enviarJuego.emit(this.partida);
    this.partida.numeroIngresado = 0;
  }
}
