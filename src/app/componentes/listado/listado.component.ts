import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartidaService } from '../../servicios/partida-service.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;
  miServicioJuego: PartidaService;

  constructor(private route: ActivatedRoute, private router: Router, servicioJuego: PartidaService) {
    this.miServicioJuego = servicioJuego;
  }

  ngOnInit() { }

  llamaService() {
    this.listadoParaCompartir = this.miServicioJuego.listar();
  }

  llamaServicePromesa() {
    this.miServicioJuego.listarPromesa().then((listado) => {
      this.listadoParaCompartir = listado;
    });
  }

  navegarA(link: string) {
    this.router.navigate([link]);
  }
}
