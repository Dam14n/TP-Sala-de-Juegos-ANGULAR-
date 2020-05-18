import { Component, OnInit } from '@angular/core';
import { PartidaAdivina } from '../../clases/Partida-adivina';
import { PartidaService } from '../../servicios/partida.service';
@Component({
  selector: 'app-adivina-mas-listado',
  templateUrl: './adivina-mas-listado.component.html',
  styleUrls: ['./adivina-mas-listado.component.css']
})
export class AdivinaMasListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;

  constructor(private partidaService: PartidaService) {
    this.partidaService.obtenerPartidasParaJuego(new PartidaAdivina().nombre).subscribe(partidas => this.listadoParaCompartir = partidas);
  }

  ngOnInit() {
  }

}
