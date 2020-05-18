import { Component, OnInit } from '@angular/core';
import { Partida } from '../../clases/Partida';
import { PartidaPiedraPapelTijera } from '../../clases/Partida-piedra-papel-tijera';
import { PartidaService } from '../../servicios/partida.service';

@Component({
  selector: 'app-ppt-mas-listado',
  templateUrl: './ppt-mas-listado.component.html',
  styleUrls: ['./ppt-mas-listado.component.css']
})
export class PptMasListadoComponent implements OnInit {

  public listadoParaCompartir: Array<Partida>;

  constructor(private partidaService: PartidaService) {
    this.partidaService.obtenerPartidasParaJuego(new PartidaPiedraPapelTijera().nombre).subscribe(partidas => this.listadoParaCompartir = partidas);
  }

  ngOnInit(): void {
  }

}
