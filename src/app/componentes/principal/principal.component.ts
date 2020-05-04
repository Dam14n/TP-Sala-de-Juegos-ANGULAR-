import { OpcionMenu } from './../../clases/OpcionMenu';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  opciones: Array<any>;

  constructor() {
    this.opciones = new Array<any>();
    this.crearOpciones();
  }

  ngOnInit() {
  }

  crearOpciones() {
    const opcionJuegos = new OpcionMenu('Juegos', 'El método lúdico es un conjunto de estrategias diseñadas para crear un ambiente de armonía en los estudiantes que están inmersos en el proceso de aprendizaje. Este método busca que los alumnos se apropien de los temas impartidos por los docentes utilizando el juego.', './assets/imagenes/saladejuegos.png', '/Juegos');
    const opcionListadoResultados = new OpcionMenu('Listados de resultados', 'Los listados de los resultados con ordenamiento y busqueda.', './assets/imagenes/listado.jpg', '/Listado');
    const opcionConfiguracion = new OpcionMenu('Configuracion', 'Ajustes de la aplicacion y los métodos de autentificación.', './assets/imagenes/Configuracion.png', '/Juegos');
    const opcionListadoJugadores = new OpcionMenu('Jugadores', 'Listado de jugadores.', './assets/imagenes/jugadores.png', '/Jugadores');
    this.opciones.push(opcionJuegos, opcionListadoResultados, opcionConfiguracion, opcionListadoJugadores);
  }

}
