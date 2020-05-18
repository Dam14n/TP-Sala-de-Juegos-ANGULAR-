import { Component, OnInit } from '@angular/core';
import { Partida } from '../../clases/Partida';
import { PartidaMemotest } from '../../clases/partida-memotest';
import { PartidaService } from '../../servicios/partida.service';

@Component({
  selector: 'app-memotest-mas-listado',
  templateUrl: './memotest-mas-listado.component.html',
  styleUrls: ['./memotest-mas-listado.component.css']
})
export class MemotestMasListadoComponent implements OnInit {

  public listadoParaCompartir: Array<Partida>;

  constructor(private partidaService: PartidaService) {
    this.partidaService.obtenerPartidasParaJuego(new PartidaMemotest().nombre).subscribe(partidas => this.listadoParaCompartir = partidas);
  }

  ngOnInit(): void {
  }

}
