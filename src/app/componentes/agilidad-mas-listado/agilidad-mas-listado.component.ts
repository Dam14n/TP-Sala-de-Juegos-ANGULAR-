import { Component, OnInit } from '@angular/core';
import { Partida } from '../../clases/Partida';
@Component({
  selector: 'app-agilidad-mas-listado',
  templateUrl: './agilidad-mas-listado.component.html',
  styleUrls: ['./agilidad-mas-listado.component.css']
})
export class AgilidadMasListadoComponent implements OnInit {
  public listadoParaCompartir: Array<Partida>;
  constructor() { this.listadoParaCompartir = new Array<Partida>(); }

  ngOnInit() {
  }

  tomarJuegoTerminado(partida: Partida) {
    this.listadoParaCompartir.push(partida);
    console.info('en app', this.listadoParaCompartir);
  }
}
