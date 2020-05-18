import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Mano } from './../../clases/Mano';
import { ManoVisitor } from './../../clases/ManoVisitor';
import { Papel } from './../../clases/Papel';
import { PartidaPiedraPapelTijera } from './../../clases/Partida-piedra-papel-tijera';
import { Piedra } from './../../clases/Piedra';
import { Tijera } from './../../clases/Tijera';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {
  @Output() guardarPartida: EventEmitter<any> = new EventEmitter<any>();
  partida: PartidaPiedraPapelTijera;
  manos: Array<Mano> = [new Piedra(), new Papel(), new Tijera()];

  ngOnInit() {
    this.partida.iniciarPartida();
  }

  constructor() {
    console.info('Inicio Piedra Papel o Tijera');
    this.iniciarPartida();
  }

  iniciarPartida() {
    this.partida = new PartidaPiedraPapelTijera();
    this.partida.iniciarPartida();
    console.info('Mano IA: ', this.partida.manoIA);
  }

  verificar(mano: ManoVisitor) {
    this.partida.manoElegida = mano;
    if (this.partida.verificar()) {
      this.finalizarPartida();
    }
  }

  private finalizarPartida() {
    this.guardarPartida.emit(this.partida);
    this.partida.manoElegida = null;
  }

}
