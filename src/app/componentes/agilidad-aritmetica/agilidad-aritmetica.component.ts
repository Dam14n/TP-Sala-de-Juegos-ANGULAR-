import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { PartidaAgilidad } from '../../clases/Partida-agilidad';

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
  @Output() enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  nuevoJuego: PartidaAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor: any;
  private subscription: Subscription;
  private readonly DEFAULT_TIME = 5;

  ngOnInit() {
  }

  constructor() {
    this.ocultarVerificar = true;
    this.Tiempo = this.DEFAULT_TIME;
    this.nuevoJuego = new PartidaAgilidad();
    console.info('Inicio agilidad');
  }

  NuevoJuego() {
    this.ocultarVerificar = false;
    this.repetidor = setInterval(() => {
      this.Tiempo--;
      console.log('llego', this.Tiempo);
      if (this.Tiempo === 0) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar = true;
        this.Tiempo = this.DEFAULT_TIME;
      }
    }, 900);

  }
  verificar() {
    this.ocultarVerificar = false;
    clearInterval(this.repetidor);
  }

}
