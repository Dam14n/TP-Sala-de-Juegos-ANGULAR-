import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { PartidaService } from './partida.service';
@Injectable()
export class JugadoresService {

  constructor(private partidaService: PartidaService) {
  }

  traertodos(ruta: string, filtro: string): Promise<any> {
    return this.partidaService.obtenerPartidas()
      .map(partidas => {
        let ganador: boolean;
        ganador = filtro === 'ganadores';
        return partidas.filter(partida => partida.gano === ganador || filtro === 'todos');
      }).pipe(take(1)).toPromise();
  }

}
