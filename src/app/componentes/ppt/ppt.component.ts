import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth-service.service';
import { PartidaService } from '../../servicios/partida.service';
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
  partida: PartidaPiedraPapelTijera;
  manos: Array<Mano> = [new Piedra(), new Papel(), new Tijera()];
  termino = false;
  estado: string = 'TIENE QUE SELECCIONAR UNA OPCION!!!';

  ngOnInit() {
    this.partida.iniciarPartida();
  }

  constructor(private usuarioService: AuthService, private partidaService: PartidaService) {
    console.info('Inicio Piedra Papel o Tijera');
    this.iniciarPartida();
  }

  iniciarPartida() {
    this.termino = false;
    this.partida = new PartidaPiedraPapelTijera(undefined, undefined, this.usuarioService.obtenerUsuarioActual().usuario);
    this.partida.iniciarPartida();
    console.info('Mano IA: ', this.partida.manoIA);
    this.estado = 'TIENE QUE SELECCIONAR UNA OPCION!!!';
  }

  verificar(mano: ManoVisitor) {
    if (this.termino) {
      return;
    }
    this.termino = true;
    this.partida.manoElegida = mano;
    this.estado = this.partida.verificar() ? 'USTED GANOOOOOO!!!!' : 'USTED PERDIOOOOO!!!!';
    this.finalizarPartida();
  }

  private finalizarPartida() {
    this.partidaService.guardarPartida(this.partida);
    this.partida.manoElegida = null;
  }

}
