import { Component, OnInit } from '@angular/core';
import { Partida } from '../../clases/Partida';
@Component({
  selector: 'app-agilidad-mas-listado',
  templateUrl: './agilidad-mas-listado.component.html',
  styleUrls: ['./agilidad-mas-listado.component.css']
})
export class AgilidadMasListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;
  constructor() { this.listadoParaCompartir = new Array<any>(); }

  ngOnInit() {
  }

  tomarJuegoTerminado(juego: Partida) {
    this.listadoParaCompartir.push(juego);
    console.info('en app', this.listadoParaCompartir);
  }
}
