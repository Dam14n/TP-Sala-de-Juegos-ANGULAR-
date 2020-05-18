import { Component, OnInit } from '@angular/core';
import { Partida } from '../../clases/Partida';
import { PartidaAgilidad } from '../../clases/Partida-agilidad';
import { PartidaService } from '../../servicios/partida.service';
@Component({
  selector: 'app-agilidad-mas-listado',
  templateUrl: './agilidad-mas-listado.component.html',
  styleUrls: ['./agilidad-mas-listado.component.css']
})
export class AgilidadMasListadoComponent implements OnInit {
  public listadoParaCompartir: Array<Partida>;

  constructor(private partidaService: PartidaService) {
    this.partidaService.obtenerPartidasParaJuego(new PartidaAgilidad().nombre).subscribe(partidas => this.listadoParaCompartir = partidas);
  }

  ngOnInit() {
  }

}
