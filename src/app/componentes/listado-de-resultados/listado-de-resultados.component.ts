
import { Component, Input, OnInit } from '@angular/core';
import { Partida } from '../../clases/Partida';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit {
  @Input() listado: Array<Partida>;


  constructor() {
  }

  ngOnInit() {

  }

  ver() {
    console.info(this.listado);
  }

}
