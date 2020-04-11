import { Injectable } from '@angular/core';
import { Partida } from '../clases/Partida';
import { PartidaAdivina } from '../clases/Partida-adivina';
import { MiHttpService } from './mi-http/mi-http.service';

@Injectable()
export class PartidaService {

  peticion: any;
  constructor(public miHttp: MiHttpService) {
    this.peticion = this.miHttp.httpGetO('http://localhost:3003');
    //    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
  }

  public listar(): Array<Partida> {
    this.miHttp.httpGetP('https://restcountries.eu/rest/v2/all')
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });


    this.peticion
      .subscribe(data => {
        console.log('En listar');
        console.log(data);
      }, err => {
        console.info('error: ', err);
      });

    const miArray: Array<Partida> = new Array<Partida>();

    miArray.push(new PartidaAdivina('Juego 1', false));
    miArray.push(new PartidaAdivina('Pepe', true));
    miArray.push(new PartidaAdivina('Juego 3', false));
    miArray.push(new PartidaAdivina('Juego 4', false));
    miArray.push(new PartidaAdivina('Juego 5', false));
    miArray.push(new PartidaAdivina('Juego 6', false));
    return miArray;
  }

  public listarPromesa(): Promise<Array<Partida>> {
    this.peticion
      .subscribe(data => {
        console.log('En listarPromesa');
        console.log(data);
      }, err => {
        console.log(err);
      });
    const promesa: Promise<Array<Partida>> = new Promise((resolve, reject) => {
      const miArray: Array<Partida> = new Array<Partida>();
      miArray.push(new PartidaAdivina('JuegoPromesa 1', false, 'promesa'));
      miArray.push(new PartidaAdivina('PepePromesa', true));
      miArray.push(new PartidaAdivina('JuegoPromesa 3', false));
      miArray.push(new PartidaAdivina('JuegoPromesa 4', false));
      miArray.push(new PartidaAdivina('JuegoPromesa 5', false));
      miArray.push(new PartidaAdivina('JuegoPromesa 6', false));
      resolve(miArray);
    });

    return promesa;
  }

}
