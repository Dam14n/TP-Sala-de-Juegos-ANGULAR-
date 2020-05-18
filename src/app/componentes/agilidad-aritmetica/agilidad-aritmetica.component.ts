import { Component, OnInit } from '@angular/core';
import { PartidaAgilidad } from '../../clases/Partida-agilidad';
import { AuthService } from '../../servicios/auth-service.service';
import { PartidaService } from '../../servicios/partida.service';

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
  partida: PartidaAgilidad;
  ocultarVerificar: boolean;
  tiempo: number;
  repetidor: any;
  private readonly DEFAULT_TIME = 10;

  ngOnInit() {
    this.partida.iniciarPartida();
  }

  constructor(private usuarioService: AuthService, private partidaService: PartidaService) {
    this.ocultarVerificar = true;
    this.tiempo = this.DEFAULT_TIME;
    this.partida = new PartidaAgilidad(undefined, undefined, this.usuarioService.obtenerUsuarioActual().usuario);
    console.info('Inicio agilidad');
  }

  iniciarPartida() {
    this.partida = new PartidaAgilidad(undefined, undefined, this.usuarioService.obtenerUsuarioActual().usuario);
    this.partida.iniciarPartida();
    console.log('Respuesta cuenta: ' + this.partida.operador.calcular(this.partida.primerNumero, this.partida.segundoNumero));
    this.ocultarVerificar = false;
    this.repetidor = setInterval(() => {
      this.tiempo--;
      console.log('llego', this.tiempo);
      if (this.tiempo === 0) {
        this.finalizarPartida();
      }
    }, 900);
  }

  verificar() {
    if (this.partida.verificar()) {
      this.finalizarPartida();
    }
  }

  private finalizarPartida() {
    this.partidaService.guardarPartida(this.partida);
    clearInterval(this.repetidor);
    this.ocultarVerificar = true;
    this.tiempo = this.DEFAULT_TIME;
    this.partida.numeroIngresado = 0;
  }
}
