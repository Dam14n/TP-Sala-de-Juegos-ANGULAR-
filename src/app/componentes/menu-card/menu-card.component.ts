import { Component, OnInit } from '@angular/core';
import { Juego } from './../../clases/Juego';
import { JuegoService } from './../../servicios/juego-service.service';
@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent implements OnInit {

  private juegos: Array<Juego>;

  constructor(private juegoService: JuegoService) {
    this.juegos = juegoService.obtenerJuegos();
  }

  ngOnInit() { }

}
