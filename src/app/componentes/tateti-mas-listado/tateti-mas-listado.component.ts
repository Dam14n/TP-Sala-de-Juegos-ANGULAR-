import { Component, OnInit } from '@angular/core';
import { Partida } from '../../clases/Partida';
import { PartidaTateti } from '../../clases/Partida-tateti';
import { PartidaService } from '../../servicios/partida.service';

@Component({
  selector: 'app-tateti-mas-listado',
  templateUrl: './tateti-mas-listado.component.html',
  styleUrls: ['./tateti-mas-listado.component.css']
})
export class TatetiMasListadoComponent implements OnInit {

  public listadoParaCompartir: Array<Partida>;

  constructor(private partidaService: PartidaService) {
    this.partidaService.obtenerPartidasParaJuego(new PartidaTateti().nombre).subscribe(partidas => this.listadoParaCompartir = partidas);
  }

  ngOnInit(): void {
  }

}
