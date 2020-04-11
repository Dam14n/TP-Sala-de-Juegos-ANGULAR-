import { Component, OnInit } from '@angular/core';
import { Partida } from '../../clases/Partida';
@Component({
  selector: 'app-adivina-mas-listado',
  templateUrl: './adivina-mas-listado.component.html',
  styleUrls: ['./adivina-mas-listado.component.css']
})
export class AdivinaMasListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;

  constructor() {
    this.listadoParaCompartir = new Array<any>()
  }

  ngOnInit() {
  }

  tomarJuegoTerminado(juego: Partida) {
    this.listadoParaCompartir.push(juego);
  }
}
