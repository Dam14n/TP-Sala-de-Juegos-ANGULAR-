import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JugadoresService } from '../../servicios/jugadores.service';
@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.css']
})
export class JugadoresListadoComponent implements OnInit {
  listado: any;
  miJugadoresServicio: JugadoresService;

  constructor(serviceJugadores: JugadoresService, private router: Router) {
    this.miJugadoresServicio = serviceJugadores;
  }

  ngOnInit() { }

  traerTodos() {
    this.miJugadoresServicio.traertodos('jugadores/', 'todos').then(data => {
      this.listado = data;
    });
  }

  traerGanadores() {
    this.miJugadoresServicio.traertodos('jugadores/', 'ganadores').then(data => {
      this.listado = data;
    });
  }
  
  traerPerdedores() {
    this.miJugadoresServicio.traertodos('jugadores/', 'perdedores').then(data => {
      this.listado = data;

    });
  }

  navegarA(link: string) {
    this.router.navigate([link]);
  }

}
