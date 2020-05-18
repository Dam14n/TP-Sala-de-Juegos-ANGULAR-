import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth-service.service';
import { PartidaService } from '../../servicios/partida.service';
import { PartidaAnagrama } from './../../clases/Partida-anagrama';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {
  partida: PartidaAnagrama;
  ocultarVerificar: boolean;
  tiempo: number;
  repetidor: any;
  private readonly DEFAULT_TIME = 5;

  ngOnInit() {
    this.partida.iniciarPartida();
  }

  constructor(private usuarioService: AuthService, private partidaService: PartidaService) {
    this.ocultarVerificar = true;
    this.tiempo = this.DEFAULT_TIME;
    this.partida = new PartidaAnagrama(undefined, undefined, this.usuarioService.obtenerUsuarioActual().usuario);
    console.info('Inicio agilidad');
  }

  iniciarPartida() {
    this.partida = new PartidaAnagrama();
    this.partida.iniciarPartida();
    console.log('Respuesta palabra: ' + this.partida.palabra);
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
    clearInterval(this.repetidor);
    this.ocultarVerificar = true;
    this.tiempo = this.DEFAULT_TIME;
    this.partidaService.guardarPartida(this.partida);
    this.partida.palabraIngresada = '';
  }

}
