import { Component, OnInit } from '@angular/core';
import { Partida } from '../../clases/Partida';
import { PartidaAnagrama } from '../../clases/Partida-anagrama';
import { PartidaService } from '../../servicios/partida.service';

@Component({
  selector: 'app-anagrama-mas-listado',
  templateUrl: './anagrama-mas-listado.component.html',
  styleUrls: ['./anagrama-mas-listado.component.css']
})
export class AnagramaMasListadoComponent implements OnInit {
  public listadoParaCompartir: Array<Partida>;

  constructor(private partidaService: PartidaService) {
    this.partidaService.obtenerPartidasParaJuego(new PartidaAnagrama().nombre).subscribe(partidas => this.listadoParaCompartir = partidas);
  }

  ngOnInit(): void {
  }

}
