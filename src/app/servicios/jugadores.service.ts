import { Injectable } from '@angular/core';
@Injectable()
export class JugadoresService {

  //peticion:any;
  constructor() {
    // this.peticion = this.miHttp.traerJugadores();
    //    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
  }


  jugadoresFiltrados: any;

  traertodos(ruta: string, filtro: string): Promise<any> {
    // return this.miHttp.traerJugadores(ruta).then(jugadores => {
    //   console.info('jugadores service', jugadores);

    //   this.jugadoresFiltrados = jugadores;
    //   let ganador: boolean;
    //   ganador = filtro === 'ganadores';

    //   this.jugadoresFiltrados = this.jugadoresFiltrados.filter(unJugador => unJugador.gano === ganador || filtro === 'todos');
    //   return this.jugadoresFiltrados;
    // })
    //   .catch(errror => {
    //     console.log('error');
    //     return this.jugadoresFiltrados;
    //   });
    return new Promise((resolve, reject) => { });
  }

}
